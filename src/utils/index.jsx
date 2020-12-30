class Utils {

    // 获得当前系统时间
    getTime = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = this._format(date.getMonth() + 1);
        const day = this._format(date.getDate());
        const weekDay = date.getDay();
        return `${year}-${month}-${day} 星期${weekDay}`
    }

    _format = t => {
        return t < 10 ? `0${t}` : t
    }
}

export default Utils