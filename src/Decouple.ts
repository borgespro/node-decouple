import { RuleConfig } from './Rule';

type DecoupleConfig = {
  rules: RuleConfig[];
  dotenvConfig: any;
};

class Decouple {
  private static instance: Decouple;

  rules: RuleConfig[];

  dotenv: any;

  public static start(): Decouple {
    Decouple.instance = new Decouple();
    return Decouple.instance;
  }

  public config({ rules = [], dotenvConfig }: DecoupleConfig) {
    this.rules = rules;
    this.dotenv = dotenvConfig;
  }

  private constructor() {}
}

const decouple = Decouple.start();

export default decouple;
