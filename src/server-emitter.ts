export default class ServerEmitter {
  protected events: any;
  
  constructor() {
    this.events = {};
  }

  subscribe(channel: string, event: Function) {
    if (!this.events.hasOwnProperty(channel)) {
      this.events[channel] = event;
    }
  }

  unsubscribe(channel: string) {
    if (this.events.hasOwnProperty(channel)) {
      delete this.events[channel];
    }
  }

  emit(channel: string, payload: any) {
    if (this.events.hasOwnProperty(channel)) {
      return this.events[channel](payload);
    }
  }
}