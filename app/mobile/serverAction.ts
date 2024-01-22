export const fetchMobileData = async (type: any) => {
    return <any>new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: "Mobile data" + type });
        }, 1000);
    });
};
