if(process.env.NODE_ENV === 'development'){
    // 开发环境
    let api_base_url = 'https://*****.com/'
}else{
    // 生产环境
    let api_base_url = 'https://*****.com/'
}

export default {
	API_BASE_URL:api_base_url
}