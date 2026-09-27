(()=>{var Jh=0,_c=1,Kh=2;var yc=1,Qh=2,Vn=3,ii=0,Jt=1,It=2,li=0,si=1,Ki=2,vc=3,Mc=4,jh=5,wi=100,eu=101,tu=102,nu=103,iu=104,su=200,ru=201,au=202,ou=203,Wa=204,Xa=205,lu=206,cu=207,hu=208,uu=209,du=210,fu=211,pu=212,mu=213,gu=214,vo=0,Mo=1,bo=2,Gi=3,Eo=4,wo=5,So=6,To=7,bc=0,xu=1,_u=2,ci=0,yu=1,vu=2,Mu=3,Ao=4,bu=5,Eu=6,wu=7;var Ec=300,Qi=301,ji=302,Ro=303,Co=304,ea=306,qa=1e3,Ei=1001,Ya=1002,wn=1003,Su=1004;var ta=1005;var Pn=1006,Io=1007;var Ci=1008;var Nn=1009,wc=1010,Sc=1011,Ys=1012,Po=1013,Ii=1014,Wn=1015,Zs=1016,Do=1017,Lo=1018,$s=1020,Tc=35902,Ac=35899,Rc=1021,Cc=1022,Sn=1023,Ps=1026,Js=1027,Ic=1028,Uo=1029,Pc=1030,No=1031;var Fo=1033,na=33776,ia=33777,sa=33778,ra=33779,Bo=35840,Oo=35841,ko=35842,zo=35843,Ho=36196,Go=37492,Vo=37496,Wo=37808,Xo=37809,qo=37810,Yo=37811,Zo=37812,$o=37813,Jo=37814,Ko=37815,Qo=37816,jo=37817,el=37818,tl=37819,nl=37820,il=37821,sl=36492,rl=36494,al=36495,ol=36283,ll=36284,cl=36285,hl=36286;var Mr=2300,Za=2301,Ga=2302,ac=2400,oc=2401,lc=2402;var Tu=3200,Au=3201;var Dc=0,Ru=1,hi="",Zt="srgb",Vi="srgb-linear",br="linear",ft="srgb";var Hi=7680;var cc=519,Cu=512,Iu=513,Pu=514,Lc=515,Du=516,Lu=517,Uu=518,Nu=519,$a=35044;var Uc="300 es",In=2e3,Er=2001;var ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Pl=Math.PI/180,Ja=180/Math.PI;function ti(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function sf(n,e){return(n%e+e)%e}function Dl(n,e,t){return(1-t)*n+t*e}function zn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ue=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==p){let g=1-o,m=l*d+c*f+h*p+u*x,M=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let S=Math.sqrt(y),T=Math.atan2(S,m*M);g=Math.sin(g*T)/S,o=Math.sin(o*T)/S}let _=o*M;if(l=l*g+d*_,c=c*g+f*_,h=h*g+p*_,u=u*g+x*_,g===1-o){let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-o*f,e[t+2]=c*p+h*f+o*d-l*u,e[t+3]=h*p-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ll.copy(this).projectOnVector(e),this.sub(Ll)}reflect(e){return this.sub(Ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ll=new I,bh=new Dn,$e=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],x=s[0],g=s[3],m=s[6],M=s[1],y=s[4],_=s[7],S=s[2],T=s[5],R=s[8];return r[0]=a*x+o*M+l*S,r[3]=a*g+o*y+l*T,r[6]=a*m+o*_+l*R,r[1]=c*x+h*M+u*S,r[4]=c*g+h*y+u*T,r[7]=c*m+h*_+u*R,r[2]=d*x+f*M+p*S,r[5]=d*g+f*y+p*T,r[8]=d*m+f*_+p*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=t*u+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ul.makeScale(e,t)),this}rotate(e){return this.premultiply(Ul.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ul=new $e;function Nc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ds(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Fu(){let n=Ds("canvas");return n.style.display="block",n}var Eh={};function Ls(n){n in Eh||(Eh[n]=!0,console.warn(n))}function Bu(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var wh=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sh=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rf(){let n={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ft&&(s.r=ni(s.r),s.g=ni(s.g),s.b=ni(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ls("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ls("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Vi]:{primaries:e,whitePoint:i,transfer:br,toXYZ:wh,fromXYZ:Sh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:wh,fromXYZ:Sh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),n}var at=rf();function ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Cs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ds,Ka=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ds===void 0&&(ds=Ds("canvas")),ds.width=e.width,ds.height=e.height;let s=ds.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ds}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ds("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ni(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ni(t[i]/255)*255):t[i]=ni(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},af=0,Us=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Nl(s[a].image)):r.push(Nl(s[a]))}else r=Nl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Nl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ka.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var of=0,Fl=new I,an=class n extends ri{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ei,s=Ei,r=Pn,a=Ci,o=Sn,l=Nn,c=n.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=ti(),this.name="",this.source=new Us(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fl).x}get height(){return this.source.getSize(Fl).y}get depth(){return this.source.getSize(Fl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ec)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qa:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case Ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qa:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case Ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Ec;an.DEFAULT_ANISOTROPY=1;var dt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,_=(f+1)/2,S=(m+1)/2,T=(h+d)/4,R=(u+x)/4,C=(p+g)/4;return y>_&&y>S?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=T/i,r=R/i):_>S?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=T/s,r=C/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=R/r,s=C/r),this.set(i,s,r,t),this}let M=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qa=class extends ri{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new an(s);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Us(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends Qa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},wr=class extends an{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ja=class extends an{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Si=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),xa.subVectors(this.max,hr),fs.subVectors(e.a,hr),ps.subVectors(e.b,hr),ms.subVectors(e.c,hr),xi.subVectors(ps,fs),_i.subVectors(ms,ps),Bi.subVectors(fs,ms);let t=[0,-xi.z,xi.y,0,-_i.z,_i.y,0,-Bi.z,Bi.y,xi.z,0,-xi.x,_i.z,0,-_i.x,Bi.z,0,-Bi.x,-xi.y,xi.x,0,-_i.y,_i.x,0,-Bi.y,Bi.x,0];return!Bl(t,fs,ps,ms,xa)||(t=[1,0,0,0,1,0,0,0,1],!Bl(t,fs,ps,ms,xa))?!1:(_a.crossVectors(xi,_i),t=[_a.x,_a.y,_a.z],Bl(t,fs,ps,ms,xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},$n=[new I,new I,new I,new I,new I,new I,new I,new I],An=new I,ga=new Si,fs=new I,ps=new I,ms=new I,xi=new I,_i=new I,Bi=new I,hr=new I,xa=new I,_a=new I,Oi=new I;function Bl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Oi.fromArray(n,r);let o=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),h=i.dot(Oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var lf=new Si,ur=new I,Ol=new I,Wi=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):lf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);let t=ur.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ur,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(Ol)),this.expandByPoint(ur.copy(e.center).sub(Ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Jn=new I,kl=new I,ya=new I,yi=new I,zl=new I,va=new I,Hl=new I,Sr=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){kl.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(kl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ya),o=yi.dot(this.direction),l=-yi.dot(ya),c=yi.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(kl).addScaledVector(ya,d),f}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);let i=Jn.dot(this.direction),s=Jn.dot(Jn)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,i,s,r){zl.subVectors(t,e),va.subVectors(i,e),Hl.crossVectors(zl,va);let a=this.direction.dot(Hl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yi.subVectors(this.origin,e);let l=o*this.direction.dot(va.crossVectors(yi,va));if(l<0)return null;let c=o*this.direction.dot(zl.cross(yi));if(c<0||l+c>a)return null;let h=-o*yi.dot(Hl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_t=class n{constructor(e,t,i,s,r,a,o,l,c,h,u,d,f,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,d,f,p,x,g)}set(e,t,i,s,r,a,o,l,c,h,u,d,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),a=1/gs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,p=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;t[0]=d+x*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,p=o*h,x=o*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,p=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,f=a*c,p=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cf,e,hf)}lookAt(e,t,i){let s=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),vi.crossVectors(i,gn),vi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),vi.crossVectors(i,gn)),vi.normalize(),Ma.crossVectors(gn,vi),s[0]=vi.x,s[4]=Ma.x,s[8]=gn.x,s[1]=vi.y,s[5]=Ma.y,s[9]=gn.y,s[2]=vi.z,s[6]=Ma.z,s[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],M=i[3],y=i[7],_=i[11],S=i[15],T=s[0],R=s[4],C=s[8],w=s[12],b=s[1],L=s[5],P=s[9],z=s[13],X=s[2],$=s[6],N=s[10],te=s[14],V=s[3],oe=s[7],pe=s[11],_e=s[15];return r[0]=a*T+o*b+l*X+c*V,r[4]=a*R+o*L+l*$+c*oe,r[8]=a*C+o*P+l*N+c*pe,r[12]=a*w+o*z+l*te+c*_e,r[1]=h*T+u*b+d*X+f*V,r[5]=h*R+u*L+d*$+f*oe,r[9]=h*C+u*P+d*N+f*pe,r[13]=h*w+u*z+d*te+f*_e,r[2]=p*T+x*b+g*X+m*V,r[6]=p*R+x*L+g*$+m*oe,r[10]=p*C+x*P+g*N+m*pe,r[14]=p*w+x*z+g*te+m*_e,r[3]=M*T+y*b+_*X+S*V,r[7]=M*R+y*L+_*$+S*oe,r[11]=M*C+y*P+_*N+S*pe,r[15]=M*w+y*z+_*te+S*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*l*u-s*c*u-r*o*d+i*c*d+s*o*f-i*l*f)+x*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+g*(+t*c*u-t*o*f-r*a*u+i*a*f+r*o*h-i*c*h)+m*(-s*o*h-t*l*u+t*o*d+s*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],M=u*g*c-x*d*c+x*l*f-o*g*f-u*l*m+o*d*m,y=p*d*c-h*g*c-p*l*f+a*g*f+h*l*m-a*d*m,_=h*x*c-p*u*c+p*o*f-a*x*f-h*o*m+a*u*m,S=p*u*l-h*x*l-p*o*d+a*x*d+h*o*g-a*u*g,T=t*M+i*y+s*_+r*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=M*R,e[1]=(x*d*r-u*g*r-x*s*f+i*g*f+u*s*m-i*d*m)*R,e[2]=(o*g*r-x*l*r+x*s*c-i*g*c-o*s*m+i*l*m)*R,e[3]=(u*l*r-o*d*r-u*s*c+i*d*c+o*s*f-i*l*f)*R,e[4]=y*R,e[5]=(h*g*r-p*d*r+p*s*f-t*g*f-h*s*m+t*d*m)*R,e[6]=(p*l*r-a*g*r-p*s*c+t*g*c+a*s*m-t*l*m)*R,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*R,e[8]=_*R,e[9]=(p*u*r-h*x*r-p*i*f+t*x*f+h*i*m-t*u*m)*R,e[10]=(a*x*r-p*o*r+p*i*c-t*x*c-a*i*m+t*o*m)*R,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*f-t*o*f)*R,e[12]=S*R,e[13]=(h*x*s-p*u*s+p*i*d-t*x*d-h*i*g+t*u*g)*R,e[14]=(p*o*s-a*x*s-p*i*l+t*x*l+a*i*g-t*o*g)*R,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*d+t*o*d)*R,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,x=a*h,g=a*u,m=o*u,M=l*c,y=l*h,_=l*u,S=i.x,T=i.y,R=i.z;return s[0]=(1-(x+m))*S,s[1]=(f+_)*S,s[2]=(p-y)*S,s[3]=0,s[4]=(f-_)*T,s[5]=(1-(d+m))*T,s[6]=(g+M)*T,s[7]=0,s[8]=(p+y)*R,s[9]=(g-M)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=gs.set(s[0],s[1],s[2]).length(),a=gs.set(s[4],s[5],s[6]).length(),o=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Rn.copy(this);let c=1/r,h=1/a,u=1/o;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=u,Rn.elements[9]*=u,Rn.elements[10]*=u,t.setFromRotationMatrix(Rn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=In,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===In)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Er)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=In,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===In)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===Er)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},gs=new I,Rn=new _t,cf=new I(0,0,0),hf=new I(1,1,1),vi=new I,Ma=new I,gn=new I,Th=new _t,Ah=new Dn,_n=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Th,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_n.DEFAULT_ORDER="XYZ";var Tr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},uf=0,Rh=new I,xs=new Dn,Kn=new _t,ba=new I,dr=new I,df=new I,ff=new Dn,Ch=new I(1,0,0),Ih=new I(0,1,0),Ph=new I(0,0,1),Dh={type:"added"},pf={type:"removed"},_s={type:"childadded",child:null},Gl={type:"childremoved",child:null},Wt=class n extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new _n,i=new Dn,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new $e}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(Ch,e)}rotateY(e){return this.rotateOnAxis(Ih,e)}rotateZ(e){return this.rotateOnAxis(Ph,e)}translateOnAxis(e,t){return Rh.copy(e).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ch,e)}translateY(e){return this.translateOnAxis(Ih,e)}translateZ(e){return this.translateOnAxis(Ph,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ba.copy(e):ba.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(dr,ba,this.up):Kn.lookAt(ba,dr,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(Kn),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dh),_s.child=e,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pf),Gl.child=e,this.dispatchEvent(Gl),Gl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dh),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,df),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,ff,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Wt.DEFAULT_UP=new I(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Cn=new I,Qn=new I,Vl=new I,jn=new I,ys=new I,vs=new I,Lh=new I,Wl=new I,Xl=new I,ql=new I,Yl=new dt,Zl=new dt,$l=new dt,ei=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Cn.subVectors(e,t),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Cn.subVectors(s,t),Qn.subVectors(i,t),Vl.subVectors(e,t);let a=Cn.dot(Cn),o=Cn.dot(Qn),l=Cn.dot(Vl),c=Qn.dot(Qn),h=Qn.dot(Vl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(o,jn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Yl.setScalar(0),Zl.setScalar(0),$l.setScalar(0),Yl.fromBufferAttribute(e,t),Zl.fromBufferAttribute(e,i),$l.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Yl,r.x),a.addScaledVector(Zl,r.y),a.addScaledVector($l,r.z),a}static isFrontFacing(e,t,i,s){return Cn.subVectors(i,t),Qn.subVectors(e,t),Cn.cross(Qn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Cn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;ys.subVectors(s,i),vs.subVectors(r,i),Wl.subVectors(e,i);let l=ys.dot(Wl),c=vs.dot(Wl);if(l<=0&&c<=0)return t.copy(i);Xl.subVectors(e,s);let h=ys.dot(Xl),u=vs.dot(Xl);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(ys,a);ql.subVectors(e,r);let f=ys.dot(ql),p=vs.dot(ql);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(vs,o);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Lh.subVectors(r,s),o=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(Lh,o);let m=1/(g+x+d);return a=x*m,o=d*m,t.copy(i).addScaledVector(ys,a).addScaledVector(vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function Jl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=sf(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Jl(a,r,e+1/3),this.g=Jl(a,r,e),this.b=Jl(a,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=Zt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){let i=Ou[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return at.workingToColorSpace(en.copy(this),e),Math.round(et(en.r*255,0,255))*65536+Math.round(et(en.g*255,0,255))*256+Math.round(et(en.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(en.copy(this),t);let i=en.r,s=en.g,r=en.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Zt){at.workingToColorSpace(en.copy(this),e);let t=en.r,i=en.g,s=en.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(Ea);let i=Dl(Mi.h,Ea.h,t),s=Dl(Mi.s,Ea.s,t),r=Dl(Mi.l,Ea.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Be;Be.NAMES=Ou;var mf=0,Gn=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=si,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wa&&(i.blendSrc=this.blendSrc),this.blendDst!==Xa&&(i.blendDst=this.blendDst),this.blendEquation!==wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},wt=class extends Gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Bt=new I,wa=new ue,gf=0,Nt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=$a,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wa.fromBufferAttribute(this,t),wa.applyMatrix3(e),this.setXY(t,wa.x,wa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=zn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$a&&(e.usage=this.usage),e}};var Ar=class extends Nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Rr=class extends Nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var st=class extends Nt{constructor(e,t,i){super(new Float32Array(e),t,i)}},xf=0,En=new _t,Kl=new Wt,Ms=new I,xn=new Si,fr=new Si,Vt=new I,Dt=class n extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nc(e)?Rr:Ar)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,i){return En.makeTranslation(e,t,i),this.applyMatrix4(En),this}scale(e,t,i){return En.makeScale(e,t,i),this.applyMatrix4(En),this}lookAt(e){return Kl.lookAt(e),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(xn.min,fr.min),xn.expandByPoint(Vt),Vt.addVectors(xn.max,fr.max),xn.expandByPoint(Vt)):(xn.expandByPoint(fr.min),xn.expandByPoint(fr.max))}xn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Vt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Vt.fromBufferAttribute(o,c),l&&(Ms.fromBufferAttribute(e,c),Vt.add(Ms)),s=Math.max(s,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new I,l[C]=new I;let c=new I,h=new I,u=new I,d=new ue,f=new ue,p=new ue,x=new I,g=new I;function m(C,w,b){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,b),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let L=1/(f.x*p.y-p.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(L),o[C].add(x),o[w].add(x),o[b].add(x),l[C].add(g),l[w].add(g),l[b].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,w=M.length;C<w;++C){let b=M[C],L=b.start,P=b.count;for(let z=L,X=L+P;z<X;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let y=new I,_=new I,S=new I,T=new I;function R(C){S.fromBufferAttribute(s,C),T.copy(S);let w=o[C];y.copy(w),y.sub(S.multiplyScalar(S.dot(w))).normalize(),_.crossVectors(T,w);let L=_.dot(l[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,L)}for(let C=0,w=M.length;C<w;++C){let b=M[C],L=b.start,P=b.count;for(let z=L,X=L+P;z<X;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new Nt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uh=new _t,ki=new Sr,Sa=new Wi,Nh=new I,Ta=new I,Aa=new I,Ra=new I,Ql=new I,Ca=new I,Fh=new I,Ia=new I,Y=class extends Wt{constructor(e=new Dt,t=new wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ql.fromBufferAttribute(u,e),a?Ca.addScaledVector(Ql,h):Ca.addScaledVector(Ql.sub(t),h))}t.add(Ca)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(r),ki.copy(e.ray).recast(e.near),!(Sa.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Sa,Nh)===null||ki.origin.distanceToSquared(Nh)>(e.far-e.near)**2))&&(Uh.copy(r).invert(),ki.copy(e.ray).applyMatrix4(Uh),!(i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],M=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,S=y;_<S;_+=3){let T=o.getX(_),R=o.getX(_+1),C=o.getX(_+2);s=Pa(this,m,e,i,c,h,u,T,R,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let M=o.getX(g),y=o.getX(g+1),_=o.getX(g+2);s=Pa(this,a,e,i,c,h,u,M,y,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],M=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,S=y;_<S;_+=3){let T=_,R=_+1,C=_+2;s=Pa(this,m,e,i,c,h,u,T,R,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let M=g,y=g+1,_=g+2;s=Pa(this,a,e,i,c,h,u,M,y,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function _f(n,e,t,i,s,r,a,o){let l;if(e.side===Jt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ii,o),l===null)return null;Ia.copy(o),Ia.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ia);return c<t.near||c>t.far?null:{distance:c,point:Ia.clone(),object:n}}function Pa(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ta),n.getVertexPosition(l,Aa),n.getVertexPosition(c,Ra);let h=_f(n,e,t,i,Ta,Aa,Ra,Fh);if(h){let u=new I;ei.getBarycoord(Fh,Ta,Aa,Ra,u),s&&(h.uv=ei.getInterpolatedAttribute(s,o,l,c,u,new ue)),r&&(h.uv1=ei.getInterpolatedAttribute(r,o,l,c,u,new ue)),a&&(h.normal=ei.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new I,materialIndex:0};ei.getNormal(Ta,Aa,Ra,d.normal),h.face=d,h.barycoord=u}return h}var qe=class n extends Dt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function p(x,g,m,M,y,_,S,T,R,C,w){let b=_/R,L=S/C,P=_/2,z=S/2,X=T/2,$=R+1,N=C+1,te=0,V=0,oe=new I;for(let pe=0;pe<N;pe++){let _e=pe*L-z;for(let Ne=0;Ne<$;Ne++){let ot=Ne*b-P;oe[x]=ot*M,oe[g]=_e*y,oe[m]=X,c.push(oe.x,oe.y,oe.z),oe[x]=0,oe[g]=0,oe[m]=T>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push(Ne/R),u.push(1-pe/C),te+=1}}for(let pe=0;pe<C;pe++)for(let _e=0;_e<R;_e++){let Ne=d+_e+$*pe,ot=d+_e+$*(pe+1),yt=d+(_e+1)+$*(pe+1),ht=d+(_e+1)+$*pe;l.push(Ne,ot,ht),l.push(ot,yt,ht),V+=6}o.addGroup(f,V,w),f+=V,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function es(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function tn(n){let e={};for(let t=0;t<n.length;t++){let i=es(n[t]);for(let s in i)e[s]=i[s]}return e}function yf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var ku={clone:es,merge:tn},vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ln=class extends Gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vf,this.fragmentShader=Mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=yf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Cr=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},bi=new I,Bh=new ue,Oh=new ue,$t=class extends Cr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ja*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Pl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(Pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,Bh,Oh),t.subVectors(Oh,Bh)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Pl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bs=-90,Es=1,eo=class extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(bs,Es,e,t);s.layers=this.layers,this.add(s);let r=new $t(bs,Es,e,t);r.layers=this.layers,this.add(r);let a=new $t(bs,Es,e,t);a.layers=this.layers,this.add(a);let o=new $t(bs,Es,e,t);o.layers=this.layers,this.add(o);let l=new $t(bs,Es,e,t);l.layers=this.layers,this.add(l);let c=new $t(bs,Es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===In)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Er)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Ir=class extends an{constructor(e=[],t=Qi,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},to=class extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ir(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new qe(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:li});r.uniforms.tEquirect.value=t;let a=new Y(s,r),o=t.minFilter;return t.minFilter===Ci&&(t.minFilter=Pn),new eo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Me=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},bf={type:"move"},Ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Me;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Pr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Dr=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Lr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$a,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},rn=new I,Fs=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=zn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Bs=class extends Gn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ws,pr=new I,Ss=new I,Ts=new I,As=new ue,mr=new ue,zu=new _t,Da=new I,gr=new I,La=new I,kh=new ue,jl=new ue,zh=new ue,Ur=class extends Wt{constructor(e=new Bs){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new Dt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Lr(t,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new Fs(i,3,0,!1)),ws.setAttribute("uv",new Fs(i,2,3,!1))}this.geometry=ws,this.material=e,this.center=new ue(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ss.setFromMatrixScale(this.matrixWorld),zu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ss.multiplyScalar(-Ts.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Ua(Da.set(-.5,-.5,0),Ts,a,Ss,s,r),Ua(gr.set(.5,-.5,0),Ts,a,Ss,s,r),Ua(La.set(.5,.5,0),Ts,a,Ss,s,r),kh.set(0,0),jl.set(1,0),zh.set(1,1);let o=e.ray.intersectTriangle(Da,gr,La,!1,pr);if(o===null&&(Ua(gr.set(-.5,.5,0),Ts,a,Ss,s,r),jl.set(0,1),o=e.ray.intersectTriangle(Da,La,gr,!1,pr),o===null))return;let l=e.ray.origin.distanceTo(pr);l<e.near||l>e.far||t.push({distance:l,point:pr.clone(),uv:ei.getInterpolation(pr,Da,gr,La,kh,jl,zh,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ua(n,e,t,i,s,r){As.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(mr.x=r*As.x-s*As.y,mr.y=s*As.x+r*As.y):mr.copy(As),n.copy(e),n.x+=mr.x,n.y+=mr.y,n.applyMatrix4(zu)}var ec=new I,Ef=new I,wf=new $e,kn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ec.subVectors(i,t).cross(Ef.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ec),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||wf.getNormalMatrix(e),s=this.coplanarPoint(ec).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},zi=new Wi,Sf=new ue(.5,.5),Na=new I,Os=class{constructor(e=new kn,t=new kn,i=new kn,s=new kn,r=new kn,a=new kn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=In,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],M=r[12],y=r[13],_=r[14],S=r[15];if(s[0].setComponents(c-a,f-h,m-p,S-M).normalize(),s[1].setComponents(c+a,f+h,m+p,S+M).normalize(),s[2].setComponents(c+o,f+u,m+x,S+y).normalize(),s[3].setComponents(c-o,f-u,m-x,S-y).normalize(),i)s[4].setComponents(l,d,g,_).normalize(),s[5].setComponents(c-l,f-d,m-g,S-_).normalize();else if(s[4].setComponents(c-l,f-d,m-g,S-_).normalize(),t===In)s[5].setComponents(c+l,f+d,m+g,S+_).normalize();else if(t===Er)s[5].setComponents(l,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){zi.center.set(0,0,0);let t=Sf.distanceTo(e.center);return zi.radius=.7071067811865476+t,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Na.x=s.normal.x>0?e.max.x:e.min.x,Na.y=s.normal.y>0?e.max.y:e.min.y,Na.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ks=class extends Gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hh=new _t,hc=new Sr,Fa=new Wi,Ba=new I,Nr=class extends Wt{constructor(e=new Dt,t=new ks){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(s),Fa.radius+=r,e.ray.intersectsSphere(Fa)===!1)return;Hh.copy(s).invert(),hc.copy(e.ray).applyMatrix4(Hh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,x=f;p<x;p++){let g=c.getX(p);Ba.fromBufferAttribute(u,g),Gh(Ba,g,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,x=f;p<x;p++)Ba.fromBufferAttribute(u,p),Gh(Ba,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Gh(n,e,t,i,s,r,a){let o=hc.distanceSqToPoint(n);if(o<t){let l=new I;hc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Xi=class extends an{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Fr=class extends an{constructor(e,t,i=Ii,s,r,a,o=wn,l=wn,c,h=Ps,u=1){if(h!==Ps&&h!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Us(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Br=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var ai=class n extends Dt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new I,h=new ue;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(o,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ee=class n extends Dt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],g=i/2,m=0;M(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2));function M(){let _=new I,S=new I,T=0,R=(t-e)/i;for(let C=0;C<=r;C++){let w=[],b=C/r,L=b*(t-e)+e;for(let P=0;P<=s;P++){let z=P/s,X=z*l+o,$=Math.sin(X),N=Math.cos(X);S.x=L*$,S.y=-b*i+g,S.z=L*N,u.push(S.x,S.y,S.z),_.set($,R,N).normalize(),d.push(_.x,_.y,_.z),f.push(z,1-b),w.push(p++)}x.push(w)}for(let C=0;C<s;C++)for(let w=0;w<r;w++){let b=x[w][C],L=x[w+1][C],P=x[w+1][C+1],z=x[w][C+1];(e>0||w!==0)&&(h.push(b,L,z),T+=3),(t>0||w!==r-1)&&(h.push(L,P,z),T+=3)}c.addGroup(m,T,0),m+=T}function y(_){let S=p,T=new ue,R=new I,C=0,w=_===!0?e:t,b=_===!0?1:-1;for(let P=1;P<=s;P++)u.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),p++;let L=p;for(let P=0;P<=s;P++){let X=P/s*l+o,$=Math.cos(X),N=Math.sin(X);R.x=w*N,R.y=g*b,R.z=w*$,u.push(R.x,R.y,R.z),d.push(0,b,0),T.x=$*.5+.5,T.y=N*.5*b+.5,f.push(T.x,T.y),p++}for(let P=0;P<s;P++){let z=S+P,X=L+P;_===!0?h.push(X,X+1,z):h.push(X+1,X,z),C+=3}c.addGroup(m,C,_===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},kt=class n extends Ee{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zs=class n extends Dt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let y=new I,_=new I,S=new I;for(let T=0;T<t.length;T+=3)f(t[T+0],y),f(t[T+1],_),f(t[T+2],S),l(y,_,S,M)}function l(M,y,_,S){let T=S+1,R=[];for(let C=0;C<=T;C++){R[C]=[];let w=M.clone().lerp(_,C/T),b=y.clone().lerp(_,C/T),L=T-C;for(let P=0;P<=L;P++)P===0&&C===T?R[C][P]=w:R[C][P]=w.clone().lerp(b,P/L)}for(let C=0;C<T;C++)for(let w=0;w<2*(T-C)-1;w++){let b=Math.floor(w/2);w%2===0?(d(R[C][b+1]),d(R[C+1][b]),d(R[C][b])):(d(R[C][b+1]),d(R[C+1][b+1]),d(R[C+1][b]))}}function c(M){let y=new I;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(M),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){let M=new I;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];let _=g(M)/2/Math.PI+.5,S=m(M)/Math.PI+.5;a.push(_,1-S)}p(),u()}function u(){for(let M=0;M<a.length;M+=6){let y=a[M+0],_=a[M+2],S=a[M+4],T=Math.max(y,_,S),R=Math.min(y,_,S);T>.9&&R<.1&&(y<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),S<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,y){let _=M*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function p(){let M=new I,y=new I,_=new I,S=new I,T=new ue,R=new ue,C=new ue;for(let w=0,b=0;w<r.length;w+=9,b+=6){M.set(r[w+0],r[w+1],r[w+2]),y.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),T.set(a[b+0],a[b+1]),R.set(a[b+2],a[b+3]),C.set(a[b+4],a[b+5]),S.copy(M).add(y).add(_).divideScalar(3);let L=g(S);x(T,b+0,M,L),x(R,b+2,y,L),x(C,b+4,_,L)}}function x(M,y,_,S){S<0&&M.x===1&&(a[y]=M.x-1),_.x===0&&_.z===0&&(a[y]=S/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},qi=class n extends zs{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ue:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new I,s=[],r=[],a=[],o=new I,l=new _t;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(et(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(et(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Hs=class extends yn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ue){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},no=class extends Hs{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Bc(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var Oa=new I,tc=new Bc,nc=new Bc,ic=new Bc,Un=class extends yn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Oa.subVectors(s[0],s[1]).add(s[0]),c=Oa);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Oa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Oa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),tc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,g),nc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,g),ic.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(tc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),nc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ic.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(tc.calc(l),nc.calc(l),ic.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Vh(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function Tf(n,e){let t=1-n;return t*t*e}function Af(n,e){return 2*(1-n)*n*e}function Rf(n,e){return n*n*e}function yr(n,e,t,i){return Tf(n,e)+Af(n,t)+Rf(n,i)}function Cf(n,e){let t=1-n;return t*t*t*e}function If(n,e){let t=1-n;return 3*t*t*n*e}function Pf(n,e){return 3*(1-n)*n*n*e}function Df(n,e){return n*n*n*e}function vr(n,e,t,i,s){return Cf(n,e)+If(n,t)+Pf(n,i)+Df(n,s)}var Or=class extends yn{constructor(e=new ue,t=new ue,i=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ue){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(vr(e,s.x,r.x,a.x,o.x),vr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},io=class extends yn{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(vr(e,s.x,r.x,a.x,o.x),vr(e,s.y,r.y,a.y,o.y),vr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},kr=class extends yn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},so=class extends yn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zr=class extends yn{constructor(e=new ue,t=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ue){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(yr(e,s.x,r.x,a.x),yr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hr=class extends yn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(yr(e,s.x,r.x,a.x),yr(e,s.y,r.y,a.y),yr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gr=class extends yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Vh(o,l.x,c.x,h.x,u.x),Vh(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ue().fromArray(s))}return this}},uc=Object.freeze({__proto__:null,ArcCurve:no,CatmullRomCurve3:Un,CubicBezierCurve:Or,CubicBezierCurve3:io,EllipseCurve:Hs,LineCurve:kr,LineCurve3:so,QuadraticBezierCurve:zr,QuadraticBezierCurve3:Hr,SplineCurve:Gr}),ro=class extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new uc[s.type]().fromJSON(s))}return this}},Vr=class extends ro{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new kr(this.currentPoint.clone(),new ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new zr(this.currentPoint.clone(),new ue(e,t),new ue(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new Or(this.currentPoint.clone(),new ue(e,t),new ue(i,s),new ue(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Gr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new Hs(e,t,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Gs=class extends Vr{constructor(e){super(e),this.uuid=ti(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Vr().fromJSON(s))}return this}};function Lf(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Hu(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Of(n,e,r,t)),n.length>80*t){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<s;d+=t){let f=n[d],p=n[d+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Wr(r,a,t,o,l,c,0),a}function Hu(n,e,t,i,s){let r;if(s===$f(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=Wh(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Wh(a/i|0,n[a],n[a+1],r);return r&&Vs(r,r.next)&&(qr(r),r=r.next),r}function Yi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Vs(t,t.next)||Ct(t.prev,t,t.next)===0)){if(qr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Wr(n,e,t,i,s,r,a){if(!n)return;!a&&r&&Vf(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Nf(n,i,s,r):Uf(n)){e.push(l.i,n.i,c.i),qr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Ff(Yi(n),e),Wr(n,e,t,i,s,r,2)):a===2&&Bf(n,e,t,i,s,r):Wr(Yi(n),e,t,i,s,r,1);break}}}function Uf(n){let e=n.prev,t=n,i=n.next;if(Ct(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&_r(s,o,r,l,a,c,p.x,p.y)&&Ct(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Nf(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Ct(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),p=Math.min(h,u,d),x=Math.max(o,l,c),g=Math.max(h,u,d),m=dc(f,p,e,t,i),M=dc(x,g,e,t,i),y=n.prevZ,_=n.nextZ;for(;y&&y.z>=m&&_&&_.z<=M;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&_r(o,h,l,u,c,d,y.x,y.y)&&Ct(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==a&&_r(o,h,l,u,c,d,_.x,_.y)&&Ct(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&_r(o,h,l,u,c,d,y.x,y.y)&&Ct(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==a&&_r(o,h,l,u,c,d,_.x,_.y)&&Ct(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Ff(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Vs(i,s)&&Vu(i,t,t.next,s)&&Xr(i,s)&&Xr(s,i)&&(e.push(i.i,t.i,s.i),qr(t),qr(t.next),t=n=s),t=t.next}while(t!==n);return Yi(t)}function Bf(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&qf(a,o)){let l=Wu(a,o);a=Yi(a,a.next),l=Yi(l,l.next),Wr(a,e,t,i,s,r,0),Wr(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Of(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=Hu(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Xf(c))}s.sort(kf);for(let r=0;r<s.length;r++)t=zf(s[r],t);return t}function kf(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function zf(n,e){let t=Hf(n,e);if(!t)return e;let i=Wu(t,n);return Yi(i,i.next),Yi(t,t.next)}function Hf(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(Vs(n,t))return t;do{if(Vs(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Gu(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);Xr(t,n)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Gf(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Gf(n,e){return Ct(n.prev,n,e.prev)<0&&Ct(e.next,n,n.next)<0}function Vf(n,e,t,i){let s=n;do s.z===0&&(s.z=dc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Wf(s)}function Wf(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function dc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Xf(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Gu(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function _r(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&Gu(n,e,t,i,s,r,a,o)}function qf(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Yf(n,e)&&(Xr(n,e)&&Xr(e,n)&&Zf(n,e)&&(Ct(n.prev,n,e.prev)||Ct(n,e.prev,e))||Vs(n,e)&&Ct(n.prev,n,n.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Vs(n,e){return n.x===e.x&&n.y===e.y}function Vu(n,e,t,i){let s=za(Ct(n,e,t)),r=za(Ct(n,e,i)),a=za(Ct(t,i,n)),o=za(Ct(t,i,e));return!!(s!==r&&a!==o||s===0&&ka(n,t,e)||r===0&&ka(n,i,e)||a===0&&ka(t,n,i)||o===0&&ka(t,e,i))}function ka(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function za(n){return n>0?1:n<0?-1:0}function Yf(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Vu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Xr(n,e){return Ct(n.prev,n,n.next)<0?Ct(n,e,n.next)>=0&&Ct(n,n.prev,e)>=0:Ct(n,e,n.prev)<0||Ct(n,n.next,e)<0}function Zf(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Wu(n,e){let t=fc(n.i,n.x,n.y),i=fc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Wh(n,e,t,i){let s=fc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function qr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function fc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $f(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var pc=class{static triangulate(e,t,i=2){return Lf(e,t,i)}},Is=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Xh(e),qh(i,e);let a=e.length;t.forEach(Xh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,qh(i,t[l]);let o=pc.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Xh(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function qh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var oi=class n extends zs{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Zi=class n extends zs{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},on=class n extends Dt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let M=m*d-a;for(let y=0;y<c;y++){let _=y*u-r;p.push(_,-M,0),x.push(0,0,1),g.push(y/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let y=M+c*m,_=M+c*(m+1),S=M+1+c*(m+1),T=M+1+c*m;f.push(y,_,T),f.push(_,S,T)}this.setIndex(f),this.setAttribute("position",new st(p,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ws=class n extends Dt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new I,p=new ue;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let m=r+g/i*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<s;x++){let g=x*(i+1);for(let m=0;m<i;m++){let M=m+g,y=M,_=M+i+1,S=M+i+2,T=M+1;o.push(y,_,T),o.push(_,S,T)}}this.setIndex(o),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Yr=class n extends Dt{constructor(e=new Gs([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(r,3)),this.setAttribute("uv",new st(a,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,p=d.holes;Is.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let M=p[g];Is.isClockWise(M)===!0&&(p[g]=M.reverse())}let x=Is.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let M=p[g];f=f.concat(M)}for(let g=0,m=f.length;g<m;g++){let M=f[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,m=x.length;g<m;g++){let M=x[g],y=M[0]+u,_=M[1]+u,S=M[2]+u;i.push(y,_,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Jf(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}};function Jf(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var ct=class n extends Dt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new I,d=new I,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let M=[],y=m/i,_=0;m===0&&a===0?_=.5/t:m===i&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let T=S/t;u.x=-e*Math.cos(s+T*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(s+T*r)*Math.sin(a+y*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(T+_,1-y),M.push(c++)}h.push(M)}for(let m=0;m<i;m++)for(let M=0;M<t;M++){let y=h[m][M+1],_=h[m][M],S=h[m+1][M],T=h[m+1][M+1];(m!==0||a>0)&&f.push(y,_,T),(m!==i-1||l<Math.PI)&&f.push(_,S,T)}this.setIndex(f),this.setAttribute("position",new st(p,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ln=class n extends Dt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=i;f++)for(let p=0;p<=s;p++){let x=p/s*r,g=f/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let p=1;p<=s;p++){let x=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,M=(s+1)*f+p;a.push(x,g,M),a.push(g,m,M)}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ti=class n extends Dt{constructor(e=new Hr(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new ue,h=new I,u=[],d=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2));function x(){for(let y=0;y<t;y++)g(y);g(r===!1?t:0),M(),m()}function g(y){h=e.getPointAt(y/t,h);let _=a.normals[y],S=a.binormals[y];for(let T=0;T<=s;T++){let R=T/s*Math.PI*2,C=Math.sin(R),w=-Math.cos(R);l.x=w*_.x+C*S.x,l.y=w*_.y+C*S.y,l.z=w*_.z+C*S.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let y=1;y<=t;y++)for(let _=1;_<=s;_++){let S=(s+1)*(y-1)+(_-1),T=(s+1)*y+(_-1),R=(s+1)*y+_,C=(s+1)*(y-1)+_;p.push(S,T,C),p.push(T,R,C)}}function M(){for(let y=0;y<=t;y++)for(let _=0;_<=s;_++)c.x=y/t,c.y=_/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new uc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Mt=class extends Gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ao=class extends Gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},oo=class extends Gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ha(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Kf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var $i=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},lo=class extends $i{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ac,endingEnd:ac}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case oc:r=e,o=2*t-i;break;case lc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case oc:a=e,l=2*i-t;break;case lc:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,M=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,y=(-1-f)*g+(1.5+f)*x+.5*p,_=f*g-f*x;for(let S=0;S!==o;++S)r[S]=m*a[h+S]+M*a[c+S]+y*a[l+S]+_*a[u+S];return r}},co=class extends $i{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},ho=class extends $i{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},vn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ha(t,this.TimeBufferType),this.values=Ha(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ha(e.times,Array),values:Ha(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mr:t=this.InterpolantFactoryMethodDiscrete;break;case Za:t=this.InterpolantFactoryMethodLinear;break;case Ga:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return Za;case this.InterpolantFactoryMethodSmooth:return Ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Kf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ga,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let x=t[u+p];if(x!==t[d+p]||x!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=Za;var Ai=class extends vn{constructor(e,t,i){super(e,t,i)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Mr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var uo=class extends vn{constructor(e,t,i,s){super(e,t,i,s)}};uo.prototype.ValueTypeName="color";var fo=class extends vn{constructor(e,t,i,s){super(e,t,i,s)}};fo.prototype.ValueTypeName="number";var po=class extends $i{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Dn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Zr=class extends vn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new po(this.times,this.values,this.getValueSize(),e)}};Zr.prototype.ValueTypeName="quaternion";Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends vn{constructor(e,t,i){super(e,t,i)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Mr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var mo=class extends vn{constructor(e,t,i,s){super(e,t,i,s)}};mo.prototype.ValueTypeName="vector";var Va={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},go=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Xu=new go,Xs=class{constructor(e){this.manager=e!==void 0?e:Xu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Xs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rs=new WeakMap,xo=class extends Xs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Va.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Rs.get(a);u===void 0&&(u=[],Rs.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Ds("img");function l(){h(),t&&t(this);let u=Rs.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Rs.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Va.remove(`image:${e}`);let d=Rs.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}Rs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Va.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var $r=class extends Xs{constructor(e){super(e)}load(e,t,i,s){let r=new an,a=new xo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},qs=class extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Jr=class extends qs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},sc=new _t,Yh=new I,Zh=new I,_o=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Os,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yh),Zh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zh),t.updateMatrixWorld(),sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var $h=new _t,xr=new I,rc=new I,mc=class extends _o{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),xr.setFromMatrixPosition(e.matrixWorld),i.position.copy(xr),rc.copy(i.position),rc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(rc),i.updateMatrixWorld(),s.makeTranslation(-xr.x,-xr.y,-xr.z),$h.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($h,i.coordinateSystem,i.reversedDepth)}},Ji=class extends qs{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new mc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Kr=class extends Cr{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},gc=class extends _o{constructor(){super(new Kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qr=class extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new gc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var yo=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},jr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Oc="\\[\\]\\.:\\/",Qf=new RegExp("["+Oc+"]","g"),kc="[^"+Oc+"]",jf="[^"+Oc.replace("\\.","")+"]",ep=/((?:WC+[\/:])*)/.source.replace("WC",kc),tp=/(WCOD+)?/.source.replace("WCOD",jf),np=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kc),ip=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kc),sp=new RegExp("^"+ep+tp+np+ip+"$"),rp=["material","materials","bones","map"],xc=class{constructor(e,t,i){let s=i||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Et=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qf,"")}static parseTrackName(e){let t=sp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);rp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=xc;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sy=new Float32Array(1);function zc(n,e,t,i){let s=ap(i);switch(t){case Rc:return n*e;case Ic:return n*e/s.components*s.byteLength;case Uo:return n*e/s.components*s.byteLength;case Pc:return n*e*2/s.components*s.byteLength;case No:return n*e*2/s.components*s.byteLength;case Cc:return n*e*3/s.components*s.byteLength;case Sn:return n*e*4/s.components*s.byteLength;case Fo:return n*e*4/s.components*s.byteLength;case na:case ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sa:case ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oo:case zo:return Math.max(n,16)*Math.max(e,8)/4;case Bo:case ko:return Math.max(n,8)*Math.max(e,8)/2;case Ho:case Go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case qo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case $o:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Qo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case jo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case el:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case tl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case nl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case il:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case sl:case rl:case al:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ol:case ll:return Math.ceil(n/4)*Math.ceil(e/4)*8;case cl:case hl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ap(n){switch(n){case Nn:case wc:return{byteLength:1,components:1};case Ys:case Sc:case Zs:return{byteLength:2,components:1};case Do:case Lo:return{byteLength:2,components:4};case Ii:case Po:case Wn:return{byteLength:4,components:1};case Tc:case Ac:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function md(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function dp(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_p=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Tp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ap=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Op=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,t0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,r0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,a0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,u0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,d0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,f0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,p0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,b0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,C0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,P0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,N0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,F0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,G0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,J0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,K0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,am=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,om=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ym=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Am=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Um=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,km=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:fp,alphahash_pars_fragment:pp,alphamap_fragment:mp,alphamap_pars_fragment:gp,alphatest_fragment:xp,alphatest_pars_fragment:_p,aomap_fragment:yp,aomap_pars_fragment:vp,batching_pars_vertex:Mp,batching_vertex:bp,begin_vertex:Ep,beginnormal_vertex:wp,bsdfs:Sp,iridescence_fragment:Tp,bumpmap_pars_fragment:Ap,clipping_planes_fragment:Rp,clipping_planes_pars_fragment:Cp,clipping_planes_pars_vertex:Ip,clipping_planes_vertex:Pp,color_fragment:Dp,color_pars_fragment:Lp,color_pars_vertex:Up,color_vertex:Np,common:Fp,cube_uv_reflection_fragment:Bp,defaultnormal_vertex:Op,displacementmap_pars_vertex:kp,displacementmap_vertex:zp,emissivemap_fragment:Hp,emissivemap_pars_fragment:Gp,colorspace_fragment:Vp,colorspace_pars_fragment:Wp,envmap_fragment:Xp,envmap_common_pars_fragment:qp,envmap_pars_fragment:Yp,envmap_pars_vertex:Zp,envmap_physical_pars_fragment:r0,envmap_vertex:$p,fog_vertex:Jp,fog_pars_vertex:Kp,fog_fragment:Qp,fog_pars_fragment:jp,gradientmap_pars_fragment:e0,lightmap_pars_fragment:t0,lights_lambert_fragment:n0,lights_lambert_pars_fragment:i0,lights_pars_begin:s0,lights_toon_fragment:a0,lights_toon_pars_fragment:o0,lights_phong_fragment:l0,lights_phong_pars_fragment:c0,lights_physical_fragment:h0,lights_physical_pars_fragment:u0,lights_fragment_begin:d0,lights_fragment_maps:f0,lights_fragment_end:p0,logdepthbuf_fragment:m0,logdepthbuf_pars_fragment:g0,logdepthbuf_pars_vertex:x0,logdepthbuf_vertex:_0,map_fragment:y0,map_pars_fragment:v0,map_particle_fragment:M0,map_particle_pars_fragment:b0,metalnessmap_fragment:E0,metalnessmap_pars_fragment:w0,morphinstance_vertex:S0,morphcolor_vertex:T0,morphnormal_vertex:A0,morphtarget_pars_vertex:R0,morphtarget_vertex:C0,normal_fragment_begin:I0,normal_fragment_maps:P0,normal_pars_fragment:D0,normal_pars_vertex:L0,normal_vertex:U0,normalmap_pars_fragment:N0,clearcoat_normal_fragment_begin:F0,clearcoat_normal_fragment_maps:B0,clearcoat_pars_fragment:O0,iridescence_pars_fragment:k0,opaque_fragment:z0,packing:H0,premultiplied_alpha_fragment:G0,project_vertex:V0,dithering_fragment:W0,dithering_pars_fragment:X0,roughnessmap_fragment:q0,roughnessmap_pars_fragment:Y0,shadowmap_pars_fragment:Z0,shadowmap_pars_vertex:$0,shadowmap_vertex:J0,shadowmask_pars_fragment:K0,skinbase_vertex:Q0,skinning_pars_vertex:j0,skinning_vertex:em,skinnormal_vertex:tm,specularmap_fragment:nm,specularmap_pars_fragment:im,tonemapping_fragment:sm,tonemapping_pars_fragment:rm,transmission_fragment:am,transmission_pars_fragment:om,uv_pars_fragment:lm,uv_pars_vertex:cm,uv_vertex:hm,worldpos_vertex:um,background_vert:dm,background_frag:fm,backgroundCube_vert:pm,backgroundCube_frag:mm,cube_vert:gm,cube_frag:xm,depth_vert:_m,depth_frag:ym,distanceRGBA_vert:vm,distanceRGBA_frag:Mm,equirect_vert:bm,equirect_frag:Em,linedashed_vert:wm,linedashed_frag:Sm,meshbasic_vert:Tm,meshbasic_frag:Am,meshlambert_vert:Rm,meshlambert_frag:Cm,meshmatcap_vert:Im,meshmatcap_frag:Pm,meshnormal_vert:Dm,meshnormal_frag:Lm,meshphong_vert:Um,meshphong_frag:Nm,meshphysical_vert:Fm,meshphysical_frag:Bm,meshtoon_vert:Om,meshtoon_frag:km,points_vert:zm,points_frag:Hm,shadow_vert:Gm,shadow_frag:Vm,sprite_vert:Wm,sprite_frag:Xm},he={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Xn={basic:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Be(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:tn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:tn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Be(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:tn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:tn([he.points,he.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:tn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:tn([he.common,he.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:tn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:tn([he.sprite,he.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:tn([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:tn([he.lights,he.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Xn.physical={uniforms:tn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var ul={r:0,b:0,g:0},ts=new _n,qm=new _t;function Ym(n,e,t,i,s,r,a){let o=new Be(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function x(y){let _=!1,S=p(y);S===null?m(o,l):S&&S.isColor&&(m(S,1),_=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(y,_){let S=p(_);S&&(S.isCubeTexture||S.mapping===ea)?(h===void 0&&(h=new Y(new qe(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:es(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ts.copy(_.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qm.makeRotationFromEuler(ts)),h.material.toneMapped=at.getTransfer(S.colorSpace)!==ft,(u!==S||d!==S.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Y(new on(2,2),new Ln({name:"BackgroundMaterial",uniforms:es(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=at.getTransfer(S.colorSpace)!==ft,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,_){y.getRGB(ul,Fc(n)),i.buffers.color.setClear(ul.r,ul.g,ul.b,_,a)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:x,addToRenderList:g,dispose:M}}function Zm(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(b,L,P,z,X){let $=!1,N=u(z,P,L);r!==N&&(r=N,c(r.object)),$=f(b,z,P,X),$&&p(b,z,P,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,_(b,L,P,z),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,L,P){let z=P.wireframe===!0,X=i[b.id];X===void 0&&(X={},i[b.id]=X);let $=X[L.id];$===void 0&&($={},X[L.id]=$);let N=$[z];return N===void 0&&(N=d(l()),$[z]=N),N}function d(b){let L=[],P=[],z=[];for(let X=0;X<t;X++)L[X]=0,P[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:P,attributeDivisors:z,object:b,attributes:{},index:null}}function f(b,L,P,z){let X=r.attributes,$=L.attributes,N=0,te=P.getAttributes();for(let V in te)if(te[V].location>=0){let pe=X[V],_e=$[V];if(_e===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(_e=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(_e=b.instanceColor)),pe===void 0||pe.attribute!==_e||_e&&pe.data!==_e.data)return!0;N++}return r.attributesNum!==N||r.index!==z}function p(b,L,P,z){let X={},$=L.attributes,N=0,te=P.getAttributes();for(let V in te)if(te[V].location>=0){let pe=$[V];pe===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor));let _e={};_e.attribute=pe,pe&&pe.data&&(_e.data=pe.data),X[V]=_e,N++}r.attributes=X,r.attributesNum=N,r.index=z}function x(){let b=r.newAttributes;for(let L=0,P=b.length;L<P;L++)b[L]=0}function g(b){m(b,0)}function m(b,L){let P=r.newAttributes,z=r.enabledAttributes,X=r.attributeDivisors;P[b]=1,z[b]===0&&(n.enableVertexAttribArray(b),z[b]=1),X[b]!==L&&(n.vertexAttribDivisor(b,L),X[b]=L)}function M(){let b=r.newAttributes,L=r.enabledAttributes;for(let P=0,z=L.length;P<z;P++)L[P]!==b[P]&&(n.disableVertexAttribArray(P),L[P]=0)}function y(b,L,P,z,X,$,N){N===!0?n.vertexAttribIPointer(b,L,P,X,$):n.vertexAttribPointer(b,L,P,z,X,$)}function _(b,L,P,z){x();let X=z.attributes,$=P.getAttributes(),N=L.defaultAttributeValues;for(let te in $){let V=$[te];if(V.location>=0){let oe=X[te];if(oe===void 0&&(te==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),te==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor)),oe!==void 0){let pe=oe.normalized,_e=oe.itemSize,Ne=e.get(oe);if(Ne===void 0)continue;let ot=Ne.buffer,yt=Ne.type,ht=Ne.bytesPerElement,J=yt===n.INT||yt===n.UNSIGNED_INT||oe.gpuType===Po;if(oe.isInterleavedBufferAttribute){let ne=oe.data,ye=ne.stride,Ge=oe.offset;if(ne.isInstancedInterleavedBuffer){for(let Ie=0;Ie<V.locationSize;Ie++)m(V.location+Ie,ne.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ie=0;Ie<V.locationSize;Ie++)g(V.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let Ie=0;Ie<V.locationSize;Ie++)y(V.location+Ie,_e/V.locationSize,yt,pe,ye*ht,(Ge+_e/V.locationSize*Ie)*ht,J)}else{if(oe.isInstancedBufferAttribute){for(let ne=0;ne<V.locationSize;ne++)m(V.location+ne,oe.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ne=0;ne<V.locationSize;ne++)g(V.location+ne);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let ne=0;ne<V.locationSize;ne++)y(V.location+ne,_e/V.locationSize,yt,pe,_e*ht,_e/V.locationSize*ne*ht,J)}}else if(N!==void 0){let pe=N[te];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(V.location,pe);break;case 3:n.vertexAttrib3fv(V.location,pe);break;case 4:n.vertexAttrib4fv(V.location,pe);break;default:n.vertexAttrib1fv(V.location,pe)}}}}M()}function S(){C();for(let b in i){let L=i[b];for(let P in L){let z=L[P];for(let X in z)h(z[X].object),delete z[X];delete L[P]}delete i[b]}}function T(b){if(i[b.id]===void 0)return;let L=i[b.id];for(let P in L){let z=L[P];for(let X in z)h(z[X].object),delete z[X];delete L[P]}delete i[b.id]}function R(b){for(let L in i){let P=i[L];if(P[b.id]===void 0)continue;let z=P[b.id];for(let X in z)h(z[X].object),delete z[X];delete P[b.id]}}function C(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:w,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function $m(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)a(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*d[x];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Jm(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Sn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let C=R===Zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Nn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Wn&&!C)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:S,maxSamples:T}}function Km(n){let e=this,t=null,i=0,s=!1,r=!1,a=new kn,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let M=r?0:i,y=M*4,_=m.clippingState||null;l.value=_,_=h(p,d,y,f);for(let S=0;S!==y;++S)_[S]=t[S];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,_=f;y!==x;++y,_+=4)a.copy(u[y]).applyMatrix4(M,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Qm(n){let e=new WeakMap;function t(a,o){return o===Ro?a.mapping=Qi:o===Co&&(a.mapping=ji),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ro||o===Co)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new to(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Qs=4,qu=[.125,.215,.35,.446,.526,.582],ss=20,Hc=new Kr,Yu=new Be,Gc=null,Vc=0,Wc=0,Xc=!1,is=(1+Math.sqrt(5))/2,Ks=1/is,Zu=[new I(-is,Ks,0),new I(is,Ks,0),new I(-Ks,0,is),new I(Ks,0,is),new I(0,is,-Ks),new I(0,is,Ks),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],jm=new I,pl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=jm}=r;Gc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gc,Vc,Wc),this._renderer.xr.enabled=Xc,e.scissorTest=!1,dl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Zs,format:Sn,colorSpace:Vi,depthBuffer:!1},s=$u(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$u(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eg(r)),this._blurMaterial=tg(r,e,t)}return s}_compileMaterial(e){let t=new Y(this._lodPlanes[0],e);this._renderer.compile(t,Hc)}_sceneToCubeUV(e,t,i,s,r){let l=new $t(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Yu),u.toneMapping=ci,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new wt({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new Y(new qe,x),m=!1,M=e.background;M?M.isColor&&(x.color.copy(M),e.background=null,m=!0):(x.color.copy(Yu),m=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));let S=this._cubeSize;dl(s,_*S,y>2?S:0,S,S),u.setRenderTarget(s),m&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Qi||e.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ju());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Y(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;dl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Hc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Zu[(s-r-1)%Zu.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Y(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ss-1),x=r/p,g=isFinite(r)?1+Math.floor(h*x):ss;g>ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ss}`);let m=[],M=0;for(let R=0;R<ss;++R){let C=R/x,w=Math.exp(-C*C/2);m.push(w),R===0?M+=w:R<g&&(M+=2*w)}for(let R=0;R<m.length;R++)m[R]=m[R]/M;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-i;let _=this._sizeLods[s],S=3*_*(s>y-Qs?s-y+Qs:0),T=4*(this._cubeSize-_);dl(t,S,T,3*_,2*_),l.setRenderTarget(t),l.render(u,Hc)}};function eg(n){let e=[],t=[],i=[],s=n,r=n-Qs+1+qu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Qs?l=qu[a-n+Qs-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,x=3,g=2,m=1,M=new Float32Array(x*p*f),y=new Float32Array(g*p*f),_=new Float32Array(m*p*f);for(let T=0;T<f;T++){let R=T%3*2/3-1,C=T>2?0:-1,w=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];M.set(w,x*p*T),y.set(d,g*p*T);let b=[T,T,T,T,T,T];_.set(b,m*p*T)}let S=new Dt;S.setAttribute("position",new Nt(M,x)),S.setAttribute("uv",new Nt(y,g)),S.setAttribute("faceIndex",new Nt(_,m)),e.push(S),s>Qs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function $u(n,e,t){let i=new Hn(n,e,t);return i.texture.mapping=ea,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function dl(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function tg(n,e,t){let i=new Float32Array(ss),s=new I(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Ju(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Ku(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function th(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ng(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ro||l===Co,h=l===Qi||l===ji;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new pl(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new pl(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function ig(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ls("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function sg(n,e,t,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(f!==null){let M=f.array;x=f.version;for(let y=0,_=M.length;y<_;y+=3){let S=M[y+0],T=M[y+1],R=M[y+2];d.push(S,T,T,R,R,S)}}else if(p!==void 0){let M=p.array;x=p.version;for(let y=0,_=M.length/3-1;y<_;y+=3){let S=y+0,T=y+1,R=y+2;d.push(S,T,T,R,R,S)}}else return;let g=new(Nc(d)?Rr:Ar)(d,1);g.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function rg(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*a),t.update(f,i,1)}function c(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,d*a,p),t.update(f,i,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,i,1)}function u(d,f,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,p);let m=0;for(let M=0;M<p;M++)m+=f[M]*x[M];t.update(m,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ag(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function og(n,e,t){let i=new WeakMap,s=new dt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let w=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],y=0;f===!0&&(y=1),p===!0&&(y=2),x===!0&&(y=3);let _=o.attributes.position.count*y,S=1;_>e.maxTextureSize&&(S=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*S*4*u),R=new wr(T,_,S,u);R.type=Wn,R.needsUpdate=!0;let C=y*4;for(let b=0;b<u;b++){let L=g[b],P=m[b],z=M[b],X=_*S*4*b;for(let $=0;$<L.count;$++){let N=$*C;f===!0&&(s.fromBufferAttribute(L,$),T[X+N+0]=s.x,T[X+N+1]=s.y,T[X+N+2]=s.z,T[X+N+3]=0),p===!0&&(s.fromBufferAttribute(P,$),T[X+N+4]=s.x,T[X+N+5]=s.y,T[X+N+6]=s.z,T[X+N+7]=0),x===!0&&(s.fromBufferAttribute(z,$),T[X+N+8]=s.x,T[X+N+9]=s.y,T[X+N+10]=s.z,T[X+N+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new ue(_,S)},i.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function lg(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var gd=new an,Qu=new Fr(1,1),xd=new wr,_d=new ja,yd=new Ir,ju=[],ed=[],td=new Float32Array(16),nd=new Float32Array(9),id=new Float32Array(4);function er(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=ju[s];if(r===void 0&&(r=new Float32Array(s),ju[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function gl(n,e){let t=ed[e];t===void 0&&(t=new Int32Array(e),ed[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function ug(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function dg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function fg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;id.set(i),n.uniformMatrix2fv(this.addr,!1,id),Ht(t,i)}}function pg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;nd.set(i),n.uniformMatrix3fv(this.addr,!1,nd),Ht(t,i)}}function mg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;td.set(i),n.uniformMatrix4fv(this.addr,!1,td),Ht(t,i)}}function gg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function _g(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function yg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function vg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Mg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function bg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function Eg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function wg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Qu.compareFunction=Lc,r=Qu):r=gd,t.setTexture2D(e||r,s)}function Sg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||_d,s)}function Tg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||yd,s)}function Ag(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||xd,s)}function Rg(n){switch(n){case 5126:return cg;case 35664:return hg;case 35665:return ug;case 35666:return dg;case 35674:return fg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return xg;case 35668:case 35672:return _g;case 35669:case 35673:return yg;case 5125:return vg;case 36294:return Mg;case 36295:return bg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return Ag}}function Cg(n,e){n.uniform1fv(this.addr,e)}function Ig(n,e){let t=er(e,this.size,2);n.uniform2fv(this.addr,t)}function Pg(n,e){let t=er(e,this.size,3);n.uniform3fv(this.addr,t)}function Dg(n,e){let t=er(e,this.size,4);n.uniform4fv(this.addr,t)}function Lg(n,e){let t=er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ug(n,e){let t=er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ng(n,e){let t=er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Fg(n,e){n.uniform1iv(this.addr,e)}function Bg(n,e){n.uniform2iv(this.addr,e)}function Og(n,e){n.uniform3iv(this.addr,e)}function kg(n,e){n.uniform4iv(this.addr,e)}function zg(n,e){n.uniform1uiv(this.addr,e)}function Hg(n,e){n.uniform2uiv(this.addr,e)}function Gg(n,e){n.uniform3uiv(this.addr,e)}function Vg(n,e){n.uniform4uiv(this.addr,e)}function Wg(n,e,t){let i=this.cache,s=e.length,r=gl(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||gd,r[a])}function Xg(n,e,t){let i=this.cache,s=e.length,r=gl(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||_d,r[a])}function qg(n,e,t){let i=this.cache,s=e.length,r=gl(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||yd,r[a])}function Yg(n,e,t){let i=this.cache,s=e.length,r=gl(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||xd,r[a])}function Zg(n){switch(n){case 5126:return Cg;case 35664:return Ig;case 35665:return Pg;case 35666:return Dg;case 35674:return Lg;case 35675:return Ug;case 35676:return Ng;case 5124:case 35670:return Fg;case 35667:case 35671:return Bg;case 35668:case 35672:return Og;case 35669:case 35673:return kg;case 5125:return zg;case 36294:return Hg;case 36295:return Gg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Yg}}var Yc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Rg(t.type)}},Zc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zg(t.type)}},$c=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},qc=/(\w+)(\])?(\[|\.)?/g;function sd(n,e){n.seq.push(e),n.map[e.id]=e}function $g(n,e,t){let i=n.name,s=i.length;for(qc.lastIndex=0;;){let r=qc.exec(i),a=qc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){sd(t,c===void 0?new Yc(o,n,e):new Zc(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new $c(o),sd(t,u)),t=u}}}var js=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);$g(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function rd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Jg=37297,Kg=0;function Qg(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var ad=new $e;function jg(n){at._getMatrix(ad,at.workingColorSpace,n);let e=`mat3( ${ad.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case br:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function od(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Qg(n.getShaderSource(e),o)}else return r}function ex(n,e){let t=jg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function tx(n,e){let t;switch(e){case yu:t="Linear";break;case vu:t="Reinhard";break;case Mu:t="Cineon";break;case Ao:t="ACESFilmic";break;case Eu:t="AgX";break;case wu:t="Neutral";break;case bu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fl=new I;function nx(){at.getLuminanceCoefficients(fl);let n=fl.x.toFixed(4),e=fl.y.toFixed(4),t=fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ix(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function sx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rx(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function aa(n){return n!==""}function ld(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(n){return n.replace(ax,lx)}var ox=new Map;function lx(n,e){let t=Qe[e];if(t===void 0){let i=ox.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jc(t)}var cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hd(n){return n.replace(cx,hx)}function hx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ud(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ux(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Qh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function dx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qi:case ji:e="ENVMAP_TYPE_CUBE";break;case ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ji:e="ENVMAP_MODE_REFRACTION";break}return e}function px(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case bc:e="ENVMAP_BLENDING_MULTIPLY";break;case xu:e="ENVMAP_BLENDING_MIX";break;case _u:e="ENVMAP_BLENDING_ADD";break}return e}function mx(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function gx(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=ux(t),c=dx(t),h=fx(t),u=px(t),d=mx(t),f=ix(t),p=sx(r),x=s.createProgram(),g,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(aa).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(aa).join(`
`),m.length>0&&(m+=`
`)):(g=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),m=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?Qe.tonemapping_pars_fragment:"",t.toneMapping!==ci?tx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,ex("linearToOutputTexel",t.outputColorSpace),nx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(aa).join(`
`)),a=Jc(a),a=ld(a,t),a=cd(a,t),o=Jc(o),o=ld(o,t),o=cd(o,t),a=hd(a),o=hd(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=M+g+a,_=M+m+o,S=rd(s,s.VERTEX_SHADER,y),T=rd(s,s.FRAGMENT_SHADER,_);s.attachShader(x,S),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(L){if(n.debug.checkShaderErrors){let P=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(S)||"",X=s.getShaderInfoLog(T)||"",$=P.trim(),N=z.trim(),te=X.trim(),V=!0,oe=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,S,T);else{let pe=od(s,S,"vertex"),_e=od(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+$+`
`+pe+`
`+_e)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(N===""||te==="")&&(oe=!1);oe&&(L.diagnostics={runnable:V,programLog:$,vertexShader:{log:N,prefix:g},fragmentShader:{log:te,prefix:m}})}s.deleteShader(S),s.deleteShader(T),C=new js(s,x),w=rx(s,x)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,Jg)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=T,this}var xx=0,Kc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Qc(e),t.set(e,i)),i}},Qc=class{constructor(e){this.id=xx++,this.code=e,this.usedTimes=0}};function _x(n,e,t,i,s,r,a){let o=new Tr,l=new Kc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,b,L,P,z){let X=P.fog,$=z.geometry,N=w.isMeshStandardMaterial?P.environment:null,te=(w.isMeshStandardMaterial?t:e).get(w.envMap||N),V=te&&te.mapping===ea?te.image.height:null,oe=p[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let pe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,_e=pe!==void 0?pe.length:0,Ne=0;$.morphAttributes.position!==void 0&&(Ne=1),$.morphAttributes.normal!==void 0&&(Ne=2),$.morphAttributes.color!==void 0&&(Ne=3);let ot,yt,ht,J;if(oe){let ut=Xn[oe];ot=ut.vertexShader,yt=ut.fragmentShader}else ot=w.vertexShader,yt=w.fragmentShader,l.update(w),ht=l.getVertexShaderID(w),J=l.getFragmentShaderID(w);let ne=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),Ge=z.isInstancedMesh===!0,Ie=z.isBatchedMesh===!0,rt=!!w.map,Qt=!!w.matcap,D=!!te,St=!!w.aoMap,Ze=!!w.lightMap,ze=!!w.bumpMap,we=!!w.normalMap,Tt=!!w.displacementMap,Se=!!w.emissiveMap,Ke=!!w.metalnessMap,Gt=!!w.roughnessMap,Ut=w.anisotropy>0,A=w.clearcoat>0,v=w.dispersion>0,O=w.iridescence>0,Z=w.sheen>0,ee=w.transmission>0,q=Ut&&!!w.anisotropyMap,Ce=A&&!!w.clearcoatMap,le=A&&!!w.clearcoatNormalMap,Te=A&&!!w.clearcoatRoughnessMap,Ae=O&&!!w.iridescenceMap,re=O&&!!w.iridescenceThicknessMap,me=Z&&!!w.sheenColorMap,ke=Z&&!!w.sheenRoughnessMap,Re=!!w.specularMap,de=!!w.specularColorMap,Je=!!w.specularIntensityMap,U=ee&&!!w.transmissionMap,ae=ee&&!!w.thicknessMap,ce=!!w.gradientMap,xe=!!w.alphaMap,ie=w.alphaTest>0,Q=!!w.alphaHash,be=!!w.extensions,Xe=ci;w.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Xe=n.toneMapping);let vt={shaderID:oe,shaderType:w.type,shaderName:w.name,vertexShader:ot,fragmentShader:yt,defines:w.defines,customVertexShaderID:ht,customFragmentShaderID:J,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ie,batchingColor:Ie&&z._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&z.instanceColor!==null,instancingMorph:Ge&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Vi,alphaToCoverage:!!w.alphaToCoverage,map:rt,matcap:Qt,envMap:D,envMapMode:D&&te.mapping,envMapCubeUVHeight:V,aoMap:St,lightMap:Ze,bumpMap:ze,normalMap:we,displacementMap:d&&Tt,emissiveMap:Se,normalMapObjectSpace:we&&w.normalMapType===Ru,normalMapTangentSpace:we&&w.normalMapType===Dc,metalnessMap:Ke,roughnessMap:Gt,anisotropy:Ut,anisotropyMap:q,clearcoat:A,clearcoatMap:Ce,clearcoatNormalMap:le,clearcoatRoughnessMap:Te,dispersion:v,iridescence:O,iridescenceMap:Ae,iridescenceThicknessMap:re,sheen:Z,sheenColorMap:me,sheenRoughnessMap:ke,specularMap:Re,specularColorMap:de,specularIntensityMap:Je,transmission:ee,transmissionMap:U,thicknessMap:ae,gradientMap:ce,opaque:w.transparent===!1&&w.blending===si&&w.alphaToCoverage===!1,alphaMap:xe,alphaTest:ie,alphaHash:Q,combine:w.combine,mapUv:rt&&x(w.map.channel),aoMapUv:St&&x(w.aoMap.channel),lightMapUv:Ze&&x(w.lightMap.channel),bumpMapUv:ze&&x(w.bumpMap.channel),normalMapUv:we&&x(w.normalMap.channel),displacementMapUv:Tt&&x(w.displacementMap.channel),emissiveMapUv:Se&&x(w.emissiveMap.channel),metalnessMapUv:Ke&&x(w.metalnessMap.channel),roughnessMapUv:Gt&&x(w.roughnessMap.channel),anisotropyMapUv:q&&x(w.anisotropyMap.channel),clearcoatMapUv:Ce&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:le&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:re&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:me&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:ke&&x(w.sheenRoughnessMap.channel),specularMapUv:Re&&x(w.specularMap.channel),specularColorMapUv:de&&x(w.specularColorMap.channel),specularIntensityMapUv:Je&&x(w.specularIntensityMap.channel),transmissionMapUv:U&&x(w.transmissionMap.channel),thicknessMapUv:ae&&x(w.thicknessMap.channel),alphaMapUv:xe&&x(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(we||Ut),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(rt||xe),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ne,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,decodeVideoTexture:rt&&w.map.isVideoTexture===!0&&at.getTransfer(w.map.colorSpace)===ft,decodeVideoTextureEmissive:Se&&w.emissiveMap.isVideoTexture===!0&&at.getTransfer(w.emissiveMap.colorSpace)===ft,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===It,flipSided:w.side===Jt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:be&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&w.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function m(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let L in w.defines)b.push(L),b.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(M(b,w),y(b,w),b.push(n.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function M(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function y(w,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),w.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),w.push(o.mask)}function _(w){let b=p[w.type],L;if(b){let P=Xn[b];L=ku.clone(P.uniforms)}else L=w.uniforms;return L}function S(w,b){let L;for(let P=0,z=h.length;P<z;P++){let X=h[P];if(X.cacheKey===b){L=X,++L.usedTimes;break}}return L===void 0&&(L=new gx(n,b,w,r),h.push(L)),L}function T(w){if(--w.usedTimes===0){let b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function R(w){l.remove(w)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:S,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:C}}function yx(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function vx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function dd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function fd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,d,f,p,x,g){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},n[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),e++,m}function o(u,d,f,p,x,g){let m=a(u,d,f,p,x,g);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(u,d,f,p,x,g){let m=a(u,d,f,p,x,g);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||vx),i.length>1&&i.sort(d||dd),s.length>1&&s.sort(d||dd)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Mx(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new fd,n.set(i,[a])):s>=r.length?(a=new fd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function bx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Be};break;case"SpotLight":t={position:new I,direction:new I,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function Ex(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var wx=0;function Sx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Tx(n){let e=new bx,t=Ex(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new _t,a=new _t;function o(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,M=0,y=0,_=0,S=0,T=0,R=0;c.sort(Sx);for(let w=0,b=c.length;w<b;w++){let L=c[w],P=L.color,z=L.intensity,X=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=P.r*z,u+=P.g*z,d+=P.b*z;else if(L.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(L.sh.coefficients[N],z);R++}else if(L.isDirectionalLight){let N=e.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let te=L.shadow,V=t.get(L);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=$,i.directionalShadowMatrix[f]=L.shadow.matrix,M++}i.directional[f]=N,f++}else if(L.isSpotLight){let N=e.get(L);N.position.setFromMatrixPosition(L.matrixWorld),N.color.copy(P).multiplyScalar(z),N.distance=X,N.coneCos=Math.cos(L.angle),N.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),N.decay=L.decay,i.spot[x]=N;let te=L.shadow;if(L.map&&(i.spotLightMap[S]=L.map,S++,te.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[x]=te.matrix,L.castShadow){let V=t.get(L);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=$,_++}x++}else if(L.isRectAreaLight){let N=e.get(L);N.color.copy(P).multiplyScalar(z),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=N,g++}else if(L.isPointLight){let N=e.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),N.distance=L.distance,N.decay=L.decay,L.castShadow){let te=L.shadow,V=t.get(L);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,V.shadowCameraNear=te.camera.near,V.shadowCameraFar=te.camera.far,i.pointShadow[p]=V,i.pointShadowMap[p]=$,i.pointShadowMatrix[p]=L.shadow.matrix,y++}i.point[p]=N,p++}else if(L.isHemisphereLight){let N=e.get(L);N.skyColor.copy(L.color).multiplyScalar(z),N.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[m]=N,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let C=i.hash;(C.directionalLength!==f||C.pointLength!==p||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==m||C.numDirectionalShadows!==M||C.numPointShadows!==y||C.numSpotShadows!==_||C.numSpotMaps!==S||C.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+S-T,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,C.directionalLength=f,C.pointLength=p,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=m,C.numDirectionalShadows=M,C.numPointShadows=y,C.numSpotShadows=_,C.numSpotMaps=S,C.numLightProbes=R,i.version=wx++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,g=h.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){let y=c[m];if(y.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(y.isSpotLight){let _=i.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let _=i.rectArea[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){let _=i.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:i}}function pd(n){let e=new Tx(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Ax(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new pd(n),e.set(s,[o])):r>=a.length?(o=new pd(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ix(n,e,t){let i=new Os,s=new ue,r=new ue,a=new dt,o=new ao({depthPacking:Au}),l=new oo,c={},h=t.maxTextureSize,u={[ii]:Jt,[Jt]:ii,[It]:It},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Rx,fragmentShader:Cx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Dt;p.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Y(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yc;let m=this.type;this.render=function(T,R,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let w=n.getRenderTarget(),b=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),P=n.state;P.setBlending(li),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let z=m!==Vn&&this.type===Vn,X=m===Vn&&this.type!==Vn;for(let $=0,N=T.length;$<N;$++){let te=T[$],V=te.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let oe=V.getFrameExtents();if(s.multiply(oe),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,V.mapSize.y=r.y)),V.map===null||z===!0||X===!0){let _e=this.type!==Vn?{minFilter:wn,magFilter:wn}:{};V.map!==null&&V.map.dispose(),V.map=new Hn(s.x,s.y,_e),V.map.texture.name=te.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let pe=V.getViewportCount();for(let _e=0;_e<pe;_e++){let Ne=V.getViewport(_e);a.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),P.viewport(a),V.updateMatrices(te,_e),i=V.getFrustum(),_(R,C,V.camera,te,this.type)}V.isPointLightShadow!==!0&&this.type===Vn&&M(V,C),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(w,b,L)};function M(T,R){let C=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Hn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,C,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,C,f,x,null)}function y(T,R,C,w){let b=null,L=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)b=L;else if(b=C.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let P=b.uuid,z=R.uuid,X=c[P];X===void 0&&(X={},c[P]=X);let $=X[z];$===void 0&&($=b.clone(),X[z]=$,R.addEventListener("dispose",S)),b=$}if(b.visible=R.visible,b.wireframe=R.wireframe,w===Vn?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let P=n.properties.get(b);P.light=C}return b}function _(T,R,C,w,b){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Vn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let z=e.update(T),X=T.material;if(Array.isArray(X)){let $=z.groups;for(let N=0,te=$.length;N<te;N++){let V=$[N],oe=X[V.materialIndex];if(oe&&oe.visible){let pe=y(T,oe,w,b);T.onBeforeShadow(n,T,R,C,z,pe,V),n.renderBufferDirect(C,null,z,pe,T,V),T.onAfterShadow(n,T,R,C,z,pe,V)}}}else if(X.visible){let $=y(T,X,w,b);T.onBeforeShadow(n,T,R,C,z,$,null),n.renderBufferDirect(C,null,z,$,T,null),T.onAfterShadow(n,T,R,C,z,$,null)}}let P=T.children;for(let z=0,X=P.length;z<X;z++)_(P[z],R,C,w,b)}function S(T){T.target.removeEventListener("dispose",S);for(let C in c){let w=c[C],b=T.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var Px={[vo]:Mo,[bo]:So,[Eo]:To,[Gi]:wo,[Mo]:vo,[So]:bo,[To]:Eo,[wo]:Gi};function Dx(n,e){function t(){let U=!1,ae=new dt,ce=null,xe=new dt(0,0,0,0);return{setMask:function(ie){ce!==ie&&!U&&(n.colorMask(ie,ie,ie,ie),ce=ie)},setLocked:function(ie){U=ie},setClear:function(ie,Q,be,Xe,vt){vt===!0&&(ie*=Xe,Q*=Xe,be*=Xe),ae.set(ie,Q,be,Xe),xe.equals(ae)===!1&&(n.clearColor(ie,Q,be,Xe),xe.copy(ae))},reset:function(){U=!1,ce=null,xe.set(-1,0,0,0)}}}function i(){let U=!1,ae=!1,ce=null,xe=null,ie=null;return{setReversed:function(Q){if(ae!==Q){let be=e.get("EXT_clip_control");Q?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ae=Q;let Xe=ie;ie=null,this.setClear(Xe)}},getReversed:function(){return ae},setTest:function(Q){Q?ne(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(Q){ce!==Q&&!U&&(n.depthMask(Q),ce=Q)},setFunc:function(Q){if(ae&&(Q=Px[Q]),xe!==Q){switch(Q){case vo:n.depthFunc(n.NEVER);break;case Mo:n.depthFunc(n.ALWAYS);break;case bo:n.depthFunc(n.LESS);break;case Gi:n.depthFunc(n.LEQUAL);break;case Eo:n.depthFunc(n.EQUAL);break;case wo:n.depthFunc(n.GEQUAL);break;case So:n.depthFunc(n.GREATER);break;case To:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=Q}},setLocked:function(Q){U=Q},setClear:function(Q){ie!==Q&&(ae&&(Q=1-Q),n.clearDepth(Q),ie=Q)},reset:function(){U=!1,ce=null,xe=null,ie=null,ae=!1}}}function s(){let U=!1,ae=null,ce=null,xe=null,ie=null,Q=null,be=null,Xe=null,vt=null;return{setTest:function(ut){U||(ut?ne(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(ut){ae!==ut&&!U&&(n.stencilMask(ut),ae=ut)},setFunc:function(ut,Zn,On){(ce!==ut||xe!==Zn||ie!==On)&&(n.stencilFunc(ut,Zn,On),ce=ut,xe=Zn,ie=On)},setOp:function(ut,Zn,On){(Q!==ut||be!==Zn||Xe!==On)&&(n.stencilOp(ut,Zn,On),Q=ut,be=Zn,Xe=On)},setLocked:function(ut){U=ut},setClear:function(ut){vt!==ut&&(n.clearStencil(ut),vt=ut)},reset:function(){U=!1,ae=null,ce=null,xe=null,ie=null,Q=null,be=null,Xe=null,vt=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,M=null,y=null,_=null,S=null,T=null,R=new Be(0,0,0),C=0,w=!1,b=null,L=null,P=null,z=null,X=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,te=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(V)[1]),N=te>=1):V.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),N=te>=2);let oe=null,pe={},_e=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),ot=new dt().fromArray(_e),yt=new dt().fromArray(Ne);function ht(U,ae,ce,xe){let ie=new Uint8Array(4),Q=n.createTexture();n.bindTexture(U,Q),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let be=0;be<ce;be++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,ie):n.texImage2D(ae+be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ie);return Q}let J={};J[n.TEXTURE_2D]=ht(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=ht(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=ht(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=ht(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(n.DEPTH_TEST),a.setFunc(Gi),ze(!1),we(_c),ne(n.CULL_FACE),St(li);function ne(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function ye(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Ge(U,ae){return u[U]!==ae?(n.bindFramebuffer(U,ae),u[U]=ae,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ae),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ie(U,ae){let ce=f,xe=!1;if(U){ce=d.get(ae),ce===void 0&&(ce=[],d.set(ae,ce));let ie=U.textures;if(ce.length!==ie.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,be=ie.length;Q<be;Q++)ce[Q]=n.COLOR_ATTACHMENT0+Q;ce.length=ie.length,xe=!0}}else ce[0]!==n.BACK&&(ce[0]=n.BACK,xe=!0);xe&&n.drawBuffers(ce)}function rt(U){return p!==U?(n.useProgram(U),p=U,!0):!1}let Qt={[wi]:n.FUNC_ADD,[eu]:n.FUNC_SUBTRACT,[tu]:n.FUNC_REVERSE_SUBTRACT};Qt[nu]=n.MIN,Qt[iu]=n.MAX;let D={[su]:n.ZERO,[ru]:n.ONE,[au]:n.SRC_COLOR,[Wa]:n.SRC_ALPHA,[du]:n.SRC_ALPHA_SATURATE,[hu]:n.DST_COLOR,[lu]:n.DST_ALPHA,[ou]:n.ONE_MINUS_SRC_COLOR,[Xa]:n.ONE_MINUS_SRC_ALPHA,[uu]:n.ONE_MINUS_DST_COLOR,[cu]:n.ONE_MINUS_DST_ALPHA,[fu]:n.CONSTANT_COLOR,[pu]:n.ONE_MINUS_CONSTANT_COLOR,[mu]:n.CONSTANT_ALPHA,[gu]:n.ONE_MINUS_CONSTANT_ALPHA};function St(U,ae,ce,xe,ie,Q,be,Xe,vt,ut){if(U===li){x===!0&&(ye(n.BLEND),x=!1);return}if(x===!1&&(ne(n.BLEND),x=!0),U!==jh){if(U!==g||ut!==w){if((m!==wi||_!==wi)&&(n.blendEquation(n.FUNC_ADD),m=wi,_=wi),ut)switch(U){case si:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ki:n.blendFunc(n.ONE,n.ONE);break;case vc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case si:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case vc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,y=null,S=null,T=null,R.set(0,0,0),C=0,g=U,w=ut}return}ie=ie||ae,Q=Q||ce,be=be||xe,(ae!==m||ie!==_)&&(n.blendEquationSeparate(Qt[ae],Qt[ie]),m=ae,_=ie),(ce!==M||xe!==y||Q!==S||be!==T)&&(n.blendFuncSeparate(D[ce],D[xe],D[Q],D[be]),M=ce,y=xe,S=Q,T=be),(Xe.equals(R)===!1||vt!==C)&&(n.blendColor(Xe.r,Xe.g,Xe.b,vt),R.copy(Xe),C=vt),g=U,w=!1}function Ze(U,ae){U.side===It?ye(n.CULL_FACE):ne(n.CULL_FACE);let ce=U.side===Jt;ae&&(ce=!ce),ze(ce),U.blending===si&&U.transparent===!1?St(li):St(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let xe=U.stencilWrite;o.setTest(xe),xe&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Se(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(U){b!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),b=U)}function we(U){U!==Jh?(ne(n.CULL_FACE),U!==L&&(U===_c?n.cullFace(n.BACK):U===Kh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),L=U}function Tt(U){U!==P&&(N&&n.lineWidth(U),P=U)}function Se(U,ae,ce){U?(ne(n.POLYGON_OFFSET_FILL),(z!==ae||X!==ce)&&(n.polygonOffset(ae,ce),z=ae,X=ce)):ye(n.POLYGON_OFFSET_FILL)}function Ke(U){U?ne(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function Gt(U){U===void 0&&(U=n.TEXTURE0+$-1),oe!==U&&(n.activeTexture(U),oe=U)}function Ut(U,ae,ce){ce===void 0&&(oe===null?ce=n.TEXTURE0+$-1:ce=oe);let xe=pe[ce];xe===void 0&&(xe={type:void 0,texture:void 0},pe[ce]=xe),(xe.type!==U||xe.texture!==ae)&&(oe!==ce&&(n.activeTexture(ce),oe=ce),n.bindTexture(U,ae||J[U]),xe.type=U,xe.texture=ae)}function A(){let U=pe[oe];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(U){ot.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ot.copy(U))}function ke(U){yt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),yt.copy(U))}function Re(U,ae){let ce=c.get(ae);ce===void 0&&(ce=new WeakMap,c.set(ae,ce));let xe=ce.get(U);xe===void 0&&(xe=n.getUniformBlockIndex(ae,U.name),ce.set(U,xe))}function de(U,ae){let xe=c.get(ae).get(U);l.get(ae)!==xe&&(n.uniformBlockBinding(ae,xe,U.__bindingPointIndex),l.set(ae,xe))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},oe=null,pe={},u={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,M=null,y=null,_=null,S=null,T=null,R=new Be(0,0,0),C=0,w=!1,b=null,L=null,P=null,z=null,X=null,ot.set(0,0,n.canvas.width,n.canvas.height),yt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:ye,bindFramebuffer:Ge,drawBuffers:Ie,useProgram:rt,setBlending:St,setMaterial:Ze,setFlipSided:ze,setCullFace:we,setLineWidth:Tt,setPolygonOffset:Se,setScissorTest:Ke,activeTexture:Gt,bindTexture:Ut,unbindTexture:A,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:Ae,texImage3D:re,updateUBOMapping:Re,uniformBlockBinding:de,texStorage2D:le,texStorage3D:Te,texSubImage2D:Z,texSubImage3D:ee,compressedTexSubImage2D:q,compressedTexSubImage3D:Ce,scissor:me,viewport:ke,reset:Je}}function Lx(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,v){return f?new OffscreenCanvas(A,v):Ds("canvas")}function x(A,v,O){let Z=1,ee=Ut(A);if((ee.width>O||ee.height>O)&&(Z=O/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let q=Math.floor(Z*ee.width),Ce=Math.floor(Z*ee.height);u===void 0&&(u=p(q,Ce));let le=v?p(q,Ce):u;return le.width=q,le.height=Ce,le.getContext("2d").drawImage(A,0,0,q,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+q+"x"+Ce+")."),le}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function g(A){return A.generateMipmaps}function m(A){n.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(A,v,O,Z,ee=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=v;if(v===n.RED&&(O===n.FLOAT&&(q=n.R32F),O===n.HALF_FLOAT&&(q=n.R16F),O===n.UNSIGNED_BYTE&&(q=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.R8UI),O===n.UNSIGNED_SHORT&&(q=n.R16UI),O===n.UNSIGNED_INT&&(q=n.R32UI),O===n.BYTE&&(q=n.R8I),O===n.SHORT&&(q=n.R16I),O===n.INT&&(q=n.R32I)),v===n.RG&&(O===n.FLOAT&&(q=n.RG32F),O===n.HALF_FLOAT&&(q=n.RG16F),O===n.UNSIGNED_BYTE&&(q=n.RG8)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RG8UI),O===n.UNSIGNED_SHORT&&(q=n.RG16UI),O===n.UNSIGNED_INT&&(q=n.RG32UI),O===n.BYTE&&(q=n.RG8I),O===n.SHORT&&(q=n.RG16I),O===n.INT&&(q=n.RG32I)),v===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGB8UI),O===n.UNSIGNED_SHORT&&(q=n.RGB16UI),O===n.UNSIGNED_INT&&(q=n.RGB32UI),O===n.BYTE&&(q=n.RGB8I),O===n.SHORT&&(q=n.RGB16I),O===n.INT&&(q=n.RGB32I)),v===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),O===n.UNSIGNED_INT&&(q=n.RGBA32UI),O===n.BYTE&&(q=n.RGBA8I),O===n.SHORT&&(q=n.RGBA16I),O===n.INT&&(q=n.RGBA32I)),v===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),v===n.RGBA){let Ce=ee?br:at.getTransfer(Z);O===n.FLOAT&&(q=n.RGBA32F),O===n.HALF_FLOAT&&(q=n.RGBA16F),O===n.UNSIGNED_BYTE&&(q=Ce===ft?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function _(A,v){let O;return A?v===null||v===Ii||v===$s?O=n.DEPTH24_STENCIL8:v===Wn?O=n.DEPTH32F_STENCIL8:v===Ys&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ii||v===$s?O=n.DEPTH_COMPONENT24:v===Wn?O=n.DEPTH_COMPONENT32F:v===Ys&&(O=n.DEPTH_COMPONENT16),O}function S(A,v){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==wn&&A.minFilter!==Pn?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function T(A){let v=A.target;v.removeEventListener("dispose",T),C(v),v.isVideoTexture&&h.delete(v)}function R(A){let v=A.target;v.removeEventListener("dispose",R),b(v)}function C(A){let v=i.get(A);if(v.__webglInit===void 0)return;let O=A.source,Z=d.get(O);if(Z){let ee=Z[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(A),Object.keys(Z).length===0&&d.delete(O)}i.remove(A)}function w(A){let v=i.get(A);n.deleteTexture(v.__webglTexture);let O=A.source,Z=d.get(O);delete Z[v.__cacheKey],a.memory.textures--}function b(A){let v=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let ee=0;ee<v.__webglFramebuffer[Z].length;ee++)n.deleteFramebuffer(v.__webglFramebuffer[Z][ee]);else n.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[Z]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=A.textures;for(let Z=0,ee=O.length;Z<ee;Z++){let q=i.get(O[Z]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(O[Z])}i.remove(A)}let L=0;function P(){L=0}function z(){let A=L;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function X(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function $(A,v){let O=i.get(A);if(A.isVideoTexture&&Ke(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){let Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(O,A,v);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function N(A,v){let O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){J(O,A,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function te(A,v){let O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){J(O,A,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function V(A,v){let O=i.get(A);if(A.version>0&&O.__version!==A.version){ne(O,A,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}let oe={[qa]:n.REPEAT,[Ei]:n.CLAMP_TO_EDGE,[Ya]:n.MIRRORED_REPEAT},pe={[wn]:n.NEAREST,[Su]:n.NEAREST_MIPMAP_NEAREST,[ta]:n.NEAREST_MIPMAP_LINEAR,[Pn]:n.LINEAR,[Io]:n.LINEAR_MIPMAP_NEAREST,[Ci]:n.LINEAR_MIPMAP_LINEAR},_e={[Cu]:n.NEVER,[Nu]:n.ALWAYS,[Iu]:n.LESS,[Lc]:n.LEQUAL,[Pu]:n.EQUAL,[Uu]:n.GEQUAL,[Du]:n.GREATER,[Lu]:n.NOTEQUAL};function Ne(A,v){if(v.type===Wn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Pn||v.magFilter===Io||v.magFilter===ta||v.magFilter===Ci||v.minFilter===Pn||v.minFilter===Io||v.minFilter===ta||v.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,oe[v.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,oe[v.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,oe[v.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,pe[v.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,pe[v.minFilter]),v.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,_e[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===wn||v.minFilter!==ta&&v.minFilter!==Ci||v.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ot(A,v){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",T));let Z=v.source,ee=d.get(Z);ee===void 0&&(ee={},d.set(Z,ee));let q=X(v);if(q!==A.__cacheKey){ee[q]===void 0&&(ee[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ee[q].usedTimes++;let Ce=ee[A.__cacheKey];Ce!==void 0&&(ee[A.__cacheKey].usedTimes--,Ce.usedTimes===0&&w(v)),A.__cacheKey=q,A.__webglTexture=ee[q].texture}return O}function yt(A,v,O){return Math.floor(Math.floor(A/O)/v)}function ht(A,v,O,Z){let q=A.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,O,Z,v.data);else{q.sort((re,me)=>re.start-me.start);let Ce=0;for(let re=1;re<q.length;re++){let me=q[Ce],ke=q[re],Re=me.start+me.count,de=yt(ke.start,v.width,4),Je=yt(me.start,v.width,4);ke.start<=Re+1&&de===Je&&yt(ke.start+ke.count-1,v.width,4)===de?me.count=Math.max(me.count,ke.start+ke.count-me.start):(++Ce,q[Ce]=ke)}q.length=Ce+1;let le=n.getParameter(n.UNPACK_ROW_LENGTH),Te=n.getParameter(n.UNPACK_SKIP_PIXELS),Ae=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let re=0,me=q.length;re<me;re++){let ke=q[re],Re=Math.floor(ke.start/4),de=Math.ceil(ke.count/4),Je=Re%v.width,U=Math.floor(Re/v.width),ae=de,ce=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Je,U,ae,ce,O,Z,v.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,le),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ae)}}function J(A,v,O){let Z=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=n.TEXTURE_3D);let ee=ot(A,v),q=v.source;t.bindTexture(Z,A.__webglTexture,n.TEXTURE0+O);let Ce=i.get(q);if(q.version!==Ce.__version||ee===!0){t.activeTexture(n.TEXTURE0+O);let le=at.getPrimaries(at.workingColorSpace),Te=v.colorSpace===hi?null:at.getPrimaries(v.colorSpace),Ae=v.colorSpace===hi||le===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let re=x(v.image,!1,s.maxTextureSize);re=Gt(v,re);let me=r.convert(v.format,v.colorSpace),ke=r.convert(v.type),Re=y(v.internalFormat,me,ke,v.colorSpace,v.isVideoTexture);Ne(Z,v);let de,Je=v.mipmaps,U=v.isVideoTexture!==!0,ae=Ce.__version===void 0||ee===!0,ce=q.dataReady,xe=S(v,re);if(v.isDepthTexture)Re=_(v.format===Js,v.type),ae&&(U?t.texStorage2D(n.TEXTURE_2D,1,Re,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Re,re.width,re.height,0,me,ke,null));else if(v.isDataTexture)if(Je.length>0){U&&ae&&t.texStorage2D(n.TEXTURE_2D,xe,Re,Je[0].width,Je[0].height);for(let ie=0,Q=Je.length;ie<Q;ie++)de=Je[ie],U?ce&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,de.width,de.height,me,ke,de.data):t.texImage2D(n.TEXTURE_2D,ie,Re,de.width,de.height,0,me,ke,de.data);v.generateMipmaps=!1}else U?(ae&&t.texStorage2D(n.TEXTURE_2D,xe,Re,re.width,re.height),ce&&ht(v,re,me,ke)):t.texImage2D(n.TEXTURE_2D,0,Re,re.width,re.height,0,me,ke,re.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){U&&ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Re,Je[0].width,Je[0].height,re.depth);for(let ie=0,Q=Je.length;ie<Q;ie++)if(de=Je[ie],v.format!==Sn)if(me!==null)if(U){if(ce)if(v.layerUpdates.size>0){let be=zc(de.width,de.height,v.format,v.type);for(let Xe of v.layerUpdates){let vt=de.data.subarray(Xe*be/de.data.BYTES_PER_ELEMENT,(Xe+1)*be/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,Xe,de.width,de.height,1,me,vt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,re.depth,me,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Re,de.width,de.height,re.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,re.depth,me,ke,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Re,de.width,de.height,re.depth,0,me,ke,de.data)}else{U&&ae&&t.texStorage2D(n.TEXTURE_2D,xe,Re,Je[0].width,Je[0].height);for(let ie=0,Q=Je.length;ie<Q;ie++)de=Je[ie],v.format!==Sn?me!==null?U?ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,de.width,de.height,me,de.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Re,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ce&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,de.width,de.height,me,ke,de.data):t.texImage2D(n.TEXTURE_2D,ie,Re,de.width,de.height,0,me,ke,de.data)}else if(v.isDataArrayTexture)if(U){if(ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Re,re.width,re.height,re.depth),ce)if(v.layerUpdates.size>0){let ie=zc(re.width,re.height,v.format,v.type);for(let Q of v.layerUpdates){let be=re.data.subarray(Q*ie/re.data.BYTES_PER_ELEMENT,(Q+1)*ie/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,me,ke,be)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,me,ke,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,re.width,re.height,re.depth,0,me,ke,re.data);else if(v.isData3DTexture)U?(ae&&t.texStorage3D(n.TEXTURE_3D,xe,Re,re.width,re.height,re.depth),ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,me,ke,re.data)):t.texImage3D(n.TEXTURE_3D,0,Re,re.width,re.height,re.depth,0,me,ke,re.data);else if(v.isFramebufferTexture){if(ae)if(U)t.texStorage2D(n.TEXTURE_2D,xe,Re,re.width,re.height);else{let ie=re.width,Q=re.height;for(let be=0;be<xe;be++)t.texImage2D(n.TEXTURE_2D,be,Re,ie,Q,0,me,ke,null),ie>>=1,Q>>=1}}else if(Je.length>0){if(U&&ae){let ie=Ut(Je[0]);t.texStorage2D(n.TEXTURE_2D,xe,Re,ie.width,ie.height)}for(let ie=0,Q=Je.length;ie<Q;ie++)de=Je[ie],U?ce&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,me,ke,de):t.texImage2D(n.TEXTURE_2D,ie,Re,me,ke,de);v.generateMipmaps=!1}else if(U){if(ae){let ie=Ut(re);t.texStorage2D(n.TEXTURE_2D,xe,Re,ie.width,ie.height)}ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,ke,re)}else t.texImage2D(n.TEXTURE_2D,0,Re,me,ke,re);g(v)&&m(Z),Ce.__version=q.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function ne(A,v,O){if(v.image.length!==6)return;let Z=ot(A,v),ee=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+O);let q=i.get(ee);if(ee.version!==q.__version||Z===!0){t.activeTexture(n.TEXTURE0+O);let Ce=at.getPrimaries(at.workingColorSpace),le=v.colorSpace===hi?null:at.getPrimaries(v.colorSpace),Te=v.colorSpace===hi||Ce===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Ae=v.isCompressedTexture||v.image[0].isCompressedTexture,re=v.image[0]&&v.image[0].isDataTexture,me=[];for(let Q=0;Q<6;Q++)!Ae&&!re?me[Q]=x(v.image[Q],!0,s.maxCubemapSize):me[Q]=re?v.image[Q].image:v.image[Q],me[Q]=Gt(v,me[Q]);let ke=me[0],Re=r.convert(v.format,v.colorSpace),de=r.convert(v.type),Je=y(v.internalFormat,Re,de,v.colorSpace),U=v.isVideoTexture!==!0,ae=q.__version===void 0||Z===!0,ce=ee.dataReady,xe=S(v,ke);Ne(n.TEXTURE_CUBE_MAP,v);let ie;if(Ae){U&&ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Je,ke.width,ke.height);for(let Q=0;Q<6;Q++){ie=me[Q].mipmaps;for(let be=0;be<ie.length;be++){let Xe=ie[be];v.format!==Sn?Re!==null?U?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,0,0,Xe.width,Xe.height,Re,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,Je,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,0,0,Xe.width,Xe.height,Re,de,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,Je,Xe.width,Xe.height,0,Re,de,Xe.data)}}}else{if(ie=v.mipmaps,U&&ae){ie.length>0&&xe++;let Q=Ut(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Je,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){U?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,me[Q].width,me[Q].height,Re,de,me[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Je,me[Q].width,me[Q].height,0,Re,de,me[Q].data);for(let be=0;be<ie.length;be++){let vt=ie[be].image[Q].image;U?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,0,0,vt.width,vt.height,Re,de,vt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,Je,vt.width,vt.height,0,Re,de,vt.data)}}else{U?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Re,de,me[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Je,Re,de,me[Q]);for(let be=0;be<ie.length;be++){let Xe=ie[be];U?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,0,0,Re,de,Xe.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,Je,Re,de,Xe.image[Q])}}}g(v)&&m(n.TEXTURE_CUBE_MAP),q.__version=ee.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function ye(A,v,O,Z,ee,q){let Ce=r.convert(O.format,O.colorSpace),le=r.convert(O.type),Te=y(O.internalFormat,Ce,le,O.colorSpace),Ae=i.get(v),re=i.get(O);if(re.__renderTarget=v,!Ae.__hasExternalTextures){let me=Math.max(1,v.width>>q),ke=Math.max(1,v.height>>q);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,q,Te,me,ke,v.depth,0,Ce,le,null):t.texImage2D(ee,q,Te,me,ke,0,Ce,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Se(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ee,re.__webglTexture,0,Tt(v)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ee,re.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(A,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,A),v.depthBuffer){let Z=v.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,q=_(v.stencilBuffer,ee),Ce=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=Tt(v);Se(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,q,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,q,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,q,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,A)}else{let Z=v.textures;for(let ee=0;ee<Z.length;ee++){let q=Z[ee],Ce=r.convert(q.format,q.colorSpace),le=r.convert(q.type),Te=y(q.internalFormat,Ce,le,q.colorSpace),Ae=Tt(v);O&&Se(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,Te,v.width,v.height):Se(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,Te,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Te,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=i.get(v.depthTexture);Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);let ee=Z.__webglTexture,q=Tt(v);if(v.depthTexture.format===Ps)Se(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(v.depthTexture.format===Js)Se(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function rt(A){let v=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let Z=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){let ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=Z}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let Z=A.texture.mipmaps;Z&&Z.length>0?Ie(v.__webglFramebuffer[0],A):Ie(v.__webglFramebuffer,A)}else if(O){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=n.createRenderbuffer(),Ge(v.__webglDepthbuffer[Z],A,!1);else{let ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,q)}}else{let Z=A.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Ge(v.__webglDepthbuffer,A,!1);else{let ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qt(A,v,O){let Z=i.get(A);v!==void 0&&ye(Z.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&rt(A)}function D(A){let v=A.texture,O=i.get(A),Z=i.get(v);A.addEventListener("dispose",R);let ee=A.textures,q=A.isWebGLCubeRenderTarget===!0,Ce=ee.length>1;if(Ce||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=v.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[le]=[];for(let Te=0;Te<v.mipmaps.length;Te++)O.__webglFramebuffer[le][Te]=n.createFramebuffer()}else O.__webglFramebuffer[le]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)O.__webglFramebuffer[le]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let le=0,Te=ee.length;le<Te;le++){let Ae=i.get(ee[le]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&Se(A)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){let Te=ee[le];O.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[le]);let Ae=r.convert(Te.format,Te.colorSpace),re=r.convert(Te.type),me=y(Te.internalFormat,Ae,re,Te.colorSpace,A.isXRRenderTarget===!0),ke=Tt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,me,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,O.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Ge(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,v);for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)ye(O.__webglFramebuffer[le][Te],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te);else ye(O.__webglFramebuffer[le],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(v)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let le=0,Te=ee.length;le<Te;le++){let Ae=ee[le],re=i.get(Ae),me=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(me=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,re.__webglTexture),Ne(me,Ae),ye(O.__webglFramebuffer,A,Ae,n.COLOR_ATTACHMENT0+le,me,0),g(Ae)&&m(me)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,Z.__webglTexture),Ne(le,v),v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)ye(O.__webglFramebuffer[Te],A,v,n.COLOR_ATTACHMENT0,le,Te);else ye(O.__webglFramebuffer,A,v,n.COLOR_ATTACHMENT0,le,0);g(v)&&m(le),t.unbindTexture()}A.depthBuffer&&rt(A)}function St(A){let v=A.textures;for(let O=0,Z=v.length;O<Z;O++){let ee=v[O];if(g(ee)){let q=M(A),Ce=i.get(ee).__webglTexture;t.bindTexture(q,Ce),m(q),t.unbindTexture()}}}let Ze=[],ze=[];function we(A){if(A.samples>0){if(Se(A)===!1){let v=A.textures,O=A.width,Z=A.height,ee=n.COLOR_BUFFER_BIT,q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(A),le=v.length>1;if(le)for(let Ae=0;Ae<v.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);let Te=A.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ae=0;Ae<v.length;Ae++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ae]);let re=i.get(v[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,O,Z,0,0,O,Z,ee,n.NEAREST),l===!0&&(Ze.length=0,ze.length=0,Ze.push(n.COLOR_ATTACHMENT0+Ae),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ze.push(q),ze.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let Ae=0;Ae<v.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ae]);let re=i.get(v[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let v=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Tt(A){return Math.min(s.maxSamples,A.samples)}function Se(A){let v=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ke(A){let v=a.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function Gt(A,v){let O=A.colorSpace,Z=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Vi&&O!==hi&&(at.getTransfer(O)===ft?(Z!==Sn||ee!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Ut(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=P,this.setTexture2D=$,this.setTexture2DArray=N,this.setTexture3D=te,this.setTextureCube=V,this.rebindTextures=Qt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Se}function Ux(n,e){function t(i,s=hi){let r,a=at.getTransfer(s);if(i===Nn)return n.UNSIGNED_BYTE;if(i===Do)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Lo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Tc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ac)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===wc)return n.BYTE;if(i===Sc)return n.SHORT;if(i===Ys)return n.UNSIGNED_SHORT;if(i===Po)return n.INT;if(i===Ii)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===Zs)return n.HALF_FLOAT;if(i===Rc)return n.ALPHA;if(i===Cc)return n.RGB;if(i===Sn)return n.RGBA;if(i===Ps)return n.DEPTH_COMPONENT;if(i===Js)return n.DEPTH_STENCIL;if(i===Ic)return n.RED;if(i===Uo)return n.RED_INTEGER;if(i===Pc)return n.RG;if(i===No)return n.RG_INTEGER;if(i===Fo)return n.RGBA_INTEGER;if(i===na||i===ia||i===sa||i===ra)if(a===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bo||i===Oo||i===ko||i===zo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Bo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ko)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ho||i===Go||i===Vo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ho||i===Go)return a===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Vo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wo||i===Xo||i===qo||i===Yo||i===Zo||i===$o||i===Jo||i===Ko||i===Qo||i===jo||i===el||i===tl||i===nl||i===il)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$o)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ko)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===el)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===il)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sl||i===rl||i===al)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===sl)return a===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ol||i===ll||i===cl||i===hl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ol)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,jc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Br(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ln({vertexShader:Nx,fragmentShader:Fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Y(new on(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},eh=class extends ri{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new jc,m={},M=t.getContextAttributes(),y=null,_=null,S=[],T=[],R=new ue,C=null,w=new $t;w.viewport=new dt;let b=new $t;b.viewport=new dt;let L=[w,b],P=new yo,z=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ne=S[J];return ne===void 0&&(ne=new Ns,S[J]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(J){let ne=S[J];return ne===void 0&&(ne=new Ns,S[J]=ne),ne.getGripSpace()},this.getHand=function(J){let ne=S[J];return ne===void 0&&(ne=new Ns,S[J]=ne),ne.getHandSpace()};function $(J){let ne=T.indexOf(J.inputSource);if(ne===-1)return;let ye=S[ne];ye!==void 0&&(ye.update(J.inputSource,J.frame,c||a),ye.dispatchEvent({type:J.type,data:J.inputSource}))}function N(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",te);for(let J=0;J<S.length;J++){let ne=T[J];ne!==null&&(T[J]=null,S[J].disconnect(ne))}z=null,X=null,g.reset();for(let J in m)delete m[J];e.setRenderTarget(y),f=null,d=null,u=null,s=null,_=null,ht.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",N),s.addEventListener("inputsourceschange",te),M.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ge=null,Ie=null;M.depth&&(Ie=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=M.stencil?Js:Ps,Ge=M.stencil?$s:Ii);let rt={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(rt),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Hn(d.textureWidth,d.textureHeight,{format:Sn,type:Nn,depthTexture:new Fr(d.textureWidth,d.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ye={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Hn(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ht.setContext(s),ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(J){for(let ne=0;ne<J.removed.length;ne++){let ye=J.removed[ne],Ge=T.indexOf(ye);Ge>=0&&(T[Ge]=null,S[Ge].disconnect(ye))}for(let ne=0;ne<J.added.length;ne++){let ye=J.added[ne],Ge=T.indexOf(ye);if(Ge===-1){for(let rt=0;rt<S.length;rt++)if(rt>=T.length){T.push(ye),Ge=rt;break}else if(T[rt]===null){T[rt]=ye,Ge=rt;break}if(Ge===-1)break}let Ie=S[Ge];Ie&&Ie.connect(ye)}}let V=new I,oe=new I;function pe(J,ne,ye){V.setFromMatrixPosition(ne.matrixWorld),oe.setFromMatrixPosition(ye.matrixWorld);let Ge=V.distanceTo(oe),Ie=ne.projectionMatrix.elements,rt=ye.projectionMatrix.elements,Qt=Ie[14]/(Ie[10]-1),D=Ie[14]/(Ie[10]+1),St=(Ie[9]+1)/Ie[5],Ze=(Ie[9]-1)/Ie[5],ze=(Ie[8]-1)/Ie[0],we=(rt[8]+1)/rt[0],Tt=Qt*ze,Se=Qt*we,Ke=Ge/(-ze+we),Gt=Ke*-ze;if(ne.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Gt),J.translateZ(Ke),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ie[10]===-1)J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let Ut=Qt+Ke,A=D+Ke,v=Tt-Gt,O=Se+(Ge-Gt),Z=St*D/A*Ut,ee=Ze*D/A*Ut;J.projectionMatrix.makePerspective(v,O,Z,ee,Ut,A),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function _e(J,ne){ne===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ne.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ne=J.near,ye=J.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),P.near=b.near=w.near=ne,P.far=b.far=w.far=ye,(z!==P.near||X!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),z=P.near,X=P.far),P.layers.mask=J.layers.mask|6,w.layers.mask=P.layers.mask&3,b.layers.mask=P.layers.mask&5;let Ge=J.parent,Ie=P.cameras;_e(P,Ge);for(let rt=0;rt<Ie.length;rt++)_e(Ie[rt],Ge);Ie.length===2?pe(P,w,b):P.projectionMatrix.copy(w.projectionMatrix),Ne(J,P,Ge)};function Ne(J,ne,ye){ye===null?J.matrix.copy(ne.matrixWorld):(J.matrix.copy(ye.matrixWorld),J.matrix.invert(),J.matrix.multiply(ne.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ja*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(J){return m[J]};let ot=null;function yt(J,ne){if(h=ne.getViewerPose(c||a),p=ne,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Ge=!1;ye.length!==P.cameras.length&&(P.cameras.length=0,Ge=!0);for(let D=0;D<ye.length;D++){let St=ye[D],Ze=null;if(f!==null)Ze=f.getViewport(St);else{let we=u.getViewSubImage(d,St);Ze=we.viewport,D===0&&(e.setRenderTargetTextures(_,we.colorTexture,we.depthStencilTexture),e.setRenderTarget(_))}let ze=L[D];ze===void 0&&(ze=new $t,ze.layers.enable(D),ze.viewport=new dt,L[D]=ze),ze.matrix.fromArray(St.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(St.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),D===0&&(P.matrix.copy(ze.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ge===!0&&P.cameras.push(ze)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let D=u.getDepthInformation(ye[0]);D&&D.isValid&&D.texture&&g.init(D,s.renderState)}if(Ie&&Ie.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let D=0;D<ye.length;D++){let St=ye[D].camera;if(St){let Ze=m[St];Ze||(Ze=new Br,m[St]=Ze);let ze=u.getCameraImage(St);Ze.sourceTexture=ze}}}}for(let ye=0;ye<S.length;ye++){let Ge=T[ye],Ie=S[ye];Ge!==null&&Ie!==void 0&&Ie.update(Ge,ne,c||a)}ot&&ot(J,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),p=null}let ht=new md;ht.setAnimationLoop(yt),this.setAnimationLoop=function(J){ot=J},this.dispose=function(){}}},ns=new _n,Bx=new _t;function Ox(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Fc(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,y,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Jt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Jt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=e.get(m),y=M.envMap,_=M.envMapRotation;y&&(g.envMap.value=y,ns.copy(_),ns.x*=-1,ns.y*=-1,ns.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),g.envMapRotation.value.setFromMatrix4(Bx.makeRotationFromEuler(ns)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=y*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Jt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function kx(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){let _=y.program;i.uniformBlockBinding(M,_)}function c(M,y){let _=s[M.id];_===void 0&&(p(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",g));let S=y.program;i.updateUBOMapping(M,S);let T=e.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){let y=u();M.__bindingPointIndex=y;let _=n.createBuffer(),S=M.__size,T=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,S,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,_),_}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let y=s[M.id],_=M.uniforms,S=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,R=_.length;T<R;T++){let C=Array.isArray(_[T])?_[T]:[_[T]];for(let w=0,b=C.length;w<b;w++){let L=C[w];if(f(L,T,w,S)===!0){let P=L.__offset,z=Array.isArray(L.value)?L.value:[L.value],X=0;for(let $=0;$<z.length;$++){let N=z[$],te=x(N);typeof N=="number"||typeof N=="boolean"?(L.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,P+X,L.__data)):N.isMatrix3?(L.__data[0]=N.elements[0],L.__data[1]=N.elements[1],L.__data[2]=N.elements[2],L.__data[3]=0,L.__data[4]=N.elements[3],L.__data[5]=N.elements[4],L.__data[6]=N.elements[5],L.__data[7]=0,L.__data[8]=N.elements[6],L.__data[9]=N.elements[7],L.__data[10]=N.elements[8],L.__data[11]=0):(N.toArray(L.__data,X),X+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,y,_,S){let T=M.value,R=y+"_"+_;if(S[R]===void 0)return typeof T=="number"||typeof T=="boolean"?S[R]=T:S[R]=T.clone(),!0;{let C=S[R];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return S[R]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function p(M){let y=M.uniforms,_=0,S=16;for(let R=0,C=y.length;R<C;R++){let w=Array.isArray(y[R])?y[R]:[y[R]];for(let b=0,L=w.length;b<L;b++){let P=w[b],z=Array.isArray(P.value)?P.value:[P.value];for(let X=0,$=z.length;X<$;X++){let N=z[X],te=x(N),V=_%S,oe=V%te.boundary,pe=V+oe;_+=oe,pe!==0&&S-pe<te.storage&&(_+=S-pe),P.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=_,_+=te.storage}}}let T=_%S;return T>0&&(_+=S-T),M.__size=_,M.__cache={},this}function x(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function g(M){let y=M.target;y.removeEventListener("dispose",g);let _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(let M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}var ml=class{constructor(e={}){let{canvas:t=Fu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,S=!1;this._outputColorSpace=Zt;let T=0,R=0,C=null,w=-1,b=null,L=new dt,P=new dt,z=null,X=new Be(0),$=0,N=t.width,te=t.height,V=1,oe=null,pe=null,_e=new dt(0,0,N,te),Ne=new dt(0,0,N,te),ot=!1,yt=new Os,ht=!1,J=!1,ne=new _t,ye=new I,Ge=new dt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},rt=!1;function Qt(){return C===null?V:1}let D=i;function St(E,F){return t.getContext(E,F)}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ie,!1),D===null){let F="webgl2";if(D=St(F,E),D===null)throw St(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ze,ze,we,Tt,Se,Ke,Gt,Ut,A,v,O,Z,ee,q,Ce,le,Te,Ae,re,me,ke,Re,de,Je;function U(){Ze=new ig(D),Ze.init(),Re=new Ux(D,Ze),ze=new Jm(D,Ze,e,Re),we=new Dx(D,Ze),ze.reversedDepthBuffer&&d&&we.buffers.depth.setReversed(!0),Tt=new ag(D),Se=new yx,Ke=new Lx(D,Ze,we,Se,ze,Re,Tt),Gt=new Qm(_),Ut=new ng(_),A=new dp(D),de=new Zm(D,A),v=new sg(D,A,Tt,de),O=new lg(D,v,A,Tt),re=new og(D,ze,Ke),le=new Km(Se),Z=new _x(_,Gt,Ut,Ze,ze,de,le),ee=new Ox(_,Se),q=new Mx,Ce=new Ax(Ze),Ae=new Ym(_,Gt,Ut,we,O,f,l),Te=new Ix(_,O,ze),Je=new kx(D,Tt,ze,we),me=new $m(D,Ze,Tt),ke=new rg(D,Ze,Tt),Tt.programs=Z.programs,_.capabilities=ze,_.extensions=Ze,_.properties=Se,_.renderLists=q,_.shadowMap=Te,_.state=we,_.info=Tt}U();let ae=new eh(_,D);this.xr=ae,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let E=Ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(N,te,!1))},this.getSize=function(E){return E.set(N,te)},this.setSize=function(E,F,H=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,te=F,t.width=Math.floor(E*V),t.height=Math.floor(F*V),H===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(N*V,te*V).floor()},this.setDrawingBufferSize=function(E,F,H){N=E,te=F,V=H,t.width=Math.floor(E*H),t.height=Math.floor(F*H),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(_e)},this.setViewport=function(E,F,H,G){E.isVector4?_e.set(E.x,E.y,E.z,E.w):_e.set(E,F,H,G),we.viewport(L.copy(_e).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(Ne)},this.setScissor=function(E,F,H,G){E.isVector4?Ne.set(E.x,E.y,E.z,E.w):Ne.set(E,F,H,G),we.scissor(P.copy(Ne).multiplyScalar(V).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(E){we.setScissorTest(ot=E)},this.setOpaqueSort=function(E){oe=E},this.setTransparentSort=function(E){pe=E},this.getClearColor=function(E){return E.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,H=!0){let G=0;if(E){let B=!1;if(C!==null){let se=C.texture.format;B=se===Fo||se===No||se===Uo}if(B){let se=C.texture.type,fe=se===Nn||se===Ii||se===Ys||se===$s||se===Do||se===Lo,ve=Ae.getClearColor(),ge=Ae.getClearAlpha(),Fe=ve.r,He=ve.g,Pe=ve.b;fe?(p[0]=Fe,p[1]=He,p[2]=Pe,p[3]=ge,D.clearBufferuiv(D.COLOR,0,p)):(x[0]=Fe,x[1]=He,x[2]=Pe,x[3]=ge,D.clearBufferiv(D.COLOR,0,x))}else G|=D.COLOR_BUFFER_BIT}F&&(G|=D.DEPTH_BUFFER_BIT),H&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),Ae.dispose(),q.dispose(),Ce.dispose(),Se.dispose(),Gt.dispose(),Ut.dispose(),O.dispose(),de.dispose(),Je.dispose(),Z.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",On),ae.removeEventListener("sessionend",gh),Ni.stop()};function ce(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let E=Tt.autoReset,F=Te.enabled,H=Te.autoUpdate,G=Te.needsUpdate,B=Te.type;U(),Tt.autoReset=E,Te.enabled=F,Te.autoUpdate=H,Te.needsUpdate=G,Te.type=B}function ie(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Q(E){let F=E.target;F.removeEventListener("dispose",Q),be(F)}function be(E){Xe(E),Se.remove(E)}function Xe(E){let F=Se.get(E).programs;F!==void 0&&(F.forEach(function(H){Z.releaseProgram(H)}),E.isShaderMaterial&&Z.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,H,G,B,se){F===null&&(F=Ie);let fe=B.isMesh&&B.matrixWorld.determinant()<0,ve=Kd(E,F,H,G,B);we.setMaterial(G,fe);let ge=H.index,Fe=1;if(G.wireframe===!0){if(ge=v.getWireframeAttribute(H),ge===void 0)return;Fe=2}let He=H.drawRange,Pe=H.attributes.position,nt=He.start*Fe,mt=(He.start+He.count)*Fe;se!==null&&(nt=Math.max(nt,se.start*Fe),mt=Math.min(mt,(se.start+se.count)*Fe)),ge!==null?(nt=Math.max(nt,0),mt=Math.min(mt,ge.count)):Pe!=null&&(nt=Math.max(nt,0),mt=Math.min(mt,Pe.count));let Pt=mt-nt;if(Pt<0||Pt===1/0)return;de.setup(B,G,ve,H,ge);let bt,xt=me;if(ge!==null&&(bt=A.get(ge),xt=ke,xt.setIndex(bt)),B.isMesh)G.wireframe===!0?(we.setLineWidth(G.wireframeLinewidth*Qt()),xt.setMode(D.LINES)):xt.setMode(D.TRIANGLES);else if(B.isLine){let De=G.linewidth;De===void 0&&(De=1),we.setLineWidth(De*Qt()),B.isLineSegments?xt.setMode(D.LINES):B.isLineLoop?xt.setMode(D.LINE_LOOP):xt.setMode(D.LINE_STRIP)}else B.isPoints?xt.setMode(D.POINTS):B.isSprite&&xt.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ls("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))xt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let De=B._multiDrawStarts,At=B._multiDrawCounts,lt=B._multiDrawCount,pn=ge?A.get(ge).bytesPerElement:1,us=Se.get(G).currentProgram.getUniforms();for(let mn=0;mn<lt;mn++)us.setValue(D,"_gl_DrawID",mn),xt.render(De[mn]/pn,At[mn])}else if(B.isInstancedMesh)xt.renderInstances(nt,Pt,B.count);else if(H.isInstancedBufferGeometry){let De=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,At=Math.min(H.instanceCount,De);xt.renderInstances(nt,Pt,At)}else xt.render(nt,Pt)};function vt(E,F,H){E.transparent===!0&&E.side===It&&E.forceSinglePass===!1?(E.side=Jt,E.needsUpdate=!0,ma(E,F,H),E.side=ii,E.needsUpdate=!0,ma(E,F,H),E.side=It):ma(E,F,H)}this.compile=function(E,F,H=null){H===null&&(H=E),m=Ce.get(H),m.init(F),y.push(m),H.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),E!==H&&E.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();let G=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let se=B.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){let ve=se[fe];vt(ve,H,B),G.add(ve)}else vt(se,H,B),G.add(se)}),m=y.pop(),G},this.compileAsync=function(E,F,H=null){let G=this.compile(E,F,H);return new Promise(B=>{function se(){if(G.forEach(function(fe){Se.get(fe).currentProgram.isReady()&&G.delete(fe)}),G.size===0){B(E);return}setTimeout(se,10)}Ze.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let ut=null;function Zn(E){ut&&ut(E)}function On(){Ni.stop()}function gh(){Ni.start()}let Ni=new md;Ni.setAnimationLoop(Zn),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(E){ut=E,ae.setAnimationLoop(E),E===null?Ni.stop():Ni.start()},ae.addEventListener("sessionstart",On),ae.addEventListener("sessionend",gh),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(F),F=ae.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,F,C),m=Ce.get(E,y.length),m.init(F),y.push(m),ne.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),yt.setFromProjectionMatrix(ne,In,F.reversedDepth),J=this.localClippingEnabled,ht=le.init(this.clippingPlanes,J),g=q.get(E,M.length),g.init(),M.push(g),ae.enabled===!0&&ae.isPresenting===!0){let se=_.xr.getDepthSensingMesh();se!==null&&Cl(se,F,-1/0,_.sortObjects)}Cl(E,F,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(oe,pe),rt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,rt&&Ae.addToRenderList(g,E),this.info.render.frame++,ht===!0&&le.beginShadows();let H=m.state.shadowsArray;Te.render(H,E,F),ht===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=g.opaque,B=g.transmissive;if(m.setupLights(),F.isArrayCamera){let se=F.cameras;if(B.length>0)for(let fe=0,ve=se.length;fe<ve;fe++){let ge=se[fe];_h(G,B,E,ge)}rt&&Ae.render(E);for(let fe=0,ve=se.length;fe<ve;fe++){let ge=se[fe];xh(g,E,ge,ge.viewport)}}else B.length>0&&_h(G,B,E,F),rt&&Ae.render(E),xh(g,E,F);C!==null&&R===0&&(Ke.updateMultisampleRenderTarget(C),Ke.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(_,E,F),de.resetDefaultState(),w=-1,b=null,y.pop(),y.length>0?(m=y[y.length-1],ht===!0&&le.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Cl(E,F,H,G){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||yt.intersectsSprite(E)){G&&Ge.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ne);let fe=O.update(E),ve=E.material;ve.visible&&g.push(E,fe,ve,H,Ge.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||yt.intersectsObject(E))){let fe=O.update(E),ve=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ge.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ge.copy(fe.boundingSphere.center)),Ge.applyMatrix4(E.matrixWorld).applyMatrix4(ne)),Array.isArray(ve)){let ge=fe.groups;for(let Fe=0,He=ge.length;Fe<He;Fe++){let Pe=ge[Fe],nt=ve[Pe.materialIndex];nt&&nt.visible&&g.push(E,fe,nt,H,Ge.z,Pe)}}else ve.visible&&g.push(E,fe,ve,H,Ge.z,null)}}let se=E.children;for(let fe=0,ve=se.length;fe<ve;fe++)Cl(se[fe],F,H,G)}function xh(E,F,H,G){let B=E.opaque,se=E.transmissive,fe=E.transparent;m.setupLightsView(H),ht===!0&&le.setGlobalState(_.clippingPlanes,H),G&&we.viewport(L.copy(G)),B.length>0&&pa(B,F,H),se.length>0&&pa(se,F,H),fe.length>0&&pa(fe,F,H),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function _h(E,F,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Hn(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?Zs:Nn,minFilter:Ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));let se=m.state.transmissionRenderTarget[G.id],fe=G.viewport||L;se.setSize(fe.z*_.transmissionResolutionScale,fe.w*_.transmissionResolutionScale);let ve=_.getRenderTarget(),ge=_.getActiveCubeFace(),Fe=_.getActiveMipmapLevel();_.setRenderTarget(se),_.getClearColor(X),$=_.getClearAlpha(),$<1&&_.setClearColor(16777215,.5),_.clear(),rt&&Ae.render(H);let He=_.toneMapping;_.toneMapping=ci;let Pe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),ht===!0&&le.setGlobalState(_.clippingPlanes,G),pa(E,H,G),Ke.updateMultisampleRenderTarget(se),Ke.updateRenderTargetMipmap(se),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let mt=0,Pt=F.length;mt<Pt;mt++){let bt=F[mt],xt=bt.object,De=bt.geometry,At=bt.material,lt=bt.group;if(At.side===It&&xt.layers.test(G.layers)){let pn=At.side;At.side=Jt,At.needsUpdate=!0,yh(xt,H,G,De,At,lt),At.side=pn,At.needsUpdate=!0,nt=!0}}nt===!0&&(Ke.updateMultisampleRenderTarget(se),Ke.updateRenderTargetMipmap(se))}_.setRenderTarget(ve,ge,Fe),_.setClearColor(X,$),Pe!==void 0&&(G.viewport=Pe),_.toneMapping=He}function pa(E,F,H){let G=F.isScene===!0?F.overrideMaterial:null;for(let B=0,se=E.length;B<se;B++){let fe=E[B],ve=fe.object,ge=fe.geometry,Fe=fe.group,He=fe.material;He.allowOverride===!0&&G!==null&&(He=G),ve.layers.test(H.layers)&&yh(ve,F,H,ge,He,Fe)}}function yh(E,F,H,G,B,se){E.onBeforeRender(_,F,H,G,B,se),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(_,F,H,G,E,se),B.transparent===!0&&B.side===It&&B.forceSinglePass===!1?(B.side=Jt,B.needsUpdate=!0,_.renderBufferDirect(H,F,G,B,E,se),B.side=ii,B.needsUpdate=!0,_.renderBufferDirect(H,F,G,B,E,se),B.side=It):_.renderBufferDirect(H,F,G,B,E,se),E.onAfterRender(_,F,H,G,B,se)}function ma(E,F,H){F.isScene!==!0&&(F=Ie);let G=Se.get(E),B=m.state.lights,se=m.state.shadowsArray,fe=B.state.version,ve=Z.getParameters(E,B.state,se,F,H),ge=Z.getProgramCacheKey(ve),Fe=G.programs;G.environment=E.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(E.isMeshStandardMaterial?Ut:Gt).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",Q),Fe=new Map,G.programs=Fe);let He=Fe.get(ge);if(He!==void 0){if(G.currentProgram===He&&G.lightsStateVersion===fe)return Mh(E,ve),He}else ve.uniforms=Z.getUniforms(E),E.onBeforeCompile(ve,_),He=Z.acquireProgram(ve,ge),Fe.set(ge,He),G.uniforms=ve.uniforms;let Pe=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=le.uniform),Mh(E,ve),G.needsLights=jd(E),G.lightsStateVersion=fe,G.needsLights&&(Pe.ambientLightColor.value=B.state.ambient,Pe.lightProbe.value=B.state.probe,Pe.directionalLights.value=B.state.directional,Pe.directionalLightShadows.value=B.state.directionalShadow,Pe.spotLights.value=B.state.spot,Pe.spotLightShadows.value=B.state.spotShadow,Pe.rectAreaLights.value=B.state.rectArea,Pe.ltc_1.value=B.state.rectAreaLTC1,Pe.ltc_2.value=B.state.rectAreaLTC2,Pe.pointLights.value=B.state.point,Pe.pointLightShadows.value=B.state.pointShadow,Pe.hemisphereLights.value=B.state.hemi,Pe.directionalShadowMap.value=B.state.directionalShadowMap,Pe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Pe.spotShadowMap.value=B.state.spotShadowMap,Pe.spotLightMatrix.value=B.state.spotLightMatrix,Pe.spotLightMap.value=B.state.spotLightMap,Pe.pointShadowMap.value=B.state.pointShadowMap,Pe.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=He,G.uniformsList=null,He}function vh(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=js.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Mh(E,F){let H=Se.get(E);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function Kd(E,F,H,G,B){F.isScene!==!0&&(F=Ie),Ke.resetTextureUnits();let se=F.fog,fe=G.isMeshStandardMaterial?F.environment:null,ve=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Vi,ge=(G.isMeshStandardMaterial?Ut:Gt).get(G.envMap||fe),Fe=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,He=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pe=!!H.morphAttributes.position,nt=!!H.morphAttributes.normal,mt=!!H.morphAttributes.color,Pt=ci;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Pt=_.toneMapping);let bt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,xt=bt!==void 0?bt.length:0,De=Se.get(G),At=m.state.lights;if(ht===!0&&(J===!0||E!==b)){let sn=E===b&&G.id===w;le.setState(G,E,sn)}let lt=!1;G.version===De.__version?(De.needsLights&&De.lightsStateVersion!==At.state.version||De.outputColorSpace!==ve||B.isBatchedMesh&&De.batching===!1||!B.isBatchedMesh&&De.batching===!0||B.isBatchedMesh&&De.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&De.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&De.instancing===!1||!B.isInstancedMesh&&De.instancing===!0||B.isSkinnedMesh&&De.skinning===!1||!B.isSkinnedMesh&&De.skinning===!0||B.isInstancedMesh&&De.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&De.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&De.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&De.instancingMorph===!1&&B.morphTexture!==null||De.envMap!==ge||G.fog===!0&&De.fog!==se||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==le.numPlanes||De.numIntersection!==le.numIntersection)||De.vertexAlphas!==Fe||De.vertexTangents!==He||De.morphTargets!==Pe||De.morphNormals!==nt||De.morphColors!==mt||De.toneMapping!==Pt||De.morphTargetsCount!==xt)&&(lt=!0):(lt=!0,De.__version=G.version);let pn=De.currentProgram;lt===!0&&(pn=ma(G,F,B));let us=!1,mn=!1,cr=!1,Rt=pn.getUniforms(),Mn=De.uniforms;if(we.useProgram(pn.program)&&(us=!0,mn=!0,cr=!0),G.id!==w&&(w=G.id,mn=!0),us||b!==E){we.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Rt.setValue(D,"projectionMatrix",E.projectionMatrix),Rt.setValue(D,"viewMatrix",E.matrixWorldInverse);let hn=Rt.map.cameraPosition;hn!==void 0&&hn.setValue(D,ye.setFromMatrixPosition(E.matrixWorld)),ze.logarithmicDepthBuffer&&Rt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Rt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,mn=!0,cr=!0)}if(B.isSkinnedMesh){Rt.setOptional(D,B,"bindMatrix"),Rt.setOptional(D,B,"bindMatrixInverse");let sn=B.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Rt.setValue(D,"boneTexture",sn.boneTexture,Ke))}B.isBatchedMesh&&(Rt.setOptional(D,B,"batchingTexture"),Rt.setValue(D,"batchingTexture",B._matricesTexture,Ke),Rt.setOptional(D,B,"batchingIdTexture"),Rt.setValue(D,"batchingIdTexture",B._indirectTexture,Ke),Rt.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&Rt.setValue(D,"batchingColorTexture",B._colorsTexture,Ke));let bn=H.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&re.update(B,H,pn),(mn||De.receiveShadow!==B.receiveShadow)&&(De.receiveShadow=B.receiveShadow,Rt.setValue(D,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Mn.envMap.value=ge,Mn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Mn.envMapIntensity.value=F.environmentIntensity),mn&&(Rt.setValue(D,"toneMappingExposure",_.toneMappingExposure),De.needsLights&&Qd(Mn,cr),se&&G.fog===!0&&ee.refreshFogUniforms(Mn,se),ee.refreshMaterialUniforms(Mn,G,V,te,m.state.transmissionRenderTarget[E.id]),js.upload(D,vh(De),Mn,Ke)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(js.upload(D,vh(De),Mn,Ke),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Rt.setValue(D,"center",B.center),Rt.setValue(D,"modelViewMatrix",B.modelViewMatrix),Rt.setValue(D,"normalMatrix",B.normalMatrix),Rt.setValue(D,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let sn=G.uniformsGroups;for(let hn=0,Il=sn.length;hn<Il;hn++){let Fi=sn[hn];Je.update(Fi,pn),Je.bind(Fi,pn)}}return pn}function Qd(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function jd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,F,H){let G=Se.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Se.get(E.texture).__webglTexture=F,Se.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let H=Se.get(E);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0};let ef=D.createFramebuffer();this.setRenderTarget=function(E,F=0,H=0){C=E,T=F,R=H;let G=!0,B=null,se=!1,fe=!1;if(E){let ge=Se.get(E);if(ge.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(ge.__webglFramebuffer===void 0)Ke.setupRenderTarget(E);else if(ge.__hasExternalTextures)Ke.rebindTextures(E,Se.get(E.texture).__webglTexture,Se.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Pe=E.depthTexture;if(ge.__boundDepthTexture!==Pe){if(Pe!==null&&Se.has(Pe)&&(E.width!==Pe.image.width||E.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ke.setupDepthRenderbuffer(E)}}let Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(fe=!0);let He=Se.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(He[F])?B=He[F][H]:B=He[F],se=!0):E.samples>0&&Ke.useMultisampledRTT(E)===!1?B=Se.get(E).__webglMultisampledFramebuffer:Array.isArray(He)?B=He[H]:B=He,L.copy(E.viewport),P.copy(E.scissor),z=E.scissorTest}else L.copy(_e).multiplyScalar(V).floor(),P.copy(Ne).multiplyScalar(V).floor(),z=ot;if(H!==0&&(B=ef),we.bindFramebuffer(D.FRAMEBUFFER,B)&&G&&we.drawBuffers(E,B),we.viewport(L),we.scissor(P),we.setScissorTest(z),se){let ge=Se.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,ge.__webglTexture,H)}else if(fe){let ge=F;for(let Fe=0;Fe<E.textures.length;Fe++){let He=Se.get(E.textures[Fe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Fe,He.__webglTexture,H,ge)}}else if(E!==null&&H!==0){let ge=Se.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ge.__webglTexture,H)}w=-1},this.readRenderTargetPixels=function(E,F,H,G,B,se,fe,ve=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge){we.bindFramebuffer(D.FRAMEBUFFER,ge);try{let Fe=E.textures[ve],He=Fe.format,Pe=Fe.type;if(!ze.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-G&&H>=0&&H<=E.height-B&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ve),D.readPixels(F,H,G,B,Re.convert(He),Re.convert(Pe),se))}finally{let Fe=C!==null?Se.get(C).__webglFramebuffer:null;we.bindFramebuffer(D.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(E,F,H,G,B,se,fe,ve=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge)if(F>=0&&F<=E.width-G&&H>=0&&H<=E.height-B){we.bindFramebuffer(D.FRAMEBUFFER,ge);let Fe=E.textures[ve],He=Fe.format,Pe=Fe.type;if(!ze.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let nt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,nt),D.bufferData(D.PIXEL_PACK_BUFFER,se.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ve),D.readPixels(F,H,G,B,Re.convert(He),Re.convert(Pe),0);let mt=C!==null?Se.get(C).__webglFramebuffer:null;we.bindFramebuffer(D.FRAMEBUFFER,mt);let Pt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Bu(D,Pt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,nt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,se),D.deleteBuffer(nt),D.deleteSync(Pt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,H=0){let G=Math.pow(2,-H),B=Math.floor(E.image.width*G),se=Math.floor(E.image.height*G),fe=F!==null?F.x:0,ve=F!==null?F.y:0;Ke.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,fe,ve,B,se),we.unbindTexture()};let tf=D.createFramebuffer(),nf=D.createFramebuffer();this.copyTextureToTexture=function(E,F,H=null,G=null,B=0,se=null){se===null&&(B!==0?(Ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=B,B=0):se=0);let fe,ve,ge,Fe,He,Pe,nt,mt,Pt,bt=E.isCompressedTexture?E.mipmaps[se]:E.image;if(H!==null)fe=H.max.x-H.min.x,ve=H.max.y-H.min.y,ge=H.isBox3?H.max.z-H.min.z:1,Fe=H.min.x,He=H.min.y,Pe=H.isBox3?H.min.z:0;else{let bn=Math.pow(2,-B);fe=Math.floor(bt.width*bn),ve=Math.floor(bt.height*bn),E.isDataArrayTexture?ge=bt.depth:E.isData3DTexture?ge=Math.floor(bt.depth*bn):ge=1,Fe=0,He=0,Pe=0}G!==null?(nt=G.x,mt=G.y,Pt=G.z):(nt=0,mt=0,Pt=0);let xt=Re.convert(F.format),De=Re.convert(F.type),At;F.isData3DTexture?(Ke.setTexture3D(F,0),At=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ke.setTexture2DArray(F,0),At=D.TEXTURE_2D_ARRAY):(Ke.setTexture2D(F,0),At=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let lt=D.getParameter(D.UNPACK_ROW_LENGTH),pn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),us=D.getParameter(D.UNPACK_SKIP_PIXELS),mn=D.getParameter(D.UNPACK_SKIP_ROWS),cr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,bt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,bt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Fe),D.pixelStorei(D.UNPACK_SKIP_ROWS,He),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pe);let Rt=E.isDataArrayTexture||E.isData3DTexture,Mn=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let bn=Se.get(E),sn=Se.get(F),hn=Se.get(bn.__renderTarget),Il=Se.get(sn.__renderTarget);we.bindFramebuffer(D.READ_FRAMEBUFFER,hn.__webglFramebuffer),we.bindFramebuffer(D.DRAW_FRAMEBUFFER,Il.__webglFramebuffer);for(let Fi=0;Fi<ge;Fi++)Rt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(E).__webglTexture,B,Pe+Fi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(F).__webglTexture,se,Pt+Fi)),D.blitFramebuffer(Fe,He,fe,ve,nt,mt,fe,ve,D.DEPTH_BUFFER_BIT,D.NEAREST);we.bindFramebuffer(D.READ_FRAMEBUFFER,null),we.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||Se.has(E)){let bn=Se.get(E),sn=Se.get(F);we.bindFramebuffer(D.READ_FRAMEBUFFER,tf),we.bindFramebuffer(D.DRAW_FRAMEBUFFER,nf);for(let hn=0;hn<ge;hn++)Rt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bn.__webglTexture,B,Pe+hn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,bn.__webglTexture,B),Mn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,sn.__webglTexture,se,Pt+hn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,sn.__webglTexture,se),B!==0?D.blitFramebuffer(Fe,He,fe,ve,nt,mt,fe,ve,D.COLOR_BUFFER_BIT,D.NEAREST):Mn?D.copyTexSubImage3D(At,se,nt,mt,Pt+hn,Fe,He,fe,ve):D.copyTexSubImage2D(At,se,nt,mt,Fe,He,fe,ve);we.bindFramebuffer(D.READ_FRAMEBUFFER,null),we.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Mn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(At,se,nt,mt,Pt,fe,ve,ge,xt,De,bt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(At,se,nt,mt,Pt,fe,ve,ge,xt,bt.data):D.texSubImage3D(At,se,nt,mt,Pt,fe,ve,ge,xt,De,bt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,se,nt,mt,fe,ve,xt,De,bt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,se,nt,mt,bt.width,bt.height,xt,bt.data):D.texSubImage2D(D.TEXTURE_2D,se,nt,mt,fe,ve,xt,De,bt);D.pixelStorei(D.UNPACK_ROW_LENGTH,lt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,us),D.pixelStorei(D.UNPACK_SKIP_ROWS,mn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,cr),se===0&&F.generateMipmaps&&D.generateMipmap(At),we.unbindTexture()},this.initRenderTarget=function(E){Se.get(E).__webglFramebuffer===void 0&&Ke.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ke.setTextureCube(E,0):E.isData3DTexture?Ke.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ke.setTexture2DArray(E,0):Ke.setTexture2D(E,0),we.unbindTexture()},this.resetState=function(){T=0,R=0,C=null,we.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};function Md(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Dt,c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=vd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let p=vd(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function vd(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Nt(a,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){let x=h.getComponent(d,p);o.setComponent(d+u,p,x)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}var zx={man:{heads:7.4,legs:.48,shoulders:.25,girth:1,arms:.37,foot:.14},elf:{heads:7.9,legs:.5,shoulders:.23,girth:.86,arms:.37,foot:.13},woman:{heads:7.4,legs:.49,shoulders:.21,girth:.82,arms:.36,foot:.12},hobbit:{heads:5,legs:.41,shoulders:.27,girth:1.2,arms:.37,foot:.22},dwarf:{heads:4.5,legs:.34,shoulders:.4,girth:1.65,arms:.38,foot:.17},uruk:{heads:7,legs:.46,shoulders:.32,girth:1.3,arms:.41,foot:.15},goblin:{heads:5.2,legs:.38,shoulders:.26,girth:.95,arms:.45,foot:.17},gollum:{heads:4.2,legs:.44,shoulders:.19,girth:.58,arms:.47,foot:.2},ent:{heads:6,legs:.44,shoulders:.3,girth:1.15,arms:.46,foot:.16}};function Hx(n){let e={...zx[n.body||"man"],...n.shape},t=n.height||1,i=t/e.heads,s=t*e.legs,r=i*.22,a=t-s-i-r,o=t*e.arms;return{H:t,head:i,headR:i*.46,legs:s,thigh:s*.5,shin:s*.5,neck:r,torso:a,upper:o*.47,fore:o*.53,sh:t*e.shoulders/2,hip:t*e.shoulders*.2*(e.girth>1.3?1.3:1),waist:t*.075*e.girth,chest:t*e.shoulders*.36*Math.min(1.3,e.girth**.5),limb:t*.034*Math.max(.8,e.girth**.5),foot:t*e.foot,girth:e.girth}}var bd=new _t,Gx=new Dn,Vx=new _n,Wx=new I,Xx=new I,sh=class{constructor(){this.parts={}}add(e,t,i,s=[0,0,0],r=[0,0,0],a=[1,1,1]){var u;let o=t.index?t.toNonIndexed():t.clone();for(let d of Object.keys(o.attributes))d!=="position"&&o.deleteAttribute(d);o.clearGroups(),bd.compose(Wx.set(...s),Gx.setFromEuler(Vx.set(...r)),Xx.set(...a)),o.applyMatrix4(bd);let l=new Be(i),c=o.attributes.position.count,h=new Float32Array(c*3);for(let d=0;d<c;d++)h[d*3]=l.r,h[d*3+1]=l.g,h[d*3+2]=l.b;return o.setAttribute("color",new Nt(h,3)),((u=this.parts)[e]||(u[e]=[])).push(o),this}done(){let e={};for(let[t,i]of Object.entries(this.parts)){let s=Md(i);s.computeVertexNormals(),s.computeBoundingSphere(),s.userData.shared=!0,e[t]=s}return e}},tt=(n,e,t)=>new qe(n,e,t),Ve=(n,e,t,i=7)=>new Ee(n,e,t,i),nn=(n,e,t=7)=>new kt(n,e,t),rs=(n,e=8,t=6)=>new ct(n,e,t),un=(n,e=.5,t=9)=>new ct(n,t,5,0,Math.PI*2,0,Math.PI*e),Ed=(n,e,t,i=9)=>new Ee(n,e,t,i,1,!0),qx=14857614;function Yx(n,e){var _;let t=new sh,i=n.skin??qx,s=n.top??8022608,r=n.sleeves??s,a=n.legs??4864554,{H:o,head:l,headR:c,torso:h,sh:u,waist:d,chest:f,limb:p}=e,x=n.hair||{},g=n.beard;if(e.shieldColor=n.shield,e.banner=n.banner,t.add("torso",Ve(f,d*1.05,h*.62,8),s,[0,h*.62,0],[0,0,0],[1,1,.72]),t.add("torso",Ve(d*1.08,d*1.12,h*.4,8),n.belly??s,[0,h*.2,0],[0,0,0],[1,1,.8]),t.add("torso",tt(u*2*.92,h*.12,f*1.4),s,[0,h*.92,0]),t.add("torso",Ve(p*1.1,p*1.3,e.neck*1.6,6),n.void?328965:i,[0,h+e.neck*.5,0]),n.belt&&t.add("torso",Ve(d*1.15,d*1.15,h*.07,8),n.belt,[0,h*.1,0],[0,0,0],[1,1,.84]),n.vest){t.add("torso",Ve(f*1.04,d*1.16,h*.8,8),n.vest,[0,h*.45,.004],[0,0,0],[1.02,1,.78]),t.add("torso",tt(f*.5,h*.3,.01),n.top??15261900,[0,h*.78,f*.73]);for(let S=0;S<3;S++)t.add("torso",rs(o*.007,4,3),n.buttons??13148224,[0,h*(.55-S*.14),d*.9])}n.mail&&t.add("torso",Ve(f*1.05,d*1.2,h*.75,8),n.mail,[0,h*.42,0],[0,0,0],[1.03,1,.8]),n.plate&&(t.add("torso",Ve(f*1.08,d*1.1,h*.55,8),n.plate,[0,h*.68,.01],[0,0,0],[1.04,1,.82]),t.add("upperL",un(p*2.1),n.plate,[0,0,0]),t.add("upperR",un(p*2.1),n.plate,[0,0,0])),n.emblem&&t.add("torso",tt(f*.55,f*.55,.01),n.emblem,[0,h*.68,f*.78]),n.scarf&&t.add("torso",Ve(p*2.2,p*2.5,l*.28,7),n.scarf,[0,h*.98,0]),n.brooch&&t.add("torso",tt(o*.022,o*.03,.01),n.brooch,[u*.35,h*.9,f*.75]),n.whiteHand&&t.add("torso",tt(f*.35,f*.4,.01),15790320,[0,h*.68,f*.8]);let m=n.coat;if(m){let S={hip:.2,thigh:.45,knee:.72,calf:.85,ankle:.97}[m.len||"knee"]*e.legs;t.add("skirt",Ed(d*1.12,d*1.12+S*(m.flare??.45),S,10),m.color,[0,-S/2,0],[0,0,0],[1,1,.85]),m.skirtOnly||t.add("torso",Ve(f*1.06,d*1.14,h*.9,8),m.color,[0,h*.46,-.003],[0,0,0],[1.03,1,.8])}let M=c*1.05;if(n.void)t.add("head",rs(c,8,6),197379,[0,M,0]);else{t.add("head",rs(c,9,7),i,[0,M,0],[0,0,0],[.92,1.08,.98]),t.add("head",tt(c*.2,c*.35,c*.3),i,[0,M-c*.08,c*.93]);let S=n.eyes??2365972,T=n.bigEyes?c*.26:c*.09;for(let R of[-1,1])if(t.add("head",rs(T,5,4),S,[R*c*.36,M+c*.12,c*(n.bigEyes?.78:.88)]),n.ears){let C=n.ears==="elf"?1.5:n.ears==="big"?1.6:1.1;t.add("head",nn(c*.2,c*.55*C,4),i,[R*c*.95,M+c*.2,-c*.05],[0,0,-R*(n.ears==="big"?1.2:.55)])}n.warpaint&&t.add("head",tt(c*.9,c*.5,.01),n.warpaint,[0,M+c*.1,c*.92])}Zx(t,x,e,M,n),g&&$x(t,g,e,M),n.hat&&Jx(t,n.hat,e,M);for(let[S,T]of[["L",-1],["R",1]])t.add("upper"+S,Ve(p*1.1,p,e.upper,6),r,[0,-e.upper/2,0]),t.add("upper"+S,rs(p*1.25,6,4),r,[0,0,0]),t.add("fore"+S,Ve(p,p*.85,e.fore*.8,6),n.cuffs??r,[0,-e.fore*.4,0]),t.add("fore"+S,tt(p*1.7,e.fore*.24,p*1.2),n.gloves??i,[0,-e.fore*.88,0]),n.bracers&&t.add("fore"+S,Ve(p*1.2,p*1.1,e.fore*.4,6),n.bracers,[0,-e.fore*.5,0]);for(let S of["L","R"]){t.add("thigh"+S,Ve(p*1.45,p*1.15,e.thigh,6),a,[0,-e.thigh/2,0]);let T=n.feet||"boots",R=n.boots??3023384;t.add("shin"+S,Ve(p*1.15,p*.95,e.shin*.9,6),T==="boots"?R:a,[0,-e.shin*.45,0]),T==="bare"?(t.add("shin"+S,tt(e.foot*.5,e.shin*.12,e.foot),i,[0,-e.shin*.94,e.foot*.3]),t.add("shin"+S,tt(e.foot*.46,e.shin*.06,e.foot*.55),x.color??4860436,[0,-e.shin*.86,e.foot*.25])):t.add("shin"+S,tt(e.foot*.45,e.shin*.12,e.foot),T==="boots"?R:i,[0,-e.shin*.94,e.foot*.28])}if(n.cloak){let S=n.cloak,T=(S.len??.78)*o;t.add("cloak",Ed(u*.95,u*1.35,T,10),S.color,[0,-T/2,0],[0,0,0],[1,1,.55]),S.hood==="down"&&t.add("cloak",Ve(u*.8,u*.95,l*.35,8),S.color,[0,.02*o,-f*.25],[0,0,0],[1,1,.6]),S.fur&&t.add("cloak",Ve(u*.9,u*1.05,l*.35,8),S.fur,[0,.01*o,0],[0,0,0],[1.05,1,.8])}if(((_=n.cloak)==null?void 0:_.hood)==="up"||n.hood){let S=n.hood??n.cloak.color;t.add("head",un(c*1.28,.62,10),S,[0,M+c*.05,-c*.12],[-.25,0,0]),t.add("head",new Ee(c*1.15,c*1.4,c*1.4,9,1,!0,Math.PI*.3,Math.PI*1.4),S,[0,M-c*.5,-c*.15],[.15,0,0],[1,1,.9])}for(let S of n.back||[])Kx(t,S,e,n);for(let S of n.hip||[])Qx(t,S,e);let y={};for(let S of["L","R"]){let T=n[S==="L"?"left":"right"];if(!T)continue;let R="hand"+S+(T.drawn?"X":"");y[S]={grip:jx(t,R,T.item,e,S),drawn:!!T.drawn}}return{geos:t.done(),held:y}}function Zx(n,e,t,i,s){let{headR:r,H:a}=t,o=e.color??3810838;switch(e.style){case"bald":break;case"curly":n.add("head",un(r*1.08,.5),o,[0,i+r*.08,-r*.05],[-.2,0,0]);for(let l=0;l<9;l++){let c=l/9*Math.PI*2;n.add("head",rs(r*.3,5,4),o,[Math.sin(c)*r*.9,i+r*(.35+l%2*.25),Math.cos(c)*r*.85-r*.1])}break;case"long":case"flowing":{let l=e.style==="flowing"?a*.2:a*.1;n.add("head",un(r*1.1,.55),o,[0,i+r*.05,-r*.08],[-.25,0,0]),n.add("head",tt(r*2,l,r*.7),o,[0,i-l/2+r*.3,-r*.6]);for(let c of[-1,1])n.add("head",tt(r*.4,l*.7,r*.6),o,[c*r*.9,i-l*.3,-r*.15]);break}case"wild":n.add("head",un(r*1.2,.6),o,[0,i,-r*.1],[-.3,0,0]);for(let l=0;l<7;l++)n.add("head",nn(r*.3,r*.9,4),o,[(l-3)*r*.3,i+r*.6,-r*.6],[-1-l%2*.4,0,(l-3)*.3]);break;case"strands":for(let l=0;l<5;l++)n.add("head",tt(r*.05,r*.9,r*.05),o,[(l-2)*r*.25,i+r*.4,-r*.7],[-.7,0,(l-2)*.2]);break;case"leaves":for(let l=0;l<6;l++){let c=l/6*Math.PI*2;n.add("head",nn(r*.2,r*1.4,4),e.twig??4863522,[Math.sin(c)*r*.6,i+r*1.1,Math.cos(c)*r*.5-r*.3],[Math.cos(c)*.5-.3,0,-Math.sin(c)*.5]),n.add("head",new oi(r*.45,0),o,[Math.sin(c)*r*.9,i+r*1.7,Math.cos(c)*r*.8-r*.3])}break;default:n.add("head",un(r*1.07,.52),o,[0,i+r*.08,-r*.06],[-.25,0,0])}if(e.braids)for(let l of[-1,1])n.add("head",Ve(r*.12,r*.08,a*.12,5),o,[l*r*.85,i-a*.05,r*.1])}function $x(n,e,t,i){let{headR:s,H:r}=t,a=e.color??5913120,o=[0,i-s*.55,s*.55];switch(e.style){case"stubble":n.add("head",un(s*.98,.5,9),a,[0,i-s*.05,s*.03],[Math.PI,0,0],[1,.75,1]);break;case"short":n.add("head",un(s*1,.5,9),a,[0,i-s*.08,s*.05],[Math.PI,0,0],[1,.95,1]);break;case"long":{let l=r*.16;n.add("head",un(s*1,.5,9),a,[0,i-s*.08,s*.05],[Math.PI,0,0]),n.add("head",nn(s*.75,l,7),a,[0,o[1]-l*.4,s*.6],[Math.PI+.12,0,0],[1,1,.6]);break}case"dwarf":{let l=r*.17;if(n.add("head",un(s*1.08,.5,9),a,[0,i-s*.08,s*.05],[Math.PI,0,0]),n.add("head",nn(s*1.05,l,8),a,[0,o[1]-l*.35,s*.65],[Math.PI+.2,0,0],[1.1,1,.55]),e.forked)for(let c of[-1,1])n.add("head",Ve(s*.16,s*.1,l*.7,5),a,[c*s*.45,o[1]-l*.75,s*.8],[.25,0,0]);break}case"moss":n.add("head",nn(s*.9,r*.14,6),a,[0,o[1]-r*.05,s*.6],[Math.PI+.1,0,0],[1,1,.6]);break;default:break}e.moustache&&n.add("head",tt(s*.9,s*.12,s*.15),a,[0,i-s*.35,s*.9])}function Jx(n,e,t,i){let{headR:s,H:r}=t,a=e.color??6974064;switch(e.style){case"wizard":{n.add("head",Ve(s*2.3,s*2.4,r*.012,14),a,[0,i+s*.55,0],[-.08,0,0]),n.add("head",Ve(s*.55,s*1.05,r*.13,10),a,[0,i+s*.55+r*.065,-s*.05],[-.1,0,0]),n.add("head",nn(s*.55,r*.12,9),a,[0,i+s*.55+r*.17,-s*.35],[-.5,0,0]);break}case"helm":if(n.add("head",un(s*1.18,.5,10),a,[0,i+s*.05,0]),n.add("head",tt(s*.18,s*.7,s*.12),a,[0,i-s*.1,s*1.08]),e.crest&&n.add("head",tt(s*.18,s*.5,s*1.8),e.crest,[0,i+s*1.1,-s*.3]),e.plume&&n.add("head",tt(s*.25,r*.12,s*.3),e.plume,[0,i+s*.4,-s*1.3],[.4,0,0]),e.wings)for(let o of[-1,1])n.add("head",tt(s*.08,s*.9,s*.6),e.wings,[o*s*1.15,i+s*.6,-s*.1],[0,0,-o*.35]);e.tall&&n.add("head",nn(s*1.15,s*1.3,10),a,[0,i+s*.95,0]);break;case"dwarfhelm":n.add("head",un(s*1.2,.5,10),a,[0,i+s*.08,0]),n.add("head",Ve(s*1.22,s*1.24,s*.25,10),e.band??9071152,[0,i+s*.12,0]);break;case"crown":n.add("head",Ve(s*1.02,s*1.02,s*.3,10),a,[0,i+s*.72,0]);for(let o=0;o<5;o++){let l=o/5*Math.PI*2;n.add("head",nn(s*.12,s*.35,4),a,[Math.sin(l)*s,i+s*1,Math.cos(l)*s])}break;case"circlet":n.add("head",Ve(s*1.05,s*1.05,s*.08,10),a,[0,i+s*.62,0]);break;case"spikes":n.add("head",Ve(s*1.25,s*1.3,s*.5,10),a,[0,i+s*.75,0]);for(let o=0;o<8;o++){let l=o/8*Math.PI*2;n.add("head",nn(s*.14,s*1.3,4),a,[Math.sin(l)*s*1.2,i+s*1.55,Math.cos(l)*s*1.2],[Math.cos(l)*.2,0,-Math.sin(l)*.2])}break;case"cap":n.add("head",un(s*1.12,.45,9),a,[0,i+s*.2,0]),n.add("head",nn(s*.4,s*1.1,6),a,[0,i+s*1,-s*.4],[-.9,0,0]);break;default:break}}function Kx(n,e,t,i){let{H:s,torso:r,chest:a}=t,o=-a*.8;switch(e){case"pack":n.add("torso",tt(a*1.7,r*.75,a*1.1),6965800,[0,r*.55,o-a*.4]),n.add("torso",tt(a*1.8,r*.2,a*1.2),9075290,[0,r*1,o-a*.4]),n.add("torso",Ve(a*.45,a*.45,a*.08,9),3815994,[a*.4,r*.4,o-a*1],[Math.PI/2,0,0]),n.add("torso",new ln(a*.4,a*.1,4,8),13154448,[-a*.9,r*.45,o-a*.4],[0,Math.PI/2,0]);break;case"satchel":n.add("torso",tt(a*.9,r*.35,a*.4),6965800,[-a*.9,r*.2,0]);break;case"quiver":n.add("torso",Ve(s*.03,s*.025,r*.9,6),5913120,[a*.3,r*.65,o],[0,0,-.35]);for(let l=0;l<4;l++)n.add("torso",tt(s*.012,s*.05,s*.004),14737616,[a*.3+s*.05+l*s*.008,r*1.1+l*s*.004,o],[0,0,-.35]);break;case"shield":n.add("torso",Ve(a*1.35,a*1.35,s*.02,12),i.shield??8018480,[0,r*.6,o-s*.02],[Math.PI/2,0,0]),n.add("torso",Ve(a*.3,a*.3,s*.03,8),12099680,[0,r*.6,o-s*.035],[Math.PI/2,0,0]);break;case"axes":for(let l of[-1,1])n.add("torso",Ve(s*.012,s*.012,r*.9,5),4860436,[l*a*.4,r*.65,o],[0,0,l*.4]),n.add("torso",tt(s*.08,s*.06,s*.01),11053224,[l*a*.8,r*1.02,o],[0,0,l*.4]);break;case"sword":n.add("torso",tt(s*.02,r*1.1,s*.01),3811866,[0,r*.6,o],[0,0,.5]);break;case"bow":n.add("torso",new ln(r*.55,s*.008,4,12,Math.PI),9071162,[0,r*.6,o-s*.01],[0,0,Math.PI/2-.4]);break;default:break}}function Qx(n,e,t){let{H:i,waist:s,torso:r}=t;switch(e){case"sword":n.add("torso",tt(i*.02,i*.36,i*.03),2759698,[-s*1.2,r*.02-i*.12,s*.3],[.35,0,.1]),n.add("torso",tt(i*.07,i*.012,i*.02),12099680,[-s*1.2,r*.1+i*.04,s*.25]);break;case"dagger":n.add("torso",tt(i*.018,i*.14,i*.025),3811866,[s*1.15,r*.02-i*.03,0],[0,0,-.2]);break;case"horn":n.add("torso",nn(i*.025,i*.16,6),15260864,[s*1.2,r*.05,-s*.2],[0,0,1.3]);break;case"pouch":n.add("torso",tt(i*.05,i*.05,i*.03),5913120,[s*.8,r*.02,s*.7]);break;default:break}}function jx(n,e,t,i,s){let{H:r}=i,a=13159634,o=6965802;switch(t){case"staff":return n.add(e,Ve(r*.014,r*.018,r*1.2,5),5913116,[0,r*.18,0]),n.add(e,new oi(r*.04,0),4861460,[0,r*.8,0]),n.add(e,nn(r*.03,r*.12,4),4861460,[r*.03,r*.83,0],[0,0,-.6]),"upright";case"darkStaff":n.add(e,Ve(r*.013,r*.016,r*1.2,6),1710620,[0,r*.18,0]);for(let l=0;l<4;l++)n.add(e,nn(r*.012,r*.1,4),1710620,[Math.sin(l*1.57)*r*.03,r*.82,Math.cos(l*1.57)*r*.03],[Math.cos(l*1.57)*.4,0,-Math.sin(l*1.57)*.4]);return"upright";case"whiteStaff":return n.add(e,Ve(r*.014,r*.016,r*1.2,6),15921386,[0,r*.18,0]),n.add(e,new Zi(r*.045,0),16777215,[0,r*.81,0]),"upright";case"spear":return n.add(e,Ve(r*.01,r*.01,r*1.5,5),o,[0,r*.3,0]),n.add(e,nn(r*.025,r*.12,4),a,[0,r*1.1,0]),"upright";case"banner":return n.add(e,Ve(r*.01,r*.01,r*1.6,5),o,[0,r*.35,0]),n.add(e,tt(r*.005,r*.3,r*.28),i.banner??3103274,[0,r*1,r*.14]),"upright";case"torch":return n.add(e,Ve(r*.015,r*.012,r*.35,5),o,[0,r*.1,0]),n.add(e,nn(r*.035,r*.1,5),16752688,[0,r*.32,0]),"upright";case"lantern":return n.add(e,tt(r*.05,r*.07,r*.05),16765056,[0,-r*.07,0]),"upright";case"mug":return n.add(e,Ve(r*.03,r*.028,r*.07,6),9071168,[0,0,r*.02]),"upright";case"pipe":return n.add(e,Ve(r*.004,r*.004,r*.12,4),4861984,[0,0,r*.05],[Math.PI/2,0,0]),n.add(e,Ve(r*.012,r*.01,r*.025,5),4861984,[0,r*.012,r*.11]),"upright";case"hoe":case"rake":return n.add(e,Ve(r*.01,r*.01,r*.7,5),o,[0,0,r*.18],[Math.PI/2,0,0]),n.add(e,tt(r*.1,r*.05,r*.015),t==="hoe"?8026746:o,[0,-r*.02,r*.52]),"fist";case"hammer":return n.add(e,Ve(r*.01,r*.01,r*.25,5),o,[0,0,r*.1],[Math.PI/2,0,0]),n.add(e,tt(r*.08,r*.05,r*.05),5921370,[0,0,r*.22]),"fist";case"rod":return n.add(e,Ve(r*.006,r*.01,r*.9,4),o,[0,r*.25,r*.3],[.8,0,0]),"fist";case"sword":case"sting":case"shortsword":case"glamdring":case"scimitar":{let l=t==="sting"||t==="shortsword"?r*.3:r*.55,c=t==="sting"?11063551:a;return n.add(e,tt(r*.03,r*.1,r*.02),3811866,[0,0,0],[Math.PI/2,0,0]),n.add(e,tt(r*.1,r*.015,r*.02),12099680,[0,0,r*.05]),n.add(e,tt(r*.035,r*.012,l),c,[0,0,r*.06+l/2],t==="scimitar"?[.2,0,0]:[0,0,0]),"fist"}case"axe":case"bigAxe":{let l=t==="bigAxe";n.add(e,Ve(r*.014,r*.014,l?r*.55:r*.4,5),4860436,[0,0,l?r*.2:r*.14],[Math.PI/2,0,0]);for(let c of l?[-1,1]:[1])n.add(e,tt(r*.012,r*.14,r*.1),a,[0,c*r*.07,l?r*.42:r*.3]);return"fist"}case"mace":return n.add(e,Ve(r*.014,r*.014,r*.45,5),1710618,[0,0,r*.18],[Math.PI/2,0,0]),n.add(e,new qi(r*.07,0),2763306,[0,0,r*.42]),"fist";case"bow":case"longbow":{let l=t==="longbow"?r*.5:r*.34;return n.add(e,new ln(l,r*.009,4,14,Math.PI*.7),t==="longbow"?13154448:8018480,[0,0,-l*.85],[0,-Math.PI/2,-Math.PI*.35]),n.add(e,Ve(r*.002,r*.002,l*1.78,3),15263968,[0,0,-l*.4]),"upright"}case"shield":return n.add(e,Ve(r*.15,r*.15,r*.025,12),i.shieldColor??6967344,[(s==="L"?-1:1)*r*.04,r*.12,0],[0,0,Math.PI/2]),"fist";case"ring":return n.add(e,new ln(r*.025,r*.008,5,10),16765024,[0,r*.04,r*.02]),"upright";case"phial":return n.add(e,rs(r*.035,6,5),15792383,[0,r*.05,0]),"upright";default:return"fist"}}var We=Math.sin,e_=Math.cos,wd=(n,e,t,i)=>{let s=n%e/e;return s<t?s/t:s<i?1-(s-t)/(i-t):0};function Xt(n,e){return{lean:.02+We(n*1.6+e)*.012,headY:We(n*.35+e)*.35,headX:We(n*.5+e*2)*.05,lArmX:.02+We(n*1.6+e)*.03,lArmZ:-.1,lElbow:.18,rArmX:.02-We(n*1.6+e)*.03,rArmZ:.1,rElbow:.18}}var nh={idle:Xt,talk:(n,e)=>({...Xt(n,e),headY:We(n*.6+e)*.25,headX:We(n*3.1)*.06,rArmX:-.45+We(n*2.6)*.25,rArmZ:.2,rElbow:1.1+We(n*2.6+1)*.35,lArmX:-.2+We(n*1.9+2)*.18,lArmZ:-.15,lElbow:.7}),listen:(n,e)=>({...Xt(n,e),headX:.08+We(n*.9)*.05,headY:0,lArmX:-.12,lElbow:.75,rArmX:-.12,rElbow:.75,lArmZ:.22,rArmZ:-.22}),volunteer:(n,e)=>({...Xt(n,e),headY:0,headX:-.15,rArmX:-2.5,rArmZ:.2,rElbow:.35}),beckon:(n,e)=>({...Xt(n,e),headY:0,rArmX:-1.2,rArmZ:.1,rElbow:.6+Math.max(0,We(n*5))*1.2}),point:(n,e)=>({...Xt(n,e),headY:0,rArmX:-1.45,rArmZ:.08,rElbow:.05}),wave:(n,e)=>({...Xt(n,e),headY:0,rArmX:-.2,rArmZ:2.5+We(n*7)*.35,rElbow:.5}),raise:(n,e)=>({...Xt(n,e),headY:0,headX:-.3,lean:-.1,rArmX:-2.9,rArmZ:.15,rElbow:.1,lArmX:-.3,lElbow:.5}),cast:(n,e)=>({...Xt(n,e),headY:0,headX:-.1,lean:-.05,rArmX:-2.7,rArmZ:.2,rElbow:.15,lArmX:-1.4,lArmZ:-.1,lElbow:.1+We(n*5)*.1}),strike:n=>{let e=n%1.1/1.1,t=e<.45?-.6-e/.45*2.2:e<.62?-2.8+(e-.45)/.17*2.4:-.4-(e-.62)/.38*.2;return{lean:.1+(e>.45&&e<.62?1:0)*.15,twist:e<.45?-.3:.25,rArmX:t,rArmZ:.2,rElbow:.25,lArmX:-.7,lArmZ:-.2,lElbow:.9,lLegX:-.35,lKnee:.3,rLegX:.3,rKnee:.15,crouch:.05}},guard:n=>({lean:.1,crouch:.07,rArmX:-1.1,rArmZ:.1,rElbow:.9,lArmX:-.8,lArmZ:-.2,lElbow:1.2,lLegX:-.3,lKnee:.25,rLegX:.3,rKnee:.2,headY:We(n*.8)*.2}),shoot:n=>{let e=n%2.2/2.2;return{twist:-.25,headY:.3,lArmX:-1.5,lArmZ:-.05,lElbow:0,rArmX:-1.45,rArmZ:.25,rElbow:.4+(e<.55?e/.55:e<.62?1:0)*1.9,lLegX:-.2,rLegX:.25}},chop:n=>{let e=n%1/1,t=e<.55?e/.55:1-(e-.55)/.45,i=-.5-t*2.4;return{lean:.35-t*.4,rArmX:i,lArmX:i,rArmZ:-.1,lArmZ:.1,rElbow:.2,lElbow:.2,crouch:.06,lLegX:-.3,rLegX:.3,lKnee:.3,rKnee:.3}},hammer:n=>{let e=n%.8/.8,t=e<.6?e/.6:1-(e-.6)/.4;return{lean:.3,headX:.35,rArmX:-.6-t*1.6,rArmZ:.1,rElbow:1-t*.6,lArmX:-.8,lArmZ:.2,lElbow:1.1}},dig:n=>{let e=n%1.6/1.6,t=e<.5?e/.5:1-(e-.5)/.5;return{lean:.4-t*.25,headX:.3,rArmX:-.9-t*1.1,lArmX:-.8-t*1.1,rElbow:.4,lElbow:.5,lArmZ:.15,rArmZ:-.1,crouch:.05}},kneel:(n,e)=>({...Xt(n,e),headY:0,crouch:.46,lLegX:-1.5,lKnee:1.5,rLegX:.35,rKnee:1.95,lean:.12,headX:.35}),sit:(n,e)=>({...Xt(n,e),crouch:.5,lLegX:-1.5,lKnee:1.45,rLegX:-1.5,rKnee:1.45,lArmX:-.5,rArmX:-.5,lElbow:.6,rElbow:.6}),sitGround:(n,e)=>({...Xt(n,e),crouch:.88,lLegX:-1.4,lKnee:.5,rLegX:-1.3,rKnee:.9,lean:-.05,lArmX:.4,rArmX:.4,lArmZ:-.4,rArmZ:.4}),cheer:n=>({bob:Math.abs(We(n*6))*.05,lArmX:-2.6+We(n*6)*.2,rArmX:-2.6-We(n*6)*.2,lArmZ:-.45,rArmZ:.45,lElbow:.2,rElbow:.2,headX:-.25}),dance:n=>{let e=We(n*5.5);return{bob:Math.abs(e)*.05,twist:We(n*2.75)*.3,lean:.05,lLegX:-Math.max(0,e)*.7,lKnee:Math.max(0,e)*1.1,rLegX:-Math.max(0,-e)*.7,rKnee:Math.max(0,-e)*1.1,lArmX:-.4,rArmX:-.4,lArmZ:-.7,rArmZ:.7,lElbow:1.8,rElbow:1.8,headY:We(n*2.75)*.3}},cower:n=>({crouch:.22,lean:.35,headX:.35,lArmX:-1.8,rArmX:-1.8,lElbow:1.9,rElbow:1.9,lArmZ:.3,rArmZ:-.3,lKnee:.5,rKnee:.5,lLegX:-.25,rLegX:-.25,twist:We(n*9)*.03}),drink:(n,e)=>{let t=Math.min(1,wd(n+e,4.5,.2,.45)*2);return{...Xt(n,e),headX:-t*.35,rArmX:-.7-t*.9,rArmZ:.15,rElbow:1.3+t*.9}},smoke:(n,e)=>{let t=Math.min(1,wd(n+e,6,.15,.4)*2);return{...Xt(n,e),headX:-t*.1,rArmX:-.55-t*.5,rArmZ:.2,rElbow:1.7+t*.5,lArmX:-.3,lElbow:1.4,lArmZ:.35}},hold:(n,e)=>({...Xt(n,e),headY:0,headX:.35,lArmX:-.95,rArmX:-.95,lElbow:.85,rElbow:.85,lArmZ:.28,rArmZ:-.28}),reach:n=>({headX:-.5,lean:-.05,rArmX:-2.4+We(n*1.4)*.12,rArmZ:.1,rElbow:.1,lArmX:-.2,lElbow:.4}),look:(n,e)=>({...Xt(n,e),headY:We(n*.4)*.15,headX:-.55,lean:-.08}),mourn:(n,e)=>({...Xt(n,e),headY:0,headX:.55,lean:.15,lArmX:-.4,rArmX:-.4,lElbow:.5,rElbow:.5,lArmZ:.25,rArmZ:-.25}),bowdown:n=>({lean:.45+We(n)*.02,headX:.3,lArmX:-.1,rArmX:-.9,rArmZ:-.2,rElbow:1.4,lElbow:.2}),sentry:(n,e)=>({lean:-.02,headY:We(n*.3+e)*.5,rArmX:-.3,rArmZ:.05,rElbow:1.15,lArmZ:-.06,lElbow:.1}),fish:(n,e)=>({...Xt(n,e),headY:0,headX:.25,rArmX:-.9+We(n*.7)*.05,rElbow:.6,lArmX:-.6,lElbow:.9,lArmZ:.2}),row:n=>{let e=We(n*2.2);return{crouch:.5,lLegX:-1.4,lKnee:1.2,rLegX:-1.4,rKnee:1.2,lean:.2+e*.25,lArmX:-1.2-e*.4,rArmX:-1.2-e*.4,lElbow:.6-e*.4,rElbow:.6-e*.4}},ride:n=>({lLegX:-1.15,rLegX:-1.15,lKnee:1.4,rKnee:1.4,lLegZ:-.45,rLegZ:.45,lArmX:-.6,rArmX:-.6,lElbow:1,rElbow:1,lean:.08,bob:Math.abs(We(n*4))*.015}),struggle:n=>({lArmX:-1.4+We(n*8)*.8,rArmX:-1.4+We(n*8+2)*.8,lLegX:We(n*7)*.6,rLegX:-We(n*7)*.6,lKnee:.6,rKnee:.6,headY:We(n*4)*.4}),lift:n=>({lean:-.05,lArmX:-2.4,rArmX:-2.4,lArmZ:-.5,rArmZ:.5,lElbow:.5,rElbow:.5,headX:-.3+We(n)*.05}),crawl:n=>({crouch:.35,lean:.9,headX:-.8,lArmX:-1.2+We(n*4)*.5,rArmX:-1.2-We(n*4)*.5,lElbow:.4,rElbow:.4,lLegX:-.9-We(n*4)*.3,rLegX:-.9+We(n*4)*.3,lKnee:1.6,rKnee:1.6}),gloat:n=>({crouch:.3,lean:.55,headX:-.55,headY:We(n*2)*.4,lArmX:-1,rArmX:-1,lElbow:1.5+We(n*6)*.2,rElbow:1.5-We(n*6)*.2,lArmZ:.3,rArmZ:-.3,lLegX:-.8,rLegX:-.8,lKnee:1.4,rKnee:1.4})},t_=new Set(["strike","guard","raise","cast","shoot","chop","hammer"]);function n_(n,e,t){let i=t*(e?1.35:1),s=We(n),r=e_(n);return{bob:(1-Math.abs(s))*(e?.045:.022),lean:e?.22:.05,twist:s*.08,lLegX:-s*.55*i,rLegX:s*.55*i,lKnee:.1+Math.max(0,r)*.85*i,rKnee:.1+Math.max(0,-r)*.85*i,lArmX:s*.5*i,rArmX:-s*.5*i,lArmZ:-.08,rArmZ:.08,lElbow:e?1.4:.35,rElbow:e?1.4:.35,headY:0,headX:0}}var ih=["bob","crouch","lean","twist","side","headX","headY","lArmX","lArmZ","lElbow","rArmX","rArmZ","rElbow","lLegX","lLegZ","lKnee","rLegX","rLegZ","rKnee"],Sd=new Map,xl=new Set;function i_(n){let e=new Mt({vertexColors:!0,roughness:.82,flatShading:!0}),t=n.selfLight??.22;return e.onBeforeCompile=i=>{i.fragmentShader=i.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += vColor.rgb * ${t.toFixed(3)};`)},e.customProgramCacheKey=()=>`rig-${t.toFixed(3)}`,e}function oa(n,e){var $;let t=e&&Sd.get(e);if(!t){let N=Hx(n);t={d:N,...Yx(n,N)},e&&Sd.set(e,t)}let{d:i,geos:s,held:r}=t,a=i_(n),o=N=>s[N]?new Y(s[N],a):null,l=(N,te,V=0,oe=0,pe=0)=>{let _e=new Me;_e.position.set(V,oe,pe);let Ne=o(N);return Ne&&_e.add(Ne),te.add(_e),_e},c=new Me,h=l("pelvis",c,0,i.legs,0),u=l("torso",h),d=l("head",u,0,i.torso+i.neck,0),f=l("cloak",u,0,i.torso*.97,-i.chest*.55),p=l("skirt",h,0,i.torso*.12,0),x=l("upperL",u,-i.sh,i.torso*.9,0),g=l("upperR",u,i.sh,i.torso*.9,0),m=l("foreL",x,0,-i.upper,0),M=l("foreR",g,0,-i.upper,0),y=l("handL",m,0,-i.fore*.88,0),_=l("handR",M,0,-i.fore*.88,0),S=l("handLX",y),T=l("handRX",_),R=l("thighL",h,-i.hip,0,0),C=l("thighR",h,i.hip,0,0),w=l("shinL",R,0,-i.thigh,0),b=l("shinR",C,0,-i.thigh,0);s.cloak||(f.visible=!1);let L=n.pose||{},P={root:c,d:i,action:"idle",since:0,prev:null,prevSince:0,blend:1,walkW:0,walking:!1,phase:Math.random()*6,seed:Math.random()*10,pose:{},run:!1,amp:(($=n.coat)==null?void 0:$.len)==="ankle"?.6:1,pace:n.pace??(i.H<.8?9:7)},z=Object.fromEntries(ih.map(N=>[N,0]));c.userData.walk=N=>{N>0&&(P.phase+=N*P.pace,P.walking=!0)},c.userData.act=(N="idle",{run:te=!1}={})=>{if(N==="walk"||N==="run"){P.run=N==="run";return}N!==P.action&&(P.prev=P.action,P.prevSince=P.since,P.action=nh[N]?N:"idle",P.since=0,P.blend=0)},c.userData.running=N=>{P.run=N},Object.defineProperty(c.userData,"action",{get:()=>P.action,enumerable:!1}),c.userData.pose=P.pose,P.tick=N=>{P.since+=N,P.prevSince+=N,P.blend=Math.min(1,P.blend+N*4),P.walkW+=((P.walking?1:0)-P.walkW)*Math.min(1,N*8);let te=P.walkW>.02,V=nh[P.action](P.since,P.seed),oe=P.blend<1?nh[P.prev](P.prevSince,P.seed):null,pe=te?n_(P.phase,P.run,P.amp):null,_e=P.action!=="idle";for(let Ne of ih){let ot=V[Ne]??0;if(oe&&(ot=(oe[Ne]??0)+(ot-(oe[Ne]??0))*P.blend),pe){let yt=_e&&Ne.includes("Arm")||_e&&Ne.includes("Elbow")?0:P.walkW;ot+=((pe[Ne]??0)-ot)*yt}z[Ne]=ot+(L[Ne]??0)+(P.pose[Ne]??0)}X(z),P.walking=!1};function X(N){var V,oe;h.position.y=i.legs*(1-N.crouch)+N.bob*i.H,u.rotation.set(N.lean,N.twist,N.side),d.rotation.set(N.headX-N.lean*.6,N.headY,0),x.rotation.set(N.lArmX,0,N.lArmZ),g.rotation.set(N.rArmX,0,N.rArmZ),m.rotation.x=-N.lElbow,M.rotation.x=-N.rElbow,((V=r.L)==null?void 0:V.grip)==="upright"?y.rotation.x=-(N.lArmX+N.lean)+N.lElbow:y.rotation.x=0,((oe=r.R)==null?void 0:oe.grip)==="upright"?_.rotation.x=-(N.rArmX+N.lean)+N.rElbow:_.rotation.x=0,R.rotation.set(N.lLegX,0,N.lLegZ),C.rotation.set(N.rLegX,0,N.rLegZ),w.rotation.x=N.lKnee,b.rotation.x=N.rKnee,p.rotation.x=(N.lLegX+N.rLegX)*.35,p.scale.x=1+Math.abs(N.lLegX-N.rLegX)*.12,f.rotation.x=-N.lean*.8+P.walkW*(P.run?.5:.18)+We(P.phase*2)*.03*P.walkW;let te=t_.has(P.action)&&P.blend>.3;S.visible=te,T.visible=te}return X(Object.fromEntries(ih.map(N=>[N,L[N]??0]))),c.userData.rig=P,c.userData.material=a,c.userData.joints={head:d,pelvis:h,upperL:x,upperR:g,handL:y,handR:_},xl.add(P),c}function s_(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function Td(n){for(let e of xl){if(!e.root.parent){e.root.userData.disposed&&xl.delete(e);continue}s_(e.root)?e.tick(n):e.walking=!1}}function Ad(n){n.traverse(e=>{e.userData.rig&&(e.userData.disposed=!0,xl.delete(e.userData.rig))})}var _l;function Rd(){if(_l)return _l;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.6)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),_l=new Xi(n),_l}function Ft({count:n=120,color:e=16752704,endColor:t=4198400,size:i=.35,life:s=1.2,spread:r=.2,velocity:a=[0,1.2,0],jitter:o=.4,gravity:l=0,rate:c=1,additive:h=!0}={}){let u=new Dt,d=new Float32Array(n*3),f=new Float32Array(n*3);u.setAttribute("position",new Nt(d,3)),u.setAttribute("color",new Nt(f,3));let p=new ks({size:i,map:Rd(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:h?Ki:si,sizeAttenuation:!0}),x=new Nr(u,p);x.frustumCulled=!1;let g=new Float32Array(n).fill(1/0),m=new Float32Array(n*3),M=new Be(e),y=new Be(t),_=new Be,S=0;return x.userData.on=!0,x.userData.velocity=a,x.userData.update=T=>{let R=x.userData.velocity;x.userData.on&&(S+=n/s*c*T);for(let C=0;C<n;C++){if(g[C]>=s)if(S>=1)S-=1,g[C]=0,d[C*3]=(Math.random()-.5)*r*2,d[C*3+1]=(Math.random()-.5)*r,d[C*3+2]=(Math.random()-.5)*r*2,m[C*3]=R[0]+(Math.random()-.5)*o,m[C*3+1]=R[1]+(Math.random()-.5)*o,m[C*3+2]=R[2]+(Math.random()-.5)*o;else{d[C*3+1]=-9999;continue}g[C]+=T,m[C*3+1]-=l*T,d[C*3]+=m[C*3]*T,d[C*3+1]+=m[C*3+1]*T,d[C*3+2]+=m[C*3+2]*T;let w=Math.min(1,g[C]/s);_.copy(M).lerp(y,w).multiplyScalar(1-w*w),f[C*3]=_.r,f[C*3+1]=_.g,f[C*3+2]=_.b}u.attributes.position.needsUpdate=!0,u.attributes.color.needsUpdate=!0},x}function qn(n=1,{light:e=!1}={}){let t=new Me,i=Ft({count:70,size:.45*n,life:.9,spread:.18*n,velocity:[0,1.1*n,0],jitter:.35*n}),s=Ft({count:25,color:3813416,endColor:1051656,size:.7*n,life:2.2,spread:.1*n,velocity:[0,.8*n,0],jitter:.25*n,additive:!1});s.position.y=.5*n,t.add(i,s);let r;return e&&(r=new Ji(16747056,6*n,8*n,1.6),r.position.y=.4*n,t.add(r)),t.userData.update=(a,o)=>{i.userData.update(a),s.userData.update(a),r&&(r.intensity=(5+Math.sin(o*13)+Math.sin(o*7.3))*n)},t.userData.set=a=>{i.userData.on=a,s.userData.on=a,r&&(r.visible=a)},t}function Cd(n=16765040,e=5,t=0){let i=new Me,s=Ft({count:30,color:16769184,endColor:4202496,size:.2,life:.5,spread:.02,velocity:[0,-.4,0],jitter:.1}),r=Ft({count:140,color:n,endColor:1049856,size:.35,life:1.6,spread:.05,velocity:[0,0,0],jitter:5.5,gravity:1.2,rate:0});i.add(s,r);let a={intensity:0,position:new I},o=-t;return i.userData.update=l=>{o+=l;let c=3.2,h=(o%c+c)%c,u=o>=0&&h<1;if(s.userData.on=u,s.position.y=u?h*e:s.position.y,o>=0&&h>=1&&h<1+l*1.5){r.position.y=e,r.userData.on=!0,r.userData.velocity=[0,0,0];for(let d=0;d<6;d++)r.userData.update(.05);r.userData.on=!1,a.position.y=e,a.intensity=25}a.intensity*=Math.pow(.02,l),s.userData.update(l),r.userData.update(l)},i}function Ot(n=16777215,e=1){let t=new Me,i=new Ur(new Bs({map:Rd(),color:n,transparent:!0,blending:Ki,depthWrite:!1}));return i.scale.setScalar(e*2),t.add(i),t.userData.set=s=>{i.material.opacity=s,i.scale.setScalar(e*2*(.6+.4*s)),t.visible=s>.01},t.userData.set(0),t}function Id(n=8257456,e=30,t=.25){let i=new Y(new Ee(t,t*1.6,e,12,1,!0),new wt({color:n,transparent:!0,opacity:.5,blending:Ki,depthWrite:!1,side:It}));return i.position.y=e/2,i}var yl={color:6056536,len:.44,hood:"down"},vl=8044656,as={frodo:{name:"Frodo",body:"hobbit",height:.58,skin:15714982,eyes:3828400,hair:{style:"curly",color:2759184},ears:"hobbit",top:15261384,vest:5917232,legs:5917238,feet:"bare",cloak:yl,brooch:vl,right:{item:"sting",drawn:!0}},sam:{name:"Sam",body:"hobbit",height:.6,shape:{girth:1.35},skin:15646874,hair:{style:"curly",color:10119732},ears:"hobbit",top:14866106,vest:9071162,legs:6968374,feet:"bare",cloak:yl,brooch:vl,back:["pack"],hip:["pouch"],right:{item:"shortsword",drawn:!0}},merry:{name:"Merry",body:"hobbit",height:.6,skin:15713952,hair:{style:"curly",color:8014372},ears:"hobbit",top:15260864,vest:10516526,legs:4868656,feet:"bare",cloak:yl,brooch:vl,right:{item:"shortsword",drawn:!0}},pippin:{name:"Pippin",body:"hobbit",height:.58,skin:15780518,hair:{style:"curly",color:10907708},ears:"hobbit",top:15261900,vest:8010282,scarf:13672512,legs:5921344,feet:"bare",cloak:yl,brooch:vl,right:{item:"shortsword",drawn:!0}},bilbo:{name:"Bilbo",body:"hobbit",height:.58,skin:15713952,hair:{style:"curly",color:6965802},ears:"hobbit",top:15919828,vest:12072490,coat:{color:6959654,len:"hip",flare:.2},legs:6968374,feet:"bare",hip:["pouch"],right:{item:"sting",drawn:!0}},gandalf:{name:"Gandalf",height:1.02,skin:14860448,hair:{style:"flowing",color:12105904},beard:{style:"long",color:12895420},hat:{style:"wizard",color:7107194},top:8158330,coat:{color:8750464,len:"ankle",flare:.5},scarf:6252146,belt:5917242,cloak:{color:7237744,len:.82},boots:3813416,right:{item:"staff"},left:{item:"glamdring",drawn:!0},pose:{lean:.07}},gandalf_white:{name:"Gandalf the White",height:1.02,skin:15255722,hair:{style:"flowing",color:16053488},beard:{style:"long",color:16053488},top:15921386,coat:{color:16052972,len:"ankle",flare:.5},belt:14209216,cloak:{color:15263456,len:.85},boots:13156528,right:{item:"whiteStaff"},left:{item:"glamdring",drawn:!0},glow:16777215,selfLight:.32},saruman:{name:"Saruman",height:1.03,skin:14861480,hair:{style:"flowing",color:15658730},beard:{style:"long",color:15132386},top:15658214,coat:{color:15789800,len:"ankle",flare:.45},belt:9079432,cloak:{color:15000284,len:.85},right:{item:"darkStaff"}},aragorn:{name:"Aragorn",height:1,skin:13803644,hair:{style:"long",color:2759186},beard:{style:"stubble",color:2759186},top:3815988,coat:{color:4863270,len:"knee",flare:.35},belt:2759698,legs:3025446,boots:3811868,bracers:3810838,cloak:{color:3424302,len:.72,hood:"down"},hip:["sword","dagger"],right:{item:"sword",drawn:!0}},boromir:{name:"Boromir",height:1.02,shape:{shoulders:.27,girth:1.1},skin:14461060,hair:{style:"long",color:8014374},beard:{style:"short",color:6962720},top:6956064,coat:{color:5909028,len:"knee",flare:.35},belt:2759698,legs:3811876,bracers:4863012,shield:8018480,cloak:{color:3811876,len:.7,fur:6969928},hip:["sword","horn"],back:["shield"],right:{item:"sword",drawn:!0}},faramir:{name:"Faramir",height:1,skin:14462088,hair:{style:"long",color:9071168},beard:{style:"stubble",color:8018486},top:3820080,coat:{color:4872762,len:"knee",flare:.3},belt:2759698,legs:3815978,cloak:{color:3820080,len:.7,hood:"down"},back:["quiver"],hip:["sword"],left:{item:"bow"}},theoden:{name:"Th\xE9oden",height:1,skin:14463124,hair:{style:"long",color:14208176},beard:{style:"short",color:13682864},hat:{style:"circlet",color:13938487},top:3821616,plate:12098128,coat:{color:3099178,len:"knee"},legs:3815978,cloak:{color:3103274,len:.75,fur:6969920},hip:["sword"],right:{item:"sword",drawn:!0}},eomer:{name:"\xC9omer",height:1.02,skin:14463124,hair:{style:"long",color:10517056},beard:{style:"short",color:10121272},hat:{style:"helm",color:11577488,plume:15789280},top:3820080,plate:9079424,coat:{color:4864554,len:"knee"},cloak:{color:3099178,len:.72},shield:3103274,right:{item:"sword",drawn:!0},left:{item:"shield"}},eowyn:{name:"\xC9owyn",body:"woman",height:.95,skin:15783100,hair:{style:"flowing",color:15257738},top:15262936,coat:{color:14736592,len:"ankle",flare:.55},belt:9075280,cloak:{color:3824186,len:.8},shield:5925450,right:{item:"sword",drawn:!0},left:{item:"shield",drawn:!0}},bard:{name:"Bard",height:1,skin:14199430,hair:{style:"long",color:2760728},beard:{style:"stubble",color:2760728},top:3815994,coat:{color:4864554,len:"knee"},legs:3025446,cloak:{color:3813416,len:.6,hood:"down"},back:["quiver"],left:{item:"bow"}},beorn:{name:"Beorn",height:1.3,shape:{shoulders:.3,girth:1.4},skin:13146736,hair:{style:"wild",color:2759184},beard:{style:"short",color:2759184},top:5913124,coat:{color:4861984,len:"knee",flare:.3},legs:3811866},grima:{name:"Gr\xEDma",height:.95,shape:{girth:.85},skin:15259848,hair:{style:"long",color:1315860},top:1710618,coat:{color:1184274,len:"ankle",flare:.4},cloak:{color:1710618,len:.8,fur:2763306},pose:{lean:.14,headX:.1}},legolas:{name:"Legolas",body:"elf",height:1,skin:15916232,eyes:5933760,ears:"elf",hair:{style:"flowing",color:15786152,braids:!0},top:6978122,coat:{color:8028248,len:"thigh",flare:.3},belt:5917232,legs:5921352,boots:5917232,bracers:6969914,back:["quiver"],left:{item:"longbow"}},galadriel:{name:"Galadriel",body:"woman",shape:{heads:8},height:1.06,skin:16180436,ears:"elf",hair:{style:"flowing",color:15785120},hat:{style:"circlet",color:15261896},top:16184558,coat:{color:16052972,len:"ankle",flare:.75},glow:15266047,selfLight:.5},elrond:{name:"Elrond",body:"elf",height:1.03,skin:15256756,ears:"elf",hair:{style:"long",color:2759700},hat:{style:"circlet",color:13152368},top:6957626,coat:{color:5906484,len:"ankle",flare:.45},cloak:{color:3811898,len:.85}},thranduil:{name:"Thranduil",body:"elf",height:1.04,skin:15917264,ears:"elf",hair:{style:"flowing",color:15918784},hat:{style:"crown",color:11037226},top:9075338,coat:{color:6969962,len:"ankle",flare:.5},cloak:{color:8006186,len:.85}},gimli:{name:"Gimli",body:"dwarf",height:.72,skin:14197892,hair:{style:"wild",color:10503710,braids:!0},beard:{style:"dwarf",color:10503710,forked:!0,moustache:!0},hat:{style:"dwarfhelm",color:9077880,band:10123834},top:6965804,mail:9079432,coat:{color:5913124,len:"thigh"},belt:3810836,legs:4864554,bracers:5917240,back:["axes"],right:{item:"bigAxe"}},thorin:{name:"Thorin",body:"dwarf",shape:{girth:1.35,heads:5},height:.75,skin:14198920,hair:{style:"long",color:2103320,braids:!0},beard:{style:"short",color:2105376},top:2766160,coat:{color:2764864,len:"knee"},cloak:{color:2763322,len:.45,fur:6969928},belt:5917232,hip:["sword"],right:{item:"sword",drawn:!0}},balin:{name:"Balin",body:"dwarf",height:.7,skin:14726296,hair:{style:"short",color:15790312},beard:{style:"dwarf",color:15921898,moustache:!0},top:9054756,coat:{color:8006178,len:"knee"},belt:4861984},dwalin:{name:"Dwalin",body:"dwarf",height:.77,skin:13671548,hair:{style:"bald"},beard:{style:"dwarf",color:4864560},top:3820090,coat:{color:3813412,len:"thigh"},bracers:5917240,right:{item:"axe"}},bombur:{name:"Bombur",body:"dwarf",shape:{girth:2.3},height:.7,skin:15250580,hair:{style:"short",color:12607530,braids:!0},beard:{style:"dwarf",color:12607530,forked:!0},top:6973994,coat:{color:5921322,len:"thigh"},belt:4861984},kili:{name:"K\xEDli",body:"dwarf",shape:{girth:1.2,heads:5.2},height:.75,skin:14725264,hair:{style:"long",color:2760728},beard:{style:"stubble",color:2760728},top:4864592,coat:{color:3813440,len:"knee"},back:["quiver"],left:{item:"bow"}},fili:{name:"F\xEDli",body:"dwarf",shape:{girth:1.25,heads:5},height:.75,skin:14988436,hair:{style:"long",color:13672528,braids:!0},beard:{style:"short",color:13672528,moustache:!0},top:5917232,coat:{color:6967344,len:"knee"},right:{item:"sword",drawn:!0}},oin:{name:"\xD3in",body:"dwarf",height:.7,hair:{style:"wild",color:10132114},beard:{style:"dwarf",color:9079428,forked:!0},top:5917242,coat:{color:4864554,len:"knee"}},gloin:{name:"Gl\xF3in",body:"dwarf",shape:{girth:1.8},height:.71,hair:{style:"wild",color:11553312},beard:{style:"dwarf",color:11553312,forked:!0},top:6961706,coat:{color:5910560,len:"knee"},right:{item:"axe"}},ori:{name:"Ori",body:"dwarf",shape:{girth:1.2,heads:5},height:.72,hair:{style:"short",color:8015920},beard:{style:"short",color:8015920},top:9075290,scarf:10127978,coat:{color:8022602,len:"knee"}},nori:{name:"Nori",body:"dwarf",height:.72,hair:{style:"wild",color:6961706},beard:{style:"dwarf",color:6961706},top:5921354,coat:{color:4868666,len:"knee"}},dori:{name:"Dori",body:"dwarf",height:.73,hair:{style:"long",color:12103848,braids:!0},beard:{style:"dwarf",color:12103848},top:6965850,coat:{color:5913162,len:"knee"}},bifur:{name:"Bifur",body:"dwarf",height:.72,hair:{style:"wild",color:5917242},beard:{style:"dwarf",color:5917242},top:4872778,coat:{color:3820090,len:"knee"},right:{item:"spear"}},bofur:{name:"Bofur",body:"dwarf",height:.72,hair:{style:"short",color:3811866,braids:!0},beard:{style:"short",color:3811866,moustache:!0},hat:{style:"cap",color:6969914},top:5918768,coat:{color:6969920,len:"knee"},right:{item:"hammer"}},gollum:{name:"Gollum",body:"gollum",height:.62,skin:12103316,eyes:12574960,bigEyes:!0,ears:"big",hair:{style:"strands",color:4867640},top:12103316,legs:12103316,sleeves:12103316,feet:"barefoot",coat:{color:6971472,len:"hip",flare:.1,skirtOnly:!0},selfLight:.3,pace:11,pose:{crouch:.28,lean:.55,headX:-.3,lArmX:-.6,rArmX:-.6,lElbow:.9,rElbow:.9,lLegX:-.5,rLegX:-.5,lKnee:.8,rKnee:.8}},treebeard:{name:"Treebeard",body:"ent",height:2.4,skin:5915696,top:5126696,sleeves:5126696,legs:4863524,boots:3811868,gloves:4863524,eyes:13148224,hair:{style:"leaves",color:4876842},beard:{style:"moss",color:6978122},pace:2.6,selfLight:.18},nazgul:{name:"Nazg\xFBl",height:1.1,void:!0,top:920844,sleeves:920844,legs:920844,coat:{color:920844,len:"ankle",flare:.6},cloak:{color:1184016,len:.95,hood:"up"},gloves:2763306,boots:1381653,right:{item:"sword",drawn:!0},selfLight:.06},witch_king:{name:"Witch-king",height:1.14,void:!0,top:920844,sleeves:920844,legs:920844,coat:{color:920844,len:"ankle",flare:.6},cloak:{color:1184016,len:.95,hood:"up"},hat:{style:"spikes",color:3815994},gloves:3815994,boots:1381653,right:{item:"sword",drawn:!0},selfLight:.06},uruk:{name:"Uruk-hai",folk:"uruk"},orc:{name:"Orc",folk:"orc"},goblin:{name:"Goblin",folk:"goblin"},ghost:{name:"Dead",folk:"dead"},king_of_the_dead:{name:"King of the Dead",folk:"dead",variant:99},rohirrim:{name:"Rider",rider:!0}},je=(n,e)=>n[(e%n.length+n.length)%n.length];function la(n,e=0){switch(n){case"hobbit":return{body:"hobbit",height:.56+e%3*.02,shape:{girth:1.1+e%4*.12},skin:je([15713952,15912878,15252628],e),ears:"hobbit",hair:{style:"curly",color:je([6963232,10119732,3810324,11565116,5913120],e)},top:je([15524556,14733488,14207144],e),vest:je([8030778,10504234,5925514,12095552,6965802],e),legs:je([6968374,4872762,8020032],e),feet:"bare",coat:e%5===3?{color:12614202,len:"knee",skirtOnly:!0,flare:.5}:void 0};case"bree":return{height:.97+e%3*.03,skin:je([14462088,14989464,13146744],e),hair:{style:je(["short","long","short","bald"],e),color:je([3811866,6965802,9079424],e)},beard:e%2?{style:"short",color:je([3811866,6965802,9079424],e)}:void 0,top:je([9071178,6974042,8014394,5921386],e),coat:{color:je([5917242,4868666,6969930],e),len:"knee"},legs:4864554,belly:e%3===0?9071178:void 0,shape:{girth:1+e%3*.15}};case"ranger":return{height:1,skin:13672572,hair:{style:"long",color:je([2759186,3811866],e)},beard:{style:"stubble",color:2759186},top:3815988,coat:{color:3813926,len:"knee"},cloak:{color:3029546,len:.72,hood:e%2?"up":"down"},hip:["sword"],right:{item:"sword",drawn:!0}};case"elf":return{body:e%2?"woman":"elf",height:e%2?.98:1.02,skin:15916232,ears:"elf",hair:{style:"flowing",color:je([15786152,2759700,14207136,4861984],e)},top:je([15261896,10135674,13154442,14209248],e),coat:{color:je([14735552,9083498,12101752,13156568],e),len:"ankle",flare:.5},hat:e%3===0?{style:"circlet",color:14207120}:void 0};case"woodelf":return{body:"elf",height:1,skin:15785160,ears:"elf",hair:{style:"flowing",color:je([15259808,6965802,13150320],e)},top:6969914,coat:{color:je([8018480,5925434],e),len:"knee"},cloak:{color:5917226,len:.6},back:["quiver"],right:e%2?{item:"spear"}:void 0,left:e%2?void 0:{item:"bow"}};case"rohan":return{height:1,skin:14726292,hair:{style:"long",color:je([14202992,10517056,13148256],e)},beard:e%2?{style:"short",color:10517056}:void 0,hat:{style:"helm",color:11051144,plume:e%3===0?15789280:void 0},top:3820080,plate:9079424,coat:{color:4864554,len:"knee"},cloak:{color:3099178,len:.7},shield:3103274,right:{item:"spear"},left:e%2?{item:"shield"}:void 0};case"gondor":return{height:1,skin:14462088,hair:{style:"short",color:2759186},hat:{style:"helm",color:13159632,tall:!0,wings:15263976},top:1710622,plate:2763312,emblem:15790320,coat:{color:1710622,len:"knee"},legs:1710622,shield:1710622,right:{item:"spear"},left:{item:"shield"}};case"laketown":return{height:.97+e%3*.03,skin:je([14462088,14989464],e),hair:{style:je(["short","long","bald"],e),color:je([3811866,6965802,2759186],e)},beard:e%2?{style:"short",color:3811866}:void 0,top:je([5925498,6969930,4872794],e),coat:{color:je([3820122,5917242],e),len:"knee"}};case"dwarf":return{body:"dwarf",height:.7+e%3*.02,shape:{girth:1.5+e%3*.2},skin:14198920,hair:{style:je(["wild","bald","short"],e),color:je([3811866,9062944,10132114,5913120],e)},beard:{style:"dwarf",color:je([3811866,9062944,10132114,5913120],e),forked:e%2===0},top:je([5913130,3820122,6969914],e),mail:e%2?9079432:void 0,coat:{color:je([4864554,3816010],e),len:"thigh"},right:{item:je(["hammer","axe","bigAxe"],e)},hat:e%3===0?{style:"dwarfhelm",color:9077880}:void 0};case"uruk":return{body:"uruk",height:1,skin:4864560,eyes:12595216,hair:{style:"long",color:1052688},warpaint:15263976,top:1973274,plate:2762790,legs:2761760,boots:1709588,shield:1710618,left:{item:"shield"},right:{item:"scimitar"},selfLight:.16,pose:{lean:.1}};case"orc":return{body:"goblin",height:.88,skin:je([5918784,6969928,4868666],e),eyes:13672480,ears:"big",hair:{style:"strands",color:1710618},top:3813928,plate:3814448,hat:{style:"helm",color:3815992},legs:2761760,right:{item:"scimitar"},pose:{lean:.2},selfLight:.16};case"goblin":return{body:"goblin",height:.72,skin:je([9078896,10130040,8026722],e),eyes:14729280,ears:"big",hair:{style:"strands",color:2763306},top:4866100,legs:3813928,feet:"barefoot",coat:{color:3813928,len:"thigh",skirtOnly:!0,flare:.2},right:{item:"scimitar"},pose:{lean:.28,headX:-.2}};case"dead":return{height:e===99?1.25:1,skin:10158032,hair:{style:"long",color:10158032},beard:{style:"short",color:10158032},top:8060856,coat:{color:7006376,len:"knee"},hat:e===99?{style:"crown",color:13172704}:{style:"helm",color:9109448},cloak:{color:5951640,len:.7},right:{item:"sword"},ghost:!0};case"corsair":return{height:1,skin:11567194,hair:{style:"long",color:1708560},beard:{style:"short",color:1708560},hat:e%2?{style:"cap",color:5904922}:void 0,top:2763306,coat:{color:je([5904922,2763322],e),len:"knee"},right:{item:"scimitar"}};case"ent":return{body:"ent",height:2.1+e%3*.25,skin:je([5915696,6969920,4864554],e),top:je([5126696,5917232,4078118],e),sleeves:je([5126696,5917232],e),legs:4863524,boots:3811868,gloves:4863524,eyes:13148224,hair:{style:"leaves",color:je([4876842,9071146,3824186],e)},beard:{style:"moss",color:6978122},pace:2.6,selfLight:.18};case"mordor":return{body:"uruk",height:.95,skin:3813416,eyes:14704672,hair:{style:"bald"},top:1710102,plate:2762276,hat:{style:"helm",color:2763304},legs:1710102,right:{item:je(["spear","scimitar","banner"],e)},banner:3803658,selfLight:.14};case"havens":return{body:"elf",height:1.02,skin:15917264,ears:"elf",hair:{style:"flowing",color:je([13156528,2759700],e)},top:15265008,coat:{color:je([14476524,13160668],e),len:"ankle",flare:.5},cloak:{color:10135736,len:.8}};default:return la("bree",e)}}function Tn(n,e={}){let[t,i]=n.split(":"),s=as[t];if(s!=null&&s.rider){let l=Fn();return l.userData.id=n,l}let r,a;if(s!=null&&s.folk){let l=s.variant??Math.floor(Math.random()*5);r=la(s.folk,l),a=`${s.folk}:${l}`}else s?(r=s,a=t):(r=la(t,Number(i)||0),a=`${t}:${Number(i)||0}`);(e.right||e.left)&&(r={...r},e.right&&(r.right={item:e.right}),e.left&&(r.left={item:e.left}),a+=`+${e.right||""}+${e.left||""}`);let o=r_(r,a);return o.userData.id=n,o.userData.name=(s==null?void 0:s.name)||t,o}function r_(n,e){let t=oa(n,e);if(n.glow){let i=Ot(n.glow,.6*(n.height||1));i.userData.set(.5),i.position.y=(n.height||1)*.85,t.add(i)}if(n.ghost){let i=t.userData.material;i.transparent=!0,i.opacity=.5,i.depthWrite=!1,i.emissive=new Be(4259728),i.emissiveIntensity=.7}return t}var ca=(n=!1)=>Tn(n?"witch_king":"nazgul"),os=(n="uruk")=>Tn(`${n}:${Math.floor(Math.random()*5)}`),Ml=()=>Tn(`dead:${Math.floor(Math.random()*5)}`);var Kt=(n,e={})=>new Mt({color:n,roughness:.85,flatShading:!0,emissive:n,emissiveIntensity:.2,...e});function a_(n,e,t){let i=new Me,s=new Y(new Ee(.055*n,.04*n,.3*n,6),Kt(e));s.position.y=-.15*n,i.add(s);let r=new Me;r.position.y=-.3*n;let a=new Y(new Ee(.028*n,.025*n,.27*n,5),Kt(e));a.position.y=-.135*n;let o=new Y(new Ee(.035*n,.042*n,.05*n,6),Kt(2761244));return o.position.y=-.285*n,r.add(a,o),i.add(r),i.userData.knee=r,i.userData.hind=t,i}function ha(n=8018490,e=!1,{size:t=.9,saddle:i=!0,mane:s=2759184}={}){let r=t/.9,a=e?789258:n,o=e?328965:s,l=new Me,c=new Me;c.position.y=.66*r,l.add(c);let h=new Y(new Ee(.2*r,.19*r,.78*r,9),Kt(a));h.rotation.x=Math.PI/2,h.scale.set(.9,1,1.08),c.add(h);let u=new Y(new ct(.2*r,9,7),Kt(a));u.position.z=.36*r,u.scale.set(.9,1.05,.9);let d=new Y(new ct(.2*r,9,7),Kt(a));d.position.set(0,.02*r,-.36*r),c.add(u,d);let f=new Me;f.position.set(0,.1*r,.4*r),f.rotation.x=.75,c.add(f);let p=new Y(new Ee(.09*r,.15*r,.46*r,7),Kt(a));p.position.y=.2*r,p.scale.z=1.25,f.add(p);let x=new Y(new qe(.04*r,.46*r,.1*r),Kt(o));x.position.set(0,.22*r,-.12*r),f.add(x);let g=new Me;g.position.y=.44*r,g.rotation.x=1.34,f.add(g);let m=new Y(new Ee(.05*r,.085*r,.34*r,7),Kt(a));m.position.y=.12*r,m.scale.z=1.2,g.add(m);for(let b of[-1,1]){let L=new Y(new kt(.025*r,.09*r,4),Kt(a));L.position.set(b*.045*r,-.04*r,-.08*r),L.rotation.x=-1.2,g.add(L);let P=new Y(new ct(.014*r,5,4),new wt({color:e?16723984:657414}));P.position.set(b*.07*r,.02*r,-.02*r),g.add(P)}if(i){let b=new Y(new qe(.34*r,.06*r,.34*r),Kt(e?1710618:4860440));b.position.set(0,.2*r,.02*r);let L=new Y(new qe(.44*r,.26*r,.4*r),Kt(e?1052688:3099178));L.position.set(0,.08*r,.02*r),c.add(L,b);let P=new Y(new ln(.1*r,.006*r,3,8,Math.PI),Kt(2759184));P.position.set(0,.25*r,.25*r),P.rotation.set(-.4,0,0),c.add(P)}let M=new Me;M.position.set(0,.1*r,-.52*r),c.add(M);let y=new Y(new kt(.06*r,.5*r,5),Kt(o));y.position.y=-.22*r,y.rotation.x=Math.PI,M.add(y),M.rotation.x=.35;let _=[[-.11,.3,!1],[.11,.3,!1],[-.11,-.32,!0],[.11,-.32,!0]].map(([b,L,P])=>{let z=a_(r,a,P);return z.position.set(b*r,-.06*r,L*r),c.add(z),z}),S=[.25,.75,0,.5],T=Math.random()*6,R=0,C=(b,L)=>{let P=l.userData.gallop;b>0&&(T+=b*(P?11:6.5)),R+=((b>0?1:0)-R)*Math.min(1,Math.max(b,.016)*6),_.forEach((z,X)=>{let $=T+S[X]*Math.PI*2*(P?.4:1),N=Math.sin($)*(P?.75:.4)*R;z.rotation.x=N;let te=Math.max(0,Math.cos($))*(P?1.2:.7)*R;z.userData.knee.rotation.x=z.userData.hind?-te*.8:te}),c.position.y=.66*r+(P?Math.abs(Math.sin(T))*.05*r:Math.abs(Math.sin(T*2))*.01*r)*R,c.rotation.x=P?Math.sin(T)*.06*R:0,f.rotation.x=.75+Math.sin(T*2)*.06*R+(1-R)*Math.sin((L??T)*.4)*.15,M.rotation.z=Math.sin((L??T)*1.3)*.25},w=0;return l.userData.walk=b=>{w+=Math.max(b,.016),C(b,w)},l.userData.saddleY=.66*r+.23*r,l}function tr(n=6965808,e=.55){return ha(n,!1,{size:e,saddle:!1,mane:3811866})}function Fn(n=6965808,e="rohan",{black:t=!1}={}){var h;let i=new Me,s=ha(n,t);i.add(s);let r=as[e]&&!as[e].folk,a=Math.floor(Math.random()*4),o=r?as[e]:la(((h=as[e])==null?void 0:h.folk)||e,a),l=oa(o,r?e:`${e}:${a}`);l.userData.act("ride");let c=l.userData.rig.d;return l.position.set(0,s.userData.saddleY-c.legs,.02),i.add(l),i.userData.rider=l,i.userData.horse=s,i.userData.walk=u=>{s.userData.walk(u),s.userData.gallop=i.userData.gallop},i}function Pd(){let n=new Me,e=tr(9079426,.55);e.position.z=.85,n.add(e);let t=new Y(new qe(.7,.18,.9),Kt(8017200));t.position.y=.48,n.add(t);let i=new Y(new qe(.5,.25,.4),Kt(10518608));i.position.set(0,.7,-.2),n.add(i);let s=[-.4,.4].map(a=>{let o=new Y(new ln(.24,.04,5,12),Kt(4863008));return o.rotation.y=Math.PI/2,o.position.set(a,.26,0),n.add(o),o}),r=oa(as.gandalf,"gandalf");return r.userData.act("sit"),r.position.set(0,.57-r.userData.rig.d.legs*.5,.2),n.add(r),n.userData.walk=a=>{e.userData.walk(a),s.forEach(o=>{o.rotation.x-=a*3})},n}var qt=(n,e={})=>new Mt({color:n,roughness:.75,flatShading:!0,emissive:n,emissiveIntensity:.15,...e});function rh(n,e,t,i){let s=new Gs;s.moveTo(0,0),s.lineTo(n*.35,e*.55),s.lineTo(n,e*.35),s.lineTo(n*.8,-e*.05),s.lineTo(n*.62,-e*.28),s.lineTo(n*.42,-e*.12),s.lineTo(n*.22,-e*.4),s.lineTo(0,-e*.2);let r=new Y(new Yr(s),qt(t,{side:It}));r.rotation.x=-Math.PI/2;let a=new Me;return a.add(r),a.scale.x=i,a}function Dd(n){let e=Ot(n,1.6),t=0;return Object.defineProperty(e,"intensity",{get:()=>t,set:i=>{t=i,e.userData.set(Math.min(1,i/30))}}),e}var bl=n=>n();function Ld(){return bl(()=>{let n=new Me,e=qt(1706246,{emissive:16730640,emissiveIntensity:.25}),t=new Y(new Ee(.55,.8,2.2,8),e);t.position.y=1.9,n.add(t);let i=new Y(new ct(.75,10,8),e);i.position.y=3.1,i.scale.set(1.2,.9,.9),n.add(i);let s=new Y(new ct(.42,10,8),e);s.position.set(0,3.9,.2),n.add(s),[-1,1].forEach(u=>{let d=new Y(new kt(.1,.9,6),qt(2759188));d.position.set(u*.32,4.25,.1),d.rotation.set(-.5,0,-u*.9),n.add(d);let f=new Y(new ct(.06,6,6),new wt({color:16760896}));f.position.set(u*.15,3.95,.58),n.add(f);let p=new Y(new Ee(.22,.3,1.4,6),e);p.position.set(u*.4,.7,0),n.add(p)});let r=[-1,1].map(u=>{let d=rh(3.2,2.2,1181702,u);return d.position.set(u*.5,3.4,-.4),n.add(d),d}),a=Ft({count:160,size:.9,life:1.1,spread:.9,velocity:[0,2.2,0],jitter:.9});a.position.y=2.2,n.add(a);let o=Ft({count:60,size:.7,life:.7,spread:.35,velocity:[0,1.6,-.3],jitter:.5});o.position.set(0,4.2,0),n.add(o);let l=[];for(let u=0;u<12;u++)l.push(new I(1.1+u*.25,2.8-u*.18,.6+Math.sin(u*.7)*.3));let c=new Y(new Ti(new Un(l),24,.05,5),new wt({color:16742944}));n.add(c);let h=Dd(16734736);return h.position.y=3,n.add(h),n.userData.update=(u,d)=>{a.userData.update(u),o.userData.update(u),r.forEach((f,p)=>{f.rotation.z=(p?-1:1)*(.3+Math.sin(d*1.6)*.25)}),c.rotation.y=Math.sin(d*2.3)*.5,h.intensity=26+Math.sin(d*9)*6},n})}function El({color:n=9054740,belly:e=12618298,scale:t=1}={}){return bl(()=>{let i=new Me,s=qt(n,{roughness:.5,metalness:.2}),r=[];for(let d=0;d<14;d++){let f=d<3?.28:.55*Math.max(.12,1-Math.abs(d-5)/9),p=new Y(new ct(f,9,7),d===5?qt(e):s);p.position.set(0,0,2.2-d*.42),i.add(p),r.push(p)}let a=new Me,o=new Y(new qe(.4,.3,.8),s),l=new Y(new qe(.34,.1,.7),s);l.position.set(0,-.18,.05),a.add(o,l),[-1,1].forEach(d=>{let f=new Y(new kt(.06,.5,5),qt(3811866));f.position.set(d*.14,.2,-.35),f.rotation.x=-1.1,a.add(f);let p=new Y(new ct(.045,6,6),new wt({color:16764992}));p.position.set(d*.16,.08,.25),a.add(p)}),a.position.set(0,.25,2.9),i.add(a);let c=[-1,1].map(d=>{let f=rh(3.6,2.4,n,d);return f.position.set(d*.35,.25,1.1),i.add(f),f}),h=Ft({count:180,size:.8,life:.9,spread:.12,velocity:[0,-1.2,7],jitter:1.4,rate:1});h.position.set(0,.1,3.3),h.userData.on=!1,i.add(h);let u=Dd(16738848);return u.position.set(0,-.5,4.5),i.add(u),i.scale.setScalar(t),i.userData.breathe=d=>{h.userData.on=d},i.userData.update=(d,f)=>{c.forEach((p,x)=>{p.rotation.z=(x?-1:1)*Math.sin(f*3.2)*.7}),r.forEach((p,x)=>{p.position.x=Math.sin(f*2-x*.5)*.12*(x/14)}),l.rotation.x=h.userData.on?.35:.05,h.userData.update(d),u.intensity=h.userData.on?18:Math.max(0,u.intensity-d*40)},i})}function ls(n=1){return bl(()=>{let e=new Me,t=qt(5913118),i=new Y(new ct(.4,10,8),t);i.scale.set(.8,.7,1.6),e.add(i);let s=new Y(new ct(.2,8,6),qt(13148256));s.position.set(0,.15,.65),e.add(s);let r=new Y(new kt(.07,.22,5),qt(14725184));r.rotation.x=Math.PI/2,r.position.set(0,.1,.86),e.add(r);let a=[-1,1].map(l=>{let c=rh(2.6,1.2,4861462,l);return c.position.set(l*.25,.1,.1),e.add(c),c});e.scale.setScalar(n);let o=Math.random()*6;return e.userData.update=(l,c)=>{a.forEach((h,u)=>{h.rotation.z=(u?-1:1)*Math.sin(c*2.4+o)*.55})},e})}function nr(n){let e=new Me,t=El({color:1841688,belly:2762274,scale:.55});return e.add(t),n&&(n.position.set(0,.25,.3),n.scale.setScalar(.8),e.add(n)),e.userData.update=(i,s)=>t.userData.update(i,s),e}function wl(){return bl(()=>{let n=new Me,e=qt(5922888),t=[],i=(o,l,c,h,u=1,d=1,f=1)=>{let p=new Y(o,e);return p.position.set(l,c,h),p.scale.set(u,d,f),n.add(p),t.push(p),p};i(new ct(.7,9,7),0,1.6,0,1,1.1,.8),i(new ct(.35,8,6),0,2.5,.15),i(new Ee(.22,.28,1,6),-.35,.5,0),i(new Ee(.22,.28,1,6),.35,.5,0),i(new Ee(.15,.2,1.2,6),-.8,1.5,.1).rotation.z=.4,i(new Ee(.15,.2,1.2,6),.8,1.5,.1).rotation.z=-.4;let s=0,r=new Be(9079430),a=new Be(5922888);return n.userData.turnToStone=o=>{s=o},n.userData.update=(o,l)=>{e.color.copy(a).lerp(r,s),e.emissive.copy(e.color),s<.5&&(n.rotation.y=Math.sin(l*.8+n.position.x)*.3)},n})}function Ud(){let n=new Y(new Ee(.16,.16,.36,10),qt(8017200));n.rotation.z=Math.PI/2;let e=new Me;return e.add(n),e}function ua(n=1184274){let e=new Me,t=new Y(new qe(.7,.35,2.4),qt(2760728));t.position.y=.18,e.add(t);let i=new Y(new Ee(.03,.03,1.8,5),qt(3811866));i.position.y=1.2,e.add(i);let s=new Y(new on(1.1,1.2),qt(n,{side:It}));return s.position.set(0,1.35,.05),e.add(s),e}function Nd(){let n=new Me,e=qt(5918792),t=new Y(new ct(1,10,8),e);t.scale.set(1,.9,1.5),t.position.y=2.2,n.add(t);let i=new Y(new ct(.6,9,7),e);i.position.set(0,2.5,1.5),n.add(i);let s=[[-.6,.7],[.6,.7],[-.6,-.8],[.6,-.8]].map(([o,l])=>{let c=new Y(new Ee(.28,.3,1.6,7),e);return c.position.set(o,.8,l),n.add(c),c});[-1,1].forEach(o=>{let l=new Y(new kt(.08,1.4,6),qt(15261896));l.position.set(o*.35,2,2.1),l.rotation.x=1.9,n.add(l)});let r=new Y(new qe(.9,.7,1.1),qt(6957594));r.position.y=3.4,n.add(r);let a=0;return n.userData.update=o=>{a+=o*2,s.forEach((l,c)=>{l.rotation.x=Math.sin(a+(c%3?Math.PI:0))*.25})},n}function Sl(n=1){let e=new Me,t=qt(1315086,{emissiveIntensity:.08}),i=new Y(new ct(.75,10,8),t);i.scale.set(1,.8,1.25),i.position.set(0,.95,-.8);let s=new Y(new ct(.42,9,7),t);s.position.set(0,.8,.2),e.add(i,s);for(let o=0;o<6;o++){let l=new Y(new ct(.05,5,4),new wt({color:12116064}));l.position.set((o%3-1)*.12,.9+Math.floor(o/3)*.1,.6),e.add(l)}let r=[];for(let o=0;o<8;o++){let l=o<4?-1:1,c=o%4,h=new Me;h.position.set(l*.3,.85,.35-c*.2);let u=.75-c*.5;h.rotation.y=l>0?-u:Math.PI+u;let d=new Y(new Ee(.04,.05,.9,5),t);d.rotation.z=Math.PI/2,d.position.x=.45;let f=new Me;f.position.x=.9;let p=new Y(new Ee(.02,.04,1.1,5),t);p.position.y=-.5,f.add(p),f.rotation.z=-.35,h.add(d,f),h.rotation.z=.5,e.add(h),r.push(h)}e.scale.setScalar(n);let a=0;return e.userData.walk=o=>{o>0&&(a+=o*9),r.forEach((l,c)=>{l.rotation.z=.5+(o>0?Math.sin(a+c*1.3)*.2:0)})},e.userData.update=(o,l)=>{i.position.y=.95+Math.sin(l*1.5)*.03},e}var k=(n,e,t)=>Math.min(1,Math.max(0,(n-e)/(t-e))),pt=n=>n*n*(3-2*n),Ye=(n,e,t)=>n+(e-n)*t,ir=(n,e={})=>new Mt({color:n,roughness:.8,flatShading:!0,...e});function W(n,e,t,i,s){n.position.x=e,n.position.z=t,i!==void 0&&(n.rotation.y=Math.atan2(i-e,s-t))}function di(n,e,t){n.rotation.y=Math.atan2(e-n.position.x,t-n.position.z)}var it=(n,e)=>{var t,i;return(i=(t=n.userData).act)==null?void 0:i.call(t,e)};function j(n,e,t){let i=t[0][1];for(let[s,r]of t)e>=s&&(i=r);it(n,i)}function Le(n,e,t,i,s,r=!1){var l,c,h,u;let a=pt(i);n.position.x=Ye(e[0],t[0],a),n.position.z=Ye(e[1],t[1],a);let o=i>0&&i<1;o&&(n.rotation.y=Math.atan2(t[0]-e[0],t[1]-e[1])),(c=(l=n.userData).running)==null||c.call(l,r&&o),(u=(h=n.userData).walk)==null||u.call(h,o?s*(r?1.6:1):0)}function Bd(n,e,t=0,i=0,s=0,r=Math.PI*2){n.forEach((a,o)=>{let l=s+o/(r>=Math.PI*2?n.length:Math.max(1,n.length-1))*r;W(a,t+Math.sin(l)*e,i+Math.cos(l)*e,t,i)})}function sr(n,e,t=!0){n.rotation.x=(t?-1:1)*pt(e)*1.45}function Tl(n,e){n.traverse(t=>{!t.material||t.isSprite||(t.material.transparent=e>.01||t.material.userData.wasTransparent,t.material.opacity=1-e*.92)}),n.visible=e<.99}function Od(){let n=Fn(789258,"nazgul",{black:!0});return n.userData.gallop=!0,n}function Al(){let n=new Y(new ln(.06,.018,8,20),new Mt({color:16765024,emissive:16752672,emissiveIntensity:.9,metalness:1,roughness:.2})),e=new Me;e.add(n);let t=Ot(16760896,.3);return t.userData.set(.8),e.add(t),e.userData.ring=n,e.userData.ground=!1,e}function da(n,e,t,i="R",s=.04){let r=n.joint(t,i==="R"?"handR":"handL");e.position.set(r.x,r.y+s,r.z)}function dn(n,e,t){return new Y(n,ir(e,t))}var o_={period:15,dist:22,run(n){let e=n.cast("bilbo"),t=n.cast("gandalf"),i=n.cast("frodo"),s=n.cast("sam"),r=[0,1,3,4].map(u=>n.cast(`hobbit:${u}`)),a=n.add(dn(new Ee(.22,.26,.25,8),6965802));W(a,0,2);let o=[16765040,10146047,16747184,11599770].map((u,d)=>{let f=n.add(Cd(u,5+d,d*.8));return W(f,-3+d*2,6),f}),l=n.add(El({color:16742944,belly:16765024,scale:.28}));l.userData.ground=!1;let c=n.add(Al()),h=n.stage(3);return(u,d)=>{let f=u*.8;l.position.set(Math.sin(f)*4,h+4.5+Math.sin(u*1.7)*.4,5+Math.cos(f)*2),l.rotation.y=f+Math.PI/2,l.userData.breathe(u%4<1.2),W(e,0,2,0,0),e.userData.lift=.25,j(e,u,[[0,"talk"],[3.2,"wave"],[4.6,"hold"]]),Tl(e,k(u,5,5.6)*(1-k(u,14.5,14.9))),r.forEach((p,x)=>{W(p,-1.6+x*1.05,.8+x%2*.4,0,2),j(p,u,[[0,x%2?"cheer":"dance"],[2.2,"listen"],[5.3,"cower"],[7,x%2?"talk":"drink"]])}),c.visible=u>5.4&&u<12.6,u<8.5&&c.position.set(0,h+.3,2),Le(t,[2.4,1],[.5,1.9],k(u,6.2,7.8),d),u<6.2&&W(t,2.4,1,0,2),j(t,u,[[0,"smoke"],[5.4,"look"],[7.8,"hold"],[9.2,"talk"],[12.5,"wave"]]),u>=8.5&&u<9.4&&da(n,c,t),u>=9.4&&da(n,c,i),u>7.8&&u<12.5&&di(t,i.position.x,i.position.z),Le(i,[-.4,.6],[-.6,1.6],k(u,7.6,8.8),d),u<7.6&&W(i,-.4,.6,0,2),j(i,u,[[0,"listen"],[5.3,"cower"],[7,"idle"],[9.3,"hold"],[12.2,"idle"]]),u>8.8&&u<12.2&&di(i,t.position.x,t.position.z),W(s,-1.2,.2,0,2),j(s,u,[[0,"cheer"],[5.3,"cower"],[7,"listen"],[12,"idle"]]),u>12.2&&(Le(i,[-.6,1.6],[-1.2,6.5],k(u,12.2,14.6),d),Le(s,[-1.2,.2],[-1.8,6],k(u,12.2,14.6),d))}}},l_={period:13,dist:20,run(n){let e=[0,1,2,3].map(()=>n.add(Od())),t=["frodo","sam","merry","pippin"].map(a=>n.cast(a)),i=n.cast("aragorn"),s=n.add(dn(new qe(.9,.05,.5),6965802));s.userData.lift=.3,W(s,-.2,.2);let r=n.cast("bree:0");return(a,o)=>{t.forEach((l,c)=>{let h=[-.55+c*.35,-.25+c%2*.9],u=pt(k(a,4,5.5))*(1-pt(k(a,10,11.5)));W(l,Ye(h[0],.6+c*.25,u),Ye(h[1],-.9,u),0,2),u<.05&&di(l,-.2,.2),j(l,a,[[0,c===3?"drink":"talk"],[2,"listen"],[4,"cower"],[11.5,"talk"]])}),Le(i,[1.6,1.2],[1,.1],k(a,3.6,4.6),o),a<3.6&&W(i,1.6,1.2,0,0),j(i,a,[[0,"smoke"],[2.2,"beckon"],[4.6,"guard"],[10.5,"talk"]]),a>4.6&&a<10.5&&di(i,0,6),W(r,-1.5,1.2,-.2,.2),j(r,a,[[0,"talk"],[4,"cower"],[11,"talk"]]),e.forEach((l,c)=>{let h=c*1.4-2;Le(l,[h*2.2,8],[h*.6,3],k(a,3+c*.4,6.5+c*.4),o),a>8.5&&Le(l,[h*.6,3],[h*2.2,8],k(a,8.5,11.5),o),l.userData.walk(a>6.9&&a<8.5?0:o)})}}},c_={period:12,dist:17,run(n){let e=n.cast("frodo"),t=["sam","merry","pippin"].map(c=>n.cast(c)),i=n.cast("aragorn");W(e,0,.3,0,3),t.forEach((c,h)=>W(c,-.7+h*.7,-.5,0,2));let s=[0,1,2,3,4].map(c=>n.add(ca(c===2))),r=s[2],a=n.add(Ot(16052479,2.5));a.userData.ground=!1;let o=n.add(qn(.35));o.userData.ground=!1;let l=n.stage(1);return(c,h)=>{s.forEach((f,p)=>{let x=(p-2)*.55,g=Ye(4,1.1,pt(k(c,0,4)))+pt(k(c,8,10.5))*4;W(f,Math.sin(x)*g,.3+Math.cos(x)*g,0,.3),f.userData.walk(c<4||c>8&&c<10.5?h:0),it(f,c>7.5?"cower":"guard")}),t.forEach(f=>j(f,c,[[0,"look"],[1.5,"guard"],[3.6,"cower"],[9.5,"mourn"]])),j(e,c,[[0,"look"],[3,"hold"],[5.8,"idle"]]),a.position.set(0,l+.6,.3),a.userData.set(k(c,4.2,4.6)*(1-k(c,6.5,7.5))*.9),Tl(e,k(c,4.2,4.6)*(1-k(c,6.2,6.6))*.7);let u=pt(k(c,5,5.6))*(1-k(c,7,8));r.position.z=Ye(r.position.z,.9,u),c>4.8&&c<6&&it(r,"strike"),sr(e,k(c,5.8,6.4)*(1-k(c,11,11.8))),Le(i,[1.6,-1.2],[.7,1.4],k(c,6.3,7.3),h,!0),c<6.3&&W(i,1.6,-1.2,0,1),j(i,c,[[0,"sentry"],[6.3,"idle"],[7.2,"strike"],[10.5,"kneel"]]),c>10.5&&di(i,e.position.x,e.position.z);let d=n.joint(i,"handL");o.position.set(d.x,d.y+.15,d.z),o.userData.set(c>6.2&&c<10.5)}}},h_={period:14,dist:15,run(n){let e=["frodo","sam","merry","pippin","gandalf","aragorn","legolas","gimli","boromir"].map(m=>n.cast(m)),[t,i,s,r,a,o,l,c,h]=e,u=n.cast("elrond");Bd([a,o,l,c,h,u],1.7,0,.9,Math.PI*.35,Math.PI*1.3),W(t,-1.5,.1,0,.9);let d=n.add(dn(new Ee(.25,.3,.5,8),14209216));W(d,0,.9);let f=n.add(Al()),p=n.add(Ft({count:50,color:16769184,endColor:4202496,size:.25,life:.6,spread:.05,velocity:[0,1.5,0],jitter:3,gravity:4,rate:0}));p.userData.ground=!1;let x=n.stage(.5),g=c.position.clone();return(m,M)=>{f.position.set(0,x+.58+Math.sin(m*2)*.02,.9),f.userData.ring.rotation.y=m,j(u,m,[[0,"talk"],[2,"listen"],[9,"point"]]),j(h,m,[[0,"listen"],[.8,"talk"],[2.2,"idle"]]);let y=pt(k(m,2.2,3))*(1-pt(k(m,4.2,5)));c.position.set(Ye(g.x,.35,y),c.position.y,Ye(g.z,.65,y)),j(c,m,[[0,"listen"],[3,"chop"],[3.8,"cower"],[5,"idle"],[11.2,"raise"]]),p.position.set(0,x+.6,.9),p.userData.on=m>3.5&&m<3.65,Le(t,[-1.5,.1],[-.7,.35],k(m,5.8,6.8),M),j(t,m,[[0,"listen"],[6.8,"volunteer"],[8.5,"idle"]]),Le(i,[-3,-1.5],[-1.1,0],k(m,8,9),M,!0),Le(s,[-3.3,-1.2],[-1.4,.3],k(m,9.2,10.2),M,!0),Le(r,[-3.5,-.9],[-1.1,.65],k(m,9.4,10.4),M,!0),[i,s,r].forEach(_=>j(_,m,[[0,"idle"],[10.4,"cheer"],[12,"idle"]])),j(a,m,[[0,"listen"],[7.5,"volunteer"],[9,"smoke"]]),j(o,m,[[0,"listen"],[9.8,"guard"],[11,"idle"]]),j(l,m,[[0,"listen"],[10.5,"bowdown"],[11.6,"idle"]])}}},u_={period:13,dist:17,run(n){let e=n.stage(3.5)+.6;n.focus(0,e+.8,1.2);let t=(_,S=0)=>(_.userData.ground=!1,_.position.y=e+S,_),i=ir(3814962),s=new wt({color:328450,side:Jt}),r=t(n.add(new Y(new Ws(1.6,5.5,40),new Mt({color:2762274,side:It}))),-.01);r.rotation.x=-Math.PI/2,W(r,0,1.5);let a=t(n.add(new Y(new Ee(1.6,1.6,12,32,1,!0),s)),-6);W(a,0,1.5);let o=t(n.add(new Y(new ai(1.6,32),new wt({color:197121}))),-.4);o.rotation.x=-Math.PI/2,W(o,0,1.5);let l=t(n.add(Ft({count:70,size:1.1,life:1.4,spread:1.2,velocity:[0,.9,0],jitter:.4})),-.35);W(l,0,1.5),[-1.1,-.5,.5,1.1].forEach(_=>{let S=t(n.add(new Y(new Ee(.22,.28,3.5,8),i)),1.75);W(S,Math.sin(_)*4,1.5+Math.cos(_)*4)});let c=t(n.add(new Y(new qe(.3,.08,1.7),i))),h=t(n.add(new Y(new qe(.3,.08,1.7),i)));W(c,0,.7),W(h,0,2.3);let u=t(n.cast("gandalf"),.04),f=["frodo","sam","merry","pippin","aragorn","legolas","gimli","boromir"].map(_=>t(n.cast(_))),[p,,,,x,g,,m]=f;f.forEach((_,S)=>W(_,-1.2+S%4*.8,-.6-Math.floor(S/4)*.6,0,2));let M=t(n.add(Ld()),-6);M.scale.setScalar(.55);let y=t(n.add(Ot(16777215,1.2)),1.1);return(_,S)=>{let T=pt(k(_,3.2,4.6));M.position.set(0,e-6+pt(k(_,0,3))*6.2,Ye(3.9,3.1,T)),M.rotation.y=Math.PI,W(u,0,1.2,0,3),j(u,_,[[0,"guard"],[3,"cast"],[4.4,"chop"],[5.2,"raise"],[6.6,"idle"],[7.4,"reach"]]);let R=n.joint(u,"handR");y.position.set(R.x,R.y+.8,R.z),y.userData.set(k(_,3.5,4)*(1-k(_,5.4,6)));let C=pt(k(_,5,6.5));h.rotation.x=C*1.2,h.position.y=e-C*5,M.position.y-=pt(k(_,5.2,7.2))*9,u.position.y=e+.04-pt(k(_,7.4,9))*7,u.rotation.x=k(_,7,7.6)*.5,(_>12.5||_<.05)&&(h.rotation.x=0,h.position.y=e),j(g,_,[[0,"shoot"],[5,"look"],[9,"mourn"]]),j(x,_,[[0,"guard"],[7.4,"reach"],[9,"mourn"]]),j(m,_,[[0,"guard"],[7.4,"idle"],[8.5,"hold"]]),j(p,_,[[0,"look"],[7.4,"reach"],[9.3,"mourn"]]),f.slice(1,4).concat(f[6]).forEach(w=>j(w,_,[[0,"cower"],[7.4,"look"],[9,"mourn"]]))}}},d_={period:13,dist:14,run(n){let e=n.cast("galadriel"),t=n.add(Ot(15266047,1.4));t.userData.ground=!1;let i=n.add(new Y(new Ee(.28,.2,.4,16),new Mt({color:14212584,metalness:.9,roughness:.15})));W(i,0,.9);let s=n.add(Ot(10141951,.35));s.userData.ground=!1;let r=n.cast("frodo"),a=n.add(Ot(15792383,.4));a.userData.ground=!1;let o=n.stage(1);return(l,c)=>{W(e,0,1.6,0,0),W(r,0,.35,0,1),j(e,l,[[0,"talk"],[3,"point"],[5,"cast"],[7.2,"mourn"],[9,"hold"],[10.5,"reach"]]),j(r,l,[[0,"listen"],[2.8,"mourn"],[5,"cower"],[7.2,"listen"],[10.8,"hold"]]),s.position.set(0,o+.42,.9),s.userData.set(.3+k(l,3,4)*(1-k(l,6,7))*.6),t.position.set(0,o+1.1,1.6),t.userData.set(.5+Math.sin(l*1.4)*.15+k(l,5,5.6)*(1-k(l,6.8,7.6))*.8),e.scale.setScalar(1+k(l,5,5.6)*(1-k(l,6.8,7.6))*.35);let h=k(l,9.6,10.8);if(l>9){let u=n.joint(e,"handR"),d=n.joint(r,"handR");a.position.set(Ye(u.x,d.x,h),Ye(u.y,d.y,h)+.05,Ye(u.z,d.z,h))}a.userData.set(l>9?.8:0)}}},f_={period:13,dist:20,run(n){let e=n.cast("boromir"),t=n.cast("merry"),i=n.cast("pippin"),s=n.cast("aragorn"),r=n.cast("legolas"),a=n.cast("gimli"),o=n.cast("frodo"),l=n.cast("sam"),c=n.add(dn(new Ee(.22,.22,1.2,8,1,!1,Math.PI/2,Math.PI),10132106,{side:It}));c.rotation.set(Math.PI/2,0,Math.PI),c.userData.lift=.2;let h=[0,1,2,3,4,5].map(()=>n.add(os())),u=h[5],d=[0,1,2].map(()=>{let p=n.add(new Y(new Ee(.012,.012,.45,4),ir(1710618)));return p.userData.ground=!1,p}),f=n.stage(3);return(p,x)=>{W(e,0,.6,0,3),j(e,p,[[0,"strike"],[3.4,"guard"],[5.4,"kneel"],[7,"mourn"]]),e.userData.pose.crouch=0,sr(e,k(p,7.5,8.5)),h.forEach((M,y)=>{y!==5&&(Le(M,[-2.5+y,7],[-1.2+y*.5,1.8],k(p,0,2.5),x,!0),p>2.5&&p<6&&it(M,"strike"))}),W(u,-1,3.2,0,.6),it(u,p>2.8&&p<5.4?"shoot":"guard"),d.forEach((M,y)=>{let _=k(p,3.2+y*.9,3.5+y*.9);M.visible=p>3.2+y*.9,M.position.set(Ye(-1,-.05+y*.05,_),f+.55+y*.08,Ye(3,.72,_)),M.rotation.x=Math.PI/2});let g=k(p,6,10);[t,i].forEach((M,y)=>{g>0?(Le(M,[y?.4:-.4,.2],[(y?1:-1)*2,7],g,x),M.userData.lift=.6*Math.min(1,g*4),it(M,"struggle")):(M.userData.lift=0,W(M,y?.4:-.4,.2,0,3),it(M,p<2.5?"look":"guard"))}),g>0&&h.slice(0,2).forEach((M,y)=>Le(M,[-1.2+y*.5,1.8],[(y?1:-1)*2,7.2],g,x,!0)),Le(s,[2.5,-1.5],[.5,.9],k(p,7.5,9),x,!0),p<7.5&&W(s,2.5,-1.5,0,2),j(s,p,[[0,"idle"],[9,"kneel"]]),Le(r,[3.2,-1.2],[1.5,1.4],k(p,8,9.5),x,!0),p<8&&W(r,3.2,-1.2,0,2),j(r,p,[[0,"idle"],[9.5,"shoot"]]),Le(a,[3.4,-2],[1.6,.3],k(p,8.3,10),x,!0),p<8.3&&W(a,3.4,-2,0,2),j(a,p,[[0,"idle"],[10,"chop"]]);let m=k(p,0,13);W(c,Ye(-4.5,-6.5,m),Ye(3,7,m)),c.rotation.y=-.5,[o,l].forEach((M,y)=>{W(M,c.position.x+(y?.25:-.2)*Math.sin(-.5),c.position.z+(y?.25:-.2)*Math.cos(-.5),c.position.x-3,c.position.z+6),M.userData.lift=.12,it(M,y?"row":"look")})}}},p_={period:10,dist:13,run(n){let e=[0,1,2,3,4,5].map(r=>{let a=n.add(Ml());return a.rotation.x=-Math.PI/2,a.userData.lift=-.05,W(a,-2+r%3*1.8,1+Math.floor(r/3)*1.6),a});[0,1,2,3].forEach(r=>{let a=n.add(Ft({count:20,color:14221288,endColor:1060896,size:.3,life:2,spread:.1,velocity:[0,.15,0],jitter:.1}));W(a,-1.5+r,.8+r%2*1.5),a.userData.lift=.25});let t=n.cast("frodo"),i=n.cast("gollum"),s=n.cast("sam");return(r,a)=>{Le(i,[1.4,.2],[.6,1.6],k(r,0,2),a),r>2&&W(i,.6,1.6,t.position.x,t.position.z),j(i,r,[[0,"crawl"],[2,"gloat"],[5.2,"crawl"],[7,"gloat"]]),W(s,-.6,-.3,t.position.x,t.position.z),j(s,r,[[0,"look"],[4.5,"reach"],[7.5,"idle"]]),Le(t,[0,0],[-.9,1.6],k(r,2,5)*(1-k(r,6.5,8.5)),a),j(t,r,[[0,"idle"],[2,"mourn"],[4,"reach"],[6,"cower"],[8.5,"idle"]]),t.rotation.x=k(r,4,5)*(1-k(r,6,7))*.6,e.forEach((o,l)=>{o.userData.material.opacity=.3+Math.sin(r*2+l)*.15})}}},m_={period:10,dist:21,run(n){let e=[...Array(10)].map((r,a)=>n.add(os(a%3?"orc":"uruk"))),t=n.cast("frodo"),i=n.cast("sam"),s=n.cast("gollum");return(r,a)=>{e.forEach((o,l)=>{let c=(r/10+l/10)%1;Le(o,[4-l%2*.6,-3],[0-l%2*.6,4],c,a)}),W(t,-1,-.9,.5,.5),W(i,-.65,-.95,.5,.5),W(s,-.3,-.85,t.position.x,t.position.z),j(t,r,[[0,"kneel"],[5,"look"],[7,"kneel"]]),j(i,r,[[0,"kneel"],[2.5,"point"],[4,"kneel"]]),j(s,r,[[0,"crawl"],[5.5,"gloat"],[8,"crawl"]])}}},g_={period:12,dist:18,run(n){let e=n.add(nr(ca()));e.userData.ground=!1;let t=n.cast("frodo"),i=n.cast("sam"),s=n.cast("gollum"),r=n.cast("faramir"),a=[0,1,2].map(c=>n.cast(`gondor:${c}`)),o=n.add(Ot(16760896,.3));o.userData.ground=!1;let l=n.stage(2);return(c,h)=>{let u=c*.9;e.position.set(Math.sin(u)*3,l+3.5-k(c,3,5)*1.5+k(c,6,8)*1.5,1.5+Math.cos(u)*2.5),e.rotation.y=u+Math.PI/2,W(t,0,.5,e.position.x,e.position.z),j(t,c,[[0,"look"],[3,"reach"],[5.4,"idle"],[9,"listen"]]);let d=n.joint(t,"handR");o.position.set(d.x,d.y+.05,d.z),o.userData.set(k(c,3,4)*(1-k(c,5,5.5))),Le(i,[-.8,-.2],[-.15,.4],k(c,4.8,5.4),h,!0),c<4.8&&W(i,-.8,-.2,0,1),j(i,c,[[0,"look"],[5.4,"hold"],[7,"mourn"],[9,"listen"]]),t.rotation.x=-k(c,5.4,6)*(1-k(c,8,9))*1.3,W(r,1.8,1.2,0,.5),j(r,c,[[0,"guard"],[6,"look"],[8.5,"talk"],[10.5,"point"]]),a.forEach((f,p)=>{W(f,1.4+p*.6,2.2+p%2*.4,0,6),it(f,c>3&&c<8?"guard":"sentry")}),W(s,2.6,.2,0,.5),it(s,"cower")}}},x_={period:14,dist:21,run(n){let e=n.add(Id(8257456,40,.3));e.userData.ground=!1;let t=[0,1,2,3,4].map(()=>n.add(Od())),i=n.stage(1),s=n.cast("frodo"),r=n.cast("sam"),a=n.cast("gollum"),o=n.add(Sl(.9)),l=n.add(Ot(15792383,1.6));return l.userData.ground=!1,n.focus(0,i+1,0),(c,h)=>{e.position.set(0,i+20,0),e.material.opacity=.25+k(c,1,1.5)*(1-k(c,3,5))*.6,t.forEach((d,f)=>Le(d,[0,.4],[3+f*.4,-4-f*.8],k(c,3+f*.4,9),h)),W(s,-.7,-.9,0,0),W(r,-.35,-1,0,0),j(s,c,[[0,"kneel"],[5,"idle"],[8,"cower"]]),j(r,c,[[0,"kneel"],[5,"idle"],[9,"raise"],[12,"guard"]]),Le(a,[0,-.85],[-2.5,-3.5],k(c,5.5,7.5),h),c<5.5&&W(a,0,-.85,0,0),it(a,c<5.5?"kneel":"crawl"),a.visible=c<7.4,Le(o,[-4.5,1.5],[-1.9,.2],k(c,7,9.5),h),c>10.2&&Le(o,[-1.9,.2],[-4.8,2],k(c,10.2,12.5),h),c<7&&W(o,-4.5,1.5),c>9.5&&c<10.2&&di(o,r.position.x,r.position.z),o.visible=c>6.5&&c<12.6;let u=n.joint(r,"handR");l.position.set(u.x,u.y+.1,u.z),l.userData.set(k(c,9,9.5)*(1-k(c,12,12.8)))}}},__={period:14,dist:17,run(n){let e=n.stage(2),t=e+2;n.focus(0,t+.4,0);let i=n.add(new Y(new Ee(1.6,3.6,2.2,24,1,!0),ir(2760216,{side:It,emissive:3805188,emissiveIntensity:.4})));i.userData.ground=!1,i.position.set(0,e+.9,0);let s=n.add(new Y(new Ws(.85,1.6,24),ir(2760216,{side:It})));s.userData.ground=!1,s.rotation.x=-Math.PI/2,s.position.set(0,t-.1,0);let r=n.add(new Y(new ai(.85,24),new wt({color:16734736})));r.userData.ground=!1,r.rotation.x=-Math.PI/2,r.position.set(0,t-.2,0);let a=n.add(qn(1.1));a.userData.ground=!1,a.position.set(0,t-.25,0);let o=p=>(p.userData.ground=!1,p.position.y=t-.1,p),l=o(n.cast("frodo")),c=o(n.cast("sam")),h=o(n.cast("gollum")),u=n.add(Al()),d=n.add(Ft({count:220,color:16742944,endColor:3149832,size:1.1,life:2.4,spread:.6,velocity:[0,6,0],jitter:3,gravity:2.5,rate:1}));d.userData.ground=!1,d.position.set(0,t,0);let f=[0,1,2].map(()=>{let p=n.add(ls(.5));return p.userData.ground=!1,p});return(p,x)=>{W(l,0,-1.08,0,0),W(c,-.75,-1.18,0,0),j(l,p,[[0,"hold"],[2,"cower"],[3.2,"reach"],[6,"kneel"],[8.5,"mourn"]]),j(c,p,[[0,"reach"],[3,"cower"],[6,"hold"],[8.5,"mourn"]]),Le(h,[1.05,-.9],[.15,-.95],k(p,2,3),x),p<2&&W(h,1.05,-.9,0,0),j(h,p,[[0,"crawl"],[2,"crawl"],[3,"cheer"],[4.5,"reach"]]);let g=pt(k(p,4.5,6));p>4.5&&W(h,.15,Ye(-.95,0,g)),h.position.y=t-.1-g*1.2,u.visible=p<6.2,p<2.2?da(n,u,l):p<4.5?da(n,u,h):u.position.set(.15,t+.35-g*1.3,Ye(-.95,0,g)),d.userData.on=p>6.3&&p<9,f.forEach((m,M)=>{let y=pt(k(p,8.5+M*.4,12));m.position.set(Ye(-4+M*3,-.8+M*.8,y),t+Ye(7,1.9,y),Ye(10,.6,y)),m.rotation.y=Math.PI}),[l,c].forEach(m=>{m.position.y=t-.1+pt(k(p,12,13.5))*3})}}},y_={period:13,dist:18,run(n){n.hide("merry","pippin","boromir");let e=n.cast("aragorn"),t=n.cast("legolas"),i=n.cast("gimli"),s=n.add(dn(new Ee(.24,.24,1.5,8,1,!1,Math.PI/2,Math.PI),10132106,{side:It}));s.rotation.set(Math.PI/2,0,Math.PI),s.userData.lift=.15;let r=n.add(Tn("boromir"));return r.rotation.order="YXZ",(a,o)=>{let l=k(a,0,7);W(s,Ye(-1.8,-5,l),Ye(1.8,6,l)),s.rotation.y=.6,r.position.copy(s.position),r.rotation.set(-Math.PI/2,.6,0),r.userData.lift=.35,[e,t,i].forEach((c,h)=>{let u=[-.6+h*.7,0];Le(c,u,[u[0]+.3,6],k(a,8.5+h*.2,12.5+h*.2),o,!0),a<8.5&&W(c,u[0],u[1],s.position.x,s.position.z)}),j(e,a,[[0,"mourn"],[6.5,"talk"],[8.5,"idle"]]),j(t,a,[[0,"mourn"],[6.5,"point"],[8.5,"idle"]]),j(i,a,[[0,"mourn"],[7.2,"cheer"],[8.5,"idle"]])}}},v_={period:11,dist:15,run(n){let e=n.cast("gandalf_white"),t=n.add(Ot(16777215,2.2));t.userData.ground=!1;let i=["aragorn","legolas","gimli"].map(l=>n.cast(l)),[s,r,a]=i;i.forEach((l,c)=>W(l,-.8+c*.8,-.2,0,2));let o=n.stage(1);return l=>{W(e,0,1.8,0,0),e.visible=l>1.5,j(e,l,[[0,"raise"],[3.5,"talk"],[7.5,"point"]]),t.position.set(0,o+.8,1.8),t.userData.set(k(l,1,1.6)*(1-k(l,3,5))+.15*(l>3)),j(r,l,[[0,"shoot"],[1.2,"cower"],[4,"listen"],[6.5,"bowdown"]]),j(a,l,[[0,"chop"],[1.2,"cower"],[4,"listen"],[6.5,"kneel"]]),j(s,l,[[0,"guard"],[1.2,"cower"],[4,"listen"],[6.5,"kneel"]]),i.forEach(c=>{c.rotation.x=-k(l,1,1.5)*(1-k(l,3,4))*.4})}}},M_={period:12,dist:15,run(n){let e=n.cast("theoden"),t=n.cast("gandalf_white"),i=n.cast("eowyn"),s=n.cast("eomer"),r=n.cast("grima"),a=n.add(new Me),o=dn(new qe(.5,.26,.4),9071152);o.position.y=.13;let l=dn(new qe(.55,1,.08),9071152);l.position.set(0,.5,-.2),a.add(o,l);let c=n.add(Ot(16773312,1.5));c.userData.ground=!1;let h=["aragorn","legolas","gimli"].map(d=>n.cast(d)),u=n.stage(1);return(d,f)=>{h.forEach((x,g)=>{W(x,-1+g*.5,-.6,0,1),it(x,g===2?"guard":"look")}),W(a,0,1.62,0,-1);let p=pt(k(d,3,5));W(e,0,Ye(1.6,1.3,k(d,5,6.5)),0,0),e.userData.pose.crouch=(1-k(d,4.5,5.5))*.45,e.userData.pose.lLegX=e.userData.pose.rLegX=-(1-k(d,4.5,5.5))*1.5,e.userData.pose.lKnee=e.userData.pose.rKnee=(1-k(d,4.5,5.5))*1.45,e.userData.pose.lean=(1-p)*.45,j(e,d,[[0,"mourn"],[5,"look"],[7.5,"raise"],[9.5,"talk"]]),W(t,.3,.5,0,1.6),j(t,d,[[0,"talk"],[2.4,"cast"],[5.5,"listen"]]),c.position.set(0,u+1,1.5),c.userData.set(k(d,2.5,3.1)*(1-k(d,4.5,6))),W(i,-.9,1.2,0,1.4),j(i,d,[[0,"mourn"],[5,"look"],[7,"idle"]]),W(s,1.2,.6,0,1.4),j(s,d,[[0,"idle"],[8,"kneel"],[10,"guard"]]),Le(r,[.8,1.6],[2.6,3.5],k(d,6,8),f,!0),d<6&&W(r,.8,1.6,0,1.4),it(r,d<3?"talk":"cower"),r.visible=d<7.9}}},b_={period:15,dist:24,run(n){let[e,t,i,s]=["aragorn","legolas","gimli","theoden"].map(d=>n.cast(d));[e,t,i,s].forEach((d,f)=>{W(d,-1.2+f*.8,-.3,0,4),d.userData.lift=.9});let r=n.add(dn(new qe(4.2,.9,.6),9077880));W(r,-.1,.2),r.userData.lift=.45;let a=[...Array(14)].map(()=>n.add(os())),o=n.add(Ft({count:160,color:16756832,endColor:2101256,size:1,life:1.5,spread:.3,velocity:[0,3,0],jitter:4,gravity:3,rate:0})),l=[0,1,2,3].map(()=>n.add(Fn(6965808)));l.push(n.add(Fn(5914672,"eomer"))),n.hide("eomer"),n.hide("gandalf_white");let c=n.add(Fn(16053488,"gandalf_white")),h=n.add(Ot(16774352,3));h.userData.ground=!1;let u=n.stage(4);return(d,f)=>{a.forEach((p,x)=>{let g=Math.floor(x/7),m=x%7;Le(p,[-3+m,7+g],[-3+m,1.4+g*.6],k(d,0,5),f,!0),d>5&&d<10&&it(p,"strike"),d>10&&it(p,"cower"),sr(p,k(d,10+m*.15,11+m*.15),!1)}),j(t,d,[[0,"shoot"],[10,"cheer"]]),j(i,d,[[0,"guard"],[5,"chop"],[10,"cheer"]]),j(e,d,[[0,"guard"],[5,"strike"],[8.5,"point"],[10,"cheer"]]),j(s,d,[[0,"guard"],[5,"strike"],[8.3,"raise"]]),W(o,0,.6),o.userData.on=d>5.5&&d<6,h.position.set(-6,u+4,3),h.userData.set(k(d,8,9)*(1-k(d,13,14.5))),l.forEach((p,x)=>{p.userData.gallop=!0,Le(p,[-7,1+x*.7],[4,2+x*.7],k(d,8.5+x*.2,12.5+x*.2),f),it(p.userData.rider,d>9?"raise":"ride")}),c.userData.gallop=!0,Le(c,[-7.5,3.5],[3.5,3.5],k(d,8.3,12.3),f),it(c.userData.rider,d>9&&d<12?"cast":"ride"),c.visible=d>8}}},Fd={period:11,dist:21,run(n){let e=n.stage(3),t=n.add(new Y(new Ee(3,3,.05,32),new Mt({color:3828344,transparent:!0,opacity:.8,roughness:.2,metalness:.3})));t.userData.ground=!1;let i=n.add(Ft({count:90,color:15267071,endColor:3166304,size:.5,life:1,spread:1.2,velocity:[0,1.2,1.5],jitter:.8,additive:!1}));i.userData.ground=!1;let r=[n.cast("treebeard"),n.cast("ent:1"),n.cast("ent:2")],a=n.cast("merry"),o=n.cast("pippin"),l=n.add(dn(new qi(.35,0),6972506));return W(l,2.4,-.8),l.userData.lift=.05,(c,h)=>{t.position.set(0,e-.4+pt(k(c,2,7))*.8*(1-k(c,10,11)),2.5),i.position.set(-2.5,e+.2,1),i.userData.on=c>2&&c<7,r.forEach((u,d)=>{Le(u,[-4+d*1.5,-2],[-2.5+d*1.5,.2],k(c,0,3),h),j(u,c,[[0,"idle"],[3,"chop"],[6,"lift"],[8.5,"idle"]])}),W(a,2.2,-.8,0,2),W(o,2.6,-.8,0,2),[a,o].forEach(u=>{u.userData.lift=.3}),j(a,c,[[0,"smoke"],[5,"wave"],[6.5,"smoke"]]),j(o,c,[[0,"drink"],[5.4,"cheer"],[6.5,"smoke"]]),a.userData.pose.crouch=o.userData.pose.crouch=.45,a.userData.pose.lLegX=a.userData.pose.rLegX=o.userData.pose.lLegX=o.userData.pose.rLegX=-1.5,a.userData.pose.lKnee=a.userData.pose.rKnee=o.userData.pose.lKnee=o.userData.pose.rKnee=1.45}}},E_={period:10,dist:18,run(n){let e=[...Array(12)].map(()=>n.add(Ml())),t=n.add(Tn("king_of_the_dead")),i=n.add(Ft({count:80,color:9502656,endColor:331784,size:1.2,life:3,spread:2,velocity:[0,.2,0],jitter:.3}));W(i,0,2.2);let[s,r,a]=["aragorn","legolas","gimli"].map((o,l)=>{let c=n.cast(o);return W(c,-.6+l*.6,-.2,0,3),c});return o=>{e.forEach((l,c)=>{W(l,-2.5+c%6,2.4+Math.floor(c/6)*.9,0,0),l.userData.lift=-1.3+pt(k(o,.5+c%6*.25,3+c%6*.25))*1.3,it(l,o>6?"bowdown":"guard")}),W(t,0,1.4,0,0),t.userData.lift=-1.5+pt(k(o,0,2.5))*1.5,j(t,o,[[0,"idle"],[3,"point"],[5.5,"idle"],[6.5,"bowdown"]]),j(s,o,[[0,"guard"],[3.5,"raise"],[5.5,"talk"]]),j(r,o,[[0,"look"],[3,"shoot"],[6,"look"]]),j(a,o,[[0,"cower"],[7,"look"]])}}},w_={period:11,dist:22,run(n){let e=[0,1,2].map(()=>n.add(ua()));e.forEach((o,l)=>W(o,-2.5+l*2.5,3.5,-2.5+l*2.5,10));let t=[0,1,2,3].map(o=>n.cast(`corsair:${o}`)),i=[...Array(10)].map(()=>n.add(Ml())),[s,r,a]=["aragorn","legolas","gimli"].map((o,l)=>{let c=n.cast(o);return W(c,-.5+l*.5,0,0,3),c});return(o,l)=>{i.forEach((c,h)=>{Le(c,[-3+h*.6,-1.5],[-3+h*.66,3.6],k(o,1+h%5*.2,5+h%5*.2),l,!0),it(c,o>3?"strike":"guard")}),e.forEach((c,h)=>{c.rotation.z=Math.sin(o*1.2+h)*.05}),t.forEach((c,h)=>{W(c,-2.5+h*1.6,3.4,0,0),c.userData.lift=.35,it(c,o<3.5?"guard":"cower"),sr(c,k(o,5+h*.3,6+h*.3))}),j(s,o,[[0,"raise"],[2,"point"],[5,"guard"]]),j(r,o,[[0,"shoot"],[6,"look"]]),j(a,o,[[0,"chop"],[6,"cheer"]])}}},S_={period:14,dist:28,run(n){let e=[0,1].map(()=>n.add(Nd())),t=[...Array(5)].map(()=>n.add(Fn(6965808)));t.push(n.add(Fn(5914672,"eomer"))),n.hide("eomer");let i=n.add(nr(ca(!0)));i.userData.ground=!1,[0,1,2].forEach(h=>{let u=n.add(qn(.8));W(u,-3+h*3,5)});let s=n.add(ua());W(s,3.5,-1.5,3.5,5);let[r,a,o,l]=["aragorn","legolas","gimli","gandalf_white"].map((h,u)=>{let d=n.cast(h);return W(d,2.5+u*.5,-1,0,3),d}),c=n.stage(3);return(h,u)=>{e.forEach((f,p)=>Le(f,[-5+p*3,7],[-2+p*3,1],k(h,0,10),u)),t.forEach((f,p)=>{f.userData.gallop=!0,Le(f,[-7,0+p%3*.8],[5,3+p%3*.8],k(h,3+p*.3,8+p*.3),u),it(f.userData.rider,"raise")});let d=h*.7;i.position.set(Math.sin(d)*4,c+4,2+Math.cos(d)*3),i.rotation.y=d+Math.PI/2,Le(r,[3.5,-1],[1.8,2],k(h,1,3),u,!0),Le(o,[4.1,-1.2],[2.6,1.6],k(h,1.4,3.4),u,!0),Le(a,[3.8,-.4],[1.2,1.2],k(h,1.8,3.8),u,!0),j(r,h,[[0,"raise"],[3,"strike"]]),j(o,h,[[0,"cheer"],[3.4,"chop"]]),j(a,h,[[0,"idle"],[3.8,"shoot"]]),W(l,-1.5,.2,i.position.x,i.position.z),j(l,h,[[0,"cast"],[7,"raise"]])}}},T_={period:12,dist:24,run(n){let e=[...Array(12)].map((f,p)=>n.add(os(p%2?"orc":"mordor")));e.forEach((f,p)=>W(f,-3+p%6*1.2,3+Math.floor(p/6),0,0));let t=[0,1,2,3,4].map(()=>{let f=n.add(ls(1.1));return f.userData.ground=!1,f}),i=n.stage(3),s=n.at("mount_doom"),r=n.add(Ft({count:200,color:16742944,endColor:3149832,size:6,life:3,spread:2,velocity:[0,20,0],jitter:10,gravity:6,rate:1}));r.userData.ground=!1,r.position.set(s.x,s.y+1,s.z);let a=["aragorn","legolas","gimli","gandalf_white","pippin","eomer"].map((f,p)=>{let x=n.cast(f);return W(x,-1.5+p*.6,-.5,0,3),x}),[o,l,c,h,u,d]=a;return(f,p)=>{t.forEach((x,g)=>{let m=k(f,2+g*.5,9+g*.5);x.position.set(Ye(-10,10,m),i+3+Math.sin(m*Math.PI)*1.5+g*.4,2+g*.8),x.rotation.y=Math.PI/2}),r.userData.on=f>6&&f<10,e.forEach(x=>{x.rotation.y=f>7?Math.PI:0,it(x,f>7?"cower":"guard"),x.userData.walk(f>7?p:0)}),j(o,f,[[0,"talk"],[1.8,"raise"],[2.6,"strike"],[7,"look"]]),[l,c,u,d].forEach(x=>j(x,f,[[0,"listen"],[2.6,x===l?"shoot":"guard"],[7,"look"],[9,"cheer"]])),j(h,f,[[0,"listen"],[3,"point"],[4,"look"],[7,"raise"]]),a.forEach((x,g)=>{x.position.z=-.5+pt(k(f,2.6,5))*1.2-g%2*.2})}}},A_={period:8,dist:17,run(n){let e=n.cast("merry"),t=n.cast("pippin"),i=[0,1,2,3,4].map(()=>n.add(os())),s=n.add(new Y(new Zi(.04,0),new wt({color:8044656})));s.userData.ground=!1;let r=n.stage(2);return(a,o)=>{let l=a*.6%1.5;i.forEach((c,h)=>{W(c,-1+h%3*1,.5+Math.floor(h/3)*.8+l,0,5),c.userData.running(!0),c.userData.walk(o*1.6)}),[e,t].forEach((c,h)=>{let u=i[h],d=n.joint(u,"upperR");W(c,u.position.x,u.position.z+.05),c.userData.ground=!1,c.position.y=d.y-.1,c.rotation.set(0,Math.PI/2,Math.PI/2),it(c,"struggle")}),s.visible=a>3&&a<7,s.position.set(t.position.x,Ye(t.position.y,r+.02,pt(k(a,3,3.6))),Ye(t.position.z,1.6,k(a,3,3.6)))}}},R_={period:11,dist:20,run(n){let e=n.cast("treebeard"),t=n.cast("merry"),i=n.cast("pippin");return n.focus(0,n.stage(2)+1.4,1.4),(s,r)=>{let a=pt(k(s,3,5));s<6&&W(e,0,1.2),e.rotation.y=Math.PI*(1-pt(k(s,.5,2))),j(e,s,[[0,"idle"],[2,"talk"],[3,"lift"],[5,"idle"]]),Le(e,[0,1.2],[1.2,2.6],k(s,6,10.5),r),[t,i].forEach((o,l)=>{if(s<3){W(o,l?.5:-.5,.2,e.position.x,e.position.z),o.userData.ground=!0,o.userData.lift=0,j(o,s,[[0,"cower"],[2,"look"]]);return}let c=n.joint(e,l?"upperR":"upperL"),h=[l?.5:-.5,.2];o.userData.ground=!1,o.position.set(Ye(h[0],c.x,a),Ye(e.position.y,c.y+.02,a),Ye(h[1],c.z,a)),o.rotation.y=e.rotation.y,it(o,a<1?"struggle":l?"cheer":"sitGround")})}}},C_={period:12,dist:14,run(n){let e=n.cast("pippin"),t=n.cast("merry"),i=n.cast("theoden"),s=n.add(new Y(new ct(.1,16,12),new Mt({color:657936,emissive:4198400,metalness:.6,roughness:.2})));s.userData.ground=!1;let r=n.add(Ot(16738832,.9));r.userData.ground=!1;let a=n.cast("gandalf_white");return(o,l)=>{W(e,0,.4,0,1),j(e,o,[[0,"hold"],[4.5,"cower"],[8.8,"idle"]]);let c=n.joint(e,"handR");s.position.set(c.x-.05,c.y+.08,c.z),r.position.copy(s.position);let h=k(o,2,3)*(1-k(o,5,6));r.userData.set(h),s.material.emissiveIntensity=.5+h*3,sr(e,k(o,4.5,5.2)*(1-k(o,8,8.8))),Le(a,[2.5,2],[.6,.9],k(o,5,6.5),l,!0),o<5&&W(a,2.5,2,0,0),j(a,o,[[0,"idle"],[6.5,"kneel"],[8.5,"talk"]]),W(i,-2,1.8,-1.6,.8),W(t,-1.6,.9,-2,1.8),j(t,o,[[0,"look"],[6.5,"kneel"],[9.5,"guard"]]),j(i,o,[[0,"look"],[6.5,"listen"],[8,"talk"]])}}},I_={period:14,dist:20,run(n){let e=n.cast("merry"),t=n.cast("pippin"),i=n.cast("eowyn"),s=n.cast("theoden"),r=n.add(ca(!0)),a=n.add(nr());a.userData.ground=!1;let o=n.stage(2),l=n.at("minas_tirith"),c=n.at("edoras");return[...Array(7)].forEach((h,u)=>{let d=(u+1)/7,f=n.add(qn(9));f.position.set(Ye(l.x,c.x,d),0,Ye(l.z,c.z,d)),f.userData.lift=1.5;let p=n.add(Ot(16752704,6));p.position.copy(f.position),p.userData.lift=3,p.userData.set(.7)}),(h,u)=>{W(s,-1.2,1.2,-1.6,1.8),s.rotation.x=-1.45,a.position.set(Ye(-2,1.8,k(h,0,2)),o+Ye(3,.3,pt(k(h,0,2))),Ye(6,3.2,k(h,0,2))),a.rotation.y=Math.PI*.9,W(r,.7,2.2,i.position.x,i.position.z),r.visible=h>2,j(r,h,[[0,"idle"],[3,"strike"],[6.2,"kneel"]]),W(i,0,1,r.position.x,r.position.z),j(i,h,[[0,"guard"],[4.4,"cower"],[7,"strike"],[8.3,"guard"],[10,"mourn"]]),Le(e,[1.8,3.4],[1,2.6],k(h,4.8,5.8),u,!0),h<4.8&&W(e,1.8,3.4,r.position.x,r.position.z),j(e,h,[[0,"look"],[5.8,"strike"],[6.8,"cower"],[10,"mourn"]]),Tl(r,k(h,8,9.5)*(1-k(h,13.6,13.9))),r.scale.setScalar(1-k(h,8,9.5)*.4),W(t,-3.5,-1.5,0,3),it(t,"look")}}},fi=["thorin","balin","dwalin","kili","fili","oin","gloin","ori","nori","dori","bifur","bofur","bombur"],P_={period:15,dist:18,run(n){let e=n.cast("bilbo"),t=n.cast("gandalf"),i=fi.map(l=>n.cast(l)),s=i[0],r=n.add(dn(new qe(3.4,.06,.8),6965802));r.userData.lift=.3,W(r,0,1.4);let a=[...Array(8)].map((l,c)=>{let h=n.add(dn(new ct(.07,6,4),[12618298,13650474,15259808,9067050][c%4]));return h.userData.lift=.38,W(h,-1.4+c*.4,1.4+c%2*.15),h}),o=n.add(qn(.5));return W(o,2.6,2.8),(l,c)=>{i.slice(1).forEach((h,u)=>{let d=u%2?1:-1;W(h,-1.5+Math.floor(u/2)*.55,1.4+d*.65,-1.5+Math.floor(u/2)*.55,1.4);let f=l>9;j(h,l+u*.37,[[0,u%3?"drink":"talk"],[4+u%4,u%3?"cheer":"drink"],[9,"mourn"]]),f&&it(h,"mourn")}),l<4.5?Le(e,[-2.2,.2],[1.8,.4],k(l,1,4),c,!0):Le(e,[1.8,.4],[-1.9,.4],k(l,4.5,7),c,!0),j(e,l,[[0,"talk"],[1,"idle"],[7,"cower"],[9,"listen"],[12.5,"hold"]]),l>7&&di(e,0,1.4),Le(s,[-3.5,-1.5],[-2.2,1.4],k(l,5.5,7.5),c),l<5.5&&W(s,-3.5,-1.5,0,1.4),j(s,l,[[0,"idle"],[7.5,"talk"],[9,"smoke"]]),l>7.5&&di(s,0,1.4),W(t,2.2,1.9,0,1.4),j(t,l,[[0,"smoke"],[7.5,"listen"],[11,"talk"]]),a.forEach((h,u)=>{h.visible=l<3+u*.5||l>14.5})}}},D_={period:13,dist:17,run(n){let e=[0,1,2].map(()=>n.add(wl()));e.forEach((l,c)=>{W(l,-1.8+c*1.8,2.2,0,1.3),l.scale.setScalar(.85)});let t=n.add(qn(.9));W(t,0,1.3);let i=n.add(Ot(16771248,4));i.userData.ground=!1;let s=n.cast("gandalf"),r=n.cast("bilbo"),a=fi.slice(0,6).map((l,c)=>{let h=n.cast(l),u=n.add(dn(new Ee(.2,.22,.55,8),9072720));return{d:h,sack:u,i:c}});n.hide(...fi.slice(6));let o=n.stage(2);return l=>{W(s,3,.2,0,2),j(s,l,[[0,"idle"],[5.5,"raise"],[6.5,"cast"],[9,"smoke"]]),W(r,1.2,.2,0,2),j(r,l,[[0,"talk"],[3,"point"],[5,"talk"],[8.5,"cheer"]]),i.position.set(6,o+2,4),i.userData.set(k(l,6,7)*(1-k(l,10.5,11.8))),e.forEach(h=>h.userData.turnToStone(k(l,6.5,8)*(1-k(l,12.5,12.9)))),t.userData.set(l<7.5);let c=k(l,9,9.5);a.forEach(({d:h,sack:u,i:d})=>{W(h,-1.9+d*.5,.5,0,1.3),W(u,h.position.x,h.position.z),u.visible=c<1,u.rotation.z=c<1?Math.PI/2:0,u.userData.lift=.18,h.rotation.z=c<1?Math.PI/2:0,h.userData.lift=c<1?.12:0,it(h,c<1?"struggle":"cheer")})}}},L_={period:10,dist:13,run(n){let e=n.add(dn(new qe(1,.4,.6),14209216));W(e,0,.9);let t=n.add(new Y(new on(.8,.5),new Mt({color:15259824,emissive:3170559,emissiveIntensity:0})));t.userData.ground=!1,t.rotation.x=-Math.PI/2;let i=n.add(Ot(13162751,1.2));i.userData.ground=!1;let s=n.cast("elrond"),r=["thorin","bilbo","gandalf","balin"].map(o=>n.cast(o));r.forEach((o,l)=>Bd([o],1,0,.9,l*1.1-2.2)),W(s,0,1.7,0,.9);let a=n.stage(1);return o=>{t.position.set(0,a+.42,.9);let l=k(o,2,3.5)*(1-k(o,7,8.5));t.material.emissiveIntensity=l*1.5,i.position.set(0,a+3,1.5),i.userData.set(.3+l*.5),j(s,o,[[0,"hold"],[3.5,"point"],[5,"talk"],[8.5,"idle"]]),j(r[0],o,[[0,"listen"],[5.5,"talk"],[7,"listen"]]),j(r[1],o,[[0,"look"],[3,"listen"]]),j(r[2],o,[[0,"smoke"],[6,"listen"]]),j(r[3],o,[[0,"listen"],[7.5,"talk"]])}}},U_={period:12,dist:11,run(n){n.hide(...fi,"gandalf");let e=n.cast("bilbo"),t=n.cast("gollum"),i=n.add(Al()),s=n.add(new Y(new ai(1.4,20),new Mt({color:660504,roughness:.1,metalness:.5})));s.userData.lift=.02,s.rotation.x=-Math.PI/2,W(s,.5,2.6);let r=n.stage(1);return(a,o)=>{W(t,.2,1.4,e.position.x,e.position.z),j(t,a,[[0,"crawl"],[5.5,"gloat"],[8,"talk"],[9.5,"cower"]]),Le(e,[-1.2,-.2],[0,.4],k(a,0,2),o),j(e,a,[[0,"idle"],[2,"kneel"],[3.5,"hold"],[5,"guard"],[7.5,"talk"],[9,"hold"]]),i.visible=a<9.7,a<3.3?i.position.set(0,r+.03,.6):da(n,i,e),Tl(e,k(a,9.5,10.1)*(1-k(a,11.5,11.9)))}}},N_={period:12,dist:20,run(n){let e=[0,1,2,3].map(()=>{let r=n.add(ls(1));return r.userData.ground=!1,r}),t=["bilbo","thorin","gandalf","balin"].map(r=>n.cast(r)),i=n.cast("beorn"),s=n.stage(2);return(r,a)=>{e.forEach((o,l)=>{let c=pt(k(r,l*.5,5+l*.5)),h=pt(k(r,7,11));o.position.set(Ye(-8+l*2,-1.5+l,c)+h*6,s+Ye(8,1.4,c)+h*8,Ye(-5,1.5,c)+h*4),o.rotation.y=.8;let u=t[l];c>=1?(u.userData.ground=!0,W(u,-1.5+l,1.5,0,0),j(u,r,[[0,"look"],[6,l===0?"cheer":"wave"],[8.5,"look"]])):(u.userData.ground=!1,u.position.set(o.position.x,o.position.y-.7,o.position.z),it(u,"struggle"))}),Le(i,[5,5],[1.6,2.6],k(r,7.5,11),a),r<7.5&&W(i,5,5),it(i,r>11?"talk":"idle")}}},F_={period:10,dist:17,run(n){let e=["thorin","balin","dwalin","kili","fili","bombur"].map(o=>n.cast(o));n.hide(...fi.slice(6),"gandalf");let t=e.map(()=>{let o=n.add(dn(new Ee(.3,.3,.6,10),8017200));return o.userData.ground=!1,o}),i=n.cast("bilbo"),s=[0,1,2].map(o=>n.cast(`woodelf:${o}`)),r=n.add(new Y(new on(2.4,14),new Mt({color:3828344,transparent:!0,opacity:.75,roughness:.2})));r.rotation.x=-Math.PI/2,r.userData.ground=!1;let a=n.stage(3);return(o,l)=>{r.position.set(0,a+.05,1),e.forEach((h,u)=>{let d=(o/10+u/e.length)%1,f=Math.sin(d*6+u)*.5,p=Ye(-4,6,d),x=Math.sin(o*3+u)*.04;t[u].position.set(f,a+.2+x,p),t[u].rotation.z=Math.sin(o*2+u)*.1,h.userData.ground=!1,W(h,f,p,f,p+1),h.position.y=a+.25+x-h.userData.rig.d.legs,it(h,u%2?"cheer":"look")});let c=t[t.length-1];i.userData.ground=!1,W(i,c.position.x+.3,c.position.z),i.position.y=c.position.y+.1,i.rotation.set(0,0,-1.2),it(i,"struggle"),s.forEach((h,u)=>{W(h,2+u*.3,-1+u*1.6,0,h.position.z+1),it(h,"shoot")})}}},B_={period:14,dist:31,run(n){n.hide("bilbo","gandalf",...fi);let e=n.stage(4);n.focus(0,e+2.2,3.5);let t=n.add(El({scale:1.7}));t.userData.ground=!1;let i=[...Array(5)].map((l,c)=>{let h=n.add(qn(1));return W(h,-2+c,3+c%2*.8),h.userData.set(!1),h}),s=n.add(new Y(new Ee(.03,.03,.9,5),ir(657930)));s.userData.ground=!1;let r=n.add(Ft({count:150,color:15267071,endColor:3166304,size:.9,life:1.6,spread:1,velocity:[0,4,0],jitter:3,gravity:5,rate:0,additive:!1}));r.userData.ground=!1;let a=n.cast("bard");W(a,1.8,1.2,0,3);let o=[0,1,2,3].map(l=>n.cast(`laketown:${l}`));return(l,c)=>{let h=l*.6,u=pt(k(l,9,11.5));t.position.set(Math.sin(h)*3.5,e+4.5-u*5,3.5+Math.cos(h)*2.5),t.rotation.y=h+Math.PI/2,t.rotation.z=u*1.2,t.userData.breathe(l>2&&l<7),i.forEach((f,p)=>f.userData.set(l>2.5+p*.6&&l<13.5)),di(a,t.position.x,t.position.z),j(a,l,[[0,"point"],[2.5,"talk"],[6.5,"shoot"],[9.2,"look"],[11.5,"cheer"]]);let d=k(l,8,9);s.visible=l>8&&l<9.1,s.position.set(Ye(1.8,t.position.x,d),Ye(e+1,t.position.y,d),Ye(1.2,t.position.z,d)),s.lookAt(t.position),s.rotateX(Math.PI/2),r.position.set(t.position.x,e,t.position.z),r.userData.on=l>11.2&&l<11.6,o.forEach((f,p)=>{Le(f,[-2+p*.6,2.5],[-3+p*.3,-2.5],k(l,2.5+p*.3,6+p*.3),c,!0),l<2.5&&W(f,-2+p*.6,2.5,0,0),j(f,l,[[0,"talk"],[2,"point"],[2.5,"idle"],[6.5,"cower"],[11.5,"cheer"]])})}}},O_={period:13,dist:24,run(n){let e=[...Array(10)].map(()=>n.add(os("goblin"))),t=[0,1,2].map(()=>{let u=n.add(ls(1));return u.userData.ground=!1,u}),i=n.add(Ft({count:50,color:16765024,endColor:4202496,size:.3,life:1.5,spread:.8,velocity:[0,.8,0],jitter:.5}));W(i,0,-1);let s=fi.slice(0,6).map(u=>n.cast(u));n.hide(...fi.slice(6));let r=[0,1].map(u=>n.cast(`woodelf:${u}`)),a=n.cast("bard"),o=n.cast("bilbo"),l=n.cast("gandalf"),c=n.cast("beorn"),h=n.stage(3);return(u,d)=>{e.forEach((f,p)=>{Le(f,[-4+p*.8,7],[-4+p*.8,2.5],k(u,0,6),d,!0),it(f,u>5&&u<8?"strike":u>8?"cower":"idle"),sr(f,k(u,8+p*.1,9+p*.1),!1)}),s.forEach((f,p)=>{Le(f,[-2.4+p*.9,0],[-2.6+p*.95,1.8],k(u,3,5),d,!0),j(f,u,[[0,"guard"],[5,f===s[2]?"chop":"strike"],[9.5,"cheer"]])}),r.forEach((f,p)=>{W(f,3.2+p*.6,.4,0,4),it(f,u<9?"shoot":"look")}),W(a,2.4,-.4,0,4),it(a,u<9?"shoot":"cheer"),W(o,-.5,-1.4,0,4),j(o,u,[[0,"look"],[4,"cower"],[9.5,"point"]]),W(l,.8,-1.2,0,4),j(l,u,[[0,"cast"],[4,"strike"],[9.5,"look"]]),t.forEach((f,p)=>{let x=k(u,5+p*.6,11);f.position.set(Ye(-9,9,x),h+3.5+p*.5,3+p),f.rotation.y=Math.PI/2}),Le(c,[-6,4],[-2.5,3.5],k(u,7,9),d,!0),u<7&&W(c,-6,4),it(c,u>9&&u<12?"strike":"idle"),c.visible=u>6.5}}},kd={ring_bearer:[o_,l_,c_,h_,u_,d_,f_,p_,m_,g_,x_,__],three_hunters:[y_,v_,M_,b_,Fd,E_,w_,S_,T_],merry_and_pippin:[A_,R_,Fd,C_,I_],there_and_back_again:[P_,D_,L_,U_,N_,F_,B_,O_]},zd={ring_bearer:[["frodo",0,11],["sam",0,11],["merry",0,6],["pippin",0,6],["aragorn",1,6],["gandalf",3,4],["legolas",3,6],["gimli",3,6],["boromir",3,6],["gollum",6.5,11]],three_hunters:[["aragorn",0,8],["legolas",0,8],["gimli",0,8],["gandalf_white",1,4],["theoden",2,4],["eomer",2,3],["merry",4,4],["pippin",4,4],["gandalf_white",7,8],["eomer",7,8],["pippin",8,8]],merry_and_pippin:[["merry",0,4],["pippin",0,4],["treebeard",1,2],["gandalf_white",3,4],["theoden",3,4],["eowyn",4,4]],there_and_back_again:[["bilbo",0,7],["gandalf",0,4],...fi.map(n=>[n,0,7]),["gandalf",7,7]]};var Lt=(n,e={})=>new Mt({color:n,roughness:.8,flatShading:!0,...e});function pi(n,e,t,i){let s=new Me,r=new Y(new Ee(n*.85,n,e,8),Lt(t));if(r.position.y=e/2,s.add(r),i){let a=new Y(new kt(n*1.15,n*2.2,8),Lt(i));a.position.y=e+n*1.1,s.add(a)}return s}function Rl(n,e=13615776,t=8010274){let i=new Me,s=new Y(new qe(n,n*.7,n*.8),Lt(e));s.position.y=n*.35;let r=new Y(new kt(n*.75,n*.6,4),Lt(t));return r.position.y=n*.7+n*.3,r.rotation.y=Math.PI/4,i.add(s,r),i}function rr(n,e,t){let i=new Me;for(let s=0;s<n;s++){let r=s/n*Math.PI*2+s,a=e*(.35+.65*(s*37%10)/10),o=t(s);o.position.set(Math.cos(r)*a,0,Math.sin(r)*a),i.add(o)}return i}function ah(n,e,t){return new Ji(n,e,t,1.5)}var k_={minas_tirith(){let n=new Me;for(let t=0;t<7;t++){let i=new Y(new Ee(2.6-t*.3,2.7-t*.3,.45,20),Lt(15657696));i.position.y=.22+t*.45,n.add(i)}let e=pi(.22,2.2,16777215,14209216);return e.position.y=3.1,n.add(e),n.userData.height=6,n},osgiliath(){let n=rr(5,1.8,e=>pi(.3,.6+e%3*.4,10131082));return n.userData.height=2,n},minas_morgul(){let n=pi(.45,3.4,2767408,1714720),e=ah(8257456,6,18);e.position.y=4,n.add(e);let t=Math.random()*6;return n.userData={height:4.6,update:(i,s)=>{e.intensity=4+Math.sin(s*1.3+t)*2}},n},barad_dur(){let n=new Me,e=pi(1.1,2,1775380);n.add(e);let t=new Y(new Ee(.25,.8,6,6),Lt(1446415));t.position.y=5,n.add(t);let i=new Y(new ct(.45,12,10),new wt({color:16747050}));i.scale.set(1.6,.8,.5),i.position.y=8.4,n.add(i);let s=ah(16738842,30,60);return s.position.y=8.4,n.add(s),n.userData={height:9,update:(r,a)=>{s.intensity=24+Math.sin(a*2.2)*8,i.rotation.y=Math.sin(a*.4)*1.2}},n},mount_doom(){let n=new Me,e=new Y(new Ee(.5,.9,.4,10),new wt({color:16734740}));e.position.y=.2,n.add(e);let t=ah(16730640,40,70);return t.position.y=2,n.add(t),n.userData={height:1.5,update:(i,s)=>{t.intensity=30+Math.sin(s*3.1)*10+Math.sin(s*7.3)*4}},n},isengard(){let n=new Me,e=new Y(new ln(2.4,.18,6,32),Lt(3815476));e.rotation.x=Math.PI/2,e.position.y=.15,n.add(e);let t=new Y(new Ee(.35,.6,5,6),Lt(1184274,{roughness:.3,metalness:.4}));t.position.y=2.5,n.add(t);for(let i=0;i<4;i++){let s=new Y(new kt(.12,.9,4),Lt(1184274));s.position.set(Math.cos(i*Math.PI/2)*.28,5.4,Math.sin(i*Math.PI/2)*.28),n.add(s)}return n.userData.height=6,n},black_gate(){let n=new Me,e=new Y(new qe(6,1.6,.6),Lt(1841688));return e.position.y=.8,n.add(e),[-2.2,2.2].forEach(t=>{let i=pi(.55,3,1841688);i.position.x=t,n.add(i)}),n.userData.height=3.4,n},helms_deep(){let n=new Me,e=new Y(new qe(3.4,.9,.4),Lt(9077876));e.position.y=.45,n.add(e);let t=pi(.6,2,9077876,5919816);return t.position.set(1.4,0,-.8),n.add(t),n.userData.height=3.2,n},edoras(){let n=rr(7,1.8,()=>Rl(.45,10521184,6967328)),e=Rl(1.1,12095562,13938487);return e.position.y=.5,n.add(e),n.userData.height=2.2,n},rivendell(){let n=rr(4,1.3,e=>pi(.22,1+e*.35,15129798,10123850));return n.userData.height=2.6,n},hobbiton(){let n=rr(8,2.2,()=>{let i=new Me,s=new Y(new ct(.5,10,6,0,Math.PI*2,0,Math.PI/2),Lt(6257208)),r=new Y(new ai(.14,12),Lt(3107370));return r.position.set(0,.16,.49),i.add(s,r),i}),e=new Y(new Ee(.1,.16,.8,6),Lt(5913114));e.position.set(.3,.4,.2);let t=new Y(new oi(.7,0),Lt(4155946));return t.position.set(.3,1.1,.2),n.add(e,t),n.userData.height=1.6,n},bree(){let n=rr(7,1.4,()=>Rl(.5));return n.userData.height=1.4,n},weathertop(){let n=new Me;for(let e=0;e<6;e++){let t=new Y(new qe(.25,.4+e%3*.2,.25),Lt(9077880));t.position.set(Math.cos(e)*.9,.25,Math.sin(e)*.9),n.add(t)}return n.userData.height=1,n},esgaroth(){let n=rr(8,1.4,()=>{let e=Rl(.4,9071168,5913120);return e.position.y=.3,e});return n.userData.height=1.4,n},erebor(){let n=new Me,e=new Y(new qe(1.2,1.6,.4),Lt(5918792));return e.position.y=.8,n.add(e),n.userData.height=2,n},grey_havens(){let n=new Me,e=new Y(new Ee(.2,.2,2.2,6,1,!1,0,Math.PI),Lt(15262420));e.rotation.z=Math.PI/2,e.position.y=.3;let t=new Y(new Ee(.03,.03,1.8,4),Lt(15262420));t.position.y=1.2;let i=new Y(new on(.9,1.1),Lt(16447212,{side:It}));i.position.set(0,1.3,.05),i.rotation.y=Math.PI/2,n.add(e,t,i);let s=pi(.2,1.8,15789280,13156528);return s.position.set(1.4,0,-1),n.add(s),n.userData.height=2.2,n},dol_guldur(){let n=pi(.5,2.2,2762274,1709588);return n.userData.height=3,n},lorien(){let n=new Me,e=new Y(new Ee(.2,.35,3,7),Lt(14210248));e.position.y=1.5;let t=new Y(new oi(1.4,1),Lt(13938487,{roughness:.6}));return t.position.y=3.4,n.add(e,t),n.userData.height=4.6,n}};function Hd(n){var i;let e=k_[n];if(!e)return null;let t=e();return(i=t.userData).height??(i.height=2),t}var oh=2.2,z_={hobbiton:[{who:"hobbit:0",at:[3.2,2.6],act:"dance"},{who:"hobbit:3",at:[4.4,2.2],act:"dance"},{who:"hobbit:1",at:[3.8,3.6],act:"cheer"},{who:"hobbit:4",at:[2.4,3.8],face:[3.6,2.6],acts:["drink","talk"],right:"mug"},{who:"hobbit:2",at:[-3.4,3.2],face:[-3.4,9],act:"dig"},{who:"hobbit:5",at:[-4.6,-1.6],face:[0,0],act:"smoke",seat:!0,prop:"bench"},{who:"bilbo",at:[.4,-3.2],face:[0,3],acts:["wave","smoke","talk"]},{who:"hobbit:6",path:[[-3,3],[3,6],[5,1]],speed:.9},{who:"cart",path:[[-6,-2],[8,1],[20,0],[8,5]],speed:1.6},{who:"hobbit:7",path:[[0,0],["bree"]],speed:.9}],bree:[{prop:"table",at:[2.8,2.2]},{who:"bree:0",at:[2.2,2.2],face:[2.8,2.2],acts:["drink","talk","drink"],right:"mug"},{who:"bree:1",at:[3.4,2.2],face:[2.8,2.2],acts:["talk","drink","listen"],right:"mug"},{who:"hobbit:2",at:[2.8,3],face:[2.8,2.2],acts:["listen","drink","cheer"],right:"mug"},{who:"bree:3",path:[[1.5,1],[4,1.2],[4,3.4],[1.5,3.2]],speed:.8},{who:"ranger:1",at:[-2.6,2.4],face:[2.8,2.2],act:"smoke",seat:!0,prop:"bench"},{who:"pony",at:[-1.6,-2.6],face:[3,-2.6]},{who:"bree:4",path:[[-8,2],[0,4],[8,3]],speed:1}],weathertop:[{prop:"fire",at:[1.4,1.6]},{who:"ranger:0",at:[.6,1.6],face:[1.4,1.6],act:"sitGround"},{who:"ranger:2",at:[2.2,1.9],face:[1.4,1.6],acts:["talk","smoke"],seat:!0},{who:"ranger:1",at:[-1.2,-.6],face:[-6,-3],act:"sentry"}],trollshaws:[{who:"troll",at:[-1.2,.4],face:[0,2],stone:!0},{who:"troll",at:[1.4,.2],face:[0,2],stone:!0},{who:"troll",at:[.2,-1.4],face:[0,0],stone:!0},{who:"ranger:0",path:[[-6,3],[6,2],[2,-5]],speed:1}],rivendell:[{who:"elrond",at:[2.2,2.2],face:[3.4,3.4],acts:["talk","listen"]},{who:"elf:1",at:[3.4,3.4],face:[2.2,2.2],acts:["listen","talk"]},{who:"bilbo",at:[-2.4,2.6],face:[-2.4,5],act:"hold",seat:!0,prop:"bench"},{who:"elf:0",at:[-.4,3.6],face:[-2.4,2.6],act:"talk"},{who:"elf:2",path:[[-3,-3],[3,-3.5],[4,1],[-2,1]],speed:.7},{who:"elf:3",path:[[4,-1],[5,3],[1,4.5]],speed:.6}],grey_havens:[{who:"havens:0",at:[-1,1.2],face:[0,0],act:"sentry"},{who:"havens:1",path:[[2.6,1.5],[-.6,.6],[-2.4,2]],speed:.5},{who:"elf:1",at:[1.6,1.8],face:[0,0],act:"wave"},{who:"havens:2",at:[2.4,-1.8],face:[0,0],act:"mourn"}],high_pass:[{who:"goblin:0",path:[[-3,-1],[3,1],[1,4],[-4,2]],speed:1.1,right:"torch"},{who:"goblin:1",path:[[3,1],[1,4],[-4,2],[-3,-1]],speed:1.1},{who:"goblin:2",at:[0,1.8],face:[0,6],act:"gloat"},{who:"goblin:3",at:[1,1.2],face:[0,6],act:"sentry",right:"torch"}],carrock:[{who:"beorn",path:[[-3,2],[3,3],[2,-2]],speed:.9},{who:"eagle",path:[[-8,-4],[0,-9],[8,-4],[0,4]],speed:4,fly:9},{who:"eagle",path:[[6,3],[-2,8],[-8,0],[0,-6]],speed:3.6,fly:12}],elvenking:[{prop:"target",at:[0,6]},{who:"woodelf:0",at:[-.8,1.5],face:[0,6],act:"shoot"},{who:"woodelf:2",at:[.8,1.2],face:[0,6],act:"shoot"},{who:"woodelf:1",at:[-2.4,-1.8],face:[-2.4,-6],act:"sentry"},{who:"thranduil",at:[2.6,-1.2],face:[0,3],acts:["idle","talk"]},{who:"barrel",path:[[4,-4],[5.5,0],[4.5,5],[6,10]],speed:1.4},{who:"barrel",path:[[5.5,0],[4.5,5],[6,10],[4,-4]],speed:1.4}],esgaroth:[{who:"laketown:0",at:[2.6,2.4],face:[5,5],act:"fish",right:"rod",seat:!0},{who:"laketown:1",at:[-2.6,2.6],face:[-5,5],act:"fish",right:"rod"},{who:"laketown:2",at:[.8,-2.4],face:[0,0],acts:["talk","point"]},{who:"bard",at:[-.4,-1.6],face:[.8,-2.4],acts:["listen","talk"]},{who:"boat",path:[[3,4],[7,6],[5,9],[1,6]],speed:.8},{prop:"stall",at:[1.8,-1.2]}],erebor:[{prop:"anvil",at:[-1.6,2.2]},{prop:"fire",at:[-2.4,3]},{who:"dwarf:0",at:[-1.6,2.9],face:[-1.6,2.2],act:"hammer",right:"hammer"},{who:"dwarf:3",at:[-.9,2.2],face:[-1.6,2.2],act:"hammer",right:"hammer"},{who:"dwarf:1",at:[1.2,1.6],face:[1.2,8],act:"sentry",right:"spear"},{who:"dwarf:4",at:[-1.2,1.6],face:[-1.2,8],act:"sentry",right:"spear"},{who:"dwarf:2",path:[[2,3],[6,5],[4,8],[0,5]],speed:.8}],moria:[{who:"goblin:4",path:[[-2,2],[2,2.5],[2,5],[-2,4]],speed:1},{who:"goblin:0",at:[.6,1.5],face:[0,6],act:"sentry",right:"torch"},{who:"goblin:1",at:[-.8,1.2],face:[0,6],act:"gloat"}],lorien:[{who:"galadriel",path:[[-2,2],[2,2.5],[2.5,-1.5],[-2,-2]],speed:.35},{who:"woodelf:0",at:[3,3.4],face:[8,8],act:"sentry",left:"longbow"},{who:"elf:0",at:[-3.2,2.8],face:[-8,8],act:"sentry"},{who:"elf:3",at:[.6,-3],face:[0,0],act:"talk"},{who:"elf:1",at:[1.2,-3.6],face:[0,0],act:"listen"}],dol_guldur:[{who:"nazgul",at:[0,2.2],face:[0,8],act:"idle"},{who:"orc:1",path:[[-3,2],[3,3],[3,-2],[-3,-2]],speed:1},{who:"orc:2",at:[1.4,2.4],face:[1.4,8],act:"sentry"},{who:"spider",path:[[-6,4],[-2,7],[-7,8]],speed:1.4}],fangorn:[{who:"treebeard",path:[[-3,1],[2,4],[4,-2],[-1,-4]],speed:.35},{who:"ent:1",path:[[4,-2],[-1,-4],[-3,1],[2,4]],speed:.3},{who:"ent:2",at:[-4,3],face:[0,0],act:"idle"}],isengard:[{who:"saruman",at:[0,1.4],face:[0,6],acts:["cast","point","idle"]},{who:"uruk:0",at:[-3,2.4],face:[-3,5],act:"chop",right:"axe"},{who:"uruk:1",at:[3.4,2.6],face:[3.4,5],act:"chop",right:"axe"},{prop:"anvil",at:[2,-2.4]},{prop:"fire",at:[2.8,-3]},{who:"orc:0",at:[2,-1.7],face:[2,-2.4],act:"hammer",right:"hammer"},{who:"uruk:2",path:[[-4,-3],[0,-2],[4,0],[2,4],[-3,3]],speed:1.2},{who:"uruk:3",path:[[0,-2],[4,0],[2,4],[-3,3],[-4,-3]],speed:1.2}],helms_deep:[{who:"rohan:0",at:[-1.4,2.2],face:[-1.4,8],act:"sentry"},{who:"rohan:1",at:[1.4,2.2],face:[1.4,8],act:"sentry"},{who:"rohan:2",path:[[-2.6,1.6],[2.6,1.6]],speed:.6},{prop:"anvil",at:[-2.2,-1.6]},{who:"rohan:3",at:[-2.2,-.9],face:[-2.2,-1.6],act:"hammer",right:"hammer"}],edoras:[{who:"rider:rohan",path:[[6,-8],[22,-14],[30,-2],[14,4]],speed:3},{who:"rider:rohan",path:[[7,-8],[22,-16],[30,-2],[14,4]],speed:3.2},{who:"rider:rohan",path:[[8,-8],[22,-18],[30,-2],[14,4]],speed:3.4},{who:"rohan:0",at:[-.8,1.6],face:[-.8,8],act:"sentry"},{who:"rohan:2",at:[.8,1.6],face:[.8,8],act:"sentry"},{who:"eowyn",at:[0,2.8],face:[0,9],acts:["idle","look"]}],erech:[{who:"dead:0",path:[[-2,0],[0,2],[2,0],[0,-2]],speed:.4},{who:"dead:1",path:[[0,2],[2,0],[0,-2],[-2,0]],speed:.4},{who:"dead:2",path:[[2,0],[0,-2],[-2,0],[0,2]],speed:.4},{who:"king_of_the_dead",at:[0,.8],face:[0,6],act:"idle"}],amon_hen:[{who:"boat",at:[-2,2.6],face:[-2,8]},{who:"boat",at:[-3,2],face:[-3,8]},{who:"uruk:1",path:[[2,-3],[4,2],[1,4]],speed:1},{who:"uruk:4",at:[3.4,-1],face:[0,0],act:"sentry"}],dead_marshes:[{prop:"wisps",at:[0,1]},{prop:"wisps",at:[-3,-1]},{who:"gollum",path:[[-4,3],[0,1],[4,3],[2,-2]],speed:.8,act:"crawl"}],black_gate:[{who:"mordor:0",at:[-1.2,1.8],face:[-1.2,8],act:"sentry"},{who:"mordor:1",at:[1.2,1.8],face:[1.2,8],act:"sentry"},{who:"mordor:2",at:[0,2.4],face:[0,8],act:"sentry"},{who:"orc:0",path:[[-2,9],[0,3],[2,9]],speed:1},{who:"orc:1",path:[[0,3],[2,9],[-2,9]],speed:1},{who:"orc:2",path:[[2,9],[-2,9],[0,3]],speed:1}],minas_tirith:[{who:"gondor:0",at:[-1,2.8],face:[-1,9],act:"sentry"},{who:"gondor:1",at:[1,2.8],face:[1,9],act:"sentry"},{who:"gondor:2",path:[[-3,3.4],[3,3.4]],speed:.6},{who:"pippin",at:[0,1.8],face:[0,9],act:"sentry"},{who:"rider:gandalf_white",path:[[-6,6],[6,5],[4,-3],[-5,-3]],speed:3.2,horse:16053488}],osgiliath:[{who:"faramir",at:[0,1.6],face:[3,4],acts:["talk","point"]},{who:"gondor:3",at:[1.2,1.9],face:[0,1.6],act:"listen"},{who:"gondor:4",at:[-1.6,2.4],face:[-2,8],act:"guard",right:"sword"},{who:"ranger:3",path:[[-3,-2],[3,-2],[3,3]],speed:.8}],minas_morgul:[{who:"rider:nazgul",path:[[-2,3],[4,8],[10,2],[4,-3]],speed:2.4,black:!0},{who:"rider:nazgul",path:[[4,8],[10,2],[4,-3],[-2,3]],speed:2.4,black:!0},{who:"orc:3",at:[-1.2,2],face:[-1.2,8],act:"sentry"},{who:"orc:4",at:[1.2,2],face:[1.2,8],act:"sentry"}],mount_doom:[{who:"mordor:3",path:[[-5,4],[0,6],[5,4]],speed:.8},{who:"mordor:4",path:[[0,6],[5,4],[-5,4]],speed:.8},{who:"orc:2",at:[3,2.6],face:[0,6],act:"dig",right:"hoe"}],barad_dur:[{who:"fellbeast",path:[[-8,0],[0,-8],[8,0],[0,8]],speed:4,fly:16},{who:"mordor:0",at:[-1.6,2],face:[-1.6,8],act:"sentry"},{who:"mordor:2",at:[1.6,2],face:[1.6,8],act:"sentry"}],pelargir:[{who:"ship",at:[-3,3],face:[-3,9]},{who:"ship",at:[2,4],face:[4,9]},{who:"corsair:0",path:[[-2,1],[2,1.5],[1,-1]],speed:.8},{who:"corsair:1",at:[0,2],face:[-3,3],acts:["talk","point"]},{who:"corsair:2",at:[.8,2.4],face:[0,2],act:"listen"}]},H_=(n,e={})=>new Mt({color:n,roughness:.85,flatShading:!0,emissive:n,emissiveIntensity:.15,...e});function lh(n){let e=new Me,t=(i,s,r,a,o,l=0)=>{let c=new Y(i,H_(s));return c.position.set(r,a,o),c.rotation.y=l,e.add(c),c};switch(n){case"table":t(new qe(.9,.06,.5),6965802,0,.4,0);for(let i of[-.38,.38])t(new qe(.06,.4,.4),5913120,i,.2,0);t(new Ee(.04,.035,.08,6),9071168,.2,.47,.05);break;case"bench":t(new qe(.7,.05,.22),6965802,0,.28,0);for(let i of[-.28,.28])t(new qe(.05,.28,.2),5913120,i,.14,0);break;case"anvil":t(new qe(.2,.25,.16),3815994,0,.12,0),t(new qe(.4,.1,.18),4868682,0,.3,0);break;case"stall":t(new qe(.9,.4,.4),6967344,0,.2,0),t(new qe(1,.04,.6),10504762,0,.9,0);for(let i of[-.45,.45])t(new Ee(.02,.02,.9,4),5913120,i,.45,.2);break;case"target":t(new Ee(.25,.25,.05,12),15259824,0,.5,0).rotation.x=Math.PI/2,t(new Ee(.1,.1,.06,10),10496538,0,.5,0).rotation.x=Math.PI/2,t(new Ee(.02,.02,.5,4),5913120,0,.25,-.03);break;case"boat":{t(new Ee(.22,.22,1.4,8,1,!1,Math.PI/2,Math.PI),10132106,0,.18,0).rotation.set(Math.PI/2,0,Math.PI),t(new kt(.06,.4,5),14211272,0,.45,.72);break}default:break}return e}function G_(n){let[e,t]=n.who.split(":");switch(e){case"rider":{let i=Fn(n.horse??6965808,t,{black:n.black});return i.userData.gallop=n.speed>2.8,i}case"cart":return Pd();case"pony":return tr(8018490);case"horse":return ha(n.horse??8018490,!1,{saddle:!1});case"eagle":return ls(1.2);case"fellbeast":return nr(Tn("nazgul"));case"troll":{let i=wl();return n.stone&&i.userData.turnToStone(1),i}case"spider":return Sl(.6);case"ship":return ua();case"barrel":return Ud();case"boat":return lh("boat");default:return Tn(n.who,{right:n.right,left:n.left})}}function Gd(n,e){var i,s,r,a,o,l;let t=[];for(let[c,h]of Object.entries(z_)){let u=e.places[c];if(!u)continue;let d=new Me;d.position.set(u.x,u.y,u.z),d.visible=!1,n.add(d);let f=[],p=(x,g)=>Math.max(e.heightAt(u.x+x,u.z+g),e.seaY)-u.y;for(let x of h){if(x.prop&&!x.who){let y=x.prop==="fire"?qn(1.6):x.prop==="wisps"?Ft({count:24,color:14221288,endColor:1060896,size:1.2,life:2.5,spread:3,velocity:[0,.3,0],jitter:.2}):lh(x.prop);y.userData.update||y.scale.setScalar(oh),y.position.set(x.at[0],p(x.at[0],x.at[1])+(x.prop==="wisps"?.5:0),x.at[1]),d.add(y),y.userData.update&&f.push({obj:y,update:y.userData.update});continue}let g=G_(x);g.rotation.order="YXZ",g.scale.multiplyScalar(oh),d.add(g);let m=((i=g.userData.rig)==null?void 0:i.d.legs)??.48;if(x.prop){let y=lh(x.prop);y.scale.setScalar(oh*(x.seat?m*.5/.3:1)),y.position.set(x.at[0],p(x.at[0],x.at[1]),x.at[1]),x.face&&(y.rotation.y=Math.atan2(x.face[0]-x.at[0],x.face[1]-x.at[1])),d.add(y)}let M={obj:g,e:x,fly:x.fly||0,t:Math.random()*10};if(x.path){let y=x.path.map(_=>typeof _[0]=="string"?new I(e.places[_[0]].x-u.x,0,e.places[_[0]].z-u.z):new I(_[0],0,_[1]));M.curve=new Un(y,!0),M.len=M.curve.getLength(),M.u=Math.random(),x.act&&((r=(s=g.userData).act)==null||r.call(s,x.act))}else g.position.set(x.at[0],p(x.at[0],x.at[1])+M.fly,x.at[1]),x.face&&(g.rotation.y=Math.atan2(x.face[0]-x.at[0],x.face[1]-x.at[1])),x.seat&&g.userData.pose&&Object.assign(g.userData.pose,{crouch:.45,lLegX:-1.5,lKnee:1.45,rLegX:-1.5,rKnee:1.45}),(l=(o=g.userData).act)==null||l.call(o,x.act||((a=x.acts)==null?void 0:a[0])||"idle");f.push(M)}t.push({id:c,group:d,place:u,actors:f,ground:p})}return(c,h,u)=>{var d,f,p,x,g,m;for(let M of t){let y=Math.hypot(M.place.x-u.x,M.place.z-u.z),_=u.dist<160&&y<Math.max(45,u.dist*1.25);if(M.group.visible=_,!!_)for(let S of M.actors){if(S.update){S.update(c,h);continue}let{obj:T,e:R}=S;if((f=(d=T.userData).update)==null||f.call(d,c,h),S.curve){S.u=(S.u+(R.speed||1)*c/S.len)%1;let C=S.curve.getPointAt(S.u),w=S.curve.getPointAt((S.u+.003)%1);T.position.set(C.x,M.ground(C.x,C.z)+S.fly,C.z),T.rotation.y=Math.atan2(w.x-C.x,w.z-C.z),(x=(p=T.userData).walk)==null||x.call(p,c*Math.min(1.6,Math.max(.6,(R.speed||1)/1.1)))}else if(R.acts){S.t+=c;let C=R.every||5;(m=(g=T.userData).act)==null||m.call(g,R.acts[Math.floor(S.t/C)%R.acts.length])}}}}}var V_=22,gi=.05,Wd=window.Android||{onState(){},onReady(){}},Yn={};window.World=Yn;window.addEventListener("error",n=>{let e=document.getElementById("loading");e&&(e.textContent="Error: "+n.message),window.__lastError=n.message+" @"+n.lineno+":"+n.colno,window.Android||(document.title="Error: "+window.__lastError),console.error(n.message,n.filename,n.lineno)});window.addEventListener("unhandledrejection",n=>{var t;let e=document.getElementById("loading");e&&(e.textContent="Error: "+(((t=n.reason)==null?void 0:t.stack)||n.reason))});var Yt,fn,cn,or,Li,Ui,uh,Pi,cs,hs={},Xd=[],qd=[],Oe={x:0,z:0,dist:140,yaw:0,pitch:.95},Ue={...Oe},K=null,mi=null,lr=null,dh=null;function W_(n){return new Promise((e,t)=>{let i=new Image;i.onload=()=>e(i),i.onerror=t,i.src=n})}async function X_(){let n=await W_("height.png");Pi=n.width,cs=n.height;let e=document.createElement("canvas");e.width=Pi,e.height=cs;let t=e.getContext("2d");t.drawImage(n,0,0);let i=t.getImageData(0,0,Pi,cs).data;uh=new Float32Array(Pi*cs);for(let s=0;s<Pi*cs;s++){let r=(i[s*4]*256+i[s*4+1])/65535;uh[s]=r<=.002?-.6:r*V_}}function Bn(n,e){let t=(n/Li+.5)*(Pi-1),i=(e/Ui+.5)*(cs-1),s=Math.max(0,Math.min(Pi-2,Math.floor(t))),r=Math.max(0,Math.min(cs-2,Math.floor(i))),a=Math.min(1,Math.max(0,t-s)),o=Math.min(1,Math.max(0,i-r)),l=(c,h)=>uh[h*Pi+c];return(l(s,r)*(1-a)+l(s+1,r)*a)*(1-o)+(l(s,r+1)*(1-a)+l(s+1,r+1)*a)*o}Yn.heightAt=Bn;function q_(n,e){return{x:(n-.5)*Li,z:(e-.5)*Ui}}function Y_(n){let t=Math.round(383*Ui/Li),i=new on(Li,Ui,383,t);i.rotateX(-Math.PI/2);let s=i.attributes.position;for(let l=0;l<s.count;l++)s.setY(l,Bn(s.getX(l),s.getZ(l)));i.computeVertexNormals();let r=new Mt({map:n,roughness:.95,metalness:0}),a=new Y(i,r);fn.add(a);let o=new Y(new on(Li*1.6,Ui*1.6),new Mt({color:2376778,roughness:.35,metalness:.2,transparent:!0,opacity:.88}));o.rotateX(-Math.PI/2),o.position.y=gi,fn.add(o)}function Z_(){let n=document.createElement("canvas");n.width=4,n.height=256;let e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"#2c2418"),t.addColorStop(.55,"#8a6f4a"),t.addColorStop(1,"#e2c790"),e.fillStyle=t,e.fillRect(0,0,4,256);let i=new Xi(n);return i.colorSpace=Zt,i}function $_(n){for(let[e,[t,i]]of Object.entries(Yn.data.places)){let{x:s,z:r}=q_(t,i),a=Math.max(Bn(s,r),gi),o=Hd(e);o&&(o.position.set(s,a,r),fn.add(o),o.userData.update&&qd.push(o.userData));let l=document.createElement("div");l.className="label",l.textContent=n[e]||e,document.getElementById("labels").appendChild(l);let c={id:e,name:n[e]||e,x:s,y:a,z:r,el:l,top:((o==null?void 0:o.userData.height)||1.5)+.8};hs[e]=c,Xd.push(c)}}var ar=new I;function J_(){let n=Yt.domElement.clientWidth,e=Yt.domElement.clientHeight,t=null,i=1/0,s=[];for(let l of Xd){ar.set(l.x,l.y+l.top,l.z).project(cn);let c=ar.z<1&&Math.abs(ar.x)<1.1&&Math.abs(ar.y)<1.1,h=cn.position.distanceTo(new I(l.x,l.y,l.z));if(!c||h>Oe.dist*4.5+60){l.el.style.display="none";continue}l.sx=(ar.x*.5+.5)*n,l.sy=(-ar.y*.5+.5)*e,l.dist=h,l.fromCentre=Math.hypot(l.sx-n/2,l.sy-e/2),l.fromCentre<i&&(i=l.fromCentre,t=l),s.push(l)}let r=!K&&t&&i<Math.min(n,e)*.12?t:null,a=K?K.stopIds[K.stop]:null;s.sort((l,c)=>(c===r||c.id===a)-(l===r||l.id===a)||l.fromCentre-c.fromCentre);let o=[];for(let l of s){if(K!=null&&K.scene&&l.id===a){l.el.style.display="none";continue}let c=l.name.length*9+12,u={l:l.sx-c/2,r:l.sx+c/2,t:l.sy-24,b:l.sy},d=o.some(f=>u.l<f.r&&u.r>f.l&&u.t<f.b&&u.b>f.t);l.el.style.display=d?"none":"block",!d&&(o.push(u),l.el.style.transform=`translate(-50%, -100%) translate(${l.sx}px, ${l.sy}px)`,l.el.style.opacity=String(Math.max(.25,Math.min(1,1.6-l.dist/(Oe.dist*3.2+40)))),l.el.classList.toggle("picked",l===r||l.id===a))}!K&&(r==null?void 0:r.id)!==lr&&(lr=(r==null?void 0:r.id)||null,fa())}var ph=3.2;function K_(n){let e=n.stops.map(g=>{let m=hs[g];return new I(m.x,0,m.z)}),t=new Un(e,!1,"centripetal"),i=900,s=[];for(let g=0;g<=i;g++){let m=t.getPointAt(g/i);s.push(new I(m.x,Math.max(Bn(m.x,m.z),gi)+.12,m.z))}let r=new Un(s),a=new Y(new Ti(r,i,.09,5),new wt({color:13938487,transparent:!0,opacity:.35})),o=new Ti(r,i,.14,6),l=new Y(o,new wt({color:15784317}));fn.add(a,l);let c=4e3,h=t.getLengths(c),u=h[c],d=n.stops.map((g,m)=>h[Math.round(m/(n.stops.length-1)*c)]/u),f=new Me;f.scale.setScalar(ph),fn.add(f);let p=zd[n.id]||[],x={};for(let[g]of p){if(x[g])continue;let m=Tn(g);m.rotation.order="YXZ",m.visible=!1,f.add(m),x[g]=m}if(n.id==="there_and_back_again"){let g=tr(6965808);g.visible=!1,f.add(g),x.pony=g,p.push(["pony",0,2])}K={spec:n,stopIds:n.stops,road:r,curve:t,stopT:d,length:u,doneGeo:o,group:f,members:x,legs:p,t:0,toT:0,stop:0,walking:!1,pace:0,stepRate:1,samples:i,scene:null},mh(0,0),Yd(0)}function Yd(n){K.doneGeo.setDrawRange(0,Math.floor(n*K.samples)*6*6)}function Zd(n){let e=K.stopT;for(let t=0;t<e.length-1;t++)if(n<=e[t+1])return t+Math.max(0,Math.min(1,(n-e[t])/(e[t+1]-e[t]||1)));return e.length-1}function Q_(n){return Math.min(16,Math.max(4,7*Math.pow(n/80,.45)))}function j_(n){let e=[];for(let[t,i,s]of K.legs)n>=i-.05&&n<=s+.05&&!e.includes(t)&&e.push(t);return e}function mh(n,e){let t=K.curve.getPointAt(Math.min(1,Math.max(0,n))),i=K.curve.getPointAt(Math.min(1,n+.002)),s=Math.max(Bn(t.x,t.z),gi);K.group.position.set(t.x,s,t.z);let r=Math.atan2(i.x-t.x,i.z-t.z);!K.scene&&Number.isFinite(r)&&(i.x!==t.x||i.z!==t.z)&&(K.group.rotation.y=r);let a=j_(Zd(n)),o=0,l=0;for(let[c,h]of Object.entries(K.members)){let u=a.includes(c);if(h.userData.held||(h.visible=u,!u))continue;let d=c==="treebeard"||c==="pony",f=d?1.1:l===0?-.32:.32,p=-o*.75-(d?.6:0),x=Math.min(1,e*4);h.position.x+=(f-h.position.x)*(h.userData.placed?x:1),h.position.z+=(p-h.position.z)*(h.userData.placed?x:1),h.userData.placed=!0,h.rotation.y=0,d||(l=1-l,l===0&&o++),h.userData.walk(K.walking?e*K.stepRate:0)}return r}var Di=new I;function ey(){let n=K.group;n.updateMatrixWorld(!0);for(let e of n.children){if(e.userData.ground===!1)continue;Di.set(e.position.x,0,e.position.z),n.localToWorld(Di);let t=Math.max(Bn(Di.x,Di.z),gi);e.position.y=(t-n.position.y)/ph+(e.userData.lift||0)}}function $d(n){var c;let e=(c=kd[K.spec.id])==null?void 0:c[n];if(!e)return;let t=K.group;t.rotation.y=Math.atan2(t.position.x-cn.position.x,t.position.z-cn.position.z);let i=[],s=[],r=[],a={add(h){return h.userData.ground===void 0&&(h.userData.ground=!0),t.add(h),i.push(h),h.userData.update&&r.push(h),h},cast(h){let u=K.members[h];if(u&&u.visible)return u.userData.held=!0,s.push({m:u,opacity:[]}),u.traverse(f=>{f.material&&s[s.length-1].opacity.push([f.material,f.material.opacity,f.material.transparent])}),u;let d=Tn(h);return d.rotation.order="YXZ",a.add(d)},at(h){let u=hs[h];return t.updateMatrixWorld(!0),t.worldToLocal(new I(u.x,Math.max(Bn(u.x,u.z),gi),u.z))},stage(h){t.updateMatrixWorld(!0);let u=-1/0;for(let d=0;d<12;d++)for(let f of[0,h*.5,h])Di.set(Math.sin(d)*f,0,Math.cos(d)*f+h*.3),t.localToWorld(Di),u=Math.max(u,Bn(Di.x,Di.z),gi);return(u-t.position.y)/ph},hide(...h){for(let u of h){let d=K.members[u];d&&d.visible&&(d.userData.held=!0,s.push({m:d,opacity:[]}),d.visible=!1)}},joint(h,u){var f;let d=(f=h.userData.joints)==null?void 0:f[u];return t.updateMatrixWorld(!0),d?t.worldToLocal(d.getWorldPosition(new I)):h.position.clone()},focus(h,u,d){o.set(h,u,d)}},o=new I(0,a.stage(2)+.5,1.2),l=e.run(a);K.scene={def:e,update:l,added:i,held:s,updates:r,t:0,focus:o},Ue.dist=e.dist||30}function ty(){var e,t,i,s;let n=K.scene;if(n){for(let r of n.added)K.group.remove(r),Ad(r),r.traverse(a=>{var o,l,c;(o=a.geometry)!=null&&o.userData.shared||(c=(l=a.geometry)==null?void 0:l.dispose)==null||c.call(l)});for(let{m:r,opacity:a}of n.held){r.userData.held=!1,r.userData.lift=0,delete r.userData.ground;for(let o of Object.keys(r.userData.pose||{}))delete r.userData.pose[o];(t=(e=r.userData).act)==null||t.call(e,"idle"),(s=(i=r.userData).running)==null||s.call(i,!1),r.rotation.set(0,0,0),r.scale.setScalar(1),r.visible=!0;for(let[o,l,c]of a)o.opacity=l,o.transparent=c}K.scene=null,Ue.dist=Math.min(Ue.dist,30)}}function ny(n){let e=K.scene;if(!e)return;e.frozen||(e.t+=n);let t=e.t%e.def.period;e.update(t,n);for(let i of e.updates)i.userData.update(n,e.t)}function fh(n){K&&(ty(),K.stop=Math.max(0,Math.min(K.stopIds.length-1,n)),K.toT=K.stopT[K.stop],K.walking||(K.pace=0),K.walking=!0,fa())}Yn.key=n=>{let e=Oe.dist*.35,t={x:Math.sin(Ue.yaw),z:-Math.cos(Ue.yaw)},i={x:Math.cos(Ue.yaw),z:Math.sin(Ue.yaw)};if(K)if(n==="right")fh(K.stop+1);else if(n==="left")fh(K.stop-1);else if(n==="up")Ue.dist=Math.max(12,Ue.dist/1.5);else if(n==="down")Ue.dist=Math.min(700,Ue.dist*1.5);else if(n==="ok")Ue.dist=Ue.dist>150?22:420;else if(n==="ff")Ue.yaw+=Math.PI/6,K.userYaw=!0;else if(n==="rw")Ue.yaw-=Math.PI/6,K.userYaw=!0;else return!1;else{if(n==="up")Ue.x+=t.x*e,Ue.z+=t.z*e;else if(n==="down")Ue.x-=t.x*e,Ue.z-=t.z*e;else if(n==="left")Ue.x-=i.x*e,Ue.z-=i.z*e;else if(n==="right")Ue.x+=i.x*e,Ue.z+=i.z*e;else if(n==="ok")lr&&(Ue.x=hs[lr].x,Ue.z=hs[lr].z),Ue.dist=Math.max(10,Ue.dist/1.7);else if(n==="back")Ue.dist=Math.min(900,Ue.dist*1.7);else if(n==="ff")Ue.yaw+=Math.PI/6;else if(n==="rw")Ue.yaw-=Math.PI/6;else return!1;Ue.x=Math.max(-Li/2,Math.min(Li/2,Ue.x)),Ue.z=Math.max(-Ui/2,Math.min(Ui/2,Ue.z))}return fa(),!0};function fa(){Wd.onState(JSON.stringify({place:K?null:lr,stop:K?K.stop:-1,canZoomOut:!K&&Ue.dist<700,walking:K?K.walking:!1}))}var ch=0,hh=0;function Jd(){let n=Math.min(.2,or.getDelta());if(ch++,or.elapsedTime-hh>4){let a=ch/(or.elapsedTime-hh),o=Yt.getPixelRatio();a<24&&o>.5&&(Yt.setPixelRatio(Math.max(.5,o*.75)),Yt.setSize(window.innerWidth,window.innerHeight)),console.log(`fps ${a.toFixed(1)} at pixel ratio ${Yt.getPixelRatio().toFixed(2)}, ${Yt.info.render.calls} draw calls, ${Yt.info.render.triangles} triangles`),ch=0,hh=or.elapsedTime}let e=or.elapsedTime;if(K){if(K.walking){let o=Math.sign(K.toT-K.t),l=Math.min(K.stopT.length-2,Math.floor(Zd(K.t+o*1e-6))),c=(K.stopT[l+1]-K.stopT[l])*K.length,h=Q_(c),u=Math.abs(K.toT-K.t)*K.length;K.pace=Math.min(1,K.pace+n*.8);let d=Math.min(K.pace,Math.max(.3,Math.min(1,u/(h*1.2))));K.t+=o*(h*d/K.length)*n,K.stepRate=Math.max(.35,d)*Math.min(1.5,Math.max(.85,h/7)),(o>0&&K.t>=K.toT||o<0&&K.t<=K.toT||o===0)&&(K.t=K.toT,K.walking=!1,$d(K.stop),fa())}let a=mh(K.t,n);ny(n),ey(),K.scene?(K.group.updateMatrixWorld(!0),mi=K.group.localToWorld(K.scene.focus.clone())):mi=null,Yd(Math.max(K.t,K.done||0)),K.done=Math.max(K.t,K.done||0),Ue.x=mi?mi.x:K.group.position.x,Ue.z=mi?mi.z:K.group.position.z,K.walking&&Number.isFinite(a)&&!K.userYaw&&(Ue.yaw+=Vd(Ue.yaw,a+Math.PI)*Math.min(1,n*1.2))}let t=1-Math.exp(-n*3.2);Oe.x+=(Ue.x-Oe.x)*t,Oe.z+=(Ue.z-Oe.z)*t,Oe.dist+=(Ue.dist-Oe.dist)*t,Oe.yaw+=Vd(Oe.yaw,Ue.yaw)*t,Oe.pitch=.42+.62*Math.min(1,Math.max(0,Math.log(Oe.dist/12)/Math.log(60)));let i=mi?Oe.lookY=iy(Oe.lookY??mi.y,mi.y,t):Oe.lookY=Math.max(Bn(Oe.x,Oe.z),gi),s=Math.cos(Oe.pitch)*Oe.dist;cn.position.set(Oe.x-Math.sin(Oe.yaw)*s,i+Math.sin(Oe.pitch)*Oe.dist,Oe.z+Math.cos(Oe.yaw)*s);let r=Bn(cn.position.x,cn.position.z)+1.5;cn.position.y<r&&(cn.position.y=r),cn.lookAt(Oe.x,i-(K?Oe.dist*.22:0),Oe.z),fn.fog.near=Oe.dist*2.2,fn.fog.far=Oe.dist*10+700;for(let a of qd)a.update(n,e);dh&&dh(n,e,{x:Oe.x,z:Oe.z,dist:Oe.dist}),Td(n),Yt.render(fn,cn),J_(),requestAnimationFrame(Jd)}function iy(n,e,t){return n+(e-n)*t}function Vd(n,e){let t=(e-n)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}Yn.start=async n=>{Yn.data=await(await fetch("places.json")).json(),Li=Yn.data.widthKm,Ui=Yn.data.heightKm,await X_(),Yt=new ml({antialias:!0,powerPreference:"high-performance"}),Yt.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),Yt.setSize(window.innerWidth,window.innerHeight),Yt.outputColorSpace=Zt,Yt.toneMapping=Ao,Yt.toneMappingExposure=1.05,document.getElementById("stage").appendChild(Yt.domElement),fn=new Dr,fn.background=Z_(),fn.fog=new Pr(9404258,200,1200),cn=new $t(45,window.innerWidth/window.innerHeight,.3,4e3),fn.add(new Jr(16773336,2761752,.55));let e=new Qr(16769720,2.6);e.position.set(-600,500,-400),fn.add(e);let t=await new $r().loadAsync("terrain.jpg");if(t.colorSpace=Zt,t.anisotropy=Yt.capabilities.getMaxAnisotropy(),Y_(t),$_(n.names||{}),n.journey){K_(n.journey),Ue.dist=Oe.dist=22,n.startStop&&(K.stop=n.startStop,K.t=K.toT=K.done=K.stopT[n.startStop]);let i=mh(K.t,0);Ue.x=Oe.x=K.group.position.x,Ue.z=Oe.z=K.group.position.z,Number.isFinite(i)&&(Ue.yaw=Oe.yaw=i+Math.PI),cn.position.set(Oe.x-Math.sin(Oe.yaw)*Oe.dist,K.group.position.y+Oe.dist,Oe.z+Math.cos(Oe.yaw)*Oe.dist),$d(K.stop),K.scene&&n.sceneTime&&(K.scene.t=n.sceneTime),K.scene&&n.freeze&&(K.scene.frozen=!0),n.go!==void 0&&setTimeout(()=>fh(n.go),800),n.go!==void 0&&setInterval(()=>{document.title=JSON.stringify({t:K.t,toT:K.toT,walking:K.walking,stop:K.stop,scene:!!K.scene,err:window.__lastError})},1e3)}else{dh=Gd(fn,{places:hs,heightAt:Bn,seaY:gi});let i=hs[n.startAt||"hobbiton"];Ue.x=Oe.x=i.x,Ue.z=Oe.z=i.z,Ue.dist=Oe.dist=90}or=new jr,window.addEventListener("resize",()=>{cn.aspect=window.innerWidth/window.innerHeight,cn.updateProjectionMatrix(),Yt.setSize(window.innerWidth,window.innerHeight)}),document.getElementById("loading").classList.add("gone"),requestAnimationFrame(Jd),fa(),Wd.onReady()};window.addEventListener("keydown",n=>{let e={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",Enter:"ok",Backspace:"back","]":"ff","[":"rw"};e[n.key]&&(Yn.key(e[n.key]),n.preventDefault())});if(!window.Android&&/[?&]demo/.test(location.search)){let n=new URLSearchParams(location.search).get("demo"),e={ring_bearer:["hobbiton","bree","weathertop","rivendell","moria","lorien","amon_hen","dead_marshes","black_gate","osgiliath","minas_morgul","mount_doom"],three_hunters:["amon_hen","fangorn","edoras","helms_deep","isengard","erech","pelargir","minas_tirith","black_gate"],merry_and_pippin:["amon_hen","fangorn","isengard","edoras","minas_tirith"],there_and_back_again:["hobbiton","trollshaws","rivendell","high_pass","carrock","elvenking","esgaroth","erebor"]};window.addEventListener("load",()=>Yn.start(n&&e[n]?{journey:{id:n,stops:e[n]},startStop:Number(new URLSearchParams(location.search).get("stop")||0),sceneTime:Number(new URLSearchParams(location.search).get("t")||0),freeze:new URLSearchParams(location.search).has("freeze"),go:new URLSearchParams(location.search).has("go")?Number(new URLSearchParams(location.search).get("go")):void 0}:{startAt:new URLSearchParams(location.search).get("at")||"hobbiton"}))}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
