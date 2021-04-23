export type RuleConfig = {
  key: string;
  default?: any;
  cast?: any;
  options?: any[];
};

export default class Rule {
  key: string;

  default?: any;

  cast?: any = String;

  options?: any[];

  constructor(config: RuleConfig) {
    this.key = config.key;
    this.default = config.default;
    this.options = config.options;

    if (config.cast) {
      this.cast = config.cast;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  parser() {}
}
