import packageJson from '../package.json';

// ----------------------------------------------------------------------

export const TEXT_CAPTIONS_LIGHT_COLOR = "#334155";
export const TEXT_CAPTIONS_DARK_COLOR = "#94A3B8";

export type ConfigValue = {
  isStaticExport: boolean;
  site: {
    name: string;
    serverUrl: string;
    assetURL: string;
    basePath: string;
    version: string;
  };
  mapbox: {
    apiKey: string;
  };
};

// ----------------------------------------------------------------------

export const CONFIG: ConfigValue = {
  site: {
    name: 'K89BET',
    serverUrl: process.env.NEXT_PUBLIC_SERVER_URL ?? '',
    assetURL: process.env.NEXT_PUBLIC_ASSET_URL ?? '',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || "https://k89.app" ,
    version: packageJson.version,
  },
  isStaticExport: JSON.parse(`${process.env.BUILD_STATIC_EXPORT}`),
  /**
   * Mapbox
   */
  mapbox: {
    apiKey: process.env.NEXT_PUBLIC_MAPBOX_API_KEY ?? '',
  },

}
