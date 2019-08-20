export default class ServerEmitter {

  events: any

  constructor() {
    this.events = {};
  }

  subscribe(channel: string, event: Function) {
    if (!this.events.hasOwnProperty(channel)) {
      this.events[channel] = event;
      console.log(`--- Have been successfully subscribed to ${channel}`);
      console.log("Events you have been subscribed to:\n ", this.events);
      return this.events;
    } else {
      console.log(`You already have channel ${channel} in your emitter`);
    }
  }

  unsubscribe(channel: string){
    if (channel && this.events.hasOwnProperty(channel)) {
      delete this.events[channel];
      console.log(`--- Have been successfully unbscribed from ${channel}`);
      console.log("Events you have been subscribed to:\n ", this.events);
      return this.events;
    }
  }

  emit(channel: string, payload: any){
    if (this.events.hasOwnProperty(channel)) {
      console.log(`Emited channel ${channel}:`);
      this.events[channel](payload);
    }
  }
}