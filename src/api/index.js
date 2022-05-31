import request from '@/utils/request.js'
export const getAllChannelsAPI = () => request({
  url: '/v1_0/channels',
  method: 'GET'
})
export const loginAPI = ({ mobile, code }) => request({
  url: '/v1_0/authorizations',
  method: 'POST',
  data: {
    mobile,
    code
  }
})
