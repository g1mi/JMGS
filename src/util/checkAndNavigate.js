import request from './request';
function checkSetting(setting) {
  return new Promise((resolve, reject) => {
    console.info('准备申请权限：' + setting)
    wx.authorize({
      scope: setting,
      success(res) {
        console.info('申请权限 ' + setting + ' 为 ：' + true)
        resolve(true)
      },
      fail(res) {
        console.warn('申请权限 ' + setting + ' 为 ：' + false)
        resolve(false)
      }
    });
  })
}
async function firstTimeCheckAndNavigate(settings, url) {
  console.info('首次申请权限')
  let pass = true
  for (let i = 0; i < settings.length; i++) {
    const element = settings[i];
    let checked = await checkSetting(element)
    pass = pass && checked
  }
  console.info('首次申请权限结果：' + pass)
  if (pass) {
    wx.navigateTo({
      url: url
    });
  } else {
    wx.showToast({
      title: "打开所有所需权限才可使用程序",
      icon: "none"
    });
  }

}
export default function checkAndNavigate(authsArray, url) {

  new Promise((resolve, reject) => {
    wx.getStorage({
      key: 'authSettingsDone',
      success(res) {
        console.info('从本地缓存中得知已获取权限：' + res.data)
        resolve(res.data)
      },
      fail() {
        wx.showToast({
          title: '本地缓存获取用户信息失败',
          icon: 'none'
        })
        resolve(false)
      }
    })
  }).then(authorized => {
    if (authorized) {
      wx.navigateTo({
        url: url
      });
    } else {
      wx.getSetting({
        success(res) {
          console.info('取得用户权限列表')
          let allPass = true
          for (let i = 0; i < authsArray.length; i++) {
            allPass = allPass && res.authSetting[authsArray[i]];
          }
          console.info('用户权限是否全部取得：' + allPass)
          if (allPass) {
            console.info('用户已取得所需权限')
            //申请成功，此时应当在缓存当中记录
            wx.setStorage({
              key: "authSettingsDone",
              data: "true"
            })
            wx.navigateTo({
              url: url
            });
          } else if (undefined === allPass) {
            //首次申请权限
            firstTimeCheckAndNavigate(authsArray, url)
          } else {
            //提示更改权限
            wx.showToast({
              title: "打开所需权限方可使用程序",
              icon: "none"
            });
            setTimeout(() => {
              wx.openSetting();
            }, 1500);
          }
        },
        fail() {
          wx.showToast({
            title: "获取用户权限失败",
            icon: "none"
          });
        }
      });
    }
  })
}
