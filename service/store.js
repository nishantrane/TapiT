app.service('store', function($firebaseObject) {
	
		this.storage=window.localStorage;
		this.lgflag=false;
		this.keyary=[];
		this.ks='';
		this.encryptedpwd;
		this.decryptedpwd;
		this.email="";
		this.key4ED=this.storage.getItem(3103);
		this.db1=firebase.database();
		this.database = firebase.database().ref();

		this.encrypt= function(categorykey,pwd,p){
			this.encryptedpwd = CryptoJS.AES.encrypt(pwd,p); //encrypt ped using key4ED
			console.log("Encrypted pass ",this.encryptedpwd);
			return this.encryptedpwd;

		}

		this.decrypt= function(encrptpwd,p){
			this.decryptedpwd = CryptoJS.AES.decrypt(encrptpwd,p);
			console.log("Decrypt ",this.decryptedpwd);
			return this.decryptedpwd.toString(CryptoJS.enc.Utf8);// converts to string and returns it 
		}
	});