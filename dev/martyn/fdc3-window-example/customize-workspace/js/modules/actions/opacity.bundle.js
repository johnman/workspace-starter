/******/ var __webpack_modules__ = ({

/***/ "./client/src/modules/actions/opacity/actions.ts":
/*!*******************************************************!*\
  !*** ./client/src/modules/actions/opacity/actions.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpacityActions": () => (/* binding */ OpacityActions)
/* harmony export */ });
/**
 * Implement the actions.
 */
class OpacityActions {
    /**
     * Initialize the actions passing any helper methods.
     * @param helper Helper methods.
     */
    async initialize(helpers, loggerCreator) {
        this._helpers = helpers;
        this._logger = loggerCreator("OpacityActions");
    }
    /**
     * Get the actions from the module.
     */
    async get(platform) {
        const actionMap = {};
        actionMap["change-opacity"] = async (payload) => {
            if (payload.callerType === this._helpers.callerTypes.CustomButton) {
                this._logger.info("Change Opacity Triggered");
                const browserWindow = platform.Browser.wrapSync(payload.windowIdentity);
                const options = await browserWindow.openfinWindow.getOptions();
                const currentToolbarOptions = options.workspacePlatform
                    .toolbarOptions;
                await browserWindow.openfinWindow.updateOptions({ opacity: 0.7 });
                if (currentToolbarOptions !== undefined && currentToolbarOptions !== null) {
                    const newButtons = await this._helpers.updateToolbarButtons(currentToolbarOptions.buttons, payload.customData.sourceId, payload.customData.replacementId);
                    await browserWindow.replaceToolbarOptions({ buttons: newButtons });
                }
            }
        };
        actionMap["restore-opacity"] = async (payload) => {
            if (payload.callerType === this._helpers.callerTypes.CustomButton) {
                this._logger.info("Restore Opacity Triggered");
                const browserWindow = platform.Browser.wrapSync(payload.windowIdentity);
                const options = await browserWindow.openfinWindow.getOptions();
                const currentToolbarOptions = options.workspacePlatform
                    .toolbarOptions;
                await browserWindow.openfinWindow.updateOptions({ opacity: 1 });
                if (currentToolbarOptions !== undefined && currentToolbarOptions !== null) {
                    const newButtons = await this._helpers.updateToolbarButtons(currentToolbarOptions.buttons, payload.customData.sourceId, payload.customData.replacementId);
                    await browserWindow.replaceToolbarOptions({ buttons: newButtons });
                }
            }
        };
        return actionMap;
    }
}


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************************!*\
  !*** ./client/src/modules/actions/opacity/index.ts ***!
  \*****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actions": () => (/* binding */ actions)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./client/src/modules/actions/opacity/actions.ts");

const actions = new _actions__WEBPACK_IMPORTED_MODULE_0__.OpacityActions();

})();

