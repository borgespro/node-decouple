import { config, DotenvConfigOptions } from 'dotenv';
import camelCase from 'lodash.camelcase';

import Rule, { RuleConfig } from './Rule';

type DecoupleConfig = {
  rules: RuleConfig[];
  dotenvConfig: DotenvConfigOptions;
};

class Decouple {
  private static instance: Decouple;

  values: any = {};

  public static start(): Decouple {
    Decouple.instance = new Decouple();
    return Decouple.instance;
  }

  public config({ rules = [], dotenvConfig }: DecoupleConfig) {
    config(dotenvConfig);
    this.loadRules(rules);
  }

  private loadRules(rules: RuleConfig[]): void {
    rules.forEach((rule) => {
      this.values[camelCase(rule.key)] = new Rule(rule).parse();
    });
  }

  private constructor() {}
}

const decouple = Decouple.start();

export default decouple;
