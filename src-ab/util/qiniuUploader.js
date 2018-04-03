function upload(filePath, success_cb, fail_cb, options, progress, params) {
  const url = options.region; // 华北
  console.log(url);
  console.log(options.region);
  const formData = {
    'token': options.token,
    'key': options.key
  };
  // 添加自定义变量
  for (const key in params) {
    formData[key] = params[key];
  };
  console.log(formData);
  const uploadTask = wx.uploadFile({
    url: url,
    filePath: filePath,
    name: 'file',
    formData: formData,
    success: function (res) {
      try {
        if (res.data) {
          success_cb(res.data)
        }
      } catch (error) {
        fail_cb(error)
      }
    },
    fail: function (error) {
      console.error(error);
      fail_cb(error);
    }
  })

  uploadTask.onProgressUpdate((res) => {
    progress && progress(res)
  })
};

module.exports = {
  upload: upload
};
