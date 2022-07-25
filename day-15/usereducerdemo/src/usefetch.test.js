import useFetch from "./usefetch";




test ('test 1',()=>{
    const mockResponce = [];
    jest.spyOn(global, 'fetch').mockResolvedValue({
        json:jest.fn().mockResolvedValue(mockResponce)
    })
    const responce = useFetch('http://mypage.com/order');
})