(function(){  

  var url = 'https://api.github.com/users/';

  function json(j, user, callback) {
    xhr = new window.XMLHttpRequest();
    xhr.open('GET', j + user, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === xhr.DONE) {
      status = xhr.status;
        if ((status >= 200 && status < 300) || status === 304 || status === 0) {
          callback(JSON.parse(xhr.response || xhr.responseText));
        }
      }
    };
    xhr.send();
  }

  xtag.register('x-github-card', {
    lifecycle: {
      created: function() {
        // Create HTML tags
        this.xtag.user = document.createElement('article');
        this.xtag.userData = document.createElement('dl');
        this.xtag.userDataDt = document.createElement('dt');
        this.xtag.userAvatar = document.createElement('dd');
        this.xtag.userAvatarImg = document.createElement('img');
        this.xtag.userName = document.createElement('dd');
        this.xtag.userNameDt = document.createElement('dt');
        this.xtag.userAccount = document.createElement('dd');
        this.xtag.userAccountDt = document.createElement('dt');
        this.xtag.userStats = document.createElement('dl');
        this.xtag.userRepos = document.createElement('dd');
        this.xtag.userReposDt = document.createElement('dt');
        this.xtag.userFollowers = document.createElement('dd');
        this.xtag.userFollowersDt = document.createElement('dt');

        // Set classes
        this.xtag.user.className = 'user';
        this.xtag.userData.className = 'user-data';
        this.xtag.userDataDt.innerHTML = 'Avatar:';
        this.xtag.userAvatar.className = 'user-avatar';
        this.xtag.userAvatarImg.className = 'avatar-img';
        this.xtag.userStats.className = 'user-stats';
        this.xtag.userRepos.className = 'user-repos';
        this.xtag.userRepos.setAttribute('data-stats', 'repos');
        this.xtag.userReposDt.innerHTML = 'Repos';
        this.xtag.userFollowers.className = 'user-followers';
        this.xtag.userFollowers.setAttribute('data-stats', 'followers');
        this.xtag.userFollowersDt.innerHTML = 'Followers';
        this.xtag.userName.className = 'user-name';
        this.xtag.userNameDt.innerHTML = 'Fullname:';
        this.xtag.userAccount.className = 'user-account';
        this.xtag.userAccountDt.innerHTML = 'Account:';

        // let's append
        this.appendChild(this.xtag.user);
        this.xtag.user.appendChild(this.xtag.userData);
        this.xtag.user.appendChild(this.xtag.userStats);
        this.xtag.userData.appendChild(this.xtag.userDataDt);
        this.xtag.userData.appendChild(this.xtag.userAvatar);
        this.xtag.userAvatar.appendChild(this.xtag.userAvatarImg);
        this.xtag.userData.appendChild(this.xtag.userNameDt);
        this.xtag.userData.appendChild(this.xtag.userName);
        this.xtag.userData.appendChild(this.xtag.userAccountDt);
        this.xtag.userData.appendChild(this.xtag.userAccount);
        this.xtag.userStats.appendChild(this.xtag.userReposDt);
        this.xtag.userStats.appendChild(this.xtag.userRepos);
        this.xtag.userStats.appendChild(this.xtag.userFollowersDt);
        this.xtag.userStats.appendChild(this.xtag.userFollowers);
      },
      inserted: function() {
        json(url, this.user, function(response) {
          document.querySelector('.user-name').innerHTML = response.name;
          document.querySelector('.avatar-img').setAttribute('src', response.avatar_url);
          document.querySelector('.user-account').innerHTML = response.login;
          document.querySelector('.user-repos').innerHTML = response.public_repos;
          document.querySelector('.user-followers').innerHTML = response.followers;
        });
      }
    },
    accessors: {
      user: {
        attribute: {
          name: 'user'
        },
        get: function() {
          return this.getAttribute('user');
        }
      }
    }
  });

})();
