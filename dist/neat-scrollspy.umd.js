(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['neat-scrollspy'] = {}, global.core));
}(this, function (exports, core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @license Angular v7.2.13
     * (c) 2010-2019 Google LLC. https://angular.io/
     * License: MIT
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * This class should not be used directly by an application developer. Instead, use
     * {@link Location}.
     *
     * `PlatformLocation` encapsulates all calls to DOM apis, which allows the Router to be platform
     * agnostic.
     * This means that we can have different implementation of `PlatformLocation` for the different
     * platforms that angular supports. For example, `@angular/platform-browser` provides an
     * implementation specific to the browser environment, while `@angular/platform-webworker` provides
     * one suitable for use with web workers.
     *
     * The `PlatformLocation` class is used directly by all implementations of {@link LocationStrategy}
     * when they need to interact with the DOM apis like pushState, popState, etc...
     *
     * {@link LocationStrategy} in turn is used by the {@link Location} service which is used directly
     * by the {@link Router} in order to navigate between routes. Since all interactions between {@link
     * Router} /
     * {@link Location} / {@link LocationStrategy} and DOM apis flow through the `PlatformLocation`
     * class they are all platform independent.
     *
     * @publicApi
     */
    var PlatformLocation = /** @class */ (function () {
        function PlatformLocation() {
        }
        return PlatformLocation;
    }());
    /**
     * @description
     * Indicates when a location is initialized.
     *
     * @publicApi
     */
    var LOCATION_INITIALIZED = new core.InjectionToken('Location Initialized');

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * `LocationStrategy` is responsible for representing and reading route state
     * from the browser's URL. Angular provides two strategies:
     * {@link HashLocationStrategy} and {@link PathLocationStrategy}.
     *
     * This is used under the hood of the {@link Location} service.
     *
     * Applications should use the {@link Router} or {@link Location} services to
     * interact with application route state.
     *
     * For instance, {@link HashLocationStrategy} produces URLs like
     * `http://example.com#/foo`, and {@link PathLocationStrategy} produces
     * `http://example.com/foo` as an equivalent URL.
     *
     * See these two classes for more.
     *
     * @publicApi
     */
    var LocationStrategy = /** @class */ (function () {
        function LocationStrategy() {
        }
        return LocationStrategy;
    }());
    /**
     * A predefined [DI token](guide/glossary#di-token) for the base href
     * to be used with the `PathLocationStrategy`.
     * The base href is the URL prefix that should be preserved when generating
     * and recognizing URLs.
     *
     * @usageNotes
     *
     * The following example shows how to use this token to configure the root app injector
     * with a base href value, so that the DI framework can supply the dependency anywhere in the app.
     *
     * ```typescript
     * import {Component, NgModule} from '@angular/core';
     * import {APP_BASE_HREF} from '@angular/common';
     *
     * @NgModule({
     *   providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
     * })
     * class AppModule {}
     * ```
     *
     * @publicApi
     */
    var APP_BASE_HREF = new core.InjectionToken('appBaseHref');

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @description
     *
     * A service that applications can use to interact with a browser's URL.
     *
     * Depending on the {@link LocationStrategy} used, `Location` will either persist
     * to the URL's path or the URL's hash segment.
     *
     * @usageNotes
     *
     * It's better to use the {@link Router#navigate} service to trigger route changes. Use
     * `Location` only if you need to interact with or create normalized URLs outside of
     * routing.
     *
     * `Location` is responsible for normalizing the URL against the application's base href.
     * A normalized URL is absolute from the URL host, includes the application's base href, and has no
     * trailing slash:
     * - `/my/app/user/123` is normalized
     * - `my/app/user/123` **is not** normalized
     * - `/my/app/user/123/` **is not** normalized
     *
     * ### Example
     *
     * {@example common/location/ts/path_location_component.ts region='LocationComponent'}
     *
     * @publicApi
     */
    var Location = /** @class */ (function () {
        function Location(platformStrategy) {
            var _this = this;
            /** @internal */
            this._subject = new core.EventEmitter();
            this._platformStrategy = platformStrategy;
            var browserBaseHref = this._platformStrategy.getBaseHref();
            this._baseHref = Location_1.stripTrailingSlash(_stripIndexHtml(browserBaseHref));
            this._platformStrategy.onPopState(function (ev) {
                _this._subject.emit({
                    'url': _this.path(true),
                    'pop': true,
                    'state': ev.state,
                    'type': ev.type,
                });
            });
        }
        Location_1 = Location;
        /**
         * Returns the normalized URL path.
         *
         * @param includeHash Whether path has an anchor fragment.
         *
         * @returns The normalized URL path.
         */
        // TODO: vsavkin. Remove the boolean flag and always include hash once the deprecated router is
        // removed.
        Location.prototype.path = function (includeHash) {
            if (includeHash === void 0) { includeHash = false; }
            return this.normalize(this._platformStrategy.path(includeHash));
        };
        /**
         * Normalizes the given path and compares to the current normalized path.
         *
         * @param path The given URL path
         * @param query Query parameters
         *
         * @returns `true` if the given URL path is equal to the current normalized path, `false`
         * otherwise.
         */
        Location.prototype.isCurrentPathEqualTo = function (path, query) {
            if (query === void 0) { query = ''; }
            return this.path() == this.normalize(path + Location_1.normalizeQueryParams(query));
        };
        /**
         * Given a string representing a URL, returns the URL path after stripping the
         * trailing slashes.
         *
         * @param url String representing a URL.
         *
         * @returns Normalized URL string.
         */
        Location.prototype.normalize = function (url) {
            return Location_1.stripTrailingSlash(_stripBaseHref(this._baseHref, _stripIndexHtml(url)));
        };
        /**
         * Given a string representing a URL, returns the platform-specific external URL path.
         * If the given URL doesn't begin with a leading slash (`'/'`), this method adds one
         * before normalizing. This method also adds a hash if `HashLocationStrategy` is
         * used, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
         *
         *
         * @param url String representing a URL.
         *
         * @returns  A normalized platform-specific URL.
         */
        Location.prototype.prepareExternalUrl = function (url) {
            if (url && url[0] !== '/') {
                url = '/' + url;
            }
            return this._platformStrategy.prepareExternalUrl(url);
        };
        // TODO: rename this method to pushState
        /**
         * Changes the browsers URL to a normalized version of the given URL, and pushes a
         * new item onto the platform's history.
         *
         * @param path  URL path to normalizze
         * @param query Query parameters
         * @param state Location history state
         *
         */
        Location.prototype.go = function (path, query, state) {
            if (query === void 0) { query = ''; }
            if (state === void 0) { state = null; }
            this._platformStrategy.pushState(state, '', path, query);
        };
        /**
         * Changes the browser's URL to a normalized version of the given URL, and replaces
         * the top item on the platform's history stack.
         *
         * @param path  URL path to normalizze
         * @param query Query parameters
         * @param state Location history state
         */
        Location.prototype.replaceState = function (path, query, state) {
            if (query === void 0) { query = ''; }
            if (state === void 0) { state = null; }
            this._platformStrategy.replaceState(state, '', path, query);
        };
        /**
         * Navigates forward in the platform's history.
         */
        Location.prototype.forward = function () { this._platformStrategy.forward(); };
        /**
         * Navigates back in the platform's history.
         */
        Location.prototype.back = function () { this._platformStrategy.back(); };
        /**
         * Subscribe to the platform's `popState` events.
         *
         * @param value Event that is triggered when the state history changes.
         * @param exception The exception to throw.
         *
         * @returns Subscribed events.
         */
        Location.prototype.subscribe = function (onNext, onThrow, onReturn) {
            return this._subject.subscribe({ next: onNext, error: onThrow, complete: onReturn });
        };
        /**
         * Given a string of url parameters, prepend with `?` if needed, otherwise return the
         * parameters as is.
         *
         *  @param  params String of URL parameters
         *
         *  @returns URL parameters prepended with `?` or the parameters as is.
         */
        Location.normalizeQueryParams = function (params) {
            return params && params[0] !== '?' ? '?' + params : params;
        };
        /**
         * Given 2 parts of a URL, join them with a slash if needed.
         *
         * @param start  URL string
         * @param end    URL string
         *
         *
         * @returns Given URL strings joined with a slash, if needed.
         */
        Location.joinWithSlash = function (start, end) {
            if (start.length == 0) {
                return end;
            }
            if (end.length == 0) {
                return start;
            }
            var slashes = 0;
            if (start.endsWith('/')) {
                slashes++;
            }
            if (end.startsWith('/')) {
                slashes++;
            }
            if (slashes == 2) {
                return start + end.substring(1);
            }
            if (slashes == 1) {
                return start + end;
            }
            return start + '/' + end;
        };
        /**
         * If URL has a trailing slash, remove it, otherwise return the URL as is. The
         * method looks for the first occurrence of either `#`, `?`, or the end of the
         * line as `/` characters and removes the trailing slash if one exists.
         *
         * @param url URL string
         *
         * @returns Returns a URL string after removing the trailing slash if one exists, otherwise
         * returns the string as is.
         */
        Location.stripTrailingSlash = function (url) {
            var match = url.match(/#|\?|$/);
            var pathEndIdx = match && match.index || url.length;
            var droppedSlashIdx = pathEndIdx - (url[pathEndIdx - 1] === '/' ? 1 : 0);
            return url.slice(0, droppedSlashIdx) + url.slice(pathEndIdx);
        };
        var Location_1;
        Location = Location_1 = __decorate([
            core.Injectable(),
            __metadata("design:paramtypes", [LocationStrategy])
        ], Location);
        return Location;
    }());
    function _stripBaseHref(baseHref, url) {
        return baseHref && url.startsWith(baseHref) ? url.substring(baseHref.length) : url;
    }
    function _stripIndexHtml(url) {
        return url.replace(/\/index.html$/, '');
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @description
     * A {@link LocationStrategy} used to configure the {@link Location} service to
     * represent its state in the
     * [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)
     * of the browser's URL.
     *
     * For instance, if you call `location.go('/foo')`, the browser's URL will become
     * `example.com#/foo`.
     *
     * @usageNotes
     *
     * ### Example
     *
     * {@example common/location/ts/hash_location_component.ts region='LocationComponent'}
     *
     * @publicApi
     */
    var HashLocationStrategy = /** @class */ (function (_super) {
        __extends(HashLocationStrategy, _super);
        function HashLocationStrategy(_platformLocation, _baseHref) {
            var _this = _super.call(this) || this;
            _this._platformLocation = _platformLocation;
            _this._baseHref = '';
            if (_baseHref != null) {
                _this._baseHref = _baseHref;
            }
            return _this;
        }
        HashLocationStrategy.prototype.onPopState = function (fn) {
            this._platformLocation.onPopState(fn);
            this._platformLocation.onHashChange(fn);
        };
        HashLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
        HashLocationStrategy.prototype.path = function (includeHash) {
            if (includeHash === void 0) { includeHash = false; }
            // the hash value is always prefixed with a `#`
            // and if it is empty then it will stay empty
            var path = this._platformLocation.hash;
            if (path == null)
                path = '#';
            return path.length > 0 ? path.substring(1) : path;
        };
        HashLocationStrategy.prototype.prepareExternalUrl = function (internal) {
            var url = Location.joinWithSlash(this._baseHref, internal);
            return url.length > 0 ? ('#' + url) : url;
        };
        HashLocationStrategy.prototype.pushState = function (state, title, path, queryParams) {
            var url = this.prepareExternalUrl(path + Location.normalizeQueryParams(queryParams));
            if (url.length == 0) {
                url = this._platformLocation.pathname;
            }
            this._platformLocation.pushState(state, title, url);
        };
        HashLocationStrategy.prototype.replaceState = function (state, title, path, queryParams) {
            var url = this.prepareExternalUrl(path + Location.normalizeQueryParams(queryParams));
            if (url.length == 0) {
                url = this._platformLocation.pathname;
            }
            this._platformLocation.replaceState(state, title, url);
        };
        HashLocationStrategy.prototype.forward = function () { this._platformLocation.forward(); };
        HashLocationStrategy.prototype.back = function () { this._platformLocation.back(); };
        HashLocationStrategy = __decorate([
            core.Injectable(),
            __param(1, core.Optional()), __param(1, core.Inject(APP_BASE_HREF)),
            __metadata("design:paramtypes", [PlatformLocation, String])
        ], HashLocationStrategy);
        return HashLocationStrategy;
    }(LocationStrategy));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @description
     * A {@link LocationStrategy} used to configure the {@link Location} service to
     * represent its state in the
     * [path](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax) of the
     * browser's URL.
     *
     * If you're using `PathLocationStrategy`, you must provide a {@link APP_BASE_HREF}
     * or add a base element to the document. This URL prefix that will be preserved
     * when generating and recognizing URLs.
     *
     * For instance, if you provide an `APP_BASE_HREF` of `'/my/app'` and call
     * `location.go('/foo')`, the browser's URL will become
     * `example.com/my/app/foo`.
     *
     * Similarly, if you add `<base href='/my/app'/>` to the document and call
     * `location.go('/foo')`, the browser's URL will become
     * `example.com/my/app/foo`.
     *
     * @usageNotes
     *
     * ### Example
     *
     * {@example common/location/ts/path_location_component.ts region='LocationComponent'}
     *
     * @publicApi
     */
    var PathLocationStrategy = /** @class */ (function (_super) {
        __extends(PathLocationStrategy, _super);
        function PathLocationStrategy(_platformLocation, href) {
            var _this = _super.call(this) || this;
            _this._platformLocation = _platformLocation;
            if (href == null) {
                href = _this._platformLocation.getBaseHrefFromDOM();
            }
            if (href == null) {
                throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
            }
            _this._baseHref = href;
            return _this;
        }
        PathLocationStrategy.prototype.onPopState = function (fn) {
            this._platformLocation.onPopState(fn);
            this._platformLocation.onHashChange(fn);
        };
        PathLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
        PathLocationStrategy.prototype.prepareExternalUrl = function (internal) {
            return Location.joinWithSlash(this._baseHref, internal);
        };
        PathLocationStrategy.prototype.path = function (includeHash) {
            if (includeHash === void 0) { includeHash = false; }
            var pathname = this._platformLocation.pathname +
                Location.normalizeQueryParams(this._platformLocation.search);
            var hash = this._platformLocation.hash;
            return hash && includeHash ? "" + pathname + hash : pathname;
        };
        PathLocationStrategy.prototype.pushState = function (state, title, url, queryParams) {
            var externalUrl = this.prepareExternalUrl(url + Location.normalizeQueryParams(queryParams));
            this._platformLocation.pushState(state, title, externalUrl);
        };
        PathLocationStrategy.prototype.replaceState = function (state, title, url, queryParams) {
            var externalUrl = this.prepareExternalUrl(url + Location.normalizeQueryParams(queryParams));
            this._platformLocation.replaceState(state, title, externalUrl);
        };
        PathLocationStrategy.prototype.forward = function () { this._platformLocation.forward(); };
        PathLocationStrategy.prototype.back = function () { this._platformLocation.back(); };
        PathLocationStrategy = __decorate([
            core.Injectable(),
            __param(1, core.Optional()), __param(1, core.Inject(APP_BASE_HREF)),
            __metadata("design:paramtypes", [PlatformLocation, String])
        ], PathLocationStrategy);
        return PathLocationStrategy;
    }(LocationStrategy));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
        if (i === 1 && v === 0)
            return 1;
        return 5;
    }
    var localeEn = [
        'en', [['a', 'p'], ['AM', 'PM'], u], [['AM', 'PM'], u, u],
        [
            ['S', 'M', 'T', 'W', 'T', 'F', 'S'], ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
        ],
        u,
        [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            [
                'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
                'October', 'November', 'December'
            ]
        ],
        u, [['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']], 0, [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'], ['{1}, {0}', u, '{1} \'at\' {0}', u],
        ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '¤#,##0.00', '#E0'], '$', 'US Dollar', {}, plural
    ];

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @publicApi
     */
    var LOCALE_DATA = {};

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** @internal */
    var CURRENCIES_EN = {
        'ADP': [undefined, undefined, 0],
        'AFN': [undefined, undefined, 0],
        'ALL': [undefined, undefined, 0],
        'AMD': [undefined, undefined, 0],
        'AOA': [undefined, 'Kz'],
        'ARS': [undefined, '$'],
        'AUD': ['A$', '$'],
        'BAM': [undefined, 'KM'],
        'BBD': [undefined, '$'],
        'BDT': [undefined, '৳'],
        'BHD': [undefined, undefined, 3],
        'BIF': [undefined, undefined, 0],
        'BMD': [undefined, '$'],
        'BND': [undefined, '$'],
        'BOB': [undefined, 'Bs'],
        'BRL': ['R$'],
        'BSD': [undefined, '$'],
        'BWP': [undefined, 'P'],
        'BYN': [undefined, 'р.', 2],
        'BYR': [undefined, undefined, 0],
        'BZD': [undefined, '$'],
        'CAD': ['CA$', '$', 2],
        'CHF': [undefined, undefined, 2],
        'CLF': [undefined, undefined, 4],
        'CLP': [undefined, '$', 0],
        'CNY': ['CN¥', '¥'],
        'COP': [undefined, '$', 0],
        'CRC': [undefined, '₡', 2],
        'CUC': [undefined, '$'],
        'CUP': [undefined, '$'],
        'CZK': [undefined, 'Kč', 2],
        'DJF': [undefined, undefined, 0],
        'DKK': [undefined, 'kr', 2],
        'DOP': [undefined, '$'],
        'EGP': [undefined, 'E£'],
        'ESP': [undefined, '₧', 0],
        'EUR': ['€'],
        'FJD': [undefined, '$'],
        'FKP': [undefined, '£'],
        'GBP': ['£'],
        'GEL': [undefined, '₾'],
        'GIP': [undefined, '£'],
        'GNF': [undefined, 'FG', 0],
        'GTQ': [undefined, 'Q'],
        'GYD': [undefined, '$', 0],
        'HKD': ['HK$', '$'],
        'HNL': [undefined, 'L'],
        'HRK': [undefined, 'kn'],
        'HUF': [undefined, 'Ft', 2],
        'IDR': [undefined, 'Rp', 0],
        'ILS': ['₪'],
        'INR': ['₹'],
        'IQD': [undefined, undefined, 0],
        'IRR': [undefined, undefined, 0],
        'ISK': [undefined, 'kr', 0],
        'ITL': [undefined, undefined, 0],
        'JMD': [undefined, '$'],
        'JOD': [undefined, undefined, 3],
        'JPY': ['¥', undefined, 0],
        'KHR': [undefined, '៛'],
        'KMF': [undefined, 'CF', 0],
        'KPW': [undefined, '₩', 0],
        'KRW': ['₩', undefined, 0],
        'KWD': [undefined, undefined, 3],
        'KYD': [undefined, '$'],
        'KZT': [undefined, '₸'],
        'LAK': [undefined, '₭', 0],
        'LBP': [undefined, 'L£', 0],
        'LKR': [undefined, 'Rs'],
        'LRD': [undefined, '$'],
        'LTL': [undefined, 'Lt'],
        'LUF': [undefined, undefined, 0],
        'LVL': [undefined, 'Ls'],
        'LYD': [undefined, undefined, 3],
        'MGA': [undefined, 'Ar', 0],
        'MGF': [undefined, undefined, 0],
        'MMK': [undefined, 'K', 0],
        'MNT': [undefined, '₮', 0],
        'MRO': [undefined, undefined, 0],
        'MUR': [undefined, 'Rs', 0],
        'MXN': ['MX$', '$'],
        'MYR': [undefined, 'RM'],
        'NAD': [undefined, '$'],
        'NGN': [undefined, '₦'],
        'NIO': [undefined, 'C$'],
        'NOK': [undefined, 'kr', 2],
        'NPR': [undefined, 'Rs'],
        'NZD': ['NZ$', '$'],
        'OMR': [undefined, undefined, 3],
        'PHP': [undefined, '₱'],
        'PKR': [undefined, 'Rs', 0],
        'PLN': [undefined, 'zł'],
        'PYG': [undefined, '₲', 0],
        'RON': [undefined, 'lei'],
        'RSD': [undefined, undefined, 0],
        'RUB': [undefined, '₽'],
        'RUR': [undefined, 'р.'],
        'RWF': [undefined, 'RF', 0],
        'SBD': [undefined, '$'],
        'SEK': [undefined, 'kr', 2],
        'SGD': [undefined, '$'],
        'SHP': [undefined, '£'],
        'SLL': [undefined, undefined, 0],
        'SOS': [undefined, undefined, 0],
        'SRD': [undefined, '$'],
        'SSP': [undefined, '£'],
        'STD': [undefined, undefined, 0],
        'STN': [undefined, 'Db'],
        'SYP': [undefined, '£', 0],
        'THB': [undefined, '฿'],
        'TMM': [undefined, undefined, 0],
        'TND': [undefined, undefined, 3],
        'TOP': [undefined, 'T$'],
        'TRL': [undefined, undefined, 0],
        'TRY': [undefined, '₺'],
        'TTD': [undefined, '$'],
        'TWD': ['NT$', '$', 2],
        'TZS': [undefined, undefined, 0],
        'UAH': [undefined, '₴'],
        'UGX': [undefined, undefined, 0],
        'USD': ['$'],
        'UYI': [undefined, undefined, 0],
        'UYU': [undefined, '$'],
        'UZS': [undefined, undefined, 0],
        'VEF': [undefined, 'Bs'],
        'VND': ['₫', undefined, 0],
        'VUV': [undefined, undefined, 0],
        'XAF': ['FCFA', undefined, 0],
        'XCD': ['EC$', '$'],
        'XOF': ['CFA', undefined, 0],
        'XPF': ['CFPF', undefined, 0],
        'YER': [undefined, undefined, 0],
        'ZAR': [undefined, 'R'],
        'ZMK': [undefined, undefined, 0],
        'ZMW': [undefined, 'ZK'],
        'ZWD': [undefined, undefined, 0]
    };

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Format styles that can be used to represent numbers.
     * @see `getLocaleNumberFormat()`.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    var NumberFormatStyle;
    (function (NumberFormatStyle) {
        NumberFormatStyle[NumberFormatStyle["Decimal"] = 0] = "Decimal";
        NumberFormatStyle[NumberFormatStyle["Percent"] = 1] = "Percent";
        NumberFormatStyle[NumberFormatStyle["Currency"] = 2] = "Currency";
        NumberFormatStyle[NumberFormatStyle["Scientific"] = 3] = "Scientific";
    })(NumberFormatStyle || (NumberFormatStyle = {}));
    /**
     * Plurality cases used for translating plurals to different languages.
     *
     * @see `NgPlural`
     * @see `NgPluralCase`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi */
    var Plural;
    (function (Plural) {
        Plural[Plural["Zero"] = 0] = "Zero";
        Plural[Plural["One"] = 1] = "One";
        Plural[Plural["Two"] = 2] = "Two";
        Plural[Plural["Few"] = 3] = "Few";
        Plural[Plural["Many"] = 4] = "Many";
        Plural[Plural["Other"] = 5] = "Other";
    })(Plural || (Plural = {}));
    /**
     * Context-dependant translation forms for strings.
     * Typically the standalone version is for the nominative form of the word,
     * and the format version is used for the genitive case.
     * @see [CLDR website](http://cldr.unicode.org/translation/date-time#TOC-Stand-Alone-vs.-Format-Styles)
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    var FormStyle;
    (function (FormStyle) {
        FormStyle[FormStyle["Format"] = 0] = "Format";
        FormStyle[FormStyle["Standalone"] = 1] = "Standalone";
    })(FormStyle || (FormStyle = {}));
    /**
     * String widths available for translations.
     * The specific character widths are locale-specific.
     * Examples are given for the word "Sunday" in English.
     *
     * @publicApi
     */
    var TranslationWidth;
    (function (TranslationWidth) {
        /** 1 character for `en-US`. For example: 'S' */
        TranslationWidth[TranslationWidth["Narrow"] = 0] = "Narrow";
        /** 3 characters for `en-US`. For example: 'Sun' */
        TranslationWidth[TranslationWidth["Abbreviated"] = 1] = "Abbreviated";
        /** Full length for `en-US`. For example: "Sunday" */
        TranslationWidth[TranslationWidth["Wide"] = 2] = "Wide";
        /** 2 characters for `en-US`, For example: "Su" */
        TranslationWidth[TranslationWidth["Short"] = 3] = "Short";
    })(TranslationWidth || (TranslationWidth = {}));
    /**
     * String widths available for date-time formats.
     * The specific character widths are locale-specific.
     * Examples are given for `en-US`.
     *
     * @see `getLocaleDateFormat()`
     * @see `getLocaleTimeFormat()``
     * @see `getLocaleDateTimeFormat()`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     * @publicApi
     */
    var FormatWidth;
    (function (FormatWidth) {
        /**
         * For `en-US`, 'M/d/yy, h:mm a'`
         * (Example: `6/15/15, 9:03 AM`)
         */
        FormatWidth[FormatWidth["Short"] = 0] = "Short";
        /**
         * For `en-US`, `'MMM d, y, h:mm:ss a'`
         * (Example: `Jun 15, 2015, 9:03:01 AM`)
         */
        FormatWidth[FormatWidth["Medium"] = 1] = "Medium";
        /**
         * For `en-US`, `'MMMM d, y, h:mm:ss a z'`
         * (Example: `June 15, 2015 at 9:03:01 AM GMT+1`)
         */
        FormatWidth[FormatWidth["Long"] = 2] = "Long";
        /**
         * For `en-US`, `'EEEE, MMMM d, y, h:mm:ss a zzzz'`
         * (Example: `Monday, June 15, 2015 at 9:03:01 AM GMT+01:00`)
         */
        FormatWidth[FormatWidth["Full"] = 3] = "Full";
    })(FormatWidth || (FormatWidth = {}));
    /**
     * Symbols that can be used to replace placeholders in number patterns.
     * Examples are based on `en-US` values.
     *
     * @see `getLocaleNumberSymbol()`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    var NumberSymbol;
    (function (NumberSymbol) {
        /**
         * Decimal separator.
         * For `en-US`, the dot character.
         * Example : 2,345`.`67
         */
        NumberSymbol[NumberSymbol["Decimal"] = 0] = "Decimal";
        /**
         * Grouping separator, typically for thousands.
         * For `en-US`, the comma character.
         * Example: 2`,`345.67
         */
        NumberSymbol[NumberSymbol["Group"] = 1] = "Group";
        /**
         * List-item separator.
         * Example: "one, two, and three"
         */
        NumberSymbol[NumberSymbol["List"] = 2] = "List";
        /**
         * Sign for percentage (out of 100).
         * Example: 23.4%
         */
        NumberSymbol[NumberSymbol["PercentSign"] = 3] = "PercentSign";
        /**
         * Sign for positive numbers.
         * Example: +23
         */
        NumberSymbol[NumberSymbol["PlusSign"] = 4] = "PlusSign";
        /**
         * Sign for negative numbers.
         * Example: -23
         */
        NumberSymbol[NumberSymbol["MinusSign"] = 5] = "MinusSign";
        /**
         * Computer notation for exponential value (n times a power of 10).
         * Example: 1.2E3
         */
        NumberSymbol[NumberSymbol["Exponential"] = 6] = "Exponential";
        /**
         * Human-readable format of exponential.
         * Example: 1.2x103
         */
        NumberSymbol[NumberSymbol["SuperscriptingExponent"] = 7] = "SuperscriptingExponent";
        /**
         * Sign for permille (out of 1000).
         * Example: 23.4‰
         */
        NumberSymbol[NumberSymbol["PerMille"] = 8] = "PerMille";
        /**
         * Infinity, can be used with plus and minus.
         * Example: ∞, +∞, -∞
         */
        NumberSymbol[NumberSymbol["Infinity"] = 9] = "Infinity";
        /**
         * Not a number.
         * Example: NaN
         */
        NumberSymbol[NumberSymbol["NaN"] = 10] = "NaN";
        /**
         * Symbol used between time units.
         * Example: 10:52
         */
        NumberSymbol[NumberSymbol["TimeSeparator"] = 11] = "TimeSeparator";
        /**
         * Decimal separator for currency values (fallback to `Decimal`).
         * Example: $2,345.67
         */
        NumberSymbol[NumberSymbol["CurrencyDecimal"] = 12] = "CurrencyDecimal";
        /**
         * Group separator for currency values (fallback to `Group`).
         * Example: $2,345.67
         */
        NumberSymbol[NumberSymbol["CurrencyGroup"] = 13] = "CurrencyGroup";
    })(NumberSymbol || (NumberSymbol = {}));
    /**
     * The value for each day of the week, based on the `en-US` locale
     *
     * @publicApi
     */
    var WeekDay;
    (function (WeekDay) {
        WeekDay[WeekDay["Sunday"] = 0] = "Sunday";
        WeekDay[WeekDay["Monday"] = 1] = "Monday";
        WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
        WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
        WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
        WeekDay[WeekDay["Friday"] = 5] = "Friday";
        WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
    })(WeekDay || (WeekDay = {}));
    /**
     * Retrieves the locale ID from the currently loaded locale.
     * The loaded locale could be, for example, a global one rather than a regional one.
     * @param locale A locale code, such as `fr-FR`.
     * @returns The locale code. For example, `fr`.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLocaleId(locale) {
        return findLocaleData(locale)[0 /* LocaleId */];
    }
    /**
     * Retrieves day period strings for the given locale.
     *
     * @param locale A locale code for the locale format rules to use.
     * @param formStyle The required grammatical form.
     * @param width The required character width.
     * @returns An array of localized period strings. For example, `[AM, PM]` for `en-US`.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLocaleDayPeriods(locale, formStyle, width) {
        var data = findLocaleData(locale);
        var amPmData = [data[1 /* DayPeriodsFormat */], data[2 /* DayPeriodsStandalone */]];
        var amPm = getLastDefinedValue(amPmData, formStyle);
        return getLastDefinedValue(amPm, width);
    }
    /**
     * Retrieves days of the week for the given locale, using the Gregorian calendar.
     *
     * @param locale A locale code for the locale format rules to use.
     * @param formStyle The required grammatical form.
     * @param width The required character width.
     * @returns An array of localized name strings.
     * For example,`[Sunday, Monday, ... Saturday]` for `en-US`.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLocaleDayNames(locale, formStyle, width) {
        var data = findLocaleData(locale);
        var daysData = [data[3 /* DaysFormat */], data[4 /* DaysStandalone */]];
        var days = getLastDefinedValue(daysData, formStyle);
        return getLastDefinedValue(days, width);
    }
    /**
     * Retrieves months of the year for the given locale, using the Gregorian calendar.
     *
     * @param locale A locale code for the locale format rules to use.
     * @param formStyle The required grammatical form.
     * @param width The required character width.
     * @returns An array of localized name strings.
     * For example,  `[January, February, ...]` for `en-US`.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLocaleMonthNames(locale, formStyle, width) {
        var data = findLocaleData(locale);
        var monthsData = [data[5 /* MonthsFormat */], data[6 /* MonthsStandalone */]];
        var months = getLastDefinedValue(monthsData, formStyle);
        return getLastDefinedValue(months, width);
    }
    /**
     * Retrieves Gregorian-calendar eras for the given locale.
     * @param locale A locale code for the locale format rules to use.
     * @param formStyle The required grammatical form.
     * @param width The required character width.

     * @returns An array of localized era strings.
     * For example, `[AD, BC]` for `en-US`.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLocaleEraNames(locale, width) {
        var data = findLocaleData(locale);
        var erasData = data[7 /* Eras */];
        return getLastDefinedValue(erasData, width);
    }
    /**
     * Retrieves a localized date-value formating string.
     *
     * @param locale A locale code for the locale format rules to use.
     * @param width The format type.
     * @returns The localized formating string.
     * @see `FormatWidth`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLocaleDateFormat(locale, width) {
        var data = findLocaleData(locale);
        return getLastDefinedValue(data[10 /* DateFormat */], width);
    }
    /**
     * Retrieves a localized time-value formatting string.
     *
     * @param locale A locale code for the locale format rules to use.
     * @param width The format type.
     * @returns The localized formatting string.
     * @see `FormatWidth`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)

     * @publicApi
     */
    function getLocaleTimeFormat(locale, width) {
        var data = findLocaleData(locale);
        return getLastDefinedValue(data[11 /* TimeFormat */], width);
    }
    /**
     * Retrieves a localized date-time formatting string.
     *
     * @param locale A locale code for the locale format rules to use.
     * @param width The format type.
     * @returns The localized formatting string.
     * @see `FormatWidth`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLocaleDateTimeFormat(locale, width) {
        var data = findLocaleData(locale);
        var dateTimeFormatData = data[12 /* DateTimeFormat */];
        return getLastDefinedValue(dateTimeFormatData, width);
    }
    /**
     * Retrieves a localized number symbol that can be used to replace placeholders in number formats.
     * @param locale The locale code.
     * @param symbol The symbol to localize.
     * @returns The character for the localized symbol.
     * @see `NumberSymbol`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLocaleNumberSymbol(locale, symbol) {
        var data = findLocaleData(locale);
        var res = data[13 /* NumberSymbols */][symbol];
        if (typeof res === 'undefined') {
            if (symbol === NumberSymbol.CurrencyDecimal) {
                return data[13 /* NumberSymbols */][NumberSymbol.Decimal];
            }
            else if (symbol === NumberSymbol.CurrencyGroup) {
                return data[13 /* NumberSymbols */][NumberSymbol.Group];
            }
        }
        return res;
    }
    /**
     * Retrieves a number format for a given locale.
     *
     * Numbers are formatted using patterns, like `#,###.00`. For example, the pattern `#,###.00`
     * when used to format the number 12345.678 could result in "12'345,678". That would happen if the
     * grouping separator for your language is an apostrophe, and the decimal separator is a comma.
     *
     * <b>Important:</b> The characters `.` `,` `0` `#` (and others below) are special placeholders
     * that stand for the decimal separator, and so on, and are NOT real characters.
     * You must NOT "translate" the placeholders. For example, don't change `.` to `,` even though in
     * your language the decimal point is written with a comma. The symbols should be replaced by the
     * local equivalents, using the appropriate `NumberSymbol` for your language.
     *
     * Here are the special characters used in number patterns:
     *
     * | Symbol | Meaning |
     * |--------|---------|
     * | . | Replaced automatically by the character used for the decimal point. |
     * | , | Replaced by the "grouping" (thousands) separator. |
     * | 0 | Replaced by a digit (or zero if there aren't enough digits). |
     * | # | Replaced by a digit (or nothing if there aren't enough). |
     * | ¤ | Replaced by a currency symbol, such as $ or USD. |
     * | % | Marks a percent format. The % symbol may change position, but must be retained. |
     * | E | Marks a scientific format. The E symbol may change position, but must be retained. |
     * | ' | Special characters used as literal characters are quoted with ASCII single quotes. |
     *
     * @param locale A locale code for the locale format rules to use.
     * @param type The type of numeric value to be formatted (such as `Decimal` or `Currency`.)
     * @returns The localized format string.
     * @see `NumberFormatStyle`
     * @see [CLDR website](http://cldr.unicode.org/translation/number-patterns)
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLocaleNumberFormat(locale, type) {
        var data = findLocaleData(locale);
        return data[14 /* NumberFormats */][type];
    }
    /**
     * Retrieves the currency values for a given locale.
     * @param locale A locale code for the locale format rules to use.
     * @returns The currency values.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     */
    function getLocaleCurrencies(locale) {
        var data = findLocaleData(locale);
        return data[17 /* Currencies */];
    }
    /**
     * Retrieves the plural function used by ICU expressions to determine the plural case to use
     * for a given locale.
     * @param locale A locale code for the locale format rules to use.
     * @returns The plural function for the locale.
     * @see `NgPlural`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLocalePluralCase(locale) {
        var data = findLocaleData(locale);
        return data[18 /* PluralCase */];
    }
    function checkFullData(data) {
        if (!data[19 /* ExtraData */]) {
            throw new Error("Missing extra locale data for the locale \"" + data[0 /* LocaleId */] + "\". Use \"registerLocaleData\" to load new data. See the \"I18n guide\" on angular.io to know more.");
        }
    }
    /**
     * Retrieves locale-specific rules used to determine which day period to use
     * when more than one period is defined for a locale.
     *
     * There is a rule for each defined day period. The
     * first rule is applied to the first day period and so on.
     * Fall back to AM/PM when no rules are available.
     *
     * A rule can specify a period as time range, or as a single time value.
     *
     * This functionality is only available when you have loaded the full locale data.
     * See the ["I18n guide"](guide/i18n#i18n-pipes).
     *
     * @param locale A locale code for the locale format rules to use.
     * @returns The rules for the locale, a single time value or array of *from-time, to-time*,
     * or null if no periods are available.
     *
     * @see `getLocaleExtraDayPeriods()`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLocaleExtraDayPeriodRules(locale) {
        var data = findLocaleData(locale);
        checkFullData(data);
        var rules = data[19 /* ExtraData */][2 /* ExtraDayPeriodsRules */] || [];
        return rules.map(function (rule) {
            if (typeof rule === 'string') {
                return extractTime(rule);
            }
            return [extractTime(rule[0]), extractTime(rule[1])];
        });
    }
    /**
     * Retrieves locale-specific day periods, which indicate roughly how a day is broken up
     * in different languages.
     * For example, for `en-US`, periods are morning, noon, afternoon, evening, and midnight.
     *
     * This functionality is only available when you have loaded the full locale data.
     * See the ["I18n guide"](guide/i18n#i18n-pipes).
     *
     * @param locale A locale code for the locale format rules to use.
     * @param formStyle The required grammatical form.
     * @param width The required character width.
     * @returns The translated day-period strings.
     * @see `getLocaleExtraDayPeriodRules()`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLocaleExtraDayPeriods(locale, formStyle, width) {
        var data = findLocaleData(locale);
        checkFullData(data);
        var dayPeriodsData = [
            data[19 /* ExtraData */][0 /* ExtraDayPeriodFormats */],
            data[19 /* ExtraData */][1 /* ExtraDayPeriodStandalone */]
        ];
        var dayPeriods = getLastDefinedValue(dayPeriodsData, formStyle) || [];
        return getLastDefinedValue(dayPeriods, width) || [];
    }
    /**
     * Retrieves the first value that is defined in an array, going backwards from an index position.
     *
     * To avoid repeating the same data (as when the "format" and "standalone" forms are the same)
     * add the first value to the locale data arrays, and add other values only if they are different.
     *
     * @param data The data array to retrieve from.
     * @param index A 0-based index into the array to start from.
     * @returns The value immediately before the given index position.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLastDefinedValue(data, index) {
        for (var i = index; i > -1; i--) {
            if (typeof data[i] !== 'undefined') {
                return data[i];
            }
        }
        throw new Error('Locale data API: locale data undefined');
    }
    /**
     * Extracts the hours and minutes from a string like "15:45"
     */
    function extractTime(time) {
        var _a = __read(time.split(':'), 2), h = _a[0], m = _a[1];
        return { hours: +h, minutes: +m };
    }
    /**
     * Finds the locale data for a given locale.
     *
     * @param locale The locale code.
     * @returns The locale data.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function findLocaleData(locale) {
        var normalizedLocale = locale.toLowerCase().replace(/_/g, '-');
        var match = LOCALE_DATA[normalizedLocale];
        if (match) {
            return match;
        }
        // let's try to find a parent locale
        var parentLocale = normalizedLocale.split('-')[0];
        match = LOCALE_DATA[parentLocale];
        if (match) {
            return match;
        }
        if (parentLocale === 'en') {
            return localeEn;
        }
        throw new Error("Missing locale data for the locale \"" + locale + "\".");
    }
    /**
     * Retrieves the currency symbol for a given currency code.
     *
     * For example, for the default `en-US` locale, the code `USD` can
     * be represented by the narrow symbol `$` or the wide symbol `US$`.
     *
     * @param code The currency code.
     * @param format The format, `wide` or `narrow`.
     * @param locale A locale code for the locale format rules to use.
     *
     * @returns The symbol, or the currency code if no symbol is available.0
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getCurrencySymbol(code, format, locale) {
        if (locale === void 0) { locale = 'en'; }
        var currency = getLocaleCurrencies(locale)[code] || CURRENCIES_EN[code] || [];
        var symbolNarrow = currency[1 /* SymbolNarrow */];
        if (format === 'narrow' && typeof symbolNarrow === 'string') {
            return symbolNarrow;
        }
        return currency[0 /* Symbol */] || code;
    }
    // Most currencies have cents, that's why the default is 2
    var DEFAULT_NB_OF_CURRENCY_DIGITS = 2;
    /**
     * Reports the number of decimal digits for a given currency.
     * The value depends upon the presence of cents in that particular currency.
     *
     * @param code The currency code.
     * @returns The number of decimal digits, typically 0 or 2.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getNumberOfCurrencyDigits(code) {
        var digits;
        var currency = CURRENCIES_EN[code];
        if (currency) {
            digits = currency[2 /* NbOfDigits */];
        }
        return typeof digits === 'number' ? digits : DEFAULT_NB_OF_CURRENCY_DIGITS;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ISO8601_DATE_REGEX = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    //    1        2       3         4          5          6          7          8  9     10      11
    var NAMED_FORMATS = {};
    var DATE_FORMATS_SPLIT = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
    var ZoneWidth;
    (function (ZoneWidth) {
        ZoneWidth[ZoneWidth["Short"] = 0] = "Short";
        ZoneWidth[ZoneWidth["ShortGMT"] = 1] = "ShortGMT";
        ZoneWidth[ZoneWidth["Long"] = 2] = "Long";
        ZoneWidth[ZoneWidth["Extended"] = 3] = "Extended";
    })(ZoneWidth || (ZoneWidth = {}));
    var DateType;
    (function (DateType) {
        DateType[DateType["FullYear"] = 0] = "FullYear";
        DateType[DateType["Month"] = 1] = "Month";
        DateType[DateType["Date"] = 2] = "Date";
        DateType[DateType["Hours"] = 3] = "Hours";
        DateType[DateType["Minutes"] = 4] = "Minutes";
        DateType[DateType["Seconds"] = 5] = "Seconds";
        DateType[DateType["FractionalSeconds"] = 6] = "FractionalSeconds";
        DateType[DateType["Day"] = 7] = "Day";
    })(DateType || (DateType = {}));
    var TranslationType;
    (function (TranslationType) {
        TranslationType[TranslationType["DayPeriods"] = 0] = "DayPeriods";
        TranslationType[TranslationType["Days"] = 1] = "Days";
        TranslationType[TranslationType["Months"] = 2] = "Months";
        TranslationType[TranslationType["Eras"] = 3] = "Eras";
    })(TranslationType || (TranslationType = {}));
    /**
     * @ngModule CommonModule
     * @description
     *
     * Formats a date according to locale rules.
     *
     * @param value The date to format, as a Date, or a number (milliseconds since UTC epoch)
     * or an [ISO date-time string](https://www.w3.org/TR/NOTE-datetime).
     * @param format The date-time components to include. See `DatePipe` for details.
     * @param locale A locale code for the locale format rules to use.
     * @param timezone The time zone. A time zone offset from GMT (such as `'+0430'`),
     * or a standard UTC/GMT or continental US time zone abbreviation.
     * If not specified, uses host system settings.
     *
     * @returns The formatted date string.
     *
     * @see `DatePipe`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function formatDate(value, format, locale, timezone) {
        var date = toDate(value);
        var namedFormat = getNamedFormat(locale, format);
        format = namedFormat || format;
        var parts = [];
        var match;
        while (format) {
            match = DATE_FORMATS_SPLIT.exec(format);
            if (match) {
                parts = parts.concat(match.slice(1));
                var part = parts.pop();
                if (!part) {
                    break;
                }
                format = part;
            }
            else {
                parts.push(format);
                break;
            }
        }
        var dateTimezoneOffset = date.getTimezoneOffset();
        if (timezone) {
            dateTimezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
            date = convertTimezoneToLocal(date, timezone, true);
        }
        var text = '';
        parts.forEach(function (value) {
            var dateFormatter = getDateFormatter(value);
            text += dateFormatter ?
                dateFormatter(date, locale, dateTimezoneOffset) :
                value === '\'\'' ? '\'' : value.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
        });
        return text;
    }
    function getNamedFormat(locale, format) {
        var localeId = getLocaleId(locale);
        NAMED_FORMATS[localeId] = NAMED_FORMATS[localeId] || {};
        if (NAMED_FORMATS[localeId][format]) {
            return NAMED_FORMATS[localeId][format];
        }
        var formatValue = '';
        switch (format) {
            case 'shortDate':
                formatValue = getLocaleDateFormat(locale, FormatWidth.Short);
                break;
            case 'mediumDate':
                formatValue = getLocaleDateFormat(locale, FormatWidth.Medium);
                break;
            case 'longDate':
                formatValue = getLocaleDateFormat(locale, FormatWidth.Long);
                break;
            case 'fullDate':
                formatValue = getLocaleDateFormat(locale, FormatWidth.Full);
                break;
            case 'shortTime':
                formatValue = getLocaleTimeFormat(locale, FormatWidth.Short);
                break;
            case 'mediumTime':
                formatValue = getLocaleTimeFormat(locale, FormatWidth.Medium);
                break;
            case 'longTime':
                formatValue = getLocaleTimeFormat(locale, FormatWidth.Long);
                break;
            case 'fullTime':
                formatValue = getLocaleTimeFormat(locale, FormatWidth.Full);
                break;
            case 'short':
                var shortTime = getNamedFormat(locale, 'shortTime');
                var shortDate = getNamedFormat(locale, 'shortDate');
                formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Short), [shortTime, shortDate]);
                break;
            case 'medium':
                var mediumTime = getNamedFormat(locale, 'mediumTime');
                var mediumDate = getNamedFormat(locale, 'mediumDate');
                formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Medium), [mediumTime, mediumDate]);
                break;
            case 'long':
                var longTime = getNamedFormat(locale, 'longTime');
                var longDate = getNamedFormat(locale, 'longDate');
                formatValue =
                    formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Long), [longTime, longDate]);
                break;
            case 'full':
                var fullTime = getNamedFormat(locale, 'fullTime');
                var fullDate = getNamedFormat(locale, 'fullDate');
                formatValue =
                    formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Full), [fullTime, fullDate]);
                break;
        }
        if (formatValue) {
            NAMED_FORMATS[localeId][format] = formatValue;
        }
        return formatValue;
    }
    function formatDateTime(str, opt_values) {
        if (opt_values) {
            str = str.replace(/\{([^}]+)}/g, function (match, key) {
                return (opt_values != null && key in opt_values) ? opt_values[key] : match;
            });
        }
        return str;
    }
    function padNumber(num, digits, minusSign, trim, negWrap) {
        if (minusSign === void 0) { minusSign = '-'; }
        var neg = '';
        if (num < 0 || (negWrap && num <= 0)) {
            if (negWrap) {
                num = -num + 1;
            }
            else {
                num = -num;
                neg = minusSign;
            }
        }
        var strNum = String(num);
        while (strNum.length < digits) {
            strNum = '0' + strNum;
        }
        if (trim) {
            strNum = strNum.substr(strNum.length - digits);
        }
        return neg + strNum;
    }
    function formatFractionalSeconds(milliseconds, digits) {
        var strMs = padNumber(milliseconds, 3);
        return strMs.substr(0, digits);
    }
    /**
     * Returns a date formatter that transforms a date into its locale digit representation
     */
    function dateGetter(name, size, offset, trim, negWrap) {
        if (offset === void 0) { offset = 0; }
        if (trim === void 0) { trim = false; }
        if (negWrap === void 0) { negWrap = false; }
        return function (date, locale) {
            var part = getDatePart(name, date);
            if (offset > 0 || part > -offset) {
                part += offset;
            }
            if (name === DateType.Hours) {
                if (part === 0 && offset === -12) {
                    part = 12;
                }
            }
            else if (name === DateType.FractionalSeconds) {
                return formatFractionalSeconds(part, size);
            }
            var localeMinus = getLocaleNumberSymbol(locale, NumberSymbol.MinusSign);
            return padNumber(part, size, localeMinus, trim, negWrap);
        };
    }
    function getDatePart(part, date) {
        switch (part) {
            case DateType.FullYear:
                return date.getFullYear();
            case DateType.Month:
                return date.getMonth();
            case DateType.Date:
                return date.getDate();
            case DateType.Hours:
                return date.getHours();
            case DateType.Minutes:
                return date.getMinutes();
            case DateType.Seconds:
                return date.getSeconds();
            case DateType.FractionalSeconds:
                return date.getMilliseconds();
            case DateType.Day:
                return date.getDay();
            default:
                throw new Error("Unknown DateType value \"" + part + "\".");
        }
    }
    /**
     * Returns a date formatter that transforms a date into its locale string representation
     */
    function dateStrGetter(name, width, form, extended) {
        if (form === void 0) { form = FormStyle.Format; }
        if (extended === void 0) { extended = false; }
        return function (date, locale) {
            return getDateTranslation(date, locale, name, width, form, extended);
        };
    }
    /**
     * Returns the locale translation of a date for a given form, type and width
     */
    function getDateTranslation(date, locale, name, width, form, extended) {
        switch (name) {
            case TranslationType.Months:
                return getLocaleMonthNames(locale, form, width)[date.getMonth()];
            case TranslationType.Days:
                return getLocaleDayNames(locale, form, width)[date.getDay()];
            case TranslationType.DayPeriods:
                var currentHours_1 = date.getHours();
                var currentMinutes_1 = date.getMinutes();
                if (extended) {
                    var rules = getLocaleExtraDayPeriodRules(locale);
                    var dayPeriods_1 = getLocaleExtraDayPeriods(locale, form, width);
                    var result_1;
                    rules.forEach(function (rule, index) {
                        if (Array.isArray(rule)) {
                            // morning, afternoon, evening, night
                            var _a = rule[0], hoursFrom = _a.hours, minutesFrom = _a.minutes;
                            var _b = rule[1], hoursTo = _b.hours, minutesTo = _b.minutes;
                            if (currentHours_1 >= hoursFrom && currentMinutes_1 >= minutesFrom &&
                                (currentHours_1 < hoursTo ||
                                    (currentHours_1 === hoursTo && currentMinutes_1 < minutesTo))) {
                                result_1 = dayPeriods_1[index];
                            }
                        }
                        else { // noon or midnight
                            var hours = rule.hours, minutes = rule.minutes;
                            if (hours === currentHours_1 && minutes === currentMinutes_1) {
                                result_1 = dayPeriods_1[index];
                            }
                        }
                    });
                    if (result_1) {
                        return result_1;
                    }
                }
                // if no rules for the day periods, we use am/pm by default
                return getLocaleDayPeriods(locale, form, width)[currentHours_1 < 12 ? 0 : 1];
            case TranslationType.Eras:
                return getLocaleEraNames(locale, width)[date.getFullYear() <= 0 ? 0 : 1];
            default:
                // This default case is not needed by TypeScript compiler, as the switch is exhaustive.
                // However Closure Compiler does not understand that and reports an error in typed mode.
                // The `throw new Error` below works around the problem, and the unexpected: never variable
                // makes sure tsc still checks this code is unreachable.
                var unexpected = name;
                throw new Error("unexpected translation type " + unexpected);
        }
    }
    /**
     * Returns a date formatter that transforms a date and an offset into a timezone with ISO8601 or
     * GMT format depending on the width (eg: short = +0430, short:GMT = GMT+4, long = GMT+04:30,
     * extended = +04:30)
     */
    function timeZoneGetter(width) {
        return function (date, locale, offset) {
            var zone = -1 * offset;
            var minusSign = getLocaleNumberSymbol(locale, NumberSymbol.MinusSign);
            var hours = zone > 0 ? Math.floor(zone / 60) : Math.ceil(zone / 60);
            switch (width) {
                case ZoneWidth.Short:
                    return ((zone >= 0) ? '+' : '') + padNumber(hours, 2, minusSign) +
                        padNumber(Math.abs(zone % 60), 2, minusSign);
                case ZoneWidth.ShortGMT:
                    return 'GMT' + ((zone >= 0) ? '+' : '') + padNumber(hours, 1, minusSign);
                case ZoneWidth.Long:
                    return 'GMT' + ((zone >= 0) ? '+' : '') + padNumber(hours, 2, minusSign) + ':' +
                        padNumber(Math.abs(zone % 60), 2, minusSign);
                case ZoneWidth.Extended:
                    if (offset === 0) {
                        return 'Z';
                    }
                    else {
                        return ((zone >= 0) ? '+' : '') + padNumber(hours, 2, minusSign) + ':' +
                            padNumber(Math.abs(zone % 60), 2, minusSign);
                    }
                default:
                    throw new Error("Unknown zone width \"" + width + "\"");
            }
        };
    }
    var JANUARY = 0;
    var THURSDAY = 4;
    function getFirstThursdayOfYear(year) {
        var firstDayOfYear = (new Date(year, JANUARY, 1)).getDay();
        return new Date(year, 0, 1 + ((firstDayOfYear <= THURSDAY) ? THURSDAY : THURSDAY + 7) - firstDayOfYear);
    }
    function getThursdayThisWeek(datetime) {
        return new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate() + (THURSDAY - datetime.getDay()));
    }
    function weekGetter(size, monthBased) {
        if (monthBased === void 0) { monthBased = false; }
        return function (date, locale) {
            var result;
            if (monthBased) {
                var nbDaysBefore1stDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
                var today = date.getDate();
                result = 1 + Math.floor((today + nbDaysBefore1stDayOfMonth) / 7);
            }
            else {
                var firstThurs = getFirstThursdayOfYear(date.getFullYear());
                var thisThurs = getThursdayThisWeek(date);
                var diff = thisThurs.getTime() - firstThurs.getTime();
                result = 1 + Math.round(diff / 6.048e8); // 6.048e8 ms per week
            }
            return padNumber(result, size, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
        };
    }
    var DATE_FORMATS = {};
    // Based on CLDR formats:
    // See complete list: http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
    // See also explanations: http://cldr.unicode.org/translation/date-time
    // TODO(ocombe): support all missing cldr formats: Y, U, Q, D, F, e, c, j, J, C, A, v, V, X, x
    function getDateFormatter(format) {
        if (DATE_FORMATS[format]) {
            return DATE_FORMATS[format];
        }
        var formatter;
        switch (format) {
            // Era name (AD/BC)
            case 'G':
            case 'GG':
            case 'GGG':
                formatter = dateStrGetter(TranslationType.Eras, TranslationWidth.Abbreviated);
                break;
            case 'GGGG':
                formatter = dateStrGetter(TranslationType.Eras, TranslationWidth.Wide);
                break;
            case 'GGGGG':
                formatter = dateStrGetter(TranslationType.Eras, TranslationWidth.Narrow);
                break;
            // 1 digit representation of the year, e.g. (AD 1 => 1, AD 199 => 199)
            case 'y':
                formatter = dateGetter(DateType.FullYear, 1, 0, false, true);
                break;
            // 2 digit representation of the year, padded (00-99). (e.g. AD 2001 => 01, AD 2010 => 10)
            case 'yy':
                formatter = dateGetter(DateType.FullYear, 2, 0, true, true);
                break;
            // 3 digit representation of the year, padded (000-999). (e.g. AD 2001 => 01, AD 2010 => 10)
            case 'yyy':
                formatter = dateGetter(DateType.FullYear, 3, 0, false, true);
                break;
            // 4 digit representation of the year (e.g. AD 1 => 0001, AD 2010 => 2010)
            case 'yyyy':
                formatter = dateGetter(DateType.FullYear, 4, 0, false, true);
                break;
            // Month of the year (1-12), numeric
            case 'M':
            case 'L':
                formatter = dateGetter(DateType.Month, 1, 1);
                break;
            case 'MM':
            case 'LL':
                formatter = dateGetter(DateType.Month, 2, 1);
                break;
            // Month of the year (January, ...), string, format
            case 'MMM':
                formatter = dateStrGetter(TranslationType.Months, TranslationWidth.Abbreviated);
                break;
            case 'MMMM':
                formatter = dateStrGetter(TranslationType.Months, TranslationWidth.Wide);
                break;
            case 'MMMMM':
                formatter = dateStrGetter(TranslationType.Months, TranslationWidth.Narrow);
                break;
            // Month of the year (January, ...), string, standalone
            case 'LLL':
                formatter =
                    dateStrGetter(TranslationType.Months, TranslationWidth.Abbreviated, FormStyle.Standalone);
                break;
            case 'LLLL':
                formatter =
                    dateStrGetter(TranslationType.Months, TranslationWidth.Wide, FormStyle.Standalone);
                break;
            case 'LLLLL':
                formatter =
                    dateStrGetter(TranslationType.Months, TranslationWidth.Narrow, FormStyle.Standalone);
                break;
            // Week of the year (1, ... 52)
            case 'w':
                formatter = weekGetter(1);
                break;
            case 'ww':
                formatter = weekGetter(2);
                break;
            // Week of the month (1, ...)
            case 'W':
                formatter = weekGetter(1, true);
                break;
            // Day of the month (1-31)
            case 'd':
                formatter = dateGetter(DateType.Date, 1);
                break;
            case 'dd':
                formatter = dateGetter(DateType.Date, 2);
                break;
            // Day of the Week
            case 'E':
            case 'EE':
            case 'EEE':
                formatter = dateStrGetter(TranslationType.Days, TranslationWidth.Abbreviated);
                break;
            case 'EEEE':
                formatter = dateStrGetter(TranslationType.Days, TranslationWidth.Wide);
                break;
            case 'EEEEE':
                formatter = dateStrGetter(TranslationType.Days, TranslationWidth.Narrow);
                break;
            case 'EEEEEE':
                formatter = dateStrGetter(TranslationType.Days, TranslationWidth.Short);
                break;
            // Generic period of the day (am-pm)
            case 'a':
            case 'aa':
            case 'aaa':
                formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Abbreviated);
                break;
            case 'aaaa':
                formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Wide);
                break;
            case 'aaaaa':
                formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Narrow);
                break;
            // Extended period of the day (midnight, at night, ...), standalone
            case 'b':
            case 'bb':
            case 'bbb':
                formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Abbreviated, FormStyle.Standalone, true);
                break;
            case 'bbbb':
                formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Wide, FormStyle.Standalone, true);
                break;
            case 'bbbbb':
                formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Narrow, FormStyle.Standalone, true);
                break;
            // Extended period of the day (midnight, night, ...), standalone
            case 'B':
            case 'BB':
            case 'BBB':
                formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Abbreviated, FormStyle.Format, true);
                break;
            case 'BBBB':
                formatter =
                    dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Wide, FormStyle.Format, true);
                break;
            case 'BBBBB':
                formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Narrow, FormStyle.Format, true);
                break;
            // Hour in AM/PM, (1-12)
            case 'h':
                formatter = dateGetter(DateType.Hours, 1, -12);
                break;
            case 'hh':
                formatter = dateGetter(DateType.Hours, 2, -12);
                break;
            // Hour of the day (0-23)
            case 'H':
                formatter = dateGetter(DateType.Hours, 1);
                break;
            // Hour in day, padded (00-23)
            case 'HH':
                formatter = dateGetter(DateType.Hours, 2);
                break;
            // Minute of the hour (0-59)
            case 'm':
                formatter = dateGetter(DateType.Minutes, 1);
                break;
            case 'mm':
                formatter = dateGetter(DateType.Minutes, 2);
                break;
            // Second of the minute (0-59)
            case 's':
                formatter = dateGetter(DateType.Seconds, 1);
                break;
            case 'ss':
                formatter = dateGetter(DateType.Seconds, 2);
                break;
            // Fractional second
            case 'S':
                formatter = dateGetter(DateType.FractionalSeconds, 1);
                break;
            case 'SS':
                formatter = dateGetter(DateType.FractionalSeconds, 2);
                break;
            case 'SSS':
                formatter = dateGetter(DateType.FractionalSeconds, 3);
                break;
            // Timezone ISO8601 short format (-0430)
            case 'Z':
            case 'ZZ':
            case 'ZZZ':
                formatter = timeZoneGetter(ZoneWidth.Short);
                break;
            // Timezone ISO8601 extended format (-04:30)
            case 'ZZZZZ':
                formatter = timeZoneGetter(ZoneWidth.Extended);
                break;
            // Timezone GMT short format (GMT+4)
            case 'O':
            case 'OO':
            case 'OOO':
            // Should be location, but fallback to format O instead because we don't have the data yet
            case 'z':
            case 'zz':
            case 'zzz':
                formatter = timeZoneGetter(ZoneWidth.ShortGMT);
                break;
            // Timezone GMT long format (GMT+0430)
            case 'OOOO':
            case 'ZZZZ':
            // Should be location, but fallback to format O instead because we don't have the data yet
            case 'zzzz':
                formatter = timeZoneGetter(ZoneWidth.Long);
                break;
            default:
                return null;
        }
        DATE_FORMATS[format] = formatter;
        return formatter;
    }
    function timezoneToOffset(timezone, fallback) {
        // Support: IE 9-11 only, Edge 13-15+
        // IE/Edge do not "understand" colon (`:`) in timezone
        timezone = timezone.replace(/:/g, '');
        var requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;
        return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
    }
    function addDateMinutes(date, minutes) {
        date = new Date(date.getTime());
        date.setMinutes(date.getMinutes() + minutes);
        return date;
    }
    function convertTimezoneToLocal(date, timezone, reverse) {
        var reverseValue = reverse ? -1 : 1;
        var dateTimezoneOffset = date.getTimezoneOffset();
        var timezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
        return addDateMinutes(date, reverseValue * (timezoneOffset - dateTimezoneOffset));
    }
    /**
     * Converts a value to date.
     *
     * Supported input formats:
     * - `Date`
     * - number: timestamp
     * - string: numeric (e.g. "1234"), ISO and date strings in a format supported by
     *   [Date.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).
     *   Note: ISO strings without time return a date without timeoffset.
     *
     * Throws if unable to convert to a date.
     */
    function toDate(value) {
        if (isDate(value)) {
            return value;
        }
        if (typeof value === 'number' && !isNaN(value)) {
            return new Date(value);
        }
        if (typeof value === 'string') {
            value = value.trim();
            var parsedNb = parseFloat(value);
            // any string that only contains numbers, like "1234" but not like "1234hello"
            if (!isNaN(value - parsedNb)) {
                return new Date(parsedNb);
            }
            if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(value)) {
                /* For ISO Strings without time the day, month and year must be extracted from the ISO String
                before Date creation to avoid time offset and errors in the new Date.
                If we only replace '-' with ',' in the ISO String ("2015,01,01"), and try to create a new
                date, some browsers (e.g. IE 9) will throw an invalid Date error.
                If we leave the '-' ("2015-01-01") and try to create a new Date("2015-01-01") the timeoffset
                is applied.
                Note: ISO months are 0 for January, 1 for February, ... */
                var _a = __read(value.split('-').map(function (val) { return +val; }), 3), y = _a[0], m = _a[1], d = _a[2];
                return new Date(y, m - 1, d);
            }
            var match = void 0;
            if (match = value.match(ISO8601_DATE_REGEX)) {
                return isoStringToDate(match);
            }
        }
        var date = new Date(value);
        if (!isDate(date)) {
            throw new Error("Unable to convert \"" + value + "\" into a date");
        }
        return date;
    }
    /**
     * Converts a date in ISO8601 to a Date.
     * Used instead of `Date.parse` because of browser discrepancies.
     */
    function isoStringToDate(match) {
        var date = new Date(0);
        var tzHour = 0;
        var tzMin = 0;
        // match[8] means that the string contains "Z" (UTC) or a timezone like "+01:00" or "+0100"
        var dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear;
        var timeSetter = match[8] ? date.setUTCHours : date.setHours;
        // if there is a timezone defined like "+01:00" or "+0100"
        if (match[9]) {
            tzHour = Number(match[9] + match[10]);
            tzMin = Number(match[9] + match[11]);
        }
        dateSetter.call(date, Number(match[1]), Number(match[2]) - 1, Number(match[3]));
        var h = Number(match[4] || 0) - tzHour;
        var m = Number(match[5] || 0) - tzMin;
        var s = Number(match[6] || 0);
        var ms = Math.round(parseFloat('0.' + (match[7] || 0)) * 1000);
        timeSetter.call(date, h, m, s, ms);
        return date;
    }
    function isDate(value) {
        return value instanceof Date && !isNaN(value.valueOf());
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var NUMBER_FORMAT_REGEXP = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
    var MAX_DIGITS = 22;
    var DECIMAL_SEP = '.';
    var ZERO_CHAR = '0';
    var PATTERN_SEP = ';';
    var GROUP_SEP = ',';
    var DIGIT_CHAR = '#';
    var CURRENCY_CHAR = '¤';
    var PERCENT_CHAR = '%';
    /**
     * Transforms a number to a locale string based on a style and a format.
     */
    function formatNumberToLocaleString(value, pattern, locale, groupSymbol, decimalSymbol, digitsInfo, isPercent) {
        if (isPercent === void 0) { isPercent = false; }
        var formattedText = '';
        var isZero = false;
        if (!isFinite(value)) {
            formattedText = getLocaleNumberSymbol(locale, NumberSymbol.Infinity);
        }
        else {
            var parsedNumber = parseNumber(value);
            if (isPercent) {
                parsedNumber = toPercent(parsedNumber);
            }
            var minInt = pattern.minInt;
            var minFraction = pattern.minFrac;
            var maxFraction = pattern.maxFrac;
            if (digitsInfo) {
                var parts = digitsInfo.match(NUMBER_FORMAT_REGEXP);
                if (parts === null) {
                    throw new Error(digitsInfo + " is not a valid digit info");
                }
                var minIntPart = parts[1];
                var minFractionPart = parts[3];
                var maxFractionPart = parts[5];
                if (minIntPart != null) {
                    minInt = parseIntAutoRadix(minIntPart);
                }
                if (minFractionPart != null) {
                    minFraction = parseIntAutoRadix(minFractionPart);
                }
                if (maxFractionPart != null) {
                    maxFraction = parseIntAutoRadix(maxFractionPart);
                }
                else if (minFractionPart != null && minFraction > maxFraction) {
                    maxFraction = minFraction;
                }
            }
            roundNumber(parsedNumber, minFraction, maxFraction);
            var digits = parsedNumber.digits;
            var integerLen = parsedNumber.integerLen;
            var exponent = parsedNumber.exponent;
            var decimals = [];
            isZero = digits.every(function (d) { return !d; });
            // pad zeros for small numbers
            for (; integerLen < minInt; integerLen++) {
                digits.unshift(0);
            }
            // pad zeros for small numbers
            for (; integerLen < 0; integerLen++) {
                digits.unshift(0);
            }
            // extract decimals digits
            if (integerLen > 0) {
                decimals = digits.splice(integerLen, digits.length);
            }
            else {
                decimals = digits;
                digits = [0];
            }
            // format the integer digits with grouping separators
            var groups = [];
            if (digits.length >= pattern.lgSize) {
                groups.unshift(digits.splice(-pattern.lgSize, digits.length).join(''));
            }
            while (digits.length > pattern.gSize) {
                groups.unshift(digits.splice(-pattern.gSize, digits.length).join(''));
            }
            if (digits.length) {
                groups.unshift(digits.join(''));
            }
            formattedText = groups.join(getLocaleNumberSymbol(locale, groupSymbol));
            // append the decimal digits
            if (decimals.length) {
                formattedText += getLocaleNumberSymbol(locale, decimalSymbol) + decimals.join('');
            }
            if (exponent) {
                formattedText += getLocaleNumberSymbol(locale, NumberSymbol.Exponential) + '+' + exponent;
            }
        }
        if (value < 0 && !isZero) {
            formattedText = pattern.negPre + formattedText + pattern.negSuf;
        }
        else {
            formattedText = pattern.posPre + formattedText + pattern.posSuf;
        }
        return formattedText;
    }
    /**
     * @ngModule CommonModule
     * @description
     *
     * Formats a number as currency using locale rules.
     *
     * @param value The number to format.
     * @param locale A locale code for the locale format rules to use.
     * @param currency A string containing the currency symbol or its name,
     * such as "$" or "Canadian Dollar". Used in output string, but does not affect the operation
     * of the function.
     * @param currencyCode The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
     * currency code to use in the result string, such as `USD` for the US dollar and `EUR` for the euro.
     * @param digitInfo Decimal representation options, specified by a string in the following format:
     * `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`. See `DecimalPipe` for more details.
     *
     * @returns The formatted currency value.
     *
     * @see `formatNumber()`
     * @see `DecimalPipe`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function formatCurrency(value, locale, currency, currencyCode, digitsInfo) {
        var format = getLocaleNumberFormat(locale, NumberFormatStyle.Currency);
        var pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
        pattern.minFrac = getNumberOfCurrencyDigits(currencyCode);
        pattern.maxFrac = pattern.minFrac;
        var res = formatNumberToLocaleString(value, pattern, locale, NumberSymbol.CurrencyGroup, NumberSymbol.CurrencyDecimal, digitsInfo);
        return res
            .replace(CURRENCY_CHAR, currency)
            // if we have 2 time the currency character, the second one is ignored
            .replace(CURRENCY_CHAR, '');
    }
    /**
     * @ngModule CommonModule
     * @description
     *
     * Formats a number as a percentage according to locale rules.
     *
     * @param value The number to format.
     * @param locale A locale code for the locale format rules to use.
     * @param digitInfo Decimal representation options, specified by a string in the following format:
     * `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`. See `DecimalPipe` for more details.
     *
     * @returns The formatted percentage value.
     *
     * @see `formatNumber()`
     * @see `DecimalPipe`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     * @publicApi
     *
     */
    function formatPercent(value, locale, digitsInfo) {
        var format = getLocaleNumberFormat(locale, NumberFormatStyle.Percent);
        var pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
        var res = formatNumberToLocaleString(value, pattern, locale, NumberSymbol.Group, NumberSymbol.Decimal, digitsInfo, true);
        return res.replace(new RegExp(PERCENT_CHAR, 'g'), getLocaleNumberSymbol(locale, NumberSymbol.PercentSign));
    }
    /**
     * @ngModule CommonModule
     * @description
     *
     * Formats a number as text, with group sizing, separator, and other
     * parameters based on the locale.
     *
     * @param value The number to format.
     * @param locale A locale code for the locale format rules to use.
     * @param digitInfo Decimal representation options, specified by a string in the following format:
     * `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`. See `DecimalPipe` for more details.
     *
     * @returns The formatted text string.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function formatNumber(value, locale, digitsInfo) {
        var format = getLocaleNumberFormat(locale, NumberFormatStyle.Decimal);
        var pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
        return formatNumberToLocaleString(value, pattern, locale, NumberSymbol.Group, NumberSymbol.Decimal, digitsInfo);
    }
    function parseNumberFormat(format, minusSign) {
        if (minusSign === void 0) { minusSign = '-'; }
        var p = {
            minInt: 1,
            minFrac: 0,
            maxFrac: 0,
            posPre: '',
            posSuf: '',
            negPre: '',
            negSuf: '',
            gSize: 0,
            lgSize: 0
        };
        var patternParts = format.split(PATTERN_SEP);
        var positive = patternParts[0];
        var negative = patternParts[1];
        var positiveParts = positive.indexOf(DECIMAL_SEP) !== -1 ?
            positive.split(DECIMAL_SEP) :
            [
                positive.substring(0, positive.lastIndexOf(ZERO_CHAR) + 1),
                positive.substring(positive.lastIndexOf(ZERO_CHAR) + 1)
            ], integer = positiveParts[0], fraction = positiveParts[1] || '';
        p.posPre = integer.substr(0, integer.indexOf(DIGIT_CHAR));
        for (var i = 0; i < fraction.length; i++) {
            var ch = fraction.charAt(i);
            if (ch === ZERO_CHAR) {
                p.minFrac = p.maxFrac = i + 1;
            }
            else if (ch === DIGIT_CHAR) {
                p.maxFrac = i + 1;
            }
            else {
                p.posSuf += ch;
            }
        }
        var groups = integer.split(GROUP_SEP);
        p.gSize = groups[1] ? groups[1].length : 0;
        p.lgSize = (groups[2] || groups[1]) ? (groups[2] || groups[1]).length : 0;
        if (negative) {
            var trunkLen = positive.length - p.posPre.length - p.posSuf.length, pos = negative.indexOf(DIGIT_CHAR);
            p.negPre = negative.substr(0, pos).replace(/'/g, '');
            p.negSuf = negative.substr(pos + trunkLen).replace(/'/g, '');
        }
        else {
            p.negPre = minusSign + p.posPre;
            p.negSuf = p.posSuf;
        }
        return p;
    }
    // Transforms a parsed number into a percentage by multiplying it by 100
    function toPercent(parsedNumber) {
        // if the number is 0, don't do anything
        if (parsedNumber.digits[0] === 0) {
            return parsedNumber;
        }
        // Getting the current number of decimals
        var fractionLen = parsedNumber.digits.length - parsedNumber.integerLen;
        if (parsedNumber.exponent) {
            parsedNumber.exponent += 2;
        }
        else {
            if (fractionLen === 0) {
                parsedNumber.digits.push(0, 0);
            }
            else if (fractionLen === 1) {
                parsedNumber.digits.push(0);
            }
            parsedNumber.integerLen += 2;
        }
        return parsedNumber;
    }
    /**
     * Parses a number.
     * Significant bits of this parse algorithm came from https://github.com/MikeMcl/big.js/
     */
    function parseNumber(num) {
        var numStr = Math.abs(num) + '';
        var exponent = 0, digits, integerLen;
        var i, j, zeros;
        // Decimal point?
        if ((integerLen = numStr.indexOf(DECIMAL_SEP)) > -1) {
            numStr = numStr.replace(DECIMAL_SEP, '');
        }
        // Exponential form?
        if ((i = numStr.search(/e/i)) > 0) {
            // Work out the exponent.
            if (integerLen < 0)
                integerLen = i;
            integerLen += +numStr.slice(i + 1);
            numStr = numStr.substring(0, i);
        }
        else if (integerLen < 0) {
            // There was no decimal point or exponent so it is an integer.
            integerLen = numStr.length;
        }
        // Count the number of leading zeros.
        for (i = 0; numStr.charAt(i) === ZERO_CHAR; i++) { /* empty */
        }
        if (i === (zeros = numStr.length)) {
            // The digits are all zero.
            digits = [0];
            integerLen = 1;
        }
        else {
            // Count the number of trailing zeros
            zeros--;
            while (numStr.charAt(zeros) === ZERO_CHAR)
                zeros--;
            // Trailing zeros are insignificant so ignore them
            integerLen -= i;
            digits = [];
            // Convert string to array of digits without leading/trailing zeros.
            for (j = 0; i <= zeros; i++, j++) {
                digits[j] = Number(numStr.charAt(i));
            }
        }
        // If the number overflows the maximum allowed digits then use an exponent.
        if (integerLen > MAX_DIGITS) {
            digits = digits.splice(0, MAX_DIGITS - 1);
            exponent = integerLen - 1;
            integerLen = 1;
        }
        return { digits: digits, exponent: exponent, integerLen: integerLen };
    }
    /**
     * Round the parsed number to the specified number of decimal places
     * This function changes the parsedNumber in-place
     */
    function roundNumber(parsedNumber, minFrac, maxFrac) {
        if (minFrac > maxFrac) {
            throw new Error("The minimum number of digits after fraction (" + minFrac + ") is higher than the maximum (" + maxFrac + ").");
        }
        var digits = parsedNumber.digits;
        var fractionLen = digits.length - parsedNumber.integerLen;
        var fractionSize = Math.min(Math.max(minFrac, fractionLen), maxFrac);
        // The index of the digit to where rounding is to occur
        var roundAt = fractionSize + parsedNumber.integerLen;
        var digit = digits[roundAt];
        if (roundAt > 0) {
            // Drop fractional digits beyond `roundAt`
            digits.splice(Math.max(parsedNumber.integerLen, roundAt));
            // Set non-fractional digits beyond `roundAt` to 0
            for (var j = roundAt; j < digits.length; j++) {
                digits[j] = 0;
            }
        }
        else {
            // We rounded to zero so reset the parsedNumber
            fractionLen = Math.max(0, fractionLen);
            parsedNumber.integerLen = 1;
            digits.length = Math.max(1, roundAt = fractionSize + 1);
            digits[0] = 0;
            for (var i = 1; i < roundAt; i++)
                digits[i] = 0;
        }
        if (digit >= 5) {
            if (roundAt - 1 < 0) {
                for (var k = 0; k > roundAt; k--) {
                    digits.unshift(0);
                    parsedNumber.integerLen++;
                }
                digits.unshift(1);
                parsedNumber.integerLen++;
            }
            else {
                digits[roundAt - 1]++;
            }
        }
        // Pad out with zeros to get the required fraction length
        for (; fractionLen < Math.max(0, fractionSize); fractionLen++)
            digits.push(0);
        var dropTrailingZeros = fractionSize !== 0;
        // Minimal length = nb of decimals required + current nb of integers
        // Any number besides that is optional and can be removed if it's a trailing 0
        var minLen = minFrac + parsedNumber.integerLen;
        // Do any carrying, e.g. a digit was rounded up to 10
        var carry = digits.reduceRight(function (carry, d, i, digits) {
            d = d + carry;
            digits[i] = d < 10 ? d : d - 10; // d % 10
            if (dropTrailingZeros) {
                // Do not keep meaningless fractional trailing zeros (e.g. 15.52000 --> 15.52)
                if (digits[i] === 0 && i >= minLen) {
                    digits.pop();
                }
                else {
                    dropTrailingZeros = false;
                }
            }
            return d >= 10 ? 1 : 0; // Math.floor(d / 10);
        }, 0);
        if (carry) {
            digits.unshift(carry);
            parsedNumber.integerLen++;
        }
    }
    function parseIntAutoRadix(text) {
        var result = parseInt(text);
        if (isNaN(result)) {
            throw new Error('Invalid integer literal when parsing ' + text);
        }
        return result;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @deprecated from v5
     */
    var DEPRECATED_PLURAL_FN = new core.InjectionToken('UseV4Plurals');
    /**
     * @publicApi
     */
    var NgLocalization = /** @class */ (function () {
        function NgLocalization() {
        }
        return NgLocalization;
    }());
    /**
     * Returns the plural category for a given value.
     * - "=value" when the case exists,
     * - the plural category otherwise
     */
    function getPluralCategory(value, cases, ngLocalization, locale) {
        var key = "=" + value;
        if (cases.indexOf(key) > -1) {
            return key;
        }
        key = ngLocalization.getPluralCategory(value, locale);
        if (cases.indexOf(key) > -1) {
            return key;
        }
        if (cases.indexOf('other') > -1) {
            return 'other';
        }
        throw new Error("No plural message found for value \"" + value + "\"");
    }
    /**
     * Returns the plural case based on the locale
     *
     * @publicApi
     */
    var NgLocaleLocalization = /** @class */ (function (_super) {
        __extends(NgLocaleLocalization, _super);
        function NgLocaleLocalization(locale, 
        /** @deprecated from v5 */
        deprecatedPluralFn) {
            var _this = _super.call(this) || this;
            _this.locale = locale;
            _this.deprecatedPluralFn = deprecatedPluralFn;
            return _this;
        }
        NgLocaleLocalization.prototype.getPluralCategory = function (value, locale) {
            var plural = this.deprecatedPluralFn ? this.deprecatedPluralFn(locale || this.locale, value) :
                getLocalePluralCase(locale || this.locale)(value);
            switch (plural) {
                case Plural.Zero:
                    return 'zero';
                case Plural.One:
                    return 'one';
                case Plural.Two:
                    return 'two';
                case Plural.Few:
                    return 'few';
                case Plural.Many:
                    return 'many';
                default:
                    return 'other';
            }
        };
        NgLocaleLocalization = __decorate([
            core.Injectable(),
            __param(0, core.Inject(core.LOCALE_ID)),
            __param(1, core.Optional()), __param(1, core.Inject(DEPRECATED_PLURAL_FN)),
            __metadata("design:paramtypes", [String, Object])
        ], NgLocaleLocalization);
        return NgLocaleLocalization;
    }(NgLocalization));
    /**
     * Returns the plural case based on the locale
     *
     * @deprecated from v5 the plural case function is in locale data files common/locales/*.ts
     * @publicApi
     */
    function getPluralCase(locale, nLike) {
        // TODO(vicb): lazy compute
        if (typeof nLike === 'string') {
            nLike = parseInt(nLike, 10);
        }
        var n = nLike;
        var nDecimal = n.toString().replace(/^[^.]*\.?/, '');
        var i = Math.floor(Math.abs(n));
        var v = nDecimal.length;
        var f = parseInt(nDecimal, 10);
        var t = parseInt(n.toString().replace(/^[^.]*\.?|0+$/g, ''), 10) || 0;
        var lang = locale.split('-')[0].toLowerCase();
        switch (lang) {
            case 'af':
            case 'asa':
            case 'az':
            case 'bem':
            case 'bez':
            case 'bg':
            case 'brx':
            case 'ce':
            case 'cgg':
            case 'chr':
            case 'ckb':
            case 'ee':
            case 'el':
            case 'eo':
            case 'es':
            case 'eu':
            case 'fo':
            case 'fur':
            case 'gsw':
            case 'ha':
            case 'haw':
            case 'hu':
            case 'jgo':
            case 'jmc':
            case 'ka':
            case 'kk':
            case 'kkj':
            case 'kl':
            case 'ks':
            case 'ksb':
            case 'ky':
            case 'lb':
            case 'lg':
            case 'mas':
            case 'mgo':
            case 'ml':
            case 'mn':
            case 'nb':
            case 'nd':
            case 'ne':
            case 'nn':
            case 'nnh':
            case 'nyn':
            case 'om':
            case 'or':
            case 'os':
            case 'ps':
            case 'rm':
            case 'rof':
            case 'rwk':
            case 'saq':
            case 'seh':
            case 'sn':
            case 'so':
            case 'sq':
            case 'ta':
            case 'te':
            case 'teo':
            case 'tk':
            case 'tr':
            case 'ug':
            case 'uz':
            case 'vo':
            case 'vun':
            case 'wae':
            case 'xog':
                if (n === 1)
                    return Plural.One;
                return Plural.Other;
            case 'ak':
            case 'ln':
            case 'mg':
            case 'pa':
            case 'ti':
                if (n === Math.floor(n) && n >= 0 && n <= 1)
                    return Plural.One;
                return Plural.Other;
            case 'am':
            case 'as':
            case 'bn':
            case 'fa':
            case 'gu':
            case 'hi':
            case 'kn':
            case 'mr':
            case 'zu':
                if (i === 0 || n === 1)
                    return Plural.One;
                return Plural.Other;
            case 'ar':
                if (n === 0)
                    return Plural.Zero;
                if (n === 1)
                    return Plural.One;
                if (n === 2)
                    return Plural.Two;
                if (n % 100 === Math.floor(n % 100) && n % 100 >= 3 && n % 100 <= 10)
                    return Plural.Few;
                if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 99)
                    return Plural.Many;
                return Plural.Other;
            case 'ast':
            case 'ca':
            case 'de':
            case 'en':
            case 'et':
            case 'fi':
            case 'fy':
            case 'gl':
            case 'it':
            case 'nl':
            case 'sv':
            case 'sw':
            case 'ur':
            case 'yi':
                if (i === 1 && v === 0)
                    return Plural.One;
                return Plural.Other;
            case 'be':
                if (n % 10 === 1 && !(n % 100 === 11))
                    return Plural.One;
                if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 4 &&
                    !(n % 100 >= 12 && n % 100 <= 14))
                    return Plural.Few;
                if (n % 10 === 0 || n % 10 === Math.floor(n % 10) && n % 10 >= 5 && n % 10 <= 9 ||
                    n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 14)
                    return Plural.Many;
                return Plural.Other;
            case 'br':
                if (n % 10 === 1 && !(n % 100 === 11 || n % 100 === 71 || n % 100 === 91))
                    return Plural.One;
                if (n % 10 === 2 && !(n % 100 === 12 || n % 100 === 72 || n % 100 === 92))
                    return Plural.Two;
                if (n % 10 === Math.floor(n % 10) && (n % 10 >= 3 && n % 10 <= 4 || n % 10 === 9) &&
                    !(n % 100 >= 10 && n % 100 <= 19 || n % 100 >= 70 && n % 100 <= 79 ||
                        n % 100 >= 90 && n % 100 <= 99))
                    return Plural.Few;
                if (!(n === 0) && n % 1e6 === 0)
                    return Plural.Many;
                return Plural.Other;
            case 'bs':
            case 'hr':
            case 'sr':
                if (v === 0 && i % 10 === 1 && !(i % 100 === 11) || f % 10 === 1 && !(f % 100 === 11))
                    return Plural.One;
                if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
                    !(i % 100 >= 12 && i % 100 <= 14) ||
                    f % 10 === Math.floor(f % 10) && f % 10 >= 2 && f % 10 <= 4 &&
                        !(f % 100 >= 12 && f % 100 <= 14))
                    return Plural.Few;
                return Plural.Other;
            case 'cs':
            case 'sk':
                if (i === 1 && v === 0)
                    return Plural.One;
                if (i === Math.floor(i) && i >= 2 && i <= 4 && v === 0)
                    return Plural.Few;
                if (!(v === 0))
                    return Plural.Many;
                return Plural.Other;
            case 'cy':
                if (n === 0)
                    return Plural.Zero;
                if (n === 1)
                    return Plural.One;
                if (n === 2)
                    return Plural.Two;
                if (n === 3)
                    return Plural.Few;
                if (n === 6)
                    return Plural.Many;
                return Plural.Other;
            case 'da':
                if (n === 1 || !(t === 0) && (i === 0 || i === 1))
                    return Plural.One;
                return Plural.Other;
            case 'dsb':
            case 'hsb':
                if (v === 0 && i % 100 === 1 || f % 100 === 1)
                    return Plural.One;
                if (v === 0 && i % 100 === 2 || f % 100 === 2)
                    return Plural.Two;
                if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 ||
                    f % 100 === Math.floor(f % 100) && f % 100 >= 3 && f % 100 <= 4)
                    return Plural.Few;
                return Plural.Other;
            case 'ff':
            case 'fr':
            case 'hy':
            case 'kab':
                if (i === 0 || i === 1)
                    return Plural.One;
                return Plural.Other;
            case 'fil':
                if (v === 0 && (i === 1 || i === 2 || i === 3) ||
                    v === 0 && !(i % 10 === 4 || i % 10 === 6 || i % 10 === 9) ||
                    !(v === 0) && !(f % 10 === 4 || f % 10 === 6 || f % 10 === 9))
                    return Plural.One;
                return Plural.Other;
            case 'ga':
                if (n === 1)
                    return Plural.One;
                if (n === 2)
                    return Plural.Two;
                if (n === Math.floor(n) && n >= 3 && n <= 6)
                    return Plural.Few;
                if (n === Math.floor(n) && n >= 7 && n <= 10)
                    return Plural.Many;
                return Plural.Other;
            case 'gd':
                if (n === 1 || n === 11)
                    return Plural.One;
                if (n === 2 || n === 12)
                    return Plural.Two;
                if (n === Math.floor(n) && (n >= 3 && n <= 10 || n >= 13 && n <= 19))
                    return Plural.Few;
                return Plural.Other;
            case 'gv':
                if (v === 0 && i % 10 === 1)
                    return Plural.One;
                if (v === 0 && i % 10 === 2)
                    return Plural.Two;
                if (v === 0 &&
                    (i % 100 === 0 || i % 100 === 20 || i % 100 === 40 || i % 100 === 60 || i % 100 === 80))
                    return Plural.Few;
                if (!(v === 0))
                    return Plural.Many;
                return Plural.Other;
            case 'he':
                if (i === 1 && v === 0)
                    return Plural.One;
                if (i === 2 && v === 0)
                    return Plural.Two;
                if (v === 0 && !(n >= 0 && n <= 10) && n % 10 === 0)
                    return Plural.Many;
                return Plural.Other;
            case 'is':
                if (t === 0 && i % 10 === 1 && !(i % 100 === 11) || !(t === 0))
                    return Plural.One;
                return Plural.Other;
            case 'ksh':
                if (n === 0)
                    return Plural.Zero;
                if (n === 1)
                    return Plural.One;
                return Plural.Other;
            case 'kw':
            case 'naq':
            case 'se':
            case 'smn':
                if (n === 1)
                    return Plural.One;
                if (n === 2)
                    return Plural.Two;
                return Plural.Other;
            case 'lag':
                if (n === 0)
                    return Plural.Zero;
                if ((i === 0 || i === 1) && !(n === 0))
                    return Plural.One;
                return Plural.Other;
            case 'lt':
                if (n % 10 === 1 && !(n % 100 >= 11 && n % 100 <= 19))
                    return Plural.One;
                if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 9 &&
                    !(n % 100 >= 11 && n % 100 <= 19))
                    return Plural.Few;
                if (!(f === 0))
                    return Plural.Many;
                return Plural.Other;
            case 'lv':
            case 'prg':
                if (n % 10 === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19 ||
                    v === 2 && f % 100 === Math.floor(f % 100) && f % 100 >= 11 && f % 100 <= 19)
                    return Plural.Zero;
                if (n % 10 === 1 && !(n % 100 === 11) || v === 2 && f % 10 === 1 && !(f % 100 === 11) ||
                    !(v === 2) && f % 10 === 1)
                    return Plural.One;
                return Plural.Other;
            case 'mk':
                if (v === 0 && i % 10 === 1 || f % 10 === 1)
                    return Plural.One;
                return Plural.Other;
            case 'mt':
                if (n === 1)
                    return Plural.One;
                if (n === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 2 && n % 100 <= 10)
                    return Plural.Few;
                if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19)
                    return Plural.Many;
                return Plural.Other;
            case 'pl':
                if (i === 1 && v === 0)
                    return Plural.One;
                if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
                    !(i % 100 >= 12 && i % 100 <= 14))
                    return Plural.Few;
                if (v === 0 && !(i === 1) && i % 10 === Math.floor(i % 10) && i % 10 >= 0 && i % 10 <= 1 ||
                    v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 ||
                    v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 12 && i % 100 <= 14)
                    return Plural.Many;
                return Plural.Other;
            case 'pt':
                if (n === Math.floor(n) && n >= 0 && n <= 2 && !(n === 2))
                    return Plural.One;
                return Plural.Other;
            case 'ro':
                if (i === 1 && v === 0)
                    return Plural.One;
                if (!(v === 0) || n === 0 ||
                    !(n === 1) && n % 100 === Math.floor(n % 100) && n % 100 >= 1 && n % 100 <= 19)
                    return Plural.Few;
                return Plural.Other;
            case 'ru':
            case 'uk':
                if (v === 0 && i % 10 === 1 && !(i % 100 === 11))
                    return Plural.One;
                if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
                    !(i % 100 >= 12 && i % 100 <= 14))
                    return Plural.Few;
                if (v === 0 && i % 10 === 0 ||
                    v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 ||
                    v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 11 && i % 100 <= 14)
                    return Plural.Many;
                return Plural.Other;
            case 'shi':
                if (i === 0 || n === 1)
                    return Plural.One;
                if (n === Math.floor(n) && n >= 2 && n <= 10)
                    return Plural.Few;
                return Plural.Other;
            case 'si':
                if (n === 0 || n === 1 || i === 0 && f === 1)
                    return Plural.One;
                return Plural.Other;
            case 'sl':
                if (v === 0 && i % 100 === 1)
                    return Plural.One;
                if (v === 0 && i % 100 === 2)
                    return Plural.Two;
                if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 || !(v === 0))
                    return Plural.Few;
                return Plural.Other;
            case 'tzm':
                if (n === Math.floor(n) && n >= 0 && n <= 1 || n === Math.floor(n) && n >= 11 && n <= 99)
                    return Plural.One;
                return Plural.Other;
            // When there is no specification, the default is always "other"
            // Spec: http://cldr.unicode.org/index/cldr-spec/plural-rules
            // > other (required—general plural form — also used if the language only has a single form)
            default:
                return Plural.Other;
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @ngModule CommonModule
     *
     * @usageNotes
     * ```
     *     <some-element [ngClass]="'first second'">...</some-element>
     *
     *     <some-element [ngClass]="['first', 'second']">...</some-element>
     *
     *     <some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>
     *
     *     <some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>
     *
     *     <some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
     * ```
     *
     * @description
     *
     * Adds and removes CSS classes on an HTML element.
     *
     * The CSS classes are updated as follows, depending on the type of the expression evaluation:
     * - `string` - the CSS classes listed in the string (space delimited) are added,
     * - `Array` - the CSS classes declared as Array elements are added,
     * - `Object` - keys are CSS classes that get added when the expression given in the value
     *              evaluates to a truthy value, otherwise they are removed.
     *
     * @publicApi
     */
    var NgClass = /** @class */ (function () {
        function NgClass(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer) {
            this._iterableDiffers = _iterableDiffers;
            this._keyValueDiffers = _keyValueDiffers;
            this._ngEl = _ngEl;
            this._renderer = _renderer;
            this._initialClasses = [];
        }
        Object.defineProperty(NgClass.prototype, "klass", {
            set: function (value) {
                this._removeClasses(this._initialClasses);
                this._initialClasses = typeof value === 'string' ? value.split(/\s+/) : [];
                this._applyClasses(this._initialClasses);
                this._applyClasses(this._rawClass);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgClass.prototype, "ngClass", {
            set: function (value) {
                this._removeClasses(this._rawClass);
                this._applyClasses(this._initialClasses);
                this._iterableDiffer = null;
                this._keyValueDiffer = null;
                this._rawClass = typeof value === 'string' ? value.split(/\s+/) : value;
                if (this._rawClass) {
                    if (core.ɵisListLikeIterable(this._rawClass)) {
                        this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create();
                    }
                    else {
                        this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create();
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        NgClass.prototype.ngDoCheck = function () {
            if (this._iterableDiffer) {
                var iterableChanges = this._iterableDiffer.diff(this._rawClass);
                if (iterableChanges) {
                    this._applyIterableChanges(iterableChanges);
                }
            }
            else if (this._keyValueDiffer) {
                var keyValueChanges = this._keyValueDiffer.diff(this._rawClass);
                if (keyValueChanges) {
                    this._applyKeyValueChanges(keyValueChanges);
                }
            }
        };
        NgClass.prototype._applyKeyValueChanges = function (changes) {
            var _this = this;
            changes.forEachAddedItem(function (record) { return _this._toggleClass(record.key, record.currentValue); });
            changes.forEachChangedItem(function (record) { return _this._toggleClass(record.key, record.currentValue); });
            changes.forEachRemovedItem(function (record) {
                if (record.previousValue) {
                    _this._toggleClass(record.key, false);
                }
            });
        };
        NgClass.prototype._applyIterableChanges = function (changes) {
            var _this = this;
            changes.forEachAddedItem(function (record) {
                if (typeof record.item === 'string') {
                    _this._toggleClass(record.item, true);
                }
                else {
                    throw new Error("NgClass can only toggle CSS classes expressed as strings, got " + core.ɵstringify(record.item));
                }
            });
            changes.forEachRemovedItem(function (record) { return _this._toggleClass(record.item, false); });
        };
        /**
         * Applies a collection of CSS classes to the DOM element.
         *
         * For argument of type Set and Array CSS class names contained in those collections are always
         * added.
         * For argument of type Map CSS class name in the map's key is toggled based on the value (added
         * for truthy and removed for falsy).
         */
        NgClass.prototype._applyClasses = function (rawClassVal) {
            var _this = this;
            if (rawClassVal) {
                if (Array.isArray(rawClassVal) || rawClassVal instanceof Set) {
                    rawClassVal.forEach(function (klass) { return _this._toggleClass(klass, true); });
                }
                else {
                    Object.keys(rawClassVal).forEach(function (klass) { return _this._toggleClass(klass, !!rawClassVal[klass]); });
                }
            }
        };
        /**
         * Removes a collection of CSS classes from the DOM element. This is mostly useful for cleanup
         * purposes.
         */
        NgClass.prototype._removeClasses = function (rawClassVal) {
            var _this = this;
            if (rawClassVal) {
                if (Array.isArray(rawClassVal) || rawClassVal instanceof Set) {
                    rawClassVal.forEach(function (klass) { return _this._toggleClass(klass, false); });
                }
                else {
                    Object.keys(rawClassVal).forEach(function (klass) { return _this._toggleClass(klass, false); });
                }
            }
        };
        NgClass.prototype._toggleClass = function (klass, enabled) {
            var _this = this;
            klass = klass.trim();
            if (klass) {
                klass.split(/\s+/g).forEach(function (klass) {
                    if (enabled) {
                        _this._renderer.addClass(_this._ngEl.nativeElement, klass);
                    }
                    else {
                        _this._renderer.removeClass(_this._ngEl.nativeElement, klass);
                    }
                });
            }
        };
        __decorate([
            core.Input('class'),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], NgClass.prototype, "klass", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], NgClass.prototype, "ngClass", null);
        NgClass = __decorate([
            core.Directive({ selector: '[ngClass]' }),
            __metadata("design:paramtypes", [core.IterableDiffers, core.KeyValueDiffers,
                core.ElementRef, core.Renderer2])
        ], NgClass);
        return NgClass;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Instantiates a single {@link Component} type and inserts its Host View into current View.
     * `NgComponentOutlet` provides a declarative approach for dynamic component creation.
     *
     * `NgComponentOutlet` requires a component type, if a falsy value is set the view will clear and
     * any existing component will get destroyed.
     *
     * @usageNotes
     *
     * ### Fine tune control
     *
     * You can control the component creation process by using the following optional attributes:
     *
     * * `ngComponentOutletInjector`: Optional custom {@link Injector} that will be used as parent for
     * the Component. Defaults to the injector of the current view container.
     *
     * * `ngComponentOutletContent`: Optional list of projectable nodes to insert into the content
     * section of the component, if exists.
     *
     * * `ngComponentOutletNgModuleFactory`: Optional module factory to allow dynamically loading other
     * module, then load a component from that module.
     *
     * ### Syntax
     *
     * Simple
     * ```
     * <ng-container *ngComponentOutlet="componentTypeExpression"></ng-container>
     * ```
     *
     * Customized injector/content
     * ```
     * <ng-container *ngComponentOutlet="componentTypeExpression;
     *                                   injector: injectorExpression;
     *                                   content: contentNodesExpression;">
     * </ng-container>
     * ```
     *
     * Customized ngModuleFactory
     * ```
     * <ng-container *ngComponentOutlet="componentTypeExpression;
     *                                   ngModuleFactory: moduleFactory;">
     * </ng-container>
     * ```
     *
     * ### A simple example
     *
     * {@example common/ngComponentOutlet/ts/module.ts region='SimpleExample'}
     *
     * A more complete example with additional options:
     *
     * {@example common/ngComponentOutlet/ts/module.ts region='CompleteExample'}

     * A more complete example with ngModuleFactory:
     *
     * {@example common/ngComponentOutlet/ts/module.ts region='NgModuleFactoryExample'}
     *
     * @publicApi
     * @ngModule CommonModule
     */
    var NgComponentOutlet = /** @class */ (function () {
        function NgComponentOutlet(_viewContainerRef) {
            this._viewContainerRef = _viewContainerRef;
            this._componentRef = null;
            this._moduleRef = null;
        }
        NgComponentOutlet.prototype.ngOnChanges = function (changes) {
            this._viewContainerRef.clear();
            this._componentRef = null;
            if (this.ngComponentOutlet) {
                var elInjector = this.ngComponentOutletInjector || this._viewContainerRef.parentInjector;
                if (changes['ngComponentOutletNgModuleFactory']) {
                    if (this._moduleRef)
                        this._moduleRef.destroy();
                    if (this.ngComponentOutletNgModuleFactory) {
                        var parentModule = elInjector.get(core.NgModuleRef);
                        this._moduleRef = this.ngComponentOutletNgModuleFactory.create(parentModule.injector);
                    }
                    else {
                        this._moduleRef = null;
                    }
                }
                var componentFactoryResolver = this._moduleRef ? this._moduleRef.componentFactoryResolver :
                    elInjector.get(core.ComponentFactoryResolver);
                var componentFactory = componentFactoryResolver.resolveComponentFactory(this.ngComponentOutlet);
                this._componentRef = this._viewContainerRef.createComponent(componentFactory, this._viewContainerRef.length, elInjector, this.ngComponentOutletContent);
            }
        };
        NgComponentOutlet.prototype.ngOnDestroy = function () {
            if (this._moduleRef)
                this._moduleRef.destroy();
        };
        __decorate([
            core.Input(),
            __metadata("design:type", core.Type)
        ], NgComponentOutlet.prototype, "ngComponentOutlet", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.Injector)
        ], NgComponentOutlet.prototype, "ngComponentOutletInjector", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], NgComponentOutlet.prototype, "ngComponentOutletContent", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.NgModuleFactory)
        ], NgComponentOutlet.prototype, "ngComponentOutletNgModuleFactory", void 0);
        NgComponentOutlet = __decorate([
            core.Directive({ selector: '[ngComponentOutlet]' }),
            __metadata("design:paramtypes", [core.ViewContainerRef])
        ], NgComponentOutlet);
        return NgComponentOutlet;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @publicApi
     */
    var NgForOfContext = /** @class */ (function () {
        function NgForOfContext($implicit, ngForOf, index, count) {
            this.$implicit = $implicit;
            this.ngForOf = ngForOf;
            this.index = index;
            this.count = count;
        }
        Object.defineProperty(NgForOfContext.prototype, "first", {
            get: function () { return this.index === 0; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForOfContext.prototype, "last", {
            get: function () { return this.index === this.count - 1; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForOfContext.prototype, "even", {
            get: function () { return this.index % 2 === 0; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForOfContext.prototype, "odd", {
            get: function () { return !this.even; },
            enumerable: true,
            configurable: true
        });
        return NgForOfContext;
    }());
    /**
     * A [structural directive](guide/structural-directives) that renders
     * a template for each item in a collection.
     * The directive is placed on an element, which becomes the parent
     * of the cloned templates.
     *
     * The `ngForOf` is generally used in the
     * [shorthand form](guide/structural-directives#the-asterisk--prefix) `*ngFor`.
     * In this form, the template to be rendered for each iteration is the content
     * of an anchor element containing the directive.
     *
     * The following example shows the shorthand syntax with some options,
     * contained in an `<li>` element.
     *
     * ```
     * <li *ngFor="let item of items; index as i; trackBy: trackByFn">...</li>
     * ```
     *
     * The shorthand form expands into a long form that uses the `ngForOf` selector
     * on an `<ng-template>` element.
     * The content of the `<ng-template>` element is the `<li>` element that held the
     * short-form directive.
     *
     * Here is the expanded version of the short-form example.
     *
     * ```
     * <ng-template ngFor let-item [ngForOf]="items" let-i="index" [ngForTrackBy]="trackByFn">
     *   <li>...</li>
     * </ng-template>
     * ```
     *
     * Angular automatically expands the shorthand syntax as it compiles the template.
     * The context for each embedded view is logically merged to the current component
     * context according to its lexical position.
     *
     * When using the shorthand syntax, Angular allows only [one structural directive
     * on an element](guide/structural-directives#one-structural-directive-per-host-element).
     * If you want to iterate conditionally, for example,
     * put the `*ngIf` on a container element that wraps the `*ngFor` element.
     * For futher discussion, see
     * [Structural Directives](guide/structural-directives#one-per-element).
     *
     * @usageNotes
     *
     * ### Local variables
     *
     * `NgForOf` provides exported values that can be aliased to local variables.
     * For example:
     *
     *  ```
     * <li *ngFor="let user of userObservable | async as users; index as i; first as isFirst">
     *    {{i}}/{{users.length}}. {{user}} <span *ngIf="isFirst">default</span>
     * </li>
     * ```
     *
     * The following exported values can be aliased to local variables:
     *
     * - `$implicit: T`: The value of the individual items in the iterable (`ngForOf`).
     * - `ngForOf: NgIterable<T>`: The value of the iterable expression. Useful when the expression is
     * more complex then a property access, for example when using the async pipe (`userStreams |
     * async`).
     * - `index: number`: The index of the current item in the iterable.
     * - `first: boolean`: True when the item is the first item in the iterable.
     * - `last: boolean`: True when the item is the last item in the iterable.
     * - `even: boolean`: True when the item has an even index in the iterable.
     * - `odd: boolean`: True when the item has an odd index in the iterable.
     *
     * ### Change propagation
     *
     * When the contents of the iterator changes, `NgForOf` makes the corresponding changes to the DOM:
     *
     * * When an item is added, a new instance of the template is added to the DOM.
     * * When an item is removed, its template instance is removed from the DOM.
     * * When items are reordered, their respective templates are reordered in the DOM.
     *
     * Angular uses object identity to track insertions and deletions within the iterator and reproduce
     * those changes in the DOM. This has important implications for animations and any stateful
     * controls that are present, such as `<input>` elements that accept user input. Inserted rows can
     * be animated in, deleted rows can be animated out, and unchanged rows retain any unsaved state
     * such as user input.
     * For more on animations, see [Transitions and Triggers](guide/transition-and-triggers).
     *
     * The identities of elements in the iterator can change while the data does not.
     * This can happen, for example, if the iterator is produced from an RPC to the server, and that
     * RPC is re-run. Even if the data hasn't changed, the second response produces objects with
     * different identities, and Angular must tear down the entire DOM and rebuild it (as if all old
     * elements were deleted and all new elements inserted).
     *
     * To avoid this expensive operation, you can customize the default tracking algorithm.
     * by supplying the `trackBy` option to `NgForOf`.
     * `trackBy` takes a function that has two arguments: `index` and `item`.
     * If `trackBy` is given, Angular tracks changes by the return value of the function.
     *
     * @see [Structural Directives](guide/structural-directives)
     * @ngModule CommonModule
     * @publicApi
     */
    var NgForOf = /** @class */ (function () {
        function NgForOf(_viewContainer, _template, _differs) {
            this._viewContainer = _viewContainer;
            this._template = _template;
            this._differs = _differs;
            this._ngForOfDirty = true;
            this._differ = null;
        }
        Object.defineProperty(NgForOf.prototype, "ngForOf", {
            set: function (ngForOf) {
                this._ngForOf = ngForOf;
                this._ngForOfDirty = true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForOf.prototype, "ngForTrackBy", {
            get: function () { return this._trackByFn; },
            set: function (fn) {
                if (core.isDevMode() && fn != null && typeof fn !== 'function') {
                    // TODO(vicb): use a log service once there is a public one available
                    if (console && console.warn) {
                        console.warn("trackBy must be a function, but received " + JSON.stringify(fn) + ". " +
                            "See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information.");
                    }
                }
                this._trackByFn = fn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForOf.prototype, "ngForTemplate", {
            set: function (value) {
                // TODO(TS2.1): make TemplateRef<Partial<NgForRowOf<T>>> once we move to TS v2.1
                // The current type is too restrictive; a template that just uses index, for example,
                // should be acceptable.
                if (value) {
                    this._template = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        NgForOf.prototype.ngDoCheck = function () {
            if (this._ngForOfDirty) {
                this._ngForOfDirty = false;
                // React on ngForOf changes only once all inputs have been initialized
                var value = this._ngForOf;
                if (!this._differ && value) {
                    try {
                        this._differ = this._differs.find(value).create(this.ngForTrackBy);
                    }
                    catch (_a) {
                        throw new Error("Cannot find a differ supporting object '" + value + "' of type '" + getTypeNameForDebugging(value) + "'. NgFor only supports binding to Iterables such as Arrays.");
                    }
                }
            }
            if (this._differ) {
                var changes = this._differ.diff(this._ngForOf);
                if (changes)
                    this._applyChanges(changes);
            }
        };
        NgForOf.prototype._applyChanges = function (changes) {
            var _this = this;
            var insertTuples = [];
            changes.forEachOperation(function (item, adjustedPreviousIndex, currentIndex) {
                if (item.previousIndex == null) {
                    var view = _this._viewContainer.createEmbeddedView(_this._template, new NgForOfContext(null, _this._ngForOf, -1, -1), currentIndex);
                    var tuple = new RecordViewTuple(item, view);
                    insertTuples.push(tuple);
                }
                else if (currentIndex == null) {
                    _this._viewContainer.remove(adjustedPreviousIndex);
                }
                else {
                    var view = _this._viewContainer.get(adjustedPreviousIndex);
                    _this._viewContainer.move(view, currentIndex);
                    var tuple = new RecordViewTuple(item, view);
                    insertTuples.push(tuple);
                }
            });
            for (var i = 0; i < insertTuples.length; i++) {
                this._perViewChange(insertTuples[i].view, insertTuples[i].record);
            }
            for (var i = 0, ilen = this._viewContainer.length; i < ilen; i++) {
                var viewRef = this._viewContainer.get(i);
                viewRef.context.index = i;
                viewRef.context.count = ilen;
                viewRef.context.ngForOf = this._ngForOf;
            }
            changes.forEachIdentityChange(function (record) {
                var viewRef = _this._viewContainer.get(record.currentIndex);
                viewRef.context.$implicit = record.item;
            });
        };
        NgForOf.prototype._perViewChange = function (view, record) {
            view.context.$implicit = record.item;
        };
        /**
         * Asserts the correct type of the context for the template that `NgForOf` will render.
         *
         * The presence of this method is a signal to the Ivy template type-check compiler that the
         * `NgForOf` structural directive renders its template with a specific context type.
         */
        NgForOf.ngTemplateContextGuard = function (dir, ctx) {
            return true;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], NgForOf.prototype, "ngForOf", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Function])
        ], NgForOf.prototype, "ngForTrackBy", null);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef),
            __metadata("design:paramtypes", [core.TemplateRef])
        ], NgForOf.prototype, "ngForTemplate", null);
        NgForOf = __decorate([
            core.Directive({ selector: '[ngFor][ngForOf]' }),
            __metadata("design:paramtypes", [core.ViewContainerRef, core.TemplateRef,
                core.IterableDiffers])
        ], NgForOf);
        return NgForOf;
    }());
    var RecordViewTuple = /** @class */ (function () {
        function RecordViewTuple(record, view) {
            this.record = record;
            this.view = view;
        }
        return RecordViewTuple;
    }());
    function getTypeNameForDebugging(type) {
        return type['name'] || typeof type;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A structural directive that conditionally includes a template based on the value of
     * an expression coerced to Boolean.
     * When the expression evaluates to true, Angular renders the template
     * provided in a `then` clause, and when  false or null,
     * Angular renders the template provided in an optional `else` clause. The default
     * template for the `else` clause is blank.
     *
     * A [shorthand form](guide/structural-directives#the-asterisk--prefix) of the directive,
     * `*ngIf="condition"`, is generally used, provided
     * as an attribute of the anchor element for the inserted template.
     * Angular expands this into a more explicit version, in which the anchor element
     * is contained in an `<ng-template>` element.
     *
     * Simple form with shorthand syntax:
     *
     * ```
     * <div *ngIf="condition">Content to render when condition is true.</div>
     * ```
     *
     * Simple form with expanded syntax:
     *
     * ```
     * <ng-template [ngIf]="condition"><div>Content to render when condition is
     * true.</div></ng-template>
     * ```
     *
     * Form with an "else" block:
     *
     * ```
     * <div *ngIf="condition; else elseBlock">Content to render when condition is true.</div>
     * <ng-template #elseBlock>Content to render when condition is false.</ng-template>
     * ```
     *
     * Shorthand form with "then" and "else" blocks:
     *
     * ```
     * <div *ngIf="condition; then thenBlock else elseBlock"></div>
     * <ng-template #thenBlock>Content to render when condition is true.</ng-template>
     * <ng-template #elseBlock>Content to render when condition is false.</ng-template>
     * ```
     *
     * Form with storing the value locally:
     *
     * ```
     * <div *ngIf="condition as value; else elseBlock">{{value}}</div>
     * <ng-template #elseBlock>Content to render when value is null.</ng-template>
     * ```
     *
     * @usageNotes
     *
     * The `*ngIf` directive is most commonly used to conditionally show an inline template,
     * as seen in the following  example.
     * The default `else` template is blank.
     *
     * {@example common/ngIf/ts/module.ts region='NgIfSimple'}
     *
     * ### Showing an alternative template using `else`
     *
     * To display a template when `expression` evaluates to false, use an `else` template
     * binding as shown in the following example.
     * The `else` binding points to an `<ng-template>`  element labeled `#elseBlock`.
     * The template can be defined anywhere in the component view, but is typically placed right after
     * `ngIf` for readability.
     *
     * {@example common/ngIf/ts/module.ts region='NgIfElse'}
     *
     * ### Using an external `then` template
     *
     * In the previous example, the then-clause template is specified inline, as the content of the
     * tag that contains the `ngIf` directive. You can also specify a template that is defined
     * externally, by referencing a labeled `<ng-template>` element. When you do this, you can
     * change which template to use at runtime, as shown in the following example.
     *
     * {@example common/ngIf/ts/module.ts region='NgIfThenElse'}
     *
     * ### Storing a conditional result in a variable
     *
     * You might want to show a set of properties from the same object. If you are waiting
     * for asynchronous data, the object can be undefined.
     * In this case, you can use `ngIf` and store the result of the condition in a local
     * variable as shown in the the following example.
     *
     * {@example common/ngIf/ts/module.ts region='NgIfAs'}
     *
     * This code uses only one `AsyncPipe`, so only one subscription is created.
     * The conditional statement stores the result of `userStream|async` in the local variable `user`.
     * You can then bind the local `user` repeatedly.
     *
     * The conditional displays the data only if `userStream` returns a value,
     * so you don't need to use the
     * [safe-navigation-operator](guide/template-syntax#safe-navigation-operator) (`?.`)
     * to guard against null values when accessing properties.
     * You can display an alternative template while waiting for the data.
     *
     * ### Shorthand syntax
     *
     * The shorthand syntax `*ngIf` expands into two separate template specifications
     * for the "then" and "else" clauses. For example, consider the following shorthand statement,
     * that is meant to show a loading page while waiting for data to be loaded.
     *
     * ```
     * <div class="hero-list" *ngIf="heroes else loading">
     *  ...
     * </div>
     *
     * <ng-template #loading>
     *  <div>Loading...</div>
     * </ng-template>
     * ```
     *
     * You can see that the "else" clause references the `<ng-template>`
     * with the `#loading` label, and the template for the "then" clause
     * is provided as the content of the anchor element.
     *
     * However, when Angular expands the shorthand syntax, it creates
     * another `<ng-template>` tag, with `ngIf` and `ngIfElse` directives.
     * The anchor element containing the template for the "then" clause becomes
     * the content of this unlabeled `<ng-template>` tag.
     *
     * ```
     * <ng-template [ngIf]="hero-list" [ngIfElse]="loading">
     *  <div class="hero-list">
     *   ...
     *  </div>
     * </ng-template>
     *
     * <ng-template #loading>
     *  <div>Loading...</div>
     * </ng-template>
     * ```
     *
     * The presence of the implicit template object has implications for the nesting of
     * structural directives. For more on this subject, see
     * [Structural Directives](https://angular.io/guide/structural-directives#one-per-element).
     *
     * @ngModule CommonModule
     * @publicApi
     */
    var NgIf = /** @class */ (function () {
        function NgIf(_viewContainer, templateRef) {
            this._viewContainer = _viewContainer;
            this._context = new NgIfContext();
            this._thenTemplateRef = null;
            this._elseTemplateRef = null;
            this._thenViewRef = null;
            this._elseViewRef = null;
            this._thenTemplateRef = templateRef;
        }
        Object.defineProperty(NgIf.prototype, "ngIf", {
            set: function (condition) {
                this._context.$implicit = this._context.ngIf = condition;
                this._updateView();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgIf.prototype, "ngIfThen", {
            set: function (templateRef) {
                assertTemplate('ngIfThen', templateRef);
                this._thenTemplateRef = templateRef;
                this._thenViewRef = null; // clear previous view if any.
                this._updateView();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgIf.prototype, "ngIfElse", {
            set: function (templateRef) {
                assertTemplate('ngIfElse', templateRef);
                this._elseTemplateRef = templateRef;
                this._elseViewRef = null; // clear previous view if any.
                this._updateView();
            },
            enumerable: true,
            configurable: true
        });
        NgIf.prototype._updateView = function () {
            if (this._context.$implicit) {
                if (!this._thenViewRef) {
                    this._viewContainer.clear();
                    this._elseViewRef = null;
                    if (this._thenTemplateRef) {
                        this._thenViewRef =
                            this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
                    }
                }
            }
            else {
                if (!this._elseViewRef) {
                    this._viewContainer.clear();
                    this._thenViewRef = null;
                    if (this._elseTemplateRef) {
                        this._elseViewRef =
                            this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context);
                    }
                }
            }
        };
        /**
         * Assert the correct type of the expression bound to the `ngIf` input within the template.
         *
         * The presence of this method is a signal to the Ivy template type check compiler that when the
         * `NgIf` structural directive renders its template, the type of the expression bound to `ngIf`
         * should be narrowed in some way. For `NgIf`, it is narrowed to be non-null, which allows the
         * strictNullChecks feature of TypeScript to work with `NgIf`.
         */
        NgIf.ngTemplateGuard_ngIf = function (dir, expr) { return true; };
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], NgIf.prototype, "ngIf", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], NgIf.prototype, "ngIfThen", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], NgIf.prototype, "ngIfElse", null);
        NgIf = __decorate([
            core.Directive({ selector: '[ngIf]' }),
            __metadata("design:paramtypes", [core.ViewContainerRef, core.TemplateRef])
        ], NgIf);
        return NgIf;
    }());
    /**
     * @publicApi
     */
    var NgIfContext = /** @class */ (function () {
        function NgIfContext() {
            this.$implicit = null;
            this.ngIf = null;
        }
        return NgIfContext;
    }());
    function assertTemplate(property, templateRef) {
        var isTemplateRefOrNull = !!(!templateRef || templateRef.createEmbeddedView);
        if (!isTemplateRefOrNull) {
            throw new Error(property + " must be a TemplateRef, but received '" + core.ɵstringify(templateRef) + "'.");
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var SwitchView = /** @class */ (function () {
        function SwitchView(_viewContainerRef, _templateRef) {
            this._viewContainerRef = _viewContainerRef;
            this._templateRef = _templateRef;
            this._created = false;
        }
        SwitchView.prototype.create = function () {
            this._created = true;
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        };
        SwitchView.prototype.destroy = function () {
            this._created = false;
            this._viewContainerRef.clear();
        };
        SwitchView.prototype.enforceState = function (created) {
            if (created && !this._created) {
                this.create();
            }
            else if (!created && this._created) {
                this.destroy();
            }
        };
        return SwitchView;
    }());
    /**
     * @ngModule CommonModule
     *
     * @description A structural directive that adds or removes templates (displaying or hiding views)
     * when the next match expression matches the switch expression.
     *
     * The `[ngSwitch]` directive on a container specifies an expression to match against.
     * The expressions to match are provided by `ngSwitchCase` directives on views within the container.
     * - Every view that matches is rendered.
     * - If there are no matches, a view with the `ngSwitchDefault` directive is rendered.
     * - Elements within the `[NgSwitch]` statement but outside of any `NgSwitchCase`
     * or `ngSwitchDefault` directive are preserved at the location.
     *
     * @usageNotes
     * Define a container element for the directive, and specify the switch expression
     * to match against as an attribute:
     *
     * ```
     * <container-element [ngSwitch]="switch_expression">
     * ```
     *
     * Within the container, `*ngSwitchCase` statements specify the match expressions
     * as attributes. Include `*ngSwitchDefault` as the final case.
     *
     * ```
     * <container-element [ngSwitch]="switch_expression">
     *    <some-element *ngSwitchCase="match_expression_1">...</some-element>
     * ...
     *    <some-element *ngSwitchDefault>...</some-element>
     * </container-element>
     * ```
     *
     * ### Usage Examples
     *
     * The following example shows how to use more than one case to display the same view:
     *
     * ```
     * <container-element [ngSwitch]="switch_expression">
     *   <!-- the same view can be shown in more than one case -->
     *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
     *   <some-element *ngSwitchCase="match_expression_2">...</some-element>
     *   <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
     *   <!--default case when there are no matches -->
     *   <some-element *ngSwitchDefault>...</some-element>
     * </container-element>
     * ```
     *
     * The following example shows how cases can be nested:
     * ```
     * <container-element [ngSwitch]="switch_expression">
     *       <some-element *ngSwitchCase="match_expression_1">...</some-element>
     *       <some-element *ngSwitchCase="match_expression_2">...</some-element>
     *       <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
     *       <ng-container *ngSwitchCase="match_expression_3">
     *         <!-- use a ng-container to group multiple root nodes -->
     *         <inner-element></inner-element>
     *         <inner-other-element></inner-other-element>
     *       </ng-container>
     *       <some-element *ngSwitchDefault>...</some-element>
     *     </container-element>
     * ```
     *
     * @publicApi
     * @see `NgSwitchCase`
     * @see `NgSwitchDefault`
     * @see [Stuctural Directives](guide/structural-directives)
     *
     */
    var NgSwitch = /** @class */ (function () {
        function NgSwitch() {
            this._defaultUsed = false;
            this._caseCount = 0;
            this._lastCaseCheckIndex = 0;
            this._lastCasesMatched = false;
        }
        Object.defineProperty(NgSwitch.prototype, "ngSwitch", {
            set: function (newValue) {
                this._ngSwitch = newValue;
                if (this._caseCount === 0) {
                    this._updateDefaultCases(true);
                }
            },
            enumerable: true,
            configurable: true
        });
        /** @internal */
        NgSwitch.prototype._addCase = function () { return this._caseCount++; };
        /** @internal */
        NgSwitch.prototype._addDefault = function (view) {
            if (!this._defaultViews) {
                this._defaultViews = [];
            }
            this._defaultViews.push(view);
        };
        /** @internal */
        NgSwitch.prototype._matchCase = function (value) {
            var matched = value == this._ngSwitch;
            this._lastCasesMatched = this._lastCasesMatched || matched;
            this._lastCaseCheckIndex++;
            if (this._lastCaseCheckIndex === this._caseCount) {
                this._updateDefaultCases(!this._lastCasesMatched);
                this._lastCaseCheckIndex = 0;
                this._lastCasesMatched = false;
            }
            return matched;
        };
        NgSwitch.prototype._updateDefaultCases = function (useDefault) {
            if (this._defaultViews && useDefault !== this._defaultUsed) {
                this._defaultUsed = useDefault;
                for (var i = 0; i < this._defaultViews.length; i++) {
                    var defaultView = this._defaultViews[i];
                    defaultView.enforceState(useDefault);
                }
            }
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], NgSwitch.prototype, "ngSwitch", null);
        NgSwitch = __decorate([
            core.Directive({ selector: '[ngSwitch]' })
        ], NgSwitch);
        return NgSwitch;
    }());
    /**
     * @ngModule CommonModule
     *
     * @description
     * Provides a switch case expression to match against an enclosing `ngSwitch` expression.
     * When the expressions match, the given `NgSwitchCase` template is rendered.
     * If multiple match expressions match the switch expression value, all of them are displayed.
     *
     * @usageNotes
     *
     * Within a switch container, `*ngSwitchCase` statements specify the match expressions
     * as attributes. Include `*ngSwitchDefault` as the final case.
     *
     * ```
     * <container-element [ngSwitch]="switch_expression">
     *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
     *   ...
     *   <some-element *ngSwitchDefault>...</some-element>
     * </container-element>
     * ```
     *
     * Each switch-case statement contains an in-line HTML template or template reference
     * that defines the subtree to be selected if the value of the match expression
     * matches the value of the switch expression.
     *
     * Unlike JavaScript, which uses strict equality, Angular uses loose equality.
     * This means that the empty string, `""` matches 0.
     *
     * @publicApi
     * @see `NgSwitch`
     * @see `NgSwitchDefault`
     *
     */
    var NgSwitchCase = /** @class */ (function () {
        function NgSwitchCase(viewContainer, templateRef, ngSwitch) {
            this.ngSwitch = ngSwitch;
            ngSwitch._addCase();
            this._view = new SwitchView(viewContainer, templateRef);
        }
        /**
         * Performs case matching. For internal use only.
         */
        NgSwitchCase.prototype.ngDoCheck = function () { this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase)); };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], NgSwitchCase.prototype, "ngSwitchCase", void 0);
        NgSwitchCase = __decorate([
            core.Directive({ selector: '[ngSwitchCase]' }),
            __param(2, core.Host()),
            __metadata("design:paramtypes", [core.ViewContainerRef, core.TemplateRef,
                NgSwitch])
        ], NgSwitchCase);
        return NgSwitchCase;
    }());
    /**
     * @ngModule CommonModule
     *
     * @description
     *
     * Creates a view that is rendered when no `NgSwitchCase` expressions
     * match the `NgSwitch` expression.
     * This statement should be the final case in an `NgSwitch`.
     *
     * @publicApi
     * @see `NgSwitch`
     * @see `NgSwitchCase`
     *
     */
    var NgSwitchDefault = /** @class */ (function () {
        function NgSwitchDefault(viewContainer, templateRef, ngSwitch) {
            ngSwitch._addDefault(new SwitchView(viewContainer, templateRef));
        }
        NgSwitchDefault = __decorate([
            core.Directive({ selector: '[ngSwitchDefault]' }),
            __param(2, core.Host()),
            __metadata("design:paramtypes", [core.ViewContainerRef, core.TemplateRef,
                NgSwitch])
        ], NgSwitchDefault);
        return NgSwitchDefault;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @ngModule CommonModule
     *
     * @usageNotes
     * ```
     * <some-element [ngPlural]="value">
     *   <ng-template ngPluralCase="=0">there is nothing</ng-template>
     *   <ng-template ngPluralCase="=1">there is one</ng-template>
     *   <ng-template ngPluralCase="few">there are a few</ng-template>
     * </some-element>
     * ```
     *
     * @description
     *
     * Adds / removes DOM sub-trees based on a numeric value. Tailored for pluralization.
     *
     * Displays DOM sub-trees that match the switch expression value, or failing that, DOM sub-trees
     * that match the switch expression's pluralization category.
     *
     * To use this directive you must provide a container element that sets the `[ngPlural]` attribute
     * to a switch expression. Inner elements with a `[ngPluralCase]` will display based on their
     * expression:
     * - if `[ngPluralCase]` is set to a value starting with `=`, it will only display if the value
     *   matches the switch expression exactly,
     * - otherwise, the view will be treated as a "category match", and will only display if exact
     *   value matches aren't found and the value maps to its category for the defined locale.
     *
     * See http://cldr.unicode.org/index/cldr-spec/plural-rules
     *
     * @publicApi
     */
    var NgPlural = /** @class */ (function () {
        function NgPlural(_localization) {
            this._localization = _localization;
            this._caseViews = {};
        }
        Object.defineProperty(NgPlural.prototype, "ngPlural", {
            set: function (value) {
                this._switchValue = value;
                this._updateView();
            },
            enumerable: true,
            configurable: true
        });
        NgPlural.prototype.addCase = function (value, switchView) { this._caseViews[value] = switchView; };
        NgPlural.prototype._updateView = function () {
            this._clearViews();
            var cases = Object.keys(this._caseViews);
            var key = getPluralCategory(this._switchValue, cases, this._localization);
            this._activateView(this._caseViews[key]);
        };
        NgPlural.prototype._clearViews = function () {
            if (this._activeView)
                this._activeView.destroy();
        };
        NgPlural.prototype._activateView = function (view) {
            if (view) {
                this._activeView = view;
                this._activeView.create();
            }
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Number),
            __metadata("design:paramtypes", [Number])
        ], NgPlural.prototype, "ngPlural", null);
        NgPlural = __decorate([
            core.Directive({ selector: '[ngPlural]' }),
            __metadata("design:paramtypes", [NgLocalization])
        ], NgPlural);
        return NgPlural;
    }());
    /**
     * @ngModule CommonModule
     *
     * @description
     *
     * Creates a view that will be added/removed from the parent {@link NgPlural} when the
     * given expression matches the plural expression according to CLDR rules.
     *
     * @usageNotes
     * ```
     * <some-element [ngPlural]="value">
     *   <ng-template ngPluralCase="=0">...</ng-template>
     *   <ng-template ngPluralCase="other">...</ng-template>
     * </some-element>
     *```
     *
     * See {@link NgPlural} for more details and example.
     *
     * @publicApi
     */
    var NgPluralCase = /** @class */ (function () {
        function NgPluralCase(value, template, viewContainer, ngPlural) {
            this.value = value;
            var isANumber = !isNaN(Number(value));
            ngPlural.addCase(isANumber ? "=" + value : value, new SwitchView(viewContainer, template));
        }
        NgPluralCase = __decorate([
            core.Directive({ selector: '[ngPluralCase]' }),
            __param(0, core.Attribute('ngPluralCase')),
            __param(3, core.Host()),
            __metadata("design:paramtypes", [String, core.TemplateRef,
                core.ViewContainerRef, NgPlural])
        ], NgPluralCase);
        return NgPluralCase;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @ngModule CommonModule
     *
     * @usageNotes
     *
     * Set the font of the containing element to the result of an expression.
     *
     * ```
     * <some-element [ngStyle]="{'font-style': styleExp}">...</some-element>
     * ```
     *
     * Set the width of the containing element to a pixel value returned by an expression.
     *
     * ```
     * <some-element [ngStyle]="{'max-width.px': widthExp}">...</some-element>
     * ```
     *
     * Set a collection of style values using an expression that returns key-value pairs.
     *
     * ```
     * <some-element [ngStyle]="objExp">...</some-element>
     * ```
     *
     * @description
     *
     * An attribute directive that updates styles for the containing HTML element.
     * Sets one or more style properties, specified as colon-separated key-value pairs.
     * The key is a style name, with an optional `.<unit>` suffix
     * (such as 'top.px', 'font-style.em').
     * The value is an expression to be evaluated.
     * The resulting non-null value, expressed in the given unit,
     * is assigned to the given style property.
     * If the result of evaluation is null, the corresponding style is removed.
     *
     * @publicApi
     */
    var NgStyle = /** @class */ (function () {
        function NgStyle(_differs, _ngEl, _renderer) {
            this._differs = _differs;
            this._ngEl = _ngEl;
            this._renderer = _renderer;
        }
        Object.defineProperty(NgStyle.prototype, "ngStyle", {
            set: function (
            /**
             * A map of style properties, specified as colon-separated
             * key-value pairs.
             * * The key is a style name, with an optional `.<unit>` suffix
             *    (such as 'top.px', 'font-style.em').
             * * The value is an expression to be evaluated.
             */
            values) {
                this._ngStyle = values;
                if (!this._differ && values) {
                    this._differ = this._differs.find(values).create();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Applies the new styles if needed.
         */
        NgStyle.prototype.ngDoCheck = function () {
            if (this._differ) {
                var changes = this._differ.diff(this._ngStyle);
                if (changes) {
                    this._applyChanges(changes);
                }
            }
        };
        NgStyle.prototype._applyChanges = function (changes) {
            var _this = this;
            changes.forEachRemovedItem(function (record) { return _this._setStyle(record.key, null); });
            changes.forEachAddedItem(function (record) { return _this._setStyle(record.key, record.currentValue); });
            changes.forEachChangedItem(function (record) { return _this._setStyle(record.key, record.currentValue); });
        };
        NgStyle.prototype._setStyle = function (nameAndUnit, value) {
            var _a = __read(nameAndUnit.split('.'), 2), name = _a[0], unit = _a[1];
            value = value != null && unit ? "" + value + unit : value;
            if (value != null) {
                this._renderer.setStyle(this._ngEl.nativeElement, name, value);
            }
            else {
                this._renderer.removeStyle(this._ngEl.nativeElement, name);
            }
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], NgStyle.prototype, "ngStyle", null);
        NgStyle = __decorate([
            core.Directive({ selector: '[ngStyle]' }),
            __metadata("design:paramtypes", [core.KeyValueDiffers, core.ElementRef, core.Renderer2])
        ], NgStyle);
        return NgStyle;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @ngModule CommonModule
     *
     * @description
     *
     * Inserts an embedded view from a prepared `TemplateRef`.
     *
     * You can attach a context object to the `EmbeddedViewRef` by setting `[ngTemplateOutletContext]`.
     * `[ngTemplateOutletContext]` should be an object, the object's keys will be available for binding
     * by the local template `let` declarations.
     *
     * @usageNotes
     * ```
     * <ng-container *ngTemplateOutlet="templateRefExp; context: contextExp"></ng-container>
     * ```
     *
     * Using the key `$implicit` in the context object will set its value as default.
     *
     * ### Example
     *
     * {@example common/ngTemplateOutlet/ts/module.ts region='NgTemplateOutlet'}
     *
     * @publicApi
     */
    var NgTemplateOutlet = /** @class */ (function () {
        function NgTemplateOutlet(_viewContainerRef) {
            this._viewContainerRef = _viewContainerRef;
        }
        NgTemplateOutlet.prototype.ngOnChanges = function (changes) {
            var recreateView = this._shouldRecreateView(changes);
            if (recreateView) {
                if (this._viewRef) {
                    this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._viewRef));
                }
                if (this.ngTemplateOutlet) {
                    this._viewRef = this._viewContainerRef.createEmbeddedView(this.ngTemplateOutlet, this.ngTemplateOutletContext);
                }
            }
            else {
                if (this._viewRef && this.ngTemplateOutletContext) {
                    this._updateExistingContext(this.ngTemplateOutletContext);
                }
            }
        };
        /**
         * We need to re-create existing embedded view if:
         * - templateRef has changed
         * - context has changes
         *
         * We mark context object as changed when the corresponding object
         * shape changes (new properties are added or existing properties are removed).
         * In other words we consider context with the same properties as "the same" even
         * if object reference changes (see https://github.com/angular/angular/issues/13407).
         */
        NgTemplateOutlet.prototype._shouldRecreateView = function (changes) {
            var ctxChange = changes['ngTemplateOutletContext'];
            return !!changes['ngTemplateOutlet'] || (ctxChange && this._hasContextShapeChanged(ctxChange));
        };
        NgTemplateOutlet.prototype._hasContextShapeChanged = function (ctxChange) {
            var e_1, _a;
            var prevCtxKeys = Object.keys(ctxChange.previousValue || {});
            var currCtxKeys = Object.keys(ctxChange.currentValue || {});
            if (prevCtxKeys.length === currCtxKeys.length) {
                try {
                    for (var currCtxKeys_1 = __values(currCtxKeys), currCtxKeys_1_1 = currCtxKeys_1.next(); !currCtxKeys_1_1.done; currCtxKeys_1_1 = currCtxKeys_1.next()) {
                        var propName = currCtxKeys_1_1.value;
                        if (prevCtxKeys.indexOf(propName) === -1) {
                            return true;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (currCtxKeys_1_1 && !currCtxKeys_1_1.done && (_a = currCtxKeys_1.return)) _a.call(currCtxKeys_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return false;
            }
            else {
                return true;
            }
        };
        NgTemplateOutlet.prototype._updateExistingContext = function (ctx) {
            var e_2, _a;
            try {
                for (var _b = __values(Object.keys(ctx)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var propName = _c.value;
                    this._viewRef.context[propName] = this.ngTemplateOutletContext[propName];
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], NgTemplateOutlet.prototype, "ngTemplateOutletContext", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], NgTemplateOutlet.prototype, "ngTemplateOutlet", void 0);
        NgTemplateOutlet = __decorate([
            core.Directive({ selector: '[ngTemplateOutlet]' }),
            __metadata("design:paramtypes", [core.ViewContainerRef])
        ], NgTemplateOutlet);
        return NgTemplateOutlet;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A collection of Angular directives that are likely to be used in each and every Angular
     * application.
     */
    var COMMON_DIRECTIVES = [
        NgClass,
        NgComponentOutlet,
        NgForOf,
        NgIf,
        NgTemplateOutlet,
        NgStyle,
        NgSwitch,
        NgSwitchCase,
        NgSwitchDefault,
        NgPlural,
        NgPluralCase,
    ];

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function invalidPipeArgumentError(type, value) {
        return Error("InvalidPipeArgument: '" + value + "' for pipe '" + core.ɵstringify(type) + "'");
    }

    var NumberFormatter = /** @class */ (function () {
        function NumberFormatter() {
        }
        NumberFormatter.format = function (num, locale, style, opts) {
            if (opts === void 0) { opts = {}; }
            var minimumIntegerDigits = opts.minimumIntegerDigits, minimumFractionDigits = opts.minimumFractionDigits, maximumFractionDigits = opts.maximumFractionDigits, currency = opts.currency, _a = opts.currencyAsSymbol, currencyAsSymbol = _a === void 0 ? false : _a;
            var options = {
                minimumIntegerDigits: minimumIntegerDigits,
                minimumFractionDigits: minimumFractionDigits,
                maximumFractionDigits: maximumFractionDigits,
                style: NumberFormatStyle[style].toLowerCase()
            };
            if (style == NumberFormatStyle.Currency) {
                options.currency = typeof currency == 'string' ? currency : undefined;
                options.currencyDisplay = currencyAsSymbol ? 'symbol' : 'code';
            }
            return new Intl.NumberFormat(locale, options).format(num);
        };
        return NumberFormatter;
    }());
    var DATE_FORMATS_SPLIT$1 = /((?:[^yMLdHhmsazZEwGjJ']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|J+|j+|m+|s+|a|z|Z|G+|w+))(.*)/;
    var PATTERN_ALIASES = {
        // Keys are quoted so they do not get renamed during closure compilation.
        'yMMMdjms': datePartGetterFactory(combine([
            digitCondition('year', 1),
            nameCondition('month', 3),
            digitCondition('day', 1),
            digitCondition('hour', 1),
            digitCondition('minute', 1),
            digitCondition('second', 1),
        ])),
        'yMdjm': datePartGetterFactory(combine([
            digitCondition('year', 1), digitCondition('month', 1), digitCondition('day', 1),
            digitCondition('hour', 1), digitCondition('minute', 1)
        ])),
        'yMMMMEEEEd': datePartGetterFactory(combine([
            digitCondition('year', 1), nameCondition('month', 4), nameCondition('weekday', 4),
            digitCondition('day', 1)
        ])),
        'yMMMMd': datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 4), digitCondition('day', 1)])),
        'yMMMd': datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 3), digitCondition('day', 1)])),
        'yMd': datePartGetterFactory(combine([digitCondition('year', 1), digitCondition('month', 1), digitCondition('day', 1)])),
        'jms': datePartGetterFactory(combine([digitCondition('hour', 1), digitCondition('second', 1), digitCondition('minute', 1)])),
        'jm': datePartGetterFactory(combine([digitCondition('hour', 1), digitCondition('minute', 1)]))
    };
    var DATE_FORMATS$1 = {
        // Keys are quoted so they do not get renamed.
        'yyyy': datePartGetterFactory(digitCondition('year', 4)),
        'yy': datePartGetterFactory(digitCondition('year', 2)),
        'y': datePartGetterFactory(digitCondition('year', 1)),
        'MMMM': datePartGetterFactory(nameCondition('month', 4)),
        'MMM': datePartGetterFactory(nameCondition('month', 3)),
        'MM': datePartGetterFactory(digitCondition('month', 2)),
        'M': datePartGetterFactory(digitCondition('month', 1)),
        'LLLL': datePartGetterFactory(nameCondition('month', 4)),
        'L': datePartGetterFactory(nameCondition('month', 1)),
        'dd': datePartGetterFactory(digitCondition('day', 2)),
        'd': datePartGetterFactory(digitCondition('day', 1)),
        'HH': digitModifier(hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 2), false)))),
        'H': hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), false))),
        'hh': digitModifier(hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 2), true)))),
        'h': hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), true))),
        'jj': datePartGetterFactory(digitCondition('hour', 2)),
        'j': datePartGetterFactory(digitCondition('hour', 1)),
        'mm': digitModifier(datePartGetterFactory(digitCondition('minute', 2))),
        'm': datePartGetterFactory(digitCondition('minute', 1)),
        'ss': digitModifier(datePartGetterFactory(digitCondition('second', 2))),
        's': datePartGetterFactory(digitCondition('second', 1)),
        // while ISO 8601 requires fractions to be prefixed with `.` or `,`
        // we can be just safely rely on using `sss` since we currently don't support single or two digit
        // fractions
        'sss': datePartGetterFactory(digitCondition('second', 3)),
        'EEEE': datePartGetterFactory(nameCondition('weekday', 4)),
        'EEE': datePartGetterFactory(nameCondition('weekday', 3)),
        'EE': datePartGetterFactory(nameCondition('weekday', 2)),
        'E': datePartGetterFactory(nameCondition('weekday', 1)),
        'a': hourClockExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), true))),
        'Z': timeZoneGetter$1('short'),
        'z': timeZoneGetter$1('long'),
        'ww': datePartGetterFactory({}),
        // first Thursday of the year. not support ?
        'w': datePartGetterFactory({}),
        // of the year not support ?
        'G': datePartGetterFactory(nameCondition('era', 1)),
        'GG': datePartGetterFactory(nameCondition('era', 2)),
        'GGG': datePartGetterFactory(nameCondition('era', 3)),
        'GGGG': datePartGetterFactory(nameCondition('era', 4))
    };
    function digitModifier(inner) {
        return function (date, locale) {
            var result = inner(date, locale);
            return result.length == 1 ? '0' + result : result;
        };
    }
    function hourClockExtractor(inner) {
        return function (date, locale) { return inner(date, locale).split(' ')[1]; };
    }
    function hourExtractor(inner) {
        return function (date, locale) { return inner(date, locale).split(' ')[0]; };
    }
    function intlDateFormat(date, locale, options) {
        return new Intl.DateTimeFormat(locale, options).format(date).replace(/[\u200e\u200f]/g, '');
    }
    function timeZoneGetter$1(timezone) {
        // To workaround `Intl` API restriction for single timezone let format with 24 hours
        var options = { hour: '2-digit', hour12: false, timeZoneName: timezone };
        return function (date, locale) {
            var result = intlDateFormat(date, locale, options);
            // Then extract first 3 letters that related to hours
            return result ? result.substring(3) : '';
        };
    }
    function hour12Modify(options, value) {
        options.hour12 = value;
        return options;
    }
    function digitCondition(prop, len) {
        var result = {};
        result[prop] = len === 2 ? '2-digit' : 'numeric';
        return result;
    }
    function nameCondition(prop, len) {
        var result = {};
        if (len < 4) {
            result[prop] = len > 1 ? 'short' : 'narrow';
        }
        else {
            result[prop] = 'long';
        }
        return result;
    }
    function combine(options) {
        return options.reduce(function (merged, opt) { return (__assign({}, merged, opt)); }, {});
    }
    function datePartGetterFactory(ret) {
        return function (date, locale) { return intlDateFormat(date, locale, ret); };
    }
    var DATE_FORMATTER_CACHE = new Map();
    function dateFormatter(format, date, locale) {
        var fn = PATTERN_ALIASES[format];
        if (fn)
            return fn(date, locale);
        var cacheKey = format;
        var parts = DATE_FORMATTER_CACHE.get(cacheKey);
        if (!parts) {
            parts = [];
            var match = void 0;
            DATE_FORMATS_SPLIT$1.exec(format);
            var _format = format;
            while (_format) {
                match = DATE_FORMATS_SPLIT$1.exec(_format);
                if (match) {
                    parts = parts.concat(match.slice(1));
                    _format = parts.pop();
                }
                else {
                    parts.push(_format);
                    _format = null;
                }
            }
            DATE_FORMATTER_CACHE.set(cacheKey, parts);
        }
        return parts.reduce(function (text, part) {
            var fn = DATE_FORMATS$1[part];
            return text + (fn ? fn(date, locale) : partToTime(part));
        }, '');
    }
    function partToTime(part) {
        return part === '\'\'' ? '\'' : part.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
    }
    var DateFormatter = /** @class */ (function () {
        function DateFormatter() {
        }
        DateFormatter.format = function (date, locale, pattern) {
            return dateFormatter(pattern, date, locale);
        };
        return DateFormatter;
    }());

    /**
    * @license
    * Copyright Google Inc. All Rights Reserved.
    *
    * Use of this source code is governed by an MIT-style license that can be
    * found in the LICENSE file at https://angular.io/license
      */
    /**
     * @ngModule CommonModule
     * @description
     *
     * Formats a date according to locale rules.
     *
     * Where:
     * - `expression` is a date object or a number (milliseconds since UTC epoch) or an ISO string
     * (https://www.w3.org/TR/NOTE-datetime).
     * - `format` indicates which date/time components to include. The format can be predefined as
     *   shown below or custom as shown in the table.
     *   - `'medium'`: equivalent to `'yMMMdjms'` (e.g. `Sep 3, 2010, 12:05:08 PM` for `en-US`)
     *   - `'short'`: equivalent to `'yMdjm'` (e.g. `9/3/2010, 12:05 PM` for `en-US`)
     *   - `'fullDate'`: equivalent to `'yMMMMEEEEd'` (e.g. `Friday, September 3, 2010` for `en-US`)
     *   - `'longDate'`: equivalent to `'yMMMMd'` (e.g. `September 3, 2010` for `en-US`)
     *   - `'mediumDate'`: equivalent to `'yMMMd'` (e.g. `Sep 3, 2010` for `en-US`)
     *   - `'shortDate'`: equivalent to `'yMd'` (e.g. `9/3/2010` for `en-US`)
     *   - `'mediumTime'`: equivalent to `'jms'` (e.g. `12:05:08 PM` for `en-US`)
     *   - `'shortTime'`: equivalent to `'jm'` (e.g. `12:05 PM` for `en-US`)
     *
     *
     *  | Component | Symbol | Narrow | Short Form   | Long Form         | Numeric   | 2-digit   |
     *  |-----------|:------:|--------|--------------|-------------------|-----------|-----------|
     *  | era       |   G    | G (A)  | GGG (AD)     | GGGG (Anno Domini)| -         | -         |
     *  | year      |   y    | -      | -            | -                 | y (2015)  | yy (15)   |
     *  | month     |   M    | L (S)  | MMM (Sep)    | MMMM (September)  | M (9)     | MM (09)   |
     *  | day       |   d    | -      | -            | -                 | d (3)     | dd (03)   |
     *  | weekday   |   E    | E (S)  | EEE (Sun)    | EEEE (Sunday)     | -         | -         |
     *  | hour      |   j    | -      | -            | -                 | j (13)    | jj (13)   |
     *  | hour12    |   h    | -      | -            | -                 | h (1 PM)  | hh (01 PM)|
     *  | hour24    |   H    | -      | -            | -                 | H (13)    | HH (13)   |
     *  | minute    |   m    | -      | -            | -                 | m (5)     | mm (05)   |
     *  | second    |   s    | -      | -            | -                 | s (9)     | ss (09)   |
     *  | timezone  |   z    | -      | -            | z (Pacific Standard Time)| -  | -         |
     *  | timezone  |   Z    | -      | Z (GMT-8:00) | -                 | -         | -         |
     *  | timezone  |   a    | -      | a (PM)       | -                 | -         | -         |
     *
     * In javascript, only the components specified will be respected (not the ordering,
     * punctuations, ...) and details of the formatting will be dependent on the locale.
     *
     * Timezone of the formatted text will be the local system timezone of the end-user's machine.
     *
     * When the expression is a ISO string without time (e.g. 2016-09-19) the time zone offset is not
     * applied and the formatted text will have the same day, month and year of the expression.
     *
     * WARNINGS:
     * - this pipe is marked as pure hence it will not be re-evaluated when the input is mutated.
     *   Instead users should treat the date as an immutable object and change the reference when the
     *   pipe needs to re-run (this is to avoid reformatting the date on every change detection run
     *   which would be an expensive operation).
     * - this pipe uses the Internationalization API. Therefore it is only reliable in Chrome and Opera
     *   browsers.
     *
     * @usageNotes
     *
     * ### Examples
     *
     * Assuming `dateObj` is (year: 2010, month: 9, day: 3, hour: 12 PM, minute: 05, second: 08)
     * in the _local_ time and locale is 'en-US':
     *
     * {@example common/pipes/ts/date_pipe.ts region='DeprecatedDatePipe'}
     *
     * @publicApi
     */
    var DeprecatedDatePipe = /** @class */ (function () {
        function DeprecatedDatePipe(_locale) {
            this._locale = _locale;
        }
        DeprecatedDatePipe_1 = DeprecatedDatePipe;
        DeprecatedDatePipe.prototype.transform = function (value, pattern) {
            if (pattern === void 0) { pattern = 'mediumDate'; }
            if (value == null || value === '' || value !== value)
                return null;
            var date;
            if (typeof value === 'string') {
                value = value.trim();
            }
            if (isDate$1(value)) {
                date = value;
            }
            else if (!isNaN(value - parseFloat(value))) {
                date = new Date(parseFloat(value));
            }
            else if (typeof value === 'string' && /^(\d{4}-\d{1,2}-\d{1,2})$/.test(value)) {
                /**
                 * For ISO Strings without time the day, month and year must be extracted from the ISO String
                 * before Date creation to avoid time offset and errors in the new Date.
                 * If we only replace '-' with ',' in the ISO String ("2015,01,01"), and try to create a new
                 * date, some browsers (e.g. IE 9) will throw an invalid Date error
                 * If we leave the '-' ("2015-01-01") and try to create a new Date("2015-01-01") the
                 * timeoffset
                 * is applied
                 * Note: ISO months are 0 for January, 1 for February, ...
                 */
                var _a = __read(value.split('-').map(function (val) { return parseInt(val, 10); }), 3), y = _a[0], m = _a[1], d = _a[2];
                date = new Date(y, m - 1, d);
            }
            else {
                date = new Date(value);
            }
            if (!isDate$1(date)) {
                var match = void 0;
                if ((typeof value === 'string') && (match = value.match(ISO8601_DATE_REGEX))) {
                    date = isoStringToDate(match);
                }
                else {
                    throw invalidPipeArgumentError(DeprecatedDatePipe_1, value);
                }
            }
            return DateFormatter.format(date, this._locale, DeprecatedDatePipe_1._ALIASES[pattern] || pattern);
        };
        var DeprecatedDatePipe_1;
        /** @internal */
        DeprecatedDatePipe._ALIASES = {
            'medium': 'yMMMdjms',
            'short': 'yMdjm',
            'fullDate': 'yMMMMEEEEd',
            'longDate': 'yMMMMd',
            'mediumDate': 'yMMMd',
            'shortDate': 'yMd',
            'mediumTime': 'jms',
            'shortTime': 'jm'
        };
        DeprecatedDatePipe = DeprecatedDatePipe_1 = __decorate([
            core.Pipe({ name: 'date', pure: true }),
            __param(0, core.Inject(core.LOCALE_ID)),
            __metadata("design:paramtypes", [String])
        ], DeprecatedDatePipe);
        return DeprecatedDatePipe;
    }());
    function isDate$1(value) {
        return value instanceof Date && !isNaN(value.valueOf());
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function formatNumber$1(pipe, locale, value, style, digits, currency, currencyAsSymbol) {
        if (currency === void 0) { currency = null; }
        if (currencyAsSymbol === void 0) { currencyAsSymbol = false; }
        if (value == null)
            return null;
        // Convert strings to numbers
        value = typeof value === 'string' && !isNaN(+value - parseFloat(value)) ? +value : value;
        if (typeof value !== 'number') {
            throw invalidPipeArgumentError(pipe, value);
        }
        var minInt;
        var minFraction;
        var maxFraction;
        if (style !== NumberFormatStyle.Currency) {
            // rely on Intl default for currency
            minInt = 1;
            minFraction = 0;
            maxFraction = 3;
        }
        if (digits) {
            var parts = digits.match(NUMBER_FORMAT_REGEXP);
            if (parts === null) {
                throw new Error(digits + " is not a valid digit info for number pipes");
            }
            if (parts[1] != null) { // min integer digits
                minInt = parseIntAutoRadix(parts[1]);
            }
            if (parts[3] != null) { // min fraction digits
                minFraction = parseIntAutoRadix(parts[3]);
            }
            if (parts[5] != null) { // max fraction digits
                maxFraction = parseIntAutoRadix(parts[5]);
            }
        }
        return NumberFormatter.format(value, locale, style, {
            minimumIntegerDigits: minInt,
            minimumFractionDigits: minFraction,
            maximumFractionDigits: maxFraction,
            currency: currency,
            currencyAsSymbol: currencyAsSymbol,
        });
    }
    /**
     * Formats a number as text. Group sizing and separator and other locale-specific
     * configurations are based on the active locale.
     *
     * where `expression` is a number:
     *  - `digitInfo` is a `string` which has a following format: <br>
     *     <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>
     *   - `minIntegerDigits` is the minimum number of integer digits to use. Defaults to `1`.
     *   - `minFractionDigits` is the minimum number of digits after fraction. Defaults to `0`.
     *   - `maxFractionDigits` is the maximum number of digits after fraction. Defaults to `3`.
     *
     * For more information on the acceptable range for each of these numbers and other
     * details see your native internationalization library.
     *
     * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
     * and may require a polyfill. See [Browser Support](guide/browser-support) for details.
     *
     * @usageNotes
     *
     * ### Example
     *
     * {@example common/pipes/ts/number_pipe.ts region='DeprecatedNumberPipe'}
     *
     * @ngModule CommonModule
     * @publicApi
     */
    var DeprecatedDecimalPipe = /** @class */ (function () {
        function DeprecatedDecimalPipe(_locale) {
            this._locale = _locale;
        }
        DeprecatedDecimalPipe_1 = DeprecatedDecimalPipe;
        DeprecatedDecimalPipe.prototype.transform = function (value, digits) {
            return formatNumber$1(DeprecatedDecimalPipe_1, this._locale, value, NumberFormatStyle.Decimal, digits);
        };
        var DeprecatedDecimalPipe_1;
        DeprecatedDecimalPipe = DeprecatedDecimalPipe_1 = __decorate([
            core.Pipe({ name: 'number' }),
            __param(0, core.Inject(core.LOCALE_ID)),
            __metadata("design:paramtypes", [String])
        ], DeprecatedDecimalPipe);
        return DeprecatedDecimalPipe;
    }());
    /**
     * @ngModule CommonModule
     *
     * @description
     *
     * Formats a number as percentage according to locale rules.
     *
     * - `digitInfo` See {@link DecimalPipe} for detailed description.
     *
     * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
     * and may require a polyfill. See [Browser Support](guide/browser-support) for details.
     *
     * @usageNotes
     *
     * ### Example
     *
     * {@example common/pipes/ts/percent_pipe.ts region='DeprecatedPercentPipe'}
     *
     * @publicApi
     */
    var DeprecatedPercentPipe = /** @class */ (function () {
        function DeprecatedPercentPipe(_locale) {
            this._locale = _locale;
        }
        DeprecatedPercentPipe_1 = DeprecatedPercentPipe;
        DeprecatedPercentPipe.prototype.transform = function (value, digits) {
            return formatNumber$1(DeprecatedPercentPipe_1, this._locale, value, NumberFormatStyle.Percent, digits);
        };
        var DeprecatedPercentPipe_1;
        DeprecatedPercentPipe = DeprecatedPercentPipe_1 = __decorate([
            core.Pipe({ name: 'percent' }),
            __param(0, core.Inject(core.LOCALE_ID)),
            __metadata("design:paramtypes", [String])
        ], DeprecatedPercentPipe);
        return DeprecatedPercentPipe;
    }());
    /**
     * @ngModule CommonModule
     * @description
     *
     * Formats a number as currency using locale rules.
     *
     * Use `currency` to format a number as currency.
     *
     * - `currencyCode` is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, such
     *    as `USD` for the US dollar and `EUR` for the euro.
     * - `symbolDisplay` is a boolean indicating whether to use the currency symbol or code.
     *   - `true`: use symbol (e.g. `$`).
     *   - `false`(default): use code (e.g. `USD`).
     * - `digitInfo` See {@link DecimalPipe} for detailed description.
     *
     * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
     * and may require a polyfill. See [Browser Support](guide/browser-support) for details.
     *
     * @usageNotes
     *
     * ### Example
     *
     * {@example common/pipes/ts/currency_pipe.ts region='DeprecatedCurrencyPipe'}
     *
     * @publicApi
     */
    var DeprecatedCurrencyPipe = /** @class */ (function () {
        function DeprecatedCurrencyPipe(_locale) {
            this._locale = _locale;
        }
        DeprecatedCurrencyPipe_1 = DeprecatedCurrencyPipe;
        DeprecatedCurrencyPipe.prototype.transform = function (value, currencyCode, symbolDisplay, digits) {
            if (currencyCode === void 0) { currencyCode = 'USD'; }
            if (symbolDisplay === void 0) { symbolDisplay = false; }
            return formatNumber$1(DeprecatedCurrencyPipe_1, this._locale, value, NumberFormatStyle.Currency, digits, currencyCode, symbolDisplay);
        };
        var DeprecatedCurrencyPipe_1;
        DeprecatedCurrencyPipe = DeprecatedCurrencyPipe_1 = __decorate([
            core.Pipe({ name: 'currency' }),
            __param(0, core.Inject(core.LOCALE_ID)),
            __metadata("design:paramtypes", [String])
        ], DeprecatedCurrencyPipe);
        return DeprecatedCurrencyPipe;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A collection of deprecated i18n pipes that require intl api
     *
     * @deprecated from v5
     */
    var COMMON_DEPRECATED_I18N_PIPES = [DeprecatedDecimalPipe, DeprecatedPercentPipe, DeprecatedCurrencyPipe, DeprecatedDatePipe];

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ObservableStrategy = /** @class */ (function () {
        function ObservableStrategy() {
        }
        ObservableStrategy.prototype.createSubscription = function (async, updateLatestValue) {
            return async.subscribe({ next: updateLatestValue, error: function (e) { throw e; } });
        };
        ObservableStrategy.prototype.dispose = function (subscription) { subscription.unsubscribe(); };
        ObservableStrategy.prototype.onDestroy = function (subscription) { subscription.unsubscribe(); };
        return ObservableStrategy;
    }());
    var PromiseStrategy = /** @class */ (function () {
        function PromiseStrategy() {
        }
        PromiseStrategy.prototype.createSubscription = function (async, updateLatestValue) {
            return async.then(updateLatestValue, function (e) { throw e; });
        };
        PromiseStrategy.prototype.dispose = function (subscription) { };
        PromiseStrategy.prototype.onDestroy = function (subscription) { };
        return PromiseStrategy;
    }());
    var _promiseStrategy = new PromiseStrategy();
    var _observableStrategy = new ObservableStrategy();
    /**
     * @ngModule CommonModule
     * @description
     *
     * Unwraps a value from an asynchronous primitive.
     *
     * The `async` pipe subscribes to an `Observable` or `Promise` and returns the latest value it has
     * emitted. When a new value is emitted, the `async` pipe marks the component to be checked for
     * changes. When the component gets destroyed, the `async` pipe unsubscribes automatically to avoid
     * potential memory leaks.
     *
     * @usageNotes
     *
     * ### Examples
     *
     * This example binds a `Promise` to the view. Clicking the `Resolve` button resolves the
     * promise.
     *
     * {@example common/pipes/ts/async_pipe.ts region='AsyncPipePromise'}
     *
     * It's also possible to use `async` with Observables. The example below binds the `time` Observable
     * to the view. The Observable continuously updates the view with the current time.
     *
     * {@example common/pipes/ts/async_pipe.ts region='AsyncPipeObservable'}
     *
     * @publicApi
     */
    var AsyncPipe = /** @class */ (function () {
        function AsyncPipe(_ref) {
            this._ref = _ref;
            this._latestValue = null;
            this._latestReturnedValue = null;
            this._subscription = null;
            this._obj = null;
            this._strategy = null;
        }
        AsyncPipe_1 = AsyncPipe;
        AsyncPipe.prototype.ngOnDestroy = function () {
            if (this._subscription) {
                this._dispose();
            }
        };
        AsyncPipe.prototype.transform = function (obj) {
            if (!this._obj) {
                if (obj) {
                    this._subscribe(obj);
                }
                this._latestReturnedValue = this._latestValue;
                return this._latestValue;
            }
            if (obj !== this._obj) {
                this._dispose();
                return this.transform(obj);
            }
            if (this._latestValue === this._latestReturnedValue) {
                return this._latestReturnedValue;
            }
            this._latestReturnedValue = this._latestValue;
            return core.WrappedValue.wrap(this._latestValue);
        };
        AsyncPipe.prototype._subscribe = function (obj) {
            var _this = this;
            this._obj = obj;
            this._strategy = this._selectStrategy(obj);
            this._subscription = this._strategy.createSubscription(obj, function (value) { return _this._updateLatestValue(obj, value); });
        };
        AsyncPipe.prototype._selectStrategy = function (obj) {
            if (core.ɵisPromise(obj)) {
                return _promiseStrategy;
            }
            if (core.ɵisObservable(obj)) {
                return _observableStrategy;
            }
            throw invalidPipeArgumentError(AsyncPipe_1, obj);
        };
        AsyncPipe.prototype._dispose = function () {
            this._strategy.dispose(this._subscription);
            this._latestValue = null;
            this._latestReturnedValue = null;
            this._subscription = null;
            this._obj = null;
        };
        AsyncPipe.prototype._updateLatestValue = function (async, value) {
            if (async === this._obj) {
                this._latestValue = value;
                this._ref.markForCheck();
            }
        };
        var AsyncPipe_1;
        AsyncPipe = AsyncPipe_1 = __decorate([
            core.Pipe({ name: 'async', pure: false }),
            __metadata("design:paramtypes", [core.ChangeDetectorRef])
        ], AsyncPipe);
        return AsyncPipe;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Transforms text to all lower case.
     *
     * @see `UpperCasePipe`
     * @see `TitleCasePipe`
     * @usageNotes
     *
     * The following example defines a view that allows the user to enter
     * text, and then uses the pipe to convert the input text to all lower case.
     *
     * <code-example path="common/pipes/ts/lowerupper_pipe.ts" region='LowerUpperPipe'></code-example>
     *
     * @ngModule CommonModule
     * @publicApi
     */
    var LowerCasePipe = /** @class */ (function () {
        function LowerCasePipe() {
        }
        LowerCasePipe_1 = LowerCasePipe;
        /**
         * @param value The string to transform to lower case.
         */
        LowerCasePipe.prototype.transform = function (value) {
            if (!value)
                return value;
            if (typeof value !== 'string') {
                throw invalidPipeArgumentError(LowerCasePipe_1, value);
            }
            return value.toLowerCase();
        };
        var LowerCasePipe_1;
        LowerCasePipe = LowerCasePipe_1 = __decorate([
            core.Pipe({ name: 'lowercase' })
        ], LowerCasePipe);
        return LowerCasePipe;
    }());
    //
    // Regex below matches any Unicode word and compatible with ES5. In ES2018 the same result
    // can be achieved by using /\p{L}\S*/gu and also known as Unicode Property Escapes
    // (http://2ality.com/2017/07/regexp-unicode-property-escapes.html). Since there is no
    // transpilation of this functionality down to ES5 without external tool, the only solution is
    // to use already transpiled form. Example can be found here -
    // https://mothereff.in/regexpu#input=var+regex+%3D+/%5Cp%7BL%7D/u%3B&unicodePropertyEscape=1
    //
    var unicodeWordMatch = /(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D])\S*/g;
    /**
     * Transforms text to title case.
     * Capitalizes the first letter of each word, and transforms the
     * rest of the word to lower case.
     * Words are delimited by any whitespace character, such as a space, tab, or line-feed character.
     *
     * @see `LowerCasePipe`
     * @see `UpperCasePipe`
     *
     * @usageNotes
     * The following example shows the result of transforming various strings into title case.
     *
     * <code-example path="common/pipes/ts/titlecase_pipe.ts" region='TitleCasePipe'></code-example>
     *
     * @ngModule CommonModule
     * @publicApi
     */
    var TitleCasePipe = /** @class */ (function () {
        function TitleCasePipe() {
        }
        TitleCasePipe_1 = TitleCasePipe;
        /**
         * @param value The string to transform to title case.
         */
        TitleCasePipe.prototype.transform = function (value) {
            if (!value)
                return value;
            if (typeof value !== 'string') {
                throw invalidPipeArgumentError(TitleCasePipe_1, value);
            }
            return value.replace(unicodeWordMatch, (function (txt) { return txt[0].toUpperCase() + txt.substr(1).toLowerCase(); }));
        };
        var TitleCasePipe_1;
        TitleCasePipe = TitleCasePipe_1 = __decorate([
            core.Pipe({ name: 'titlecase' })
        ], TitleCasePipe);
        return TitleCasePipe;
    }());
    /**
     * Transforms text to all upper case.
     * @see `LowerCasePipe`
     * @see `TitleCasePipe`
     *
     * @ngModule CommonModule
     * @publicApi
     */
    var UpperCasePipe = /** @class */ (function () {
        function UpperCasePipe() {
        }
        UpperCasePipe_1 = UpperCasePipe;
        /**
         * @param value The string to transform to upper case.
         */
        UpperCasePipe.prototype.transform = function (value) {
            if (!value)
                return value;
            if (typeof value !== 'string') {
                throw invalidPipeArgumentError(UpperCasePipe_1, value);
            }
            return value.toUpperCase();
        };
        var UpperCasePipe_1;
        UpperCasePipe = UpperCasePipe_1 = __decorate([
            core.Pipe({ name: 'uppercase' })
        ], UpperCasePipe);
        return UpperCasePipe;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // clang-format off
    /**
     * @ngModule CommonModule
     * @description
     *
     * Formats a date value according to locale rules.
     *
     * Only the `en-US` locale data comes with Angular. To localize dates
     * in another language, you must import the corresponding locale data.
     * See the [I18n guide](guide/i18n#i18n-pipes) for more information.
     *
     * @see `formatDate()`
     *
     *
     * @usageNotes
     *
     * The result of this pipe is not reevaluated when the input is mutated. To avoid the need to
     * reformat the date on every change-detection cycle, treat the date as an immutable object
     * and change the reference when the pipe needs to run again.
     *
     * ### Pre-defined format options
     *
     * Examples are given in `en-US` locale.
     *
     * - `'short'`: equivalent to `'M/d/yy, h:mm a'` (`6/15/15, 9:03 AM`).
     * - `'medium'`: equivalent to `'MMM d, y, h:mm:ss a'` (`Jun 15, 2015, 9:03:01 AM`).
     * - `'long'`: equivalent to `'MMMM d, y, h:mm:ss a z'` (`June 15, 2015 at 9:03:01 AM
     * GMT+1`).
     * - `'full'`: equivalent to `'EEEE, MMMM d, y, h:mm:ss a zzzz'` (`Monday, June 15, 2015 at
     * 9:03:01 AM GMT+01:00`).
     * - `'shortDate'`: equivalent to `'M/d/yy'` (`6/15/15`).
     * - `'mediumDate'`: equivalent to `'MMM d, y'` (`Jun 15, 2015`).
     * - `'longDate'`: equivalent to `'MMMM d, y'` (`June 15, 2015`).
     * - `'fullDate'`: equivalent to `'EEEE, MMMM d, y'` (`Monday, June 15, 2015`).
     * - `'shortTime'`: equivalent to `'h:mm a'` (`9:03 AM`).
     * - `'mediumTime'`: equivalent to `'h:mm:ss a'` (`9:03:01 AM`).
     * - `'longTime'`: equivalent to `'h:mm:ss a z'` (`9:03:01 AM GMT+1`).
     * - `'fullTime'`: equivalent to `'h:mm:ss a zzzz'` (`9:03:01 AM GMT+01:00`).
     *
     * ### Custom format options
     *
     * You can construct a format string using symbols to specify the components
     * of a date-time value, as described in the following table.
     * Format details depend on the locale.
     * Fields marked with (*) are only available in the extra data set for the given locale.
     *
     *  | Field type         | Format      | Description                                                   | Example Value                                              |
     *  |--------------------|-------------|---------------------------------------------------------------|------------------------------------------------------------|
     *  | Era                | G, GG & GGG | Abbreviated                                                   | AD                                                         |
     *  |                    | GGGG        | Wide                                                          | Anno Domini                                                |
     *  |                    | GGGGG       | Narrow                                                        | A                                                          |
     *  | Year               | y           | Numeric: minimum digits                                       | 2, 20, 201, 2017, 20173                                    |
     *  |                    | yy          | Numeric: 2 digits + zero padded                               | 02, 20, 01, 17, 73                                         |
     *  |                    | yyy         | Numeric: 3 digits + zero padded                               | 002, 020, 201, 2017, 20173                                 |
     *  |                    | yyyy        | Numeric: 4 digits or more + zero padded                       | 0002, 0020, 0201, 2017, 20173                              |
     *  | Month              | M           | Numeric: 1 digit                                              | 9, 12                                                      |
     *  |                    | MM          | Numeric: 2 digits + zero padded                               | 09, 12                                                     |
     *  |                    | MMM         | Abbreviated                                                   | Sep                                                        |
     *  |                    | MMMM        | Wide                                                          | September                                                  |
     *  |                    | MMMMM       | Narrow                                                        | S                                                          |
     *  | Month standalone   | L           | Numeric: 1 digit                                              | 9, 12                                                      |
     *  |                    | LL          | Numeric: 2 digits + zero padded                               | 09, 12                                                     |
     *  |                    | LLL         | Abbreviated                                                   | Sep                                                        |
     *  |                    | LLLL        | Wide                                                          | September                                                  |
     *  |                    | LLLLL       | Narrow                                                        | S                                                          |
     *  | Week of year       | w           | Numeric: minimum digits                                       | 1... 53                                                    |
     *  |                    | ww          | Numeric: 2 digits + zero padded                               | 01... 53                                                   |
     *  | Week of month      | W           | Numeric: 1 digit                                              | 1... 5                                                     |
     *  | Day of month       | d           | Numeric: minimum digits                                       | 1                                                          |
     *  |                    | dd          | Numeric: 2 digits + zero padded                               | 01                                                          |
     *  | Week day           | E, EE & EEE | Abbreviated                                                   | Tue                                                        |
     *  |                    | EEEE        | Wide                                                          | Tuesday                                                    |
     *  |                    | EEEEE       | Narrow                                                        | T                                                          |
     *  |                    | EEEEEE      | Short                                                         | Tu                                                         |
     *  | Period             | a, aa & aaa | Abbreviated                                                   | am/pm or AM/PM                                             |
     *  |                    | aaaa        | Wide (fallback to `a` when missing)                           | ante meridiem/post meridiem                                |
     *  |                    | aaaaa       | Narrow                                                        | a/p                                                        |
     *  | Period*            | B, BB & BBB | Abbreviated                                                   | mid.                                                       |
     *  |                    | BBBB        | Wide                                                          | am, pm, midnight, noon, morning, afternoon, evening, night |
     *  |                    | BBBBB       | Narrow                                                        | md                                                         |
     *  | Period standalone* | b, bb & bbb | Abbreviated                                                   | mid.                                                       |
     *  |                    | bbbb        | Wide                                                          | am, pm, midnight, noon, morning, afternoon, evening, night |
     *  |                    | bbbbb       | Narrow                                                        | md                                                         |
     *  | Hour 1-12          | h           | Numeric: minimum digits                                       | 1, 12                                                      |
     *  |                    | hh          | Numeric: 2 digits + zero padded                               | 01, 12                                                     |
     *  | Hour 0-23          | H           | Numeric: minimum digits                                       | 0, 23                                                      |
     *  |                    | HH          | Numeric: 2 digits + zero padded                               | 00, 23                                                     |
     *  | Minute             | m           | Numeric: minimum digits                                       | 8, 59                                                      |
     *  |                    | mm          | Numeric: 2 digits + zero padded                               | 08, 59                                                     |
     *  | Second             | s           | Numeric: minimum digits                                       | 0... 59                                                    |
     *  |                    | ss          | Numeric: 2 digits + zero padded                               | 00... 59                                                   |
     *  | Fractional seconds | S           | Numeric: 1 digit                                              | 0... 9                                                     |
     *  |                    | SS          | Numeric: 2 digits + zero padded                               | 00... 99                                                   |
     *  |                    | SSS         | Numeric: 3 digits + zero padded (= milliseconds)              | 000... 999                                                 |
     *  | Zone               | z, zz & zzz | Short specific non location format (fallback to O)            | GMT-8                                                      |
     *  |                    | zzzz        | Long specific non location format (fallback to OOOO)          | GMT-08:00                                                  |
     *  |                    | Z, ZZ & ZZZ | ISO8601 basic format                                          | -0800                                                      |
     *  |                    | ZZZZ        | Long localized GMT format                                     | GMT-8:00                                                   |
     *  |                    | ZZZZZ       | ISO8601 extended format + Z indicator for offset 0 (= XXXXX)  | -08:00                                                     |
     *  |                    | O, OO & OOO | Short localized GMT format                                    | GMT-8                                                      |
     *  |                    | OOOO        | Long localized GMT format                                     | GMT-08:00                                                  |
     *
     * Note that timezone correction is not applied to an ISO string that has no time component, such as "2016-09-19"
     *
     * ### Format examples
     *
     * These examples transform a date into various formats,
     * assuming that `dateObj` is a JavaScript `Date` object for
     * year: 2015, month: 6, day: 15, hour: 21, minute: 43, second: 11,
     * given in the local time for the `en-US` locale.
     *
     * ```
     * {{ dateObj | date }}               // output is 'Jun 15, 2015'
     * {{ dateObj | date:'medium' }}      // output is 'Jun 15, 2015, 9:43:11 PM'
     * {{ dateObj | date:'shortTime' }}   // output is '9:43 PM'
     * {{ dateObj | date:'mmss' }}        // output is '43:11'
     * ```
     *
     * ### Usage example
     *
     * The following component uses a date pipe to display the current date in different formats.
     *
     * ```
     * @Component({
     *  selector: 'date-pipe',
     *  template: `<div>
     *    <p>Today is {{today | date}}</p>
     *    <p>Or if you prefer, {{today | date:'fullDate'}}</p>
     *    <p>The time is {{today | date:'h:mm a z'}}</p>
     *  </div>`
     * })
     * // Get the current date and time as a date-time value.
     * export class DatePipeComponent {
     *   today: number = Date.now();
     * }
     * ```
     *
     * @publicApi
     */
    // clang-format on
    var DatePipe = /** @class */ (function () {
        function DatePipe(locale) {
            this.locale = locale;
        }
        DatePipe_1 = DatePipe;
        /**
         * @param value The date expression: a `Date` object,  a number
         * (milliseconds since UTC epoch), or an ISO string (https://www.w3.org/TR/NOTE-datetime).
         * @param format The date/time components to include, using predefined options or a
         * custom format string.
         * @param timezone A timezone offset (such as `'+0430'`), or a standard
         * UTC/GMT or continental US timezone abbreviation. Default is
         * the local system timezone of the end-user's machine.
         * @param locale A locale code for the locale format rules to use.
         * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
         * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
         * @returns A date string in the desired format.
         */
        DatePipe.prototype.transform = function (value, format, timezone, locale) {
            if (format === void 0) { format = 'mediumDate'; }
            if (value == null || value === '' || value !== value)
                return null;
            try {
                return formatDate(value, format, locale || this.locale, timezone);
            }
            catch (error) {
                throw invalidPipeArgumentError(DatePipe_1, error.message);
            }
        };
        var DatePipe_1;
        DatePipe = DatePipe_1 = __decorate([
            core.Pipe({ name: 'date', pure: true }),
            __param(0, core.Inject(core.LOCALE_ID)),
            __metadata("design:paramtypes", [String])
        ], DatePipe);
        return DatePipe;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var _INTERPOLATION_REGEXP = /#/g;
    /**
     * @ngModule CommonModule
     * @description
     *
     * Maps a value to a string that pluralizes the value according to locale rules.
     *
     * @usageNotes
     *
     * ### Example
     *
     * {@example common/pipes/ts/i18n_pipe.ts region='I18nPluralPipeComponent'}
     *
     * @publicApi
     */
    var I18nPluralPipe = /** @class */ (function () {
        function I18nPluralPipe(_localization) {
            this._localization = _localization;
        }
        I18nPluralPipe_1 = I18nPluralPipe;
        /**
         * @param value the number to be formatted
         * @param pluralMap an object that mimics the ICU format, see
         * http://userguide.icu-project.org/formatparse/messages.
         * @param locale a `string` defining the locale to use (uses the current {@link LOCALE_ID} by
         * default).
         */
        I18nPluralPipe.prototype.transform = function (value, pluralMap, locale) {
            if (value == null)
                return '';
            if (typeof pluralMap !== 'object' || pluralMap === null) {
                throw invalidPipeArgumentError(I18nPluralPipe_1, pluralMap);
            }
            var key = getPluralCategory(value, Object.keys(pluralMap), this._localization, locale);
            return pluralMap[key].replace(_INTERPOLATION_REGEXP, value.toString());
        };
        var I18nPluralPipe_1;
        I18nPluralPipe = I18nPluralPipe_1 = __decorate([
            core.Pipe({ name: 'i18nPlural', pure: true }),
            __metadata("design:paramtypes", [NgLocalization])
        ], I18nPluralPipe);
        return I18nPluralPipe;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @ngModule CommonModule
     * @description
     *
     * Generic selector that displays the string that matches the current value.
     *
     * If none of the keys of the `mapping` match the `value`, then the content
     * of the `other` key is returned when present, otherwise an empty string is returned.
     *
     * @usageNotes
     *
     * ### Example
     *
     * {@example common/pipes/ts/i18n_pipe.ts region='I18nSelectPipeComponent'}
     *
     * @publicApi
     */
    var I18nSelectPipe = /** @class */ (function () {
        function I18nSelectPipe() {
        }
        I18nSelectPipe_1 = I18nSelectPipe;
        /**
         * @param value a string to be internationalized.
         * @param mapping an object that indicates the text that should be displayed
         * for different values of the provided `value`.
         */
        I18nSelectPipe.prototype.transform = function (value, mapping) {
            if (value == null)
                return '';
            if (typeof mapping !== 'object' || typeof value !== 'string') {
                throw invalidPipeArgumentError(I18nSelectPipe_1, mapping);
            }
            if (mapping.hasOwnProperty(value)) {
                return mapping[value];
            }
            if (mapping.hasOwnProperty('other')) {
                return mapping['other'];
            }
            return '';
        };
        var I18nSelectPipe_1;
        I18nSelectPipe = I18nSelectPipe_1 = __decorate([
            core.Pipe({ name: 'i18nSelect', pure: true })
        ], I18nSelectPipe);
        return I18nSelectPipe;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @ngModule CommonModule
     * @description
     *
     * Converts a value into its JSON-format representation.  Useful for debugging.
     *
     * @usageNotes
     *
     * The following component uses a JSON pipe to convert an object
     * to JSON format, and displays the string in both formats for comparison.
     *
     * {@example common/pipes/ts/json_pipe.ts region='JsonPipe'}
     *
     * @publicApi
     */
    var JsonPipe = /** @class */ (function () {
        function JsonPipe() {
        }
        /**
         * @param value A value of any type to convert into a JSON-format string.
         */
        JsonPipe.prototype.transform = function (value) { return JSON.stringify(value, null, 2); };
        JsonPipe = __decorate([
            core.Pipe({ name: 'json', pure: false })
        ], JsonPipe);
        return JsonPipe;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function makeKeyValuePair(key, value) {
        return { key: key, value: value };
    }
    /**
     * @ngModule CommonModule
     * @description
     *
     * Transforms Object or Map into an array of key value pairs.
     *
     * The output array will be ordered by keys.
     * By default the comparator will be by Unicode point value.
     * You can optionally pass a compareFn if your keys are complex types.
     *
     * @usageNotes
     * ### Examples
     *
     * This examples show how an Object or a Map can be iterated by ngFor with the use of this keyvalue
     * pipe.
     *
     * {@example common/pipes/ts/keyvalue_pipe.ts region='KeyValuePipe'}
     *
     * @publicApi
     */
    var KeyValuePipe = /** @class */ (function () {
        function KeyValuePipe(differs) {
            this.differs = differs;
            this.keyValues = [];
        }
        KeyValuePipe.prototype.transform = function (input, compareFn) {
            var _this = this;
            if (compareFn === void 0) { compareFn = defaultComparator; }
            if (!input || (!(input instanceof Map) && typeof input !== 'object')) {
                return null;
            }
            if (!this.differ) {
                // make a differ for whatever type we've been passed in
                this.differ = this.differs.find(input).create();
            }
            var differChanges = this.differ.diff(input);
            if (differChanges) {
                this.keyValues = [];
                differChanges.forEachItem(function (r) {
                    _this.keyValues.push(makeKeyValuePair(r.key, r.currentValue));
                });
                this.keyValues.sort(compareFn);
            }
            return this.keyValues;
        };
        KeyValuePipe = __decorate([
            core.Pipe({ name: 'keyvalue', pure: false }),
            __metadata("design:paramtypes", [core.KeyValueDiffers])
        ], KeyValuePipe);
        return KeyValuePipe;
    }());
    function defaultComparator(keyValueA, keyValueB) {
        var a = keyValueA.key;
        var b = keyValueB.key;
        // if same exit with 0;
        if (a === b)
            return 0;
        // make sure that undefined are at the end of the sort.
        if (a === undefined)
            return 1;
        if (b === undefined)
            return -1;
        // make sure that nulls are at the end of the sort.
        if (a === null)
            return 1;
        if (b === null)
            return -1;
        if (typeof a == 'string' && typeof b == 'string') {
            return a < b ? -1 : 1;
        }
        if (typeof a == 'number' && typeof b == 'number') {
            return a - b;
        }
        if (typeof a == 'boolean' && typeof b == 'boolean') {
            return a < b ? -1 : 1;
        }
        // `a` and `b` are of different types. Compare their string values.
        var aString = String(a);
        var bString = String(b);
        return aString == bString ? 0 : aString < bString ? -1 : 1;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @ngModule CommonModule
     * @description
     *
     * Transforms a number into a string,
     * formatted according to locale rules that determine group sizing and
     * separator, decimal-point character, and other locale-specific
     * configurations.
     *
     * If no parameters are specified, the function rounds off to the nearest value using this
     * [rounding method](https://en.wikibooks.org/wiki/Arithmetic/Rounding).
     * The behavior differs from that of the JavaScript ```Math.round()``` function.
     * In the following case for example, the pipe rounds down where
     * ```Math.round()``` rounds up:
     *
     * ```html
     * -2.5 | number:'1.0-0'
     * > -3
     * Math.round(-2.5)
     * > -2
     * ```
     *
     * @see `formatNumber()`
     *
     * @usageNotes
     * The following code shows how the pipe transforms numbers
     * into text strings, according to various format specifications,
     * where the caller's default locale is `en-US`.
     *
     * ### Example
     *
     * <code-example path="common/pipes/ts/number_pipe.ts" region='NumberPipe'></code-example>
     *
     * @publicApi
     */
    var DecimalPipe = /** @class */ (function () {
        function DecimalPipe(_locale) {
            this._locale = _locale;
        }
        DecimalPipe_1 = DecimalPipe;
        /**
         * @param value The number to be formatted.
         * @param digitsInfo Decimal representation options, specified by a string
         * in the following format:<br>
         * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
         *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
         * Default is `1`.
         *   - `minFractionDigits`: The minimum number of digits after the decimal point.
         * Default is `0`.
         *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
         * Default is `3`.
         * @param locale A locale code for the locale format rules to use.
         * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
         * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
         */
        DecimalPipe.prototype.transform = function (value, digitsInfo, locale) {
            if (isEmpty(value))
                return null;
            locale = locale || this._locale;
            try {
                var num = strToNumber(value);
                return formatNumber(num, locale, digitsInfo);
            }
            catch (error) {
                throw invalidPipeArgumentError(DecimalPipe_1, error.message);
            }
        };
        var DecimalPipe_1;
        DecimalPipe = DecimalPipe_1 = __decorate([
            core.Pipe({ name: 'number' }),
            __param(0, core.Inject(core.LOCALE_ID)),
            __metadata("design:paramtypes", [String])
        ], DecimalPipe);
        return DecimalPipe;
    }());
    /**
     * @ngModule CommonModule
     * @description
     *
     * Transforms a number to a percentage
     * string, formatted according to locale rules that determine group sizing and
     * separator, decimal-point character, and other locale-specific
     * configurations.
     *
     * @see `formatPercent()`
     *
     * @usageNotes
     * The following code shows how the pipe transforms numbers
     * into text strings, according to various format specifications,
     * where the caller's default locale is `en-US`.
     *
     * <code-example path="common/pipes/ts/percent_pipe.ts" region='PercentPipe'></code-example>
     *
     * @publicApi
     */
    var PercentPipe = /** @class */ (function () {
        function PercentPipe(_locale) {
            this._locale = _locale;
        }
        PercentPipe_1 = PercentPipe;
        /**
         *
         * @param value The number to be formatted as a percentage.
         * @param digitsInfo Decimal representation options, specified by a string
         * in the following format:<br>
         * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
         *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
         * Default is `1`.
         *   - `minFractionDigits`: The minimum number of digits after the decimal point.
         * Default is `0`.
         *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
         * Default is `0`.
         * @param locale A locale code for the locale format rules to use.
         * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
         * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
         */
        PercentPipe.prototype.transform = function (value, digitsInfo, locale) {
            if (isEmpty(value))
                return null;
            locale = locale || this._locale;
            try {
                var num = strToNumber(value);
                return formatPercent(num, locale, digitsInfo);
            }
            catch (error) {
                throw invalidPipeArgumentError(PercentPipe_1, error.message);
            }
        };
        var PercentPipe_1;
        PercentPipe = PercentPipe_1 = __decorate([
            core.Pipe({ name: 'percent' }),
            __param(0, core.Inject(core.LOCALE_ID)),
            __metadata("design:paramtypes", [String])
        ], PercentPipe);
        return PercentPipe;
    }());
    /**
     * @ngModule CommonModule
     * @description
     *
     * Transforms a number to a currency string, formatted according to locale rules
     * that determine group sizing and separator, decimal-point character,
     * and other locale-specific configurations.
     *
     * @see `getCurrencySymbol()`
     * @see `formatCurrency()`
     *
     * @usageNotes
     * The following code shows how the pipe transforms numbers
     * into text strings, according to various format specifications,
     * where the caller's default locale is `en-US`.
     *
     * <code-example path="common/pipes/ts/currency_pipe.ts" region='CurrencyPipe'></code-example>
     *
     * @publicApi
     */
    var CurrencyPipe = /** @class */ (function () {
        function CurrencyPipe(_locale) {
            this._locale = _locale;
        }
        CurrencyPipe_1 = CurrencyPipe;
        /**
         *
         * @param value The number to be formatted as currency.
         * @param currencyCode The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code,
         * such as `USD` for the US dollar and `EUR` for the euro.
         * @param display The format for the currency indicator. One of the following:
         *   - `code`: Show the code (such as `USD`).
         *   - `symbol`(default): Show the symbol (such as `$`).
         *   - `symbol-narrow`: Use the narrow symbol for locales that have two symbols for their
         * currency.
         * For example, the Canadian dollar CAD has the symbol `CA$` and the symbol-narrow `$`. If the
         * locale has no narrow symbol, uses the standard symbol for the locale.
         *   - String: Use the given string value instead of a code or a symbol.
         * For example, an empty string will suppress the currency & symbol.
         *   - Boolean (marked deprecated in v5): `true` for symbol and false for `code`.
         *
         * @param digitsInfo Decimal representation options, specified by a string
         * in the following format:<br>
         * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
         *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
         * Default is `1`.
         *   - `minFractionDigits`: The minimum number of digits after the decimal point.
         * Default is `2`.
         *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
         * Default is `2`.
         * If not provided, the number will be formatted with the proper amount of digits,
         * depending on what the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) specifies.
         * For example, the Canadian dollar has 2 digits, whereas the Chilean peso has none.
         * @param locale A locale code for the locale format rules to use.
         * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
         * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
         */
        CurrencyPipe.prototype.transform = function (value, currencyCode, display, digitsInfo, locale) {
            if (display === void 0) { display = 'symbol'; }
            if (isEmpty(value))
                return null;
            locale = locale || this._locale;
            if (typeof display === 'boolean') {
                if (console && console.warn) {
                    console.warn("Warning: the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are \"code\", \"symbol\" or \"symbol-narrow\".");
                }
                display = display ? 'symbol' : 'code';
            }
            var currency = currencyCode || 'USD';
            if (display !== 'code') {
                if (display === 'symbol' || display === 'symbol-narrow') {
                    currency = getCurrencySymbol(currency, display === 'symbol' ? 'wide' : 'narrow', locale);
                }
                else {
                    currency = display;
                }
            }
            try {
                var num = strToNumber(value);
                return formatCurrency(num, locale, currency, currencyCode, digitsInfo);
            }
            catch (error) {
                throw invalidPipeArgumentError(CurrencyPipe_1, error.message);
            }
        };
        var CurrencyPipe_1;
        CurrencyPipe = CurrencyPipe_1 = __decorate([
            core.Pipe({ name: 'currency' }),
            __param(0, core.Inject(core.LOCALE_ID)),
            __metadata("design:paramtypes", [String])
        ], CurrencyPipe);
        return CurrencyPipe;
    }());
    function isEmpty(value) {
        return value == null || value === '' || value !== value;
    }
    /**
     * Transforms a string into a number (if needed).
     */
    function strToNumber(value) {
        // Convert strings to numbers
        if (typeof value === 'string' && !isNaN(Number(value) - parseFloat(value))) {
            return Number(value);
        }
        if (typeof value !== 'number') {
            throw new Error(value + " is not a number");
        }
        return value;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @ngModule CommonModule
     * @description
     *
     * Creates a new `Array` or `String` containing a subset (slice) of the elements.
     *
     * @usageNotes
     *
     * All behavior is based on the expected behavior of the JavaScript API `Array.prototype.slice()`
     * and `String.prototype.slice()`.
     *
     * When operating on an `Array`, the returned `Array` is always a copy even when all
     * the elements are being returned.
     *
     * When operating on a blank value, the pipe returns the blank value.
     *
     * ### List Example
     *
     * This `ngFor` example:
     *
     * {@example common/pipes/ts/slice_pipe.ts region='SlicePipe_list'}
     *
     * produces the following:
     *
     * ```html
     * <li>b</li>
     * <li>c</li>
     * ```
     *
     * ### String Examples
     *
     * {@example common/pipes/ts/slice_pipe.ts region='SlicePipe_string'}
     *
     * @publicApi
     */
    var SlicePipe = /** @class */ (function () {
        function SlicePipe() {
        }
        SlicePipe_1 = SlicePipe;
        /**
         * @param value a list or a string to be sliced.
         * @param start the starting index of the subset to return:
         *   - **a positive integer**: return the item at `start` index and all items after
         *     in the list or string expression.
         *   - **a negative integer**: return the item at `start` index from the end and all items after
         *     in the list or string expression.
         *   - **if positive and greater than the size of the expression**: return an empty list or
         * string.
         *   - **if negative and greater than the size of the expression**: return entire list or string.
         * @param end the ending index of the subset to return:
         *   - **omitted**: return all items until the end.
         *   - **if positive**: return all items before `end` index of the list or string.
         *   - **if negative**: return all items before `end` index from the end of the list or string.
         */
        SlicePipe.prototype.transform = function (value, start, end) {
            if (value == null)
                return value;
            if (!this.supports(value)) {
                throw invalidPipeArgumentError(SlicePipe_1, value);
            }
            return value.slice(start, end);
        };
        SlicePipe.prototype.supports = function (obj) { return typeof obj === 'string' || Array.isArray(obj); };
        var SlicePipe_1;
        SlicePipe = SlicePipe_1 = __decorate([
            core.Pipe({ name: 'slice', pure: false })
        ], SlicePipe);
        return SlicePipe;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A collection of Angular pipes that are likely to be used in each and every application.
     */
    var COMMON_PIPES = [
        AsyncPipe,
        UpperCasePipe,
        LowerCasePipe,
        JsonPipe,
        SlicePipe,
        DecimalPipe,
        PercentPipe,
        TitleCasePipe,
        CurrencyPipe,
        DatePipe,
        I18nPluralPipe,
        I18nSelectPipe,
        KeyValuePipe,
    ];

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // Note: This does not contain the location providers,
    // as they need some platform specific implementations to work.
    /**
     * Exports all the basic Angular directives and pipes,
     * such as `NgIf`, `NgForOf`, `DecimalPipe`, and so on.
     * Re-exported by `BrowserModule`, which is included automatically in the root
     * `AppModule` when you create a new app with the CLI `new` command.
     *
     * * The `providers` options configure the NgModule's injector to provide
     * localization dependencies to members.
     * * The `exports` options make the declared directives and pipes available for import
     * by other NgModules.
     *
     * @publicApi
     */
    var CommonModule = /** @class */ (function () {
        function CommonModule() {
        }
        CommonModule = __decorate([
            core.NgModule({
                declarations: [COMMON_DIRECTIVES, COMMON_PIPES],
                exports: [COMMON_DIRECTIVES, COMMON_PIPES],
                providers: [
                    { provide: NgLocalization, useClass: NgLocaleLocalization },
                ],
            })
        ], CommonModule);
        return CommonModule;
    }());
    var ɵ0 = getPluralCase;
    /**
     * A module that contains the deprecated i18n pipes.
     *
     * @deprecated from v5
     * @publicApi
     */
    var DeprecatedI18NPipesModule = /** @class */ (function () {
        function DeprecatedI18NPipesModule() {
        }
        DeprecatedI18NPipesModule = __decorate([
            core.NgModule({
                declarations: [COMMON_DEPRECATED_I18N_PIPES],
                exports: [COMMON_DEPRECATED_I18N_PIPES],
                providers: [{ provide: DEPRECATED_PLURAL_FN, useValue: ɵ0 }],
            })
        ], DeprecatedI18NPipesModule);
        return DeprecatedI18NPipesModule;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A DI Token representing the main rendering context. In a browser this is the DOM Document.
     *
     * Note: Document might not be available in the Application Context when Application and Rendering
     * Contexts are not the same (e.g. when running the application into a Web Worker).
     *
     * @publicApi
     */
    var DOCUMENT = new core.InjectionToken('DocumentToken');

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @publicApi
     */
    var VERSION = new core.Version('7.2.13');

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Defines a scroll position manager. Implemented by `BrowserViewportScroller`.
     *
     * @publicApi
     */
    var ViewportScroller = /** @class */ (function () {
        function ViewportScroller() {
        }
        // De-sugared tree-shakable injection
        // See #23917
        /** @nocollapse */
        ViewportScroller.ngInjectableDef = core.defineInjectable({
            providedIn: 'root',
            factory: function () { return new BrowserViewportScroller(core.inject(DOCUMENT), window, core.inject(core.ErrorHandler)); }
        });
        return ViewportScroller;
    }());
    /**
     * Manages the scroll position for a browser window.
     */
    var BrowserViewportScroller = /** @class */ (function () {
        function BrowserViewportScroller(document, window, errorHandler) {
            this.document = document;
            this.window = window;
            this.errorHandler = errorHandler;
            this.offset = function () { return [0, 0]; };
        }
        /**
         * Configures the top offset used when scrolling to an anchor.
         * @param offset A position in screen coordinates (a tuple with x and y values)
         * or a function that returns the top offset position.
         *
         */
        BrowserViewportScroller.prototype.setOffset = function (offset) {
            if (Array.isArray(offset)) {
                this.offset = function () { return offset; };
            }
            else {
                this.offset = offset;
            }
        };
        /**
         * Retrieves the current scroll position.
         * @returns The position in screen coordinates.
         */
        BrowserViewportScroller.prototype.getScrollPosition = function () {
            if (this.supportScrollRestoration()) {
                return [this.window.scrollX, this.window.scrollY];
            }
            else {
                return [0, 0];
            }
        };
        /**
         * Sets the scroll position.
         * @param position The new position in screen coordinates.
         */
        BrowserViewportScroller.prototype.scrollToPosition = function (position) {
            if (this.supportScrollRestoration()) {
                this.window.scrollTo(position[0], position[1]);
            }
        };
        /**
         * Scrolls to an anchor element.
         * @param anchor The ID of the anchor element.
         */
        BrowserViewportScroller.prototype.scrollToAnchor = function (anchor) {
            if (this.supportScrollRestoration()) {
                // Escape anything passed to `querySelector` as it can throw errors and stop the application
                // from working if invalid values are passed.
                if (this.window.CSS && this.window.CSS.escape) {
                    anchor = this.window.CSS.escape(anchor);
                }
                else {
                    anchor = anchor.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
                }
                try {
                    var elSelectedById = this.document.querySelector("#" + anchor);
                    if (elSelectedById) {
                        this.scrollToElement(elSelectedById);
                        return;
                    }
                    var elSelectedByName = this.document.querySelector("[name='" + anchor + "']");
                    if (elSelectedByName) {
                        this.scrollToElement(elSelectedByName);
                        return;
                    }
                }
                catch (e) {
                    this.errorHandler.handleError(e);
                }
            }
        };
        /**
         * Disables automatic scroll restoration provided by the browser.
         */
        BrowserViewportScroller.prototype.setHistoryScrollRestoration = function (scrollRestoration) {
            if (this.supportScrollRestoration()) {
                var history_1 = this.window.history;
                if (history_1 && history_1.scrollRestoration) {
                    history_1.scrollRestoration = scrollRestoration;
                }
            }
        };
        BrowserViewportScroller.prototype.scrollToElement = function (el) {
            var rect = el.getBoundingClientRect();
            var left = rect.left + this.window.pageXOffset;
            var top = rect.top + this.window.pageYOffset;
            var offset = this.offset();
            this.window.scrollTo(left - offset[0], top - offset[1]);
        };
        /**
         * We only support scroll restoration when we can get a hold of window.
         * This means that we do not support this behavior when running in a web worker.
         *
         * Lifting this restriction right now would require more changes in the dom adapter.
         * Since webworkers aren't widely used, we will lift it once RouterScroller is
         * battle-tested.
         */
        BrowserViewportScroller.prototype.supportScrollRestoration = function () {
            try {
                return !!this.window && !!this.window.scrollTo;
            }
            catch (_a) {
                return false;
            }
        };
        return BrowserViewportScroller;
    }());

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function isFunction(x) {
        return typeof x === 'function';
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var _enable_super_gross_mode_that_will_cause_bad_things = false;
    var config = {
        Promise: undefined,
        set useDeprecatedSynchronousErrorHandling(value) {
            if (value) {
                var error = /*@__PURE__*/ new Error();
                /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
            }
            _enable_super_gross_mode_that_will_cause_bad_things = value;
        },
        get useDeprecatedSynchronousErrorHandling() {
            return _enable_super_gross_mode_that_will_cause_bad_things;
        },
    };

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function hostReportError(err) {
        setTimeout(function () { throw err; }, 0);
    }

    /** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */
    var empty = {
        closed: true,
        next: function (value) { },
        error: function (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError(err);
            }
        },
        complete: function () { }
    };

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function isObject(x) {
        return x !== null && typeof x === 'object';
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    var UnsubscriptionError = UnsubscriptionErrorImpl;

    /** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */
    var Subscription = /*@__PURE__*/ (function () {
        function Subscription(unsubscribe) {
            this.closed = false;
            this._parentOrParents = null;
            this._subscriptions = null;
            if (unsubscribe) {
                this._unsubscribe = unsubscribe;
            }
        }
        Subscription.prototype.unsubscribe = function () {
            var errors;
            if (this.closed) {
                return;
            }
            var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
            this.closed = true;
            this._parentOrParents = null;
            this._subscriptions = null;
            if (_parentOrParents instanceof Subscription) {
                _parentOrParents.remove(this);
            }
            else if (_parentOrParents !== null) {
                for (var index = 0; index < _parentOrParents.length; ++index) {
                    var parent_1 = _parentOrParents[index];
                    parent_1.remove(this);
                }
            }
            if (isFunction(_unsubscribe)) {
                try {
                    _unsubscribe.call(this);
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
                }
            }
            if (isArray(_subscriptions)) {
                var index = -1;
                var len = _subscriptions.length;
                while (++index < len) {
                    var sub = _subscriptions[index];
                    if (isObject(sub)) {
                        try {
                            sub.unsubscribe();
                        }
                        catch (e) {
                            errors = errors || [];
                            if (e instanceof UnsubscriptionError) {
                                errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                            }
                            else {
                                errors.push(e);
                            }
                        }
                    }
                }
            }
            if (errors) {
                throw new UnsubscriptionError(errors);
            }
        };
        Subscription.prototype.add = function (teardown) {
            var subscription = teardown;
            if (!teardown) {
                return Subscription.EMPTY;
            }
            switch (typeof teardown) {
                case 'function':
                    subscription = new Subscription(teardown);
                case 'object':
                    if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                        return subscription;
                    }
                    else if (this.closed) {
                        subscription.unsubscribe();
                        return subscription;
                    }
                    else if (!(subscription instanceof Subscription)) {
                        var tmp = subscription;
                        subscription = new Subscription();
                        subscription._subscriptions = [tmp];
                    }
                    break;
                default: {
                    throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
                }
            }
            var _parentOrParents = subscription._parentOrParents;
            if (_parentOrParents === null) {
                subscription._parentOrParents = this;
            }
            else if (_parentOrParents instanceof Subscription) {
                if (_parentOrParents === this) {
                    return subscription;
                }
                subscription._parentOrParents = [_parentOrParents, this];
            }
            else if (_parentOrParents.indexOf(this) === -1) {
                _parentOrParents.push(this);
            }
            else {
                return subscription;
            }
            var subscriptions = this._subscriptions;
            if (subscriptions === null) {
                this._subscriptions = [subscription];
            }
            else {
                subscriptions.push(subscription);
            }
            return subscription;
        };
        Subscription.prototype.remove = function (subscription) {
            var subscriptions = this._subscriptions;
            if (subscriptions) {
                var subscriptionIndex = subscriptions.indexOf(subscription);
                if (subscriptionIndex !== -1) {
                    subscriptions.splice(subscriptionIndex, 1);
                }
            }
        };
        Subscription.EMPTY = (function (empty) {
            empty.closed = true;
            return empty;
        }(new Subscription()));
        return Subscription;
    }());
    function flattenUnsubscriptionErrors(errors) {
        return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError) ? err.errors : err); }, []);
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var rxSubscriber = typeof Symbol === 'function'
        ? /*@__PURE__*/ Symbol('rxSubscriber')
        : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();

    /** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */
    var Subscriber = /*@__PURE__*/ (function (_super) {
        __extends(Subscriber, _super);
        function Subscriber(destinationOrNext, error, complete) {
            var _this = _super.call(this) || this;
            _this.syncErrorValue = null;
            _this.syncErrorThrown = false;
            _this.syncErrorThrowable = false;
            _this.isStopped = false;
            switch (arguments.length) {
                case 0:
                    _this.destination = empty;
                    break;
                case 1:
                    if (!destinationOrNext) {
                        _this.destination = empty;
                        break;
                    }
                    if (typeof destinationOrNext === 'object') {
                        if (destinationOrNext instanceof Subscriber) {
                            _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                            _this.destination = destinationOrNext;
                            destinationOrNext.add(_this);
                        }
                        else {
                            _this.syncErrorThrowable = true;
                            _this.destination = new SafeSubscriber(_this, destinationOrNext);
                        }
                        break;
                    }
                default:
                    _this.syncErrorThrowable = true;
                    _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                    break;
            }
            return _this;
        }
        Subscriber.prototype[rxSubscriber] = function () { return this; };
        Subscriber.create = function (next, error, complete) {
            var subscriber = new Subscriber(next, error, complete);
            subscriber.syncErrorThrowable = false;
            return subscriber;
        };
        Subscriber.prototype.next = function (value) {
            if (!this.isStopped) {
                this._next(value);
            }
        };
        Subscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                this.isStopped = true;
                this._error(err);
            }
        };
        Subscriber.prototype.complete = function () {
            if (!this.isStopped) {
                this.isStopped = true;
                this._complete();
            }
        };
        Subscriber.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
        };
        Subscriber.prototype._next = function (value) {
            this.destination.next(value);
        };
        Subscriber.prototype._error = function (err) {
            this.destination.error(err);
            this.unsubscribe();
        };
        Subscriber.prototype._complete = function () {
            this.destination.complete();
            this.unsubscribe();
        };
        Subscriber.prototype._unsubscribeAndRecycle = function () {
            var _parentOrParents = this._parentOrParents;
            this._parentOrParents = null;
            this.unsubscribe();
            this.closed = false;
            this.isStopped = false;
            this._parentOrParents = _parentOrParents;
            return this;
        };
        return Subscriber;
    }(Subscription));
    var SafeSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SafeSubscriber, _super);
        function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
            var _this = _super.call(this) || this;
            _this._parentSubscriber = _parentSubscriber;
            var next;
            var context = _this;
            if (isFunction(observerOrNext)) {
                next = observerOrNext;
            }
            else if (observerOrNext) {
                next = observerOrNext.next;
                error = observerOrNext.error;
                complete = observerOrNext.complete;
                if (observerOrNext !== empty) {
                    context = Object.create(observerOrNext);
                    if (isFunction(context.unsubscribe)) {
                        _this.add(context.unsubscribe.bind(context));
                    }
                    context.unsubscribe = _this.unsubscribe.bind(_this);
                }
            }
            _this._context = context;
            _this._next = next;
            _this._error = error;
            _this._complete = complete;
            return _this;
        }
        SafeSubscriber.prototype.next = function (value) {
            if (!this.isStopped && this._next) {
                var _parentSubscriber = this._parentSubscriber;
                if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._next, value);
                }
                else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var _parentSubscriber = this._parentSubscriber;
                var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
                if (this._error) {
                    if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                        this.__tryOrUnsub(this._error, err);
                        this.unsubscribe();
                    }
                    else {
                        this.__tryOrSetError(_parentSubscriber, this._error, err);
                        this.unsubscribe();
                    }
                }
                else if (!_parentSubscriber.syncErrorThrowable) {
                    this.unsubscribe();
                    if (useDeprecatedSynchronousErrorHandling) {
                        throw err;
                    }
                    hostReportError(err);
                }
                else {
                    if (useDeprecatedSynchronousErrorHandling) {
                        _parentSubscriber.syncErrorValue = err;
                        _parentSubscriber.syncErrorThrown = true;
                    }
                    else {
                        hostReportError(err);
                    }
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.complete = function () {
            var _this = this;
            if (!this.isStopped) {
                var _parentSubscriber = this._parentSubscriber;
                if (this._complete) {
                    var wrappedComplete = function () { return _this._complete.call(_this._context); };
                    if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                        this.__tryOrUnsub(wrappedComplete);
                        this.unsubscribe();
                    }
                    else {
                        this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                        this.unsubscribe();
                    }
                }
                else {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
            try {
                fn.call(this._context, value);
            }
            catch (err) {
                this.unsubscribe();
                if (config.useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                else {
                    hostReportError(err);
                }
            }
        };
        SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
            if (!config.useDeprecatedSynchronousErrorHandling) {
                throw new Error('bad call');
            }
            try {
                fn.call(this._context, value);
            }
            catch (err) {
                if (config.useDeprecatedSynchronousErrorHandling) {
                    parent.syncErrorValue = err;
                    parent.syncErrorThrown = true;
                    return true;
                }
                else {
                    hostReportError(err);
                    return true;
                }
            }
            return false;
        };
        SafeSubscriber.prototype._unsubscribe = function () {
            var _parentSubscriber = this._parentSubscriber;
            this._context = null;
            this._parentSubscriber = null;
            _parentSubscriber.unsubscribe();
        };
        return SafeSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */
    function canReportError(observer) {
        while (observer) {
            var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
            if (closed_1 || isStopped) {
                return false;
            }
            else if (destination && destination instanceof Subscriber) {
                observer = destination;
            }
            else {
                observer = null;
            }
        }
        return true;
    }

    /** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */
    function toSubscriber(nextOrObserver, error, complete) {
        if (nextOrObserver) {
            if (nextOrObserver instanceof Subscriber) {
                return nextOrObserver;
            }
            if (nextOrObserver[rxSubscriber]) {
                return nextOrObserver[rxSubscriber]();
            }
        }
        if (!nextOrObserver && !error && !complete) {
            return new Subscriber(empty);
        }
        return new Subscriber(nextOrObserver, error, complete);
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function noop() { }

    /** PURE_IMPORTS_START _noop PURE_IMPORTS_END */
    function pipe() {
        var fns = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fns[_i] = arguments[_i];
        }
        return pipeFromArray(fns);
    }
    function pipeFromArray(fns) {
        if (!fns) {
            return noop;
        }
        if (fns.length === 1) {
            return fns[0];
        }
        return function piped(input) {
            return fns.reduce(function (prev, fn) { return fn(prev); }, input);
        };
    }

    /** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */
    var Observable = /*@__PURE__*/ (function () {
        function Observable(subscribe) {
            this._isScalar = false;
            if (subscribe) {
                this._subscribe = subscribe;
            }
        }
        Observable.prototype.lift = function (operator) {
            var observable = new Observable();
            observable.source = this;
            observable.operator = operator;
            return observable;
        };
        Observable.prototype.subscribe = function (observerOrNext, error, complete) {
            var operator = this.operator;
            var sink = toSubscriber(observerOrNext, error, complete);
            if (operator) {
                sink.add(operator.call(sink, this.source));
            }
            else {
                sink.add(this.source || (config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                    this._subscribe(sink) :
                    this._trySubscribe(sink));
            }
            if (config.useDeprecatedSynchronousErrorHandling) {
                if (sink.syncErrorThrowable) {
                    sink.syncErrorThrowable = false;
                    if (sink.syncErrorThrown) {
                        throw sink.syncErrorValue;
                    }
                }
            }
            return sink;
        };
        Observable.prototype._trySubscribe = function (sink) {
            try {
                return this._subscribe(sink);
            }
            catch (err) {
                if (config.useDeprecatedSynchronousErrorHandling) {
                    sink.syncErrorThrown = true;
                    sink.syncErrorValue = err;
                }
                if (canReportError(sink)) {
                    sink.error(err);
                }
                else {
                    console.warn(err);
                }
            }
        };
        Observable.prototype.forEach = function (next, promiseCtor) {
            var _this = this;
            promiseCtor = getPromiseCtor(promiseCtor);
            return new promiseCtor(function (resolve, reject) {
                var subscription;
                subscription = _this.subscribe(function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        if (subscription) {
                            subscription.unsubscribe();
                        }
                    }
                }, reject, resolve);
            });
        };
        Observable.prototype._subscribe = function (subscriber) {
            var source = this.source;
            return source && source.subscribe(subscriber);
        };
        Observable.prototype[observable] = function () {
            return this;
        };
        Observable.prototype.pipe = function () {
            var operations = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                operations[_i] = arguments[_i];
            }
            if (operations.length === 0) {
                return this;
            }
            return pipeFromArray(operations)(this);
        };
        Observable.prototype.toPromise = function (promiseCtor) {
            var _this = this;
            promiseCtor = getPromiseCtor(promiseCtor);
            return new promiseCtor(function (resolve, reject) {
                var value;
                _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
            });
        };
        Observable.create = function (subscribe) {
            return new Observable(subscribe);
        };
        return Observable;
    }());
    function getPromiseCtor(promiseCtor) {
        if (!promiseCtor) {
            promiseCtor = Promise;
        }
        if (!promiseCtor) {
            throw new Error('no Promise impl found');
        }
        return promiseCtor;
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;

    /** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
    var SubjectSubscription = /*@__PURE__*/ (function (_super) {
        __extends(SubjectSubscription, _super);
        function SubjectSubscription(subject, subscriber) {
            var _this = _super.call(this) || this;
            _this.subject = subject;
            _this.subscriber = subscriber;
            _this.closed = false;
            return _this;
        }
        SubjectSubscription.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.closed = true;
            var subject = this.subject;
            var observers = subject.observers;
            this.subject = null;
            if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
                return;
            }
            var subscriberIndex = observers.indexOf(this.subscriber);
            if (subscriberIndex !== -1) {
                observers.splice(subscriberIndex, 1);
            }
        };
        return SubjectSubscription;
    }(Subscription));

    /** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */
    var SubjectSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SubjectSubscriber, _super);
        function SubjectSubscriber(destination) {
            var _this = _super.call(this, destination) || this;
            _this.destination = destination;
            return _this;
        }
        return SubjectSubscriber;
    }(Subscriber));
    var Subject = /*@__PURE__*/ (function (_super) {
        __extends(Subject, _super);
        function Subject() {
            var _this = _super.call(this) || this;
            _this.observers = [];
            _this.closed = false;
            _this.isStopped = false;
            _this.hasError = false;
            _this.thrownError = null;
            return _this;
        }
        Subject.prototype[rxSubscriber] = function () {
            return new SubjectSubscriber(this);
        };
        Subject.prototype.lift = function (operator) {
            var subject = new AnonymousSubject(this, this);
            subject.operator = operator;
            return subject;
        };
        Subject.prototype.next = function (value) {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            if (!this.isStopped) {
                var observers = this.observers;
                var len = observers.length;
                var copy = observers.slice();
                for (var i = 0; i < len; i++) {
                    copy[i].next(value);
                }
            }
        };
        Subject.prototype.error = function (err) {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            this.hasError = true;
            this.thrownError = err;
            this.isStopped = true;
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].error(err);
            }
            this.observers.length = 0;
        };
        Subject.prototype.complete = function () {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            this.isStopped = true;
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].complete();
            }
            this.observers.length = 0;
        };
        Subject.prototype.unsubscribe = function () {
            this.isStopped = true;
            this.closed = true;
            this.observers = null;
        };
        Subject.prototype._trySubscribe = function (subscriber) {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            else {
                return _super.prototype._trySubscribe.call(this, subscriber);
            }
        };
        Subject.prototype._subscribe = function (subscriber) {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            else if (this.hasError) {
                subscriber.error(this.thrownError);
                return Subscription.EMPTY;
            }
            else if (this.isStopped) {
                subscriber.complete();
                return Subscription.EMPTY;
            }
            else {
                this.observers.push(subscriber);
                return new SubjectSubscription(this, subscriber);
            }
        };
        Subject.prototype.asObservable = function () {
            var observable = new Observable();
            observable.source = this;
            return observable;
        };
        Subject.create = function (destination, source) {
            return new AnonymousSubject(destination, source);
        };
        return Subject;
    }(Observable));
    var AnonymousSubject = /*@__PURE__*/ (function (_super) {
        __extends(AnonymousSubject, _super);
        function AnonymousSubject(destination, source) {
            var _this = _super.call(this) || this;
            _this.destination = destination;
            _this.source = source;
            return _this;
        }
        AnonymousSubject.prototype.next = function (value) {
            var destination = this.destination;
            if (destination && destination.next) {
                destination.next(value);
            }
        };
        AnonymousSubject.prototype.error = function (err) {
            var destination = this.destination;
            if (destination && destination.error) {
                this.destination.error(err);
            }
        };
        AnonymousSubject.prototype.complete = function () {
            var destination = this.destination;
            if (destination && destination.complete) {
                this.destination.complete();
            }
        };
        AnonymousSubject.prototype._subscribe = function (subscriber) {
            var source = this.source;
            if (source) {
                return this.source.subscribe(subscriber);
            }
            else {
                return Subscription.EMPTY;
            }
        };
        return AnonymousSubject;
    }(Subject));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    function refCount() {
        return function refCountOperatorFunction(source) {
            return source.lift(new RefCountOperator(source));
        };
    }
    var RefCountOperator = /*@__PURE__*/ (function () {
        function RefCountOperator(connectable) {
            this.connectable = connectable;
        }
        RefCountOperator.prototype.call = function (subscriber, source) {
            var connectable = this.connectable;
            connectable._refCount++;
            var refCounter = new RefCountSubscriber(subscriber, connectable);
            var subscription = source.subscribe(refCounter);
            if (!refCounter.closed) {
                refCounter.connection = connectable.connect();
            }
            return subscription;
        };
        return RefCountOperator;
    }());
    var RefCountSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(RefCountSubscriber, _super);
        function RefCountSubscriber(destination, connectable) {
            var _this = _super.call(this, destination) || this;
            _this.connectable = connectable;
            return _this;
        }
        RefCountSubscriber.prototype._unsubscribe = function () {
            var connectable = this.connectable;
            if (!connectable) {
                this.connection = null;
                return;
            }
            this.connectable = null;
            var refCount = connectable._refCount;
            if (refCount <= 0) {
                this.connection = null;
                return;
            }
            connectable._refCount = refCount - 1;
            if (refCount > 1) {
                this.connection = null;
                return;
            }
            var connection = this.connection;
            var sharedConnection = connectable._connection;
            this.connection = null;
            if (sharedConnection && (!connection || sharedConnection === connection)) {
                sharedConnection.unsubscribe();
            }
        };
        return RefCountSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subject,_Observable,_Subscriber,_Subscription,_operators_refCount PURE_IMPORTS_END */
    var ConnectableObservable = /*@__PURE__*/ (function (_super) {
        __extends(ConnectableObservable, _super);
        function ConnectableObservable(source, subjectFactory) {
            var _this = _super.call(this) || this;
            _this.source = source;
            _this.subjectFactory = subjectFactory;
            _this._refCount = 0;
            _this._isComplete = false;
            return _this;
        }
        ConnectableObservable.prototype._subscribe = function (subscriber) {
            return this.getSubject().subscribe(subscriber);
        };
        ConnectableObservable.prototype.getSubject = function () {
            var subject = this._subject;
            if (!subject || subject.isStopped) {
                this._subject = this.subjectFactory();
            }
            return this._subject;
        };
        ConnectableObservable.prototype.connect = function () {
            var connection = this._connection;
            if (!connection) {
                this._isComplete = false;
                connection = this._connection = new Subscription();
                connection.add(this.source
                    .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
                if (connection.closed) {
                    this._connection = null;
                    connection = Subscription.EMPTY;
                }
            }
            return connection;
        };
        ConnectableObservable.prototype.refCount = function () {
            return refCount()(this);
        };
        return ConnectableObservable;
    }(Observable));
    var connectableProto = ConnectableObservable.prototype;
    var connectableObservableDescriptor = {
        operator: { value: null },
        _refCount: { value: 0, writable: true },
        _subject: { value: null, writable: true },
        _connection: { value: null, writable: true },
        _subscribe: { value: connectableProto._subscribe },
        _isComplete: { value: connectableProto._isComplete, writable: true },
        getSubject: { value: connectableProto.getSubject },
        connect: { value: connectableProto.connect },
        refCount: { value: connectableProto.refCount }
    };
    var ConnectableSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(ConnectableSubscriber, _super);
        function ConnectableSubscriber(destination, connectable) {
            var _this = _super.call(this, destination) || this;
            _this.connectable = connectable;
            return _this;
        }
        ConnectableSubscriber.prototype._error = function (err) {
            this._unsubscribe();
            _super.prototype._error.call(this, err);
        };
        ConnectableSubscriber.prototype._complete = function () {
            this.connectable._isComplete = true;
            this._unsubscribe();
            _super.prototype._complete.call(this);
        };
        ConnectableSubscriber.prototype._unsubscribe = function () {
            var connectable = this.connectable;
            if (connectable) {
                this.connectable = null;
                var connection = connectable._connection;
                connectable._refCount = 0;
                connectable._subject = null;
                connectable._connection = null;
                if (connection) {
                    connection.unsubscribe();
                }
            }
        };
        return ConnectableSubscriber;
    }(SubjectSubscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber,_Subscription,_Observable,_Subject PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */
    var BehaviorSubject = /*@__PURE__*/ (function (_super) {
        __extends(BehaviorSubject, _super);
        function BehaviorSubject(_value) {
            var _this = _super.call(this) || this;
            _this._value = _value;
            return _this;
        }
        Object.defineProperty(BehaviorSubject.prototype, "value", {
            get: function () {
                return this.getValue();
            },
            enumerable: true,
            configurable: true
        });
        BehaviorSubject.prototype._subscribe = function (subscriber) {
            var subscription = _super.prototype._subscribe.call(this, subscriber);
            if (subscription && !subscription.closed) {
                subscriber.next(this._value);
            }
            return subscription;
        };
        BehaviorSubject.prototype.getValue = function () {
            if (this.hasError) {
                throw this.thrownError;
            }
            else if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            else {
                return this._value;
            }
        };
        BehaviorSubject.prototype.next = function (value) {
            _super.prototype.next.call(this, this._value = value);
        };
        return BehaviorSubject;
    }(Subject));

    /** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _QueueAction,_QueueScheduler PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
    var EMPTY = /*@__PURE__*/ new Observable(function (subscriber) { return subscriber.complete(); });
    function empty$1(scheduler) {
        return scheduler ? emptyScheduled(scheduler) : EMPTY;
    }
    function emptyScheduled(scheduler) {
        return new Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function isScheduler(value) {
        return value && typeof value.schedule === 'function';
    }

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var subscribeToArray = function (array) {
        return function (subscriber) {
            for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
                subscriber.next(array[i]);
            }
            subscriber.complete();
        };
    };

    /** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
    function scheduleArray(input, scheduler) {
        return new Observable(function (subscriber) {
            var sub = new Subscription();
            var i = 0;
            sub.add(scheduler.schedule(function () {
                if (i === input.length) {
                    subscriber.complete();
                    return;
                }
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    sub.add(this.schedule());
                }
            }));
            return sub;
        });
    }

    /** PURE_IMPORTS_START _Observable,_util_subscribeToArray,_scheduled_scheduleArray PURE_IMPORTS_END */
    function fromArray(input, scheduler) {
        if (!scheduler) {
            return new Observable(subscribeToArray(input));
        }
        else {
            return scheduleArray(input, scheduler);
        }
    }

    /** PURE_IMPORTS_START _util_isScheduler,_fromArray,_scheduled_scheduleArray PURE_IMPORTS_END */
    function of() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var scheduler = args[args.length - 1];
        if (isScheduler(scheduler)) {
            args.pop();
            return scheduleArray(args, scheduler);
        }
        else {
            return fromArray(args);
        }
    }

    /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _observable_empty,_observable_of,_observable_throwError PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subject,_scheduler_queue,_Subscription,_operators_observeOn,_util_ObjectUnsubscribedError,_SubjectSubscription PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subject,_Subscription PURE_IMPORTS_END */

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_util_Immediate,_AsyncAction PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _AsapAction,_AsapScheduler PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _AnimationFrameAction,_AnimationFrameScheduler PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_AsyncAction,_AsyncScheduler PURE_IMPORTS_END */

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function identity(x) {
        return x;
    }

    /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function ArgumentOutOfRangeErrorImpl() {
        Error.call(this);
        this.message = 'argument out of range';
        this.name = 'ArgumentOutOfRangeError';
        return this;
    }
    ArgumentOutOfRangeErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function EmptyErrorImpl() {
        Error.call(this);
        this.message = 'no elements in sequence';
        this.name = 'EmptyError';
        return this;
    }
    EmptyErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    var EmptyError = EmptyErrorImpl;

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    function map(project, thisArg) {
        return function mapOperation(source) {
            if (typeof project !== 'function') {
                throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
            }
            return source.lift(new MapOperator(project, thisArg));
        };
    }
    var MapOperator = /*@__PURE__*/ (function () {
        function MapOperator(project, thisArg) {
            this.project = project;
            this.thisArg = thisArg;
        }
        MapOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
        };
        return MapOperator;
    }());
    var MapSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(MapSubscriber, _super);
        function MapSubscriber(destination, project, thisArg) {
            var _this = _super.call(this, destination) || this;
            _this.project = project;
            _this.count = 0;
            _this.thisArg = thisArg || _this;
            return _this;
        }
        MapSubscriber.prototype._next = function (value) {
            var result;
            try {
                result = this.project.call(this.thisArg, value, this.count++);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        return MapSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isArray,_util_isScheduler PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isScheduler,_util_isArray PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var OuterSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(OuterSubscriber, _super);
        function OuterSubscriber() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(innerValue);
        };
        OuterSubscriber.prototype.notifyError = function (error, innerSub) {
            this.destination.error(error);
        };
        OuterSubscriber.prototype.notifyComplete = function (innerSub) {
            this.destination.complete();
        };
        return OuterSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    var InnerSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(InnerSubscriber, _super);
        function InnerSubscriber(parent, outerValue, outerIndex) {
            var _this = _super.call(this) || this;
            _this.parent = parent;
            _this.outerValue = outerValue;
            _this.outerIndex = outerIndex;
            _this.index = 0;
            return _this;
        }
        InnerSubscriber.prototype._next = function (value) {
            this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
        };
        InnerSubscriber.prototype._error = function (error) {
            this.parent.notifyError(error, this);
            this.unsubscribe();
        };
        InnerSubscriber.prototype._complete = function () {
            this.parent.notifyComplete(this);
            this.unsubscribe();
        };
        return InnerSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */
    var subscribeToPromise = function (promise) {
        return function (subscriber) {
            promise.then(function (value) {
                if (!subscriber.closed) {
                    subscriber.next(value);
                    subscriber.complete();
                }
            }, function (err) { return subscriber.error(err); })
                .then(null, hostReportError);
            return subscriber;
        };
    };

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function getSymbolIterator() {
        if (typeof Symbol !== 'function' || !Symbol.iterator) {
            return '@@iterator';
        }
        return Symbol.iterator;
    }
    var iterator = /*@__PURE__*/ getSymbolIterator();

    /** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
    var subscribeToIterable = function (iterable) {
        return function (subscriber) {
            var iterator$1 = iterable[iterator]();
            do {
                var item = iterator$1.next();
                if (item.done) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(item.value);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
            if (typeof iterator$1.return === 'function') {
                subscriber.add(function () {
                    if (iterator$1.return) {
                        iterator$1.return();
                    }
                });
            }
            return subscriber;
        };
    };

    /** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
    var subscribeToObservable = function (obj) {
        return function (subscriber) {
            var obs = obj[observable]();
            if (typeof obs.subscribe !== 'function') {
                throw new TypeError('Provided object does not correctly implement Symbol.observable');
            }
            else {
                return obs.subscribe(subscriber);
            }
        };
    };

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function isPromise(value) {
        return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
    }

    /** PURE_IMPORTS_START _subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */
    var subscribeTo = function (result) {
        if (!!result && typeof result[observable] === 'function') {
            return subscribeToObservable(result);
        }
        else if (isArrayLike(result)) {
            return subscribeToArray(result);
        }
        else if (isPromise(result)) {
            return subscribeToPromise(result);
        }
        else if (!!result && typeof result[iterator] === 'function') {
            return subscribeToIterable(result);
        }
        else {
            var value = isObject(result) ? 'an invalid object' : "'" + result + "'";
            var msg = "You provided " + value + " where a stream was expected."
                + ' You can provide an Observable, Promise, Array, or Iterable.';
            throw new TypeError(msg);
        }
    };

    /** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo,_Observable PURE_IMPORTS_END */
    function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, destination) {
        if (destination === void 0) {
            destination = new InnerSubscriber(outerSubscriber, outerValue, outerIndex);
        }
        if (destination.closed) {
            return undefined;
        }
        if (result instanceof Observable) {
            return result.subscribe(destination);
        }
        return subscribeTo(result)(destination);
    }

    /** PURE_IMPORTS_START tslib,_util_isScheduler,_util_isArray,_OuterSubscriber,_util_subscribeToResult,_fromArray PURE_IMPORTS_END */
    var NONE = {};
    function combineLatest() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        var resultSelector = null;
        var scheduler = null;
        if (isScheduler(observables[observables.length - 1])) {
            scheduler = observables.pop();
        }
        if (typeof observables[observables.length - 1] === 'function') {
            resultSelector = observables.pop();
        }
        if (observables.length === 1 && isArray(observables[0])) {
            observables = observables[0];
        }
        return fromArray(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
    }
    var CombineLatestOperator = /*@__PURE__*/ (function () {
        function CombineLatestOperator(resultSelector) {
            this.resultSelector = resultSelector;
        }
        CombineLatestOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
        };
        return CombineLatestOperator;
    }());
    var CombineLatestSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(CombineLatestSubscriber, _super);
        function CombineLatestSubscriber(destination, resultSelector) {
            var _this = _super.call(this, destination) || this;
            _this.resultSelector = resultSelector;
            _this.active = 0;
            _this.values = [];
            _this.observables = [];
            return _this;
        }
        CombineLatestSubscriber.prototype._next = function (observable) {
            this.values.push(NONE);
            this.observables.push(observable);
        };
        CombineLatestSubscriber.prototype._complete = function () {
            var observables = this.observables;
            var len = observables.length;
            if (len === 0) {
                this.destination.complete();
            }
            else {
                this.active = len;
                this.toRespond = len;
                for (var i = 0; i < len; i++) {
                    var observable = observables[i];
                    this.add(subscribeToResult(this, observable, observable, i));
                }
            }
        };
        CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
            if ((this.active -= 1) === 0) {
                this.destination.complete();
            }
        };
        CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            var values = this.values;
            var oldVal = values[outerIndex];
            var toRespond = !this.toRespond
                ? 0
                : oldVal === NONE ? --this.toRespond : this.toRespond;
            values[outerIndex] = innerValue;
            if (toRespond === 0) {
                if (this.resultSelector) {
                    this._tryResultSelector(values);
                }
                else {
                    this.destination.next(values.slice());
                }
            }
        };
        CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
            var result;
            try {
                result = this.resultSelector.apply(this, values);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        return CombineLatestSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable PURE_IMPORTS_END */
    function scheduleObservable(input, scheduler) {
        return new Observable(function (subscriber) {
            var sub = new Subscription();
            sub.add(scheduler.schedule(function () {
                var observable$1 = input[observable]();
                sub.add(observable$1.subscribe({
                    next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                    error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                    complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
                }));
            }));
            return sub;
        });
    }

    /** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
    function schedulePromise(input, scheduler) {
        return new Observable(function (subscriber) {
            var sub = new Subscription();
            sub.add(scheduler.schedule(function () {
                return input.then(function (value) {
                    sub.add(scheduler.schedule(function () {
                        subscriber.next(value);
                        sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
                    }));
                }, function (err) {
                    sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
                });
            }));
            return sub;
        });
    }

    /** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator PURE_IMPORTS_END */
    function scheduleIterable(input, scheduler) {
        if (!input) {
            throw new Error('Iterable cannot be null');
        }
        return new Observable(function (subscriber) {
            var sub = new Subscription();
            var iterator$1;
            sub.add(function () {
                if (iterator$1 && typeof iterator$1.return === 'function') {
                    iterator$1.return();
                }
            });
            sub.add(scheduler.schedule(function () {
                iterator$1 = input[iterator]();
                sub.add(scheduler.schedule(function () {
                    if (subscriber.closed) {
                        return;
                    }
                    var value;
                    var done;
                    try {
                        var result = iterator$1.next();
                        value = result.value;
                        done = result.done;
                    }
                    catch (err) {
                        subscriber.error(err);
                        return;
                    }
                    if (done) {
                        subscriber.complete();
                    }
                    else {
                        subscriber.next(value);
                        this.schedule();
                    }
                }));
            }));
            return sub;
        });
    }

    /** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
    function isInteropObservable(input) {
        return input && typeof input[observable] === 'function';
    }

    /** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
    function isIterable(input) {
        return input && typeof input[iterator] === 'function';
    }

    /** PURE_IMPORTS_START _scheduleObservable,_schedulePromise,_scheduleArray,_scheduleIterable,_util_isInteropObservable,_util_isPromise,_util_isArrayLike,_util_isIterable PURE_IMPORTS_END */
    function scheduled(input, scheduler) {
        if (input != null) {
            if (isInteropObservable(input)) {
                return scheduleObservable(input, scheduler);
            }
            else if (isPromise(input)) {
                return schedulePromise(input, scheduler);
            }
            else if (isArrayLike(input)) {
                return scheduleArray(input, scheduler);
            }
            else if (isIterable(input) || typeof input === 'string') {
                return scheduleIterable(input, scheduler);
            }
        }
        throw new TypeError((input !== null && typeof input || input) + ' is not observable');
    }

    /** PURE_IMPORTS_START _Observable,_util_subscribeTo,_scheduled_scheduled PURE_IMPORTS_END */
    function from(input, scheduler) {
        if (!scheduler) {
            if (input instanceof Observable) {
                return input;
            }
            return new Observable(subscribeTo(input));
        }
        else {
            return scheduled(input, scheduler);
        }
    }

    /** PURE_IMPORTS_START tslib,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber,_map,_observable_from PURE_IMPORTS_END */
    function mergeMap(project, resultSelector, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        if (typeof resultSelector === 'function') {
            return function (source) { return source.pipe(mergeMap(function (a, i) { return from(project(a, i)).pipe(map(function (b, ii) { return resultSelector(a, b, i, ii); })); }, concurrent)); };
        }
        else if (typeof resultSelector === 'number') {
            concurrent = resultSelector;
        }
        return function (source) { return source.lift(new MergeMapOperator(project, concurrent)); };
    }
    var MergeMapOperator = /*@__PURE__*/ (function () {
        function MergeMapOperator(project, concurrent) {
            if (concurrent === void 0) {
                concurrent = Number.POSITIVE_INFINITY;
            }
            this.project = project;
            this.concurrent = concurrent;
        }
        MergeMapOperator.prototype.call = function (observer, source) {
            return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
        };
        return MergeMapOperator;
    }());
    var MergeMapSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(MergeMapSubscriber, _super);
        function MergeMapSubscriber(destination, project, concurrent) {
            if (concurrent === void 0) {
                concurrent = Number.POSITIVE_INFINITY;
            }
            var _this = _super.call(this, destination) || this;
            _this.project = project;
            _this.concurrent = concurrent;
            _this.hasCompleted = false;
            _this.buffer = [];
            _this.active = 0;
            _this.index = 0;
            return _this;
        }
        MergeMapSubscriber.prototype._next = function (value) {
            if (this.active < this.concurrent) {
                this._tryNext(value);
            }
            else {
                this.buffer.push(value);
            }
        };
        MergeMapSubscriber.prototype._tryNext = function (value) {
            var result;
            var index = this.index++;
            try {
                result = this.project(value, index);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.active++;
            this._innerSub(result, value, index);
        };
        MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
            var innerSubscriber = new InnerSubscriber(this, undefined, undefined);
            var destination = this.destination;
            destination.add(innerSubscriber);
            subscribeToResult(this, ish, value, index, innerSubscriber);
        };
        MergeMapSubscriber.prototype._complete = function () {
            this.hasCompleted = true;
            if (this.active === 0 && this.buffer.length === 0) {
                this.destination.complete();
            }
            this.unsubscribe();
        };
        MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(innerValue);
        };
        MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
            var buffer = this.buffer;
            this.remove(innerSub);
            this.active--;
            if (buffer.length > 0) {
                this._next(buffer.shift());
            }
            else if (this.active === 0 && this.hasCompleted) {
                this.destination.complete();
            }
        };
        return MergeMapSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */
    function mergeAll(concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        return mergeMap(identity, concurrent);
    }

    /** PURE_IMPORTS_START _mergeAll PURE_IMPORTS_END */
    function concatAll() {
        return mergeAll(1);
    }

    /** PURE_IMPORTS_START _of,_operators_concatAll PURE_IMPORTS_END */
    function concat() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i] = arguments[_i];
        }
        return concatAll()(of.apply(void 0, observables));
    }

    /** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */
    function defer(observableFactory) {
        return new Observable(function (subscriber) {
            var input;
            try {
                input = observableFactory();
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
            var source = input ? from(input) : empty$1();
            return source.subscribe(subscriber);
        });
    }

    /** PURE_IMPORTS_START _Observable,_util_isArray,_operators_map,_util_isObject,_from PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_util_identity,_util_isScheduler PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _defer,_empty PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_util_noop PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_from,_util_isArray,_empty PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    function filter(predicate, thisArg) {
        return function filterOperatorFunction(source) {
            return source.lift(new FilterOperator(predicate, thisArg));
        };
    }
    var FilterOperator = /*@__PURE__*/ (function () {
        function FilterOperator(predicate, thisArg) {
            this.predicate = predicate;
            this.thisArg = thisArg;
        }
        FilterOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
        };
        return FilterOperator;
    }());
    var FilterSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(FilterSubscriber, _super);
        function FilterSubscriber(destination, predicate, thisArg) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.thisArg = thisArg;
            _this.count = 0;
            return _this;
        }
        FilterSubscriber.prototype._next = function (value) {
            var result;
            try {
                result = this.predicate.call(this.thisArg, value, this.count++);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            if (result) {
                this.destination.next(value);
            }
        };
        return FilterSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _util_not,_util_subscribeTo,_operators_filter,_Observable PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_util_isArray,_fromArray,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_fromArray,_util_isArray,_Subscriber,_OuterSubscriber,_util_subscribeToResult,_.._internal_symbol_iterator PURE_IMPORTS_END */

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _scheduler_async,_audit,_observable_timer PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_scheduler_async,_Subscriber,_util_isScheduler PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscription,_util_subscribeToResult,_OuterSubscriber PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscription,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
    function catchError(selector) {
        return function catchErrorOperatorFunction(source) {
            var operator = new CatchOperator(selector);
            var caught = source.lift(operator);
            return (operator.caught = caught);
        };
    }
    var CatchOperator = /*@__PURE__*/ (function () {
        function CatchOperator(selector) {
            this.selector = selector;
        }
        CatchOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
        };
        return CatchOperator;
    }());
    var CatchSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(CatchSubscriber, _super);
        function CatchSubscriber(destination, selector, caught) {
            var _this = _super.call(this, destination) || this;
            _this.selector = selector;
            _this.caught = caught;
            return _this;
        }
        CatchSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var result = void 0;
                try {
                    result = this.selector(err, this.caught);
                }
                catch (err2) {
                    _super.prototype.error.call(this, err2);
                    return;
                }
                this._unsubscribeAndRecycle();
                var innerSubscriber = new InnerSubscriber(this, undefined, undefined);
                this.add(innerSubscriber);
                subscribeToResult(this, result, undefined, undefined, innerSubscriber);
            }
        };
        return CatchSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START _observable_combineLatest PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _util_isArray,_observable_combineLatest,_observable_from PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _observable_concat PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _mergeMap PURE_IMPORTS_END */
    function concatMap(project, resultSelector) {
        return mergeMap(project, resultSelector, 1);
    }

    /** PURE_IMPORTS_START _concatMap PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    function defaultIfEmpty(defaultValue) {
        if (defaultValue === void 0) {
            defaultValue = null;
        }
        return function (source) { return source.lift(new DefaultIfEmptyOperator(defaultValue)); };
    }
    var DefaultIfEmptyOperator = /*@__PURE__*/ (function () {
        function DefaultIfEmptyOperator(defaultValue) {
            this.defaultValue = defaultValue;
        }
        DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
        };
        return DefaultIfEmptyOperator;
    }());
    var DefaultIfEmptySubscriber = /*@__PURE__*/ (function (_super) {
        __extends(DefaultIfEmptySubscriber, _super);
        function DefaultIfEmptySubscriber(destination, defaultValue) {
            var _this = _super.call(this, destination) || this;
            _this.defaultValue = defaultValue;
            _this.isEmpty = true;
            return _this;
        }
        DefaultIfEmptySubscriber.prototype._next = function (value) {
            this.isEmpty = false;
            this.destination.next(value);
        };
        DefaultIfEmptySubscriber.prototype._complete = function () {
            if (this.isEmpty) {
                this.destination.next(this.defaultValue);
            }
            this.destination.complete();
        };
        return DefaultIfEmptySubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_scheduler_async,_util_isDate,_Subscriber,_Notification PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber,_Observable,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _distinctUntilChanged PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_util_EmptyError,_Subscriber PURE_IMPORTS_END */
    function throwIfEmpty(errorFactory) {
        if (errorFactory === void 0) {
            errorFactory = defaultErrorFactory;
        }
        return function (source) {
            return source.lift(new ThrowIfEmptyOperator(errorFactory));
        };
    }
    var ThrowIfEmptyOperator = /*@__PURE__*/ (function () {
        function ThrowIfEmptyOperator(errorFactory) {
            this.errorFactory = errorFactory;
        }
        ThrowIfEmptyOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new ThrowIfEmptySubscriber(subscriber, this.errorFactory));
        };
        return ThrowIfEmptyOperator;
    }());
    var ThrowIfEmptySubscriber = /*@__PURE__*/ (function (_super) {
        __extends(ThrowIfEmptySubscriber, _super);
        function ThrowIfEmptySubscriber(destination, errorFactory) {
            var _this = _super.call(this, destination) || this;
            _this.errorFactory = errorFactory;
            _this.hasValue = false;
            return _this;
        }
        ThrowIfEmptySubscriber.prototype._next = function (value) {
            this.hasValue = true;
            this.destination.next(value);
        };
        ThrowIfEmptySubscriber.prototype._complete = function () {
            if (!this.hasValue) {
                var err = void 0;
                try {
                    err = this.errorFactory();
                }
                catch (e) {
                    err = e;
                }
                this.destination.error(err);
            }
            else {
                return this.destination.complete();
            }
        };
        return ThrowIfEmptySubscriber;
    }(Subscriber));
    function defaultErrorFactory() {
        return new EmptyError();
    }

    /** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */
    function take(count) {
        return function (source) {
            if (count === 0) {
                return empty$1();
            }
            else {
                return source.lift(new TakeOperator(count));
            }
        };
    }
    var TakeOperator = /*@__PURE__*/ (function () {
        function TakeOperator(total) {
            this.total = total;
            if (this.total < 0) {
                throw new ArgumentOutOfRangeError;
            }
        }
        TakeOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new TakeSubscriber(subscriber, this.total));
        };
        return TakeOperator;
    }());
    var TakeSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(TakeSubscriber, _super);
        function TakeSubscriber(destination, total) {
            var _this = _super.call(this, destination) || this;
            _this.total = total;
            _this.count = 0;
            return _this;
        }
        TakeSubscriber.prototype._next = function (value) {
            var total = this.total;
            var count = ++this.count;
            if (count <= total) {
                this.destination.next(value);
                if (count === total) {
                    this.destination.complete();
                    this.unsubscribe();
                }
            }
        };
        return TakeSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _util_ArgumentOutOfRangeError,_filter,_throwIfEmpty,_defaultIfEmpty,_take PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _observable_concat,_observable_of PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    function every(predicate, thisArg) {
        return function (source) { return source.lift(new EveryOperator(predicate, thisArg, source)); };
    }
    var EveryOperator = /*@__PURE__*/ (function () {
        function EveryOperator(predicate, thisArg, source) {
            this.predicate = predicate;
            this.thisArg = thisArg;
            this.source = source;
        }
        EveryOperator.prototype.call = function (observer, source) {
            return source.subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
        };
        return EveryOperator;
    }());
    var EverySubscriber = /*@__PURE__*/ (function (_super) {
        __extends(EverySubscriber, _super);
        function EverySubscriber(destination, predicate, thisArg, source) {
            var _this = _super.call(this, destination) || this;
            _this.predicate = predicate;
            _this.thisArg = thisArg;
            _this.source = source;
            _this.index = 0;
            _this.thisArg = thisArg || _this;
            return _this;
        }
        EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
            this.destination.next(everyValueMatch);
            this.destination.complete();
        };
        EverySubscriber.prototype._next = function (value) {
            var result = false;
            try {
                result = this.predicate.call(this.thisArg, value, this.index++, this.source);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            if (!result) {
                this.notifyComplete(false);
            }
        };
        EverySubscriber.prototype._complete = function () {
            this.notifyComplete(true);
        };
        return EverySubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult,_map,_observable_from PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber,_Subscription PURE_IMPORTS_END */
    function finalize(callback) {
        return function (source) { return source.lift(new FinallyOperator(callback)); };
    }
    var FinallyOperator = /*@__PURE__*/ (function () {
        function FinallyOperator(callback) {
            this.callback = callback;
        }
        FinallyOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new FinallySubscriber(subscriber, this.callback));
        };
        return FinallyOperator;
    }());
    var FinallySubscriber = /*@__PURE__*/ (function (_super) {
        __extends(FinallySubscriber, _super);
        function FinallySubscriber(destination, callback) {
            var _this = _super.call(this, destination) || this;
            _this.add(new Subscription(callback));
            return _this;
        }
        return FinallySubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _operators_find PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _util_EmptyError,_filter,_take,_defaultIfEmpty,_throwIfEmpty,_util_identity PURE_IMPORTS_END */
    function first(predicate, defaultValue) {
        var hasDefaultValue = arguments.length >= 2;
        return function (source) { return source.pipe(predicate ? filter(function (v, i) { return predicate(v, i, source); }) : identity, take(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function () { return new EmptyError(); })); };
    }

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */
    function takeLast(count) {
        return function takeLastOperatorFunction(source) {
            if (count === 0) {
                return empty$1();
            }
            else {
                return source.lift(new TakeLastOperator(count));
            }
        };
    }
    var TakeLastOperator = /*@__PURE__*/ (function () {
        function TakeLastOperator(total) {
            this.total = total;
            if (this.total < 0) {
                throw new ArgumentOutOfRangeError;
            }
        }
        TakeLastOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
        };
        return TakeLastOperator;
    }());
    var TakeLastSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(TakeLastSubscriber, _super);
        function TakeLastSubscriber(destination, total) {
            var _this = _super.call(this, destination) || this;
            _this.total = total;
            _this.ring = new Array();
            _this.count = 0;
            return _this;
        }
        TakeLastSubscriber.prototype._next = function (value) {
            var ring = this.ring;
            var total = this.total;
            var count = this.count++;
            if (ring.length < total) {
                ring.push(value);
            }
            else {
                var index = count % total;
                ring[index] = value;
            }
        };
        TakeLastSubscriber.prototype._complete = function () {
            var destination = this.destination;
            var count = this.count;
            if (count > 0) {
                var total = this.count >= this.total ? this.total : this.count;
                var ring = this.ring;
                for (var i = 0; i < total; i++) {
                    var idx = (count++) % total;
                    destination.next(ring[idx]);
                }
            }
            destination.complete();
        };
        return TakeLastSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _util_EmptyError,_filter,_takeLast,_throwIfEmpty,_defaultIfEmpty,_util_identity PURE_IMPORTS_END */
    function last(predicate, defaultValue) {
        var hasDefaultValue = arguments.length >= 2;
        return function (source) { return source.pipe(predicate ? filter(function (v, i) { return predicate(v, i, source); }) : identity, takeLast(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function () { return new EmptyError(); })); };
    }

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
    function scan(accumulator, seed) {
        var hasSeed = false;
        if (arguments.length >= 2) {
            hasSeed = true;
        }
        return function scanOperatorFunction(source) {
            return source.lift(new ScanOperator(accumulator, seed, hasSeed));
        };
    }
    var ScanOperator = /*@__PURE__*/ (function () {
        function ScanOperator(accumulator, seed, hasSeed) {
            if (hasSeed === void 0) {
                hasSeed = false;
            }
            this.accumulator = accumulator;
            this.seed = seed;
            this.hasSeed = hasSeed;
        }
        ScanOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
        };
        return ScanOperator;
    }());
    var ScanSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(ScanSubscriber, _super);
        function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
            var _this = _super.call(this, destination) || this;
            _this.accumulator = accumulator;
            _this._seed = _seed;
            _this.hasSeed = hasSeed;
            _this.index = 0;
            return _this;
        }
        Object.defineProperty(ScanSubscriber.prototype, "seed", {
            get: function () {
                return this._seed;
            },
            set: function (value) {
                this.hasSeed = true;
                this._seed = value;
            },
            enumerable: true,
            configurable: true
        });
        ScanSubscriber.prototype._next = function (value) {
            if (!this.hasSeed) {
                this.seed = value;
                this.destination.next(value);
            }
            else {
                return this._tryNext(value);
            }
        };
        ScanSubscriber.prototype._tryNext = function (value) {
            var index = this.index++;
            var result;
            try {
                result = this.accumulator(this.seed, value, index);
            }
            catch (err) {
                this.destination.error(err);
            }
            this.seed = result;
            this.destination.next(result);
        };
        return ScanSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START _scan,_takeLast,_defaultIfEmpty,_util_pipe PURE_IMPORTS_END */
    function reduce(accumulator, seed) {
        if (arguments.length >= 2) {
            return function reduceOperatorFunctionWithSeed(source) {
                return pipe(scan(accumulator, seed), takeLast(1), defaultIfEmpty(seed))(source);
            };
        }
        return function reduceOperatorFunction(source) {
            return pipe(scan(function (acc, value, index) { return accumulator(acc, value, index + 1); }), takeLast(1))(source);
        };
    }

    /** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _observable_merge PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _mergeMap PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _observable_ConnectableObservable PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_observable_from,_util_isArray,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _util_not,_filter PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _map PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _Subject,_multicast PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _BehaviorSubject,_multicast PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _AsyncSubject,_multicast PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _ReplaySubject,_multicast PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _util_isArray,_observable_race PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber,_observable_empty PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _multicast,_refCount,_Subject PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _ReplaySubject PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber,_util_EmptyError PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _observable_concat,_util_isScheduler PURE_IMPORTS_END */
    function startWith() {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i] = arguments[_i];
        }
        var scheduler = array[array.length - 1];
        if (isScheduler(scheduler)) {
            array.pop();
            return function (source) { return concat(array, source, scheduler); };
        }
        else {
            return function (source) { return concat(array, source); };
        }
    }

    /** PURE_IMPORTS_START tslib,_Observable,_scheduler_asap,_util_isNumeric PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _observable_SubscribeOnObservable PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult,_map,_observable_from PURE_IMPORTS_END */
    function switchMap(project, resultSelector) {
        if (typeof resultSelector === 'function') {
            return function (source) { return source.pipe(switchMap(function (a, i) { return from(project(a, i)).pipe(map(function (b, ii) { return resultSelector(a, b, i, ii); })); })); };
        }
        return function (source) { return source.lift(new SwitchMapOperator(project)); };
    }
    var SwitchMapOperator = /*@__PURE__*/ (function () {
        function SwitchMapOperator(project) {
            this.project = project;
        }
        SwitchMapOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new SwitchMapSubscriber(subscriber, this.project));
        };
        return SwitchMapOperator;
    }());
    var SwitchMapSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(SwitchMapSubscriber, _super);
        function SwitchMapSubscriber(destination, project) {
            var _this = _super.call(this, destination) || this;
            _this.project = project;
            _this.index = 0;
            return _this;
        }
        SwitchMapSubscriber.prototype._next = function (value) {
            var result;
            var index = this.index++;
            try {
                result = this.project(value, index);
            }
            catch (error) {
                this.destination.error(error);
                return;
            }
            this._innerSub(result, value, index);
        };
        SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
            var innerSubscription = this.innerSubscription;
            if (innerSubscription) {
                innerSubscription.unsubscribe();
            }
            var innerSubscriber = new InnerSubscriber(this, undefined, undefined);
            var destination = this.destination;
            destination.add(innerSubscriber);
            this.innerSubscription = subscribeToResult(this, result, value, index, innerSubscriber);
        };
        SwitchMapSubscriber.prototype._complete = function () {
            var innerSubscription = this.innerSubscription;
            if (!innerSubscription || innerSubscription.closed) {
                _super.prototype._complete.call(this);
            }
            this.unsubscribe();
        };
        SwitchMapSubscriber.prototype._unsubscribe = function () {
            this.innerSubscription = null;
        };
        SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
            var destination = this.destination;
            destination.remove(innerSub);
            this.innerSubscription = null;
            if (this.isStopped) {
                _super.prototype._complete.call(this);
            }
        };
        SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(innerValue);
        };
        return SwitchMapSubscriber;
    }(OuterSubscriber));

    /** PURE_IMPORTS_START _switchMap,_util_identity PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _switchMap PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber,_util_noop,_util_isFunction PURE_IMPORTS_END */
    function tap(nextOrObserver, error, complete) {
        return function tapOperatorFunction(source) {
            return source.lift(new DoOperator(nextOrObserver, error, complete));
        };
    }
    var DoOperator = /*@__PURE__*/ (function () {
        function DoOperator(nextOrObserver, error, complete) {
            this.nextOrObserver = nextOrObserver;
            this.error = error;
            this.complete = complete;
        }
        DoOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
        };
        return DoOperator;
    }());
    var TapSubscriber = /*@__PURE__*/ (function (_super) {
        __extends(TapSubscriber, _super);
        function TapSubscriber(destination, observerOrNext, error, complete) {
            var _this = _super.call(this, destination) || this;
            _this._tapNext = noop;
            _this._tapError = noop;
            _this._tapComplete = noop;
            _this._tapError = error || noop;
            _this._tapComplete = complete || noop;
            if (isFunction(observerOrNext)) {
                _this._context = _this;
                _this._tapNext = observerOrNext;
            }
            else if (observerOrNext) {
                _this._context = observerOrNext;
                _this._tapNext = observerOrNext.next || noop;
                _this._tapError = observerOrNext.error || noop;
                _this._tapComplete = observerOrNext.complete || noop;
            }
            return _this;
        }
        TapSubscriber.prototype._next = function (value) {
            try {
                this._tapNext.call(this._context, value);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(value);
        };
        TapSubscriber.prototype._error = function (err) {
            try {
                this._tapError.call(this._context, err);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.error(err);
        };
        TapSubscriber.prototype._complete = function () {
            try {
                this._tapComplete.call(this._context);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            return this.destination.complete();
        };
        return TapSubscriber;
    }(Subscriber));

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async,_throttle PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _scheduler_async,_scan,_observable_defer,_map PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_scheduler_async,_util_isDate,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _scheduler_async,_util_TimeoutError,_timeoutWith,_observable_throwError PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _scheduler_async,_map PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subscriber,_Subject PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subject,_scheduler_async,_Subscriber,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subject,_Subscription,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */

    /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _observable_zip PURE_IMPORTS_END */

    /** PURE_IMPORTS_START _observable_zip PURE_IMPORTS_END */

    /** PURE_IMPORTS_START  PURE_IMPORTS_END */

    /**
     * @license Angular v7.2.15
     * (c) 2010-2019 Google LLC. https://angular.io/
     * License: MIT
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * This class should not be used directly by an application developer. Instead, use
     * {@link Location}.
     *
     * `PlatformLocation` encapsulates all calls to DOM apis, which allows the Router to be platform
     * agnostic.
     * This means that we can have different implementation of `PlatformLocation` for the different
     * platforms that angular supports. For example, `@angular/platform-browser` provides an
     * implementation specific to the browser environment, while `@angular/platform-webworker` provides
     * one suitable for use with web workers.
     *
     * The `PlatformLocation` class is used directly by all implementations of {@link LocationStrategy}
     * when they need to interact with the DOM apis like pushState, popState, etc...
     *
     * {@link LocationStrategy} in turn is used by the {@link Location} service which is used directly
     * by the {@link Router} in order to navigate between routes. Since all interactions between {@link
     * Router} /
     * {@link Location} / {@link LocationStrategy} and DOM apis flow through the `PlatformLocation`
     * class they are all platform independent.
     *
     * @publicApi
     */
    var PlatformLocation$1 = /** @class */ (function () {
        function PlatformLocation() {
        }
        return PlatformLocation;
    }());
    /**
     * @description
     * Indicates when a location is initialized.
     *
     * @publicApi
     */
    var LOCATION_INITIALIZED$1 = new core.InjectionToken('Location Initialized');

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * `LocationStrategy` is responsible for representing and reading route state
     * from the browser's URL. Angular provides two strategies:
     * {@link HashLocationStrategy} and {@link PathLocationStrategy}.
     *
     * This is used under the hood of the {@link Location} service.
     *
     * Applications should use the {@link Router} or {@link Location} services to
     * interact with application route state.
     *
     * For instance, {@link HashLocationStrategy} produces URLs like
     * `http://example.com#/foo`, and {@link PathLocationStrategy} produces
     * `http://example.com/foo` as an equivalent URL.
     *
     * See these two classes for more.
     *
     * @publicApi
     */
    var LocationStrategy$1 = /** @class */ (function () {
        function LocationStrategy() {
        }
        return LocationStrategy;
    }());
    /**
     * A predefined [DI token](guide/glossary#di-token) for the base href
     * to be used with the `PathLocationStrategy`.
     * The base href is the URL prefix that should be preserved when generating
     * and recognizing URLs.
     *
     * @usageNotes
     *
     * The following example shows how to use this token to configure the root app injector
     * with a base href value, so that the DI framework can supply the dependency anywhere in the app.
     *
     * ```typescript
     * import {Component, NgModule} from '@angular/core';
     * import {APP_BASE_HREF} from '@angular/common';
     *
     * @NgModule({
     *   providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
     * })
     * class AppModule {}
     * ```
     *
     * @publicApi
     */
    var APP_BASE_HREF$1 = new core.InjectionToken('appBaseHref');

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @description
     *
     * A service that applications can use to interact with a browser's URL.
     *
     * Depending on the {@link LocationStrategy} used, `Location` will either persist
     * to the URL's path or the URL's hash segment.
     *
     * @usageNotes
     *
     * It's better to use the {@link Router#navigate} service to trigger route changes. Use
     * `Location` only if you need to interact with or create normalized URLs outside of
     * routing.
     *
     * `Location` is responsible for normalizing the URL against the application's base href.
     * A normalized URL is absolute from the URL host, includes the application's base href, and has no
     * trailing slash:
     * - `/my/app/user/123` is normalized
     * - `my/app/user/123` **is not** normalized
     * - `/my/app/user/123/` **is not** normalized
     *
     * ### Example
     *
     * {@example common/location/ts/path_location_component.ts region='LocationComponent'}
     *
     * @publicApi
     */
    var Location$1 = /** @class */ (function () {
        function Location(platformStrategy) {
            var _this = this;
            /** @internal */
            this._subject = new core.EventEmitter();
            this._platformStrategy = platformStrategy;
            var browserBaseHref = this._platformStrategy.getBaseHref();
            this._baseHref = Location_1.stripTrailingSlash(_stripIndexHtml$1(browserBaseHref));
            this._platformStrategy.onPopState(function (ev) {
                _this._subject.emit({
                    'url': _this.path(true),
                    'pop': true,
                    'state': ev.state,
                    'type': ev.type,
                });
            });
        }
        Location_1 = Location;
        /**
         * Returns the normalized URL path.
         *
         * @param includeHash Whether path has an anchor fragment.
         *
         * @returns The normalized URL path.
         */
        // TODO: vsavkin. Remove the boolean flag and always include hash once the deprecated router is
        // removed.
        Location.prototype.path = function (includeHash) {
            if (includeHash === void 0) { includeHash = false; }
            return this.normalize(this._platformStrategy.path(includeHash));
        };
        /**
         * Normalizes the given path and compares to the current normalized path.
         *
         * @param path The given URL path
         * @param query Query parameters
         *
         * @returns `true` if the given URL path is equal to the current normalized path, `false`
         * otherwise.
         */
        Location.prototype.isCurrentPathEqualTo = function (path, query) {
            if (query === void 0) { query = ''; }
            return this.path() == this.normalize(path + Location_1.normalizeQueryParams(query));
        };
        /**
         * Given a string representing a URL, returns the URL path after stripping the
         * trailing slashes.
         *
         * @param url String representing a URL.
         *
         * @returns Normalized URL string.
         */
        Location.prototype.normalize = function (url) {
            return Location_1.stripTrailingSlash(_stripBaseHref$1(this._baseHref, _stripIndexHtml$1(url)));
        };
        /**
         * Given a string representing a URL, returns the platform-specific external URL path.
         * If the given URL doesn't begin with a leading slash (`'/'`), this method adds one
         * before normalizing. This method also adds a hash if `HashLocationStrategy` is
         * used, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
         *
         *
         * @param url String representing a URL.
         *
         * @returns  A normalized platform-specific URL.
         */
        Location.prototype.prepareExternalUrl = function (url) {
            if (url && url[0] !== '/') {
                url = '/' + url;
            }
            return this._platformStrategy.prepareExternalUrl(url);
        };
        // TODO: rename this method to pushState
        /**
         * Changes the browsers URL to a normalized version of the given URL, and pushes a
         * new item onto the platform's history.
         *
         * @param path  URL path to normalizze
         * @param query Query parameters
         * @param state Location history state
         *
         */
        Location.prototype.go = function (path, query, state) {
            if (query === void 0) { query = ''; }
            if (state === void 0) { state = null; }
            this._platformStrategy.pushState(state, '', path, query);
        };
        /**
         * Changes the browser's URL to a normalized version of the given URL, and replaces
         * the top item on the platform's history stack.
         *
         * @param path  URL path to normalizze
         * @param query Query parameters
         * @param state Location history state
         */
        Location.prototype.replaceState = function (path, query, state) {
            if (query === void 0) { query = ''; }
            if (state === void 0) { state = null; }
            this._platformStrategy.replaceState(state, '', path, query);
        };
        /**
         * Navigates forward in the platform's history.
         */
        Location.prototype.forward = function () { this._platformStrategy.forward(); };
        /**
         * Navigates back in the platform's history.
         */
        Location.prototype.back = function () { this._platformStrategy.back(); };
        /**
         * Subscribe to the platform's `popState` events.
         *
         * @param value Event that is triggered when the state history changes.
         * @param exception The exception to throw.
         *
         * @returns Subscribed events.
         */
        Location.prototype.subscribe = function (onNext, onThrow, onReturn) {
            return this._subject.subscribe({ next: onNext, error: onThrow, complete: onReturn });
        };
        /**
         * Given a string of url parameters, prepend with `?` if needed, otherwise return the
         * parameters as is.
         *
         *  @param  params String of URL parameters
         *
         *  @returns URL parameters prepended with `?` or the parameters as is.
         */
        Location.normalizeQueryParams = function (params) {
            return params && params[0] !== '?' ? '?' + params : params;
        };
        /**
         * Given 2 parts of a URL, join them with a slash if needed.
         *
         * @param start  URL string
         * @param end    URL string
         *
         *
         * @returns Given URL strings joined with a slash, if needed.
         */
        Location.joinWithSlash = function (start, end) {
            if (start.length == 0) {
                return end;
            }
            if (end.length == 0) {
                return start;
            }
            var slashes = 0;
            if (start.endsWith('/')) {
                slashes++;
            }
            if (end.startsWith('/')) {
                slashes++;
            }
            if (slashes == 2) {
                return start + end.substring(1);
            }
            if (slashes == 1) {
                return start + end;
            }
            return start + '/' + end;
        };
        /**
         * If URL has a trailing slash, remove it, otherwise return the URL as is. The
         * method looks for the first occurrence of either `#`, `?`, or the end of the
         * line as `/` characters and removes the trailing slash if one exists.
         *
         * @param url URL string
         *
         * @returns Returns a URL string after removing the trailing slash if one exists, otherwise
         * returns the string as is.
         */
        Location.stripTrailingSlash = function (url) {
            var match = url.match(/#|\?|$/);
            var pathEndIdx = match && match.index || url.length;
            var droppedSlashIdx = pathEndIdx - (url[pathEndIdx - 1] === '/' ? 1 : 0);
            return url.slice(0, droppedSlashIdx) + url.slice(pathEndIdx);
        };
        var Location_1;
        Location = Location_1 = __decorate([
            core.Injectable(),
            __metadata("design:paramtypes", [LocationStrategy$1])
        ], Location);
        return Location;
    }());
    function _stripBaseHref$1(baseHref, url) {
        return baseHref && url.startsWith(baseHref) ? url.substring(baseHref.length) : url;
    }
    function _stripIndexHtml$1(url) {
        return url.replace(/\/index.html$/, '');
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @description
     * A {@link LocationStrategy} used to configure the {@link Location} service to
     * represent its state in the
     * [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)
     * of the browser's URL.
     *
     * For instance, if you call `location.go('/foo')`, the browser's URL will become
     * `example.com#/foo`.
     *
     * @usageNotes
     *
     * ### Example
     *
     * {@example common/location/ts/hash_location_component.ts region='LocationComponent'}
     *
     * @publicApi
     */
    var HashLocationStrategy$1 = /** @class */ (function (_super) {
        __extends(HashLocationStrategy, _super);
        function HashLocationStrategy(_platformLocation, _baseHref) {
            var _this = _super.call(this) || this;
            _this._platformLocation = _platformLocation;
            _this._baseHref = '';
            if (_baseHref != null) {
                _this._baseHref = _baseHref;
            }
            return _this;
        }
        HashLocationStrategy.prototype.onPopState = function (fn) {
            this._platformLocation.onPopState(fn);
            this._platformLocation.onHashChange(fn);
        };
        HashLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
        HashLocationStrategy.prototype.path = function (includeHash) {
            if (includeHash === void 0) { includeHash = false; }
            // the hash value is always prefixed with a `#`
            // and if it is empty then it will stay empty
            var path = this._platformLocation.hash;
            if (path == null)
                path = '#';
            return path.length > 0 ? path.substring(1) : path;
        };
        HashLocationStrategy.prototype.prepareExternalUrl = function (internal) {
            var url = Location$1.joinWithSlash(this._baseHref, internal);
            return url.length > 0 ? ('#' + url) : url;
        };
        HashLocationStrategy.prototype.pushState = function (state, title, path, queryParams) {
            var url = this.prepareExternalUrl(path + Location$1.normalizeQueryParams(queryParams));
            if (url.length == 0) {
                url = this._platformLocation.pathname;
            }
            this._platformLocation.pushState(state, title, url);
        };
        HashLocationStrategy.prototype.replaceState = function (state, title, path, queryParams) {
            var url = this.prepareExternalUrl(path + Location$1.normalizeQueryParams(queryParams));
            if (url.length == 0) {
                url = this._platformLocation.pathname;
            }
            this._platformLocation.replaceState(state, title, url);
        };
        HashLocationStrategy.prototype.forward = function () { this._platformLocation.forward(); };
        HashLocationStrategy.prototype.back = function () { this._platformLocation.back(); };
        HashLocationStrategy = __decorate([
            core.Injectable(),
            __param(1, core.Optional()), __param(1, core.Inject(APP_BASE_HREF$1)),
            __metadata("design:paramtypes", [PlatformLocation$1, String])
        ], HashLocationStrategy);
        return HashLocationStrategy;
    }(LocationStrategy$1));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @description
     * A {@link LocationStrategy} used to configure the {@link Location} service to
     * represent its state in the
     * [path](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax) of the
     * browser's URL.
     *
     * If you're using `PathLocationStrategy`, you must provide a {@link APP_BASE_HREF}
     * or add a base element to the document. This URL prefix that will be preserved
     * when generating and recognizing URLs.
     *
     * For instance, if you provide an `APP_BASE_HREF` of `'/my/app'` and call
     * `location.go('/foo')`, the browser's URL will become
     * `example.com/my/app/foo`.
     *
     * Similarly, if you add `<base href='/my/app'/>` to the document and call
     * `location.go('/foo')`, the browser's URL will become
     * `example.com/my/app/foo`.
     *
     * @usageNotes
     *
     * ### Example
     *
     * {@example common/location/ts/path_location_component.ts region='LocationComponent'}
     *
     * @publicApi
     */
    var PathLocationStrategy$1 = /** @class */ (function (_super) {
        __extends(PathLocationStrategy, _super);
        function PathLocationStrategy(_platformLocation, href) {
            var _this = _super.call(this) || this;
            _this._platformLocation = _platformLocation;
            if (href == null) {
                href = _this._platformLocation.getBaseHrefFromDOM();
            }
            if (href == null) {
                throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
            }
            _this._baseHref = href;
            return _this;
        }
        PathLocationStrategy.prototype.onPopState = function (fn) {
            this._platformLocation.onPopState(fn);
            this._platformLocation.onHashChange(fn);
        };
        PathLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
        PathLocationStrategy.prototype.prepareExternalUrl = function (internal) {
            return Location$1.joinWithSlash(this._baseHref, internal);
        };
        PathLocationStrategy.prototype.path = function (includeHash) {
            if (includeHash === void 0) { includeHash = false; }
            var pathname = this._platformLocation.pathname +
                Location$1.normalizeQueryParams(this._platformLocation.search);
            var hash = this._platformLocation.hash;
            return hash && includeHash ? "" + pathname + hash : pathname;
        };
        PathLocationStrategy.prototype.pushState = function (state, title, url, queryParams) {
            var externalUrl = this.prepareExternalUrl(url + Location$1.normalizeQueryParams(queryParams));
            this._platformLocation.pushState(state, title, externalUrl);
        };
        PathLocationStrategy.prototype.replaceState = function (state, title, url, queryParams) {
            var externalUrl = this.prepareExternalUrl(url + Location$1.normalizeQueryParams(queryParams));
            this._platformLocation.replaceState(state, title, externalUrl);
        };
        PathLocationStrategy.prototype.forward = function () { this._platformLocation.forward(); };
        PathLocationStrategy.prototype.back = function () { this._platformLocation.back(); };
        PathLocationStrategy = __decorate([
            core.Injectable(),
            __param(1, core.Optional()), __param(1, core.Inject(APP_BASE_HREF$1)),
            __metadata("design:paramtypes", [PlatformLocation$1, String])
        ], PathLocationStrategy);
        return PathLocationStrategy;
    }(LocationStrategy$1));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u$1 = undefined;
    function plural$1(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
        if (i === 1 && v === 0)
            return 1;
        return 5;
    }
    var localeEn$1 = [
        'en', [['a', 'p'], ['AM', 'PM'], u$1], [['AM', 'PM'], u$1, u$1],
        [
            ['S', 'M', 'T', 'W', 'T', 'F', 'S'], ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
        ],
        u$1,
        [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            [
                'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
                'October', 'November', 'December'
            ]
        ],
        u$1, [['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']], 0, [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'], ['{1}, {0}', u$1, '{1} \'at\' {0}', u$1],
        ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '¤#,##0.00', '#E0'], '$', 'US Dollar', {}, plural$1
    ];

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @publicApi
     */
    var LOCALE_DATA$1 = {};

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** @internal */
    var CURRENCIES_EN$1 = {
        'ADP': [undefined, undefined, 0],
        'AFN': [undefined, undefined, 0],
        'ALL': [undefined, undefined, 0],
        'AMD': [undefined, undefined, 0],
        'AOA': [undefined, 'Kz'],
        'ARS': [undefined, '$'],
        'AUD': ['A$', '$'],
        'BAM': [undefined, 'KM'],
        'BBD': [undefined, '$'],
        'BDT': [undefined, '৳'],
        'BHD': [undefined, undefined, 3],
        'BIF': [undefined, undefined, 0],
        'BMD': [undefined, '$'],
        'BND': [undefined, '$'],
        'BOB': [undefined, 'Bs'],
        'BRL': ['R$'],
        'BSD': [undefined, '$'],
        'BWP': [undefined, 'P'],
        'BYN': [undefined, 'р.', 2],
        'BYR': [undefined, undefined, 0],
        'BZD': [undefined, '$'],
        'CAD': ['CA$', '$', 2],
        'CHF': [undefined, undefined, 2],
        'CLF': [undefined, undefined, 4],
        'CLP': [undefined, '$', 0],
        'CNY': ['CN¥', '¥'],
        'COP': [undefined, '$', 0],
        'CRC': [undefined, '₡', 2],
        'CUC': [undefined, '$'],
        'CUP': [undefined, '$'],
        'CZK': [undefined, 'Kč', 2],
        'DJF': [undefined, undefined, 0],
        'DKK': [undefined, 'kr', 2],
        'DOP': [undefined, '$'],
        'EGP': [undefined, 'E£'],
        'ESP': [undefined, '₧', 0],
        'EUR': ['€'],
        'FJD': [undefined, '$'],
        'FKP': [undefined, '£'],
        'GBP': ['£'],
        'GEL': [undefined, '₾'],
        'GIP': [undefined, '£'],
        'GNF': [undefined, 'FG', 0],
        'GTQ': [undefined, 'Q'],
        'GYD': [undefined, '$', 0],
        'HKD': ['HK$', '$'],
        'HNL': [undefined, 'L'],
        'HRK': [undefined, 'kn'],
        'HUF': [undefined, 'Ft', 2],
        'IDR': [undefined, 'Rp', 0],
        'ILS': ['₪'],
        'INR': ['₹'],
        'IQD': [undefined, undefined, 0],
        'IRR': [undefined, undefined, 0],
        'ISK': [undefined, 'kr', 0],
        'ITL': [undefined, undefined, 0],
        'JMD': [undefined, '$'],
        'JOD': [undefined, undefined, 3],
        'JPY': ['¥', undefined, 0],
        'KHR': [undefined, '៛'],
        'KMF': [undefined, 'CF', 0],
        'KPW': [undefined, '₩', 0],
        'KRW': ['₩', undefined, 0],
        'KWD': [undefined, undefined, 3],
        'KYD': [undefined, '$'],
        'KZT': [undefined, '₸'],
        'LAK': [undefined, '₭', 0],
        'LBP': [undefined, 'L£', 0],
        'LKR': [undefined, 'Rs'],
        'LRD': [undefined, '$'],
        'LTL': [undefined, 'Lt'],
        'LUF': [undefined, undefined, 0],
        'LVL': [undefined, 'Ls'],
        'LYD': [undefined, undefined, 3],
        'MGA': [undefined, 'Ar', 0],
        'MGF': [undefined, undefined, 0],
        'MMK': [undefined, 'K', 0],
        'MNT': [undefined, '₮', 0],
        'MRO': [undefined, undefined, 0],
        'MUR': [undefined, 'Rs', 0],
        'MXN': ['MX$', '$'],
        'MYR': [undefined, 'RM'],
        'NAD': [undefined, '$'],
        'NGN': [undefined, '₦'],
        'NIO': [undefined, 'C$'],
        'NOK': [undefined, 'kr', 2],
        'NPR': [undefined, 'Rs'],
        'NZD': ['NZ$', '$'],
        'OMR': [undefined, undefined, 3],
        'PHP': [undefined, '₱'],
        'PKR': [undefined, 'Rs', 0],
        'PLN': [undefined, 'zł'],
        'PYG': [undefined, '₲', 0],
        'RON': [undefined, 'lei'],
        'RSD': [undefined, undefined, 0],
        'RUB': [undefined, '₽'],
        'RUR': [undefined, 'р.'],
        'RWF': [undefined, 'RF', 0],
        'SBD': [undefined, '$'],
        'SEK': [undefined, 'kr', 2],
        'SGD': [undefined, '$'],
        'SHP': [undefined, '£'],
        'SLL': [undefined, undefined, 0],
        'SOS': [undefined, undefined, 0],
        'SRD': [undefined, '$'],
        'SSP': [undefined, '£'],
        'STD': [undefined, undefined, 0],
        'STN': [undefined, 'Db'],
        'SYP': [undefined, '£', 0],
        'THB': [undefined, '฿'],
        'TMM': [undefined, undefined, 0],
        'TND': [undefined, undefined, 3],
        'TOP': [undefined, 'T$'],
        'TRL': [undefined, undefined, 0],
        'TRY': [undefined, '₺'],
        'TTD': [undefined, '$'],
        'TWD': ['NT$', '$', 2],
        'TZS': [undefined, undefined, 0],
        'UAH': [undefined, '₴'],
        'UGX': [undefined, undefined, 0],
        'USD': ['$'],
        'UYI': [undefined, undefined, 0],
        'UYU': [undefined, '$'],
        'UZS': [undefined, undefined, 0],
        'VEF': [undefined, 'Bs'],
        'VND': ['₫', undefined, 0],
        'VUV': [undefined, undefined, 0],
        'XAF': ['FCFA', undefined, 0],
        'XCD': ['EC$', '$'],
        'XOF': ['CFA', undefined, 0],
        'XPF': ['CFPF', undefined, 0],
        'YER': [undefined, undefined, 0],
        'ZAR': [undefined, 'R'],
        'ZMK': [undefined, undefined, 0],
        'ZMW': [undefined, 'ZK'],
        'ZWD': [undefined, undefined, 0]
    };

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Format styles that can be used to represent numbers.
     * @see `getLocaleNumberFormat()`.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    var NumberFormatStyle$1;
    (function (NumberFormatStyle) {
        NumberFormatStyle[NumberFormatStyle["Decimal"] = 0] = "Decimal";
        NumberFormatStyle[NumberFormatStyle["Percent"] = 1] = "Percent";
        NumberFormatStyle[NumberFormatStyle["Currency"] = 2] = "Currency";
        NumberFormatStyle[NumberFormatStyle["Scientific"] = 3] = "Scientific";
    })(NumberFormatStyle$1 || (NumberFormatStyle$1 = {}));
    /**
     * Plurality cases used for translating plurals to different languages.
     *
     * @see `NgPlural`
     * @see `NgPluralCase`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi */
    var Plural$1;
    (function (Plural) {
        Plural[Plural["Zero"] = 0] = "Zero";
        Plural[Plural["One"] = 1] = "One";
        Plural[Plural["Two"] = 2] = "Two";
        Plural[Plural["Few"] = 3] = "Few";
        Plural[Plural["Many"] = 4] = "Many";
        Plural[Plural["Other"] = 5] = "Other";
    })(Plural$1 || (Plural$1 = {}));
    /**
     * Context-dependant translation forms for strings.
     * Typically the standalone version is for the nominative form of the word,
     * and the format version is used for the genitive case.
     * @see [CLDR website](http://cldr.unicode.org/translation/date-time#TOC-Stand-Alone-vs.-Format-Styles)
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    var FormStyle$1;
    (function (FormStyle) {
        FormStyle[FormStyle["Format"] = 0] = "Format";
        FormStyle[FormStyle["Standalone"] = 1] = "Standalone";
    })(FormStyle$1 || (FormStyle$1 = {}));
    /**
     * String widths available for translations.
     * The specific character widths are locale-specific.
     * Examples are given for the word "Sunday" in English.
     *
     * @publicApi
     */
    var TranslationWidth$1;
    (function (TranslationWidth) {
        /** 1 character for `en-US`. For example: 'S' */
        TranslationWidth[TranslationWidth["Narrow"] = 0] = "Narrow";
        /** 3 characters for `en-US`. For example: 'Sun' */
        TranslationWidth[TranslationWidth["Abbreviated"] = 1] = "Abbreviated";
        /** Full length for `en-US`. For example: "Sunday" */
        TranslationWidth[TranslationWidth["Wide"] = 2] = "Wide";
        /** 2 characters for `en-US`, For example: "Su" */
        TranslationWidth[TranslationWidth["Short"] = 3] = "Short";
    })(TranslationWidth$1 || (TranslationWidth$1 = {}));
    /**
     * String widths available for date-time formats.
     * The specific character widths are locale-specific.
     * Examples are given for `en-US`.
     *
     * @see `getLocaleDateFormat()`
     * @see `getLocaleTimeFormat()``
     * @see `getLocaleDateTimeFormat()`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     * @publicApi
     */
    var FormatWidth$1;
    (function (FormatWidth) {
        /**
         * For `en-US`, 'M/d/yy, h:mm a'`
         * (Example: `6/15/15, 9:03 AM`)
         */
        FormatWidth[FormatWidth["Short"] = 0] = "Short";
        /**
         * For `en-US`, `'MMM d, y, h:mm:ss a'`
         * (Example: `Jun 15, 2015, 9:03:01 AM`)
         */
        FormatWidth[FormatWidth["Medium"] = 1] = "Medium";
        /**
         * For `en-US`, `'MMMM d, y, h:mm:ss a z'`
         * (Example: `June 15, 2015 at 9:03:01 AM GMT+1`)
         */
        FormatWidth[FormatWidth["Long"] = 2] = "Long";
        /**
         * For `en-US`, `'EEEE, MMMM d, y, h:mm:ss a zzzz'`
         * (Example: `Monday, June 15, 2015 at 9:03:01 AM GMT+01:00`)
         */
        FormatWidth[FormatWidth["Full"] = 3] = "Full";
    })(FormatWidth$1 || (FormatWidth$1 = {}));
    /**
     * Symbols that can be used to replace placeholders in number patterns.
     * Examples are based on `en-US` values.
     *
     * @see `getLocaleNumberSymbol()`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    var NumberSymbol$1;
    (function (NumberSymbol) {
        /**
         * Decimal separator.
         * For `en-US`, the dot character.
         * Example : 2,345`.`67
         */
        NumberSymbol[NumberSymbol["Decimal"] = 0] = "Decimal";
        /**
         * Grouping separator, typically for thousands.
         * For `en-US`, the comma character.
         * Example: 2`,`345.67
         */
        NumberSymbol[NumberSymbol["Group"] = 1] = "Group";
        /**
         * List-item separator.
         * Example: "one, two, and three"
         */
        NumberSymbol[NumberSymbol["List"] = 2] = "List";
        /**
         * Sign for percentage (out of 100).
         * Example: 23.4%
         */
        NumberSymbol[NumberSymbol["PercentSign"] = 3] = "PercentSign";
        /**
         * Sign for positive numbers.
         * Example: +23
         */
        NumberSymbol[NumberSymbol["PlusSign"] = 4] = "PlusSign";
        /**
         * Sign for negative numbers.
         * Example: -23
         */
        NumberSymbol[NumberSymbol["MinusSign"] = 5] = "MinusSign";
        /**
         * Computer notation for exponential value (n times a power of 10).
         * Example: 1.2E3
         */
        NumberSymbol[NumberSymbol["Exponential"] = 6] = "Exponential";
        /**
         * Human-readable format of exponential.
         * Example: 1.2x103
         */
        NumberSymbol[NumberSymbol["SuperscriptingExponent"] = 7] = "SuperscriptingExponent";
        /**
         * Sign for permille (out of 1000).
         * Example: 23.4‰
         */
        NumberSymbol[NumberSymbol["PerMille"] = 8] = "PerMille";
        /**
         * Infinity, can be used with plus and minus.
         * Example: ∞, +∞, -∞
         */
        NumberSymbol[NumberSymbol["Infinity"] = 9] = "Infinity";
        /**
         * Not a number.
         * Example: NaN
         */
        NumberSymbol[NumberSymbol["NaN"] = 10] = "NaN";
        /**
         * Symbol used between time units.
         * Example: 10:52
         */
        NumberSymbol[NumberSymbol["TimeSeparator"] = 11] = "TimeSeparator";
        /**
         * Decimal separator for currency values (fallback to `Decimal`).
         * Example: $2,345.67
         */
        NumberSymbol[NumberSymbol["CurrencyDecimal"] = 12] = "CurrencyDecimal";
        /**
         * Group separator for currency values (fallback to `Group`).
         * Example: $2,345.67
         */
        NumberSymbol[NumberSymbol["CurrencyGroup"] = 13] = "CurrencyGroup";
    })(NumberSymbol$1 || (NumberSymbol$1 = {}));
    /**
     * The value for each day of the week, based on the `en-US` locale
     *
     * @publicApi
     */
    var WeekDay$1;
    (function (WeekDay) {
        WeekDay[WeekDay["Sunday"] = 0] = "Sunday";
        WeekDay[WeekDay["Monday"] = 1] = "Monday";
        WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
        WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
        WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
        WeekDay[WeekDay["Friday"] = 5] = "Friday";
        WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
    })(WeekDay$1 || (WeekDay$1 = {}));
    /**
     * Retrieves the locale ID from the currently loaded locale.
     * The loaded locale could be, for example, a global one rather than a regional one.
     * @param locale A locale code, such as `fr-FR`.
     * @returns The locale code. For example, `fr`.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLocaleId$1(locale) {
        return findLocaleData$1(locale)[0 /* LocaleId */];
    }
    /**
     * Retrieves day period strings for the given locale.
     *
     * @param locale A locale code for the locale format rules to use.
     * @param formStyle The required grammatical form.
     * @param width The required character width.
     * @returns An array of localized period strings. For example, `[AM, PM]` for `en-US`.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLocaleDayPeriods$1(locale, formStyle, width) {
        var data = findLocaleData$1(locale);
        var amPmData = [data[1 /* DayPeriodsFormat */], data[2 /* DayPeriodsStandalone */]];
        var amPm = getLastDefinedValue$1(amPmData, formStyle);
        return getLastDefinedValue$1(amPm, width);
    }
    /**
     * Retrieves days of the week for the given locale, using the Gregorian calendar.
     *
     * @param locale A locale code for the locale format rules to use.
     * @param formStyle The required grammatical form.
     * @param width The required character width.
     * @returns An array of localized name strings.
     * For example,`[Sunday, Monday, ... Saturday]` for `en-US`.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLocaleDayNames$1(locale, formStyle, width) {
        var data = findLocaleData$1(locale);
        var daysData = [data[3 /* DaysFormat */], data[4 /* DaysStandalone */]];
        var days = getLastDefinedValue$1(daysData, formStyle);
        return getLastDefinedValue$1(days, width);
    }
    /**
     * Retrieves months of the year for the given locale, using the Gregorian calendar.
     *
     * @param locale A locale code for the locale format rules to use.
     * @param formStyle The required grammatical form.
     * @param width The required character width.
     * @returns An array of localized name strings.
     * For example,  `[January, February, ...]` for `en-US`.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLocaleMonthNames$1(locale, formStyle, width) {
        var data = findLocaleData$1(locale);
        var monthsData = [data[5 /* MonthsFormat */], data[6 /* MonthsStandalone */]];
        var months = getLastDefinedValue$1(monthsData, formStyle);
        return getLastDefinedValue$1(months, width);
    }
    /**
     * Retrieves Gregorian-calendar eras for the given locale.
     * @param locale A locale code for the locale format rules to use.
     * @param formStyle The required grammatical form.
     * @param width The required character width.

     * @returns An array of localized era strings.
     * For example, `[AD, BC]` for `en-US`.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLocaleEraNames$1(locale, width) {
        var data = findLocaleData$1(locale);
        var erasData = data[7 /* Eras */];
        return getLastDefinedValue$1(erasData, width);
    }
    /**
     * Retrieves a localized date-value formating string.
     *
     * @param locale A locale code for the locale format rules to use.
     * @param width The format type.
     * @returns The localized formating string.
     * @see `FormatWidth`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLocaleDateFormat$1(locale, width) {
        var data = findLocaleData$1(locale);
        return getLastDefinedValue$1(data[10 /* DateFormat */], width);
    }
    /**
     * Retrieves a localized time-value formatting string.
     *
     * @param locale A locale code for the locale format rules to use.
     * @param width The format type.
     * @returns The localized formatting string.
     * @see `FormatWidth`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)

     * @publicApi
     */
    function getLocaleTimeFormat$1(locale, width) {
        var data = findLocaleData$1(locale);
        return getLastDefinedValue$1(data[11 /* TimeFormat */], width);
    }
    /**
     * Retrieves a localized date-time formatting string.
     *
     * @param locale A locale code for the locale format rules to use.
     * @param width The format type.
     * @returns The localized formatting string.
     * @see `FormatWidth`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLocaleDateTimeFormat$1(locale, width) {
        var data = findLocaleData$1(locale);
        var dateTimeFormatData = data[12 /* DateTimeFormat */];
        return getLastDefinedValue$1(dateTimeFormatData, width);
    }
    /**
     * Retrieves a localized number symbol that can be used to replace placeholders in number formats.
     * @param locale The locale code.
     * @param symbol The symbol to localize.
     * @returns The character for the localized symbol.
     * @see `NumberSymbol`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLocaleNumberSymbol$1(locale, symbol) {
        var data = findLocaleData$1(locale);
        var res = data[13 /* NumberSymbols */][symbol];
        if (typeof res === 'undefined') {
            if (symbol === NumberSymbol$1.CurrencyDecimal) {
                return data[13 /* NumberSymbols */][NumberSymbol$1.Decimal];
            }
            else if (symbol === NumberSymbol$1.CurrencyGroup) {
                return data[13 /* NumberSymbols */][NumberSymbol$1.Group];
            }
        }
        return res;
    }
    /**
     * Retrieves a number format for a given locale.
     *
     * Numbers are formatted using patterns, like `#,###.00`. For example, the pattern `#,###.00`
     * when used to format the number 12345.678 could result in "12'345,678". That would happen if the
     * grouping separator for your language is an apostrophe, and the decimal separator is a comma.
     *
     * <b>Important:</b> The characters `.` `,` `0` `#` (and others below) are special placeholders
     * that stand for the decimal separator, and so on, and are NOT real characters.
     * You must NOT "translate" the placeholders. For example, don't change `.` to `,` even though in
     * your language the decimal point is written with a comma. The symbols should be replaced by the
     * local equivalents, using the appropriate `NumberSymbol` for your language.
     *
     * Here are the special characters used in number patterns:
     *
     * | Symbol | Meaning |
     * |--------|---------|
     * | . | Replaced automatically by the character used for the decimal point. |
     * | , | Replaced by the "grouping" (thousands) separator. |
     * | 0 | Replaced by a digit (or zero if there aren't enough digits). |
     * | # | Replaced by a digit (or nothing if there aren't enough). |
     * | ¤ | Replaced by a currency symbol, such as $ or USD. |
     * | % | Marks a percent format. The % symbol may change position, but must be retained. |
     * | E | Marks a scientific format. The E symbol may change position, but must be retained. |
     * | ' | Special characters used as literal characters are quoted with ASCII single quotes. |
     *
     * @param locale A locale code for the locale format rules to use.
     * @param type The type of numeric value to be formatted (such as `Decimal` or `Currency`.)
     * @returns The localized format string.
     * @see `NumberFormatStyle`
     * @see [CLDR website](http://cldr.unicode.org/translation/number-patterns)
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLocaleNumberFormat$1(locale, type) {
        var data = findLocaleData$1(locale);
        return data[14 /* NumberFormats */][type];
    }
    /**
     * Retrieves the currency values for a given locale.
     * @param locale A locale code for the locale format rules to use.
     * @returns The currency values.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     */
    function getLocaleCurrencies$1(locale) {
        var data = findLocaleData$1(locale);
        return data[17 /* Currencies */];
    }
    /**
     * Retrieves the plural function used by ICU expressions to determine the plural case to use
     * for a given locale.
     * @param locale A locale code for the locale format rules to use.
     * @returns The plural function for the locale.
     * @see `NgPlural`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLocalePluralCase$1(locale) {
        var data = findLocaleData$1(locale);
        return data[18 /* PluralCase */];
    }
    function checkFullData$1(data) {
        if (!data[19 /* ExtraData */]) {
            throw new Error("Missing extra locale data for the locale \"" + data[0 /* LocaleId */] + "\". Use \"registerLocaleData\" to load new data. See the \"I18n guide\" on angular.io to know more.");
        }
    }
    /**
     * Retrieves locale-specific rules used to determine which day period to use
     * when more than one period is defined for a locale.
     *
     * There is a rule for each defined day period. The
     * first rule is applied to the first day period and so on.
     * Fall back to AM/PM when no rules are available.
     *
     * A rule can specify a period as time range, or as a single time value.
     *
     * This functionality is only available when you have loaded the full locale data.
     * See the ["I18n guide"](guide/i18n#i18n-pipes).
     *
     * @param locale A locale code for the locale format rules to use.
     * @returns The rules for the locale, a single time value or array of *from-time, to-time*,
     * or null if no periods are available.
     *
     * @see `getLocaleExtraDayPeriods()`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLocaleExtraDayPeriodRules$1(locale) {
        var data = findLocaleData$1(locale);
        checkFullData$1(data);
        var rules = data[19 /* ExtraData */][2 /* ExtraDayPeriodsRules */] || [];
        return rules.map(function (rule) {
            if (typeof rule === 'string') {
                return extractTime$1(rule);
            }
            return [extractTime$1(rule[0]), extractTime$1(rule[1])];
        });
    }
    /**
     * Retrieves locale-specific day periods, which indicate roughly how a day is broken up
     * in different languages.
     * For example, for `en-US`, periods are morning, noon, afternoon, evening, and midnight.
     *
     * This functionality is only available when you have loaded the full locale data.
     * See the ["I18n guide"](guide/i18n#i18n-pipes).
     *
     * @param locale A locale code for the locale format rules to use.
     * @param formStyle The required grammatical form.
     * @param width The required character width.
     * @returns The translated day-period strings.
     * @see `getLocaleExtraDayPeriodRules()`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLocaleExtraDayPeriods$1(locale, formStyle, width) {
        var data = findLocaleData$1(locale);
        checkFullData$1(data);
        var dayPeriodsData = [
            data[19 /* ExtraData */][0 /* ExtraDayPeriodFormats */],
            data[19 /* ExtraData */][1 /* ExtraDayPeriodStandalone */]
        ];
        var dayPeriods = getLastDefinedValue$1(dayPeriodsData, formStyle) || [];
        return getLastDefinedValue$1(dayPeriods, width) || [];
    }
    /**
     * Retrieves the first value that is defined in an array, going backwards from an index position.
     *
     * To avoid repeating the same data (as when the "format" and "standalone" forms are the same)
     * add the first value to the locale data arrays, and add other values only if they are different.
     *
     * @param data The data array to retrieve from.
     * @param index A 0-based index into the array to start from.
     * @returns The value immediately before the given index position.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getLastDefinedValue$1(data, index) {
        for (var i = index; i > -1; i--) {
            if (typeof data[i] !== 'undefined') {
                return data[i];
            }
        }
        throw new Error('Locale data API: locale data undefined');
    }
    /**
     * Extracts the hours and minutes from a string like "15:45"
     */
    function extractTime$1(time) {
        var _a = __read(time.split(':'), 2), h = _a[0], m = _a[1];
        return { hours: +h, minutes: +m };
    }
    /**
     * Finds the locale data for a given locale.
     *
     * @param locale The locale code.
     * @returns The locale data.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function findLocaleData$1(locale) {
        var normalizedLocale = locale.toLowerCase().replace(/_/g, '-');
        var match = LOCALE_DATA$1[normalizedLocale];
        if (match) {
            return match;
        }
        // let's try to find a parent locale
        var parentLocale = normalizedLocale.split('-')[0];
        match = LOCALE_DATA$1[parentLocale];
        if (match) {
            return match;
        }
        if (parentLocale === 'en') {
            return localeEn$1;
        }
        throw new Error("Missing locale data for the locale \"" + locale + "\".");
    }
    /**
     * Retrieves the currency symbol for a given currency code.
     *
     * For example, for the default `en-US` locale, the code `USD` can
     * be represented by the narrow symbol `$` or the wide symbol `US$`.
     *
     * @param code The currency code.
     * @param format The format, `wide` or `narrow`.
     * @param locale A locale code for the locale format rules to use.
     *
     * @returns The symbol, or the currency code if no symbol is available.0
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getCurrencySymbol$1(code, format, locale) {
        if (locale === void 0) { locale = 'en'; }
        var currency = getLocaleCurrencies$1(locale)[code] || CURRENCIES_EN$1[code] || [];
        var symbolNarrow = currency[1 /* SymbolNarrow */];
        if (format === 'narrow' && typeof symbolNarrow === 'string') {
            return symbolNarrow;
        }
        return currency[0 /* Symbol */] || code;
    }
    // Most currencies have cents, that's why the default is 2
    var DEFAULT_NB_OF_CURRENCY_DIGITS$1 = 2;
    /**
     * Reports the number of decimal digits for a given currency.
     * The value depends upon the presence of cents in that particular currency.
     *
     * @param code The currency code.
     * @returns The number of decimal digits, typically 0 or 2.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function getNumberOfCurrencyDigits$1(code) {
        var digits;
        var currency = CURRENCIES_EN$1[code];
        if (currency) {
            digits = currency[2 /* NbOfDigits */];
        }
        return typeof digits === 'number' ? digits : DEFAULT_NB_OF_CURRENCY_DIGITS$1;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ISO8601_DATE_REGEX$1 = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    //    1        2       3         4          5          6          7          8  9     10      11
    var NAMED_FORMATS$1 = {};
    var DATE_FORMATS_SPLIT$2 = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
    var ZoneWidth$1;
    (function (ZoneWidth) {
        ZoneWidth[ZoneWidth["Short"] = 0] = "Short";
        ZoneWidth[ZoneWidth["ShortGMT"] = 1] = "ShortGMT";
        ZoneWidth[ZoneWidth["Long"] = 2] = "Long";
        ZoneWidth[ZoneWidth["Extended"] = 3] = "Extended";
    })(ZoneWidth$1 || (ZoneWidth$1 = {}));
    var DateType$1;
    (function (DateType) {
        DateType[DateType["FullYear"] = 0] = "FullYear";
        DateType[DateType["Month"] = 1] = "Month";
        DateType[DateType["Date"] = 2] = "Date";
        DateType[DateType["Hours"] = 3] = "Hours";
        DateType[DateType["Minutes"] = 4] = "Minutes";
        DateType[DateType["Seconds"] = 5] = "Seconds";
        DateType[DateType["FractionalSeconds"] = 6] = "FractionalSeconds";
        DateType[DateType["Day"] = 7] = "Day";
    })(DateType$1 || (DateType$1 = {}));
    var TranslationType$1;
    (function (TranslationType) {
        TranslationType[TranslationType["DayPeriods"] = 0] = "DayPeriods";
        TranslationType[TranslationType["Days"] = 1] = "Days";
        TranslationType[TranslationType["Months"] = 2] = "Months";
        TranslationType[TranslationType["Eras"] = 3] = "Eras";
    })(TranslationType$1 || (TranslationType$1 = {}));
    /**
     * @ngModule CommonModule
     * @description
     *
     * Formats a date according to locale rules.
     *
     * @param value The date to format, as a Date, or a number (milliseconds since UTC epoch)
     * or an [ISO date-time string](https://www.w3.org/TR/NOTE-datetime).
     * @param format The date-time components to include. See `DatePipe` for details.
     * @param locale A locale code for the locale format rules to use.
     * @param timezone The time zone. A time zone offset from GMT (such as `'+0430'`),
     * or a standard UTC/GMT or continental US time zone abbreviation.
     * If not specified, uses host system settings.
     *
     * @returns The formatted date string.
     *
     * @see `DatePipe`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function formatDate$1(value, format, locale, timezone) {
        var date = toDate$1(value);
        var namedFormat = getNamedFormat$1(locale, format);
        format = namedFormat || format;
        var parts = [];
        var match;
        while (format) {
            match = DATE_FORMATS_SPLIT$2.exec(format);
            if (match) {
                parts = parts.concat(match.slice(1));
                var part = parts.pop();
                if (!part) {
                    break;
                }
                format = part;
            }
            else {
                parts.push(format);
                break;
            }
        }
        var dateTimezoneOffset = date.getTimezoneOffset();
        if (timezone) {
            dateTimezoneOffset = timezoneToOffset$1(timezone, dateTimezoneOffset);
            date = convertTimezoneToLocal$1(date, timezone, true);
        }
        var text = '';
        parts.forEach(function (value) {
            var dateFormatter = getDateFormatter$1(value);
            text += dateFormatter ?
                dateFormatter(date, locale, dateTimezoneOffset) :
                value === '\'\'' ? '\'' : value.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
        });
        return text;
    }
    function getNamedFormat$1(locale, format) {
        var localeId = getLocaleId$1(locale);
        NAMED_FORMATS$1[localeId] = NAMED_FORMATS$1[localeId] || {};
        if (NAMED_FORMATS$1[localeId][format]) {
            return NAMED_FORMATS$1[localeId][format];
        }
        var formatValue = '';
        switch (format) {
            case 'shortDate':
                formatValue = getLocaleDateFormat$1(locale, FormatWidth$1.Short);
                break;
            case 'mediumDate':
                formatValue = getLocaleDateFormat$1(locale, FormatWidth$1.Medium);
                break;
            case 'longDate':
                formatValue = getLocaleDateFormat$1(locale, FormatWidth$1.Long);
                break;
            case 'fullDate':
                formatValue = getLocaleDateFormat$1(locale, FormatWidth$1.Full);
                break;
            case 'shortTime':
                formatValue = getLocaleTimeFormat$1(locale, FormatWidth$1.Short);
                break;
            case 'mediumTime':
                formatValue = getLocaleTimeFormat$1(locale, FormatWidth$1.Medium);
                break;
            case 'longTime':
                formatValue = getLocaleTimeFormat$1(locale, FormatWidth$1.Long);
                break;
            case 'fullTime':
                formatValue = getLocaleTimeFormat$1(locale, FormatWidth$1.Full);
                break;
            case 'short':
                var shortTime = getNamedFormat$1(locale, 'shortTime');
                var shortDate = getNamedFormat$1(locale, 'shortDate');
                formatValue = formatDateTime$1(getLocaleDateTimeFormat$1(locale, FormatWidth$1.Short), [shortTime, shortDate]);
                break;
            case 'medium':
                var mediumTime = getNamedFormat$1(locale, 'mediumTime');
                var mediumDate = getNamedFormat$1(locale, 'mediumDate');
                formatValue = formatDateTime$1(getLocaleDateTimeFormat$1(locale, FormatWidth$1.Medium), [mediumTime, mediumDate]);
                break;
            case 'long':
                var longTime = getNamedFormat$1(locale, 'longTime');
                var longDate = getNamedFormat$1(locale, 'longDate');
                formatValue =
                    formatDateTime$1(getLocaleDateTimeFormat$1(locale, FormatWidth$1.Long), [longTime, longDate]);
                break;
            case 'full':
                var fullTime = getNamedFormat$1(locale, 'fullTime');
                var fullDate = getNamedFormat$1(locale, 'fullDate');
                formatValue =
                    formatDateTime$1(getLocaleDateTimeFormat$1(locale, FormatWidth$1.Full), [fullTime, fullDate]);
                break;
        }
        if (formatValue) {
            NAMED_FORMATS$1[localeId][format] = formatValue;
        }
        return formatValue;
    }
    function formatDateTime$1(str, opt_values) {
        if (opt_values) {
            str = str.replace(/\{([^}]+)}/g, function (match, key) {
                return (opt_values != null && key in opt_values) ? opt_values[key] : match;
            });
        }
        return str;
    }
    function padNumber$1(num, digits, minusSign, trim, negWrap) {
        if (minusSign === void 0) { minusSign = '-'; }
        var neg = '';
        if (num < 0 || (negWrap && num <= 0)) {
            if (negWrap) {
                num = -num + 1;
            }
            else {
                num = -num;
                neg = minusSign;
            }
        }
        var strNum = String(num);
        while (strNum.length < digits) {
            strNum = '0' + strNum;
        }
        if (trim) {
            strNum = strNum.substr(strNum.length - digits);
        }
        return neg + strNum;
    }
    function formatFractionalSeconds$1(milliseconds, digits) {
        var strMs = padNumber$1(milliseconds, 3);
        return strMs.substr(0, digits);
    }
    /**
     * Returns a date formatter that transforms a date into its locale digit representation
     */
    function dateGetter$1(name, size, offset, trim, negWrap) {
        if (offset === void 0) { offset = 0; }
        if (trim === void 0) { trim = false; }
        if (negWrap === void 0) { negWrap = false; }
        return function (date, locale) {
            var part = getDatePart$1(name, date);
            if (offset > 0 || part > -offset) {
                part += offset;
            }
            if (name === DateType$1.Hours) {
                if (part === 0 && offset === -12) {
                    part = 12;
                }
            }
            else if (name === DateType$1.FractionalSeconds) {
                return formatFractionalSeconds$1(part, size);
            }
            var localeMinus = getLocaleNumberSymbol$1(locale, NumberSymbol$1.MinusSign);
            return padNumber$1(part, size, localeMinus, trim, negWrap);
        };
    }
    function getDatePart$1(part, date) {
        switch (part) {
            case DateType$1.FullYear:
                return date.getFullYear();
            case DateType$1.Month:
                return date.getMonth();
            case DateType$1.Date:
                return date.getDate();
            case DateType$1.Hours:
                return date.getHours();
            case DateType$1.Minutes:
                return date.getMinutes();
            case DateType$1.Seconds:
                return date.getSeconds();
            case DateType$1.FractionalSeconds:
                return date.getMilliseconds();
            case DateType$1.Day:
                return date.getDay();
            default:
                throw new Error("Unknown DateType value \"" + part + "\".");
        }
    }
    /**
     * Returns a date formatter that transforms a date into its locale string representation
     */
    function dateStrGetter$1(name, width, form, extended) {
        if (form === void 0) { form = FormStyle$1.Format; }
        if (extended === void 0) { extended = false; }
        return function (date, locale) {
            return getDateTranslation$1(date, locale, name, width, form, extended);
        };
    }
    /**
     * Returns the locale translation of a date for a given form, type and width
     */
    function getDateTranslation$1(date, locale, name, width, form, extended) {
        switch (name) {
            case TranslationType$1.Months:
                return getLocaleMonthNames$1(locale, form, width)[date.getMonth()];
            case TranslationType$1.Days:
                return getLocaleDayNames$1(locale, form, width)[date.getDay()];
            case TranslationType$1.DayPeriods:
                var currentHours_1 = date.getHours();
                var currentMinutes_1 = date.getMinutes();
                if (extended) {
                    var rules = getLocaleExtraDayPeriodRules$1(locale);
                    var dayPeriods_1 = getLocaleExtraDayPeriods$1(locale, form, width);
                    var result_1;
                    rules.forEach(function (rule, index) {
                        if (Array.isArray(rule)) {
                            // morning, afternoon, evening, night
                            var _a = rule[0], hoursFrom = _a.hours, minutesFrom = _a.minutes;
                            var _b = rule[1], hoursTo = _b.hours, minutesTo = _b.minutes;
                            if (currentHours_1 >= hoursFrom && currentMinutes_1 >= minutesFrom &&
                                (currentHours_1 < hoursTo ||
                                    (currentHours_1 === hoursTo && currentMinutes_1 < minutesTo))) {
                                result_1 = dayPeriods_1[index];
                            }
                        }
                        else { // noon or midnight
                            var hours = rule.hours, minutes = rule.minutes;
                            if (hours === currentHours_1 && minutes === currentMinutes_1) {
                                result_1 = dayPeriods_1[index];
                            }
                        }
                    });
                    if (result_1) {
                        return result_1;
                    }
                }
                // if no rules for the day periods, we use am/pm by default
                return getLocaleDayPeriods$1(locale, form, width)[currentHours_1 < 12 ? 0 : 1];
            case TranslationType$1.Eras:
                return getLocaleEraNames$1(locale, width)[date.getFullYear() <= 0 ? 0 : 1];
            default:
                // This default case is not needed by TypeScript compiler, as the switch is exhaustive.
                // However Closure Compiler does not understand that and reports an error in typed mode.
                // The `throw new Error` below works around the problem, and the unexpected: never variable
                // makes sure tsc still checks this code is unreachable.
                var unexpected = name;
                throw new Error("unexpected translation type " + unexpected);
        }
    }
    /**
     * Returns a date formatter that transforms a date and an offset into a timezone with ISO8601 or
     * GMT format depending on the width (eg: short = +0430, short:GMT = GMT+4, long = GMT+04:30,
     * extended = +04:30)
     */
    function timeZoneGetter$2(width) {
        return function (date, locale, offset) {
            var zone = -1 * offset;
            var minusSign = getLocaleNumberSymbol$1(locale, NumberSymbol$1.MinusSign);
            var hours = zone > 0 ? Math.floor(zone / 60) : Math.ceil(zone / 60);
            switch (width) {
                case ZoneWidth$1.Short:
                    return ((zone >= 0) ? '+' : '') + padNumber$1(hours, 2, minusSign) +
                        padNumber$1(Math.abs(zone % 60), 2, minusSign);
                case ZoneWidth$1.ShortGMT:
                    return 'GMT' + ((zone >= 0) ? '+' : '') + padNumber$1(hours, 1, minusSign);
                case ZoneWidth$1.Long:
                    return 'GMT' + ((zone >= 0) ? '+' : '') + padNumber$1(hours, 2, minusSign) + ':' +
                        padNumber$1(Math.abs(zone % 60), 2, minusSign);
                case ZoneWidth$1.Extended:
                    if (offset === 0) {
                        return 'Z';
                    }
                    else {
                        return ((zone >= 0) ? '+' : '') + padNumber$1(hours, 2, minusSign) + ':' +
                            padNumber$1(Math.abs(zone % 60), 2, minusSign);
                    }
                default:
                    throw new Error("Unknown zone width \"" + width + "\"");
            }
        };
    }
    var JANUARY$1 = 0;
    var THURSDAY$1 = 4;
    function getFirstThursdayOfYear$1(year) {
        var firstDayOfYear = (new Date(year, JANUARY$1, 1)).getDay();
        return new Date(year, 0, 1 + ((firstDayOfYear <= THURSDAY$1) ? THURSDAY$1 : THURSDAY$1 + 7) - firstDayOfYear);
    }
    function getThursdayThisWeek$1(datetime) {
        return new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate() + (THURSDAY$1 - datetime.getDay()));
    }
    function weekGetter$1(size, monthBased) {
        if (monthBased === void 0) { monthBased = false; }
        return function (date, locale) {
            var result;
            if (monthBased) {
                var nbDaysBefore1stDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
                var today = date.getDate();
                result = 1 + Math.floor((today + nbDaysBefore1stDayOfMonth) / 7);
            }
            else {
                var firstThurs = getFirstThursdayOfYear$1(date.getFullYear());
                var thisThurs = getThursdayThisWeek$1(date);
                var diff = thisThurs.getTime() - firstThurs.getTime();
                result = 1 + Math.round(diff / 6.048e8); // 6.048e8 ms per week
            }
            return padNumber$1(result, size, getLocaleNumberSymbol$1(locale, NumberSymbol$1.MinusSign));
        };
    }
    var DATE_FORMATS$2 = {};
    // Based on CLDR formats:
    // See complete list: http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
    // See also explanations: http://cldr.unicode.org/translation/date-time
    // TODO(ocombe): support all missing cldr formats: Y, U, Q, D, F, e, c, j, J, C, A, v, V, X, x
    function getDateFormatter$1(format) {
        if (DATE_FORMATS$2[format]) {
            return DATE_FORMATS$2[format];
        }
        var formatter;
        switch (format) {
            // Era name (AD/BC)
            case 'G':
            case 'GG':
            case 'GGG':
                formatter = dateStrGetter$1(TranslationType$1.Eras, TranslationWidth$1.Abbreviated);
                break;
            case 'GGGG':
                formatter = dateStrGetter$1(TranslationType$1.Eras, TranslationWidth$1.Wide);
                break;
            case 'GGGGG':
                formatter = dateStrGetter$1(TranslationType$1.Eras, TranslationWidth$1.Narrow);
                break;
            // 1 digit representation of the year, e.g. (AD 1 => 1, AD 199 => 199)
            case 'y':
                formatter = dateGetter$1(DateType$1.FullYear, 1, 0, false, true);
                break;
            // 2 digit representation of the year, padded (00-99). (e.g. AD 2001 => 01, AD 2010 => 10)
            case 'yy':
                formatter = dateGetter$1(DateType$1.FullYear, 2, 0, true, true);
                break;
            // 3 digit representation of the year, padded (000-999). (e.g. AD 2001 => 01, AD 2010 => 10)
            case 'yyy':
                formatter = dateGetter$1(DateType$1.FullYear, 3, 0, false, true);
                break;
            // 4 digit representation of the year (e.g. AD 1 => 0001, AD 2010 => 2010)
            case 'yyyy':
                formatter = dateGetter$1(DateType$1.FullYear, 4, 0, false, true);
                break;
            // Month of the year (1-12), numeric
            case 'M':
            case 'L':
                formatter = dateGetter$1(DateType$1.Month, 1, 1);
                break;
            case 'MM':
            case 'LL':
                formatter = dateGetter$1(DateType$1.Month, 2, 1);
                break;
            // Month of the year (January, ...), string, format
            case 'MMM':
                formatter = dateStrGetter$1(TranslationType$1.Months, TranslationWidth$1.Abbreviated);
                break;
            case 'MMMM':
                formatter = dateStrGetter$1(TranslationType$1.Months, TranslationWidth$1.Wide);
                break;
            case 'MMMMM':
                formatter = dateStrGetter$1(TranslationType$1.Months, TranslationWidth$1.Narrow);
                break;
            // Month of the year (January, ...), string, standalone
            case 'LLL':
                formatter =
                    dateStrGetter$1(TranslationType$1.Months, TranslationWidth$1.Abbreviated, FormStyle$1.Standalone);
                break;
            case 'LLLL':
                formatter =
                    dateStrGetter$1(TranslationType$1.Months, TranslationWidth$1.Wide, FormStyle$1.Standalone);
                break;
            case 'LLLLL':
                formatter =
                    dateStrGetter$1(TranslationType$1.Months, TranslationWidth$1.Narrow, FormStyle$1.Standalone);
                break;
            // Week of the year (1, ... 52)
            case 'w':
                formatter = weekGetter$1(1);
                break;
            case 'ww':
                formatter = weekGetter$1(2);
                break;
            // Week of the month (1, ...)
            case 'W':
                formatter = weekGetter$1(1, true);
                break;
            // Day of the month (1-31)
            case 'd':
                formatter = dateGetter$1(DateType$1.Date, 1);
                break;
            case 'dd':
                formatter = dateGetter$1(DateType$1.Date, 2);
                break;
            // Day of the Week
            case 'E':
            case 'EE':
            case 'EEE':
                formatter = dateStrGetter$1(TranslationType$1.Days, TranslationWidth$1.Abbreviated);
                break;
            case 'EEEE':
                formatter = dateStrGetter$1(TranslationType$1.Days, TranslationWidth$1.Wide);
                break;
            case 'EEEEE':
                formatter = dateStrGetter$1(TranslationType$1.Days, TranslationWidth$1.Narrow);
                break;
            case 'EEEEEE':
                formatter = dateStrGetter$1(TranslationType$1.Days, TranslationWidth$1.Short);
                break;
            // Generic period of the day (am-pm)
            case 'a':
            case 'aa':
            case 'aaa':
                formatter = dateStrGetter$1(TranslationType$1.DayPeriods, TranslationWidth$1.Abbreviated);
                break;
            case 'aaaa':
                formatter = dateStrGetter$1(TranslationType$1.DayPeriods, TranslationWidth$1.Wide);
                break;
            case 'aaaaa':
                formatter = dateStrGetter$1(TranslationType$1.DayPeriods, TranslationWidth$1.Narrow);
                break;
            // Extended period of the day (midnight, at night, ...), standalone
            case 'b':
            case 'bb':
            case 'bbb':
                formatter = dateStrGetter$1(TranslationType$1.DayPeriods, TranslationWidth$1.Abbreviated, FormStyle$1.Standalone, true);
                break;
            case 'bbbb':
                formatter = dateStrGetter$1(TranslationType$1.DayPeriods, TranslationWidth$1.Wide, FormStyle$1.Standalone, true);
                break;
            case 'bbbbb':
                formatter = dateStrGetter$1(TranslationType$1.DayPeriods, TranslationWidth$1.Narrow, FormStyle$1.Standalone, true);
                break;
            // Extended period of the day (midnight, night, ...), standalone
            case 'B':
            case 'BB':
            case 'BBB':
                formatter = dateStrGetter$1(TranslationType$1.DayPeriods, TranslationWidth$1.Abbreviated, FormStyle$1.Format, true);
                break;
            case 'BBBB':
                formatter =
                    dateStrGetter$1(TranslationType$1.DayPeriods, TranslationWidth$1.Wide, FormStyle$1.Format, true);
                break;
            case 'BBBBB':
                formatter = dateStrGetter$1(TranslationType$1.DayPeriods, TranslationWidth$1.Narrow, FormStyle$1.Format, true);
                break;
            // Hour in AM/PM, (1-12)
            case 'h':
                formatter = dateGetter$1(DateType$1.Hours, 1, -12);
                break;
            case 'hh':
                formatter = dateGetter$1(DateType$1.Hours, 2, -12);
                break;
            // Hour of the day (0-23)
            case 'H':
                formatter = dateGetter$1(DateType$1.Hours, 1);
                break;
            // Hour in day, padded (00-23)
            case 'HH':
                formatter = dateGetter$1(DateType$1.Hours, 2);
                break;
            // Minute of the hour (0-59)
            case 'm':
                formatter = dateGetter$1(DateType$1.Minutes, 1);
                break;
            case 'mm':
                formatter = dateGetter$1(DateType$1.Minutes, 2);
                break;
            // Second of the minute (0-59)
            case 's':
                formatter = dateGetter$1(DateType$1.Seconds, 1);
                break;
            case 'ss':
                formatter = dateGetter$1(DateType$1.Seconds, 2);
                break;
            // Fractional second
            case 'S':
                formatter = dateGetter$1(DateType$1.FractionalSeconds, 1);
                break;
            case 'SS':
                formatter = dateGetter$1(DateType$1.FractionalSeconds, 2);
                break;
            case 'SSS':
                formatter = dateGetter$1(DateType$1.FractionalSeconds, 3);
                break;
            // Timezone ISO8601 short format (-0430)
            case 'Z':
            case 'ZZ':
            case 'ZZZ':
                formatter = timeZoneGetter$2(ZoneWidth$1.Short);
                break;
            // Timezone ISO8601 extended format (-04:30)
            case 'ZZZZZ':
                formatter = timeZoneGetter$2(ZoneWidth$1.Extended);
                break;
            // Timezone GMT short format (GMT+4)
            case 'O':
            case 'OO':
            case 'OOO':
            // Should be location, but fallback to format O instead because we don't have the data yet
            case 'z':
            case 'zz':
            case 'zzz':
                formatter = timeZoneGetter$2(ZoneWidth$1.ShortGMT);
                break;
            // Timezone GMT long format (GMT+0430)
            case 'OOOO':
            case 'ZZZZ':
            // Should be location, but fallback to format O instead because we don't have the data yet
            case 'zzzz':
                formatter = timeZoneGetter$2(ZoneWidth$1.Long);
                break;
            default:
                return null;
        }
        DATE_FORMATS$2[format] = formatter;
        return formatter;
    }
    function timezoneToOffset$1(timezone, fallback) {
        // Support: IE 9-11 only, Edge 13-15+
        // IE/Edge do not "understand" colon (`:`) in timezone
        timezone = timezone.replace(/:/g, '');
        var requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;
        return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
    }
    function addDateMinutes$1(date, minutes) {
        date = new Date(date.getTime());
        date.setMinutes(date.getMinutes() + minutes);
        return date;
    }
    function convertTimezoneToLocal$1(date, timezone, reverse) {
        var reverseValue = reverse ? -1 : 1;
        var dateTimezoneOffset = date.getTimezoneOffset();
        var timezoneOffset = timezoneToOffset$1(timezone, dateTimezoneOffset);
        return addDateMinutes$1(date, reverseValue * (timezoneOffset - dateTimezoneOffset));
    }
    /**
     * Converts a value to date.
     *
     * Supported input formats:
     * - `Date`
     * - number: timestamp
     * - string: numeric (e.g. "1234"), ISO and date strings in a format supported by
     *   [Date.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).
     *   Note: ISO strings without time return a date without timeoffset.
     *
     * Throws if unable to convert to a date.
     */
    function toDate$1(value) {
        if (isDate$2(value)) {
            return value;
        }
        if (typeof value === 'number' && !isNaN(value)) {
            return new Date(value);
        }
        if (typeof value === 'string') {
            value = value.trim();
            var parsedNb = parseFloat(value);
            // any string that only contains numbers, like "1234" but not like "1234hello"
            if (!isNaN(value - parsedNb)) {
                return new Date(parsedNb);
            }
            if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(value)) {
                /* For ISO Strings without time the day, month and year must be extracted from the ISO String
                before Date creation to avoid time offset and errors in the new Date.
                If we only replace '-' with ',' in the ISO String ("2015,01,01"), and try to create a new
                date, some browsers (e.g. IE 9) will throw an invalid Date error.
                If we leave the '-' ("2015-01-01") and try to create a new Date("2015-01-01") the timeoffset
                is applied.
                Note: ISO months are 0 for January, 1 for February, ... */
                var _a = __read(value.split('-').map(function (val) { return +val; }), 3), y = _a[0], m = _a[1], d = _a[2];
                return new Date(y, m - 1, d);
            }
            var match = void 0;
            if (match = value.match(ISO8601_DATE_REGEX$1)) {
                return isoStringToDate$1(match);
            }
        }
        var date = new Date(value);
        if (!isDate$2(date)) {
            throw new Error("Unable to convert \"" + value + "\" into a date");
        }
        return date;
    }
    /**
     * Converts a date in ISO8601 to a Date.
     * Used instead of `Date.parse` because of browser discrepancies.
     */
    function isoStringToDate$1(match) {
        var date = new Date(0);
        var tzHour = 0;
        var tzMin = 0;
        // match[8] means that the string contains "Z" (UTC) or a timezone like "+01:00" or "+0100"
        var dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear;
        var timeSetter = match[8] ? date.setUTCHours : date.setHours;
        // if there is a timezone defined like "+01:00" or "+0100"
        if (match[9]) {
            tzHour = Number(match[9] + match[10]);
            tzMin = Number(match[9] + match[11]);
        }
        dateSetter.call(date, Number(match[1]), Number(match[2]) - 1, Number(match[3]));
        var h = Number(match[4] || 0) - tzHour;
        var m = Number(match[5] || 0) - tzMin;
        var s = Number(match[6] || 0);
        var ms = Math.round(parseFloat('0.' + (match[7] || 0)) * 1000);
        timeSetter.call(date, h, m, s, ms);
        return date;
    }
    function isDate$2(value) {
        return value instanceof Date && !isNaN(value.valueOf());
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var NUMBER_FORMAT_REGEXP$1 = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
    var MAX_DIGITS$1 = 22;
    var DECIMAL_SEP$1 = '.';
    var ZERO_CHAR$1 = '0';
    var PATTERN_SEP$1 = ';';
    var GROUP_SEP$1 = ',';
    var DIGIT_CHAR$1 = '#';
    var CURRENCY_CHAR$1 = '¤';
    var PERCENT_CHAR$1 = '%';
    /**
     * Transforms a number to a locale string based on a style and a format.
     */
    function formatNumberToLocaleString$1(value, pattern, locale, groupSymbol, decimalSymbol, digitsInfo, isPercent) {
        if (isPercent === void 0) { isPercent = false; }
        var formattedText = '';
        var isZero = false;
        if (!isFinite(value)) {
            formattedText = getLocaleNumberSymbol$1(locale, NumberSymbol$1.Infinity);
        }
        else {
            var parsedNumber = parseNumber$1(value);
            if (isPercent) {
                parsedNumber = toPercent$1(parsedNumber);
            }
            var minInt = pattern.minInt;
            var minFraction = pattern.minFrac;
            var maxFraction = pattern.maxFrac;
            if (digitsInfo) {
                var parts = digitsInfo.match(NUMBER_FORMAT_REGEXP$1);
                if (parts === null) {
                    throw new Error(digitsInfo + " is not a valid digit info");
                }
                var minIntPart = parts[1];
                var minFractionPart = parts[3];
                var maxFractionPart = parts[5];
                if (minIntPart != null) {
                    minInt = parseIntAutoRadix$1(minIntPart);
                }
                if (minFractionPart != null) {
                    minFraction = parseIntAutoRadix$1(minFractionPart);
                }
                if (maxFractionPart != null) {
                    maxFraction = parseIntAutoRadix$1(maxFractionPart);
                }
                else if (minFractionPart != null && minFraction > maxFraction) {
                    maxFraction = minFraction;
                }
            }
            roundNumber$1(parsedNumber, minFraction, maxFraction);
            var digits = parsedNumber.digits;
            var integerLen = parsedNumber.integerLen;
            var exponent = parsedNumber.exponent;
            var decimals = [];
            isZero = digits.every(function (d) { return !d; });
            // pad zeros for small numbers
            for (; integerLen < minInt; integerLen++) {
                digits.unshift(0);
            }
            // pad zeros for small numbers
            for (; integerLen < 0; integerLen++) {
                digits.unshift(0);
            }
            // extract decimals digits
            if (integerLen > 0) {
                decimals = digits.splice(integerLen, digits.length);
            }
            else {
                decimals = digits;
                digits = [0];
            }
            // format the integer digits with grouping separators
            var groups = [];
            if (digits.length >= pattern.lgSize) {
                groups.unshift(digits.splice(-pattern.lgSize, digits.length).join(''));
            }
            while (digits.length > pattern.gSize) {
                groups.unshift(digits.splice(-pattern.gSize, digits.length).join(''));
            }
            if (digits.length) {
                groups.unshift(digits.join(''));
            }
            formattedText = groups.join(getLocaleNumberSymbol$1(locale, groupSymbol));
            // append the decimal digits
            if (decimals.length) {
                formattedText += getLocaleNumberSymbol$1(locale, decimalSymbol) + decimals.join('');
            }
            if (exponent) {
                formattedText += getLocaleNumberSymbol$1(locale, NumberSymbol$1.Exponential) + '+' + exponent;
            }
        }
        if (value < 0 && !isZero) {
            formattedText = pattern.negPre + formattedText + pattern.negSuf;
        }
        else {
            formattedText = pattern.posPre + formattedText + pattern.posSuf;
        }
        return formattedText;
    }
    /**
     * @ngModule CommonModule
     * @description
     *
     * Formats a number as currency using locale rules.
     *
     * @param value The number to format.
     * @param locale A locale code for the locale format rules to use.
     * @param currency A string containing the currency symbol or its name,
     * such as "$" or "Canadian Dollar". Used in output string, but does not affect the operation
     * of the function.
     * @param currencyCode The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
     * currency code to use in the result string, such as `USD` for the US dollar and `EUR` for the euro.
     * @param digitInfo Decimal representation options, specified by a string in the following format:
     * `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`. See `DecimalPipe` for more details.
     *
     * @returns The formatted currency value.
     *
     * @see `formatNumber()`
     * @see `DecimalPipe`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function formatCurrency$1(value, locale, currency, currencyCode, digitsInfo) {
        var format = getLocaleNumberFormat$1(locale, NumberFormatStyle$1.Currency);
        var pattern = parseNumberFormat$1(format, getLocaleNumberSymbol$1(locale, NumberSymbol$1.MinusSign));
        pattern.minFrac = getNumberOfCurrencyDigits$1(currencyCode);
        pattern.maxFrac = pattern.minFrac;
        var res = formatNumberToLocaleString$1(value, pattern, locale, NumberSymbol$1.CurrencyGroup, NumberSymbol$1.CurrencyDecimal, digitsInfo);
        return res
            .replace(CURRENCY_CHAR$1, currency)
            // if we have 2 time the currency character, the second one is ignored
            .replace(CURRENCY_CHAR$1, '');
    }
    /**
     * @ngModule CommonModule
     * @description
     *
     * Formats a number as a percentage according to locale rules.
     *
     * @param value The number to format.
     * @param locale A locale code for the locale format rules to use.
     * @param digitInfo Decimal representation options, specified by a string in the following format:
     * `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`. See `DecimalPipe` for more details.
     *
     * @returns The formatted percentage value.
     *
     * @see `formatNumber()`
     * @see `DecimalPipe`
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     * @publicApi
     *
     */
    function formatPercent$1(value, locale, digitsInfo) {
        var format = getLocaleNumberFormat$1(locale, NumberFormatStyle$1.Percent);
        var pattern = parseNumberFormat$1(format, getLocaleNumberSymbol$1(locale, NumberSymbol$1.MinusSign));
        var res = formatNumberToLocaleString$1(value, pattern, locale, NumberSymbol$1.Group, NumberSymbol$1.Decimal, digitsInfo, true);
        return res.replace(new RegExp(PERCENT_CHAR$1, 'g'), getLocaleNumberSymbol$1(locale, NumberSymbol$1.PercentSign));
    }
    /**
     * @ngModule CommonModule
     * @description
     *
     * Formats a number as text, with group sizing, separator, and other
     * parameters based on the locale.
     *
     * @param value The number to format.
     * @param locale A locale code for the locale format rules to use.
     * @param digitInfo Decimal representation options, specified by a string in the following format:
     * `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`. See `DecimalPipe` for more details.
     *
     * @returns The formatted text string.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * @publicApi
     */
    function formatNumber$2(value, locale, digitsInfo) {
        var format = getLocaleNumberFormat$1(locale, NumberFormatStyle$1.Decimal);
        var pattern = parseNumberFormat$1(format, getLocaleNumberSymbol$1(locale, NumberSymbol$1.MinusSign));
        return formatNumberToLocaleString$1(value, pattern, locale, NumberSymbol$1.Group, NumberSymbol$1.Decimal, digitsInfo);
    }
    function parseNumberFormat$1(format, minusSign) {
        if (minusSign === void 0) { minusSign = '-'; }
        var p = {
            minInt: 1,
            minFrac: 0,
            maxFrac: 0,
            posPre: '',
            posSuf: '',
            negPre: '',
            negSuf: '',
            gSize: 0,
            lgSize: 0
        };
        var patternParts = format.split(PATTERN_SEP$1);
        var positive = patternParts[0];
        var negative = patternParts[1];
        var positiveParts = positive.indexOf(DECIMAL_SEP$1) !== -1 ?
            positive.split(DECIMAL_SEP$1) :
            [
                positive.substring(0, positive.lastIndexOf(ZERO_CHAR$1) + 1),
                positive.substring(positive.lastIndexOf(ZERO_CHAR$1) + 1)
            ], integer = positiveParts[0], fraction = positiveParts[1] || '';
        p.posPre = integer.substr(0, integer.indexOf(DIGIT_CHAR$1));
        for (var i = 0; i < fraction.length; i++) {
            var ch = fraction.charAt(i);
            if (ch === ZERO_CHAR$1) {
                p.minFrac = p.maxFrac = i + 1;
            }
            else if (ch === DIGIT_CHAR$1) {
                p.maxFrac = i + 1;
            }
            else {
                p.posSuf += ch;
            }
        }
        var groups = integer.split(GROUP_SEP$1);
        p.gSize = groups[1] ? groups[1].length : 0;
        p.lgSize = (groups[2] || groups[1]) ? (groups[2] || groups[1]).length : 0;
        if (negative) {
            var trunkLen = positive.length - p.posPre.length - p.posSuf.length, pos = negative.indexOf(DIGIT_CHAR$1);
            p.negPre = negative.substr(0, pos).replace(/'/g, '');
            p.negSuf = negative.substr(pos + trunkLen).replace(/'/g, '');
        }
        else {
            p.negPre = minusSign + p.posPre;
            p.negSuf = p.posSuf;
        }
        return p;
    }
    // Transforms a parsed number into a percentage by multiplying it by 100
    function toPercent$1(parsedNumber) {
        // if the number is 0, don't do anything
        if (parsedNumber.digits[0] === 0) {
            return parsedNumber;
        }
        // Getting the current number of decimals
        var fractionLen = parsedNumber.digits.length - parsedNumber.integerLen;
        if (parsedNumber.exponent) {
            parsedNumber.exponent += 2;
        }
        else {
            if (fractionLen === 0) {
                parsedNumber.digits.push(0, 0);
            }
            else if (fractionLen === 1) {
                parsedNumber.digits.push(0);
            }
            parsedNumber.integerLen += 2;
        }
        return parsedNumber;
    }
    /**
     * Parses a number.
     * Significant bits of this parse algorithm came from https://github.com/MikeMcl/big.js/
     */
    function parseNumber$1(num) {
        var numStr = Math.abs(num) + '';
        var exponent = 0, digits, integerLen;
        var i, j, zeros;
        // Decimal point?
        if ((integerLen = numStr.indexOf(DECIMAL_SEP$1)) > -1) {
            numStr = numStr.replace(DECIMAL_SEP$1, '');
        }
        // Exponential form?
        if ((i = numStr.search(/e/i)) > 0) {
            // Work out the exponent.
            if (integerLen < 0)
                integerLen = i;
            integerLen += +numStr.slice(i + 1);
            numStr = numStr.substring(0, i);
        }
        else if (integerLen < 0) {
            // There was no decimal point or exponent so it is an integer.
            integerLen = numStr.length;
        }
        // Count the number of leading zeros.
        for (i = 0; numStr.charAt(i) === ZERO_CHAR$1; i++) { /* empty */
        }
        if (i === (zeros = numStr.length)) {
            // The digits are all zero.
            digits = [0];
            integerLen = 1;
        }
        else {
            // Count the number of trailing zeros
            zeros--;
            while (numStr.charAt(zeros) === ZERO_CHAR$1)
                zeros--;
            // Trailing zeros are insignificant so ignore them
            integerLen -= i;
            digits = [];
            // Convert string to array of digits without leading/trailing zeros.
            for (j = 0; i <= zeros; i++, j++) {
                digits[j] = Number(numStr.charAt(i));
            }
        }
        // If the number overflows the maximum allowed digits then use an exponent.
        if (integerLen > MAX_DIGITS$1) {
            digits = digits.splice(0, MAX_DIGITS$1 - 1);
            exponent = integerLen - 1;
            integerLen = 1;
        }
        return { digits: digits, exponent: exponent, integerLen: integerLen };
    }
    /**
     * Round the parsed number to the specified number of decimal places
     * This function changes the parsedNumber in-place
     */
    function roundNumber$1(parsedNumber, minFrac, maxFrac) {
        if (minFrac > maxFrac) {
            throw new Error("The minimum number of digits after fraction (" + minFrac + ") is higher than the maximum (" + maxFrac + ").");
        }
        var digits = parsedNumber.digits;
        var fractionLen = digits.length - parsedNumber.integerLen;
        var fractionSize = Math.min(Math.max(minFrac, fractionLen), maxFrac);
        // The index of the digit to where rounding is to occur
        var roundAt = fractionSize + parsedNumber.integerLen;
        var digit = digits[roundAt];
        if (roundAt > 0) {
            // Drop fractional digits beyond `roundAt`
            digits.splice(Math.max(parsedNumber.integerLen, roundAt));
            // Set non-fractional digits beyond `roundAt` to 0
            for (var j = roundAt; j < digits.length; j++) {
                digits[j] = 0;
            }
        }
        else {
            // We rounded to zero so reset the parsedNumber
            fractionLen = Math.max(0, fractionLen);
            parsedNumber.integerLen = 1;
            digits.length = Math.max(1, roundAt = fractionSize + 1);
            digits[0] = 0;
            for (var i = 1; i < roundAt; i++)
                digits[i] = 0;
        }
        if (digit >= 5) {
            if (roundAt - 1 < 0) {
                for (var k = 0; k > roundAt; k--) {
                    digits.unshift(0);
                    parsedNumber.integerLen++;
                }
                digits.unshift(1);
                parsedNumber.integerLen++;
            }
            else {
                digits[roundAt - 1]++;
            }
        }
        // Pad out with zeros to get the required fraction length
        for (; fractionLen < Math.max(0, fractionSize); fractionLen++)
            digits.push(0);
        var dropTrailingZeros = fractionSize !== 0;
        // Minimal length = nb of decimals required + current nb of integers
        // Any number besides that is optional and can be removed if it's a trailing 0
        var minLen = minFrac + parsedNumber.integerLen;
        // Do any carrying, e.g. a digit was rounded up to 10
        var carry = digits.reduceRight(function (carry, d, i, digits) {
            d = d + carry;
            digits[i] = d < 10 ? d : d - 10; // d % 10
            if (dropTrailingZeros) {
                // Do not keep meaningless fractional trailing zeros (e.g. 15.52000 --> 15.52)
                if (digits[i] === 0 && i >= minLen) {
                    digits.pop();
                }
                else {
                    dropTrailingZeros = false;
                }
            }
            return d >= 10 ? 1 : 0; // Math.floor(d / 10);
        }, 0);
        if (carry) {
            digits.unshift(carry);
            parsedNumber.integerLen++;
        }
    }
    function parseIntAutoRadix$1(text) {
        var result = parseInt(text);
        if (isNaN(result)) {
            throw new Error('Invalid integer literal when parsing ' + text);
        }
        return result;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @deprecated from v5
     */
    var DEPRECATED_PLURAL_FN$1 = new core.InjectionToken('UseV4Plurals');
    /**
     * @publicApi
     */
    var NgLocalization$1 = /** @class */ (function () {
        function NgLocalization() {
        }
        return NgLocalization;
    }());
    /**
     * Returns the plural category for a given value.
     * - "=value" when the case exists,
     * - the plural category otherwise
     */
    function getPluralCategory$1(value, cases, ngLocalization, locale) {
        var key = "=" + value;
        if (cases.indexOf(key) > -1) {
            return key;
        }
        key = ngLocalization.getPluralCategory(value, locale);
        if (cases.indexOf(key) > -1) {
            return key;
        }
        if (cases.indexOf('other') > -1) {
            return 'other';
        }
        throw new Error("No plural message found for value \"" + value + "\"");
    }
    /**
     * Returns the plural case based on the locale
     *
     * @publicApi
     */
    var NgLocaleLocalization$1 = /** @class */ (function (_super) {
        __extends(NgLocaleLocalization, _super);
        function NgLocaleLocalization(locale, 
        /** @deprecated from v5 */
        deprecatedPluralFn) {
            var _this = _super.call(this) || this;
            _this.locale = locale;
            _this.deprecatedPluralFn = deprecatedPluralFn;
            return _this;
        }
        NgLocaleLocalization.prototype.getPluralCategory = function (value, locale) {
            var plural = this.deprecatedPluralFn ? this.deprecatedPluralFn(locale || this.locale, value) :
                getLocalePluralCase$1(locale || this.locale)(value);
            switch (plural) {
                case Plural$1.Zero:
                    return 'zero';
                case Plural$1.One:
                    return 'one';
                case Plural$1.Two:
                    return 'two';
                case Plural$1.Few:
                    return 'few';
                case Plural$1.Many:
                    return 'many';
                default:
                    return 'other';
            }
        };
        NgLocaleLocalization = __decorate([
            core.Injectable(),
            __param(0, core.Inject(core.LOCALE_ID)),
            __param(1, core.Optional()), __param(1, core.Inject(DEPRECATED_PLURAL_FN$1)),
            __metadata("design:paramtypes", [String, Object])
        ], NgLocaleLocalization);
        return NgLocaleLocalization;
    }(NgLocalization$1));
    /**
     * Returns the plural case based on the locale
     *
     * @deprecated from v5 the plural case function is in locale data files common/locales/*.ts
     * @publicApi
     */
    function getPluralCase$1(locale, nLike) {
        // TODO(vicb): lazy compute
        if (typeof nLike === 'string') {
            nLike = parseInt(nLike, 10);
        }
        var n = nLike;
        var nDecimal = n.toString().replace(/^[^.]*\.?/, '');
        var i = Math.floor(Math.abs(n));
        var v = nDecimal.length;
        var f = parseInt(nDecimal, 10);
        var t = parseInt(n.toString().replace(/^[^.]*\.?|0+$/g, ''), 10) || 0;
        var lang = locale.split('-')[0].toLowerCase();
        switch (lang) {
            case 'af':
            case 'asa':
            case 'az':
            case 'bem':
            case 'bez':
            case 'bg':
            case 'brx':
            case 'ce':
            case 'cgg':
            case 'chr':
            case 'ckb':
            case 'ee':
            case 'el':
            case 'eo':
            case 'es':
            case 'eu':
            case 'fo':
            case 'fur':
            case 'gsw':
            case 'ha':
            case 'haw':
            case 'hu':
            case 'jgo':
            case 'jmc':
            case 'ka':
            case 'kk':
            case 'kkj':
            case 'kl':
            case 'ks':
            case 'ksb':
            case 'ky':
            case 'lb':
            case 'lg':
            case 'mas':
            case 'mgo':
            case 'ml':
            case 'mn':
            case 'nb':
            case 'nd':
            case 'ne':
            case 'nn':
            case 'nnh':
            case 'nyn':
            case 'om':
            case 'or':
            case 'os':
            case 'ps':
            case 'rm':
            case 'rof':
            case 'rwk':
            case 'saq':
            case 'seh':
            case 'sn':
            case 'so':
            case 'sq':
            case 'ta':
            case 'te':
            case 'teo':
            case 'tk':
            case 'tr':
            case 'ug':
            case 'uz':
            case 'vo':
            case 'vun':
            case 'wae':
            case 'xog':
                if (n === 1)
                    return Plural$1.One;
                return Plural$1.Other;
            case 'ak':
            case 'ln':
            case 'mg':
            case 'pa':
            case 'ti':
                if (n === Math.floor(n) && n >= 0 && n <= 1)
                    return Plural$1.One;
                return Plural$1.Other;
            case 'am':
            case 'as':
            case 'bn':
            case 'fa':
            case 'gu':
            case 'hi':
            case 'kn':
            case 'mr':
            case 'zu':
                if (i === 0 || n === 1)
                    return Plural$1.One;
                return Plural$1.Other;
            case 'ar':
                if (n === 0)
                    return Plural$1.Zero;
                if (n === 1)
                    return Plural$1.One;
                if (n === 2)
                    return Plural$1.Two;
                if (n % 100 === Math.floor(n % 100) && n % 100 >= 3 && n % 100 <= 10)
                    return Plural$1.Few;
                if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 99)
                    return Plural$1.Many;
                return Plural$1.Other;
            case 'ast':
            case 'ca':
            case 'de':
            case 'en':
            case 'et':
            case 'fi':
            case 'fy':
            case 'gl':
            case 'it':
            case 'nl':
            case 'sv':
            case 'sw':
            case 'ur':
            case 'yi':
                if (i === 1 && v === 0)
                    return Plural$1.One;
                return Plural$1.Other;
            case 'be':
                if (n % 10 === 1 && !(n % 100 === 11))
                    return Plural$1.One;
                if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 4 &&
                    !(n % 100 >= 12 && n % 100 <= 14))
                    return Plural$1.Few;
                if (n % 10 === 0 || n % 10 === Math.floor(n % 10) && n % 10 >= 5 && n % 10 <= 9 ||
                    n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 14)
                    return Plural$1.Many;
                return Plural$1.Other;
            case 'br':
                if (n % 10 === 1 && !(n % 100 === 11 || n % 100 === 71 || n % 100 === 91))
                    return Plural$1.One;
                if (n % 10 === 2 && !(n % 100 === 12 || n % 100 === 72 || n % 100 === 92))
                    return Plural$1.Two;
                if (n % 10 === Math.floor(n % 10) && (n % 10 >= 3 && n % 10 <= 4 || n % 10 === 9) &&
                    !(n % 100 >= 10 && n % 100 <= 19 || n % 100 >= 70 && n % 100 <= 79 ||
                        n % 100 >= 90 && n % 100 <= 99))
                    return Plural$1.Few;
                if (!(n === 0) && n % 1e6 === 0)
                    return Plural$1.Many;
                return Plural$1.Other;
            case 'bs':
            case 'hr':
            case 'sr':
                if (v === 0 && i % 10 === 1 && !(i % 100 === 11) || f % 10 === 1 && !(f % 100 === 11))
                    return Plural$1.One;
                if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
                    !(i % 100 >= 12 && i % 100 <= 14) ||
                    f % 10 === Math.floor(f % 10) && f % 10 >= 2 && f % 10 <= 4 &&
                        !(f % 100 >= 12 && f % 100 <= 14))
                    return Plural$1.Few;
                return Plural$1.Other;
            case 'cs':
            case 'sk':
                if (i === 1 && v === 0)
                    return Plural$1.One;
                if (i === Math.floor(i) && i >= 2 && i <= 4 && v === 0)
                    return Plural$1.Few;
                if (!(v === 0))
                    return Plural$1.Many;
                return Plural$1.Other;
            case 'cy':
                if (n === 0)
                    return Plural$1.Zero;
                if (n === 1)
                    return Plural$1.One;
                if (n === 2)
                    return Plural$1.Two;
                if (n === 3)
                    return Plural$1.Few;
                if (n === 6)
                    return Plural$1.Many;
                return Plural$1.Other;
            case 'da':
                if (n === 1 || !(t === 0) && (i === 0 || i === 1))
                    return Plural$1.One;
                return Plural$1.Other;
            case 'dsb':
            case 'hsb':
                if (v === 0 && i % 100 === 1 || f % 100 === 1)
                    return Plural$1.One;
                if (v === 0 && i % 100 === 2 || f % 100 === 2)
                    return Plural$1.Two;
                if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 ||
                    f % 100 === Math.floor(f % 100) && f % 100 >= 3 && f % 100 <= 4)
                    return Plural$1.Few;
                return Plural$1.Other;
            case 'ff':
            case 'fr':
            case 'hy':
            case 'kab':
                if (i === 0 || i === 1)
                    return Plural$1.One;
                return Plural$1.Other;
            case 'fil':
                if (v === 0 && (i === 1 || i === 2 || i === 3) ||
                    v === 0 && !(i % 10 === 4 || i % 10 === 6 || i % 10 === 9) ||
                    !(v === 0) && !(f % 10 === 4 || f % 10 === 6 || f % 10 === 9))
                    return Plural$1.One;
                return Plural$1.Other;
            case 'ga':
                if (n === 1)
                    return Plural$1.One;
                if (n === 2)
                    return Plural$1.Two;
                if (n === Math.floor(n) && n >= 3 && n <= 6)
                    return Plural$1.Few;
                if (n === Math.floor(n) && n >= 7 && n <= 10)
                    return Plural$1.Many;
                return Plural$1.Other;
            case 'gd':
                if (n === 1 || n === 11)
                    return Plural$1.One;
                if (n === 2 || n === 12)
                    return Plural$1.Two;
                if (n === Math.floor(n) && (n >= 3 && n <= 10 || n >= 13 && n <= 19))
                    return Plural$1.Few;
                return Plural$1.Other;
            case 'gv':
                if (v === 0 && i % 10 === 1)
                    return Plural$1.One;
                if (v === 0 && i % 10 === 2)
                    return Plural$1.Two;
                if (v === 0 &&
                    (i % 100 === 0 || i % 100 === 20 || i % 100 === 40 || i % 100 === 60 || i % 100 === 80))
                    return Plural$1.Few;
                if (!(v === 0))
                    return Plural$1.Many;
                return Plural$1.Other;
            case 'he':
                if (i === 1 && v === 0)
                    return Plural$1.One;
                if (i === 2 && v === 0)
                    return Plural$1.Two;
                if (v === 0 && !(n >= 0 && n <= 10) && n % 10 === 0)
                    return Plural$1.Many;
                return Plural$1.Other;
            case 'is':
                if (t === 0 && i % 10 === 1 && !(i % 100 === 11) || !(t === 0))
                    return Plural$1.One;
                return Plural$1.Other;
            case 'ksh':
                if (n === 0)
                    return Plural$1.Zero;
                if (n === 1)
                    return Plural$1.One;
                return Plural$1.Other;
            case 'kw':
            case 'naq':
            case 'se':
            case 'smn':
                if (n === 1)
                    return Plural$1.One;
                if (n === 2)
                    return Plural$1.Two;
                return Plural$1.Other;
            case 'lag':
                if (n === 0)
                    return Plural$1.Zero;
                if ((i === 0 || i === 1) && !(n === 0))
                    return Plural$1.One;
                return Plural$1.Other;
            case 'lt':
                if (n % 10 === 1 && !(n % 100 >= 11 && n % 100 <= 19))
                    return Plural$1.One;
                if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 9 &&
                    !(n % 100 >= 11 && n % 100 <= 19))
                    return Plural$1.Few;
                if (!(f === 0))
                    return Plural$1.Many;
                return Plural$1.Other;
            case 'lv':
            case 'prg':
                if (n % 10 === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19 ||
                    v === 2 && f % 100 === Math.floor(f % 100) && f % 100 >= 11 && f % 100 <= 19)
                    return Plural$1.Zero;
                if (n % 10 === 1 && !(n % 100 === 11) || v === 2 && f % 10 === 1 && !(f % 100 === 11) ||
                    !(v === 2) && f % 10 === 1)
                    return Plural$1.One;
                return Plural$1.Other;
            case 'mk':
                if (v === 0 && i % 10 === 1 || f % 10 === 1)
                    return Plural$1.One;
                return Plural$1.Other;
            case 'mt':
                if (n === 1)
                    return Plural$1.One;
                if (n === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 2 && n % 100 <= 10)
                    return Plural$1.Few;
                if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19)
                    return Plural$1.Many;
                return Plural$1.Other;
            case 'pl':
                if (i === 1 && v === 0)
                    return Plural$1.One;
                if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
                    !(i % 100 >= 12 && i % 100 <= 14))
                    return Plural$1.Few;
                if (v === 0 && !(i === 1) && i % 10 === Math.floor(i % 10) && i % 10 >= 0 && i % 10 <= 1 ||
                    v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 ||
                    v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 12 && i % 100 <= 14)
                    return Plural$1.Many;
                return Plural$1.Other;
            case 'pt':
                if (n === Math.floor(n) && n >= 0 && n <= 2 && !(n === 2))
                    return Plural$1.One;
                return Plural$1.Other;
            case 'ro':
                if (i === 1 && v === 0)
                    return Plural$1.One;
                if (!(v === 0) || n === 0 ||
                    !(n === 1) && n % 100 === Math.floor(n % 100) && n % 100 >= 1 && n % 100 <= 19)
                    return Plural$1.Few;
                return Plural$1.Other;
            case 'ru':
            case 'uk':
                if (v === 0 && i % 10 === 1 && !(i % 100 === 11))
                    return Plural$1.One;
                if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
                    !(i % 100 >= 12 && i % 100 <= 14))
                    return Plural$1.Few;
                if (v === 0 && i % 10 === 0 ||
                    v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 ||
                    v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 11 && i % 100 <= 14)
                    return Plural$1.Many;
                return Plural$1.Other;
            case 'shi':
                if (i === 0 || n === 1)
                    return Plural$1.One;
                if (n === Math.floor(n) && n >= 2 && n <= 10)
                    return Plural$1.Few;
                return Plural$1.Other;
            case 'si':
                if (n === 0 || n === 1 || i === 0 && f === 1)
                    return Plural$1.One;
                return Plural$1.Other;
            case 'sl':
                if (v === 0 && i % 100 === 1)
                    return Plural$1.One;
                if (v === 0 && i % 100 === 2)
                    return Plural$1.Two;
                if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 || !(v === 0))
                    return Plural$1.Few;
                return Plural$1.Other;
            case 'tzm':
                if (n === Math.floor(n) && n >= 0 && n <= 1 || n === Math.floor(n) && n >= 11 && n <= 99)
                    return Plural$1.One;
                return Plural$1.Other;
            // When there is no specification, the default is always "other"
            // Spec: http://cldr.unicode.org/index/cldr-spec/plural-rules
            // > other (required—general plural form — also used if the language only has a single form)
            default:
                return Plural$1.Other;
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function parseCookieValue(cookieStr, name) {
        var e_1, _a;
        name = encodeURIComponent(name);
        try {
            for (var _b = __values(cookieStr.split(';')), _c = _b.next(); !_c.done; _c = _b.next()) {
                var cookie = _c.value;
                var eqIndex = cookie.indexOf('=');
                var _d = __read(eqIndex == -1 ? [cookie, ''] : [cookie.slice(0, eqIndex), cookie.slice(eqIndex + 1)], 2), cookieName = _d[0], cookieValue = _d[1];
                if (cookieName.trim() === name) {
                    return decodeURIComponent(cookieValue);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @ngModule CommonModule
     *
     * @usageNotes
     * ```
     *     <some-element [ngClass]="'first second'">...</some-element>
     *
     *     <some-element [ngClass]="['first', 'second']">...</some-element>
     *
     *     <some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>
     *
     *     <some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>
     *
     *     <some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
     * ```
     *
     * @description
     *
     * Adds and removes CSS classes on an HTML element.
     *
     * The CSS classes are updated as follows, depending on the type of the expression evaluation:
     * - `string` - the CSS classes listed in the string (space delimited) are added,
     * - `Array` - the CSS classes declared as Array elements are added,
     * - `Object` - keys are CSS classes that get added when the expression given in the value
     *              evaluates to a truthy value, otherwise they are removed.
     *
     * @publicApi
     */
    var NgClass$1 = /** @class */ (function () {
        function NgClass(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer) {
            this._iterableDiffers = _iterableDiffers;
            this._keyValueDiffers = _keyValueDiffers;
            this._ngEl = _ngEl;
            this._renderer = _renderer;
            this._initialClasses = [];
        }
        Object.defineProperty(NgClass.prototype, "klass", {
            set: function (value) {
                this._removeClasses(this._initialClasses);
                this._initialClasses = typeof value === 'string' ? value.split(/\s+/) : [];
                this._applyClasses(this._initialClasses);
                this._applyClasses(this._rawClass);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgClass.prototype, "ngClass", {
            set: function (value) {
                this._removeClasses(this._rawClass);
                this._applyClasses(this._initialClasses);
                this._iterableDiffer = null;
                this._keyValueDiffer = null;
                this._rawClass = typeof value === 'string' ? value.split(/\s+/) : value;
                if (this._rawClass) {
                    if (core.ɵisListLikeIterable(this._rawClass)) {
                        this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create();
                    }
                    else {
                        this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create();
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        NgClass.prototype.ngDoCheck = function () {
            if (this._iterableDiffer) {
                var iterableChanges = this._iterableDiffer.diff(this._rawClass);
                if (iterableChanges) {
                    this._applyIterableChanges(iterableChanges);
                }
            }
            else if (this._keyValueDiffer) {
                var keyValueChanges = this._keyValueDiffer.diff(this._rawClass);
                if (keyValueChanges) {
                    this._applyKeyValueChanges(keyValueChanges);
                }
            }
        };
        NgClass.prototype._applyKeyValueChanges = function (changes) {
            var _this = this;
            changes.forEachAddedItem(function (record) { return _this._toggleClass(record.key, record.currentValue); });
            changes.forEachChangedItem(function (record) { return _this._toggleClass(record.key, record.currentValue); });
            changes.forEachRemovedItem(function (record) {
                if (record.previousValue) {
                    _this._toggleClass(record.key, false);
                }
            });
        };
        NgClass.prototype._applyIterableChanges = function (changes) {
            var _this = this;
            changes.forEachAddedItem(function (record) {
                if (typeof record.item === 'string') {
                    _this._toggleClass(record.item, true);
                }
                else {
                    throw new Error("NgClass can only toggle CSS classes expressed as strings, got " + core.ɵstringify(record.item));
                }
            });
            changes.forEachRemovedItem(function (record) { return _this._toggleClass(record.item, false); });
        };
        /**
         * Applies a collection of CSS classes to the DOM element.
         *
         * For argument of type Set and Array CSS class names contained in those collections are always
         * added.
         * For argument of type Map CSS class name in the map's key is toggled based on the value (added
         * for truthy and removed for falsy).
         */
        NgClass.prototype._applyClasses = function (rawClassVal) {
            var _this = this;
            if (rawClassVal) {
                if (Array.isArray(rawClassVal) || rawClassVal instanceof Set) {
                    rawClassVal.forEach(function (klass) { return _this._toggleClass(klass, true); });
                }
                else {
                    Object.keys(rawClassVal).forEach(function (klass) { return _this._toggleClass(klass, !!rawClassVal[klass]); });
                }
            }
        };
        /**
         * Removes a collection of CSS classes from the DOM element. This is mostly useful for cleanup
         * purposes.
         */
        NgClass.prototype._removeClasses = function (rawClassVal) {
            var _this = this;
            if (rawClassVal) {
                if (Array.isArray(rawClassVal) || rawClassVal instanceof Set) {
                    rawClassVal.forEach(function (klass) { return _this._toggleClass(klass, false); });
                }
                else {
                    Object.keys(rawClassVal).forEach(function (klass) { return _this._toggleClass(klass, false); });
                }
            }
        };
        NgClass.prototype._toggleClass = function (klass, enabled) {
            var _this = this;
            klass = klass.trim();
            if (klass) {
                klass.split(/\s+/g).forEach(function (klass) {
                    if (enabled) {
                        _this._renderer.addClass(_this._ngEl.nativeElement, klass);
                    }
                    else {
                        _this._renderer.removeClass(_this._ngEl.nativeElement, klass);
                    }
                });
            }
        };
        __decorate([
            core.Input('class'),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], NgClass.prototype, "klass", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], NgClass.prototype, "ngClass", null);
        NgClass = __decorate([
            core.Directive({ selector: '[ngClass]' }),
            __metadata("design:paramtypes", [core.IterableDiffers, core.KeyValueDiffers,
                core.ElementRef, core.Renderer2])
        ], NgClass);
        return NgClass;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Instantiates a single {@link Component} type and inserts its Host View into current View.
     * `NgComponentOutlet` provides a declarative approach for dynamic component creation.
     *
     * `NgComponentOutlet` requires a component type, if a falsy value is set the view will clear and
     * any existing component will get destroyed.
     *
     * @usageNotes
     *
     * ### Fine tune control
     *
     * You can control the component creation process by using the following optional attributes:
     *
     * * `ngComponentOutletInjector`: Optional custom {@link Injector} that will be used as parent for
     * the Component. Defaults to the injector of the current view container.
     *
     * * `ngComponentOutletContent`: Optional list of projectable nodes to insert into the content
     * section of the component, if exists.
     *
     * * `ngComponentOutletNgModuleFactory`: Optional module factory to allow dynamically loading other
     * module, then load a component from that module.
     *
     * ### Syntax
     *
     * Simple
     * ```
     * <ng-container *ngComponentOutlet="componentTypeExpression"></ng-container>
     * ```
     *
     * Customized injector/content
     * ```
     * <ng-container *ngComponentOutlet="componentTypeExpression;
     *                                   injector: injectorExpression;
     *                                   content: contentNodesExpression;">
     * </ng-container>
     * ```
     *
     * Customized ngModuleFactory
     * ```
     * <ng-container *ngComponentOutlet="componentTypeExpression;
     *                                   ngModuleFactory: moduleFactory;">
     * </ng-container>
     * ```
     *
     * ### A simple example
     *
     * {@example common/ngComponentOutlet/ts/module.ts region='SimpleExample'}
     *
     * A more complete example with additional options:
     *
     * {@example common/ngComponentOutlet/ts/module.ts region='CompleteExample'}

     * A more complete example with ngModuleFactory:
     *
     * {@example common/ngComponentOutlet/ts/module.ts region='NgModuleFactoryExample'}
     *
     * @publicApi
     * @ngModule CommonModule
     */
    var NgComponentOutlet$1 = /** @class */ (function () {
        function NgComponentOutlet(_viewContainerRef) {
            this._viewContainerRef = _viewContainerRef;
            this._componentRef = null;
            this._moduleRef = null;
        }
        NgComponentOutlet.prototype.ngOnChanges = function (changes) {
            this._viewContainerRef.clear();
            this._componentRef = null;
            if (this.ngComponentOutlet) {
                var elInjector = this.ngComponentOutletInjector || this._viewContainerRef.parentInjector;
                if (changes['ngComponentOutletNgModuleFactory']) {
                    if (this._moduleRef)
                        this._moduleRef.destroy();
                    if (this.ngComponentOutletNgModuleFactory) {
                        var parentModule = elInjector.get(core.NgModuleRef);
                        this._moduleRef = this.ngComponentOutletNgModuleFactory.create(parentModule.injector);
                    }
                    else {
                        this._moduleRef = null;
                    }
                }
                var componentFactoryResolver = this._moduleRef ? this._moduleRef.componentFactoryResolver :
                    elInjector.get(core.ComponentFactoryResolver);
                var componentFactory = componentFactoryResolver.resolveComponentFactory(this.ngComponentOutlet);
                this._componentRef = this._viewContainerRef.createComponent(componentFactory, this._viewContainerRef.length, elInjector, this.ngComponentOutletContent);
            }
        };
        NgComponentOutlet.prototype.ngOnDestroy = function () {
            if (this._moduleRef)
                this._moduleRef.destroy();
        };
        __decorate([
            core.Input(),
            __metadata("design:type", core.Type)
        ], NgComponentOutlet.prototype, "ngComponentOutlet", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.Injector)
        ], NgComponentOutlet.prototype, "ngComponentOutletInjector", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], NgComponentOutlet.prototype, "ngComponentOutletContent", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.NgModuleFactory)
        ], NgComponentOutlet.prototype, "ngComponentOutletNgModuleFactory", void 0);
        NgComponentOutlet = __decorate([
            core.Directive({ selector: '[ngComponentOutlet]' }),
            __metadata("design:paramtypes", [core.ViewContainerRef])
        ], NgComponentOutlet);
        return NgComponentOutlet;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @publicApi
     */
    var NgForOfContext$1 = /** @class */ (function () {
        function NgForOfContext($implicit, ngForOf, index, count) {
            this.$implicit = $implicit;
            this.ngForOf = ngForOf;
            this.index = index;
            this.count = count;
        }
        Object.defineProperty(NgForOfContext.prototype, "first", {
            get: function () { return this.index === 0; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForOfContext.prototype, "last", {
            get: function () { return this.index === this.count - 1; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForOfContext.prototype, "even", {
            get: function () { return this.index % 2 === 0; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForOfContext.prototype, "odd", {
            get: function () { return !this.even; },
            enumerable: true,
            configurable: true
        });
        return NgForOfContext;
    }());
    /**
     * A [structural directive](guide/structural-directives) that renders
     * a template for each item in a collection.
     * The directive is placed on an element, which becomes the parent
     * of the cloned templates.
     *
     * The `ngForOf` is generally used in the
     * [shorthand form](guide/structural-directives#the-asterisk--prefix) `*ngFor`.
     * In this form, the template to be rendered for each iteration is the content
     * of an anchor element containing the directive.
     *
     * The following example shows the shorthand syntax with some options,
     * contained in an `<li>` element.
     *
     * ```
     * <li *ngFor="let item of items; index as i; trackBy: trackByFn">...</li>
     * ```
     *
     * The shorthand form expands into a long form that uses the `ngForOf` selector
     * on an `<ng-template>` element.
     * The content of the `<ng-template>` element is the `<li>` element that held the
     * short-form directive.
     *
     * Here is the expanded version of the short-form example.
     *
     * ```
     * <ng-template ngFor let-item [ngForOf]="items" let-i="index" [ngForTrackBy]="trackByFn">
     *   <li>...</li>
     * </ng-template>
     * ```
     *
     * Angular automatically expands the shorthand syntax as it compiles the template.
     * The context for each embedded view is logically merged to the current component
     * context according to its lexical position.
     *
     * When using the shorthand syntax, Angular allows only [one structural directive
     * on an element](guide/structural-directives#one-structural-directive-per-host-element).
     * If you want to iterate conditionally, for example,
     * put the `*ngIf` on a container element that wraps the `*ngFor` element.
     * For futher discussion, see
     * [Structural Directives](guide/structural-directives#one-per-element).
     *
     * @usageNotes
     *
     * ### Local variables
     *
     * `NgForOf` provides exported values that can be aliased to local variables.
     * For example:
     *
     *  ```
     * <li *ngFor="let user of userObservable | async as users; index as i; first as isFirst">
     *    {{i}}/{{users.length}}. {{user}} <span *ngIf="isFirst">default</span>
     * </li>
     * ```
     *
     * The following exported values can be aliased to local variables:
     *
     * - `$implicit: T`: The value of the individual items in the iterable (`ngForOf`).
     * - `ngForOf: NgIterable<T>`: The value of the iterable expression. Useful when the expression is
     * more complex then a property access, for example when using the async pipe (`userStreams |
     * async`).
     * - `index: number`: The index of the current item in the iterable.
     * - `first: boolean`: True when the item is the first item in the iterable.
     * - `last: boolean`: True when the item is the last item in the iterable.
     * - `even: boolean`: True when the item has an even index in the iterable.
     * - `odd: boolean`: True when the item has an odd index in the iterable.
     *
     * ### Change propagation
     *
     * When the contents of the iterator changes, `NgForOf` makes the corresponding changes to the DOM:
     *
     * * When an item is added, a new instance of the template is added to the DOM.
     * * When an item is removed, its template instance is removed from the DOM.
     * * When items are reordered, their respective templates are reordered in the DOM.
     *
     * Angular uses object identity to track insertions and deletions within the iterator and reproduce
     * those changes in the DOM. This has important implications for animations and any stateful
     * controls that are present, such as `<input>` elements that accept user input. Inserted rows can
     * be animated in, deleted rows can be animated out, and unchanged rows retain any unsaved state
     * such as user input.
     * For more on animations, see [Transitions and Triggers](guide/transition-and-triggers).
     *
     * The identities of elements in the iterator can change while the data does not.
     * This can happen, for example, if the iterator is produced from an RPC to the server, and that
     * RPC is re-run. Even if the data hasn't changed, the second response produces objects with
     * different identities, and Angular must tear down the entire DOM and rebuild it (as if all old
     * elements were deleted and all new elements inserted).
     *
     * To avoid this expensive operation, you can customize the default tracking algorithm.
     * by supplying the `trackBy` option to `NgForOf`.
     * `trackBy` takes a function that has two arguments: `index` and `item`.
     * If `trackBy` is given, Angular tracks changes by the return value of the function.
     *
     * @see [Structural Directives](guide/structural-directives)
     * @ngModule CommonModule
     * @publicApi
     */
    var NgForOf$1 = /** @class */ (function () {
        function NgForOf(_viewContainer, _template, _differs) {
            this._viewContainer = _viewContainer;
            this._template = _template;
            this._differs = _differs;
            this._ngForOfDirty = true;
            this._differ = null;
        }
        Object.defineProperty(NgForOf.prototype, "ngForOf", {
            set: function (ngForOf) {
                this._ngForOf = ngForOf;
                this._ngForOfDirty = true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForOf.prototype, "ngForTrackBy", {
            get: function () { return this._trackByFn; },
            set: function (fn) {
                if (core.isDevMode() && fn != null && typeof fn !== 'function') {
                    // TODO(vicb): use a log service once there is a public one available
                    if (console && console.warn) {
                        console.warn("trackBy must be a function, but received " + JSON.stringify(fn) + ". " +
                            "See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information.");
                    }
                }
                this._trackByFn = fn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForOf.prototype, "ngForTemplate", {
            set: function (value) {
                // TODO(TS2.1): make TemplateRef<Partial<NgForRowOf<T>>> once we move to TS v2.1
                // The current type is too restrictive; a template that just uses index, for example,
                // should be acceptable.
                if (value) {
                    this._template = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        NgForOf.prototype.ngDoCheck = function () {
            if (this._ngForOfDirty) {
                this._ngForOfDirty = false;
                // React on ngForOf changes only once all inputs have been initialized
                var value = this._ngForOf;
                if (!this._differ && value) {
                    try {
                        this._differ = this._differs.find(value).create(this.ngForTrackBy);
                    }
                    catch (_a) {
                        throw new Error("Cannot find a differ supporting object '" + value + "' of type '" + getTypeNameForDebugging$1(value) + "'. NgFor only supports binding to Iterables such as Arrays.");
                    }
                }
            }
            if (this._differ) {
                var changes = this._differ.diff(this._ngForOf);
                if (changes)
                    this._applyChanges(changes);
            }
        };
        NgForOf.prototype._applyChanges = function (changes) {
            var _this = this;
            var insertTuples = [];
            changes.forEachOperation(function (item, adjustedPreviousIndex, currentIndex) {
                if (item.previousIndex == null) {
                    var view = _this._viewContainer.createEmbeddedView(_this._template, new NgForOfContext$1(null, _this._ngForOf, -1, -1), currentIndex);
                    var tuple = new RecordViewTuple$1(item, view);
                    insertTuples.push(tuple);
                }
                else if (currentIndex == null) {
                    _this._viewContainer.remove(adjustedPreviousIndex);
                }
                else {
                    var view = _this._viewContainer.get(adjustedPreviousIndex);
                    _this._viewContainer.move(view, currentIndex);
                    var tuple = new RecordViewTuple$1(item, view);
                    insertTuples.push(tuple);
                }
            });
            for (var i = 0; i < insertTuples.length; i++) {
                this._perViewChange(insertTuples[i].view, insertTuples[i].record);
            }
            for (var i = 0, ilen = this._viewContainer.length; i < ilen; i++) {
                var viewRef = this._viewContainer.get(i);
                viewRef.context.index = i;
                viewRef.context.count = ilen;
                viewRef.context.ngForOf = this._ngForOf;
            }
            changes.forEachIdentityChange(function (record) {
                var viewRef = _this._viewContainer.get(record.currentIndex);
                viewRef.context.$implicit = record.item;
            });
        };
        NgForOf.prototype._perViewChange = function (view, record) {
            view.context.$implicit = record.item;
        };
        /**
         * Asserts the correct type of the context for the template that `NgForOf` will render.
         *
         * The presence of this method is a signal to the Ivy template type-check compiler that the
         * `NgForOf` structural directive renders its template with a specific context type.
         */
        NgForOf.ngTemplateContextGuard = function (dir, ctx) {
            return true;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], NgForOf.prototype, "ngForOf", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Function])
        ], NgForOf.prototype, "ngForTrackBy", null);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef),
            __metadata("design:paramtypes", [core.TemplateRef])
        ], NgForOf.prototype, "ngForTemplate", null);
        NgForOf = __decorate([
            core.Directive({ selector: '[ngFor][ngForOf]' }),
            __metadata("design:paramtypes", [core.ViewContainerRef, core.TemplateRef,
                core.IterableDiffers])
        ], NgForOf);
        return NgForOf;
    }());
    var RecordViewTuple$1 = /** @class */ (function () {
        function RecordViewTuple(record, view) {
            this.record = record;
            this.view = view;
        }
        return RecordViewTuple;
    }());
    function getTypeNameForDebugging$1(type) {
        return type['name'] || typeof type;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A structural directive that conditionally includes a template based on the value of
     * an expression coerced to Boolean.
     * When the expression evaluates to true, Angular renders the template
     * provided in a `then` clause, and when  false or null,
     * Angular renders the template provided in an optional `else` clause. The default
     * template for the `else` clause is blank.
     *
     * A [shorthand form](guide/structural-directives#the-asterisk--prefix) of the directive,
     * `*ngIf="condition"`, is generally used, provided
     * as an attribute of the anchor element for the inserted template.
     * Angular expands this into a more explicit version, in which the anchor element
     * is contained in an `<ng-template>` element.
     *
     * Simple form with shorthand syntax:
     *
     * ```
     * <div *ngIf="condition">Content to render when condition is true.</div>
     * ```
     *
     * Simple form with expanded syntax:
     *
     * ```
     * <ng-template [ngIf]="condition"><div>Content to render when condition is
     * true.</div></ng-template>
     * ```
     *
     * Form with an "else" block:
     *
     * ```
     * <div *ngIf="condition; else elseBlock">Content to render when condition is true.</div>
     * <ng-template #elseBlock>Content to render when condition is false.</ng-template>
     * ```
     *
     * Shorthand form with "then" and "else" blocks:
     *
     * ```
     * <div *ngIf="condition; then thenBlock else elseBlock"></div>
     * <ng-template #thenBlock>Content to render when condition is true.</ng-template>
     * <ng-template #elseBlock>Content to render when condition is false.</ng-template>
     * ```
     *
     * Form with storing the value locally:
     *
     * ```
     * <div *ngIf="condition as value; else elseBlock">{{value}}</div>
     * <ng-template #elseBlock>Content to render when value is null.</ng-template>
     * ```
     *
     * @usageNotes
     *
     * The `*ngIf` directive is most commonly used to conditionally show an inline template,
     * as seen in the following  example.
     * The default `else` template is blank.
     *
     * {@example common/ngIf/ts/module.ts region='NgIfSimple'}
     *
     * ### Showing an alternative template using `else`
     *
     * To display a template when `expression` evaluates to false, use an `else` template
     * binding as shown in the following example.
     * The `else` binding points to an `<ng-template>`  element labeled `#elseBlock`.
     * The template can be defined anywhere in the component view, but is typically placed right after
     * `ngIf` for readability.
     *
     * {@example common/ngIf/ts/module.ts region='NgIfElse'}
     *
     * ### Using an external `then` template
     *
     * In the previous example, the then-clause template is specified inline, as the content of the
     * tag that contains the `ngIf` directive. You can also specify a template that is defined
     * externally, by referencing a labeled `<ng-template>` element. When you do this, you can
     * change which template to use at runtime, as shown in the following example.
     *
     * {@example common/ngIf/ts/module.ts region='NgIfThenElse'}
     *
     * ### Storing a conditional result in a variable
     *
     * You might want to show a set of properties from the same object. If you are waiting
     * for asynchronous data, the object can be undefined.
     * In this case, you can use `ngIf` and store the result of the condition in a local
     * variable as shown in the the following example.
     *
     * {@example common/ngIf/ts/module.ts region='NgIfAs'}
     *
     * This code uses only one `AsyncPipe`, so only one subscription is created.
     * The conditional statement stores the result of `userStream|async` in the local variable `user`.
     * You can then bind the local `user` repeatedly.
     *
     * The conditional displays the data only if `userStream` returns a value,
     * so you don't need to use the
     * [safe-navigation-operator](guide/template-syntax#safe-navigation-operator) (`?.`)
     * to guard against null values when accessing properties.
     * You can display an alternative template while waiting for the data.
     *
     * ### Shorthand syntax
     *
     * The shorthand syntax `*ngIf` expands into two separate template specifications
     * for the "then" and "else" clauses. For example, consider the following shorthand statement,
     * that is meant to show a loading page while waiting for data to be loaded.
     *
     * ```
     * <div class="hero-list" *ngIf="heroes else loading">
     *  ...
     * </div>
     *
     * <ng-template #loading>
     *  <div>Loading...</div>
     * </ng-template>
     * ```
     *
     * You can see that the "else" clause references the `<ng-template>`
     * with the `#loading` label, and the template for the "then" clause
     * is provided as the content of the anchor element.
     *
     * However, when Angular expands the shorthand syntax, it creates
     * another `<ng-template>` tag, with `ngIf` and `ngIfElse` directives.
     * The anchor element containing the template for the "then" clause becomes
     * the content of this unlabeled `<ng-template>` tag.
     *
     * ```
     * <ng-template [ngIf]="hero-list" [ngIfElse]="loading">
     *  <div class="hero-list">
     *   ...
     *  </div>
     * </ng-template>
     *
     * <ng-template #loading>
     *  <div>Loading...</div>
     * </ng-template>
     * ```
     *
     * The presence of the implicit template object has implications for the nesting of
     * structural directives. For more on this subject, see
     * [Structural Directives](https://angular.io/guide/structural-directives#one-per-element).
     *
     * @ngModule CommonModule
     * @publicApi
     */
    var NgIf$1 = /** @class */ (function () {
        function NgIf(_viewContainer, templateRef) {
            this._viewContainer = _viewContainer;
            this._context = new NgIfContext$1();
            this._thenTemplateRef = null;
            this._elseTemplateRef = null;
            this._thenViewRef = null;
            this._elseViewRef = null;
            this._thenTemplateRef = templateRef;
        }
        Object.defineProperty(NgIf.prototype, "ngIf", {
            set: function (condition) {
                this._context.$implicit = this._context.ngIf = condition;
                this._updateView();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgIf.prototype, "ngIfThen", {
            set: function (templateRef) {
                assertTemplate$1('ngIfThen', templateRef);
                this._thenTemplateRef = templateRef;
                this._thenViewRef = null; // clear previous view if any.
                this._updateView();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgIf.prototype, "ngIfElse", {
            set: function (templateRef) {
                assertTemplate$1('ngIfElse', templateRef);
                this._elseTemplateRef = templateRef;
                this._elseViewRef = null; // clear previous view if any.
                this._updateView();
            },
            enumerable: true,
            configurable: true
        });
        NgIf.prototype._updateView = function () {
            if (this._context.$implicit) {
                if (!this._thenViewRef) {
                    this._viewContainer.clear();
                    this._elseViewRef = null;
                    if (this._thenTemplateRef) {
                        this._thenViewRef =
                            this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
                    }
                }
            }
            else {
                if (!this._elseViewRef) {
                    this._viewContainer.clear();
                    this._thenViewRef = null;
                    if (this._elseTemplateRef) {
                        this._elseViewRef =
                            this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context);
                    }
                }
            }
        };
        /**
         * Assert the correct type of the expression bound to the `ngIf` input within the template.
         *
         * The presence of this method is a signal to the Ivy template type check compiler that when the
         * `NgIf` structural directive renders its template, the type of the expression bound to `ngIf`
         * should be narrowed in some way. For `NgIf`, it is narrowed to be non-null, which allows the
         * strictNullChecks feature of TypeScript to work with `NgIf`.
         */
        NgIf.ngTemplateGuard_ngIf = function (dir, expr) { return true; };
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], NgIf.prototype, "ngIf", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], NgIf.prototype, "ngIfThen", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], NgIf.prototype, "ngIfElse", null);
        NgIf = __decorate([
            core.Directive({ selector: '[ngIf]' }),
            __metadata("design:paramtypes", [core.ViewContainerRef, core.TemplateRef])
        ], NgIf);
        return NgIf;
    }());
    /**
     * @publicApi
     */
    var NgIfContext$1 = /** @class */ (function () {
        function NgIfContext() {
            this.$implicit = null;
            this.ngIf = null;
        }
        return NgIfContext;
    }());
    function assertTemplate$1(property, templateRef) {
        var isTemplateRefOrNull = !!(!templateRef || templateRef.createEmbeddedView);
        if (!isTemplateRefOrNull) {
            throw new Error(property + " must be a TemplateRef, but received '" + core.ɵstringify(templateRef) + "'.");
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var SwitchView$1 = /** @class */ (function () {
        function SwitchView(_viewContainerRef, _templateRef) {
            this._viewContainerRef = _viewContainerRef;
            this._templateRef = _templateRef;
            this._created = false;
        }
        SwitchView.prototype.create = function () {
            this._created = true;
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        };
        SwitchView.prototype.destroy = function () {
            this._created = false;
            this._viewContainerRef.clear();
        };
        SwitchView.prototype.enforceState = function (created) {
            if (created && !this._created) {
                this.create();
            }
            else if (!created && this._created) {
                this.destroy();
            }
        };
        return SwitchView;
    }());
    /**
     * @ngModule CommonModule
     *
     * @description A structural directive that adds or removes templates (displaying or hiding views)
     * when the next match expression matches the switch expression.
     *
     * The `[ngSwitch]` directive on a container specifies an expression to match against.
     * The expressions to match are provided by `ngSwitchCase` directives on views within the container.
     * - Every view that matches is rendered.
     * - If there are no matches, a view with the `ngSwitchDefault` directive is rendered.
     * - Elements within the `[NgSwitch]` statement but outside of any `NgSwitchCase`
     * or `ngSwitchDefault` directive are preserved at the location.
     *
     * @usageNotes
     * Define a container element for the directive, and specify the switch expression
     * to match against as an attribute:
     *
     * ```
     * <container-element [ngSwitch]="switch_expression">
     * ```
     *
     * Within the container, `*ngSwitchCase` statements specify the match expressions
     * as attributes. Include `*ngSwitchDefault` as the final case.
     *
     * ```
     * <container-element [ngSwitch]="switch_expression">
     *    <some-element *ngSwitchCase="match_expression_1">...</some-element>
     * ...
     *    <some-element *ngSwitchDefault>...</some-element>
     * </container-element>
     * ```
     *
     * ### Usage Examples
     *
     * The following example shows how to use more than one case to display the same view:
     *
     * ```
     * <container-element [ngSwitch]="switch_expression">
     *   <!-- the same view can be shown in more than one case -->
     *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
     *   <some-element *ngSwitchCase="match_expression_2">...</some-element>
     *   <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
     *   <!--default case when there are no matches -->
     *   <some-element *ngSwitchDefault>...</some-element>
     * </container-element>
     * ```
     *
     * The following example shows how cases can be nested:
     * ```
     * <container-element [ngSwitch]="switch_expression">
     *       <some-element *ngSwitchCase="match_expression_1">...</some-element>
     *       <some-element *ngSwitchCase="match_expression_2">...</some-element>
     *       <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
     *       <ng-container *ngSwitchCase="match_expression_3">
     *         <!-- use a ng-container to group multiple root nodes -->
     *         <inner-element></inner-element>
     *         <inner-other-element></inner-other-element>
     *       </ng-container>
     *       <some-element *ngSwitchDefault>...</some-element>
     *     </container-element>
     * ```
     *
     * @publicApi
     * @see `NgSwitchCase`
     * @see `NgSwitchDefault`
     * @see [Stuctural Directives](guide/structural-directives)
     *
     */
    var NgSwitch$1 = /** @class */ (function () {
        function NgSwitch() {
            this._defaultUsed = false;
            this._caseCount = 0;
            this._lastCaseCheckIndex = 0;
            this._lastCasesMatched = false;
        }
        Object.defineProperty(NgSwitch.prototype, "ngSwitch", {
            set: function (newValue) {
                this._ngSwitch = newValue;
                if (this._caseCount === 0) {
                    this._updateDefaultCases(true);
                }
            },
            enumerable: true,
            configurable: true
        });
        /** @internal */
        NgSwitch.prototype._addCase = function () { return this._caseCount++; };
        /** @internal */
        NgSwitch.prototype._addDefault = function (view) {
            if (!this._defaultViews) {
                this._defaultViews = [];
            }
            this._defaultViews.push(view);
        };
        /** @internal */
        NgSwitch.prototype._matchCase = function (value) {
            var matched = value == this._ngSwitch;
            this._lastCasesMatched = this._lastCasesMatched || matched;
            this._lastCaseCheckIndex++;
            if (this._lastCaseCheckIndex === this._caseCount) {
                this._updateDefaultCases(!this._lastCasesMatched);
                this._lastCaseCheckIndex = 0;
                this._lastCasesMatched = false;
            }
            return matched;
        };
        NgSwitch.prototype._updateDefaultCases = function (useDefault) {
            if (this._defaultViews && useDefault !== this._defaultUsed) {
                this._defaultUsed = useDefault;
                for (var i = 0; i < this._defaultViews.length; i++) {
                    var defaultView = this._defaultViews[i];
                    defaultView.enforceState(useDefault);
                }
            }
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], NgSwitch.prototype, "ngSwitch", null);
        NgSwitch = __decorate([
            core.Directive({ selector: '[ngSwitch]' })
        ], NgSwitch);
        return NgSwitch;
    }());
    /**
     * @ngModule CommonModule
     *
     * @description
     * Provides a switch case expression to match against an enclosing `ngSwitch` expression.
     * When the expressions match, the given `NgSwitchCase` template is rendered.
     * If multiple match expressions match the switch expression value, all of them are displayed.
     *
     * @usageNotes
     *
     * Within a switch container, `*ngSwitchCase` statements specify the match expressions
     * as attributes. Include `*ngSwitchDefault` as the final case.
     *
     * ```
     * <container-element [ngSwitch]="switch_expression">
     *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
     *   ...
     *   <some-element *ngSwitchDefault>...</some-element>
     * </container-element>
     * ```
     *
     * Each switch-case statement contains an in-line HTML template or template reference
     * that defines the subtree to be selected if the value of the match expression
     * matches the value of the switch expression.
     *
     * Unlike JavaScript, which uses strict equality, Angular uses loose equality.
     * This means that the empty string, `""` matches 0.
     *
     * @publicApi
     * @see `NgSwitch`
     * @see `NgSwitchDefault`
     *
     */
    var NgSwitchCase$1 = /** @class */ (function () {
        function NgSwitchCase(viewContainer, templateRef, ngSwitch) {
            this.ngSwitch = ngSwitch;
            ngSwitch._addCase();
            this._view = new SwitchView$1(viewContainer, templateRef);
        }
        /**
         * Performs case matching. For internal use only.
         */
        NgSwitchCase.prototype.ngDoCheck = function () { this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase)); };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], NgSwitchCase.prototype, "ngSwitchCase", void 0);
        NgSwitchCase = __decorate([
            core.Directive({ selector: '[ngSwitchCase]' }),
            __param(2, core.Host()),
            __metadata("design:paramtypes", [core.ViewContainerRef, core.TemplateRef,
                NgSwitch$1])
        ], NgSwitchCase);
        return NgSwitchCase;
    }());
    /**
     * @ngModule CommonModule
     *
     * @description
     *
     * Creates a view that is rendered when no `NgSwitchCase` expressions
     * match the `NgSwitch` expression.
     * This statement should be the final case in an `NgSwitch`.
     *
     * @publicApi
     * @see `NgSwitch`
     * @see `NgSwitchCase`
     *
     */
    var NgSwitchDefault$1 = /** @class */ (function () {
        function NgSwitchDefault(viewContainer, templateRef, ngSwitch) {
            ngSwitch._addDefault(new SwitchView$1(viewContainer, templateRef));
        }
        NgSwitchDefault = __decorate([
            core.Directive({ selector: '[ngSwitchDefault]' }),
            __param(2, core.Host()),
            __metadata("design:paramtypes", [core.ViewContainerRef, core.TemplateRef,
                NgSwitch$1])
        ], NgSwitchDefault);
        return NgSwitchDefault;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @ngModule CommonModule
     *
     * @usageNotes
     * ```
     * <some-element [ngPlural]="value">
     *   <ng-template ngPluralCase="=0">there is nothing</ng-template>
     *   <ng-template ngPluralCase="=1">there is one</ng-template>
     *   <ng-template ngPluralCase="few">there are a few</ng-template>
     * </some-element>
     * ```
     *
     * @description
     *
     * Adds / removes DOM sub-trees based on a numeric value. Tailored for pluralization.
     *
     * Displays DOM sub-trees that match the switch expression value, or failing that, DOM sub-trees
     * that match the switch expression's pluralization category.
     *
     * To use this directive you must provide a container element that sets the `[ngPlural]` attribute
     * to a switch expression. Inner elements with a `[ngPluralCase]` will display based on their
     * expression:
     * - if `[ngPluralCase]` is set to a value starting with `=`, it will only display if the value
     *   matches the switch expression exactly,
     * - otherwise, the view will be treated as a "category match", and will only display if exact
     *   value matches aren't found and the value maps to its category for the defined locale.
     *
     * See http://cldr.unicode.org/index/cldr-spec/plural-rules
     *
     * @publicApi
     */
    var NgPlural$1 = /** @class */ (function () {
        function NgPlural(_localization) {
            this._localization = _localization;
            this._caseViews = {};
        }
        Object.defineProperty(NgPlural.prototype, "ngPlural", {
            set: function (value) {
                this._switchValue = value;
                this._updateView();
            },
            enumerable: true,
            configurable: true
        });
        NgPlural.prototype.addCase = function (value, switchView) { this._caseViews[value] = switchView; };
        NgPlural.prototype._updateView = function () {
            this._clearViews();
            var cases = Object.keys(this._caseViews);
            var key = getPluralCategory$1(this._switchValue, cases, this._localization);
            this._activateView(this._caseViews[key]);
        };
        NgPlural.prototype._clearViews = function () {
            if (this._activeView)
                this._activeView.destroy();
        };
        NgPlural.prototype._activateView = function (view) {
            if (view) {
                this._activeView = view;
                this._activeView.create();
            }
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Number),
            __metadata("design:paramtypes", [Number])
        ], NgPlural.prototype, "ngPlural", null);
        NgPlural = __decorate([
            core.Directive({ selector: '[ngPlural]' }),
            __metadata("design:paramtypes", [NgLocalization$1])
        ], NgPlural);
        return NgPlural;
    }());
    /**
     * @ngModule CommonModule
     *
     * @description
     *
     * Creates a view that will be added/removed from the parent {@link NgPlural} when the
     * given expression matches the plural expression according to CLDR rules.
     *
     * @usageNotes
     * ```
     * <some-element [ngPlural]="value">
     *   <ng-template ngPluralCase="=0">...</ng-template>
     *   <ng-template ngPluralCase="other">...</ng-template>
     * </some-element>
     *```
     *
     * See {@link NgPlural} for more details and example.
     *
     * @publicApi
     */
    var NgPluralCase$1 = /** @class */ (function () {
        function NgPluralCase(value, template, viewContainer, ngPlural) {
            this.value = value;
            var isANumber = !isNaN(Number(value));
            ngPlural.addCase(isANumber ? "=" + value : value, new SwitchView$1(viewContainer, template));
        }
        NgPluralCase = __decorate([
            core.Directive({ selector: '[ngPluralCase]' }),
            __param(0, core.Attribute('ngPluralCase')),
            __param(3, core.Host()),
            __metadata("design:paramtypes", [String, core.TemplateRef,
                core.ViewContainerRef, NgPlural$1])
        ], NgPluralCase);
        return NgPluralCase;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @ngModule CommonModule
     *
     * @usageNotes
     *
     * Set the font of the containing element to the result of an expression.
     *
     * ```
     * <some-element [ngStyle]="{'font-style': styleExp}">...</some-element>
     * ```
     *
     * Set the width of the containing element to a pixel value returned by an expression.
     *
     * ```
     * <some-element [ngStyle]="{'max-width.px': widthExp}">...</some-element>
     * ```
     *
     * Set a collection of style values using an expression that returns key-value pairs.
     *
     * ```
     * <some-element [ngStyle]="objExp">...</some-element>
     * ```
     *
     * @description
     *
     * An attribute directive that updates styles for the containing HTML element.
     * Sets one or more style properties, specified as colon-separated key-value pairs.
     * The key is a style name, with an optional `.<unit>` suffix
     * (such as 'top.px', 'font-style.em').
     * The value is an expression to be evaluated.
     * The resulting non-null value, expressed in the given unit,
     * is assigned to the given style property.
     * If the result of evaluation is null, the corresponding style is removed.
     *
     * @publicApi
     */
    var NgStyle$1 = /** @class */ (function () {
        function NgStyle(_differs, _ngEl, _renderer) {
            this._differs = _differs;
            this._ngEl = _ngEl;
            this._renderer = _renderer;
        }
        Object.defineProperty(NgStyle.prototype, "ngStyle", {
            set: function (
            /**
             * A map of style properties, specified as colon-separated
             * key-value pairs.
             * * The key is a style name, with an optional `.<unit>` suffix
             *    (such as 'top.px', 'font-style.em').
             * * The value is an expression to be evaluated.
             */
            values) {
                this._ngStyle = values;
                if (!this._differ && values) {
                    this._differ = this._differs.find(values).create();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Applies the new styles if needed.
         */
        NgStyle.prototype.ngDoCheck = function () {
            if (this._differ) {
                var changes = this._differ.diff(this._ngStyle);
                if (changes) {
                    this._applyChanges(changes);
                }
            }
        };
        NgStyle.prototype._applyChanges = function (changes) {
            var _this = this;
            changes.forEachRemovedItem(function (record) { return _this._setStyle(record.key, null); });
            changes.forEachAddedItem(function (record) { return _this._setStyle(record.key, record.currentValue); });
            changes.forEachChangedItem(function (record) { return _this._setStyle(record.key, record.currentValue); });
        };
        NgStyle.prototype._setStyle = function (nameAndUnit, value) {
            var _a = __read(nameAndUnit.split('.'), 2), name = _a[0], unit = _a[1];
            value = value != null && unit ? "" + value + unit : value;
            if (value != null) {
                this._renderer.setStyle(this._ngEl.nativeElement, name, value);
            }
            else {
                this._renderer.removeStyle(this._ngEl.nativeElement, name);
            }
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], NgStyle.prototype, "ngStyle", null);
        NgStyle = __decorate([
            core.Directive({ selector: '[ngStyle]' }),
            __metadata("design:paramtypes", [core.KeyValueDiffers, core.ElementRef, core.Renderer2])
        ], NgStyle);
        return NgStyle;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @ngModule CommonModule
     *
     * @description
     *
     * Inserts an embedded view from a prepared `TemplateRef`.
     *
     * You can attach a context object to the `EmbeddedViewRef` by setting `[ngTemplateOutletContext]`.
     * `[ngTemplateOutletContext]` should be an object, the object's keys will be available for binding
     * by the local template `let` declarations.
     *
     * @usageNotes
     * ```
     * <ng-container *ngTemplateOutlet="templateRefExp; context: contextExp"></ng-container>
     * ```
     *
     * Using the key `$implicit` in the context object will set its value as default.
     *
     * ### Example
     *
     * {@example common/ngTemplateOutlet/ts/module.ts region='NgTemplateOutlet'}
     *
     * @publicApi
     */
    var NgTemplateOutlet$1 = /** @class */ (function () {
        function NgTemplateOutlet(_viewContainerRef) {
            this._viewContainerRef = _viewContainerRef;
        }
        NgTemplateOutlet.prototype.ngOnChanges = function (changes) {
            var recreateView = this._shouldRecreateView(changes);
            if (recreateView) {
                if (this._viewRef) {
                    this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._viewRef));
                }
                if (this.ngTemplateOutlet) {
                    this._viewRef = this._viewContainerRef.createEmbeddedView(this.ngTemplateOutlet, this.ngTemplateOutletContext);
                }
            }
            else {
                if (this._viewRef && this.ngTemplateOutletContext) {
                    this._updateExistingContext(this.ngTemplateOutletContext);
                }
            }
        };
        /**
         * We need to re-create existing embedded view if:
         * - templateRef has changed
         * - context has changes
         *
         * We mark context object as changed when the corresponding object
         * shape changes (new properties are added or existing properties are removed).
         * In other words we consider context with the same properties as "the same" even
         * if object reference changes (see https://github.com/angular/angular/issues/13407).
         */
        NgTemplateOutlet.prototype._shouldRecreateView = function (changes) {
            var ctxChange = changes['ngTemplateOutletContext'];
            return !!changes['ngTemplateOutlet'] || (ctxChange && this._hasContextShapeChanged(ctxChange));
        };
        NgTemplateOutlet.prototype._hasContextShapeChanged = function (ctxChange) {
            var e_1, _a;
            var prevCtxKeys = Object.keys(ctxChange.previousValue || {});
            var currCtxKeys = Object.keys(ctxChange.currentValue || {});
            if (prevCtxKeys.length === currCtxKeys.length) {
                try {
                    for (var currCtxKeys_1 = __values(currCtxKeys), currCtxKeys_1_1 = currCtxKeys_1.next(); !currCtxKeys_1_1.done; currCtxKeys_1_1 = currCtxKeys_1.next()) {
                        var propName = currCtxKeys_1_1.value;
                        if (prevCtxKeys.indexOf(propName) === -1) {
                            return true;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (currCtxKeys_1_1 && !currCtxKeys_1_1.done && (_a = currCtxKeys_1.return)) _a.call(currCtxKeys_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return false;
            }
            else {
                return true;
            }
        };
        NgTemplateOutlet.prototype._updateExistingContext = function (ctx) {
            var e_2, _a;
            try {
                for (var _b = __values(Object.keys(ctx)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var propName = _c.value;
                    this._viewRef.context[propName] = this.ngTemplateOutletContext[propName];
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], NgTemplateOutlet.prototype, "ngTemplateOutletContext", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], NgTemplateOutlet.prototype, "ngTemplateOutlet", void 0);
        NgTemplateOutlet = __decorate([
            core.Directive({ selector: '[ngTemplateOutlet]' }),
            __metadata("design:paramtypes", [core.ViewContainerRef])
        ], NgTemplateOutlet);
        return NgTemplateOutlet;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A collection of Angular directives that are likely to be used in each and every Angular
     * application.
     */
    var COMMON_DIRECTIVES$1 = [
        NgClass$1,
        NgComponentOutlet$1,
        NgForOf$1,
        NgIf$1,
        NgTemplateOutlet$1,
        NgStyle$1,
        NgSwitch$1,
        NgSwitchCase$1,
        NgSwitchDefault$1,
        NgPlural$1,
        NgPluralCase$1,
    ];

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function invalidPipeArgumentError$1(type, value) {
        return Error("InvalidPipeArgument: '" + value + "' for pipe '" + core.ɵstringify(type) + "'");
    }

    var NumberFormatter$1 = /** @class */ (function () {
        function NumberFormatter() {
        }
        NumberFormatter.format = function (num, locale, style, opts) {
            if (opts === void 0) { opts = {}; }
            var minimumIntegerDigits = opts.minimumIntegerDigits, minimumFractionDigits = opts.minimumFractionDigits, maximumFractionDigits = opts.maximumFractionDigits, currency = opts.currency, _a = opts.currencyAsSymbol, currencyAsSymbol = _a === void 0 ? false : _a;
            var options = {
                minimumIntegerDigits: minimumIntegerDigits,
                minimumFractionDigits: minimumFractionDigits,
                maximumFractionDigits: maximumFractionDigits,
                style: NumberFormatStyle$1[style].toLowerCase()
            };
            if (style == NumberFormatStyle$1.Currency) {
                options.currency = typeof currency == 'string' ? currency : undefined;
                options.currencyDisplay = currencyAsSymbol ? 'symbol' : 'code';
            }
            return new Intl.NumberFormat(locale, options).format(num);
        };
        return NumberFormatter;
    }());
    var DATE_FORMATS_SPLIT$1$1 = /((?:[^yMLdHhmsazZEwGjJ']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|J+|j+|m+|s+|a|z|Z|G+|w+))(.*)/;
    var PATTERN_ALIASES$1 = {
        // Keys are quoted so they do not get renamed during closure compilation.
        'yMMMdjms': datePartGetterFactory$1(combine$1([
            digitCondition$1('year', 1),
            nameCondition$1('month', 3),
            digitCondition$1('day', 1),
            digitCondition$1('hour', 1),
            digitCondition$1('minute', 1),
            digitCondition$1('second', 1),
        ])),
        'yMdjm': datePartGetterFactory$1(combine$1([
            digitCondition$1('year', 1), digitCondition$1('month', 1), digitCondition$1('day', 1),
            digitCondition$1('hour', 1), digitCondition$1('minute', 1)
        ])),
        'yMMMMEEEEd': datePartGetterFactory$1(combine$1([
            digitCondition$1('year', 1), nameCondition$1('month', 4), nameCondition$1('weekday', 4),
            digitCondition$1('day', 1)
        ])),
        'yMMMMd': datePartGetterFactory$1(combine$1([digitCondition$1('year', 1), nameCondition$1('month', 4), digitCondition$1('day', 1)])),
        'yMMMd': datePartGetterFactory$1(combine$1([digitCondition$1('year', 1), nameCondition$1('month', 3), digitCondition$1('day', 1)])),
        'yMd': datePartGetterFactory$1(combine$1([digitCondition$1('year', 1), digitCondition$1('month', 1), digitCondition$1('day', 1)])),
        'jms': datePartGetterFactory$1(combine$1([digitCondition$1('hour', 1), digitCondition$1('second', 1), digitCondition$1('minute', 1)])),
        'jm': datePartGetterFactory$1(combine$1([digitCondition$1('hour', 1), digitCondition$1('minute', 1)]))
    };
    var DATE_FORMATS$1$1 = {
        // Keys are quoted so they do not get renamed.
        'yyyy': datePartGetterFactory$1(digitCondition$1('year', 4)),
        'yy': datePartGetterFactory$1(digitCondition$1('year', 2)),
        'y': datePartGetterFactory$1(digitCondition$1('year', 1)),
        'MMMM': datePartGetterFactory$1(nameCondition$1('month', 4)),
        'MMM': datePartGetterFactory$1(nameCondition$1('month', 3)),
        'MM': datePartGetterFactory$1(digitCondition$1('month', 2)),
        'M': datePartGetterFactory$1(digitCondition$1('month', 1)),
        'LLLL': datePartGetterFactory$1(nameCondition$1('month', 4)),
        'L': datePartGetterFactory$1(nameCondition$1('month', 1)),
        'dd': datePartGetterFactory$1(digitCondition$1('day', 2)),
        'd': datePartGetterFactory$1(digitCondition$1('day', 1)),
        'HH': digitModifier$1(hourExtractor$1(datePartGetterFactory$1(hour12Modify$1(digitCondition$1('hour', 2), false)))),
        'H': hourExtractor$1(datePartGetterFactory$1(hour12Modify$1(digitCondition$1('hour', 1), false))),
        'hh': digitModifier$1(hourExtractor$1(datePartGetterFactory$1(hour12Modify$1(digitCondition$1('hour', 2), true)))),
        'h': hourExtractor$1(datePartGetterFactory$1(hour12Modify$1(digitCondition$1('hour', 1), true))),
        'jj': datePartGetterFactory$1(digitCondition$1('hour', 2)),
        'j': datePartGetterFactory$1(digitCondition$1('hour', 1)),
        'mm': digitModifier$1(datePartGetterFactory$1(digitCondition$1('minute', 2))),
        'm': datePartGetterFactory$1(digitCondition$1('minute', 1)),
        'ss': digitModifier$1(datePartGetterFactory$1(digitCondition$1('second', 2))),
        's': datePartGetterFactory$1(digitCondition$1('second', 1)),
        // while ISO 8601 requires fractions to be prefixed with `.` or `,`
        // we can be just safely rely on using `sss` since we currently don't support single or two digit
        // fractions
        'sss': datePartGetterFactory$1(digitCondition$1('second', 3)),
        'EEEE': datePartGetterFactory$1(nameCondition$1('weekday', 4)),
        'EEE': datePartGetterFactory$1(nameCondition$1('weekday', 3)),
        'EE': datePartGetterFactory$1(nameCondition$1('weekday', 2)),
        'E': datePartGetterFactory$1(nameCondition$1('weekday', 1)),
        'a': hourClockExtractor$1(datePartGetterFactory$1(hour12Modify$1(digitCondition$1('hour', 1), true))),
        'Z': timeZoneGetter$1$1('short'),
        'z': timeZoneGetter$1$1('long'),
        'ww': datePartGetterFactory$1({}),
        // first Thursday of the year. not support ?
        'w': datePartGetterFactory$1({}),
        // of the year not support ?
        'G': datePartGetterFactory$1(nameCondition$1('era', 1)),
        'GG': datePartGetterFactory$1(nameCondition$1('era', 2)),
        'GGG': datePartGetterFactory$1(nameCondition$1('era', 3)),
        'GGGG': datePartGetterFactory$1(nameCondition$1('era', 4))
    };
    function digitModifier$1(inner) {
        return function (date, locale) {
            var result = inner(date, locale);
            return result.length == 1 ? '0' + result : result;
        };
    }
    function hourClockExtractor$1(inner) {
        return function (date, locale) { return inner(date, locale).split(' ')[1]; };
    }
    function hourExtractor$1(inner) {
        return function (date, locale) { return inner(date, locale).split(' ')[0]; };
    }
    function intlDateFormat$1(date, locale, options) {
        return new Intl.DateTimeFormat(locale, options).format(date).replace(/[\u200e\u200f]/g, '');
    }
    function timeZoneGetter$1$1(timezone) {
        // To workaround `Intl` API restriction for single timezone let format with 24 hours
        var options = { hour: '2-digit', hour12: false, timeZoneName: timezone };
        return function (date, locale) {
            var result = intlDateFormat$1(date, locale, options);
            // Then extract first 3 letters that related to hours
            return result ? result.substring(3) : '';
        };
    }
    function hour12Modify$1(options, value) {
        options.hour12 = value;
        return options;
    }
    function digitCondition$1(prop, len) {
        var result = {};
        result[prop] = len === 2 ? '2-digit' : 'numeric';
        return result;
    }
    function nameCondition$1(prop, len) {
        var result = {};
        if (len < 4) {
            result[prop] = len > 1 ? 'short' : 'narrow';
        }
        else {
            result[prop] = 'long';
        }
        return result;
    }
    function combine$1(options) {
        return options.reduce(function (merged, opt) { return (__assign({}, merged, opt)); }, {});
    }
    function datePartGetterFactory$1(ret) {
        return function (date, locale) { return intlDateFormat$1(date, locale, ret); };
    }
    var DATE_FORMATTER_CACHE$1 = new Map();
    function dateFormatter$1(format, date, locale) {
        var fn = PATTERN_ALIASES$1[format];
        if (fn)
            return fn(date, locale);
        var cacheKey = format;
        var parts = DATE_FORMATTER_CACHE$1.get(cacheKey);
        if (!parts) {
            parts = [];
            var match = void 0;
            DATE_FORMATS_SPLIT$1$1.exec(format);
            var _format = format;
            while (_format) {
                match = DATE_FORMATS_SPLIT$1$1.exec(_format);
                if (match) {
                    parts = parts.concat(match.slice(1));
                    _format = parts.pop();
                }
                else {
                    parts.push(_format);
                    _format = null;
                }
            }
            DATE_FORMATTER_CACHE$1.set(cacheKey, parts);
        }
        return parts.reduce(function (text, part) {
            var fn = DATE_FORMATS$1$1[part];
            return text + (fn ? fn(date, locale) : partToTime$1(part));
        }, '');
    }
    function partToTime$1(part) {
        return part === '\'\'' ? '\'' : part.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
    }
    var DateFormatter$1 = /** @class */ (function () {
        function DateFormatter() {
        }
        DateFormatter.format = function (date, locale, pattern) {
            return dateFormatter$1(pattern, date, locale);
        };
        return DateFormatter;
    }());

    /**
    * @license
    * Copyright Google Inc. All Rights Reserved.
    *
    * Use of this source code is governed by an MIT-style license that can be
    * found in the LICENSE file at https://angular.io/license
      */
    /**
     * @ngModule CommonModule
     * @description
     *
     * Formats a date according to locale rules.
     *
     * Where:
     * - `expression` is a date object or a number (milliseconds since UTC epoch) or an ISO string
     * (https://www.w3.org/TR/NOTE-datetime).
     * - `format` indicates which date/time components to include. The format can be predefined as
     *   shown below or custom as shown in the table.
     *   - `'medium'`: equivalent to `'yMMMdjms'` (e.g. `Sep 3, 2010, 12:05:08 PM` for `en-US`)
     *   - `'short'`: equivalent to `'yMdjm'` (e.g. `9/3/2010, 12:05 PM` for `en-US`)
     *   - `'fullDate'`: equivalent to `'yMMMMEEEEd'` (e.g. `Friday, September 3, 2010` for `en-US`)
     *   - `'longDate'`: equivalent to `'yMMMMd'` (e.g. `September 3, 2010` for `en-US`)
     *   - `'mediumDate'`: equivalent to `'yMMMd'` (e.g. `Sep 3, 2010` for `en-US`)
     *   - `'shortDate'`: equivalent to `'yMd'` (e.g. `9/3/2010` for `en-US`)
     *   - `'mediumTime'`: equivalent to `'jms'` (e.g. `12:05:08 PM` for `en-US`)
     *   - `'shortTime'`: equivalent to `'jm'` (e.g. `12:05 PM` for `en-US`)
     *
     *
     *  | Component | Symbol | Narrow | Short Form   | Long Form         | Numeric   | 2-digit   |
     *  |-----------|:------:|--------|--------------|-------------------|-----------|-----------|
     *  | era       |   G    | G (A)  | GGG (AD)     | GGGG (Anno Domini)| -         | -         |
     *  | year      |   y    | -      | -            | -                 | y (2015)  | yy (15)   |
     *  | month     |   M    | L (S)  | MMM (Sep)    | MMMM (September)  | M (9)     | MM (09)   |
     *  | day       |   d    | -      | -            | -                 | d (3)     | dd (03)   |
     *  | weekday   |   E    | E (S)  | EEE (Sun)    | EEEE (Sunday)     | -         | -         |
     *  | hour      |   j    | -      | -            | -                 | j (13)    | jj (13)   |
     *  | hour12    |   h    | -      | -            | -                 | h (1 PM)  | hh (01 PM)|
     *  | hour24    |   H    | -      | -            | -                 | H (13)    | HH (13)   |
     *  | minute    |   m    | -      | -            | -                 | m (5)     | mm (05)   |
     *  | second    |   s    | -      | -            | -                 | s (9)     | ss (09)   |
     *  | timezone  |   z    | -      | -            | z (Pacific Standard Time)| -  | -         |
     *  | timezone  |   Z    | -      | Z (GMT-8:00) | -                 | -         | -         |
     *  | timezone  |   a    | -      | a (PM)       | -                 | -         | -         |
     *
     * In javascript, only the components specified will be respected (not the ordering,
     * punctuations, ...) and details of the formatting will be dependent on the locale.
     *
     * Timezone of the formatted text will be the local system timezone of the end-user's machine.
     *
     * When the expression is a ISO string without time (e.g. 2016-09-19) the time zone offset is not
     * applied and the formatted text will have the same day, month and year of the expression.
     *
     * WARNINGS:
     * - this pipe is marked as pure hence it will not be re-evaluated when the input is mutated.
     *   Instead users should treat the date as an immutable object and change the reference when the
     *   pipe needs to re-run (this is to avoid reformatting the date on every change detection run
     *   which would be an expensive operation).
     * - this pipe uses the Internationalization API. Therefore it is only reliable in Chrome and Opera
     *   browsers.
     *
     * @usageNotes
     *
     * ### Examples
     *
     * Assuming `dateObj` is (year: 2010, month: 9, day: 3, hour: 12 PM, minute: 05, second: 08)
     * in the _local_ time and locale is 'en-US':
     *
     * {@example common/pipes/ts/date_pipe.ts region='DeprecatedDatePipe'}
     *
     * @publicApi
     */
    var DeprecatedDatePipe$1 = /** @class */ (function () {
        function DeprecatedDatePipe(_locale) {
            this._locale = _locale;
        }
        DeprecatedDatePipe_1 = DeprecatedDatePipe;
        DeprecatedDatePipe.prototype.transform = function (value, pattern) {
            if (pattern === void 0) { pattern = 'mediumDate'; }
            if (value == null || value === '' || value !== value)
                return null;
            var date;
            if (typeof value === 'string') {
                value = value.trim();
            }
            if (isDate$1$1(value)) {
                date = value;
            }
            else if (!isNaN(value - parseFloat(value))) {
                date = new Date(parseFloat(value));
            }
            else if (typeof value === 'string' && /^(\d{4}-\d{1,2}-\d{1,2})$/.test(value)) {
                /**
                 * For ISO Strings without time the day, month and year must be extracted from the ISO String
                 * before Date creation to avoid time offset and errors in the new Date.
                 * If we only replace '-' with ',' in the ISO String ("2015,01,01"), and try to create a new
                 * date, some browsers (e.g. IE 9) will throw an invalid Date error
                 * If we leave the '-' ("2015-01-01") and try to create a new Date("2015-01-01") the
                 * timeoffset
                 * is applied
                 * Note: ISO months are 0 for January, 1 for February, ...
                 */
                var _a = __read(value.split('-').map(function (val) { return parseInt(val, 10); }), 3), y = _a[0], m = _a[1], d = _a[2];
                date = new Date(y, m - 1, d);
            }
            else {
                date = new Date(value);
            }
            if (!isDate$1$1(date)) {
                var match = void 0;
                if ((typeof value === 'string') && (match = value.match(ISO8601_DATE_REGEX$1))) {
                    date = isoStringToDate$1(match);
                }
                else {
                    throw invalidPipeArgumentError$1(DeprecatedDatePipe_1, value);
                }
            }
            return DateFormatter$1.format(date, this._locale, DeprecatedDatePipe_1._ALIASES[pattern] || pattern);
        };
        var DeprecatedDatePipe_1;
        /** @internal */
        DeprecatedDatePipe._ALIASES = {
            'medium': 'yMMMdjms',
            'short': 'yMdjm',
            'fullDate': 'yMMMMEEEEd',
            'longDate': 'yMMMMd',
            'mediumDate': 'yMMMd',
            'shortDate': 'yMd',
            'mediumTime': 'jms',
            'shortTime': 'jm'
        };
        DeprecatedDatePipe = DeprecatedDatePipe_1 = __decorate([
            core.Pipe({ name: 'date', pure: true }),
            __param(0, core.Inject(core.LOCALE_ID)),
            __metadata("design:paramtypes", [String])
        ], DeprecatedDatePipe);
        return DeprecatedDatePipe;
    }());
    function isDate$1$1(value) {
        return value instanceof Date && !isNaN(value.valueOf());
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function formatNumber$1$1(pipe, locale, value, style, digits, currency, currencyAsSymbol) {
        if (currency === void 0) { currency = null; }
        if (currencyAsSymbol === void 0) { currencyAsSymbol = false; }
        if (value == null)
            return null;
        // Convert strings to numbers
        value = typeof value === 'string' && !isNaN(+value - parseFloat(value)) ? +value : value;
        if (typeof value !== 'number') {
            throw invalidPipeArgumentError$1(pipe, value);
        }
        var minInt;
        var minFraction;
        var maxFraction;
        if (style !== NumberFormatStyle$1.Currency) {
            // rely on Intl default for currency
            minInt = 1;
            minFraction = 0;
            maxFraction = 3;
        }
        if (digits) {
            var parts = digits.match(NUMBER_FORMAT_REGEXP$1);
            if (parts === null) {
                throw new Error(digits + " is not a valid digit info for number pipes");
            }
            if (parts[1] != null) { // min integer digits
                minInt = parseIntAutoRadix$1(parts[1]);
            }
            if (parts[3] != null) { // min fraction digits
                minFraction = parseIntAutoRadix$1(parts[3]);
            }
            if (parts[5] != null) { // max fraction digits
                maxFraction = parseIntAutoRadix$1(parts[5]);
            }
        }
        return NumberFormatter$1.format(value, locale, style, {
            minimumIntegerDigits: minInt,
            minimumFractionDigits: minFraction,
            maximumFractionDigits: maxFraction,
            currency: currency,
            currencyAsSymbol: currencyAsSymbol,
        });
    }
    /**
     * Formats a number as text. Group sizing and separator and other locale-specific
     * configurations are based on the active locale.
     *
     * where `expression` is a number:
     *  - `digitInfo` is a `string` which has a following format: <br>
     *     <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>
     *   - `minIntegerDigits` is the minimum number of integer digits to use. Defaults to `1`.
     *   - `minFractionDigits` is the minimum number of digits after fraction. Defaults to `0`.
     *   - `maxFractionDigits` is the maximum number of digits after fraction. Defaults to `3`.
     *
     * For more information on the acceptable range for each of these numbers and other
     * details see your native internationalization library.
     *
     * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
     * and may require a polyfill. See [Browser Support](guide/browser-support) for details.
     *
     * @usageNotes
     *
     * ### Example
     *
     * {@example common/pipes/ts/number_pipe.ts region='DeprecatedNumberPipe'}
     *
     * @ngModule CommonModule
     * @publicApi
     */
    var DeprecatedDecimalPipe$1 = /** @class */ (function () {
        function DeprecatedDecimalPipe(_locale) {
            this._locale = _locale;
        }
        DeprecatedDecimalPipe_1 = DeprecatedDecimalPipe;
        DeprecatedDecimalPipe.prototype.transform = function (value, digits) {
            return formatNumber$1$1(DeprecatedDecimalPipe_1, this._locale, value, NumberFormatStyle$1.Decimal, digits);
        };
        var DeprecatedDecimalPipe_1;
        DeprecatedDecimalPipe = DeprecatedDecimalPipe_1 = __decorate([
            core.Pipe({ name: 'number' }),
            __param(0, core.Inject(core.LOCALE_ID)),
            __metadata("design:paramtypes", [String])
        ], DeprecatedDecimalPipe);
        return DeprecatedDecimalPipe;
    }());
    /**
     * @ngModule CommonModule
     *
     * @description
     *
     * Formats a number as percentage according to locale rules.
     *
     * - `digitInfo` See {@link DecimalPipe} for detailed description.
     *
     * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
     * and may require a polyfill. See [Browser Support](guide/browser-support) for details.
     *
     * @usageNotes
     *
     * ### Example
     *
     * {@example common/pipes/ts/percent_pipe.ts region='DeprecatedPercentPipe'}
     *
     * @publicApi
     */
    var DeprecatedPercentPipe$1 = /** @class */ (function () {
        function DeprecatedPercentPipe(_locale) {
            this._locale = _locale;
        }
        DeprecatedPercentPipe_1 = DeprecatedPercentPipe;
        DeprecatedPercentPipe.prototype.transform = function (value, digits) {
            return formatNumber$1$1(DeprecatedPercentPipe_1, this._locale, value, NumberFormatStyle$1.Percent, digits);
        };
        var DeprecatedPercentPipe_1;
        DeprecatedPercentPipe = DeprecatedPercentPipe_1 = __decorate([
            core.Pipe({ name: 'percent' }),
            __param(0, core.Inject(core.LOCALE_ID)),
            __metadata("design:paramtypes", [String])
        ], DeprecatedPercentPipe);
        return DeprecatedPercentPipe;
    }());
    /**
     * @ngModule CommonModule
     * @description
     *
     * Formats a number as currency using locale rules.
     *
     * Use `currency` to format a number as currency.
     *
     * - `currencyCode` is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, such
     *    as `USD` for the US dollar and `EUR` for the euro.
     * - `symbolDisplay` is a boolean indicating whether to use the currency symbol or code.
     *   - `true`: use symbol (e.g. `$`).
     *   - `false`(default): use code (e.g. `USD`).
     * - `digitInfo` See {@link DecimalPipe} for detailed description.
     *
     * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
     * and may require a polyfill. See [Browser Support](guide/browser-support) for details.
     *
     * @usageNotes
     *
     * ### Example
     *
     * {@example common/pipes/ts/currency_pipe.ts region='DeprecatedCurrencyPipe'}
     *
     * @publicApi
     */
    var DeprecatedCurrencyPipe$1 = /** @class */ (function () {
        function DeprecatedCurrencyPipe(_locale) {
            this._locale = _locale;
        }
        DeprecatedCurrencyPipe_1 = DeprecatedCurrencyPipe;
        DeprecatedCurrencyPipe.prototype.transform = function (value, currencyCode, symbolDisplay, digits) {
            if (currencyCode === void 0) { currencyCode = 'USD'; }
            if (symbolDisplay === void 0) { symbolDisplay = false; }
            return formatNumber$1$1(DeprecatedCurrencyPipe_1, this._locale, value, NumberFormatStyle$1.Currency, digits, currencyCode, symbolDisplay);
        };
        var DeprecatedCurrencyPipe_1;
        DeprecatedCurrencyPipe = DeprecatedCurrencyPipe_1 = __decorate([
            core.Pipe({ name: 'currency' }),
            __param(0, core.Inject(core.LOCALE_ID)),
            __metadata("design:paramtypes", [String])
        ], DeprecatedCurrencyPipe);
        return DeprecatedCurrencyPipe;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A collection of deprecated i18n pipes that require intl api
     *
     * @deprecated from v5
     */
    var COMMON_DEPRECATED_I18N_PIPES$1 = [DeprecatedDecimalPipe$1, DeprecatedPercentPipe$1, DeprecatedCurrencyPipe$1, DeprecatedDatePipe$1];

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ObservableStrategy$1 = /** @class */ (function () {
        function ObservableStrategy() {
        }
        ObservableStrategy.prototype.createSubscription = function (async, updateLatestValue) {
            return async.subscribe({ next: updateLatestValue, error: function (e) { throw e; } });
        };
        ObservableStrategy.prototype.dispose = function (subscription) { subscription.unsubscribe(); };
        ObservableStrategy.prototype.onDestroy = function (subscription) { subscription.unsubscribe(); };
        return ObservableStrategy;
    }());
    var PromiseStrategy$1 = /** @class */ (function () {
        function PromiseStrategy() {
        }
        PromiseStrategy.prototype.createSubscription = function (async, updateLatestValue) {
            return async.then(updateLatestValue, function (e) { throw e; });
        };
        PromiseStrategy.prototype.dispose = function (subscription) { };
        PromiseStrategy.prototype.onDestroy = function (subscription) { };
        return PromiseStrategy;
    }());
    var _promiseStrategy$1 = new PromiseStrategy$1();
    var _observableStrategy$1 = new ObservableStrategy$1();
    /**
     * @ngModule CommonModule
     * @description
     *
     * Unwraps a value from an asynchronous primitive.
     *
     * The `async` pipe subscribes to an `Observable` or `Promise` and returns the latest value it has
     * emitted. When a new value is emitted, the `async` pipe marks the component to be checked for
     * changes. When the component gets destroyed, the `async` pipe unsubscribes automatically to avoid
     * potential memory leaks.
     *
     * @usageNotes
     *
     * ### Examples
     *
     * This example binds a `Promise` to the view. Clicking the `Resolve` button resolves the
     * promise.
     *
     * {@example common/pipes/ts/async_pipe.ts region='AsyncPipePromise'}
     *
     * It's also possible to use `async` with Observables. The example below binds the `time` Observable
     * to the view. The Observable continuously updates the view with the current time.
     *
     * {@example common/pipes/ts/async_pipe.ts region='AsyncPipeObservable'}
     *
     * @publicApi
     */
    var AsyncPipe$1 = /** @class */ (function () {
        function AsyncPipe(_ref) {
            this._ref = _ref;
            this._latestValue = null;
            this._latestReturnedValue = null;
            this._subscription = null;
            this._obj = null;
            this._strategy = null;
        }
        AsyncPipe_1 = AsyncPipe;
        AsyncPipe.prototype.ngOnDestroy = function () {
            if (this._subscription) {
                this._dispose();
            }
        };
        AsyncPipe.prototype.transform = function (obj) {
            if (!this._obj) {
                if (obj) {
                    this._subscribe(obj);
                }
                this._latestReturnedValue = this._latestValue;
                return this._latestValue;
            }
            if (obj !== this._obj) {
                this._dispose();
                return this.transform(obj);
            }
            if (this._latestValue === this._latestReturnedValue) {
                return this._latestReturnedValue;
            }
            this._latestReturnedValue = this._latestValue;
            return core.WrappedValue.wrap(this._latestValue);
        };
        AsyncPipe.prototype._subscribe = function (obj) {
            var _this = this;
            this._obj = obj;
            this._strategy = this._selectStrategy(obj);
            this._subscription = this._strategy.createSubscription(obj, function (value) { return _this._updateLatestValue(obj, value); });
        };
        AsyncPipe.prototype._selectStrategy = function (obj) {
            if (core.ɵisPromise(obj)) {
                return _promiseStrategy$1;
            }
            if (core.ɵisObservable(obj)) {
                return _observableStrategy$1;
            }
            throw invalidPipeArgumentError$1(AsyncPipe_1, obj);
        };
        AsyncPipe.prototype._dispose = function () {
            this._strategy.dispose(this._subscription);
            this._latestValue = null;
            this._latestReturnedValue = null;
            this._subscription = null;
            this._obj = null;
        };
        AsyncPipe.prototype._updateLatestValue = function (async, value) {
            if (async === this._obj) {
                this._latestValue = value;
                this._ref.markForCheck();
            }
        };
        var AsyncPipe_1;
        AsyncPipe = AsyncPipe_1 = __decorate([
            core.Pipe({ name: 'async', pure: false }),
            __metadata("design:paramtypes", [core.ChangeDetectorRef])
        ], AsyncPipe);
        return AsyncPipe;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Transforms text to all lower case.
     *
     * @see `UpperCasePipe`
     * @see `TitleCasePipe`
     * @usageNotes
     *
     * The following example defines a view that allows the user to enter
     * text, and then uses the pipe to convert the input text to all lower case.
     *
     * <code-example path="common/pipes/ts/lowerupper_pipe.ts" region='LowerUpperPipe'></code-example>
     *
     * @ngModule CommonModule
     * @publicApi
     */
    var LowerCasePipe$1 = /** @class */ (function () {
        function LowerCasePipe() {
        }
        LowerCasePipe_1 = LowerCasePipe;
        /**
         * @param value The string to transform to lower case.
         */
        LowerCasePipe.prototype.transform = function (value) {
            if (!value)
                return value;
            if (typeof value !== 'string') {
                throw invalidPipeArgumentError$1(LowerCasePipe_1, value);
            }
            return value.toLowerCase();
        };
        var LowerCasePipe_1;
        LowerCasePipe = LowerCasePipe_1 = __decorate([
            core.Pipe({ name: 'lowercase' })
        ], LowerCasePipe);
        return LowerCasePipe;
    }());
    //
    // Regex below matches any Unicode word and compatible with ES5. In ES2018 the same result
    // can be achieved by using /\p{L}\S*/gu and also known as Unicode Property Escapes
    // (http://2ality.com/2017/07/regexp-unicode-property-escapes.html). Since there is no
    // transpilation of this functionality down to ES5 without external tool, the only solution is
    // to use already transpiled form. Example can be found here -
    // https://mothereff.in/regexpu#input=var+regex+%3D+/%5Cp%7BL%7D/u%3B&unicodePropertyEscape=1
    //
    var unicodeWordMatch$1 = /(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D])\S*/g;
    /**
     * Transforms text to title case.
     * Capitalizes the first letter of each word, and transforms the
     * rest of the word to lower case.
     * Words are delimited by any whitespace character, such as a space, tab, or line-feed character.
     *
     * @see `LowerCasePipe`
     * @see `UpperCasePipe`
     *
     * @usageNotes
     * The following example shows the result of transforming various strings into title case.
     *
     * <code-example path="common/pipes/ts/titlecase_pipe.ts" region='TitleCasePipe'></code-example>
     *
     * @ngModule CommonModule
     * @publicApi
     */
    var TitleCasePipe$1 = /** @class */ (function () {
        function TitleCasePipe() {
        }
        TitleCasePipe_1 = TitleCasePipe;
        /**
         * @param value The string to transform to title case.
         */
        TitleCasePipe.prototype.transform = function (value) {
            if (!value)
                return value;
            if (typeof value !== 'string') {
                throw invalidPipeArgumentError$1(TitleCasePipe_1, value);
            }
            return value.replace(unicodeWordMatch$1, (function (txt) { return txt[0].toUpperCase() + txt.substr(1).toLowerCase(); }));
        };
        var TitleCasePipe_1;
        TitleCasePipe = TitleCasePipe_1 = __decorate([
            core.Pipe({ name: 'titlecase' })
        ], TitleCasePipe);
        return TitleCasePipe;
    }());
    /**
     * Transforms text to all upper case.
     * @see `LowerCasePipe`
     * @see `TitleCasePipe`
     *
     * @ngModule CommonModule
     * @publicApi
     */
    var UpperCasePipe$1 = /** @class */ (function () {
        function UpperCasePipe() {
        }
        UpperCasePipe_1 = UpperCasePipe;
        /**
         * @param value The string to transform to upper case.
         */
        UpperCasePipe.prototype.transform = function (value) {
            if (!value)
                return value;
            if (typeof value !== 'string') {
                throw invalidPipeArgumentError$1(UpperCasePipe_1, value);
            }
            return value.toUpperCase();
        };
        var UpperCasePipe_1;
        UpperCasePipe = UpperCasePipe_1 = __decorate([
            core.Pipe({ name: 'uppercase' })
        ], UpperCasePipe);
        return UpperCasePipe;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // clang-format off
    /**
     * @ngModule CommonModule
     * @description
     *
     * Formats a date value according to locale rules.
     *
     * Only the `en-US` locale data comes with Angular. To localize dates
     * in another language, you must import the corresponding locale data.
     * See the [I18n guide](guide/i18n#i18n-pipes) for more information.
     *
     * @see `formatDate()`
     *
     *
     * @usageNotes
     *
     * The result of this pipe is not reevaluated when the input is mutated. To avoid the need to
     * reformat the date on every change-detection cycle, treat the date as an immutable object
     * and change the reference when the pipe needs to run again.
     *
     * ### Pre-defined format options
     *
     * Examples are given in `en-US` locale.
     *
     * - `'short'`: equivalent to `'M/d/yy, h:mm a'` (`6/15/15, 9:03 AM`).
     * - `'medium'`: equivalent to `'MMM d, y, h:mm:ss a'` (`Jun 15, 2015, 9:03:01 AM`).
     * - `'long'`: equivalent to `'MMMM d, y, h:mm:ss a z'` (`June 15, 2015 at 9:03:01 AM
     * GMT+1`).
     * - `'full'`: equivalent to `'EEEE, MMMM d, y, h:mm:ss a zzzz'` (`Monday, June 15, 2015 at
     * 9:03:01 AM GMT+01:00`).
     * - `'shortDate'`: equivalent to `'M/d/yy'` (`6/15/15`).
     * - `'mediumDate'`: equivalent to `'MMM d, y'` (`Jun 15, 2015`).
     * - `'longDate'`: equivalent to `'MMMM d, y'` (`June 15, 2015`).
     * - `'fullDate'`: equivalent to `'EEEE, MMMM d, y'` (`Monday, June 15, 2015`).
     * - `'shortTime'`: equivalent to `'h:mm a'` (`9:03 AM`).
     * - `'mediumTime'`: equivalent to `'h:mm:ss a'` (`9:03:01 AM`).
     * - `'longTime'`: equivalent to `'h:mm:ss a z'` (`9:03:01 AM GMT+1`).
     * - `'fullTime'`: equivalent to `'h:mm:ss a zzzz'` (`9:03:01 AM GMT+01:00`).
     *
     * ### Custom format options
     *
     * You can construct a format string using symbols to specify the components
     * of a date-time value, as described in the following table.
     * Format details depend on the locale.
     * Fields marked with (*) are only available in the extra data set for the given locale.
     *
     *  | Field type         | Format      | Description                                                   | Example Value                                              |
     *  |--------------------|-------------|---------------------------------------------------------------|------------------------------------------------------------|
     *  | Era                | G, GG & GGG | Abbreviated                                                   | AD                                                         |
     *  |                    | GGGG        | Wide                                                          | Anno Domini                                                |
     *  |                    | GGGGG       | Narrow                                                        | A                                                          |
     *  | Year               | y           | Numeric: minimum digits                                       | 2, 20, 201, 2017, 20173                                    |
     *  |                    | yy          | Numeric: 2 digits + zero padded                               | 02, 20, 01, 17, 73                                         |
     *  |                    | yyy         | Numeric: 3 digits + zero padded                               | 002, 020, 201, 2017, 20173                                 |
     *  |                    | yyyy        | Numeric: 4 digits or more + zero padded                       | 0002, 0020, 0201, 2017, 20173                              |
     *  | Month              | M           | Numeric: 1 digit                                              | 9, 12                                                      |
     *  |                    | MM          | Numeric: 2 digits + zero padded                               | 09, 12                                                     |
     *  |                    | MMM         | Abbreviated                                                   | Sep                                                        |
     *  |                    | MMMM        | Wide                                                          | September                                                  |
     *  |                    | MMMMM       | Narrow                                                        | S                                                          |
     *  | Month standalone   | L           | Numeric: 1 digit                                              | 9, 12                                                      |
     *  |                    | LL          | Numeric: 2 digits + zero padded                               | 09, 12                                                     |
     *  |                    | LLL         | Abbreviated                                                   | Sep                                                        |
     *  |                    | LLLL        | Wide                                                          | September                                                  |
     *  |                    | LLLLL       | Narrow                                                        | S                                                          |
     *  | Week of year       | w           | Numeric: minimum digits                                       | 1... 53                                                    |
     *  |                    | ww          | Numeric: 2 digits + zero padded                               | 01... 53                                                   |
     *  | Week of month      | W           | Numeric: 1 digit                                              | 1... 5                                                     |
     *  | Day of month       | d           | Numeric: minimum digits                                       | 1                                                          |
     *  |                    | dd          | Numeric: 2 digits + zero padded                               | 01                                                          |
     *  | Week day           | E, EE & EEE | Abbreviated                                                   | Tue                                                        |
     *  |                    | EEEE        | Wide                                                          | Tuesday                                                    |
     *  |                    | EEEEE       | Narrow                                                        | T                                                          |
     *  |                    | EEEEEE      | Short                                                         | Tu                                                         |
     *  | Period             | a, aa & aaa | Abbreviated                                                   | am/pm or AM/PM                                             |
     *  |                    | aaaa        | Wide (fallback to `a` when missing)                           | ante meridiem/post meridiem                                |
     *  |                    | aaaaa       | Narrow                                                        | a/p                                                        |
     *  | Period*            | B, BB & BBB | Abbreviated                                                   | mid.                                                       |
     *  |                    | BBBB        | Wide                                                          | am, pm, midnight, noon, morning, afternoon, evening, night |
     *  |                    | BBBBB       | Narrow                                                        | md                                                         |
     *  | Period standalone* | b, bb & bbb | Abbreviated                                                   | mid.                                                       |
     *  |                    | bbbb        | Wide                                                          | am, pm, midnight, noon, morning, afternoon, evening, night |
     *  |                    | bbbbb       | Narrow                                                        | md                                                         |
     *  | Hour 1-12          | h           | Numeric: minimum digits                                       | 1, 12                                                      |
     *  |                    | hh          | Numeric: 2 digits + zero padded                               | 01, 12                                                     |
     *  | Hour 0-23          | H           | Numeric: minimum digits                                       | 0, 23                                                      |
     *  |                    | HH          | Numeric: 2 digits + zero padded                               | 00, 23                                                     |
     *  | Minute             | m           | Numeric: minimum digits                                       | 8, 59                                                      |
     *  |                    | mm          | Numeric: 2 digits + zero padded                               | 08, 59                                                     |
     *  | Second             | s           | Numeric: minimum digits                                       | 0... 59                                                    |
     *  |                    | ss          | Numeric: 2 digits + zero padded                               | 00... 59                                                   |
     *  | Fractional seconds | S           | Numeric: 1 digit                                              | 0... 9                                                     |
     *  |                    | SS          | Numeric: 2 digits + zero padded                               | 00... 99                                                   |
     *  |                    | SSS         | Numeric: 3 digits + zero padded (= milliseconds)              | 000... 999                                                 |
     *  | Zone               | z, zz & zzz | Short specific non location format (fallback to O)            | GMT-8                                                      |
     *  |                    | zzzz        | Long specific non location format (fallback to OOOO)          | GMT-08:00                                                  |
     *  |                    | Z, ZZ & ZZZ | ISO8601 basic format                                          | -0800                                                      |
     *  |                    | ZZZZ        | Long localized GMT format                                     | GMT-8:00                                                   |
     *  |                    | ZZZZZ       | ISO8601 extended format + Z indicator for offset 0 (= XXXXX)  | -08:00                                                     |
     *  |                    | O, OO & OOO | Short localized GMT format                                    | GMT-8                                                      |
     *  |                    | OOOO        | Long localized GMT format                                     | GMT-08:00                                                  |
     *
     * Note that timezone correction is not applied to an ISO string that has no time component, such as "2016-09-19"
     *
     * ### Format examples
     *
     * These examples transform a date into various formats,
     * assuming that `dateObj` is a JavaScript `Date` object for
     * year: 2015, month: 6, day: 15, hour: 21, minute: 43, second: 11,
     * given in the local time for the `en-US` locale.
     *
     * ```
     * {{ dateObj | date }}               // output is 'Jun 15, 2015'
     * {{ dateObj | date:'medium' }}      // output is 'Jun 15, 2015, 9:43:11 PM'
     * {{ dateObj | date:'shortTime' }}   // output is '9:43 PM'
     * {{ dateObj | date:'mmss' }}        // output is '43:11'
     * ```
     *
     * ### Usage example
     *
     * The following component uses a date pipe to display the current date in different formats.
     *
     * ```
     * @Component({
     *  selector: 'date-pipe',
     *  template: `<div>
     *    <p>Today is {{today | date}}</p>
     *    <p>Or if you prefer, {{today | date:'fullDate'}}</p>
     *    <p>The time is {{today | date:'h:mm a z'}}</p>
     *  </div>`
     * })
     * // Get the current date and time as a date-time value.
     * export class DatePipeComponent {
     *   today: number = Date.now();
     * }
     * ```
     *
     * @publicApi
     */
    // clang-format on
    var DatePipe$1 = /** @class */ (function () {
        function DatePipe(locale) {
            this.locale = locale;
        }
        DatePipe_1 = DatePipe;
        /**
         * @param value The date expression: a `Date` object,  a number
         * (milliseconds since UTC epoch), or an ISO string (https://www.w3.org/TR/NOTE-datetime).
         * @param format The date/time components to include, using predefined options or a
         * custom format string.
         * @param timezone A timezone offset (such as `'+0430'`), or a standard
         * UTC/GMT or continental US timezone abbreviation. Default is
         * the local system timezone of the end-user's machine.
         * @param locale A locale code for the locale format rules to use.
         * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
         * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
         * @returns A date string in the desired format.
         */
        DatePipe.prototype.transform = function (value, format, timezone, locale) {
            if (format === void 0) { format = 'mediumDate'; }
            if (value == null || value === '' || value !== value)
                return null;
            try {
                return formatDate$1(value, format, locale || this.locale, timezone);
            }
            catch (error) {
                throw invalidPipeArgumentError$1(DatePipe_1, error.message);
            }
        };
        var DatePipe_1;
        DatePipe = DatePipe_1 = __decorate([
            core.Pipe({ name: 'date', pure: true }),
            __param(0, core.Inject(core.LOCALE_ID)),
            __metadata("design:paramtypes", [String])
        ], DatePipe);
        return DatePipe;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var _INTERPOLATION_REGEXP$1 = /#/g;
    /**
     * @ngModule CommonModule
     * @description
     *
     * Maps a value to a string that pluralizes the value according to locale rules.
     *
     * @usageNotes
     *
     * ### Example
     *
     * {@example common/pipes/ts/i18n_pipe.ts region='I18nPluralPipeComponent'}
     *
     * @publicApi
     */
    var I18nPluralPipe$1 = /** @class */ (function () {
        function I18nPluralPipe(_localization) {
            this._localization = _localization;
        }
        I18nPluralPipe_1 = I18nPluralPipe;
        /**
         * @param value the number to be formatted
         * @param pluralMap an object that mimics the ICU format, see
         * http://userguide.icu-project.org/formatparse/messages.
         * @param locale a `string` defining the locale to use (uses the current {@link LOCALE_ID} by
         * default).
         */
        I18nPluralPipe.prototype.transform = function (value, pluralMap, locale) {
            if (value == null)
                return '';
            if (typeof pluralMap !== 'object' || pluralMap === null) {
                throw invalidPipeArgumentError$1(I18nPluralPipe_1, pluralMap);
            }
            var key = getPluralCategory$1(value, Object.keys(pluralMap), this._localization, locale);
            return pluralMap[key].replace(_INTERPOLATION_REGEXP$1, value.toString());
        };
        var I18nPluralPipe_1;
        I18nPluralPipe = I18nPluralPipe_1 = __decorate([
            core.Pipe({ name: 'i18nPlural', pure: true }),
            __metadata("design:paramtypes", [NgLocalization$1])
        ], I18nPluralPipe);
        return I18nPluralPipe;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @ngModule CommonModule
     * @description
     *
     * Generic selector that displays the string that matches the current value.
     *
     * If none of the keys of the `mapping` match the `value`, then the content
     * of the `other` key is returned when present, otherwise an empty string is returned.
     *
     * @usageNotes
     *
     * ### Example
     *
     * {@example common/pipes/ts/i18n_pipe.ts region='I18nSelectPipeComponent'}
     *
     * @publicApi
     */
    var I18nSelectPipe$1 = /** @class */ (function () {
        function I18nSelectPipe() {
        }
        I18nSelectPipe_1 = I18nSelectPipe;
        /**
         * @param value a string to be internationalized.
         * @param mapping an object that indicates the text that should be displayed
         * for different values of the provided `value`.
         */
        I18nSelectPipe.prototype.transform = function (value, mapping) {
            if (value == null)
                return '';
            if (typeof mapping !== 'object' || typeof value !== 'string') {
                throw invalidPipeArgumentError$1(I18nSelectPipe_1, mapping);
            }
            if (mapping.hasOwnProperty(value)) {
                return mapping[value];
            }
            if (mapping.hasOwnProperty('other')) {
                return mapping['other'];
            }
            return '';
        };
        var I18nSelectPipe_1;
        I18nSelectPipe = I18nSelectPipe_1 = __decorate([
            core.Pipe({ name: 'i18nSelect', pure: true })
        ], I18nSelectPipe);
        return I18nSelectPipe;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @ngModule CommonModule
     * @description
     *
     * Converts a value into its JSON-format representation.  Useful for debugging.
     *
     * @usageNotes
     *
     * The following component uses a JSON pipe to convert an object
     * to JSON format, and displays the string in both formats for comparison.
     *
     * {@example common/pipes/ts/json_pipe.ts region='JsonPipe'}
     *
     * @publicApi
     */
    var JsonPipe$1 = /** @class */ (function () {
        function JsonPipe() {
        }
        /**
         * @param value A value of any type to convert into a JSON-format string.
         */
        JsonPipe.prototype.transform = function (value) { return JSON.stringify(value, null, 2); };
        JsonPipe = __decorate([
            core.Pipe({ name: 'json', pure: false })
        ], JsonPipe);
        return JsonPipe;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function makeKeyValuePair$1(key, value) {
        return { key: key, value: value };
    }
    /**
     * @ngModule CommonModule
     * @description
     *
     * Transforms Object or Map into an array of key value pairs.
     *
     * The output array will be ordered by keys.
     * By default the comparator will be by Unicode point value.
     * You can optionally pass a compareFn if your keys are complex types.
     *
     * @usageNotes
     * ### Examples
     *
     * This examples show how an Object or a Map can be iterated by ngFor with the use of this keyvalue
     * pipe.
     *
     * {@example common/pipes/ts/keyvalue_pipe.ts region='KeyValuePipe'}
     *
     * @publicApi
     */
    var KeyValuePipe$1 = /** @class */ (function () {
        function KeyValuePipe(differs) {
            this.differs = differs;
            this.keyValues = [];
        }
        KeyValuePipe.prototype.transform = function (input, compareFn) {
            var _this = this;
            if (compareFn === void 0) { compareFn = defaultComparator$1; }
            if (!input || (!(input instanceof Map) && typeof input !== 'object')) {
                return null;
            }
            if (!this.differ) {
                // make a differ for whatever type we've been passed in
                this.differ = this.differs.find(input).create();
            }
            var differChanges = this.differ.diff(input);
            if (differChanges) {
                this.keyValues = [];
                differChanges.forEachItem(function (r) {
                    _this.keyValues.push(makeKeyValuePair$1(r.key, r.currentValue));
                });
                this.keyValues.sort(compareFn);
            }
            return this.keyValues;
        };
        KeyValuePipe = __decorate([
            core.Pipe({ name: 'keyvalue', pure: false }),
            __metadata("design:paramtypes", [core.KeyValueDiffers])
        ], KeyValuePipe);
        return KeyValuePipe;
    }());
    function defaultComparator$1(keyValueA, keyValueB) {
        var a = keyValueA.key;
        var b = keyValueB.key;
        // if same exit with 0;
        if (a === b)
            return 0;
        // make sure that undefined are at the end of the sort.
        if (a === undefined)
            return 1;
        if (b === undefined)
            return -1;
        // make sure that nulls are at the end of the sort.
        if (a === null)
            return 1;
        if (b === null)
            return -1;
        if (typeof a == 'string' && typeof b == 'string') {
            return a < b ? -1 : 1;
        }
        if (typeof a == 'number' && typeof b == 'number') {
            return a - b;
        }
        if (typeof a == 'boolean' && typeof b == 'boolean') {
            return a < b ? -1 : 1;
        }
        // `a` and `b` are of different types. Compare their string values.
        var aString = String(a);
        var bString = String(b);
        return aString == bString ? 0 : aString < bString ? -1 : 1;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @ngModule CommonModule
     * @description
     *
     * Transforms a number into a string,
     * formatted according to locale rules that determine group sizing and
     * separator, decimal-point character, and other locale-specific
     * configurations.
     *
     * If no parameters are specified, the function rounds off to the nearest value using this
     * [rounding method](https://en.wikibooks.org/wiki/Arithmetic/Rounding).
     * The behavior differs from that of the JavaScript ```Math.round()``` function.
     * In the following case for example, the pipe rounds down where
     * ```Math.round()``` rounds up:
     *
     * ```html
     * -2.5 | number:'1.0-0'
     * > -3
     * Math.round(-2.5)
     * > -2
     * ```
     *
     * @see `formatNumber()`
     *
     * @usageNotes
     * The following code shows how the pipe transforms numbers
     * into text strings, according to various format specifications,
     * where the caller's default locale is `en-US`.
     *
     * ### Example
     *
     * <code-example path="common/pipes/ts/number_pipe.ts" region='NumberPipe'></code-example>
     *
     * @publicApi
     */
    var DecimalPipe$1 = /** @class */ (function () {
        function DecimalPipe(_locale) {
            this._locale = _locale;
        }
        DecimalPipe_1 = DecimalPipe;
        /**
         * @param value The number to be formatted.
         * @param digitsInfo Decimal representation options, specified by a string
         * in the following format:<br>
         * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
         *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
         * Default is `1`.
         *   - `minFractionDigits`: The minimum number of digits after the decimal point.
         * Default is `0`.
         *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
         * Default is `3`.
         * @param locale A locale code for the locale format rules to use.
         * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
         * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
         */
        DecimalPipe.prototype.transform = function (value, digitsInfo, locale) {
            if (isEmpty$1(value))
                return null;
            locale = locale || this._locale;
            try {
                var num = strToNumber$1(value);
                return formatNumber$2(num, locale, digitsInfo);
            }
            catch (error) {
                throw invalidPipeArgumentError$1(DecimalPipe_1, error.message);
            }
        };
        var DecimalPipe_1;
        DecimalPipe = DecimalPipe_1 = __decorate([
            core.Pipe({ name: 'number' }),
            __param(0, core.Inject(core.LOCALE_ID)),
            __metadata("design:paramtypes", [String])
        ], DecimalPipe);
        return DecimalPipe;
    }());
    /**
     * @ngModule CommonModule
     * @description
     *
     * Transforms a number to a percentage
     * string, formatted according to locale rules that determine group sizing and
     * separator, decimal-point character, and other locale-specific
     * configurations.
     *
     * @see `formatPercent()`
     *
     * @usageNotes
     * The following code shows how the pipe transforms numbers
     * into text strings, according to various format specifications,
     * where the caller's default locale is `en-US`.
     *
     * <code-example path="common/pipes/ts/percent_pipe.ts" region='PercentPipe'></code-example>
     *
     * @publicApi
     */
    var PercentPipe$1 = /** @class */ (function () {
        function PercentPipe(_locale) {
            this._locale = _locale;
        }
        PercentPipe_1 = PercentPipe;
        /**
         *
         * @param value The number to be formatted as a percentage.
         * @param digitsInfo Decimal representation options, specified by a string
         * in the following format:<br>
         * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
         *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
         * Default is `1`.
         *   - `minFractionDigits`: The minimum number of digits after the decimal point.
         * Default is `0`.
         *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
         * Default is `0`.
         * @param locale A locale code for the locale format rules to use.
         * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
         * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
         */
        PercentPipe.prototype.transform = function (value, digitsInfo, locale) {
            if (isEmpty$1(value))
                return null;
            locale = locale || this._locale;
            try {
                var num = strToNumber$1(value);
                return formatPercent$1(num, locale, digitsInfo);
            }
            catch (error) {
                throw invalidPipeArgumentError$1(PercentPipe_1, error.message);
            }
        };
        var PercentPipe_1;
        PercentPipe = PercentPipe_1 = __decorate([
            core.Pipe({ name: 'percent' }),
            __param(0, core.Inject(core.LOCALE_ID)),
            __metadata("design:paramtypes", [String])
        ], PercentPipe);
        return PercentPipe;
    }());
    /**
     * @ngModule CommonModule
     * @description
     *
     * Transforms a number to a currency string, formatted according to locale rules
     * that determine group sizing and separator, decimal-point character,
     * and other locale-specific configurations.
     *
     * @see `getCurrencySymbol()`
     * @see `formatCurrency()`
     *
     * @usageNotes
     * The following code shows how the pipe transforms numbers
     * into text strings, according to various format specifications,
     * where the caller's default locale is `en-US`.
     *
     * <code-example path="common/pipes/ts/currency_pipe.ts" region='CurrencyPipe'></code-example>
     *
     * @publicApi
     */
    var CurrencyPipe$1 = /** @class */ (function () {
        function CurrencyPipe(_locale) {
            this._locale = _locale;
        }
        CurrencyPipe_1 = CurrencyPipe;
        /**
         *
         * @param value The number to be formatted as currency.
         * @param currencyCode The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code,
         * such as `USD` for the US dollar and `EUR` for the euro.
         * @param display The format for the currency indicator. One of the following:
         *   - `code`: Show the code (such as `USD`).
         *   - `symbol`(default): Show the symbol (such as `$`).
         *   - `symbol-narrow`: Use the narrow symbol for locales that have two symbols for their
         * currency.
         * For example, the Canadian dollar CAD has the symbol `CA$` and the symbol-narrow `$`. If the
         * locale has no narrow symbol, uses the standard symbol for the locale.
         *   - String: Use the given string value instead of a code or a symbol.
         * For example, an empty string will suppress the currency & symbol.
         *   - Boolean (marked deprecated in v5): `true` for symbol and false for `code`.
         *
         * @param digitsInfo Decimal representation options, specified by a string
         * in the following format:<br>
         * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
         *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
         * Default is `1`.
         *   - `minFractionDigits`: The minimum number of digits after the decimal point.
         * Default is `2`.
         *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
         * Default is `2`.
         * If not provided, the number will be formatted with the proper amount of digits,
         * depending on what the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) specifies.
         * For example, the Canadian dollar has 2 digits, whereas the Chilean peso has none.
         * @param locale A locale code for the locale format rules to use.
         * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
         * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
         */
        CurrencyPipe.prototype.transform = function (value, currencyCode, display, digitsInfo, locale) {
            if (display === void 0) { display = 'symbol'; }
            if (isEmpty$1(value))
                return null;
            locale = locale || this._locale;
            if (typeof display === 'boolean') {
                if (console && console.warn) {
                    console.warn("Warning: the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are \"code\", \"symbol\" or \"symbol-narrow\".");
                }
                display = display ? 'symbol' : 'code';
            }
            var currency = currencyCode || 'USD';
            if (display !== 'code') {
                if (display === 'symbol' || display === 'symbol-narrow') {
                    currency = getCurrencySymbol$1(currency, display === 'symbol' ? 'wide' : 'narrow', locale);
                }
                else {
                    currency = display;
                }
            }
            try {
                var num = strToNumber$1(value);
                return formatCurrency$1(num, locale, currency, currencyCode, digitsInfo);
            }
            catch (error) {
                throw invalidPipeArgumentError$1(CurrencyPipe_1, error.message);
            }
        };
        var CurrencyPipe_1;
        CurrencyPipe = CurrencyPipe_1 = __decorate([
            core.Pipe({ name: 'currency' }),
            __param(0, core.Inject(core.LOCALE_ID)),
            __metadata("design:paramtypes", [String])
        ], CurrencyPipe);
        return CurrencyPipe;
    }());
    function isEmpty$1(value) {
        return value == null || value === '' || value !== value;
    }
    /**
     * Transforms a string into a number (if needed).
     */
    function strToNumber$1(value) {
        // Convert strings to numbers
        if (typeof value === 'string' && !isNaN(Number(value) - parseFloat(value))) {
            return Number(value);
        }
        if (typeof value !== 'number') {
            throw new Error(value + " is not a number");
        }
        return value;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @ngModule CommonModule
     * @description
     *
     * Creates a new `Array` or `String` containing a subset (slice) of the elements.
     *
     * @usageNotes
     *
     * All behavior is based on the expected behavior of the JavaScript API `Array.prototype.slice()`
     * and `String.prototype.slice()`.
     *
     * When operating on an `Array`, the returned `Array` is always a copy even when all
     * the elements are being returned.
     *
     * When operating on a blank value, the pipe returns the blank value.
     *
     * ### List Example
     *
     * This `ngFor` example:
     *
     * {@example common/pipes/ts/slice_pipe.ts region='SlicePipe_list'}
     *
     * produces the following:
     *
     * ```html
     * <li>b</li>
     * <li>c</li>
     * ```
     *
     * ### String Examples
     *
     * {@example common/pipes/ts/slice_pipe.ts region='SlicePipe_string'}
     *
     * @publicApi
     */
    var SlicePipe$1 = /** @class */ (function () {
        function SlicePipe() {
        }
        SlicePipe_1 = SlicePipe;
        /**
         * @param value a list or a string to be sliced.
         * @param start the starting index of the subset to return:
         *   - **a positive integer**: return the item at `start` index and all items after
         *     in the list or string expression.
         *   - **a negative integer**: return the item at `start` index from the end and all items after
         *     in the list or string expression.
         *   - **if positive and greater than the size of the expression**: return an empty list or
         * string.
         *   - **if negative and greater than the size of the expression**: return entire list or string.
         * @param end the ending index of the subset to return:
         *   - **omitted**: return all items until the end.
         *   - **if positive**: return all items before `end` index of the list or string.
         *   - **if negative**: return all items before `end` index from the end of the list or string.
         */
        SlicePipe.prototype.transform = function (value, start, end) {
            if (value == null)
                return value;
            if (!this.supports(value)) {
                throw invalidPipeArgumentError$1(SlicePipe_1, value);
            }
            return value.slice(start, end);
        };
        SlicePipe.prototype.supports = function (obj) { return typeof obj === 'string' || Array.isArray(obj); };
        var SlicePipe_1;
        SlicePipe = SlicePipe_1 = __decorate([
            core.Pipe({ name: 'slice', pure: false })
        ], SlicePipe);
        return SlicePipe;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A collection of Angular pipes that are likely to be used in each and every application.
     */
    var COMMON_PIPES$1 = [
        AsyncPipe$1,
        UpperCasePipe$1,
        LowerCasePipe$1,
        JsonPipe$1,
        SlicePipe$1,
        DecimalPipe$1,
        PercentPipe$1,
        TitleCasePipe$1,
        CurrencyPipe$1,
        DatePipe$1,
        I18nPluralPipe$1,
        I18nSelectPipe$1,
        KeyValuePipe$1,
    ];

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // Note: This does not contain the location providers,
    // as they need some platform specific implementations to work.
    /**
     * Exports all the basic Angular directives and pipes,
     * such as `NgIf`, `NgForOf`, `DecimalPipe`, and so on.
     * Re-exported by `BrowserModule`, which is included automatically in the root
     * `AppModule` when you create a new app with the CLI `new` command.
     *
     * * The `providers` options configure the NgModule's injector to provide
     * localization dependencies to members.
     * * The `exports` options make the declared directives and pipes available for import
     * by other NgModules.
     *
     * @publicApi
     */
    var CommonModule$1 = /** @class */ (function () {
        function CommonModule() {
        }
        CommonModule = __decorate([
            core.NgModule({
                declarations: [COMMON_DIRECTIVES$1, COMMON_PIPES$1],
                exports: [COMMON_DIRECTIVES$1, COMMON_PIPES$1],
                providers: [
                    { provide: NgLocalization$1, useClass: NgLocaleLocalization$1 },
                ],
            })
        ], CommonModule);
        return CommonModule;
    }());
    var ɵ0$1 = getPluralCase$1;
    /**
     * A module that contains the deprecated i18n pipes.
     *
     * @deprecated from v5
     * @publicApi
     */
    var DeprecatedI18NPipesModule$1 = /** @class */ (function () {
        function DeprecatedI18NPipesModule() {
        }
        DeprecatedI18NPipesModule = __decorate([
            core.NgModule({
                declarations: [COMMON_DEPRECATED_I18N_PIPES$1],
                exports: [COMMON_DEPRECATED_I18N_PIPES$1],
                providers: [{ provide: DEPRECATED_PLURAL_FN$1, useValue: ɵ0$1 }],
            })
        ], DeprecatedI18NPipesModule);
        return DeprecatedI18NPipesModule;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A DI Token representing the main rendering context. In a browser this is the DOM Document.
     *
     * Note: Document might not be available in the Application Context when Application and Rendering
     * Contexts are not the same (e.g. when running the application into a Web Worker).
     *
     * @publicApi
     */
    var DOCUMENT$1 = new core.InjectionToken('DocumentToken');

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var PLATFORM_BROWSER_ID = 'browser';
    var PLATFORM_SERVER_ID = 'server';
    /**
     * Returns whether a platform id represents a server platform.
     * @publicApi
     */
    function isPlatformServer(platformId) {
        return platformId === PLATFORM_SERVER_ID;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @publicApi
     */
    var VERSION$1 = new core.Version('7.2.15');

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Defines a scroll position manager. Implemented by `BrowserViewportScroller`.
     *
     * @publicApi
     */
    var ViewportScroller$1 = /** @class */ (function () {
        function ViewportScroller() {
        }
        // De-sugared tree-shakable injection
        // See #23917
        /** @nocollapse */
        ViewportScroller.ngInjectableDef = core.defineInjectable({
            providedIn: 'root',
            factory: function () { return new BrowserViewportScroller$1(core.inject(DOCUMENT$1), window, core.inject(core.ErrorHandler)); }
        });
        return ViewportScroller;
    }());
    /**
     * Manages the scroll position for a browser window.
     */
    var BrowserViewportScroller$1 = /** @class */ (function () {
        function BrowserViewportScroller(document, window, errorHandler) {
            this.document = document;
            this.window = window;
            this.errorHandler = errorHandler;
            this.offset = function () { return [0, 0]; };
        }
        /**
         * Configures the top offset used when scrolling to an anchor.
         * @param offset A position in screen coordinates (a tuple with x and y values)
         * or a function that returns the top offset position.
         *
         */
        BrowserViewportScroller.prototype.setOffset = function (offset) {
            if (Array.isArray(offset)) {
                this.offset = function () { return offset; };
            }
            else {
                this.offset = offset;
            }
        };
        /**
         * Retrieves the current scroll position.
         * @returns The position in screen coordinates.
         */
        BrowserViewportScroller.prototype.getScrollPosition = function () {
            if (this.supportScrollRestoration()) {
                return [this.window.scrollX, this.window.scrollY];
            }
            else {
                return [0, 0];
            }
        };
        /**
         * Sets the scroll position.
         * @param position The new position in screen coordinates.
         */
        BrowserViewportScroller.prototype.scrollToPosition = function (position) {
            if (this.supportScrollRestoration()) {
                this.window.scrollTo(position[0], position[1]);
            }
        };
        /**
         * Scrolls to an anchor element.
         * @param anchor The ID of the anchor element.
         */
        BrowserViewportScroller.prototype.scrollToAnchor = function (anchor) {
            if (this.supportScrollRestoration()) {
                // Escape anything passed to `querySelector` as it can throw errors and stop the application
                // from working if invalid values are passed.
                if (this.window.CSS && this.window.CSS.escape) {
                    anchor = this.window.CSS.escape(anchor);
                }
                else {
                    anchor = anchor.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
                }
                try {
                    var elSelectedById = this.document.querySelector("#" + anchor);
                    if (elSelectedById) {
                        this.scrollToElement(elSelectedById);
                        return;
                    }
                    var elSelectedByName = this.document.querySelector("[name='" + anchor + "']");
                    if (elSelectedByName) {
                        this.scrollToElement(elSelectedByName);
                        return;
                    }
                }
                catch (e) {
                    this.errorHandler.handleError(e);
                }
            }
        };
        /**
         * Disables automatic scroll restoration provided by the browser.
         */
        BrowserViewportScroller.prototype.setHistoryScrollRestoration = function (scrollRestoration) {
            if (this.supportScrollRestoration()) {
                var history_1 = this.window.history;
                if (history_1 && history_1.scrollRestoration) {
                    history_1.scrollRestoration = scrollRestoration;
                }
            }
        };
        BrowserViewportScroller.prototype.scrollToElement = function (el) {
            var rect = el.getBoundingClientRect();
            var left = rect.left + this.window.pageXOffset;
            var top = rect.top + this.window.pageYOffset;
            var offset = this.offset();
            this.window.scrollTo(left - offset[0], top - offset[1]);
        };
        /**
         * We only support scroll restoration when we can get a hold of window.
         * This means that we do not support this behavior when running in a web worker.
         *
         * Lifting this restriction right now would require more changes in the dom adapter.
         * Since webworkers aren't widely used, we will lift it once RouterScroller is
         * battle-tested.
         */
        BrowserViewportScroller.prototype.supportScrollRestoration = function () {
            try {
                return !!this.window && !!this.window.scrollTo;
            }
            catch (_a) {
                return false;
            }
        };
        return BrowserViewportScroller;
    }());

    /**
     * @license Angular v7.2.15
     * (c) 2010-2019 Google LLC. https://angular.io/
     * License: MIT
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var _DOM = null;
    function getDOM() {
        return _DOM;
    }
    function setRootDomAdapter(adapter) {
        if (!_DOM) {
            _DOM = adapter;
        }
    }
    /* tslint:disable:requireParameterType */
    /**
     * Provides DOM operations in an environment-agnostic way.
     *
     * @security Tread carefully! Interacting with the DOM directly is dangerous and
     * can introduce XSS risks.
     */
    var DomAdapter = /** @class */ (function () {
        function DomAdapter() {
            this.resourceLoaderType = null;
        }
        Object.defineProperty(DomAdapter.prototype, "attrToPropMap", {
            /**
             * Maps attribute names to their corresponding property names for cases
             * where attribute name doesn't match property name.
             */
            get: function () { return this._attrToPropMap; },
            set: function (value) { this._attrToPropMap = value; },
            enumerable: true,
            configurable: true
        });
        return DomAdapter;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Provides DOM operations in any browser environment.
     *
     * @security Tread carefully! Interacting with the DOM directly is dangerous and
     * can introduce XSS risks.
     */
    var GenericBrowserDomAdapter = /** @class */ (function (_super) {
        __extends(GenericBrowserDomAdapter, _super);
        function GenericBrowserDomAdapter() {
            var _this = _super.call(this) || this;
            _this._animationPrefix = null;
            _this._transitionEnd = null;
            try {
                var element_1 = _this.createElement('div', document);
                if (_this.getStyle(element_1, 'animationName') != null) {
                    _this._animationPrefix = '';
                }
                else {
                    var domPrefixes = ['Webkit', 'Moz', 'O', 'ms'];
                    for (var i = 0; i < domPrefixes.length; i++) {
                        if (_this.getStyle(element_1, domPrefixes[i] + 'AnimationName') != null) {
                            _this._animationPrefix = '-' + domPrefixes[i].toLowerCase() + '-';
                            break;
                        }
                    }
                }
                var transEndEventNames_1 = {
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd otransitionend',
                    transition: 'transitionend'
                };
                Object.keys(transEndEventNames_1).forEach(function (key) {
                    if (_this.getStyle(element_1, key) != null) {
                        _this._transitionEnd = transEndEventNames_1[key];
                    }
                });
            }
            catch (_a) {
                _this._animationPrefix = null;
                _this._transitionEnd = null;
            }
            return _this;
        }
        GenericBrowserDomAdapter.prototype.getDistributedNodes = function (el) { return el.getDistributedNodes(); };
        GenericBrowserDomAdapter.prototype.resolveAndSetHref = function (el, baseUrl, href) {
            el.href = href == null ? baseUrl : baseUrl + '/../' + href;
        };
        GenericBrowserDomAdapter.prototype.supportsDOMEvents = function () { return true; };
        GenericBrowserDomAdapter.prototype.supportsNativeShadowDOM = function () {
            return typeof document.body.createShadowRoot === 'function';
        };
        GenericBrowserDomAdapter.prototype.getAnimationPrefix = function () { return this._animationPrefix ? this._animationPrefix : ''; };
        GenericBrowserDomAdapter.prototype.getTransitionEnd = function () { return this._transitionEnd ? this._transitionEnd : ''; };
        GenericBrowserDomAdapter.prototype.supportsAnimation = function () {
            return this._animationPrefix != null && this._transitionEnd != null;
        };
        return GenericBrowserDomAdapter;
    }(DomAdapter));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var _attrToPropMap = {
        'class': 'className',
        'innerHtml': 'innerHTML',
        'readonly': 'readOnly',
        'tabindex': 'tabIndex',
    };
    var DOM_KEY_LOCATION_NUMPAD = 3;
    // Map to convert some key or keyIdentifier values to what will be returned by getEventKey
    var _keyMap = {
        // The following values are here for cross-browser compatibility and to match the W3C standard
        // cf http://www.w3.org/TR/DOM-Level-3-Events-key/
        '\b': 'Backspace',
        '\t': 'Tab',
        '\x7F': 'Delete',
        '\x1B': 'Escape',
        'Del': 'Delete',
        'Esc': 'Escape',
        'Left': 'ArrowLeft',
        'Right': 'ArrowRight',
        'Up': 'ArrowUp',
        'Down': 'ArrowDown',
        'Menu': 'ContextMenu',
        'Scroll': 'ScrollLock',
        'Win': 'OS'
    };
    // There is a bug in Chrome for numeric keypad keys:
    // https://code.google.com/p/chromium/issues/detail?id=155654
    // 1, 2, 3 ... are reported as A, B, C ...
    var _chromeNumKeyPadMap = {
        'A': '1',
        'B': '2',
        'C': '3',
        'D': '4',
        'E': '5',
        'F': '6',
        'G': '7',
        'H': '8',
        'I': '9',
        'J': '*',
        'K': '+',
        'M': '-',
        'N': '.',
        'O': '/',
        '\x60': '0',
        '\x90': 'NumLock'
    };
    var nodeContains;
    if (core.ɵglobal['Node']) {
        nodeContains = core.ɵglobal['Node'].prototype.contains || function (node) {
            return !!(this.compareDocumentPosition(node) & 16);
        };
    }
    /**
     * A `DomAdapter` powered by full browser DOM APIs.
     *
     * @security Tread carefully! Interacting with the DOM directly is dangerous and
     * can introduce XSS risks.
     */
    /* tslint:disable:requireParameterType no-console */
    var BrowserDomAdapter = /** @class */ (function (_super) {
        __extends(BrowserDomAdapter, _super);
        function BrowserDomAdapter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BrowserDomAdapter.prototype.parse = function (templateHtml) { throw new Error('parse not implemented'); };
        BrowserDomAdapter.makeCurrent = function () { setRootDomAdapter(new BrowserDomAdapter()); };
        BrowserDomAdapter.prototype.hasProperty = function (element, name) { return name in element; };
        BrowserDomAdapter.prototype.setProperty = function (el, name, value) { el[name] = value; };
        BrowserDomAdapter.prototype.getProperty = function (el, name) { return el[name]; };
        BrowserDomAdapter.prototype.invoke = function (el, methodName, args) {
            var _a;
            (_a = el)[methodName].apply(_a, __spread(args));
        };
        // TODO(tbosch): move this into a separate environment class once we have it
        BrowserDomAdapter.prototype.logError = function (error) {
            if (window.console) {
                if (console.error) {
                    console.error(error);
                }
                else {
                    console.log(error);
                }
            }
        };
        BrowserDomAdapter.prototype.log = function (error) {
            if (window.console) {
                window.console.log && window.console.log(error);
            }
        };
        BrowserDomAdapter.prototype.logGroup = function (error) {
            if (window.console) {
                window.console.group && window.console.group(error);
            }
        };
        BrowserDomAdapter.prototype.logGroupEnd = function () {
            if (window.console) {
                window.console.groupEnd && window.console.groupEnd();
            }
        };
        Object.defineProperty(BrowserDomAdapter.prototype, "attrToPropMap", {
            get: function () { return _attrToPropMap; },
            enumerable: true,
            configurable: true
        });
        BrowserDomAdapter.prototype.contains = function (nodeA, nodeB) { return nodeContains.call(nodeA, nodeB); };
        BrowserDomAdapter.prototype.querySelector = function (el, selector) { return el.querySelector(selector); };
        BrowserDomAdapter.prototype.querySelectorAll = function (el, selector) { return el.querySelectorAll(selector); };
        BrowserDomAdapter.prototype.on = function (el, evt, listener) { el.addEventListener(evt, listener, false); };
        BrowserDomAdapter.prototype.onAndCancel = function (el, evt, listener) {
            el.addEventListener(evt, listener, false);
            // Needed to follow Dart's subscription semantic, until fix of
            // https://code.google.com/p/dart/issues/detail?id=17406
            return function () { el.removeEventListener(evt, listener, false); };
        };
        BrowserDomAdapter.prototype.dispatchEvent = function (el, evt) { el.dispatchEvent(evt); };
        BrowserDomAdapter.prototype.createMouseEvent = function (eventType) {
            var evt = this.getDefaultDocument().createEvent('MouseEvent');
            evt.initEvent(eventType, true, true);
            return evt;
        };
        BrowserDomAdapter.prototype.createEvent = function (eventType) {
            var evt = this.getDefaultDocument().createEvent('Event');
            evt.initEvent(eventType, true, true);
            return evt;
        };
        BrowserDomAdapter.prototype.preventDefault = function (evt) {
            evt.preventDefault();
            evt.returnValue = false;
        };
        BrowserDomAdapter.prototype.isPrevented = function (evt) {
            return evt.defaultPrevented || evt.returnValue != null && !evt.returnValue;
        };
        BrowserDomAdapter.prototype.getInnerHTML = function (el) { return el.innerHTML; };
        BrowserDomAdapter.prototype.getTemplateContent = function (el) {
            return 'content' in el && this.isTemplateElement(el) ? el.content : null;
        };
        BrowserDomAdapter.prototype.getOuterHTML = function (el) { return el.outerHTML; };
        BrowserDomAdapter.prototype.nodeName = function (node) { return node.nodeName; };
        BrowserDomAdapter.prototype.nodeValue = function (node) { return node.nodeValue; };
        BrowserDomAdapter.prototype.type = function (node) { return node.type; };
        BrowserDomAdapter.prototype.content = function (node) {
            if (this.hasProperty(node, 'content')) {
                return node.content;
            }
            else {
                return node;
            }
        };
        BrowserDomAdapter.prototype.firstChild = function (el) { return el.firstChild; };
        BrowserDomAdapter.prototype.nextSibling = function (el) { return el.nextSibling; };
        BrowserDomAdapter.prototype.parentElement = function (el) { return el.parentNode; };
        BrowserDomAdapter.prototype.childNodes = function (el) { return el.childNodes; };
        BrowserDomAdapter.prototype.childNodesAsList = function (el) {
            var childNodes = el.childNodes;
            var res = new Array(childNodes.length);
            for (var i = 0; i < childNodes.length; i++) {
                res[i] = childNodes[i];
            }
            return res;
        };
        BrowserDomAdapter.prototype.clearNodes = function (el) {
            while (el.firstChild) {
                el.removeChild(el.firstChild);
            }
        };
        BrowserDomAdapter.prototype.appendChild = function (el, node) { el.appendChild(node); };
        BrowserDomAdapter.prototype.removeChild = function (el, node) { el.removeChild(node); };
        BrowserDomAdapter.prototype.replaceChild = function (el, newChild, oldChild) { el.replaceChild(newChild, oldChild); };
        BrowserDomAdapter.prototype.remove = function (node) {
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            return node;
        };
        BrowserDomAdapter.prototype.insertBefore = function (parent, ref, node) { parent.insertBefore(node, ref); };
        BrowserDomAdapter.prototype.insertAllBefore = function (parent, ref, nodes) {
            nodes.forEach(function (n) { return parent.insertBefore(n, ref); });
        };
        BrowserDomAdapter.prototype.insertAfter = function (parent, ref, node) { parent.insertBefore(node, ref.nextSibling); };
        BrowserDomAdapter.prototype.setInnerHTML = function (el, value) { el.innerHTML = value; };
        BrowserDomAdapter.prototype.getText = function (el) { return el.textContent; };
        BrowserDomAdapter.prototype.setText = function (el, value) { el.textContent = value; };
        BrowserDomAdapter.prototype.getValue = function (el) { return el.value; };
        BrowserDomAdapter.prototype.setValue = function (el, value) { el.value = value; };
        BrowserDomAdapter.prototype.getChecked = function (el) { return el.checked; };
        BrowserDomAdapter.prototype.setChecked = function (el, value) { el.checked = value; };
        BrowserDomAdapter.prototype.createComment = function (text) { return this.getDefaultDocument().createComment(text); };
        BrowserDomAdapter.prototype.createTemplate = function (html) {
            var t = this.getDefaultDocument().createElement('template');
            t.innerHTML = html;
            return t;
        };
        BrowserDomAdapter.prototype.createElement = function (tagName, doc) {
            doc = doc || this.getDefaultDocument();
            return doc.createElement(tagName);
        };
        BrowserDomAdapter.prototype.createElementNS = function (ns, tagName, doc) {
            doc = doc || this.getDefaultDocument();
            return doc.createElementNS(ns, tagName);
        };
        BrowserDomAdapter.prototype.createTextNode = function (text, doc) {
            doc = doc || this.getDefaultDocument();
            return doc.createTextNode(text);
        };
        BrowserDomAdapter.prototype.createScriptTag = function (attrName, attrValue, doc) {
            doc = doc || this.getDefaultDocument();
            var el = doc.createElement('SCRIPT');
            el.setAttribute(attrName, attrValue);
            return el;
        };
        BrowserDomAdapter.prototype.createStyleElement = function (css, doc) {
            doc = doc || this.getDefaultDocument();
            var style = doc.createElement('style');
            this.appendChild(style, this.createTextNode(css, doc));
            return style;
        };
        BrowserDomAdapter.prototype.createShadowRoot = function (el) { return el.createShadowRoot(); };
        BrowserDomAdapter.prototype.getShadowRoot = function (el) { return el.shadowRoot; };
        BrowserDomAdapter.prototype.getHost = function (el) { return el.host; };
        BrowserDomAdapter.prototype.clone = function (node) { return node.cloneNode(true); };
        BrowserDomAdapter.prototype.getElementsByClassName = function (element, name) {
            return element.getElementsByClassName(name);
        };
        BrowserDomAdapter.prototype.getElementsByTagName = function (element, name) {
            return element.getElementsByTagName(name);
        };
        BrowserDomAdapter.prototype.classList = function (element) { return Array.prototype.slice.call(element.classList, 0); };
        BrowserDomAdapter.prototype.addClass = function (element, className) { element.classList.add(className); };
        BrowserDomAdapter.prototype.removeClass = function (element, className) { element.classList.remove(className); };
        BrowserDomAdapter.prototype.hasClass = function (element, className) {
            return element.classList.contains(className);
        };
        BrowserDomAdapter.prototype.setStyle = function (element, styleName, styleValue) {
            element.style[styleName] = styleValue;
        };
        BrowserDomAdapter.prototype.removeStyle = function (element, stylename) {
            // IE requires '' instead of null
            // see https://github.com/angular/angular/issues/7916
            element.style[stylename] = '';
        };
        BrowserDomAdapter.prototype.getStyle = function (element, stylename) { return element.style[stylename]; };
        BrowserDomAdapter.prototype.hasStyle = function (element, styleName, styleValue) {
            var value = this.getStyle(element, styleName) || '';
            return styleValue ? value == styleValue : value.length > 0;
        };
        BrowserDomAdapter.prototype.tagName = function (element) { return element.tagName; };
        BrowserDomAdapter.prototype.attributeMap = function (element) {
            var res = new Map();
            var elAttrs = element.attributes;
            for (var i = 0; i < elAttrs.length; i++) {
                var attrib = elAttrs.item(i);
                res.set(attrib.name, attrib.value);
            }
            return res;
        };
        BrowserDomAdapter.prototype.hasAttribute = function (element, attribute) {
            return element.hasAttribute(attribute);
        };
        BrowserDomAdapter.prototype.hasAttributeNS = function (element, ns, attribute) {
            return element.hasAttributeNS(ns, attribute);
        };
        BrowserDomAdapter.prototype.getAttribute = function (element, attribute) {
            return element.getAttribute(attribute);
        };
        BrowserDomAdapter.prototype.getAttributeNS = function (element, ns, name) {
            return element.getAttributeNS(ns, name);
        };
        BrowserDomAdapter.prototype.setAttribute = function (element, name, value) { element.setAttribute(name, value); };
        BrowserDomAdapter.prototype.setAttributeNS = function (element, ns, name, value) {
            element.setAttributeNS(ns, name, value);
        };
        BrowserDomAdapter.prototype.removeAttribute = function (element, attribute) { element.removeAttribute(attribute); };
        BrowserDomAdapter.prototype.removeAttributeNS = function (element, ns, name) {
            element.removeAttributeNS(ns, name);
        };
        BrowserDomAdapter.prototype.templateAwareRoot = function (el) { return this.isTemplateElement(el) ? this.content(el) : el; };
        BrowserDomAdapter.prototype.createHtmlDocument = function () {
            return document.implementation.createHTMLDocument('fakeTitle');
        };
        BrowserDomAdapter.prototype.getDefaultDocument = function () { return document; };
        BrowserDomAdapter.prototype.getBoundingClientRect = function (el) {
            try {
                return el.getBoundingClientRect();
            }
            catch (_a) {
                return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
            }
        };
        BrowserDomAdapter.prototype.getTitle = function (doc) { return doc.title; };
        BrowserDomAdapter.prototype.setTitle = function (doc, newTitle) { doc.title = newTitle || ''; };
        BrowserDomAdapter.prototype.elementMatches = function (n, selector) {
            if (this.isElementNode(n)) {
                return n.matches && n.matches(selector) ||
                    n.msMatchesSelector && n.msMatchesSelector(selector) ||
                    n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
            }
            return false;
        };
        BrowserDomAdapter.prototype.isTemplateElement = function (el) {
            return this.isElementNode(el) && el.nodeName === 'TEMPLATE';
        };
        BrowserDomAdapter.prototype.isTextNode = function (node) { return node.nodeType === Node.TEXT_NODE; };
        BrowserDomAdapter.prototype.isCommentNode = function (node) { return node.nodeType === Node.COMMENT_NODE; };
        BrowserDomAdapter.prototype.isElementNode = function (node) { return node.nodeType === Node.ELEMENT_NODE; };
        BrowserDomAdapter.prototype.hasShadowRoot = function (node) {
            return node.shadowRoot != null && node instanceof HTMLElement;
        };
        BrowserDomAdapter.prototype.isShadowRoot = function (node) { return node instanceof DocumentFragment; };
        BrowserDomAdapter.prototype.importIntoDoc = function (node) { return document.importNode(this.templateAwareRoot(node), true); };
        BrowserDomAdapter.prototype.adoptNode = function (node) { return document.adoptNode(node); };
        BrowserDomAdapter.prototype.getHref = function (el) { return el.getAttribute('href'); };
        BrowserDomAdapter.prototype.getEventKey = function (event) {
            var key = event.key;
            if (key == null) {
                key = event.keyIdentifier;
                // keyIdentifier is defined in the old draft of DOM Level 3 Events implemented by Chrome and
                // Safari cf
                // http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/events.html#Events-KeyboardEvents-Interfaces
                if (key == null) {
                    return 'Unidentified';
                }
                if (key.startsWith('U+')) {
                    key = String.fromCharCode(parseInt(key.substring(2), 16));
                    if (event.location === DOM_KEY_LOCATION_NUMPAD && _chromeNumKeyPadMap.hasOwnProperty(key)) {
                        // There is a bug in Chrome for numeric keypad keys:
                        // https://code.google.com/p/chromium/issues/detail?id=155654
                        // 1, 2, 3 ... are reported as A, B, C ...
                        key = _chromeNumKeyPadMap[key];
                    }
                }
            }
            return _keyMap[key] || key;
        };
        BrowserDomAdapter.prototype.getGlobalEventTarget = function (doc, target) {
            if (target === 'window') {
                return window;
            }
            if (target === 'document') {
                return doc;
            }
            if (target === 'body') {
                return doc.body;
            }
            return null;
        };
        BrowserDomAdapter.prototype.getHistory = function () { return window.history; };
        BrowserDomAdapter.prototype.getLocation = function () { return window.location; };
        BrowserDomAdapter.prototype.getBaseHref = function (doc) {
            var href = getBaseElementHref();
            return href == null ? null : relativePath(href);
        };
        BrowserDomAdapter.prototype.resetBaseElement = function () { baseElement = null; };
        BrowserDomAdapter.prototype.getUserAgent = function () { return window.navigator.userAgent; };
        BrowserDomAdapter.prototype.setData = function (element, name, value) {
            this.setAttribute(element, 'data-' + name, value);
        };
        BrowserDomAdapter.prototype.getData = function (element, name) {
            return this.getAttribute(element, 'data-' + name);
        };
        BrowserDomAdapter.prototype.getComputedStyle = function (element) { return getComputedStyle(element); };
        // TODO(tbosch): move this into a separate environment class once we have it
        BrowserDomAdapter.prototype.supportsWebAnimation = function () {
            return typeof Element.prototype['animate'] === 'function';
        };
        BrowserDomAdapter.prototype.performanceNow = function () {
            // performance.now() is not available in all browsers, see
            // http://caniuse.com/#search=performance.now
            return window.performance && window.performance.now ? window.performance.now() :
                new Date().getTime();
        };
        BrowserDomAdapter.prototype.supportsCookies = function () { return true; };
        BrowserDomAdapter.prototype.getCookie = function (name) { return parseCookieValue(document.cookie, name); };
        BrowserDomAdapter.prototype.setCookie = function (name, value) {
            // document.cookie is magical, assigning into it assigns/overrides one cookie value, but does
            // not clear other cookies.
            document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        };
        return BrowserDomAdapter;
    }(GenericBrowserDomAdapter));
    var baseElement = null;
    function getBaseElementHref() {
        if (!baseElement) {
            baseElement = document.querySelector('base');
            if (!baseElement) {
                return null;
            }
        }
        return baseElement.getAttribute('href');
    }
    // based on urlUtils.js in AngularJS 1
    var urlParsingNode;
    function relativePath(url) {
        if (!urlParsingNode) {
            urlParsingNode = document.createElement('a');
        }
        urlParsingNode.setAttribute('href', url);
        return (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname :
            '/' + urlParsingNode.pathname;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A DI Token representing the main rendering context. In a browser this is the DOM Document.
     *
     * Note: Document might not be available in the Application Context when Application and Rendering
     * Contexts are not the same (e.g. when running the application into a Web Worker).
     *
     * @deprecated import from `@angular/common` instead.
     * @publicApi
     */
    var DOCUMENT$1$1 = DOCUMENT$1;

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function supportsState() {
        return !!window.history.pushState;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * `PlatformLocation` encapsulates all of the direct calls to platform APIs.
     * This class should not be used directly by an application developer. Instead, use
     * {@link Location}.
     */
    var BrowserPlatformLocation = /** @class */ (function (_super) {
        __extends(BrowserPlatformLocation, _super);
        function BrowserPlatformLocation(_doc) {
            var _this = _super.call(this) || this;
            _this._doc = _doc;
            _this._init();
            return _this;
        }
        // This is moved to its own method so that `MockPlatformLocationStrategy` can overwrite it
        /** @internal */
        BrowserPlatformLocation.prototype._init = function () {
            this.location = getDOM().getLocation();
            this._history = getDOM().getHistory();
        };
        BrowserPlatformLocation.prototype.getBaseHrefFromDOM = function () { return getDOM().getBaseHref(this._doc); };
        BrowserPlatformLocation.prototype.onPopState = function (fn) {
            getDOM().getGlobalEventTarget(this._doc, 'window').addEventListener('popstate', fn, false);
        };
        BrowserPlatformLocation.prototype.onHashChange = function (fn) {
            getDOM().getGlobalEventTarget(this._doc, 'window').addEventListener('hashchange', fn, false);
        };
        Object.defineProperty(BrowserPlatformLocation.prototype, "pathname", {
            get: function () { return this.location.pathname; },
            set: function (newPath) { this.location.pathname = newPath; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BrowserPlatformLocation.prototype, "search", {
            get: function () { return this.location.search; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BrowserPlatformLocation.prototype, "hash", {
            get: function () { return this.location.hash; },
            enumerable: true,
            configurable: true
        });
        BrowserPlatformLocation.prototype.pushState = function (state, title, url) {
            if (supportsState()) {
                this._history.pushState(state, title, url);
            }
            else {
                this.location.hash = url;
            }
        };
        BrowserPlatformLocation.prototype.replaceState = function (state, title, url) {
            if (supportsState()) {
                this._history.replaceState(state, title, url);
            }
            else {
                this.location.hash = url;
            }
        };
        BrowserPlatformLocation.prototype.forward = function () { this._history.forward(); };
        BrowserPlatformLocation.prototype.back = function () { this._history.back(); };
        BrowserPlatformLocation = __decorate([
            core.Injectable(),
            __param(0, core.Inject(DOCUMENT$1$1)),
            __metadata("design:paramtypes", [Object])
        ], BrowserPlatformLocation);
        return BrowserPlatformLocation;
    }(PlatformLocation$1));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * An id that identifies a particular application being bootstrapped, that should
     * match across the client/server boundary.
     */
    var TRANSITION_ID = new core.InjectionToken('TRANSITION_ID');
    function appInitializerFactory(transitionId, document, injector) {
        return function () {
            // Wait for all application initializers to be completed before removing the styles set by
            // the server.
            injector.get(core.ApplicationInitStatus).donePromise.then(function () {
                var dom = getDOM();
                var styles = Array.prototype.slice.apply(dom.querySelectorAll(document, "style[ng-transition]"));
                styles.filter(function (el) { return dom.getAttribute(el, 'ng-transition') === transitionId; })
                    .forEach(function (el) { return dom.remove(el); });
            });
        };
    }
    var SERVER_TRANSITION_PROVIDERS = [
        {
            provide: core.APP_INITIALIZER,
            useFactory: appInitializerFactory,
            deps: [TRANSITION_ID, DOCUMENT$1$1, core.Injector],
            multi: true
        },
    ];

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var BrowserGetTestability = /** @class */ (function () {
        function BrowserGetTestability() {
        }
        BrowserGetTestability.init = function () { core.setTestabilityGetter(new BrowserGetTestability()); };
        BrowserGetTestability.prototype.addToWindow = function (registry) {
            core.ɵglobal['getAngularTestability'] = function (elem, findInAncestors) {
                if (findInAncestors === void 0) { findInAncestors = true; }
                var testability = registry.findTestabilityInTree(elem, findInAncestors);
                if (testability == null) {
                    throw new Error('Could not find testability for element.');
                }
                return testability;
            };
            core.ɵglobal['getAllAngularTestabilities'] = function () { return registry.getAllTestabilities(); };
            core.ɵglobal['getAllAngularRootElements'] = function () { return registry.getAllRootElements(); };
            var whenAllStable = function (callback /** TODO #9100 */) {
                var testabilities = core.ɵglobal['getAllAngularTestabilities']();
                var count = testabilities.length;
                var didWork = false;
                var decrement = function (didWork_ /** TODO #9100 */) {
                    didWork = didWork || didWork_;
                    count--;
                    if (count == 0) {
                        callback(didWork);
                    }
                };
                testabilities.forEach(function (testability /** TODO #9100 */) {
                    testability.whenStable(decrement);
                });
            };
            if (!core.ɵglobal['frameworkStabilizers']) {
                core.ɵglobal['frameworkStabilizers'] = [];
            }
            core.ɵglobal['frameworkStabilizers'].push(whenAllStable);
        };
        BrowserGetTestability.prototype.findTestabilityInTree = function (registry, elem, findInAncestors) {
            if (elem == null) {
                return null;
            }
            var t = registry.getTestability(elem);
            if (t != null) {
                return t;
            }
            else if (!findInAncestors) {
                return null;
            }
            if (getDOM().isShadowRoot(elem)) {
                return this.findTestabilityInTree(registry, getDOM().getHost(elem), true);
            }
            return this.findTestabilityInTree(registry, getDOM().parentElement(elem), true);
        };
        return BrowserGetTestability;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Exports the value under a given `name` in the global property `ng`. For example `ng.probe` if
     * `name` is `'probe'`.
     * @param name Name under which it will be exported. Keep in mind this will be a property of the
     * global `ng` object.
     * @param value The value to export.
     */
    function exportNgVar(name, value) {
        if (typeof COMPILED === 'undefined' || !COMPILED) {
            // Note: we can't export `ng` when using closure enhanced optimization as:
            // - closure declares globals itself for minified names, which sometimes clobber our `ng` global
            // - we can't declare a closure extern as the namespace `ng` is already used within Google
            //   for typings for angularJS (via `goog.provide('ng....')`).
            var ng = core.ɵglobal['ng'] = core.ɵglobal['ng'] || {};
            ng[name] = value;
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var CORE_TOKENS = {
        'ApplicationRef': core.ApplicationRef,
        'NgZone': core.NgZone,
    };
    var INSPECT_GLOBAL_NAME = 'probe';
    var CORE_TOKENS_GLOBAL_NAME = 'coreTokens';
    /**
     * Returns a {@link DebugElement} for the given native DOM element, or
     * null if the given native element does not have an Angular view associated
     * with it.
     */
    function inspectNativeElement(element) {
        return core.getDebugNode(element);
    }
    function _createNgProbe(coreTokens) {
        exportNgVar(INSPECT_GLOBAL_NAME, inspectNativeElement);
        exportNgVar(CORE_TOKENS_GLOBAL_NAME, __assign({}, CORE_TOKENS, _ngProbeTokensToMap(coreTokens || [])));
        return function () { return inspectNativeElement; };
    }
    function _ngProbeTokensToMap(tokens) {
        return tokens.reduce(function (prev, t) { return (prev[t.name] = t.token, prev); }, {});
    }
    /**
     * Providers which support debugging Angular applications (e.g. via `ng.probe`).
     */
    var ELEMENT_PROBE_PROVIDERS = [
        {
            provide: core.APP_INITIALIZER,
            useFactory: _createNgProbe,
            deps: [
                [core.NgProbeToken, new core.Optional()],
            ],
            multi: true,
        },
    ];

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * The injection token for the event-manager plug-in service.
     *
     * @publicApi
     */
    var EVENT_MANAGER_PLUGINS = new core.InjectionToken('EventManagerPlugins');
    /**
     * An injectable service that provides event management for Angular
     * through a browser plug-in.
     *
     * @publicApi
     */
    var EventManager = /** @class */ (function () {
        /**
         * Initializes an instance of the event-manager service.
         */
        function EventManager(plugins, _zone) {
            var _this = this;
            this._zone = _zone;
            this._eventNameToPlugin = new Map();
            plugins.forEach(function (p) { return p.manager = _this; });
            this._plugins = plugins.slice().reverse();
        }
        /**
         * Registers a handler for a specific element and event.
         *
         * @param element The HTML element to receive event notifications.
         * @param eventName The name of the event to listen for.
         * @param handler A function to call when the notification occurs. Receives the
         * event object as an argument.
         * @returns  A callback function that can be used to remove the handler.
         */
        EventManager.prototype.addEventListener = function (element, eventName, handler) {
            var plugin = this._findPluginFor(eventName);
            return plugin.addEventListener(element, eventName, handler);
        };
        /**
         * Registers a global handler for an event in a target view.
         *
         * @param target A target for global event notifications. One of "window", "document", or "body".
         * @param eventName The name of the event to listen for.
         * @param handler A function to call when the notification occurs. Receives the
         * event object as an argument.
         * @returns A callback function that can be used to remove the handler.
         */
        EventManager.prototype.addGlobalEventListener = function (target, eventName, handler) {
            var plugin = this._findPluginFor(eventName);
            return plugin.addGlobalEventListener(target, eventName, handler);
        };
        /**
         * Retrieves the compilation zone in which event listeners are registered.
         */
        EventManager.prototype.getZone = function () { return this._zone; };
        /** @internal */
        EventManager.prototype._findPluginFor = function (eventName) {
            var plugin = this._eventNameToPlugin.get(eventName);
            if (plugin) {
                return plugin;
            }
            var plugins = this._plugins;
            for (var i = 0; i < plugins.length; i++) {
                var plugin_1 = plugins[i];
                if (plugin_1.supports(eventName)) {
                    this._eventNameToPlugin.set(eventName, plugin_1);
                    return plugin_1;
                }
            }
            throw new Error("No event manager plugin found for event " + eventName);
        };
        EventManager = __decorate([
            core.Injectable(),
            __param(0, core.Inject(EVENT_MANAGER_PLUGINS)),
            __metadata("design:paramtypes", [Array, core.NgZone])
        ], EventManager);
        return EventManager;
    }());
    var EventManagerPlugin = /** @class */ (function () {
        function EventManagerPlugin(_doc) {
            this._doc = _doc;
        }
        EventManagerPlugin.prototype.addGlobalEventListener = function (element, eventName, handler) {
            var target = getDOM().getGlobalEventTarget(this._doc, element);
            if (!target) {
                throw new Error("Unsupported event target " + target + " for event " + eventName);
            }
            return this.addEventListener(target, eventName, handler);
        };
        return EventManagerPlugin;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var SharedStylesHost = /** @class */ (function () {
        function SharedStylesHost() {
            /** @internal */
            this._stylesSet = new Set();
        }
        SharedStylesHost.prototype.addStyles = function (styles) {
            var _this = this;
            var additions = new Set();
            styles.forEach(function (style) {
                if (!_this._stylesSet.has(style)) {
                    _this._stylesSet.add(style);
                    additions.add(style);
                }
            });
            this.onStylesAdded(additions);
        };
        SharedStylesHost.prototype.onStylesAdded = function (additions) { };
        SharedStylesHost.prototype.getAllStyles = function () { return Array.from(this._stylesSet); };
        SharedStylesHost = __decorate([
            core.Injectable()
        ], SharedStylesHost);
        return SharedStylesHost;
    }());
    var DomSharedStylesHost = /** @class */ (function (_super) {
        __extends(DomSharedStylesHost, _super);
        function DomSharedStylesHost(_doc) {
            var _this = _super.call(this) || this;
            _this._doc = _doc;
            _this._hostNodes = new Set();
            _this._styleNodes = new Set();
            _this._hostNodes.add(_doc.head);
            return _this;
        }
        DomSharedStylesHost.prototype._addStylesToHost = function (styles, host) {
            var _this = this;
            styles.forEach(function (style) {
                var styleEl = _this._doc.createElement('style');
                styleEl.textContent = style;
                _this._styleNodes.add(host.appendChild(styleEl));
            });
        };
        DomSharedStylesHost.prototype.addHost = function (hostNode) {
            this._addStylesToHost(this._stylesSet, hostNode);
            this._hostNodes.add(hostNode);
        };
        DomSharedStylesHost.prototype.removeHost = function (hostNode) { this._hostNodes.delete(hostNode); };
        DomSharedStylesHost.prototype.onStylesAdded = function (additions) {
            var _this = this;
            this._hostNodes.forEach(function (hostNode) { return _this._addStylesToHost(additions, hostNode); });
        };
        DomSharedStylesHost.prototype.ngOnDestroy = function () { this._styleNodes.forEach(function (styleNode) { return getDOM().remove(styleNode); }); };
        DomSharedStylesHost = __decorate([
            core.Injectable(),
            __param(0, core.Inject(DOCUMENT$1$1)),
            __metadata("design:paramtypes", [Object])
        ], DomSharedStylesHost);
        return DomSharedStylesHost;
    }(SharedStylesHost));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var NAMESPACE_URIS = {
        'svg': 'http://www.w3.org/2000/svg',
        'xhtml': 'http://www.w3.org/1999/xhtml',
        'xlink': 'http://www.w3.org/1999/xlink',
        'xml': 'http://www.w3.org/XML/1998/namespace',
        'xmlns': 'http://www.w3.org/2000/xmlns/',
    };
    var COMPONENT_REGEX = /%COMP%/g;
    var COMPONENT_VARIABLE = '%COMP%';
    var HOST_ATTR = "_nghost-" + COMPONENT_VARIABLE;
    var CONTENT_ATTR = "_ngcontent-" + COMPONENT_VARIABLE;
    function shimContentAttribute(componentShortId) {
        return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
    }
    function shimHostAttribute(componentShortId) {
        return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
    }
    function flattenStyles(compId, styles, target) {
        for (var i = 0; i < styles.length; i++) {
            var style = styles[i];
            if (Array.isArray(style)) {
                flattenStyles(compId, style, target);
            }
            else {
                style = style.replace(COMPONENT_REGEX, compId);
                target.push(style);
            }
        }
        return target;
    }
    function decoratePreventDefault(eventHandler) {
        return function (event) {
            var allowDefaultBehavior = eventHandler(event);
            if (allowDefaultBehavior === false) {
                // TODO(tbosch): move preventDefault into event plugins...
                event.preventDefault();
                event.returnValue = false;
            }
        };
    }
    var DomRendererFactory2 = /** @class */ (function () {
        function DomRendererFactory2(eventManager, sharedStylesHost, appId) {
            this.eventManager = eventManager;
            this.sharedStylesHost = sharedStylesHost;
            this.appId = appId;
            this.rendererByCompId = new Map();
            this.defaultRenderer = new DefaultDomRenderer2(eventManager);
        }
        DomRendererFactory2.prototype.createRenderer = function (element, type) {
            if (!element || !type) {
                return this.defaultRenderer;
            }
            switch (type.encapsulation) {
                case core.ViewEncapsulation.Emulated: {
                    var renderer = this.rendererByCompId.get(type.id);
                    if (!renderer) {
                        renderer = new EmulatedEncapsulationDomRenderer2(this.eventManager, this.sharedStylesHost, type, this.appId);
                        this.rendererByCompId.set(type.id, renderer);
                    }
                    renderer.applyToHost(element);
                    return renderer;
                }
                case core.ViewEncapsulation.Native:
                case core.ViewEncapsulation.ShadowDom:
                    return new ShadowDomRenderer(this.eventManager, this.sharedStylesHost, element, type);
                default: {
                    if (!this.rendererByCompId.has(type.id)) {
                        var styles = flattenStyles(type.id, type.styles, []);
                        this.sharedStylesHost.addStyles(styles);
                        this.rendererByCompId.set(type.id, this.defaultRenderer);
                    }
                    return this.defaultRenderer;
                }
            }
        };
        DomRendererFactory2.prototype.begin = function () { };
        DomRendererFactory2.prototype.end = function () { };
        DomRendererFactory2 = __decorate([
            core.Injectable(),
            __param(2, core.Inject(core.APP_ID)),
            __metadata("design:paramtypes", [EventManager, DomSharedStylesHost, String])
        ], DomRendererFactory2);
        return DomRendererFactory2;
    }());
    var DefaultDomRenderer2 = /** @class */ (function () {
        function DefaultDomRenderer2(eventManager) {
            this.eventManager = eventManager;
            this.data = Object.create(null);
        }
        DefaultDomRenderer2.prototype.destroy = function () { };
        DefaultDomRenderer2.prototype.createElement = function (name, namespace) {
            if (namespace) {
                return document.createElementNS(NAMESPACE_URIS[namespace], name);
            }
            return document.createElement(name);
        };
        DefaultDomRenderer2.prototype.createComment = function (value) { return document.createComment(value); };
        DefaultDomRenderer2.prototype.createText = function (value) { return document.createTextNode(value); };
        DefaultDomRenderer2.prototype.appendChild = function (parent, newChild) { parent.appendChild(newChild); };
        DefaultDomRenderer2.prototype.insertBefore = function (parent, newChild, refChild) {
            if (parent) {
                parent.insertBefore(newChild, refChild);
            }
        };
        DefaultDomRenderer2.prototype.removeChild = function (parent, oldChild) {
            if (parent) {
                parent.removeChild(oldChild);
            }
        };
        DefaultDomRenderer2.prototype.selectRootElement = function (selectorOrNode, preserveContent) {
            var el = typeof selectorOrNode === 'string' ? document.querySelector(selectorOrNode) :
                selectorOrNode;
            if (!el) {
                throw new Error("The selector \"" + selectorOrNode + "\" did not match any elements");
            }
            if (!preserveContent) {
                el.textContent = '';
            }
            return el;
        };
        DefaultDomRenderer2.prototype.parentNode = function (node) { return node.parentNode; };
        DefaultDomRenderer2.prototype.nextSibling = function (node) { return node.nextSibling; };
        DefaultDomRenderer2.prototype.setAttribute = function (el, name, value, namespace) {
            if (namespace) {
                name = namespace + ":" + name;
                var namespaceUri = NAMESPACE_URIS[namespace];
                if (namespaceUri) {
                    el.setAttributeNS(namespaceUri, name, value);
                }
                else {
                    el.setAttribute(name, value);
                }
            }
            else {
                el.setAttribute(name, value);
            }
        };
        DefaultDomRenderer2.prototype.removeAttribute = function (el, name, namespace) {
            if (namespace) {
                var namespaceUri = NAMESPACE_URIS[namespace];
                if (namespaceUri) {
                    el.removeAttributeNS(namespaceUri, name);
                }
                else {
                    el.removeAttribute(namespace + ":" + name);
                }
            }
            else {
                el.removeAttribute(name);
            }
        };
        DefaultDomRenderer2.prototype.addClass = function (el, name) { el.classList.add(name); };
        DefaultDomRenderer2.prototype.removeClass = function (el, name) { el.classList.remove(name); };
        DefaultDomRenderer2.prototype.setStyle = function (el, style, value, flags) {
            if (flags & core.RendererStyleFlags2.DashCase) {
                el.style.setProperty(style, value, !!(flags & core.RendererStyleFlags2.Important) ? 'important' : '');
            }
            else {
                el.style[style] = value;
            }
        };
        DefaultDomRenderer2.prototype.removeStyle = function (el, style, flags) {
            if (flags & core.RendererStyleFlags2.DashCase) {
                el.style.removeProperty(style);
            }
            else {
                // IE requires '' instead of null
                // see https://github.com/angular/angular/issues/7916
                el.style[style] = '';
            }
        };
        DefaultDomRenderer2.prototype.setProperty = function (el, name, value) {
            checkNoSyntheticProp(name, 'property');
            el[name] = value;
        };
        DefaultDomRenderer2.prototype.setValue = function (node, value) { node.nodeValue = value; };
        DefaultDomRenderer2.prototype.listen = function (target, event, callback) {
            checkNoSyntheticProp(event, 'listener');
            if (typeof target === 'string') {
                return this.eventManager.addGlobalEventListener(target, event, decoratePreventDefault(callback));
            }
            return this.eventManager.addEventListener(target, event, decoratePreventDefault(callback));
        };
        return DefaultDomRenderer2;
    }());
    var AT_CHARCODE = '@'.charCodeAt(0);
    function checkNoSyntheticProp(name, nameKind) {
        if (name.charCodeAt(0) === AT_CHARCODE) {
            throw new Error("Found the synthetic " + nameKind + " " + name + ". Please include either \"BrowserAnimationsModule\" or \"NoopAnimationsModule\" in your application.");
        }
    }
    var EmulatedEncapsulationDomRenderer2 = /** @class */ (function (_super) {
        __extends(EmulatedEncapsulationDomRenderer2, _super);
        function EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, component, appId) {
            var _this = _super.call(this, eventManager) || this;
            _this.component = component;
            var styles = flattenStyles(appId + '-' + component.id, component.styles, []);
            sharedStylesHost.addStyles(styles);
            _this.contentAttr = shimContentAttribute(appId + '-' + component.id);
            _this.hostAttr = shimHostAttribute(appId + '-' + component.id);
            return _this;
        }
        EmulatedEncapsulationDomRenderer2.prototype.applyToHost = function (element) { _super.prototype.setAttribute.call(this, element, this.hostAttr, ''); };
        EmulatedEncapsulationDomRenderer2.prototype.createElement = function (parent, name) {
            var el = _super.prototype.createElement.call(this, parent, name);
            _super.prototype.setAttribute.call(this, el, this.contentAttr, '');
            return el;
        };
        return EmulatedEncapsulationDomRenderer2;
    }(DefaultDomRenderer2));
    var ShadowDomRenderer = /** @class */ (function (_super) {
        __extends(ShadowDomRenderer, _super);
        function ShadowDomRenderer(eventManager, sharedStylesHost, hostEl, component) {
            var _this = _super.call(this, eventManager) || this;
            _this.sharedStylesHost = sharedStylesHost;
            _this.hostEl = hostEl;
            _this.component = component;
            if (component.encapsulation === core.ViewEncapsulation.ShadowDom) {
                _this.shadowRoot = hostEl.attachShadow({ mode: 'open' });
            }
            else {
                _this.shadowRoot = hostEl.createShadowRoot();
            }
            _this.sharedStylesHost.addHost(_this.shadowRoot);
            var styles = flattenStyles(component.id, component.styles, []);
            for (var i = 0; i < styles.length; i++) {
                var styleEl = document.createElement('style');
                styleEl.textContent = styles[i];
                _this.shadowRoot.appendChild(styleEl);
            }
            return _this;
        }
        ShadowDomRenderer.prototype.nodeOrShadowRoot = function (node) { return node === this.hostEl ? this.shadowRoot : node; };
        ShadowDomRenderer.prototype.destroy = function () { this.sharedStylesHost.removeHost(this.shadowRoot); };
        ShadowDomRenderer.prototype.appendChild = function (parent, newChild) {
            return _super.prototype.appendChild.call(this, this.nodeOrShadowRoot(parent), newChild);
        };
        ShadowDomRenderer.prototype.insertBefore = function (parent, newChild, refChild) {
            return _super.prototype.insertBefore.call(this, this.nodeOrShadowRoot(parent), newChild, refChild);
        };
        ShadowDomRenderer.prototype.removeChild = function (parent, oldChild) {
            return _super.prototype.removeChild.call(this, this.nodeOrShadowRoot(parent), oldChild);
        };
        ShadowDomRenderer.prototype.parentNode = function (node) {
            return this.nodeOrShadowRoot(_super.prototype.parentNode.call(this, this.nodeOrShadowRoot(node)));
        };
        return ShadowDomRenderer;
    }(DefaultDomRenderer2));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ɵ0$2 = function (v) {
        return '__zone_symbol__' + v;
    };
    /**
     * Detect if Zone is present. If it is then use simple zone aware 'addEventListener'
     * since Angular can do much more
     * efficient bookkeeping than Zone can, because we have additional information. This speeds up
     * addEventListener by 3x.
     */
    var __symbol__ = (typeof Zone !== 'undefined') && Zone['__symbol__'] || ɵ0$2;
    var ADD_EVENT_LISTENER = __symbol__('addEventListener');
    var REMOVE_EVENT_LISTENER = __symbol__('removeEventListener');
    var symbolNames = {};
    var FALSE = 'FALSE';
    var ANGULAR = 'ANGULAR';
    var NATIVE_ADD_LISTENER = 'addEventListener';
    var NATIVE_REMOVE_LISTENER = 'removeEventListener';
    // use the same symbol string which is used in zone.js
    var stopSymbol = '__zone_symbol__propagationStopped';
    var stopMethodSymbol = '__zone_symbol__stopImmediatePropagation';
    var blackListedEvents = (typeof Zone !== 'undefined') && Zone[__symbol__('BLACK_LISTED_EVENTS')];
    var blackListedMap;
    if (blackListedEvents) {
        blackListedMap = {};
        blackListedEvents.forEach(function (eventName) { blackListedMap[eventName] = eventName; });
    }
    var isBlackListedEvent = function (eventName) {
        if (!blackListedMap) {
            return false;
        }
        return blackListedMap.hasOwnProperty(eventName);
    };
    // a global listener to handle all dom event,
    // so we do not need to create a closure every time
    var globalListener = function (event) {
        var symbolName = symbolNames[event.type];
        if (!symbolName) {
            return;
        }
        var taskDatas = this[symbolName];
        if (!taskDatas) {
            return;
        }
        var args = [event];
        if (taskDatas.length === 1) {
            // if taskDatas only have one element, just invoke it
            var taskData = taskDatas[0];
            if (taskData.zone !== Zone.current) {
                // only use Zone.run when Zone.current not equals to stored zone
                return taskData.zone.run(taskData.handler, this, args);
            }
            else {
                return taskData.handler.apply(this, args);
            }
        }
        else {
            // copy tasks as a snapshot to avoid event handlers remove
            // itself or others
            var copiedTasks = taskDatas.slice();
            for (var i = 0; i < copiedTasks.length; i++) {
                // if other listener call event.stopImmediatePropagation
                // just break
                if (event[stopSymbol] === true) {
                    break;
                }
                var taskData = copiedTasks[i];
                if (taskData.zone !== Zone.current) {
                    // only use Zone.run when Zone.current not equals to stored zone
                    taskData.zone.run(taskData.handler, this, args);
                }
                else {
                    taskData.handler.apply(this, args);
                }
            }
        }
    };
    var DomEventsPlugin = /** @class */ (function (_super) {
        __extends(DomEventsPlugin, _super);
        function DomEventsPlugin(doc, ngZone, platformId) {
            var _this = _super.call(this, doc) || this;
            _this.ngZone = ngZone;
            if (!platformId || !isPlatformServer(platformId)) {
                _this.patchEvent();
            }
            return _this;
        }
        DomEventsPlugin.prototype.patchEvent = function () {
            if (typeof Event === 'undefined' || !Event || !Event.prototype) {
                return;
            }
            if (Event.prototype[stopMethodSymbol]) {
                // already patched by zone.js
                return;
            }
            var delegate = Event.prototype[stopMethodSymbol] =
                Event.prototype.stopImmediatePropagation;
            Event.prototype.stopImmediatePropagation = function () {
                if (this) {
                    this[stopSymbol] = true;
                }
                // should call native delegate in case
                // in some environment part of the application
                // will not use the patched Event
                delegate && delegate.apply(this, arguments);
            };
        };
        // This plugin should come last in the list of plugins, because it accepts all
        // events.
        DomEventsPlugin.prototype.supports = function (eventName) { return true; };
        DomEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
            var _this = this;
            var zoneJsLoaded = element[ADD_EVENT_LISTENER];
            var callback = handler;
            // if zonejs is loaded and current zone is not ngZone
            // we keep Zone.current on target for later restoration.
            if (zoneJsLoaded && (!core.NgZone.isInAngularZone() || isBlackListedEvent(eventName))) {
                var symbolName = symbolNames[eventName];
                if (!symbolName) {
                    symbolName = symbolNames[eventName] = __symbol__(ANGULAR + eventName + FALSE);
                }
                var taskDatas = element[symbolName];
                var globalListenerRegistered = taskDatas && taskDatas.length > 0;
                if (!taskDatas) {
                    taskDatas = element[symbolName] = [];
                }
                var zone = isBlackListedEvent(eventName) ? Zone.root : Zone.current;
                if (taskDatas.length === 0) {
                    taskDatas.push({ zone: zone, handler: callback });
                }
                else {
                    var callbackRegistered = false;
                    for (var i = 0; i < taskDatas.length; i++) {
                        if (taskDatas[i].handler === callback) {
                            callbackRegistered = true;
                            break;
                        }
                    }
                    if (!callbackRegistered) {
                        taskDatas.push({ zone: zone, handler: callback });
                    }
                }
                if (!globalListenerRegistered) {
                    element[ADD_EVENT_LISTENER](eventName, globalListener, false);
                }
            }
            else {
                element[NATIVE_ADD_LISTENER](eventName, callback, false);
            }
            return function () { return _this.removeEventListener(element, eventName, callback); };
        };
        DomEventsPlugin.prototype.removeEventListener = function (target, eventName, callback) {
            var underlyingRemove = target[REMOVE_EVENT_LISTENER];
            // zone.js not loaded, use native removeEventListener
            if (!underlyingRemove) {
                return target[NATIVE_REMOVE_LISTENER].apply(target, [eventName, callback, false]);
            }
            var symbolName = symbolNames[eventName];
            var taskDatas = symbolName && target[symbolName];
            if (!taskDatas) {
                // addEventListener not using patched version
                // just call native removeEventListener
                return target[NATIVE_REMOVE_LISTENER].apply(target, [eventName, callback, false]);
            }
            // fix issue 20532, should be able to remove
            // listener which was added inside of ngZone
            var found = false;
            for (var i = 0; i < taskDatas.length; i++) {
                // remove listener from taskDatas if the callback equals
                if (taskDatas[i].handler === callback) {
                    found = true;
                    taskDatas.splice(i, 1);
                    break;
                }
            }
            if (found) {
                if (taskDatas.length === 0) {
                    // all listeners are removed, we can remove the globalListener from target
                    underlyingRemove.apply(target, [eventName, globalListener, false]);
                }
            }
            else {
                // not found in taskDatas, the callback may be added inside of ngZone
                // use native remove listener to remove the callback
                target[NATIVE_REMOVE_LISTENER].apply(target, [eventName, callback, false]);
            }
        };
        DomEventsPlugin = __decorate([
            core.Injectable(),
            __param(0, core.Inject(DOCUMENT$1$1)),
            __param(2, core.Optional()), __param(2, core.Inject(core.PLATFORM_ID)),
            __metadata("design:paramtypes", [Object, core.NgZone, Object])
        ], DomEventsPlugin);
        return DomEventsPlugin;
    }(EventManagerPlugin));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Supported HammerJS recognizer event names.
     */
    var EVENT_NAMES = {
        // pan
        'pan': true,
        'panstart': true,
        'panmove': true,
        'panend': true,
        'pancancel': true,
        'panleft': true,
        'panright': true,
        'panup': true,
        'pandown': true,
        // pinch
        'pinch': true,
        'pinchstart': true,
        'pinchmove': true,
        'pinchend': true,
        'pinchcancel': true,
        'pinchin': true,
        'pinchout': true,
        // press
        'press': true,
        'pressup': true,
        // rotate
        'rotate': true,
        'rotatestart': true,
        'rotatemove': true,
        'rotateend': true,
        'rotatecancel': true,
        // swipe
        'swipe': true,
        'swipeleft': true,
        'swiperight': true,
        'swipeup': true,
        'swipedown': true,
        // tap
        'tap': true,
    };
    /**
     * DI token for providing [HammerJS](http://hammerjs.github.io/) support to Angular.
     * @see `HammerGestureConfig`
     *
     * @publicApi
     */
    var HAMMER_GESTURE_CONFIG = new core.InjectionToken('HammerGestureConfig');
    /**
     * Injection token used to provide a {@link HammerLoader} to Angular.
     *
     * @publicApi
     */
    var HAMMER_LOADER = new core.InjectionToken('HammerLoader');
    /**
     * An injectable [HammerJS Manager](http://hammerjs.github.io/api/#hammer.manager)
     * for gesture recognition. Configures specific event recognition.
     * @publicApi
     */
    var HammerGestureConfig = /** @class */ (function () {
        function HammerGestureConfig() {
            /**
             * A set of supported event names for gestures to be used in Angular.
             * Angular supports all built-in recognizers, as listed in
             * [HammerJS documentation](http://hammerjs.github.io/).
             */
            this.events = [];
            /**
            * Maps gesture event names to a set of configuration options
            * that specify overrides to the default values for specific properties.
            *
            * The key is a supported event name to be configured,
            * and the options object contains a set of properties, with override values
            * to be applied to the named recognizer event.
            * For example, to disable recognition of the rotate event, specify
            *  `{"rotate": {"enable": false}}`.
            *
            * Properties that are not present take the HammerJS default values.
            * For information about which properties are supported for which events,
            * and their allowed and default values, see
            * [HammerJS documentation](http://hammerjs.github.io/).
            *
            */
            this.overrides = {};
        }
        /**
         * Creates a [HammerJS Manager](http://hammerjs.github.io/api/#hammer.manager)
         * and attaches it to a given HTML element.
         * @param element The element that will recognize gestures.
         * @returns A HammerJS event-manager object.
         */
        HammerGestureConfig.prototype.buildHammer = function (element) {
            var mc = new Hammer(element, this.options);
            mc.get('pinch').set({ enable: true });
            mc.get('rotate').set({ enable: true });
            for (var eventName in this.overrides) {
                mc.get(eventName).set(this.overrides[eventName]);
            }
            return mc;
        };
        HammerGestureConfig = __decorate([
            core.Injectable()
        ], HammerGestureConfig);
        return HammerGestureConfig;
    }());
    var HammerGesturesPlugin = /** @class */ (function (_super) {
        __extends(HammerGesturesPlugin, _super);
        function HammerGesturesPlugin(doc, _config, console, loader) {
            var _this = _super.call(this, doc) || this;
            _this._config = _config;
            _this.console = console;
            _this.loader = loader;
            return _this;
        }
        HammerGesturesPlugin.prototype.supports = function (eventName) {
            if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
                return false;
            }
            if (!window.Hammer && !this.loader) {
                this.console.warn("The \"" + eventName + "\" event cannot be bound because Hammer.JS is not " +
                    "loaded and no custom loader has been specified.");
                return false;
            }
            return true;
        };
        HammerGesturesPlugin.prototype.addEventListener = function (element, eventName, handler) {
            var _this = this;
            var zone = this.manager.getZone();
            eventName = eventName.toLowerCase();
            // If Hammer is not present but a loader is specified, we defer adding the event listener
            // until Hammer is loaded.
            if (!window.Hammer && this.loader) {
                // This `addEventListener` method returns a function to remove the added listener.
                // Until Hammer is loaded, the returned function needs to *cancel* the registration rather
                // than remove anything.
                var cancelRegistration_1 = false;
                var deregister_1 = function () { cancelRegistration_1 = true; };
                this.loader()
                    .then(function () {
                    // If Hammer isn't actually loaded when the custom loader resolves, give up.
                    if (!window.Hammer) {
                        _this.console.warn("The custom HAMMER_LOADER completed, but Hammer.JS is not present.");
                        deregister_1 = function () { };
                        return;
                    }
                    if (!cancelRegistration_1) {
                        // Now that Hammer is loaded and the listener is being loaded for real,
                        // the deregistration function changes from canceling registration to removal.
                        deregister_1 = _this.addEventListener(element, eventName, handler);
                    }
                })
                    .catch(function () {
                    _this.console.warn("The \"" + eventName + "\" event cannot be bound because the custom " +
                        "Hammer.JS loader failed.");
                    deregister_1 = function () { };
                });
                // Return a function that *executes* `deregister` (and not `deregister` itself) so that we
                // can change the behavior of `deregister` once the listener is added. Using a closure in
                // this way allows us to avoid any additional data structures to track listener removal.
                return function () { deregister_1(); };
            }
            return zone.runOutsideAngular(function () {
                // Creating the manager bind events, must be done outside of angular
                var mc = _this._config.buildHammer(element);
                var callback = function (eventObj) {
                    zone.runGuarded(function () { handler(eventObj); });
                };
                mc.on(eventName, callback);
                return function () {
                    mc.off(eventName, callback);
                    // destroy mc to prevent memory leak
                    if (typeof mc.destroy === 'function') {
                        mc.destroy();
                    }
                };
            });
        };
        HammerGesturesPlugin.prototype.isCustomEvent = function (eventName) { return this._config.events.indexOf(eventName) > -1; };
        HammerGesturesPlugin = __decorate([
            core.Injectable(),
            __param(0, core.Inject(DOCUMENT$1$1)),
            __param(1, core.Inject(HAMMER_GESTURE_CONFIG)),
            __param(3, core.Optional()), __param(3, core.Inject(HAMMER_LOADER)),
            __metadata("design:paramtypes", [Object, HammerGestureConfig, core.ɵConsole, Object])
        ], HammerGesturesPlugin);
        return HammerGesturesPlugin;
    }(EventManagerPlugin));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Defines supported modifiers for key events.
     */
    var MODIFIER_KEYS = ['alt', 'control', 'meta', 'shift'];
    var ɵ0$1$1 = function (event) { return event.altKey; }, ɵ1$1 = function (event) { return event.ctrlKey; }, ɵ2$1 = function (event) { return event.metaKey; }, ɵ3 = function (event) { return event.shiftKey; };
    /**
     * Retrieves modifiers from key-event objects.
     */
    var MODIFIER_KEY_GETTERS = {
        'alt': ɵ0$1$1,
        'control': ɵ1$1,
        'meta': ɵ2$1,
        'shift': ɵ3
    };
    /**
     * @publicApi
     * A browser plug-in that provides support for handling of key events in Angular.
     */
    var KeyEventsPlugin = /** @class */ (function (_super) {
        __extends(KeyEventsPlugin, _super);
        /**
         * Initializes an instance of the browser plug-in.
         * @param doc The document in which key events will be detected.
         */
        function KeyEventsPlugin(doc) {
            return _super.call(this, doc) || this;
        }
        KeyEventsPlugin_1 = KeyEventsPlugin;
        /**
          * Reports whether a named key event is supported.
          * @param eventName The event name to query.
          * @return True if the named key event is supported.
         */
        KeyEventsPlugin.prototype.supports = function (eventName) { return KeyEventsPlugin_1.parseEventName(eventName) != null; };
        /**
         * Registers a handler for a specific element and key event.
         * @param element The HTML element to receive event notifications.
         * @param eventName The name of the key event to listen for.
         * @param handler A function to call when the notification occurs. Receives the
         * event object as an argument.
         * @returns The key event that was registered.
        */
        KeyEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
            var parsedEvent = KeyEventsPlugin_1.parseEventName(eventName);
            var outsideHandler = KeyEventsPlugin_1.eventCallback(parsedEvent['fullKey'], handler, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular(function () {
                return getDOM().onAndCancel(element, parsedEvent['domEventName'], outsideHandler);
            });
        };
        KeyEventsPlugin.parseEventName = function (eventName) {
            var parts = eventName.toLowerCase().split('.');
            var domEventName = parts.shift();
            if ((parts.length === 0) || !(domEventName === 'keydown' || domEventName === 'keyup')) {
                return null;
            }
            var key = KeyEventsPlugin_1._normalizeKey(parts.pop());
            var fullKey = '';
            MODIFIER_KEYS.forEach(function (modifierName) {
                var index = parts.indexOf(modifierName);
                if (index > -1) {
                    parts.splice(index, 1);
                    fullKey += modifierName + '.';
                }
            });
            fullKey += key;
            if (parts.length != 0 || key.length === 0) {
                // returning null instead of throwing to let another plugin process the event
                return null;
            }
            var result = {};
            result['domEventName'] = domEventName;
            result['fullKey'] = fullKey;
            return result;
        };
        KeyEventsPlugin.getEventFullKey = function (event) {
            var fullKey = '';
            var key = getDOM().getEventKey(event);
            key = key.toLowerCase();
            if (key === ' ') {
                key = 'space'; // for readability
            }
            else if (key === '.') {
                key = 'dot'; // because '.' is used as a separator in event names
            }
            MODIFIER_KEYS.forEach(function (modifierName) {
                if (modifierName != key) {
                    var modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
                    if (modifierGetter(event)) {
                        fullKey += modifierName + '.';
                    }
                }
            });
            fullKey += key;
            return fullKey;
        };
        /**
         * Configures a handler callback for a key event.
         * @param fullKey The event name that combines all simultaneous keystrokes.
         * @param handler The function that responds to the key event.
         * @param zone The zone in which the event occurred.
         * @returns A callback function.
         */
        KeyEventsPlugin.eventCallback = function (fullKey, handler, zone) {
            return function (event /** TODO #9100 */) {
                if (KeyEventsPlugin_1.getEventFullKey(event) === fullKey) {
                    zone.runGuarded(function () { return handler(event); });
                }
            };
        };
        /** @internal */
        KeyEventsPlugin._normalizeKey = function (keyName) {
            // TODO: switch to a Map if the mapping grows too much
            switch (keyName) {
                case 'esc':
                    return 'escape';
                default:
                    return keyName;
            }
        };
        var KeyEventsPlugin_1;
        KeyEventsPlugin = KeyEventsPlugin_1 = __decorate([
            core.Injectable(),
            __param(0, core.Inject(DOCUMENT$1$1)),
            __metadata("design:paramtypes", [Object])
        ], KeyEventsPlugin);
        return KeyEventsPlugin;
    }(EventManagerPlugin));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
     * values to be safe to use in the different DOM contexts.
     *
     * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
     * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
     * the website.
     *
     * In specific situations, it might be necessary to disable sanitization, for example if the
     * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
     * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
     * methods, and then binding to that value from the template.
     *
     * These situations should be very rare, and extraordinary care must be taken to avoid creating a
     * Cross Site Scripting (XSS) security bug!
     *
     * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
     * close as possible to the source of the value, to make it easy to verify no security bug is
     * created by its use.
     *
     * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
     * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
     * code. The sanitizer leaves safe values intact.
     *
     * @security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
     * sanitization for the value passed in. Carefully check and audit all values and code paths going
     * into this call. Make sure any user data is appropriately escaped for this security context.
     * For more detail, see the [Security Guide](http://g.co/ng/security).
     *
     * @publicApi
     */
    var DomSanitizer = /** @class */ (function () {
        function DomSanitizer() {
        }
        return DomSanitizer;
    }());
    var DomSanitizerImpl = /** @class */ (function (_super) {
        __extends(DomSanitizerImpl, _super);
        function DomSanitizerImpl(_doc) {
            var _this = _super.call(this) || this;
            _this._doc = _doc;
            return _this;
        }
        DomSanitizerImpl.prototype.sanitize = function (ctx, value) {
            if (value == null)
                return null;
            switch (ctx) {
                case core.SecurityContext.NONE:
                    return value;
                case core.SecurityContext.HTML:
                    if (value instanceof SafeHtmlImpl)
                        return value.changingThisBreaksApplicationSecurity;
                    this.checkNotSafeValue(value, 'HTML');
                    return core.ɵ_sanitizeHtml(this._doc, String(value));
                case core.SecurityContext.STYLE:
                    if (value instanceof SafeStyleImpl)
                        return value.changingThisBreaksApplicationSecurity;
                    this.checkNotSafeValue(value, 'Style');
                    return core.ɵ_sanitizeStyle(value);
                case core.SecurityContext.SCRIPT:
                    if (value instanceof SafeScriptImpl)
                        return value.changingThisBreaksApplicationSecurity;
                    this.checkNotSafeValue(value, 'Script');
                    throw new Error('unsafe value used in a script context');
                case core.SecurityContext.URL:
                    if (value instanceof SafeResourceUrlImpl || value instanceof SafeUrlImpl) {
                        // Allow resource URLs in URL contexts, they are strictly more trusted.
                        return value.changingThisBreaksApplicationSecurity;
                    }
                    this.checkNotSafeValue(value, 'URL');
                    return core.ɵ_sanitizeUrl(String(value));
                case core.SecurityContext.RESOURCE_URL:
                    if (value instanceof SafeResourceUrlImpl) {
                        return value.changingThisBreaksApplicationSecurity;
                    }
                    this.checkNotSafeValue(value, 'ResourceURL');
                    throw new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)');
                default:
                    throw new Error("Unexpected SecurityContext " + ctx + " (see http://g.co/ng/security#xss)");
            }
        };
        DomSanitizerImpl.prototype.checkNotSafeValue = function (value, expectedType) {
            if (value instanceof SafeValueImpl) {
                throw new Error("Required a safe " + expectedType + ", got a " + value.getTypeName() + " " +
                    "(see http://g.co/ng/security#xss)");
            }
        };
        DomSanitizerImpl.prototype.bypassSecurityTrustHtml = function (value) { return new SafeHtmlImpl(value); };
        DomSanitizerImpl.prototype.bypassSecurityTrustStyle = function (value) { return new SafeStyleImpl(value); };
        DomSanitizerImpl.prototype.bypassSecurityTrustScript = function (value) { return new SafeScriptImpl(value); };
        DomSanitizerImpl.prototype.bypassSecurityTrustUrl = function (value) { return new SafeUrlImpl(value); };
        DomSanitizerImpl.prototype.bypassSecurityTrustResourceUrl = function (value) {
            return new SafeResourceUrlImpl(value);
        };
        DomSanitizerImpl = __decorate([
            core.Injectable(),
            __param(0, core.Inject(DOCUMENT$1$1)),
            __metadata("design:paramtypes", [Object])
        ], DomSanitizerImpl);
        return DomSanitizerImpl;
    }(DomSanitizer));
    var SafeValueImpl = /** @class */ (function () {
        function SafeValueImpl(changingThisBreaksApplicationSecurity) {
            this.changingThisBreaksApplicationSecurity = changingThisBreaksApplicationSecurity;
            // empty
        }
        SafeValueImpl.prototype.toString = function () {
            return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity +
                " (see http://g.co/ng/security#xss)";
        };
        return SafeValueImpl;
    }());
    var SafeHtmlImpl = /** @class */ (function (_super) {
        __extends(SafeHtmlImpl, _super);
        function SafeHtmlImpl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SafeHtmlImpl.prototype.getTypeName = function () { return 'HTML'; };
        return SafeHtmlImpl;
    }(SafeValueImpl));
    var SafeStyleImpl = /** @class */ (function (_super) {
        __extends(SafeStyleImpl, _super);
        function SafeStyleImpl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SafeStyleImpl.prototype.getTypeName = function () { return 'Style'; };
        return SafeStyleImpl;
    }(SafeValueImpl));
    var SafeScriptImpl = /** @class */ (function (_super) {
        __extends(SafeScriptImpl, _super);
        function SafeScriptImpl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SafeScriptImpl.prototype.getTypeName = function () { return 'Script'; };
        return SafeScriptImpl;
    }(SafeValueImpl));
    var SafeUrlImpl = /** @class */ (function (_super) {
        __extends(SafeUrlImpl, _super);
        function SafeUrlImpl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SafeUrlImpl.prototype.getTypeName = function () { return 'URL'; };
        return SafeUrlImpl;
    }(SafeValueImpl));
    var SafeResourceUrlImpl = /** @class */ (function (_super) {
        __extends(SafeResourceUrlImpl, _super);
        function SafeResourceUrlImpl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SafeResourceUrlImpl.prototype.getTypeName = function () { return 'ResourceURL'; };
        return SafeResourceUrlImpl;
    }(SafeValueImpl));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var INTERNAL_BROWSER_PLATFORM_PROVIDERS = [
        { provide: core.PLATFORM_ID, useValue: PLATFORM_BROWSER_ID },
        { provide: core.PLATFORM_INITIALIZER, useValue: initDomAdapter, multi: true },
        { provide: PlatformLocation$1, useClass: BrowserPlatformLocation, deps: [DOCUMENT$1$1] },
        { provide: DOCUMENT$1$1, useFactory: _document, deps: [] },
    ];
    /**
     * @security Replacing built-in sanitization providers exposes the application to XSS risks.
     * Attacker-controlled data introduced by an unsanitized provider could expose your
     * application to XSS risks. For more detail, see the [Security Guide](http://g.co/ng/security).
     * @publicApi
     */
    var BROWSER_SANITIZATION_PROVIDERS = [
        { provide: core.Sanitizer, useExisting: DomSanitizer },
        { provide: DomSanitizer, useClass: DomSanitizerImpl, deps: [DOCUMENT$1$1] },
    ];
    /**
     * @publicApi
     */
    var platformBrowser = core.createPlatformFactory(core.platformCore, 'browser', INTERNAL_BROWSER_PLATFORM_PROVIDERS);
    function initDomAdapter() {
        BrowserDomAdapter.makeCurrent();
        BrowserGetTestability.init();
    }
    function errorHandler() {
        return new core.ErrorHandler();
    }
    function _document() {
        return document;
    }
    var BROWSER_MODULE_PROVIDERS = [
        BROWSER_SANITIZATION_PROVIDERS,
        { provide: core.ɵAPP_ROOT, useValue: true },
        { provide: core.ErrorHandler, useFactory: errorHandler, deps: [] },
        {
            provide: EVENT_MANAGER_PLUGINS,
            useClass: DomEventsPlugin,
            multi: true,
            deps: [DOCUMENT$1$1, core.NgZone, core.PLATFORM_ID]
        },
        { provide: EVENT_MANAGER_PLUGINS, useClass: KeyEventsPlugin, multi: true, deps: [DOCUMENT$1$1] },
        {
            provide: EVENT_MANAGER_PLUGINS,
            useClass: HammerGesturesPlugin,
            multi: true,
            deps: [DOCUMENT$1$1, HAMMER_GESTURE_CONFIG, core.ɵConsole, [new core.Optional(), HAMMER_LOADER]]
        },
        { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig, deps: [] },
        {
            provide: DomRendererFactory2,
            useClass: DomRendererFactory2,
            deps: [EventManager, DomSharedStylesHost, core.APP_ID]
        },
        { provide: core.RendererFactory2, useExisting: DomRendererFactory2 },
        { provide: SharedStylesHost, useExisting: DomSharedStylesHost },
        { provide: DomSharedStylesHost, useClass: DomSharedStylesHost, deps: [DOCUMENT$1$1] },
        { provide: core.Testability, useClass: core.Testability, deps: [core.NgZone] },
        { provide: EventManager, useClass: EventManager, deps: [EVENT_MANAGER_PLUGINS, core.NgZone] },
        ELEMENT_PROBE_PROVIDERS,
    ];
    /**
     * Exports required infrastructure for all Angular apps.
     * Included by default in all Angular apps created with the CLI
     * `new` command.
     * Re-exports `CommonModule` and `ApplicationModule`, making their
     * exports and providers available to all apps.
     *
     * @publicApi
     */
    var BrowserModule = /** @class */ (function () {
        function BrowserModule(parentModule) {
            if (parentModule) {
                throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.");
            }
        }
        BrowserModule_1 = BrowserModule;
        /**
         * Configures a browser-based app to transition from a server-rendered app, if
         * one is present on the page.
         *
         * @param params An object containing an identifier for the app to transition.
         * The ID must match between the client and server versions of the app.
         * @returns The reconfigured `BrowserModule` to import into the app's root `AppModule`.
         */
        BrowserModule.withServerTransition = function (params) {
            return {
                ngModule: BrowserModule_1,
                providers: [
                    { provide: core.APP_ID, useValue: params.appId },
                    { provide: TRANSITION_ID, useExisting: core.APP_ID },
                    SERVER_TRANSITION_PROVIDERS,
                ],
            };
        };
        var BrowserModule_1;
        BrowserModule = BrowserModule_1 = __decorate([
            core.NgModule({ providers: BROWSER_MODULE_PROVIDERS, exports: [CommonModule$1, core.ApplicationModule] }),
            __param(0, core.Optional()), __param(0, core.SkipSelf()), __param(0, core.Inject(BrowserModule_1)),
            __metadata("design:paramtypes", [Object])
        ], BrowserModule);
        return BrowserModule;
    }());

    /**
     * Factory to create Meta service.
     */
    function createMeta() {
        return new Meta(core.inject(DOCUMENT$1$1));
    }
    /**
     * A service that can be used to get and add meta tags.
     *
     * @publicApi
     */
    var Meta = /** @class */ (function () {
        function Meta(_doc) {
            this._doc = _doc;
            this._dom = getDOM();
        }
        Meta.prototype.addTag = function (tag, forceCreation) {
            if (forceCreation === void 0) { forceCreation = false; }
            if (!tag)
                return null;
            return this._getOrCreateElement(tag, forceCreation);
        };
        Meta.prototype.addTags = function (tags, forceCreation) {
            var _this = this;
            if (forceCreation === void 0) { forceCreation = false; }
            if (!tags)
                return [];
            return tags.reduce(function (result, tag) {
                if (tag) {
                    result.push(_this._getOrCreateElement(tag, forceCreation));
                }
                return result;
            }, []);
        };
        Meta.prototype.getTag = function (attrSelector) {
            if (!attrSelector)
                return null;
            return this._dom.querySelector(this._doc, "meta[" + attrSelector + "]") || null;
        };
        Meta.prototype.getTags = function (attrSelector) {
            if (!attrSelector)
                return [];
            var list /*NodeList*/ = this._dom.querySelectorAll(this._doc, "meta[" + attrSelector + "]");
            return list ? [].slice.call(list) : [];
        };
        Meta.prototype.updateTag = function (tag, selector) {
            if (!tag)
                return null;
            selector = selector || this._parseSelector(tag);
            var meta = this.getTag(selector);
            if (meta) {
                return this._setMetaElementAttributes(tag, meta);
            }
            return this._getOrCreateElement(tag, true);
        };
        Meta.prototype.removeTag = function (attrSelector) { this.removeTagElement(this.getTag(attrSelector)); };
        Meta.prototype.removeTagElement = function (meta) {
            if (meta) {
                this._dom.remove(meta);
            }
        };
        Meta.prototype._getOrCreateElement = function (meta, forceCreation) {
            if (forceCreation === void 0) { forceCreation = false; }
            if (!forceCreation) {
                var selector = this._parseSelector(meta);
                var elem = this.getTag(selector);
                // It's allowed to have multiple elements with the same name so it's not enough to
                // just check that element with the same name already present on the page. We also need to
                // check if element has tag attributes
                if (elem && this._containsAttributes(meta, elem))
                    return elem;
            }
            var element = this._dom.createElement('meta');
            this._setMetaElementAttributes(meta, element);
            var head = this._dom.getElementsByTagName(this._doc, 'head')[0];
            this._dom.appendChild(head, element);
            return element;
        };
        Meta.prototype._setMetaElementAttributes = function (tag, el) {
            var _this = this;
            Object.keys(tag).forEach(function (prop) { return _this._dom.setAttribute(el, prop, tag[prop]); });
            return el;
        };
        Meta.prototype._parseSelector = function (tag) {
            var attr = tag.name ? 'name' : 'property';
            return attr + "=\"" + tag[attr] + "\"";
        };
        Meta.prototype._containsAttributes = function (tag, elem) {
            var _this = this;
            return Object.keys(tag).every(function (key) { return _this._dom.getAttribute(elem, key) === tag[key]; });
        };
        Meta.ngInjectableDef = core.defineInjectable({ factory: createMeta, token: Meta, providedIn: "root" });
        Meta = __decorate([
            core.Injectable({ providedIn: 'root', useFactory: createMeta, deps: [] }),
            __param(0, core.Inject(DOCUMENT$1$1)),
            __metadata("design:paramtypes", [Object])
        ], Meta);
        return Meta;
    }());

    /**
     * Factory to create Title service.
     */
    function createTitle() {
        return new Title(core.inject(DOCUMENT$1$1));
    }
    /**
     * A service that can be used to get and set the title of a current HTML document.
     *
     * Since an Angular application can't be bootstrapped on the entire HTML document (`<html>` tag)
     * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
     * (representing the `<title>` tag). Instead, this service can be used to set and get the current
     * title value.
     *
     * @publicApi
     */
    var Title = /** @class */ (function () {
        function Title(_doc) {
            this._doc = _doc;
        }
        /**
         * Get the title of the current HTML document.
         */
        Title.prototype.getTitle = function () { return getDOM().getTitle(this._doc); };
        /**
         * Set the title of the current HTML document.
         * @param newTitle
         */
        Title.prototype.setTitle = function (newTitle) { getDOM().setTitle(this._doc, newTitle); };
        Title.ngInjectableDef = core.defineInjectable({ factory: createTitle, token: Title, providedIn: "root" });
        Title = __decorate([
            core.Injectable({ providedIn: 'root', useFactory: createTitle, deps: [] }),
            __param(0, core.Inject(DOCUMENT$1$1)),
            __metadata("design:paramtypes", [Object])
        ], Title);
        return Title;
    }());
    function unescapeHtml(text) {
        var unescapedText = {
            '&a;': '&',
            '&q;': '"',
            '&s;': '\'',
            '&l;': '<',
            '&g;': '>',
        };
        return text.replace(/&[^;]+;/g, function (s) { return unescapedText[s]; });
    }
    /**
     * A key value store that is transferred from the application on the server side to the application
     * on the client side.
     *
     * `TransferState` will be available as an injectable token. To use it import
     * `ServerTransferStateModule` on the server and `BrowserTransferStateModule` on the client.
     *
     * The values in the store are serialized/deserialized using JSON.stringify/JSON.parse. So only
     * boolean, number, string, null and non-class objects will be serialized and deserialzied in a
     * non-lossy manner.
     *
     * @publicApi
     */
    var TransferState = /** @class */ (function () {
        function TransferState() {
            this.store = {};
            this.onSerializeCallbacks = {};
        }
        TransferState_1 = TransferState;
        /** @internal */
        TransferState.init = function (initState) {
            var transferState = new TransferState_1();
            transferState.store = initState;
            return transferState;
        };
        /**
         * Get the value corresponding to a key. Return `defaultValue` if key is not found.
         */
        TransferState.prototype.get = function (key, defaultValue) {
            return this.store[key] !== undefined ? this.store[key] : defaultValue;
        };
        /**
         * Set the value corresponding to a key.
         */
        TransferState.prototype.set = function (key, value) { this.store[key] = value; };
        /**
         * Remove a key from the store.
         */
        TransferState.prototype.remove = function (key) { delete this.store[key]; };
        /**
         * Test whether a key exists in the store.
         */
        TransferState.prototype.hasKey = function (key) { return this.store.hasOwnProperty(key); };
        /**
         * Register a callback to provide the value for a key when `toJson` is called.
         */
        TransferState.prototype.onSerialize = function (key, callback) {
            this.onSerializeCallbacks[key] = callback;
        };
        /**
         * Serialize the current state of the store to JSON.
         */
        TransferState.prototype.toJson = function () {
            // Call the onSerialize callbacks and put those values into the store.
            for (var key in this.onSerializeCallbacks) {
                if (this.onSerializeCallbacks.hasOwnProperty(key)) {
                    try {
                        this.store[key] = this.onSerializeCallbacks[key]();
                    }
                    catch (e) {
                        console.warn('Exception in onSerialize callback: ', e);
                    }
                }
            }
            return JSON.stringify(this.store);
        };
        var TransferState_1;
        TransferState = TransferState_1 = __decorate([
            core.Injectable()
        ], TransferState);
        return TransferState;
    }());
    function initTransferState(doc, appId) {
        // Locate the script tag with the JSON data transferred from the server.
        // The id of the script tag is set to the Angular appId + 'state'.
        var script = doc.getElementById(appId + '-state');
        var initialState = {};
        if (script && script.textContent) {
            try {
                initialState = JSON.parse(unescapeHtml(script.textContent));
            }
            catch (e) {
                console.warn('Exception while restoring TransferState for app ' + appId, e);
            }
        }
        return TransferState.init(initialState);
    }
    /**
     * NgModule to install on the client side while using the `TransferState` to transfer state from
     * server to client.
     *
     * @publicApi
     */
    var BrowserTransferStateModule = /** @class */ (function () {
        function BrowserTransferStateModule() {
        }
        BrowserTransferStateModule = __decorate([
            core.NgModule({
                providers: [{ provide: TransferState, useFactory: initTransferState, deps: [DOCUMENT$1$1, core.APP_ID] }],
            })
        ], BrowserTransferStateModule);
        return BrowserTransferStateModule;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @publicApi
     */
    var VERSION$2 = new core.Version('7.2.15');

    /**
     * @license Angular v7.2.13
     * (c) 2010-2019 Google LLC. https://angular.io/
     * License: MIT
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @description
     *
     * Base for events the Router goes through, as opposed to events tied to a specific
     * Route. `RouterEvent`s will only be fired one time for any given navigation.
     *
     * Example:
     *
     * ```
     * class MyService {
     *   constructor(public router: Router, logger: Logger) {
     *     router.events.pipe(
     *       filter(e => e instanceof RouterEvent)
     *     ).subscribe(e => {
     *       logger.log(e.id, e.url);
     *     });
     *   }
     * }
     * ```
     *
     * @publicApi
     */
    var RouterEvent = /** @class */ (function () {
        function RouterEvent(
        /** @docsNotRequired */
        id, 
        /** @docsNotRequired */
        url) {
            this.id = id;
            this.url = url;
        }
        return RouterEvent;
    }());
    /**
     * @description
     *
     * Represents an event triggered when a navigation starts.
     *
     * @publicApi
     */
    var NavigationStart = /** @class */ (function (_super) {
        __extends(NavigationStart, _super);
        function NavigationStart(
        /** @docsNotRequired */
        id, 
        /** @docsNotRequired */
        url, 
        /** @docsNotRequired */
        navigationTrigger, 
        /** @docsNotRequired */
        restoredState) {
            if (navigationTrigger === void 0) { navigationTrigger = 'imperative'; }
            if (restoredState === void 0) { restoredState = null; }
            var _this = _super.call(this, id, url) || this;
            _this.navigationTrigger = navigationTrigger;
            _this.restoredState = restoredState;
            return _this;
        }
        /** @docsNotRequired */
        NavigationStart.prototype.toString = function () { return "NavigationStart(id: " + this.id + ", url: '" + this.url + "')"; };
        return NavigationStart;
    }(RouterEvent));
    /**
     * @description
     *
     * Represents an event triggered when a navigation ends successfully.
     *
     * @publicApi
     */
    var NavigationEnd = /** @class */ (function (_super) {
        __extends(NavigationEnd, _super);
        function NavigationEnd(
        /** @docsNotRequired */
        id, 
        /** @docsNotRequired */
        url, 
        /** @docsNotRequired */
        urlAfterRedirects) {
            var _this = _super.call(this, id, url) || this;
            _this.urlAfterRedirects = urlAfterRedirects;
            return _this;
        }
        /** @docsNotRequired */
        NavigationEnd.prototype.toString = function () {
            return "NavigationEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "')";
        };
        return NavigationEnd;
    }(RouterEvent));
    /**
     * @description
     *
     * Represents an event triggered when a navigation is canceled.
     *
     * @publicApi
     */
    var NavigationCancel = /** @class */ (function (_super) {
        __extends(NavigationCancel, _super);
        function NavigationCancel(
        /** @docsNotRequired */
        id, 
        /** @docsNotRequired */
        url, 
        /** @docsNotRequired */
        reason) {
            var _this = _super.call(this, id, url) || this;
            _this.reason = reason;
            return _this;
        }
        /** @docsNotRequired */
        NavigationCancel.prototype.toString = function () { return "NavigationCancel(id: " + this.id + ", url: '" + this.url + "')"; };
        return NavigationCancel;
    }(RouterEvent));
    /**
     * @description
     *
     * Represents an event triggered when a navigation fails due to an unexpected error.
     *
     * @publicApi
     */
    var NavigationError = /** @class */ (function (_super) {
        __extends(NavigationError, _super);
        function NavigationError(
        /** @docsNotRequired */
        id, 
        /** @docsNotRequired */
        url, 
        /** @docsNotRequired */
        error) {
            var _this = _super.call(this, id, url) || this;
            _this.error = error;
            return _this;
        }
        /** @docsNotRequired */
        NavigationError.prototype.toString = function () {
            return "NavigationError(id: " + this.id + ", url: '" + this.url + "', error: " + this.error + ")";
        };
        return NavigationError;
    }(RouterEvent));
    /**
     * @description
     *
     * Represents an event triggered when routes are recognized.
     *
     * @publicApi
     */
    var RoutesRecognized = /** @class */ (function (_super) {
        __extends(RoutesRecognized, _super);
        function RoutesRecognized(
        /** @docsNotRequired */
        id, 
        /** @docsNotRequired */
        url, 
        /** @docsNotRequired */
        urlAfterRedirects, 
        /** @docsNotRequired */
        state) {
            var _this = _super.call(this, id, url) || this;
            _this.urlAfterRedirects = urlAfterRedirects;
            _this.state = state;
            return _this;
        }
        /** @docsNotRequired */
        RoutesRecognized.prototype.toString = function () {
            return "RoutesRecognized(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
        };
        return RoutesRecognized;
    }(RouterEvent));
    /**
     * @description
     *
     * Represents the start of the Guard phase of routing.
     *
     * @publicApi
     */
    var GuardsCheckStart = /** @class */ (function (_super) {
        __extends(GuardsCheckStart, _super);
        function GuardsCheckStart(
        /** @docsNotRequired */
        id, 
        /** @docsNotRequired */
        url, 
        /** @docsNotRequired */
        urlAfterRedirects, 
        /** @docsNotRequired */
        state) {
            var _this = _super.call(this, id, url) || this;
            _this.urlAfterRedirects = urlAfterRedirects;
            _this.state = state;
            return _this;
        }
        GuardsCheckStart.prototype.toString = function () {
            return "GuardsCheckStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
        };
        return GuardsCheckStart;
    }(RouterEvent));
    /**
     * @description
     *
     * Represents the end of the Guard phase of routing.
     *
     * @publicApi
     */
    var GuardsCheckEnd = /** @class */ (function (_super) {
        __extends(GuardsCheckEnd, _super);
        function GuardsCheckEnd(
        /** @docsNotRequired */
        id, 
        /** @docsNotRequired */
        url, 
        /** @docsNotRequired */
        urlAfterRedirects, 
        /** @docsNotRequired */
        state, 
        /** @docsNotRequired */
        shouldActivate) {
            var _this = _super.call(this, id, url) || this;
            _this.urlAfterRedirects = urlAfterRedirects;
            _this.state = state;
            _this.shouldActivate = shouldActivate;
            return _this;
        }
        GuardsCheckEnd.prototype.toString = function () {
            return "GuardsCheckEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ", shouldActivate: " + this.shouldActivate + ")";
        };
        return GuardsCheckEnd;
    }(RouterEvent));
    /**
     * @description
     *
     * Represents the start of the Resolve phase of routing. The timing of this
     * event may change, thus it's experimental. In the current iteration it will run
     * in the "resolve" phase whether there's things to resolve or not. In the future this
     * behavior may change to only run when there are things to be resolved.
     *
     * @publicApi
     */
    var ResolveStart = /** @class */ (function (_super) {
        __extends(ResolveStart, _super);
        function ResolveStart(
        /** @docsNotRequired */
        id, 
        /** @docsNotRequired */
        url, 
        /** @docsNotRequired */
        urlAfterRedirects, 
        /** @docsNotRequired */
        state) {
            var _this = _super.call(this, id, url) || this;
            _this.urlAfterRedirects = urlAfterRedirects;
            _this.state = state;
            return _this;
        }
        ResolveStart.prototype.toString = function () {
            return "ResolveStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
        };
        return ResolveStart;
    }(RouterEvent));
    /**
     * @description
     *
     * Represents the end of the Resolve phase of routing. See note on
     * `ResolveStart` for use of this experimental API.
     *
     * @publicApi
     */
    var ResolveEnd = /** @class */ (function (_super) {
        __extends(ResolveEnd, _super);
        function ResolveEnd(
        /** @docsNotRequired */
        id, 
        /** @docsNotRequired */
        url, 
        /** @docsNotRequired */
        urlAfterRedirects, 
        /** @docsNotRequired */
        state) {
            var _this = _super.call(this, id, url) || this;
            _this.urlAfterRedirects = urlAfterRedirects;
            _this.state = state;
            return _this;
        }
        ResolveEnd.prototype.toString = function () {
            return "ResolveEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
        };
        return ResolveEnd;
    }(RouterEvent));
    /**
     * @description
     *
     * Represents an event triggered before lazy loading a route config.
     *
     * @publicApi
     */
    var RouteConfigLoadStart = /** @class */ (function () {
        function RouteConfigLoadStart(
        /** @docsNotRequired */
        route) {
            this.route = route;
        }
        RouteConfigLoadStart.prototype.toString = function () { return "RouteConfigLoadStart(path: " + this.route.path + ")"; };
        return RouteConfigLoadStart;
    }());
    /**
     * @description
     *
     * Represents an event triggered when a route has been lazy loaded.
     *
     * @publicApi
     */
    var RouteConfigLoadEnd = /** @class */ (function () {
        function RouteConfigLoadEnd(
        /** @docsNotRequired */
        route) {
            this.route = route;
        }
        RouteConfigLoadEnd.prototype.toString = function () { return "RouteConfigLoadEnd(path: " + this.route.path + ")"; };
        return RouteConfigLoadEnd;
    }());
    /**
     * @description
     *
     * Represents the start of end of the Resolve phase of routing. See note on
     * `ChildActivationEnd` for use of this experimental API.
     *
     * @publicApi
     */
    var ChildActivationStart = /** @class */ (function () {
        function ChildActivationStart(
        /** @docsNotRequired */
        snapshot) {
            this.snapshot = snapshot;
        }
        ChildActivationStart.prototype.toString = function () {
            var path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || '';
            return "ChildActivationStart(path: '" + path + "')";
        };
        return ChildActivationStart;
    }());
    /**
     * @description
     *
     * Represents the start of end of the Resolve phase of routing. See note on
     * `ChildActivationStart` for use of this experimental API.
     *
     * @publicApi
     */
    var ChildActivationEnd = /** @class */ (function () {
        function ChildActivationEnd(
        /** @docsNotRequired */
        snapshot) {
            this.snapshot = snapshot;
        }
        ChildActivationEnd.prototype.toString = function () {
            var path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || '';
            return "ChildActivationEnd(path: '" + path + "')";
        };
        return ChildActivationEnd;
    }());
    /**
     * @description
     *
     * Represents the start of end of the Resolve phase of routing. See note on
     * `ActivationEnd` for use of this experimental API.
     *
     * @publicApi
     */
    var ActivationStart = /** @class */ (function () {
        function ActivationStart(
        /** @docsNotRequired */
        snapshot) {
            this.snapshot = snapshot;
        }
        ActivationStart.prototype.toString = function () {
            var path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || '';
            return "ActivationStart(path: '" + path + "')";
        };
        return ActivationStart;
    }());
    /**
     * @description
     *
     * Represents the start of end of the Resolve phase of routing. See note on
     * `ActivationStart` for use of this experimental API.
     *
     * @publicApi
     */
    var ActivationEnd = /** @class */ (function () {
        function ActivationEnd(
        /** @docsNotRequired */
        snapshot) {
            this.snapshot = snapshot;
        }
        ActivationEnd.prototype.toString = function () {
            var path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || '';
            return "ActivationEnd(path: '" + path + "')";
        };
        return ActivationEnd;
    }());
    /**
     * @description
     *
     * Represents a scrolling event.
     *
     * @publicApi
     */
    var Scroll = /** @class */ (function () {
        function Scroll(
        /** @docsNotRequired */
        routerEvent, 
        /** @docsNotRequired */
        position, 
        /** @docsNotRequired */
        anchor) {
            this.routerEvent = routerEvent;
            this.position = position;
            this.anchor = anchor;
        }
        Scroll.prototype.toString = function () {
            var pos = this.position ? this.position[0] + ", " + this.position[1] : null;
            return "Scroll(anchor: '" + this.anchor + "', position: '" + pos + "')";
        };
        return Scroll;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * This component is used internally within the router to be a placeholder when an empty
     * router-outlet is needed. For example, with a config such as:
     *
     * `{path: 'parent', outlet: 'nav', children: [...]}`
     *
     * In order to render, there needs to be a component on this config, which will default
     * to this `EmptyOutletComponent`.
     */
    var EmptyOutletComponent = /** @class */ (function () {
        function EmptyOutletComponent() {
        }
        EmptyOutletComponent = __decorate([
            core.Component({ template: "<router-outlet></router-outlet>" })
        ], EmptyOutletComponent);
        return EmptyOutletComponent;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @description
     *
     * Name of the primary outlet.
     *
     * @publicApi
     */
    var PRIMARY_OUTLET = 'primary';
    var ParamsAsMap = /** @class */ (function () {
        function ParamsAsMap(params) {
            this.params = params || {};
        }
        ParamsAsMap.prototype.has = function (name) { return this.params.hasOwnProperty(name); };
        ParamsAsMap.prototype.get = function (name) {
            if (this.has(name)) {
                var v = this.params[name];
                return Array.isArray(v) ? v[0] : v;
            }
            return null;
        };
        ParamsAsMap.prototype.getAll = function (name) {
            if (this.has(name)) {
                var v = this.params[name];
                return Array.isArray(v) ? v : [v];
            }
            return [];
        };
        Object.defineProperty(ParamsAsMap.prototype, "keys", {
            get: function () { return Object.keys(this.params); },
            enumerable: true,
            configurable: true
        });
        return ParamsAsMap;
    }());
    /**
     * Convert a `Params` instance to a `ParamMap`.
     *
     * @publicApi
     */
    function convertToParamMap(params) {
        return new ParamsAsMap(params);
    }
    var NAVIGATION_CANCELING_ERROR = 'ngNavigationCancelingError';
    function navigationCancelingError(message) {
        var error = Error('NavigationCancelingError: ' + message);
        error[NAVIGATION_CANCELING_ERROR] = true;
        return error;
    }
    function isNavigationCancelingError(error) {
        return error && error[NAVIGATION_CANCELING_ERROR];
    }
    // Matches the route configuration (`route`) against the actual URL (`segments`).
    function defaultUrlMatcher(segments, segmentGroup, route) {
        var parts = route.path.split('/');
        if (parts.length > segments.length) {
            // The actual URL is shorter than the config, no match
            return null;
        }
        if (route.pathMatch === 'full' &&
            (segmentGroup.hasChildren() || parts.length < segments.length)) {
            // The config is longer than the actual URL but we are looking for a full match, return null
            return null;
        }
        var posParams = {};
        // Check each config part against the actual URL
        for (var index = 0; index < parts.length; index++) {
            var part = parts[index];
            var segment = segments[index];
            var isParameter = part.startsWith(':');
            if (isParameter) {
                posParams[part.substring(1)] = segment;
            }
            else if (part !== segment.path) {
                // The actual URL part does not match the config, no match
                return null;
            }
        }
        return { consumed: segments.slice(0, parts.length), posParams: posParams };
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var LoadedRouterConfig = /** @class */ (function () {
        function LoadedRouterConfig(routes, module) {
            this.routes = routes;
            this.module = module;
        }
        return LoadedRouterConfig;
    }());
    function validateConfig(config, parentPath) {
        if (parentPath === void 0) { parentPath = ''; }
        // forEach doesn't iterate undefined values
        for (var i = 0; i < config.length; i++) {
            var route = config[i];
            var fullPath = getFullPath(parentPath, route);
            validateNode(route, fullPath);
        }
    }
    function validateNode(route, fullPath) {
        if (!route) {
            throw new Error("\n      Invalid configuration of route '" + fullPath + "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    ");
        }
        if (Array.isArray(route)) {
            throw new Error("Invalid configuration of route '" + fullPath + "': Array cannot be specified");
        }
        if (!route.component && !route.children && !route.loadChildren &&
            (route.outlet && route.outlet !== PRIMARY_OUTLET)) {
            throw new Error("Invalid configuration of route '" + fullPath + "': a componentless route without children or loadChildren cannot have a named outlet set");
        }
        if (route.redirectTo && route.children) {
            throw new Error("Invalid configuration of route '" + fullPath + "': redirectTo and children cannot be used together");
        }
        if (route.redirectTo && route.loadChildren) {
            throw new Error("Invalid configuration of route '" + fullPath + "': redirectTo and loadChildren cannot be used together");
        }
        if (route.children && route.loadChildren) {
            throw new Error("Invalid configuration of route '" + fullPath + "': children and loadChildren cannot be used together");
        }
        if (route.redirectTo && route.component) {
            throw new Error("Invalid configuration of route '" + fullPath + "': redirectTo and component cannot be used together");
        }
        if (route.path && route.matcher) {
            throw new Error("Invalid configuration of route '" + fullPath + "': path and matcher cannot be used together");
        }
        if (route.redirectTo === void 0 && !route.component && !route.children && !route.loadChildren) {
            throw new Error("Invalid configuration of route '" + fullPath + "'. One of the following must be provided: component, redirectTo, children or loadChildren");
        }
        if (route.path === void 0 && route.matcher === void 0) {
            throw new Error("Invalid configuration of route '" + fullPath + "': routes must have either a path or a matcher specified");
        }
        if (typeof route.path === 'string' && route.path.charAt(0) === '/') {
            throw new Error("Invalid configuration of route '" + fullPath + "': path cannot start with a slash");
        }
        if (route.path === '' && route.redirectTo !== void 0 && route.pathMatch === void 0) {
            var exp = "The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.";
            throw new Error("Invalid configuration of route '{path: \"" + fullPath + "\", redirectTo: \"" + route.redirectTo + "\"}': please provide 'pathMatch'. " + exp);
        }
        if (route.pathMatch !== void 0 && route.pathMatch !== 'full' && route.pathMatch !== 'prefix') {
            throw new Error("Invalid configuration of route '" + fullPath + "': pathMatch can only be set to 'prefix' or 'full'");
        }
        if (route.children) {
            validateConfig(route.children, fullPath);
        }
    }
    function getFullPath(parentPath, currentRoute) {
        if (!currentRoute) {
            return parentPath;
        }
        if (!parentPath && !currentRoute.path) {
            return '';
        }
        else if (parentPath && !currentRoute.path) {
            return parentPath + "/";
        }
        else if (!parentPath && currentRoute.path) {
            return currentRoute.path;
        }
        else {
            return parentPath + "/" + currentRoute.path;
        }
    }
    /**
     * Makes a copy of the config and adds any default required properties.
     */
    function standardizeConfig(r) {
        var children = r.children && r.children.map(standardizeConfig);
        var c = children ? __assign({}, r, { children: children }) : __assign({}, r);
        if (!c.component && (children || c.loadChildren) && (c.outlet && c.outlet !== PRIMARY_OUTLET)) {
            c.component = EmptyOutletComponent;
        }
        return c;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function shallowEqualArrays(a, b) {
        if (a.length !== b.length)
            return false;
        for (var i = 0; i < a.length; ++i) {
            if (!shallowEqual(a[i], b[i]))
                return false;
        }
        return true;
    }
    function shallowEqual(a, b) {
        var k1 = Object.keys(a);
        var k2 = Object.keys(b);
        if (k1.length != k2.length) {
            return false;
        }
        var key;
        for (var i = 0; i < k1.length; i++) {
            key = k1[i];
            if (a[key] !== b[key]) {
                return false;
            }
        }
        return true;
    }
    /**
     * Flattens single-level nested arrays.
     */
    function flatten(arr) {
        return Array.prototype.concat.apply([], arr);
    }
    /**
     * Return the last element of an array.
     */
    function last$1(a) {
        return a.length > 0 ? a[a.length - 1] : null;
    }
    function forEach(map$$1, callback) {
        for (var prop in map$$1) {
            if (map$$1.hasOwnProperty(prop)) {
                callback(map$$1[prop], prop);
            }
        }
    }
    function waitForMap(obj, fn) {
        if (Object.keys(obj).length === 0) {
            return of({});
        }
        var waitHead = [];
        var waitTail = [];
        var res = {};
        forEach(obj, function (a, k) {
            var mapped = fn(k, a).pipe(map(function (r) { return res[k] = r; }));
            if (k === PRIMARY_OUTLET) {
                waitHead.push(mapped);
            }
            else {
                waitTail.push(mapped);
            }
        });
        // Closure compiler has problem with using spread operator here. So just using Array.concat.
        return of.apply(null, waitHead.concat(waitTail)).pipe(concatAll(), last(), map(function () { return res; }));
    }
    function wrapIntoObservable(value) {
        if (core.ɵisObservable(value)) {
            return value;
        }
        if (core.ɵisPromise(value)) {
            // Use `Promise.resolve()` to wrap promise-like instances.
            // Required ie when a Resolver returns a AngularJS `$q` promise to correctly trigger the
            // change detection.
            return from(Promise.resolve(value));
        }
        return of(value);
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function createEmptyUrlTree() {
        return new UrlTree(new UrlSegmentGroup([], {}), {}, null);
    }
    function containsTree(container, containee, exact) {
        if (exact) {
            return equalQueryParams(container.queryParams, containee.queryParams) &&
                equalSegmentGroups(container.root, containee.root);
        }
        return containsQueryParams(container.queryParams, containee.queryParams) &&
            containsSegmentGroup(container.root, containee.root);
    }
    function equalQueryParams(container, containee) {
        // TODO: This does not handle array params correctly.
        return shallowEqual(container, containee);
    }
    function equalSegmentGroups(container, containee) {
        if (!equalPath(container.segments, containee.segments))
            return false;
        if (container.numberOfChildren !== containee.numberOfChildren)
            return false;
        for (var c in containee.children) {
            if (!container.children[c])
                return false;
            if (!equalSegmentGroups(container.children[c], containee.children[c]))
                return false;
        }
        return true;
    }
    function containsQueryParams(container, containee) {
        // TODO: This does not handle array params correctly.
        return Object.keys(containee).length <= Object.keys(container).length &&
            Object.keys(containee).every(function (key) { return containee[key] === container[key]; });
    }
    function containsSegmentGroup(container, containee) {
        return containsSegmentGroupHelper(container, containee, containee.segments);
    }
    function containsSegmentGroupHelper(container, containee, containeePaths) {
        if (container.segments.length > containeePaths.length) {
            var current = container.segments.slice(0, containeePaths.length);
            if (!equalPath(current, containeePaths))
                return false;
            if (containee.hasChildren())
                return false;
            return true;
        }
        else if (container.segments.length === containeePaths.length) {
            if (!equalPath(container.segments, containeePaths))
                return false;
            for (var c in containee.children) {
                if (!container.children[c])
                    return false;
                if (!containsSegmentGroup(container.children[c], containee.children[c]))
                    return false;
            }
            return true;
        }
        else {
            var current = containeePaths.slice(0, container.segments.length);
            var next = containeePaths.slice(container.segments.length);
            if (!equalPath(container.segments, current))
                return false;
            if (!container.children[PRIMARY_OUTLET])
                return false;
            return containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next);
        }
    }
    /**
     * @description
     *
     * Represents the parsed URL.
     *
     * Since a router state is a tree, and the URL is nothing but a serialized state, the URL is a
     * serialized tree.
     * UrlTree is a data structure that provides a lot of affordances in dealing with URLs
     *
     * @usageNotes
     * ### Example
     *
     * ```
     * @Component({templateUrl:'template.html'})
     * class MyComponent {
     *   constructor(router: Router) {
     *     const tree: UrlTree =
     *       router.parseUrl('/team/33/(user/victor//support:help)?debug=true#fragment');
     *     const f = tree.fragment; // return 'fragment'
     *     const q = tree.queryParams; // returns {debug: 'true'}
     *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
     *     const s: UrlSegment[] = g.segments; // returns 2 segments 'team' and '33'
     *     g.children[PRIMARY_OUTLET].segments; // returns 2 segments 'user' and 'victor'
     *     g.children['support'].segments; // return 1 segment 'help'
     *   }
     * }
     * ```
     *
     * @publicApi
     */
    var UrlTree = /** @class */ (function () {
        /** @internal */
        function UrlTree(
        /** The root segment group of the URL tree */
        root, 
        /** The query params of the URL */
        queryParams, 
        /** The fragment of the URL */
        fragment) {
            this.root = root;
            this.queryParams = queryParams;
            this.fragment = fragment;
        }
        Object.defineProperty(UrlTree.prototype, "queryParamMap", {
            get: function () {
                if (!this._queryParamMap) {
                    this._queryParamMap = convertToParamMap(this.queryParams);
                }
                return this._queryParamMap;
            },
            enumerable: true,
            configurable: true
        });
        /** @docsNotRequired */
        UrlTree.prototype.toString = function () { return DEFAULT_SERIALIZER.serialize(this); };
        return UrlTree;
    }());
    /**
     * @description
     *
     * Represents the parsed URL segment group.
     *
     * See `UrlTree` for more information.
     *
     * @publicApi
     */
    var UrlSegmentGroup = /** @class */ (function () {
        function UrlSegmentGroup(
        /** The URL segments of this group. See `UrlSegment` for more information */
        segments, 
        /** The list of children of this group */
        children) {
            var _this = this;
            this.segments = segments;
            this.children = children;
            /** The parent node in the url tree */
            this.parent = null;
            forEach(children, function (v, k) { return v.parent = _this; });
        }
        /** Whether the segment has child segments */
        UrlSegmentGroup.prototype.hasChildren = function () { return this.numberOfChildren > 0; };
        Object.defineProperty(UrlSegmentGroup.prototype, "numberOfChildren", {
            /** Number of child segments */
            get: function () { return Object.keys(this.children).length; },
            enumerable: true,
            configurable: true
        });
        /** @docsNotRequired */
        UrlSegmentGroup.prototype.toString = function () { return serializePaths(this); };
        return UrlSegmentGroup;
    }());
    /**
     * @description
     *
     * Represents a single URL segment.
     *
     * A UrlSegment is a part of a URL between the two slashes. It contains a path and the matrix
     * parameters associated with the segment.
     *
     * @usageNotes
     * ### Example
     *
     * ```
     * @Component({templateUrl:'template.html'})
     * class MyComponent {
     *   constructor(router: Router) {
     *     const tree: UrlTree = router.parseUrl('/team;id=33');
     *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
     *     const s: UrlSegment[] = g.segments;
     *     s[0].path; // returns 'team'
     *     s[0].parameters; // returns {id: 33}
     *   }
     * }
     * ```
     *
     * @publicApi
     */
    var UrlSegment = /** @class */ (function () {
        function UrlSegment(
        /** The path part of a URL segment */
        path, 
        /** The matrix parameters associated with a segment */
        parameters) {
            this.path = path;
            this.parameters = parameters;
        }
        Object.defineProperty(UrlSegment.prototype, "parameterMap", {
            get: function () {
                if (!this._parameterMap) {
                    this._parameterMap = convertToParamMap(this.parameters);
                }
                return this._parameterMap;
            },
            enumerable: true,
            configurable: true
        });
        /** @docsNotRequired */
        UrlSegment.prototype.toString = function () { return serializePath(this); };
        return UrlSegment;
    }());
    function equalSegments(as, bs) {
        return equalPath(as, bs) && as.every(function (a, i) { return shallowEqual(a.parameters, bs[i].parameters); });
    }
    function equalPath(as, bs) {
        if (as.length !== bs.length)
            return false;
        return as.every(function (a, i) { return a.path === bs[i].path; });
    }
    function mapChildrenIntoArray(segment, fn) {
        var res = [];
        forEach(segment.children, function (child, childOutlet) {
            if (childOutlet === PRIMARY_OUTLET) {
                res = res.concat(fn(child, childOutlet));
            }
        });
        forEach(segment.children, function (child, childOutlet) {
            if (childOutlet !== PRIMARY_OUTLET) {
                res = res.concat(fn(child, childOutlet));
            }
        });
        return res;
    }
    /**
     * @description
     *
     * Serializes and deserializes a URL string into a URL tree.
     *
     * The url serialization strategy is customizable. You can
     * make all URLs case insensitive by providing a custom UrlSerializer.
     *
     * See `DefaultUrlSerializer` for an example of a URL serializer.
     *
     * @publicApi
     */
    var UrlSerializer = /** @class */ (function () {
        function UrlSerializer() {
        }
        return UrlSerializer;
    }());
    /**
     * @description
     *
     * A default implementation of the `UrlSerializer`.
     *
     * Example URLs:
     *
     * ```
     * /inbox/33(popup:compose)
     * /inbox/33;open=true/messages/44
     * ```
     *
     * DefaultUrlSerializer uses parentheses to serialize secondary segments (e.g., popup:compose), the
     * colon syntax to specify the outlet, and the ';parameter=value' syntax (e.g., open=true) to
     * specify route specific parameters.
     *
     * @publicApi
     */
    var DefaultUrlSerializer = /** @class */ (function () {
        function DefaultUrlSerializer() {
        }
        /** Parses a url into a `UrlTree` */
        DefaultUrlSerializer.prototype.parse = function (url) {
            var p = new UrlParser(url);
            return new UrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
        };
        /** Converts a `UrlTree` into a url */
        DefaultUrlSerializer.prototype.serialize = function (tree) {
            var segment = "/" + serializeSegment(tree.root, true);
            var query = serializeQueryParams(tree.queryParams);
            var fragment = typeof tree.fragment === "string" ? "#" + encodeUriFragment(tree.fragment) : '';
            return "" + segment + query + fragment;
        };
        return DefaultUrlSerializer;
    }());
    var DEFAULT_SERIALIZER = new DefaultUrlSerializer();
    function serializePaths(segment) {
        return segment.segments.map(function (p) { return serializePath(p); }).join('/');
    }
    function serializeSegment(segment, root) {
        if (!segment.hasChildren()) {
            return serializePaths(segment);
        }
        if (root) {
            var primary = segment.children[PRIMARY_OUTLET] ?
                serializeSegment(segment.children[PRIMARY_OUTLET], false) :
                '';
            var children_1 = [];
            forEach(segment.children, function (v, k) {
                if (k !== PRIMARY_OUTLET) {
                    children_1.push(k + ":" + serializeSegment(v, false));
                }
            });
            return children_1.length > 0 ? primary + "(" + children_1.join('//') + ")" : primary;
        }
        else {
            var children = mapChildrenIntoArray(segment, function (v, k) {
                if (k === PRIMARY_OUTLET) {
                    return [serializeSegment(segment.children[PRIMARY_OUTLET], false)];
                }
                return [k + ":" + serializeSegment(v, false)];
            });
            return serializePaths(segment) + "/(" + children.join('//') + ")";
        }
    }
    /**
     * Encodes a URI string with the default encoding. This function will only ever be called from
     * `encodeUriQuery` or `encodeUriSegment` as it's the base set of encodings to be used. We need
     * a custom encoding because encodeURIComponent is too aggressive and encodes stuff that doesn't
     * have to be encoded per https://url.spec.whatwg.org.
     */
    function encodeUriString(s) {
        return encodeURIComponent(s)
            .replace(/%40/g, '@')
            .replace(/%3A/gi, ':')
            .replace(/%24/g, '$')
            .replace(/%2C/gi, ',');
    }
    /**
     * This function should be used to encode both keys and values in a query string key/value. In
     * the following URL, you need to call encodeUriQuery on "k" and "v":
     *
     * http://www.site.org/html;mk=mv?k=v#f
     */
    function encodeUriQuery(s) {
        return encodeUriString(s).replace(/%3B/gi, ';');
    }
    /**
     * This function should be used to encode a URL fragment. In the following URL, you need to call
     * encodeUriFragment on "f":
     *
     * http://www.site.org/html;mk=mv?k=v#f
     */
    function encodeUriFragment(s) {
        return encodeURI(s);
    }
    /**
     * This function should be run on any URI segment as well as the key and value in a key/value
     * pair for matrix params. In the following URL, you need to call encodeUriSegment on "html",
     * "mk", and "mv":
     *
     * http://www.site.org/html;mk=mv?k=v#f
     */
    function encodeUriSegment(s) {
        return encodeUriString(s).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%26/gi, '&');
    }
    function decode(s) {
        return decodeURIComponent(s);
    }
    // Query keys/values should have the "+" replaced first, as "+" in a query string is " ".
    // decodeURIComponent function will not decode "+" as a space.
    function decodeQuery(s) {
        return decode(s.replace(/\+/g, '%20'));
    }
    function serializePath(path) {
        return "" + encodeUriSegment(path.path) + serializeMatrixParams(path.parameters);
    }
    function serializeMatrixParams(params) {
        return Object.keys(params)
            .map(function (key) { return ";" + encodeUriSegment(key) + "=" + encodeUriSegment(params[key]); })
            .join('');
    }
    function serializeQueryParams(params) {
        var strParams = Object.keys(params).map(function (name) {
            var value = params[name];
            return Array.isArray(value) ?
                value.map(function (v) { return encodeUriQuery(name) + "=" + encodeUriQuery(v); }).join('&') :
                encodeUriQuery(name) + "=" + encodeUriQuery(value);
        });
        return strParams.length ? "?" + strParams.join("&") : '';
    }
    var SEGMENT_RE = /^[^\/()?;=#]+/;
    function matchSegments(str) {
        var match = str.match(SEGMENT_RE);
        return match ? match[0] : '';
    }
    var QUERY_PARAM_RE = /^[^=?&#]+/;
    // Return the name of the query param at the start of the string or an empty string
    function matchQueryParams(str) {
        var match = str.match(QUERY_PARAM_RE);
        return match ? match[0] : '';
    }
    var QUERY_PARAM_VALUE_RE = /^[^?&#]+/;
    // Return the value of the query param at the start of the string or an empty string
    function matchUrlQueryParamValue(str) {
        var match = str.match(QUERY_PARAM_VALUE_RE);
        return match ? match[0] : '';
    }
    var UrlParser = /** @class */ (function () {
        function UrlParser(url) {
            this.url = url;
            this.remaining = url;
        }
        UrlParser.prototype.parseRootSegment = function () {
            this.consumeOptional('/');
            if (this.remaining === '' || this.peekStartsWith('?') || this.peekStartsWith('#')) {
                return new UrlSegmentGroup([], {});
            }
            // The root segment group never has segments
            return new UrlSegmentGroup([], this.parseChildren());
        };
        UrlParser.prototype.parseQueryParams = function () {
            var params = {};
            if (this.consumeOptional('?')) {
                do {
                    this.parseQueryParam(params);
                } while (this.consumeOptional('&'));
            }
            return params;
        };
        UrlParser.prototype.parseFragment = function () {
            return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
        };
        UrlParser.prototype.parseChildren = function () {
            if (this.remaining === '') {
                return {};
            }
            this.consumeOptional('/');
            var segments = [];
            if (!this.peekStartsWith('(')) {
                segments.push(this.parseSegment());
            }
            while (this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(')) {
                this.capture('/');
                segments.push(this.parseSegment());
            }
            var children = {};
            if (this.peekStartsWith('/(')) {
                this.capture('/');
                children = this.parseParens(true);
            }
            var res = {};
            if (this.peekStartsWith('(')) {
                res = this.parseParens(false);
            }
            if (segments.length > 0 || Object.keys(children).length > 0) {
                res[PRIMARY_OUTLET] = new UrlSegmentGroup(segments, children);
            }
            return res;
        };
        // parse a segment with its matrix parameters
        // ie `name;k1=v1;k2`
        UrlParser.prototype.parseSegment = function () {
            var path = matchSegments(this.remaining);
            if (path === '' && this.peekStartsWith(';')) {
                throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
            }
            this.capture(path);
            return new UrlSegment(decode(path), this.parseMatrixParams());
        };
        UrlParser.prototype.parseMatrixParams = function () {
            var params = {};
            while (this.consumeOptional(';')) {
                this.parseParam(params);
            }
            return params;
        };
        UrlParser.prototype.parseParam = function (params) {
            var key = matchSegments(this.remaining);
            if (!key) {
                return;
            }
            this.capture(key);
            var value = '';
            if (this.consumeOptional('=')) {
                var valueMatch = matchSegments(this.remaining);
                if (valueMatch) {
                    value = valueMatch;
                    this.capture(value);
                }
            }
            params[decode(key)] = decode(value);
        };
        // Parse a single query parameter `name[=value]`
        UrlParser.prototype.parseQueryParam = function (params) {
            var key = matchQueryParams(this.remaining);
            if (!key) {
                return;
            }
            this.capture(key);
            var value = '';
            if (this.consumeOptional('=')) {
                var valueMatch = matchUrlQueryParamValue(this.remaining);
                if (valueMatch) {
                    value = valueMatch;
                    this.capture(value);
                }
            }
            var decodedKey = decodeQuery(key);
            var decodedVal = decodeQuery(value);
            if (params.hasOwnProperty(decodedKey)) {
                // Append to existing values
                var currentVal = params[decodedKey];
                if (!Array.isArray(currentVal)) {
                    currentVal = [currentVal];
                    params[decodedKey] = currentVal;
                }
                currentVal.push(decodedVal);
            }
            else {
                // Create a new value
                params[decodedKey] = decodedVal;
            }
        };
        // parse `(a/b//outlet_name:c/d)`
        UrlParser.prototype.parseParens = function (allowPrimary) {
            var segments = {};
            this.capture('(');
            while (!this.consumeOptional(')') && this.remaining.length > 0) {
                var path = matchSegments(this.remaining);
                var next = this.remaining[path.length];
                // if is is not one of these characters, then the segment was unescaped
                // or the group was not closed
                if (next !== '/' && next !== ')' && next !== ';') {
                    throw new Error("Cannot parse url '" + this.url + "'");
                }
                var outletName = undefined;
                if (path.indexOf(':') > -1) {
                    outletName = path.substr(0, path.indexOf(':'));
                    this.capture(outletName);
                    this.capture(':');
                }
                else if (allowPrimary) {
                    outletName = PRIMARY_OUTLET;
                }
                var children = this.parseChildren();
                segments[outletName] = Object.keys(children).length === 1 ? children[PRIMARY_OUTLET] :
                    new UrlSegmentGroup([], children);
                this.consumeOptional('//');
            }
            return segments;
        };
        UrlParser.prototype.peekStartsWith = function (str) { return this.remaining.startsWith(str); };
        // Consumes the prefix when it is present and returns whether it has been consumed
        UrlParser.prototype.consumeOptional = function (str) {
            if (this.peekStartsWith(str)) {
                this.remaining = this.remaining.substring(str.length);
                return true;
            }
            return false;
        };
        UrlParser.prototype.capture = function (str) {
            if (!this.consumeOptional(str)) {
                throw new Error("Expected \"" + str + "\".");
            }
        };
        return UrlParser;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var Tree = /** @class */ (function () {
        function Tree(root) {
            this._root = root;
        }
        Object.defineProperty(Tree.prototype, "root", {
            get: function () { return this._root.value; },
            enumerable: true,
            configurable: true
        });
        /**
         * @internal
         */
        Tree.prototype.parent = function (t) {
            var p = this.pathFromRoot(t);
            return p.length > 1 ? p[p.length - 2] : null;
        };
        /**
         * @internal
         */
        Tree.prototype.children = function (t) {
            var n = findNode(t, this._root);
            return n ? n.children.map(function (t) { return t.value; }) : [];
        };
        /**
         * @internal
         */
        Tree.prototype.firstChild = function (t) {
            var n = findNode(t, this._root);
            return n && n.children.length > 0 ? n.children[0].value : null;
        };
        /**
         * @internal
         */
        Tree.prototype.siblings = function (t) {
            var p = findPath(t, this._root);
            if (p.length < 2)
                return [];
            var c = p[p.length - 2].children.map(function (c) { return c.value; });
            return c.filter(function (cc) { return cc !== t; });
        };
        /**
         * @internal
         */
        Tree.prototype.pathFromRoot = function (t) { return findPath(t, this._root).map(function (s) { return s.value; }); };
        return Tree;
    }());
    // DFS for the node matching the value
    function findNode(value, node) {
        var e_1, _a;
        if (value === node.value)
            return node;
        try {
            for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                var node_1 = findNode(value, child);
                if (node_1)
                    return node_1;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    }
    // Return the path to the node with the given value using DFS
    function findPath(value, node) {
        var e_2, _a;
        if (value === node.value)
            return [node];
        try {
            for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                var path = findPath(value, child);
                if (path.length) {
                    path.unshift(node);
                    return path;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return [];
    }
    var TreeNode = /** @class */ (function () {
        function TreeNode(value, children) {
            this.value = value;
            this.children = children;
        }
        TreeNode.prototype.toString = function () { return "TreeNode(" + this.value + ")"; };
        return TreeNode;
    }());
    // Return the list of T indexed by outlet name
    function nodeChildrenAsMap(node) {
        var map$$1 = {};
        if (node) {
            node.children.forEach(function (child) { return map$$1[child.value.outlet] = child; });
        }
        return map$$1;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @description
     *
     * Represents the state of the router.
     *
     * RouterState is a tree of activated routes. Every node in this tree knows about the "consumed" URL
     * segments, the extracted parameters, and the resolved data.
     *
     * @usageNotes
     * ### Example
     *
     * ```
     * @Component({templateUrl:'template.html'})
     * class MyComponent {
     *   constructor(router: Router) {
     *     const state: RouterState = router.routerState;
     *     const root: ActivatedRoute = state.root;
     *     const child = root.firstChild;
     *     const id: Observable<string> = child.params.map(p => p.id);
     *     //...
     *   }
     * }
     * ```
     *
     * See `ActivatedRoute` for more information.
     *
     * @publicApi
     */
    var RouterState = /** @class */ (function (_super) {
        __extends(RouterState, _super);
        /** @internal */
        function RouterState(root, 
        /** The current snapshot of the router state */
        snapshot) {
            var _this = _super.call(this, root) || this;
            _this.snapshot = snapshot;
            setRouterState(_this, root);
            return _this;
        }
        RouterState.prototype.toString = function () { return this.snapshot.toString(); };
        return RouterState;
    }(Tree));
    function createEmptyState(urlTree, rootComponent) {
        var snapshot = createEmptyStateSnapshot(urlTree, rootComponent);
        var emptyUrl = new BehaviorSubject([new UrlSegment('', {})]);
        var emptyParams = new BehaviorSubject({});
        var emptyData = new BehaviorSubject({});
        var emptyQueryParams = new BehaviorSubject({});
        var fragment = new BehaviorSubject('');
        var activated = new ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, snapshot.root);
        activated.snapshot = snapshot.root;
        return new RouterState(new TreeNode(activated, []), snapshot);
    }
    function createEmptyStateSnapshot(urlTree, rootComponent) {
        var emptyParams = {};
        var emptyData = {};
        var emptyQueryParams = {};
        var fragment = '';
        var activated = new ActivatedRouteSnapshot([], emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, null, urlTree.root, -1, {});
        return new RouterStateSnapshot('', new TreeNode(activated, []));
    }
    /**
     * @description
     *
     * Contains the information about a route associated with a component loaded in an
     * outlet.  An `ActivatedRoute` can also be used to traverse the router state tree.
     *
     * ```
     * @Component({...})
     * class MyComponent {
     *   constructor(route: ActivatedRoute) {
     *     const id: Observable<string> = route.params.pipe(map(p => p.id));
     *     const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
     *     // route.data includes both `data` and `resolve`
     *     const user = route.data.pipe(map(d => d.user));
     *   }
     * }
     * ```
     *
     * @publicApi
     */
    var ActivatedRoute = /** @class */ (function () {
        /** @internal */
        function ActivatedRoute(
        /** An observable of the URL segments matched by this route */
        url, 
        /** An observable of the matrix parameters scoped to this route */
        params, 
        /** An observable of the query parameters shared by all the routes */
        queryParams, 
        /** An observable of the URL fragment shared by all the routes */
        fragment, 
        /** An observable of the static and resolved data of this route. */
        data, 
        /** The outlet name of the route. It's a constant */
        outlet, 
        /** The component of the route. It's a constant */
        // TODO(vsavkin): remove |string
        component, futureSnapshot) {
            this.url = url;
            this.params = params;
            this.queryParams = queryParams;
            this.fragment = fragment;
            this.data = data;
            this.outlet = outlet;
            this.component = component;
            this._futureSnapshot = futureSnapshot;
        }
        Object.defineProperty(ActivatedRoute.prototype, "routeConfig", {
            /** The configuration used to match this route */
            get: function () { return this._futureSnapshot.routeConfig; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActivatedRoute.prototype, "root", {
            /** The root of the router state */
            get: function () { return this._routerState.root; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActivatedRoute.prototype, "parent", {
            /** The parent of this route in the router state tree */
            get: function () { return this._routerState.parent(this); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActivatedRoute.prototype, "firstChild", {
            /** The first child of this route in the router state tree */
            get: function () { return this._routerState.firstChild(this); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActivatedRoute.prototype, "children", {
            /** The children of this route in the router state tree */
            get: function () { return this._routerState.children(this); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActivatedRoute.prototype, "pathFromRoot", {
            /** The path from the root of the router state tree to this route */
            get: function () { return this._routerState.pathFromRoot(this); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActivatedRoute.prototype, "paramMap", {
            get: function () {
                if (!this._paramMap) {
                    this._paramMap = this.params.pipe(map(function (p) { return convertToParamMap(p); }));
                }
                return this._paramMap;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActivatedRoute.prototype, "queryParamMap", {
            get: function () {
                if (!this._queryParamMap) {
                    this._queryParamMap =
                        this.queryParams.pipe(map(function (p) { return convertToParamMap(p); }));
                }
                return this._queryParamMap;
            },
            enumerable: true,
            configurable: true
        });
        ActivatedRoute.prototype.toString = function () {
            return this.snapshot ? this.snapshot.toString() : "Future(" + this._futureSnapshot + ")";
        };
        return ActivatedRoute;
    }());
    /**
     * Returns the inherited params, data, and resolve for a given route.
     * By default, this only inherits values up to the nearest path-less or component-less route.
     * @internal
     */
    function inheritedParamsDataResolve(route, paramsInheritanceStrategy) {
        if (paramsInheritanceStrategy === void 0) { paramsInheritanceStrategy = 'emptyOnly'; }
        var pathFromRoot = route.pathFromRoot;
        var inheritingStartingFrom = 0;
        if (paramsInheritanceStrategy !== 'always') {
            inheritingStartingFrom = pathFromRoot.length - 1;
            while (inheritingStartingFrom >= 1) {
                var current = pathFromRoot[inheritingStartingFrom];
                var parent_1 = pathFromRoot[inheritingStartingFrom - 1];
                // current route is an empty path => inherits its parent's params and data
                if (current.routeConfig && current.routeConfig.path === '') {
                    inheritingStartingFrom--;
                    // parent is componentless => current route should inherit its params and data
                }
                else if (!parent_1.component) {
                    inheritingStartingFrom--;
                }
                else {
                    break;
                }
            }
        }
        return flattenInherited(pathFromRoot.slice(inheritingStartingFrom));
    }
    /** @internal */
    function flattenInherited(pathFromRoot) {
        return pathFromRoot.reduce(function (res, curr) {
            var params = __assign({}, res.params, curr.params);
            var data = __assign({}, res.data, curr.data);
            var resolve = __assign({}, res.resolve, curr._resolvedData);
            return { params: params, data: data, resolve: resolve };
        }, { params: {}, data: {}, resolve: {} });
    }
    /**
     * @description
     *
     * Contains the information about a route associated with a component loaded in an
     * outlet at a particular moment in time. ActivatedRouteSnapshot can also be used to
     * traverse the router state tree.
     *
     * ```
     * @Component({templateUrl:'./my-component.html'})
     * class MyComponent {
     *   constructor(route: ActivatedRoute) {
     *     const id: string = route.snapshot.params.id;
     *     const url: string = route.snapshot.url.join('');
     *     const user = route.snapshot.data.user;
     *   }
     * }
     * ```
     *
     * @publicApi
     */
    var ActivatedRouteSnapshot = /** @class */ (function () {
        /** @internal */
        function ActivatedRouteSnapshot(
        /** The URL segments matched by this route */
        url, 
        /** The matrix parameters scoped to this route */
        params, 
        /** The query parameters shared by all the routes */
        queryParams, 
        /** The URL fragment shared by all the routes */
        fragment, 
        /** The static and resolved data of this route */
        data, 
        /** The outlet name of the route */
        outlet, 
        /** The component of the route */
        component, routeConfig, urlSegment, lastPathIndex, resolve) {
            this.url = url;
            this.params = params;
            this.queryParams = queryParams;
            this.fragment = fragment;
            this.data = data;
            this.outlet = outlet;
            this.component = component;
            this.routeConfig = routeConfig;
            this._urlSegment = urlSegment;
            this._lastPathIndex = lastPathIndex;
            this._resolve = resolve;
        }
        Object.defineProperty(ActivatedRouteSnapshot.prototype, "root", {
            /** The root of the router state */
            get: function () { return this._routerState.root; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActivatedRouteSnapshot.prototype, "parent", {
            /** The parent of this route in the router state tree */
            get: function () { return this._routerState.parent(this); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActivatedRouteSnapshot.prototype, "firstChild", {
            /** The first child of this route in the router state tree */
            get: function () { return this._routerState.firstChild(this); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActivatedRouteSnapshot.prototype, "children", {
            /** The children of this route in the router state tree */
            get: function () { return this._routerState.children(this); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActivatedRouteSnapshot.prototype, "pathFromRoot", {
            /** The path from the root of the router state tree to this route */
            get: function () { return this._routerState.pathFromRoot(this); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActivatedRouteSnapshot.prototype, "paramMap", {
            get: function () {
                if (!this._paramMap) {
                    this._paramMap = convertToParamMap(this.params);
                }
                return this._paramMap;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActivatedRouteSnapshot.prototype, "queryParamMap", {
            get: function () {
                if (!this._queryParamMap) {
                    this._queryParamMap = convertToParamMap(this.queryParams);
                }
                return this._queryParamMap;
            },
            enumerable: true,
            configurable: true
        });
        ActivatedRouteSnapshot.prototype.toString = function () {
            var url = this.url.map(function (segment) { return segment.toString(); }).join('/');
            var matched = this.routeConfig ? this.routeConfig.path : '';
            return "Route(url:'" + url + "', path:'" + matched + "')";
        };
        return ActivatedRouteSnapshot;
    }());
    /**
     * @description
     *
     * Represents the state of the router at a moment in time.
     *
     * This is a tree of activated route snapshots. Every node in this tree knows about
     * the "consumed" URL segments, the extracted parameters, and the resolved data.
     *
     * @usageNotes
     * ### Example
     *
     * ```
     * @Component({templateUrl:'template.html'})
     * class MyComponent {
     *   constructor(router: Router) {
     *     const state: RouterState = router.routerState;
     *     const snapshot: RouterStateSnapshot = state.snapshot;
     *     const root: ActivatedRouteSnapshot = snapshot.root;
     *     const child = root.firstChild;
     *     const id: Observable<string> = child.params.map(p => p.id);
     *     //...
     *   }
     * }
     * ```
     *
     * @publicApi
     */
    var RouterStateSnapshot = /** @class */ (function (_super) {
        __extends(RouterStateSnapshot, _super);
        /** @internal */
        function RouterStateSnapshot(
        /** The url from which this snapshot was created */
        url, root) {
            var _this = _super.call(this, root) || this;
            _this.url = url;
            setRouterState(_this, root);
            return _this;
        }
        RouterStateSnapshot.prototype.toString = function () { return serializeNode(this._root); };
        return RouterStateSnapshot;
    }(Tree));
    function setRouterState(state, node) {
        node.value._routerState = state;
        node.children.forEach(function (c) { return setRouterState(state, c); });
    }
    function serializeNode(node) {
        var c = node.children.length > 0 ? " { " + node.children.map(serializeNode).join(', ') + " } " : '';
        return "" + node.value + c;
    }
    /**
     * The expectation is that the activate route is created with the right set of parameters.
     * So we push new values into the observables only when they are not the initial values.
     * And we detect that by checking if the snapshot field is set.
     */
    function advanceActivatedRoute(route) {
        if (route.snapshot) {
            var currentSnapshot = route.snapshot;
            var nextSnapshot = route._futureSnapshot;
            route.snapshot = nextSnapshot;
            if (!shallowEqual(currentSnapshot.queryParams, nextSnapshot.queryParams)) {
                route.queryParams.next(nextSnapshot.queryParams);
            }
            if (currentSnapshot.fragment !== nextSnapshot.fragment) {
                route.fragment.next(nextSnapshot.fragment);
            }
            if (!shallowEqual(currentSnapshot.params, nextSnapshot.params)) {
                route.params.next(nextSnapshot.params);
            }
            if (!shallowEqualArrays(currentSnapshot.url, nextSnapshot.url)) {
                route.url.next(nextSnapshot.url);
            }
            if (!shallowEqual(currentSnapshot.data, nextSnapshot.data)) {
                route.data.next(nextSnapshot.data);
            }
        }
        else {
            route.snapshot = route._futureSnapshot;
            // this is for resolved data
            route.data.next(route._futureSnapshot.data);
        }
    }
    function equalParamsAndUrlSegments(a, b) {
        var equalUrlParams = shallowEqual(a.params, b.params) && equalSegments(a.url, b.url);
        var parentsMismatch = !a.parent !== !b.parent;
        return equalUrlParams && !parentsMismatch &&
            (!a.parent || equalParamsAndUrlSegments(a.parent, b.parent));
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function createRouterState(routeReuseStrategy, curr, prevState) {
        var root = createNode(routeReuseStrategy, curr._root, prevState ? prevState._root : undefined);
        return new RouterState(root, curr);
    }
    function createNode(routeReuseStrategy, curr, prevState) {
        // reuse an activated route that is currently displayed on the screen
        if (prevState && routeReuseStrategy.shouldReuseRoute(curr.value, prevState.value.snapshot)) {
            var value = prevState.value;
            value._futureSnapshot = curr.value;
            var children = createOrReuseChildren(routeReuseStrategy, curr, prevState);
            return new TreeNode(value, children);
            // retrieve an activated route that is used to be displayed, but is not currently displayed
        }
        else {
            var detachedRouteHandle = routeReuseStrategy.retrieve(curr.value);
            if (detachedRouteHandle) {
                var tree = detachedRouteHandle.route;
                setFutureSnapshotsOfActivatedRoutes(curr, tree);
                return tree;
            }
            else {
                var value = createActivatedRoute(curr.value);
                var children = curr.children.map(function (c) { return createNode(routeReuseStrategy, c); });
                return new TreeNode(value, children);
            }
        }
    }
    function setFutureSnapshotsOfActivatedRoutes(curr, result) {
        if (curr.value.routeConfig !== result.value.routeConfig) {
            throw new Error('Cannot reattach ActivatedRouteSnapshot created from a different route');
        }
        if (curr.children.length !== result.children.length) {
            throw new Error('Cannot reattach ActivatedRouteSnapshot with a different number of children');
        }
        result.value._futureSnapshot = curr.value;
        for (var i = 0; i < curr.children.length; ++i) {
            setFutureSnapshotsOfActivatedRoutes(curr.children[i], result.children[i]);
        }
    }
    function createOrReuseChildren(routeReuseStrategy, curr, prevState) {
        return curr.children.map(function (child) {
            var e_1, _a;
            try {
                for (var _b = __values(prevState.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var p = _c.value;
                    if (routeReuseStrategy.shouldReuseRoute(p.value.snapshot, child.value)) {
                        return createNode(routeReuseStrategy, child, p);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return createNode(routeReuseStrategy, child);
        });
    }
    function createActivatedRoute(c) {
        return new ActivatedRoute(new BehaviorSubject(c.url), new BehaviorSubject(c.params), new BehaviorSubject(c.queryParams), new BehaviorSubject(c.fragment), new BehaviorSubject(c.data), c.outlet, c.component, c);
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function createUrlTree(route, urlTree, commands, queryParams, fragment) {
        if (commands.length === 0) {
            return tree(urlTree.root, urlTree.root, urlTree, queryParams, fragment);
        }
        var nav = computeNavigation(commands);
        if (nav.toRoot()) {
            return tree(urlTree.root, new UrlSegmentGroup([], {}), urlTree, queryParams, fragment);
        }
        var startingPosition = findStartingPosition(nav, urlTree, route);
        var segmentGroup = startingPosition.processChildren ?
            updateSegmentGroupChildren(startingPosition.segmentGroup, startingPosition.index, nav.commands) :
            updateSegmentGroup(startingPosition.segmentGroup, startingPosition.index, nav.commands);
        return tree(startingPosition.segmentGroup, segmentGroup, urlTree, queryParams, fragment);
    }
    function isMatrixParams(command) {
        return typeof command === 'object' && command != null && !command.outlets && !command.segmentPath;
    }
    function tree(oldSegmentGroup, newSegmentGroup, urlTree, queryParams, fragment) {
        var qp = {};
        if (queryParams) {
            forEach(queryParams, function (value, name) {
                qp[name] = Array.isArray(value) ? value.map(function (v) { return "" + v; }) : "" + value;
            });
        }
        if (urlTree.root === oldSegmentGroup) {
            return new UrlTree(newSegmentGroup, qp, fragment);
        }
        return new UrlTree(replaceSegment(urlTree.root, oldSegmentGroup, newSegmentGroup), qp, fragment);
    }
    function replaceSegment(current, oldSegment, newSegment) {
        var children = {};
        forEach(current.children, function (c, outletName) {
            if (c === oldSegment) {
                children[outletName] = newSegment;
            }
            else {
                children[outletName] = replaceSegment(c, oldSegment, newSegment);
            }
        });
        return new UrlSegmentGroup(current.segments, children);
    }
    var Navigation = /** @class */ (function () {
        function Navigation(isAbsolute, numberOfDoubleDots, commands) {
            this.isAbsolute = isAbsolute;
            this.numberOfDoubleDots = numberOfDoubleDots;
            this.commands = commands;
            if (isAbsolute && commands.length > 0 && isMatrixParams(commands[0])) {
                throw new Error('Root segment cannot have matrix parameters');
            }
            var cmdWithOutlet = commands.find(function (c) { return typeof c === 'object' && c != null && c.outlets; });
            if (cmdWithOutlet && cmdWithOutlet !== last$1(commands)) {
                throw new Error('{outlets:{}} has to be the last command');
            }
        }
        Navigation.prototype.toRoot = function () {
            return this.isAbsolute && this.commands.length === 1 && this.commands[0] == '/';
        };
        return Navigation;
    }());
    /** Transforms commands to a normalized `Navigation` */
    function computeNavigation(commands) {
        if ((typeof commands[0] === 'string') && commands.length === 1 && commands[0] === '/') {
            return new Navigation(true, 0, commands);
        }
        var numberOfDoubleDots = 0;
        var isAbsolute = false;
        var res = commands.reduce(function (res, cmd, cmdIdx) {
            if (typeof cmd === 'object' && cmd != null) {
                if (cmd.outlets) {
                    var outlets_1 = {};
                    forEach(cmd.outlets, function (commands, name) {
                        outlets_1[name] = typeof commands === 'string' ? commands.split('/') : commands;
                    });
                    return __spread(res, [{ outlets: outlets_1 }]);
                }
                if (cmd.segmentPath) {
                    return __spread(res, [cmd.segmentPath]);
                }
            }
            if (!(typeof cmd === 'string')) {
                return __spread(res, [cmd]);
            }
            if (cmdIdx === 0) {
                cmd.split('/').forEach(function (urlPart, partIndex) {
                    if (partIndex == 0 && urlPart === '.') ;
                    else if (partIndex == 0 && urlPart === '') { //  '/a'
                        isAbsolute = true;
                    }
                    else if (urlPart === '..') { //  '../a'
                        numberOfDoubleDots++;
                    }
                    else if (urlPart != '') {
                        res.push(urlPart);
                    }
                });
                return res;
            }
            return __spread(res, [cmd]);
        }, []);
        return new Navigation(isAbsolute, numberOfDoubleDots, res);
    }
    var Position = /** @class */ (function () {
        function Position(segmentGroup, processChildren, index) {
            this.segmentGroup = segmentGroup;
            this.processChildren = processChildren;
            this.index = index;
        }
        return Position;
    }());
    function findStartingPosition(nav, tree, route) {
        if (nav.isAbsolute) {
            return new Position(tree.root, true, 0);
        }
        if (route.snapshot._lastPathIndex === -1) {
            return new Position(route.snapshot._urlSegment, true, 0);
        }
        var modifier = isMatrixParams(nav.commands[0]) ? 0 : 1;
        var index = route.snapshot._lastPathIndex + modifier;
        return createPositionApplyingDoubleDots(route.snapshot._urlSegment, index, nav.numberOfDoubleDots);
    }
    function createPositionApplyingDoubleDots(group, index, numberOfDoubleDots) {
        var g = group;
        var ci = index;
        var dd = numberOfDoubleDots;
        while (dd > ci) {
            dd -= ci;
            g = g.parent;
            if (!g) {
                throw new Error('Invalid number of \'../\'');
            }
            ci = g.segments.length;
        }
        return new Position(g, false, ci - dd);
    }
    function getPath(command) {
        if (typeof command === 'object' && command != null && command.outlets) {
            return command.outlets[PRIMARY_OUTLET];
        }
        return "" + command;
    }
    function getOutlets(commands) {
        var _a, _b;
        if (!(typeof commands[0] === 'object'))
            return _a = {}, _a[PRIMARY_OUTLET] = commands, _a;
        if (commands[0].outlets === undefined)
            return _b = {}, _b[PRIMARY_OUTLET] = commands, _b;
        return commands[0].outlets;
    }
    function updateSegmentGroup(segmentGroup, startIndex, commands) {
        if (!segmentGroup) {
            segmentGroup = new UrlSegmentGroup([], {});
        }
        if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
            return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
        }
        var m = prefixedWith(segmentGroup, startIndex, commands);
        var slicedCommands = commands.slice(m.commandIndex);
        if (m.match && m.pathIndex < segmentGroup.segments.length) {
            var g = new UrlSegmentGroup(segmentGroup.segments.slice(0, m.pathIndex), {});
            g.children[PRIMARY_OUTLET] =
                new UrlSegmentGroup(segmentGroup.segments.slice(m.pathIndex), segmentGroup.children);
            return updateSegmentGroupChildren(g, 0, slicedCommands);
        }
        else if (m.match && slicedCommands.length === 0) {
            return new UrlSegmentGroup(segmentGroup.segments, {});
        }
        else if (m.match && !segmentGroup.hasChildren()) {
            return createNewSegmentGroup(segmentGroup, startIndex, commands);
        }
        else if (m.match) {
            return updateSegmentGroupChildren(segmentGroup, 0, slicedCommands);
        }
        else {
            return createNewSegmentGroup(segmentGroup, startIndex, commands);
        }
    }
    function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
        if (commands.length === 0) {
            return new UrlSegmentGroup(segmentGroup.segments, {});
        }
        else {
            var outlets_2 = getOutlets(commands);
            var children_1 = {};
            forEach(outlets_2, function (commands, outlet) {
                if (commands !== null) {
                    children_1[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands);
                }
            });
            forEach(segmentGroup.children, function (child, childOutlet) {
                if (outlets_2[childOutlet] === undefined) {
                    children_1[childOutlet] = child;
                }
            });
            return new UrlSegmentGroup(segmentGroup.segments, children_1);
        }
    }
    function prefixedWith(segmentGroup, startIndex, commands) {
        var currentCommandIndex = 0;
        var currentPathIndex = startIndex;
        var noMatch = { match: false, pathIndex: 0, commandIndex: 0 };
        while (currentPathIndex < segmentGroup.segments.length) {
            if (currentCommandIndex >= commands.length)
                return noMatch;
            var path = segmentGroup.segments[currentPathIndex];
            var curr = getPath(commands[currentCommandIndex]);
            var next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
            if (currentPathIndex > 0 && curr === undefined)
                break;
            if (curr && next && (typeof next === 'object') && next.outlets === undefined) {
                if (!compare(curr, next, path))
                    return noMatch;
                currentCommandIndex += 2;
            }
            else {
                if (!compare(curr, {}, path))
                    return noMatch;
                currentCommandIndex++;
            }
            currentPathIndex++;
        }
        return { match: true, pathIndex: currentPathIndex, commandIndex: currentCommandIndex };
    }
    function createNewSegmentGroup(segmentGroup, startIndex, commands) {
        var paths = segmentGroup.segments.slice(0, startIndex);
        var i = 0;
        while (i < commands.length) {
            if (typeof commands[i] === 'object' && commands[i].outlets !== undefined) {
                var children = createNewSegmentChildren(commands[i].outlets);
                return new UrlSegmentGroup(paths, children);
            }
            // if we start with an object literal, we need to reuse the path part from the segment
            if (i === 0 && isMatrixParams(commands[0])) {
                var p = segmentGroup.segments[startIndex];
                paths.push(new UrlSegment(p.path, commands[0]));
                i++;
                continue;
            }
            var curr = getPath(commands[i]);
            var next = (i < commands.length - 1) ? commands[i + 1] : null;
            if (curr && next && isMatrixParams(next)) {
                paths.push(new UrlSegment(curr, stringify(next)));
                i += 2;
            }
            else {
                paths.push(new UrlSegment(curr, {}));
                i++;
            }
        }
        return new UrlSegmentGroup(paths, {});
    }
    function createNewSegmentChildren(outlets) {
        var children = {};
        forEach(outlets, function (commands, outlet) {
            if (commands !== null) {
                children[outlet] = createNewSegmentGroup(new UrlSegmentGroup([], {}), 0, commands);
            }
        });
        return children;
    }
    function stringify(params) {
        var res = {};
        forEach(params, function (v, k) { return res[k] = "" + v; });
        return res;
    }
    function compare(path, params, segment) {
        return path == segment.path && shallowEqual(params, segment.parameters);
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var activateRoutes = function (rootContexts, routeReuseStrategy, forwardEvent) {
        return map(function (t) {
            new ActivateRoutes(routeReuseStrategy, t.targetRouterState, t.currentRouterState, forwardEvent)
                .activate(rootContexts);
            return t;
        });
    };
    var ActivateRoutes = /** @class */ (function () {
        function ActivateRoutes(routeReuseStrategy, futureState, currState, forwardEvent) {
            this.routeReuseStrategy = routeReuseStrategy;
            this.futureState = futureState;
            this.currState = currState;
            this.forwardEvent = forwardEvent;
        }
        ActivateRoutes.prototype.activate = function (parentContexts) {
            var futureRoot = this.futureState._root;
            var currRoot = this.currState ? this.currState._root : null;
            this.deactivateChildRoutes(futureRoot, currRoot, parentContexts);
            advanceActivatedRoute(this.futureState.root);
            this.activateChildRoutes(futureRoot, currRoot, parentContexts);
        };
        // De-activate the child route that are not re-used for the future state
        ActivateRoutes.prototype.deactivateChildRoutes = function (futureNode, currNode, contexts) {
            var _this = this;
            var children = nodeChildrenAsMap(currNode);
            // Recurse on the routes active in the future state to de-activate deeper children
            futureNode.children.forEach(function (futureChild) {
                var childOutletName = futureChild.value.outlet;
                _this.deactivateRoutes(futureChild, children[childOutletName], contexts);
                delete children[childOutletName];
            });
            // De-activate the routes that will not be re-used
            forEach(children, function (v, childName) {
                _this.deactivateRouteAndItsChildren(v, contexts);
            });
        };
        ActivateRoutes.prototype.deactivateRoutes = function (futureNode, currNode, parentContext) {
            var future = futureNode.value;
            var curr = currNode ? currNode.value : null;
            if (future === curr) {
                // Reusing the node, check to see if the children need to be de-activated
                if (future.component) {
                    // If we have a normal route, we need to go through an outlet.
                    var context = parentContext.getContext(future.outlet);
                    if (context) {
                        this.deactivateChildRoutes(futureNode, currNode, context.children);
                    }
                }
                else {
                    // if we have a componentless route, we recurse but keep the same outlet map.
                    this.deactivateChildRoutes(futureNode, currNode, parentContext);
                }
            }
            else {
                if (curr) {
                    // Deactivate the current route which will not be re-used
                    this.deactivateRouteAndItsChildren(currNode, parentContext);
                }
            }
        };
        ActivateRoutes.prototype.deactivateRouteAndItsChildren = function (route, parentContexts) {
            if (this.routeReuseStrategy.shouldDetach(route.value.snapshot)) {
                this.detachAndStoreRouteSubtree(route, parentContexts);
            }
            else {
                this.deactivateRouteAndOutlet(route, parentContexts);
            }
        };
        ActivateRoutes.prototype.detachAndStoreRouteSubtree = function (route, parentContexts) {
            var context = parentContexts.getContext(route.value.outlet);
            if (context && context.outlet) {
                var componentRef = context.outlet.detach();
                var contexts = context.children.onOutletDeactivated();
                this.routeReuseStrategy.store(route.value.snapshot, { componentRef: componentRef, route: route, contexts: contexts });
            }
        };
        ActivateRoutes.prototype.deactivateRouteAndOutlet = function (route, parentContexts) {
            var _this = this;
            var context = parentContexts.getContext(route.value.outlet);
            if (context) {
                var children = nodeChildrenAsMap(route);
                var contexts_1 = route.value.component ? context.children : parentContexts;
                forEach(children, function (v, k) { return _this.deactivateRouteAndItsChildren(v, contexts_1); });
                if (context.outlet) {
                    // Destroy the component
                    context.outlet.deactivate();
                    // Destroy the contexts for all the outlets that were in the component
                    context.children.onOutletDeactivated();
                }
            }
        };
        ActivateRoutes.prototype.activateChildRoutes = function (futureNode, currNode, contexts) {
            var _this = this;
            var children = nodeChildrenAsMap(currNode);
            futureNode.children.forEach(function (c) {
                _this.activateRoutes(c, children[c.value.outlet], contexts);
                _this.forwardEvent(new ActivationEnd(c.value.snapshot));
            });
            if (futureNode.children.length) {
                this.forwardEvent(new ChildActivationEnd(futureNode.value.snapshot));
            }
        };
        ActivateRoutes.prototype.activateRoutes = function (futureNode, currNode, parentContexts) {
            var future = futureNode.value;
            var curr = currNode ? currNode.value : null;
            advanceActivatedRoute(future);
            // reusing the node
            if (future === curr) {
                if (future.component) {
                    // If we have a normal route, we need to go through an outlet.
                    var context = parentContexts.getOrCreateContext(future.outlet);
                    this.activateChildRoutes(futureNode, currNode, context.children);
                }
                else {
                    // if we have a componentless route, we recurse but keep the same outlet map.
                    this.activateChildRoutes(futureNode, currNode, parentContexts);
                }
            }
            else {
                if (future.component) {
                    // if we have a normal route, we need to place the component into the outlet and recurse.
                    var context = parentContexts.getOrCreateContext(future.outlet);
                    if (this.routeReuseStrategy.shouldAttach(future.snapshot)) {
                        var stored = this.routeReuseStrategy.retrieve(future.snapshot);
                        this.routeReuseStrategy.store(future.snapshot, null);
                        context.children.onOutletReAttached(stored.contexts);
                        context.attachRef = stored.componentRef;
                        context.route = stored.route.value;
                        if (context.outlet) {
                            // Attach right away when the outlet has already been instantiated
                            // Otherwise attach from `RouterOutlet.ngOnInit` when it is instantiated
                            context.outlet.attach(stored.componentRef, stored.route.value);
                        }
                        advanceActivatedRouteNodeAndItsChildren(stored.route);
                    }
                    else {
                        var config = parentLoadedConfig(future.snapshot);
                        var cmpFactoryResolver = config ? config.module.componentFactoryResolver : null;
                        context.attachRef = null;
                        context.route = future;
                        context.resolver = cmpFactoryResolver;
                        if (context.outlet) {
                            // Activate the outlet when it has already been instantiated
                            // Otherwise it will get activated from its `ngOnInit` when instantiated
                            context.outlet.activateWith(future, cmpFactoryResolver);
                        }
                        this.activateChildRoutes(futureNode, null, context.children);
                    }
                }
                else {
                    // if we have a componentless route, we recurse but keep the same outlet map.
                    this.activateChildRoutes(futureNode, null, parentContexts);
                }
            }
        };
        return ActivateRoutes;
    }());
    function advanceActivatedRouteNodeAndItsChildren(node) {
        advanceActivatedRoute(node.value);
        node.children.forEach(advanceActivatedRouteNodeAndItsChildren);
    }
    function parentLoadedConfig(snapshot) {
        for (var s = snapshot.parent; s; s = s.parent) {
            var route = s.routeConfig;
            if (route && route._loadedConfig)
                return route._loadedConfig;
            if (route && route.component)
                return null;
        }
        return null;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Simple function check, but generic so type inference will flow. Example:
     *
     * function product(a: number, b: number) {
     *   return a * b;
     * }
     *
     * if (isFunction<product>(fn)) {
     *   return fn(1, 2);
     * } else {
     *   throw "Must provide the `product` function";
     * }
     */
    function isFunction$1(v) {
        return typeof v === 'function';
    }
    function isBoolean(v) {
        return typeof v === 'boolean';
    }
    function isUrlTree(v) {
        return v instanceof UrlTree;
    }
    function isCanLoad(guard) {
        return guard && isFunction$1(guard.canLoad);
    }
    function isCanActivate(guard) {
        return guard && isFunction$1(guard.canActivate);
    }
    function isCanActivateChild(guard) {
        return guard && isFunction$1(guard.canActivateChild);
    }
    function isCanDeactivate(guard) {
        return guard && isFunction$1(guard.canDeactivate);
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var NoMatch = /** @class */ (function () {
        function NoMatch(segmentGroup) {
            this.segmentGroup = segmentGroup || null;
        }
        return NoMatch;
    }());
    var AbsoluteRedirect = /** @class */ (function () {
        function AbsoluteRedirect(urlTree) {
            this.urlTree = urlTree;
        }
        return AbsoluteRedirect;
    }());
    function noMatch(segmentGroup) {
        return new Observable(function (obs) { return obs.error(new NoMatch(segmentGroup)); });
    }
    function absoluteRedirect(newTree) {
        return new Observable(function (obs) { return obs.error(new AbsoluteRedirect(newTree)); });
    }
    function namedOutletsRedirect(redirectTo) {
        return new Observable(function (obs) { return obs.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + redirectTo + "'")); });
    }
    function canLoadFails(route) {
        return new Observable(function (obs) { return obs.error(navigationCancelingError("Cannot load children because the guard of the route \"path: '" + route.path + "'\" returned false")); });
    }
    /**
     * Returns the `UrlTree` with the redirection applied.
     *
     * Lazy modules are loaded along the way.
     */
    function applyRedirects(moduleInjector, configLoader, urlSerializer, urlTree, config) {
        return new ApplyRedirects(moduleInjector, configLoader, urlSerializer, urlTree, config).apply();
    }
    var ApplyRedirects = /** @class */ (function () {
        function ApplyRedirects(moduleInjector, configLoader, urlSerializer, urlTree, config) {
            this.configLoader = configLoader;
            this.urlSerializer = urlSerializer;
            this.urlTree = urlTree;
            this.config = config;
            this.allowRedirects = true;
            this.ngModule = moduleInjector.get(core.NgModuleRef);
        }
        ApplyRedirects.prototype.apply = function () {
            var _this = this;
            var expanded$ = this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, PRIMARY_OUTLET);
            var urlTrees$ = expanded$.pipe(map(function (rootSegmentGroup) { return _this.createUrlTree(rootSegmentGroup, _this.urlTree.queryParams, _this.urlTree.fragment); }));
            return urlTrees$.pipe(catchError(function (e) {
                if (e instanceof AbsoluteRedirect) {
                    // after an absolute redirect we do not apply any more redirects!
                    _this.allowRedirects = false;
                    // we need to run matching, so we can fetch all lazy-loaded modules
                    return _this.match(e.urlTree);
                }
                if (e instanceof NoMatch) {
                    throw _this.noMatchError(e);
                }
                throw e;
            }));
        };
        ApplyRedirects.prototype.match = function (tree) {
            var _this = this;
            var expanded$ = this.expandSegmentGroup(this.ngModule, this.config, tree.root, PRIMARY_OUTLET);
            var mapped$ = expanded$.pipe(map(function (rootSegmentGroup) {
                return _this.createUrlTree(rootSegmentGroup, tree.queryParams, tree.fragment);
            }));
            return mapped$.pipe(catchError(function (e) {
                if (e instanceof NoMatch) {
                    throw _this.noMatchError(e);
                }
                throw e;
            }));
        };
        ApplyRedirects.prototype.noMatchError = function (e) {
            return new Error("Cannot match any routes. URL Segment: '" + e.segmentGroup + "'");
        };
        ApplyRedirects.prototype.createUrlTree = function (rootCandidate, queryParams, fragment) {
            var _a;
            var root = rootCandidate.segments.length > 0 ?
                new UrlSegmentGroup([], (_a = {}, _a[PRIMARY_OUTLET] = rootCandidate, _a)) :
                rootCandidate;
            return new UrlTree(root, queryParams, fragment);
        };
        ApplyRedirects.prototype.expandSegmentGroup = function (ngModule, routes, segmentGroup, outlet) {
            if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
                return this.expandChildren(ngModule, routes, segmentGroup)
                    .pipe(map(function (children) { return new UrlSegmentGroup([], children); }));
            }
            return this.expandSegment(ngModule, segmentGroup, routes, segmentGroup.segments, outlet, true);
        };
        // Recursively expand segment groups for all the child outlets
        ApplyRedirects.prototype.expandChildren = function (ngModule, routes, segmentGroup) {
            var _this = this;
            return waitForMap(segmentGroup.children, function (childOutlet, child) { return _this.expandSegmentGroup(ngModule, routes, child, childOutlet); });
        };
        ApplyRedirects.prototype.expandSegment = function (ngModule, segmentGroup, routes, segments, outlet, allowRedirects) {
            var _this = this;
            return of.apply(void 0, __spread(routes)).pipe(map(function (r) {
                var expanded$ = _this.expandSegmentAgainstRoute(ngModule, segmentGroup, routes, r, segments, outlet, allowRedirects);
                return expanded$.pipe(catchError(function (e) {
                    if (e instanceof NoMatch) {
                        // TODO(i): this return type doesn't match the declared Observable<UrlSegmentGroup> -
                        // talk to Jason
                        return of(null);
                    }
                    throw e;
                }));
            }), concatAll(), first(function (s) { return !!s; }), catchError(function (e, _) {
                if (e instanceof EmptyError || e.name === 'EmptyError') {
                    if (_this.noLeftoversInUrl(segmentGroup, segments, outlet)) {
                        return of(new UrlSegmentGroup([], {}));
                    }
                    throw new NoMatch(segmentGroup);
                }
                throw e;
            }));
        };
        ApplyRedirects.prototype.noLeftoversInUrl = function (segmentGroup, segments, outlet) {
            return segments.length === 0 && !segmentGroup.children[outlet];
        };
        ApplyRedirects.prototype.expandSegmentAgainstRoute = function (ngModule, segmentGroup, routes, route, paths, outlet, allowRedirects) {
            if (getOutlet(route) !== outlet) {
                return noMatch(segmentGroup);
            }
            if (route.redirectTo === undefined) {
                return this.matchSegmentAgainstRoute(ngModule, segmentGroup, route, paths);
            }
            if (allowRedirects && this.allowRedirects) {
                return this.expandSegmentAgainstRouteUsingRedirect(ngModule, segmentGroup, routes, route, paths, outlet);
            }
            return noMatch(segmentGroup);
        };
        ApplyRedirects.prototype.expandSegmentAgainstRouteUsingRedirect = function (ngModule, segmentGroup, routes, route, segments, outlet) {
            if (route.path === '**') {
                return this.expandWildCardWithParamsAgainstRouteUsingRedirect(ngModule, routes, route, outlet);
            }
            return this.expandRegularSegmentAgainstRouteUsingRedirect(ngModule, segmentGroup, routes, route, segments, outlet);
        };
        ApplyRedirects.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function (ngModule, routes, route, outlet) {
            var _this = this;
            var newTree = this.applyRedirectCommands([], route.redirectTo, {});
            if (route.redirectTo.startsWith('/')) {
                return absoluteRedirect(newTree);
            }
            return this.lineralizeSegments(route, newTree).pipe(mergeMap(function (newSegments) {
                var group = new UrlSegmentGroup(newSegments, {});
                return _this.expandSegment(ngModule, group, routes, newSegments, outlet, false);
            }));
        };
        ApplyRedirects.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function (ngModule, segmentGroup, routes, route, segments, outlet) {
            var _this = this;
            var _a = match(segmentGroup, route, segments), matched = _a.matched, consumedSegments = _a.consumedSegments, lastChild = _a.lastChild, positionalParamSegments = _a.positionalParamSegments;
            if (!matched)
                return noMatch(segmentGroup);
            var newTree = this.applyRedirectCommands(consumedSegments, route.redirectTo, positionalParamSegments);
            if (route.redirectTo.startsWith('/')) {
                return absoluteRedirect(newTree);
            }
            return this.lineralizeSegments(route, newTree).pipe(mergeMap(function (newSegments) {
                return _this.expandSegment(ngModule, segmentGroup, routes, newSegments.concat(segments.slice(lastChild)), outlet, false);
            }));
        };
        ApplyRedirects.prototype.matchSegmentAgainstRoute = function (ngModule, rawSegmentGroup, route, segments) {
            var _this = this;
            if (route.path === '**') {
                if (route.loadChildren) {
                    return this.configLoader.load(ngModule.injector, route)
                        .pipe(map(function (cfg) {
                        route._loadedConfig = cfg;
                        return new UrlSegmentGroup(segments, {});
                    }));
                }
                return of(new UrlSegmentGroup(segments, {}));
            }
            var _a = match(rawSegmentGroup, route, segments), matched = _a.matched, consumedSegments = _a.consumedSegments, lastChild = _a.lastChild;
            if (!matched)
                return noMatch(rawSegmentGroup);
            var rawSlicedSegments = segments.slice(lastChild);
            var childConfig$ = this.getChildConfig(ngModule, route, segments);
            return childConfig$.pipe(mergeMap(function (routerConfig) {
                var childModule = routerConfig.module;
                var childConfig = routerConfig.routes;
                var _a = split(rawSegmentGroup, consumedSegments, rawSlicedSegments, childConfig), segmentGroup = _a.segmentGroup, slicedSegments = _a.slicedSegments;
                if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
                    var expanded$_1 = _this.expandChildren(childModule, childConfig, segmentGroup);
                    return expanded$_1.pipe(map(function (children) { return new UrlSegmentGroup(consumedSegments, children); }));
                }
                if (childConfig.length === 0 && slicedSegments.length === 0) {
                    return of(new UrlSegmentGroup(consumedSegments, {}));
                }
                var expanded$ = _this.expandSegment(childModule, segmentGroup, childConfig, slicedSegments, PRIMARY_OUTLET, true);
                return expanded$.pipe(map(function (cs) {
                    return new UrlSegmentGroup(consumedSegments.concat(cs.segments), cs.children);
                }));
            }));
        };
        ApplyRedirects.prototype.getChildConfig = function (ngModule, route, segments) {
            var _this = this;
            if (route.children) {
                // The children belong to the same module
                return of(new LoadedRouterConfig(route.children, ngModule));
            }
            if (route.loadChildren) {
                // lazy children belong to the loaded module
                if (route._loadedConfig !== undefined) {
                    return of(route._loadedConfig);
                }
                return runCanLoadGuard(ngModule.injector, route, segments)
                    .pipe(mergeMap(function (shouldLoad) {
                    if (shouldLoad) {
                        return _this.configLoader.load(ngModule.injector, route)
                            .pipe(map(function (cfg) {
                            route._loadedConfig = cfg;
                            return cfg;
                        }));
                    }
                    return canLoadFails(route);
                }));
            }
            return of(new LoadedRouterConfig([], ngModule));
        };
        ApplyRedirects.prototype.lineralizeSegments = function (route, urlTree) {
            var res = [];
            var c = urlTree.root;
            while (true) {
                res = res.concat(c.segments);
                if (c.numberOfChildren === 0) {
                    return of(res);
                }
                if (c.numberOfChildren > 1 || !c.children[PRIMARY_OUTLET]) {
                    return namedOutletsRedirect(route.redirectTo);
                }
                c = c.children[PRIMARY_OUTLET];
            }
        };
        ApplyRedirects.prototype.applyRedirectCommands = function (segments, redirectTo, posParams) {
            return this.applyRedirectCreatreUrlTree(redirectTo, this.urlSerializer.parse(redirectTo), segments, posParams);
        };
        ApplyRedirects.prototype.applyRedirectCreatreUrlTree = function (redirectTo, urlTree, segments, posParams) {
            var newRoot = this.createSegmentGroup(redirectTo, urlTree.root, segments, posParams);
            return new UrlTree(newRoot, this.createQueryParams(urlTree.queryParams, this.urlTree.queryParams), urlTree.fragment);
        };
        ApplyRedirects.prototype.createQueryParams = function (redirectToParams, actualParams) {
            var res = {};
            forEach(redirectToParams, function (v, k) {
                var copySourceValue = typeof v === 'string' && v.startsWith(':');
                if (copySourceValue) {
                    var sourceName = v.substring(1);
                    res[k] = actualParams[sourceName];
                }
                else {
                    res[k] = v;
                }
            });
            return res;
        };
        ApplyRedirects.prototype.createSegmentGroup = function (redirectTo, group, segments, posParams) {
            var _this = this;
            var updatedSegments = this.createSegments(redirectTo, group.segments, segments, posParams);
            var children = {};
            forEach(group.children, function (child, name) {
                children[name] = _this.createSegmentGroup(redirectTo, child, segments, posParams);
            });
            return new UrlSegmentGroup(updatedSegments, children);
        };
        ApplyRedirects.prototype.createSegments = function (redirectTo, redirectToSegments, actualSegments, posParams) {
            var _this = this;
            return redirectToSegments.map(function (s) { return s.path.startsWith(':') ? _this.findPosParam(redirectTo, s, posParams) :
                _this.findOrReturn(s, actualSegments); });
        };
        ApplyRedirects.prototype.findPosParam = function (redirectTo, redirectToUrlSegment, posParams) {
            var pos = posParams[redirectToUrlSegment.path.substring(1)];
            if (!pos)
                throw new Error("Cannot redirect to '" + redirectTo + "'. Cannot find '" + redirectToUrlSegment.path + "'.");
            return pos;
        };
        ApplyRedirects.prototype.findOrReturn = function (redirectToUrlSegment, actualSegments) {
            var e_1, _a;
            var idx = 0;
            try {
                for (var actualSegments_1 = __values(actualSegments), actualSegments_1_1 = actualSegments_1.next(); !actualSegments_1_1.done; actualSegments_1_1 = actualSegments_1.next()) {
                    var s = actualSegments_1_1.value;
                    if (s.path === redirectToUrlSegment.path) {
                        actualSegments.splice(idx);
                        return s;
                    }
                    idx++;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (actualSegments_1_1 && !actualSegments_1_1.done && (_a = actualSegments_1.return)) _a.call(actualSegments_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return redirectToUrlSegment;
        };
        return ApplyRedirects;
    }());
    function runCanLoadGuard(moduleInjector, route, segments) {
        var canLoad = route.canLoad;
        if (!canLoad || canLoad.length === 0)
            return of(true);
        var obs = from(canLoad).pipe(map(function (injectionToken) {
            var guard = moduleInjector.get(injectionToken);
            var guardVal;
            if (isCanLoad(guard)) {
                guardVal = guard.canLoad(route, segments);
            }
            else if (isFunction$1(guard)) {
                guardVal = guard(route, segments);
            }
            else {
                throw new Error('Invalid CanLoad guard');
            }
            return wrapIntoObservable(guardVal);
        }));
        return obs.pipe(concatAll(), every(function (result) { return result === true; }));
    }
    function match(segmentGroup, route, segments) {
        if (route.path === '') {
            if ((route.pathMatch === 'full') && (segmentGroup.hasChildren() || segments.length > 0)) {
                return { matched: false, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
            }
            return { matched: true, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        }
        var matcher = route.matcher || defaultUrlMatcher;
        var res = matcher(segments, segmentGroup, route);
        if (!res) {
            return {
                matched: false,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {},
            };
        }
        return {
            matched: true,
            consumedSegments: res.consumed,
            lastChild: res.consumed.length,
            positionalParamSegments: res.posParams,
        };
    }
    function split(segmentGroup, consumedSegments, slicedSegments, config) {
        if (slicedSegments.length > 0 &&
            containsEmptyPathRedirectsWithNamedOutlets(segmentGroup, slicedSegments, config)) {
            var s = new UrlSegmentGroup(consumedSegments, createChildrenForEmptySegments(config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
            return { segmentGroup: mergeTrivialChildren(s), slicedSegments: [] };
        }
        if (slicedSegments.length === 0 &&
            containsEmptyPathRedirects(segmentGroup, slicedSegments, config)) {
            var s = new UrlSegmentGroup(segmentGroup.segments, addEmptySegmentsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
            return { segmentGroup: mergeTrivialChildren(s), slicedSegments: slicedSegments };
        }
        return { segmentGroup: segmentGroup, slicedSegments: slicedSegments };
    }
    function mergeTrivialChildren(s) {
        if (s.numberOfChildren === 1 && s.children[PRIMARY_OUTLET]) {
            var c = s.children[PRIMARY_OUTLET];
            return new UrlSegmentGroup(s.segments.concat(c.segments), c.children);
        }
        return s;
    }
    function addEmptySegmentsToChildrenIfNeeded(segmentGroup, slicedSegments, routes, children) {
        var e_2, _a;
        var res = {};
        try {
            for (var routes_1 = __values(routes), routes_1_1 = routes_1.next(); !routes_1_1.done; routes_1_1 = routes_1.next()) {
                var r = routes_1_1.value;
                if (isEmptyPathRedirect(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {
                    res[getOutlet(r)] = new UrlSegmentGroup([], {});
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (routes_1_1 && !routes_1_1.done && (_a = routes_1.return)) _a.call(routes_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return __assign({}, children, res);
    }
    function createChildrenForEmptySegments(routes, primarySegmentGroup) {
        var e_3, _a;
        var res = {};
        res[PRIMARY_OUTLET] = primarySegmentGroup;
        try {
            for (var routes_2 = __values(routes), routes_2_1 = routes_2.next(); !routes_2_1.done; routes_2_1 = routes_2.next()) {
                var r = routes_2_1.value;
                if (r.path === '' && getOutlet(r) !== PRIMARY_OUTLET) {
                    res[getOutlet(r)] = new UrlSegmentGroup([], {});
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (routes_2_1 && !routes_2_1.done && (_a = routes_2.return)) _a.call(routes_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return res;
    }
    function containsEmptyPathRedirectsWithNamedOutlets(segmentGroup, segments, routes) {
        return routes.some(function (r) { return isEmptyPathRedirect(segmentGroup, segments, r) && getOutlet(r) !== PRIMARY_OUTLET; });
    }
    function containsEmptyPathRedirects(segmentGroup, segments, routes) {
        return routes.some(function (r) { return isEmptyPathRedirect(segmentGroup, segments, r); });
    }
    function isEmptyPathRedirect(segmentGroup, segments, r) {
        if ((segmentGroup.hasChildren() || segments.length > 0) && r.pathMatch === 'full') {
            return false;
        }
        return r.path === '' && r.redirectTo !== undefined;
    }
    function getOutlet(route) {
        return route.outlet || PRIMARY_OUTLET;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function applyRedirects$1(moduleInjector, configLoader, urlSerializer, config) {
        return function (source) {
            return source.pipe(switchMap(function (t) { return applyRedirects(moduleInjector, configLoader, urlSerializer, t.extractedUrl, config)
                .pipe(map(function (urlAfterRedirects) { return (__assign({}, t, { urlAfterRedirects: urlAfterRedirects })); })); }));
        };
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var CanActivate = /** @class */ (function () {
        function CanActivate(path) {
            this.path = path;
            this.route = this.path[this.path.length - 1];
        }
        return CanActivate;
    }());
    var CanDeactivate = /** @class */ (function () {
        function CanDeactivate(component, route) {
            this.component = component;
            this.route = route;
        }
        return CanDeactivate;
    }());
    function getAllRouteGuards(future, curr, parentContexts) {
        var futureRoot = future._root;
        var currRoot = curr ? curr._root : null;
        return getChildRouteGuards(futureRoot, currRoot, parentContexts, [futureRoot.value]);
    }
    function getCanActivateChild(p) {
        var canActivateChild = p.routeConfig ? p.routeConfig.canActivateChild : null;
        if (!canActivateChild || canActivateChild.length === 0)
            return null;
        return { node: p, guards: canActivateChild };
    }
    function getToken(token, snapshot, moduleInjector) {
        var config = getClosestLoadedConfig(snapshot);
        var injector = config ? config.module.injector : moduleInjector;
        return injector.get(token);
    }
    function getClosestLoadedConfig(snapshot) {
        if (!snapshot)
            return null;
        for (var s = snapshot.parent; s; s = s.parent) {
            var route = s.routeConfig;
            if (route && route._loadedConfig)
                return route._loadedConfig;
        }
        return null;
    }
    function getChildRouteGuards(futureNode, currNode, contexts, futurePath, checks) {
        if (checks === void 0) { checks = {
            canDeactivateChecks: [],
            canActivateChecks: []
        }; }
        var prevChildren = nodeChildrenAsMap(currNode);
        // Process the children of the future route
        futureNode.children.forEach(function (c) {
            getRouteGuards(c, prevChildren[c.value.outlet], contexts, futurePath.concat([c.value]), checks);
            delete prevChildren[c.value.outlet];
        });
        // Process any children left from the current route (not active for the future route)
        forEach(prevChildren, function (v, k) {
            return deactivateRouteAndItsChildren(v, contexts.getContext(k), checks);
        });
        return checks;
    }
    function getRouteGuards(futureNode, currNode, parentContexts, futurePath, checks) {
        if (checks === void 0) { checks = {
            canDeactivateChecks: [],
            canActivateChecks: []
        }; }
        var future = futureNode.value;
        var curr = currNode ? currNode.value : null;
        var context = parentContexts ? parentContexts.getContext(futureNode.value.outlet) : null;
        // reusing the node
        if (curr && future.routeConfig === curr.routeConfig) {
            var shouldRun = shouldRunGuardsAndResolvers(curr, future, future.routeConfig.runGuardsAndResolvers);
            if (shouldRun) {
                checks.canActivateChecks.push(new CanActivate(futurePath));
            }
            else {
                // we need to set the data
                future.data = curr.data;
                future._resolvedData = curr._resolvedData;
            }
            // If we have a component, we need to go through an outlet.
            if (future.component) {
                getChildRouteGuards(futureNode, currNode, context ? context.children : null, futurePath, checks);
                // if we have a componentless route, we recurse but keep the same outlet map.
            }
            else {
                getChildRouteGuards(futureNode, currNode, parentContexts, futurePath, checks);
            }
            if (shouldRun) {
                var component = context && context.outlet && context.outlet.component || null;
                checks.canDeactivateChecks.push(new CanDeactivate(component, curr));
            }
        }
        else {
            if (curr) {
                deactivateRouteAndItsChildren(currNode, context, checks);
            }
            checks.canActivateChecks.push(new CanActivate(futurePath));
            // If we have a component, we need to go through an outlet.
            if (future.component) {
                getChildRouteGuards(futureNode, null, context ? context.children : null, futurePath, checks);
                // if we have a componentless route, we recurse but keep the same outlet map.
            }
            else {
                getChildRouteGuards(futureNode, null, parentContexts, futurePath, checks);
            }
        }
        return checks;
    }
    function shouldRunGuardsAndResolvers(curr, future, mode) {
        if (typeof mode === 'function') {
            return mode(curr, future);
        }
        switch (mode) {
            case 'pathParamsChange':
                return !equalPath(curr.url, future.url);
            case 'pathParamsOrQueryParamsChange':
                return !equalPath(curr.url, future.url) ||
                    !shallowEqual(curr.queryParams, future.queryParams);
            case 'always':
                return true;
            case 'paramsOrQueryParamsChange':
                return !equalParamsAndUrlSegments(curr, future) ||
                    !shallowEqual(curr.queryParams, future.queryParams);
            case 'paramsChange':
            default:
                return !equalParamsAndUrlSegments(curr, future);
        }
    }
    function deactivateRouteAndItsChildren(route, context, checks) {
        var children = nodeChildrenAsMap(route);
        var r = route.value;
        forEach(children, function (node, childName) {
            if (!r.component) {
                deactivateRouteAndItsChildren(node, context, checks);
            }
            else if (context) {
                deactivateRouteAndItsChildren(node, context.children.getContext(childName), checks);
            }
            else {
                deactivateRouteAndItsChildren(node, null, checks);
            }
        });
        if (!r.component) {
            checks.canDeactivateChecks.push(new CanDeactivate(null, r));
        }
        else if (context && context.outlet && context.outlet.isActivated) {
            checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, r));
        }
        else {
            checks.canDeactivateChecks.push(new CanDeactivate(null, r));
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var INITIAL_VALUE = Symbol('INITIAL_VALUE');
    function prioritizedGuardValue() {
        return switchMap(function (obs) {
            return combineLatest.apply(void 0, __spread(obs.map(function (o) { return o.pipe(take(1), startWith(INITIAL_VALUE)); }))).pipe(scan(function (acc, list) {
                var isPending = false;
                return list.reduce(function (innerAcc, val, i) {
                    if (innerAcc !== INITIAL_VALUE)
                        return innerAcc;
                    // Toggle pending flag if any values haven't been set yet
                    if (val === INITIAL_VALUE)
                        isPending = true;
                    // Any other return values are only valid if we haven't yet hit a pending call.
                    // This guarantees that in the case of a guard at the bottom of the tree that
                    // returns a redirect, we will wait for the higher priority guard at the top to
                    // finish before performing the redirect.
                    if (!isPending) {
                        // Early return when we hit a `false` value as that should always cancel
                        // navigation
                        if (val === false)
                            return val;
                        if (i === list.length - 1 || isUrlTree(val)) {
                            return val;
                        }
                    }
                    return innerAcc;
                }, acc);
            }, INITIAL_VALUE), filter(function (item) { return item !== INITIAL_VALUE; }), map(function (item) { return isUrlTree(item) ? item : item === true; }), //
            take(1));
        });
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function checkGuards(moduleInjector, forwardEvent) {
        return function (source) {
            return source.pipe(mergeMap(function (t) {
                var targetSnapshot = t.targetSnapshot, currentSnapshot = t.currentSnapshot, _a = t.guards, canActivateChecks = _a.canActivateChecks, canDeactivateChecks = _a.canDeactivateChecks;
                if (canDeactivateChecks.length === 0 && canActivateChecks.length === 0) {
                    return of(__assign({}, t, { guardsResult: true }));
                }
                return runCanDeactivateChecks(canDeactivateChecks, targetSnapshot, currentSnapshot, moduleInjector)
                    .pipe(mergeMap(function (canDeactivate) {
                    return canDeactivate && isBoolean(canDeactivate) ?
                        runCanActivateChecks(targetSnapshot, canActivateChecks, moduleInjector, forwardEvent) :
                        of(canDeactivate);
                }), map(function (guardsResult) { return (__assign({}, t, { guardsResult: guardsResult })); }));
            }));
        };
    }
    function runCanDeactivateChecks(checks, futureRSS, currRSS, moduleInjector) {
        return from(checks).pipe(mergeMap(function (check) {
            return runCanDeactivate(check.component, check.route, currRSS, futureRSS, moduleInjector);
        }), first(function (result) { return result !== true; }, true));
    }
    function runCanActivateChecks(futureSnapshot, checks, moduleInjector, forwardEvent) {
        return from(checks).pipe(concatMap(function (check) {
            return from([
                fireChildActivationStart(check.route.parent, forwardEvent),
                fireActivationStart(check.route, forwardEvent),
                runCanActivateChild(futureSnapshot, check.path, moduleInjector),
                runCanActivate(futureSnapshot, check.route, moduleInjector)
            ])
                .pipe(concatAll(), first(function (result) {
                return result !== true;
            }, true));
        }), first(function (result) { return result !== true; }, true));
    }
    /**
       * This should fire off `ActivationStart` events for each route being activated at this
       * level.
       * In other words, if you're activating `a` and `b` below, `path` will contain the
       * `ActivatedRouteSnapshot`s for both and we will fire `ActivationStart` for both. Always
       * return
       * `true` so checks continue to run.
       */
    function fireActivationStart(snapshot, forwardEvent) {
        if (snapshot !== null && forwardEvent) {
            forwardEvent(new ActivationStart(snapshot));
        }
        return of(true);
    }
    /**
       * This should fire off `ChildActivationStart` events for each route being activated at this
       * level.
       * In other words, if you're activating `a` and `b` below, `path` will contain the
       * `ActivatedRouteSnapshot`s for both and we will fire `ChildActivationStart` for both. Always
       * return
       * `true` so checks continue to run.
       */
    function fireChildActivationStart(snapshot, forwardEvent) {
        if (snapshot !== null && forwardEvent) {
            forwardEvent(new ChildActivationStart(snapshot));
        }
        return of(true);
    }
    function runCanActivate(futureRSS, futureARS, moduleInjector) {
        var canActivate = futureARS.routeConfig ? futureARS.routeConfig.canActivate : null;
        if (!canActivate || canActivate.length === 0)
            return of(true);
        var canActivateObservables = canActivate.map(function (c) {
            return defer(function () {
                var guard = getToken(c, futureARS, moduleInjector);
                var observable;
                if (isCanActivate(guard)) {
                    observable = wrapIntoObservable(guard.canActivate(futureARS, futureRSS));
                }
                else if (isFunction$1(guard)) {
                    observable = wrapIntoObservable(guard(futureARS, futureRSS));
                }
                else {
                    throw new Error('Invalid CanActivate guard');
                }
                return observable.pipe(first());
            });
        });
        return of(canActivateObservables).pipe(prioritizedGuardValue());
    }
    function runCanActivateChild(futureRSS, path, moduleInjector) {
        var futureARS = path[path.length - 1];
        var canActivateChildGuards = path.slice(0, path.length - 1)
            .reverse()
            .map(function (p) { return getCanActivateChild(p); })
            .filter(function (_) { return _ !== null; });
        var canActivateChildGuardsMapped = canActivateChildGuards.map(function (d) {
            return defer(function () {
                var guardsMapped = d.guards.map(function (c) {
                    var guard = getToken(c, d.node, moduleInjector);
                    var observable;
                    if (isCanActivateChild(guard)) {
                        observable = wrapIntoObservable(guard.canActivateChild(futureARS, futureRSS));
                    }
                    else if (isFunction$1(guard)) {
                        observable = wrapIntoObservable(guard(futureARS, futureRSS));
                    }
                    else {
                        throw new Error('Invalid CanActivateChild guard');
                    }
                    return observable.pipe(first());
                });
                return of(guardsMapped).pipe(prioritizedGuardValue());
            });
        });
        return of(canActivateChildGuardsMapped).pipe(prioritizedGuardValue());
    }
    function runCanDeactivate(component, currARS, currRSS, futureRSS, moduleInjector) {
        var canDeactivate = currARS && currARS.routeConfig ? currARS.routeConfig.canDeactivate : null;
        if (!canDeactivate || canDeactivate.length === 0)
            return of(true);
        var canDeactivateObservables = canDeactivate.map(function (c) {
            var guard = getToken(c, currARS, moduleInjector);
            var observable;
            if (isCanDeactivate(guard)) {
                observable =
                    wrapIntoObservable(guard.canDeactivate(component, currARS, currRSS, futureRSS));
            }
            else if (isFunction$1(guard)) {
                observable = wrapIntoObservable(guard(component, currARS, currRSS, futureRSS));
            }
            else {
                throw new Error('Invalid CanDeactivate guard');
            }
            return observable.pipe(first());
        });
        return of(canDeactivateObservables).pipe(prioritizedGuardValue());
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var NoMatch$1 = /** @class */ (function () {
        function NoMatch() {
        }
        return NoMatch;
    }());
    function recognize(rootComponentType, config, urlTree, url, paramsInheritanceStrategy, relativeLinkResolution) {
        if (paramsInheritanceStrategy === void 0) { paramsInheritanceStrategy = 'emptyOnly'; }
        if (relativeLinkResolution === void 0) { relativeLinkResolution = 'legacy'; }
        return new Recognizer(rootComponentType, config, urlTree, url, paramsInheritanceStrategy, relativeLinkResolution)
            .recognize();
    }
    var Recognizer = /** @class */ (function () {
        function Recognizer(rootComponentType, config, urlTree, url, paramsInheritanceStrategy, relativeLinkResolution) {
            this.rootComponentType = rootComponentType;
            this.config = config;
            this.urlTree = urlTree;
            this.url = url;
            this.paramsInheritanceStrategy = paramsInheritanceStrategy;
            this.relativeLinkResolution = relativeLinkResolution;
        }
        Recognizer.prototype.recognize = function () {
            try {
                var rootSegmentGroup = split$1(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup;
                var children = this.processSegmentGroup(this.config, rootSegmentGroup, PRIMARY_OUTLET);
                var root = new ActivatedRouteSnapshot([], Object.freeze({}), Object.freeze(__assign({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, PRIMARY_OUTLET, this.rootComponentType, null, this.urlTree.root, -1, {});
                var rootNode = new TreeNode(root, children);
                var routeState = new RouterStateSnapshot(this.url, rootNode);
                this.inheritParamsAndData(routeState._root);
                return of(routeState);
            }
            catch (e) {
                return new Observable(function (obs) { return obs.error(e); });
            }
        };
        Recognizer.prototype.inheritParamsAndData = function (routeNode) {
            var _this = this;
            var route = routeNode.value;
            var i = inheritedParamsDataResolve(route, this.paramsInheritanceStrategy);
            route.params = Object.freeze(i.params);
            route.data = Object.freeze(i.data);
            routeNode.children.forEach(function (n) { return _this.inheritParamsAndData(n); });
        };
        Recognizer.prototype.processSegmentGroup = function (config, segmentGroup, outlet) {
            if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
                return this.processChildren(config, segmentGroup);
            }
            return this.processSegment(config, segmentGroup, segmentGroup.segments, outlet);
        };
        Recognizer.prototype.processChildren = function (config, segmentGroup) {
            var _this = this;
            var children = mapChildrenIntoArray(segmentGroup, function (child, childOutlet) { return _this.processSegmentGroup(config, child, childOutlet); });
            checkOutletNameUniqueness(children);
            sortActivatedRouteSnapshots(children);
            return children;
        };
        Recognizer.prototype.processSegment = function (config, segmentGroup, segments, outlet) {
            var e_1, _a;
            try {
                for (var config_1 = __values(config), config_1_1 = config_1.next(); !config_1_1.done; config_1_1 = config_1.next()) {
                    var r = config_1_1.value;
                    try {
                        return this.processSegmentAgainstRoute(r, segmentGroup, segments, outlet);
                    }
                    catch (e) {
                        if (!(e instanceof NoMatch$1))
                            throw e;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (config_1_1 && !config_1_1.done && (_a = config_1.return)) _a.call(config_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (this.noLeftoversInUrl(segmentGroup, segments, outlet)) {
                return [];
            }
            throw new NoMatch$1();
        };
        Recognizer.prototype.noLeftoversInUrl = function (segmentGroup, segments, outlet) {
            return segments.length === 0 && !segmentGroup.children[outlet];
        };
        Recognizer.prototype.processSegmentAgainstRoute = function (route, rawSegment, segments, outlet) {
            if (route.redirectTo)
                throw new NoMatch$1();
            if ((route.outlet || PRIMARY_OUTLET) !== outlet)
                throw new NoMatch$1();
            var snapshot;
            var consumedSegments = [];
            var rawSlicedSegments = [];
            if (route.path === '**') {
                var params = segments.length > 0 ? last$1(segments).parameters : {};
                snapshot = new ActivatedRouteSnapshot(segments, params, Object.freeze(__assign({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), outlet, route.component, route, getSourceSegmentGroup(rawSegment), getPathIndexShift(rawSegment) + segments.length, getResolve(route));
            }
            else {
                var result = match$1(rawSegment, route, segments);
                consumedSegments = result.consumedSegments;
                rawSlicedSegments = segments.slice(result.lastChild);
                snapshot = new ActivatedRouteSnapshot(consumedSegments, result.parameters, Object.freeze(__assign({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), outlet, route.component, route, getSourceSegmentGroup(rawSegment), getPathIndexShift(rawSegment) + consumedSegments.length, getResolve(route));
            }
            var childConfig = getChildConfig(route);
            var _a = split$1(rawSegment, consumedSegments, rawSlicedSegments, childConfig, this.relativeLinkResolution), segmentGroup = _a.segmentGroup, slicedSegments = _a.slicedSegments;
            if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
                var children_1 = this.processChildren(childConfig, segmentGroup);
                return [new TreeNode(snapshot, children_1)];
            }
            if (childConfig.length === 0 && slicedSegments.length === 0) {
                return [new TreeNode(snapshot, [])];
            }
            var children = this.processSegment(childConfig, segmentGroup, slicedSegments, PRIMARY_OUTLET);
            return [new TreeNode(snapshot, children)];
        };
        return Recognizer;
    }());
    function sortActivatedRouteSnapshots(nodes) {
        nodes.sort(function (a, b) {
            if (a.value.outlet === PRIMARY_OUTLET)
                return -1;
            if (b.value.outlet === PRIMARY_OUTLET)
                return 1;
            return a.value.outlet.localeCompare(b.value.outlet);
        });
    }
    function getChildConfig(route) {
        if (route.children) {
            return route.children;
        }
        if (route.loadChildren) {
            return route._loadedConfig.routes;
        }
        return [];
    }
    function match$1(segmentGroup, route, segments) {
        if (route.path === '') {
            if (route.pathMatch === 'full' && (segmentGroup.hasChildren() || segments.length > 0)) {
                throw new NoMatch$1();
            }
            return { consumedSegments: [], lastChild: 0, parameters: {} };
        }
        var matcher = route.matcher || defaultUrlMatcher;
        var res = matcher(segments, segmentGroup, route);
        if (!res)
            throw new NoMatch$1();
        var posParams = {};
        forEach(res.posParams, function (v, k) { posParams[k] = v.path; });
        var parameters = res.consumed.length > 0 ? __assign({}, posParams, res.consumed[res.consumed.length - 1].parameters) :
            posParams;
        return { consumedSegments: res.consumed, lastChild: res.consumed.length, parameters: parameters };
    }
    function checkOutletNameUniqueness(nodes) {
        var names = {};
        nodes.forEach(function (n) {
            var routeWithSameOutletName = names[n.value.outlet];
            if (routeWithSameOutletName) {
                var p = routeWithSameOutletName.url.map(function (s) { return s.toString(); }).join('/');
                var c = n.value.url.map(function (s) { return s.toString(); }).join('/');
                throw new Error("Two segments cannot have the same outlet name: '" + p + "' and '" + c + "'.");
            }
            names[n.value.outlet] = n.value;
        });
    }
    function getSourceSegmentGroup(segmentGroup) {
        var s = segmentGroup;
        while (s._sourceSegment) {
            s = s._sourceSegment;
        }
        return s;
    }
    function getPathIndexShift(segmentGroup) {
        var s = segmentGroup;
        var res = (s._segmentIndexShift ? s._segmentIndexShift : 0);
        while (s._sourceSegment) {
            s = s._sourceSegment;
            res += (s._segmentIndexShift ? s._segmentIndexShift : 0);
        }
        return res - 1;
    }
    function split$1(segmentGroup, consumedSegments, slicedSegments, config, relativeLinkResolution) {
        if (slicedSegments.length > 0 &&
            containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, config)) {
            var s_1 = new UrlSegmentGroup(consumedSegments, createChildrenForEmptyPaths(segmentGroup, consumedSegments, config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
            s_1._sourceSegment = segmentGroup;
            s_1._segmentIndexShift = consumedSegments.length;
            return { segmentGroup: s_1, slicedSegments: [] };
        }
        if (slicedSegments.length === 0 &&
            containsEmptyPathMatches(segmentGroup, slicedSegments, config)) {
            var s_2 = new UrlSegmentGroup(segmentGroup.segments, addEmptyPathsToChildrenIfNeeded(segmentGroup, consumedSegments, slicedSegments, config, segmentGroup.children, relativeLinkResolution));
            s_2._sourceSegment = segmentGroup;
            s_2._segmentIndexShift = consumedSegments.length;
            return { segmentGroup: s_2, slicedSegments: slicedSegments };
        }
        var s = new UrlSegmentGroup(segmentGroup.segments, segmentGroup.children);
        s._sourceSegment = segmentGroup;
        s._segmentIndexShift = consumedSegments.length;
        return { segmentGroup: s, slicedSegments: slicedSegments };
    }
    function addEmptyPathsToChildrenIfNeeded(segmentGroup, consumedSegments, slicedSegments, routes, children, relativeLinkResolution) {
        var e_2, _a;
        var res = {};
        try {
            for (var routes_1 = __values(routes), routes_1_1 = routes_1.next(); !routes_1_1.done; routes_1_1 = routes_1.next()) {
                var r = routes_1_1.value;
                if (emptyPathMatch(segmentGroup, slicedSegments, r) && !children[getOutlet$1(r)]) {
                    var s = new UrlSegmentGroup([], {});
                    s._sourceSegment = segmentGroup;
                    if (relativeLinkResolution === 'legacy') {
                        s._segmentIndexShift = segmentGroup.segments.length;
                    }
                    else {
                        s._segmentIndexShift = consumedSegments.length;
                    }
                    res[getOutlet$1(r)] = s;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (routes_1_1 && !routes_1_1.done && (_a = routes_1.return)) _a.call(routes_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return __assign({}, children, res);
    }
    function createChildrenForEmptyPaths(segmentGroup, consumedSegments, routes, primarySegment) {
        var e_3, _a;
        var res = {};
        res[PRIMARY_OUTLET] = primarySegment;
        primarySegment._sourceSegment = segmentGroup;
        primarySegment._segmentIndexShift = consumedSegments.length;
        try {
            for (var routes_2 = __values(routes), routes_2_1 = routes_2.next(); !routes_2_1.done; routes_2_1 = routes_2.next()) {
                var r = routes_2_1.value;
                if (r.path === '' && getOutlet$1(r) !== PRIMARY_OUTLET) {
                    var s = new UrlSegmentGroup([], {});
                    s._sourceSegment = segmentGroup;
                    s._segmentIndexShift = consumedSegments.length;
                    res[getOutlet$1(r)] = s;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (routes_2_1 && !routes_2_1.done && (_a = routes_2.return)) _a.call(routes_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return res;
    }
    function containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, routes) {
        return routes.some(function (r) { return emptyPathMatch(segmentGroup, slicedSegments, r) && getOutlet$1(r) !== PRIMARY_OUTLET; });
    }
    function containsEmptyPathMatches(segmentGroup, slicedSegments, routes) {
        return routes.some(function (r) { return emptyPathMatch(segmentGroup, slicedSegments, r); });
    }
    function emptyPathMatch(segmentGroup, slicedSegments, r) {
        if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === 'full') {
            return false;
        }
        return r.path === '' && r.redirectTo === undefined;
    }
    function getOutlet$1(route) {
        return route.outlet || PRIMARY_OUTLET;
    }
    function getData(route) {
        return route.data || {};
    }
    function getResolve(route) {
        return route.resolve || {};
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function recognize$1(rootComponentType, config, serializer, paramsInheritanceStrategy, relativeLinkResolution) {
        return function (source) {
            return source.pipe(mergeMap(function (t) { return recognize(rootComponentType, config, t.urlAfterRedirects, serializer(t.urlAfterRedirects), paramsInheritanceStrategy, relativeLinkResolution)
                .pipe(map(function (targetSnapshot) { return (__assign({}, t, { targetSnapshot: targetSnapshot })); })); }));
        };
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function resolveData(paramsInheritanceStrategy, moduleInjector) {
        return function (source) {
            return source.pipe(mergeMap(function (t) {
                var targetSnapshot = t.targetSnapshot, canActivateChecks = t.guards.canActivateChecks;
                if (!canActivateChecks.length) {
                    return of(t);
                }
                return from(canActivateChecks)
                    .pipe(concatMap(function (check) { return runResolve(check.route, targetSnapshot, paramsInheritanceStrategy, moduleInjector); }), reduce(function (_, __) { return _; }), map(function (_) { return t; }));
            }));
        };
    }
    function runResolve(futureARS, futureRSS, paramsInheritanceStrategy, moduleInjector) {
        var resolve = futureARS._resolve;
        return resolveNode(resolve, futureARS, futureRSS, moduleInjector)
            .pipe(map(function (resolvedData) {
            futureARS._resolvedData = resolvedData;
            futureARS.data = __assign({}, futureARS.data, inheritedParamsDataResolve(futureARS, paramsInheritanceStrategy).resolve);
            return null;
        }));
    }
    function resolveNode(resolve, futureARS, futureRSS, moduleInjector) {
        var keys = Object.keys(resolve);
        if (keys.length === 0) {
            return of({});
        }
        if (keys.length === 1) {
            var key_1 = keys[0];
            return getResolver(resolve[key_1], futureARS, futureRSS, moduleInjector)
                .pipe(map(function (value) {
                var _a;
                return _a = {}, _a[key_1] = value, _a;
            }));
        }
        var data = {};
        var runningResolvers$ = from(keys).pipe(mergeMap(function (key) {
            return getResolver(resolve[key], futureARS, futureRSS, moduleInjector)
                .pipe(map(function (value) {
                data[key] = value;
                return value;
            }));
        }));
        return runningResolvers$.pipe(last(), map(function () { return data; }));
    }
    function getResolver(injectionToken, futureARS, futureRSS, moduleInjector) {
        var resolver = getToken(injectionToken, futureARS, moduleInjector);
        return resolver.resolve ? wrapIntoObservable(resolver.resolve(futureARS, futureRSS)) :
            wrapIntoObservable(resolver(futureARS, futureRSS));
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Perform a side effect through a switchMap for every emission on the source Observable,
     * but return an Observable that is identical to the source. It's essentially the same as
     * the `tap` operator, but if the side effectful `next` function returns an ObservableInput,
     * it will wait before continuing with the original value.
     */
    function switchTap(next) {
        return function (source) {
            return source.pipe(switchMap(function (v) {
                var nextResult = next(v);
                if (nextResult) {
                    return from(nextResult).pipe(map(function () { return v; }));
                }
                return from([v]);
            }));
        };
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @description
     *
     * Provides a way to customize when activated routes get reused.
     *
     * @publicApi
     */
    var RouteReuseStrategy = /** @class */ (function () {
        function RouteReuseStrategy() {
        }
        return RouteReuseStrategy;
    }());
    /**
     * Does not detach any subtrees. Reuses routes as long as their route config is the same.
     */
    var DefaultRouteReuseStrategy = /** @class */ (function () {
        function DefaultRouteReuseStrategy() {
        }
        DefaultRouteReuseStrategy.prototype.shouldDetach = function (route) { return false; };
        DefaultRouteReuseStrategy.prototype.store = function (route, detachedTree) { };
        DefaultRouteReuseStrategy.prototype.shouldAttach = function (route) { return false; };
        DefaultRouteReuseStrategy.prototype.retrieve = function (route) { return null; };
        DefaultRouteReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
            return future.routeConfig === curr.routeConfig;
        };
        return DefaultRouteReuseStrategy;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @docsNotRequired
     * @publicApi
     */
    var ROUTES = new core.InjectionToken('ROUTES');
    var RouterConfigLoader = /** @class */ (function () {
        function RouterConfigLoader(loader, compiler, onLoadStartListener, onLoadEndListener) {
            this.loader = loader;
            this.compiler = compiler;
            this.onLoadStartListener = onLoadStartListener;
            this.onLoadEndListener = onLoadEndListener;
        }
        RouterConfigLoader.prototype.load = function (parentInjector, route) {
            var _this = this;
            if (this.onLoadStartListener) {
                this.onLoadStartListener(route);
            }
            var moduleFactory$ = this.loadModuleFactory(route.loadChildren);
            return moduleFactory$.pipe(map(function (factory) {
                if (_this.onLoadEndListener) {
                    _this.onLoadEndListener(route);
                }
                var module = factory.create(parentInjector);
                return new LoadedRouterConfig(flatten(module.injector.get(ROUTES)).map(standardizeConfig), module);
            }));
        };
        RouterConfigLoader.prototype.loadModuleFactory = function (loadChildren) {
            var _this = this;
            if (typeof loadChildren === 'string') {
                return from(this.loader.load(loadChildren));
            }
            else {
                return wrapIntoObservable(loadChildren()).pipe(mergeMap(function (t) {
                    if (t instanceof core.NgModuleFactory) {
                        return of(t);
                    }
                    else {
                        return from(_this.compiler.compileModuleAsync(t));
                    }
                }));
            }
        };
        return RouterConfigLoader;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @description
     *
     * Provides a way to migrate AngularJS applications to Angular.
     *
     * @publicApi
     */
    var UrlHandlingStrategy = /** @class */ (function () {
        function UrlHandlingStrategy() {
        }
        return UrlHandlingStrategy;
    }());
    /**
     * @publicApi
     */
    var DefaultUrlHandlingStrategy = /** @class */ (function () {
        function DefaultUrlHandlingStrategy() {
        }
        DefaultUrlHandlingStrategy.prototype.shouldProcessUrl = function (url) { return true; };
        DefaultUrlHandlingStrategy.prototype.extract = function (url) { return url; };
        DefaultUrlHandlingStrategy.prototype.merge = function (newUrlPart, wholeUrl) { return newUrlPart; };
        return DefaultUrlHandlingStrategy;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function defaultErrorHandler(error) {
        throw error;
    }
    function defaultMalformedUriErrorHandler(error, urlSerializer, url) {
        return urlSerializer.parse('/');
    }
    /**
     * @internal
     */
    function defaultRouterHook(snapshot, runExtras) {
        return of(null);
    }
    /**
     * @description
     *
     * An NgModule that provides navigation and URL manipulation capabilities.
     *
     * @see `Route`.
     * @see [Routing and Navigation Guide](guide/router).
     *
     * @ngModule RouterModule
     *
     * @publicApi
     */
    var Router = /** @class */ (function () {
        /**
         * Creates the router service.
         */
        // TODO: vsavkin make internal after the final is out.
        function Router(rootComponentType, urlSerializer, rootContexts, location, injector, loader, compiler, config) {
            var _this = this;
            this.rootComponentType = rootComponentType;
            this.urlSerializer = urlSerializer;
            this.rootContexts = rootContexts;
            this.location = location;
            this.config = config;
            this.lastSuccessfulNavigation = null;
            this.currentNavigation = null;
            this.navigationId = 0;
            this.isNgZoneEnabled = false;
            /**
             * An event stream for routing events in this NgModule.
             */
            this.events = new Subject();
            /**
             * A handler for navigation errors in this NgModule.
             */
            this.errorHandler = defaultErrorHandler;
            /**
             * Malformed uri error handler is invoked when `Router.parseUrl(url)` throws an
             * error due to containing an invalid character. The most common case would be a `%` sign
             * that's not encoded and is not part of a percent encoded sequence.
             */
            this.malformedUriErrorHandler = defaultMalformedUriErrorHandler;
            /**
             * True if at least one navigation event has occurred,
             * false otherwise.
             */
            this.navigated = false;
            this.lastSuccessfulId = -1;
            /**
             * Hooks that enable you to pause navigation,
             * either before or after the preactivation phase.
             * Used by `RouterModule`.
             *
             * @internal
             */
            this.hooks = {
                beforePreactivation: defaultRouterHook,
                afterPreactivation: defaultRouterHook
            };
            /**
             * Extracts and merges URLs. Used for AngularJS to Angular migrations.
             */
            this.urlHandlingStrategy = new DefaultUrlHandlingStrategy();
            /**
             * The strategy for re-using routes.
             */
            this.routeReuseStrategy = new DefaultRouteReuseStrategy();
            /**
             * How to handle a navigation request to the current URL. One of:
             * - `'ignore'` :  The router ignores the request.
             * - `'reload'` : The router reloads the URL. Use to implement a "refresh" feature.
             */
            this.onSameUrlNavigation = 'ignore';
            /**
             * How to merge parameters, data, and resolved data from parent to child
             * routes. One of:
             *
             * - `'emptyOnly'` : Inherit parent parameters, data, and resolved data
             * for path-less or component-less routes.
             * - `'always'` : Inherit parent parameters, data, and resolved data
             * for all child routes.
             */
            this.paramsInheritanceStrategy = 'emptyOnly';
            /**
             * Defines when the router updates the browser URL. The default behavior is to update after
             * successful navigation. However, some applications may prefer a mode where the URL gets
             * updated at the beginning of navigation. The most common use case would be updating the
             * URL early so if navigation fails, you can show an error message with the URL that failed.
             * Available options are:
             *
             * - `'deferred'`, the default, updates the browser URL after navigation has finished.
             * - `'eager'`, updates browser URL at the beginning of navigation.
             */
            this.urlUpdateStrategy = 'deferred';
            /**
             * See {@link RouterModule} for more information.
             */
            this.relativeLinkResolution = 'legacy';
            var onLoadStart = function (r) { return _this.triggerEvent(new RouteConfigLoadStart(r)); };
            var onLoadEnd = function (r) { return _this.triggerEvent(new RouteConfigLoadEnd(r)); };
            this.ngModule = injector.get(core.NgModuleRef);
            this.console = injector.get(core.ɵConsole);
            var ngZone = injector.get(core.NgZone);
            this.isNgZoneEnabled = ngZone instanceof core.NgZone;
            this.resetConfig(config);
            this.currentUrlTree = createEmptyUrlTree();
            this.rawUrlTree = this.currentUrlTree;
            this.browserUrlTree = this.currentUrlTree;
            this.configLoader = new RouterConfigLoader(loader, compiler, onLoadStart, onLoadEnd);
            this.routerState = createEmptyState(this.currentUrlTree, this.rootComponentType);
            this.transitions = new BehaviorSubject({
                id: 0,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
                urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
                rawUrl: this.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(true),
                source: 'imperative',
                restoredState: null,
                currentSnapshot: this.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: this.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
            });
            this.navigations = this.setupNavigations(this.transitions);
            this.processNavigations();
        }
        Router.prototype.setupNavigations = function (transitions) {
            var _this = this;
            var eventsSubject = this.events;
            return transitions.pipe(filter(function (t) { return t.id !== 0; }), 
            // Extract URL
            map(function (t) { return (__assign({}, t, { extractedUrl: _this.urlHandlingStrategy.extract(t.rawUrl) })); }), 
            // Using switchMap so we cancel executing navigations when a new one comes in
            switchMap(function (t) {
                var completed = false;
                var errored = false;
                return of(t).pipe(
                // Store the Navigation object
                tap(function (t) {
                    _this.currentNavigation = {
                        id: t.id,
                        initialUrl: t.currentRawUrl,
                        extractedUrl: t.extractedUrl,
                        trigger: t.source,
                        extras: t.extras,
                        previousNavigation: _this.lastSuccessfulNavigation ? __assign({}, _this.lastSuccessfulNavigation, { previousNavigation: null }) :
                            null
                    };
                }), switchMap(function (t) {
                    var urlTransition = !_this.navigated || t.extractedUrl.toString() !== _this.browserUrlTree.toString();
                    var processCurrentUrl = (_this.onSameUrlNavigation === 'reload' ? true : urlTransition) &&
                        _this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl);
                    if (processCurrentUrl) {
                        return of(t).pipe(
                        // Fire NavigationStart event
                        switchMap(function (t) {
                            var transition = _this.transitions.getValue();
                            eventsSubject.next(new NavigationStart(t.id, _this.serializeUrl(t.extractedUrl), t.source, t.restoredState));
                            if (transition !== _this.transitions.getValue()) {
                                return EMPTY;
                            }
                            return [t];
                        }), 
                        // This delay is required to match old behavior that forced navigation to
                        // always be async
                        switchMap(function (t) { return Promise.resolve(t); }), 
                        // ApplyRedirects
                        applyRedirects$1(_this.ngModule.injector, _this.configLoader, _this.urlSerializer, _this.config), 
                        // Update the currentNavigation
                        tap(function (t) {
                            _this.currentNavigation = __assign({}, _this.currentNavigation, { finalUrl: t.urlAfterRedirects });
                        }), 
                        // Recognize
                        recognize$1(_this.rootComponentType, _this.config, function (url) { return _this.serializeUrl(url); }, _this.paramsInheritanceStrategy, _this.relativeLinkResolution), 
                        // Update URL if in `eager` update mode
                        tap(function (t) {
                            if (_this.urlUpdateStrategy === 'eager') {
                                if (!t.extras.skipLocationChange) {
                                    _this.setBrowserUrl(t.urlAfterRedirects, !!t.extras.replaceUrl, t.id);
                                }
                                _this.browserUrlTree = t.urlAfterRedirects;
                            }
                        }), 
                        // Fire RoutesRecognized
                        tap(function (t) {
                            var routesRecognized = new RoutesRecognized(t.id, _this.serializeUrl(t.extractedUrl), _this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                            eventsSubject.next(routesRecognized);
                        }));
                    }
                    else {
                        var processPreviousUrl = urlTransition && _this.rawUrlTree &&
                            _this.urlHandlingStrategy.shouldProcessUrl(_this.rawUrlTree);
                        /* When the current URL shouldn't be processed, but the previous one was, we
                         * handle this "error condition" by navigating to the previously successful URL,
                         * but leaving the URL intact.*/
                        if (processPreviousUrl) {
                            var id = t.id, extractedUrl = t.extractedUrl, source = t.source, restoredState = t.restoredState, extras = t.extras;
                            var navStart = new NavigationStart(id, _this.serializeUrl(extractedUrl), source, restoredState);
                            eventsSubject.next(navStart);
                            var targetSnapshot = createEmptyState(extractedUrl, _this.rootComponentType).snapshot;
                            return of(__assign({}, t, { targetSnapshot: targetSnapshot, urlAfterRedirects: extractedUrl, extras: __assign({}, extras, { skipLocationChange: false, replaceUrl: false }) }));
                        }
                        else {
                            /* When neither the current or previous URL can be processed, do nothing other
                             * than update router's internal reference to the current "settled" URL. This
                             * way the next navigation will be coming from the current URL in the browser.
                             */
                            _this.rawUrlTree = t.rawUrl;
                            t.resolve(null);
                            return EMPTY;
                        }
                    }
                }), 
                // Before Preactivation
                switchTap(function (t) {
                    var targetSnapshot = t.targetSnapshot, navigationId = t.id, appliedUrlTree = t.extractedUrl, rawUrlTree = t.rawUrl, _a = t.extras, skipLocationChange = _a.skipLocationChange, replaceUrl = _a.replaceUrl;
                    return _this.hooks.beforePreactivation(targetSnapshot, {
                        navigationId: navigationId,
                        appliedUrlTree: appliedUrlTree,
                        rawUrlTree: rawUrlTree,
                        skipLocationChange: !!skipLocationChange,
                        replaceUrl: !!replaceUrl,
                    });
                }), 
                // --- GUARDS ---
                tap(function (t) {
                    var guardsStart = new GuardsCheckStart(t.id, _this.serializeUrl(t.extractedUrl), _this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                    _this.triggerEvent(guardsStart);
                }), map(function (t) { return (__assign({}, t, { guards: getAllRouteGuards(t.targetSnapshot, t.currentSnapshot, _this.rootContexts) })); }), checkGuards(_this.ngModule.injector, function (evt) { return _this.triggerEvent(evt); }), tap(function (t) {
                    if (isUrlTree(t.guardsResult)) {
                        var error = navigationCancelingError("Redirecting to \"" + _this.serializeUrl(t.guardsResult) + "\"");
                        error.url = t.guardsResult;
                        throw error;
                    }
                }), tap(function (t) {
                    var guardsEnd = new GuardsCheckEnd(t.id, _this.serializeUrl(t.extractedUrl), _this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
                    _this.triggerEvent(guardsEnd);
                }), filter(function (t) {
                    if (!t.guardsResult) {
                        _this.resetUrlToCurrentUrlTree();
                        var navCancel = new NavigationCancel(t.id, _this.serializeUrl(t.extractedUrl), '');
                        eventsSubject.next(navCancel);
                        t.resolve(false);
                        return false;
                    }
                    return true;
                }), 
                // --- RESOLVE ---
                switchTap(function (t) {
                    if (t.guards.canActivateChecks.length) {
                        return of(t).pipe(tap(function (t) {
                            var resolveStart = new ResolveStart(t.id, _this.serializeUrl(t.extractedUrl), _this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                            _this.triggerEvent(resolveStart);
                        }), resolveData(_this.paramsInheritanceStrategy, _this.ngModule.injector), //
                        tap(function (t) {
                            var resolveEnd = new ResolveEnd(t.id, _this.serializeUrl(t.extractedUrl), _this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                            _this.triggerEvent(resolveEnd);
                        }));
                    }
                    return undefined;
                }), 
                // --- AFTER PREACTIVATION ---
                switchTap(function (t) {
                    var targetSnapshot = t.targetSnapshot, navigationId = t.id, appliedUrlTree = t.extractedUrl, rawUrlTree = t.rawUrl, _a = t.extras, skipLocationChange = _a.skipLocationChange, replaceUrl = _a.replaceUrl;
                    return _this.hooks.afterPreactivation(targetSnapshot, {
                        navigationId: navigationId,
                        appliedUrlTree: appliedUrlTree,
                        rawUrlTree: rawUrlTree,
                        skipLocationChange: !!skipLocationChange,
                        replaceUrl: !!replaceUrl,
                    });
                }), map(function (t) {
                    var targetRouterState = createRouterState(_this.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
                    return (__assign({}, t, { targetRouterState: targetRouterState }));
                }), 
                /* Once here, we are about to activate syncronously. The assumption is this will
                   succeed, and user code may read from the Router service. Therefore before
                   activation, we need to update router properties storing the current URL and the
                   RouterState, as well as updated the browser URL. All this should happen *before*
                   activating. */
                tap(function (t) {
                    _this.currentUrlTree = t.urlAfterRedirects;
                    _this.rawUrlTree = _this.urlHandlingStrategy.merge(_this.currentUrlTree, t.rawUrl);
                    _this.routerState = t.targetRouterState;
                    if (_this.urlUpdateStrategy === 'deferred') {
                        if (!t.extras.skipLocationChange) {
                            _this.setBrowserUrl(_this.rawUrlTree, !!t.extras.replaceUrl, t.id, t.extras.state);
                        }
                        _this.browserUrlTree = t.urlAfterRedirects;
                    }
                }), activateRoutes(_this.rootContexts, _this.routeReuseStrategy, function (evt) { return _this.triggerEvent(evt); }), tap({ next: function () { completed = true; }, complete: function () { completed = true; } }), finalize(function () {
                    /* When the navigation stream finishes either through error or success, we set the
                     * `completed` or `errored` flag. However, there are some situations where we could
                     * get here without either of those being set. For instance, a redirect during
                     * NavigationStart. Therefore, this is a catch-all to make sure the NavigationCancel
                     * event is fired when a navigation gets cancelled but not caught by other means. */
                    if (!completed && !errored) {
                        // Must reset to current URL tree here to ensure history.state is set. On a fresh
                        // page load, if a new navigation comes in before a successful navigation
                        // completes, there will be nothing in history.state.navigationId. This can cause
                        // sync problems with AngularJS sync code which looks for a value here in order
                        // to determine whether or not to handle a given popstate event or to leave it
                        // to the Angualr router.
                        _this.resetUrlToCurrentUrlTree();
                        var navCancel = new NavigationCancel(t.id, _this.serializeUrl(t.extractedUrl), "Navigation ID " + t.id + " is not equal to the current navigation id " + _this.navigationId);
                        eventsSubject.next(navCancel);
                        t.resolve(false);
                    }
                    // currentNavigation should always be reset to null here. If navigation was
                    // successful, lastSuccessfulTransition will have already been set. Therefore we
                    // can safely set currentNavigation to null here.
                    _this.currentNavigation = null;
                }), catchError(function (e) {
                    errored = true;
                    /* This error type is issued during Redirect, and is handled as a cancellation
                     * rather than an error. */
                    if (isNavigationCancelingError(e)) {
                        var redirecting = isUrlTree(e.url);
                        if (!redirecting) {
                            // Set property only if we're not redirecting. If we landed on a page and
                            // redirect to `/` route, the new navigation is going to see the `/` isn't
                            // a change from the default currentUrlTree and won't navigate. This is
                            // only applicable with initial navigation, so setting `navigated` only when
                            // not redirecting resolves this scenario.
                            _this.navigated = true;
                            _this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
                        }
                        var navCancel = new NavigationCancel(t.id, _this.serializeUrl(t.extractedUrl), e.message);
                        eventsSubject.next(navCancel);
                        t.resolve(false);
                        if (redirecting) {
                            _this.navigateByUrl(e.url);
                        }
                        /* All other errors should reset to the router's internal URL reference to the
                         * pre-error state. */
                    }
                    else {
                        _this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
                        var navError = new NavigationError(t.id, _this.serializeUrl(t.extractedUrl), e);
                        eventsSubject.next(navError);
                        try {
                            t.resolve(_this.errorHandler(e));
                        }
                        catch (ee) {
                            t.reject(ee);
                        }
                    }
                    return EMPTY;
                }));
                // TODO(jasonaden): remove cast once g3 is on updated TypeScript
            }));
        };
        /**
         * @internal
         * TODO: this should be removed once the constructor of the router made internal
         */
        Router.prototype.resetRootComponentType = function (rootComponentType) {
            this.rootComponentType = rootComponentType;
            // TODO: vsavkin router 4.0 should make the root component set to null
            // this will simplify the lifecycle of the router.
            this.routerState.root.component = this.rootComponentType;
        };
        Router.prototype.getTransition = function () { return this.transitions.value; };
        Router.prototype.setTransition = function (t) {
            this.transitions.next(__assign({}, this.getTransition(), t));
        };
        /**
         * Sets up the location change listener and performs the initial navigation.
         */
        Router.prototype.initialNavigation = function () {
            this.setUpLocationChangeListener();
            if (this.navigationId === 0) {
                this.navigateByUrl(this.location.path(true), { replaceUrl: true });
            }
        };
        /**
         * Sets up the location change listener.
         */
        Router.prototype.setUpLocationChangeListener = function () {
            var _this = this;
            // Don't need to use Zone.wrap any more, because zone.js
            // already patch onPopState, so location change callback will
            // run into ngZone
            if (!this.locationSubscription) {
                this.locationSubscription = this.location.subscribe(function (change) {
                    var rawUrlTree = _this.parseUrl(change['url']);
                    var source = change['type'] === 'popstate' ? 'popstate' : 'hashchange';
                    // Navigations coming from Angular router have a navigationId state property. When this
                    // exists, restore the state.
                    var state = change.state && change.state.navigationId ? change.state : null;
                    setTimeout(function () { _this.scheduleNavigation(rawUrlTree, source, state, { replaceUrl: true }); }, 0);
                });
            }
        };
        Object.defineProperty(Router.prototype, "url", {
            /** The current URL. */
            get: function () { return this.serializeUrl(this.currentUrlTree); },
            enumerable: true,
            configurable: true
        });
        /** The current Navigation object if one exists */
        Router.prototype.getCurrentNavigation = function () { return this.currentNavigation; };
        /** @internal */
        Router.prototype.triggerEvent = function (event) { this.events.next(event); };
        /**
         * Resets the configuration used for navigation and generating links.
         *
         * @param config The route array for the new configuration.
         *
         * @usageNotes
         *
         * ```
         * router.resetConfig([
         *  { path: 'team/:id', component: TeamCmp, children: [
         *    { path: 'simple', component: SimpleCmp },
         *    { path: 'user/:name', component: UserCmp }
         *  ]}
         * ]);
         * ```
         */
        Router.prototype.resetConfig = function (config) {
            validateConfig(config);
            this.config = config.map(standardizeConfig);
            this.navigated = false;
            this.lastSuccessfulId = -1;
        };
        /** @docsNotRequired */
        Router.prototype.ngOnDestroy = function () { this.dispose(); };
        /** Disposes of the router. */
        Router.prototype.dispose = function () {
            if (this.locationSubscription) {
                this.locationSubscription.unsubscribe();
                this.locationSubscription = null;
            }
        };
        /**
         * Applies an array of commands to the current URL tree and creates a new URL tree.
         *
         * When given an activate route, applies the given commands starting from the route.
         * When not given a route, applies the given command starting from the root.
         *
         * @param commands An array of commands to apply.
         * @param navigationExtras
         * @returns The new URL tree.
         *
         * @usageNotes
         *
         * ```
         * // create /team/33/user/11
         * router.createUrlTree(['/team', 33, 'user', 11]);
         *
         * // create /team/33;expand=true/user/11
         * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
         *
         * // you can collapse static segments like this (this works only with the first passed-in value):
         * router.createUrlTree(['/team/33/user', userId]);
         *
         * // If the first segment can contain slashes, and you do not want the router to split it, you
         * // can do the following:
         *
         * router.createUrlTree([{segmentPath: '/one/two'}]);
         *
         * // create /team/33/(user/11//right:chat)
         * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
         *
         * // remove the right secondary node
         * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
         *
         * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
         *
         * // navigate to /team/33/user/11/details
         * router.createUrlTree(['details'], {relativeTo: route});
         *
         * // navigate to /team/33/user/22
         * router.createUrlTree(['../22'], {relativeTo: route});
         *
         * // navigate to /team/44/user/22
         * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
         * ```
         */
        Router.prototype.createUrlTree = function (commands, navigationExtras) {
            if (navigationExtras === void 0) { navigationExtras = {}; }
            var relativeTo = navigationExtras.relativeTo, queryParams = navigationExtras.queryParams, fragment = navigationExtras.fragment, preserveQueryParams = navigationExtras.preserveQueryParams, queryParamsHandling = navigationExtras.queryParamsHandling, preserveFragment = navigationExtras.preserveFragment;
            if (core.isDevMode() && preserveQueryParams && console && console.warn) {
                console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
            }
            var a = relativeTo || this.routerState.root;
            var f = preserveFragment ? this.currentUrlTree.fragment : fragment;
            var q = null;
            if (queryParamsHandling) {
                switch (queryParamsHandling) {
                    case 'merge':
                        q = __assign({}, this.currentUrlTree.queryParams, queryParams);
                        break;
                    case 'preserve':
                        q = this.currentUrlTree.queryParams;
                        break;
                    default:
                        q = queryParams || null;
                }
            }
            else {
                q = preserveQueryParams ? this.currentUrlTree.queryParams : queryParams || null;
            }
            if (q !== null) {
                q = this.removeEmptyProps(q);
            }
            return createUrlTree(a, this.currentUrlTree, commands, q, f);
        };
        /**
         * Navigate based on the provided URL, which must be absolute.
         *
         * @param url An absolute URL. The function does not apply any delta to the current URL.
         * @param extras An object containing properties that modify the navigation strategy.
         * The function ignores any properties in the `NavigationExtras` that would change the
         * provided URL.
         *
         * @returns A Promise that resolves to 'true' when navigation succeeds,
         * to 'false' when navigation fails, or is rejected on error.
         *
         * @usageNotes
         *
         * ### Example
         *
         * ```
         * router.navigateByUrl("/team/33/user/11");
         *
         * // Navigate without updating the URL
         * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
         * ```
         *
         */
        Router.prototype.navigateByUrl = function (url, extras) {
            if (extras === void 0) { extras = { skipLocationChange: false }; }
            if (core.isDevMode() && this.isNgZoneEnabled && !core.NgZone.isInAngularZone()) {
                this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
            }
            var urlTree = isUrlTree(url) ? url : this.parseUrl(url);
            var mergedTree = this.urlHandlingStrategy.merge(urlTree, this.rawUrlTree);
            return this.scheduleNavigation(mergedTree, 'imperative', null, extras);
        };
        /**
         * Navigate based on the provided array of commands and a starting point.
         * If no starting route is provided, the navigation is absolute.
         *
         * Returns a promise that:
         * - resolves to 'true' when navigation succeeds,
         * - resolves to 'false' when navigation fails,
         * - is rejected when an error happens.
         *
         * @usageNotes
         *
         * ### Example
         *
         * ```
         * router.navigate(['team', 33, 'user', 11], {relativeTo: route});
         *
         * // Navigate without updating the URL
         * router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true});
         * ```
         *
         * The first parameter of `navigate()` is a delta to be applied to the current URL
         * or the one provided in the `relativeTo` property of the second parameter (the
         * `NavigationExtras`).
         *
         * In order to affect this browser's `history.state` entry, the `state`
         * parameter can be passed. This must be an object because the router
         * will add the `navigationId` property to this object before creating
         * the new history item.
         */
        Router.prototype.navigate = function (commands, extras) {
            if (extras === void 0) { extras = { skipLocationChange: false }; }
            validateCommands(commands);
            return this.navigateByUrl(this.createUrlTree(commands, extras), extras);
        };
        /** Serializes a `UrlTree` into a string */
        Router.prototype.serializeUrl = function (url) { return this.urlSerializer.serialize(url); };
        /** Parses a string into a `UrlTree` */
        Router.prototype.parseUrl = function (url) {
            var urlTree;
            try {
                urlTree = this.urlSerializer.parse(url);
            }
            catch (e) {
                urlTree = this.malformedUriErrorHandler(e, this.urlSerializer, url);
            }
            return urlTree;
        };
        /** Returns whether the url is activated */
        Router.prototype.isActive = function (url, exact) {
            if (isUrlTree(url)) {
                return containsTree(this.currentUrlTree, url, exact);
            }
            var urlTree = this.parseUrl(url);
            return containsTree(this.currentUrlTree, urlTree, exact);
        };
        Router.prototype.removeEmptyProps = function (params) {
            return Object.keys(params).reduce(function (result, key) {
                var value = params[key];
                if (value !== null && value !== undefined) {
                    result[key] = value;
                }
                return result;
            }, {});
        };
        Router.prototype.processNavigations = function () {
            var _this = this;
            this.navigations.subscribe(function (t) {
                _this.navigated = true;
                _this.lastSuccessfulId = t.id;
                _this.events
                    .next(new NavigationEnd(t.id, _this.serializeUrl(t.extractedUrl), _this.serializeUrl(_this.currentUrlTree)));
                _this.lastSuccessfulNavigation = _this.currentNavigation;
                _this.currentNavigation = null;
                t.resolve(true);
            }, function (e) { _this.console.warn("Unhandled Navigation Error: "); });
        };
        Router.prototype.scheduleNavigation = function (rawUrl, source, restoredState, extras) {
            var lastNavigation = this.getTransition();
            // If the user triggers a navigation imperatively (e.g., by using navigateByUrl),
            // and that navigation results in 'replaceState' that leads to the same URL,
            // we should skip those.
            if (lastNavigation && source !== 'imperative' && lastNavigation.source === 'imperative' &&
                lastNavigation.rawUrl.toString() === rawUrl.toString()) {
                return Promise.resolve(true); // return value is not used
            }
            // Because of a bug in IE and Edge, the location class fires two events (popstate and
            // hashchange) every single time. The second one should be ignored. Otherwise, the URL will
            // flicker. Handles the case when a popstate was emitted first.
            if (lastNavigation && source == 'hashchange' && lastNavigation.source === 'popstate' &&
                lastNavigation.rawUrl.toString() === rawUrl.toString()) {
                return Promise.resolve(true); // return value is not used
            }
            // Because of a bug in IE and Edge, the location class fires two events (popstate and
            // hashchange) every single time. The second one should be ignored. Otherwise, the URL will
            // flicker. Handles the case when a hashchange was emitted first.
            if (lastNavigation && source == 'popstate' && lastNavigation.source === 'hashchange' &&
                lastNavigation.rawUrl.toString() === rawUrl.toString()) {
                return Promise.resolve(true); // return value is not used
            }
            var resolve = null;
            var reject = null;
            var promise = new Promise(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            var id = ++this.navigationId;
            this.setTransition({
                id: id,
                source: source,
                restoredState: restoredState,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.rawUrlTree, rawUrl: rawUrl, extras: extras, resolve: resolve, reject: reject, promise: promise,
                currentSnapshot: this.routerState.snapshot,
                currentRouterState: this.routerState
            });
            // Make sure that the error is propagated even though `processNavigations` catch
            // handler does not rethrow
            return promise.catch(function (e) { return Promise.reject(e); });
        };
        Router.prototype.setBrowserUrl = function (url, replaceUrl, id, state) {
            var path = this.urlSerializer.serialize(url);
            state = state || {};
            if (this.location.isCurrentPathEqualTo(path) || replaceUrl) {
                // TODO(jasonaden): Remove first `navigationId` and rely on `ng` namespace.
                this.location.replaceState(path, '', __assign({}, state, { navigationId: id }));
            }
            else {
                this.location.go(path, '', __assign({}, state, { navigationId: id }));
            }
        };
        Router.prototype.resetStateAndUrl = function (storedState, storedUrl, rawUrl) {
            this.routerState = storedState;
            this.currentUrlTree = storedUrl;
            this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, rawUrl);
            this.resetUrlToCurrentUrlTree();
        };
        Router.prototype.resetUrlToCurrentUrlTree = function () {
            this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), '', { navigationId: this.lastSuccessfulId });
        };
        return Router;
    }());
    function validateCommands(commands) {
        for (var i = 0; i < commands.length; i++) {
            var cmd = commands[i];
            if (cmd == null) {
                throw new Error("The requested path contains " + cmd + " segment at index " + i);
            }
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @description
     *
     * Lets you link to specific routes in your app.
     *
     * Consider the following route configuration:
     * `[{ path: 'user/:name', component: UserCmp }]`.
     * When linking to this `user/:name` route, you use the `RouterLink` directive.
     *
     * If the link is static, you can use the directive as follows:
     * `<a routerLink="/user/bob">link to user component</a>`
     *
     * If you use dynamic values to generate the link, you can pass an array of path
     * segments, followed by the params for each segment.
     *
     * For instance `['/team', teamId, 'user', userName, {details: true}]`
     * means that we want to generate a link to `/team/11/user/bob;details=true`.
     *
     * Multiple static segments can be merged into one
     * (e.g., `['/team/11/user', userName, {details: true}]`).
     *
     * The first segment name can be prepended with `/`, `./`, or `../`:
     * * If the first segment begins with `/`, the router will look up the route from the root of the
     *   app.
     * * If the first segment begins with `./`, or doesn't begin with a slash, the router will
     *   instead look in the children of the current activated route.
     * * And if the first segment begins with `../`, the router will go up one level.
     *
     * You can set query params and fragment as follows:
     *
     * ```
     * <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" fragment="education">
     *   link to user component
     * </a>
     * ```
     * RouterLink will use these to generate this link: `/user/bob#education?debug=true`.
     *
     * (Deprecated in v4.0.0 use `queryParamsHandling` instead) You can also tell the
     * directive to preserve the current query params and fragment:
     *
     * ```
     * <a [routerLink]="['/user/bob']" preserveQueryParams preserveFragment>
     *   link to user component
     * </a>
     * ```
     *
     * You can tell the directive how to handle queryParams. Available options are:
     *  - `'merge'`: merge the queryParams into the current queryParams
     *  - `'preserve'`: preserve the current queryParams
     *  - default/`''`: use the queryParams only
     *
     * Same options for {@link NavigationExtras#queryParamsHandling
     * NavigationExtras#queryParamsHandling}.
     *
     * ```
     * <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" queryParamsHandling="merge">
     *   link to user component
     * </a>
     * ```
     *
     * You can provide a `state` value to be persisted to the browser's History.state
     * property (See https://developer.mozilla.org/en-US/docs/Web/API/History#Properties). It's
     * used as follows:
     *
     * ```
     * <a [routerLink]="['/user/bob']" [state]="{tracingId: 123}">
     *   link to user component
     * </a>
     * ```
     *
     * And later the value can be read from the router through `router.getCurrentNavigation`.
     * For example, to capture the `tracingId` above during the `NavigationStart` event:
     *
     * ```
     * // Get NavigationStart events
     * router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(e => {
     *   const navigation = router.getCurrentNavigation();
     *   tracingService.trace({id: navigation.extras.state.tracingId});
     * });
     * ```
     *
     * The router link directive always treats the provided input as a delta to the current url.
     *
     * For instance, if the current url is `/user/(box//aux:team)`.
     *
     * Then the following link `<a [routerLink]="['/user/jim']">Jim</a>` will generate the link
     * `/user/(jim//aux:team)`.
     *
     * See {@link Router#createUrlTree createUrlTree} for more information.
     *
     * @ngModule RouterModule
     *
     * @publicApi
     */
    var RouterLink = /** @class */ (function () {
        function RouterLink(router, route, tabIndex, renderer, el) {
            this.router = router;
            this.route = route;
            this.commands = [];
            if (tabIndex == null) {
                renderer.setAttribute(el.nativeElement, 'tabindex', '0');
            }
        }
        Object.defineProperty(RouterLink.prototype, "routerLink", {
            set: function (commands) {
                if (commands != null) {
                    this.commands = Array.isArray(commands) ? commands : [commands];
                }
                else {
                    this.commands = [];
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RouterLink.prototype, "preserveQueryParams", {
            /**
             * @deprecated 4.0.0 use `queryParamsHandling` instead.
             */
            set: function (value) {
                if (core.isDevMode() && console && console.warn) {
                    console.warn('preserveQueryParams is deprecated!, use queryParamsHandling instead.');
                }
                this.preserve = value;
            },
            enumerable: true,
            configurable: true
        });
        RouterLink.prototype.onClick = function () {
            var extras = {
                skipLocationChange: attrBoolValue(this.skipLocationChange),
                replaceUrl: attrBoolValue(this.replaceUrl),
            };
            this.router.navigateByUrl(this.urlTree, extras);
            return true;
        };
        Object.defineProperty(RouterLink.prototype, "urlTree", {
            get: function () {
                return this.router.createUrlTree(this.commands, {
                    relativeTo: this.route,
                    queryParams: this.queryParams,
                    fragment: this.fragment,
                    preserveQueryParams: attrBoolValue(this.preserve),
                    queryParamsHandling: this.queryParamsHandling,
                    preserveFragment: attrBoolValue(this.preserveFragment),
                });
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], RouterLink.prototype, "queryParams", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], RouterLink.prototype, "fragment", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], RouterLink.prototype, "queryParamsHandling", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], RouterLink.prototype, "preserveFragment", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], RouterLink.prototype, "skipLocationChange", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], RouterLink.prototype, "replaceUrl", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], RouterLink.prototype, "state", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], RouterLink.prototype, "routerLink", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], RouterLink.prototype, "preserveQueryParams", null);
        __decorate([
            core.HostListener('click'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", Boolean)
        ], RouterLink.prototype, "onClick", null);
        RouterLink = __decorate([
            core.Directive({ selector: ':not(a):not(area)[routerLink]' }),
            __param(2, core.Attribute('tabindex')),
            __metadata("design:paramtypes", [Router, ActivatedRoute, String, core.Renderer2, core.ElementRef])
        ], RouterLink);
        return RouterLink;
    }());
    /**
     * @description
     *
     * Lets you link to specific routes in your app.
     *
     * See `RouterLink` for more information.
     *
     * @ngModule RouterModule
     *
     * @publicApi
     */
    var RouterLinkWithHref = /** @class */ (function () {
        function RouterLinkWithHref(router, route, locationStrategy) {
            var _this = this;
            this.router = router;
            this.route = route;
            this.locationStrategy = locationStrategy;
            this.commands = [];
            this.subscription = router.events.subscribe(function (s) {
                if (s instanceof NavigationEnd) {
                    _this.updateTargetUrlAndHref();
                }
            });
        }
        Object.defineProperty(RouterLinkWithHref.prototype, "routerLink", {
            set: function (commands) {
                if (commands != null) {
                    this.commands = Array.isArray(commands) ? commands : [commands];
                }
                else {
                    this.commands = [];
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RouterLinkWithHref.prototype, "preserveQueryParams", {
            set: function (value) {
                if (core.isDevMode() && console && console.warn) {
                    console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
                }
                this.preserve = value;
            },
            enumerable: true,
            configurable: true
        });
        RouterLinkWithHref.prototype.ngOnChanges = function (changes) { this.updateTargetUrlAndHref(); };
        RouterLinkWithHref.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
        RouterLinkWithHref.prototype.onClick = function (button, ctrlKey, metaKey, shiftKey) {
            if (button !== 0 || ctrlKey || metaKey || shiftKey) {
                return true;
            }
            if (typeof this.target === 'string' && this.target != '_self') {
                return true;
            }
            var extras = {
                skipLocationChange: attrBoolValue(this.skipLocationChange),
                replaceUrl: attrBoolValue(this.replaceUrl),
                state: this.state
            };
            this.router.navigateByUrl(this.urlTree, extras);
            return false;
        };
        RouterLinkWithHref.prototype.updateTargetUrlAndHref = function () {
            this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
        };
        Object.defineProperty(RouterLinkWithHref.prototype, "urlTree", {
            get: function () {
                return this.router.createUrlTree(this.commands, {
                    relativeTo: this.route,
                    queryParams: this.queryParams,
                    fragment: this.fragment,
                    preserveQueryParams: attrBoolValue(this.preserve),
                    queryParamsHandling: this.queryParamsHandling,
                    preserveFragment: attrBoolValue(this.preserveFragment),
                });
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            core.HostBinding('attr.target'), core.Input(),
            __metadata("design:type", String)
        ], RouterLinkWithHref.prototype, "target", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], RouterLinkWithHref.prototype, "queryParams", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], RouterLinkWithHref.prototype, "fragment", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], RouterLinkWithHref.prototype, "queryParamsHandling", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], RouterLinkWithHref.prototype, "preserveFragment", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], RouterLinkWithHref.prototype, "skipLocationChange", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], RouterLinkWithHref.prototype, "replaceUrl", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], RouterLinkWithHref.prototype, "state", void 0);
        __decorate([
            core.HostBinding(),
            __metadata("design:type", String)
        ], RouterLinkWithHref.prototype, "href", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], RouterLinkWithHref.prototype, "routerLink", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], RouterLinkWithHref.prototype, "preserveQueryParams", null);
        __decorate([
            core.HostListener('click', ['$event.button', '$event.ctrlKey', '$event.metaKey', '$event.shiftKey']),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number, Boolean, Boolean, Boolean]),
            __metadata("design:returntype", Boolean)
        ], RouterLinkWithHref.prototype, "onClick", null);
        RouterLinkWithHref = __decorate([
            core.Directive({ selector: 'a[routerLink],area[routerLink]' }),
            __metadata("design:paramtypes", [Router, ActivatedRoute,
                LocationStrategy])
        ], RouterLinkWithHref);
        return RouterLinkWithHref;
    }());
    function attrBoolValue(s) {
        return s === '' || !!s;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     *
     * @description
     *
     * Lets you add a CSS class to an element when the link's route becomes active.
     *
     * This directive lets you add a CSS class to an element when the link's route
     * becomes active.
     *
     * Consider the following example:
     *
     * ```
     * <a routerLink="/user/bob" routerLinkActive="active-link">Bob</a>
     * ```
     *
     * When the url is either '/user' or '/user/bob', the active-link class will
     * be added to the `a` tag. If the url changes, the class will be removed.
     *
     * You can set more than one class, as follows:
     *
     * ```
     * <a routerLink="/user/bob" routerLinkActive="class1 class2">Bob</a>
     * <a routerLink="/user/bob" [routerLinkActive]="['class1', 'class2']">Bob</a>
     * ```
     *
     * You can configure RouterLinkActive by passing `exact: true`. This will add the classes
     * only when the url matches the link exactly.
     *
     * ```
     * <a routerLink="/user/bob" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact:
     * true}">Bob</a>
     * ```
     *
     * You can assign the RouterLinkActive instance to a template variable and directly check
     * the `isActive` status.
     * ```
     * <a routerLink="/user/bob" routerLinkActive #rla="routerLinkActive">
     *   Bob {{ rla.isActive ? '(already open)' : ''}}
     * </a>
     * ```
     *
     * Finally, you can apply the RouterLinkActive directive to an ancestor of a RouterLink.
     *
     * ```
     * <div routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">
     *   <a routerLink="/user/jim">Jim</a>
     *   <a routerLink="/user/bob">Bob</a>
     * </div>
     * ```
     *
     * This will set the active-link class on the div tag if the url is either '/user/jim' or
     * '/user/bob'.
     *
     * @ngModule RouterModule
     *
     * @publicApi
     */
    var RouterLinkActive = /** @class */ (function () {
        function RouterLinkActive(router, element, renderer, cdr) {
            var _this = this;
            this.router = router;
            this.element = element;
            this.renderer = renderer;
            this.cdr = cdr;
            this.classes = [];
            this.isActive = false;
            this.routerLinkActiveOptions = { exact: false };
            this.subscription = router.events.subscribe(function (s) {
                if (s instanceof NavigationEnd) {
                    _this.update();
                }
            });
        }
        RouterLinkActive.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.links.changes.subscribe(function (_) { return _this.update(); });
            this.linksWithHrefs.changes.subscribe(function (_) { return _this.update(); });
            this.update();
        };
        Object.defineProperty(RouterLinkActive.prototype, "routerLinkActive", {
            set: function (data) {
                var classes = Array.isArray(data) ? data : data.split(' ');
                this.classes = classes.filter(function (c) { return !!c; });
            },
            enumerable: true,
            configurable: true
        });
        RouterLinkActive.prototype.ngOnChanges = function (changes) { this.update(); };
        RouterLinkActive.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
        RouterLinkActive.prototype.update = function () {
            var _this = this;
            if (!this.links || !this.linksWithHrefs || !this.router.navigated)
                return;
            Promise.resolve().then(function () {
                var hasActiveLinks = _this.hasActiveLinks();
                if (_this.isActive !== hasActiveLinks) {
                    _this.isActive = hasActiveLinks;
                    _this.classes.forEach(function (c) {
                        if (hasActiveLinks) {
                            _this.renderer.addClass(_this.element.nativeElement, c);
                        }
                        else {
                            _this.renderer.removeClass(_this.element.nativeElement, c);
                        }
                    });
                }
            });
        };
        RouterLinkActive.prototype.isLinkActive = function (router) {
            var _this = this;
            return function (link) {
                return router.isActive(link.urlTree, _this.routerLinkActiveOptions.exact);
            };
        };
        RouterLinkActive.prototype.hasActiveLinks = function () {
            return this.links.some(this.isLinkActive(this.router)) ||
                this.linksWithHrefs.some(this.isLinkActive(this.router));
        };
        __decorate([
            core.ContentChildren(RouterLink, { descendants: true }),
            __metadata("design:type", core.QueryList)
        ], RouterLinkActive.prototype, "links", void 0);
        __decorate([
            core.ContentChildren(RouterLinkWithHref, { descendants: true }),
            __metadata("design:type", core.QueryList)
        ], RouterLinkActive.prototype, "linksWithHrefs", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], RouterLinkActive.prototype, "routerLinkActiveOptions", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], RouterLinkActive.prototype, "routerLinkActive", null);
        RouterLinkActive = __decorate([
            core.Directive({
                selector: '[routerLinkActive]',
                exportAs: 'routerLinkActive',
            }),
            __metadata("design:paramtypes", [Router, core.ElementRef, core.Renderer2,
                core.ChangeDetectorRef])
        ], RouterLinkActive);
        return RouterLinkActive;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Store contextual information about a `RouterOutlet`
     *
     * @publicApi
     */
    var OutletContext = /** @class */ (function () {
        function OutletContext() {
            this.outlet = null;
            this.route = null;
            this.resolver = null;
            this.children = new ChildrenOutletContexts();
            this.attachRef = null;
        }
        return OutletContext;
    }());
    /**
     * Store contextual information about the children (= nested) `RouterOutlet`
     *
     * @publicApi
     */
    var ChildrenOutletContexts = /** @class */ (function () {
        function ChildrenOutletContexts() {
            // contexts for child outlets, by name.
            this.contexts = new Map();
        }
        /** Called when a `RouterOutlet` directive is instantiated */
        ChildrenOutletContexts.prototype.onChildOutletCreated = function (childName, outlet) {
            var context = this.getOrCreateContext(childName);
            context.outlet = outlet;
            this.contexts.set(childName, context);
        };
        /**
         * Called when a `RouterOutlet` directive is destroyed.
         * We need to keep the context as the outlet could be destroyed inside a NgIf and might be
         * re-created later.
         */
        ChildrenOutletContexts.prototype.onChildOutletDestroyed = function (childName) {
            var context = this.getContext(childName);
            if (context) {
                context.outlet = null;
            }
        };
        /**
         * Called when the corresponding route is deactivated during navigation.
         * Because the component get destroyed, all children outlet are destroyed.
         */
        ChildrenOutletContexts.prototype.onOutletDeactivated = function () {
            var contexts = this.contexts;
            this.contexts = new Map();
            return contexts;
        };
        ChildrenOutletContexts.prototype.onOutletReAttached = function (contexts) { this.contexts = contexts; };
        ChildrenOutletContexts.prototype.getOrCreateContext = function (childName) {
            var context = this.getContext(childName);
            if (!context) {
                context = new OutletContext();
                this.contexts.set(childName, context);
            }
            return context;
        };
        ChildrenOutletContexts.prototype.getContext = function (childName) { return this.contexts.get(childName) || null; };
        return ChildrenOutletContexts;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @description
     *
     * Acts as a placeholder that Angular dynamically fills based on the current router state.
     *
     * ```
     * <router-outlet></router-outlet>
     * <router-outlet name='left'></router-outlet>
     * <router-outlet name='right'></router-outlet>
     * ```
     *
     * A router outlet will emit an activate event any time a new component is being instantiated,
     * and a deactivate event when it is being destroyed.
     *
     * ```
     * <router-outlet
     *   (activate)='onActivate($event)'
     *   (deactivate)='onDeactivate($event)'></router-outlet>
     * ```
     * @ngModule RouterModule
     *
     * @publicApi
     */
    var RouterOutlet = /** @class */ (function () {
        function RouterOutlet(parentContexts, location, resolver, name, changeDetector) {
            this.parentContexts = parentContexts;
            this.location = location;
            this.resolver = resolver;
            this.changeDetector = changeDetector;
            this.activated = null;
            this._activatedRoute = null;
            this.activateEvents = new core.EventEmitter();
            this.deactivateEvents = new core.EventEmitter();
            this.name = name || PRIMARY_OUTLET;
            parentContexts.onChildOutletCreated(this.name, this);
        }
        RouterOutlet.prototype.ngOnDestroy = function () { this.parentContexts.onChildOutletDestroyed(this.name); };
        RouterOutlet.prototype.ngOnInit = function () {
            if (!this.activated) {
                // If the outlet was not instantiated at the time the route got activated we need to populate
                // the outlet when it is initialized (ie inside a NgIf)
                var context = this.parentContexts.getContext(this.name);
                if (context && context.route) {
                    if (context.attachRef) {
                        // `attachRef` is populated when there is an existing component to mount
                        this.attach(context.attachRef, context.route);
                    }
                    else {
                        // otherwise the component defined in the configuration is created
                        this.activateWith(context.route, context.resolver || null);
                    }
                }
            }
        };
        Object.defineProperty(RouterOutlet.prototype, "isActivated", {
            get: function () { return !!this.activated; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RouterOutlet.prototype, "component", {
            get: function () {
                if (!this.activated)
                    throw new Error('Outlet is not activated');
                return this.activated.instance;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RouterOutlet.prototype, "activatedRoute", {
            get: function () {
                if (!this.activated)
                    throw new Error('Outlet is not activated');
                return this._activatedRoute;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RouterOutlet.prototype, "activatedRouteData", {
            get: function () {
                if (this._activatedRoute) {
                    return this._activatedRoute.snapshot.data;
                }
                return {};
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Called when the `RouteReuseStrategy` instructs to detach the subtree
         */
        RouterOutlet.prototype.detach = function () {
            if (!this.activated)
                throw new Error('Outlet is not activated');
            this.location.detach();
            var cmp = this.activated;
            this.activated = null;
            this._activatedRoute = null;
            return cmp;
        };
        /**
         * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
         */
        RouterOutlet.prototype.attach = function (ref, activatedRoute) {
            this.activated = ref;
            this._activatedRoute = activatedRoute;
            this.location.insert(ref.hostView);
        };
        RouterOutlet.prototype.deactivate = function () {
            if (this.activated) {
                var c = this.component;
                this.activated.destroy();
                this.activated = null;
                this._activatedRoute = null;
                this.deactivateEvents.emit(c);
            }
        };
        RouterOutlet.prototype.activateWith = function (activatedRoute, resolver) {
            if (this.isActivated) {
                throw new Error('Cannot activate an already activated outlet');
            }
            this._activatedRoute = activatedRoute;
            var snapshot = activatedRoute._futureSnapshot;
            var component = snapshot.routeConfig.component;
            resolver = resolver || this.resolver;
            var factory = resolver.resolveComponentFactory(component);
            var childContexts = this.parentContexts.getOrCreateContext(this.name).children;
            var injector = new OutletInjector(activatedRoute, childContexts, this.location.injector);
            this.activated = this.location.createComponent(factory, this.location.length, injector);
            // Calling `markForCheck` to make sure we will run the change detection when the
            // `RouterOutlet` is inside a `ChangeDetectionStrategy.OnPush` component.
            this.changeDetector.markForCheck();
            this.activateEvents.emit(this.activated.instance);
        };
        __decorate([
            core.Output('activate'),
            __metadata("design:type", Object)
        ], RouterOutlet.prototype, "activateEvents", void 0);
        __decorate([
            core.Output('deactivate'),
            __metadata("design:type", Object)
        ], RouterOutlet.prototype, "deactivateEvents", void 0);
        RouterOutlet = __decorate([
            core.Directive({ selector: 'router-outlet', exportAs: 'outlet' }),
            __param(3, core.Attribute('name')),
            __metadata("design:paramtypes", [ChildrenOutletContexts, core.ViewContainerRef,
                core.ComponentFactoryResolver, String, core.ChangeDetectorRef])
        ], RouterOutlet);
        return RouterOutlet;
    }());
    var OutletInjector = /** @class */ (function () {
        function OutletInjector(route, childContexts, parent) {
            this.route = route;
            this.childContexts = childContexts;
            this.parent = parent;
        }
        OutletInjector.prototype.get = function (token, notFoundValue) {
            if (token === ActivatedRoute) {
                return this.route;
            }
            if (token === ChildrenOutletContexts) {
                return this.childContexts;
            }
            return this.parent.get(token, notFoundValue);
        };
        return OutletInjector;
    }());

    /**
    *@license
    *Copyright Google Inc. All Rights Reserved.
    *
    *Use of this source code is governed by an MIT-style license that can be
    *found in the LICENSE file at https://angular.io/license
    */
    /**
     * @description
     *
     * Provides a preloading strategy.
     *
     * @publicApi
     */
    var PreloadingStrategy = /** @class */ (function () {
        function PreloadingStrategy() {
        }
        return PreloadingStrategy;
    }());
    /**
     * @description
     *
     * Provides a preloading strategy that preloads all modules as quickly as possible.
     *
     * ```
     * RouteModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
     * ```
     *
     * @publicApi
     */
    var PreloadAllModules = /** @class */ (function () {
        function PreloadAllModules() {
        }
        PreloadAllModules.prototype.preload = function (route, fn) {
            return fn().pipe(catchError(function () { return of(null); }));
        };
        return PreloadAllModules;
    }());
    /**
     * @description
     *
     * Provides a preloading strategy that does not preload any modules.
     *
     * This strategy is enabled by default.
     *
     * @publicApi
     */
    var NoPreloading = /** @class */ (function () {
        function NoPreloading() {
        }
        NoPreloading.prototype.preload = function (route, fn) { return of(null); };
        return NoPreloading;
    }());
    /**
     * The preloader optimistically loads all router configurations to
     * make navigations into lazily-loaded sections of the application faster.
     *
     * The preloader runs in the background. When the router bootstraps, the preloader
     * starts listening to all navigation events. After every such event, the preloader
     * will check if any configurations can be loaded lazily.
     *
     * If a route is protected by `canLoad` guards, the preloaded will not load it.
     *
     * @publicApi
     */
    var RouterPreloader = /** @class */ (function () {
        function RouterPreloader(router, moduleLoader, compiler, injector, preloadingStrategy) {
            this.router = router;
            this.injector = injector;
            this.preloadingStrategy = preloadingStrategy;
            var onStartLoad = function (r) { return router.triggerEvent(new RouteConfigLoadStart(r)); };
            var onEndLoad = function (r) { return router.triggerEvent(new RouteConfigLoadEnd(r)); };
            this.loader = new RouterConfigLoader(moduleLoader, compiler, onStartLoad, onEndLoad);
        }
        RouterPreloader.prototype.setUpPreloading = function () {
            var _this = this;
            this.subscription =
                this.router.events
                    .pipe(filter(function (e) { return e instanceof NavigationEnd; }), concatMap(function () { return _this.preload(); }))
                    .subscribe(function () { });
        };
        RouterPreloader.prototype.preload = function () {
            var ngModule = this.injector.get(core.NgModuleRef);
            return this.processRoutes(ngModule, this.router.config);
        };
        // TODO(jasonaden): This class relies on code external to the class to call setUpPreloading. If
        // this hasn't been done, ngOnDestroy will fail as this.subscription will be undefined. This
        // should be refactored.
        RouterPreloader.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
        RouterPreloader.prototype.processRoutes = function (ngModule, routes) {
            var e_1, _a;
            var res = [];
            try {
                for (var routes_1 = __values(routes), routes_1_1 = routes_1.next(); !routes_1_1.done; routes_1_1 = routes_1.next()) {
                    var route = routes_1_1.value;
                    // we already have the config loaded, just recurse
                    if (route.loadChildren && !route.canLoad && route._loadedConfig) {
                        var childConfig = route._loadedConfig;
                        res.push(this.processRoutes(childConfig.module, childConfig.routes));
                        // no config loaded, fetch the config
                    }
                    else if (route.loadChildren && !route.canLoad) {
                        res.push(this.preloadConfig(ngModule, route));
                        // recurse into children
                    }
                    else if (route.children) {
                        res.push(this.processRoutes(ngModule, route.children));
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (routes_1_1 && !routes_1_1.done && (_a = routes_1.return)) _a.call(routes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return from(res).pipe(mergeAll(), map(function (_) { return void 0; }));
        };
        RouterPreloader.prototype.preloadConfig = function (ngModule, route) {
            var _this = this;
            return this.preloadingStrategy.preload(route, function () {
                var loaded$ = _this.loader.load(ngModule.injector, route);
                return loaded$.pipe(mergeMap(function (config) {
                    route._loadedConfig = config;
                    return _this.processRoutes(config.module, config.routes);
                }));
            });
        };
        RouterPreloader = __decorate([
            core.Injectable(),
            __metadata("design:paramtypes", [Router, core.NgModuleFactoryLoader, core.Compiler,
                core.Injector, PreloadingStrategy])
        ], RouterPreloader);
        return RouterPreloader;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var RouterScroller = /** @class */ (function () {
        function RouterScroller(router, 
        /** @docsNotRequired */ viewportScroller, options) {
            if (options === void 0) { options = {}; }
            this.router = router;
            this.viewportScroller = viewportScroller;
            this.options = options;
            this.lastId = 0;
            this.lastSource = 'imperative';
            this.restoredId = 0;
            this.store = {};
            // Default both options to 'disabled'
            options.scrollPositionRestoration = options.scrollPositionRestoration || 'disabled';
            options.anchorScrolling = options.anchorScrolling || 'disabled';
        }
        RouterScroller.prototype.init = function () {
            // we want to disable the automatic scrolling because having two places
            // responsible for scrolling results race conditions, especially given
            // that browser don't implement this behavior consistently
            if (this.options.scrollPositionRestoration !== 'disabled') {
                this.viewportScroller.setHistoryScrollRestoration('manual');
            }
            this.routerEventsSubscription = this.createScrollEvents();
            this.scrollEventsSubscription = this.consumeScrollEvents();
        };
        RouterScroller.prototype.createScrollEvents = function () {
            var _this = this;
            return this.router.events.subscribe(function (e) {
                if (e instanceof NavigationStart) {
                    // store the scroll position of the current stable navigations.
                    _this.store[_this.lastId] = _this.viewportScroller.getScrollPosition();
                    _this.lastSource = e.navigationTrigger;
                    _this.restoredId = e.restoredState ? e.restoredState.navigationId : 0;
                }
                else if (e instanceof NavigationEnd) {
                    _this.lastId = e.id;
                    _this.scheduleScrollEvent(e, _this.router.parseUrl(e.urlAfterRedirects).fragment);
                }
            });
        };
        RouterScroller.prototype.consumeScrollEvents = function () {
            var _this = this;
            return this.router.events.subscribe(function (e) {
                if (!(e instanceof Scroll))
                    return;
                // a popstate event. The pop state event will always ignore anchor scrolling.
                if (e.position) {
                    if (_this.options.scrollPositionRestoration === 'top') {
                        _this.viewportScroller.scrollToPosition([0, 0]);
                    }
                    else if (_this.options.scrollPositionRestoration === 'enabled') {
                        _this.viewportScroller.scrollToPosition(e.position);
                    }
                    // imperative navigation "forward"
                }
                else {
                    if (e.anchor && _this.options.anchorScrolling === 'enabled') {
                        _this.viewportScroller.scrollToAnchor(e.anchor);
                    }
                    else if (_this.options.scrollPositionRestoration !== 'disabled') {
                        _this.viewportScroller.scrollToPosition([0, 0]);
                    }
                }
            });
        };
        RouterScroller.prototype.scheduleScrollEvent = function (routerEvent, anchor) {
            this.router.triggerEvent(new Scroll(routerEvent, this.lastSource === 'popstate' ? this.store[this.restoredId] : null, anchor));
        };
        RouterScroller.prototype.ngOnDestroy = function () {
            if (this.routerEventsSubscription) {
                this.routerEventsSubscription.unsubscribe();
            }
            if (this.scrollEventsSubscription) {
                this.scrollEventsSubscription.unsubscribe();
            }
        };
        return RouterScroller;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @description
     *
     * Contains a list of directives
     *
     *
     */
    var ROUTER_DIRECTIVES = [RouterOutlet, RouterLink, RouterLinkWithHref, RouterLinkActive, EmptyOutletComponent];
    /**
     * @description
     *
     * Is used in DI to configure the router.
     *
     * @publicApi
     */
    var ROUTER_CONFIGURATION = new core.InjectionToken('ROUTER_CONFIGURATION');
    /**
     * @docsNotRequired
     */
    var ROUTER_FORROOT_GUARD = new core.InjectionToken('ROUTER_FORROOT_GUARD');
    var ROUTER_PROVIDERS = [
        Location,
        { provide: UrlSerializer, useClass: DefaultUrlSerializer },
        {
            provide: Router,
            useFactory: setupRouter,
            deps: [
                core.ApplicationRef, UrlSerializer, ChildrenOutletContexts, Location, core.Injector,
                core.NgModuleFactoryLoader, core.Compiler, ROUTES, ROUTER_CONFIGURATION,
                [UrlHandlingStrategy, new core.Optional()], [RouteReuseStrategy, new core.Optional()]
            ]
        },
        ChildrenOutletContexts,
        { provide: ActivatedRoute, useFactory: rootRoute, deps: [Router] },
        { provide: core.NgModuleFactoryLoader, useClass: core.SystemJsNgModuleLoader },
        RouterPreloader,
        NoPreloading,
        PreloadAllModules,
        { provide: ROUTER_CONFIGURATION, useValue: { enableTracing: false } },
    ];
    function routerNgProbeToken() {
        return new core.NgProbeToken('Router', Router);
    }
    /**
     * @usageNotes
     *
     * RouterModule can be imported multiple times: once per lazily-loaded bundle.
     * Since the router deals with a global shared resource--location, we cannot have
     * more than one router service active.
     *
     * That is why there are two ways to create the module: `RouterModule.forRoot` and
     * `RouterModule.forChild`.
     *
     * * `forRoot` creates a module that contains all the directives, the given routes, and the router
     *   service itself.
     * * `forChild` creates a module that contains all the directives and the given routes, but does not
     *   include the router service.
     *
     * When registered at the root, the module should be used as follows
     *
     * ```
     * @NgModule({
     *   imports: [RouterModule.forRoot(ROUTES)]
     * })
     * class MyNgModule {}
     * ```
     *
     * For submodules and lazy loaded submodules the module should be used as follows:
     *
     * ```
     * @NgModule({
     *   imports: [RouterModule.forChild(ROUTES)]
     * })
     * class MyNgModule {}
     * ```
     *
     * @description
     *
     * Adds router directives and providers.
     *
     * Managing state transitions is one of the hardest parts of building applications. This is
     * especially true on the web, where you also need to ensure that the state is reflected in the URL.
     * In addition, we often want to split applications into multiple bundles and load them on demand.
     * Doing this transparently is not trivial.
     *
     * The Angular router solves these problems. Using the router, you can declaratively specify
     * application states, manage state transitions while taking care of the URL, and load bundles on
     * demand.
     *
     * [Read this developer guide](https://angular.io/docs/ts/latest/guide/router.html) to get an
     * overview of how the router should be used.
     *
     * @publicApi
     */
    var RouterModule = /** @class */ (function () {
        // Note: We are injecting the Router so it gets created eagerly...
        function RouterModule(guard, router) {
        }
        RouterModule_1 = RouterModule;
        /**
         * Creates a module with all the router providers and directives. It also optionally sets up an
         * application listener to perform an initial navigation.
         *
         * Options (see `ExtraOptions`):
         * * `enableTracing` makes the router log all its internal events to the console.
         * * `useHash` enables the location strategy that uses the URL fragment instead of the history
         * API.
         * * `initialNavigation` disables the initial navigation.
         * * `errorHandler` provides a custom error handler.
         * * `preloadingStrategy` configures a preloading strategy (see `PreloadAllModules`).
         * * `onSameUrlNavigation` configures how the router handles navigation to the current URL. See
         * `ExtraOptions` for more details.
         * * `paramsInheritanceStrategy` defines how the router merges params, data and resolved data
         * from parent to child routes.
         */
        RouterModule.forRoot = function (routes, config) {
            return {
                ngModule: RouterModule_1,
                providers: [
                    ROUTER_PROVIDERS,
                    provideRoutes(routes),
                    {
                        provide: ROUTER_FORROOT_GUARD,
                        useFactory: provideForRootGuard,
                        deps: [[Router, new core.Optional(), new core.SkipSelf()]]
                    },
                    { provide: ROUTER_CONFIGURATION, useValue: config ? config : {} },
                    {
                        provide: LocationStrategy,
                        useFactory: provideLocationStrategy,
                        deps: [
                            PlatformLocation, [new core.Inject(APP_BASE_HREF), new core.Optional()], ROUTER_CONFIGURATION
                        ]
                    },
                    {
                        provide: RouterScroller,
                        useFactory: createRouterScroller,
                        deps: [Router, ViewportScroller, ROUTER_CONFIGURATION]
                    },
                    {
                        provide: PreloadingStrategy,
                        useExisting: config && config.preloadingStrategy ? config.preloadingStrategy :
                            NoPreloading
                    },
                    { provide: core.NgProbeToken, multi: true, useFactory: routerNgProbeToken },
                    provideRouterInitializer(),
                ],
            };
        };
        /**
         * Creates a module with all the router directives and a provider registering routes.
         */
        RouterModule.forChild = function (routes) {
            return { ngModule: RouterModule_1, providers: [provideRoutes(routes)] };
        };
        var RouterModule_1;
        RouterModule = RouterModule_1 = __decorate([
            core.NgModule({
                declarations: ROUTER_DIRECTIVES,
                exports: ROUTER_DIRECTIVES,
                entryComponents: [EmptyOutletComponent]
            }),
            __param(0, core.Optional()), __param(0, core.Inject(ROUTER_FORROOT_GUARD)), __param(1, core.Optional()),
            __metadata("design:paramtypes", [Object, Router])
        ], RouterModule);
        return RouterModule;
    }());
    function createRouterScroller(router, viewportScroller, config) {
        if (config.scrollOffset) {
            viewportScroller.setOffset(config.scrollOffset);
        }
        return new RouterScroller(router, viewportScroller, config);
    }
    function provideLocationStrategy(platformLocationStrategy, baseHref, options) {
        if (options === void 0) { options = {}; }
        return options.useHash ? new HashLocationStrategy(platformLocationStrategy, baseHref) :
            new PathLocationStrategy(platformLocationStrategy, baseHref);
    }
    function provideForRootGuard(router) {
        if (router) {
            throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
        }
        return 'guarded';
    }
    /**
     * @description
     *
     * Registers routes.
     *
     * @usageNotes
     * ### Example
     *
     * ```
     * @NgModule({
     *   imports: [RouterModule.forChild(ROUTES)],
     *   providers: [provideRoutes(EXTRA_ROUTES)]
     * })
     * class MyNgModule {}
     * ```
     *
     * @publicApi
     */
    function provideRoutes(routes) {
        return [
            { provide: core.ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: routes },
            { provide: ROUTES, multi: true, useValue: routes },
        ];
    }
    function setupRouter(ref, urlSerializer, contexts, location, injector, loader, compiler, config, opts, urlHandlingStrategy, routeReuseStrategy) {
        if (opts === void 0) { opts = {}; }
        var router = new Router(null, urlSerializer, contexts, location, injector, loader, compiler, flatten(config));
        if (urlHandlingStrategy) {
            router.urlHandlingStrategy = urlHandlingStrategy;
        }
        if (routeReuseStrategy) {
            router.routeReuseStrategy = routeReuseStrategy;
        }
        if (opts.errorHandler) {
            router.errorHandler = opts.errorHandler;
        }
        if (opts.malformedUriErrorHandler) {
            router.malformedUriErrorHandler = opts.malformedUriErrorHandler;
        }
        if (opts.enableTracing) {
            var dom_1 = getDOM();
            router.events.subscribe(function (e) {
                dom_1.logGroup("Router Event: " + e.constructor.name);
                dom_1.log(e.toString());
                dom_1.log(e);
                dom_1.logGroupEnd();
            });
        }
        if (opts.onSameUrlNavigation) {
            router.onSameUrlNavigation = opts.onSameUrlNavigation;
        }
        if (opts.paramsInheritanceStrategy) {
            router.paramsInheritanceStrategy = opts.paramsInheritanceStrategy;
        }
        if (opts.urlUpdateStrategy) {
            router.urlUpdateStrategy = opts.urlUpdateStrategy;
        }
        if (opts.relativeLinkResolution) {
            router.relativeLinkResolution = opts.relativeLinkResolution;
        }
        return router;
    }
    function rootRoute(router) {
        return router.routerState.root;
    }
    /**
     * To initialize the router properly we need to do in two steps:
     *
     * We need to start the navigation in a APP_INITIALIZER to block the bootstrap if
     * a resolver or a guards executes asynchronously. Second, we need to actually run
     * activation in a BOOTSTRAP_LISTENER. We utilize the afterPreactivation
     * hook provided by the router to do that.
     *
     * The router navigation starts, reaches the point when preactivation is done, and then
     * pauses. It waits for the hook to be resolved. We then resolve it only in a bootstrap listener.
     */
    var RouterInitializer = /** @class */ (function () {
        function RouterInitializer(injector) {
            this.injector = injector;
            this.initNavigation = false;
            this.resultOfPreactivationDone = new Subject();
        }
        RouterInitializer.prototype.appInitializer = function () {
            var _this = this;
            var p = this.injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
            return p.then(function () {
                var resolve = null;
                var res = new Promise(function (r) { return resolve = r; });
                var router = _this.injector.get(Router);
                var opts = _this.injector.get(ROUTER_CONFIGURATION);
                if (_this.isLegacyDisabled(opts) || _this.isLegacyEnabled(opts)) {
                    resolve(true);
                }
                else if (opts.initialNavigation === 'disabled') {
                    router.setUpLocationChangeListener();
                    resolve(true);
                }
                else if (opts.initialNavigation === 'enabled') {
                    router.hooks.afterPreactivation = function () {
                        // only the initial navigation should be delayed
                        if (!_this.initNavigation) {
                            _this.initNavigation = true;
                            resolve(true);
                            return _this.resultOfPreactivationDone;
                            // subsequent navigations should not be delayed
                        }
                        else {
                            return of(null);
                        }
                    };
                    router.initialNavigation();
                }
                else {
                    throw new Error("Invalid initialNavigation options: '" + opts.initialNavigation + "'");
                }
                return res;
            });
        };
        RouterInitializer.prototype.bootstrapListener = function (bootstrappedComponentRef) {
            var opts = this.injector.get(ROUTER_CONFIGURATION);
            var preloader = this.injector.get(RouterPreloader);
            var routerScroller = this.injector.get(RouterScroller);
            var router = this.injector.get(Router);
            var ref = this.injector.get(core.ApplicationRef);
            if (bootstrappedComponentRef !== ref.components[0]) {
                return;
            }
            if (this.isLegacyEnabled(opts)) {
                router.initialNavigation();
            }
            else if (this.isLegacyDisabled(opts)) {
                router.setUpLocationChangeListener();
            }
            preloader.setUpPreloading();
            routerScroller.init();
            router.resetRootComponentType(ref.componentTypes[0]);
            this.resultOfPreactivationDone.next(null);
            this.resultOfPreactivationDone.complete();
        };
        RouterInitializer.prototype.isLegacyEnabled = function (opts) {
            return opts.initialNavigation === 'legacy_enabled' || opts.initialNavigation === true ||
                opts.initialNavigation === undefined;
        };
        RouterInitializer.prototype.isLegacyDisabled = function (opts) {
            return opts.initialNavigation === 'legacy_disabled' || opts.initialNavigation === false;
        };
        RouterInitializer = __decorate([
            core.Injectable(),
            __metadata("design:paramtypes", [core.Injector])
        ], RouterInitializer);
        return RouterInitializer;
    }());
    function getAppInitializer(r) {
        return r.appInitializer.bind(r);
    }
    function getBootstrapListener(r) {
        return r.bootstrapListener.bind(r);
    }
    /**
     * A token for the router initializer that will be called after the app is bootstrapped.
     *
     * @publicApi
     */
    var ROUTER_INITIALIZER = new core.InjectionToken('Router Initializer');
    function provideRouterInitializer() {
        return [
            RouterInitializer,
            {
                provide: core.APP_INITIALIZER,
                multi: true,
                useFactory: getAppInitializer,
                deps: [RouterInitializer]
            },
            { provide: ROUTER_INITIALIZER, useFactory: getBootstrapListener, deps: [RouterInitializer] },
            { provide: core.APP_BOOTSTRAP_LISTENER, multi: true, useExisting: ROUTER_INITIALIZER },
        ];
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @publicApi
     */
    var VERSION$3 = new core.Version('7.2.13');

    var NestScrollspyService = /** @class */ (function () {
        function NestScrollspyService() {
            this.changes$ = new core.EventEmitter();
            this.indexes = {};
        }
        NestScrollspyService.prototype.getIndex = function (key) {
            return this.indexes[key];
        };
        NestScrollspyService.prototype.setIndex = function (key, index) {
            this.indexes[key] = index;
            this.indexes = Object.assign({}, this.indexes);
            this.changes$.emit({ index: key, change: 'set' });
        };
        NestScrollspyService.prototype.deleteIndex = function (key) {
            delete this.indexes[key];
            this.indexes = Object.assign({}, this.indexes);
            this.changes$.emit({ index: key, change: 'delete' });
        };
        NestScrollspyService = __decorate([
            core.Injectable()
        ], NestScrollspyService);
        return NestScrollspyService;
    }());

    var NeatScrollspyDirective = /** @class */ (function () {
        function NeatScrollspyDirective(elRef, nestscrollspyservice) {
            this.elRef = elRef;
            this.nestscrollspyservice = nestscrollspyservice;
            this.defaultOptions = {
                id: 'neatSpyId',
                selector: 'neatHook'
            };
            this.el = elRef.nativeElement;
        }
        NeatScrollspyDirective.prototype.ngOnInit = function () {
            if (!this.options) {
                this.options = {};
            }
            if (!this.options.selector) {
                return console.warn('NeatScrollspy required a selector to work');
            }
            this.options = Object.assign(this.defaultOptions, this.options);
        };
        NeatScrollspyDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.change$ = setInterval(function () {
                if (_this.previousEl != _this.el.getElementsByClassName(_this.options.selector)) {
                    _this.nestscrollspyservice.setIndex(_this.options.id, _this.el.getElementsByClassName(_this.options.selector));
                    _this.previousEl = _this.el.getElementsByClassName(_this.options.selector);
                }
            }, 1000);
        };
        NeatScrollspyDirective.prototype.ngOnDestroy = function () {
            clearInterval(this.change$);
        };
        var _a, _b;
        __decorate([
            core.Input('neatScrollSpy'),
            __metadata("design:type", Object)
        ], NeatScrollspyDirective.prototype, "options", void 0);
        NeatScrollspyDirective = __decorate([
            core.Directive({ selector: '[neatScrollSpy]' }),
            __metadata("design:paramtypes", [typeof (_a = typeof core.ElementRef !== "undefined" && core.ElementRef) === "function" ? _a : Object, typeof (_b = typeof NestScrollspyService !== "undefined" && NestScrollspyService) === "function" ? _b : Object])
        ], NeatScrollspyDirective);
        return NeatScrollspyDirective;
    }());

    var NeatScrollspyTemplateComponent = /** @class */ (function () {
        function NeatScrollspyTemplateComponent(ref, elRef, nestscrollspyservice) {
            this.ref = ref;
            this.elRef = elRef;
            this.nestscrollspyservice = nestscrollspyservice;
            this.items = [];
            this.itemsHash = {};
            this.itemsToHighlight = [];
            this.defaultOptions = {
                id: 'neatSpyId',
            };
            this.defaultHighLight = {
                type: 'bold',
                highlightColor: 'blue',
                defaultColor: 'black',
                highlightTextColor: 'white'
            };
            this.defaultSelection = {
                type: 'first'
            };
            this.defaultAlign = {
                type: 'straight',
                topMargin: 30
            };
            this.currentPreviewHeader = null;
            this.previousPreviewHeader = null;
            this.lastScrollTop = 0;
            this.autoAlignHeader = ['H1', 'H2', 'H3', 'H4', 'H5'];
            this.el = elRef.nativeElement;
        }
        NeatScrollspyTemplateComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (!this.neatScrollspyOptions) {
                this.neatScrollspyOptions = {};
            }
            this.neatScrollspyOptions = Object.assign(this.defaultOptions, this.neatScrollspyOptions);
            this.highlightOptions = Object.assign(this.defaultHighLight, this.highlightOptions);
            this.selectionOrder = Object.assign(this.defaultSelection, this.selectionOrder);
            this.alignOption = Object.assign(this.defaultAlign, this.alignOption);
            this.changeStream$ = this.nestscrollspyservice.changes$.subscribe(function (e) {
                if (e.index === _this.neatScrollspyOptions.id) {
                    if (e.change === 'delete') {
                        _this.update();
                    }
                    else if (e.change === 'set') {
                        _this.update();
                    }
                }
            });
            this.ref.detach();
            this.scrollStream$ = setInterval(function () { _this.ref.detectChanges(); }, 1000);
        };
        NeatScrollspyTemplateComponent.prototype.addSpacing = function (position) {
            var space = '';
            for (var i = 0; i < (position * 2); i++) {
                space += '&nbsp; ';
            }
            return space;
        };
        NeatScrollspyTemplateComponent.prototype.update = function () {
            this.items = [];
            var items = this.nestscrollspyservice.getIndex(this.neatScrollspyOptions.id);
            if (!items || !items.length) {
                return;
            }
            var previousIndex = 0;
            var currentAlign = 0;
            for (var i = 0; i < items.length; i++) {
                previousIndex = (i == 0) ? 0 : (i - 1);
                var position = 0;
                if (this.alignOption.type == 'auto') {
                    // previousAlign = currentAlign;
                    position = this.calculateAlignment(items[i].tagName, items[previousIndex].tagName);
                }
                else if (this.alignOption.type == 'manual') {
                    position = Number((items[i].dataset.align) ? items[i].dataset.align : 0);
                }
                currentAlign = currentAlign + position;
                if (currentAlign < 0) {
                    currentAlign = 0;
                }
                this.items.push({
                    content: items[i].innerHTML,
                    el: items[i],
                    position: currentAlign
                });
            }
            setTimeout(function () {
                window.dispatchEvent(new Event('scroll'));
            }, 500);
        };
        NeatScrollspyTemplateComponent.prototype.highlightItemInView = function () {
            var _this = this;
            var st;
            var check = false;
            if (!this.items.length) {
                return;
            }
            this.items.map(function (item, index) {
                var currentHeader = item.el;
                var rect = currentHeader.getBoundingClientRect();
                st = window.pageYOffset || document.documentElement.scrollTop;
                if (st > _this.lastScrollTop) ;
                if (rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
                    if (_this.selectionOrder.type == 'first') {
                        if (!check) {
                            _this.highlightItem(document.getElementById(_this.neatScrollspyOptions.id + index));
                            if (_this.currentPreviewHeader !== index) {
                                _this.previousPreviewHeader = _this.currentPreviewHeader;
                            }
                            _this.currentPreviewHeader = index;
                        }
                        else {
                            _this.deactivateHighlightItem(document.getElementById(_this.neatScrollspyOptions.id + index));
                        }
                    }
                    else if (_this.selectionOrder.type == 'all') {
                        _this.highlightItem(document.getElementById(_this.neatScrollspyOptions.id + index));
                        if (_this.currentPreviewHeader !== index) {
                            _this.previousPreviewHeader = _this.currentPreviewHeader;
                        }
                        _this.currentPreviewHeader = index;
                    }
                    check = true;
                }
                else {
                    if (_this.currentPreviewHeader !== index) {
                        _this.deactivateHighlightItem(document.getElementById(_this.neatScrollspyOptions.id + index));
                    }
                    if ((rect.top >= 0 &&
                        rect.left >= 0 &&
                        rect.bottom > (window.innerHeight || document.documentElement.clientHeight) &&
                        rect.right > (window.innerWidth || document.documentElement.clientWidth) &&
                        _this.currentPreviewHeader == index)) {
                        if (_this.previousPreviewHeader) {
                            _this.highlightItem(document.getElementById(_this.neatScrollspyOptions.id + _this.previousPreviewHeader));
                        }
                    }
                }
            });
        };
        NeatScrollspyTemplateComponent.prototype.highlightItem = function (el) {
            if (!el) {
                return;
            }
            if (this.highlightOptions.type == 'bold') {
                el.style.fontWeight = 'bold';
                el.style.color = this.highlightOptions.highlightColor;
            }
            else if (this.highlightOptions.type == 'background-color') {
                el.style.backgroundColor = this.highlightOptions.highlightColor;
                el.style.color = this.highlightOptions.highlightTextColor;
            }
        };
        NeatScrollspyTemplateComponent.prototype.deactivateHighlightItem = function (el) {
            if (!el) {
                return;
            }
            el.removeAttribute('style');
            if (this.highlightOptions.type == 'bold') {
                el.style.color = this.highlightOptions.defaultColor;
            }
            else if (this.highlightOptions.type == 'background-color') {
                el.style.color = this.highlightOptions.defaultColor;
            }
        };
        NeatScrollspyTemplateComponent.prototype.calculateAlignment = function (current, previous) {
            var currentIndex = this.autoAlignHeader.indexOf(current);
            var previousIndex = -1;
            previousIndex = this.autoAlignHeader.indexOf(previous);
            // if current item is not identified
            if (currentIndex === -1 || previousIndex === -1) {
                return 0;
            }
            // if previous is not identified
            if (currentIndex > previousIndex) {
                return 1;
            }
            else if (currentIndex === previousIndex) {
                return 0;
            }
            return -1;
        };
        NeatScrollspyTemplateComponent.prototype.scrollTo = function (el) {
            el.scrollIntoView();
            window.scrollBy(0, (this.alignOption.topMargin * -1));
            this.clearHighlightedField();
            this.highlightItemInView();
        };
        NeatScrollspyTemplateComponent.prototype.clearHighlightedField = function () {
            var _this = this;
            this.items.map(function (item, index) {
                _this.deactivateHighlightItem(document.getElementById(_this.neatScrollspyOptions.id + index));
            });
        };
        NeatScrollspyTemplateComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            var scrollEventFunction;
            window.addEventListener('scroll', scrollEventFunction = function (event) {
                setTimeout(function () {
                    _this.highlightItemInView();
                }, 500);
            });
            this.scrollEventFunction = scrollEventFunction;
        };
        NeatScrollspyTemplateComponent.prototype.ngOnDestroy = function () {
            var scrollEventFunction = this.scrollEventFunction;
            this.changeStream$.unsubscribe();
            clearInterval(this.scrollStream$);
            window.removeEventListener('scroll', scrollEventFunction);
        };
        var _a, _b, _c;
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], NeatScrollspyTemplateComponent.prototype, "neatScrollspyOptions", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], NeatScrollspyTemplateComponent.prototype, "highlightOptions", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], NeatScrollspyTemplateComponent.prototype, "selectionOrder", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], NeatScrollspyTemplateComponent.prototype, "alignOption", void 0);
        NeatScrollspyTemplateComponent = __decorate([
            core.Injectable(),
            core.Component({
                selector: 'neat-scrollspy-template',
                template: "\n    <div #container>\n      <ul class=\"nav78783838738 flex-column menu pl-2\">\n        <li *ngFor=\"let item of items; let i = index\">\n          <a id=\"{{ neatScrollspyOptions.id }}{{ i }}\" (click)=\"scrollTo(item.el)\"><span [innerHTML]=\"addSpacing(item.position)\"></span>{{ item.content }}</a>\n        </li>\n      </ul>\n    </div>\n    ",
                styles: ["\n        .nav78783838738 {\n            padding-left: 0;\n            margin-bottom: 0;\n            list-style: none;\n        }\n        .nav78783838738 > li {\n            position: relative;\n            display: block;\n        }\n        .nav78783838738 > li > a{\n            position: relative;\n            display: block;\n            padding: 5px 10px;\n            text-decoration: none;\n            cursor: pointer;\n        }\n        ul {\n            list-style: none;\n            padding: 0;\n        }\n        li {\n            padding: 0px;\n            background-color: #FFFFF;\n        }\n    "],
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }),
            __metadata("design:paramtypes", [typeof (_a = typeof core.ChangeDetectorRef !== "undefined" && core.ChangeDetectorRef) === "function" ? _a : Object, typeof (_b = typeof core.ElementRef !== "undefined" && core.ElementRef) === "function" ? _b : Object, typeof (_c = typeof NestScrollspyService !== "undefined" && NestScrollspyService) === "function" ? _c : Object])
        ], NeatScrollspyTemplateComponent);
        return NeatScrollspyTemplateComponent;
    }());

    var NeatScrollspyModule = /** @class */ (function () {
        function NeatScrollspyModule() {
        }
        NeatScrollspyModule = __decorate([
            core.NgModule({
                imports: [CommonModule, RouterModule],
                declarations: [NeatScrollspyDirective, NeatScrollspyTemplateComponent],
                exports: [NeatScrollspyDirective, NeatScrollspyTemplateComponent],
                providers: [NestScrollspyService]
            })
        ], NeatScrollspyModule);
        return NeatScrollspyModule;
    }());

    exports.NeatScrollspyDirective = NeatScrollspyDirective;
    exports.NeatScrollspyModule = NeatScrollspyModule;
    exports.NeatScrollspyTemplateComponent = NeatScrollspyTemplateComponent;
    exports.NestScrollspyService = NestScrollspyService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=neat-scrollspy.umd.js.map
