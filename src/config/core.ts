 
const CONFIG = {
    APP_URL: (process.env.NEXT_PUBLIC_APP_URL as string) || "",
    API_URL : (process.env.NEXT_PUBLIC_API_BASEURL as string) || "",
}


export type ConfigValue = string | number | boolean;

class Config<T extends { [key: string]: ConfigValue }> {
  configValues: T;

  constructor(configValues: T) {
    this.configValues = configValues;
    if (configValues.ALLOW_PARTIAL_CONFIG !== true) {
      this.validate();
    }
  }

  validate() {
    Object.keys(this.configValues).forEach((key) => {
      if (this.configValues[key] === undefined) {
        throw new Error(
          `Undefined config value "${key}"`
        );
      }
    });
  }

  get<K extends keyof T>(key: K): T[K] {
    return this.configValues[key];
  }

  updateValues(values: Partial<T>) {
    Object.entries(values).forEach(([key, value]) => {
      if (typeof value === "undefined") {
        return;
      }

      this.configValues[key as keyof T] = value;
    });

    this.validate();
  }
}

const configObj = new Config(CONFIG);
const config = configObj.get.bind(configObj);
export const updateConfig = configObj.updateValues.bind(configObj);

export default config;