var __webpack_exports__actions = __webpack_exports__.actions;
export { __webpack_exports__actions as actions };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxDQUFDLENBQUM7aUJBQ25FO2FBQ0Q7UUFDRixDQUFDLENBQUM7UUFFRixPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDO0NBQ0Q7Ozs7Ozs7U0MvRUQ7U0FDQTs7U0FFQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTs7U0FFQTtTQUNBOztTQUVBO1NBQ0E7U0FDQTs7Ozs7VUN0QkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSx5Q0FBeUMsd0NBQXdDO1VBQ2pGO1VBQ0E7VUFDQTs7Ozs7VUNQQTs7Ozs7VUNBQTtVQUNBO1VBQ0E7VUFDQSx1REFBdUQsaUJBQWlCO1VBQ3hFO1VBQ0EsZ0RBQWdELGFBQWE7VUFDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04yQztBQUVwQyxNQUFNLE9BQU8sR0FBRyxJQUFJLG9EQUFjLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtd29ya3NwYWNlLy4vY2xpZW50L3NyYy9tb2R1bGVzL2FjdGlvbnMvb3BhY2l0eS9hY3Rpb25zLnRzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtd29ya3NwYWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtd29ya3NwYWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLXdvcmtzcGFjZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtd29ya3NwYWNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS13b3Jrc3BhY2UvLi9jbGllbnQvc3JjL21vZHVsZXMvYWN0aW9ucy9vcGFjaXR5L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtcblx0QnJvd3NlckNyZWF0ZVdpbmRvd1JlcXVlc3QsXG5cdEN1c3RvbUFjdGlvblBheWxvYWQsXG5cdEN1c3RvbUFjdGlvbnNNYXAsXG5cdFdvcmtzcGFjZVBsYXRmb3JtTW9kdWxlXG59IGZyb20gXCJAb3BlbmZpbi93b3Jrc3BhY2UtcGxhdGZvcm1cIjtcbmltcG9ydCB0eXBlIHsgQWN0aW9uSGVscGVycywgQWN0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9hY3Rpb25zLXNoYXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBMb2dnZXIsIExvZ2dlckNyZWF0b3IgfSBmcm9tIFwiLi4vLi4vLi4vbG9nZ2VyLXNoYXBlc1wiO1xuXG4vKipcbiAqIEltcGxlbWVudCB0aGUgYWN0aW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIE9wYWNpdHlBY3Rpb25zIGltcGxlbWVudHMgQWN0aW9ucyB7XG5cdC8qKlxuXHQgKiBUaGUgaGVscGVyIG1ldGhvZHMgdG8gdXNlLlxuXHQgKi9cblx0cHJpdmF0ZSBfaGVscGVyczogQWN0aW9uSGVscGVycztcblxuXHQvKipcblx0ICogVGhlIGhlbHBlciBtZXRob2RzIHRvIHVzZS5cblx0ICovXG5cdHByaXZhdGUgX2xvZ2dlcjogTG9nZ2VyO1xuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplIHRoZSBhY3Rpb25zIHBhc3NpbmcgYW55IGhlbHBlciBtZXRob2RzLlxuXHQgKiBAcGFyYW0gaGVscGVyIEhlbHBlciBtZXRob2RzLlxuXHQgKi9cblx0cHVibGljIGFzeW5jIGluaXRpYWxpemUoaGVscGVyczogQWN0aW9uSGVscGVycywgbG9nZ2VyQ3JlYXRvcjogTG9nZ2VyQ3JlYXRvcik6IFByb21pc2U8dm9pZD4ge1xuXHRcdHRoaXMuX2hlbHBlcnMgPSBoZWxwZXJzO1xuXHRcdHRoaXMuX2xvZ2dlciA9IGxvZ2dlckNyZWF0b3IoXCJPcGFjaXR5QWN0aW9uc1wiKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGFjdGlvbnMgZnJvbSB0aGUgbW9kdWxlLlxuXHQgKi9cblx0cHVibGljIGFzeW5jIGdldChwbGF0Zm9ybTogV29ya3NwYWNlUGxhdGZvcm1Nb2R1bGUpOiBQcm9taXNlPEN1c3RvbUFjdGlvbnNNYXA+IHtcblx0XHRjb25zdCBhY3Rpb25NYXA6IEN1c3RvbUFjdGlvbnNNYXAgPSB7fTtcblxuXHRcdGFjdGlvbk1hcFtcImNoYW5nZS1vcGFjaXR5XCJdID0gYXN5bmMgKHBheWxvYWQ6IEN1c3RvbUFjdGlvblBheWxvYWQpID0+IHtcblx0XHRcdGlmIChwYXlsb2FkLmNhbGxlclR5cGUgPT09IHRoaXMuX2hlbHBlcnMuY2FsbGVyVHlwZXMuQ3VzdG9tQnV0dG9uKSB7XG5cdFx0XHRcdHRoaXMuX2xvZ2dlci5pbmZvKFwiQ2hhbmdlIE9wYWNpdHkgVHJpZ2dlcmVkXCIpO1xuXHRcdFx0XHRjb25zdCBicm93c2VyV2luZG93ID0gcGxhdGZvcm0uQnJvd3Nlci53cmFwU3luYyhwYXlsb2FkLndpbmRvd0lkZW50aXR5KTtcblx0XHRcdFx0Y29uc3Qgb3B0aW9ucyA9IGF3YWl0IGJyb3dzZXJXaW5kb3cub3BlbmZpbldpbmRvdy5nZXRPcHRpb25zKCk7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRUb29sYmFyT3B0aW9ucyA9IChvcHRpb25zIGFzIEJyb3dzZXJDcmVhdGVXaW5kb3dSZXF1ZXN0KS53b3Jrc3BhY2VQbGF0Zm9ybVxuXHRcdFx0XHRcdC50b29sYmFyT3B0aW9ucztcblx0XHRcdFx0YXdhaXQgYnJvd3NlcldpbmRvdy5vcGVuZmluV2luZG93LnVwZGF0ZU9wdGlvbnMoeyBvcGFjaXR5OiAwLjcgfSk7XG5cdFx0XHRcdGlmIChjdXJyZW50VG9vbGJhck9wdGlvbnMgIT09IHVuZGVmaW5lZCAmJiBjdXJyZW50VG9vbGJhck9wdGlvbnMgIT09IG51bGwpIHtcblx0XHRcdFx0XHRjb25zdCBuZXdCdXR0b25zID0gYXdhaXQgdGhpcy5faGVscGVycy51cGRhdGVUb29sYmFyQnV0dG9ucyhcblx0XHRcdFx0XHRcdGN1cnJlbnRUb29sYmFyT3B0aW9ucy5idXR0b25zLFxuXHRcdFx0XHRcdFx0cGF5bG9hZC5jdXN0b21EYXRhLnNvdXJjZUlkIGFzIHN0cmluZyxcblx0XHRcdFx0XHRcdHBheWxvYWQuY3VzdG9tRGF0YS5yZXBsYWNlbWVudElkIGFzIHN0cmluZ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YXdhaXQgYnJvd3NlcldpbmRvdy5yZXBsYWNlVG9vbGJhck9wdGlvbnMoeyBidXR0b25zOiBuZXdCdXR0b25zIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGFjdGlvbk1hcFtcInJlc3RvcmUtb3BhY2l0eVwiXSA9IGFzeW5jIChwYXlsb2FkOiBDdXN0b21BY3Rpb25QYXlsb2FkKSA9PiB7XG5cdFx0XHRpZiAocGF5bG9hZC5jYWxsZXJUeXBlID09PSB0aGlzLl9oZWxwZXJzLmNhbGxlclR5cGVzLkN1c3RvbUJ1dHRvbikge1xuXHRcdFx0XHR0aGlzLl9sb2dnZXIuaW5mbyhcIlJlc3RvcmUgT3BhY2l0eSBUcmlnZ2VyZWRcIik7XG5cdFx0XHRcdGNvbnN0IGJyb3dzZXJXaW5kb3cgPSBwbGF0Zm9ybS5Ccm93c2VyLndyYXBTeW5jKHBheWxvYWQud2luZG93SWRlbnRpdHkpO1xuXHRcdFx0XHRjb25zdCBvcHRpb25zID0gYXdhaXQgYnJvd3NlcldpbmRvdy5vcGVuZmluV2luZG93LmdldE9wdGlvbnMoKTtcblx0XHRcdFx0Y29uc3QgY3VycmVudFRvb2xiYXJPcHRpb25zID0gKG9wdGlvbnMgYXMgQnJvd3NlckNyZWF0ZVdpbmRvd1JlcXVlc3QpLndvcmtzcGFjZVBsYXRmb3JtXG5cdFx0XHRcdFx0LnRvb2xiYXJPcHRpb25zO1xuXHRcdFx0XHRhd2FpdCBicm93c2VyV2luZG93Lm9wZW5maW5XaW5kb3cudXBkYXRlT3B0aW9ucyh7IG9wYWNpdHk6IDEgfSk7XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRUb29sYmFyT3B0aW9ucyAhPT0gdW5kZWZpbmVkICYmIGN1cnJlbnRUb29sYmFyT3B0aW9ucyAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnN0IG5ld0J1dHRvbnMgPSBhd2FpdCB0aGlzLl9oZWxwZXJzLnVwZGF0ZVRvb2xiYXJCdXR0b25zKFxuXHRcdFx0XHRcdFx0Y3VycmVudFRvb2xiYXJPcHRpb25zLmJ1dHRvbnMsXG5cdFx0XHRcdFx0XHRwYXlsb2FkLmN1c3RvbURhdGEuc291cmNlSWQgYXMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0cGF5bG9hZC5jdXN0b21EYXRhLnJlcGxhY2VtZW50SWQgYXMgc3RyaW5nXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRhd2FpdCBicm93c2VyV2luZG93LnJlcGxhY2VUb29sYmFyT3B0aW9ucyh7IGJ1dHRvbnM6IG5ld0J1dHRvbnMgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmV0dXJuIGFjdGlvbk1hcDtcblx0fVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBPcGFjaXR5QWN0aW9ucyB9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbnMgPSBuZXcgT3BhY2l0eUFjdGlvbnMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==