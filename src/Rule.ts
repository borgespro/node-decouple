export type RuleConfig = {
  key: string;
  default?: any;
  cast?: any;
  options?: any[];
};

const EMPTY = '';

export default class Rule {
  readonly key: string;

  readonly default?: any;

  readonly cast: any = String;

  readonly options?: any[];

  constructor(config: RuleConfig) {
    this.key = config.key;
    this.default = config.default;
    this.options = config.options;

    if (config.cast) {
      this.cast = config.cast;
    }
  }

  parse(): any {
    const rawValue = process.env[this.key];

    if (!rawValue && rawValue !== EMPTY) {
      return this.default;
    }

    const value = this.cast(rawValue);

    if (this.options?.includes(value)) {
      return value;
    }

    if (this.options) {
      return null;
    }

    return value;
  }
}
