// 测试 API 接口：更新座位图信息

// 接口地址
const apiUrl = "https://apidev.juzai.cn/jz-api/jz/seatingMap";

// 请求头
const headers = {
    "accept": "application/json",
    "X-Tenant-ID": "{{tenant}}",
    "token": "{{token}}",
    "Authorization3": "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImJkMjE3ODU3LThmODItNDhhOS1iZjAxLTQ0MDE4MzY4YmI5ZCJ9.8llQmhTq0qxaO0bGJt7408Z5YlvZSxGoB_MvfziWCoCdWhAFVuxKrjcWvNjWktWuSDWhaUg9M4ojwEXYEbiTqQ",
    "Content-Type": "application/json"
};

// 请求体
const requestBody = {
    "createBy": "string",
    "createTime": "string",
    "updateBy": "string",
    "updateTime": "string",
    "remark": "string",
    "params": {
        "key": {}
    },
    "id": 0,
    "title": "string",
    "jsonData": "string",
    "totalSeats": 0,
    "totalRows": 0,
    "totalAreas": 0
};

// 发起 PUT 请求
fetch(apiUrl, {
    method: "PUT",
    headers,
    body: JSON.stringify(requestBody)
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("API 响应数据:", data);
    })
    .catch(error => {
        console.error("请求失败:", error);
    });