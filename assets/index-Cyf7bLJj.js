var lf=Object.defineProperty;var hf=(s,t,e)=>t in s?lf(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var xl=(s,t,e)=>hf(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cc="170",uf=0,vl=1,df=2,Iu=1,Du=2,Vn=3,Zn=0,Ge=1,ze=2,bi=0,Di=1,To=2,Ml=3,yl=4,ff=5,Pi=100,pf=101,mf=102,gf=103,bf=104,_f=200,xf=201,vf=202,Mf=203,Ao=204,Eo=205,yf=206,Sf=207,wf=208,Tf=209,Af=210,Ef=211,Rf=212,Cf=213,Pf=214,Ro=0,Co=1,Po=2,ls=3,Lo=4,Io=5,Do=6,ko=7,Pc=0,Lf=1,If=2,_i=0,Df=1,kf=2,Nf=3,Uf=4,Ff=5,Of=6,Bf=7,Sl="attached",zf="detached",ku=300,hs=301,us=302,No=303,Uo=304,ma=306,ki=1e3,fi=1001,ca=1002,He=1003,Nu=1004,Gs=1005,Je=1006,ta=1007,qn=1008,ti=1009,Uu=1010,Fu=1011,Zs=1012,Lc=1013,Ni=1014,mn=1015,ar=1016,Ic=1017,Dc=1018,ds=1020,Ou=35902,Bu=1021,zu=1022,rn=1023,Gu=1024,Hu=1025,rs=1026,fs=1027,kc=1028,Nc=1029,Vu=1030,Uc=1031,Fc=1033,ea=33776,na=33777,ia=33778,sa=33779,Fo=35840,Oo=35841,Bo=35842,zo=35843,Go=36196,Ho=37492,Vo=37496,Wo=37808,jo=37809,Xo=37810,qo=37811,Yo=37812,Ko=37813,$o=37814,Jo=37815,Qo=37816,Zo=37817,tc=37818,ec=37819,nc=37820,ic=37821,ra=36492,sc=36494,rc=36495,Wu=36283,ac=36284,oc=36285,cc=36286,tr=2300,er=2301,Ea=2302,wl=2400,Tl=2401,Al=2402,Gf=2500,Hf=0,ju=1,lc=2,Vf=3200,Wf=3201,Oc=0,jf=1,di="",ye="srgb",Ve="srgb-linear",ga="linear",le="srgb",Oi=7680,El=519,Xf=512,qf=513,Yf=514,Xu=515,Kf=516,$f=517,Jf=518,Qf=519,hc=35044,Rl="300 es",Yn=2e3,la=2001;class vs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cl=1234567;const Xs=Math.PI/180,ps=180/Math.PI;function bn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[s&255]+ke[s>>8&255]+ke[s>>16&255]+ke[s>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Te(s,t,e){return Math.max(t,Math.min(e,s))}function Bc(s,t){return(s%t+t)%t}function Zf(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function tp(s,t,e){return s!==t?(e-s)/(t-s):0}function qs(s,t,e){return(1-e)*s+e*t}function ep(s,t,e,n){return qs(s,t,1-Math.exp(-e*n))}function np(s,t=1){return t-Math.abs(Bc(s,t*2)-t)}function ip(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function sp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function rp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function ap(s,t){return s+Math.random()*(t-s)}function op(s){return s*(.5-Math.random())}function cp(s){s!==void 0&&(Cl=s);let t=Cl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lp(s){return s*Xs}function hp(s){return s*ps}function up(s){return(s&s-1)===0&&s!==0}function dp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function fp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function pp(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),m=a((n-t)/2);switch(i){case"XYX":s.set(o*h,c*u,c*f,o*l);break;case"YZY":s.set(c*f,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*f,o*h,o*l);break;case"XZX":s.set(o*h,c*m,c*d,o*l);break;case"YXY":s.set(c*d,o*h,c*m,o*l);break;case"ZYZ":s.set(c*m,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ae(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const zc={DEG2RAD:Xs,RAD2DEG:ps,generateUUID:bn,clamp:Te,euclideanModulo:Bc,mapLinear:Zf,inverseLerp:tp,lerp:qs,damp:ep,pingpong:np,smoothstep:ip,smootherstep:sp,randInt:rp,randFloat:ap,randFloatSpread:op,seededRandom:cp,degToRad:lp,radToDeg:hp,isPowerOfTwo:up,ceilPowerOfTwo:dp,floorPowerOfTwo:fp,setQuaternionFromProperEuler:pp,normalize:ae,denormalize:fn};class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,i,r,a,o,c,l){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],b=i[0],g=i[3],p=i[6],x=i[1],v=i[4],_=i[7],R=i[2],T=i[5],w=i[8];return r[0]=a*b+o*x+c*R,r[3]=a*g+o*v+c*T,r[6]=a*p+o*_+c*w,r[1]=l*b+h*x+u*R,r[4]=l*g+h*v+u*T,r[7]=l*p+h*_+u*w,r[2]=f*b+d*x+m*R,r[5]=f*g+d*v+m*T,r[8]=f*p+d*_+m*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,m=e*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/m;return t[0]=u*b,t[1]=(i*l-h*n)*b,t[2]=(o*n-i*a)*b,t[3]=f*b,t[4]=(h*e-i*c)*b,t[5]=(i*r-o*e)*b,t[6]=d*b,t[7]=(n*c-l*e)*b,t[8]=(a*e-n*r)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ra.makeScale(t,e)),this}rotate(t){return this.premultiply(Ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ra=new Ht;function qu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function nr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function mp(){const s=nr("canvas");return s.style.display="block",s}const Pl={};function Hs(s){s in Pl||(Pl[s]=!0,console.warn(s))}function gp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function bp(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _p(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jt={enabled:!0,workingColorSpace:Ve,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(s.r=Jn(s.r),s.g=Jn(s.g),s.b=Jn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===di?ga:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Jn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function as(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ll=[.64,.33,.3,.6,.15,.06],Il=[.2126,.7152,.0722],Dl=[.3127,.329],kl=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nl=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt.define({[Ve]:{primaries:Ll,whitePoint:Dl,transfer:ga,toXYZ:kl,fromXYZ:Nl,luminanceCoefficients:Il,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:Ll,whitePoint:Dl,transfer:le,toXYZ:kl,fromXYZ:Nl,luminanceCoefficients:Il,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}});let Bi;class xp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=nr("canvas")),Bi.width=t.width,Bi.height=t.height;const n=Bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=nr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Jn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vp=0;class Yu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=bn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ca(i[a].image)):r.push(Ca(i[a]))}else r=Ca(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ca(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?xp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mp=0;class Ae extends vs{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=fi,i=fi,r=Je,a=qn,o=rn,c=ti,l=Ae.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=bn(),this.name="",this.source=new Yu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ku)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ki:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ki:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=ku;Ae.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,i=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],b=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,_=(d+1)/2,R=(p+1)/2,T=(h+f)/4,w=(u+b)/4,P=(m+g)/4;return v>_&&v>R?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=T/n,r=w/n):_>R?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=T/i,r=P/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=w/r,i=P/r),this.set(n,i,r,e),this}let x=Math.sqrt((g-m)*(g-m)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-b)/x,this.z=(f-h)/x,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yp extends vs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ae(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Yu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends yp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ku extends Ae{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sp extends Ae{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qt{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[a+0],d=r[a+1],m=r[a+2],b=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=b;return}if(u!==b||c!==f||l!==d||h!==m){let g=1-o;const p=c*f+l*d+h*m+u*b,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const R=Math.sqrt(v),T=Math.atan2(R,p*x);g=Math.sin(g*T)/R,o=Math.sin(o*T)/R}const _=o*x;if(c=c*g+f*_,l=l*g+d*_,h=h*g+m*_,u=u*g+b*_,g===1-o){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+h*u+c*d-l*f,t[e+1]=c*m+h*f+l*u-o*d,t[e+2]=l*m+h*d+o*f-c*u,t[e+3]=h*m-o*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),f=c(n/2),d=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ul.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ul.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pa.copy(this).projectOnVector(t),this.sub(Pa)}reflect(t){return this.sub(Pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pa=new L,Ul=new Qt;class Cn{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,on):on.fromBufferAttribute(r,a),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox)),fr.applyMatrix4(t.matrixWorld),this.union(fr)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Es),pr.subVectors(this.max,Es),zi.subVectors(t.a,Es),Gi.subVectors(t.b,Es),Hi.subVectors(t.c,Es),ii.subVectors(Gi,zi),si.subVectors(Hi,Gi),vi.subVectors(zi,Hi);let e=[0,-ii.z,ii.y,0,-si.z,si.y,0,-vi.z,vi.y,ii.z,0,-ii.x,si.z,0,-si.x,vi.z,0,-vi.x,-ii.y,ii.x,0,-si.y,si.x,0,-vi.y,vi.x,0];return!La(e,zi,Gi,Hi,pr)||(e=[1,0,0,0,1,0,0,0,1],!La(e,zi,Gi,Hi,pr))?!1:(mr.crossVectors(ii,si),e=[mr.x,mr.y,mr.z],La(e,zi,Gi,Hi,pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Nn=[new L,new L,new L,new L,new L,new L,new L,new L],on=new L,fr=new Cn,zi=new L,Gi=new L,Hi=new L,ii=new L,si=new L,vi=new L,Es=new L,pr=new L,mr=new L,Mi=new L;function La(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Mi.fromArray(s,r);const o=i.x*Math.abs(Mi.x)+i.y*Math.abs(Mi.y)+i.z*Math.abs(Mi.z),c=t.dot(Mi),l=e.dot(Mi),h=n.dot(Mi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const wp=new Cn,Rs=new L,Ia=new L;class Pn{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):wp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rs.subVectors(t,this.center);const e=Rs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Rs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rs.copy(t.center).add(Ia)),this.expandByPoint(Rs.copy(t.center).sub(Ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new L,Da=new L,gr=new L,ri=new L,ka=new L,br=new L,Na=new L;class ba{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Da.copy(t).add(e).multiplyScalar(.5),gr.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(Da);const r=t.distanceTo(e)*.5,a=-this.direction.dot(gr),o=ri.dot(this.direction),c=-ri.dot(gr),l=ri.lengthSq(),h=Math.abs(1-a*a);let u,f,d,m;if(h>0)if(u=a*c-o,f=a*o-c,m=r*h,u>=0)if(f>=-m)if(f<=m){const b=1/h;u*=b,f*=b,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Da).addScaledVector(gr,f),d}intersectSphere(t,e){Un.subVectors(t.center,this.origin);const n=Un.dot(this.direction),i=Un.dot(Un)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,i,r){ka.subVectors(e,t),br.subVectors(n,t),Na.crossVectors(ka,br);let a=this.direction.dot(Na),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ri.subVectors(this.origin,t);const c=o*this.direction.dot(br.crossVectors(ri,br));if(c<0)return null;const l=o*this.direction.dot(ka.cross(ri));if(l<0||c+l>a)return null;const h=-o*ri.dot(Na);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(t,e,n,i,r,a,o,c,l,h,u,f,d,m,b,g){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,u,f,d,m,b,g)}set(t,e,n,i,r,a,o,c,l,h,u,f,d,m,b,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Vi.setFromMatrixColumn(t,0).length(),r=1/Vi.setFromMatrixColumn(t,1).length(),a=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*u,m=o*h,b=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+m*l,e[5]=f-b*l,e[9]=-o*c,e[2]=b-f*l,e[6]=m+d*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,m=l*h,b=l*u;e[0]=f+b*o,e[4]=m*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-m,e[6]=b+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,m=l*h,b=l*u;e[0]=f-b*o,e[4]=-a*u,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*h,e[9]=b-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,d=a*u,m=o*h,b=o*u;e[0]=c*h,e[4]=m*l-d,e[8]=f*l+b,e[1]=c*u,e[5]=b*l+f,e[9]=d*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,d=a*l,m=o*c,b=o*l;e[0]=c*h,e[4]=b-f*u,e[8]=m*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*u+m,e[10]=f-b*u}else if(t.order==="XZY"){const f=a*c,d=a*l,m=o*c,b=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+b,e[5]=a*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=o*h,e[10]=b*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tp,t,Ap)}lookAt(t,e,n){const i=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),ai.crossVectors(n,qe),ai.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),ai.crossVectors(n,qe)),ai.normalize(),_r.crossVectors(qe,ai),i[0]=ai.x,i[4]=_r.x,i[8]=qe.x,i[1]=ai.y,i[5]=_r.y,i[9]=qe.y,i[2]=ai.z,i[6]=_r.z,i[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],b=n[6],g=n[10],p=n[14],x=n[3],v=n[7],_=n[11],R=n[15],T=i[0],w=i[4],P=i[8],M=i[12],y=i[1],S=i[5],C=i[9],I=i[13],N=i[2],U=i[6],H=i[10],W=i[14],B=i[3],et=i[7],nt=i[11],ft=i[15];return r[0]=a*T+o*y+c*N+l*B,r[4]=a*w+o*S+c*U+l*et,r[8]=a*P+o*C+c*H+l*nt,r[12]=a*M+o*I+c*W+l*ft,r[1]=h*T+u*y+f*N+d*B,r[5]=h*w+u*S+f*U+d*et,r[9]=h*P+u*C+f*H+d*nt,r[13]=h*M+u*I+f*W+d*ft,r[2]=m*T+b*y+g*N+p*B,r[6]=m*w+b*S+g*U+p*et,r[10]=m*P+b*C+g*H+p*nt,r[14]=m*M+b*I+g*W+p*ft,r[3]=x*T+v*y+_*N+R*B,r[7]=x*w+v*S+_*U+R*et,r[11]=x*P+v*C+_*H+R*nt,r[15]=x*M+v*I+_*W+R*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],b=t[7],g=t[11],p=t[15];return m*(+r*c*u-i*l*u-r*o*f+n*l*f+i*o*d-n*c*d)+b*(+e*c*d-e*l*f+r*a*f-i*a*d+i*l*h-r*c*h)+g*(+e*l*u-e*o*d-r*a*u+n*a*d+r*o*h-n*l*h)+p*(-i*o*h-e*c*u+e*o*f+i*a*u-n*a*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],b=t[13],g=t[14],p=t[15],x=u*g*l-b*f*l+b*c*d-o*g*d-u*c*p+o*f*p,v=m*f*l-h*g*l-m*c*d+a*g*d+h*c*p-a*f*p,_=h*b*l-m*u*l+m*o*d-a*b*d-h*o*p+a*u*p,R=m*u*c-h*b*c-m*o*f+a*b*f+h*o*g-a*u*g,T=e*x+n*v+i*_+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=x*w,t[1]=(b*f*r-u*g*r-b*i*d+n*g*d+u*i*p-n*f*p)*w,t[2]=(o*g*r-b*c*r+b*i*l-n*g*l-o*i*p+n*c*p)*w,t[3]=(u*c*r-o*f*r-u*i*l+n*f*l+o*i*d-n*c*d)*w,t[4]=v*w,t[5]=(h*g*r-m*f*r+m*i*d-e*g*d-h*i*p+e*f*p)*w,t[6]=(m*c*r-a*g*r-m*i*l+e*g*l+a*i*p-e*c*p)*w,t[7]=(a*f*r-h*c*r+h*i*l-e*f*l-a*i*d+e*c*d)*w,t[8]=_*w,t[9]=(m*u*r-h*b*r-m*n*d+e*b*d+h*n*p-e*u*p)*w,t[10]=(a*b*r-m*o*r+m*n*l-e*b*l-a*n*p+e*o*p)*w,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*d-e*o*d)*w,t[12]=R*w,t[13]=(h*b*i-m*u*i+m*n*f-e*b*f-h*n*g+e*u*g)*w,t[14]=(m*o*i-a*b*i-m*n*c+e*b*c+a*n*g-e*o*g)*w,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*f+e*o*f)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,m=r*u,b=a*h,g=a*u,p=o*u,x=c*l,v=c*h,_=c*u,R=n.x,T=n.y,w=n.z;return i[0]=(1-(b+p))*R,i[1]=(d+_)*R,i[2]=(m-v)*R,i[3]=0,i[4]=(d-_)*T,i[5]=(1-(f+p))*T,i[6]=(g+x)*T,i[7]=0,i[8]=(m+v)*w,i[9]=(g-x)*w,i[10]=(1-(f+b))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Vi.set(i[0],i[1],i[2]).length();const a=Vi.set(i[4],i[5],i[6]).length(),o=Vi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],cn.copy(this);const l=1/r,h=1/a,u=1/o;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,e.setFromRotationMatrix(cn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Yn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,m;if(o===Yn)d=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===la)d=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Yn){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(a-r),f=(e+t)*l,d=(n+i)*h;let m,b;if(o===Yn)m=(a+r)*u,b=-2*u;else if(o===la)m=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=b,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Vi=new L,cn=new Nt,Tp=new L(0,0,0),Ap=new L(1,1,1),ai=new L,_r=new L,qe=new L,Fl=new Nt,Ol=new Qt;class xn{constructor(t=0,e=0,n=0,i=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ol.setFromEuler(this),this.setFromQuaternion(Ol,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class $u{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ep=0;const Bl=new L,Wi=new Qt,Fn=new Nt,xr=new L,Cs=new L,Rp=new L,Cp=new Qt,zl=new L(1,0,0),Gl=new L(0,1,0),Hl=new L(0,0,1),Vl={type:"added"},Pp={type:"removed"},ji={type:"childadded",child:null},Ua={type:"childremoved",child:null};class me extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new L,e=new xn,n=new Qt,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Nt},normalMatrix:{value:new Ht}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $u,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(zl,t)}rotateY(t){return this.rotateOnAxis(Gl,t)}rotateZ(t){return this.rotateOnAxis(Hl,t)}translateOnAxis(t,e){return Bl.copy(t).applyQuaternion(this.quaternion),this.position.add(Bl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zl,t)}translateY(t){return this.translateOnAxis(Gl,t)}translateZ(t){return this.translateOnAxis(Hl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xr.copy(t):xr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Cs,xr,this.up):Fn.lookAt(xr,Cs,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),Wi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vl),ji.child=t,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pp),Ua.child=t,this.dispatchEvent(Ua),Ua.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vl),ji.child=t,this.dispatchEvent(ji),ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,t,Rp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Cp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}me.DEFAULT_UP=new L(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new L,On=new L,Fa=new L,Bn=new L,Xi=new L,qi=new L,Wl=new L,Oa=new L,Ba=new L,za=new L,Ga=new ne,Ha=new ne,Va=new ne;class pn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ln.subVectors(t,e),i.cross(ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ln.subVectors(i,e),On.subVectors(n,e),Fa.subVectors(t,e);const a=ln.dot(ln),o=ln.dot(On),c=ln.dot(Fa),l=On.dot(On),h=On.dot(Fa),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-o*h)*f,m=(a*h-o*c)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bn.x),c.addScaledVector(a,Bn.y),c.addScaledVector(o,Bn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return Ga.setScalar(0),Ha.setScalar(0),Va.setScalar(0),Ga.fromBufferAttribute(t,e),Ha.fromBufferAttribute(t,n),Va.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Ga,r.x),a.addScaledVector(Ha,r.y),a.addScaledVector(Va,r.z),a}static isFrontFacing(t,e,n,i){return ln.subVectors(n,e),On.subVectors(t,e),ln.cross(On).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),On.subVectors(this.a,this.b),ln.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return pn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Xi.subVectors(i,n),qi.subVectors(r,n),Oa.subVectors(t,n);const c=Xi.dot(Oa),l=qi.dot(Oa);if(c<=0&&l<=0)return e.copy(n);Ba.subVectors(t,i);const h=Xi.dot(Ba),u=qi.dot(Ba);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Xi,a);za.subVectors(t,r);const d=Xi.dot(za),m=qi.dot(za);if(m>=0&&d<=m)return e.copy(r);const b=d*l-c*m;if(b<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(qi,o);const g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Wl.subVectors(r,i),o=(u-h)/(u-h+(d-m)),e.copy(i).addScaledVector(Wl,o);const p=1/(g+b+f);return a=b*p,o=f*p,e.copy(n).addScaledVector(Xi,a).addScaledVector(qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},vr={h:0,s:0,l:0};function Wa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=Bc(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Wa(a,r,t+1/3),this.g=Wa(a,r,t),this.b=Wa(a,r,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const n=Ju[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return Jt.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Te(Ne.r*255,0,255))*65536+Math.round(Te(Ne.g*255,0,255))*256+Math.round(Te(Ne.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,i=Ne.g,r=Ne.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=ye){Jt.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,i=Ne.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(vr);const n=qs(oi.h,vr.h,e),i=qs(oi.s,vr.s,e),r=qs(oi.l,vr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new dt;dt.NAMES=Ju;let Lp=0;class _n extends vs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=bn(),this.name="",this.blending=Di,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ao,this.blendDst=Eo,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=El,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ao&&(n.blendSrc=this.blendSrc),this.blendDst!==Eo&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==El&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ie extends _n{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new L,Mr=new gt;class ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hc,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mr.fromBufferAttribute(this,e),Mr.applyMatrix3(t),this.setXY(e,Mr.x,Mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hc&&(t.usage=this.usage),t}}class Qu extends ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zu extends ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ip=0;const tn=new Nt,ja=new me,Yi=new L,Ye=new Cn,Ps=new Cn,Ce=new L;class _e extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qu(t)?Zu:Qu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return ja.lookAt(t),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(Ye.min,Ps.min),Ye.expandByPoint(Ce),Ce.addVectors(Ye.max,Ps.max),Ye.expandByPoint(Ce)):(Ye.expandByPoint(Ps.min),Ye.expandByPoint(Ps.max))}Ye.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ce.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ce));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ce.fromBufferAttribute(o,l),c&&(Yi.fromBufferAttribute(t,l),Ce.add(Yi)),i=Math.max(i,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new L,c[P]=new L;const l=new L,h=new L,u=new L,f=new gt,d=new gt,m=new gt,b=new L,g=new L;function p(P,M,y){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,M),m.fromBufferAttribute(r,y),h.sub(l),u.sub(l),d.sub(f),m.sub(f);const S=1/(d.x*m.y-m.x*d.y);isFinite(S)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(S),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(S),o[P].add(b),o[M].add(b),o[y].add(b),c[P].add(g),c[M].add(g),c[y].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,M=x.length;P<M;++P){const y=x[P],S=y.start,C=y.count;for(let I=S,N=S+C;I<N;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const v=new L,_=new L,R=new L,T=new L;function w(P){R.fromBufferAttribute(i,P),T.copy(R);const M=o[P];v.copy(M),v.sub(R.multiplyScalar(R.dot(M))).normalize(),_.crossVectors(T,M);const S=_.dot(c[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,S)}for(let P=0,M=x.length;P<M;++P){const y=x[P],S=y.start,C=y.count;for(let I=S,N=S+C;I<N;I+=3)w(t.getX(I+0)),w(t.getX(I+1)),w(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),b=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,b),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let d=0,m=0;for(let b=0,g=c.length;b<g;b++){o.isInterleavedBufferAttribute?d=c[b]*o.data.stride+o.offset:d=c[b]*h;for(let p=0;p<h;p++)f[m++]=l[d++]}return new ue(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jl=new Nt,yi=new ba,yr=new Pn,Xl=new L,Sr=new L,wr=new L,Tr=new L,Xa=new L,Ar=new L,ql=new L,Er=new L;class re extends me{constructor(t=new _e,e=new Ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Ar.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Xa.fromBufferAttribute(u,t),a?Ar.addScaledVector(Xa,h):Ar.addScaledVector(Xa.sub(e),h))}e.add(Ar)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(r),yi.copy(t.ray).recast(t.near),!(yr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(yr,Xl)===null||yi.origin.distanceToSquared(Xl)>(t.far-t.near)**2))&&(jl.copy(r).invert(),yi.copy(t.ray).applyMatrix4(jl),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=f.length;m<b;m++){const g=f[m],p=a[g.materialIndex],x=Math.max(g.start,d.start),v=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let _=x,R=v;_<R;_+=3){const T=o.getX(_),w=o.getX(_+1),P=o.getX(_+2);i=Rr(this,p,t,n,l,h,u,T,w,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let g=m,p=b;g<p;g+=3){const x=o.getX(g),v=o.getX(g+1),_=o.getX(g+2);i=Rr(this,a,t,n,l,h,u,x,v,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,b=f.length;m<b;m++){const g=f[m],p=a[g.materialIndex],x=Math.max(g.start,d.start),v=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let _=x,R=v;_<R;_+=3){const T=_,w=_+1,P=_+2;i=Rr(this,p,t,n,l,h,u,T,w,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),b=Math.min(c.count,d.start+d.count);for(let g=m,p=b;g<p;g+=3){const x=g,v=g+1,_=g+2;i=Rr(this,a,t,n,l,h,u,x,v,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Dp(s,t,e,n,i,r,a,o){let c;if(t.side===Ge?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Zn,o),c===null)return null;Er.copy(o),Er.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Er);return l<e.near||l>e.far?null:{distance:l,point:Er.clone(),object:s}}function Rr(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,Sr),s.getVertexPosition(c,wr),s.getVertexPosition(l,Tr);const h=Dp(s,t,e,n,Sr,wr,Tr,ql);if(h){const u=new L;pn.getBarycoord(ql,Sr,wr,Tr,u),i&&(h.uv=pn.getInterpolatedAttribute(i,o,c,l,u,new gt)),r&&(h.uv1=pn.getInterpolatedAttribute(r,o,c,l,u,new gt)),a&&(h.normal=pn.getInterpolatedAttribute(a,o,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new L,materialIndex:0};pn.getNormal(Sr,wr,Tr,f.normal),h.face=f,h.barycoord=u}return h}class Qe extends _e{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(u,2));function m(b,g,p,x,v,_,R,T,w,P,M){const y=_/w,S=R/P,C=_/2,I=R/2,N=T/2,U=w+1,H=P+1;let W=0,B=0;const et=new L;for(let nt=0;nt<H;nt++){const ft=nt*S-I;for(let Rt=0;Rt<U;Rt++){const Ut=Rt*y-C;et[b]=Ut*x,et[g]=ft*v,et[p]=N,l.push(et.x,et.y,et.z),et[b]=0,et[g]=0,et[p]=T>0?1:-1,h.push(et.x,et.y,et.z),u.push(Rt/w),u.push(1-nt/P),W+=1}}for(let nt=0;nt<P;nt++)for(let ft=0;ft<w;ft++){const Rt=f+ft+U*nt,Ut=f+ft+U*(nt+1),q=f+(ft+1)+U*(nt+1),st=f+(ft+1)+U*nt;c.push(Rt,Ut,st),c.push(Ut,q,st),B+=6}o.addGroup(d,B,M),d+=B,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ms(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Oe(s){const t={};for(let e=0;e<s.length;e++){const n=ms(s[e]);for(const i in n)t[i]=n[i]}return t}function kp(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function td(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Np={clone:ms,merge:Oe};var Up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends _n{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Up,this.fragmentShader=Fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=kp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ed extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new L,Yl=new gt,Kl=new gt;class De extends ed{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,Yl,Kl),e.subVectors(Kl,Yl)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ki=-90,$i=1;class Op extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new De(Ki,$i,t,e);i.layers=this.layers,this.add(i);const r=new De(Ki,$i,t,e);r.layers=this.layers,this.add(r);const a=new De(Ki,$i,t,e);a.layers=this.layers,this.add(a);const o=new De(Ki,$i,t,e);o.layers=this.layers,this.add(o);const c=new De(Ki,$i,t,e);c.layers=this.layers,this.add(c);const l=new De(Ki,$i,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===la)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class nd extends Ae{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:hs,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Bp extends Ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new nd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Qe(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:bi});r.uniforms.tEquirect.value=e;const a=new re(i,r),o=e.minFilter;return e.minFilter===qn&&(e.minFilter=Je),new Op(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const qa=new L,zp=new L,Gp=new Ht;class Ri{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=qa.subVectors(n,e).cross(zp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(qa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gp.getNormalMatrix(t),i=this.coplanarPoint(qa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new Pn,Cr=new L;class Gc{constructor(t=new Ri,e=new Ri,n=new Ri,i=new Ri,r=new Ri,a=new Ri){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],m=i[9],b=i[10],g=i[11],p=i[12],x=i[13],v=i[14],_=i[15];if(n[0].setComponents(c-r,f-l,g-d,_-p).normalize(),n[1].setComponents(c+r,f+l,g+d,_+p).normalize(),n[2].setComponents(c+a,f+h,g+m,_+x).normalize(),n[3].setComponents(c-a,f-h,g-m,_-x).normalize(),n[4].setComponents(c-o,f-u,g-b,_-v).normalize(),e===Yn)n[5].setComponents(c+o,f+u,g+b,_+v).normalize();else if(e===la)n[5].setComponents(o,u,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Cr.x=i.normal.x>0?t.max.x:t.min.x,Cr.y=i.normal.y>0?t.max.y:t.min.y,Cr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function id(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Hp(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],b=u[d];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++f,u[f]=b)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const b=u[d];s.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class An extends _e{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,f=e/c,d=[],m=[],b=[],g=[];for(let p=0;p<h;p++){const x=p*f-a;for(let v=0;v<l;v++){const _=v*u-r;m.push(_,-x,0),b.push(0,0,1),g.push(v/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const v=x+l*p,_=x+l*(p+1),R=x+1+l*(p+1),T=x+1+l*p;d.push(v,_,T),d.push(_,R,T)}this.setIndex(d),this.setAttribute("position",new he(m,3)),this.setAttribute("normal",new he(b,3)),this.setAttribute("uv",new he(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.width,t.height,t.widthSegments,t.heightSegments)}}var Vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wp=`#ifdef USE_ALPHAHASH
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
#endif`,jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kp=`#ifdef USE_AOMAP
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
#endif`,$p=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jp=`#ifdef USE_BATCHING
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
#endif`,Qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,em=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nm=`#ifdef USE_IRIDESCENCE
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
#endif`,im=`#ifdef USE_BUMPMAP
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
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dm=`#define PI 3.141592653589793
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
} // validated`,fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pm=`vec3 transformedNormal = objectNormal;
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
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xm="gl_FragColor = linearToOutputTexel( gl_FragColor );",vm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sm=`#ifdef USE_ENVMAP
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
#endif`,wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pm=`#ifdef USE_GRADIENTMAP
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
}`,Lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,km=`uniform bool receiveShadow;
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
#endif`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zm=`PhysicalMaterial material;
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
#endif`,Gm=`struct PhysicalMaterial {
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
}`,Hm=`
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
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qm=`#if defined( USE_POINTS_UV )
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
#endif`,Zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`#ifdef USE_MORPHTARGETS
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
#endif`,r0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u0=`#ifdef USE_NORMALMAP
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
#endif`,d0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,E0=`float getShadowMask() {
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
}`,R0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C0=`#ifdef USE_SKINNING
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
#endif`,P0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,I0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U0=`#ifdef USE_TRANSMISSION
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
#endif`,F0=`#ifdef USE_TRANSMISSION
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
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V0=`uniform sampler2D t2D;
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`#include <common>
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
}`,K0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$0=`#define DISTANCE
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
}`,J0=`#define DISTANCE
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`uniform float scale;
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
}`,eg=`uniform vec3 diffuse;
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
}`,ng=`#include <common>
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#define LAMBERT
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
}`,rg=`#define LAMBERT
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
}`,ag=`#define MATCAP
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
}`,og=`#define MATCAP
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
}`,cg=`#define NORMAL
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
}`,lg=`#define NORMAL
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
}`,hg=`#define PHONG
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
}`,ug=`#define PHONG
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
}`,dg=`#define STANDARD
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
}`,fg=`#define STANDARD
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
}`,pg=`#define TOON
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
}`,mg=`#define TOON
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
}`,gg=`uniform float size;
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
}`,bg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,xg=`uniform vec3 color;
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
}`,vg=`uniform float rotation;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Vp,alphahash_pars_fragment:Wp,alphamap_fragment:jp,alphamap_pars_fragment:Xp,alphatest_fragment:qp,alphatest_pars_fragment:Yp,aomap_fragment:Kp,aomap_pars_fragment:$p,batching_pars_vertex:Jp,batching_vertex:Qp,begin_vertex:Zp,beginnormal_vertex:tm,bsdfs:em,iridescence_fragment:nm,bumpmap_pars_fragment:im,clipping_planes_fragment:sm,clipping_planes_pars_fragment:rm,clipping_planes_pars_vertex:am,clipping_planes_vertex:om,color_fragment:cm,color_pars_fragment:lm,color_pars_vertex:hm,color_vertex:um,common:dm,cube_uv_reflection_fragment:fm,defaultnormal_vertex:pm,displacementmap_pars_vertex:mm,displacementmap_vertex:gm,emissivemap_fragment:bm,emissivemap_pars_fragment:_m,colorspace_fragment:xm,colorspace_pars_fragment:vm,envmap_fragment:Mm,envmap_common_pars_fragment:ym,envmap_pars_fragment:Sm,envmap_pars_vertex:wm,envmap_physical_pars_fragment:Nm,envmap_vertex:Tm,fog_vertex:Am,fog_pars_vertex:Em,fog_fragment:Rm,fog_pars_fragment:Cm,gradientmap_pars_fragment:Pm,lightmap_pars_fragment:Lm,lights_lambert_fragment:Im,lights_lambert_pars_fragment:Dm,lights_pars_begin:km,lights_toon_fragment:Um,lights_toon_pars_fragment:Fm,lights_phong_fragment:Om,lights_phong_pars_fragment:Bm,lights_physical_fragment:zm,lights_physical_pars_fragment:Gm,lights_fragment_begin:Hm,lights_fragment_maps:Vm,lights_fragment_end:Wm,logdepthbuf_fragment:jm,logdepthbuf_pars_fragment:Xm,logdepthbuf_pars_vertex:qm,logdepthbuf_vertex:Ym,map_fragment:Km,map_pars_fragment:$m,map_particle_fragment:Jm,map_particle_pars_fragment:Qm,metalnessmap_fragment:Zm,metalnessmap_pars_fragment:t0,morphinstance_vertex:e0,morphcolor_vertex:n0,morphnormal_vertex:i0,morphtarget_pars_vertex:s0,morphtarget_vertex:r0,normal_fragment_begin:a0,normal_fragment_maps:o0,normal_pars_fragment:c0,normal_pars_vertex:l0,normal_vertex:h0,normalmap_pars_fragment:u0,clearcoat_normal_fragment_begin:d0,clearcoat_normal_fragment_maps:f0,clearcoat_pars_fragment:p0,iridescence_pars_fragment:m0,opaque_fragment:g0,packing:b0,premultiplied_alpha_fragment:_0,project_vertex:x0,dithering_fragment:v0,dithering_pars_fragment:M0,roughnessmap_fragment:y0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:w0,shadowmap_pars_vertex:T0,shadowmap_vertex:A0,shadowmask_pars_fragment:E0,skinbase_vertex:R0,skinning_pars_vertex:C0,skinning_vertex:P0,skinnormal_vertex:L0,specularmap_fragment:I0,specularmap_pars_fragment:D0,tonemapping_fragment:k0,tonemapping_pars_fragment:N0,transmission_fragment:U0,transmission_pars_fragment:F0,uv_pars_fragment:O0,uv_pars_vertex:B0,uv_vertex:z0,worldpos_vertex:G0,background_vert:H0,background_frag:V0,backgroundCube_vert:W0,backgroundCube_frag:j0,cube_vert:X0,cube_frag:q0,depth_vert:Y0,depth_frag:K0,distanceRGBA_vert:$0,distanceRGBA_frag:J0,equirect_vert:Q0,equirect_frag:Z0,linedashed_vert:tg,linedashed_frag:eg,meshbasic_vert:ng,meshbasic_frag:ig,meshlambert_vert:sg,meshlambert_frag:rg,meshmatcap_vert:ag,meshmatcap_frag:og,meshnormal_vert:cg,meshnormal_frag:lg,meshphong_vert:hg,meshphong_frag:ug,meshphysical_vert:dg,meshphysical_frag:fg,meshtoon_vert:pg,meshtoon_frag:mg,points_vert:gg,points_frag:bg,shadow_vert:_g,shadow_frag:xg,sprite_vert:vg,sprite_frag:Mg},ht={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},wn={basic:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new dt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Oe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Oe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new dt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Oe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Oe([ht.points,ht.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Oe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Oe([ht.common,ht.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Oe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Oe([ht.sprite,ht.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Oe([ht.common,ht.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Oe([ht.lights,ht.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};wn.physical={uniforms:Oe([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Pr={r:0,b:0,g:0},wi=new xn,yg=new Nt;function Sg(s,t,e,n,i,r,a){const o=new dt(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function m(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function b(x){let v=!1;const _=m(x);_===null?p(o,c):_&&_.isColor&&(p(_,1),v=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(x,v){const _=m(v);_&&(_.isCubeTexture||_.mapping===ma)?(h===void 0&&(h=new re(new Qe(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:ms(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),wi.copy(v.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yg.makeRotationFromEuler(wi)),h.material.toneMapped=Jt.getTransfer(_.colorSpace)!==le,(u!==_||f!==_.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new re(new An(2,2),new Rn({name:"BackgroundMaterial",uniforms:ms(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(_.colorSpace)!==le,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,d=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,v){x.getRGB(Pr,td(s)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:b,addToRenderList:g}}function wg(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(y,S,C,I,N){let U=!1;const H=u(I,C,S);r!==H&&(r=H,l(r.object)),U=d(y,I,C,N),U&&m(y,I,C,N),N!==null&&t.update(N,s.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,_(y,S,C,I),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,S,C){const I=C.wireframe===!0;let N=n[y.id];N===void 0&&(N={},n[y.id]=N);let U=N[S.id];U===void 0&&(U={},N[S.id]=U);let H=U[I];return H===void 0&&(H=f(c()),U[I]=H),H}function f(y){const S=[],C=[],I=[];for(let N=0;N<e;N++)S[N]=0,C[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:C,attributeDivisors:I,object:y,attributes:{},index:null}}function d(y,S,C,I){const N=r.attributes,U=S.attributes;let H=0;const W=C.getAttributes();for(const B in W)if(W[B].location>=0){const nt=N[B];let ft=U[B];if(ft===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor)),nt===void 0||nt.attribute!==ft||ft&&nt.data!==ft.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function m(y,S,C,I){const N={},U=S.attributes;let H=0;const W=C.getAttributes();for(const B in W)if(W[B].location>=0){let nt=U[B];nt===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor));const ft={};ft.attribute=nt,nt&&nt.data&&(ft.data=nt.data),N[B]=ft,H++}r.attributes=N,r.attributesNum=H,r.index=I}function b(){const y=r.newAttributes;for(let S=0,C=y.length;S<C;S++)y[S]=0}function g(y){p(y,0)}function p(y,S){const C=r.newAttributes,I=r.enabledAttributes,N=r.attributeDivisors;C[y]=1,I[y]===0&&(s.enableVertexAttribArray(y),I[y]=1),N[y]!==S&&(s.vertexAttribDivisor(y,S),N[y]=S)}function x(){const y=r.newAttributes,S=r.enabledAttributes;for(let C=0,I=S.length;C<I;C++)S[C]!==y[C]&&(s.disableVertexAttribArray(C),S[C]=0)}function v(y,S,C,I,N,U,H){H===!0?s.vertexAttribIPointer(y,S,C,N,U):s.vertexAttribPointer(y,S,C,I,N,U)}function _(y,S,C,I){b();const N=I.attributes,U=C.getAttributes(),H=S.defaultAttributeValues;for(const W in U){const B=U[W];if(B.location>=0){let et=N[W];if(et===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(et=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(et=y.instanceColor)),et!==void 0){const nt=et.normalized,ft=et.itemSize,Rt=t.get(et);if(Rt===void 0)continue;const Ut=Rt.buffer,q=Rt.type,st=Rt.bytesPerElement,at=q===s.INT||q===s.UNSIGNED_INT||et.gpuType===Lc;if(et.isInterleavedBufferAttribute){const tt=et.data,xt=tt.stride,Mt=et.offset;if(tt.isInstancedInterleavedBuffer){for(let kt=0;kt<B.locationSize;kt++)p(B.location+kt,tt.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let kt=0;kt<B.locationSize;kt++)g(B.location+kt);s.bindBuffer(s.ARRAY_BUFFER,Ut);for(let kt=0;kt<B.locationSize;kt++)v(B.location+kt,ft/B.locationSize,q,nt,xt*st,(Mt+ft/B.locationSize*kt)*st,at)}else{if(et.isInstancedBufferAttribute){for(let tt=0;tt<B.locationSize;tt++)p(B.location+tt,et.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let tt=0;tt<B.locationSize;tt++)g(B.location+tt);s.bindBuffer(s.ARRAY_BUFFER,Ut);for(let tt=0;tt<B.locationSize;tt++)v(B.location+tt,ft/B.locationSize,q,nt,ft*st,ft/B.locationSize*tt*st,at)}}else if(H!==void 0){const nt=H[W];if(nt!==void 0)switch(nt.length){case 2:s.vertexAttrib2fv(B.location,nt);break;case 3:s.vertexAttrib3fv(B.location,nt);break;case 4:s.vertexAttrib4fv(B.location,nt);break;default:s.vertexAttrib1fv(B.location,nt)}}}}x()}function R(){P();for(const y in n){const S=n[y];for(const C in S){const I=S[C];for(const N in I)h(I[N].object),delete I[N];delete S[C]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const S=n[y.id];for(const C in S){const I=S[C];for(const N in I)h(I[N].object),delete I[N];delete S[C]}delete n[y.id]}function w(y){for(const S in n){const C=n[S];if(C[y.id]===void 0)continue;const I=C[y.id];for(const N in I)h(I[N].object),delete I[N];delete C[y.id]}}function P(){M(),a=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:g,disableUnusedAttributes:x}}function Tg(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)a(l[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let m=0;for(let b=0;b<u;b++)m+=h[b]*f[b];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Ag(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==rn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const P=w===ar&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==ti&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==mn&&!P)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:R,maxSamples:T}}function Eg(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Ri,o=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{const x=r?0:n,v=x*4;let _=p.clippingState||null;c.value=_,_=h(m,f,v,d);for(let R=0;R!==v;++R)_[R]=e[R];p.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){const b=u!==null?u.length:0;let g=null;if(b!==0){if(g=c.value,m!==!0||g===null){const p=d+b*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,_=d;v!==b;++v,_+=4)a.copy(u[v]).applyMatrix4(x,o),a.normal.toArray(g,_),g[_+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}function Rg(s){let t=new WeakMap;function e(a,o){return o===No?a.mapping=hs:o===Uo&&(a.mapping=us),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===No||o===Uo)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Bp(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Hc extends ed{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const es=4,$l=[.125,.215,.35,.446,.526,.582],Li=20,Ya=new Hc,Jl=new dt;let Ka=null,$a=0,Ja=0,Qa=!1;const Ci=(1+Math.sqrt(5))/2,Ji=1/Ci,Ql=[new L(-Ci,Ji,0),new L(Ci,Ji,0),new L(-Ji,0,Ci),new L(Ji,0,Ci),new L(0,Ci,-Ji),new L(0,Ci,Ji),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Zl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ka=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ka,$a,Ja),this._renderer.xr.enabled=Qa,t.scissorTest=!1,Lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hs||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ka=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:ar,format:rn,colorSpace:Ve,depthBuffer:!1},i=th(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=th(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cg(r)),this._blurMaterial=Pg(r,t,e)}return i}_compileMaterial(t){const e=new re(this._lodPlanes[0],t);this._renderer.compile(e,Ya)}_sceneToCubeUV(t,e,n,i){const o=new De(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Jl),h.toneMapping=_i,h.autoClear=!1;const d=new Ie({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),m=new re(new Qe,d);let b=!1;const g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,b=!0):(d.color.copy(Jl),b=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const v=this._cubeSize;Lr(i,x*v,p>2?v:0,v,v),h.setRenderTarget(i),b&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===hs||t.mapping===us;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eh());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new re(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Lr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ya)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ql[(i-r-1)%Ql.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new re(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Li-1),b=r/m,g=isFinite(r)?1+Math.floor(h*b):Li;g>Li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Li}`);const p=[];let x=0;for(let w=0;w<Li;++w){const P=w/b,M=Math.exp(-P*P/2);p.push(M),w===0?x+=M:w<g&&(x+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=m,f.mipInt.value=v-n;const _=this._sizeLods[i],R=3*_*(i>v-es?i-v+es:0),T=4*(this._cubeSize-_);Lr(e,R,T,3*_,2*_),c.setRenderTarget(e),c.render(u,Ya)}}function Cg(s){const t=[],e=[],n=[];let i=s;const r=s-es+1+$l.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-es?c=$l[a-s+es-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,b=3,g=2,p=1,x=new Float32Array(b*m*d),v=new Float32Array(g*m*d),_=new Float32Array(p*m*d);for(let T=0;T<d;T++){const w=T%3*2/3-1,P=T>2?0:-1,M=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];x.set(M,b*m*T),v.set(f,g*m*T);const y=[T,T,T,T,T,T];_.set(y,p*m*T)}const R=new _e;R.setAttribute("position",new ue(x,b)),R.setAttribute("uv",new ue(v,g)),R.setAttribute("faceIndex",new ue(_,p)),t.push(R),i>es&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function th(s,t,e){const n=new Ui(s,t,e);return n.texture.mapping=ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Pg(s,t,e){const n=new Float32Array(Li),i=new L(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function eh(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function nh(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Vc(){return`

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
	`}function Lg(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===No||c===Uo,h=c===hs||c===us;if(l||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Zl(s)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return l&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Zl(s)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ig(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Hs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Dg(s,t,e,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);for(const m in f.morphAttributes){const b=f.morphAttributes[m];for(let g=0,p=b.length;g<p;g++)t.remove(b[g])}f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const m in f)t.update(f[m],s.ARRAY_BUFFER);const d=u.morphAttributes;for(const m in d){const b=d[m];for(let g=0,p=b.length;g<p;g++)t.update(b[g],s.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,m=u.attributes.position;let b=0;if(d!==null){const x=d.array;b=d.version;for(let v=0,_=x.length;v<_;v+=3){const R=x[v+0],T=x[v+1],w=x[v+2];f.push(R,T,T,w,w,R)}}else if(m!==void 0){const x=m.array;b=m.version;for(let v=0,_=x.length/3-1;v<_;v+=3){const R=v+0,T=v+1,w=v+2;f.push(R,T,T,w,w,R)}}else return;const g=new(qu(f)?Zu:Qu)(f,1);g.version=b;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function kg(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*a),e.update(d,n,1)}function l(f,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,f*a,m),e.update(d,n,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,n,1)}function u(f,d,m,b){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],b[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,b,0,m);let p=0;for(let x=0;x<m;x++)p+=d[x]*b[x];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ng(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ug(s,t,e){const n=new WeakMap,i=new ne;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let y=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let _=0;m===!0&&(_=1),b===!0&&(_=2),g===!0&&(_=3);let R=o.attributes.position.count*_,T=1;R>t.maxTextureSize&&(T=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const w=new Float32Array(R*T*4*u),P=new Ku(w,R,T,u);P.type=mn,P.needsUpdate=!0;const M=_*4;for(let S=0;S<u;S++){const C=p[S],I=x[S],N=v[S],U=R*T*4*S;for(let H=0;H<C.count;H++){const W=H*M;m===!0&&(i.fromBufferAttribute(C,H),w[U+W+0]=i.x,w[U+W+1]=i.y,w[U+W+2]=i.z,w[U+W+3]=0),b===!0&&(i.fromBufferAttribute(I,H),w[U+W+4]=i.x,w[U+W+5]=i.y,w[U+W+6]=i.z,w[U+W+7]=0),g===!0&&(i.fromBufferAttribute(N,H),w[U+W+8]=i.x,w[U+W+9]=i.y,w[U+W+10]=i.z,w[U+W+11]=N.itemSize===4?i.w:1)}}f={count:u,texture:P,size:new gt(R,T)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const b=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(s,"morphTargetBaseInfluence",b),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Fg(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class sd extends Ae{constructor(t,e,n,i,r,a,o,c,l,h=rs){if(h!==rs&&h!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===rs&&(n=Ni),n===void 0&&h===fs&&(n=ds),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:He,this.minFilter=c!==void 0?c:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const rd=new Ae,ih=new sd(1,1),ad=new Ku,od=new Sp,cd=new nd,sh=[],rh=[],ah=new Float32Array(16),oh=new Float32Array(9),ch=new Float32Array(4);function Ms(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=sh[i];if(r===void 0&&(r=new Float32Array(i),sh[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ee(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Re(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function _a(s,t){let e=rh[t];e===void 0&&(e=new Int32Array(t),rh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Og(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Bg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2fv(this.addr,t),Re(e,t)}}function zg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;s.uniform3fv(this.addr,t),Re(e,t)}}function Gg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4fv(this.addr,t),Re(e,t)}}function Hg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ee(e,n))return;ch.set(n),s.uniformMatrix2fv(this.addr,!1,ch),Re(e,n)}}function Vg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ee(e,n))return;oh.set(n),s.uniformMatrix3fv(this.addr,!1,oh),Re(e,n)}}function Wg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ee(e,n))return;ah.set(n),s.uniformMatrix4fv(this.addr,!1,ah),Re(e,n)}}function jg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Xg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2iv(this.addr,t),Re(e,t)}}function qg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3iv(this.addr,t),Re(e,t)}}function Yg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4iv(this.addr,t),Re(e,t)}}function Kg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function $g(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2uiv(this.addr,t),Re(e,t)}}function Jg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3uiv(this.addr,t),Re(e,t)}}function Qg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4uiv(this.addr,t),Re(e,t)}}function Zg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ih.compareFunction=Xu,r=ih):r=rd,e.setTexture2D(t||r,i)}function tb(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||od,i)}function eb(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||cd,i)}function nb(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ad,i)}function ib(s){switch(s){case 5126:return Og;case 35664:return Bg;case 35665:return zg;case 35666:return Gg;case 35674:return Hg;case 35675:return Vg;case 35676:return Wg;case 5124:case 35670:return jg;case 35667:case 35671:return Xg;case 35668:case 35672:return qg;case 35669:case 35673:return Yg;case 5125:return Kg;case 36294:return $g;case 36295:return Jg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return eb;case 36289:case 36303:case 36311:case 36292:return nb}}function sb(s,t){s.uniform1fv(this.addr,t)}function rb(s,t){const e=Ms(t,this.size,2);s.uniform2fv(this.addr,e)}function ab(s,t){const e=Ms(t,this.size,3);s.uniform3fv(this.addr,e)}function ob(s,t){const e=Ms(t,this.size,4);s.uniform4fv(this.addr,e)}function cb(s,t){const e=Ms(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function lb(s,t){const e=Ms(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function hb(s,t){const e=Ms(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ub(s,t){s.uniform1iv(this.addr,t)}function db(s,t){s.uniform2iv(this.addr,t)}function fb(s,t){s.uniform3iv(this.addr,t)}function pb(s,t){s.uniform4iv(this.addr,t)}function mb(s,t){s.uniform1uiv(this.addr,t)}function gb(s,t){s.uniform2uiv(this.addr,t)}function bb(s,t){s.uniform3uiv(this.addr,t)}function _b(s,t){s.uniform4uiv(this.addr,t)}function xb(s,t,e){const n=this.cache,i=t.length,r=_a(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||rd,r[a])}function vb(s,t,e){const n=this.cache,i=t.length,r=_a(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||od,r[a])}function Mb(s,t,e){const n=this.cache,i=t.length,r=_a(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||cd,r[a])}function yb(s,t,e){const n=this.cache,i=t.length,r=_a(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||ad,r[a])}function Sb(s){switch(s){case 5126:return sb;case 35664:return rb;case 35665:return ab;case 35666:return ob;case 35674:return cb;case 35675:return lb;case 35676:return hb;case 5124:case 35670:return ub;case 35667:case 35671:return db;case 35668:case 35672:return fb;case 35669:case 35673:return pb;case 5125:return mb;case 36294:return gb;case 36295:return bb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return xb;case 35679:case 36299:case 36307:return vb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return yb}}class wb{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ib(e.type)}}class Tb{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sb(e.type)}}class Ab{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Za=/(\w+)(\])?(\[|\.)?/g;function lh(s,t){s.seq.push(t),s.map[t.id]=t}function Eb(s,t,e){const n=s.name,i=n.length;for(Za.lastIndex=0;;){const r=Za.exec(n),a=Za.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){lh(e,l===void 0?new wb(o,s,t):new Tb(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Ab(o),lh(e,u)),e=u}}}class aa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Eb(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function hh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Rb=37297;let Cb=0;function Pb(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const uh=new Ht;function Lb(s){Jt._getMatrix(uh,Jt.workingColorSpace,s);const t=`mat3( ${uh.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(s)){case ga:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function dh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Pb(s.getShaderSource(t),a)}else return i}function Ib(s,t){const e=Lb(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Db(s,t){let e;switch(t){case Df:e="Linear";break;case kf:e="Reinhard";break;case Nf:e="Cineon";break;case Uf:e="ACESFilmic";break;case Of:e="AgX";break;case Bf:e="Neutral";break;case Ff:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ir=new L;function kb(){Jt.getLuminanceCoefficients(Ir);const s=Ir.x.toFixed(4),t=Ir.y.toFixed(4),e=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function Ub(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fb(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Vs(s){return s!==""}function fh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ph(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(s){return s.replace(Ob,zb)}const Bb=new Map;function zb(s,t){let e=Vt[t];if(e===void 0){const n=Bb.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return uc(e)}const Gb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mh(s){return s.replace(Gb,Hb)}function Hb(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function gh(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vb(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Iu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Du?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function Wb(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case hs:case us:t="ENVMAP_TYPE_CUBE";break;case ma:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jb(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case us:t="ENVMAP_MODE_REFRACTION";break}return t}function Xb(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Pc:t="ENVMAP_BLENDING_MULTIPLY";break;case Lf:t="ENVMAP_BLENDING_MIX";break;case If:t="ENVMAP_BLENDING_ADD";break}return t}function qb(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Yb(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Vb(e),l=Wb(e),h=jb(e),u=Xb(e),f=qb(e),d=Nb(e),m=Ub(r),b=i.createProgram();let g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Vs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Vs).join(`
`),p.length>0&&(p+=`
`)):(g=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),p=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?Vt.tonemapping_pars_fragment:"",e.toneMapping!==_i?Db("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Ib("linearToOutputTexel",e.outputColorSpace),kb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vs).join(`
`)),a=uc(a),a=fh(a,e),a=ph(a,e),o=uc(o),o=fh(o,e),o=ph(o,e),a=mh(a),o=mh(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+g+a,_=x+p+o,R=hh(i,i.VERTEX_SHADER,v),T=hh(i,i.FRAGMENT_SHADER,_);i.attachShader(b,R),i.attachShader(b,T),e.index0AttributeName!==void 0?i.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function w(S){if(s.debug.checkShaderErrors){const C=i.getProgramInfoLog(b).trim(),I=i.getShaderInfoLog(R).trim(),N=i.getShaderInfoLog(T).trim();let U=!0,H=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,b,R,T);else{const W=dh(i,R,"vertex"),B=dh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+C+`
`+W+`
`+B)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(I===""||N==="")&&(H=!1);H&&(S.diagnostics={runnable:U,programLog:C,vertexShader:{log:I,prefix:g},fragmentShader:{log:N,prefix:p}})}i.deleteShader(R),i.deleteShader(T),P=new aa(i,b),M=Fb(i,b)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(b,Rb)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cb++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=R,this.fragmentShader=T,this}let Kb=0;class $b{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Jb(t),e.set(t,n)),n}}class Jb{constructor(t){this.id=Kb++,this.code=t,this.usedTimes=0}}function Qb(s,t,e,n,i,r,a){const o=new $u,c=new $b,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,y,S,C,I){const N=C.fog,U=I.geometry,H=M.isMeshStandardMaterial?C.environment:null,W=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),B=W&&W.mapping===ma?W.image.height:null,et=m[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const nt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ft=nt!==void 0?nt.length:0;let Rt=0;U.morphAttributes.position!==void 0&&(Rt=1),U.morphAttributes.normal!==void 0&&(Rt=2),U.morphAttributes.color!==void 0&&(Rt=3);let Ut,q,st,at;if(et){const Bt=wn[et];Ut=Bt.vertexShader,q=Bt.fragmentShader}else Ut=M.vertexShader,q=M.fragmentShader,c.update(M),st=c.getVertexShaderID(M),at=c.getFragmentShaderID(M);const tt=s.getRenderTarget(),xt=s.state.buffers.depth.getReversed(),Mt=I.isInstancedMesh===!0,kt=I.isBatchedMesh===!0,Yt=!!M.map,jt=!!M.matcap,$t=!!W,F=!!M.aoMap,We=!!M.lightMap,zt=!!M.bumpMap,Kt=!!M.normalMap,Lt=!!M.displacementMap,ce=!!M.emissiveMap,Ct=!!M.metalnessMap,D=!!M.roughnessMap,A=M.anisotropy>0,V=M.clearcoat>0,Q=M.dispersion>0,Z=M.iridescence>0,J=M.sheen>0,St=M.transmission>0,lt=A&&!!M.anisotropyMap,bt=V&&!!M.clearcoatMap,yt=V&&!!M.clearcoatNormalMap,it=V&&!!M.clearcoatRoughnessMap,_t=Z&&!!M.iridescenceMap,Pt=Z&&!!M.iridescenceThicknessMap,Dt=J&&!!M.sheenColorMap,vt=J&&!!M.sheenRoughnessMap,Xt=!!M.specularMap,Ot=!!M.specularColorMap,K=!!M.specularIntensityMap,k=St&&!!M.transmissionMap,Y=St&&!!M.thicknessMap,G=!!M.gradientMap,$=!!M.alphaMap,rt=M.alphaTest>0,ct=!!M.alphaHash,It=!!M.extensions;let te=_i;M.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(te=s.toneMapping);const be={shaderID:et,shaderType:M.type,shaderName:M.name,vertexShader:Ut,fragmentShader:q,defines:M.defines,customVertexShaderID:st,customFragmentShaderID:at,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:kt,batchingColor:kt&&I._colorsTexture!==null,instancing:Mt,instancingColor:Mt&&I.instanceColor!==null,instancingMorph:Mt&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:tt===null?s.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Ve,alphaToCoverage:!!M.alphaToCoverage,map:Yt,matcap:jt,envMap:$t,envMapMode:$t&&W.mapping,envMapCubeUVHeight:B,aoMap:F,lightMap:We,bumpMap:zt,normalMap:Kt,displacementMap:f&&Lt,emissiveMap:ce,normalMapObjectSpace:Kt&&M.normalMapType===jf,normalMapTangentSpace:Kt&&M.normalMapType===Oc,metalnessMap:Ct,roughnessMap:D,anisotropy:A,anisotropyMap:lt,clearcoat:V,clearcoatMap:bt,clearcoatNormalMap:yt,clearcoatRoughnessMap:it,dispersion:Q,iridescence:Z,iridescenceMap:_t,iridescenceThicknessMap:Pt,sheen:J,sheenColorMap:Dt,sheenRoughnessMap:vt,specularMap:Xt,specularColorMap:Ot,specularIntensityMap:K,transmission:St,transmissionMap:k,thicknessMap:Y,gradientMap:G,opaque:M.transparent===!1&&M.blending===Di&&M.alphaToCoverage===!1,alphaMap:$,alphaTest:rt,alphaHash:ct,combine:M.combine,mapUv:Yt&&b(M.map.channel),aoMapUv:F&&b(M.aoMap.channel),lightMapUv:We&&b(M.lightMap.channel),bumpMapUv:zt&&b(M.bumpMap.channel),normalMapUv:Kt&&b(M.normalMap.channel),displacementMapUv:Lt&&b(M.displacementMap.channel),emissiveMapUv:ce&&b(M.emissiveMap.channel),metalnessMapUv:Ct&&b(M.metalnessMap.channel),roughnessMapUv:D&&b(M.roughnessMap.channel),anisotropyMapUv:lt&&b(M.anisotropyMap.channel),clearcoatMapUv:bt&&b(M.clearcoatMap.channel),clearcoatNormalMapUv:yt&&b(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&b(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&b(M.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&b(M.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&b(M.sheenColorMap.channel),sheenRoughnessMapUv:vt&&b(M.sheenRoughnessMap.channel),specularMapUv:Xt&&b(M.specularMap.channel),specularColorMapUv:Ot&&b(M.specularColorMap.channel),specularIntensityMapUv:K&&b(M.specularIntensityMap.channel),transmissionMapUv:k&&b(M.transmissionMap.channel),thicknessMapUv:Y&&b(M.thicknessMap.channel),alphaMapUv:$&&b(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Kt||A),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!U.attributes.uv&&(Yt||$),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:xt,skinning:I.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Rt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&S.length>0,shadowMapType:s.shadowMap.type,toneMapping:te,decodeVideoTexture:Yt&&M.map.isVideoTexture===!0&&Jt.getTransfer(M.map.colorSpace)===le,decodeVideoTextureEmissive:ce&&M.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(M.emissiveMap.colorSpace)===le,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ze,flipSided:M.side===Ge,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:It&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&M.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const S in M.defines)y.push(S),y.push(M.defines[S]);return M.isRawShaderMaterial===!1&&(x(y,M),v(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function x(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function v(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function _(M){const y=m[M.type];let S;if(y){const C=wn[y];S=Np.clone(C.uniforms)}else S=M.uniforms;return S}function R(M,y){let S;for(let C=0,I=h.length;C<I;C++){const N=h[C];if(N.cacheKey===y){S=N,++S.usedTimes;break}}return S===void 0&&(S=new Yb(s,y,M,r),h.push(S)),S}function T(M){if(--M.usedTimes===0){const y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function w(M){c.remove(M)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:R,releaseProgram:T,releaseShaderCache:w,programs:h,dispose:P}}function Zb(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function t_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function bh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function _h(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,d,m,b,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:b,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=b,p.group=g),t++,p}function o(u,f,d,m,b,g){const p=a(u,f,d,m,b,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function c(u,f,d,m,b,g){const p=a(u,f,d,m,b,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||t_),n.length>1&&n.sort(f||bh),i.length>1&&i.sort(f||bh)}function h(){for(let u=t,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function e_(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new _h,s.set(n,[a])):i>=r.length?(a=new _h,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function n_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new dt};break;case"SpotLight":e={position:new L,direction:new L,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":e={color:new dt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function i_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let s_=0;function r_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function a_(s){const t=new n_,e=i_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const i=new L,r=new Nt,a=new Nt;function o(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,m=0,b=0,g=0,p=0,x=0,v=0,_=0,R=0,T=0,w=0;l.sort(r_);for(let M=0,y=l.length;M<y;M++){const S=l[M],C=S.color,I=S.intensity,N=S.distance,U=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=C.r*I,u+=C.g*I,f+=C.b*I;else if(S.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(S.sh.coefficients[H],I);w++}else if(S.isDirectionalLight){const H=t.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const W=S.shadow,B=e.get(S);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,n.directionalShadow[d]=B,n.directionalShadowMap[d]=U,n.directionalShadowMatrix[d]=S.shadow.matrix,x++}n.directional[d]=H,d++}else if(S.isSpotLight){const H=t.get(S);H.position.setFromMatrixPosition(S.matrixWorld),H.color.copy(C).multiplyScalar(I),H.distance=N,H.coneCos=Math.cos(S.angle),H.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),H.decay=S.decay,n.spot[b]=H;const W=S.shadow;if(S.map&&(n.spotLightMap[R]=S.map,R++,W.updateMatrices(S),S.castShadow&&T++),n.spotLightMatrix[b]=W.matrix,S.castShadow){const B=e.get(S);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,n.spotShadow[b]=B,n.spotShadowMap[b]=U,_++}b++}else if(S.isRectAreaLight){const H=t.get(S);H.color.copy(C).multiplyScalar(I),H.halfWidth.set(S.width*.5,0,0),H.halfHeight.set(0,S.height*.5,0),n.rectArea[g]=H,g++}else if(S.isPointLight){const H=t.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),H.distance=S.distance,H.decay=S.decay,S.castShadow){const W=S.shadow,B=e.get(S);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,B.shadowCameraNear=W.camera.near,B.shadowCameraFar=W.camera.far,n.pointShadow[m]=B,n.pointShadowMap[m]=U,n.pointShadowMatrix[m]=S.shadow.matrix,v++}n.point[m]=H,m++}else if(S.isHemisphereLight){const H=t.get(S);H.skyColor.copy(S.color).multiplyScalar(I),H.groundColor.copy(S.groundColor).multiplyScalar(I),n.hemi[p]=H,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==m||P.spotLength!==b||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==v||P.numSpotShadows!==_||P.numSpotMaps!==R||P.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=b,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,P.directionalLength=d,P.pointLength=m,P.spotLength=b,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=v,P.numSpotShadows=_,P.numSpotMaps=R,P.numLightProbes=w,n.version=s_++)}function c(l,h){let u=0,f=0,d=0,m=0,b=0;const g=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const v=l[p];if(v.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),u++}else if(v.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),d++}else if(v.isRectAreaLight){const _=n.rectArea[m];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const _=n.hemi[b];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),b++}}}return{setup:o,setupView:c,state:n}}function xh(s){const t=new a_(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function o_(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new xh(s),t.set(i,[o])):r>=a.length?(o=new xh(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class c_ extends _n{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class l_ extends _n{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const h_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u_=`uniform sampler2D shadow_pass;
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
}`;function d_(s,t,e){let n=new Gc;const i=new gt,r=new gt,a=new ne,o=new c_({depthPacking:Wf}),c=new l_,l={},h=e.maxTextureSize,u={[Zn]:Ge,[Ge]:Zn,[ze]:ze},f=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:h_,fragmentShader:u_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new _e;m.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new re(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iu;let p=this.type;this.render=function(T,w,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const M=s.getRenderTarget(),y=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),C=s.state;C.setBlending(bi),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const I=p!==Vn&&this.type===Vn,N=p===Vn&&this.type!==Vn;for(let U=0,H=T.length;U<H;U++){const W=T[U],B=W.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const et=B.getFrameExtents();if(i.multiply(et),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/et.x),i.x=r.x*et.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/et.y),i.y=r.y*et.y,B.mapSize.y=r.y)),B.map===null||I===!0||N===!0){const ft=this.type!==Vn?{minFilter:He,magFilter:He}:{};B.map!==null&&B.map.dispose(),B.map=new Ui(i.x,i.y,ft),B.map.texture.name=W.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const nt=B.getViewportCount();for(let ft=0;ft<nt;ft++){const Rt=B.getViewport(ft);a.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),C.viewport(a),B.updateMatrices(W,ft),n=B.getFrustum(),_(w,P,B.camera,W,this.type)}B.isPointLightShadow!==!0&&this.type===Vn&&x(B,P),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(M,y,S)};function x(T,w){const P=t.update(b);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ui(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(w,null,P,f,b,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(w,null,P,d,b,null)}function v(T,w,P,M){let y=null;const S=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)y=S;else if(y=P.isPointLight===!0?c:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const C=y.uuid,I=w.uuid;let N=l[C];N===void 0&&(N={},l[C]=N);let U=N[I];U===void 0&&(U=y.clone(),N[I]=U,w.addEventListener("dispose",R)),y=U}if(y.visible=w.visible,y.wireframe=w.wireframe,M===Vn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const C=s.properties.get(y);C.light=P}return y}function _(T,w,P,M,y){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Vn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const I=t.update(T),N=T.material;if(Array.isArray(N)){const U=I.groups;for(let H=0,W=U.length;H<W;H++){const B=U[H],et=N[B.materialIndex];if(et&&et.visible){const nt=v(T,et,M,y);T.onBeforeShadow(s,T,w,P,I,nt,B),s.renderBufferDirect(P,null,I,nt,T,B),T.onAfterShadow(s,T,w,P,I,nt,B)}}}else if(N.visible){const U=v(T,N,M,y);T.onBeforeShadow(s,T,w,P,I,U,null),s.renderBufferDirect(P,null,I,U,T,null),T.onAfterShadow(s,T,w,P,I,U,null)}}const C=T.children;for(let I=0,N=C.length;I<N;I++)_(C[I],w,P,M,y)}function R(T){T.target.removeEventListener("dispose",R);for(const P in l){const M=l[P],y=T.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const f_={[Ro]:Co,[Po]:Do,[Lo]:ko,[ls]:Io,[Co]:Ro,[Do]:Po,[ko]:Lo,[Io]:ls};function p_(s,t){function e(){let k=!1;const Y=new ne;let G=null;const $=new ne(0,0,0,0);return{setMask:function(rt){G!==rt&&!k&&(s.colorMask(rt,rt,rt,rt),G=rt)},setLocked:function(rt){k=rt},setClear:function(rt,ct,It,te,be){be===!0&&(rt*=te,ct*=te,It*=te),Y.set(rt,ct,It,te),$.equals(Y)===!1&&(s.clearColor(rt,ct,It,te),$.copy(Y))},reset:function(){k=!1,G=null,$.set(-1,0,0,0)}}}function n(){let k=!1,Y=!1,G=null,$=null,rt=null;return{setReversed:function(ct){if(Y!==ct){const It=t.get("EXT_clip_control");Y?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const te=rt;rt=null,this.setClear(te)}Y=ct},getReversed:function(){return Y},setTest:function(ct){ct?tt(s.DEPTH_TEST):xt(s.DEPTH_TEST)},setMask:function(ct){G!==ct&&!k&&(s.depthMask(ct),G=ct)},setFunc:function(ct){if(Y&&(ct=f_[ct]),$!==ct){switch(ct){case Ro:s.depthFunc(s.NEVER);break;case Co:s.depthFunc(s.ALWAYS);break;case Po:s.depthFunc(s.LESS);break;case ls:s.depthFunc(s.LEQUAL);break;case Lo:s.depthFunc(s.EQUAL);break;case Io:s.depthFunc(s.GEQUAL);break;case Do:s.depthFunc(s.GREATER);break;case ko:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=ct}},setLocked:function(ct){k=ct},setClear:function(ct){rt!==ct&&(Y&&(ct=1-ct),s.clearDepth(ct),rt=ct)},reset:function(){k=!1,G=null,$=null,rt=null,Y=!1}}}function i(){let k=!1,Y=null,G=null,$=null,rt=null,ct=null,It=null,te=null,be=null;return{setTest:function(Bt){k||(Bt?tt(s.STENCIL_TEST):xt(s.STENCIL_TEST))},setMask:function(Bt){Y!==Bt&&!k&&(s.stencilMask(Bt),Y=Bt)},setFunc:function(Bt,ge,we){(G!==Bt||$!==ge||rt!==we)&&(s.stencilFunc(Bt,ge,we),G=Bt,$=ge,rt=we)},setOp:function(Bt,ge,we){(ct!==Bt||It!==ge||te!==we)&&(s.stencilOp(Bt,ge,we),ct=Bt,It=ge,te=we)},setLocked:function(Bt){k=Bt},setClear:function(Bt){be!==Bt&&(s.clearStencil(Bt),be=Bt)},reset:function(){k=!1,Y=null,G=null,$=null,rt=null,ct=null,It=null,te=null,be=null}}}const r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],m=null,b=!1,g=null,p=null,x=null,v=null,_=null,R=null,T=null,w=new dt(0,0,0),P=0,M=!1,y=null,S=null,C=null,I=null,N=null;const U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,W=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),H=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),H=W>=2);let et=null,nt={};const ft=s.getParameter(s.SCISSOR_BOX),Rt=s.getParameter(s.VIEWPORT),Ut=new ne().fromArray(ft),q=new ne().fromArray(Rt);function st(k,Y,G,$){const rt=new Uint8Array(4),ct=s.createTexture();s.bindTexture(k,ct),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let It=0;It<G;It++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Y,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,rt):s.texImage2D(Y+It,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,rt);return ct}const at={};at[s.TEXTURE_2D]=st(s.TEXTURE_2D,s.TEXTURE_2D,1),at[s.TEXTURE_CUBE_MAP]=st(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[s.TEXTURE_2D_ARRAY]=st(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),at[s.TEXTURE_3D]=st(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(s.DEPTH_TEST),a.setFunc(ls),zt(!1),Kt(vl),tt(s.CULL_FACE),F(bi);function tt(k){h[k]!==!0&&(s.enable(k),h[k]=!0)}function xt(k){h[k]!==!1&&(s.disable(k),h[k]=!1)}function Mt(k,Y){return u[k]!==Y?(s.bindFramebuffer(k,Y),u[k]=Y,k===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Y),k===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Y),!0):!1}function kt(k,Y){let G=d,$=!1;if(k){G=f.get(Y),G===void 0&&(G=[],f.set(Y,G));const rt=k.textures;if(G.length!==rt.length||G[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,It=rt.length;ct<It;ct++)G[ct]=s.COLOR_ATTACHMENT0+ct;G.length=rt.length,$=!0}}else G[0]!==s.BACK&&(G[0]=s.BACK,$=!0);$&&s.drawBuffers(G)}function Yt(k){return m!==k?(s.useProgram(k),m=k,!0):!1}const jt={[Pi]:s.FUNC_ADD,[pf]:s.FUNC_SUBTRACT,[mf]:s.FUNC_REVERSE_SUBTRACT};jt[gf]=s.MIN,jt[bf]=s.MAX;const $t={[_f]:s.ZERO,[xf]:s.ONE,[vf]:s.SRC_COLOR,[Ao]:s.SRC_ALPHA,[Af]:s.SRC_ALPHA_SATURATE,[wf]:s.DST_COLOR,[yf]:s.DST_ALPHA,[Mf]:s.ONE_MINUS_SRC_COLOR,[Eo]:s.ONE_MINUS_SRC_ALPHA,[Tf]:s.ONE_MINUS_DST_COLOR,[Sf]:s.ONE_MINUS_DST_ALPHA,[Ef]:s.CONSTANT_COLOR,[Rf]:s.ONE_MINUS_CONSTANT_COLOR,[Cf]:s.CONSTANT_ALPHA,[Pf]:s.ONE_MINUS_CONSTANT_ALPHA};function F(k,Y,G,$,rt,ct,It,te,be,Bt){if(k===bi){b===!0&&(xt(s.BLEND),b=!1);return}if(b===!1&&(tt(s.BLEND),b=!0),k!==ff){if(k!==g||Bt!==M){if((p!==Pi||_!==Pi)&&(s.blendEquation(s.FUNC_ADD),p=Pi,_=Pi),Bt)switch(k){case Di:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case To:s.blendFunc(s.ONE,s.ONE);break;case Ml:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Di:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case To:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ml:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}x=null,v=null,R=null,T=null,w.set(0,0,0),P=0,g=k,M=Bt}return}rt=rt||Y,ct=ct||G,It=It||$,(Y!==p||rt!==_)&&(s.blendEquationSeparate(jt[Y],jt[rt]),p=Y,_=rt),(G!==x||$!==v||ct!==R||It!==T)&&(s.blendFuncSeparate($t[G],$t[$],$t[ct],$t[It]),x=G,v=$,R=ct,T=It),(te.equals(w)===!1||be!==P)&&(s.blendColor(te.r,te.g,te.b,be),w.copy(te),P=be),g=k,M=!1}function We(k,Y){k.side===ze?xt(s.CULL_FACE):tt(s.CULL_FACE);let G=k.side===Ge;Y&&(G=!G),zt(G),k.blending===Di&&k.transparent===!1?F(bi):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const $=k.stencilWrite;o.setTest($),$&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ce(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?tt(s.SAMPLE_ALPHA_TO_COVERAGE):xt(s.SAMPLE_ALPHA_TO_COVERAGE)}function zt(k){y!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),y=k)}function Kt(k){k!==uf?(tt(s.CULL_FACE),k!==S&&(k===vl?s.cullFace(s.BACK):k===df?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xt(s.CULL_FACE),S=k}function Lt(k){k!==C&&(H&&s.lineWidth(k),C=k)}function ce(k,Y,G){k?(tt(s.POLYGON_OFFSET_FILL),(I!==Y||N!==G)&&(s.polygonOffset(Y,G),I=Y,N=G)):xt(s.POLYGON_OFFSET_FILL)}function Ct(k){k?tt(s.SCISSOR_TEST):xt(s.SCISSOR_TEST)}function D(k){k===void 0&&(k=s.TEXTURE0+U-1),et!==k&&(s.activeTexture(k),et=k)}function A(k,Y,G){G===void 0&&(et===null?G=s.TEXTURE0+U-1:G=et);let $=nt[G];$===void 0&&($={type:void 0,texture:void 0},nt[G]=$),($.type!==k||$.texture!==Y)&&(et!==G&&(s.activeTexture(G),et=G),s.bindTexture(k,Y||at[k]),$.type=k,$.texture=Y)}function V(){const k=nt[et];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function it(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(k){Ut.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Ut.copy(k))}function vt(k){q.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),q.copy(k))}function Xt(k,Y){let G=l.get(Y);G===void 0&&(G=new WeakMap,l.set(Y,G));let $=G.get(k);$===void 0&&($=s.getUniformBlockIndex(Y,k.name),G.set(k,$))}function Ot(k,Y){const $=l.get(Y).get(k);c.get(Y)!==$&&(s.uniformBlockBinding(Y,$,k.__bindingPointIndex),c.set(Y,$))}function K(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},et=null,nt={},u={},f=new WeakMap,d=[],m=null,b=!1,g=null,p=null,x=null,v=null,_=null,R=null,T=null,w=new dt(0,0,0),P=0,M=!1,y=null,S=null,C=null,I=null,N=null,Ut.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:xt,bindFramebuffer:Mt,drawBuffers:kt,useProgram:Yt,setBlending:F,setMaterial:We,setFlipSided:zt,setCullFace:Kt,setLineWidth:Lt,setPolygonOffset:ce,setScissorTest:Ct,activeTexture:D,bindTexture:A,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:Z,texImage2D:_t,texImage3D:Pt,updateUBOMapping:Xt,uniformBlockBinding:Ot,texStorage2D:yt,texStorage3D:it,texSubImage2D:J,texSubImage3D:St,compressedTexSubImage2D:lt,compressedTexSubImage3D:bt,scissor:Dt,viewport:vt,reset:K}}function vh(s,t,e,n){const i=m_(n);switch(e){case Bu:return s*t;case Gu:return s*t;case Hu:return s*t*2;case kc:return s*t/i.components*i.byteLength;case Nc:return s*t/i.components*i.byteLength;case Vu:return s*t*2/i.components*i.byteLength;case Uc:return s*t*2/i.components*i.byteLength;case zu:return s*t*3/i.components*i.byteLength;case rn:return s*t*4/i.components*i.byteLength;case Fc:return s*t*4/i.components*i.byteLength;case ea:case na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ia:case sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Oo:case zo:return Math.max(s,16)*Math.max(t,8)/4;case Fo:case Bo:return Math.max(s,8)*Math.max(t,8)/2;case Go:case Ho:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Vo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case qo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case $o:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Qo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case tc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ec:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case nc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ic:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ra:case sc:case rc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Wu:case ac:return Math.ceil(s/4)*Math.ceil(t/4)*8;case oc:case cc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function m_(s){switch(s){case ti:case Uu:return{byteLength:1,components:1};case Zs:case Fu:case ar:return{byteLength:2,components:1};case Ic:case Dc:return{byteLength:2,components:4};case Ni:case Lc:case mn:return{byteLength:4,components:1};case Ou:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function g_(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(D,A){return d?new OffscreenCanvas(D,A):nr("canvas")}function b(D,A,V){let Q=1;const Z=Ct(D);if((Z.width>V||Z.height>V)&&(Q=V/Math.max(Z.width,Z.height)),Q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const J=Math.floor(Q*Z.width),St=Math.floor(Q*Z.height);u===void 0&&(u=m(J,St));const lt=A?m(J,St):u;return lt.width=J,lt.height=St,lt.getContext("2d").drawImage(D,0,0,J,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+J+"x"+St+")."),lt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),D;return D}function g(D){return D.generateMipmaps}function p(D){s.generateMipmap(D)}function x(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(D,A,V,Q,Z=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let J=A;if(A===s.RED&&(V===s.FLOAT&&(J=s.R32F),V===s.HALF_FLOAT&&(J=s.R16F),V===s.UNSIGNED_BYTE&&(J=s.R8)),A===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.R8UI),V===s.UNSIGNED_SHORT&&(J=s.R16UI),V===s.UNSIGNED_INT&&(J=s.R32UI),V===s.BYTE&&(J=s.R8I),V===s.SHORT&&(J=s.R16I),V===s.INT&&(J=s.R32I)),A===s.RG&&(V===s.FLOAT&&(J=s.RG32F),V===s.HALF_FLOAT&&(J=s.RG16F),V===s.UNSIGNED_BYTE&&(J=s.RG8)),A===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RG8UI),V===s.UNSIGNED_SHORT&&(J=s.RG16UI),V===s.UNSIGNED_INT&&(J=s.RG32UI),V===s.BYTE&&(J=s.RG8I),V===s.SHORT&&(J=s.RG16I),V===s.INT&&(J=s.RG32I)),A===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RGB8UI),V===s.UNSIGNED_SHORT&&(J=s.RGB16UI),V===s.UNSIGNED_INT&&(J=s.RGB32UI),V===s.BYTE&&(J=s.RGB8I),V===s.SHORT&&(J=s.RGB16I),V===s.INT&&(J=s.RGB32I)),A===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),V===s.UNSIGNED_INT&&(J=s.RGBA32UI),V===s.BYTE&&(J=s.RGBA8I),V===s.SHORT&&(J=s.RGBA16I),V===s.INT&&(J=s.RGBA32I)),A===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),A===s.RGBA){const St=Z?ga:Jt.getTransfer(Q);V===s.FLOAT&&(J=s.RGBA32F),V===s.HALF_FLOAT&&(J=s.RGBA16F),V===s.UNSIGNED_BYTE&&(J=St===le?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(D,A){let V;return D?A===null||A===Ni||A===ds?V=s.DEPTH24_STENCIL8:A===mn?V=s.DEPTH32F_STENCIL8:A===Zs&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ni||A===ds?V=s.DEPTH_COMPONENT24:A===mn?V=s.DEPTH_COMPONENT32F:A===Zs&&(V=s.DEPTH_COMPONENT16),V}function R(D,A){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==He&&D.minFilter!==Je?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function T(D){const A=D.target;A.removeEventListener("dispose",T),P(A),A.isVideoTexture&&h.delete(A)}function w(D){const A=D.target;A.removeEventListener("dispose",w),y(A)}function P(D){const A=n.get(D);if(A.__webglInit===void 0)return;const V=D.source,Q=f.get(V);if(Q){const Z=Q[A.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(D),Object.keys(Q).length===0&&f.delete(V)}n.remove(D)}function M(D){const A=n.get(D);s.deleteTexture(A.__webglTexture);const V=D.source,Q=f.get(V);delete Q[A.__cacheKey],a.memory.textures--}function y(D){const A=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(A.__webglFramebuffer[Q]))for(let Z=0;Z<A.__webglFramebuffer[Q].length;Z++)s.deleteFramebuffer(A.__webglFramebuffer[Q][Z]);else s.deleteFramebuffer(A.__webglFramebuffer[Q]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[Q])}else{if(Array.isArray(A.__webglFramebuffer))for(let Q=0;Q<A.__webglFramebuffer.length;Q++)s.deleteFramebuffer(A.__webglFramebuffer[Q]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Q=0;Q<A.__webglColorRenderbuffer.length;Q++)A.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[Q]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const V=D.textures;for(let Q=0,Z=V.length;Q<Z;Q++){const J=n.get(V[Q]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(V[Q])}n.remove(D)}let S=0;function C(){S=0}function I(){const D=S;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),S+=1,D}function N(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function U(D,A){const V=n.get(D);if(D.isVideoTexture&&Lt(D),D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){const Q=D.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(V,D,A);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+A)}function H(D,A){const V=n.get(D);if(D.version>0&&V.__version!==D.version){q(V,D,A);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+A)}function W(D,A){const V=n.get(D);if(D.version>0&&V.__version!==D.version){q(V,D,A);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+A)}function B(D,A){const V=n.get(D);if(D.version>0&&V.__version!==D.version){st(V,D,A);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+A)}const et={[ki]:s.REPEAT,[fi]:s.CLAMP_TO_EDGE,[ca]:s.MIRRORED_REPEAT},nt={[He]:s.NEAREST,[Nu]:s.NEAREST_MIPMAP_NEAREST,[Gs]:s.NEAREST_MIPMAP_LINEAR,[Je]:s.LINEAR,[ta]:s.LINEAR_MIPMAP_NEAREST,[qn]:s.LINEAR_MIPMAP_LINEAR},ft={[Xf]:s.NEVER,[Qf]:s.ALWAYS,[qf]:s.LESS,[Xu]:s.LEQUAL,[Yf]:s.EQUAL,[Jf]:s.GEQUAL,[Kf]:s.GREATER,[$f]:s.NOTEQUAL};function Rt(D,A){if(A.type===mn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Je||A.magFilter===ta||A.magFilter===Gs||A.magFilter===qn||A.minFilter===Je||A.minFilter===ta||A.minFilter===Gs||A.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,et[A.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,et[A.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,et[A.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,nt[A.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,nt[A.minFilter]),A.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,ft[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===He||A.minFilter!==Gs&&A.minFilter!==qn||A.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(D,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Ut(D,A){let V=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",T));const Q=A.source;let Z=f.get(Q);Z===void 0&&(Z={},f.set(Q,Z));const J=N(A);if(J!==D.__cacheKey){Z[J]===void 0&&(Z[J]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Z[J].usedTimes++;const St=Z[D.__cacheKey];St!==void 0&&(Z[D.__cacheKey].usedTimes--,St.usedTimes===0&&M(A)),D.__cacheKey=J,D.__webglTexture=Z[J].texture}return V}function q(D,A,V){let Q=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Q=s.TEXTURE_3D);const Z=Ut(D,A),J=A.source;e.bindTexture(Q,D.__webglTexture,s.TEXTURE0+V);const St=n.get(J);if(J.version!==St.__version||Z===!0){e.activeTexture(s.TEXTURE0+V);const lt=Jt.getPrimaries(Jt.workingColorSpace),bt=A.colorSpace===di?null:Jt.getPrimaries(A.colorSpace),yt=A.colorSpace===di||lt===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let it=b(A.image,!1,i.maxTextureSize);it=ce(A,it);const _t=r.convert(A.format,A.colorSpace),Pt=r.convert(A.type);let Dt=v(A.internalFormat,_t,Pt,A.colorSpace,A.isVideoTexture);Rt(Q,A);let vt;const Xt=A.mipmaps,Ot=A.isVideoTexture!==!0,K=St.__version===void 0||Z===!0,k=J.dataReady,Y=R(A,it);if(A.isDepthTexture)Dt=_(A.format===fs,A.type),K&&(Ot?e.texStorage2D(s.TEXTURE_2D,1,Dt,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,Dt,it.width,it.height,0,_t,Pt,null));else if(A.isDataTexture)if(Xt.length>0){Ot&&K&&e.texStorage2D(s.TEXTURE_2D,Y,Dt,Xt[0].width,Xt[0].height);for(let G=0,$=Xt.length;G<$;G++)vt=Xt[G],Ot?k&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,vt.width,vt.height,_t,Pt,vt.data):e.texImage2D(s.TEXTURE_2D,G,Dt,vt.width,vt.height,0,_t,Pt,vt.data);A.generateMipmaps=!1}else Ot?(K&&e.texStorage2D(s.TEXTURE_2D,Y,Dt,it.width,it.height),k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,it.width,it.height,_t,Pt,it.data)):e.texImage2D(s.TEXTURE_2D,0,Dt,it.width,it.height,0,_t,Pt,it.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ot&&K&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Y,Dt,Xt[0].width,Xt[0].height,it.depth);for(let G=0,$=Xt.length;G<$;G++)if(vt=Xt[G],A.format!==rn)if(_t!==null)if(Ot){if(k)if(A.layerUpdates.size>0){const rt=vh(vt.width,vt.height,A.format,A.type);for(const ct of A.layerUpdates){const It=vt.data.subarray(ct*rt/vt.data.BYTES_PER_ELEMENT,(ct+1)*rt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,ct,vt.width,vt.height,1,_t,It)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,vt.width,vt.height,it.depth,_t,vt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,G,Dt,vt.width,vt.height,it.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?k&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,vt.width,vt.height,it.depth,_t,Pt,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,G,Dt,vt.width,vt.height,it.depth,0,_t,Pt,vt.data)}else{Ot&&K&&e.texStorage2D(s.TEXTURE_2D,Y,Dt,Xt[0].width,Xt[0].height);for(let G=0,$=Xt.length;G<$;G++)vt=Xt[G],A.format!==rn?_t!==null?Ot?k&&e.compressedTexSubImage2D(s.TEXTURE_2D,G,0,0,vt.width,vt.height,_t,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,G,Dt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?k&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,vt.width,vt.height,_t,Pt,vt.data):e.texImage2D(s.TEXTURE_2D,G,Dt,vt.width,vt.height,0,_t,Pt,vt.data)}else if(A.isDataArrayTexture)if(Ot){if(K&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Y,Dt,it.width,it.height,it.depth),k)if(A.layerUpdates.size>0){const G=vh(it.width,it.height,A.format,A.type);for(const $ of A.layerUpdates){const rt=it.data.subarray($*G/it.data.BYTES_PER_ELEMENT,($+1)*G/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,it.width,it.height,1,_t,Pt,rt)}A.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,_t,Pt,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Dt,it.width,it.height,it.depth,0,_t,Pt,it.data);else if(A.isData3DTexture)Ot?(K&&e.texStorage3D(s.TEXTURE_3D,Y,Dt,it.width,it.height,it.depth),k&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,_t,Pt,it.data)):e.texImage3D(s.TEXTURE_3D,0,Dt,it.width,it.height,it.depth,0,_t,Pt,it.data);else if(A.isFramebufferTexture){if(K)if(Ot)e.texStorage2D(s.TEXTURE_2D,Y,Dt,it.width,it.height);else{let G=it.width,$=it.height;for(let rt=0;rt<Y;rt++)e.texImage2D(s.TEXTURE_2D,rt,Dt,G,$,0,_t,Pt,null),G>>=1,$>>=1}}else if(Xt.length>0){if(Ot&&K){const G=Ct(Xt[0]);e.texStorage2D(s.TEXTURE_2D,Y,Dt,G.width,G.height)}for(let G=0,$=Xt.length;G<$;G++)vt=Xt[G],Ot?k&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,_t,Pt,vt):e.texImage2D(s.TEXTURE_2D,G,Dt,_t,Pt,vt);A.generateMipmaps=!1}else if(Ot){if(K){const G=Ct(it);e.texStorage2D(s.TEXTURE_2D,Y,Dt,G.width,G.height)}k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,Pt,it)}else e.texImage2D(s.TEXTURE_2D,0,Dt,_t,Pt,it);g(A)&&p(Q),St.__version=J.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function st(D,A,V){if(A.image.length!==6)return;const Q=Ut(D,A),Z=A.source;e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+V);const J=n.get(Z);if(Z.version!==J.__version||Q===!0){e.activeTexture(s.TEXTURE0+V);const St=Jt.getPrimaries(Jt.workingColorSpace),lt=A.colorSpace===di?null:Jt.getPrimaries(A.colorSpace),bt=A.colorSpace===di||St===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const yt=A.isCompressedTexture||A.image[0].isCompressedTexture,it=A.image[0]&&A.image[0].isDataTexture,_t=[];for(let $=0;$<6;$++)!yt&&!it?_t[$]=b(A.image[$],!0,i.maxCubemapSize):_t[$]=it?A.image[$].image:A.image[$],_t[$]=ce(A,_t[$]);const Pt=_t[0],Dt=r.convert(A.format,A.colorSpace),vt=r.convert(A.type),Xt=v(A.internalFormat,Dt,vt,A.colorSpace),Ot=A.isVideoTexture!==!0,K=J.__version===void 0||Q===!0,k=Z.dataReady;let Y=R(A,Pt);Rt(s.TEXTURE_CUBE_MAP,A);let G;if(yt){Ot&&K&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Y,Xt,Pt.width,Pt.height);for(let $=0;$<6;$++){G=_t[$].mipmaps;for(let rt=0;rt<G.length;rt++){const ct=G[rt];A.format!==rn?Dt!==null?Ot?k&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt,0,0,ct.width,ct.height,Dt,ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt,Xt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt,0,0,ct.width,ct.height,Dt,vt,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt,Xt,ct.width,ct.height,0,Dt,vt,ct.data)}}}else{if(G=A.mipmaps,Ot&&K){G.length>0&&Y++;const $=Ct(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Y,Xt,$.width,$.height)}for(let $=0;$<6;$++)if(it){Ot?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,_t[$].width,_t[$].height,Dt,vt,_t[$].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xt,_t[$].width,_t[$].height,0,Dt,vt,_t[$].data);for(let rt=0;rt<G.length;rt++){const It=G[rt].image[$].image;Ot?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt+1,0,0,It.width,It.height,Dt,vt,It.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt+1,Xt,It.width,It.height,0,Dt,vt,It.data)}}else{Ot?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Dt,vt,_t[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xt,Dt,vt,_t[$]);for(let rt=0;rt<G.length;rt++){const ct=G[rt];Ot?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt+1,0,0,Dt,vt,ct.image[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt+1,Xt,Dt,vt,ct.image[$])}}}g(A)&&p(s.TEXTURE_CUBE_MAP),J.__version=Z.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function at(D,A,V,Q,Z,J){const St=r.convert(V.format,V.colorSpace),lt=r.convert(V.type),bt=v(V.internalFormat,St,lt,V.colorSpace),yt=n.get(A),it=n.get(V);if(it.__renderTarget=A,!yt.__hasExternalTextures){const _t=Math.max(1,A.width>>J),Pt=Math.max(1,A.height>>J);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,J,bt,_t,Pt,A.depth,0,St,lt,null):e.texImage2D(Z,J,bt,_t,Pt,0,St,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,D),Kt(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,Z,it.__webglTexture,0,zt(A)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,Z,it.__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function tt(D,A,V){if(s.bindRenderbuffer(s.RENDERBUFFER,D),A.depthBuffer){const Q=A.depthTexture,Z=Q&&Q.isDepthTexture?Q.type:null,J=_(A.stencilBuffer,Z),St=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=zt(A);Kt(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,J,A.width,A.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,J,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,J,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,D)}else{const Q=A.textures;for(let Z=0;Z<Q.length;Z++){const J=Q[Z],St=r.convert(J.format,J.colorSpace),lt=r.convert(J.type),bt=v(J.internalFormat,St,lt,J.colorSpace),yt=zt(A);V&&Kt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,bt,A.width,A.height):Kt(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,yt,bt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,bt,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xt(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(A.depthTexture);Q.__renderTarget=A,(!Q.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),U(A.depthTexture,0);const Z=Q.__webglTexture,J=zt(A);if(A.depthTexture.format===rs)Kt(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(A.depthTexture.format===fs)Kt(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Mt(D){const A=n.get(D),V=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const Q=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Q){const Z=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Q.removeEventListener("dispose",Z)};Q.addEventListener("dispose",Z),A.__depthDisposeCallback=Z}A.__boundDepthTexture=Q}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");xt(A.__webglFramebuffer,D)}else if(V){A.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[Q]),A.__webglDepthbuffer[Q]===void 0)A.__webglDepthbuffer[Q]=s.createRenderbuffer(),tt(A.__webglDepthbuffer[Q],D,!1);else{const Z=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=A.__webglDepthbuffer[Q];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,J)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),tt(A.__webglDepthbuffer,D,!1);else{const Q=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,Z)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(D,A,V){const Q=n.get(D);A!==void 0&&at(Q.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Mt(D)}function Yt(D){const A=D.texture,V=n.get(D),Q=n.get(A);D.addEventListener("dispose",w);const Z=D.textures,J=D.isWebGLCubeRenderTarget===!0,St=Z.length>1;if(St||(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=A.version,a.memory.textures++),J){V.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(A.mipmaps&&A.mipmaps.length>0){V.__webglFramebuffer[lt]=[];for(let bt=0;bt<A.mipmaps.length;bt++)V.__webglFramebuffer[lt][bt]=s.createFramebuffer()}else V.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){V.__webglFramebuffer=[];for(let lt=0;lt<A.mipmaps.length;lt++)V.__webglFramebuffer[lt]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(St)for(let lt=0,bt=Z.length;lt<bt;lt++){const yt=n.get(Z[lt]);yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture(),a.memory.textures++)}if(D.samples>0&&Kt(D)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let lt=0;lt<Z.length;lt++){const bt=Z[lt];V.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[lt]);const yt=r.convert(bt.format,bt.colorSpace),it=r.convert(bt.type),_t=v(bt.internalFormat,yt,it,bt.colorSpace,D.isXRRenderTarget===!0),Pt=zt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,_t,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,V.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),tt(V.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),Rt(s.TEXTURE_CUBE_MAP,A);for(let lt=0;lt<6;lt++)if(A.mipmaps&&A.mipmaps.length>0)for(let bt=0;bt<A.mipmaps.length;bt++)at(V.__webglFramebuffer[lt][bt],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt);else at(V.__webglFramebuffer[lt],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);g(A)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let lt=0,bt=Z.length;lt<bt;lt++){const yt=Z[lt],it=n.get(yt);e.bindTexture(s.TEXTURE_2D,it.__webglTexture),Rt(s.TEXTURE_2D,yt),at(V.__webglFramebuffer,D,yt,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,0),g(yt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(lt=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,Q.__webglTexture),Rt(lt,A),A.mipmaps&&A.mipmaps.length>0)for(let bt=0;bt<A.mipmaps.length;bt++)at(V.__webglFramebuffer[bt],D,A,s.COLOR_ATTACHMENT0,lt,bt);else at(V.__webglFramebuffer,D,A,s.COLOR_ATTACHMENT0,lt,0);g(A)&&p(lt),e.unbindTexture()}D.depthBuffer&&Mt(D)}function jt(D){const A=D.textures;for(let V=0,Q=A.length;V<Q;V++){const Z=A[V];if(g(Z)){const J=x(D),St=n.get(Z).__webglTexture;e.bindTexture(J,St),p(J),e.unbindTexture()}}}const $t=[],F=[];function We(D){if(D.samples>0){if(Kt(D)===!1){const A=D.textures,V=D.width,Q=D.height;let Z=s.COLOR_BUFFER_BIT;const J=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=n.get(D),lt=A.length>1;if(lt)for(let bt=0;bt<A.length;bt++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let bt=0;bt<A.length;bt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[bt]);const yt=n.get(A[bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,yt,0)}s.blitFramebuffer(0,0,V,Q,0,0,V,Q,Z,s.NEAREST),c===!0&&($t.length=0,F.length=0,$t.push(s.COLOR_ATTACHMENT0+bt),D.depthBuffer&&D.resolveDepthBuffer===!1&&($t.push(J),F.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$t))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let bt=0;bt<A.length;bt++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,St.__webglColorRenderbuffer[bt]);const yt=n.get(A[bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,yt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const A=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function zt(D){return Math.min(i.maxSamples,D.samples)}function Kt(D){const A=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Lt(D){const A=a.render.frame;h.get(D)!==A&&(h.set(D,A),D.update())}function ce(D,A){const V=D.colorSpace,Q=D.format,Z=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||V!==Ve&&V!==di&&(Jt.getTransfer(V)===le?(Q!==rn||Z!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),A}function Ct(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=C,this.setTexture2D=U,this.setTexture2DArray=H,this.setTexture3D=W,this.setTextureCube=B,this.rebindTextures=kt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=Kt}function b_(s,t){function e(n,i=di){let r;const a=Jt.getTransfer(i);if(n===ti)return s.UNSIGNED_BYTE;if(n===Ic)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Dc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ou)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Uu)return s.BYTE;if(n===Fu)return s.SHORT;if(n===Zs)return s.UNSIGNED_SHORT;if(n===Lc)return s.INT;if(n===Ni)return s.UNSIGNED_INT;if(n===mn)return s.FLOAT;if(n===ar)return s.HALF_FLOAT;if(n===Bu)return s.ALPHA;if(n===zu)return s.RGB;if(n===rn)return s.RGBA;if(n===Gu)return s.LUMINANCE;if(n===Hu)return s.LUMINANCE_ALPHA;if(n===rs)return s.DEPTH_COMPONENT;if(n===fs)return s.DEPTH_STENCIL;if(n===kc)return s.RED;if(n===Nc)return s.RED_INTEGER;if(n===Vu)return s.RG;if(n===Uc)return s.RG_INTEGER;if(n===Fc)return s.RGBA_INTEGER;if(n===ea||n===na||n===ia||n===sa)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fo||n===Oo||n===Bo||n===zo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Go||n===Ho||n===Vo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Go||n===Ho)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wo||n===jo||n===Xo||n===qo||n===Yo||n===Ko||n===$o||n===Jo||n===Qo||n===Zo||n===tc||n===ec||n===nc||n===ic)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ko)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$o)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tc)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ec)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nc)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ic)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ra||n===sc||n===rc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ra)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wu||n===ac||n===oc||n===cc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ra)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class __ extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Se extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x_={type:"move"};class to{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const b of t.hand.values()){const g=e.getJointPose(b,n),p=this._getHandJoint(l,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(x_)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const v_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M_=`
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

}`;class y_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ae,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Rn({vertexShader:v_,fragmentShader:M_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new An(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S_ extends vs{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null;const b=new y_,g=e.getContextAttributes();let p=null,x=null;const v=[],_=[],R=new gt;let T=null;const w=new De;w.viewport=new ne;const P=new De;P.viewport=new ne;const M=[w,P],y=new __;let S=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let st=v[q];return st===void 0&&(st=new to,v[q]=st),st.getTargetRaySpace()},this.getControllerGrip=function(q){let st=v[q];return st===void 0&&(st=new to,v[q]=st),st.getGripSpace()},this.getHand=function(q){let st=v[q];return st===void 0&&(st=new to,v[q]=st),st.getHandSpace()};function I(q){const st=_.indexOf(q.inputSource);if(st===-1)return;const at=v[st];at!==void 0&&(at.update(q.inputSource,q.frame,l||a),at.dispatchEvent({type:q.type,data:q.inputSource}))}function N(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",U);for(let q=0;q<v.length;q++){const st=_[q];st!==null&&(_[q]=null,v[q].disconnect(st))}S=null,C=null,b.reset(),t.setRenderTarget(p),d=null,f=null,u=null,i=null,x=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",N),i.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const st={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,st),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Ui(d.framebufferWidth,d.framebufferHeight,{format:rn,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let st=null,at=null,tt=null;g.depth&&(tt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=g.stencil?fs:rs,at=g.stencil?ds:Ni);const xt={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(xt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Ui(f.textureWidth,f.textureHeight,{format:rn,type:ti,depthTexture:new sd(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ut.setContext(i),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function U(q){for(let st=0;st<q.removed.length;st++){const at=q.removed[st],tt=_.indexOf(at);tt>=0&&(_[tt]=null,v[tt].disconnect(at))}for(let st=0;st<q.added.length;st++){const at=q.added[st];let tt=_.indexOf(at);if(tt===-1){for(let Mt=0;Mt<v.length;Mt++)if(Mt>=_.length){_.push(at),tt=Mt;break}else if(_[Mt]===null){_[Mt]=at,tt=Mt;break}if(tt===-1)break}const xt=v[tt];xt&&xt.connect(at)}}const H=new L,W=new L;function B(q,st,at){H.setFromMatrixPosition(st.matrixWorld),W.setFromMatrixPosition(at.matrixWorld);const tt=H.distanceTo(W),xt=st.projectionMatrix.elements,Mt=at.projectionMatrix.elements,kt=xt[14]/(xt[10]-1),Yt=xt[14]/(xt[10]+1),jt=(xt[9]+1)/xt[5],$t=(xt[9]-1)/xt[5],F=(xt[8]-1)/xt[0],We=(Mt[8]+1)/Mt[0],zt=kt*F,Kt=kt*We,Lt=tt/(-F+We),ce=Lt*-F;if(st.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ce),q.translateZ(Lt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),xt[10]===-1)q.projectionMatrix.copy(st.projectionMatrix),q.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Ct=kt+Lt,D=Yt+Lt,A=zt-ce,V=Kt+(tt-ce),Q=jt*Yt/D*Ct,Z=$t*Yt/D*Ct;q.projectionMatrix.makePerspective(A,V,Q,Z,Ct,D),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function et(q,st){st===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(st.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let st=q.near,at=q.far;b.texture!==null&&(b.depthNear>0&&(st=b.depthNear),b.depthFar>0&&(at=b.depthFar)),y.near=P.near=w.near=st,y.far=P.far=w.far=at,(S!==y.near||C!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,C=y.far),w.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,y.layers.mask=w.layers.mask|P.layers.mask;const tt=q.parent,xt=y.cameras;et(y,tt);for(let Mt=0;Mt<xt.length;Mt++)et(xt[Mt],tt);xt.length===2?B(y,w,P):y.projectionMatrix.copy(w.projectionMatrix),nt(q,y,tt)};function nt(q,st,at){at===null?q.matrix.copy(st.matrixWorld):(q.matrix.copy(at.matrixWorld),q.matrix.invert(),q.matrix.multiply(st.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(st.projectionMatrix),q.projectionMatrixInverse.copy(st.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ps*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(y)};let ft=null;function Rt(q,st){if(h=st.getViewerPose(l||a),m=st,h!==null){const at=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let tt=!1;at.length!==y.cameras.length&&(y.cameras.length=0,tt=!0);for(let Mt=0;Mt<at.length;Mt++){const kt=at[Mt];let Yt=null;if(d!==null)Yt=d.getViewport(kt);else{const $t=u.getViewSubImage(f,kt);Yt=$t.viewport,Mt===0&&(t.setRenderTargetTextures(x,$t.colorTexture,f.ignoreDepthValues?void 0:$t.depthStencilTexture),t.setRenderTarget(x))}let jt=M[Mt];jt===void 0&&(jt=new De,jt.layers.enable(Mt),jt.viewport=new ne,M[Mt]=jt),jt.matrix.fromArray(kt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(kt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Mt===0&&(y.matrix.copy(jt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),tt===!0&&y.cameras.push(jt)}const xt=i.enabledFeatures;if(xt&&xt.includes("depth-sensing")){const Mt=u.getDepthInformation(at[0]);Mt&&Mt.isValid&&Mt.texture&&b.init(t,Mt,i.renderState)}}for(let at=0;at<v.length;at++){const tt=_[at],xt=v[at];tt!==null&&xt!==void 0&&xt.update(tt,st,l||a)}ft&&ft(q,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),m=null}const Ut=new id;Ut.setAnimationLoop(Rt),this.setAnimationLoop=function(q){ft=q},this.dispose=function(){}}}const Ti=new xn,w_=new Nt;function T_(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,td(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),b(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,x,v):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ge&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ge&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=t.get(p),v=x.envMap,_=x.envMapRotation;v&&(g.envMap.value=v,Ti.copy(_),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),g.envMapRotation.value.setFromMatrix4(w_.makeRotationFromEuler(Ti)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){const x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function A_(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,v){const _=v.program;n.uniformBlockBinding(x,_)}function l(x,v){let _=i[x.id];_===void 0&&(m(x),_=h(x),i[x.id]=_,x.addEventListener("dispose",g));const R=v.program;n.updateUBOMapping(x,R);const T=t.render.frame;r[x.id]!==T&&(f(x),r[x.id]=T)}function h(x){const v=u();x.__bindingPointIndex=v;const _=s.createBuffer(),R=x.__size,T=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,_),_}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=i[x.id],_=x.uniforms,R=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,w=_.length;T<w;T++){const P=Array.isArray(_[T])?_[T]:[_[T]];for(let M=0,y=P.length;M<y;M++){const S=P[M];if(d(S,T,M,R)===!0){const C=S.__offset,I=Array.isArray(S.value)?S.value:[S.value];let N=0;for(let U=0;U<I.length;U++){const H=I[U],W=b(H);typeof H=="number"||typeof H=="boolean"?(S.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,C+N,S.__data)):H.isMatrix3?(S.__data[0]=H.elements[0],S.__data[1]=H.elements[1],S.__data[2]=H.elements[2],S.__data[3]=0,S.__data[4]=H.elements[3],S.__data[5]=H.elements[4],S.__data[6]=H.elements[5],S.__data[7]=0,S.__data[8]=H.elements[6],S.__data[9]=H.elements[7],S.__data[10]=H.elements[8],S.__data[11]=0):(H.toArray(S.__data,N),N+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,C,S.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,v,_,R){const T=x.value,w=v+"_"+_;if(R[w]===void 0)return typeof T=="number"||typeof T=="boolean"?R[w]=T:R[w]=T.clone(),!0;{const P=R[w];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[w]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function m(x){const v=x.uniforms;let _=0;const R=16;for(let w=0,P=v.length;w<P;w++){const M=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,S=M.length;y<S;y++){const C=M[y],I=Array.isArray(C.value)?C.value:[C.value];for(let N=0,U=I.length;N<U;N++){const H=I[N],W=b(H),B=_%R,et=B%W.boundary,nt=B+et;_+=et,nt!==0&&R-nt<W.storage&&(_+=R-nt),C.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=_,_+=W.storage}}}const T=_%R;return T>0&&(_+=R-T),x.__size=_,x.__cache={},this}function b(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}class ld{constructor(t={}){const{canvas:e=mp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),b=new Int32Array(4);let g=null,p=null;const x=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this.toneMapping=_i,this.toneMappingExposure=1;const _=this;let R=!1,T=0,w=0,P=null,M=-1,y=null;const S=new ne,C=new ne;let I=null;const N=new dt(0);let U=0,H=e.width,W=e.height,B=1,et=null,nt=null;const ft=new ne(0,0,H,W),Rt=new ne(0,0,H,W);let Ut=!1;const q=new Gc;let st=!1,at=!1;const tt=new Nt,xt=new Nt,Mt=new L,kt=new ne,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function $t(){return P===null?B:1}let F=n;function We(E,O){return e.getContext(E,O)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Cc}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",rt,!1),e.addEventListener("webglcontextcreationerror",ct,!1),F===null){const O="webgl2";if(F=We(O,E),F===null)throw We(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let zt,Kt,Lt,ce,Ct,D,A,V,Q,Z,J,St,lt,bt,yt,it,_t,Pt,Dt,vt,Xt,Ot,K,k;function Y(){zt=new Ig(F),zt.init(),Ot=new b_(F,zt),Kt=new Ag(F,zt,t,Ot),Lt=new p_(F,zt),Kt.reverseDepthBuffer&&f&&Lt.buffers.depth.setReversed(!0),ce=new Ng(F),Ct=new Zb,D=new g_(F,zt,Lt,Ct,Kt,Ot,ce),A=new Rg(_),V=new Lg(_),Q=new Hp(F),K=new wg(F,Q),Z=new Dg(F,Q,ce,K),J=new Fg(F,Z,Q,ce),Dt=new Ug(F,Kt,D),it=new Eg(Ct),St=new Qb(_,A,V,zt,Kt,K,it),lt=new T_(_,Ct),bt=new e_,yt=new o_(zt),Pt=new Sg(_,A,V,Lt,J,d,c),_t=new d_(_,J,Kt),k=new A_(F,ce,Kt,Lt),vt=new Tg(F,zt,ce),Xt=new kg(F,zt,ce),ce.programs=St.programs,_.capabilities=Kt,_.extensions=zt,_.properties=Ct,_.renderLists=bt,_.shadowMap=_t,_.state=Lt,_.info=ce}Y();const G=new S_(_,F);this.xr=G,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=zt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=zt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(E){E!==void 0&&(B=E,this.setSize(H,W,!1))},this.getSize=function(E){return E.set(H,W)},this.setSize=function(E,O,j=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,W=O,e.width=Math.floor(E*B),e.height=Math.floor(O*B),j===!0&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(H*B,W*B).floor()},this.setDrawingBufferSize=function(E,O,j){H=E,W=O,B=j,e.width=Math.floor(E*j),e.height=Math.floor(O*j),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(ft)},this.setViewport=function(E,O,j,X){E.isVector4?ft.set(E.x,E.y,E.z,E.w):ft.set(E,O,j,X),Lt.viewport(S.copy(ft).multiplyScalar(B).round())},this.getScissor=function(E){return E.copy(Rt)},this.setScissor=function(E,O,j,X){E.isVector4?Rt.set(E.x,E.y,E.z,E.w):Rt.set(E,O,j,X),Lt.scissor(C.copy(Rt).multiplyScalar(B).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(E){Lt.setScissorTest(Ut=E)},this.setOpaqueSort=function(E){et=E},this.setTransparentSort=function(E){nt=E},this.getClearColor=function(E){return E.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(E=!0,O=!0,j=!0){let X=0;if(E){let z=!1;if(P!==null){const ot=P.texture.format;z=ot===Fc||ot===Uc||ot===Nc}if(z){const ot=P.texture.type,mt=ot===ti||ot===Ni||ot===Zs||ot===ds||ot===Ic||ot===Dc,wt=Pt.getClearColor(),Tt=Pt.getClearAlpha(),Ft=wt.r,Gt=wt.g,At=wt.b;mt?(m[0]=Ft,m[1]=Gt,m[2]=At,m[3]=Tt,F.clearBufferuiv(F.COLOR,0,m)):(b[0]=Ft,b[1]=Gt,b[2]=At,b[3]=Tt,F.clearBufferiv(F.COLOR,0,b))}else X|=F.COLOR_BUFFER_BIT}O&&(X|=F.DEPTH_BUFFER_BIT),j&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",rt,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),bt.dispose(),yt.dispose(),Ct.dispose(),A.dispose(),V.dispose(),J.dispose(),K.dispose(),k.dispose(),St.dispose(),G.dispose(),G.removeEventListener("sessionstart",ul),G.removeEventListener("sessionend",dl),xi.stop()};function $(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function rt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=ce.autoReset,O=_t.enabled,j=_t.autoUpdate,X=_t.needsUpdate,z=_t.type;Y(),ce.autoReset=E,_t.enabled=O,_t.autoUpdate=j,_t.needsUpdate=X,_t.type=z}function ct(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function It(E){const O=E.target;O.removeEventListener("dispose",It),te(O)}function te(E){be(E),Ct.remove(E)}function be(E){const O=Ct.get(E).programs;O!==void 0&&(O.forEach(function(j){St.releaseProgram(j)}),E.isShaderMaterial&&St.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,j,X,z,ot){O===null&&(O=Yt);const mt=z.isMesh&&z.matrixWorld.determinant()<0,wt=af(E,O,j,X,z);Lt.setMaterial(X,mt);let Tt=j.index,Ft=1;if(X.wireframe===!0){if(Tt=Z.getWireframeAttribute(j),Tt===void 0)return;Ft=2}const Gt=j.drawRange,At=j.attributes.position;let ee=Gt.start*Ft,de=(Gt.start+Gt.count)*Ft;ot!==null&&(ee=Math.max(ee,ot.start*Ft),de=Math.min(de,(ot.start+ot.count)*Ft)),Tt!==null?(ee=Math.max(ee,0),de=Math.min(de,Tt.count)):At!=null&&(ee=Math.max(ee,0),de=Math.min(de,At.count));const fe=de-ee;if(fe<0||fe===1/0)return;K.setup(z,X,wt,j,Tt);let je,ie=vt;if(Tt!==null&&(je=Q.get(Tt),ie=Xt,ie.setIndex(je)),z.isMesh)X.wireframe===!0?(Lt.setLineWidth(X.wireframeLinewidth*$t()),ie.setMode(F.LINES)):ie.setMode(F.TRIANGLES);else if(z.isLine){let Et=X.linewidth;Et===void 0&&(Et=1),Lt.setLineWidth(Et*$t()),z.isLineSegments?ie.setMode(F.LINES):z.isLineLoop?ie.setMode(F.LINE_LOOP):ie.setMode(F.LINE_STRIP)}else z.isPoints?ie.setMode(F.POINTS):z.isSprite&&ie.setMode(F.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ie.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))ie.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Et=z._multiDrawStarts,kn=z._multiDrawCounts,se=z._multiDrawCount,an=Tt?Q.get(Tt).bytesPerElement:1,Fi=Ct.get(X).currentProgram.getUniforms();for(let Xe=0;Xe<se;Xe++)Fi.setValue(F,"_gl_DrawID",Xe),ie.render(Et[Xe]/an,kn[Xe])}else if(z.isInstancedMesh)ie.renderInstances(ee,fe,z.count);else if(j.isInstancedBufferGeometry){const Et=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,kn=Math.min(j.instanceCount,Et);ie.renderInstances(ee,fe,kn)}else ie.render(ee,fe)};function Bt(E,O,j){E.transparent===!0&&E.side===ze&&E.forceSinglePass===!1?(E.side=Ge,E.needsUpdate=!0,dr(E,O,j),E.side=Zn,E.needsUpdate=!0,dr(E,O,j),E.side=ze):dr(E,O,j)}this.compile=function(E,O,j=null){j===null&&(j=E),p=yt.get(j),p.init(O),v.push(p),j.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),E!==j&&E.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const X=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ot=z.material;if(ot)if(Array.isArray(ot))for(let mt=0;mt<ot.length;mt++){const wt=ot[mt];Bt(wt,j,z),X.add(wt)}else Bt(ot,j,z),X.add(ot)}),v.pop(),p=null,X},this.compileAsync=function(E,O,j=null){const X=this.compile(E,O,j);return new Promise(z=>{function ot(){if(X.forEach(function(mt){Ct.get(mt).currentProgram.isReady()&&X.delete(mt)}),X.size===0){z(E);return}setTimeout(ot,10)}zt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let ge=null;function we(E){ge&&ge(E)}function ul(){xi.stop()}function dl(){xi.start()}const xi=new id;xi.setAnimationLoop(we),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(E){ge=E,G.setAnimationLoop(E),E===null?xi.stop():xi.start()},G.addEventListener("sessionstart",ul),G.addEventListener("sessionend",dl),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(O),O=G.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,O,P),p=yt.get(E,v.length),p.init(O),v.push(p),xt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(xt),at=this.localClippingEnabled,st=it.init(this.clippingPlanes,at),g=bt.get(E,x.length),g.init(),x.push(g),G.enabled===!0&&G.isPresenting===!0){const ot=_.xr.getDepthSensingMesh();ot!==null&&Aa(ot,O,-1/0,_.sortObjects)}Aa(E,O,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(et,nt),jt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,jt&&Pt.addToRenderList(g,E),this.info.render.frame++,st===!0&&it.beginShadows();const j=p.state.shadowsArray;_t.render(j,E,O),st===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=g.opaque,z=g.transmissive;if(p.setupLights(),O.isArrayCamera){const ot=O.cameras;if(z.length>0)for(let mt=0,wt=ot.length;mt<wt;mt++){const Tt=ot[mt];pl(X,z,E,Tt)}jt&&Pt.render(E);for(let mt=0,wt=ot.length;mt<wt;mt++){const Tt=ot[mt];fl(g,E,Tt,Tt.viewport)}}else z.length>0&&pl(X,z,E,O),jt&&Pt.render(E),fl(g,E,O);P!==null&&(D.updateMultisampleRenderTarget(P),D.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(_,E,O),K.resetDefaultState(),M=-1,y=null,v.pop(),v.length>0?(p=v[v.length-1],st===!0&&it.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Aa(E,O,j,X){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){X&&kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(xt);const mt=J.update(E),wt=E.material;wt.visible&&g.push(E,mt,wt,j,kt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const mt=J.update(E),wt=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),kt.copy(E.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),kt.copy(mt.boundingSphere.center)),kt.applyMatrix4(E.matrixWorld).applyMatrix4(xt)),Array.isArray(wt)){const Tt=mt.groups;for(let Ft=0,Gt=Tt.length;Ft<Gt;Ft++){const At=Tt[Ft],ee=wt[At.materialIndex];ee&&ee.visible&&g.push(E,mt,ee,j,kt.z,At)}}else wt.visible&&g.push(E,mt,wt,j,kt.z,null)}}const ot=E.children;for(let mt=0,wt=ot.length;mt<wt;mt++)Aa(ot[mt],O,j,X)}function fl(E,O,j,X){const z=E.opaque,ot=E.transmissive,mt=E.transparent;p.setupLightsView(j),st===!0&&it.setGlobalState(_.clippingPlanes,j),X&&Lt.viewport(S.copy(X)),z.length>0&&ur(z,O,j),ot.length>0&&ur(ot,O,j),mt.length>0&&ur(mt,O,j),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function pl(E,O,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Ui(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?ar:ti,minFilter:qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const ot=p.state.transmissionRenderTarget[X.id],mt=X.viewport||S;ot.setSize(mt.z,mt.w);const wt=_.getRenderTarget();_.setRenderTarget(ot),_.getClearColor(N),U=_.getClearAlpha(),U<1&&_.setClearColor(16777215,.5),_.clear(),jt&&Pt.render(j);const Tt=_.toneMapping;_.toneMapping=_i;const Ft=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),st===!0&&it.setGlobalState(_.clippingPlanes,X),ur(E,j,X),D.updateMultisampleRenderTarget(ot),D.updateRenderTargetMipmap(ot),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let At=0,ee=O.length;At<ee;At++){const de=O[At],fe=de.object,je=de.geometry,ie=de.material,Et=de.group;if(ie.side===ze&&fe.layers.test(X.layers)){const kn=ie.side;ie.side=Ge,ie.needsUpdate=!0,ml(fe,j,X,je,ie,Et),ie.side=kn,ie.needsUpdate=!0,Gt=!0}}Gt===!0&&(D.updateMultisampleRenderTarget(ot),D.updateRenderTargetMipmap(ot))}_.setRenderTarget(wt),_.setClearColor(N,U),Ft!==void 0&&(X.viewport=Ft),_.toneMapping=Tt}function ur(E,O,j){const X=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ot=E.length;z<ot;z++){const mt=E[z],wt=mt.object,Tt=mt.geometry,Ft=X===null?mt.material:X,Gt=mt.group;wt.layers.test(j.layers)&&ml(wt,O,j,Tt,Ft,Gt)}}function ml(E,O,j,X,z,ot){E.onBeforeRender(_,O,j,X,z,ot),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(_,O,j,X,E,ot),z.transparent===!0&&z.side===ze&&z.forceSinglePass===!1?(z.side=Ge,z.needsUpdate=!0,_.renderBufferDirect(j,O,X,z,E,ot),z.side=Zn,z.needsUpdate=!0,_.renderBufferDirect(j,O,X,z,E,ot),z.side=ze):_.renderBufferDirect(j,O,X,z,E,ot),E.onAfterRender(_,O,j,X,z,ot)}function dr(E,O,j){O.isScene!==!0&&(O=Yt);const X=Ct.get(E),z=p.state.lights,ot=p.state.shadowsArray,mt=z.state.version,wt=St.getParameters(E,z.state,ot,O,j),Tt=St.getProgramCacheKey(wt);let Ft=X.programs;X.environment=E.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(E.isMeshStandardMaterial?V:A).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Ft===void 0&&(E.addEventListener("dispose",It),Ft=new Map,X.programs=Ft);let Gt=Ft.get(Tt);if(Gt!==void 0){if(X.currentProgram===Gt&&X.lightsStateVersion===mt)return bl(E,wt),Gt}else wt.uniforms=St.getUniforms(E),E.onBeforeCompile(wt,_),Gt=St.acquireProgram(wt,Tt),Ft.set(Tt,Gt),X.uniforms=wt.uniforms;const At=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(At.clippingPlanes=it.uniform),bl(E,wt),X.needsLights=cf(E),X.lightsStateVersion=mt,X.needsLights&&(At.ambientLightColor.value=z.state.ambient,At.lightProbe.value=z.state.probe,At.directionalLights.value=z.state.directional,At.directionalLightShadows.value=z.state.directionalShadow,At.spotLights.value=z.state.spot,At.spotLightShadows.value=z.state.spotShadow,At.rectAreaLights.value=z.state.rectArea,At.ltc_1.value=z.state.rectAreaLTC1,At.ltc_2.value=z.state.rectAreaLTC2,At.pointLights.value=z.state.point,At.pointLightShadows.value=z.state.pointShadow,At.hemisphereLights.value=z.state.hemi,At.directionalShadowMap.value=z.state.directionalShadowMap,At.directionalShadowMatrix.value=z.state.directionalShadowMatrix,At.spotShadowMap.value=z.state.spotShadowMap,At.spotLightMatrix.value=z.state.spotLightMatrix,At.spotLightMap.value=z.state.spotLightMap,At.pointShadowMap.value=z.state.pointShadowMap,At.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Gt,X.uniformsList=null,Gt}function gl(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=aa.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function bl(E,O){const j=Ct.get(E);j.outputColorSpace=O.outputColorSpace,j.batching=O.batching,j.batchingColor=O.batchingColor,j.instancing=O.instancing,j.instancingColor=O.instancingColor,j.instancingMorph=O.instancingMorph,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function af(E,O,j,X,z){O.isScene!==!0&&(O=Yt),D.resetTextureUnits();const ot=O.fog,mt=X.isMeshStandardMaterial?O.environment:null,wt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ve,Tt=(X.isMeshStandardMaterial?V:A).get(X.envMap||mt),Ft=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Gt=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),At=!!j.morphAttributes.position,ee=!!j.morphAttributes.normal,de=!!j.morphAttributes.color;let fe=_i;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(fe=_.toneMapping);const je=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ie=je!==void 0?je.length:0,Et=Ct.get(X),kn=p.state.lights;if(st===!0&&(at===!0||E!==y)){const Ze=E===y&&X.id===M;it.setState(X,E,Ze)}let se=!1;X.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==kn.state.version||Et.outputColorSpace!==wt||z.isBatchedMesh&&Et.batching===!1||!z.isBatchedMesh&&Et.batching===!0||z.isBatchedMesh&&Et.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Et.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Et.instancing===!1||!z.isInstancedMesh&&Et.instancing===!0||z.isSkinnedMesh&&Et.skinning===!1||!z.isSkinnedMesh&&Et.skinning===!0||z.isInstancedMesh&&Et.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Et.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Et.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Et.instancingMorph===!1&&z.morphTexture!==null||Et.envMap!==Tt||X.fog===!0&&Et.fog!==ot||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==it.numPlanes||Et.numIntersection!==it.numIntersection)||Et.vertexAlphas!==Ft||Et.vertexTangents!==Gt||Et.morphTargets!==At||Et.morphNormals!==ee||Et.morphColors!==de||Et.toneMapping!==fe||Et.morphTargetsCount!==ie)&&(se=!0):(se=!0,Et.__version=X.version);let an=Et.currentProgram;se===!0&&(an=dr(X,O,z));let Fi=!1,Xe=!1,Ts=!1;const pe=an.getUniforms(),vn=Et.uniforms;if(Lt.useProgram(an.program)&&(Fi=!0,Xe=!0,Ts=!0),X.id!==M&&(M=X.id,Xe=!0),Fi||y!==E){Lt.buffers.depth.getReversed()?(tt.copy(E.projectionMatrix),bp(tt),_p(tt),pe.setValue(F,"projectionMatrix",tt)):pe.setValue(F,"projectionMatrix",E.projectionMatrix),pe.setValue(F,"viewMatrix",E.matrixWorldInverse);const ei=pe.map.cameraPosition;ei!==void 0&&ei.setValue(F,Mt.setFromMatrixPosition(E.matrixWorld)),Kt.logarithmicDepthBuffer&&pe.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pe.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Xe=!0,Ts=!0)}if(z.isSkinnedMesh){pe.setOptional(F,z,"bindMatrix"),pe.setOptional(F,z,"bindMatrixInverse");const Ze=z.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),pe.setValue(F,"boneTexture",Ze.boneTexture,D))}z.isBatchedMesh&&(pe.setOptional(F,z,"batchingTexture"),pe.setValue(F,"batchingTexture",z._matricesTexture,D),pe.setOptional(F,z,"batchingIdTexture"),pe.setValue(F,"batchingIdTexture",z._indirectTexture,D),pe.setOptional(F,z,"batchingColorTexture"),z._colorsTexture!==null&&pe.setValue(F,"batchingColorTexture",z._colorsTexture,D));const As=j.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0)&&Dt.update(z,j,an),(Xe||Et.receiveShadow!==z.receiveShadow)&&(Et.receiveShadow=z.receiveShadow,pe.setValue(F,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(vn.envMap.value=Tt,vn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(vn.envMapIntensity.value=O.environmentIntensity),Xe&&(pe.setValue(F,"toneMappingExposure",_.toneMappingExposure),Et.needsLights&&of(vn,Ts),ot&&X.fog===!0&&lt.refreshFogUniforms(vn,ot),lt.refreshMaterialUniforms(vn,X,B,W,p.state.transmissionRenderTarget[E.id]),aa.upload(F,gl(Et),vn,D)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(aa.upload(F,gl(Et),vn,D),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pe.setValue(F,"center",z.center),pe.setValue(F,"modelViewMatrix",z.modelViewMatrix),pe.setValue(F,"normalMatrix",z.normalMatrix),pe.setValue(F,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ze=X.uniformsGroups;for(let ei=0,ni=Ze.length;ei<ni;ei++){const _l=Ze[ei];k.update(_l,an),k.bind(_l,an)}}return an}function of(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function cf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,O,j){Ct.get(E.texture).__webglTexture=O,Ct.get(E.depthTexture).__webglTexture=j;const X=Ct.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=j===void 0,X.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const j=Ct.get(E);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,j=0){P=E,T=O,w=j;let X=!0,z=null,ot=!1,mt=!1;if(E){const Tt=Ct.get(E);if(Tt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(F.FRAMEBUFFER,null),X=!1;else if(Tt.__webglFramebuffer===void 0)D.setupRenderTarget(E);else if(Tt.__hasExternalTextures)D.rebindTextures(E,Ct.get(E.texture).__webglTexture,Ct.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const At=E.depthTexture;if(Tt.__boundDepthTexture!==At){if(At!==null&&Ct.has(At)&&(E.width!==At.image.width||E.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(E)}}const Ft=E.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(mt=!0);const Gt=Ct.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Gt[O])?z=Gt[O][j]:z=Gt[O],ot=!0):E.samples>0&&D.useMultisampledRTT(E)===!1?z=Ct.get(E).__webglMultisampledFramebuffer:Array.isArray(Gt)?z=Gt[j]:z=Gt,S.copy(E.viewport),C.copy(E.scissor),I=E.scissorTest}else S.copy(ft).multiplyScalar(B).floor(),C.copy(Rt).multiplyScalar(B).floor(),I=Ut;if(Lt.bindFramebuffer(F.FRAMEBUFFER,z)&&X&&Lt.drawBuffers(E,z),Lt.viewport(S),Lt.scissor(C),Lt.setScissorTest(I),ot){const Tt=Ct.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,Tt.__webglTexture,j)}else if(mt){const Tt=Ct.get(E.texture),Ft=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Tt.__webglTexture,j||0,Ft)}M=-1},this.readRenderTargetPixels=function(E,O,j,X,z,ot,mt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(wt=wt[mt]),wt){Lt.bindFramebuffer(F.FRAMEBUFFER,wt);try{const Tt=E.texture,Ft=Tt.format,Gt=Tt.type;if(!Kt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-X&&j>=0&&j<=E.height-z&&F.readPixels(O,j,X,z,Ot.convert(Ft),Ot.convert(Gt),ot)}finally{const Tt=P!==null?Ct.get(P).__webglFramebuffer:null;Lt.bindFramebuffer(F.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(E,O,j,X,z,ot,mt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(wt=wt[mt]),wt){const Tt=E.texture,Ft=Tt.format,Gt=Tt.type;if(!Kt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-X&&j>=0&&j<=E.height-z){Lt.bindFramebuffer(F.FRAMEBUFFER,wt);const At=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,At),F.bufferData(F.PIXEL_PACK_BUFFER,ot.byteLength,F.STREAM_READ),F.readPixels(O,j,X,z,Ot.convert(Ft),Ot.convert(Gt),0);const ee=P!==null?Ct.get(P).__webglFramebuffer:null;Lt.bindFramebuffer(F.FRAMEBUFFER,ee);const de=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await gp(F,de,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,At),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ot),F.deleteBuffer(At),F.deleteSync(de),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,O=null,j=0){E.isTexture!==!0&&(Hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);const X=Math.pow(2,-j),z=Math.floor(E.image.width*X),ot=Math.floor(E.image.height*X),mt=O!==null?O.x:0,wt=O!==null?O.y:0;D.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,j,0,0,mt,wt,z,ot),Lt.unbindTexture()},this.copyTextureToTexture=function(E,O,j=null,X=null,z=0){E.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],O=arguments[2],z=arguments[3]||0,j=null);let ot,mt,wt,Tt,Ft,Gt,At,ee,de;const fe=E.isCompressedTexture?E.mipmaps[z]:E.image;j!==null?(ot=j.max.x-j.min.x,mt=j.max.y-j.min.y,wt=j.isBox3?j.max.z-j.min.z:1,Tt=j.min.x,Ft=j.min.y,Gt=j.isBox3?j.min.z:0):(ot=fe.width,mt=fe.height,wt=fe.depth||1,Tt=0,Ft=0,Gt=0),X!==null?(At=X.x,ee=X.y,de=X.z):(At=0,ee=0,de=0);const je=Ot.convert(O.format),ie=Ot.convert(O.type);let Et;O.isData3DTexture?(D.setTexture3D(O,0),Et=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(D.setTexture2DArray(O,0),Et=F.TEXTURE_2D_ARRAY):(D.setTexture2D(O,0),Et=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);const kn=F.getParameter(F.UNPACK_ROW_LENGTH),se=F.getParameter(F.UNPACK_IMAGE_HEIGHT),an=F.getParameter(F.UNPACK_SKIP_PIXELS),Fi=F.getParameter(F.UNPACK_SKIP_ROWS),Xe=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,fe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,fe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Tt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ft),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Gt);const Ts=E.isDataArrayTexture||E.isData3DTexture,pe=O.isDataArrayTexture||O.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const vn=Ct.get(E),As=Ct.get(O),Ze=Ct.get(vn.__renderTarget),ei=Ct.get(As.__renderTarget);Lt.bindFramebuffer(F.READ_FRAMEBUFFER,Ze.__webglFramebuffer),Lt.bindFramebuffer(F.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let ni=0;ni<wt;ni++)Ts&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ct.get(E).__webglTexture,z,Gt+ni),E.isDepthTexture?(pe&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ct.get(O).__webglTexture,z,de+ni),F.blitFramebuffer(Tt,Ft,ot,mt,At,ee,ot,mt,F.DEPTH_BUFFER_BIT,F.NEAREST)):pe?F.copyTexSubImage3D(Et,z,At,ee,de+ni,Tt,Ft,ot,mt):F.copyTexSubImage2D(Et,z,At,ee,de+ni,Tt,Ft,ot,mt);Lt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else pe?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Et,z,At,ee,de,ot,mt,wt,je,ie,fe.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(Et,z,At,ee,de,ot,mt,wt,je,fe.data):F.texSubImage3D(Et,z,At,ee,de,ot,mt,wt,je,ie,fe):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,z,At,ee,ot,mt,je,ie,fe.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,z,At,ee,fe.width,fe.height,je,fe.data):F.texSubImage2D(F.TEXTURE_2D,z,At,ee,ot,mt,je,ie,fe);F.pixelStorei(F.UNPACK_ROW_LENGTH,kn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,se),F.pixelStorei(F.UNPACK_SKIP_PIXELS,an),F.pixelStorei(F.UNPACK_SKIP_ROWS,Fi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xe),z===0&&O.generateMipmaps&&F.generateMipmap(Et),Lt.unbindTexture()},this.copyTextureToTexture3D=function(E,O,j=null,X=null,z=0){return E.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,X=arguments[1]||null,E=arguments[2],O=arguments[3],z=arguments[4]||0),Hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,j,X,z)},this.initRenderTarget=function(E){Ct.get(E).__webglFramebuffer===void 0&&D.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?D.setTextureCube(E,0):E.isData3DTexture?D.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?D.setTexture2DArray(E,0):D.setTexture2D(E,0),Lt.unbindTexture()},this.resetState=function(){T=0,w=0,P=null,Lt.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}class xa{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new dt(t),this.near=e,this.far=n}clone(){return new xa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Wc extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class E_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=hc,this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ue=new L;class jc{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new jc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Mh=new L,yh=new ne,Sh=new ne,R_=new L,wh=new Nt,Dr=new L,eo=new Pn,Th=new Nt,no=new ba;class C_ extends re{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sl,this.bindMatrix=new Nt,this.bindMatrixInverse=new Nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Cn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Dr),this.boundingBox.expandByPoint(Dr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Dr),this.boundingSphere.expandByPoint(Dr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),eo.copy(this.boundingSphere),eo.applyMatrix4(i),t.ray.intersectsSphere(eo)!==!1&&(Th.copy(i).invert(),no.copy(t.ray).applyMatrix4(Th),!(this.boundingBox!==null&&no.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,no)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ne,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Sl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;yh.fromBufferAttribute(i.attributes.skinIndex,t),Sh.fromBufferAttribute(i.attributes.skinWeight,t),Mh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=Sh.getComponent(r);if(a!==0){const o=yh.getComponent(r);wh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(R_.copy(Mh).applyMatrix4(wh),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class hd extends me{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ud extends Ae{constructor(t=null,e=1,n=1,i,r,a,o,c,l=He,h=He,u,f){super(null,a,o,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ah=new Nt,P_=new Nt;class Xc{constructor(t=[],e=[]){this.uuid=bn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Nt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Nt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:P_;Ah.multiplyMatrices(o,e[r]),Ah.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Xc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new ud(e,t,t,rn,mn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new hd),this.bones.push(a),this.boneInverses.push(new Nt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class dc extends ue{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Qi=new Nt,Eh=new Nt,kr=[],Rh=new Cn,L_=new Nt,Ls=new re,Is=new Pn;class dn extends re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,L_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qi),Rh.copy(t.boundingBox).applyMatrix4(Qi),this.boundingBox.union(Rh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qi),Is.copy(t.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(Is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(n),t.ray.intersectsSphere(Is)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Qi),Eh.multiplyMatrices(n,Qi),Ls.matrixWorld=Eh,Ls.raycast(t,kr);for(let a=0,o=kr.length;a<o;a++){const c=kr[a];c.instanceId=r,c.object=this,e.push(c)}kr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new dc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ud(new Float32Array(i*this.count),i,this.count,kc,mn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class dd extends _n{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ha=new L,ua=new L,Ch=new Nt,Ds=new ba,Nr=new Pn,io=new L,Ph=new L;class qc extends me{constructor(t=new _e,e=new dd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ha.fromBufferAttribute(e,i-1),ua.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ha.distanceTo(ua);t.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(i),Nr.radius+=r,t.ray.intersectsSphere(Nr)===!1)return;Ch.copy(i).invert(),Ds.copy(t.ray).applyMatrix4(Ch);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let b=d,g=m-1;b<g;b+=l){const p=h.getX(b),x=h.getX(b+1),v=Ur(this,t,Ds,c,p,x);v&&e.push(v)}if(this.isLineLoop){const b=h.getX(m-1),g=h.getX(d),p=Ur(this,t,Ds,c,b,g);p&&e.push(p)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let b=d,g=m-1;b<g;b+=l){const p=Ur(this,t,Ds,c,b,b+1);p&&e.push(p)}if(this.isLineLoop){const b=Ur(this,t,Ds,c,m-1,d);b&&e.push(b)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ur(s,t,e,n,i,r){const a=s.geometry.attributes.position;if(ha.fromBufferAttribute(a,i),ua.fromBufferAttribute(a,r),e.distanceSqToSegment(ha,ua,io,Ph)>n)return;io.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(io);if(!(c<t.near||c>t.far))return{distance:c,point:Ph.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Lh=new L,Ih=new L;class I_ extends qc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Lh.fromBufferAttribute(e,i),Ih.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Lh.distanceTo(Ih);t.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class D_ extends qc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Yc extends _n{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Dh=new Nt,fc=new ba,Fr=new Pn,Or=new L;class Kc extends me{constructor(t=new _e,e=new Yc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(i),Fr.radius+=r,t.ray.intersectsSphere(Fr)===!1)return;Dh.copy(i).invert(),fc.copy(t.ray).applyMatrix4(Dh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let m=f,b=d;m<b;m++){const g=l.getX(m);Or.fromBufferAttribute(u,g),kh(Or,g,c,i,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=f,b=d;m<b;m++)Or.fromBufferAttribute(u,m),kh(Or,m,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function kh(s,t,e,n,i,r,a){const o=fc.distanceSqToPoint(s);if(o<e){const c=new L;fc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class va extends Ae{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new gt:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,i=[],r=[],a=[],o=new L,c=new Nt;for(let d=0;d<=t;d++){const m=d/t;i[d]=this.getTangentAt(m,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Te(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,m))}a[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Te(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],d*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class $c extends Ln{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new gt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class k_ extends $c{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Jc(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Br=new L,so=new Jc,ro=new Jc,ao=new Jc;class N_ extends Ln{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Br.subVectors(i[0],i[1]).add(i[0]),l=Br);const u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Br.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Br),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),d),b=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);b<1e-4&&(b=1),m<1e-4&&(m=b),g<1e-4&&(g=b),so.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,b,g),ro.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,b,g),ao.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,b,g)}else this.curveType==="catmullrom"&&(so.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),ro.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),ao.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(so.calc(c),ro.calc(c),ao.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Nh(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function U_(s,t){const e=1-s;return e*e*t}function F_(s,t){return 2*(1-s)*s*t}function O_(s,t){return s*s*t}function Ys(s,t,e,n){return U_(s,t)+F_(s,e)+O_(s,n)}function B_(s,t){const e=1-s;return e*e*e*t}function z_(s,t){const e=1-s;return 3*e*e*s*t}function G_(s,t){return 3*(1-s)*s*s*t}function H_(s,t){return s*s*s*t}function Ks(s,t,e,n,i){return B_(s,t)+z_(s,e)+G_(s,n)+H_(s,i)}class fd extends Ln{constructor(t=new gt,e=new gt,n=new gt,i=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new gt){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ks(t,i.x,r.x,a.x,o.x),Ks(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class V_ extends Ln{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ks(t,i.x,r.x,a.x,o.x),Ks(t,i.y,r.y,a.y,o.y),Ks(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class pd extends Ln{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class W_ extends Ln{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class md extends Ln{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ys(t,i.x,r.x,a.x),Ys(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class j_ extends Ln{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ys(t,i.x,r.x,a.x),Ys(t,i.y,r.y,a.y),Ys(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gd extends Ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Nh(o,c.x,l.x,h.x,u.x),Nh(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new gt().fromArray(i))}return this}}var Uh=Object.freeze({__proto__:null,ArcCurve:k_,CatmullRomCurve3:N_,CubicBezierCurve:fd,CubicBezierCurve3:V_,EllipseCurve:$c,LineCurve:pd,LineCurve3:W_,QuadraticBezierCurve:md,QuadraticBezierCurve3:j_,SplineCurve:gd});class X_ extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Uh[i.type]().fromJSON(i))}return this}}class q_ extends X_{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new pd(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new md(this.currentPoint.clone(),new gt(t,e),new gt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new fd(this.currentPoint.clone(),new gt(t,e),new gt(n,i),new gt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new gd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,a,o,c),this}absellipse(t,e,n,i,r,a,o,c){const l=new $c(t,e,n,i,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ma extends _e{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Te(i,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,u=new L,f=new gt,d=new L,m=new L,b=new L;let g=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-g,d.z=p*0,b.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(b.x,b.y,b.z);break;default:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=b.x,d.y+=b.y,d.z+=b.z,d.normalize(),c.push(d.x,d.y,d.z),b.copy(m)}for(let x=0;x<=e;x++){const v=n+x*h*i,_=Math.sin(v),R=Math.cos(v);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*_,u.y=t[T].y,u.z=t[T].x*R,a.push(u.x,u.y,u.z),f.x=x/e,f.y=T/(t.length-1),o.push(f.x,f.y);const w=c[3*T+0]*_,P=c[3*T+1],M=c[3*T+0]*R;l.push(w,P,M)}}for(let x=0;x<e;x++)for(let v=0;v<t.length-1;v++){const _=v+x*t.length,R=_,T=_+t.length,w=_+t.length+1,P=_+1;r.push(R,T,P),r.push(w,P,T)}this.setIndex(r),this.setAttribute("position",new he(a,3)),this.setAttribute("uv",new he(o,2)),this.setAttribute("normal",new he(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ma(t.points,t.segments,t.phiStart,t.phiLength)}}class Qc extends Ma{constructor(t=1,e=1,n=4,i=8){const r=new q_;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Qc(t.radius,t.length,t.capSegments,t.radialSegments)}}class ya extends _e{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new L,h=new gt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(o,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ya(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class gs extends _e{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let m=0;const b=[],g=n/2;let p=0;x(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(f,3)),this.setAttribute("uv",new he(d,2));function x(){const _=new L,R=new L;let T=0;const w=(e-t)/n;for(let P=0;P<=r;P++){const M=[],y=P/r,S=y*(e-t)+t;for(let C=0;C<=i;C++){const I=C/i,N=I*c+o,U=Math.sin(N),H=Math.cos(N);R.x=S*U,R.y=-y*n+g,R.z=S*H,u.push(R.x,R.y,R.z),_.set(U,w,H).normalize(),f.push(_.x,_.y,_.z),d.push(I,1-y),M.push(m++)}b.push(M)}for(let P=0;P<i;P++)for(let M=0;M<r;M++){const y=b[M][P],S=b[M+1][P],C=b[M+1][P+1],I=b[M][P+1];(t>0||M!==0)&&(h.push(y,S,I),T+=3),(e>0||M!==r-1)&&(h.push(S,C,I),T+=3)}l.addGroup(p,T,0),p+=T}function v(_){const R=m,T=new gt,w=new L;let P=0;const M=_===!0?t:e,y=_===!0?1:-1;for(let C=1;C<=i;C++)u.push(0,g*y,0),f.push(0,y,0),d.push(.5,.5),m++;const S=m;for(let C=0;C<=i;C++){const N=C/i*c+o,U=Math.cos(N),H=Math.sin(N);w.x=M*H,w.y=g*y,w.z=M*U,u.push(w.x,w.y,w.z),f.push(0,y,0),T.x=U*.5+.5,T.y=H*.5*y+.5,d.push(T.x,T.y),m++}for(let C=0;C<i;C++){const I=R+C,N=S+C;_===!0?h.push(N,N+1,I):h.push(N+1,N,I),P+=3}l.addGroup(p,P,_===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ir extends gs{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ir(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zc extends _e{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const v=new L,_=new L,R=new L;for(let T=0;T<e.length;T+=3)d(e[T+0],v),d(e[T+1],_),d(e[T+2],R),c(v,_,R,x)}function c(x,v,_,R){const T=R+1,w=[];for(let P=0;P<=T;P++){w[P]=[];const M=x.clone().lerp(_,P/T),y=v.clone().lerp(_,P/T),S=T-P;for(let C=0;C<=S;C++)C===0&&P===T?w[P][C]=M:w[P][C]=M.clone().lerp(y,C/S)}for(let P=0;P<T;P++)for(let M=0;M<2*(T-P)-1;M++){const y=Math.floor(M/2);M%2===0?(f(w[P][y+1]),f(w[P+1][y]),f(w[P][y])):(f(w[P][y+1]),f(w[P+1][y+1]),f(w[P+1][y]))}}function l(x){const v=new L;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(x),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){const x=new L;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];const _=g(x)/2/Math.PI+.5,R=p(x)/Math.PI+.5;a.push(_,1-R)}m(),u()}function u(){for(let x=0;x<a.length;x+=6){const v=a[x+0],_=a[x+2],R=a[x+4],T=Math.max(v,_,R),w=Math.min(v,_,R);T>.9&&w<.1&&(v<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),R<.2&&(a[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,v){const _=x*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function m(){const x=new L,v=new L,_=new L,R=new L,T=new gt,w=new gt,P=new gt;for(let M=0,y=0;M<r.length;M+=9,y+=6){x.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),T.set(a[y+0],a[y+1]),w.set(a[y+2],a[y+3]),P.set(a[y+4],a[y+5]),R.copy(x).add(v).add(_).divideScalar(3);const S=g(R);b(T,y+0,x,S),b(w,y+2,v,S),b(P,y+4,_,S)}}function b(x,v,_,R){R<0&&x.x===1&&(a[v]=x.x-1),_.x===0&&_.z===0&&(a[v]=R/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zc(t.vertices,t.indices,t.radius,t.details)}}class Sa extends Zc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Sa(t.radius,t.detail)}}class or extends _e{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new L,f=new L,d=[],m=[],b=[],g=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let _=0;p===0&&a===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let R=0;R<=e;R++){const T=R/e;u.x=-t*Math.cos(i+T*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(i+T*r)*Math.sin(a+v*o),m.push(u.x,u.y,u.z),f.copy(u).normalize(),b.push(f.x,f.y,f.z),g.push(T+_,1-v),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const v=h[p][x+1],_=h[p][x],R=h[p+1][x],T=h[p+1][x+1];(p!==0||a>0)&&d.push(v,_,T),(p!==n-1||c<Math.PI)&&d.push(_,R,T)}this.setIndex(d),this.setAttribute("position",new he(m,3)),this.setAttribute("normal",new he(b,3)),this.setAttribute("uv",new he(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new or(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class tl extends _e{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new L,u=new L,f=new L;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){const b=m/i*r,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(b),u.y=(t+e*Math.cos(g))*Math.sin(b),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(b),h.y=t*Math.sin(b),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(m/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){const b=(i+1)*d+m-1,g=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,x=(i+1)*d+m;a.push(b,g,x),a.push(g,p,x)}this.setIndex(a),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class el extends _n{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oc,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class In extends el{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Te(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Me extends _n{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oc,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function zr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Y_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function K_(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Fh(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let c=0;c!==t;++c)i[a++]=s[o+c]}return i}function bd(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}class cr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class $_ extends cr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wl,endingEnd:wl}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,a=t+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Tl:r=t,o=2*e-n;break;case Al:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Tl:a=t,c=2*n-e;break;case Al:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(i-e),b=m*m,g=b*m,p=-f*g+2*f*b-f*m,x=(1+f)*g+(-1.5-2*f)*b+(-.5+f)*m+1,v=(-1-d)*g+(1.5+d)*b+.5*m,_=d*g-d*b;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+x*a[l+R]+v*a[c+R]+_*a[u+R];return r}}class J_ extends cr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}}class Q_ extends cr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Dn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zr(e,this.TimeBufferType),this.values=zr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:zr(t.times,Array),values:zr(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Q_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new J_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $_(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case tr:e=this.InterpolantFactoryMethodDiscrete;break;case er:e=this.InterpolantFactoryMethodLinear;break;case Ea:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return er;case this.InterpolantFactoryMethodSmooth:return Ea}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&Y_(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ea,r=t.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{const u=o*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){const b=e[u+m];if(b!==e[f+m]||b!==e[d+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];const u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=er;class ys extends Dn{constructor(t,e,n){super(t,e,n)}}ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=tr;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;class _d extends Dn{}_d.prototype.ValueTypeName="color";class bs extends Dn{}bs.prototype.ValueTypeName="number";class Z_ extends cr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e);let l=t*o;for(let h=l+o;l!==h;l+=4)Qt.slerpFlat(r,0,a,l-o,a,l,c);return r}}class _s extends Dn{InterpolantFactoryMethodLinear(t){return new Z_(this.times,this.values,this.getValueSize(),t)}}_s.prototype.ValueTypeName="quaternion";_s.prototype.InterpolantFactoryMethodSmooth=void 0;class Ss extends Dn{constructor(t,e,n){super(t,e,n)}}Ss.prototype.ValueTypeName="string";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=tr;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends Dn{}xs.prototype.ValueTypeName="vector";class tx{constructor(t="",e=-1,n=[],i=Gf){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=bn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(nx(n[a]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(Dn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=K_(c);c=Fh(c,1,h),l=Fh(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new bs(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){const l=t[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,m,b){if(d.length!==0){const g=[],p=[];bd(d,g,p,m),g.length!==0&&b.push(new u(f,g,p))}},i=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let b=0;b<f[m].morphTargets.length;b++)d[f[m].morphTargets[b]]=-1;for(const b in d){const g=[],p=[];for(let x=0;x!==f[m].morphTargets.length;++x){const v=f[m];g.push(v.time),p.push(v.morphTarget===b?1:0)}i.push(new bs(".morphTargetInfluence["+b+"]",g,p))}c=d.length*a}else{const d=".bones["+e[u].name+"]";n(xs,d+".position",f,"pos",i),n(_s,d+".quaternion",f,"rot",i),n(xs,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ex(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bs;case"vector":case"vector2":case"vector3":case"vector4":return xs;case"color":return _d;case"quaternion":return _s;case"bool":case"boolean":return ys;case"string":return Ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function nx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=ex(s.type);if(s.times===void 0){const e=[],n=[];bd(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const pi={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ix{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}}const sx=new ix;class ws{constructor(t){this.manager=t!==void 0?t:sx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ws.DEFAULT_MATERIAL_NAME="__DEFAULT";const zn={};class rx extends Error{constructor(t,e){super(t),this.response=e}}class xd extends ws{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=pi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(zn[t]!==void 0){zn[t].push({onLoad:e,onProgress:n,onError:i});return}zn[t]=[],zn[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=zn[t],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0;let b=0;const g=new ReadableStream({start(p){x();function x(){u.read().then(({done:v,value:_})=>{if(v)p.close();else{b+=_.byteLength;const R=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:d});for(let T=0,w=h.length;T<w;T++){const P=h[T];P.onProgress&&P.onProgress(R)}p.enqueue(_),x()}},v=>{p.error(v)})}}});return new Response(g)}else throw new rx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{pi.add(t,l);const h=zn[t];delete zn[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=zn[t];if(h===void 0)throw this.manager.itemError(t),l;delete zn[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class ax extends ws{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=pi.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=nr("img");function c(){h(),pi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class ox extends ws{constructor(t){super(t)}load(t,e,n,i){const r=new Ae,a=new ax(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class wa extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class vd extends wa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const oo=new Nt,Oh=new L,Bh=new L;class nl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gc,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Oh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Oh),Bh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bh),e.updateMatrixWorld(),oo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class cx extends nl{constructor(){super(new De(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ps*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class lx extends wa{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new cx}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const zh=new Nt,ks=new L,co=new L;class hx extends nl{constructor(){super(new De(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ks.setFromMatrixPosition(t.matrixWorld),n.position.copy(ks),co.copy(n.position),co.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(co),n.updateMatrixWorld(),i.makeTranslation(-ks.x,-ks.y,-ks.z),zh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zh)}}class ux extends wa{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new hx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class dx extends nl{constructor(){super(new Hc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class da extends wa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new dx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $s{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class fx extends ws{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=pi.get(t);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return pi.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),pi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});pi.add(t,c),r.manager.itemStart(t)}}class px{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Gh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Gh(){return performance.now()}const il="\\[\\]\\.:\\/",mx=new RegExp("["+il+"]","g"),sl="[^"+il+"]",gx="[^"+il.replace("\\.","")+"]",bx=/((?:WC+[\/:])*)/.source.replace("WC",sl),_x=/(WCOD+)?/.source.replace("WCOD",gx),xx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sl),vx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sl),Mx=new RegExp("^"+bx+_x+xx+vx+"$"),yx=["material","materials","bones","map"];class Sx{constructor(t,e,n){const i=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class oe{constructor(t,e,n){this.path=e,this.parsedPath=n||oe.parseTrackName(e),this.node=oe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new oe.Composite(t,e,n):new oe(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(mx,"")}static parseTrackName(t){const e=Mx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);yx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=oe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[i];if(a===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}oe.Composite=Sx;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cc);const wx=46,Hh=52,Tx=75,Ax=260,Ex=18,Rx=150;class Cx{constructor(t){xl(this,"_kbSteer",0);this.steer=0,this.brake=!1,this.tuck=!1,this.lastTuckRelease=-1e9,this.onSwipe=null,this._jumpAt=-1e9,this._keys=new Set,this._touch=null,this._onKeyDown=e=>this._keyDown(e),this._onKeyUp=e=>this._keyUp(e),this._onPointerDown=e=>this._pointerDown(e),this._onPointerMove=e=>this._pointerMove(e),this._onPointerUp=e=>this._pointerUp(e),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),t.addEventListener("pointerdown",this._onPointerDown),window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp),window.addEventListener("pointercancel",this._onPointerUp),this._onBlur=()=>{this._keys.clear(),this._applyKeys()},window.addEventListener("blur",this._onBlur)}dispose(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),window.removeEventListener("pointercancel",this._onPointerUp)}consumeJump(){return performance.now()-this._jumpAt>Rx?!1:(this._jumpAt=-1e9,!0)}clearJump(){this._jumpAt=-1e9}_keyDown(t){const e=t.key.toLowerCase();if(e===" "||t.code==="Space"){t.preventDefault(),t.repeat||(this._jumpAt=performance.now());return}if(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(e)){if(t.preventDefault(),!this._keys.has(e)){const n={w:"up",arrowup:"up",s:"down",arrowdown:"down",a:"left",arrowleft:"left",d:"right",arrowright:"right"}[e];n&&this.onSwipe&&this.onSwipe(n)}this._keys.add(e),this._applyKeys()}}_keyUp(t){const e=t.key.toLowerCase();this._keys.delete(e)&&this._applyKeys()}_applyKeys(){const t=(...r)=>r.some(a=>this._keys.has(a)),e=t("a","arrowleft"),n=t("d","arrowright");this._kbSteer=(n?1:0)-(e?1:0);const i=this.tuck;this.tuck=t("w","arrowup"),this.brake=t("s","arrowdown"),i&&!this.tuck&&(this.lastTuckRelease=performance.now()),this._touch===null&&(this.steer=this._kbSteer)}_pointerDown(t){t.pointerType==="mouse"&&t.button!==0||this._touch||(this._touch={id:t.pointerId,kind:t.pointerType,ax:t.clientX,ay:t.clientY,sx:t.clientX,sy:t.clientY,st:performance.now(),down:performance.now(),far:0,swiped:!1})}_pointerMove(t){const e=this._touch;if(!e||t.pointerId!==e.id)return;const n=t.clientX-e.ax,i=t.clientY-e.ay;e.far=Math.max(e.far,Math.hypot(n,i)),this.steer=Math.max(-1,Math.min(1,n/Tx));const r=this.tuck;this.tuck=i<-Hh,this.brake=i>Hh,r&&!this.tuck&&(this.lastTuckRelease=performance.now());const a=t.clientX-e.sx,o=t.clientY-e.sy,c=performance.now();if(c-e.st<260&&Math.hypot(a,o)>wx){const l=a>0?"right":"left",h=o>0?"down":"up";e.swiped=!0,this.onSwipe&&(Math.min(Math.abs(a),Math.abs(o))>.55*Math.max(Math.abs(a),Math.abs(o))?(this.onSwipe(l),this.onSwipe(h)):this.onSwipe(Math.abs(a)>Math.abs(o)?l:h)),e.sx=t.clientX,e.sy=t.clientY,e.st=c}else c-e.st>=260&&(e.sx=t.clientX,e.sy=t.clientY,e.st=c)}_pointerUp(t){const e=this._touch;if(!e||t.pointerId!==e.id)return;this._touch=null;const n=performance.now();e.kind!=="mouse"&&!e.swiped&&e.far<=Ex&&n-e.down<=Ax&&(this._jumpAt=n),this.tuck&&(this.lastTuckRelease=performance.now()),this.steer=this._kbSteer||0,this.tuck=!1,this.brake=!1,this._applyKeys()}}function Vh(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new _e;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Wh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let b=0;b<a[h].length;++b)d.push(a[h][b][f]);const m=Wh(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Wh(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new ue(a,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){const b=h.getComponent(f,m);o.setComponent(f+u,m,b)}}else a.set(h.array,c);c+=h.count*e}return i!==void 0&&(o.gpuType=i),o}function jh(s,t){if(t===Hf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===lc||t===ju){let e=s.getIndex();if(e===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===lc)for(let a=1;a<=n;a++)i.push(e.getX(0)),i.push(e.getX(a)),i.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(e.getX(a)),i.push(e.getX(a+1)),i.push(e.getX(a+2))):(i.push(e.getX(a+2)),i.push(e.getX(a+1)),i.push(e.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}function Qn(s){let t=s>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Md(){return Math.random()*4294967295>>>0}function Gr(s,t,e){let n=Math.imul(s|0,668265261)^Math.imul(t|0,374761393)^Math.imul(e|0,2654435769);return n=Math.imul(n^n>>>15,2246822507),n^=n>>>13,(n>>>0)/4294967296}const Xh=s=>s*s*(3-2*s);function yd(s,t,e){const n=Math.floor(s),i=Math.floor(t),r=s-n,a=t-i,o=Gr(n,i,e),c=Gr(n+1,i,e),l=Gr(n,i+1,e),h=Gr(n+1,i+1,e),u=Xh(r),f=Xh(a);return(o+(c-o)*u+(l-o)*f+(o-c-l+h)*u*f)*2-1}function Ke(s,t){return yd(s,.5,t)}function Ns(s,t,e,n=3){let i=0,r=.5,a=1,o=0;for(let c=0;c<n;c++)i+=yd(s*a,t*a,e+c*101)*r,o+=r,r*=.5,a*=2.1;return i/o}const pt=(s,t,e)=>Math.min(e,Math.max(t,s)),xe=(s,t,e)=>s+(t-s)*e;function Zt(s,t,e){const n=pt((e-s)/(t-s),0,1);return n*n*(3-2*n)}const lr={vermont:{eventA:12725045,eventB:16111470,skyTop:5214158,skyBottom:15332090,fog:15003386,fogNear:220,fogFar:1e3,snow:15988732,ice:11981544,rock:7239267,trunk:7031342,foliage:5206086,treeMul:1.35,rockMul:.6,roughMul:.75,mogulMul:.9,cliffMul:.55,hemiSky:14478591,hemiGround:10135707,hemiI:.9,sunCol:16773320,sunI:1.8},quebec:{eventA:2381480,eventB:7330280,skyTop:4029632,skyBottom:14478070,fog:14346484,fogNear:200,fogFar:900,snow:15791611,ice:10273504,rock:8877682,trunk:4273189,foliage:2180404,treeMul:1.5,rockMul:.7,roughMul:.85,mogulMul:1.1,cliffMul:.7,hemiSky:13624056,hemiGround:9279912,hemiI:.85,sunCol:16772800,sunI:1.7},colorado:{eventA:14248735,eventB:3522720,skyTop:4162505,skyBottom:15134968,fog:14871798,fogNear:240,fogFar:1100,snow:16054525,ice:11324390,rock:8688806,trunk:5916208,foliage:4944752,treeMul:1,rockMul:1.1,roughMul:1,mogulMul:1,cliffMul:1,hemiSky:13625087,hemiGround:10261636,hemiI:.85,sunCol:16773328,sunI:1.9},utah:{eventA:11019822,eventB:15771712,skyTop:3111624,skyBottom:15003898,fog:15134970,fogNear:230,fogFar:1050,snow:16186110,ice:12113646,rock:10639932,trunk:14077888,foliage:7831626,treeMul:.85,rockMul:1.2,roughMul:1.15,mogulMul:.8,cliffMul:1.1,hemiSky:13953535,hemiGround:9345451,hemiI:.85,sunCol:16774360,sunI:2},bc:{eventA:2064248,eventB:10479824,skyTop:5603496,skyBottom:13951208,fog:13688294,fogNear:150,fogFar:720,snow:15660024,ice:10798298,rock:5398118,trunk:4337951,foliage:1785904,treeMul:1.6,rockMul:.9,roughMul:1.05,mogulMul:1,cliffMul:1.3,hemiSky:12768482,hemiGround:8556182,hemiI:.95,sunCol:15919832,sunI:1.35},chile:{eventA:12595240,eventB:16098851,skyTop:2780866,skyBottom:15397624,fog:15266038,fogNear:280,fogFar:1300,snow:16120060,ice:12243686,rock:10121030,trunk:6509114,foliage:5333308,treeMul:.06,rockMul:2.2,roughMul:1.35,mogulMul:.7,cliffMul:1.5,hemiSky:14215418,hemiGround:11049600,hemiI:.9,sunCol:16774880,sunI:2.1},nz:{eventA:1019807,eventB:12905550,skyTop:3504568,skyBottom:14871794,fog:14740208,fogNear:260,fogFar:1200,snow:15922938,ice:11586784,rock:9341820,trunk:8679756,foliage:9997396,treeMul:.1,rockMul:1.9,roughMul:1.25,mogulMul:1.15,cliffMul:1.35,hemiSky:13821170,hemiGround:10524798,hemiI:.9,sunCol:16773844,sunI:1.95},swiss:{eventA:13639722,eventB:16054783,skyTop:2449576,skyBottom:14674678,fog:14543348,fogNear:240,fogFar:1150,snow:16185853,ice:12376304,rock:9673382,trunk:5193776,foliage:3038280,treeMul:.7,rockMul:1.3,roughMul:1.2,mogulMul:.95,cliffMul:1.7,hemiSky:13690106,hemiGround:9147813,hemiI:.85,sunCol:16773840,sunI:2},japan:{eventA:13976480,eventB:6809849,skyTop:1315384,skyBottom:5918350,fog:4866674,fogNear:140,fogFar:620,snow:14672626,ice:10134732,rock:4672355,trunk:14209216,foliage:3824725,treeMul:1.45,rockMul:.6,roughMul:.9,mogulMul:.75,cliffMul:.8,hemiSky:8025264,hemiGround:3947094,hemiI:.75,sunCol:12372223,sunI:1}};for(const[s,t]of Object.entries(lr))t.key=s;class rl extends ws{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new kx(e)}),this.register(function(e){return new Nx(e)}),this.register(function(e){return new Wx(e)}),this.register(function(e){return new jx(e)}),this.register(function(e){return new Xx(e)}),this.register(function(e){return new Fx(e)}),this.register(function(e){return new Ox(e)}),this.register(function(e){return new Bx(e)}),this.register(function(e){return new zx(e)}),this.register(function(e){return new Dx(e)}),this.register(function(e){return new Gx(e)}),this.register(function(e){return new Ux(e)}),this.register(function(e){return new Vx(e)}),this.register(function(e){return new Hx(e)}),this.register(function(e){return new Lx(e)}),this.register(function(e){return new qx(e)}),this.register(function(e){return new Yx(e)})}load(t,e,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=$s.extractUrlBase(t);a=$s.resolveURL(l,this.path)}else a=$s.extractUrlBase(t);this.manager.itemStart(t);const o=function(l){i?i(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new xd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,a,function(h){e(h),r.manager.itemEnd(t)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Sd){try{a[qt.KHR_BINARY_GLTF]=new Kx(t)}catch(u){i&&i(u);return}r=JSON.parse(a[qt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new cv(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case qt.KHR_MATERIALS_UNLIT:a[u]=new Ix;break;case qt.KHR_DRACO_MESH_COMPRESSION:a[u]=new $x(r,this.dracoLoader);break;case qt.KHR_TEXTURE_TRANSFORM:a[u]=new Jx;break;case qt.KHR_MESH_QUANTIZATION:a[u]=new Qx;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function Px(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const qt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Lx{constructor(t){this.parser=t,this.name=qt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const h=new dt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ve);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new da(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ux(h),l.distance=u;break;case"spot":l=new lx(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,jn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(e.cache,o,c)})}}class Ix{constructor(){this.name=qt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ie}extendParams(t,e,n){const i=[];t.color=new dt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],Ve),t.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,ye))}return Promise.all(i)}}class Dx{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class kx{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new gt(o,o)}return Promise.all(r)}}class Nx{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Ux{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Fx{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new dt(0,0,0),e.sheenRoughness=0,e.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],Ve)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,ye)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Ox{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Bx{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return e.attenuationColor=new dt().setRGB(o[0],o[1],o[2],Ve),Promise.all(r)}}class zx{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Gx{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return e.specularColor=new dt().setRGB(o[0],o[1],o[2],Ve),a.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,ye)),Promise.all(r)}}class Hx{constructor(t){this.parser=t,this.name=qt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Vx{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Wx{constructor(t){this.parser=t,this.name=qt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,a)}}class jx{constructor(t){this.parser=t,this.name=qt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Xx{constructor(t){this.parser=t,this.name=qt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class qx{constructor(t){this.name=qt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class Yx{constructor(t){this.name=qt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==nn.TRIANGLES&&l.mode!==nn.TRIANGLE_STRIP&&l.mode!==nn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(const m of u){const b=new Nt,g=new L,p=new Qt,x=new L(1,1,1),v=new dn(m.geometry,m.material,f);for(let _=0;_<f;_++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&x.fromBufferAttribute(c.SCALE,_),v.setMatrixAt(_,b.compose(g,p,x));for(const _ in c)if(_==="_COLOR_0"){const R=c[_];v.instanceColor=new dc(R.array,R.itemSize,R.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,c[_]);me.prototype.copy.call(v,m),this.parser.assignFinalMaterial(v),d.push(v)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const Sd="glTF",Us=12,qh={JSON:1313821514,BIN:5130562};class Kx{constructor(t){this.name=qt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Us),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Sd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Us,r=new DataView(t,Us);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===qh.JSON){const l=new Uint8Array(t,Us+a,o);this.content=n.decode(l)}else if(c===qh.BIN){const l=Us+a;this.body=t.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class $x{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=pc[h]||h.toLowerCase();o[u]=a[h]}for(const h in t.attributes){const u=pc[h]||h.toLowerCase();if(a[h]!==void 0){const f=n.accessors[t.attributes[h]],d=os[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const m in d.attributes){const b=d.attributes[m],g=c[m];g!==void 0&&(b.normalized=g)}u(d)},o,l,Ve,f)})})}}class Jx{constructor(){this.name=qt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Qx{constructor(){this.name=qt.KHR_MESH_QUANTIZATION}}class wd extends cr{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let a=0;a!==i;a++)e[a]=n[r+a];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-e,u=(n-e)/h,f=u*u,d=f*u,m=t*l,b=m-l,g=-2*d+3*f,p=d-f,x=1-g,v=p-f+u;for(let _=0;_!==o;_++){const R=a[b+_+o],T=a[b+_+c]*h,w=a[m+_+o],P=a[m+_]*h;r[_]=x*R+v*T+g*w+p*P}return r}}const Zx=new Qt;class tv extends wd{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return Zx.fromArray(r).normalize().toArray(r),r}}const nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},os={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Yh={9728:He,9729:Je,9984:Nu,9985:ta,9986:Gs,9987:qn},Kh={33071:fi,33648:ca,10497:ki},lo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},li={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ev={CUBICSPLINE:void 0,LINEAR:er,STEP:tr},ho={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new el({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Zn})),s.DefaultMaterial}function Ai(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function jn(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function iv(s,t,e){let n=!1,i=!1,r=!1;for(let l=0,h=t.length;l<h;l++){const u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,h=t.length;l<h;l++){const u=t[l];if(n){const f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;a.push(f)}if(i){const f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function sv(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function rv(s){let t;const e=s.extensions&&s.extensions[qt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+uo(e.attributes):t=s.indices+":"+uo(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+uo(s.targets[n]);return t}function uo(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function mc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function av(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ov=new Nt;class cv{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Px,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new ox(this.options.manager):this.textureLoader=new fx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new xd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ai(r,o,i),jn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const a=e[i].joints;for(let o=0,c=a.length;o<c;o++)t[a[o]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const a=t[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[qt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load($s.resolveURL(e.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const a=lo[i.type],o=os[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new ue(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=lo[i.type],l=os[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let b,g;if(d&&d!==u){const p=Math.floor(f/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=e.cache.get(x);v||(b=new l(o,p*d,i.count*d/h),v=new E_(b,d/h),e.cache.add(x,v)),g=new jc(v,c,f%d/h,m)}else o===null?b=new l(i.count*c):b=new l(o,f,i.count*c),g=new ue(b,c,m);if(i.sparse!==void 0){const p=lo.SCALAR,x=os[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,R=new x(a[1],v,i.sparse.count*p),T=new l(a[2],_,i.sparse.count*c);o!==null&&(g=new ue(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let w=0,P=R.length;w<P;w++){const M=R[w];if(g.setX(M,T[w*c]),c>=2&&g.setY(M,T[w*c+1]),c>=3&&g.setZ(M,T[w*c+2]),c>=4&&g.setW(M,T[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,a=e.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(t,r,o)}loadTextureImage(t,e,n){const i=this,r=this.json,a=r.textures[t],o=r.images[e],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return h.magFilter=Yh[f.magFilter]||Je,h.minFilter=Yh[f.minFilter]||qn,h.wrapS=Kh[f.wrapS]||ki,h.wrapT=Kh[f.wrapT]||ki,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==He&&h.minFilter!==Je,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const a=i.images[t],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let m=f;e.isImageBitmapLoader===!0&&(m=function(b){const g=new Ae(b);g.needsUpdate=!0,f(g)}),e.load($s.resolveURL(u,r.path),m,void 0,d)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),jn(u,a),u.userData.mimeType=a.mimeType||av(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[qt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[qt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[qt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),t[e]=a,a})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Yc,_n.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(t.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new dd,_n.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return el}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let a;const o={},c=r.extensions||{},l=[];if(c[qt.KHR_MATERIALS_UNLIT]){const u=i[qt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,e))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new dt(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Ve),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(o,"map",u.baseColorTexture,ye)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,o)})))}r.doubleSided===!0&&(o.side=ze);const h=r.alphaMode||ho.OPAQUE;if(h===ho.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ho.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ie&&(l.push(e.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new gt(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ie&&(l.push(e.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ie){const u=r.emissiveFactor;o.emissive=new dt().setRGB(u[0],u[1],u[2],Ve)}return r.emissiveTexture!==void 0&&a!==Ie&&l.push(e.assignTexture(o,"emissiveMap",r.emissiveTexture,ye)),Promise.all(l).then(function(){const u=new a(o);return r.name&&(u.name=r.name),jn(u,r),e.associations.set(u,{materials:t}),r.extensions&&Ai(i,u,r),u})}createUniqueName(t){const e=oe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[qt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(c){return $h(c,o,e)})}const a=[];for(let o=0,c=t.length;o<c;o++){const l=t[o],h=rv(l),u=i[h];if(u)a.push(u.promise);else{let f;l.extensions&&l.extensions[qt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=$h(new _e,l,e),i[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?nv(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,m=h.length;d<m;d++){const b=h[d],g=a[d];let p;const x=l[d];if(g.mode===nn.TRIANGLES||g.mode===nn.TRIANGLE_STRIP||g.mode===nn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new C_(b,x):new re(b,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===nn.TRIANGLE_STRIP?p.geometry=jh(p.geometry,ju):g.mode===nn.TRIANGLE_FAN&&(p.geometry=jh(p.geometry,lc));else if(g.mode===nn.LINES)p=new I_(b,x);else if(g.mode===nn.LINE_STRIP)p=new qc(b,x);else if(g.mode===nn.LINE_LOOP)p=new D_(b,x);else if(g.mode===nn.POINTS)p=new Kc(b,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&sv(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),jn(p,r),g.extensions&&Ai(i,p,g),e.assignFinalMaterial(p),u.push(p)}for(let d=0,m=u.length;d<m;d++)e.associations.set(u[d],{meshes:t,primitives:d});if(u.length===1)return r.extensions&&Ai(i,u[0],r),u[0];const f=new Se;r.extensions&&Ai(i,f,r),e.associations.set(f,{meshes:t});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new De(zc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Hc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),jn(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const f=new Nt;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Xc(o,c)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,a=[],o=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],m=i.samplers[d.sampler],b=d.target,g=b.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(m),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],m=u[2],b=u[3],g=u[4],p=[];for(let x=0,v=f.length;x<v;x++){const _=f[x],R=d[x],T=m[x],w=b[x],P=g[x];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const M=n._createAnimationTracks(_,R,T,w,P);if(M)for(let y=0;y<M.length;y++)p.push(M[y])}return new tx(r,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,ov)});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){o.push(l)}),this.nodeCache[t]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new hd:l.length>1?h=new Se:l.length===1?h=l[0]:h=new me,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),jn(h,r),r.extensions&&Ai(n,h,r),r.matrix!==void 0){const u=new Nt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new Se;n.name&&(r.name=i.createUniqueName(n.name)),jn(r,n),n.extensions&&Ai(e,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof _n||f instanceof Ae)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){const a=[],o=t.name?t.name:t.uuid,c=[];li[r.path]===li.weights?t.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(li[r.path]){case li.weights:l=bs;break;case li.rotation:l=_s;break;case li.position:case li.scale:l=xs;break;default:switch(n.itemSize){case 1:l=bs;break;case 2:case 3:default:l=xs;break}break}const h=i.interpolation!==void 0?ev[i.interpolation]:er,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const m=new l(c[f]+"."+li[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=mc(e.constructor),i=new Float32Array(e.length);for(let r=0,a=e.length;r<a;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof _s?tv:wd;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function lv(s,t,e){const n=t.attributes,i=new Cn;if(n.POSITION!==void 0){const o=e.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){const h=mc(os[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const o=new L,c=new L;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const f=e.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){const b=mc(os[f.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Pn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function $h(s,t,e){const n=t.attributes,i=[];function r(a,o){return e.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=pc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(t.indices!==void 0&&!s.index){const a=e.getDependency("accessor",t.indices).then(function(o){s.setIndex(o)});i.push(a)}return Jt.workingColorSpace!==Ve&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Jt.workingColorSpace}" not supported.`),jn(s,t),lv(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?iv(s,t.targets,e):s})}var al=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(e)?t:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),v=0;v<p.length;++v){var _=p.charCodeAt(v);x[v]=_>96?_-97:_>64?_-39:_+4}for(var R=0,v=0;v<p.length;++v)x[R++]=x[v]<60?n[x[v]]:(x[v]-60)*64+x[++v];return x.buffer.slice(0,R)}function c(p,x,v,_,R,T){var w=r.exports.sbrk,P=v+3&-4,M=w(P*_),y=w(R.length),S=new Uint8Array(r.exports.memory.buffer);S.set(R,y);var C=p(M,v,_,y,R.length);if(C==0&&T&&T(M,P,_),x.set(S.subarray(M,M+v*_)),w(M-w(0)),C!=0)throw new Error("Malformed buffer data: "+C)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(v){var _=v.data;x.pending-=_.count,x.requests[_.id][_.action](_.value),delete x.requests[_.id]},x}function m(p){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+g.toString(),v=new Blob([x],{type:"text/javascript"}),_=URL.createObjectURL(v),R=0;R<p;++R)u[R]=d(_);URL.revokeObjectURL(_)}function b(p,x,v,_,R){for(var T=u[0],w=1;w<u.length;++w)u[w].pending<T.pending&&(T=u[w]);return new Promise(function(P,M){var y=new Uint8Array(v),S=f++;T.pending+=p,T.requests[S]={resolve:P,reject:M},T.object.postMessage({id:S,count:p,size:x,source:y,mode:_,filter:R},[y.buffer])})}function g(p){a.then(function(){var x=p.data;try{var v=new Uint8Array(x.count*x.size);c(r.exports[x.mode],v,x.count,x.size,x.source,r.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:v},[v.buffer])}catch(_){self.postMessage({id:x.id,count:x.count,action:"reject",value:_})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,x,v,_,R){c(r.exports.meshopt_decodeVertexBuffer,p,x,v,_,r.exports[l[R]])},decodeIndexBuffer:function(p,x,v,_){c(r.exports.meshopt_decodeIndexBuffer,p,x,v,_)},decodeIndexSequence:function(p,x,v,_){c(r.exports.meshopt_decodeIndexSequence,p,x,v,_)},decodeGltfBuffer:function(p,x,v,_,R,T){c(r.exports[h[R]],p,x,v,_,r.exports[l[T]])},decodeGltfBufferAsync:function(p,x,v,_,R){return u.length>0?b(p,x,v,h[_],l[R]):a.then(function(){var T=new Uint8Array(p*x);return c(r.exports[h[_]],T,p,x,v,r.exports[l[R]]),T})}}})();const hv={},uv=(hv?.VITE_MODEL_EXT||"glb").replace(/^\./,""),ol=s=>`models/${s}.${uv}`;let gc=null;async function dv(){if(gc)return;const s=new rl;s.setMeshoptDecoder(al),gc=(await s.loadAsync(ol("props"))).scene}const Td=new Set(["log_small","log_hollow"]);function Ad(s,t){if(t&&Td.has(t)){const n=new dt(s.trunk??5916208);return{structure:n.clone().multiplyScalar(.9),secondary:n.clone().lerp(new dt(13219733),.4),panel:new dt(13217923),trim:new dt(16054525)}}const e=new dt(11187391).lerp(new dt(s.snow),.25);return{structure:new dt(3028290).lerp(new dt(s.fog),.12),secondary:e,panel:new dt(s.eventA??14042415),trim:new dt(s.eventB??16111470)}}const Jh=new Map;function Qh(s,t,e){const n=`${e}:${s}`;let i=Jh.get(n);if(!i){const r=t[s]??new dt(8947848);i=s==="trim"?new Me({color:r,emissive:r.clone().multiplyScalar(.35)}):new Me({color:r}),Jh.set(n,i)}return i}function Xn(s,t,e=1){const n=gc.getObjectByName(s),i=Ad(t,s),r=`${Td.has(s)?"wood":"evt"}:${t.snow}:${t.eventA}`,a=n.clone();a.traverse(c=>{c.isMesh&&(Array.isArray(c.material)?c.material=c.material.map(l=>Qh(l.name,i,r)):c.material=Qh(c.material.name,i,r),c.castShadow=!0)});const o=new Se;return o.add(a),o.scale.setScalar(e),o}const Ws=6.5/17,Mn=.15,yn=.185,bc=28.7,oa=s=>8.58-.36*(zc.clamp(s,8,28)-8),_c=1.45,Fs={lipDz:_c,lipDrop:(oa(bc-_c/yn)-1.4)*Mn,halfW:50*Ws,blend:2.4},Os=.052,Hr=.036,Vr=.032,fo=(s,t,e)=>{const n=document.createElement("canvas");n.width=s,n.height=t;const i=n.getContext("2d");e(i,s,t);const r=new va(n);return r.colorSpace=ye,r};class Ed{constructor(t){this.terrain=t,this.group=new Se,this.openT=-1,this.phase="idle";const e=new Me({color:2304051}),n=t.gateLanes,i=(n[0].x+n[n.length-1].x)/2,r=n[0].z,a=t.theme,o=Ad(a);this.cx=i,this.z=r;const c=100*Ws,l=r-_c,h=l+bc*yn,u=t.heightAt(i,r)-oa((h-r)/yn)*Mn,f=Xn("pavilion",a);f.scale.set(Ws,Mn,yn),f.position.set(i,u,h),f.rotation.y=Math.PI,this.group.add(f),this.pav=f,this.hideZ=l-1.5;const d=c/2;t.surface=(R,T)=>{if(Math.abs(R-i)>d)return-1/0;const w=(h-T)/yn;return w<8||w>bc?-1/0:u+oa(w)*Mn},this.screens=new Se,this.accA="#"+new dt(a.eventA??14042415).getHexString(),this.accB="#"+new dt(a.eventB??16111470).getHexString(),this.tickerTex=null,this.tickerMat=new Ie({color:16777215});const m=new re(new An(15,1.84),this.tickerMat),b=Math.atan(5.8*yn/(10.4*Mn));m.rotation.order="YXZ",m.rotation.set(b,Math.PI,0),m.position.set(i-.3*Ws,u+33.6*Mn-Math.sin(b)*.09,h-20.3*yn-Math.cos(b)*.09),this.screens.add(m),this.sideSignMats=[];const g=Math.atan(4.8*yn/(11.1*Mn));for(const R of[-1,1]){const T=new Ie({map:fo(512,172,(P,M,y)=>{P.fillStyle="#0a0e16",P.fillRect(0,0,M,y),P.strokeStyle=this.accA,P.lineWidth=10,P.strokeRect(8,8,M-16,y-16),P.font="bold 108px sans-serif",P.textAlign="center",P.textBaseline="middle",P.fillStyle=this.accB,P.fillText("START",M/2,y/2+6)})}),w=new re(new An(4.6,1.55),T);w.rotation.order="YXZ",w.rotation.set(g,Math.PI,0),w.position.set(i+R*36.5*Ws,u+33.45*Mn-Math.sin(g)*.09,h-20.8*yn-Math.cos(g)*.09),this.screens.add(w),this.sideSignMats.push(T)}this.group.add(this.screens),this.smokers=[],this.pyroPorts=[];const p=u+60.6*Mn-.8;this.trussY=p+1.6;for(const R of[-.36,-.12,.12,.36])this.pyroPorts.push(new L(i+R*c,p,l+.4));for(const R of[-1,1]){const T=i+R*(c/2+.9),w=new re(new Qe(.9,.65,.9),e);w.position.set(T,t.heightAt(T,r-1)+.35,r-1),this.smokers.push(w.position.clone()),this.group.add(w)}this.wands=[],this.laneLightMats=[];const x=r-.45-3.1*Vr,v=u+oa((h-x)/yn)*Mn,_=new Me({color:o.trim,emissive:o.trim.clone().multiplyScalar(.35)});this.laneScreens=[];for(const R of n){const T=R.x+3.1*Os,w=Xn("start_gate",a);w.scale.set(Os,Hr,Vr),w.position.set(T,v-.12,x);const P=this.laneScreens.length+1,M=new Ie({color:16777215});for(const I of[-35.95,29.65]){const N=new re(new An(11*Os,25*Hr),M);N.position.set(T+I*Os,v-.12+38.7*Hr,x+4.2*Vr+.035),this.group.add(N)}this.laneScreens.push({mat:M,no:P,name:null});const y=new Se;y.position.set(11.2,43.4,3.6);const S=new re(new Qe(28,2,2),_);S.position.x=-14,y.add(S),w.add(y),this.wands.push(y),this.group.add(w);const C=new Ie({color:14042415});this.laneLightMats.push(C);for(const I of[-33.4,29.1]){const N=new re(new or(.085,8,6),C);N.position.set(T+I*Os,v-.12+69*Hr,x+9*Vr),this.group.add(N)}}this.ledMat=new Ie({color:3718648});for(const R of[-2,-3.2]){const T=new re(new Qe(c-3,.16,.14),this.ledMat);T.position.set(i,t.heightAt(i,r+R)+.15,r+R),this.group.add(T)}this.screenMat=new Ie({color:860723}),this.setRoster([]),this.group.traverse(R=>{R.isMesh&&(R.castShadow=!0)})}setRoster(t){const e=t.filter(Boolean),n="RACE STARTING  •  "+(e.length?e.join("  •  ")+"  •  ":"");this.tickerTex?.dispose(),this.tickerTex=fo(2048,256,(i,r,a)=>{i.fillStyle="#0a0e16",i.fillRect(0,0,r,a);for(let u=0;u<r;u+=32)for(const f of[0,a-26])i.fillStyle=u/32%2?"#e8edf4":"#12161e",i.fillRect(u,f,32,26);i.textBaseline="middle",i.fillStyle=this.accB;let o=130,c=0,l=1,h=1;for(;o>=56&&(i.font=`bold ${o}px sans-serif`,c=i.measureText(n).width,l=Math.max(1,Math.round(r/c)),h=r/(l*c),!(h>=.85&&h<=1.25));o-=8);i.setTransform(h,0,0,1,0,0);for(let u=0;u<l;u++)i.fillText(n,u*c,a/2+8)}),this.tickerTex.wrapS=ki,this.tickerMat.map=this.tickerTex,this.tickerMat.needsUpdate=!0;for(const[i,r]of this.laneScreens.entries()){const a=t[i]??null;r.mat.map&&r.name===a||(r.name=a,r.mat.map?.dispose(),r.mat.map=fo(128,256,(o,c,l)=>{if(o.fillStyle="#0a0e16",o.fillRect(0,0,c,l),o.strokeStyle=this.accA,o.lineWidth=6,o.strokeRect(5,5,c-10,l-10),o.textAlign="center",o.fillStyle=this.accB,o.font="bold 110px sans-serif",o.fillText(String(r.no),c/2,a?128:150),a){o.fillStyle="#e8edf4";let h=30;for(o.font=`bold ${h}px sans-serif`;h>14&&o.measureText(a).width>c-18;)h-=2,o.font=`bold ${h}px sans-serif`;o.fillText(a,c/2,200)}}),r.mat.needsUpdate=!0)}}setPhase(t){this.phase=t;const e=t==="go"?4120683:t==="set"?16098851:14042415;for(const n of this.laneLightMats)n.color.setHex(e);t==="go"&&this.openT<0&&(this.openT=0)}update(t,e,n,i,r){if(r!==void 0){const c=r<this.hideZ;this.pav.visible=c,this.screens.visible=c}this.tickerTex&&(this.tickerTex.offset.x+=t*.045);const a=.66+.34*Math.sin(e*(this.phase==="go"?11:2.6));for(const c of this.sideSignMats)c.color.setScalar(a);const o=.5+.5*Math.sin(e*(this.phase==="go"?9:2.1));if(this.ledMat.color.setHSL(.55,.9,.3+o*.35),this.screenMat.color.setHSL(.58,.75,.1+.09*(.5+.5*Math.sin(e*1.3))),n&&this.openT<0&&Math.random()<t*1.2){const c=this.smokers[Math.floor(Math.random()*this.smokers.length)];n.spawn(c.x,c.y+.3,c.z,(Math.random()-.5)*.8,.7+Math.random()*.5,.7,2.6,2.4)}if(this.openT>=0){const c=this.openT;this.openT+=t;const l=Math.min(1,this.openT/.55),h=1-Math.pow(1-l,3);for(const u of this.wands)u.rotation.z=h*1.45;if(i&&this.openT<1.7){for(const u of this.pyroPorts)i.burst(u,{x:0,z:0},{count:5,speed:1.5,up:12+Math.random()*6,spread:Math.PI,size:1.5,life:1.1});if(Math.floor(c*5)!==Math.floor(this.openT*5)){const u=this.cx+(Math.random()-.5)*16;i.burst({x:u,y:this.trussY+2.5,z:this.z},{x:0,z:0},{count:22,speed:7,up:9,spread:Math.PI,size:1.2,life:.9})}}if(n&&this.openT<2.6){for(const[u,f]of this.smokers.entries())if(Math.random()<t*14){const d=u===0?1:-1;n.spawn(f.x,f.y+.3,f.z,d*(2.2+Math.random()*1.6),.8,1.4,2.6+Math.random()*1.4,2)}}}}}const sr=[{id:"race",name:"Downhill Race",short:"RACE",p:.2,scored:"time",length:1800,tag:"First to the line. The full mountain."},{id:"combined",name:"Combined",short:"COMBINED",p:.2,scored:"both",length:1800,tag:"Race time plus style points — both count."},{id:"glade",name:"Glade Sprint",short:"GLADE",p:.2,scored:"time",length:950,solo:!0,tag:"Short and fast through the trees. Solo runs, times posted at the end."},{id:"bigair",name:"Big Air",short:"BIG AIR",p:.2,scored:"style",length:420,solo:!0,tag:"One kicker. Judged on style alone, scores posted at the end."},{id:"halfpipe",name:"Halfpipe",short:"PIPE",p:.2,scored:"style",length:575,solo:!0,tag:"Five or six hits, all style. Scores posted at the end."}];function Rd(s){return sr.find(t=>t.id===s)??null}function fv(s=Math.random()){let t=0;for(const e of sr)if(t+=e.p,s<t)return e;return sr[0]}function pv(s){const t=s.map((n,i)=>({t:n,i})).sort((n,i)=>n.t-i.t),e=new Array(s.length).fill(0);return t.forEach((n,i)=>{const r=Math.max(1,6-(i+1))*1e3,a=t[i+1],o=a&&i<4?Math.max(0,a.t-n.t):0;e[n.i]=r+Math.min(999,Math.round(o*500))}),e}const mv={bigair:260,halfpipe:420};function xc(s){const t=Math.floor(s/60),e=s-t*60;return`${t}:${e.toFixed(2).padStart(5,"0")}`}function gv(s,t,e){if(s<=0)return 0;const n=.35+.65*Math.min(1,Math.max(0,e));return Math.max(0,Math.round(s*n*(1+.12*t)-(t<0?10:0)))}function bv(s,{playerPos:t,playerStyle:e,playerTime:n,bots:i,rng:r}){const a=s.scored,o=i.map(m=>{const b=t-m.rank;if(m.time!=null)return m.time;const g=1.4+r()*1.2;return Math.max(5,n-b*g+(r()-.5)*.6*g)});if(a!=="both"){const m=i.map((p,x)=>({rank:p.rank,i:x})).sort((p,x)=>p.rank-x.rank);let b=n;for(const p of m.filter(x=>x.rank>t))o[p.i]=Math.max(o[p.i],b+.12),b=o[p.i];let g=n;for(const p of m.filter(x=>x.rank<t).reverse())o[p.i]=Math.max(5,Math.min(o[p.i],g-.12)),g=o[p.i]}const c=a==="both"?pv([n,...o]):[n,...o].map(()=>0),l=c[0],h=a==="style"?e:a==="both"?l+e:l,u=Math.max(35,.1*h),f=mv[s.id]??0,d=i.map((m,b)=>{const g=t-m.rank,p=o[b],x=c[b+1];let v=0;if(e>0&&a==="both")v=Math.max(0,Math.round(e*(1+.1*g)+(r()-.5)*.16*e));else if(e>0&&a==="style"){const R=(r()-.5)*.5*u;v=Math.max(0,Math.round(h+g*u+R))}else a==="style"&&g>0&&f&&(v=Math.round(g*f+(r()-.5)*.5*f));const _=a==="style"?v:a==="both"?x+v:x;return{rank:m.rank,time:p,timePts:x,style:v,total:_}});if(a==="both"){const m=Math.max(20,Math.round(.03*h)),b=[...d].sort((v,_)=>v.rank-_.rank),g=b.filter(v=>v.rank>t);for(let v=g.length-2;v>=0;v--){const _=g[v+1].total+m;g[v].total<_&&(g[v].style=_-g[v].timePts,g[v].total=_)}let p=h;for(const v of g)v.total>p-m&&(v.style=Math.max(0,p-m-v.timePts),v.total=v.timePts+v.style),p=v.total;let x=h;for(const v of b.filter(_=>_.rank<t).reverse())v.total<x+m&&(v.style=x+m-v.timePts,v.total=v.timePts+v.style),x=v.total}return{player:{time:n,timePts:l,style:e,total:h},bots:d}}const Le={halfWidth:55,meshHalfWidth:110},Sn={axisY:19.8,rIn0:9.8,rInK:.05,rOut0:12.9,rOutK:.035,flare:1.8,flareA:26,lift:1};function Cd(s,t){const e=pt(t,-s.halfL,s.halfL)/s.sc,n=Math.max(0,(Math.abs(e)-Sn.flareA)/(50-Sn.flareA));return{rIn:(Sn.rIn0+Sn.rInK*e)*s.sc,rOut:(Sn.rOut0+Sn.rOutK*e+Sn.flare*n*n)*s.sc}}function po(s,t,e){const n=Math.sin(s*127.1+t*311.7+e*74.7)*43758.5453;return n-Math.floor(n)-.5}let mo=null;function Pd(){if(mo)return mo;const s=new Sa(1.1,1),t=s.attributes.position;for(let e=0;e<t.count;e++){const n=po(t.getX(e),t.getY(e),t.getZ(e));t.setXYZ(e,t.getX(e)*(1+n*.22),t.getY(e)*(1+po(t.getY(e),t.getZ(e),t.getX(e))*.18),t.getZ(e)*(1+po(t.getZ(e),t.getX(e),t.getY(e))*.22))}return s.computeVertexNormals(),s.translate(0,.55,0),mo=s,s}const cs=64,_v=.42;let go=null;function xv(){if(go)return go;const s=Pd().attributes.position,t=new Float32Array(cs).fill(0);for(let e=0;e<s.count;e++){const n=s.getY(e);if(n<-.05||n>1.45)continue;const i=s.getX(e),r=s.getZ(e),a=Math.hypot(i,r),o=Math.atan2(r,i);for(let c=0;c<cs;c++){let l=c/cs*Math.PI*2-o;l=Math.atan2(Math.sin(l),Math.cos(l)),!(Math.abs(l)>_v)&&(t[c]=Math.max(t[c],a*Math.cos(l)))}}return go=t,t}function Ld(s,t,e){const n=xv(),i=Math.cos(s.rot),r=Math.sin(s.rot),a=t*i-e*r,o=t*r+e*i,c=Math.hypot(a,o);let l=Math.atan2(o,a)/(Math.PI*2);l=(l-Math.floor(l))*cs;const h=Math.floor(l)%cs,u=l-Math.floor(l),f=(n[h]*(1-u)+n[(h+1)%cs]*u)*s.sc,d=c>1e-6?1/c:0;return{depth:f-c,nx:t*d,nz:e*d}}class Id{constructor(t,e=lr.utah,n="race"){this.seed=t>>>0,this.theme=e,this.format=n,this.length=Rd(n).length;const i=n==="bigair"||n==="halfpipe",r=Qn(this.seed);this.ph=Array.from({length:8},()=>r()*Math.PI*2),this.jumps=[];let a=170+r()*80;if(n==="bigair")this.jumps.push({s:230,x:this.centerAt(230),w:30,big:!0});else if(!i)for(;a<this.length-220;)this.jumps.push({s:a,x:this.centerAt(a)+(r()-.5)*36,w:15+r()*6}),a+=190+r()*150;for(this.drops=[],a=320+r()*160;!i&&a<this.length-300;)this.jumps.some(S=>Math.abs(S.s-a)<60)||this.drops.push({s:a,h:(4+r()*6)*e.cliffMul}),a+=380+r()*260;const o=700+r()*600;!i&&o<this.length-300&&!this.jumps.some(S=>Math.abs(S.s-o)<80)&&this.drops.push({s:o,h:(12+r()*5)*Math.max(.7,e.cliffMul)}),this.crevices=[];for(let S=0;S<(i?0:4);S++){const C=250+r()*(this.length-500);this.jumps.some(I=>Math.abs(I.s-C)<50)||this.crevices.push({s:C,x:this.centerAt(C)+(r()-.5)*70,w:14+r()*12,d:2.5+r()*2})}this.bridges=[];let c=340+r()*160;for(;!i&&c<this.length-320;)!this.jumps.some(C=>Math.abs(C.s-c)<80)&&!this.drops.some(C=>Math.abs(C.s-c)<90)?(this.bridges.push({s:c,h:6+r()*2.5,gapX:this.centerAt(c)+(r()-.5)*42,gapW:12+r()*4,len:21,lipH:2.2}),c+=420+r()*260):c+=70+r()*40;this.spines=[];for(let S=0;S<(i?0:2);S++){const C=420+r()*700;C>this.length-340||this.spines.push({s0:C,s1:C+220+r()*200,xOff:(r()<.5?-1:1)*(10+r()*18),h:3.2+r()*2.4,w:7+r()*4})}this.pipes=[],n==="halfpipe"&&this.pipes.push({s0:140,s1:this.length-200,off:0,w:14,d:7.4});for(let S=0;S<24&&this.pipes.length===0&&!i;S++){const C=380+r()*(this.length-800),I=C+80+r()*35;!this.jumps.some(U=>U.s>C-35&&U.s<I+45)&&!this.drops.some(U=>U.s>C-35&&U.s<I+45)&&!this.bridges.some(U=>U.s>C-55&&U.s<I+60)&&!this.spines.some(U=>C<U.s1+30&&I>U.s0-30)&&this.pipes.push({s0:C,s1:I,off:(r()-.5)*12,w:13+r()*2,d:6.8+r()*1.2})}this.ledges=[];for(let S=0;S<14&&this.ledges.length<2&&!i;S++){const C=300+r()*(this.length-700),I=C+100+r()*60;!this.jumps.some(U=>U.s>C-30&&U.s<I+30)&&!this.bridges.some(U=>U.s>C-55&&U.s<I+55)&&!this.pipes.some(U=>C<U.s1+50&&I>U.s0-50)&&!this.ledges.some(U=>C<U.s1+80&&I>U.s0-80)&&this.ledges.push({s0:C,s1:I,side:r()<.5?-1:1,h:(3.5+r()*2.5)*Math.max(.6,e.cliffMul),uFace:.34+r()*.2})}this.obstacles=[];const l=[],h=[],u=(S,C,I)=>{const N=.8+r()*.9,U=-C;l.push({x:S,z:U,sc:N,rot:r()*Math.PI*2}),I&&this.obstacles.push({x:S,z:U,r:1.1*N,kind:"tree"})},f=(S,C,I)=>{const N=1.1+r()*1.6,U=-C,H=r()*Math.PI*2;h.push({x:S,z:U,sc:N,rot:H}),I&&this.obstacles.push({x:S,z:U,r:1.35*N,kind:"rock",sc:N,rot:H})},d=S=>this.bridges.some(C=>Math.abs(C.s-S)<C.len+12),m=S=>this.jumps.some(C=>Math.abs(C.s-S)<(C.big?150:50)),b=e.treeMul,g=pt(11/Math.max(.05,b),6,200);for(const S of[-1,1]){let C=70+r()*8;for(;C<this.length+60;){const N=.94+Ke(C*.01+S*3.3,this.seed+5)*.08+r()*.08;u(this.centerAt(C)+S*Le.halfWidth*N,C,N<1),r()<.65&&u(this.centerAt(C)+S*Le.halfWidth*(N+.1+r()*.1),C+3+r()*4,!1),C+=g*(.7+r()*.6)}}const p=S=>this.pipes.some(C=>S>C.s0-30&&S<C.s1+30),x=(S,C)=>this.pipes.some(I=>C>I.s0-30&&C<I.s1+30&&Math.abs(S-(this.centerAt(C)+I.off))<I.w*2.1),v=(S,C)=>this.ledges.some(I=>{if(C<I.s0-20||C>I.s1+20)return!1;const N=(S-this.centerAt(C))/Le.halfWidth*I.side;return Math.abs(N-I.uFace)<.09});if(this.glades=[],n==="glade")for(const S of[-1,1])this.glades.push({s0:150,s1:this.length-170,side:S,depth:.9,pathPh:r()*Math.PI*2,pathFreq:.018+r()*.01});let _=b<.3||i||n==="glade"?this.length:220+r()*200;for(;_<this.length-260;)!d(_)&&!m(_)&&!p(_)?(this.glades.push({s0:_,s1:_+120+r()*140,side:r()<.5?-1:1,depth:.46+r()*.22,pathPh:r()*Math.PI*2,pathFreq:.03+r()*.02}),_+=340+r()*300):_+=80;for(const S of this.glades){const C=I=>{const N=(I-S.s0)*S.pathFreq+S.pathPh;return 1-S.depth*(.5+.3*Math.sin(N)+.17*Math.sin(N*2.7+1.3))};for(let I=S.s0;I<S.s1;I+=4.2){const N=C(I),U=.065+.02*Math.sin(I*.05+S.pathPh);for(let H=0;H<5;H++){const W=1.02-S.depth*r()*1.04;if(Math.abs(W-N)<U)continue;const B=this.centerAt(I)+S.side*Le.halfWidth*W+(r()-.5)*3,et=I+(r()-.5)*4.2;v(B,et)||u(B,et,W<1)}}}const R=i?0:Math.round(34*pt(b,.1,1.2));for(let S=0;S<R;S++){const C=150+r()*(this.length-280),I=this.centerAt(C)+(r()-.5)*Le.halfWidth*1.1;m(C)||d(C)||x(I,C)||v(I,C)||u(I,C,!0)}const T=pt(Math.round(4*e.rockMul),2,8);for(let S=0;S<T;S++){const C=200+r()*(this.length-420);if(d(C)||m(C))continue;const I=r()<.5?-1:1,N=this.centerAt(C)+I*Le.halfWidth*(.7+r()*.22),U=4+Math.floor(r()*5);for(let H=0;H<U;H++){const W=N+(r()-.5)*11,B=C+(r()-.5)*15;x(W,B)||v(W,B)||f(W,B,!0)}}const w=i?0:pt(Math.round(26*e.rockMul),8,55);for(let S=0;S<w;S++){const C=160+r()*(this.length-320),I=this.centerAt(C)+(r()-.5)*Le.halfWidth*1.4;m(C)||d(C)||x(I,C)||v(I,C)||f(I,C,Math.abs(I-this.centerAt(C))<Le.halfWidth)}this.logs=[];const P=i?0:7+Math.floor(r()*5);for(let S=0;S<P;S++){const C=180+r()*(this.length-360),I=this.centerAt(C)+(r()-.5)*Le.halfWidth*1.15;if(m(C)||d(C)||x(I,C)||v(I,C))continue;const N=r()*Math.PI*2,U=.038+r()*.018;this.logs.push({x:I,z:-C,rot:N,sc:U,kind:"log_small"});for(const H of[-30,30])this.obstacles.push({x:I+Math.cos(N)*H*U,z:-C-Math.sin(N)*H*U,r:22*U,kind:"log"})}this.grindLogs=[];for(const S of this.drops){if(this.grindLogs.length>=2)break;if(S.h<3.5||S.h>10||S.s<320||S.s>this.length-320||d(S.s)||p(S.s))continue;const C=this.centerAt(S.s)+(r()<.5?-1:1)*(7+r()*13);if(v(C,S.s))continue;const I=(r()-.5)*.14,N=.05+r()*.012,U=100*N,H=S.s-2.5,W=this.heightAt(C,-H)+1.15;this.grindLogs.push({x:C,s0:H,ax:Math.sin(I),az:Math.cos(I),sc:N,len:U,topY:W,bumpH:.9})}if(this.boostGates=[],n==="bigair"){const S=this.jumps[0];for(const C of[150,110,70])this.boostGates.push({s:S.s-C,x:this.centerAt(S.s-C),w:2.2})}else if(n==="halfpipe"){const S=this.pipes[0];for(const C of[190,260,330])this.boostGates.push({s:C,x:this.centerAt(C)+S.off,w:2.2})}else if(n!=="glade"){let S=260+r()*120;for(;S<this.length-200;){const C=!m(S)&&!d(S)&&!p(S)&&!this.drops.some(N=>Math.abs(N.s-S)<50),I=this.centerAt(S)+(r()-.5)*16;C&&!v(I,S)?(this.boostGates.push({s:S,x:I,w:2.2}),S+=200+r()*140):S+=45}}const M=(S,C)=>this.boostGates.some(I=>Math.abs(C-I.s)<5&&Math.abs(S-I.x)<I.w+2);this.obstacles=this.obstacles.filter(S=>!M(S.x,-S.z));for(const S of[l,h])for(let C=S.length-1;C>=0;C--)M(S[C].x,-S[C].z)&&S.splice(C,1);for(let S=0,C=i?0:1+(r()<.55?1:0),I=0;S<C&&I<40;I++){const N=280+r()*(this.length-620),U=this.centerAt(N)+(r()-.5)*Le.halfWidth*.8;if(m(N)||d(N)||x(U,N)||v(U,N))continue;const H=(r()-.5)*.4,W=.48+r()*.07,B=Math.sin(H),et=Math.cos(H),nt=50*W,ft=at=>this.heightAt(U+B*at,-N+et*at),Rt=ft(nt),Ut=ft(-nt);let q=!0;for(let at=-4;at<=4&&q;at++){const tt=at/5*nt,xt=(Rt+Ut)/2+(Rt-Ut)/2*(tt/nt),Mt=ft(tt)-xt;(Mt<-2.4||Mt>1.6)&&(q=!1)}if(!q)continue;S++,this.logs.push({x:U,z:-N,rot:H,sc:W,kind:"log_hollow"});const st=(at,tt)=>{const xt=tt-N,Mt=at-U,kt=Mt*B-xt*et,Yt=Mt*et+xt*B;return Math.abs(kt)<nt+3&&Math.abs(Yt)<16*W+2};this.obstacles=this.obstacles.filter(at=>at.kind==="log"||!st(at.x,-at.z));for(const at of[l,h])for(let tt=at.length-1;tt>=0;tt--)st(at[tt].x,-at[tt].z)&&at.splice(tt,1)}this.hollowTubes=this.logs.filter(S=>S.kind==="log_hollow").map(S=>{const C=Math.sin(S.rot),I=Math.cos(S.rot),N=50*S.sc,U=this.heightAt(S.x+C*N,S.z+I*N),H=this.heightAt(S.x-C*N,S.z-I*N);return S.pitch=Math.atan2(U-H,2*N),S.axY0=(U+H)/2+Sn.lift,S.posY=S.axY0-Sn.axisY*S.sc*Math.cos(S.pitch),{x:S.x,s0:-S.z,ax:C,az:I,sc:S.sc,halfL:N,axY0:S.axY0,axSlope:(U-H)/(2*N)}});const y=this.centerAt(4);this.apron={cx:y,lipS:4+Fs.lipDz,lipY:this.heightAt(y,-4)-Fs.lipDrop},this.obstacles.sort((S,C)=>-S.z- -C.z),this._treeXf=l,this._rockXf=h}centerAt(t){const e=pt(t,0,this.length);return 24*Math.sin(e*.0081+this.ph[0])+16*Math.sin(e*.0031+this.ph[1])}heightAt(t,e){const n=-e,i=pt(n,0,this.length);let r;n<0||n<=this.length?r=n:r=this.length+(n-this.length)*.12;let a=-.5*r+16*Math.sin(i*.011+this.ph[2])+9*Math.sin(i*.0047+this.ph[3]);const o=this.centerAt(n),c=(t-o)/Le.halfWidth;a+=5*c*c;const l=Math.abs(c);if(l>.85){const d=l-.85;a+=130*(1-Math.exp(-d*d*.5)),a+=Ns(t*.006,i*.006,this.seed+91,3)*42*Zt(.95,1.9,l)}const h=Zt(25,90,n);a+=5.5*this.theme.roughMul*Ns(t*.017,n*.017,this.seed,3)*h;const u=Zt(.25,.75,Ke(n*.004+7.7,this.seed)*.5+.5);a+=1.3*this.theme.mogulMul*Ns(t*.085,n*.085,this.seed+31,2)*u*h;for(const d of this.jumps){const m=1-((t-d.x)/d.w)**2;if(m<=0)continue;if(d.big){const g=(n-(d.s-80))/60;g>0&&g<=1&&(a-=9*g*m);const p=(n-(d.s-20))/20;if(p>0&&p<=1)a+=(-9+16*p*p)*m;else if(n>d.s&&n<d.s+120){const x=(n-d.s)/120;a+=m*(2*(1-x)-7*Math.sin(Math.PI*x))}continue}const b=(n-(d.s-16))/16;b>0&&b<=1?a+=5.2*b*b*m:n>d.s&&n<d.s+34&&(a-=2.8*(1-(n-d.s)/34)*m)}const f=Zt(.3,.7,Ke(i*.0031+3.3,this.seed+12)*.5+.5);a+=.85*Math.sin(t*.34+i*.004+this.ph[5])*f*h;for(const d of this.drops)a-=d.h*Zt(0,2.5,n-d.s);for(const d of this.bridges){const m=(n-d.s)/d.len;if(Math.abs(m)<1){const b=.5+.5*Math.cos(m*Math.PI),g=(t-d.gapX)/(d.gapW/2),p=Math.abs(g),x=p<1?Math.cos(g*Math.PI/2)**2:0,v=p>.92?d.lipH*Zt(.92,1.12,p)*(p>1.12?Math.exp(-(((p-1.12)/1.3)**2)):1):0;a+=(d.h*(1-x)+v)*b}}for(const d of this.spines)if(n>d.s0-50&&n<d.s1+50){const m=Zt(d.s0-40,d.s0,n)*(1-Zt(d.s1,d.s1+40,n)),b=(t-(o+d.xOff))/d.w;a+=d.h*m*Math.exp(-b*b)}for(const d of this.pipes)if(n>d.s0-40&&n<d.s1+40){const m=Zt(d.s0-35,d.s0+14,n)*(1-Zt(d.s1-14,d.s1+35,n)),b=Math.abs((t-(o+d.off))/d.w);let g;if(b<=.4)g=-.6;else if(b<1){const p=(b-.4)/.6;g=-.6+p*p}else b<=1.35?g=.4:g=.4*(1-Zt(1.35,2,b));a+=d.d*m*g}for(const d of this.ledges)if(n>d.s0-40&&n<d.s1+40){const m=Zt(d.s0-30,d.s0+15,n)*(1-Zt(d.s1-15,d.s1+30,n)),b=d.uFace+Ke(n*.02,this.seed+7)*.05;a+=d.h*m*Zt(b,b+.045,c*d.side)}for(const d of this.grindLogs){const m=n-(d.s0+1),b=t-d.x,g=(b*b+m*m)/10.6;g<4&&(a+=d.bumpH*Math.exp(-g))}for(const d of this.glades)if(n>d.s0-10&&n<d.s1+10){const m=c*d.side,b=Zt(1-d.depth-.06,1-d.depth+.04,m)*(1-Zt(1,1.1,m));if(b>0){const g=Zt(d.s0-8,d.s0+14,n)*(1-Zt(d.s1-14,d.s1+8,n));a+=1.15*b*g*Ns(t*.1,i*.1,this.seed+53,2)}}for(const d of this.crevices){const m=(n-d.s)/3.2,b=(t-d.x)/d.w;Math.abs(m)<3&&Math.abs(b)<1&&(a-=d.d*Math.exp(-m*m)*(1-b*b))}if(this.hollowTubes)for(const d of this.hollowTubes){const m=n-d.s0,b=t-d.x,g=b*d.ax-m*d.az,p=Math.abs(g);if(p>d.halfL+5)continue;const x=Math.abs(b*d.az+m*d.ax),{rOut:v}=Cd(d,g);if(x>v+1)continue;const _=d.axY0-Sn.lift+pt(g,-d.halfL,d.halfL)*d.axSlope;if(_<=a)continue;const R=(1-Zt(d.halfL,d.halfL+5,p))*(1-Zt(v-1.5,v+1,x));a+=(_-a)*R}if(this.apron){const d=this.apron,m=n-d.lipS;m>0&&m<Fs.blend&&Math.abs(t-d.cx)<Fs.halfW&&(a=Math.max(a,xe(d.lipY,a,Zt(0,1,m/Fs.blend))))}return a}pipeAt(t,e){for(const n of this.pipes){if(e<n.s0-35||e>n.s1+35)continue;const i=Zt(n.s0-35,n.s0+14,e)*(1-Zt(n.s1-14,n.s1+35,e));if(!(i<.55))return{q:(t-(this.centerAt(e)+n.off))/n.w,env:i,p:n,lipQ:.97}}for(const n of this.bridges){const i=(e-n.s)/n.len;if(Math.abs(i)>=1)continue;const r=.5+.5*Math.cos(i*Math.PI);if(!(r<.3))return{q:(t-n.gapX)/(n.gapW/2),env:r,p:n,lipQ:.8}}return null}groundAt(t,e){const n=this.heightAt(t,e);return this.surface?Math.max(n,this.surface(t,e)):n}boostGateAt(t,e,n){for(const i of this.boostGates)if(i.s>e&&i.s<=n&&Math.abs(t-i.x)<i.w)return i;return null}launchCapAt(t){for(const e of this.jumps)if(e.big&&Math.abs(t-e.s)<25)return 15;return 9}groundNormalAt(t,e,n=new L){const r=this.groundAt(t+.6,e)-this.groundAt(t-.6,e),a=this.groundAt(t,e+.6)-this.groundAt(t,e-.6);return n.set(-r,2*.6,-a).normalize()}grindAt(t,e){for(const n of this.grindLogs){const i=e-n.s0,r=t-n.x,a=i*n.az+r*n.ax,o=r*n.az-i*n.ax;if(!(a<0||a>n.len||Math.abs(o)>.8))return{along:a,lat:o,len:n.len,topY:n.topY,gx:n.x,gs0:n.s0,ax:n.ax,az:n.az,px:n.x+n.ax*a,pz:-(n.s0+n.az*a),yaw:Math.atan2(n.ax,n.az)}}return null}nearGrindEntry(t,e){for(const n of this.grindLogs){const i=e-n.s0,r=t-n.x,a=i*n.az+r*n.ax;if(!(a<-9||a>1.5)&&Math.abs(r*n.az-i*n.ax)<2.5)return!0}return!1}ledgeWallsAt(t){const e=[];for(const n of this.ledges){if(t<n.s0-30||t>n.s1+30||Zt(n.s0-30,n.s0+15,t)*(1-Zt(n.s1-15,n.s1+30,t))*n.h<1.2)continue;const r=n.uFace+Ke(t*.02,this.seed+7)*.05;e.push({x:this.centerAt(t)+n.side*r*Le.halfWidth,side:n.side})}return e}normalAt(t,e,n=new L){const r=this.heightAt(t+.8,e)-this.heightAt(t-.8,e),a=this.heightAt(t,e+.8)-this.heightAt(t,e-.8);return n.set(-r/(2*.8),1,-a/(2*.8)).normalize()}obstaclesNear(t,e){return this.obstacles.filter(n=>-n.z>=t&&-n.z<=e)}build(t){this._buildGround(t),this._buildInstances(t),this._buildGatesAndFinish(t)}_buildGround(t){const e=new Me({vertexColors:!0});e.onBeforeCompile=b=>{b.vertexShader=b.vertexShader.replace("#include <common>",`varying vec3 vWPos;
#include <common>`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),b.fragmentShader=b.fragmentShader.replace("#include <common>",`varying vec3 vWPos;
#include <common>`).replace("#include <dithering_fragment>",`{
            vec3 gi = floor(vWPos * 5.0);
            float gh = fract(sin(dot(gi, vec3(127.1, 311.7, 74.7))) * 43758.5453);
            float dist = length(cameraPosition - vWPos);
            vec3 vdir = (cameraPosition - vWPos) / dist;
            vec3 gn = normalize(vec3(fract(gh * 13.7) - 0.5, 1.2, fract(gh * 7.3) - 0.5));
            float glint = step(0.982, gh) * pow(max(dot(vdir, gn), 0.0), 14.0);
            gl_FragColor.rgb += glint * 0.7 * exp(-dist * 0.012);
          }
          #include <dithering_fragment>`)};const n=1.7,i=6,r=74,a=235,o=13,c=[];for(let b=-a;b<-110;b+=o)c.push(b);for(let b=-110;b<-r;b+=i)c.push(b);for(let b=-r;b<=r;b+=n)c.push(b);for(let b=r+i;b<=Le.meshHalfWidth;b+=i)c.push(b);for(let b=Le.meshHalfWidth+o;b<=a;b+=o)c.push(b);const l=102,h=Math.round(l/n),u=new dt(this.theme.snow),f=new dt(this.theme.ice),d=new dt(this.theme.rock),m=new dt;for(let b=-60;b<this.length+180;b+=l){const g=this.centerAt(b+l/2),p=c.length,x=h+1,v=new Float32Array((p+2)*(x+2)),_=[c[0]-n,...c,c[p-1]+n],R=[];for(let I=-1;I<=x;I++)R.push(-(b+I*n*(l/(h*n))));for(let I=0;I<x+2;I++)for(let N=0;N<p+2;N++)v[I*(p+2)+N]=this.heightAt(_[N]+g,R[I]);const T=new Float32Array(p*x*3),w=new Float32Array(p*x*3),P=new Float32Array(p*x*3);let M=0;for(let I=0;I<x;I++)for(let N=0;N<p;N++){const U=c[N]+g,H=R[I+1],W=v[(I+1)*(p+2)+(N+1)];T[M*3]=U,T[M*3+1]=W,T[M*3+2]=H;const B=v[(I+1)*(p+2)+N],et=v[(I+1)*(p+2)+(N+2)],nt=v[I*(p+2)+(N+1)],ft=v[(I+2)*(p+2)+(N+1)],Rt=(et-B)/(_[N+2]-_[N]),Ut=(ft-nt)/(R[I+2]-R[I]),q=1/Math.hypot(Rt,1,Ut);w[M*3]=-Rt*q,w[M*3+1]=q,w[M*3+2]=-Ut*q;const st=Math.hypot(Rt,Ut);m.copy(u),st>.85?m.lerp(d,pt((st-.85)/.9,0,1)):m.lerp(f,pt((st-.45)/1.2,0,.35));const at=Ns(U*.21,-H*.21,this.seed+77,2)*.03;P[M*3]=pt(m.r+at,0,1),P[M*3+1]=pt(m.g+at,0,1),P[M*3+2]=pt(m.b+at*1.5,0,1),M++}const y=[];for(let I=0;I<x-1;I++)for(let N=0;N<p-1;N++){const U=I*p+N;y.push(U,U+1,U+p,U+1,U+p+1,U+p)}const S=new _e;S.setAttribute("position",new ue(T,3)),S.setAttribute("normal",new ue(w,3)),S.setAttribute("color",new ue(P,3)),S.setIndex(y),S.computeBoundingSphere();const C=new re(S,e);C.frustumCulled=!0,C.receiveShadow=!0,t.add(C)}}_buildInstances(t){this._treeXf.length;const e=new Nt;new Nt;const n=new Qt,i=new L(0,1,0),r=new L,a=new gs(.16,.26,1.5,7);a.translate(0,.75,0);const c=Vh([[1.75,2.6,1.9],[1.3,2.3,3.3],[.85,2.1,4.6]].map(([p,x,v])=>{const _=new ir(p,x,9);return _.translate(0,v,0),_})),l=Vh([[1.15,.55,3],[.78,.5,4.35],[.42,.9,5.35]].map(([p,x,v])=>{const _=new ir(p,x,9);return _.translate(0,v,0),_})),h=new Me({color:this.theme.trunk}),u=new Me({color:this.theme.foliage}),f=new Me({color:16054525}),d=this._treeXf.length,m=new dn(a,h,d),b=new dn(c,u,d),g=new dn(l,f,d);this._treeXf.forEach((p,x)=>{const v=this.heightAt(p.x,p.z)-.15;n.setFromAxisAngle(i,p.rot),r.set(p.sc,p.sc,p.sc),e.compose(new L(p.x,v,p.z),n,r),m.setMatrixAt(x,e),b.setMatrixAt(x,e),g.setMatrixAt(x,e)}),m.castShadow=b.castShadow=!0,t.add(m,b,g),this._buildRocksAndFlags(t,e,n,i,r)}_buildRocksAndFlags(t,e,n,i,r){const a=new Me({color:16054525}),o=Pd(),c=new Sa(.92,1);c.scale(1,.32,1),c.translate(0,1.18,0);const l=new Me({color:this.theme.rock,flatShading:!0}),h=new dn(o,l,this._rockXf.length),u=new dn(c,a,this._rockXf.length);this._rockXf.forEach((w,P)=>{const M=this.heightAt(w.x,w.z)-.35;n.setFromAxisAngle(i,w.rot),r.set(w.sc,w.sc*(.7+P%3*.2),w.sc),e.compose(new L(w.x,M,w.z),n,r),h.setMatrixAt(P,e),u.setMatrixAt(P,e)}),h.castShadow=!0,t.add(h,u);const f=new Qt,d=new Qt;for(const w of this.logs){const P=Xn(w.kind,this.theme,w.sc);if(w.kind==="log_hollow")P.rotation.order="YXZ",P.rotation.set(-w.pitch,w.rot,0),P.position.set(w.x,w.posY,w.z),P.name="hollow_log";else{P.position.set(w.x,this.heightAt(w.x,w.z)-.28,w.z);const M=this.normalAt(w.x,w.z);f.setFromUnitVectors(i,M),d.setFromAxisAngle(i,w.rot),P.quaternion.copy(f).multiply(d)}P.traverse(M=>{M.isMesh&&(M.castShadow=!0)}),t.add(P)}for(const w of this.grindLogs){const P=Xn("log_small",this.theme,w.sc),M=w.x+w.ax*(w.len/2-.5),y=-(w.s0+w.az*(w.len/2-.5));P.position.set(M,w.topY-20.6*w.sc,y),P.rotation.y=Math.atan2(w.az,w.ax),P.traverse(S=>{S.isMesh&&(S.castShadow=!0)}),t.add(P)}const m=new gs(.05,.05,2.2,4);m.translate(0,1.1,0);const b=new An(.7,.45);b.translate(.4,1.8,0);const g=[];for(let w=90;w<this.length;w+=90)g.push(w);const p=new Me({color:2896960}),x=new Me({color:14042415,side:ze}),v=new Me({color:3108822,side:ze}),_=new dn(m,p,g.length*2),R=new dn(b,x,g.length),T=new dn(b,v,g.length);if(g.forEach((w,P)=>{const M=this.centerAt(w);for(const[y,S]of[[0,-1],[1,1]]){const C=M+S*17,I=-w;e.compose(new L(C,this.heightAt(C,I),I),n.identity(),r.set(1,1,1)),_.setMatrixAt(P*2+y,e),(S<0?R:T).setMatrixAt(P,e)}}),t.add(_,R,T),this.gateFx=[],this._gateT=0,this.boostGates.length){const w=this.boostGates,P=new L(0,1,0),M=new dt(this.theme.eventB??16111470),y=new Me({color:16777215,emissive:M.clone().multiplyScalar(.35),side:ze}),S=new dn(m,p,w.length*2),C=new dn(b,y,w.length*2);this._gateFlags=C,this._gateAccent=M;const I=1.4,N=.42,U=6,H=(W,B,et,nt)=>{const ft=[],Rt=[];for(const q of[-1,1]){const st=ft.length/3;for(let at=0;at<=U;at++){const tt=at/U,xt=W+q*et*(1-tt),Mt=B+nt+I*tt;for(const kt of[0,N]){const Yt=Mt-kt;ft.push(xt,this.heightAt(xt,-Yt)+.07,-Yt)}}for(let at=0;at<U;at++){const tt=st+at*2;q<0?Rt.push(tt,tt+2,tt+1,tt+1,tt+2,tt+3):Rt.push(tt,tt+1,tt+2,tt+1,tt+3,tt+2)}}const Ut=new _e;return Ut.setAttribute("position",new he(ft,3)),Ut.setIndex(Rt),Ut};w.forEach((W,B)=>{const et=[];for(const nt of[0,-1]){const ft=new Ie({color:3718648,transparent:!0,opacity:.95,depthWrite:!1,side:ze,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});et.push(ft),t.add(new re(H(W.x,W.s-.3,W.w-.35,nt),ft))}this.gateFx.push({mats:et,flash:-1});for(const[nt,ft]of[[0,-1],[1,1]]){const Rt=W.x+ft*W.w,Ut=-W.s,q=new L(Rt,this.heightAt(Rt,Ut),Ut);e.compose(q,n.identity(),r.set(1,1,1)),S.setMatrixAt(B*2+nt,e),e.compose(q,n.setFromAxisAngle(P,ft<0?Math.PI:0),r.set(1,1,1)),C.setMatrixAt(B*2+nt,e),C.setColorAt(B*2+nt,M)}}),t.add(S,C)}}pulseGates(t){if(!this.gateFx)return;this._gateT=t;let e=!1,n=0;const i=new dt(16777215);for(const[r,a]of this.gateFx.entries()){const o=a.flash>=0?Math.max(0,1-(t-a.flash)/.9):0;n=Math.max(n,o);for(const[c,l]of a.mats.entries()){const h=.5+.5*Math.sin(t*7+c*Math.PI);l.color.setHSL(.55,.95,.45+h*.45).lerp(i,o)}if(o>0||a.wasFlaring){for(const c of[r*2,r*2+1])this._gateFlags.setColorAt(c,this._gateAccent.clone().lerp(i,o));e=!0,a.wasFlaring=o>0}}e&&this._gateFlags.instanceColor&&(this._gateFlags.instanceColor.needsUpdate=!0),e&&this._gateFlags.material.emissive.copy(this._gateAccent).multiplyScalar(.35).lerp(i,n)}flashGate(t){const e=this.boostGates.indexOf(t);e>=0&&this.gateFx[e]&&(this.gateFx[e].flash=this._gateT)}_buildGatesAndFinish(t){this.gateLanes=[];const e=this.centerAt(4);for(let g=0;g<5;g++)this.gateLanes.push({x:e+(g-2)*6.5,z:-4});const n=this.length,i=this.centerAt(n),r=Xn("finish_line",this.theme);r.scale.set(.34,.22,.22);const a=Math.min(this.heightAt(i-17,-n),this.heightAt(i+17,-n));r.position.set(i,a-.25,-n),t.add(r),this.finishSigns=[];const o=(g,p,x)=>{const v=document.createElement("canvas");v.width=g,v.height=p;const _=v.getContext("2d");x(_,g,p);const R=new va(v);return R.colorSpace=ye,R},c="#"+new dt(this.theme.eventA??14042415).getHexString(),l="#"+new dt(this.theme.eventB??16111470).getHexString(),h=new Ie({map:o(1024,160,(g,p,x)=>{g.fillStyle="#0a0e16",g.fillRect(0,0,p,x);for(let v=0;v<p;v+=32)for(const _ of[0,x-20])g.fillStyle=v/32%2?"#e8edf4":"#12161e",g.fillRect(v,_,32,20);g.font="bold 96px sans-serif",g.textAlign="center",g.textBaseline="middle",g.fillStyle=l,g.fillText("FINISH",p/2,x/2+4)})}),u=new re(new An(17.5,2.9),h);u.position.set(i,a+7.35,-n+2),t.add(u),this.finishSigns.push(h);for(const g of[-1,1]){const p=new Ie({map:o(128,640,(v,_,R)=>{v.fillStyle="#0a0e16",v.fillRect(0,0,_,R),v.strokeStyle=c,v.lineWidth=10,v.strokeRect(8,8,_-16,R-16),v.font="bold 78px sans-serif",v.textAlign="center",v.textBaseline="middle",v.fillStyle=l;const T="FINISH";for(let w=0;w<T.length;w++)v.fillText(T[w],_/2,70+w*((R-130)/(T.length-1)))})}),x=new re(new An(1.7,8.2),p);x.position.set(i+g*13.9,a+5.4,-n+1.6),t.add(x),this.finishSigns.push(p)}const f=new Me({color:2304051}),d=(g,p,x,v,_)=>{let R=-1/0,T=1/0;for(const[w,P]of[[-v,-_],[v,-_],[-v,_],[v,_]]){const M=this.heightAt(p+w,x+P);M>R&&(R=M),M<T&&(T=M)}if(g.position.set(p,R-.15,x),R-T>.8){const w=R-T+1.2,P=new re(new Qe(v*1.9,w,_*1.9),f);P.position.set(p,R-.15-w/2+.1,x),t.add(P)}t.add(g)},m=Xn("podium",this.theme);m.scale.setScalar(.06),m.rotation.y=.6,d(m,i-20,-n-14,3.2,2.2);for(const g of[-1,1]){const p=Xn("bleachers",this.theme);p.scale.set(.24,.2,.13),p.rotation.y=-g*(Math.PI/2),d(p,i+g*27,-n+20,6.4,12.2)}for(const[g,p,x]of[[i-32,-n-4,.13],[i+30,-n-10,.15]]){const v=Xn("barrier",this.theme);v.scale.setScalar(x),d(v,g,p,50*x*.9,50*x*.9)}const b=Xn("ski_lift",this.theme);b.scale.setScalar(.16),b.rotation.y=.35,d(b,i+16,-n-40,8,8)}}function vv(s){const t=new Map,e=new Map,n=s.clone();return Dd(s,n,function(i,r){t.set(r,i),e.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=t.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Dd(s,t,e){e(s,t);for(let n=0;n<s.children.length;n++)Dd(s.children[n],t.children[n],e)}const Js=.0105,Wr={boarder:{clusters:[["#121214","pants",!0],["#403f2f","jacket",!0],["#6e5036","hair",!0],["#2f2a29","hair",!1],["#593e26","hair",!1],["#8d684e","hair",!1],["#d49274","skin",!0],["#421c95","accessory",!0],["#dacfc5","jacket2",!0],["#2a66db","accessory",!1]]},skier:{clusters:[["#1b191b","accessory",!0],["#222023","pants",!0],["#b42f2b","jacket",!0],["#151214","pants",!1],["#8b211f","jacket",!1],["#342e2f","hat",!0],["#391b1c","hair",!0],["#602423","jacket",!1],["#85685c","skin",!1],["#c6a495","skin",!0]]},tuber:{clusters:[["#1f2736","jacket2",!0],["#1a1a1f","pants",!1],["#131317","pants",!1],["#232125","pants",!0],["#29303e","jacket2",!1],["#ed6025","jacket",!0],["#efae94","skin",!0],["#983a11","jacket",!1],["#583b31","hair",!0],["#a0786a","skin",!1]]}},Mv={ski:"skier",board:"boarder",sled:"tuber"},Zi={jacket2:[16053492,1777188,16767306,8052952,15764526,8959976,2830138,14696574],pants:[1447964,2830136,2372679,3945512,4858928,3357230,1976868],hat:[14042415,16098851,4114027,3718648,14696574,16053492,1777188],accessory:[16098851,3718648,14696574,4114027,12595240,16053492,8015824],skin:[15911339,15382672,14394747,13209443,11104325,9065779,7029286,5518109],hair:[2760728,4534296,7031332,10516014,13214812,14272928,9079440,1842210]},vc=s=>[s>>16&255,s>>8&255,s&255],Zh=s=>parseInt(s.slice(1),16),cl={},tu=new Map;async function yv(){const s=new rl;s.setMeshoptDecoder(al),await Promise.all(Object.keys(Wr).map(async t=>{const[e,n]=await Promise.all([s.loadAsync(ol(t)),new Promise((m,b)=>{const g=new Image;g.onload=()=>m(g),g.onerror=b,g.src=`models/${t}-base.jpg`})]),i=1024,r=document.createElement("canvas");r.width=r.height=i;const a=r.getContext("2d",{willReadFrequently:!0});a.drawImage(n,0,0,i,i);const o=a.getImageData(0,0,i,i).data,c=Wr[t].clusters.map(([m])=>vc(Zh(m))),l=i*i,h=new Uint8Array(l),u=new Uint8Array(l);for(let m=0;m<l;m++){const b=o[m*4],g=o[m*4+1],p=o[m*4+2];let x=0,v=1e9;for(let _=0;_<c.length;_++){const R=c[_],T=(b-R[0])**2+(g-R[1])**2+(p-R[2])**2;T<v&&(v=T,x=_)}h[m]=x,u[m]=(b+g+p)/3}const f={};for(const[m,b,g]of Wr[t].clusters)if(g){const[p,x,v]=vc(Zh(m));f[b]=(p+x+v)/3}const d=Wr[t].clusters.map(([,m])=>({role:m,mainLum:f[m]??128}));cl[t]={gltf:e,classIdx:h,pixLum:u,size:i,roles:d}}))}function Sv(s,t,e=null){const n=Qn(t>>>0),i=r=>r[Math.floor(n()*r.length)];return{jacket:e?.jacket??s,jacket2:e?.jacket2??i(Zi.jacket2),pants:e?.pants??i(Zi.pants),hat:e?.hat??i(Zi.hat),accessory:e?.accessory??i(Zi.accessory),skin:i(Zi.skin),hair:i(Zi.hair)}}function wv(s,t){const e=s+"|"+Object.values(t).join(",");let n=tu.get(e);if(n)return n;const{classIdx:i,pixLum:r,size:a,roles:o}=cl[s],c=o.map(({role:m,mainLum:b})=>({rgb:m==="keep"?null:vc(t[m]??8947848),inv:1/Math.max(8,b)})),l=document.createElement("canvas");l.width=l.height=a;const h=l.getContext("2d"),u=h.createImageData(a,a),f=u.data,d=a*a;for(let m=0;m<d;m++){const b=c[i[m]],g=Math.min(1.85,(r[m]+3)*b.inv);f[m*4]=Math.min(255,b.rgb[0]*g),f[m*4+1]=Math.min(255,b.rgb[1]*g),f[m*4+2]=Math.min(255,b.rgb[2]*g),f[m*4+3]=255}return h.putImageData(u,0,0),n=new va(l),n.flipY=!0,n.colorSpace=ye,tu.set(e,n),n}function Tv(s,t,e,n=null){const i=Mv[s]??"boarder",r=cl[i],a=vv(r.gltf.scene),o=Sv(t,e,n);let c=null;a.traverse(T=>{T.isSkinnedMesh&&(c=T)}),c.material=new Me({map:wv(i,o)}),c.castShadow=!0,c.frustumCulled=!1,a.updateMatrixWorld(!0);const l={};a.traverse(T=>{T.isBone&&(l[T.name]=T)});const h=new Qt;a.getWorldQuaternion(h);const u=h.clone().invert(),f={x:new L(-1,0,0),y:new L(0,1,0),z:new L(0,0,-1)},d={},m=new Qt;for(const[T,w]of Object.entries(l)){w.getWorldQuaternion(m);const M=u.clone().multiply(m).clone().invert();d[T]={localQ:w.quaternion.clone(),localPos:w.position.clone(),axes:{x:f.x.clone().applyQuaternion(M).normalize(),y:f.y.clone().applyQuaternion(M).normalize(),z:f.z.clone().applyQuaternion(M).normalize()},worldRelInv:M}}const b=T=>{const w=l[`Left${T}`],P=l[`Right${T}`],M=new L;return w.getWorldPosition(M),-M.x>=0?{1:w,[-1]:P}:{1:P,[-1]:w}},g=b("Arm"),p=b("ForeArm"),x=b("Hand"),v=b("UpLeg"),_=b("Leg"),R=b("Foot");return{root:a,bones:l,rest:d,mesh:c,palette:o,sided:{arms:g,forearms:p,hands:x,feet:R,legs:_,upLegs:v}}}const Av=.41,Ev=.39,ll=.11,jr=.13,eu=.2,nu=new Map,iu=new Map;function ns(s){let t=iu.get(s);return t||(t=new Me({color:s}),iu.set(s,t)),t}function Tn(s,t){let e=nu.get(s);return e||(e=t(),nu.set(s,e)),e}function Wn(s,t,e,n=4,i=12){return Tn(`cap:${s}`,()=>new Qc(t,e,n,i))}function Rv(s,t,e=16){return Tn(`lathe:${s}`,()=>{const n=new Ma(t.map(([i,r])=>new gt(i,r)),e);return n.computeVertexNormals(),n})}function Cv(s,t,e=12,n=10){return Tn(`sph:${s}`,()=>new or(t,e,n))}const Pe=(s,t)=>new re(s,t);function kd(s){const t=new Se,e=ns(s.deck),n=ns(s.accent),i=ns(2895928),r=ns(1316637);if(s.type==="ski")for(const a of[-.175,.175]){const o=Pe(Wn("skibase",.075,1.74),r);o.rotation.x=Math.PI/2,o.scale.set(1,1,.16),o.position.set(a,.008,.05);const c=Pe(Wn("ski",.068,1.72),e);c.rotation.x=Math.PI/2,c.scale.set(1,1,.22),c.position.set(a,.024,.05);const l=Pe(Wn("skiband",.05,.22),n);l.rotation.x=Math.PI/2,l.scale.set(1,1,.2),l.position.set(a,.036,-.6);const h=Pe(Tn("bind",()=>new Qe(.13,.08,.36)),i);h.position.set(a,.05,.05),t.add(o,c,l,h)}else if(s.type==="board"){const a=Pe(Wn("boardbase",.205,1.32),r);a.rotation.x=Math.PI/2,a.scale.set(1,1,.085),a.position.y=.02;const o=Pe(Wn("board",.19,1.3),e);o.rotation.x=Math.PI/2,o.scale.set(1,1,.115),o.position.y=.035;const c=Pe(Wn("bstripe",.125,1.14),n);c.rotation.x=Math.PI/2,c.scale.set(1,1,.12),c.position.y=.048,t.add(a,o,c);for(const[l,h]of[[-.35,-Math.PI/2+.32],[.35,-Math.PI/2-.12]]){const u=Pe(Tn("bbind",()=>new Qe(.17,.05,.33)),i);u.position.set(0,.065,l),u.rotation.y=h,t.add(u)}}else if(s.id==="sled-saucer"){const a=Pe(Rv("saucer",[[0,.04],[.3,.05],[.55,.09],[.7,.17],[.74,.24]],18),new Me({color:s.deck,side:ze})),o=Pe(Tn("srim",()=>new tl(.72,.045,8,18)),n);o.rotation.x=Math.PI/2,o.position.y=.24;const c=Pe(Cv("shandle",.05),n);c.position.set(-.5,.16,0);const l=c.clone();l.position.x=.5,t.add(a,o,c,l)}else{const a=Pe(Tn("hull",()=>new Qe(.5,.1,1.3)),e);a.position.set(0,.17,.1);const o=Pe(Wn("snose",.24,.42),e);o.rotation.x=Math.PI/2,o.scale.set(1,1,.28),o.position.set(0,.2,-.62);const c=Pe(Wn("slip",.06,.4),n);c.rotation.z=Math.PI/2,c.scale.set(1,.8,.8),c.position.set(0,.33,-.8),t.add(a,o,c);for(const l of[-.21,.21]){const h=Pe(Tn("runner",()=>new Qe(.05,.1,1.5)),n);h.position.set(l,.06,0),t.add(h)}}return t}function Pv(s){return kd(s)}function rr(s,t,e=null){const n=new Se,i=new Se;n.add(i);const r=s.type==="sled",a=s.type==="board",o=kd(s);a&&(o.position.y=.07),o.rotation.order="YXZ",i.add(o);let c=t>>>0;for(const M of s.id)c=c*31+M.charCodeAt(0)>>>0;const l=Tv(s.type,t,c,e),h=new Se;h.rotation.y=Math.PI,h.scale.setScalar(Js),h.add(l.root),i.add(h);const u={x:new L(-1,0,0),y:new L(0,1,0),z:new L(0,0,-1)},f=M=>{const y=M.clone().invert();return{x:u.x.clone().applyQuaternion(y).normalize(),y:u.y.clone().applyQuaternion(y).normalize(),z:u.z.clone().applyQuaternion(y).normalize()}},d={joints:{},char:l},m=(M,y,S,C=null)=>{y&&(d.joints[M]={bone:y,restLocal:y.quaternion.clone(),axes:f(S),offsetQ:C})},b=M=>l.rest[M.name].worldRelInv.clone().invert(),g=l.bones;m("hips",g.Hips,b(g.Hips)),g.Spine&&m("spine",g.Spine,b(g.Spine)),g.Spine01&&m("spine1",g.Spine01,b(g.Spine01)),g.Spine02&&m("chest",g.Spine02,b(g.Spine02)),g.neck&&m("neck",g.neck,b(g.neck)),g.Head&&m("head",g.Head,b(g.Head));for(const M of[-1,1]){const y=l.sided.arms[M],S=l.sided.forearms[M],C=l.sided.hands[M],I=new Qt().setFromAxisAngle(l.rest[y.name].axes.z,-M*(Math.PI/2-.18)),N=b(y).multiply(I);m("arm"+M,y,N,I);const U=N.clone().multiply(S.quaternion);m("fore"+M,S,U);const H=U.clone().multiply(C.quaternion);m("hand"+M,C,H),m("upleg"+M,l.sided.upLegs[M],b(l.sided.upLegs[M])),m("leg"+M,l.sided.legs[M],b(l.sided.legs[M])),m("foot"+M,l.sided.feet[M],b(l.sided.feet[M]))}l.root.updateWorldMatrix(!0,!0),d.ik={};for(const M of[-1,1]){const y=l.sided.upLegs[M],S=l.sided.legs[M],C=l.sided.feet[M],I=y.getWorldPosition(new L),N=S.getWorldPosition(new L),U=C.getWorldPosition(new L);d.ik[M]={upleg:y,leg:S,foot:C,L1:I.distanceTo(N),L2:N.distanceTo(U),uplegRestQ:y.getWorldQuaternion(new Qt),legRestQ:S.getWorldQuaternion(new Qt),footRestQ:C.getWorldQuaternion(new Qt),dirThighRest:N.clone().sub(I).normalize(),dirCalfRest:U.clone().sub(N).normalize()}}const p=g.Hips.parent,x=new Qt;p.getWorldQuaternion(x);const v=new Qt;l.root.getWorldQuaternion(v),d.hipsParentInv=v.invert().multiply(x).invert(),d.hipsRestPos=g.Hips.position.clone();const _=()=>({rotation:{x:0,y:0,z:0},position:{x:0,y:0,z:0},userData:{}}),R={pelvis:_(),spine:_(),chest:_(),neck:_(),head:_(),legs:[{hip:_(),knee:_(),ankle:_(),index:0,side:-1},{hip:_(),knee:_(),ankle:_(),index:1,side:1}],arms:[{shoulder:_(),elbow:_(),wrist:_(),side:-1},{shoulder:_(),elbow:_(),wrist:_(),side:1}],poles:[]};if(s.type==="ski"){const M=ns(3817548);d.poleStab=[];for(const y of[-1,1]){const S=l.sided.hands[y],C=new Se,I=b(S);C.quaternion.copy(I.invert()).multiply(new Qt().setFromAxisAngle(new L(0,1,0),-Math.PI)),C.scale.setScalar(1/Js),S.add(C),d.poleStab.push({hand:S,holder:C});const N=new Se,U=Pe(Tn("pole",()=>new gs(.011,.011,1.05,5)),M);U.position.y=-.38;const H=Pe(Tn("basket",()=>new ir(.045,.03,8)),M);H.position.y=-.85;const W=Pe(Wn("grip",.02,.06),ns(s.accent));W.position.y=.05,N.add(U,H,W),C.add(N),R.poles.push(N)}}const T=new re(new ya(.8,16),new Ie({color:728108,transparent:!0,opacity:.13,depthWrite:!1}));T.rotation.x=-Math.PI/2,n.add(T);const w=r?null:a?{[-1]:{pos:new L(0,.175,-.35),yaw:-Math.PI/2+.32},1:{pos:new L(0,.175,.35),yaw:-Math.PI/2-.12}}:{1:{pos:new L(.175,.2,.03),yaw:0},[-1]:{pos:new L(-.175,.2,.03),yaw:0}},P={root:n,rig:i,gearGroup:o,parts:R,shadow:T,char:l,ctl:d,footAnchors:w,isSled:r,isBoard:a,type:s.type,isSaucer:s.id==="sled-saucer",baseBodyYaw:a?-Math.PI/2:0,gearYawBase:0,_brakeSmooth:0,_brakeSide:1,_wasBraking:!1,_s:{tuck:0,brakeIn:0,steer:0,stumble:0,knocked:0,crouch:0,air:0,shift:0,twist:0,curl:0,sp:0,drift:0,ollie:0}};return En(P,{idle:!0,t:0,dt:1}),P}const Lv=1,bo=new Qt,su=new L,Xr=new L,_o=new L,Bs=new L,qr=new L,Ei=new L,is=new L,Yr=new L,xo=new L,ru=new Nt;new Nt;const Fe=new Qt,Gn=new Qt,au=new Qt,hn=new Qt,ou=new L,cu=new L,Iv=new Qt,lu=new L(-1,0,0),Dv=new L(0,1,0),kv=new Qt().setFromAxisAngle(new L(0,1,0),-Math.PI);function Kr(s,t,e){return xo.crossVectors(t,e).normalize(),is.crossVectors(e,xo).normalize(),ru.makeBasis(is,e,xo),s.setFromRotationMatrix(ru)}function en(s,t,e,n,i){const r=s.joints[t];if(!r)return;const a=r.bone.quaternion.copy(r.restLocal);r.offsetQ&&a.multiply(r.offsetQ),n&&a.multiply(bo.setFromAxisAngle(r.axes.y,n)),e&&a.multiply(bo.setFromAxisAngle(r.axes.x,e)),i&&a.multiply(bo.setFromAxisAngle(r.axes.z,i))}function vo(s){const{ctl:t,parts:e}=s;if(!t)return;const n=e.pelvis;en(t,"hips",n.rotation.x,n.rotation.y,n.rotation.z);const i=-n.position.x/Js,r=(n.position.y-Lv)/Js,a=-n.position.z/Js;su.set(i,r,a).applyQuaternion(t.hipsParentInv),t.joints.hips.bone.position.copy(t.hipsRestPos).add(su);const o=e.spine.rotation,c=e.chest.rotation;en(t,"spine",o.x*.6,o.y*.6,o.z*.6),en(t,"spine1",o.x*.4+c.x*.3,o.y*.4+c.y*.3,o.z*.4+c.z*.3),en(t,"chest",c.x*.7,c.y*.7,c.z*.7);const l=e.neck.rotation;en(t,"neck",l.x*.55,l.y*.55,l.z*.55),en(t,"head",l.x*.45,l.y*.45,l.z*.45);for(const h of e.arms){const u=h.side;en(t,"arm"+u,h.shoulder.rotation.x,h.shoulder.rotation.y,h.shoulder.rotation.z),en(t,"fore"+u,h.elbow.rotation.x,0,0),en(t,"hand"+u,h.wrist.rotation.x,0,0)}if(s.footAnchors){const h=s.gearGroup;s.rig.updateWorldMatrix(!0,!1),s.rig.getWorldQuaternion(hn);const u=s.rigFold??0;if(u>.002){qr.set(-1,0,0).applyQuaternion(hn);const d=s.char.bones;for(const[m,b]of[[t.joints.hips.bone,.42],[d.Spine,.16],[d.Spine01,.16],[d.Spine02,.16],[d.neck,-.42],[d.Head,-.3]])m&&(m.parent.getWorldQuaternion(Fe),Gn.setFromAxisAngle(qr,u*b),m.quaternion.premultiply(au.copy(Fe).invert().multiply(Gn).multiply(Fe)))}const f=(e.pelvis.rotation.y||0)*.55+h.rotation.y*.45;for(const d of[-1,1]){const m=t.ik[d],b=s.footAnchors[d],g=f+(s.kneeKick?s.kneeKick[d]:0);Xr.copy(b.pos).applyQuaternion(h.quaternion).add(h.position),s.rig.localToWorld(Xr),m.upleg.getWorldPosition(_o),Bs.subVectors(Xr,_o);const p=m.L1+m.L2,x=Math.min(Math.max(Bs.length(),p*.3),p*.995);Bs.normalize(),qr.set(-Math.sin(g),0,-Math.cos(g)).applyQuaternion(hn),Ei.crossVectors(qr,Bs),Ei.lengthSq()<1e-6&&Ei.set(-1,0,0).applyQuaternion(hn),Ei.normalize();const v=Math.acos(Math.min(1,Math.max(-1,(m.L1*m.L1+x*x-m.L2*m.L2)/(2*m.L1*x)))),_=Bs.applyAxisAngle(Ei,-v);Kr(Fe,Ei,_),Yr.copy(m.dirThighRest).applyQuaternion(hn),is.copy(lu).applyQuaternion(hn),Kr(Gn,is,Yr);const R=au.copy(Fe).multiply(Gn.invert()).multiply(hn).multiply(m.uplegRestQ);m.upleg.parent.getWorldQuaternion(Fe),m.upleg.quaternion.copy(Fe.invert()).multiply(R),ou.copy(_o).addScaledVector(_,m.L1),cu.subVectors(Xr,ou).normalize(),Kr(Fe,Ei,cu),Yr.copy(m.dirCalfRest).applyQuaternion(hn),is.copy(lu).applyQuaternion(hn),Kr(Gn,is,Yr);const T=Iv.copy(Fe).multiply(Gn.invert()).multiply(hn).multiply(m.legRestQ);m.leg.quaternion.copy(Fe.copy(R).invert()).multiply(T),Fe.setFromAxisAngle(Dv,b.yaw);const w=Gn.copy(hn).multiply(h.quaternion).multiply(Fe).multiply(m.footRestQ);m.foot.quaternion.copy(Fe.copy(T).invert()).multiply(w)}}else for(const h of e.legs){const u=h.side;en(t,"upleg"+u,h.hip.rotation.x,h.hip.rotation.y,h.hip.rotation.z),en(t,"leg"+u,h.knee.rotation.x,0,0),en(t,"foot"+u,h.ankle.rotation.x,h.ankle.rotation.y,h.ankle.rotation.z)}if(t.poleStab){s.rig.getWorldQuaternion(Gn).multiply(kv);for(const h of t.poleStab)h.hand.getWorldQuaternion(Fe),h.holder.quaternion.copy(Fe.invert()).multiply(Gn)}if((s.mittDrag??0)>.05){const h=t.joints["hand-1"]?.bone;h&&(s.mittWorld||(s.mittWorld=new L),h.getWorldPosition(s.mittWorld))}}function Nd(s,t){if(s<0||s>1.1)return 0;const e=(1-Math.exp(-s/.045))*Math.exp(-s/.3),n=s>.38&&s<.72?Math.sin(Math.PI*(s-.38)/.34)*.18:0;return t*(e-n)}function Nv(s,t=ll){if(s<0)return 0;if(s<t){const i=Math.min(1,s/(t*.72));return i*i*(3-2*i)}const e=s-t;if(e>jr+eu)return 0;if(e<jr){const i=e/jr;return 1-2.4*(i*i*(3-2*i))}const n=(e-jr)/eu;return-1.4*(1-n*n*(3-2*n))}function En(s,t={}){const{parts:e,isSled:n,isBoard:i}=s,r=t.t??0,a=t.dt??1/60,o=s._s,c=(K,k,Y)=>K+(k-K)*(1-Math.exp(-a*Y));o.tuck=c(o.tuck,t.tuck??0,5),o.brakeIn=c(o.brakeIn,t.brake??0,7),o.steer=c(o.steer,t.steer??0,6),o.stumble=c(o.stumble,t.stumble??0,6),o.knocked=c(o.knocked,t.knocked??0,9),o.crouch=c(o.crouch,t.crouch??0,10),o.air=c(o.air,t.airborne?1:0,6),o.shift=c(o.shift,t.shift??0,4.5),o.twist=c(o.twist,t.twist??0,8),o.curl=c(o.curl,t.curl??0,8),o.sp=c(o.sp,t.special?t.special.amt:0,12),o.drift=c(o.drift,t.drift??0,6),o.ollie=c(o.ollie,t.ollie??0,30),t.special&&(s._spKind=t.special.kind);const l=o.tuck,h=o.steer,u=o.stumble,f=o.knocked,d=o.crouch,m=o.air,b=o.shift,g=o.twist,p=o.curl,x=o.brakeIn,v=!!t.airborne,_=!!t.idle,R=t.speedNorm??0,T=!!t.switchRide,w=t.lookSide??1,P=T&&!i?1:0,M=i&&T?-1:1,y=o.sp,S=s._spKind,C=o.drift,I=Math.max(0,o.ollie),N=Math.max(0,-o.ollie),U=Math.max(I,N),H=K=>K+U*34,W=(K,k,Y,G,$)=>{let rt=K.userData._sv;rt||(rt=K.userData._sv={x:0,y:0,z:0,px:0,py:0,pz:0});const ct=k[0]==="p",It=k[1],te=ct?K.position[It]:K.rotation[k];if(a>.2){rt[k]=0,ct?K.position[It]=Y:K.rotation[k]=Y;return}G=Math.min(G,1.6/Math.max(a,1e-4));const be=G*G*(Y-te)-2*$*G*rt[k];rt[k]+=be*a;const Bt=te+rt[k]*a;ct?K.position[It]=Bt:K.rotation[k]=Bt},B=(K,k,Y=13,G=.85)=>W(K,"x",k,Y,G),et=(K,k,Y=13,G=.85)=>W(K,"y",k,Y,G),nt=(K,k,Y=13,G=.85)=>W(K,"z",k,Y,G),ft=(K,k,Y=14,G=.9)=>W(K,"px",k,Y,G),Rt=(K,k,Y=14,G=.9)=>W(K,"py",k,Y,G),Ut=(K,k,Y=9,G=.7)=>W(K,"pz",k,Y,G),q=Math.max(-1,Math.min(1,t.longG??0)),st=t.jolt??0;s._nph===void 0&&(s._nph=Math.random()*20);const at=s._nph,tt=_?.25:.5+R*.8+m*1.2,xt=(Math.sin(r*1.13+at)+.6*Math.sin(r*2.71+at*2))*.035*tt,Mt=(Math.sin(r*.97+at*3)+.5*Math.sin(r*2.23+at))*.03*tt,kt=u*Math.sin(r*11)*.32,Yt=u*Math.sin(r*9+1.3)*.45,jt=_?Math.sin(r*1.7)*.5+.5:0;if((t.brake??0)>0&&!s._wasBraking){const K=Math.random()<.5?-1:1;s._brakeSide=Math.abs(h)>.05?h<0?1:-1:K,s._edgeLean=Math.abs(h)>.05?h<0?1:-1:K}s._wasBraking=(t.brake??0)>0;const $t=s._brakeSmooth+=((_||v?0:x)-s._brakeSmooth)*Math.min(1,a*6),F=s._brakeSide*$t,We=n?0:$t*(s._edgeLean??1)*.42;if(nt(s.rig,-h*(n?.28:i?.58:.24)*(1-l*.25)*(1-$t*.6)+We+kt*.4+Mt*.4+f*s._brakeSide*1.35,6.5,.6),n)et(s.gearGroup,F*.25);else{const K=i?-h*.3*(1-$t):0;et(s.gearGroup,s.gearYawBase+F*(i?1.57:1.45)+(i?K:h*-.12),12,.8),i&&(ft(s.gearGroup,-Math.sin(K)*.42,12,.8),Ut(s.gearGroup,.42*(1-Math.cos(K)),12,.8));const k=s.gearGroup.rotation.y,Y=s.rig.rotation.z,G=(1-f)*(i?1:$t),$=-$t*(s._edgeLean??1)*(i?.22:.15),rt=i?-h*.14*(1-l*.25)*(1-$t*.6):0;nt(s.gearGroup,(rt+$-Y*Math.cos(k))*G,7,.6),B(s.gearGroup,Y*Math.sin(k)*G,9,.7)}if(n&&s.isSaucer){Rt(e.pelvis,.58-f*.18),et(e.pelvis,F*.25);const K=.28+x*-.22+l*.18+kt*.6+q*-.2+Mt*.3+f*.4;B(e.spine,K,8,.6),nt(e.spine,-h*.2+xt*.6,8,.6),B(e.chest,.1+l*.12+q*-.14+R*.08,8,.6),B(e.neck,-(K+.1)*.7+q*.2+R*.14,7,.5),nt(e.neck,h*.16+xt*.5,7,.5);for(const Y of e.legs)B(Y.hip,.3+jt*.02+st*.14+Mt*.06,9,.6),nt(Y.hip,Y.side*.14),B(Y.knee,-2.25),B(Y.ankle,.85),et(Y.ankle,0),nt(Y.ankle,0);const k=Math.abs(h)*.3+x*.3;for(const Y of e.arms)B(Y.shoulder,-.6+x*.25+m*-.35+Yt*.6+q*-.3+xt*Y.side*.6+f*.8,8,.5),nt(Y.shoulder,Y.side*(-.22+st*.35+f*.9),8,.5),B(Y.elbow,.4+k,9,.55),B(Y.wrist,-.3,7,.45);vo(s);return}if(n){Rt(e.pelvis,.5-f*.1),et(e.pelvis,F*.25);const K=.14+x*-.25+l*.2+kt*.6+q*-.2+Mt*.3+f*.4;B(e.spine,K,8,.6),nt(e.spine,-h*.2+xt*.6,8,.6),B(e.chest,.1+l*.15+q*-.14+R*.07,8,.6),B(e.neck,-(K+.1)*.7+q*.2+R*.12,7,.5),nt(e.neck,h*.16+xt*.5,7,.5);for(const Y of e.legs)B(Y.hip,1.5+jt*.02+st*.12+Mt*.05,9,.6),B(Y.knee,-.95),B(Y.ankle,-.6),et(Y.ankle,0);const k=Math.abs(h)*.3+x*.25;for(const Y of e.arms)B(Y.shoulder,-.85+x*.3+m*-.3+Yt*.6+q*-.3+xt*Y.side*.6+f*.8,8,.5),nt(Y.shoulder,Y.side*(-.18+st*.35+f*.9),8,.5),B(Y.elbow,.5+k,9,.55),B(Y.wrist,-.3,7,.45);vo(s);return}const zt=i&&!_&&!T?Math.max(0,(h-.45)/.55)*(1-m)*(1-l)*(1-f):0;s.mittDrag=zt;const Kt=_?(i?.2:.14)+jt*.03:(i?.26:.32)+Math.abs(h)*.28+zt*.4+l*(i?.42:.5)+d*(i?.45:.6)+x*.25+f*.9,Lt=y*(S==="jackknife"?.9:S==="grab"?.45:S==="superman"?-.5:0),ce=Math.max(0,Kt*(1-m)+((i?.55:.75)+d*.2+p*.5+Math.abs(g)*.25+Lt+C*.35)*m+I*.8-N*.9),Ct=ce*.8,D=ce*1.65,A=2*(Av*Math.cos(Ct)+Ev*Math.cos(D-Ct));Rt(e.pelvis,A/2+.16+.05+(i?.03:0)-m*.12*(1-N)-f*.35,H(14),.9),Ut(e.pelvis,-b*.11);const V=s.type==="ski"&&!_?h*(1-l)*(1-m)*(1-$t):0;ft(e.pelvis,V*.09,11,.8);const Q=s.baseBodyYaw+F*(i?.5:.8)+(i?Math.min(0,h)*.5:h*.42)*(1-l)+(i?-.45*l:0);et(e.pelvis,Q,7,.7),s.rigFold=l*(i?1.25:1.1)*(1-f);const Z=Math.max(0,d)*(1-m)*(1-f),J=_?.05+jt*.015:(i?.14:.06)+l*(i?-.14:.1)-x*.22+f*.5+b*.22+(i?Math.min(0,h)*.25*(1-l):0),St=y*(S==="jackknife"?1:S==="grab"?.3:S==="superman"?-.4:0),lt=J*(1-m)+(-.08+l*.2+p*.6+St+C*.3)*m,bt=1-l*.8;B(e.spine,lt*.45+Z*.26+I*.26-N*.16+kt*.5+q*-.28*bt+Mt*.4,H(9),.65),nt(e.spine,h*(i?-.12:.08)+kt*.3+xt*.6,9,.65),et(e.spine,-Q*M*(i?.08:.25)+h*(i?.26:.18)+g*.35*m+P*w*.2,9,.65),B(e.chest,lt*.55+l*(i?0:.35)+Z*.12+kt*.5+q*-.22*bt,8.5,.6),nt(e.chest,h*(i?-.12:.04)+xt*.5,8.5,.6),et(e.chest,-Q*M*(i?.14:.3)+h*(i?.22:.14)+(i?l*.35*M:0)+g*.5*m+P*w*.4,8.5,.6),B(e.neck,-(lt+l*.35)*.75-Z*.22+q*.3,6.5,.48),nt(e.neck,h*.38+xt*.9,6.5,.48),et(e.neck,-Q*M*(i?.72:.45)-h*.2+g*.7*m+P*w*1.2*(1-m),6.5,.48),s.kneeKick||(s.kneeKick={[-1]:0,1:0});for(const K of[-1,1]){const k=K*V>0,Y=-V*(k?.5:.22);s.kneeKick[K]+=(Y-s.kneeKick[K])*Math.min(1,a*9)}const yt=(K,k,Y)=>K+(k-K)*Y;s._plant||(s._plant={t:[0,0],prevSteer:0});const it=s._plant,_t=.85;if(it.t[0]=Math.max(0,it.t[0]-a),it.t[1]=Math.max(0,it.t[1]-a),s.type==="ski"&&!_&&!v&&l<.4&&x<.3&&f<.2){const K=Math.abs(h)>.2&&Math.abs(it.prevSteer)<=.2,k=Math.sign(h)!==Math.sign(it.prevSteer)&&Math.abs(h)>.14;if(K||k){const Y=h>0?1:0;it.t[Y]<=0&&(it.t[Y]=_t)}}it.prevSteer=h;const Pt=(K,k,Y)=>{const G=Math.min(1,Math.max(0,(Y-K)/(k-K)));return G*G*(3-2*G)},Dt=it.t.map(K=>K>0?1-K/_t:-1),vt=Dt.map(K=>K<0||K>=.5?0:Math.sin(Math.PI*K*2)),Xt=Dt.map(K=>K<0?0:Pt(.28,.52,K)*(1-Pt(.82,1,K))),Ot=Dt.map(K=>K<0?0:Pt(0,.16,K)*(1-Pt(.82,1,K)));s.rigFold=(s.rigFold??0)+Math.max(Xt[0],Xt[1])*.14;for(const K of e.arms){const k=K.side>0?1:0,Y=K.side*h>0?Math.abs(h):0;let G,$,rt,ct;if(f>.3)G=-1.2+Yt,$=K.side*1.2,rt=.4,ct=0;else if(_)G=.12,$=K.side*.16,rt=.35+Mt*.3,ct=-.15;else if(i)G=yt(.2+Yt+$t*-.3+h*K.side*.25,-1.05+Yt*.5,l),$=yt(K.side*(.55+h*K.side*.3)+$t*K.side*.45,K.side*.32,l),rt=yt(.5+Y*.55+Mt*.35,.1,l),ct=K.side*h*.2*(1-l),$+=K.side*Z*.35,rt=yt(rt,.3,Z*.5),K.side<0&&zt>0&&(G=yt(G,.5,zt),$=yt($,-1.45,zt),rt=yt(rt,.08,zt));else{const It=vt[k],te=Xt[k],be=Ot[k];G=yt(.42+$t*-.35+Yt+h*K.side*.18,-.82,l)+It*.95-te*.85,$=yt(K.side*(.3+$t*.5),K.side*.1,l)+be*K.side*.6,rt=yt(.72+Y*.5+Mt*.3,.15,l)-It*.55+te*.15,ct=yt(.35-$t*.5,.05,l)-It*.85+te*.3,G+=Z*.35,$+=K.side*Z*.2}if(!_&&f<=.3){const It=1.15-Math.abs(g)*.85+u*.4,te=K.side<0?p*.9:p*.25,be=g*.55;let Bt=-.5+Yt+te+Math.abs(g)*.3+g*K.side*.4,ge=K.side*It+be,we=.55+te*.5+Math.abs(g)*.5;y>.01&&(S==="jackknife"?(Bt=yt(Bt,1.35,y),ge=yt(ge,K.side*.35,y),we=yt(we,.15,y)):S==="grab"?K.side<0?(Bt=yt(Bt,1,y),ge=yt(ge,-.55,y),we=yt(we,.1,y)):ge=yt(ge,1.35,y):S==="superman"&&(Bt=yt(Bt,2.3,y),ge=yt(ge,K.side*.2,y),we=yt(we,.05,y))),Bt=yt(Bt,-1,C*.8),ge=yt(ge,K.side*.3,C*.8),we=yt(we,.1,C*.8),G=G*(1-m)+Bt*m,$=$*(1-m)+ge*m,rt=rt*(1-m)+we*m,ct=ct*(1-m)+-.2*m}G+=I*.6-N*1.05,$-=K.side*(I*.3-N*.12),rt+=I*.8-N*.5,ct+=I*.3-N*.25,B(K.shoulder,G+q*-.5+xt*K.side*.7,H(8),.5),nt(K.shoulder,$+st*K.side*.4+Mt*K.side*.5,H(8),.5),B(K.elbow,rt,H(9),.55),B(K.wrist,ct+Mt*.4,H(7),.45)}for(const[K,k]of e.poles.entries()){let Y=0;if(it.t[K]>0){const rt=1-it.t[K]/_t;rt<.26?Y=-1.5*(rt/.26):rt<.72?Y=-1.5+2.6*((rt-.26)/.46):Y=1.1*(1-(rt-.72)/.28)}B(k,yt(_?.55:1.15,2.1,l)-q*.3+Y,4.5,.38),nt(k,-(K===0?-1:1)*Ot[K]*.42,4.5,.38)}vo(s)}const Kn=[{id:"ski-powder",type:"ski",name:"Powder Rockets",deck:14826299,accent:1777190,suit:14042415},{id:"ski-glacier",type:"ski",name:"Glacier GS",deck:2385104,accent:16098851,suit:2381480},{id:"ski-birch",type:"ski",name:"Birch Classics",deck:7030055,accent:14042415,suit:4153416},{id:"ski-neon",type:"ski",name:"Neon Slalom",deck:3130460,accent:1316637,suit:2237482},{id:"board-midnight",type:"board",name:"Midnight Deck",deck:1842988,accent:3718648,suit:3159624},{id:"board-sunset",type:"board",name:"Sunset Camber",deck:15236898,accent:12595240,suit:9057368},{id:"board-split",type:"board",name:"Splitboard 9000",deck:9062600,accent:2873800,suit:5257856},{id:"board-mallow",type:"board",name:"Marshmallow",deck:14696574,accent:1777190,suit:3689108},{id:"sled-steel",type:"sled",name:"Steel Toboggan",deck:4608607,accent:15236898,suit:5267578},{id:"sled-luge",type:"sled",name:"Rocket Luge",deck:12595240,accent:16098851,suit:9183272},{id:"sled-wood",type:"sled",name:"Classic Wood Sled",deck:9067568,accent:3942420,suit:8004664},{id:"sled-saucer",type:"sled",name:"Ice Saucer",deck:2064288,accent:16098851,suit:2647418}];function Mc(s){return Kn.find(t=>t.id===s)||Kn[0]}const hu={ski:"Skis",board:"Snowboard",sled:"Sled"},Ud="freshpow_save_v1",Uv=1e3,ts=[10,25,50,100,250];function Fv(){try{const s=localStorage.getItem(Ud);if(s){const t=JSON.parse(s);if(typeof t.balance=="number"&&t.balance>=0)return t}}catch{}return{balance:Uv,gearId:"board-midnight",outfitId:"fit-classic",owned:[],bet:25,name:"You"}}const Wt=Fv();function $n(){try{localStorage.setItem(Ud,JSON.stringify(Wt))}catch{}}function Fd(){return Wt.balance<ts[0]}function Od(){Wt.balance+=500,$n()}const Ov=.96,Hn=s=>s.map(([t,e,n])=>({pos:t,p:e,mult:n})),ss=[{id:"vermont",theme:"vermont",nation:"🇺🇸",flag:"🍁",name:"Maple Ridge Classic",place:"Stowe Valley, Vermont",tag:"Hometown corduroy under the hardwoods",table:Hn([[1,.2,2],[2,.2,1.4],[3,.2,.8],[4,.2,.5],[5,.2,.1]])},{id:"quebec",theme:"quebec",nation:"🇨🇦",flag:"⚜️",name:"Coupe Cap Boréal",place:"Laurentides, Québec",tag:"Boreal spruce and boilerplate ice",table:Hn([[1,.2,2.5],[2,.2,1.3],[3,.2,.6],[4,.2,.35],[5,.2,.05]])},{id:"colorado",theme:"colorado",nation:"🇺🇸",flag:"🏔️",name:"Ironpeak Open",place:"Roaring Fork, Colorado",tag:"High-altitude bluebird racing",table:Hn([[1,.15,3.2],[2,.2,1.4],[3,.2,.7],[4,.2,.3],[5,.25,0]])},{id:"utah",theme:"utah",nation:"🇺🇸",flag:"🎿",name:"Powder Crown Invitational",place:"Little Cloud Canyon, Utah",tag:"The greatest snow on earth, allegedly",table:Hn([[1,.12,4],[2,.18,1.5],[3,.2,.75],[4,.2,.3],[5,.3,0]])},{id:"bc",theme:"bc",nation:"🇨🇦",flag:"🌲",name:"Ravenspire Backcountry Cup",place:"Coast Range, British Columbia",tag:"Cedar giants and coastal mist",table:Hn([[1,.1,5],[2,.15,1.6],[3,.2,.85],[4,.25,.2],[5,.3,0]])},{id:"chile",theme:"chile",nation:"🇨🇱",flag:"🌋",name:"Volcán Blanco Grand Prix",place:"Andes Centrales, Chile",tag:"Treeless, ruthless, above the clouds",table:Hn([[1,.08,6.5],[2,.15,1.6],[3,.2,.65],[4,.25,.28],[5,.32,0]])},{id:"nz",theme:"nz",nation:"🇳🇿",flag:"🥝",name:"Black Range Masters",place:"Southern Alps, New Zealand",tag:"Tussock, schist and southern speed",table:Hn([[1,.06,8.4],[2,.14,1.8],[3,.2,.75],[4,.27,.2],[5,.33,0]])},{id:"swiss",theme:"swiss",nation:"🇨🇭",flag:"🇨🇭",name:"Silberhorn Super‑G",place:"Wallis, Switzerland",tag:"Glacier ice and world-tour prestige",table:Hn([[1,.05,10],[2,.12,2],[3,.2,.82],[4,.28,.2],[5,.35,0]])},{id:"japan",theme:"japan",nation:"🇯🇵",flag:"🏮",name:"Yukiakari Night Session",place:"Hokkaidō, Japan",tag:"Midnight powder under the lanterns — the big one",table:Hn([[1,.04,12],[2,.1,2.4],[3,.18,1],[4,.3,.2],[5,.38,0]])}];for(const s of ss){const t=s.table.reduce((n,i)=>n+i.p*i.mult,0),e=s.table.reduce((n,i)=>n+i.p,0);if(Math.abs(t-Ov)>1e-9||Math.abs(e-1)>1e-9)throw new Error(`Fresh Pow event ${s.id}: RTP ${t} / psum ${e} out of spec`)}function fa(s){return s.table[0].mult}function Bd(s,t){return t.find(e=>e.pos===s).mult}function Bv(s,t,e){let n=s(),i=e[e.length-1].pos;for(const a of e){if(n<a.p){i=a.pos;break}n-=a.p}const r=e.map(a=>a.pos).filter(a=>a!==i);for(let a=r.length-1;a>0;a--){const o=Math.floor(s()*(a+1));[r[a],r[o]]=[r[o],r[a]]}return{playerPos:i,botPositions:r,bet:t,payout:Math.round(t*Bd(i,e)*100)/100}}const mi=[{id:"fit-classic",name:"Lodge Classic",jacket:16498468,jacket2:1777188,pants:1447964,hat:1777188,accessory:16098851,price:0,tag:"The house colours"},{id:"fit-glacier",name:"Glacier Shell",jacket:3718648,jacket2:16053492,pants:2372679,hat:16053492,accessory:3718648,price:220,tag:"Ice-blue technical shell"},{id:"fit-ember",name:"Ember Kit",jacket:14042415,jacket2:16767306,pants:2830136,hat:14042415,accessory:16098851,price:260,tag:"Warm as a lodge fire"},{id:"fit-midnight",name:"Midnight Stealth",jacket:1777188,jacket2:2830138,pants:1447964,hat:1777188,accessory:8015824,price:340,tag:"All black, purple hits"},{id:"fit-retro",name:"Retro Neon",jacket:14696574,jacket2:8052952,pants:4858928,hat:4114027,accessory:16767306,price:420,tag:"Straight out of 1989"},{id:"fit-forest",name:"Backcountry Forest",jacket:4153416,jacket2:15764526,pants:3945512,hat:15764526,accessory:16053492,price:300,tag:"Earth tones, orange trim"},{id:"fit-arctic",name:"Arctic Whiteout",jacket:16053492,jacket2:8959976,pants:15265524,hat:16053492,accessory:3718648,price:520,tag:"Vanishes into the powder"},{id:"fit-gold",name:"Champion Gold",jacket:16098851,jacket2:1777188,pants:1777188,hat:16767306,accessory:16767306,price:900,tag:"For the podium regular"}],zv={"ski-powder":0,"ski-glacier":180,"ski-birch":240,"ski-neon":360,"board-midnight":0,"board-sunset":200,"board-split":380,"board-mallow":300,"sled-steel":0,"sled-luge":220,"sled-wood":160,"sled-saucer":280},Gv=new Set(["ski-powder","board-midnight","sled-steel","fit-classic"]);function hl(s){return zv[s]??mi.find(t=>t.id===s)?.price??0}function yc(s){return mi.find(t=>t.id===s)??mi[0]}function Ii(s){return Gv.has(s)||(Wt.owned??[]).includes(s)}function zd(s){if(Ii(s))return!1;const t=hl(s);return Wt.balance<t?!1:(Wt.balance=Math.round((Wt.balance-t)*100)/100,Wt.owned=[...Wt.owned??[],s],$n(),!0)}const Hv=[{id:"featured",label:"Featured"},{id:"ski",label:"Skis"},{id:"board",label:"Snowboards"},{id:"sled",label:"Sleds"},{id:"outfit",label:"Outfits"}];function Vv(s){const t=Kn.map(n=>({kind:"ride",id:n.id,type:n.type,name:n.name,price:hl(n.id),colors:[n.deck,n.accent],tag:n.type==="ski"?"Skis":n.type==="board"?"Snowboard":"Sled"})),e=mi.map(n=>({kind:"outfit",id:n.id,type:"outfit",name:n.name,price:n.price,colors:[n.jacket,n.jacket2,n.pants],tag:n.tag,outfit:n}));if(s==="outfit")return e;if(s==="featured"){const n=i=>[...i].sort((r,a)=>a.price-r.price).slice(0,2);return[...n(e),...n(t.filter(i=>i.type==="board")),...n(t.filter(i=>i.type==="ski")),...n(t.filter(i=>i.type==="sled"))]}return t.filter(n=>n.type===s)}const $e=(s,t="0 0 24 24")=>`<svg viewBox="${t}" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${s}</svg>`,Gd={ski:$e('<path d="M3.5 10.5 H16.5 q2.2 0 3.8 -2.6"/><path d="M8.5 10.5 v-1.8 h2.4 v1.8"/><path d="M3.5 16.5 H16.5 q2.2 0 3.8 -2.6"/><path d="M8.5 16.5 v-1.8 h2.4 v1.8"/>'),board:$e('<g transform="rotate(22 12 12)"><rect x="8.2" y="2.5" width="7.6" height="19" rx="3.8"/><path d="M10.2 8.5 h3.6"/><path d="M10.2 15.5 h3.6"/></g>'),sled:$e('<path d="M4 15 h13 a3 3 0 0 0 0 -6"/><path d="M6 15 v-5 h9"/><path d="M4 19 h15"/>')},Hd={race:$e('<path d="M3 18 L10 8 L14 13 L17 10 L21 15"/><path d="M3 21 h18"/>'),combined:$e('<path d="M3 18 L9 9 L13 13 L19 7"/><path d="M15 3 l1.5 3 3 .5 -2.2 2.1 .5 3 -2.8 -1.5 -2.8 1.5 .5 -3 -2.2 -2.1 3 -.5z" fill="currentColor" stroke="none" transform="translate(4 -1) scale(0.5)"/><path d="M3 21 h18"/>'),glade:$e('<path d="M6 21 v-4"/><path d="M3 17 L6 9 L9 17z"/><path d="M18 21 v-5"/><path d="M14 16 L18 6 L22 16z"/><path d="M9 21 C11 17 13 17 15 21"/>'),bigair:$e('<path d="M3 20 C7 20 9 12 12 12"/><path d="M12 12 C15 12 17 4 21 4"/><path d="M12 12 l3 -8"/><circle cx="17" cy="7" r="1.6"/>'),halfpipe:$e('<path d="M3 5 v6 a9 9 0 0 0 18 0 V5"/><path d="M3 5 h3"/><path d="M18 5 h3"/>')},Vd=$e('<path d="M12 2 L21 6 V12 C21 17 17 20.5 12 22 C7 20.5 3 17 3 12 V6 Z"/><path d="M6.5 15 L10 9.5 L12.5 12.5 L14.5 10 L17.5 15 Z" fill="currentColor" stroke="none"/><path d="M9 11 l1 -1.5 1 1.5" stroke-width="1.2"/>'),Sc=$e('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/>'),Wv=$e('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11 V7 a4 4 0 0 1 8 0 v4"/>'),jv=$e('<path d="M5 12 l5 5 L20 7"/>'),Wd=$e('<path d="M4 8 h16 l-1.5 12 h-13z"/><path d="M9 8 V6 a3 3 0 0 1 6 0 v2"/>'),uu=256;let gi=null;const Mo=new Map;function jd(){if(gi)return gi;const s=new ld({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});s.setPixelRatio(1),s.setSize(uu,uu),s.setClearColor(0,0);const t=new Wc;t.add(new vd(14479359,5596538,1.15));const e=new da(16773852,1.7);e.position.set(2.5,4,-3),t.add(e);const n=new da(12575743,.5);n.position.set(-3,1.5,2),t.add(n);const i=new De(30,1,.05,60);return gi={renderer:s,scene:t,camera:i},gi}function du(s,t,e,n,i){const{renderer:r,scene:a,camera:o}=jd();a.add(s),o.position.set(t.x+Math.sin(n)*Math.cos(i)*e,t.y+Math.sin(i)*e,t.z-Math.cos(n)*Math.cos(i)*e),o.lookAt(t),r.render(a,o);const c=r.domElement.toDataURL("image/png");return a.remove(s),c}function Xv(s){const t=s.kind==="ride"?s.id:`${s.id}:${Wt.gearId}`;if(Mo.has(t))return Mo.get(t);let e;if(s.kind==="ride"){const n=Mc(s.id),i=Pv(n),r=new Cn().setFromObject(i),a=r.getSize(new L),o=r.getCenter(new L),c=(Math.hypot(a.x,a.z)*.5+.12)/Math.sin(qv())*.96;e=du(i,o,c,-.72,.62)}else{const n=Mc(Wt.gearId),i=rr(n,16498468,s.outfit);for(let r=0;r<4;r++)En(i,{idle:!0,t:.8,dt:1});e=du(i.root,new L(0,.92,0),3.95,-.55,.14)}return Mo.set(t,e),e}function qv(){return zc.degToRad(jd().camera.fov/2)}function Yv(){gi&&(gi.renderer.dispose(),gi.renderer.forceContextLoss(),gi=null)}const hr=()=>document.getElementById("ui"),Be=s=>(Math.round(s*100)/100).toLocaleString(),Ta=s=>`#${s.toString(16).padStart(6,"0")}`,pa=["st","nd","rd","th","th"],wc=s=>s===1?"p1":s===2?"p2":s===3?"p3":"pn",Kv=["POWDR","ALPINEX","FROSTBITE","YETI OIL","GLACIÈRE"];class $v{constructor(t){this.cb=t,this.gear=Kn.find(i=>i.id===Wt.gearId)??Kn[0],this.outfit=yc(Wt.outfitId),this.type=this.gear.type,this.bet=ts.includes(Wt.bet)?Wt.bet:ts[1],this.riders=[];const e=document.createElement("div");e.id="menu-ui",e.innerHTML=`
      <div class="menu-top">
        <div class="title-block">
          <h1><span class="crest">${Vd}</span>FRESH <span>POW</span></h1>
          <p>place your chips &middot; drop in</p>
        </div>
        <div class="top-right">
          <div class="panel balance-pill">${Sc}<span class="amt" id="balance-amt"></span><small>chips</small></div>
          <button id="shop-btn" class="pill-btn">${Wd} Pro Shop</button>
        </div>
      </div>
      <div class="panel lobby">
        <h3 id="lobby-status">Finding riders&hellip;</h3>
        <ul id="lobby-list"></ul>
      </div>
      <div class="menu-bottom">
        <div class="panel customize">
          <div class="cust-row">
            <div class="type-tabs" id="type-tabs">
              ${["ski","board","sled"].map(i=>`<button class="ttab" data-type="${i}" title="${hu[i]}">${Gd[i]}</button>`).join("")}
            </div>
            <button class="arrow" id="gear-prev" aria-label="previous ride">&#8249;</button>
            <div class="cust-value">
              <div class="cname" id="gear-name"></div>
              <div class="csub" id="gear-sub"></div>
            </div>
            <button class="arrow" id="gear-next" aria-label="next ride">&#8250;</button>
          </div>
          <div class="cust-row">
            <div class="cust-label">Outfit</div>
            <button class="arrow" id="fit-prev" aria-label="previous outfit">&#8249;</button>
            <div class="cust-value">
              <div class="cname" id="fit-name"></div>
              <div class="csub" id="fit-sub"></div>
            </div>
            <button class="arrow" id="fit-next" aria-label="next outfit">&#8250;</button>
          </div>
        </div>
        <div class="panel bet-row" id="bet-row"><span class="lbl">Bet</span></div>
        <button id="start-btn" disabled>Waiting&hellip;</button>
        <div class="paytable-hint">
          Five formats, nine venues &mdash; top prizes up to <b>&times;12</b> &nbsp;&middot;&nbsp; 96% RTP
        </div>
      </div>`,hr().appendChild(e),this.el=e,e.querySelector("#gear-prev").addEventListener("click",()=>this._cycleGear(-1)),e.querySelector("#gear-next").addEventListener("click",()=>this._cycleGear(1)),e.querySelector("#fit-prev").addEventListener("click",()=>this._cycleFit(-1)),e.querySelector("#fit-next").addEventListener("click",()=>this._cycleFit(1));for(const i of e.querySelectorAll(".ttab"))i.addEventListener("click",()=>this._pickType(i.dataset.type));e.querySelector("#shop-btn").addEventListener("click",()=>{Jv({onEquip:()=>{this.gear=Kn.find(i=>i.id===Wt.gearId)??this.gear,this.outfit=yc(Wt.outfitId),this.type=this.gear.type,this._refreshGear(!0),this._refreshFit(!0),this.refreshBalance()},onClose:()=>this.refreshBalance()})});const n=e.querySelector("#bet-row");for(const i of ts){const r=document.createElement("button");r.className="chip",r.innerHTML=`<i>${i}</i>`,r.dataset.v=i,r.addEventListener("click",()=>{this.bet=i,Wt.bet=i,this._refreshBets(),this.cb.onBetChange?.(i)}),n.appendChild(r)}this.startBtn=e.querySelector("#start-btn"),this.startBtn.addEventListener("click",()=>this.cb.onStart?.()),this._lobbyFull=!1,this._refreshGear(!1),this._refreshFit(!1),this._refreshBets(),this.refreshBalance(),this.addRider({name:"You",color:16498468,me:!0})}_ridesOfType(){return Kn.filter(t=>t.type===this.type)}_pickType(t){if(t===this.type)return;this.type=t;const e=this._ridesOfType();this.gear=e.find(n=>Ii(n.id))??e[0],this._refreshGear(!0)}_cycleGear(t){const e=this._ridesOfType(),n=Math.max(0,e.indexOf(this.gear));this.gear=e[(n+t+e.length)%e.length],this._refreshGear(!0)}_cycleFit(t){const e=Math.max(0,mi.indexOf(this.outfit));this.outfit=mi[(e+t+mi.length)%mi.length],this._refreshFit(!0)}_lockLine(t){const e=hl(t);return`<span class="lock">${Wv} ${Be(e)} chips</span><button class="buy-inline" data-buy="${t}">Buy</button>`}_refreshGear(t){const e=this.gear;for(const r of this.el.querySelectorAll(".ttab"))r.classList.toggle("sel",r.dataset.type===this.type);this.el.querySelector("#gear-name").textContent=e.name;const n=this.el.querySelector("#gear-sub");n.innerHTML=Ii(e.id)?`${hu[e.type]}`:this._lockLine(e.id),n.querySelector("[data-buy]")?.addEventListener("click",()=>this._buy(e.id));const i=this.riders.find(r=>r.me);i&&(i.el.querySelector(".ride").textContent=e.name),t&&this.cb.onGearChange?.(e),this._refreshStart()}_refreshFit(t){const e=this.outfit;this.el.querySelector("#fit-name").textContent=e.name;const n=this.el.querySelector("#fit-sub");n.innerHTML=Ii(e.id)?e.tag:this._lockLine(e.id),n.querySelector("[data-buy]")?.addEventListener("click",()=>this._buy(e.id)),t&&this.cb.onOutfitChange?.(e),this._refreshStart()}_buy(t){if(!zd(t)){this.el.querySelector("#balance-amt").classList.add("shake"),setTimeout(()=>this.el.querySelector("#balance-amt")?.classList.remove("shake"),500);return}this.refreshBalance(),this._refreshGear(!0),this._refreshFit(!0)}_refreshBets(){for(const t of this.el.querySelectorAll(".chip")){const e=Number(t.dataset.v);t.classList.toggle("sel",e===this.bet),t.disabled=e>Wt.balance}if(this.bet>Wt.balance){const t=ts.filter(e=>e<=Wt.balance);if(t.length){this.bet=t[t.length-1],Wt.bet=this.bet,this._refreshBets();return}}this._refreshStart()}refreshBalance(){this.el.querySelector("#balance-amt").textContent=Be(Wt.balance),this._refreshBets()}addRider({name:t,color:e,me:n=!1,gearName:i=null}){const r=document.createElement("li");r.innerHTML=`<span class="dot" style="background:${Ta(e)}"></span>
      <span class="who">${t}${n?" (you)":""}</span>
      <span class="ride">${i??""}</span>`,this.el.querySelector("#lobby-list").appendChild(r),this.riders.push({name:t,me:n,el:r}),n&&this._refreshGear(!1);const a=this.riders.length;this.el.querySelector("#lobby-status").textContent=a<5?`Riders ${a}/5 — waiting…`:"Field set — race ready",a>=5&&(this._lobbyFull=!0,this._refreshStart())}_refreshStart(){const t=Wt.balance>=ts[0],e=!Ii(this.gear.id)||!Ii(this.outfit.id),n=this._lobbyFull&&t&&this.bet<=Wt.balance&&!e;this.startBtn.disabled=!n,this.startBtn.textContent=this._lobbyFull?t?e?"Buy to ride":"Drop In":"No chips!":"Waiting…"}destroy(){this.el.remove(),document.getElementById("shop")?.remove()}}function Jv({onEquip:s,onClose:t}){document.getElementById("shop")?.remove();const e=document.createElement("div");e.id="shop",e.innerHTML=`
    <div class="panel shop-card">
      <div class="shop-head">
        <div class="shop-title">${Wd} <b>Pro Shop</b></div>
        <div class="shop-bal">${Sc}<span id="shop-bal"></span></div>
        <button class="shop-close" id="shop-close" aria-label="close">&times;</button>
      </div>
      <div class="shop-tabs" id="shop-tabs">
        ${Hv.map(a=>`<button class="stab" data-tab="${a.id}">${Gd[a.id]??""}${a.label}</button>`).join("")}
      </div>
      <div class="shop-grid" id="shop-grid"></div>
    </div>`,hr().appendChild(e);let n="featured";const i=()=>e.querySelector("#shop-bal").textContent=Be(Wt.balance),r=()=>{for(const o of e.querySelectorAll(".stab"))o.classList.toggle("sel",o.dataset.tab===n);const a=e.querySelector("#shop-grid");a.innerHTML=Vv(n).map(o=>{const c=Ii(o.id),l=o.kind==="ride"?Wt.gearId===o.id:Wt.outfitId===o.id,h=o.colors.map(f=>`<i style="background:${Ta(f)}"></i>`).join(""),u=l?`<button class="item-btn equipped" disabled>${jv} Equipped</button>`:c?`<button class="item-btn" data-equip="${o.id}">Equip</button>`:`<button class="item-btn buy" data-buy="${o.id}"${Wt.balance<o.price?" disabled":""}>${Sc} ${Be(o.price)}</button>`;return`<div class="item-card${l?" on":""}">
          <div class="item-art ${o.kind}"><img src="${Xv(o)}" alt=""><span class="swatch">${h}</span></div>
          <div class="item-name">${o.name}</div>
          <div class="item-tag">${o.tag}</div>
          ${u}
        </div>`}).join("");for(const o of a.querySelectorAll("[data-buy]"))o.addEventListener("click",()=>{zd(o.dataset.buy)&&(i(),r())});for(const o of a.querySelectorAll("[data-equip]"))o.addEventListener("click",()=>{const c=o.dataset.equip;c.startsWith("fit-")?Wt.outfitId=c:Wt.gearId=c,$n(),s?.(),r()})};for(const a of e.querySelectorAll(".stab"))a.addEventListener("click",()=>{n=a.dataset.tab,r()});return e.querySelector("#shop-close").addEventListener("click",()=>{e.remove(),Yv(),t?.()}),i(),r(),e}class Qv{constructor(t){this.format=t;const e=t&&t.scored!=="time",n=!!(t&&t.solo),i=document.createElement("div");i.id="race-ui",i.innerHTML=`
      <div id="countdown" class="hidden"></div>
      <div class="race-top">
        <div class="hud-l">
          <div class="panel" id="rank-box">${n?'<div class="pos solo">SOLO</div><div class="of">run</div>':'<div class="pos">–</div><div class="of">of 5</div>'}</div>
          <div class="panel" id="format-box">${t?Hd[t.id]??"":""}${t?t.short:"RACE"}</div>
          <div class="panel" id="clock-box"${t&&t.scored==="style"?' style="display:none"':""}><div class="clk">0:00.00</div><div class="unit">time</div></div>
          <div class="panel" id="mini-board"${n?' style="display:none"':""}></div>
        </div>
        <div class="hud-r">
          <div class="panel" id="speed-box"><div class="spd">0</div><div class="unit">km/h</div></div>
          <div class="panel" id="style-box"${e?"":' style="display:none"'}><div class="sty">0</div><div class="unit">style</div></div>
        </div>
      </div>
      <div class="panel" id="progress-wrap">
        <div id="progress-bar"><div id="progress-fill"></div></div>
        <div class="plabel">to finish</div>
      </div>
      <div id="trick-toast"></div>
      <div id="stumble-flash"></div>
      <div class="controls-hint" id="controls-hint"></div>`,hr().appendChild(i),this.el=i;const r=matchMedia("(pointer: coarse)").matches;i.querySelector("#controls-hint").textContent=r?"pull ⬅➡ carve · pull ⬆ + hold tuck · pull ⬇ + hold brake · TAP to jump · swipe in air for tricks · diagonal swipe for specials · brake into a lip to knuckle":"A/D carve · hold W tuck · hold S brake · SPACE to jump · tap WASD in air for tricks · two keys together for specials · brake into a lip to knuckle",setTimeout(()=>{const a=i.querySelector("#controls-hint");a&&(a.style.opacity="0")},9e3),this._toastTimer=null}countdown(t){const e=this.el.querySelector("#countdown");e.classList.remove("hidden"),e.textContent=t,e.style.animation="none",e.offsetWidth,e.style.animation="",t===""&&e.classList.add("hidden")}update({rank:t,speed:e,progress:n,board:i,style:r=0,solo:a=!1,clock:o=0}){this.el.querySelector("#clock-box .clk").textContent=xc(Math.max(0,o));const c=pa[t-1]||"th";if(a||(this.el.querySelector("#rank-box .pos").innerHTML=`${t}<small>${c}</small>`),this.el.querySelector("#speed-box .spd").textContent=Math.round(e*3.6),this.el.querySelector("#style-box .sty").textContent=Math.round(r),this.el.querySelector("#progress-fill").style.width=`${Math.min(100,n*100).toFixed(1)}%`,i){const l=this.format&&this.format.scored!=="time";this.el.querySelector("#mini-board").innerHTML=i.map(h=>`<div class="row${h.me?" me":""}">
            <span class="dot" style="background:${Ta(h.color)}"></span>
            <span class="nm">${h.name}</span>${l&&h.pts!=null?`<span class="pts">${Math.round(h.pts)}</span>`:""}${h.done?"🏁":""}</div>`).join("")}}trickToast(t,e=""){const n=this.el.querySelector("#trick-toast");n.innerHTML=`${t}${e?`<small>${e}</small>`:""}`,n.classList.add("show"),clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>n.classList.remove("show"),1400)}stumbleFlash(t){const e=this.el.querySelector("#stumble-flash");e.classList.add("show"),this.trickToast("OOF!",t),setTimeout(()=>e.classList.remove("show"),500)}destroy(){clearTimeout(this._toastTimer),this.el.remove()}}const Xd=s=>`
  <div class="cup-head">
    <span class="cup-crest">${Vd}</span>
    <span class="cup-name">Fresh Pow <b>Cup</b></span>
    <span class="cup-kicker">${s}</span>
  </div>`,qd=()=>`<div class="sponsors">${Kv.map(s=>`<span>${s}</span>`).join("")}</div>`,Tc=s=>`
  <div class="ev-shot" style="background-image:url('events/${s.id}.jpg')">
    <div class="ev-shot-fade"></div>
    <div class="ev-flag">${s.nation??s.flag} <span>${s.place}</span></div>
    ${fa(s)>=6?'<div class="ev-ribbon">Major</div>':""}
    <div class="ev-shot-foot">
      <div class="ev-name">${s.name}</div>
      <div class="ev-top">Top prize <b>&times;${fa(s)}</b></div>
    </div>
  </div>`,Zv=s=>`
  <div class="ev-table">
    ${s.table.map(t=>`<span class="ev-cell ${wc(t.pos)}"><i>${t.pos}${pa[t.pos-1]}</i><b>&times;${t.mult}</b></span>`).join("")}
  </div>`,tM=s=>`
  <div class="stat-chips">
    <span><i>Course</i><b>${s.length.toLocaleString()} m</b></span>
    <span><i>Vert</i><b>${Math.round(s.length*.5).toLocaleString()} m</b></span>
    <span><i>Field</i><b>5</b></span>
    <span><i>Scored on</i><b>${s.scored==="time"?"Time":s.scored==="both"?"Time + Style":"Style"}</b></span>
  </div>`,Ac=(s,t="")=>`
  <div class="ev-format ${t}">
    <span class="fmt-ico">${Hd[s.id]??""}</span>
    <span class="fmt-name">${s.name}</span>
    <span class="fmt-tag">${s.tag}</span>
  </div>`;function eM(s,t,e,n,i){const r=document.createElement("div");r.id="event-roller",r.innerHTML=`
    <div class="ev-card${fa(t)>=6?" ev-hype":""}">
      ${Xd("Tonight's event")}
      <div class="ev-window" id="ev-window"></div>
      <div class="ev-detail" id="ev-detail"></div>
      ${qd()}
    </div>`,hr().appendChild(r);const a=r.querySelector("#ev-window"),o=r.querySelector("#ev-detail"),c=r.querySelector(".ev-card");for(const d of s){const m=new Image;m.src=`events/${d.id}.jpg`}const l=[...s].sort(()=>Math.random()-.5);let h=0,u=70;const f=()=>{if(a.innerHTML=Tc(l[h%l.length]),h++,u*=1.16,u<330)setTimeout(f,u);else{a.innerHTML=Tc(t),c.classList.add("ev-locked"),o.innerHTML=`<div class="ev-tag">${t.tag}</div>${Zv(t)}`;const d=document.createElement("div");d.className="ev-format-slot",o.appendChild(d);const m=[...e].sort(()=>Math.random()-.5);let b=0,g=60;const p=()=>{d.innerHTML=Ac(m[b%m.length]),b++,g*=1.22,g<300?setTimeout(p,g):(d.innerHTML=Ac(n,"fmt-locked")+tM(n),setTimeout(()=>{r.classList.add("ev-out"),setTimeout(()=>{r.remove(),i()},450)},2600))};p()}};return f(),r}function nM({event:s,format:t,standings:e,playerPos:n,bet:i,payout:r,style:a,reveal:o=!1,onAgain:c,onLodge:l}){const h=document.createElement("div");h.id="results";const u=pa[n-1],f=r-i,d=t?.scored??"time",m=!!t?.solo,b=e.find(v=>v.me)?.score;let g=`<div class="score-line">Style points <b>${Be(a)}</b></div>`;b&&d==="both"?g=`<div class="score-line">Time ${Be(b.timePts)} + Style ${Be(b.style)} = <b>${Be(b.total)}</b></div>`:b&&d==="style"?g=`<div class="score-line">Judges' score <b>${Be(b.total)}</b>${b.total<=0?" — no tricks landed":""}</div>`:b&&m&&(g=`<div class="score-line">Your time <b>${xc(b.time)}</b></div>`);const p=v=>v.score?d==="both"?`<span class="sc"><small>${Be(v.score.timePts)} + ${Be(v.score.style)}</small>${Be(v.score.total)}</span>`:d==="style"?`<span class="sc">${Be(v.score.total)}</span>`:m||v.score.time!=null?`<span class="sc">${xc(v.score.time)}</span>`:"":"",x=o?" rv":"";if(h.innerHTML=`
    <div class="panel results-card${s&&fa(s)>=6?" ev-hype":""}">
      ${Xd("Official results")}
      ${s?Tc(s):""}
      ${t?Ac(t):""}
      <div class="big-pos ${wc(n)}${x?" rv-late":""}">${n}<small>${u}</small></div>
      <div class="payout-line${f<0?" loss":""}${x?" rv-late":""}">
        Bet ${Be(i)} &rarr; paid <b>${Be(r)}</b> chips
      </div>
      ${g}
      <ul class="standings">
        ${e.map(v=>`<li class="${v.me?"me ":""}${wc(v.pos)}${x}" data-pos="${v.pos}">
              <span class="p">${v.pos}<small>${pa[v.pos-1]}</small></span>
              <span class="dot" style="background:${Ta(v.color)}"></span>
              <span class="nm">${v.name}</span>
              ${p(v)}
              ${v.me?`<span class="mult">&times;${v.mult}</span>`:""}
            </li>`).join("")}
      </ul>
      <div class="results-btns">
        <button id="res-lodge">Back to Lodge</button>
        <button id="res-again" class="primary">Race Again</button>
      </div>
      ${qd()}
    </div>`,hr().appendChild(h),o){const v=[...h.querySelectorAll(".standings li")].sort((_,R)=>Number(R.dataset.pos)-Number(_.dataset.pos));v.forEach((_,R)=>setTimeout(()=>_.classList.add("in"),500+R*750)),setTimeout(()=>h.querySelectorAll(".rv-late").forEach(_=>_.classList.add("in")),500+v.length*750+200)}return h.querySelector("#res-again").addEventListener("click",()=>{h.remove(),c()}),h.querySelector("#res-lodge").addEventListener("click",()=>{h.remove(),l()}),h}let $r=null;function Yd(){if($r)return $r;const s=document.createElement("canvas");s.width=s.height=96;const t=s.getContext("2d"),e=[[48,48,34,.85],[36,40,20,.6],[60,42,18,.62],[44,60,22,.58],[58,58,15,.55],[38,55,12,.5]];for(const[n,i,r,a]of e){const o=t.createRadialGradient(n,i,1,n,i,r);o.addColorStop(0,`rgba(255,255,255,${a})`),o.addColorStop(.55,`rgba(255,255,255,${a*.45})`),o.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=o,t.fillRect(0,0,96,96)}return $r=new va(s),$r}class Ec{constructor(t,e=900,n={}){this.max=e,this.cursor=0,this.gravity=n.gravity??7.5,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.age=new Float32Array(e).fill(1e9),this.life=new Float32Array(e).fill(1),this.size0=new Float32Array(e),this.aSize=new ue(new Float32Array(e),1),this.aAlpha=new ue(new Float32Array(e),1),this.aShade=new ue(new Float32Array(e).fill(1),1);const i=new _e;this.aPos=new ue(this.pos,3),i.setAttribute("position",this.aPos),i.setAttribute("aSize",this.aSize),i.setAttribute("aAlpha",this.aAlpha),i.setAttribute("aShade",this.aShade);const r=new Rn({transparent:!0,depthWrite:!1,blending:n.blending??Di,uniforms:{uTex:{value:Yd()},uColor:{value:new L(...n.color??[.97,.99,1])}},vertexShader:`
        attribute float aSize; attribute float aAlpha; attribute float aShade;
        varying float vA; varying float vS;
        void main() {
          vA = aAlpha;
          vS = aShade;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = max(1.5, aSize * (240.0 / max(1.0, -mv.z)));
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform sampler2D uTex; uniform vec3 uColor; varying float vA; varying float vS;
        void main() {
          vec4 c = texture2D(uTex, gl_PointCoord);
          gl_FragColor = vec4(uColor * vS, c.a * vA);
        }`});this.points=new Kc(i,r),this.points.frustumCulled=!1,t.add(this.points)}spawn(t,e,n,i,r,a,o,c){const l=this.cursor;this.cursor=(this.cursor+1)%this.max,this.pos[l*3]=t,this.pos[l*3+1]=e,this.pos[l*3+2]=n,this.vel[l*3]=i,this.vel[l*3+1]=r,this.vel[l*3+2]=a,this.age[l]=0,this.life[l]=c,this.size0[l]=o,this.aShade.array[l]=.85+Math.random()*.22}burst(t,e,{count:n=60,speed:i=6,up:r=3.5,spread:a=.8,size:o=.32,life:c=.8}={}){for(let l=0;l<n;l++){const h=(Math.random()-.5)*a*2,u=Math.cos(h),f=Math.sin(h),d=e.x*u-e.z*f,m=e.x*f+e.z*u,b=i*(.4+Math.random()*.9);this.spawn(t.x+(Math.random()-.5)*.5,t.y+.1+Math.random()*.25,t.z+(Math.random()-.5)*.5,d*b,r*(.5+Math.random()),m*b,o*(.6+Math.random()*.8),c*(.6+Math.random()*.8))}}update(t){const{pos:e,vel:n,age:i,life:r,size0:a,max:o}=this,c=this.aSize.array,l=this.aAlpha.array;for(let h=0;h<o;h++){if(i[h]>=r[h]){l[h]=0,c[h]=0;continue}i[h]+=t;const u=i[h]/r[h];n[h*3+1]-=this.gravity*t;const f=1-1.6*t;n[h*3]*=f,n[h*3+1]*=1-.4*t,n[h*3+2]*=f,e[h*3]+=n[h*3]*t,e[h*3+1]+=n[h*3+1]*t,e[h*3+2]+=n[h*3+2]*t;const d=Math.min(1,i[h]/.07);l[h]=Math.pow(1-u,1.2)*d,c[h]=a[h]*(.5+u*1.9)}this.aPos.needsUpdate=!0,this.aSize.needsUpdate=!0,this.aAlpha.needsUpdate=!0,this.aShade.needsUpdate=!0}}class fu{constructor(t,e,n){const i=n.type==="ski"?[{off:-.175,w:.065,wMax:.5,tail:.45},{off:.175,w:.065,wMax:.5,tail:.45}]:n.type==="board"?[{off:0,w:.16,wMax:.62,tail:.32}]:n.id==="sled-saucer"?[{off:0,w:.36,wMax:.4,tail:.25}]:[{off:-.21,w:.045,wMax:.1,tail:.42},{off:.21,w:.045,wMax:.1,tail:.42}];this.tracks=i.map(r=>({...r,trail:new Kd(t,e,r.w)}))}push(t,e,n,i,r=0){const a=Math.cos(n),o=Math.sin(n),c=-Math.sin(n),l=Math.cos(n);for(const h of this.tracks){const u=h.w+(h.wMax-h.w)*r,f=h.tail*(1-r*.8);h.trail.push(t+a*h.off+c*f,e+o*h.off+l*f,i,u)}}update(t){for(const e of this.tracks)e.trail.update(t)}}class Kd{constructor(t,e,n=.34,i=230){this.terrain=e,this.width=n,this.max=i,this.points=[],this.minDist=1.1;const r=new _e;this.aPos=new ue(new Float32Array(i*2*3),3),this.aCol=new ue(new Float32Array(i*2*3),3),this.aNorm=new ue(new Float32Array(i*2*3),3),r.setAttribute("position",this.aPos),r.setAttribute("color",this.aCol),r.setAttribute("normal",this.aNorm);const a=[];for(let c=0;c<i-1;c++){const l=c*2;a.push(l,l+2,l+1,l+1,l+2,l+3)}r.setIndex(a),r.setDrawRange(0,0),this.geo=r,this.mesh=new re(r,new Me({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4})),this.mesh.frustumCulled=!1,t.add(this.mesh);const o=new dt(e.theme?.snow??15923197);this.trackCol=o.clone().multiplyScalar(.75),this.snowCol=o,this.fadeTime=15,this.minDist=.55,this.head=null}push(t,e,n,i=this.width){if(!n){this.points.length&&this.points[this.points.length-1]!==null&&this.points.push(null),this.head=null;return}this.head={x:t,z:e,age:0,w:i};const r=[...this.points].reverse().find(a=>a);if(!(r&&Math.hypot(t-r.x,e-r.z)<this.minDist))for(this.points.push({x:t,z:e,age:0,w:i});this.points.length>this.max-1;)this.points.shift()}update(t){const e=this.points;for(const m of e)m&&(m.age+=t);for(;e.length&&e[0]&&e[0].age>this.fadeTime;)e.shift();for(;e.length&&e[0]===null;)e.shift();const n=e.slice(),i=[...e].reverse().find(m=>m);this.head&&i&&Math.hypot(this.head.x-i.x,this.head.z-i.z)>.03&&n.push(this.head);const r=this.aPos.array,a=this.aCol.array,o=this.aNorm.array,c=new L;let l=0;const h=new dt,u=.05,f=(m,b,g)=>{for(const p of[0,1])r[l*6+p*3]=m,r[l*6+p*3+1]=b,r[l*6+p*3+2]=g,a[l*6+p*3]=h.r,a[l*6+p*3+1]=h.g,a[l*6+p*3+2]=h.b,o[l*6+p*3]=0,o[l*6+p*3+1]=1,o[l*6+p*3+2]=0;l++};let d=!1;for(let m=0;m<n.length&&l<this.max;m++){const b=n[m];if(!b){d=l>0;continue}d&&l<this.max-2&&(f(r[(l-1)*6],r[(l-1)*6+1],r[(l-1)*6+2]),f(b.x,this.terrain.heightAt(b.x,b.z)+u,b.z),d=!1);const g=n[m+1]||null,p=n[m-1]||null;let x=0,v=-1;g?(x=g.x-b.x,v=g.z-b.z):p&&(x=b.x-p.x,v=b.z-p.z);const _=Math.hypot(x,v)||1,R=-v/_,T=x/_,w=this.terrain.heightAt(b.x,b.z)+u,P=b.w??this.width;r[l*6]=b.x+R*P,r[l*6+1]=w,r[l*6+2]=b.z+T*P,r[l*6+3]=b.x-R*P,r[l*6+4]=this.terrain.heightAt(b.x-R*P,b.z-T*P)+u,r[l*6+5]=b.z-T*P,this.terrain.normalAt(b.x,b.z,c),h.copy(this.trackCol).lerp(this.snowCol,Math.min(1,b.age/this.fadeTime));for(const M of[0,1])a[l*6+M*3]=h.r,a[l*6+M*3+1]=h.g,a[l*6+M*3+2]=h.b,o[l*6+M*3]=c.x,o[l*6+M*3+1]=c.y,o[l*6+M*3+2]=c.z;l++}this.geo.setDrawRange(0,Math.max(0,(l-1)*6)),this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aNorm.needsUpdate=!0}}function $d(s=lr.utah){const t=new or(2600,16,10),e=new Rn({side:Ge,depthWrite:!1,fog:!1,uniforms:{top:{value:new dt(s.skyTop)},bottom:{value:new dt(s.skyBottom)}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec3 top; uniform vec3 bottom; varying vec3 vDir;
      void main() {
        float t = clamp(vDir.y * 1.3 + 0.28, 0.0, 1.0);
        gl_FragColor = vec4(mix(bottom, top, t), 1.0);
      }`}),n=new re(t,e);return n.frustumCulled=!1,n}const Rc={shadows:!0};function Jd(s,t=lr.utah){const e=new vd(t.hemiSky,t.hemiGround,t.hemiI);s.add(e);const n=new da(t.sunCol,t.sunI);if(n.position.set(75,85,35),s.add(n),s.add(n.target),Rc.shadows){n.castShadow=!0,n.shadow.mapSize.set(1024,1024);const i=n.shadow.camera;i.left=-26,i.right=26,i.top=26,i.bottom=-26,i.near=1,i.far=320,n.shadow.bias=-4e-4,n.shadow.normalBias=.5}return{hemi:e,sun:n}}function Qd(s,t){s.position.set(t.x+75,t.y+85,t.z+35),s.target.position.copy(t)}class Zd{constructor(t,e=450,n=70){this.range=n;const i=new Float32Array(e*3);this.vel=new Float32Array(e);for(let o=0;o<e;o++)i[o*3]=(Math.random()-.5)*n*2,i[o*3+1]=(Math.random()-.5)*n,i[o*3+2]=(Math.random()-.5)*n*2,this.vel[o]=1.5+Math.random()*2.5;const r=new _e;r.setAttribute("position",new ue(i,3));const a=new Yc({color:16777215,map:Yd(),size:.3,transparent:!0,opacity:.85,alphaTest:.02,sizeAttenuation:!0,depthWrite:!1});this.points=new Kc(r,a),this.points.frustumCulled=!1,t.add(this.points),this.center=new L}update(t,e){this.center.copy(e),this.points.position.copy(e);const n=this.points.geometry.attributes.position,i=this.range;for(let r=0;r<n.count;r++){let a=n.getY(r)-this.vel[r]*t;a<-i/2&&(a+=i),n.setY(r,a),n.setX(r,n.getX(r)+Math.sin((a+r)*.5)*t*.6)}n.needsUpdate=!0}}const iM=["PowderPete","alpine_ana","YetiLars","carve_queen","BigAirBen","SluffDog","glacier_gal","MogulMax","heli_hank","IceViper","SnowcatSam","backcountry_bea","AvyDodger","CorduroyKid","FirstChair","wax_wizard"],sM=[15231548,5488880,12154856,8248162,15777866,15760048,9347327,6478784];function rM(s){const t=[...iM],e=[...sM],n=[];for(let i=0;i<4;i++){const r=Math.floor(s()*t.length),a=Math.floor(s()*e.length);n.push({name:t.splice(r,1)[0],color:e.splice(a,1)[0]})}return n}function tf(s){const t=Qn(s^24301),e=rM(t),n=e.map(()=>Kn[Math.floor(t()*Kn.length)]),i=[0,1,3,4].sort(()=>t()-.5);return e.map((r,a)=>({identity:r,gear:n[a],lane:i[a]}))}const aM=.2;class oM{constructor(t,e){this.seed=t,this.onStart=e,this.scene=new Wc,this.scene.fog=new xa(14479359,220,1100),this.camera=new De(64,innerWidth/innerHeight,.1,4e3),this.terrain=new Id(t);const n=new Se;this.terrain.build(n),this.scene.add(n),this.scene.add($d()),this.sun=Jd(this.scene).sun;const i=this.terrain.gateLanes[2];Qd(this.sun,new L(i.x,this.terrain.heightAt(i.x,i.z),i.z)),this.snow=new Zd(this.scene,350),this.gate=new Ed(this.terrain),this.scene.add(this.gate.group),this._laneNames=[null,null,"You",null,null],this.gate.setRoster(this._laneNames),this.fx=new Ec(this.scene,220);const r=tf(t);this.botIdentities=r.map(o=>o.identity),this.botGear=r.map(o=>o.gear),this.botLanes=r.map(o=>o.lane);const a=Qn(t^68529);this.hero=new L(i.x,0,i.z-12),this.hero.y=this.terrain.groundAt(this.hero.x,this.hero.z),this.playerRider=null,this._dress(),this.joinQueue=this.botIdentities.map((o,c)=>({at:.25+a()*1.65,identity:o,gear:this.botGear[c],lane:this.botLanes[c],joined:!1})),this.botRiders=[],this.hud=new $v({onGearChange:o=>{Wt.gearId=o.id,$n(),this._dress()},onOutfitChange:o=>{Wt.outfitId=o.id,$n(),this._dress()},onBetChange:()=>$n(),onStart:()=>this._start()}),this.t=0,window.__fp={menu:this,setPose:En}}_dress(){this.playerRider&&this.scene.remove(this.playerRider.root);const t=Mc(Wt.gearId),e=yc(Wt.outfitId);this.playerRider=rr(t,16498468,e),this.playerRider.root.position.copy(this.hero),this._standOnSnow(this.playerRider),this.scene.add(this.playerRider.root)}_standOnSnow(t){const e=t.root.position,n=this.terrain.groundNormalAt(e.x,e.z);t.root.quaternion.setFromUnitVectors(new L(0,1,0),n),e.y+=.09}_start(){$n(),this.onStart({seed:this.seed,bet:this.hud.bet,gear:this.hud.gear,outfit:this.hud.outfit,bots:this.botIdentities.map((t,e)=>({identity:t,gear:this.botGear[e],lane:this.botLanes[e]}))})}update(t){this.t+=t;for(const c of this.joinQueue)if(!c.joined&&this.t>=c.at){c.joined=!0;const l=rr(c.gear,c.identity.color),h=this.terrain.gateLanes[c.lane];l.root.position.set(h.x,this.terrain.groundAt(h.x,h.z),h.z),this._standOnSnow(l),this.scene.add(l.root),this.botRiders.push(l),this.hud.addRider({name:c.identity.name,color:c.identity.color,gearName:c.gear.name}),this._laneNames[c.lane]=c.identity.name,this.gate.setRoster(this._laneNames)}for(const[c,l]of this.botRiders.entries())En(l,{idle:!0,t:this.t+c*1.7,dt:t}),l.rig.rotation.z=Math.sin(this.t*1.3+c*2.1)*.03;this.playerRider&&En(this.playerRider,{idle:!0,t:this.t,dt:t});const e=this.hero,n=Math.sin(this.t*.22)*.75,i=4,r=e.x+Math.sin(n)*i,a=e.z-Math.cos(n)*i,o=Math.max(e.y+.9+Math.sin(this.t*.31)*.12,this.terrain.groundAt(r,a)+.7);this.camera.position.set(r,o,a),this.camera.lookAt(e.x,e.y+1.4,e.z),this.gate.update(t,this.t,this.fx,null,this.camera.position.z),this.fx.update(t),this.snow.update(t,this.camera.position)}resize(t,e){this.camera.aspect=t/e,this.camera.setViewOffset(t,e,0,Math.round(e*aM),t,e),this.camera.updateProjectionMatrix()}destroy(){this.hud.destroy()}}const ut=1,pu=8,ef=15,mu=.0095/(ut*ut),cM=.55,lM=14*ut,zs=1.15,gu=320,hM=.86,uM=Math.sqrt(2*ef*hM),dM=ll+.34,bu=.35,fM={left:"Backside 360",right:"Frontside 360",up:"Front Flip",down:"Backflip"},pM={left:"Backside 180",right:"Frontside 180"},mM={"left+up":{name:"Backside Rodeo",spin:-1,flip:-1,roll:.6,pose:"grab"},"right+up":{name:"Misty Flip",spin:1,flip:-1,roll:-.6,pose:"grab"},"left+down":{name:"Backside Jackknife",spin:-1,flip:0,roll:.45,pose:"jackknife"},"right+down":{name:"Frontside Superman",spin:1,flip:0,roll:-.45,pose:"superman"}},_u=250,xu=120,gM=150,bM=150,_M=15*Math.PI/180,vu=new L(0,1,0),xM=new L(0,0,-1),Mu=new Qt,un=Math.PI*2,yo=s=>s==="up"||s==="down";class vM{constructor(t,e,n,i,r=null){this.terrain=t,this.input=n,this.hud=i,this.rider=rr(e,16498468,r),this.obj=this.rider.root,this._mats=[],this.obj.traverse(a=>{a.isMesh&&a!==this.rider.shadow&&(a.material=a.material.clone(),this._mats.push(a.material))}),this._ghost=1,this.immuneT=0,this._tilt=new Qt,this._yawQ=new Qt,this._n=new L,this.isSled=e.type==="sled",this.isBoard=e.type==="board",this.pos=new L,this.yaw=0,this.travelYaw=0,this.edge=0,this.latA=0,this.slip=0,this.speed=0,this.vy=0,this.airborne=!1,this.stumbleT=0,this.frozen=!0,this.finished=!1,this.groundVy=0,this.landComp=0,this._landT=-1,this._landAmp=0,this.fx=null,this.t=0,this.knockT=0,this._wasBraking=!1,this.bump=0,this.trickSpin=0,this.trickFlip=0,this.spinDone=0,this.flipDone=0,this.combo=[],this.style=0,this.pending=0,this._pipeReturn=0,this._boostT=0,this._pendDir=null,this._special=null,this._roll=new Qt,this._knuckle=!1,this.switchRide=!1,this._ollieT=-1,this._olliePopped=!1,this._halfDone=!1,this._lookSide=1,this._onSwipe=a=>this._trick(a),n.onSwipe=this._onSwipe}placeAt(t,e){this.pos.set(t,this.terrain.groundAt(t,e),e),this._sync(0)}get progress(){return-this.pos.z}_trick(t){if(!this.airborne||this.finished)return;const e=performance.now(),n=this._pendDir;if(n&&e-n.at<xu&&yo(t)!==yo(n.dir)){this._pendDir=null,this._specialTrick(n.dir,t);return}n&&(this._pendDir=null,this._basicTrick(n.dir)),this._pendDir={dir:t,at:e}}_flushTrick(t=!1){const e=this._pendDir;e&&(t||performance.now()-e.at>=xu)&&(this._pendDir=null,this.airborne&&!this.finished&&this._basicTrick(e.dir))}_basicTrick(t){let e=fM[t];if(t==="left"||t==="right"){const n=this.switchRide&&!this._halfDone,i=n?Math.PI:un;this.trickSpin+=t==="left"?-i:i,n&&(this._halfDone=!0,e=pM[t])}else t==="up"?this.trickFlip-=un:this.trickFlip+=un;this._score(e,this._knuckle?gM:100)}_specialTrick(t,e){const n=yo(t)?`${e}+${t}`:`${t}+${e}`,i=mM[n];i&&(i.spin&&(this.trickSpin+=i.spin*(this.switchRide&&!this._halfDone?Math.PI:un)),this.switchRide&&!this._halfDone&&i.spin&&(this._halfDone=!0),i.flip&&(this.trickFlip+=i.flip*un),this._special={kind:i.pose,roll:i.roll,t:0},this._score(i.name,this._knuckle?_u*1.5:_u))}_score(t,e){this.combo.push(t),this.pending+=Math.round(e*this.combo.length),this.hud&&this.hud.trickToast(this.combo.join(" + "),`${this.pending} riding on the landing${this._knuckle?" · knuckle":""}`)}update(t){const e=this.terrain,n=this.input;if(this.t+=t,this.frozen){this._sync(t),En(this.rider,{tuck:n.tuck?1:0,idle:!n.tuck,t:this.t});return}this.knockT>0&&(this.knockT-=t);const i=Math.max(0,Math.min(1,Math.min(this.knockT*3,(1.7-this.knockT)*4)));if(this.finished){this.speed=Math.max(0,this.speed-11*ut*t);const m=new L(Math.sin(this.yaw),0,-Math.cos(this.yaw)),b=this.pos.x+m.x*this.speed*t,g=this.pos.z+m.z*this.speed*t;this.pos.set(b,this.terrain.groundAt(b,g),g),this.airborne=!1,this._sync(t),En(this.rider,{brake:this.speed>1.5*ut?1:0,idle:this.speed<=1.5*ut,t:this.t,dt:t});return}const r=n.consumeJump(),a=this.stumbleT>0||this.knockT>0;this.stumbleT>0&&(this.stumbleT-=t),this.immuneT>0&&(this.immuneT-=t),this._boostT>0&&(this._boostT-=t);const o=this.progress;this._landT>=0&&(this._landT+=t,this.landComp=Nd(this._landT,this._landAmp),this._landT>1.1&&(this._landT=-1));const c=a?n.steer*.25:n.steer;if(this.isSled){const m=pt(c,-1,1)*zs;this.yaw=xe(this.yaw,m,pt(t*(this.airborne?1:2.8),0,1))}else if(this.airborne){const m=pt(c,-1,1)*zs;this.yaw=xe(this.yaw,m,pt(t*1,0,1)),this.edge=xe(this.edge,pt(c,-1,1),pt(t*2,0,1))}else{this.edge=xe(this.edge,pt(c,-1,1),pt(t*2.4,0,1));const m=this.edge*ut*(.55+.75*pt(this.speed/(24*ut),0,1.2));this.yaw+=m*t;const b=Math.abs(c)<.12?.9:.2;this.yaw=xe(this.yaw,0,pt(t*b,0,1)),this.yaw=pt(this.yaw,-zs,zs)}if(!this.airborne){const m=this.input.brake&&!a;let b;this.isSled?b=(4.2-2.6*pt(this.speed/(40*ut),0,1))*.7*(m?.55:1):m?b=2:b=8.5-2.2*pt(this.speed/(40*ut),0,1),a&&(b*=.7);const g=this.travelYaw;this.travelYaw=xe(this.travelYaw,this.yaw,pt(t*b,0,1));const p=t>0?(this.travelYaw-g)/t:0;this.latA=xe(this.latA,this.speed*p,pt(t*5,0,1))}this.slip=this.yaw-this.travelYaw;const l=new L(Math.sin(this.travelYaw),0,-Math.cos(this.travelYaw));if(r&&!this.airborne&&!a&&!(this._grindT>0)&&(this._ollieT=0,this._olliePopped=!1),this._ollieT>=0&&(this._ollieT+=t,!this._olliePopped&&this._ollieT>=ll&&(this._olliePopped=!0,!this.airborne&&!a&&(this.airborne=!0,this.vy=uM,this.speed=Math.max(0,this.speed-.35*ut),this.fx&&this.fx.burst(this.pos,l,{count:26,speed:3,up:3.2,spread:1.3,size:.22}))),(this._ollieT>dM||a||!this._olliePopped&&this.airborne)&&(this._ollieT=-1)),this.airborne){this._prevPipeQ=null,this._flushTrick(),this.vy-=ef*(this._knuckle?.55:1)*t,this.speed=Math.max(0,this.speed-mu*(this._knuckle?.2:.4)*this.speed*this.speed*t),this._special&&(this._special.t+=t);let m=this.pos.x+l.x*this.speed*t,b=this.pos.z+l.z*this.speed*t;({nx:m,nz:b}=this._tubeClamp(m,b,l));const g=this.pos.y+this.vy*t;if(!(this._grindT>0)){const T=e.grindAt(m,-b);if(T&&g<T.topY+.15&&g>T.topY-1.05){const w=Math.sign(T.lat||1)*1.15;m=T.gx+T.ax*T.along+T.az*w,b=-(T.gs0+T.az*T.along-T.ax*w),this.speed*=.4}}const p=e.groundAt(m,b),x=6.2,v=5.4,_=this.spinDone,R=this.flipDone;if(this.spinDone=yu(this.spinDone,this.trickSpin,x*t),this.flipDone=yu(this.flipDone,this.trickFlip,v*t),t>0&&(this.twist=xe(this.twist??0,pt((this.spinDone-_)/t/7,-1,1),pt(t*9,0,1)),this.curl=xe(this.curl??0,pt(Math.abs(this.flipDone-R)/t/6,0,1),pt(t*9,0,1))),g<=p){this._flushTrick(!0),this.pos.set(m,p,b),this.airborne=!1;const T=Math.abs(this.trickSpin-this.spinDone),w=Math.abs(this.trickFlip-this.flipDone),P=this.switchRide?Math.PI:0,M=((P+this.spinDone)%un+un)%un,y=w<=.9&&T>.9&&Math.abs(M-Math.PI)<=_M,S=!y&&(T>.9||w>.9),C=Math.min(1,-this.vy/14);if(this._landT=0,this._landAmp=.45+C*.55,this.fx&&this.fx.burst(this.pos,l,{count:32+Math.round(C*80),speed:3+C*6,up:2.5+C*3,spread:1.4,size:.28}),S)this.stumble(this.pending>0?`crashed the landing — lost ${this.pending}`:"crashed the landing"),this.pending=0;else if(this.combo.length){this.speed+=1.5*ut;const I=this.switchRide;if(y){const N=this.combo.length-1;this.combo[N]=this.combo[N].replace("360","180"),this.switchRide=!I,this._lookSide=this.spinDone<0?-1:1}else this.switchRide=Math.abs(((P+this.trickSpin)%un+un)%un-Math.PI)<.01;this.switchRide&&!I&&(this.pending+=bM,this.combo.push("Switch landing")),this.style+=this.pending,this.hud&&this.hud.trickToast(`STOMPED IT  +${this.pending}`,this.combo.join(" + ")),this.pending=0}this.pending=0,this.trickSpin=this.spinDone=0,this.trickFlip=this.flipDone=0,this.combo=[],this._special=null,this._knuckle=!1,this._halfDone=!1,this.vy=0,this._pipeReturn&&(this.yaw=this.travelYaw=this._pipeReturn*1.1,this._pipeReturn=0)}else this.pos.set(m,g,b)}else{const b=e.groundAt(this.pos.x,this.pos.z),g=e.groundAt(this.pos.x+l.x*1.6,this.pos.z+l.z*1.6),p=(b-g)/1.6;let x=pu*p;const v=n.tuck&&!a,_=n.brake&&!a,R=_&&e.nearGrindEntry(this.pos.x,-this.pos.z),T=mu*(v?cM:1)*(_?R?1.4:4:1)*(this._boostT>0?.35:1);if(x-=T*this.speed*this.speed,_&&(x-=lM*(R?.18:1)),a&&(x-=6*ut),this.knockT>0&&(x-=10*ut),v&&this.speed<5&&!_&&(x+=3.4+Math.max(0,-p)*pu*.95),_&&!this._wasBraking&&this.fx&&this.speed>8*ut){const y=Math.sign(n.steer)||1;this.fx.burst(this.pos,{x:y*-l.z,z:y*l.x},{count:130,speed:5,up:3,spread:1.1,size:.24})}this._wasBraking=_,x-=Math.abs(this.slip)*this.speed*.055,this.isSled||(x-=Math.abs(this.edge)*this.speed*(this.isBoard?.058:.046)),this._grindT>0&&(x=-.5),this.speed=Math.max(0,this.speed+x*t);let w=this.pos.x+l.x*this.speed*t,P=this.pos.z+l.z*this.speed*t;for(const y of e.ledgeWallsAt(-P)){const S=(this.pos.x-y.x)*y.side,C=(w-y.x)*y.side;S<.05&&C>-.35&&(w=y.x-y.side*.4,this.speed*=Math.abs(l.z)*.85)}let M=!1;if(n.brake&&!a&&this.speed>5*ut){const y=e.grindAt(w,-P);y&&(this._grindT>0||this.pos.y>y.topY-1.4)&&(M=!0,this._grindT=(this._grindT||0)+t,this.travelYaw=y.yaw,this.pos.set(y.px,y.topY,y.pz),this.vy=0,this.groundVy=0,this.style+=45*t)}if(!M&&this._grindT>0){const y=this._grindT;this._grindT=0,this.airborne=!0,this.vy=2.4,this.pos.set(w,this.pos.y+this.vy*t,P),this.hud&&y>.35&&(this.hud.trickToast("LOG GRIND",`${y.toFixed(1)}s on the rail`),this.style+=60+Math.round(y*45)),M=!0}if(!M){({nx:w,nz:P}=this._tubeClamp(w,P,l));const y=e.groundAt(w,P),S=this.groundVy,C=t>0?(y-this.pos.y)/t:0;this.groundVy=xe(this.groundVy,pt(C,-30*ut,30*ut),pt(t*10,0,1));const I=e.pipeAt(w,-P);let N=!1;if(I&&Math.abs(I.q)>=I.lipQ&&this._prevPipeQ!=null&&Math.abs(this._prevPipeQ)<I.lipQ&&this.groundVy>3*ut&&this.speed>7*ut){N=!0,this.airborne=!0,this.vy=pt(this.groundVy*.9,5,13),performance.now()-n.lastTuckRelease<gu&&(this.vy+=4.2,this.hud&&this.hud.trickToast("POP!","off the lip"));const U=0,H=l.z*this.speed;this._pipeReturn=-Math.sign(I.q),this.speed=Math.hypot(U,H),this.travelYaw=Math.atan2(U,-H),this.pos.set(w,this.pos.y+this.vy*t,P)}if(this._prevPipeQ=I?I.q:null,N||(y<this.pos.y-Math.max(.55,.9*this.speed*t)&&this.speed>6*ut?(this.airborne=!0,this.vy=pt(S,0,e.launchCapAt(-P)),_&&this.speed>8*ut?(this._knuckle=!0,this.vy=Math.max(.8,this.vy*.35),this.speed*=1.12,this.hud&&this.hud.trickToast("KNUCKLE HUCK","drifted the lip")):performance.now()-n.lastTuckRelease<gu&&(this.vy+=4.2,this.hud&&this.hud.trickToast("POP!","perfect release")),this.pos.set(w,this.pos.y+this.vy*t,P)):(this.pos.set(w,y,P),this.vy=0)),this.airborne||this._collide(),!this.airborne&&!a){const U=e.boostGateAt(this.pos.x,o,this.progress);U&&(this.speed=Math.min(this.speed+7*ut,46*ut),this._boostT=1.6,e.flashGate(U),this.hud&&this.hud.trickToast("BOOST!","gate threaded"),this.fx&&this.fx.burst(this.pos,l,{count:60,speed:5,up:2,spread:1.2,size:.24}))}}}if(this.fx&&!this.airborne&&!(this._grindT>0)&&this.speed>7*ut){const m=Math.abs(this.slip)*2.2+Math.abs(this.latA)/(11*ut*ut)+Math.abs(this.yaw)/zs*.25,b=n.brake&&!a?1:0,p=(.15+m*1.6+b*3+(a?2:0))*this.speed*(.9/ut);this._sprayAcc=(this._sprayAcc||0)+p*t*60;const x=Math.sign(this.yaw)||(Math.random()<.5?-1:1);for(;this._sprayAcc>=1;){this._sprayAcc-=1;const v=.6+Math.random()*.5;this.fx.spawn(this.pos.x-l.x*v+x*-l.z*.35,this.pos.y+.16,this.pos.z-l.z*v+x*l.x*.35,-l.x*2+x*-l.z*(1.5+m*4+b*5)+(Math.random()-.5)*2,1.2+m*2+b*2.5+Math.random()*1.5,-l.z*2+x*l.x*(1.5+m*4+b*5)+(Math.random()-.5)*2,.15+m*.1+b*.15,.5+Math.random()*.4)}}const h=this.rider.mittDrag??0;if(this.fx&&!this.airborne&&h>.4&&this.rider.mittWorld&&this.speed>8*ut){this._mittAcc=(this._mittAcc||0)+h*this.speed*(.26/ut)*t*60;const m=this.rider.mittWorld;for(;this._mittAcc>=1;)this._mittAcc-=1,this.fx.spawn(m.x+(Math.random()-.5)*.12,m.y-.05,m.z+(Math.random()-.5)*.12,-l.x*1.5+(Math.random()-.5)*.8,.6+Math.random()*.7,-l.z*1.5+(Math.random()-.5)*.8,.1+Math.random()*.05,.3+Math.random()*.25)}this._sync(t);const u=this.airborne?0:pt(Math.abs(this.groundVy)*.045,0,.4);this.bump=xe(this.bump,u,pt(t*5,0,1)),this.airborne||(this.twist=xe(this.twist??0,0,pt(t*10,0,1)),this.curl=xe(this.curl??0,0,pt(t*10,0,1)));const f=t>0?(this.speed-(this._prevSpeed??this.speed))/t:0;this._prevSpeed=this.speed,this.longA=xe(this.longA??0,pt(f,-18,12),pt(t*7,0,1));const d=this._special?Math.sin(Math.PI*pt(this._special.t/.9,0,1)):0;En(this.rider,{tuck:n.tuck&&!a?1:0,brake:n.brake&&!a?1:0,steer:pt(this.latA/(11*ut*ut),-1,1)*(this.switchRide?-1:1),switchRide:this.switchRide,lookSide:this._lookSide,special:this._special?{kind:this._special.kind,amt:d}:null,drift:this._knuckle&&this.airborne?1:0,shift:pt((n.tuck?.45:0)-Math.abs(this.slip)*1.3-(n.brake?.5:0),-1,.5),stumble:this.stumbleT>0?1:0,knocked:i,airborne:this.airborne,crouch:pt(this.landComp+this.bump,-.2,1),ollie:this._ollieT>=0?Nv(this._ollieT):0,speedNorm:pt(this.speed/(26*ut),0,1),longG:pt(this.longA/(11*ut),-1,1),jolt:this.bump*1.3,twist:this.twist??0,curl:this.curl??0,t:this.t,dt:t})}_tubeClamp(t,e,n){for(const r of this.terrain.hollowTubes){const a=-e-r.s0,o=t-r.x,c=o*r.ax-a*r.az;if(Math.abs(c)>r.halfL)continue;const l=o*r.az+a*r.ax,h=-this.pos.z-r.s0,u=this.pos.x-r.x,f=u*r.ax-h*r.az,d=u*r.az+h*r.ax,{rIn:m,rOut:b}=Cd(r,c),g=r.axY0+c*r.axSlope;let p=1/0,x=0;for(const P of[.12,1.5]){const M=this.pos.y+P-g;Math.abs(M)>=b||(x=Math.max(x,Math.sqrt(b*b-M*M)),p=Math.min(p,Math.abs(M)<m?Math.sqrt(m*m-M*M):0))}if(x===0)continue;p===1/0&&(p=0);const v=Math.abs(l);if(v+.55<=p||v-.55>=x)continue;if(Math.abs(f)>r.halfL){const P=Math.sign(f)*(r.halfL+.35);t=r.x+r.ax*P+r.az*l,e=-(r.s0-r.az*P+r.ax*l),this.speed*=.25,!this.airborne&&this.stumbleT<=0&&this.immuneT<=0&&this.stumble("slammed a log");continue}const _=Math.max(0,p-.55),R=x+.55,T=Math.sign(l||d||1)*(v-_<=R-v?_:R);t=r.x+r.ax*c+r.az*T,e=-(r.s0-r.az*c+r.ax*T);const w=n.x*r.ax+n.z*r.az;this.travelYaw=w>=0?Math.atan2(r.ax,-r.az):Math.atan2(-r.ax,r.az),this.speed*=Math.min(1,Math.abs(w))*.9}return{nx:t,nz:e}}knockDown(t){if(!(this.knockT>0)&&(this.knockT=1.7,this.speed*=.25,this.switchRide=!1,this.hud&&this.hud.stumbleFlash(`taken out by ${t}!`),this.fx)){const e=new L(Math.sin(this.yaw),0,-Math.cos(this.yaw));this.fx.burst(this.pos,e,{count:130,speed:6,up:4.5,spread:2.6,size:.28})}}_collide(){if(this.stumbleT>0||this.immuneT>0)return;const t=this.progress;for(const e of this.terrain.obstaclesNear(t-6,t+6)){const n=this.pos.x-e.x,i=this.pos.z-e.z;if(e.kind==="rock"){const a=e.r+bu;if(n*n+i*i>a*a)continue;const o=Ld(e,n,i);if(o.depth>-bu){this.stumble("hit a boulder"),this.pos.x+=o.nx*1.2,this.pos.z+=o.nz*1.2;break}continue}const r=e.r+.7;if(n*n+i*i<r*r){this.stumble(e.kind==="tree"?"clipped a tree":"slammed a log");const a=Math.max(.1,Math.hypot(n,i));this.pos.x+=n/a*1.2,this.pos.z+=i/a*1.2;break}}}stumble(t){if(this.stumbleT=1.3,this.immuneT=2.5,this.speed*=.35,this.switchRide=!1,this.hud&&this.hud.stumbleFlash(t),this.fx){const e=new L(Math.sin(this.yaw),0,-Math.cos(this.yaw));this.fx.burst(this.pos,e,{count:100,speed:5,up:4,spread:2.2,size:.28})}}_sync(t){const e=this.terrain;this.obj.position.copy(this.pos),this.airborne||(this.obj.position.y+=.09);const n=pt(t*8,0,1),i=this.switchRide?Math.PI:0;if(this.airborne){this._tilt.slerp(Mu,pt(t*2,0,1)),this.rider.rig.rotation.y=i+this.spinDone,this.rider.rig.rotation.x=this.flipDone;const c=this._special?this._special.roll*Math.sin(Math.PI*pt(this._special.t/.9,0,1)):0;this._roll.setFromAxisAngle(xM,c)}else{const c=e.groundNormalAt(this.pos.x,this.pos.z,this._n);this._tilt.slerp(new Qt().setFromUnitVectors(vu,c),n),this.rider.rig.rotation.x=xe(this.rider.rig.rotation.x%(Math.PI*2),0,n),this.rider.rig.rotation.y=i,this._roll.slerp(Mu,n)}this._yawQ.setFromAxisAngle(vu,-this.yaw),this.obj.quaternion.copy(this._tilt).multiply(this._yawQ).multiply(this._roll);const r=this.immuneT>0?.45+.2*Math.sin(this.t*22):1;if(r!==this._ghost){this._ghost=r;for(const c of this._mats)c.transparent=r<1,c.opacity=r,c.depthWrite=r>=1}const a=e.groundAt(this.pos.x,this.pos.z);this.rider.shadow.position.y=a-this.pos.y+.06;const o=pt(this.pos.y-a,0,10);this.rider.shadow.scale.setScalar(pt(1-o*.07,.3,1))}}function yu(s,t,e){return s<t?Math.min(t,s+e):Math.max(t,s-e)}const Su=27*ut,wu=46*ut,Tu=new L(0,1,0),MM=new Qt,yM=new L,Au=new Qt,SM=22*ut,wM=2.6,Eu=[55,175],TM=16;function Ru(s,t){return 60*(1-Zt(s-320,s-150,t))}class AM{constructor(t){Object.assign(this,t),this.rider=rr(this.gear,this.identity.color),this.obj=this.rider.root,this._tilt=new Qt,this.d=4,this.speed=0,this.y=0,this.vFall=0,this._landT=-1,this._landAmp=0,this.frozen=!0,this.finished=!1,this.finishTime=null,this.style=0,this.stumbleT=0,this.autopilot=!1,this.personality=Ke(this.seed*.13,991)*18,this.weavePhase=this.seed*2.39,this.overall=t.overall??t.rank,this.vNat=Su+this.personality*.3*ut,this.seedU=(Ke(this.seed*.71,443)+1)/2;const e=this.terrain.length,n=this.script==="lateCharge"?-28:this.script==="earlyLead"?28:0;this.waypoints=[.3,.55,.78].map((i,r)=>{let a=48*Ke(this.seed*.37+r*3.1,523)+n*(r<2?1:.4);return a=this.rank<this.playerRank?pt(a,-70,75):pt(a,-75,Ru(e,i*e)*.75),{s:i*e,off:a}}),this.plan=null,this._planCd=0,this._washCd=0,this._surplusT=0,this._holdT=0,this._t=0,this.knockT=0,this.aggro=0,this.aggroCooldown=8,this._aggroBlend=0,this._pushX=0,this.placeAt(this.lane.x,this.lane.z)}placeAt(t,e){this.d=-e,this.y=this.terrain.groundAt(t,e),this.obj.position.set(t,this.y,e)}get ahead(){return this.rank<this.playerRank}lineAt(t){const e=Math.sin(t*.03+this.weavePhase)*7+Math.sin(t*.009+this.weavePhase*2)*6,n=this.personality*.35;return this.terrain.centerAt(t)+pt(e+n,-55*.8,Le.halfWidth*.8)}pathAt(t){const e=this.plan;if(!e)return this.lineAt(t);const n=e.x-this.lineAt(e.s),i=t<=e.s?Zt(e.s0,e.s-6,t):1-Zt(e.s,e.s+70,t);return this.lineAt(t)+n*i}_planFall(t){const e=this.terrain.length;if(this.plan||this._planCd>0||this.d<250||this.d>e-260)return!1;if(t.time-t._lastPlanT<2.5)return"wait";const n=this.d;let i=null,r=1/0;for(const a of this.terrain.obstaclesNear(n+Eu[0],n+Eu[1])){const o=-a.z;if(Math.abs(a.x-this.terrain.centerAt(o))>Le.halfWidth*.85||t._plans.some(h=>Math.abs(h-o)<30))continue;const c=Math.abs(a.x-this.lineAt(o));if(c>TM)continue;const l=c+.06*(o-n);l<r&&(r=l,i=a)}return i?(this.plan={s0:n,s:-i.z,x:i.x,hit:!1,kind:i.kind},this._planCd=16+this.seedU*10,t._plans.push(this.plan.s),t._lastPlanT=t.time,!0):!1}_fall(t,e){this.stumbleT=e?1.5:1.2,this.speed*=e?.35:.5,t.fx&&t.fx.burst(this.obj.position,{x:0,z:-1},{count:e?80:40,speed:5,up:4,spread:2.2,size:.3})}allowance(t,e){const n=Ru(t,e);return n*(.55+.45*this.seedU)+8*Ke(this._t*.07+this.seed*2.3,811)*(n/60)}knockDown(){this.knockT>0||(this.knockT=1.6,this.aggro=0)}update(t,e){if(this.frozen)return;this._t+=t,this.stumbleT>0&&(this.stumbleT-=t),this.knockT>0&&(this.knockT-=t);const n=Math.max(0,Math.min(1,Math.min(this.knockT*3,(1.6-this.knockT)*4))),i=this.terrain.length,r=e.player.progress,a=e.player.finished;!this.finished&&this.d>=i&&(this.finished=!0,this.finishTime=e.time,e.onBotFinish(this));let o;if(this._planCd-=t,this._washCd-=t,this.finished)o=Math.max(0,this.speed-13*ut*t);else if(this.autopilot||a||!this.ahead&&this.d>i-45)o=Math.min(this.speed+6*ut*t,this.vNat);else{const R=Math.max(1,e.time-(e.goTime??e.time)),T=pt(r/R,4*ut,44*ut);let w=pt(.55*T+.45*e.player.speed,4*ut,44*ut);r<150&&(w=Math.max(w,Su*.8));const P=this.waypoints.find(W=>W.s>r+60);let M;if(P){const W=(P.s-r)/w;M=(P.s+P.off-this.d)/Math.max(.4,W)}else{const W=(i-r)/w,B=2.2*Ke(this._t*.05+this.seed*1.7,619)*(1-Zt(i-420,i-160,r)),et=(this.ahead?-1:1)*this.finalGap/SM;M=(i-this.d)/Math.max(.4,W+et+B)}M=Math.max(0,M);let y=1;this.script==="lateCharge"?y=.86+.14*Zt(.45*i,.75*i,r):this.script==="earlyLead"&&(y=1.12-.12*Zt(.4*i,.7*i,r)),y*=1+.05*Ke(this._t*.2+this.seed*3.1,313);const S=this.vNat*y;let C=this.ahead?Math.max(wu,e.player.speed+8*ut):wu;if(this.d<220&&(C=Math.min(C,e.player.speed+9*ut)),M>S*1.06?o=Math.min(M*1.04+1.5*ut,C):M<S*.94?o=Math.max(M*.97,S*.5):o=S,this.ahead){const W=this.d-r,B=Zt(i-450,i-80,r),nt=xe(-70,2.5+(this.playerRank-this.rank-1)*3+6,B)-W;B>0&&nt>0&&(C=Math.max(C,e.player.speed+16*ut),o=Math.max(o,e.player.speed+pt(nt*.8,2*ut,16*ut)))}else{const W=r-this.finalGap+this.allowance(i,r)-this.d;W<12&&(o=Math.min(o,Math.max(0,e.player.speed+W*1.2-3*ut)))}o=Math.min(o,C);const I=P?P.s+P.off:i,N=Math.max(0,I-this.d)/Math.max(1,M)-Math.max(0,I-this.d)/S,U=wM+this.seedU*1.8;this._surplusT=N>U?this._surplusT+t:0,this._surplusT>2.5+this.seedU*2&&!this.plan&&this.stumbleT<=0&&R>8&&this._planFall(e)===!1&&N>U+2.5&&this._washCd<=0&&this.d>250&&this.d<i-200&&e.time-e._lastPlanT>=2.5&&(this._fall(e,!1),this._washCd=12+this.seedU*8,this._surplusT=0,e._lastPlanT=e.time),this.plan&&!this.plan.hit&&(o=Math.max(o,S*.95)),this.stumbleT<=0&&Ke(this._t*.11+this.seed*3.7,577)>.9&&(this.stumbleT=.9,this.speed*=.85),this.stumbleT>0&&(o=Math.min(o,this.speed)),this.ahead&&e.playerStallTime>5&&(this.autopilot=!0),this.aggroCooldown-=t;const H=r-this.d;this.aggro<=0&&this.aggroCooldown<=0&&this.ahead&&H>3&&H<24&&e.playerKnocks<2&&e.player.knockT<=0&&Ke(this._t*.23+this.seed*5.3,727)>.45&&(this.aggro=6)}this.aggro>0&&(this.aggro-=t),this.knockT>0&&(o=Math.min(o,3*ut));const c=this.speed;if(this.speed=xe(this.speed,o,pt(t*2.5,0,1)),this._longA=xe(this._longA??0,t>0?pt((this.speed-c)/t,-18*ut,12*ut):0,pt(t*7,0,1)),this.d+=this.speed*t,this.plan&&(!this.plan.hit&&this.d>=this.plan.s-1.2&&(this.plan.hit=!0,this.finished||this._fall(e,!0)),this.d>this.plan.s+80&&(this.plan=null)),!this.ahead&&!a&&!this.finished){const R=this.d;this.d=Math.min(this.d,Math.max(r-this.finalGap+this.allowance(i,r),2),i-55);const T=R-this.d>.15&&this.d<i-70;this._holdT=T?this._holdT+t:0;const w=e.player.speed<3*ut?1.2:3.5+this.seedU*3;this._holdT>w&&this._washCd<=0&&this.stumbleT<=0&&(this._fall(e,!1),this._washCd=10+this.seedU*6,this._holdT=0)}this.ahead&&!a&&!this.finished&&r>i-60&&(this.d=Math.max(this.d,r+2.5+(this.playerRank-this.rank-1)*3)),!this.finished&&this.d>=i&&(this.finished=!0,this.finishTime=e.time,e.onBotFinish(this));const l=this.aggro>0&&!this.finished?1:0;this._aggroBlend+=(l-this._aggroBlend)*pt(t*1.6,0,1),this._pushX*=Math.max(0,1-t*2.2);let h=this.pathAt(this.d)+this._pushX;this._aggroBlend>.01&&(h=xe(h,e.player.pos.x,this._aggroBlend*.9)),h=xe(this.lane.x,h,Zt(6,85,this.d));const u=-this.d,f=this.terrain.groundAt(h,u),d=this.vFall;f<=this.y?(this.vFall+=16*t,this.y=Math.max(f,this.y-this.vFall*t)):(this.y=f,this.vFall=0);const m=this.y>f+.2;this._wasAirborne&&!m&&(e.fx&&e.fx.burst(this.obj.position,{x:0,z:-1},{count:14,speed:4,up:3,spread:1.6,size:1.2}),this._landT=0,this._landAmp=.4+Math.min(1,d/12)*.5),this._wasAirborne=m;let b=0;this._landT>=0&&(this._landT+=t,b=Nd(this._landT,this._landAmp),this._landT>1.1&&(this._landT=-1)),this.obj.position.set(h,this.y,u),m||(this.obj.position.y+=.09);const g=Math.atan2(this.pathAt(this.d+7)-this.pathAt(this.d),7);this.visYaw=g;const p=(this.pathAt(this.d+5)-2*this.pathAt(this.d)+this.pathAt(this.d-5))/25,x=pt(this.speed*this.speed*p*.09/(ut*ut),-1,1);if(m)this._tilt.slerp(MM,pt(t*2,0,1));else{const R=this.terrain.groundNormalAt(h,u,yM);this._tilt.slerp(Au.setFromUnitVectors(Tu,R),pt(t*8,0,1))}if(this.obj.quaternion.copy(this._tilt).multiply(Au.setFromAxisAngle(Tu,-g)),this.rider.rig.rotation.x=0,this.finished?En(this.rider,{brake:this.speed>2*ut?1:0,idle:this.speed<=2*ut,t:this._t+this.weavePhase,dt:t}):En(this.rider,{steer:x,tuck:this.speed>21*ut&&this.knockT<=0?1:0,stumble:this.stumbleT>0?1:0,knocked:n,airborne:m,crouch:b,speedNorm:pt(this.speed/(26*ut),0,1),longG:pt((this._longA??0)/(11*ut),-1,1),t:this._t+this.weavePhase,dt:t}),e.fx&&!m&&this.speed>10*ut){const R=Math.abs(x);this._sprayAcc=(this._sprayAcc||0)+(.25+R*1.1+(this.stumbleT>0?2:0))*this.speed*(.32/ut)*t*60;const T=Math.sign(x)||1;for(;this._sprayAcc>=1;)this._sprayAcc-=1,e.fx.spawn(h+T*.4,this.y+.05,u+.7,T*(1+R*3.5)+(Math.random()-.5)*2,1+R*2+Math.random()*1.2,2+(Math.random()-.5)*2,.12+R*.09,.45+Math.random()*.35)}const v=this.rider.mittDrag??0;if(e.fx&&!m&&v>.4&&this.rider.mittWorld&&this.speed>8*ut){this._mittAcc=(this._mittAcc||0)+v*this.speed*(.15/ut)*t*60;const R=this.rider.mittWorld;for(;this._mittAcc>=1;)this._mittAcc-=1,e.fx.spawn(R.x+(Math.random()-.5)*.12,R.y-.05,R.z+(Math.random()-.5)*.12,(Math.random()-.5)*.8,.6+Math.random()*.7,1.2+(Math.random()-.5)*.8,.1+Math.random()*.05,.3+Math.random()*.25)}this.rider.shadow.position.y=f-this.y+.06;const _=pt(this.y-f,0,10);this.rider.shadow.scale.setScalar(pt(1-_*.07,.3,1))}}const hi=new L,Jr=new L;let js=null;async function EM(){if(!js)try{const s=new rl;s.setMeshoptDecoder(al),js=(await s.loadAsync(ol("animals"))).scene,js.traverse(e=>{e.isMesh&&(e.material=new Me({map:e.material.map}),e.castShadow=!0)})}catch{js=null}}const RM={vermont:{label:"a deer",herd:[3,5],speed:10.5,across:5.5,r:.85,gallop:7.5,bob:.3},quebec:{label:"a moose",herd:[1,1],speed:8.5,across:3.5,r:1.4,gallop:5.5,bob:.34},colorado:{label:"an elk",herd:[4,6],speed:10,across:4.5,r:1.1,gallop:6.5,bob:.32},utah:{label:"a bighorn",herd:[2,4],speed:9.5,across:4.5,r:.9,gallop:7,bob:.28},bc:{label:"a mountain goat",herd:[1,2],speed:8.5,across:4,r:.9,gallop:6.5,bob:.28},chile:{label:"a guanaco",herd:[3,6],speed:11,across:5,r:.95,gallop:7,bob:.3},nz:{label:"a sheep",herd:[5,8],speed:7.5,across:3.5,r:.8,gallop:6,bob:.22},swiss:{label:"an ibex",herd:[1,2],speed:9,across:4.5,r:.9,gallop:6.8,bob:.28},japan:{label:"a fox",herd:[2,3],speed:11,across:5,r:.55,gallop:8.5,bob:.2,evGap:.55}};class Qs{constructor(t,e,n,i){if(this.scene=t,this.terrain=e,this.spec=RM[n]??null,this.src=this.spec&&js?.getObjectByName(`animal_${n}`)||null,this.events=[],this.active=[],this.trails=[],!this.src)return;const r=Qn((i^41233)>>>0);let a=360+r()*300;for(;a<this.terrain.length-380;)this.events.push({s:a,side:r()<.5?-1:1,n:Math.round(this.spec.herd[0]+r()*(this.spec.herd[1]-this.spec.herd[0])),seed:(i^Math.floor(a))>>>0,fired:!1}),a+=(430+r()*380)*(this.spec.evGap??1)}_spawn(t){const e=Qn(t.seed);for(let n=0;n<t.n;n++){const i=t.s+e()*14,r=this.terrain.centerAt(i)+t.side*Le.halfWidth*(.72+e()*.16)+(e()-.5)*5,a=new Se,o=this.src.clone(),c=[];o.traverse(d=>{d.isMesh&&(d.material=d.material.clone(),c.push(d.material))}),a.add(o),Qs._shadowGeo||(Qs._shadowGeo=new ya(1,14));const l=new Ie({color:660512,transparent:!0,opacity:.26,depthWrite:!1}),h=new re(Qs._shadowGeo,l);h.rotation.x=-Math.PI/2,h.position.y=.07,h.scale.setScalar(this.spec.r*1.5),a.add(h),this.scene.add(a);const u=this.spec.r*.18+.05,f=[-1,1].map(d=>{const m=new Kd(this.scene,this.terrain,u);return m.minDist=.5,m.trackCol.multiplyScalar(.8),{off:d*this.spec.r*.35,w:u,trail:m}});this.trails.push(...f.map(d=>d.trail)),this.active.push({obj:a,body:o,shadow:h,shMat:l,mats:c,tracks:f,x:r,s:i,y:this.terrain.heightAt(r,-i)+.06,vy:0,air:!1,fade:1,fading:!1,vs:this.spec.speed*(.85+e()*.3),vx:-t.side*this.spec.across*(.75+e()*.5),t:e()*6.3,gallop:this.spec.gallop*(.9+e()*.2)})}}update(t,e,n){if(this.src){for(const i of this.events)!i.fired&&e>i.s-95&&(i.fired=!0,this._spawn(i));for(const i of this.active){i.t+=t,i.s+=i.vs*t,i.x+=i.vx*t;const r=-i.s,a=Math.hypot(i.vx,i.vs)||1,o=i.vx/a,c=-i.vs/a,l=this.spec.r*1.1,h=this.terrain.heightAt(i.x,r),u=this.terrain.heightAt(i.x+o*l,r+c*l),f=this.terrain.heightAt(i.x-o*l,r-c*l),d=Math.max(h,(u+f)/2)+.06;i.air||(d<i.y-.75?(i.air=!0,i.vy=2):i.y=d),i.air&&(i.vy-=13*t,i.y+=i.vy*t,i.y<=d&&(i.y=d,i.air=!1,i.vy=0));const m=Math.abs(Math.sin(i.t*i.gallop));i.obj.position.set(i.x,i.y,r),i.air?hi.set(0,1,0):this.terrain.normalAt(i.x,r,hi),i.obj.up.copy(hi);const b=o*hi.x+c*hi.z;Jr.set(o-hi.x*b,-hi.y*b,c-hi.z*b),i.obj.lookAt(i.x+Jr.x,i.y+Jr.y,r+Jr.z),i.body.position.y=i.air?0:m*this.spec.bob,i.body.rotation.x=i.air?.12:Math.sin(i.t*i.gallop*2)*.1;const g=i.y-(h+.06);i.shadow.position.y=-g+.07,i.shadow.scale.setScalar(this.spec.r*1.5*Math.max(.35,1-g*.12));const p=!i.air&&m<.45,x=Math.min(1,m/.45),v=p?Math.max(.04,i.tracks[0].w*Math.sqrt(1-x*x)):void 0;for(const _ of i.tracks)_.trail.push(i.x-c*_.off-o*l*.7,r+o*_.off-c*l*.7,p,v);if(n&&!i.fading&&!n.finished&&n.knockT<=0&&n.stumbleT<=0&&!n.airborne){const _=n.pos.x-i.x,R=n.pos.z-r,T=this.spec.r+.8;_*_+R*R<T*T&&n.knockDown(this.spec.label)}if(!i.fading&&(i.s<e-80||i.s>this.terrain.length-40||Math.abs(i.x-this.terrain.centerAt(i.s))>Le.halfWidth*1.5)){i.fading=!0;for(const _ of i.mats)_.transparent=!0,_.depthWrite=!1}if(i.fading){i.fade-=t/1.1;for(const _ of i.mats)_.opacity=Math.max(0,i.fade);if(i.shMat.opacity=.26*Math.max(0,i.fade),i.fade<=0){i.dead=!0,this.scene.remove(i.obj);for(const _ of i.mats)_.dispose();i.shMat.dispose()}}}this.active=this.active.filter(i=>!i.dead);for(const i of this.trails)i.update(t)}}}const Cu=150;function CM(s,t,e){const n=[...s.botPositions];if(e.scored!=="both")return{player:s.playerPos,bots:n};const i=u=>u.sort(()=>t()-.5),r=[],a=[];n.forEach((u,f)=>(u<s.playerPos?r:a).push(f));const o=r.filter(()=>t()>.35),c=[...r.filter(u=>!o.includes(u)),...a];i(o),i(c);const l=new Array(n.length);o.forEach((u,f)=>l[u]=f+1);const h=o.length+1;return c.forEach((u,f)=>l[u]=h+1+f),{player:h,bots:l}}class PM{constructor(t,e,n){this.cb=n,this.input=e,this.event=t.event??ss[2],this.format=t.format??sr[0],this.solo=!!this.format.solo;const i=lr[this.event.theme];this.scene=new Wc,this.scene.fog=new xa(i.fog,i.fogNear*.8,i.fogFar*.85),this.camera=new De(68,innerWidth/innerHeight,.1,4e3),this.terrain=new Id(t.seed,i,this.format.id);const r=new Se;this.terrain.build(r),this.scene.add(r),this.scene.add($d(i)),this.sun=Jd(this.scene,i).sun,this.snow=new Zd(this.scene);const a=Qn(t.seed^12482535);this.outcome=Bv(a,t.bet,this.event.table),Wt.balance=Math.round((Wt.balance-t.bet)*100)/100,$n(),this.hud=new Qv(this.format);const o=new dt(this.terrain.theme.snow).lerp(new dt(1,1,1),.75);this.fx=new Ec(this.scene,5e3,{color:[o.r,o.g,o.b]}),this.pyro=new Ec(this.scene,320,{color:[1,.7,.3],blending:To,gravity:5}),this.gate=new Ed(this.terrain),this.scene.add(this.gate.group),this.animals=this.format.scored==="style"?{events:[],active:[],update(){}}:new Qs(this.scene,this.terrain,this.event.theme,t.seed);const c=[null,null,"You",null,null];for(const f of t.bots)c[f.lane]=f.identity.name;this.gate.setRoster(c),this.player=new vM(this.terrain,t.gear,e,this.hud,t.outfit??null),this.player.fx=this.fx;const l=this.terrain.gateLanes[2];this.player.placeAt(l.x,l.z),this.scene.add(this.player.obj),this.playerTrail=new fu(this.scene,this.terrain,t.gear);const h=CM(this.outcome,a,this.format);this.playerCross=h.player,this._reviewRng=Qn(t.seed^32282),this._reviewed=!1,this._plans=[],this._lastPlanT=-10,this.bots=t.bots.map((f,d)=>{const m=this.outcome.botPositions[d],b=h.bots[d],g=a(),p=g<.32?"lateCharge":g<.64?"earlyLead":"steady",x=new AM({terrain:this.terrain,gear:f.gear,identity:f.identity,seed:t.seed%1e3+d*97+a()*50,rank:b,overall:m,playerRank:this.playerCross,finalGap:Math.abs(b-this.playerCross)*4.5+2+a()*2.5,script:p,lane:this.terrain.gateLanes[f.lane]});return this.solo||this.scene.add(x.obj),x.trail=new fu(this.scene,this.terrain,f.gear),x}),this.time=0,this.goTime=null,this.playerClock=null,this.playerStallTime=0,this.playerKnocks=0,this.stateName="countdown",this.countdownT=3.9,this._lastCount=null,this.finishOrder=[],this._camPos=new L().copy(this.camera.position),this._resultsShown=!1;const u=this.terrain.centerAt(this.terrain.length);this._finishPorts=[-15,15].map(f=>new L(u+f,this.terrain.heightAt(u+f,-this.terrain.length)+9.8,-this.terrain.length)),this._finishPyroT=-1,this._updateCamera(1,!0),window.__fp={race:this,rockPenetration:Ld,SPEED_SCALE:ut}}onBotFinish(t){this.finishOrder.push({name:t.identity.name,color:t.identity.color,me:!1}),this._firstCross()}_firstCross(){this._finishPyroT<0&&(this._finishPyroT=0)}update(t){if(this.time+=t,this.stateName==="countdown"){this.countdownT-=t;const o=Math.ceil(this.countdownT);if(this.countdownT<=0){if(this.hud.countdown("GO!"),setTimeout(()=>this.hud.countdown(""),800),this.stateName="racing",this.goTime=this.time,this.player.frozen=!1,!this.solo)for(const c of this.bots)c.frozen=!1;this.gate.setPhase("go")}else o!==this._lastCount&&o<=3&&(this._lastCount=o,this.hud.countdown(String(o)),o===1&&this.gate.setPhase("set"))}if(this.stateName==="racing"||this.stateName==="done"){this.player.speed<2*ut&&!this.player.finished?this.playerStallTime+=t:this.playerStallTime=0,this.player.update(t),this.playerTrail.push(this.player.pos.x,this.player.pos.z,this.player.yaw,!this.player.airborne&&!(this.player._grindT>0),Math.abs(Math.sin(this.player.rider.gearGroup.rotation.y)));for(const o of this.solo?[]:this.bots)o.update(t,this),o.trail.push(o.obj.position.x,o.obj.position.z,o.visYaw||0,o.y<=this.terrain.heightAt(o.obj.position.x,o.obj.position.z)+.25,Math.abs(Math.sin(o.rider.gearGroup.rotation.y)));this.solo||(this._resolveRiderCollisions(t),!this._reviewed&&this.format.scored==="both"&&this.player.progress>this.terrain.length-340&&this._reviewCrossing(),this._enforceDrawnOrder(t)),!this.player.finished&&this.player.progress>=this.terrain.length&&(this.player.finished=!0,this.playerClock=this.time-this.goTime,this.finishOrder.push({name:"You",color:16498468,me:!0}),this._firstCross(),this.stateName="done",this._finish())}const n=this.terrain.length;for(const o of this.bots)o.style=gv(this.player.style,this.outcome.playerPos-o.overall,o.d/n);const i=this.format.scored==="style",r=[{name:"You",color:16498468,me:!0,d:this.player.progress,done:this.player.finished,pts:this.player.style,pos:this.outcome.playerPos},...(this.solo?[]:this.bots).map(o=>({name:o.identity.name,color:o.identity.color,me:!1,d:o.d,done:o.finished,pts:o.style,pos:o.rank}))].sort((o,c)=>i?c.pts-o.pts||o.pos-c.pos:c.d-o.d),a=r.findIndex(o=>o.me)+1;if(this.hud.update({rank:a,speed:this.player.speed,progress:Math.min(1,this.player.progress/n),board:r,style:this.player.style,solo:this.solo,clock:this.goTime==null?0:this.playerClock??this.time-this.goTime}),this.terrain.finishSigns){const o=this._finishPyroT>=0?11:3.2;for(const[c,l]of this.terrain.finishSigns.entries())l.color.setScalar(.62+.38*Math.sin(this.time*o+c*2.1))}if(this.terrain.pulseGates(this.time),this.animals.update(t,this.player.progress,this.player),this.fx.update(t),this.pyro.update(t),this.gate.update(t,this.time,this.fx,null,this.camera.position.z),this._finishPyroT>=0&&this._finishPyroT<2){if(this._finishPyroT===0)for(const o of this._finishPorts)this.pyro.burst(o,{x:0,z:0},{count:30,speed:6,up:13,spread:Math.PI,size:1.5,life:1.2});for(const o of this._finishPorts)Math.random()<t*11&&this.pyro.burst(o,{x:0,z:0},{count:9,speed:4,up:10+Math.random()*7,spread:Math.PI,size:1.3,life:1});this._finishPyroT+=t}this.playerTrail.update(t);for(const o of this.bots)o.trail.update(t);this._updateCamera(t,!1),Qd(this.sun,this.player.pos),this.snow.update(t,this.camera.position)}_resolveRiderCollisions(t){const e=this.player;if(!e.finished)for(const n of this.bots){if(n._collideCd=Math.max(0,(n._collideCd||0)-t),n.finished||n.frozen||n._collideCd>0)continue;const i=n.obj.position.x-e.pos.x,r=n.obj.position.z-e.pos.z,a=Math.abs(n.obj.position.y-e.pos.y);if(i*i+r*r>1.6*1.6||a>1.6)continue;n._collideCd=3,n.aggroCooldown=16+Math.random()*12;const o=Math.sign(i)||1;n._pushX+=o*1.5,n.speed>e.speed+1.5*ut?(this.playerKnocks++,e.knockDown(n.identity.name)):e.speed>n.speed+1.5*ut?(n.knockDown(),this.format.scored==="both"?(e.style+=Cu,this.hud.trickToast(`BOOM! +${Cu}`,`you took out ${n.identity.name}`)):this.hud.trickToast("BOOM!",`you took out ${n.identity.name}`),this.fx.burst(n.obj.position,{x:0,z:-1},{count:100,speed:5,up:4,spread:2.4,size:.28}),e.speed*=.9):(e.stumbleT=Math.max(e.stumbleT,.7),n.stumbleT=Math.max(n.stumbleT,.7),e.pos.x-=o*.8)}}_enforceDrawnOrder(t){const e=this.player.progress,n=this.bots.filter(a=>!a.finished);if(!n.length||!(Math.max(e,...n.map(a=>a.d))>.86*this.terrain.length))return;n.sort((a,o)=>a.rank-o.rank);const r=this.terrain.length;for(let a=n.length-2;a>=0;a--){const o=n[a],c=n[a+1],l=o.d-c.d;l<8&&(c.speed=Math.min(c.speed,Math.max(0,o.speed-(l<2.2?1.5:.5)*ut)));const h=c.d+2.2-o.d;h>0&&(o.d+=Math.min(h,12*ut*t),c.d>r-20&&(c.d=Math.min(c.d,o.d-2.2)))}if(!this.player.finished){const a=this.terrain.length;for(const o of n)o.ahead||(o.d=Math.min(o.d,Math.max(e-o.finalGap+o.allowance(a,e),2),a-55))}}_reviewCrossing(){this._reviewed=!0;const t=this._reviewRng,e=this.player.style,n=this.player.progress;let i=this.bots.filter(o=>o.ahead);if(e<=0)i=this.bots.filter(o=>o.overall<this.outcome.playerPos&&(o.ahead||o.d>n-45));else{const o=this.bots.filter(l=>!l.ahead&&l.overall>this.outcome.playerPos&&l.d>n-45).sort(()=>t()-.5);let c=0;for(const l of o){if(c>=2||e<1500*(c+1)+800)break;t()<.45&&(i.push(l),c++)}}i.sort((o,c)=>o.rank-c.rank);const r=this.bots.filter(o=>!i.includes(o)).sort((o,c)=>o.rank-c.rank),a=i.length+1;i.forEach((o,c)=>o.rank=c+1),r.forEach((o,c)=>o.rank=a+1+c);for(const o of this.bots)o.playerRank=a,o.finalGap=Math.abs(o.rank-a)*4.5+2+t()*2.5;this.playerCross=a}_finish(){const{playerPos:t,bet:e,payout:n}=this.outcome;Wt.balance=Math.round((Wt.balance+n)*100)/100,$n();const i=this.terrain.length,r=bv(this.format,{playerPos:t,playerStyle:this.player.style,playerTime:this.playerClock??this.time-this.goTime,bots:this.bots.map(o=>({rank:o.overall,time:this.solo?null:(o.finishTime??this.time+(i-o.d)/Math.max(8*ut,o.speed))-this.goTime})),rng:Qn(this.terrain.seed^23566)});for(const o of this.bots)o.style=r.bots.find(c=>c.rank===o.overall).style;const a=[{pos:t,name:"You",color:16498468,me:!0,mult:Bd(t,this.event.table),score:r.player},...this.bots.map(o=>({pos:o.overall,name:o.identity.name,color:o.identity.color,me:!1,score:r.bots.find(c=>c.rank===o.overall)}))].sort((o,c)=>o.pos-c.pos);this._resultsShown||(this._resultsShown=!0,nM({event:this.event,format:this.format,reveal:this.solo,standings:a,playerPos:t,bet:e,payout:n,style:this.player.style,onAgain:()=>this.cb.onExit("again"),onLodge:()=>this.cb.onExit("lodge")}))}_updateCamera(t,e){const n=this.player.pos,i=this.player.travelYaw*.4,r=7,a=new L(n.x-Math.sin(i)*r,0,n.z+Math.cos(i)*r),o=this.terrain.heightAt(a.x,a.z);if(a.y=Math.max(n.y+3,o+2),e)this._camPos.copy(a),this._lookAt=new L(n.x,n.y+1.3,n.z-4);else{const h=1-Math.exp(-t*3.6);this._camPos.lerp(a,h),this._lookAt.lerp(new L(n.x,n.y+1.3,n.z-4),1-Math.exp(-t*6))}this.camera.position.copy(this._camPos),this.camera.lookAt(this._lookAt);const c=58+this.player.speed*(.22/ut)+(this.player.airborne?2:0),l=this.camera.fov+(c-this.camera.fov)*Math.min(1,t*2.2);Math.abs(l-this.camera.fov)>.02&&(this.camera.fov=l,this.camera.updateProjectionMatrix())}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}destroy(){this.hud.destroy(),this.input.onSwipe===this.player._onSwipe&&(this.input.onSwipe=null)}}const LM=document.getElementById("app"),gn=new ld({antialias:!0,powerPreference:"high-performance"});gn.setPixelRatio(Math.min(devicePixelRatio,2));gn.setSize(innerWidth,innerHeight);gn.shadowMap.enabled=!0;gn.shadowMap.type=Du;LM.appendChild(gn.domElement);const IM=new Cx(gn.domElement);let sn=null;function nf(s){sn&&sn.destroy(),sn=s,sn.resize(innerWidth,innerHeight)}function sf(){Fd()&&Od();const s=Md();nf(new oM(s,t=>rf(t)))}const Pu=new URLSearchParams(location.search);function rf(s){const t=ss.find(r=>r.id===Pu.get("event")),e=t??ss[Math.floor(Math.random()*ss.length)],n=Rd(Pu.get("format")),i=n??fv();t||n?Lu({...s,event:e,format:i}):eM(ss,e,sr,i,()=>Lu({...s,event:e,format:i}))}function Lu(s){nf(new PM(s,IM,{onExit:t=>{if(t==="again"&&Wt.balance>=s.bet){Fd()&&Od();const e=Md();rf({seed:e,bet:s.bet,gear:s.gear,outfit:s.outfit,bots:tf(e)})}else sf()}}))}addEventListener("resize",()=>{gn.setSize(innerWidth,innerHeight),sn&&sn.resize(innerWidth,innerHeight)});const DM=Math.min(devicePixelRatio,2);let ui=1,So=0,Qr=0,wo=0;const kM=new px;let Zr=1e9;gn.setAnimationLoop(()=>{const s=kM.getDelta(),t=Math.min(s,.05);if(So+=s,Qr++,wo+=s,Zr+=s,wo>3&&Qr>10){const e=Qr/So;let n=ui;e<42&&Rc.shadows?(Rc.shadows=!1,sn?.sun&&(sn.sun.castShadow=!1)):e<40&&ui>.55&&Zr>6?n=Math.max(.55,ui-.15):e>58&&ui<1&&Zr>20&&(n=Math.min(1,ui+.1)),n!==ui&&(ui=n,Zr=0,gn.setPixelRatio(DM*ui),gn.setSize(innerWidth,innerHeight)),So=0,Qr=0,wo=0}sn&&(sn.update(t),gn.render(sn.scene,sn.camera))});(async()=>{const s=document.createElement("div");s.id="boot-loading",s.textContent="WAXING THE GEAR…",document.getElementById("ui").appendChild(s);try{await Promise.all([yv(),dv(),EM()])}finally{s.remove()}sf()})();"serviceWorker"in navigator&&!location.hostname.includes("localhost")&&addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});
