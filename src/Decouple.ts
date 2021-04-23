import { config, DotenvConfigOptions } from 'dotenv';

import { RuleConfig } from './Rule';

type DecoupleConfig = {
  rules: RuleConfig[];
  dotenvConfig: DotenvConfigOptions;
};

class Decouple {
  private static instance: Decouple;

  rules: RuleConfig[];

  values = {};

  public static start(): Decouple {
    Decouple.instance = new Decouple();
    return Decouple.instance;
  }

  public config({ rules = [], dotenvConfig }: DecoupleConfig) {
    this.rules = rules;
    config(dotenvConfig);
  }

  // eslint-disable-next-line class-methods-use-this
  private loadRules(): void {}

  private constructor() {}
}

const decouple = Decouple.start();

export default decouple;
