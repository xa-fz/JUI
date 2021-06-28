class Utils {

    // 获得当前系统时间
    getTime = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = this._format(date.getMonth() + 1);
        const day = this._format(date.getDate());
        const weekDay = date.getDay();
        const weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        const week = weeks[weekDay];
        return `${year}-${month}-${day} ${week}`
    }

    _format = t => {
        return t < 10 ? `0${t}` : t
    }

    // 函数防抖
    timer = null;
    debounce = (func, time) => {
        this.timer && clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            typeof func === 'function' && func();
        }, time)
    }
}

export default Utils