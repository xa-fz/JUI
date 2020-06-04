export const INIT_DATA = 'INIT_DATA';

export const getValue = (data: any) => ({
            type:'INIT_DATA',
            payload:{
                data
        }
})