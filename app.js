(function () {
  const STORAGE_ROUTE_KEY = "plantatil.routes.v1";
  const STORAGE_META_KEY = "plantatil.tripMeta.v1";
  const STORAGE_DONE_KEY = "plantatil.completedStops.v1";
  const STORAGE_TRIED_KEY = "plantatil.triedFood.v1";

  const state = {
    cityId: "rome",
    dayId: "day-1",
    role: "participant",
    cities: loadCities(),
    routes: loadRoutes(),
    completedStops: loadJson(STORAGE_DONE_KEY, {}),
    triedFood: loadJson(STORAGE_TRIED_KEY, {}),
    expandedStops: {},
    initializedRouteViews: {}
  };

  const els = {
    citySelect: document.querySelector("#citySelect"),
    daySelect: document.querySelector("#daySelect"),
    roleSelect: document.querySelector("#roleSelect"),
    exportDataButton: document.querySelector("#exportDataButton"),
    resetDataButton: document.querySelector("#resetDataButton"),
    routeContext: document.querySelector("#routeContext"),
    routeList: document.querySelector("#routeList"),
    emptyState: document.querySelector("#emptyState"),
    addDayButton: document.querySelector("#addDayButton"),
    addStopButton: document.querySelector("#addStopButton"),
    rolePanel: document.querySelector("#rolePanel"),
    stopCount: document.querySelector("#stopCount"),
    completedCount: document.querySelector("#completedCount"),
    dayWindow: document.querySelector("#dayWindow"),
    stopDialog: document.querySelector("#stopDialog"),
    stopForm: document.querySelector("#stopForm"),
    stopDialogTitle: document.querySelector("#stopDialogTitle"),
    dayDialog: document.querySelector("#dayDialog"),
    dayForm: document.querySelector("#dayForm"),
    foodDialog: document.querySelector("#foodDialog"),
    foodForm: document.querySelector("#foodForm"),
    foodDialogTitle: document.querySelector("#foodDialogTitle"),
    saveFoodButton: document.querySelector("#saveFoodButton"),
    closeDayDialog: document.querySelector("#closeDayDialog"),
    cancelDayDialog: document.querySelector("#cancelDayDialog"),
    closeStopDialog: document.querySelector("#closeStopDialog"),
    cancelStopDialog: document.querySelector("#cancelStopDialog"),
    closeFoodDialog: document.querySelector("#closeFoodDialog"),
    cancelFoodDialog: document.querySelector("#cancelFoodDialog")
  };

  init();

  function init() {
    renderCityOptions();
    renderDayOptions();
    bindEvents();
    render();
  }

  function bindEvents() {
    els.citySelect.addEventListener("change", () => {
      state.cityId = els.citySelect.value;
      const city = getSelectedCity();
      state.dayId = city.days[0].id;
      renderDayOptions();
      render();
    });

    els.daySelect.addEventListener("change", () => {
      state.dayId = els.daySelect.value;
      render();
    });

    els.roleSelect.addEventListener("change", () => {
      state.role = els.roleSelect.value;
      render();
    });

    els.exportDataButton.addEventListener("click", exportDataJs);

    els.resetDataButton.addEventListener("click", () => {
      if (!confirm("Demo veriye dönülsün mü? Tüm yerel değişiklikler silinir.")) {
        return;
      }
      localStorage.removeItem(STORAGE_ROUTE_KEY);
      localStorage.removeItem(STORAGE_META_KEY);
      localStorage.removeItem(STORAGE_DONE_KEY);
      localStorage.removeItem(STORAGE_TRIED_KEY);
      state.cities = structuredClone(DEMO_TRIP_DATA.cities);
      state.routes = structuredClone(DEMO_TRIP_DATA.routes);
      state.completedStops = {};
      state.triedFood = {};
      state.expandedStops = {};
      state.initializedRouteViews = {};
      saveRoutes();
      render();
    });

    els.addDayButton.addEventListener("click", openDayDialog);
    els.addStopButton.addEventListener("click", () => openStopDialog());
    els.dayForm.addEventListener("submit", saveDayFromForm);
    els.stopForm.addEventListener("submit", saveStopFromForm);
    els.foodForm.addEventListener("submit", saveFoodFromForm);
    els.closeDayDialog.addEventListener("click", () => els.dayDialog.close());
    els.cancelDayDialog.addEventListener("click", () => els.dayDialog.close());
    els.closeStopDialog.addEventListener("click", () => els.stopDialog.close());
    els.cancelStopDialog.addEventListener("click", () => els.stopDialog.close());
    els.closeFoodDialog.addEventListener("click", () => els.foodDialog.close());
    els.cancelFoodDialog.addEventListener("click", () => els.foodDialog.close());

    els.routeList.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (button) {
        const stopId = button.dataset.stopId;
        const foodId = button.dataset.foodId;

        if (button.dataset.action === "toggle-details") toggleStopDetails(stopId);
        if (button.dataset.action === "navigate") openNavigation(stopId);
        if (button.dataset.action === "toggle-complete") toggleCompleted(stopId);
        if (button.dataset.action === "next") jumpToNextStop(stopId);
        if (button.dataset.action === "edit-stop") openStopDialog(getStop(stopId));
        if (button.dataset.action === "delete-stop") deleteStop(stopId);
        if (button.dataset.action === "add-food") openFoodDialog(stopId);
        if (button.dataset.action === "edit-food") openFoodDialog(stopId, findFood(foodId));
        if (button.dataset.action === "delete-food") deleteFood(foodId);
        if (button.dataset.action === "toggle-food") toggleTriedFood(foodId);
        if (button.dataset.action === "food-map") openFoodMap(foodId);
        return;
      }

      const summary = event.target.closest(".stop-summary");
      if (summary) {
        toggleStopDetails(summary.closest(".stop-card").dataset.stopId);
      }
    });
  }

  function render() {
    const routeKey = getRouteKey();
    const stops = getCurrentStops();
    const city = getSelectedCity();
    const day = city.days.find((item) => item.id === state.dayId);
    const nextStop = findNextStop(stops);
    initializeExpandedStops(routeKey, nextStop);

    els.routeContext.textContent = `${city.name} / ${day.label}`;
    els.roleSelect.value = state.role;
    els.stopCount.textContent = stops.length;
    els.completedCount.textContent = stops.filter((stop) => state.completedStops[stop.id]).length;
    els.dayWindow.textContent = stops.length ? `${stops[0].time}-${stops[stops.length - 1].time}` : "-";
    els.emptyState.hidden = stops.length > 0;
    els.routeList.innerHTML = stops.map((stop) => renderStop(stop, nextStop)).join("");
    els.addDayButton.classList.toggle("hidden", state.role !== "admin");
    els.addStopButton.classList.toggle("hidden", state.role !== "admin");
    renderRolePanel();
  }

  function renderCityOptions() {
    els.citySelect.innerHTML = state.cities
      .map((city) => `<option value="${city.id}">${city.name}</option>`)
      .join("");
    els.citySelect.value = state.cityId;
  }

  function renderDayOptions() {
    const city = getSelectedCity();
    els.daySelect.innerHTML = city.days
      .map((day, index) => `<option value="${day.id}">Gun ${index + 1} - ${day.label}</option>`)
      .join("");
    els.daySelect.value = state.dayId;
  }

  function renderRolePanel() {
    const panels = {
      admin: {
        title: "Admin modu",
        text: "Ana rota kartlarını ekleyebilir, düzenleyebilir ve silebilirsin. Değişiklikler bu cihazda localStorage'a kaydedilir."
      },
      foodEditor: {
        title: "Lezzet Editörü modu",
        text: "Mevcut rota kartlarına yemek, kahve, dondurma, tatlı ve alışveriş önerileri ekleyebilirsin."
      },
      participant: {
        title: "Katılımcı modu",
        text: "Rotayı takip edebilir, konumu açabilir ve kendi tamamlandı işaretlerini tutabilirsin."
      }
    };
    const panel = panels[state.role];
    els.rolePanel.innerHTML = `<h2>${panel.title}</h2><p>${panel.text}</p>`;
  }

  function renderStop(stop, nextStop) {
    const isCompleted = Boolean(state.completedStops[stop.id]);
    const status = getTimeStatus(stop, nextStop, isCompleted);
    const isExpanded = Boolean(state.expandedStops[stop.id]);
    const adminActions = state.role === "admin"
      ? `<div class="admin-actions">
          <button class="secondary-button" data-action="edit-stop" data-stop-id="${stop.id}" type="button">Düzenle</button>
          <button class="danger-button" data-action="delete-stop" data-stop-id="${stop.id}" type="button">Sil</button>
        </div>`
      : "";
    const foodEditorAction = state.role === "foodEditor"
      ? `<button class="secondary-button" data-action="add-food" data-stop-id="${stop.id}" type="button">+ Lezzet önerisi</button>`
      : "";

    return `
      <article class="stop-card ${status.cardClass} ${isCompleted ? "is-completed" : ""} ${isExpanded ? "is-expanded" : ""}" data-stop-id="${stop.id}">
        <div class="stop-summary">
          <div class="stop-main">
            <span class="time">${stop.time}</span>
            <div class="stop-title-block">
              <h3>${escapeHtml(stop.title)}</h3>
              <div class="stop-meta">
                <span class="tag">${escapeHtml(stop.type)}</span>
                <span class="tag soft">${stop.priority}</span>
                <span class="tag soft">${escapeHtml(stop.duration || "-")}</span>
                <span class="tag status-tag">${status.label}</span>
              </div>
            </div>
          </div>
          <div class="compact-actions">
            <button class="primary-button compact-button" data-action="navigate" data-stop-id="${stop.id}" type="button">Konumu Aç</button>
            <button class="secondary-button compact-button" data-action="toggle-complete" data-stop-id="${stop.id}" type="button">
              ${isCompleted ? "Tamamlandı Kaldır" : "Tamamladım"}
            </button>
          </div>
        </div>
        <div class="stop-details" ${isExpanded ? "" : "hidden"}>
          <p>${escapeHtml(stop.description)}</p>
          <div class="facts">
            <div class="fact"><strong>Adres:</strong> ${escapeHtml(stop.address || "-")}</div>
            <div class="fact"><strong>Bilet:</strong> ${stop.ticketRequired ? "Gerekli" : "Gerekli değil"}</div>
            <div class="fact"><strong>Rezervasyon:</strong> ${stop.reservationRequired ? "Gerekli" : "Gerekli değil"}</div>
            ${stop.ticketNote ? `<div class="fact"><strong>Bilet notu:</strong> ${escapeHtml(stop.ticketNote)}</div>` : ""}
            ${stop.transportNote ? `<div class="fact"><strong>Ulasim notu:</strong> ${escapeHtml(stop.transportNote)}</div>` : ""}
          </div>
          ${renderFoodSuggestions(stop.foodSuggestions || [], stop.id)}
          ${foodEditorAction ? `<div class="food-actions">${foodEditorAction}</div>` : ""}
          ${adminActions}
          <div class="detail-actions">
            <button class="ghost-button micro-button" data-action="next" data-stop-id="${stop.id}" type="button">Sonraki durağa geç</button>
          </div>
        </div>
      </article>
    `;
  }

  function renderFoodSuggestions(items, stopId) {
    if (!items.length) {
      return `<div class="food-list"><p>Lezzet önerisi henüz yok.</p></div>`;
    }

    return `
      <div class="food-list">
        ${items.map((item) => {
          const tried = Boolean(state.triedFood[item.id]);
          const tryButton = state.role === "participant"
            ? `<button class="secondary-button" data-action="toggle-food" data-food-id="${item.id}" type="button">
                ${tried ? "Tamamlandı Kaldır" : "Tamamladım"}
              </button>`
            : "";
          const editorActions = state.role === "foodEditor"
            ? `<button class="secondary-button" data-action="edit-food" data-stop-id="${stopId}" data-food-id="${item.id}" type="button">Düzenle</button>
               <button class="danger-button" data-action="delete-food" data-food-id="${item.id}" type="button">Sil</button>`
            : "";
          return `
            <div class="food-item ${tried ? "is-tried" : ""}">
              <span class="tag">${escapeHtml(item.type)}</span>
              <span class="tag soft">${escapeHtml(item.price || "-")}</span>
              <h4>${escapeHtml(item.title)}</h4>
              <p>${escapeHtml(item.note || "")}</p>
              <div class="food-actions">
                <button class="ghost-button" data-action="food-map" data-food-id="${item.id}" type="button">Haritada Aç</button>
                ${tryButton}
                ${editorActions}
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  function openStopDialog(stop) {
    const isEdit = Boolean(stop);
    const sourceRouteKey = isEdit ? findRouteKeyByStopId(stop.id) : getRouteKey();
    const city = getSelectedCity();
    els.stopDialogTitle.textContent = isEdit ? "Durağı düzenle" : "Yeni durak ekle";
    document.querySelector("#stopId").value = stop?.id || "";
    document.querySelector("#stopSourceRouteKey").value = sourceRouteKey || getRouteKey();
    document.querySelector("#stopTime").value = stop?.time || "09:00";
    document.querySelector("#stopTitle").value = stop?.title || "";
    document.querySelector("#stopDayId").innerHTML = city.days
      .map((day, index) => `<option value="${day.id}">Gun ${index + 1} - ${day.label}</option>`)
      .join("");
    document.querySelector("#stopDayId").value = sourceRouteKey ? sourceRouteKey.split(":")[1] : state.dayId;
    document.querySelector("#stopType").value = stop?.type || "gezi";
    document.querySelector("#stopDuration").value = stop?.duration || "";
    document.querySelector("#stopAddress").value = stop?.address || "";
    document.querySelector("#stopMapLink").value = stop?.mapLink || "";
    document.querySelector("#stopDescription").value = stop?.description || "";
    document.querySelector("#stopTicketRequired").value = String(Boolean(stop?.ticketRequired));
    document.querySelector("#stopReservationRequired").value = String(Boolean(stop?.reservationRequired));
    document.querySelector("#stopPriority").value = stop?.priority || "mutlaka";
    els.stopDialog.showModal();
  }

  function saveStopFromForm(event) {
    event.preventDefault();
    const existingId = document.querySelector("#stopId").value;
    const sourceRouteKey = document.querySelector("#stopSourceRouteKey").value || getRouteKey();
    const targetDayId = document.querySelector("#stopDayId").value || state.dayId;
    const targetRouteKey = `${state.cityId}:${targetDayId}`;
    const existingStop = existingId ? findStopById(existingId) : null;
    const stop = {
      id: existingId || `stop-${Date.now()}`,
      time: document.querySelector("#stopTime").value,
      title: document.querySelector("#stopTitle").value.trim(),
      type: document.querySelector("#stopType").value,
      duration: document.querySelector("#stopDuration").value.trim(),
      address: document.querySelector("#stopAddress").value.trim(),
      mapLink: document.querySelector("#stopMapLink").value.trim(),
      description: document.querySelector("#stopDescription").value.trim(),
      ticketRequired: document.querySelector("#stopTicketRequired").value === "true",
      reservationRequired: document.querySelector("#stopReservationRequired").value === "true",
      priority: document.querySelector("#stopPriority").value,
      foodSuggestions: existingStop?.foodSuggestions || [],
      ticketNote: existingStop?.ticketNote,
      transportNote: existingStop?.transportNote
    };

    if (existingId) {
      removeStopFromAllRoutes(existingId);
    }

    const stops = getStopsByRouteKey(targetRouteKey);
    const index = stops.findIndex((item) => item.id === stop.id);
    if (index >= 0) {
      stops[index] = stop;
    } else {
      stops.push(stop);
    }
    sortStops(stops);
    saveRoutes();
    els.stopDialog.close();
    state.dayId = targetDayId;
    renderDayOptions();
    render();
  }

  function openFoodDialog(stopId, food) {
    const isEdit = Boolean(food);
    els.foodDialogTitle.textContent = isEdit
      ? `${food.title} önerisini düzenle`
      : "Lezzet önerisi ekle";
    els.saveFoodButton.textContent = isEdit ? "Öneriyi Güncelle" : "Öneri Ekle";
    document.querySelector("#foodStopId").value = stopId;
    document.querySelector("#foodId").value = food?.id || "";
    document.querySelector("#foodType").value = food?.type || "yemek";
    document.querySelector("#foodPrice").value = food?.price || "";
    document.querySelector("#foodTitle").value = food?.title || "";
    document.querySelector("#foodMapLink").value = food?.mapLink || "";
    document.querySelector("#foodNote").value = food?.note || "";
    els.foodDialog.showModal();
  }

  function saveFoodFromForm(event) {
    event.preventDefault();
    const stop = getStop(document.querySelector("#foodStopId").value);
    if (!stop) return;

    const existingId = document.querySelector("#foodId").value;
    const food = {
      id: existingId || `food-${Date.now()}`,
      type: document.querySelector("#foodType").value,
      price: document.querySelector("#foodPrice").value.trim(),
      title: document.querySelector("#foodTitle").value.trim(),
      mapLink: document.querySelector("#foodMapLink").value.trim(),
      note: document.querySelector("#foodNote").value.trim()
    };

    stop.foodSuggestions = stop.foodSuggestions || [];
    const index = stop.foodSuggestions.findIndex((item) => item.id === existingId);
    if (index >= 0) {
      stop.foodSuggestions[index] = food;
    } else {
      stop.foodSuggestions.push(food);
    }
    saveRoutes();
    els.foodDialog.close();
    render();
  }

  function deleteFood(foodId) {
    const match = findFoodWithStop(foodId);
    if (!match) return;
    if (!confirm("Bu öneriyi silmek istediğine emin misin?")) return;

    match.stop.foodSuggestions = match.stop.foodSuggestions.filter((item) => item.id !== foodId);
    delete state.triedFood[foodId];
    saveRoutes();
    saveJson(STORAGE_TRIED_KEY, state.triedFood);
    render();
  }

  function deleteStop(stopId) {
    if (!confirm("Bu durak silinsin mi?")) return;
    state.routes[getRouteKey()] = getCurrentStops().filter((stop) => stop.id !== stopId);
    delete state.completedStops[stopId];
    delete state.expandedStops[stopId];
    saveRoutes();
    saveJson(STORAGE_DONE_KEY, state.completedStops);
    render();
  }

  function exportDataJs() {
    const exportedData = {
      ...DEMO_TRIP_DATA,
      cities: state.cities,
      routes: state.routes
    };
    const content = `const DEMO_TRIP_DATA = ${JSON.stringify(exportedData, null, 2)};\n`;
    const blob = new Blob([content], { type: "text/javascript;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "data.js";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function openNavigation(stopId) {
    const stop = getStop(stopId);
    if (!stop) return;
    const url = stop.mapLink || buildMapSearch(stop.title, stop.address);
    window.open(url, "_blank", "noopener");
  }

  function openFoodMap(foodId) {
    const food = findFood(foodId);
    if (!food) return;
    window.open(food.mapLink || buildMapSearch(food.title, ""), "_blank", "noopener");
  }

  function toggleCompleted(stopId) {
    state.completedStops[stopId] = !state.completedStops[stopId];
    if (!state.completedStops[stopId]) delete state.completedStops[stopId];
    saveJson(STORAGE_DONE_KEY, state.completedStops);
    render();
  }

  function toggleTriedFood(foodId) {
    state.triedFood[foodId] = !state.triedFood[foodId];
    if (!state.triedFood[foodId]) delete state.triedFood[foodId];
    saveJson(STORAGE_TRIED_KEY, state.triedFood);
    render();
  }

  function initializeExpandedStops(routeKey, nextStop) {
    if (state.initializedRouteViews[routeKey]) return;
    if (nextStop) {
      state.expandedStops[nextStop.id] = true;
    }
    state.initializedRouteViews[routeKey] = true;
  }

  function toggleStopDetails(stopId) {
    state.expandedStops[stopId] = !state.expandedStops[stopId];
    if (!state.expandedStops[stopId]) {
      delete state.expandedStops[stopId];
    }
    render();
  }

  function jumpToNextStop(stopId) {
    const stops = getCurrentStops();
    const index = stops.findIndex((stop) => stop.id === stopId);
    const next = stops[index + 1];
    if (!next) return;
    state.expandedStops[next.id] = true;
    render();
    document.querySelector(`[data-stop-id="${next.id}"]`)?.closest(".stop-card")?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }

  function findNextStop(stops) {
    const nowMinutes = new Date().getHours() * 60 + new Date().getMinutes();
    return stops.find((stop) => toMinutes(stop.time) >= nowMinutes && !state.completedStops[stop.id])
      || stops.find((stop) => !state.completedStops[stop.id])
      || null;
  }

  function getTimeStatus(stop, nextStop, isCompleted) {
    if (isCompleted) {
      return { label: "tamamlandı", cardClass: "is-done" };
    }
    if (nextStop?.id === stop.id) {
      return { label: "sıradaki durak", cardClass: "is-next" };
    }
    if (toMinutes(stop.time) < (new Date().getHours() * 60 + new Date().getMinutes())) {
      return { label: "geçmiş durak", cardClass: "is-past" };
    }
    return { label: "yaklaşan", cardClass: "is-upcoming" };
  }

  function minutesUntil(time) {
    return toMinutes(time) - (new Date().getHours() * 60 + new Date().getMinutes());
  }

  function getSelectedCity() {
    return state.cities.find((city) => city.id === state.cityId);
  }

  function getRouteKey() {
    return `${state.cityId}:${state.dayId}`;
  }

  function getCurrentStops() {
    const key = getRouteKey();
    if (!state.routes[key]) state.routes[key] = [];
    return state.routes[key];
  }

  function getStopsByRouteKey(routeKey) {
    if (!state.routes[routeKey]) state.routes[routeKey] = [];
    return state.routes[routeKey];
  }

  function getStop(stopId) {
    return getCurrentStops().find((stop) => stop.id === stopId);
  }

  function findStopById(stopId) {
    for (const stops of Object.values(state.routes)) {
      const found = stops.find((stop) => stop.id === stopId);
      if (found) return found;
    }
    return null;
  }

  function findRouteKeyByStopId(stopId) {
    for (const [routeKey, stops] of Object.entries(state.routes)) {
      if (stops.some((stop) => stop.id === stopId)) return routeKey;
    }
    return null;
  }

  function removeStopFromRoute(routeKey, stopId) {
    const stops = getStopsByRouteKey(routeKey);
    const index = stops.findIndex((stop) => stop.id === stopId);
    if (index >= 0) {
      stops.splice(index, 1);
    }
  }

  function removeStopFromAllRoutes(stopId) {
    Object.keys(state.routes).forEach((routeKey) => {
      removeStopFromRoute(routeKey, stopId);
    });
  }

  function findFood(foodId) {
    const match = findFoodWithStop(foodId);
    return match?.food || null;
  }

  function findFoodWithStop(foodId) {
    for (const stops of Object.values(state.routes)) {
      for (const stop of stops) {
        const found = (stop.foodSuggestions || []).find((item) => item.id === foodId);
        if (found) return { food: found, stop };
      }
    }
    return null;
  }

  function sortStops(stops) {
    stops.sort((a, b) => toMinutes(a.time) - toMinutes(b.time));
  }

  function toMinutes(time) {
    const [hour, minute] = time.split(":").map(Number);
    return hour * 60 + minute;
  }

  function buildMapSearch(title, address) {
    const query = encodeURIComponent(`${title} ${address || ""}`.trim());
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  }

  function loadRoutes() {
    const saved = localStorage.getItem(STORAGE_ROUTE_KEY);
    if (saved) {
      const localRoutes = JSON.parse(saved);
      normalizeRoutes(localRoutes);
      localStorage.setItem(STORAGE_ROUTE_KEY, JSON.stringify(localRoutes));
      return localRoutes;
    }
    const demo = structuredClone(DEMO_TRIP_DATA.routes);
    normalizeRoutes(demo);
    localStorage.setItem(STORAGE_ROUTE_KEY, JSON.stringify(demo));
    return demo;
  }

  function loadCities() {
    const saved = localStorage.getItem(STORAGE_META_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
    const demo = structuredClone(DEMO_TRIP_DATA.cities);
    localStorage.setItem(STORAGE_META_KEY, JSON.stringify(demo));
    return demo;
  }

  function normalizeRoutes(routes) {
    const lastSeenRouteKeyByStopId = {};

    Object.entries(routes).forEach(([routeKey, stops]) => {
      stops.forEach((stop) => {
        lastSeenRouteKeyByStopId[stop.id] = routeKey;
      });
    });

    Object.entries(routes).forEach(([routeKey, stops]) => {
      const uniqueStops = [];
      const seenInRoute = new Set();

      stops.forEach((stop) => {
        if (lastSeenRouteKeyByStopId[stop.id] !== routeKey) return;
        if (seenInRoute.has(stop.id)) return;
        seenInRoute.add(stop.id);
        uniqueStops.push(stop);
      });

      routes[routeKey] = uniqueStops;
      sortStops(routes[routeKey]);
    });
  }

  function loadJson(key, fallback) {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  }

  function saveRoutes() {
    saveJson(STORAGE_ROUTE_KEY, state.routes);
  }

  function saveCities() {
    saveJson(STORAGE_META_KEY, state.cities);
  }

  function openDayDialog() {
    const city = getSelectedCity();
    if (!city) return;
    document.querySelector("#dayLabel").value = `Gün ${city.days.length + 1}`;
    els.dayDialog.showModal();
  }

  function saveDayFromForm(event) {
    event.preventDefault();
    const city = getSelectedCity();
    if (!city) return;

    const label = document.querySelector("#dayLabel").value.trim();
    if (!label) return;

    const nextIndex = city.days.reduce((max, day) => {
      const match = /^day-(\d+)$/.exec(day.id);
      return match ? Math.max(max, Number(match[1])) : max;
    }, 0) + 1;
    const dayId = `day-${nextIndex}`;

    city.days.push({ id: dayId, label });
    state.dayId = dayId;
    state.routes[getRouteKey()] = state.routes[getRouteKey()] || [];
    saveCities();
    saveRoutes();
    els.dayDialog.close();
    renderDayOptions();
    render();
  }

  function addDay() {
    const city = getSelectedCity();
    if (!city) return;

    const input = prompt("Yeni gün adı ne olsun?", `Gün ${city.days.length + 1}`);
    const label = input?.trim();
    if (!label) return;

    const nextIndex = city.days.reduce((max, day) => {
      const match = /^day-(\d+)$/.exec(day.id);
      return match ? Math.max(max, Number(match[1])) : max;
    }, 0) + 1;
    const dayId = `day-${nextIndex}`;

    city.days.push({ id: dayId, label });
    state.dayId = dayId;
    state.routes[getRouteKey()] = state.routes[getRouteKey()] || [];
    saveCities();
    saveRoutes();
    renderDayOptions();
    render();
  }

  function saveJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
})();

