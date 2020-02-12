import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 2g_heJJjG30zZHN85gH_MGMMTFu1q6LDsJIBwC-YkxDf2GvNY5gMDPlRA3d4rgjgQ8SyTWHDzlXRnKKcCNL_0q_DIVEIelCTWGTDX4noUnByzgDIqDzbjaAh3BlEXnYx'
    }
});