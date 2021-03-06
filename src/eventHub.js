window.eventHub = {
    events: {},
    //订阅
    emit(eventName, data) {
        for (let key in this.events) {
            if (key === eventName) {
                let fnList = this.events[key]
                fnList.map((fn) => {
                    fn.call(undefined, data)
                })
            }
        }
    },
    //发布
    on(eventName, fn) {
        if (this.events[eventName] === undefined) {
            this.events[eventName] = []
        }
        this.events[eventName].push(fn)
    }
}