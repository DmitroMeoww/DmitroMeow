const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["fonts/GoogleSansFlex.woff","fonts/GoogleSansFlex.woff2","logo.png","logo_mobile.png","placeholder.png","robots.txt","VidCameraSonyPXW-Z90.jpg"]),
	mimeTypes: {".woff":"font/woff",".woff2":"font/woff2",".png":"image/png",".txt":"text/plain",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.BqETHWie.js",app:"_app/immutable/entry/app.DW-ZKgHF.js",imports:["_app/immutable/entry/start.BqETHWie.js","_app/immutable/chunks/E6V6HNOa.js","_app/immutable/chunks/DcWvUvY3.js","_app/immutable/chunks/Bn9kaeYf.js","_app/immutable/entry/app.DW-ZKgHF.js","_app/immutable/chunks/DcWvUvY3.js","_app/immutable/chunks/BmhOadPI.js","_app/immutable/chunks/BCyM_82f.js","_app/immutable/chunks/Bn9kaeYf.js","_app/immutable/chunks/QEkZYcEA.js","_app/immutable/chunks/aVNq5FiC.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-C4MD30Um.js')),
			__memo(() => import('./chunks/1-C2euxYYR.js')),
			__memo(() => import('./chunks/2-GSiFTr3V.js')),
			__memo(() => import('./chunks/3-CTE5wOeX.js')),
			__memo(() => import('./chunks/4-lIU8AGNZ.js')),
			__memo(() => import('./chunks/5-LFIZBXDW.js')),
			__memo(() => import('./chunks/6-66hvj83R.js')),
			__memo(() => import('./chunks/7-YWchSlUu.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/articles",
				pattern: /^\/articles\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/catalog",
				pattern: /^\/catalog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/contacts",
				pattern: /^\/contacts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/offers",
				pattern: /^\/offers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/service",
				pattern: /^\/service\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
