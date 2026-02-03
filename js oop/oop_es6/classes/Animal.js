import Logger from "./Logger";

export default class Animal extends Logger {
  constructor(sound,logger) {
    this.sound = sound;
    this.logger = logger
  }
  print_the_propertis(){
    this.logger.log(this.sound)
  }
}
