var sf=Object.defineProperty;var rf=(s,t,e)=>t in s?sf(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var gl=(s,t,e)=>rf(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ec="170",af=0,bl=1,of=2,Ru=1,Cu=2,Hn=3,Qn=0,Be=1,Oe=2,gi=0,Ii=1,So=2,_l=3,xl=4,cf=5,Ci=100,lf=101,hf=102,uf=103,df=104,ff=200,pf=201,mf=202,gf=203,wo=204,To=205,bf=206,_f=207,xf=208,vf=209,Mf=210,yf=211,Sf=212,wf=213,Tf=214,Ao=0,Eo=1,Ro=2,cs=3,Co=4,Po=5,Lo=6,Io=7,Rc=0,Af=1,Ef=2,bi=0,Rf=1,Cf=2,Pf=3,Lf=4,If=5,Df=6,kf=7,vl="attached",Nf="detached",Pu=300,ls=301,hs=302,Do=303,ko=304,fa=306,Di=1e3,di=1001,aa=1002,ze=1003,Lu=1004,zs=1005,Ye=1006,Qr=1007,Xn=1008,Zn=1009,Iu=1010,Du=1011,Qs=1012,Cc=1013,ki=1014,fn=1015,rr=1016,Pc=1017,Lc=1018,us=1020,ku=35902,Nu=1021,Uu=1022,en=1023,Fu=1024,Ou=1025,ss=1026,ds=1027,Ic=1028,Dc=1029,Bu=1030,kc=1031,Nc=1033,Zr=33776,ta=33777,ea=33778,na=33779,No=35840,Uo=35841,Fo=35842,Oo=35843,Bo=36196,zo=37492,Go=37496,Ho=37808,Vo=37809,Wo=37810,jo=37811,Xo=37812,qo=37813,Yo=37814,Ko=37815,$o=37816,Jo=37817,Qo=37818,Zo=37819,tc=37820,ec=37821,ia=36492,nc=36494,ic=36495,zu=36283,sc=36284,rc=36285,ac=36286,Zs=2300,tr=2301,Ta=2302,Ml=2400,yl=2401,Sl=2402,Uf=2500,Ff=0,Gu=1,oc=2,Of=3200,Bf=3201,Uc=0,zf=1,ui="",xe="srgb",Ge="srgb-linear",pa="linear",oe="srgb",Fi=7680,wl=519,Gf=512,Hf=513,Vf=514,Hu=515,Wf=516,jf=517,Xf=518,qf=519,cc=35044,Tl="300 es",qn=2e3,oa=2001;class xs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Al=1234567;const js=Math.PI/180,fs=180/Math.PI;function mn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[s&255]+Le[s>>8&255]+Le[s>>16&255]+Le[s>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Me(s,t,e){return Math.max(t,Math.min(e,s))}function Fc(s,t){return(s%t+t)%t}function Yf(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Kf(s,t,e){return s!==t?(e-s)/(t-s):0}function Xs(s,t,e){return(1-e)*s+e*t}function $f(s,t,e,n){return Xs(s,t,1-Math.exp(-e*n))}function Jf(s,t=1){return t-Math.abs(Fc(s,t*2)-t)}function Qf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Zf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function tp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function ep(s,t){return s+Math.random()*(t-s)}function np(s){return s*(.5-Math.random())}function ip(s){s!==void 0&&(Al=s);let t=Al+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sp(s){return s*js}function rp(s){return s*fs}function ap(s){return(s&s-1)===0&&s!==0}function op(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function cp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function lp(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),f=a((t-n)/2),u=r((n-t)/2),m=a((n-t)/2);switch(i){case"XYX":s.set(o*h,c*d,c*f,o*l);break;case"YZY":s.set(c*f,o*h,c*d,o*l);break;case"ZXZ":s.set(c*d,c*f,o*h,o*l);break;case"XZX":s.set(o*h,c*m,c*u,o*l);break;case"YXY":s.set(c*u,o*h,c*m,o*l);break;case"ZYZ":s.set(c*m,c*u,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function un(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function re(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Oc={DEG2RAD:js,RAD2DEG:fs,generateUUID:mn,clamp:Me,euclideanModulo:Fc,mapLinear:Yf,inverseLerp:Kf,lerp:Xs,damp:$f,pingpong:Jf,smoothstep:Qf,smootherstep:Zf,randInt:tp,randFloat:ep,randFloatSpread:np,seededRandom:ip,degToRad:sp,radToDeg:rp,isPowerOfTwo:ap,ceilPowerOfTwo:op,floorPowerOfTwo:cp,setQuaternionFromProperEuler:lp,normalize:re,denormalize:un};class vt{constructor(t=0,e=0){vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,i,r,a,o,c,l){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],u=n[5],m=n[8],b=i[0],g=i[3],p=i[6],v=i[1],x=i[4],_=i[7],E=i[2],T=i[5],w=i[8];return r[0]=a*b+o*v+c*E,r[3]=a*g+o*x+c*T,r[6]=a*p+o*_+c*w,r[1]=l*b+h*v+d*E,r[4]=l*g+h*x+d*T,r[7]=l*p+h*_+d*w,r[2]=f*b+u*v+m*E,r[5]=f*g+u*x+m*T,r[8]=f*p+u*_+m*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,f=o*c-h*r,u=l*r-a*c,m=e*d+n*f+i*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/m;return t[0]=d*b,t[1]=(i*l-h*n)*b,t[2]=(o*n-i*a)*b,t[3]=f*b,t[4]=(h*e-i*c)*b,t[5]=(i*r-o*e)*b,t[6]=u*b,t[7]=(n*c-l*e)*b,t[8]=(a*e-n*r)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Aa.makeScale(t,e)),this}rotate(t){return this.premultiply(Aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new Bt;function Vu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function er(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function hp(){const s=er("canvas");return s.style.display="block",s}const El={};function Gs(s){s in El||(El[s]=!0,console.warn(s))}function up(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function dp(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function fp(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qt={enabled:!0,workingColorSpace:Ge,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?pa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function $n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Rl=[.64,.33,.3,.6,.15,.06],Cl=[.2126,.7152,.0722],Pl=[.3127,.329],Ll=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Il=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[Ge]:{primaries:Rl,whitePoint:Pl,transfer:pa,toXYZ:Ll,fromXYZ:Il,luminanceCoefficients:Cl,workingColorSpaceConfig:{unpackColorSpace:xe},outputColorSpaceConfig:{drawingBufferColorSpace:xe}},[xe]:{primaries:Rl,whitePoint:Pl,transfer:oe,toXYZ:Ll,fromXYZ:Il,luminanceCoefficients:Cl,outputColorSpaceConfig:{drawingBufferColorSpace:xe}}});let Oi;class pp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Oi===void 0&&(Oi=er("canvas")),Oi.width=t.width,Oi.height=t.height;const n=Oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=er("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=$n(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mp=0;class Wu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=mn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ea(i[a].image)):r.push(Ea(i[a]))}else r=Ea(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ea(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?pp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gp=0;class ye extends xs{constructor(t=ye.DEFAULT_IMAGE,e=ye.DEFAULT_MAPPING,n=di,i=di,r=Ye,a=Xn,o=en,c=Zn,l=ye.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=mn(),this.name="",this.source=new Wu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Di:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Di:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ye.DEFAULT_IMAGE=null;ye.DEFAULT_MAPPING=Pu;ye.DEFAULT_ANISOTROPY=1;class Qt{constructor(t=0,e=0,n=0,i=1){Qt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],u=c[5],m=c[9],b=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+b)<.1&&Math.abs(m+g)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,_=(u+1)/2,E=(p+1)/2,T=(h+f)/4,w=(d+b)/4,P=(m+g)/4;return x>_&&x>E?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=w/n):_>E?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=T/i,r=P/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=w/r,i=P/r),this.set(n,i,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(d-b)*(d-b)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-b)/v,this.z=(f-h)/v,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bp extends xs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ye(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Wu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends bp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ju extends ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _p extends ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yt{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const f=r[a+0],u=r[a+1],m=r[a+2],b=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=u,t[e+2]=m,t[e+3]=b;return}if(d!==b||c!==f||l!==u||h!==m){let g=1-o;const p=c*f+l*u+h*m+d*b,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const E=Math.sqrt(x),T=Math.atan2(E,p*v);g=Math.sin(g*T)/E,o=Math.sin(o*T)/E}const _=o*v;if(c=c*g+f*_,l=l*g+u*_,h=h*g+m*_,d=d*g+b*_,g===1-o){const E=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=E,l*=E,h*=E,d*=E}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],f=r[a+1],u=r[a+2],m=r[a+3];return t[e]=o*m+h*d+c*u-l*f,t[e+1]=c*m+h*f+l*d-o*u,t[e+2]=l*m+h*u+o*f-c*d,t[e+3]=h*m-o*d-c*f-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),f=c(n/2),u=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=f*h*d+l*u*m,this._y=l*u*d-f*h*m,this._z=l*h*m+f*u*d,this._w=l*h*d-f*u*m;break;case"YXZ":this._x=f*h*d+l*u*m,this._y=l*u*d-f*h*m,this._z=l*h*m-f*u*d,this._w=l*h*d+f*u*m;break;case"ZXY":this._x=f*h*d-l*u*m,this._y=l*u*d+f*h*m,this._z=l*h*m+f*u*d,this._w=l*h*d-f*u*m;break;case"ZYX":this._x=f*h*d-l*u*m,this._y=l*u*d+f*h*m,this._z=l*h*m-f*u*d,this._w=l*h*d+f*u*m;break;case"YZX":this._x=f*h*d+l*u*m,this._y=l*u*d+f*h*m,this._z=l*h*m-f*u*d,this._w=l*h*d-f*u*m;break;case"XZY":this._x=f*h*d-l*u*m,this._y=l*u*d-f*h*m,this._z=l*h*m+f*u*d,this._w=l*h*d+f*u*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-i)*u}else if(n>o&&n>d){const u=2*Math.sqrt(1+n-o-d);this._w=(h-c)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(r+l)/u}else if(o>d){const u=2*Math.sqrt(1+o-n-d);this._w=(r-l)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(c+h)/u}else{const u=2*Math.sqrt(1+d-n-o);this._w=(a-i)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const u=1-e;return this._w=u*a+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ra.copy(this).projectOnVector(t),this.sub(Ra)}reflect(t){return this.sub(Ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ra=new L,Dl=new Yt;class En{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)),dr.applyMatrix4(t.matrixWorld),this.union(dr)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(As),fr.subVectors(this.max,As),Bi.subVectors(t.a,As),zi.subVectors(t.b,As),Gi.subVectors(t.c,As),ni.subVectors(zi,Bi),ii.subVectors(Gi,zi),xi.subVectors(Bi,Gi);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-xi.z,xi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,xi.z,0,-xi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-xi.y,xi.x,0];return!Ca(e,Bi,zi,Gi,fr)||(e=[1,0,0,0,1,0,0,0,1],!Ca(e,Bi,zi,Gi,fr))?!1:(pr.crossVectors(ni,ii),e=[pr.x,pr.y,pr.z],Ca(e,Bi,zi,Gi,fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const kn=[new L,new L,new L,new L,new L,new L,new L,new L],rn=new L,dr=new En,Bi=new L,zi=new L,Gi=new L,ni=new L,ii=new L,xi=new L,As=new L,fr=new L,pr=new L,vi=new L;function Ca(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){vi.fromArray(s,r);const o=i.x*Math.abs(vi.x)+i.y*Math.abs(vi.y)+i.z*Math.abs(vi.z),c=t.dot(vi),l=e.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const xp=new En,Es=new L,Pa=new L;class Rn{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):xp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Es.subVectors(t,this.center);const e=Es.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Es,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Es.copy(t.center).add(Pa)),this.expandByPoint(Es.copy(t.center).sub(Pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new L,La=new L,mr=new L,si=new L,Ia=new L,gr=new L,Da=new L;class ma{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){La.copy(t).add(e).multiplyScalar(.5),mr.copy(e).sub(t).normalize(),si.copy(this.origin).sub(La);const r=t.distanceTo(e)*.5,a=-this.direction.dot(mr),o=si.dot(this.direction),c=-si.dot(mr),l=si.lengthSq(),h=Math.abs(1-a*a);let d,f,u,m;if(h>0)if(d=a*c-o,f=a*o-c,m=r*h,d>=0)if(f>=-m)if(f<=m){const b=1/h;d*=b,f*=b,u=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;else f<=-m?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l):f<=m?(d=0,f=Math.min(Math.max(-r,-c),r),u=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(La).addScaledVector(mr,f),u}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),i=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,i,r){Ia.subVectors(e,t),gr.subVectors(n,t),Da.crossVectors(Ia,gr);let a=this.direction.dot(Da),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,t);const c=o*this.direction.dot(gr.crossVectors(si,gr));if(c<0)return null;const l=o*this.direction.dot(Ia.cross(si));if(l<0||c+l>a)return null;const h=-o*si.dot(Da);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(t,e,n,i,r,a,o,c,l,h,d,f,u,m,b,g){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,d,f,u,m,b,g)}set(t,e,n,i,r,a,o,c,l,h,d,f,u,m,b,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Hi.setFromMatrixColumn(t,0).length(),r=1/Hi.setFromMatrixColumn(t,1).length(),a=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=a*h,u=a*d,m=o*h,b=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=u+m*l,e[5]=f-b*l,e[9]=-o*c,e[2]=b-f*l,e[6]=m+u*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,u=c*d,m=l*h,b=l*d;e[0]=f+b*o,e[4]=m*o-u,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=u*o-m,e[6]=b+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,u=c*d,m=l*h,b=l*d;e[0]=f-b*o,e[4]=-a*d,e[8]=m+u*o,e[1]=u+m*o,e[5]=a*h,e[9]=b-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,u=a*d,m=o*h,b=o*d;e[0]=c*h,e[4]=m*l-u,e[8]=f*l+b,e[1]=c*d,e[5]=b*l+f,e[9]=u*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,u=a*l,m=o*c,b=o*l;e[0]=c*h,e[4]=b-f*d,e[8]=m*d+u,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=u*d+m,e[10]=f-b*d}else if(t.order==="XZY"){const f=a*c,u=a*l,m=o*c,b=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+b,e[5]=a*h,e[9]=u*d-m,e[2]=m*d-u,e[6]=o*h,e[10]=b*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vp,t,Mp)}lookAt(t,e,n){const i=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),ri.crossVectors(n,We),ri.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),ri.crossVectors(n,We)),ri.normalize(),br.crossVectors(We,ri),i[0]=ri.x,i[4]=br.x,i[8]=We.x,i[1]=ri.y,i[5]=br.y,i[9]=We.y,i[2]=ri.z,i[6]=br.z,i[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],u=n[13],m=n[2],b=n[6],g=n[10],p=n[14],v=n[3],x=n[7],_=n[11],E=n[15],T=i[0],w=i[4],P=i[8],M=i[12],y=i[1],S=i[5],C=i[9],I=i[13],k=i[2],U=i[6],z=i[10],X=i[14],G=i[3],rt=i[7],it=i[11],ht=i[15];return r[0]=a*T+o*y+c*k+l*G,r[4]=a*w+o*S+c*U+l*rt,r[8]=a*P+o*C+c*z+l*it,r[12]=a*M+o*I+c*X+l*ht,r[1]=h*T+d*y+f*k+u*G,r[5]=h*w+d*S+f*U+u*rt,r[9]=h*P+d*C+f*z+u*it,r[13]=h*M+d*I+f*X+u*ht,r[2]=m*T+b*y+g*k+p*G,r[6]=m*w+b*S+g*U+p*rt,r[10]=m*P+b*C+g*z+p*it,r[14]=m*M+b*I+g*X+p*ht,r[3]=v*T+x*y+_*k+E*G,r[7]=v*w+x*S+_*U+E*rt,r[11]=v*P+x*C+_*z+E*it,r[15]=v*M+x*I+_*X+E*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],u=t[14],m=t[3],b=t[7],g=t[11],p=t[15];return m*(+r*c*d-i*l*d-r*o*f+n*l*f+i*o*u-n*c*u)+b*(+e*c*u-e*l*f+r*a*f-i*a*u+i*l*h-r*c*h)+g*(+e*l*d-e*o*u-r*a*d+n*a*u+r*o*h-n*l*h)+p*(-i*o*h-e*c*d+e*o*f+i*a*d-n*a*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],u=t[11],m=t[12],b=t[13],g=t[14],p=t[15],v=d*g*l-b*f*l+b*c*u-o*g*u-d*c*p+o*f*p,x=m*f*l-h*g*l-m*c*u+a*g*u+h*c*p-a*f*p,_=h*b*l-m*d*l+m*o*u-a*b*u-h*o*p+a*d*p,E=m*d*c-h*b*c-m*o*f+a*b*f+h*o*g-a*d*g,T=e*v+n*x+i*_+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=v*w,t[1]=(b*f*r-d*g*r-b*i*u+n*g*u+d*i*p-n*f*p)*w,t[2]=(o*g*r-b*c*r+b*i*l-n*g*l-o*i*p+n*c*p)*w,t[3]=(d*c*r-o*f*r-d*i*l+n*f*l+o*i*u-n*c*u)*w,t[4]=x*w,t[5]=(h*g*r-m*f*r+m*i*u-e*g*u-h*i*p+e*f*p)*w,t[6]=(m*c*r-a*g*r-m*i*l+e*g*l+a*i*p-e*c*p)*w,t[7]=(a*f*r-h*c*r+h*i*l-e*f*l-a*i*u+e*c*u)*w,t[8]=_*w,t[9]=(m*d*r-h*b*r-m*n*u+e*b*u+h*n*p-e*d*p)*w,t[10]=(a*b*r-m*o*r+m*n*l-e*b*l-a*n*p+e*o*p)*w,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*u-e*o*u)*w,t[12]=E*w,t[13]=(h*b*i-m*d*i+m*n*f-e*b*f-h*n*g+e*d*g)*w,t[14]=(m*o*i-a*b*i-m*n*c+e*b*c+a*n*g-e*o*g)*w,t[15]=(a*d*i-h*o*i+h*n*c-e*d*c-a*n*f+e*o*f)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,f=r*l,u=r*h,m=r*d,b=a*h,g=a*d,p=o*d,v=c*l,x=c*h,_=c*d,E=n.x,T=n.y,w=n.z;return i[0]=(1-(b+p))*E,i[1]=(u+_)*E,i[2]=(m-x)*E,i[3]=0,i[4]=(u-_)*T,i[5]=(1-(f+p))*T,i[6]=(g+v)*T,i[7]=0,i[8]=(m+x)*w,i[9]=(g-v)*w,i[10]=(1-(f+b))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Hi.set(i[0],i[1],i[2]).length();const a=Hi.set(i[4],i[5],i[6]).length(),o=Hi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],an.copy(this);const l=1/r,h=1/a,d=1/o;return an.elements[0]*=l,an.elements[1]*=l,an.elements[2]*=l,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,e.setFromRotationMatrix(an),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=qn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let u,m;if(o===qn)u=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===oa)u=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=u,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=qn){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(a-r),f=(e+t)*l,u=(n+i)*h;let m,b;if(o===qn)m=(a+r)*d,b=-2*d;else if(o===oa)m=r*d,b=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-u,c[2]=0,c[6]=0,c[10]=b,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Hi=new L,an=new kt,vp=new L(0,0,0),Mp=new L(1,1,1),ri=new L,br=new L,We=new L,kl=new kt,Nl=new Yt;class bn{constructor(t=0,e=0,n=0,i=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class Xu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yp=0;const Ul=new L,Vi=new Yt,Un=new kt,_r=new L,Rs=new L,Sp=new L,wp=new Yt,Fl=new L(1,0,0),Ol=new L(0,1,0),Bl=new L(0,0,1),zl={type:"added"},Tp={type:"removed"},Wi={type:"childadded",child:null},ka={type:"childremoved",child:null};class fe extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new L,e=new bn,n=new Yt,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new kt},normalMatrix:{value:new Bt}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(Fl,t)}rotateY(t){return this.rotateOnAxis(Ol,t)}rotateZ(t){return this.rotateOnAxis(Bl,t)}translateOnAxis(t,e){return Ul.copy(t).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fl,t)}translateY(t){return this.translateOnAxis(Ol,t)}translateZ(t){return this.translateOnAxis(Bl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_r.copy(t):_r.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Rs,_r,this.up):Un.lookAt(_r,Rs,this.up),this.quaternion.setFromRotationMatrix(Un),i&&(Un.extractRotation(i.matrixWorld),Vi.setFromRotationMatrix(Un),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zl),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tp),ka.child=t,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zl),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,t,Sp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,wp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),u=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}fe.DEFAULT_UP=new L(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new L,Fn=new L,Na=new L,On=new L,ji=new L,Xi=new L,Gl=new L,Ua=new L,Fa=new L,Oa=new L,Ba=new Qt,za=new Qt,Ga=new Qt;class dn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),on.subVectors(t,e),i.cross(on);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){on.subVectors(i,e),Fn.subVectors(n,e),Na.subVectors(t,e);const a=on.dot(on),o=on.dot(Fn),c=on.dot(Na),l=Fn.dot(Fn),h=Fn.dot(Na),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(l*c-o*h)*f,m=(a*h-o*c)*f;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,On)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,On.x),c.addScaledVector(a,On.y),c.addScaledVector(o,On.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return Ba.setScalar(0),za.setScalar(0),Ga.setScalar(0),Ba.fromBufferAttribute(t,e),za.fromBufferAttribute(t,n),Ga.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Ba,r.x),a.addScaledVector(za,r.y),a.addScaledVector(Ga,r.z),a}static isFrontFacing(t,e,n,i){return on.subVectors(n,e),Fn.subVectors(t,e),on.cross(Fn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),on.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return dn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;ji.subVectors(i,n),Xi.subVectors(r,n),Ua.subVectors(t,n);const c=ji.dot(Ua),l=Xi.dot(Ua);if(c<=0&&l<=0)return e.copy(n);Fa.subVectors(t,i);const h=ji.dot(Fa),d=Xi.dot(Fa);if(h>=0&&d<=h)return e.copy(i);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ji,a);Oa.subVectors(t,r);const u=ji.dot(Oa),m=Xi.dot(Oa);if(m>=0&&u<=m)return e.copy(r);const b=u*l-c*m;if(b<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(Xi,o);const g=h*m-u*d;if(g<=0&&d-h>=0&&u-m>=0)return Gl.subVectors(r,i),o=(d-h)/(d-h+(u-m)),e.copy(i).addScaledVector(Gl,o);const p=1/(g+b+f);return a=b*p,o=f*p,e.copy(n).addScaledVector(ji,a).addScaledVector(Xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},xr={h:0,s:0,l:0};function Ha(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class mt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=qt.workingColorSpace){if(t=Fc(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ha(a,r,t+1/3),this.g=Ha(a,r,t),this.b=Ha(a,r,t-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(t,e=xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){const n=qu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return qt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Me(Ie.r*255,0,255))*65536+Math.round(Me(Ie.g*255,0,255))*256+Math.round(Me(Ie.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,i=Ie.g,r=Ie.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=xe){qt.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,i=Ie.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(xr);const n=Xs(ai.h,xr.h,e),i=Xs(ai.s,xr.s,e),r=Xs(ai.l,xr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new mt;mt.NAMES=qu;let Ap=0;class gn extends xs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=mn(),this.name="",this.blending=Ii,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wo,this.blendDst=To,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wo&&(n.blendSrc=this.blendSrc),this.blendDst!==To&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Re extends gn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new L,vr=new vt;class le{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cc,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vr.fromBufferAttribute(this,e),vr.applyMatrix3(t),this.setXY(e,vr.x,vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=un(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=un(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=un(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cc&&(t.usage=this.usage),t}}class Yu extends le{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ku extends le{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ce extends le{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ep=0;const Je=new kt,Va=new fe,qi=new L,je=new En,Cs=new En,Te=new L;class me extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vu(t)?Ku:Yu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return Va.lookAt(t),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ce(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(je.min,Cs.min),je.expandByPoint(Te),Te.addVectors(je.max,Cs.max),je.expandByPoint(Te)):(je.expandByPoint(Cs.min),je.expandByPoint(Cs.max))}je.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Te.fromBufferAttribute(o,l),c&&(qi.fromBufferAttribute(t,l),Te.add(qi)),i=Math.max(i,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new le(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new L,c[P]=new L;const l=new L,h=new L,d=new L,f=new vt,u=new vt,m=new vt,b=new L,g=new L;function p(P,M,y){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,y),f.fromBufferAttribute(r,P),u.fromBufferAttribute(r,M),m.fromBufferAttribute(r,y),h.sub(l),d.sub(l),u.sub(f),m.sub(f);const S=1/(u.x*m.y-m.x*u.y);isFinite(S)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(d,-u.y).multiplyScalar(S),g.copy(d).multiplyScalar(u.x).addScaledVector(h,-m.x).multiplyScalar(S),o[P].add(b),o[M].add(b),o[y].add(b),c[P].add(g),c[M].add(g),c[y].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,M=v.length;P<M;++P){const y=v[P],S=y.start,C=y.count;for(let I=S,k=S+C;I<k;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const x=new L,_=new L,E=new L,T=new L;function w(P){E.fromBufferAttribute(i,P),T.copy(E);const M=o[P];x.copy(M),x.sub(E.multiplyScalar(E.dot(M))).normalize(),_.crossVectors(T,M);const S=_.dot(c[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,S)}for(let P=0,M=v.length;P<M;++P){const y=v[P],S=y.start,C=y.count;for(let I=S,k=S+C;I<k;I+=3)w(t.getX(I+0)),w(t.getX(I+1)),w(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const i=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,d=new L;if(t)for(let f=0,u=t.count;f<u;f+=3){const m=t.getX(f+0),b=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,b),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,u=e.count;f<u;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h);let u=0,m=0;for(let b=0,g=c.length;b<g;b++){o.isInterleavedBufferAttribute?u=c[b]*o.data.stride+o.offset:u=c[b]*h;for(let p=0;p<h;p++)f[m++]=l[u++]}return new le(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new me,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const f=l[h],u=t(f,n);c.push(u)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const u=l[d];h.push(u.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hl=new kt,Mi=new ma,Mr=new Rn,Vl=new L,yr=new L,Sr=new L,wr=new L,Wa=new L,Tr=new L,Wl=new L,Ar=new L;class ne extends fe{constructor(t=new me,e=new Re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Tr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(Wa.fromBufferAttribute(d,t),a?Tr.addScaledVector(Wa,h):Tr.addScaledVector(Wa.sub(e),h))}e.add(Tr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(Mr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Mr,Vl)===null||Mi.origin.distanceToSquared(Vl)>(t.far-t.near)**2))&&(Hl.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(Hl),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=f.length;m<b;m++){const g=f[m],p=a[g.materialIndex],v=Math.max(g.start,u.start),x=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let _=v,E=x;_<E;_+=3){const T=o.getX(_),w=o.getX(_+1),P=o.getX(_+2);i=Er(this,p,t,n,l,h,d,T,w,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,u.start),b=Math.min(o.count,u.start+u.count);for(let g=m,p=b;g<p;g+=3){const v=o.getX(g),x=o.getX(g+1),_=o.getX(g+2);i=Er(this,a,t,n,l,h,d,v,x,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,b=f.length;m<b;m++){const g=f[m],p=a[g.materialIndex],v=Math.max(g.start,u.start),x=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let _=v,E=x;_<E;_+=3){const T=_,w=_+1,P=_+2;i=Er(this,p,t,n,l,h,d,T,w,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,u.start),b=Math.min(c.count,u.start+u.count);for(let g=m,p=b;g<p;g+=3){const v=g,x=g+1,_=g+2;i=Er(this,a,t,n,l,h,d,v,x,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Rp(s,t,e,n,i,r,a,o){let c;if(t.side===Be?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Qn,o),c===null)return null;Ar.copy(o),Ar.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ar);return l<e.near||l>e.far?null:{distance:l,point:Ar.clone(),object:s}}function Er(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,yr),s.getVertexPosition(c,Sr),s.getVertexPosition(l,wr);const h=Rp(s,t,e,n,yr,Sr,wr,Wl);if(h){const d=new L;dn.getBarycoord(Wl,yr,Sr,wr,d),i&&(h.uv=dn.getInterpolatedAttribute(i,o,c,l,d,new vt)),r&&(h.uv1=dn.getInterpolatedAttribute(r,o,c,l,d,new vt)),a&&(h.normal=dn.getInterpolatedAttribute(a,o,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new L,materialIndex:0};dn.getNormal(yr,Sr,wr,f.normal),h.face=f,h.barycoord=d}return h}class Ke extends me{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let f=0,u=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function m(b,g,p,v,x,_,E,T,w,P,M){const y=_/w,S=E/P,C=_/2,I=E/2,k=T/2,U=w+1,z=P+1;let X=0,G=0;const rt=new L;for(let it=0;it<z;it++){const ht=it*S-I;for(let Et=0;Et<U;Et++){const Nt=Et*y-C;rt[b]=Nt*v,rt[g]=ht*x,rt[p]=k,l.push(rt.x,rt.y,rt.z),rt[b]=0,rt[g]=0,rt[p]=T>0?1:-1,h.push(rt.x,rt.y,rt.z),d.push(Et/w),d.push(1-it/P),X+=1}}for(let it=0;it<P;it++)for(let ht=0;ht<w;ht++){const Et=f+ht+U*it,Nt=f+ht+U*(it+1),Y=f+(ht+1)+U*(it+1),tt=f+(ht+1)+U*it;c.push(Et,Nt,tt),c.push(Nt,Y,tt),G+=6}o.addGroup(u,G,M),u+=G,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ps(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ue(s){const t={};for(let e=0;e<s.length;e++){const n=ps(s[e]);for(const i in n)t[i]=n[i]}return t}function Cp(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function $u(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Pp={clone:ps,merge:Ue};var Lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends gn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lp,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=Cp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ju extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new L,jl=new vt,Xl=new vt;class Ce extends Ju{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,jl,Xl),e.subVectors(Xl,jl)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(js*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Yi=-90,Ki=1;class Dp extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ce(Yi,Ki,t,e);i.layers=this.layers,this.add(i);const r=new Ce(Yi,Ki,t,e);r.layers=this.layers,this.add(r);const a=new Ce(Yi,Ki,t,e);a.layers=this.layers,this.add(a);const o=new Ce(Yi,Ki,t,e);o.layers=this.layers,this.add(o);const c=new Ce(Yi,Ki,t,e);c.layers=this.layers,this.add(c);const l=new Ce(Yi,Ki,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Qu extends ye{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ls,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kp extends Ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Qu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ke(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:gi});r.uniforms.tEquirect.value=e;const a=new ne(i,r),o=e.minFilter;return e.minFilter===Xn&&(e.minFilter=Ye),new Dp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const ja=new L,Np=new L,Up=new Bt;class Ei{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ja.subVectors(n,e).cross(Np.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ja),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Up.getNormalMatrix(t),i=this.coplanarPoint(ja).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Rn,Rr=new L;class Bc{constructor(t=new Ei,e=new Ei,n=new Ei,i=new Ei,r=new Ei,a=new Ei){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],d=i[6],f=i[7],u=i[8],m=i[9],b=i[10],g=i[11],p=i[12],v=i[13],x=i[14],_=i[15];if(n[0].setComponents(c-r,f-l,g-u,_-p).normalize(),n[1].setComponents(c+r,f+l,g+u,_+p).normalize(),n[2].setComponents(c+a,f+h,g+m,_+v).normalize(),n[3].setComponents(c-a,f-h,g-m,_-v).normalize(),n[4].setComponents(c-o,f-d,g-b,_-x).normalize(),e===qn)n[5].setComponents(c+o,f+d,g+b,_+x).normalize();else if(e===oa)n[5].setComponents(o,d,b,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Rr.x=i.normal.x>0?t.max.x:t.min.x,Rr.y=i.normal.y>0?t.max.y:t.min.y,Rr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zu(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Fp(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=s.SHORT;else if(l instanceof Uint32Array)u=s.UNSIGNED_INT;else if(l instanceof Int32Array)u=s.INT;else if(l instanceof Int8Array)u=s.BYTE;else if(l instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,h);else{d.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<d.length;u++){const m=d[f],b=d[u];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++f,d[f]=b)}d.length=f+1;for(let u=0,m=d.length;u<m;u++){const b=d[u];s.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class wn extends me{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=t/o,f=e/c,u=[],m=[],b=[],g=[];for(let p=0;p<h;p++){const v=p*f-a;for(let x=0;x<l;x++){const _=x*d-r;m.push(_,-v,0),b.push(0,0,1),g.push(x/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const x=v+l*p,_=v+l*(p+1),E=v+1+l*(p+1),T=v+1+l*p;u.push(x,_,T),u.push(_,E,T)}this.setIndex(u),this.setAttribute("position",new ce(m,3)),this.setAttribute("normal",new ce(b,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bp=`#ifdef USE_ALPHAHASH
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
#endif`,zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wp=`#ifdef USE_AOMAP
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
#endif`,jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xp=`#ifdef USE_BATCHING
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
#endif`,qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jp=`#ifdef USE_IRIDESCENCE
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
#endif`,Qp=`#ifdef USE_BUMPMAP
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
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
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
#endif`,om=`#define PI 3.141592653589793
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
} // validated`,cm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lm=`vec3 transformedNormal = objectNormal;
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
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,um=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pm="gl_FragColor = linearToOutputTexel( gl_FragColor );",mm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gm=`#ifdef USE_ENVMAP
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
#endif`,bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_m=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tm=`#ifdef USE_GRADIENTMAP
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
}`,Am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Em=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cm=`uniform bool receiveShadow;
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
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nm=`PhysicalMaterial material;
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
#endif`,Um=`struct PhysicalMaterial {
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
}`,Fm=`
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
#endif`,Om=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qm=`#if defined( USE_POINTS_UV )
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
#endif`,Ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$m=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zm=`#ifdef USE_MORPHTARGETS
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
#endif`,t0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a0=`#ifdef USE_NORMALMAP
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
#endif`,o0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y0=`float getShadowMask() {
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
}`,S0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w0=`#ifdef USE_SKINNING
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
#endif`,T0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A0=`#ifdef USE_SKINNING
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
#endif`,E0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,L0=`#ifdef USE_TRANSMISSION
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
#endif`,I0=`#ifdef USE_TRANSMISSION
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O0=`uniform sampler2D t2D;
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
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`#include <common>
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
}`,W0=`#if DEPTH_PACKING == 3200
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
}`,j0=`#define DISTANCE
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
}`,X0=`#define DISTANCE
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
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`uniform float scale;
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
}`,$0=`uniform vec3 diffuse;
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
}`,J0=`#include <common>
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
}`,Q0=`uniform vec3 diffuse;
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
}`,Z0=`#define LAMBERT
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
}`,tg=`#define LAMBERT
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
}`,eg=`#define MATCAP
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
}`,ng=`#define MATCAP
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
}`,ig=`#define NORMAL
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
}`,sg=`#define NORMAL
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
}`,rg=`#define PHONG
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
}`,ag=`#define PHONG
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
}`,og=`#define STANDARD
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
}`,cg=`#define STANDARD
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
}`,lg=`#define TOON
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
}`,hg=`#define TOON
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
}`,ug=`uniform float size;
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
}`,dg=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,pg=`uniform vec3 color;
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
}`,mg=`uniform float rotation;
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
}`,gg=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:Op,alphahash_pars_fragment:Bp,alphamap_fragment:zp,alphamap_pars_fragment:Gp,alphatest_fragment:Hp,alphatest_pars_fragment:Vp,aomap_fragment:Wp,aomap_pars_fragment:jp,batching_pars_vertex:Xp,batching_vertex:qp,begin_vertex:Yp,beginnormal_vertex:Kp,bsdfs:$p,iridescence_fragment:Jp,bumpmap_pars_fragment:Qp,clipping_planes_fragment:Zp,clipping_planes_pars_fragment:tm,clipping_planes_pars_vertex:em,clipping_planes_vertex:nm,color_fragment:im,color_pars_fragment:sm,color_pars_vertex:rm,color_vertex:am,common:om,cube_uv_reflection_fragment:cm,defaultnormal_vertex:lm,displacementmap_pars_vertex:hm,displacementmap_vertex:um,emissivemap_fragment:dm,emissivemap_pars_fragment:fm,colorspace_fragment:pm,colorspace_pars_fragment:mm,envmap_fragment:gm,envmap_common_pars_fragment:bm,envmap_pars_fragment:_m,envmap_pars_vertex:xm,envmap_physical_pars_fragment:Pm,envmap_vertex:vm,fog_vertex:Mm,fog_pars_vertex:ym,fog_fragment:Sm,fog_pars_fragment:wm,gradientmap_pars_fragment:Tm,lightmap_pars_fragment:Am,lights_lambert_fragment:Em,lights_lambert_pars_fragment:Rm,lights_pars_begin:Cm,lights_toon_fragment:Lm,lights_toon_pars_fragment:Im,lights_phong_fragment:Dm,lights_phong_pars_fragment:km,lights_physical_fragment:Nm,lights_physical_pars_fragment:Um,lights_fragment_begin:Fm,lights_fragment_maps:Om,lights_fragment_end:Bm,logdepthbuf_fragment:zm,logdepthbuf_pars_fragment:Gm,logdepthbuf_pars_vertex:Hm,logdepthbuf_vertex:Vm,map_fragment:Wm,map_pars_fragment:jm,map_particle_fragment:Xm,map_particle_pars_fragment:qm,metalnessmap_fragment:Ym,metalnessmap_pars_fragment:Km,morphinstance_vertex:$m,morphcolor_vertex:Jm,morphnormal_vertex:Qm,morphtarget_pars_vertex:Zm,morphtarget_vertex:t0,normal_fragment_begin:e0,normal_fragment_maps:n0,normal_pars_fragment:i0,normal_pars_vertex:s0,normal_vertex:r0,normalmap_pars_fragment:a0,clearcoat_normal_fragment_begin:o0,clearcoat_normal_fragment_maps:c0,clearcoat_pars_fragment:l0,iridescence_pars_fragment:h0,opaque_fragment:u0,packing:d0,premultiplied_alpha_fragment:f0,project_vertex:p0,dithering_fragment:m0,dithering_pars_fragment:g0,roughnessmap_fragment:b0,roughnessmap_pars_fragment:_0,shadowmap_pars_fragment:x0,shadowmap_pars_vertex:v0,shadowmap_vertex:M0,shadowmask_pars_fragment:y0,skinbase_vertex:S0,skinning_pars_vertex:w0,skinning_vertex:T0,skinnormal_vertex:A0,specularmap_fragment:E0,specularmap_pars_fragment:R0,tonemapping_fragment:C0,tonemapping_pars_fragment:P0,transmission_fragment:L0,transmission_pars_fragment:I0,uv_pars_fragment:D0,uv_pars_vertex:k0,uv_vertex:N0,worldpos_vertex:U0,background_vert:F0,background_frag:O0,backgroundCube_vert:B0,backgroundCube_frag:z0,cube_vert:G0,cube_frag:H0,depth_vert:V0,depth_frag:W0,distanceRGBA_vert:j0,distanceRGBA_frag:X0,equirect_vert:q0,equirect_frag:Y0,linedashed_vert:K0,linedashed_frag:$0,meshbasic_vert:J0,meshbasic_frag:Q0,meshlambert_vert:Z0,meshlambert_frag:tg,meshmatcap_vert:eg,meshmatcap_frag:ng,meshnormal_vert:ig,meshnormal_frag:sg,meshphong_vert:rg,meshphong_frag:ag,meshphysical_vert:og,meshphysical_frag:cg,meshtoon_vert:lg,meshtoon_frag:hg,points_vert:ug,points_frag:dg,shadow_vert:fg,shadow_frag:pg,sprite_vert:mg,sprite_frag:gg},pt={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},yn={basic:{uniforms:Ue([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ue([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new mt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ue([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ue([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ue([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new mt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ue([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ue([pt.points,pt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ue([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ue([pt.common,pt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ue([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ue([pt.sprite,pt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ue([pt.common,pt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ue([pt.lights,pt.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};yn.physical={uniforms:Ue([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Cr={r:0,b:0,g:0},Si=new bn,bg=new kt;function _g(s,t,e,n,i,r,a){const o=new mt(0);let c=r===!0?0:1,l,h,d=null,f=0,u=null;function m(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x)),x}function b(v){let x=!1;const _=m(v);_===null?p(o,c):_&&_.isColor&&(p(_,1),x=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(v,x){const _=m(x);_&&(_.isCubeTexture||_.mapping===fa)?(h===void 0&&(h=new ne(new Ke(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:ps(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Si.copy(x.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bg.makeRotationFromEuler(Si)),h.material.toneMapped=qt.getTransfer(_.colorSpace)!==oe,(d!==_||f!==_.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,d=_,f=_.version,u=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ne(new wn(2,2),new An({name:"BackgroundMaterial",uniforms:ps(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=qt.getTransfer(_.colorSpace)!==oe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,d=_,f=_.version,u=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,x){v.getRGB(Cr,$u(s)),n.buffers.color.setClear(Cr.r,Cr.g,Cr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),c=x,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(o,c)},render:b,addToRenderList:g}}function xg(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(y,S,C,I,k){let U=!1;const z=d(I,C,S);r!==z&&(r=z,l(r.object)),U=u(y,I,C,k),U&&m(y,I,C,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,_(y,S,C,I),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function d(y,S,C){const I=C.wireframe===!0;let k=n[y.id];k===void 0&&(k={},n[y.id]=k);let U=k[S.id];U===void 0&&(U={},k[S.id]=U);let z=U[I];return z===void 0&&(z=f(c()),U[I]=z),z}function f(y){const S=[],C=[],I=[];for(let k=0;k<e;k++)S[k]=0,C[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:C,attributeDivisors:I,object:y,attributes:{},index:null}}function u(y,S,C,I){const k=r.attributes,U=S.attributes;let z=0;const X=C.getAttributes();for(const G in X)if(X[G].location>=0){const it=k[G];let ht=U[G];if(ht===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),it===void 0||it.attribute!==ht||ht&&it.data!==ht.data)return!0;z++}return r.attributesNum!==z||r.index!==I}function m(y,S,C,I){const k={},U=S.attributes;let z=0;const X=C.getAttributes();for(const G in X)if(X[G].location>=0){let it=U[G];it===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(it=y.instanceColor));const ht={};ht.attribute=it,it&&it.data&&(ht.data=it.data),k[G]=ht,z++}r.attributes=k,r.attributesNum=z,r.index=I}function b(){const y=r.newAttributes;for(let S=0,C=y.length;S<C;S++)y[S]=0}function g(y){p(y,0)}function p(y,S){const C=r.newAttributes,I=r.enabledAttributes,k=r.attributeDivisors;C[y]=1,I[y]===0&&(s.enableVertexAttribArray(y),I[y]=1),k[y]!==S&&(s.vertexAttribDivisor(y,S),k[y]=S)}function v(){const y=r.newAttributes,S=r.enabledAttributes;for(let C=0,I=S.length;C<I;C++)S[C]!==y[C]&&(s.disableVertexAttribArray(C),S[C]=0)}function x(y,S,C,I,k,U,z){z===!0?s.vertexAttribIPointer(y,S,C,k,U):s.vertexAttribPointer(y,S,C,I,k,U)}function _(y,S,C,I){b();const k=I.attributes,U=C.getAttributes(),z=S.defaultAttributeValues;for(const X in U){const G=U[X];if(G.location>=0){let rt=k[X];if(rt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor)),rt!==void 0){const it=rt.normalized,ht=rt.itemSize,Et=t.get(rt);if(Et===void 0)continue;const Nt=Et.buffer,Y=Et.type,tt=Et.bytesPerElement,st=Y===s.INT||Y===s.UNSIGNED_INT||rt.gpuType===Cc;if(rt.isInterleavedBufferAttribute){const Z=rt.data,St=Z.stride,yt=rt.offset;if(Z.isInstancedInterleavedBuffer){for(let Dt=0;Dt<G.locationSize;Dt++)p(G.location+Dt,Z.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Dt=0;Dt<G.locationSize;Dt++)g(G.location+Dt);s.bindBuffer(s.ARRAY_BUFFER,Nt);for(let Dt=0;Dt<G.locationSize;Dt++)x(G.location+Dt,ht/G.locationSize,Y,it,St*tt,(yt+ht/G.locationSize*Dt)*tt,st)}else{if(rt.isInstancedBufferAttribute){for(let Z=0;Z<G.locationSize;Z++)p(G.location+Z,rt.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Z=0;Z<G.locationSize;Z++)g(G.location+Z);s.bindBuffer(s.ARRAY_BUFFER,Nt);for(let Z=0;Z<G.locationSize;Z++)x(G.location+Z,ht/G.locationSize,Y,it,ht*tt,ht/G.locationSize*Z*tt,st)}}else if(z!==void 0){const it=z[X];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv(G.location,it);break;case 3:s.vertexAttrib3fv(G.location,it);break;case 4:s.vertexAttrib4fv(G.location,it);break;default:s.vertexAttrib1fv(G.location,it)}}}}v()}function E(){P();for(const y in n){const S=n[y];for(const C in S){const I=S[C];for(const k in I)h(I[k].object),delete I[k];delete S[C]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const S=n[y.id];for(const C in S){const I=S[C];for(const k in I)h(I[k].object),delete I[k];delete S[C]}delete n[y.id]}function w(y){for(const S in n){const C=n[S];if(C[y.id]===void 0)continue;const I=C[y.id];for(const k in I)h(I[k].object),delete I[k];delete C[y.id]}}function P(){M(),a=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:g,disableUnusedAttributes:v}}function vg(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,d){d!==0&&(s.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let u=0;for(let m=0;m<d;m++)u+=h[m];e.update(u,n,1)}function c(l,h,d,f){if(d===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<l.length;m++)a(l[m],h[m],f[m]);else{u.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let m=0;for(let b=0;b<d;b++)m+=h[b]*f[b];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Mg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==en&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const P=w===rr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Zn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==fn&&!P)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:u,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:E,maxSamples:T}}function yg(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Ei,o=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){const m=d.clippingPlanes,b=d.clipIntersection,g=d.clipShadows,p=s.get(d);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{const v=r?0:n,x=v*4;let _=p.clippingState||null;c.value=_,_=h(m,f,x,u);for(let E=0;E!==x;++E)_[E]=e[E];p.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,m){const b=d!==null?d.length:0;let g=null;if(b!==0){if(g=c.value,m!==!0||g===null){const p=u+b*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,_=u;x!==b;++x,_+=4)a.copy(d[x]).applyMatrix4(v,o),a.normal.toArray(g,_),g[_+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}function Sg(s){let t=new WeakMap;function e(a,o){return o===Do?a.mapping=ls:o===ko&&(a.mapping=hs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Do||o===ko)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new kp(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class zc extends Ju{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ts=4,ql=[.125,.215,.35,.446,.526,.582],Pi=20,Xa=new zc,Yl=new mt;let qa=null,Ya=0,Ka=0,$a=!1;const Ri=(1+Math.sqrt(5))/2,$i=1/Ri,Kl=[new L(-Ri,$i,0),new L(Ri,$i,0),new L(-$i,0,Ri),new L($i,0,Ri),new L(0,Ri,-$i),new L(0,Ri,$i),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class $l{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qa,Ya,Ka),this._renderer.xr.enabled=$a,t.scissorTest=!1,Pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:rr,format:en,colorSpace:Ge,depthBuffer:!1},i=Jl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wg(r)),this._blurMaterial=Tg(r,t,e)}return i}_compileMaterial(t){const e=new ne(this._lodPlanes[0],t);this._renderer.compile(e,Xa)}_sceneToCubeUV(t,e,n,i){const o=new Ce(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Yl),h.toneMapping=bi,h.autoClear=!1;const u=new Re({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),m=new ne(new Ke,u);let b=!1;const g=t.background;g?g.isColor&&(u.color.copy(g),t.background=null,b=!0):(u.color.copy(Yl),b=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):v===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const x=this._cubeSize;Pr(i,v*x,p>2?x:0,x,x),h.setRenderTarget(i),b&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ls||t.mapping===hs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ql());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new ne(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Pr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Xa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Kl[(i-r-1)%Kl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ne(this._lodPlanes[i],l),f=l.uniforms,u=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Pi-1),b=r/m,g=isFinite(r)?1+Math.floor(h*b):Pi;g>Pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Pi}`);const p=[];let v=0;for(let w=0;w<Pi;++w){const P=w/b,M=Math.exp(-P*P/2);p.push(M),w===0?v+=M:w<g&&(v+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-n;const _=this._sizeLods[i],E=3*_*(i>x-ts?i-x+ts:0),T=4*(this._cubeSize-_);Pr(e,E,T,3*_,2*_),c.setRenderTarget(e),c.render(d,Xa)}}function wg(s){const t=[],e=[],n=[];let i=s;const r=s-ts+1+ql.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-ts?c=ql[a-s+ts-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,m=6,b=3,g=2,p=1,v=new Float32Array(b*m*u),x=new Float32Array(g*m*u),_=new Float32Array(p*m*u);for(let T=0;T<u;T++){const w=T%3*2/3-1,P=T>2?0:-1,M=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];v.set(M,b*m*T),x.set(f,g*m*T);const y=[T,T,T,T,T,T];_.set(y,p*m*T)}const E=new me;E.setAttribute("position",new le(v,b)),E.setAttribute("uv",new le(x,g)),E.setAttribute("faceIndex",new le(_,p)),t.push(E),i>ts&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Jl(s,t,e){const n=new Ni(s,t,e);return n.texture.mapping=fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Tg(s,t,e){const n=new Float32Array(Pi),i=new L(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Ql(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Zl(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Gc(){return`

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
	`}function Ag(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Do||c===ko,h=c===ls||c===hs;if(l||h){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new $l(s)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const u=o.image;return l&&u&&u.height>0||h&&u&&i(u)?(e===null&&(e=new $l(s)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Eg(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Gs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Rg(s,t,e,n){const i={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);for(const m in f.morphAttributes){const b=f.morphAttributes[m];for(let g=0,p=b.length;g<p;g++)t.remove(b[g])}f.removeEventListener("dispose",a),delete i[f.id];const u=r.get(f);u&&(t.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const m in f)t.update(f[m],s.ARRAY_BUFFER);const u=d.morphAttributes;for(const m in u){const b=u[m];for(let g=0,p=b.length;g<p;g++)t.update(b[g],s.ARRAY_BUFFER)}}function l(d){const f=[],u=d.index,m=d.attributes.position;let b=0;if(u!==null){const v=u.array;b=u.version;for(let x=0,_=v.length;x<_;x+=3){const E=v[x+0],T=v[x+1],w=v[x+2];f.push(E,T,T,w,w,E)}}else if(m!==void 0){const v=m.array;b=m.version;for(let x=0,_=v.length/3-1;x<_;x+=3){const E=x+0,T=x+1,w=x+2;f.push(E,T,T,w,w,E)}}else return;const g=new(Vu(f)?Ku:Yu)(f,1);g.version=b;const p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){const f=r.get(d);if(f){const u=d.index;u!==null&&f.version<u.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Cg(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){s.drawElements(n,u,r,f*a),e.update(u,n,1)}function l(f,u,m){m!==0&&(s.drawElementsInstanced(n,u,r,f*a,m),e.update(u,n,m))}function h(f,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=u[p];e.update(g,n,1)}function d(f,u,m,b){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/a,u[p],b[p]);else{g.multiDrawElementsInstancedWEBGL(n,u,0,r,f,0,b,0,m);let p=0;for(let v=0;v<m;v++)p+=u[v]*b[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Pg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Lg(s,t,e){const n=new WeakMap,i=new Qt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let y=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var u=y;f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let _=0;m===!0&&(_=1),b===!0&&(_=2),g===!0&&(_=3);let E=o.attributes.position.count*_,T=1;E>t.maxTextureSize&&(T=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const w=new Float32Array(E*T*4*d),P=new ju(w,E,T,d);P.type=fn,P.needsUpdate=!0;const M=_*4;for(let S=0;S<d;S++){const C=p[S],I=v[S],k=x[S],U=E*T*4*S;for(let z=0;z<C.count;z++){const X=z*M;m===!0&&(i.fromBufferAttribute(C,z),w[U+X+0]=i.x,w[U+X+1]=i.y,w[U+X+2]=i.z,w[U+X+3]=0),b===!0&&(i.fromBufferAttribute(I,z),w[U+X+4]=i.x,w[U+X+5]=i.y,w[U+X+6]=i.z,w[U+X+7]=0),g===!0&&(i.fromBufferAttribute(k,z),w[U+X+8]=i.x,w[U+X+9]=i.y,w[U+X+10]=i.z,w[U+X+11]=k.itemSize===4?i.w:1)}}f={count:d,texture:P,size:new vt(E,T)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const b=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(s,"morphTargetBaseInfluence",b),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Ig(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return d}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class td extends ye{constructor(t,e,n,i,r,a,o,c,l,h=ss){if(h!==ss&&h!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ss&&(n=ki),n===void 0&&h===ds&&(n=us),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ze,this.minFilter=c!==void 0?c:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ed=new ye,th=new td(1,1),nd=new ju,id=new _p,sd=new Qu,eh=[],nh=[],ih=new Float32Array(16),sh=new Float32Array(9),rh=new Float32Array(4);function vs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=eh[i];if(r===void 0&&(r=new Float32Array(i),eh[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Se(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function we(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ga(s,t){let e=nh[t];e===void 0&&(e=new Int32Array(t),nh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Dg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function kg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2fv(this.addr,t),we(e,t)}}function Ng(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;s.uniform3fv(this.addr,t),we(e,t)}}function Ug(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4fv(this.addr,t),we(e,t)}}function Fg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Se(e,n))return;rh.set(n),s.uniformMatrix2fv(this.addr,!1,rh),we(e,n)}}function Og(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Se(e,n))return;sh.set(n),s.uniformMatrix3fv(this.addr,!1,sh),we(e,n)}}function Bg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Se(e,n))return;ih.set(n),s.uniformMatrix4fv(this.addr,!1,ih),we(e,n)}}function zg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Gg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2iv(this.addr,t),we(e,t)}}function Hg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3iv(this.addr,t),we(e,t)}}function Vg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4iv(this.addr,t),we(e,t)}}function Wg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function jg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2uiv(this.addr,t),we(e,t)}}function Xg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3uiv(this.addr,t),we(e,t)}}function qg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4uiv(this.addr,t),we(e,t)}}function Yg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(th.compareFunction=Hu,r=th):r=ed,e.setTexture2D(t||r,i)}function Kg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||id,i)}function $g(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||sd,i)}function Jg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||nd,i)}function Qg(s){switch(s){case 5126:return Dg;case 35664:return kg;case 35665:return Ng;case 35666:return Ug;case 35674:return Fg;case 35675:return Og;case 35676:return Bg;case 5124:case 35670:return zg;case 35667:case 35671:return Gg;case 35668:case 35672:return Hg;case 35669:case 35673:return Vg;case 5125:return Wg;case 36294:return jg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return Jg}}function Zg(s,t){s.uniform1fv(this.addr,t)}function tb(s,t){const e=vs(t,this.size,2);s.uniform2fv(this.addr,e)}function eb(s,t){const e=vs(t,this.size,3);s.uniform3fv(this.addr,e)}function nb(s,t){const e=vs(t,this.size,4);s.uniform4fv(this.addr,e)}function ib(s,t){const e=vs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function sb(s,t){const e=vs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function rb(s,t){const e=vs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ab(s,t){s.uniform1iv(this.addr,t)}function ob(s,t){s.uniform2iv(this.addr,t)}function cb(s,t){s.uniform3iv(this.addr,t)}function lb(s,t){s.uniform4iv(this.addr,t)}function hb(s,t){s.uniform1uiv(this.addr,t)}function ub(s,t){s.uniform2uiv(this.addr,t)}function db(s,t){s.uniform3uiv(this.addr,t)}function fb(s,t){s.uniform4uiv(this.addr,t)}function pb(s,t,e){const n=this.cache,i=t.length,r=ga(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||ed,r[a])}function mb(s,t,e){const n=this.cache,i=t.length,r=ga(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||id,r[a])}function gb(s,t,e){const n=this.cache,i=t.length,r=ga(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||sd,r[a])}function bb(s,t,e){const n=this.cache,i=t.length,r=ga(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||nd,r[a])}function _b(s){switch(s){case 5126:return Zg;case 35664:return tb;case 35665:return eb;case 35666:return nb;case 35674:return ib;case 35675:return sb;case 35676:return rb;case 5124:case 35670:return ab;case 35667:case 35671:return ob;case 35668:case 35672:return cb;case 35669:case 35673:return lb;case 5125:return hb;case 36294:return ub;case 36295:return db;case 36296:return fb;case 35678:case 36198:case 36298:case 36306:case 35682:return pb;case 35679:case 36299:case 36307:return mb;case 35680:case 36300:case 36308:case 36293:return gb;case 36289:case 36303:case 36311:case 36292:return bb}}class xb{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qg(e.type)}}class vb{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_b(e.type)}}class Mb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Ja=/(\w+)(\])?(\[|\.)?/g;function ah(s,t){s.seq.push(t),s.map[t.id]=t}function yb(s,t,e){const n=s.name,i=n.length;for(Ja.lastIndex=0;;){const r=Ja.exec(n),a=Ja.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){ah(e,l===void 0?new xb(o,s,t):new vb(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Mb(o),ah(e,d)),e=d}}}class sa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);yb(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function oh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Sb=37297;let wb=0;function Tb(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const ch=new Bt;function Ab(s){qt._getMatrix(ch,qt.workingColorSpace,s);const t=`mat3( ${ch.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(s)){case pa:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function lh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Tb(s.getShaderSource(t),a)}else return i}function Eb(s,t){const e=Ab(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Rb(s,t){let e;switch(t){case Rf:e="Linear";break;case Cf:e="Reinhard";break;case Pf:e="Cineon";break;case Lf:e="ACESFilmic";break;case Df:e="AgX";break;case kf:e="Neutral";break;case If:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Lr=new L;function Cb(){qt.getLuminanceCoefficients(Lr);const s=Lr.x.toFixed(4),t=Lr.y.toFixed(4),e=Lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function Lb(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ib(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Hs(s){return s!==""}function hh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Db=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(s){return s.replace(Db,Nb)}const kb=new Map;function Nb(s,t){let e=Gt[t];if(e===void 0){const n=kb.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return lc(e)}const Ub=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dh(s){return s.replace(Ub,Fb)}function Fb(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function fh(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Ob(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ru?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Cu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function Bb(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ls:case hs:t="ENVMAP_TYPE_CUBE";break;case fa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zb(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function Gb(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Rc:t="ENVMAP_BLENDING_MULTIPLY";break;case Af:t="ENVMAP_BLENDING_MIX";break;case Ef:t="ENVMAP_BLENDING_ADD";break}return t}function Hb(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Vb(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Ob(e),l=Bb(e),h=zb(e),d=Gb(e),f=Hb(e),u=Pb(e),m=Lb(r),b=i.createProgram();let g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Hs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Hs).join(`
`),p.length>0&&(p+=`
`)):(g=[fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),p=[fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?Gt.tonemapping_pars_fragment:"",e.toneMapping!==bi?Rb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Eb("linearToOutputTexel",e.outputColorSpace),Cb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hs).join(`
`)),a=lc(a),a=hh(a,e),a=uh(a,e),o=lc(o),o=hh(o,e),o=uh(o,e),a=dh(a),o=dh(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+g+a,_=v+p+o,E=oh(i,i.VERTEX_SHADER,x),T=oh(i,i.FRAGMENT_SHADER,_);i.attachShader(b,E),i.attachShader(b,T),e.index0AttributeName!==void 0?i.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function w(S){if(s.debug.checkShaderErrors){const C=i.getProgramInfoLog(b).trim(),I=i.getShaderInfoLog(E).trim(),k=i.getShaderInfoLog(T).trim();let U=!0,z=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,b,E,T);else{const X=lh(i,E,"vertex"),G=lh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+C+`
`+X+`
`+G)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(I===""||k==="")&&(z=!1);z&&(S.diagnostics={runnable:U,programLog:C,vertexShader:{log:I,prefix:g},fragmentShader:{log:k,prefix:p}})}i.deleteShader(E),i.deleteShader(T),P=new sa(i,b),M=Ib(i,b)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(b,Sb)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wb++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=E,this.fragmentShader=T,this}let Wb=0;class jb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Xb(t),e.set(t,n)),n}}class Xb{constructor(t){this.id=Wb++,this.code=t,this.usedTimes=0}}function qb(s,t,e,n,i,r,a){const o=new Xu,c=new jb,l=new Set,h=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let u=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,y,S,C,I){const k=C.fog,U=I.geometry,z=M.isMeshStandardMaterial?C.environment:null,X=(M.isMeshStandardMaterial?e:t).get(M.envMap||z),G=X&&X.mapping===fa?X.image.height:null,rt=m[M.type];M.precision!==null&&(u=i.getMaxPrecision(M.precision),u!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));const it=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ht=it!==void 0?it.length:0;let Et=0;U.morphAttributes.position!==void 0&&(Et=1),U.morphAttributes.normal!==void 0&&(Et=2),U.morphAttributes.color!==void 0&&(Et=3);let Nt,Y,tt,st;if(rt){const se=yn[rt];Nt=se.vertexShader,Y=se.fragmentShader}else Nt=M.vertexShader,Y=M.fragmentShader,c.update(M),tt=c.getVertexShaderID(M),st=c.getFragmentShaderID(M);const Z=s.getRenderTarget(),St=s.state.buffers.depth.getReversed(),yt=I.isInstancedMesh===!0,Dt=I.isBatchedMesh===!0,Zt=!!M.map,zt=!!M.matcap,pe=!!X,B=!!M.aoMap,De=!!M.lightMap,Vt=!!M.bumpMap,Xt=!!M.normalMap,Lt=!!M.displacementMap,ie=!!M.emissiveMap,Ct=!!M.metalnessMap,D=!!M.roughnessMap,A=M.anisotropy>0,H=M.clearcoat>0,J=M.dispersion>0,et=M.iridescence>0,q=M.sheen>0,_t=M.transmission>0,ut=A&&!!M.anisotropyMap,xt=H&&!!M.clearcoatMap,Wt=H&&!!M.clearcoatNormalMap,at=H&&!!M.clearcoatRoughnessMap,Mt=et&&!!M.iridescenceMap,It=et&&!!M.iridescenceThicknessMap,V=q&&!!M.sheenColorMap,Q=q&&!!M.sheenRoughnessMap,nt=!!M.specularMap,dt=!!M.specularColorMap,Ft=!!M.specularIntensityMap,N=_t&&!!M.transmissionMap,ot=_t&&!!M.thicknessMap,K=!!M.gradientMap,$=!!M.alphaMap,ft=M.alphaTest>0,lt=!!M.alphaHash,Pt=!!M.extensions;let $t=bi;M.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&($t=s.toneMapping);const Pe={shaderID:rt,shaderType:M.type,shaderName:M.name,vertexShader:Nt,fragmentShader:Y,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:st,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:Dt,batchingColor:Dt&&I._colorsTexture!==null,instancing:yt,instancingColor:yt&&I.instanceColor!==null,instancingMorph:yt&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ge,alphaToCoverage:!!M.alphaToCoverage,map:Zt,matcap:zt,envMap:pe,envMapMode:pe&&X.mapping,envMapCubeUVHeight:G,aoMap:B,lightMap:De,bumpMap:Vt,normalMap:Xt,displacementMap:f&&Lt,emissiveMap:ie,normalMapObjectSpace:Xt&&M.normalMapType===zf,normalMapTangentSpace:Xt&&M.normalMapType===Uc,metalnessMap:Ct,roughnessMap:D,anisotropy:A,anisotropyMap:ut,clearcoat:H,clearcoatMap:xt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:at,dispersion:J,iridescence:et,iridescenceMap:Mt,iridescenceThicknessMap:It,sheen:q,sheenColorMap:V,sheenRoughnessMap:Q,specularMap:nt,specularColorMap:dt,specularIntensityMap:Ft,transmission:_t,transmissionMap:N,thicknessMap:ot,gradientMap:K,opaque:M.transparent===!1&&M.blending===Ii&&M.alphaToCoverage===!1,alphaMap:$,alphaTest:ft,alphaHash:lt,combine:M.combine,mapUv:Zt&&b(M.map.channel),aoMapUv:B&&b(M.aoMap.channel),lightMapUv:De&&b(M.lightMap.channel),bumpMapUv:Vt&&b(M.bumpMap.channel),normalMapUv:Xt&&b(M.normalMap.channel),displacementMapUv:Lt&&b(M.displacementMap.channel),emissiveMapUv:ie&&b(M.emissiveMap.channel),metalnessMapUv:Ct&&b(M.metalnessMap.channel),roughnessMapUv:D&&b(M.roughnessMap.channel),anisotropyMapUv:ut&&b(M.anisotropyMap.channel),clearcoatMapUv:xt&&b(M.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&b(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&b(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&b(M.iridescenceMap.channel),iridescenceThicknessMapUv:It&&b(M.iridescenceThicknessMap.channel),sheenColorMapUv:V&&b(M.sheenColorMap.channel),sheenRoughnessMapUv:Q&&b(M.sheenRoughnessMap.channel),specularMapUv:nt&&b(M.specularMap.channel),specularColorMapUv:dt&&b(M.specularColorMap.channel),specularIntensityMapUv:Ft&&b(M.specularIntensityMap.channel),transmissionMapUv:N&&b(M.transmissionMap.channel),thicknessMapUv:ot&&b(M.thicknessMap.channel),alphaMapUv:$&&b(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Xt||A),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!U.attributes.uv&&(Zt||$),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:St,skinning:I.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Et,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&S.length>0,shadowMapType:s.shadowMap.type,toneMapping:$t,decodeVideoTexture:Zt&&M.map.isVideoTexture===!0&&qt.getTransfer(M.map.colorSpace)===oe,decodeVideoTextureEmissive:ie&&M.emissiveMap.isVideoTexture===!0&&qt.getTransfer(M.emissiveMap.colorSpace)===oe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Oe,flipSided:M.side===Be,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Pt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&M.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const S in M.defines)y.push(S),y.push(M.defines[S]);return M.isRawShaderMaterial===!1&&(v(y,M),x(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function v(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function x(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function _(M){const y=m[M.type];let S;if(y){const C=yn[y];S=Pp.clone(C.uniforms)}else S=M.uniforms;return S}function E(M,y){let S;for(let C=0,I=h.length;C<I;C++){const k=h[C];if(k.cacheKey===y){S=k,++S.usedTimes;break}}return S===void 0&&(S=new Vb(s,y,M,r),h.push(S)),S}function T(M){if(--M.usedTimes===0){const y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function w(M){c.remove(M)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:E,releaseProgram:T,releaseShaderCache:w,programs:h,dispose:P}}function Yb(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Kb(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ph(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function mh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,f,u,m,b,g){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:f,material:u,groupOrder:m,renderOrder:d.renderOrder,z:b,group:g},s[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=u,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=b,p.group=g),t++,p}function o(d,f,u,m,b,g){const p=a(d,f,u,m,b,g);u.transmission>0?n.push(p):u.transparent===!0?i.push(p):e.push(p)}function c(d,f,u,m,b,g){const p=a(d,f,u,m,b,g);u.transmission>0?n.unshift(p):u.transparent===!0?i.unshift(p):e.unshift(p)}function l(d,f){e.length>1&&e.sort(d||Kb),n.length>1&&n.sort(f||ph),i.length>1&&i.sort(f||ph)}function h(){for(let d=t,f=s.length;d<f;d++){const u=s[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function $b(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new mh,s.set(n,[a])):i>=r.length?(a=new mh,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Jb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new mt};break;case"SpotLight":e={position:new L,direction:new L,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":e={color:new mt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Qb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Zb=0;function t_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function e_(s){const t=new Jb,e=Qb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const i=new L,r=new kt,a=new kt;function o(l){let h=0,d=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let u=0,m=0,b=0,g=0,p=0,v=0,x=0,_=0,E=0,T=0,w=0;l.sort(t_);for(let M=0,y=l.length;M<y;M++){const S=l[M],C=S.color,I=S.intensity,k=S.distance,U=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=C.r*I,d+=C.g*I,f+=C.b*I;else if(S.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(S.sh.coefficients[z],I);w++}else if(S.isDirectionalLight){const z=t.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const X=S.shadow,G=e.get(S);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.directionalShadow[u]=G,n.directionalShadowMap[u]=U,n.directionalShadowMatrix[u]=S.shadow.matrix,v++}n.directional[u]=z,u++}else if(S.isSpotLight){const z=t.get(S);z.position.setFromMatrixPosition(S.matrixWorld),z.color.copy(C).multiplyScalar(I),z.distance=k,z.coneCos=Math.cos(S.angle),z.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),z.decay=S.decay,n.spot[b]=z;const X=S.shadow;if(S.map&&(n.spotLightMap[E]=S.map,E++,X.updateMatrices(S),S.castShadow&&T++),n.spotLightMatrix[b]=X.matrix,S.castShadow){const G=e.get(S);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.spotShadow[b]=G,n.spotShadowMap[b]=U,_++}b++}else if(S.isRectAreaLight){const z=t.get(S);z.color.copy(C).multiplyScalar(I),z.halfWidth.set(S.width*.5,0,0),z.halfHeight.set(0,S.height*.5,0),n.rectArea[g]=z,g++}else if(S.isPointLight){const z=t.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),z.distance=S.distance,z.decay=S.decay,S.castShadow){const X=S.shadow,G=e.get(S);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=U,n.pointShadowMatrix[m]=S.shadow.matrix,x++}n.point[m]=z,m++}else if(S.isHemisphereLight){const z=t.get(S);z.skyColor.copy(S.color).multiplyScalar(I),z.groundColor.copy(S.groundColor).multiplyScalar(I),n.hemi[p]=z,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==u||P.pointLength!==m||P.spotLength!==b||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==x||P.numSpotShadows!==_||P.numSpotMaps!==E||P.numLightProbes!==w)&&(n.directional.length=u,n.spot.length=b,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,P.directionalLength=u,P.pointLength=m,P.spotLength=b,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=x,P.numSpotShadows=_,P.numSpotMaps=E,P.numLightProbes=w,n.version=Zb++)}function c(l,h){let d=0,f=0,u=0,m=0,b=0;const g=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const x=l[p];if(x.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),d++}else if(x.isSpotLight){const _=n.spot[u];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),u++}else if(x.isRectAreaLight){const _=n.rectArea[m];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const _=n.hemi[b];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(g),b++}}}return{setup:o,setupView:c,state:n}}function gh(s){const t=new e_(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function n_(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new gh(s),t.set(i,[o])):r>=a.length?(o=new gh(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class i_ extends gn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class s_ extends gn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const r_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a_=`uniform sampler2D shadow_pass;
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
}`;function o_(s,t,e){let n=new Bc;const i=new vt,r=new vt,a=new Qt,o=new i_({depthPacking:Bf}),c=new s_,l={},h=e.maxTextureSize,d={[Qn]:Be,[Be]:Qn,[Oe]:Oe},f=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:r_,fragmentShader:a_}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const m=new me;m.setAttribute("position",new le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ne(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ru;let p=this.type;this.render=function(T,w,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const M=s.getRenderTarget(),y=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),C=s.state;C.setBlending(gi),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const I=p!==Hn&&this.type===Hn,k=p===Hn&&this.type!==Hn;for(let U=0,z=T.length;U<z;U++){const X=T[U],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const rt=G.getFrameExtents();if(i.multiply(rt),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,G.mapSize.y=r.y)),G.map===null||I===!0||k===!0){const ht=this.type!==Hn?{minFilter:ze,magFilter:ze}:{};G.map!==null&&G.map.dispose(),G.map=new Ni(i.x,i.y,ht),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const it=G.getViewportCount();for(let ht=0;ht<it;ht++){const Et=G.getViewport(ht);a.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),C.viewport(a),G.updateMatrices(X,ht),n=G.getFrustum(),_(w,P,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===Hn&&v(G,P),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(M,y,S)};function v(T,w){const P=t.update(b);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ni(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(w,null,P,f,b,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(w,null,P,u,b,null)}function x(T,w,P,M){let y=null;const S=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)y=S;else if(y=P.isPointLight===!0?c:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const C=y.uuid,I=w.uuid;let k=l[C];k===void 0&&(k={},l[C]=k);let U=k[I];U===void 0&&(U=y.clone(),k[I]=U,w.addEventListener("dispose",E)),y=U}if(y.visible=w.visible,y.wireframe=w.wireframe,M===Hn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:d[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const C=s.properties.get(y);C.light=P}return y}function _(T,w,P,M,y){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Hn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const I=t.update(T),k=T.material;if(Array.isArray(k)){const U=I.groups;for(let z=0,X=U.length;z<X;z++){const G=U[z],rt=k[G.materialIndex];if(rt&&rt.visible){const it=x(T,rt,M,y);T.onBeforeShadow(s,T,w,P,I,it,G),s.renderBufferDirect(P,null,I,it,T,G),T.onAfterShadow(s,T,w,P,I,it,G)}}}else if(k.visible){const U=x(T,k,M,y);T.onBeforeShadow(s,T,w,P,I,U,null),s.renderBufferDirect(P,null,I,U,T,null),T.onAfterShadow(s,T,w,P,I,U,null)}}const C=T.children;for(let I=0,k=C.length;I<k;I++)_(C[I],w,P,M,y)}function E(T){T.target.removeEventListener("dispose",E);for(const P in l){const M=l[P],y=T.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const c_={[Ao]:Eo,[Ro]:Lo,[Co]:Io,[cs]:Po,[Eo]:Ao,[Lo]:Ro,[Io]:Co,[Po]:cs};function l_(s,t){function e(){let N=!1;const ot=new Qt;let K=null;const $=new Qt(0,0,0,0);return{setMask:function(ft){K!==ft&&!N&&(s.colorMask(ft,ft,ft,ft),K=ft)},setLocked:function(ft){N=ft},setClear:function(ft,lt,Pt,$t,Pe){Pe===!0&&(ft*=$t,lt*=$t,Pt*=$t),ot.set(ft,lt,Pt,$t),$.equals(ot)===!1&&(s.clearColor(ft,lt,Pt,$t),$.copy(ot))},reset:function(){N=!1,K=null,$.set(-1,0,0,0)}}}function n(){let N=!1,ot=!1,K=null,$=null,ft=null;return{setReversed:function(lt){if(ot!==lt){const Pt=t.get("EXT_clip_control");ot?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT);const $t=ft;ft=null,this.setClear($t)}ot=lt},getReversed:function(){return ot},setTest:function(lt){lt?Z(s.DEPTH_TEST):St(s.DEPTH_TEST)},setMask:function(lt){K!==lt&&!N&&(s.depthMask(lt),K=lt)},setFunc:function(lt){if(ot&&(lt=c_[lt]),$!==lt){switch(lt){case Ao:s.depthFunc(s.NEVER);break;case Eo:s.depthFunc(s.ALWAYS);break;case Ro:s.depthFunc(s.LESS);break;case cs:s.depthFunc(s.LEQUAL);break;case Co:s.depthFunc(s.EQUAL);break;case Po:s.depthFunc(s.GEQUAL);break;case Lo:s.depthFunc(s.GREATER);break;case Io:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=lt}},setLocked:function(lt){N=lt},setClear:function(lt){ft!==lt&&(ot&&(lt=1-lt),s.clearDepth(lt),ft=lt)},reset:function(){N=!1,K=null,$=null,ft=null,ot=!1}}}function i(){let N=!1,ot=null,K=null,$=null,ft=null,lt=null,Pt=null,$t=null,Pe=null;return{setTest:function(se){N||(se?Z(s.STENCIL_TEST):St(s.STENCIL_TEST))},setMask:function(se){ot!==se&&!N&&(s.stencilMask(se),ot=se)},setFunc:function(se,nn,In){(K!==se||$!==nn||ft!==In)&&(s.stencilFunc(se,nn,In),K=se,$=nn,ft=In)},setOp:function(se,nn,In){(lt!==se||Pt!==nn||$t!==In)&&(s.stencilOp(se,nn,In),lt=se,Pt=nn,$t=In)},setLocked:function(se){N=se},setClear:function(se){Pe!==se&&(s.clearStencil(se),Pe=se)},reset:function(){N=!1,ot=null,K=null,$=null,ft=null,lt=null,Pt=null,$t=null,Pe=null}}}const r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,u=[],m=null,b=!1,g=null,p=null,v=null,x=null,_=null,E=null,T=null,w=new mt(0,0,0),P=0,M=!1,y=null,S=null,C=null,I=null,k=null;const U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,X=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=X>=1):G.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=X>=2);let rt=null,it={};const ht=s.getParameter(s.SCISSOR_BOX),Et=s.getParameter(s.VIEWPORT),Nt=new Qt().fromArray(ht),Y=new Qt().fromArray(Et);function tt(N,ot,K,$){const ft=new Uint8Array(4),lt=s.createTexture();s.bindTexture(N,lt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pt=0;Pt<K;Pt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(ot,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,ft):s.texImage2D(ot+Pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ft);return lt}const st={};st[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),st[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),st[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(s.DEPTH_TEST),a.setFunc(cs),Vt(!1),Xt(bl),Z(s.CULL_FACE),B(gi);function Z(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function St(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function yt(N,ot){return d[N]!==ot?(s.bindFramebuffer(N,ot),d[N]=ot,N===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ot),N===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ot),!0):!1}function Dt(N,ot){let K=u,$=!1;if(N){K=f.get(ot),K===void 0&&(K=[],f.set(ot,K));const ft=N.textures;if(K.length!==ft.length||K[0]!==s.COLOR_ATTACHMENT0){for(let lt=0,Pt=ft.length;lt<Pt;lt++)K[lt]=s.COLOR_ATTACHMENT0+lt;K.length=ft.length,$=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,$=!0);$&&s.drawBuffers(K)}function Zt(N){return m!==N?(s.useProgram(N),m=N,!0):!1}const zt={[Ci]:s.FUNC_ADD,[lf]:s.FUNC_SUBTRACT,[hf]:s.FUNC_REVERSE_SUBTRACT};zt[uf]=s.MIN,zt[df]=s.MAX;const pe={[ff]:s.ZERO,[pf]:s.ONE,[mf]:s.SRC_COLOR,[wo]:s.SRC_ALPHA,[Mf]:s.SRC_ALPHA_SATURATE,[xf]:s.DST_COLOR,[bf]:s.DST_ALPHA,[gf]:s.ONE_MINUS_SRC_COLOR,[To]:s.ONE_MINUS_SRC_ALPHA,[vf]:s.ONE_MINUS_DST_COLOR,[_f]:s.ONE_MINUS_DST_ALPHA,[yf]:s.CONSTANT_COLOR,[Sf]:s.ONE_MINUS_CONSTANT_COLOR,[wf]:s.CONSTANT_ALPHA,[Tf]:s.ONE_MINUS_CONSTANT_ALPHA};function B(N,ot,K,$,ft,lt,Pt,$t,Pe,se){if(N===gi){b===!0&&(St(s.BLEND),b=!1);return}if(b===!1&&(Z(s.BLEND),b=!0),N!==cf){if(N!==g||se!==M){if((p!==Ci||_!==Ci)&&(s.blendEquation(s.FUNC_ADD),p=Ci,_=Ci),se)switch(N){case Ii:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case So:s.blendFunc(s.ONE,s.ONE);break;case _l:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ii:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case So:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case _l:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,x=null,E=null,T=null,w.set(0,0,0),P=0,g=N,M=se}return}ft=ft||ot,lt=lt||K,Pt=Pt||$,(ot!==p||ft!==_)&&(s.blendEquationSeparate(zt[ot],zt[ft]),p=ot,_=ft),(K!==v||$!==x||lt!==E||Pt!==T)&&(s.blendFuncSeparate(pe[K],pe[$],pe[lt],pe[Pt]),v=K,x=$,E=lt,T=Pt),($t.equals(w)===!1||Pe!==P)&&(s.blendColor($t.r,$t.g,$t.b,Pe),w.copy($t),P=Pe),g=N,M=!1}function De(N,ot){N.side===Oe?St(s.CULL_FACE):Z(s.CULL_FACE);let K=N.side===Be;ot&&(K=!K),Vt(K),N.blending===Ii&&N.transparent===!1?B(gi):B(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const $=N.stencilWrite;o.setTest($),$&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ie(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):St(s.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(N){y!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),y=N)}function Xt(N){N!==af?(Z(s.CULL_FACE),N!==S&&(N===bl?s.cullFace(s.BACK):N===of?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):St(s.CULL_FACE),S=N}function Lt(N){N!==C&&(z&&s.lineWidth(N),C=N)}function ie(N,ot,K){N?(Z(s.POLYGON_OFFSET_FILL),(I!==ot||k!==K)&&(s.polygonOffset(ot,K),I=ot,k=K)):St(s.POLYGON_OFFSET_FILL)}function Ct(N){N?Z(s.SCISSOR_TEST):St(s.SCISSOR_TEST)}function D(N){N===void 0&&(N=s.TEXTURE0+U-1),rt!==N&&(s.activeTexture(N),rt=N)}function A(N,ot,K){K===void 0&&(rt===null?K=s.TEXTURE0+U-1:K=rt);let $=it[K];$===void 0&&($={type:void 0,texture:void 0},it[K]=$),($.type!==N||$.texture!==ot)&&(rt!==K&&(s.activeTexture(K),rt=K),s.bindTexture(N,ot||st[N]),$.type=N,$.texture=ot)}function H(){const N=it[rt];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Wt(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function It(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(N){Nt.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Nt.copy(N))}function Q(N){Y.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Y.copy(N))}function nt(N,ot){let K=l.get(ot);K===void 0&&(K=new WeakMap,l.set(ot,K));let $=K.get(N);$===void 0&&($=s.getUniformBlockIndex(ot,N.name),K.set(N,$))}function dt(N,ot){const $=l.get(ot).get(N);c.get(ot)!==$&&(s.uniformBlockBinding(ot,$,N.__bindingPointIndex),c.set(ot,$))}function Ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},rt=null,it={},d={},f=new WeakMap,u=[],m=null,b=!1,g=null,p=null,v=null,x=null,_=null,E=null,T=null,w=new mt(0,0,0),P=0,M=!1,y=null,S=null,C=null,I=null,k=null,Nt.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:St,bindFramebuffer:yt,drawBuffers:Dt,useProgram:Zt,setBlending:B,setMaterial:De,setFlipSided:Vt,setCullFace:Xt,setLineWidth:Lt,setPolygonOffset:ie,setScissorTest:Ct,activeTexture:D,bindTexture:A,unbindTexture:H,compressedTexImage2D:J,compressedTexImage3D:et,texImage2D:Mt,texImage3D:It,updateUBOMapping:nt,uniformBlockBinding:dt,texStorage2D:Wt,texStorage3D:at,texSubImage2D:q,texSubImage3D:_t,compressedTexSubImage2D:ut,compressedTexSubImage3D:xt,scissor:V,viewport:Q,reset:Ft}}function bh(s,t,e,n){const i=h_(n);switch(e){case Nu:return s*t;case Fu:return s*t;case Ou:return s*t*2;case Ic:return s*t/i.components*i.byteLength;case Dc:return s*t/i.components*i.byteLength;case Bu:return s*t*2/i.components*i.byteLength;case kc:return s*t*2/i.components*i.byteLength;case Uu:return s*t*3/i.components*i.byteLength;case en:return s*t*4/i.components*i.byteLength;case Nc:return s*t*4/i.components*i.byteLength;case Zr:case ta:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ea:case na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Uo:case Oo:return Math.max(s,16)*Math.max(t,8)/4;case No:case Fo:return Math.max(s,8)*Math.max(t,8)/2;case Bo:case zo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Go:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case jo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case qo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case $o:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case tc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ec:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ia:case nc:case ic:return Math.ceil(s/4)*Math.ceil(t/4)*16;case zu:case sc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case rc:case ac:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function h_(s){switch(s){case Zn:case Iu:return{byteLength:1,components:1};case Qs:case Du:case rr:return{byteLength:2,components:1};case Pc:case Lc:return{byteLength:2,components:4};case ki:case Cc:case fn:return{byteLength:4,components:1};case ku:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function u_(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new vt,h=new WeakMap;let d;const f=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(D,A){return u?new OffscreenCanvas(D,A):er("canvas")}function b(D,A,H){let J=1;const et=Ct(D);if((et.width>H||et.height>H)&&(J=H/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const q=Math.floor(J*et.width),_t=Math.floor(J*et.height);d===void 0&&(d=m(q,_t));const ut=A?m(q,_t):d;return ut.width=q,ut.height=_t,ut.getContext("2d").drawImage(D,0,0,q,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+q+"x"+_t+")."),ut}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),D;return D}function g(D){return D.generateMipmaps}function p(D){s.generateMipmap(D)}function v(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(D,A,H,J,et=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let q=A;if(A===s.RED&&(H===s.FLOAT&&(q=s.R32F),H===s.HALF_FLOAT&&(q=s.R16F),H===s.UNSIGNED_BYTE&&(q=s.R8)),A===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(q=s.R8UI),H===s.UNSIGNED_SHORT&&(q=s.R16UI),H===s.UNSIGNED_INT&&(q=s.R32UI),H===s.BYTE&&(q=s.R8I),H===s.SHORT&&(q=s.R16I),H===s.INT&&(q=s.R32I)),A===s.RG&&(H===s.FLOAT&&(q=s.RG32F),H===s.HALF_FLOAT&&(q=s.RG16F),H===s.UNSIGNED_BYTE&&(q=s.RG8)),A===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(q=s.RG8UI),H===s.UNSIGNED_SHORT&&(q=s.RG16UI),H===s.UNSIGNED_INT&&(q=s.RG32UI),H===s.BYTE&&(q=s.RG8I),H===s.SHORT&&(q=s.RG16I),H===s.INT&&(q=s.RG32I)),A===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(q=s.RGB8UI),H===s.UNSIGNED_SHORT&&(q=s.RGB16UI),H===s.UNSIGNED_INT&&(q=s.RGB32UI),H===s.BYTE&&(q=s.RGB8I),H===s.SHORT&&(q=s.RGB16I),H===s.INT&&(q=s.RGB32I)),A===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),H===s.UNSIGNED_INT&&(q=s.RGBA32UI),H===s.BYTE&&(q=s.RGBA8I),H===s.SHORT&&(q=s.RGBA16I),H===s.INT&&(q=s.RGBA32I)),A===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),A===s.RGBA){const _t=et?pa:qt.getTransfer(J);H===s.FLOAT&&(q=s.RGBA32F),H===s.HALF_FLOAT&&(q=s.RGBA16F),H===s.UNSIGNED_BYTE&&(q=_t===oe?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(D,A){let H;return D?A===null||A===ki||A===us?H=s.DEPTH24_STENCIL8:A===fn?H=s.DEPTH32F_STENCIL8:A===Qs&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ki||A===us?H=s.DEPTH_COMPONENT24:A===fn?H=s.DEPTH_COMPONENT32F:A===Qs&&(H=s.DEPTH_COMPONENT16),H}function E(D,A){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==ze&&D.minFilter!==Ye?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function T(D){const A=D.target;A.removeEventListener("dispose",T),P(A),A.isVideoTexture&&h.delete(A)}function w(D){const A=D.target;A.removeEventListener("dispose",w),y(A)}function P(D){const A=n.get(D);if(A.__webglInit===void 0)return;const H=D.source,J=f.get(H);if(J){const et=J[A.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(D),Object.keys(J).length===0&&f.delete(H)}n.remove(D)}function M(D){const A=n.get(D);s.deleteTexture(A.__webglTexture);const H=D.source,J=f.get(H);delete J[A.__cacheKey],a.memory.textures--}function y(D){const A=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(A.__webglFramebuffer[J]))for(let et=0;et<A.__webglFramebuffer[J].length;et++)s.deleteFramebuffer(A.__webglFramebuffer[J][et]);else s.deleteFramebuffer(A.__webglFramebuffer[J]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[J])}else{if(Array.isArray(A.__webglFramebuffer))for(let J=0;J<A.__webglFramebuffer.length;J++)s.deleteFramebuffer(A.__webglFramebuffer[J]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let J=0;J<A.__webglColorRenderbuffer.length;J++)A.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[J]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const H=D.textures;for(let J=0,et=H.length;J<et;J++){const q=n.get(H[J]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(H[J])}n.remove(D)}let S=0;function C(){S=0}function I(){const D=S;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),S+=1,D}function k(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function U(D,A){const H=n.get(D);if(D.isVideoTexture&&Lt(D),D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){const J=D.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(H,D,A);return}}e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+A)}function z(D,A){const H=n.get(D);if(D.version>0&&H.__version!==D.version){Y(H,D,A);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+A)}function X(D,A){const H=n.get(D);if(D.version>0&&H.__version!==D.version){Y(H,D,A);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+A)}function G(D,A){const H=n.get(D);if(D.version>0&&H.__version!==D.version){tt(H,D,A);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+A)}const rt={[Di]:s.REPEAT,[di]:s.CLAMP_TO_EDGE,[aa]:s.MIRRORED_REPEAT},it={[ze]:s.NEAREST,[Lu]:s.NEAREST_MIPMAP_NEAREST,[zs]:s.NEAREST_MIPMAP_LINEAR,[Ye]:s.LINEAR,[Qr]:s.LINEAR_MIPMAP_NEAREST,[Xn]:s.LINEAR_MIPMAP_LINEAR},ht={[Gf]:s.NEVER,[qf]:s.ALWAYS,[Hf]:s.LESS,[Hu]:s.LEQUAL,[Vf]:s.EQUAL,[Xf]:s.GEQUAL,[Wf]:s.GREATER,[jf]:s.NOTEQUAL};function Et(D,A){if(A.type===fn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ye||A.magFilter===Qr||A.magFilter===zs||A.magFilter===Xn||A.minFilter===Ye||A.minFilter===Qr||A.minFilter===zs||A.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,rt[A.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,rt[A.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,rt[A.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,it[A.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,it[A.minFilter]),A.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,ht[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ze||A.minFilter!==zs&&A.minFilter!==Xn||A.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Nt(D,A){let H=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",T));const J=A.source;let et=f.get(J);et===void 0&&(et={},f.set(J,et));const q=k(A);if(q!==D.__cacheKey){et[q]===void 0&&(et[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),et[q].usedTimes++;const _t=et[D.__cacheKey];_t!==void 0&&(et[D.__cacheKey].usedTimes--,_t.usedTimes===0&&M(A)),D.__cacheKey=q,D.__webglTexture=et[q].texture}return H}function Y(D,A,H){let J=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(J=s.TEXTURE_3D);const et=Nt(D,A),q=A.source;e.bindTexture(J,D.__webglTexture,s.TEXTURE0+H);const _t=n.get(q);if(q.version!==_t.__version||et===!0){e.activeTexture(s.TEXTURE0+H);const ut=qt.getPrimaries(qt.workingColorSpace),xt=A.colorSpace===ui?null:qt.getPrimaries(A.colorSpace),Wt=A.colorSpace===ui||ut===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let at=b(A.image,!1,i.maxTextureSize);at=ie(A,at);const Mt=r.convert(A.format,A.colorSpace),It=r.convert(A.type);let V=x(A.internalFormat,Mt,It,A.colorSpace,A.isVideoTexture);Et(J,A);let Q;const nt=A.mipmaps,dt=A.isVideoTexture!==!0,Ft=_t.__version===void 0||et===!0,N=q.dataReady,ot=E(A,at);if(A.isDepthTexture)V=_(A.format===ds,A.type),Ft&&(dt?e.texStorage2D(s.TEXTURE_2D,1,V,at.width,at.height):e.texImage2D(s.TEXTURE_2D,0,V,at.width,at.height,0,Mt,It,null));else if(A.isDataTexture)if(nt.length>0){dt&&Ft&&e.texStorage2D(s.TEXTURE_2D,ot,V,nt[0].width,nt[0].height);for(let K=0,$=nt.length;K<$;K++)Q=nt[K],dt?N&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,Q.width,Q.height,Mt,It,Q.data):e.texImage2D(s.TEXTURE_2D,K,V,Q.width,Q.height,0,Mt,It,Q.data);A.generateMipmaps=!1}else dt?(Ft&&e.texStorage2D(s.TEXTURE_2D,ot,V,at.width,at.height),N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,at.width,at.height,Mt,It,at.data)):e.texImage2D(s.TEXTURE_2D,0,V,at.width,at.height,0,Mt,It,at.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){dt&&Ft&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ot,V,nt[0].width,nt[0].height,at.depth);for(let K=0,$=nt.length;K<$;K++)if(Q=nt[K],A.format!==en)if(Mt!==null)if(dt){if(N)if(A.layerUpdates.size>0){const ft=bh(Q.width,Q.height,A.format,A.type);for(const lt of A.layerUpdates){const Pt=Q.data.subarray(lt*ft/Q.data.BYTES_PER_ELEMENT,(lt+1)*ft/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,lt,Q.width,Q.height,1,Mt,Pt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Q.width,Q.height,at.depth,Mt,Q.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,V,Q.width,Q.height,at.depth,0,Q.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Q.width,Q.height,at.depth,Mt,It,Q.data):e.texImage3D(s.TEXTURE_2D_ARRAY,K,V,Q.width,Q.height,at.depth,0,Mt,It,Q.data)}else{dt&&Ft&&e.texStorage2D(s.TEXTURE_2D,ot,V,nt[0].width,nt[0].height);for(let K=0,$=nt.length;K<$;K++)Q=nt[K],A.format!==en?Mt!==null?dt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,Q.width,Q.height,Mt,Q.data):e.compressedTexImage2D(s.TEXTURE_2D,K,V,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?N&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,Q.width,Q.height,Mt,It,Q.data):e.texImage2D(s.TEXTURE_2D,K,V,Q.width,Q.height,0,Mt,It,Q.data)}else if(A.isDataArrayTexture)if(dt){if(Ft&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ot,V,at.width,at.height,at.depth),N)if(A.layerUpdates.size>0){const K=bh(at.width,at.height,A.format,A.type);for(const $ of A.layerUpdates){const ft=at.data.subarray($*K/at.data.BYTES_PER_ELEMENT,($+1)*K/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,at.width,at.height,1,Mt,It,ft)}A.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Mt,It,at.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,V,at.width,at.height,at.depth,0,Mt,It,at.data);else if(A.isData3DTexture)dt?(Ft&&e.texStorage3D(s.TEXTURE_3D,ot,V,at.width,at.height,at.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Mt,It,at.data)):e.texImage3D(s.TEXTURE_3D,0,V,at.width,at.height,at.depth,0,Mt,It,at.data);else if(A.isFramebufferTexture){if(Ft)if(dt)e.texStorage2D(s.TEXTURE_2D,ot,V,at.width,at.height);else{let K=at.width,$=at.height;for(let ft=0;ft<ot;ft++)e.texImage2D(s.TEXTURE_2D,ft,V,K,$,0,Mt,It,null),K>>=1,$>>=1}}else if(nt.length>0){if(dt&&Ft){const K=Ct(nt[0]);e.texStorage2D(s.TEXTURE_2D,ot,V,K.width,K.height)}for(let K=0,$=nt.length;K<$;K++)Q=nt[K],dt?N&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,Mt,It,Q):e.texImage2D(s.TEXTURE_2D,K,V,Mt,It,Q);A.generateMipmaps=!1}else if(dt){if(Ft){const K=Ct(at);e.texStorage2D(s.TEXTURE_2D,ot,V,K.width,K.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Mt,It,at)}else e.texImage2D(s.TEXTURE_2D,0,V,Mt,It,at);g(A)&&p(J),_t.__version=q.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function tt(D,A,H){if(A.image.length!==6)return;const J=Nt(D,A),et=A.source;e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+H);const q=n.get(et);if(et.version!==q.__version||J===!0){e.activeTexture(s.TEXTURE0+H);const _t=qt.getPrimaries(qt.workingColorSpace),ut=A.colorSpace===ui?null:qt.getPrimaries(A.colorSpace),xt=A.colorSpace===ui||_t===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Wt=A.isCompressedTexture||A.image[0].isCompressedTexture,at=A.image[0]&&A.image[0].isDataTexture,Mt=[];for(let $=0;$<6;$++)!Wt&&!at?Mt[$]=b(A.image[$],!0,i.maxCubemapSize):Mt[$]=at?A.image[$].image:A.image[$],Mt[$]=ie(A,Mt[$]);const It=Mt[0],V=r.convert(A.format,A.colorSpace),Q=r.convert(A.type),nt=x(A.internalFormat,V,Q,A.colorSpace),dt=A.isVideoTexture!==!0,Ft=q.__version===void 0||J===!0,N=et.dataReady;let ot=E(A,It);Et(s.TEXTURE_CUBE_MAP,A);let K;if(Wt){dt&&Ft&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ot,nt,It.width,It.height);for(let $=0;$<6;$++){K=Mt[$].mipmaps;for(let ft=0;ft<K.length;ft++){const lt=K[ft];A.format!==en?V!==null?dt?N&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,0,0,lt.width,lt.height,V,lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,nt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):dt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,0,0,lt.width,lt.height,V,Q,lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,nt,lt.width,lt.height,0,V,Q,lt.data)}}}else{if(K=A.mipmaps,dt&&Ft){K.length>0&&ot++;const $=Ct(Mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ot,nt,$.width,$.height)}for(let $=0;$<6;$++)if(at){dt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Mt[$].width,Mt[$].height,V,Q,Mt[$].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,nt,Mt[$].width,Mt[$].height,0,V,Q,Mt[$].data);for(let ft=0;ft<K.length;ft++){const Pt=K[ft].image[$].image;dt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,0,0,Pt.width,Pt.height,V,Q,Pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,nt,Pt.width,Pt.height,0,V,Q,Pt.data)}}else{dt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,V,Q,Mt[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,nt,V,Q,Mt[$]);for(let ft=0;ft<K.length;ft++){const lt=K[ft];dt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,0,0,V,Q,lt.image[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,nt,V,Q,lt.image[$])}}}g(A)&&p(s.TEXTURE_CUBE_MAP),q.__version=et.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function st(D,A,H,J,et,q){const _t=r.convert(H.format,H.colorSpace),ut=r.convert(H.type),xt=x(H.internalFormat,_t,ut,H.colorSpace),Wt=n.get(A),at=n.get(H);if(at.__renderTarget=A,!Wt.__hasExternalTextures){const Mt=Math.max(1,A.width>>q),It=Math.max(1,A.height>>q);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,q,xt,Mt,It,A.depth,0,_t,ut,null):e.texImage2D(et,q,xt,Mt,It,0,_t,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,D),Xt(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,et,at.__webglTexture,0,Vt(A)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,et,at.__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Z(D,A,H){if(s.bindRenderbuffer(s.RENDERBUFFER,D),A.depthBuffer){const J=A.depthTexture,et=J&&J.isDepthTexture?J.type:null,q=_(A.stencilBuffer,et),_t=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=Vt(A);Xt(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,q,A.width,A.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,q,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,q,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,D)}else{const J=A.textures;for(let et=0;et<J.length;et++){const q=J[et],_t=r.convert(q.format,q.colorSpace),ut=r.convert(q.type),xt=x(q.internalFormat,_t,ut,q.colorSpace),Wt=Vt(A);H&&Xt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,xt,A.width,A.height):Xt(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt,xt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,xt,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function St(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(A.depthTexture);J.__renderTarget=A,(!J.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),U(A.depthTexture,0);const et=J.__webglTexture,q=Vt(A);if(A.depthTexture.format===ss)Xt(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(A.depthTexture.format===ds)Xt(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function yt(D){const A=n.get(D),H=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const J=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),J){const et=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),A.__depthDisposeCallback=et}A.__boundDepthTexture=J}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");St(A.__webglFramebuffer,D)}else if(H){A.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[J]),A.__webglDepthbuffer[J]===void 0)A.__webglDepthbuffer[J]=s.createRenderbuffer(),Z(A.__webglDepthbuffer[J],D,!1);else{const et=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=A.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Z(A.__webglDepthbuffer,D,!1);else{const J=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Dt(D,A,H){const J=n.get(D);A!==void 0&&st(J.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&yt(D)}function Zt(D){const A=D.texture,H=n.get(D),J=n.get(A);D.addEventListener("dispose",w);const et=D.textures,q=D.isWebGLCubeRenderTarget===!0,_t=et.length>1;if(_t||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=A.version,a.memory.textures++),q){H.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer[ut]=[];for(let xt=0;xt<A.mipmaps.length;xt++)H.__webglFramebuffer[ut][xt]=s.createFramebuffer()}else H.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer=[];for(let ut=0;ut<A.mipmaps.length;ut++)H.__webglFramebuffer[ut]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(_t)for(let ut=0,xt=et.length;ut<xt;ut++){const Wt=n.get(et[ut]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=s.createTexture(),a.memory.textures++)}if(D.samples>0&&Xt(D)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ut=0;ut<et.length;ut++){const xt=et[ut];H.__webglColorRenderbuffer[ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[ut]);const Wt=r.convert(xt.format,xt.colorSpace),at=r.convert(xt.type),Mt=x(xt.internalFormat,Wt,at,xt.colorSpace,D.isXRRenderTarget===!0),It=Vt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,It,Mt,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,H.__webglColorRenderbuffer[ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Z(H.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),Et(s.TEXTURE_CUBE_MAP,A);for(let ut=0;ut<6;ut++)if(A.mipmaps&&A.mipmaps.length>0)for(let xt=0;xt<A.mipmaps.length;xt++)st(H.__webglFramebuffer[ut][xt],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,xt);else st(H.__webglFramebuffer[ut],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);g(A)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let ut=0,xt=et.length;ut<xt;ut++){const Wt=et[ut],at=n.get(Wt);e.bindTexture(s.TEXTURE_2D,at.__webglTexture),Et(s.TEXTURE_2D,Wt),st(H.__webglFramebuffer,D,Wt,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,0),g(Wt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ut=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,J.__webglTexture),Et(ut,A),A.mipmaps&&A.mipmaps.length>0)for(let xt=0;xt<A.mipmaps.length;xt++)st(H.__webglFramebuffer[xt],D,A,s.COLOR_ATTACHMENT0,ut,xt);else st(H.__webglFramebuffer,D,A,s.COLOR_ATTACHMENT0,ut,0);g(A)&&p(ut),e.unbindTexture()}D.depthBuffer&&yt(D)}function zt(D){const A=D.textures;for(let H=0,J=A.length;H<J;H++){const et=A[H];if(g(et)){const q=v(D),_t=n.get(et).__webglTexture;e.bindTexture(q,_t),p(q),e.unbindTexture()}}}const pe=[],B=[];function De(D){if(D.samples>0){if(Xt(D)===!1){const A=D.textures,H=D.width,J=D.height;let et=s.COLOR_BUFFER_BIT;const q=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=n.get(D),ut=A.length>1;if(ut)for(let xt=0;xt<A.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let xt=0;xt<A.length;xt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_t.__webglColorRenderbuffer[xt]);const Wt=n.get(A[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Wt,0)}s.blitFramebuffer(0,0,H,J,0,0,H,J,et,s.NEAREST),c===!0&&(pe.length=0,B.length=0,pe.push(s.COLOR_ATTACHMENT0+xt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(pe.push(q),B.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ut)for(let xt=0;xt<A.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,_t.__webglColorRenderbuffer[xt]);const Wt=n.get(A[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,Wt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const A=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Vt(D){return Math.min(i.maxSamples,D.samples)}function Xt(D){const A=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Lt(D){const A=a.render.frame;h.get(D)!==A&&(h.set(D,A),D.update())}function ie(D,A){const H=D.colorSpace,J=D.format,et=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||H!==Ge&&H!==ui&&(qt.getTransfer(H)===oe?(J!==en||et!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),A}function Ct(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=C,this.setTexture2D=U,this.setTexture2DArray=z,this.setTexture3D=X,this.setTextureCube=G,this.rebindTextures=Dt,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Xt}function d_(s,t){function e(n,i=ui){let r;const a=qt.getTransfer(i);if(n===Zn)return s.UNSIGNED_BYTE;if(n===Pc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Lc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ku)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Iu)return s.BYTE;if(n===Du)return s.SHORT;if(n===Qs)return s.UNSIGNED_SHORT;if(n===Cc)return s.INT;if(n===ki)return s.UNSIGNED_INT;if(n===fn)return s.FLOAT;if(n===rr)return s.HALF_FLOAT;if(n===Nu)return s.ALPHA;if(n===Uu)return s.RGB;if(n===en)return s.RGBA;if(n===Fu)return s.LUMINANCE;if(n===Ou)return s.LUMINANCE_ALPHA;if(n===ss)return s.DEPTH_COMPONENT;if(n===ds)return s.DEPTH_STENCIL;if(n===Ic)return s.RED;if(n===Dc)return s.RED_INTEGER;if(n===Bu)return s.RG;if(n===kc)return s.RG_INTEGER;if(n===Nc)return s.RGBA_INTEGER;if(n===Zr||n===ta||n===ea||n===na)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===No||n===Uo||n===Fo||n===Oo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===No)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bo||n===zo||n===Go)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bo||n===zo)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Go)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ho||n===Vo||n===Wo||n===jo||n===Xo||n===qo||n===Yo||n===Ko||n===$o||n===Jo||n===Qo||n===Zo||n===tc||n===ec)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ho)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ko)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$o)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tc)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ec)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ia||n===nc||n===ic)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ia)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zu||n===sc||n===rc||n===ac)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ia)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class f_ extends Ce{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ve extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const p_={type:"move"};class Qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const b of t.hand.values()){const g=e.getJointPose(b,n),p=this._getHandJoint(l,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,m=.005;l.inputState.pinching&&f>u+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=u-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(p_)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const m_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g_=`
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

}`;class b_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new ye,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new An({vertexShader:m_,fragmentShader:g_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ne(new wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class __ extends xs{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,u=null,m=null;const b=new b_,g=e.getContextAttributes();let p=null,v=null;const x=[],_=[],E=new vt;let T=null;const w=new Ce;w.viewport=new Qt;const P=new Ce;P.viewport=new Qt;const M=[w,P],y=new f_;let S=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=x[Y];return tt===void 0&&(tt=new Qa,x[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=x[Y];return tt===void 0&&(tt=new Qa,x[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=x[Y];return tt===void 0&&(tt=new Qa,x[Y]=tt),tt.getHandSpace()};function I(Y){const tt=_.indexOf(Y.inputSource);if(tt===-1)return;const st=x[tt];st!==void 0&&(st.update(Y.inputSource,Y.frame,l||a),st.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",U);for(let Y=0;Y<x.length;Y++){const tt=_[Y];tt!==null&&(_[Y]=null,x[Y].disconnect(tt))}S=null,C=null,b.reset(),t.setRenderTarget(p),u=null,f=null,d=null,i=null,v=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",k),i.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(E),i.renderState.layers===void 0){const tt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new Ni(u.framebufferWidth,u.framebufferHeight,{format:en,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let tt=null,st=null,Z=null;g.depth&&(Z=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=g.stencil?ds:ss,st=g.stencil?us:ki);const St={colorFormat:e.RGBA8,depthFormat:Z,scaleFactor:r};d=new XRWebGLBinding(i,e),f=d.createProjectionLayer(St),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Ni(f.textureWidth,f.textureHeight,{format:en,type:Zn,depthTexture:new td(f.textureWidth,f.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Nt.setContext(i),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function U(Y){for(let tt=0;tt<Y.removed.length;tt++){const st=Y.removed[tt],Z=_.indexOf(st);Z>=0&&(_[Z]=null,x[Z].disconnect(st))}for(let tt=0;tt<Y.added.length;tt++){const st=Y.added[tt];let Z=_.indexOf(st);if(Z===-1){for(let yt=0;yt<x.length;yt++)if(yt>=_.length){_.push(st),Z=yt;break}else if(_[yt]===null){_[yt]=st,Z=yt;break}if(Z===-1)break}const St=x[Z];St&&St.connect(st)}}const z=new L,X=new L;function G(Y,tt,st){z.setFromMatrixPosition(tt.matrixWorld),X.setFromMatrixPosition(st.matrixWorld);const Z=z.distanceTo(X),St=tt.projectionMatrix.elements,yt=st.projectionMatrix.elements,Dt=St[14]/(St[10]-1),Zt=St[14]/(St[10]+1),zt=(St[9]+1)/St[5],pe=(St[9]-1)/St[5],B=(St[8]-1)/St[0],De=(yt[8]+1)/yt[0],Vt=Dt*B,Xt=Dt*De,Lt=Z/(-B+De),ie=Lt*-B;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ie),Y.translateZ(Lt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),St[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Ct=Dt+Lt,D=Zt+Lt,A=Vt-ie,H=Xt+(Z-ie),J=zt*Zt/D*Ct,et=pe*Zt/D*Ct;Y.projectionMatrix.makePerspective(A,H,J,et,Ct,D),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function rt(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let tt=Y.near,st=Y.far;b.texture!==null&&(b.depthNear>0&&(tt=b.depthNear),b.depthFar>0&&(st=b.depthFar)),y.near=P.near=w.near=tt,y.far=P.far=w.far=st,(S!==y.near||C!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,C=y.far),w.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,y.layers.mask=w.layers.mask|P.layers.mask;const Z=Y.parent,St=y.cameras;rt(y,Z);for(let yt=0;yt<St.length;yt++)rt(St[yt],Z);St.length===2?G(y,w,P):y.projectionMatrix.copy(w.projectionMatrix),it(Y,y,Z)};function it(Y,tt,st){st===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(st.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=fs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&u===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Y)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(y)};let ht=null;function Et(Y,tt){if(h=tt.getViewerPose(l||a),m=tt,h!==null){const st=h.views;u!==null&&(t.setRenderTargetFramebuffer(v,u.framebuffer),t.setRenderTarget(v));let Z=!1;st.length!==y.cameras.length&&(y.cameras.length=0,Z=!0);for(let yt=0;yt<st.length;yt++){const Dt=st[yt];let Zt=null;if(u!==null)Zt=u.getViewport(Dt);else{const pe=d.getViewSubImage(f,Dt);Zt=pe.viewport,yt===0&&(t.setRenderTargetTextures(v,pe.colorTexture,f.ignoreDepthValues?void 0:pe.depthStencilTexture),t.setRenderTarget(v))}let zt=M[yt];zt===void 0&&(zt=new Ce,zt.layers.enable(yt),zt.viewport=new Qt,M[yt]=zt),zt.matrix.fromArray(Dt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Dt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),yt===0&&(y.matrix.copy(zt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Z===!0&&y.cameras.push(zt)}const St=i.enabledFeatures;if(St&&St.includes("depth-sensing")){const yt=d.getDepthInformation(st[0]);yt&&yt.isValid&&yt.texture&&b.init(t,yt,i.renderState)}}for(let st=0;st<x.length;st++){const Z=_[st],St=x[st];Z!==null&&St!==void 0&&St.update(Z,tt,l||a)}ht&&ht(Y,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}const Nt=new Zu;Nt.setAnimationLoop(Et),this.setAnimationLoop=function(Y){ht=Y},this.dispose=function(){}}}const wi=new bn,x_=new kt;function v_(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,$u(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&u(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),b(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,v,x):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Be&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Be&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=t.get(p),x=v.envMap,_=v.envMapRotation;x&&(g.envMap.value=x,wi.copy(_),wi.x*=-1,wi.y*=-1,wi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),g.envMapRotation.value.setFromMatrix4(x_.makeRotationFromEuler(wi)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=x*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){const v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function M_(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,x){const _=x.program;n.uniformBlockBinding(v,_)}function l(v,x){let _=i[v.id];_===void 0&&(m(v),_=h(v),i[v.id]=_,v.addEventListener("dispose",g));const E=x.program;n.updateUBOMapping(v,E);const T=t.render.frame;r[v.id]!==T&&(f(v),r[v.id]=T)}function h(v){const x=d();v.__bindingPointIndex=x;const _=s.createBuffer(),E=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,E,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,_),_}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=i[v.id],_=v.uniforms,E=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,w=_.length;T<w;T++){const P=Array.isArray(_[T])?_[T]:[_[T]];for(let M=0,y=P.length;M<y;M++){const S=P[M];if(u(S,T,M,E)===!0){const C=S.__offset,I=Array.isArray(S.value)?S.value:[S.value];let k=0;for(let U=0;U<I.length;U++){const z=I[U],X=b(z);typeof z=="number"||typeof z=="boolean"?(S.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,C+k,S.__data)):z.isMatrix3?(S.__data[0]=z.elements[0],S.__data[1]=z.elements[1],S.__data[2]=z.elements[2],S.__data[3]=0,S.__data[4]=z.elements[3],S.__data[5]=z.elements[4],S.__data[6]=z.elements[5],S.__data[7]=0,S.__data[8]=z.elements[6],S.__data[9]=z.elements[7],S.__data[10]=z.elements[8],S.__data[11]=0):(z.toArray(S.__data,k),k+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,C,S.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(v,x,_,E){const T=v.value,w=x+"_"+_;if(E[w]===void 0)return typeof T=="number"||typeof T=="boolean"?E[w]=T:E[w]=T.clone(),!0;{const P=E[w];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return E[w]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function m(v){const x=v.uniforms;let _=0;const E=16;for(let w=0,P=x.length;w<P;w++){const M=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,S=M.length;y<S;y++){const C=M[y],I=Array.isArray(C.value)?C.value:[C.value];for(let k=0,U=I.length;k<U;k++){const z=I[k],X=b(z),G=_%E,rt=G%X.boundary,it=G+rt;_+=rt,it!==0&&E-it<X.storage&&(_+=E-it),C.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=_,_+=X.storage}}}const T=_%E;return T>0&&(_+=E-T),v.__size=_,v.__cache={},this}function b(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}class rd{constructor(t={}){const{canvas:e=hp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const m=new Uint32Array(4),b=new Int32Array(4);let g=null,p=null;const v=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xe,this.toneMapping=bi,this.toneMappingExposure=1;const _=this;let E=!1,T=0,w=0,P=null,M=-1,y=null;const S=new Qt,C=new Qt;let I=null;const k=new mt(0);let U=0,z=e.width,X=e.height,G=1,rt=null,it=null;const ht=new Qt(0,0,z,X),Et=new Qt(0,0,z,X);let Nt=!1;const Y=new Bc;let tt=!1,st=!1;const Z=new kt,St=new kt,yt=new L,Dt=new Qt,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function pe(){return P===null?G:1}let B=n;function De(R,F){return e.getContext(R,F)}try{const R={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ec}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",lt,!1),B===null){const F="webgl2";if(B=De(F,R),B===null)throw De(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Vt,Xt,Lt,ie,Ct,D,A,H,J,et,q,_t,ut,xt,Wt,at,Mt,It,V,Q,nt,dt,Ft,N;function ot(){Vt=new Eg(B),Vt.init(),dt=new d_(B,Vt),Xt=new Mg(B,Vt,t,dt),Lt=new l_(B,Vt),Xt.reverseDepthBuffer&&f&&Lt.buffers.depth.setReversed(!0),ie=new Pg(B),Ct=new Yb,D=new u_(B,Vt,Lt,Ct,Xt,dt,ie),A=new Sg(_),H=new Ag(_),J=new Fp(B),Ft=new xg(B,J),et=new Rg(B,J,ie,Ft),q=new Ig(B,et,J,ie),V=new Lg(B,Xt,D),at=new yg(Ct),_t=new qb(_,A,H,Vt,Xt,Ft,at),ut=new v_(_,Ct),xt=new $b,Wt=new n_(Vt),It=new _g(_,A,H,Lt,q,u,c),Mt=new o_(_,q,Xt),N=new M_(B,ie,Xt,Lt),Q=new vg(B,Vt,ie),nt=new Cg(B,Vt,ie),ie.programs=_t.programs,_.capabilities=Xt,_.extensions=Vt,_.properties=Ct,_.renderLists=xt,_.shadowMap=Mt,_.state=Lt,_.info=ie}ot();const K=new __(_,B);this.xr=K,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=Vt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Vt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(R){R!==void 0&&(G=R,this.setSize(z,X,!1))},this.getSize=function(R){return R.set(z,X)},this.setSize=function(R,F,W=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,X=F,e.width=Math.floor(R*G),e.height=Math.floor(F*G),W===!0&&(e.style.width=R+"px",e.style.height=F+"px"),this.setViewport(0,0,R,F)},this.getDrawingBufferSize=function(R){return R.set(z*G,X*G).floor()},this.setDrawingBufferSize=function(R,F,W){z=R,X=F,G=W,e.width=Math.floor(R*W),e.height=Math.floor(F*W),this.setViewport(0,0,R,F)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(ht)},this.setViewport=function(R,F,W,j){R.isVector4?ht.set(R.x,R.y,R.z,R.w):ht.set(R,F,W,j),Lt.viewport(S.copy(ht).multiplyScalar(G).round())},this.getScissor=function(R){return R.copy(Et)},this.setScissor=function(R,F,W,j){R.isVector4?Et.set(R.x,R.y,R.z,R.w):Et.set(R,F,W,j),Lt.scissor(C.copy(Et).multiplyScalar(G).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(R){Lt.setScissorTest(Nt=R)},this.setOpaqueSort=function(R){rt=R},this.setTransparentSort=function(R){it=R},this.getClearColor=function(R){return R.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(R=!0,F=!0,W=!0){let j=0;if(R){let O=!1;if(P!==null){const ct=P.texture.format;O=ct===Nc||ct===kc||ct===Dc}if(O){const ct=P.texture.type,bt=ct===Zn||ct===ki||ct===Qs||ct===us||ct===Pc||ct===Lc,wt=It.getClearColor(),Tt=It.getClearAlpha(),Ut=wt.r,Ot=wt.g,At=wt.b;bt?(m[0]=Ut,m[1]=Ot,m[2]=At,m[3]=Tt,B.clearBufferuiv(B.COLOR,0,m)):(b[0]=Ut,b[1]=Ot,b[2]=At,b[3]=Tt,B.clearBufferiv(B.COLOR,0,b))}else j|=B.COLOR_BUFFER_BIT}F&&(j|=B.DEPTH_BUFFER_BIT),W&&(j|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),xt.dispose(),Wt.dispose(),Ct.dispose(),A.dispose(),H.dispose(),q.dispose(),Ft.dispose(),N.dispose(),_t.dispose(),K.dispose(),K.removeEventListener("sessionstart",cl),K.removeEventListener("sessionend",ll),_i.stop()};function $(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const R=ie.autoReset,F=Mt.enabled,W=Mt.autoUpdate,j=Mt.needsUpdate,O=Mt.type;ot(),ie.autoReset=R,Mt.enabled=F,Mt.autoUpdate=W,Mt.needsUpdate=j,Mt.type=O}function lt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Pt(R){const F=R.target;F.removeEventListener("dispose",Pt),$t(F)}function $t(R){Pe(R),Ct.remove(R)}function Pe(R){const F=Ct.get(R).programs;F!==void 0&&(F.forEach(function(W){_t.releaseProgram(W)}),R.isShaderMaterial&&_t.releaseShaderCache(R))}this.renderBufferDirect=function(R,F,W,j,O,ct){F===null&&(F=Zt);const bt=O.isMesh&&O.matrixWorld.determinant()<0,wt=tf(R,F,W,j,O);Lt.setMaterial(j,bt);let Tt=W.index,Ut=1;if(j.wireframe===!0){if(Tt=et.getWireframeAttribute(W),Tt===void 0)return;Ut=2}const Ot=W.drawRange,At=W.attributes.position;let Jt=Ot.start*Ut,he=(Ot.start+Ot.count)*Ut;ct!==null&&(Jt=Math.max(Jt,ct.start*Ut),he=Math.min(he,(ct.start+ct.count)*Ut)),Tt!==null?(Jt=Math.max(Jt,0),he=Math.min(he,Tt.count)):At!=null&&(Jt=Math.max(Jt,0),he=Math.min(he,At.count));const ue=he-Jt;if(ue<0||ue===1/0)return;Ft.setup(O,j,wt,W,Tt);let He,te=Q;if(Tt!==null&&(He=J.get(Tt),te=nt,te.setIndex(He)),O.isMesh)j.wireframe===!0?(Lt.setLineWidth(j.wireframeLinewidth*pe()),te.setMode(B.LINES)):te.setMode(B.TRIANGLES);else if(O.isLine){let Rt=j.linewidth;Rt===void 0&&(Rt=1),Lt.setLineWidth(Rt*pe()),O.isLineSegments?te.setMode(B.LINES):O.isLineLoop?te.setMode(B.LINE_LOOP):te.setMode(B.LINE_STRIP)}else O.isPoints?te.setMode(B.POINTS):O.isSprite&&te.setMode(B.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)te.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))te.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Rt=O._multiDrawStarts,Dn=O._multiDrawCounts,ee=O._multiDrawCount,sn=Tt?J.get(Tt).bytesPerElement:1,Ui=Ct.get(j).currentProgram.getUniforms();for(let Ve=0;Ve<ee;Ve++)Ui.setValue(B,"_gl_DrawID",Ve),te.render(Rt[Ve]/sn,Dn[Ve])}else if(O.isInstancedMesh)te.renderInstances(Jt,ue,O.count);else if(W.isInstancedBufferGeometry){const Rt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Dn=Math.min(W.instanceCount,Rt);te.renderInstances(Jt,ue,Dn)}else te.render(Jt,ue)};function se(R,F,W){R.transparent===!0&&R.side===Oe&&R.forceSinglePass===!1?(R.side=Be,R.needsUpdate=!0,ur(R,F,W),R.side=Qn,R.needsUpdate=!0,ur(R,F,W),R.side=Oe):ur(R,F,W)}this.compile=function(R,F,W=null){W===null&&(W=R),p=Wt.get(W),p.init(F),x.push(p),W.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),R!==W&&R.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const j=new Set;return R.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ct=O.material;if(ct)if(Array.isArray(ct))for(let bt=0;bt<ct.length;bt++){const wt=ct[bt];se(wt,W,O),j.add(wt)}else se(ct,W,O),j.add(ct)}),x.pop(),p=null,j},this.compileAsync=function(R,F,W=null){const j=this.compile(R,F,W);return new Promise(O=>{function ct(){if(j.forEach(function(bt){Ct.get(bt).currentProgram.isReady()&&j.delete(bt)}),j.size===0){O(R);return}setTimeout(ct,10)}Vt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let nn=null;function In(R){nn&&nn(R)}function cl(){_i.stop()}function ll(){_i.start()}const _i=new Zu;_i.setAnimationLoop(In),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(R){nn=R,K.setAnimationLoop(R),R===null?_i.stop():_i.start()},K.addEventListener("sessionstart",cl),K.addEventListener("sessionend",ll),this.render=function(R,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(F),F=K.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,F,P),p=Wt.get(R,x.length),p.init(F),x.push(p),St.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(St),st=this.localClippingEnabled,tt=at.init(this.clippingPlanes,st),g=xt.get(R,v.length),g.init(),v.push(g),K.enabled===!0&&K.isPresenting===!0){const ct=_.xr.getDepthSensingMesh();ct!==null&&wa(ct,F,-1/0,_.sortObjects)}wa(R,F,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(rt,it),zt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,zt&&It.addToRenderList(g,R),this.info.render.frame++,tt===!0&&at.beginShadows();const W=p.state.shadowsArray;Mt.render(W,R,F),tt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=g.opaque,O=g.transmissive;if(p.setupLights(),F.isArrayCamera){const ct=F.cameras;if(O.length>0)for(let bt=0,wt=ct.length;bt<wt;bt++){const Tt=ct[bt];ul(j,O,R,Tt)}zt&&It.render(R);for(let bt=0,wt=ct.length;bt<wt;bt++){const Tt=ct[bt];hl(g,R,Tt,Tt.viewport)}}else O.length>0&&ul(j,O,R,F),zt&&It.render(R),hl(g,R,F);P!==null&&(D.updateMultisampleRenderTarget(P),D.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(_,R,F),Ft.resetDefaultState(),M=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],tt===!0&&at.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function wa(R,F,W,j){if(R.visible===!1)return;if(R.layers.test(F.layers)){if(R.isGroup)W=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(F);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Y.intersectsSprite(R)){j&&Dt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(St);const bt=q.update(R),wt=R.material;wt.visible&&g.push(R,bt,wt,W,Dt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Y.intersectsObject(R))){const bt=q.update(R),wt=R.material;if(j&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Dt.copy(R.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Dt.copy(bt.boundingSphere.center)),Dt.applyMatrix4(R.matrixWorld).applyMatrix4(St)),Array.isArray(wt)){const Tt=bt.groups;for(let Ut=0,Ot=Tt.length;Ut<Ot;Ut++){const At=Tt[Ut],Jt=wt[At.materialIndex];Jt&&Jt.visible&&g.push(R,bt,Jt,W,Dt.z,At)}}else wt.visible&&g.push(R,bt,wt,W,Dt.z,null)}}const ct=R.children;for(let bt=0,wt=ct.length;bt<wt;bt++)wa(ct[bt],F,W,j)}function hl(R,F,W,j){const O=R.opaque,ct=R.transmissive,bt=R.transparent;p.setupLightsView(W),tt===!0&&at.setGlobalState(_.clippingPlanes,W),j&&Lt.viewport(S.copy(j)),O.length>0&&hr(O,F,W),ct.length>0&&hr(ct,F,W),bt.length>0&&hr(bt,F,W),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function ul(R,F,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Ni(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?rr:Zn,minFilter:Xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const ct=p.state.transmissionRenderTarget[j.id],bt=j.viewport||S;ct.setSize(bt.z,bt.w);const wt=_.getRenderTarget();_.setRenderTarget(ct),_.getClearColor(k),U=_.getClearAlpha(),U<1&&_.setClearColor(16777215,.5),_.clear(),zt&&It.render(W);const Tt=_.toneMapping;_.toneMapping=bi;const Ut=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),tt===!0&&at.setGlobalState(_.clippingPlanes,j),hr(R,W,j),D.updateMultisampleRenderTarget(ct),D.updateRenderTargetMipmap(ct),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let At=0,Jt=F.length;At<Jt;At++){const he=F[At],ue=he.object,He=he.geometry,te=he.material,Rt=he.group;if(te.side===Oe&&ue.layers.test(j.layers)){const Dn=te.side;te.side=Be,te.needsUpdate=!0,dl(ue,W,j,He,te,Rt),te.side=Dn,te.needsUpdate=!0,Ot=!0}}Ot===!0&&(D.updateMultisampleRenderTarget(ct),D.updateRenderTargetMipmap(ct))}_.setRenderTarget(wt),_.setClearColor(k,U),Ut!==void 0&&(j.viewport=Ut),_.toneMapping=Tt}function hr(R,F,W){const j=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ct=R.length;O<ct;O++){const bt=R[O],wt=bt.object,Tt=bt.geometry,Ut=j===null?bt.material:j,Ot=bt.group;wt.layers.test(W.layers)&&dl(wt,F,W,Tt,Ut,Ot)}}function dl(R,F,W,j,O,ct){R.onBeforeRender(_,F,W,j,O,ct),R.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),O.onBeforeRender(_,F,W,j,R,ct),O.transparent===!0&&O.side===Oe&&O.forceSinglePass===!1?(O.side=Be,O.needsUpdate=!0,_.renderBufferDirect(W,F,j,O,R,ct),O.side=Qn,O.needsUpdate=!0,_.renderBufferDirect(W,F,j,O,R,ct),O.side=Oe):_.renderBufferDirect(W,F,j,O,R,ct),R.onAfterRender(_,F,W,j,O,ct)}function ur(R,F,W){F.isScene!==!0&&(F=Zt);const j=Ct.get(R),O=p.state.lights,ct=p.state.shadowsArray,bt=O.state.version,wt=_t.getParameters(R,O.state,ct,F,W),Tt=_t.getProgramCacheKey(wt);let Ut=j.programs;j.environment=R.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(R.isMeshStandardMaterial?H:A).get(R.envMap||j.environment),j.envMapRotation=j.environment!==null&&R.envMap===null?F.environmentRotation:R.envMapRotation,Ut===void 0&&(R.addEventListener("dispose",Pt),Ut=new Map,j.programs=Ut);let Ot=Ut.get(Tt);if(Ot!==void 0){if(j.currentProgram===Ot&&j.lightsStateVersion===bt)return pl(R,wt),Ot}else wt.uniforms=_t.getUniforms(R),R.onBeforeCompile(wt,_),Ot=_t.acquireProgram(wt,Tt),Ut.set(Tt,Ot),j.uniforms=wt.uniforms;const At=j.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(At.clippingPlanes=at.uniform),pl(R,wt),j.needsLights=nf(R),j.lightsStateVersion=bt,j.needsLights&&(At.ambientLightColor.value=O.state.ambient,At.lightProbe.value=O.state.probe,At.directionalLights.value=O.state.directional,At.directionalLightShadows.value=O.state.directionalShadow,At.spotLights.value=O.state.spot,At.spotLightShadows.value=O.state.spotShadow,At.rectAreaLights.value=O.state.rectArea,At.ltc_1.value=O.state.rectAreaLTC1,At.ltc_2.value=O.state.rectAreaLTC2,At.pointLights.value=O.state.point,At.pointLightShadows.value=O.state.pointShadow,At.hemisphereLights.value=O.state.hemi,At.directionalShadowMap.value=O.state.directionalShadowMap,At.directionalShadowMatrix.value=O.state.directionalShadowMatrix,At.spotShadowMap.value=O.state.spotShadowMap,At.spotLightMatrix.value=O.state.spotLightMatrix,At.spotLightMap.value=O.state.spotLightMap,At.pointShadowMap.value=O.state.pointShadowMap,At.pointShadowMatrix.value=O.state.pointShadowMatrix),j.currentProgram=Ot,j.uniformsList=null,Ot}function fl(R){if(R.uniformsList===null){const F=R.currentProgram.getUniforms();R.uniformsList=sa.seqWithValue(F.seq,R.uniforms)}return R.uniformsList}function pl(R,F){const W=Ct.get(R);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function tf(R,F,W,j,O){F.isScene!==!0&&(F=Zt),D.resetTextureUnits();const ct=F.fog,bt=j.isMeshStandardMaterial?F.environment:null,wt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ge,Tt=(j.isMeshStandardMaterial?H:A).get(j.envMap||bt),Ut=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ot=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),At=!!W.morphAttributes.position,Jt=!!W.morphAttributes.normal,he=!!W.morphAttributes.color;let ue=bi;j.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ue=_.toneMapping);const He=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,te=He!==void 0?He.length:0,Rt=Ct.get(j),Dn=p.state.lights;if(tt===!0&&(st===!0||R!==y)){const $e=R===y&&j.id===M;at.setState(j,R,$e)}let ee=!1;j.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Dn.state.version||Rt.outputColorSpace!==wt||O.isBatchedMesh&&Rt.batching===!1||!O.isBatchedMesh&&Rt.batching===!0||O.isBatchedMesh&&Rt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Rt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Rt.instancing===!1||!O.isInstancedMesh&&Rt.instancing===!0||O.isSkinnedMesh&&Rt.skinning===!1||!O.isSkinnedMesh&&Rt.skinning===!0||O.isInstancedMesh&&Rt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Rt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Rt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Rt.instancingMorph===!1&&O.morphTexture!==null||Rt.envMap!==Tt||j.fog===!0&&Rt.fog!==ct||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==at.numPlanes||Rt.numIntersection!==at.numIntersection)||Rt.vertexAlphas!==Ut||Rt.vertexTangents!==Ot||Rt.morphTargets!==At||Rt.morphNormals!==Jt||Rt.morphColors!==he||Rt.toneMapping!==ue||Rt.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Rt.__version=j.version);let sn=Rt.currentProgram;ee===!0&&(sn=ur(j,F,O));let Ui=!1,Ve=!1,ws=!1;const de=sn.getUniforms(),_n=Rt.uniforms;if(Lt.useProgram(sn.program)&&(Ui=!0,Ve=!0,ws=!0),j.id!==M&&(M=j.id,Ve=!0),Ui||y!==R){Lt.buffers.depth.getReversed()?(Z.copy(R.projectionMatrix),dp(Z),fp(Z),de.setValue(B,"projectionMatrix",Z)):de.setValue(B,"projectionMatrix",R.projectionMatrix),de.setValue(B,"viewMatrix",R.matrixWorldInverse);const ti=de.map.cameraPosition;ti!==void 0&&ti.setValue(B,yt.setFromMatrixPosition(R.matrixWorld)),Xt.logarithmicDepthBuffer&&de.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&de.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,Ve=!0,ws=!0)}if(O.isSkinnedMesh){de.setOptional(B,O,"bindMatrix"),de.setOptional(B,O,"bindMatrixInverse");const $e=O.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),de.setValue(B,"boneTexture",$e.boneTexture,D))}O.isBatchedMesh&&(de.setOptional(B,O,"batchingTexture"),de.setValue(B,"batchingTexture",O._matricesTexture,D),de.setOptional(B,O,"batchingIdTexture"),de.setValue(B,"batchingIdTexture",O._indirectTexture,D),de.setOptional(B,O,"batchingColorTexture"),O._colorsTexture!==null&&de.setValue(B,"batchingColorTexture",O._colorsTexture,D));const Ts=W.morphAttributes;if((Ts.position!==void 0||Ts.normal!==void 0||Ts.color!==void 0)&&V.update(O,W,sn),(Ve||Rt.receiveShadow!==O.receiveShadow)&&(Rt.receiveShadow=O.receiveShadow,de.setValue(B,"receiveShadow",O.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(_n.envMap.value=Tt,_n.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&F.environment!==null&&(_n.envMapIntensity.value=F.environmentIntensity),Ve&&(de.setValue(B,"toneMappingExposure",_.toneMappingExposure),Rt.needsLights&&ef(_n,ws),ct&&j.fog===!0&&ut.refreshFogUniforms(_n,ct),ut.refreshMaterialUniforms(_n,j,G,X,p.state.transmissionRenderTarget[R.id]),sa.upload(B,fl(Rt),_n,D)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(sa.upload(B,fl(Rt),_n,D),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&de.setValue(B,"center",O.center),de.setValue(B,"modelViewMatrix",O.modelViewMatrix),de.setValue(B,"normalMatrix",O.normalMatrix),de.setValue(B,"modelMatrix",O.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const $e=j.uniformsGroups;for(let ti=0,ei=$e.length;ti<ei;ti++){const ml=$e[ti];N.update(ml,sn),N.bind(ml,sn)}}return sn}function ef(R,F){R.ambientLightColor.needsUpdate=F,R.lightProbe.needsUpdate=F,R.directionalLights.needsUpdate=F,R.directionalLightShadows.needsUpdate=F,R.pointLights.needsUpdate=F,R.pointLightShadows.needsUpdate=F,R.spotLights.needsUpdate=F,R.spotLightShadows.needsUpdate=F,R.rectAreaLights.needsUpdate=F,R.hemisphereLights.needsUpdate=F}function nf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,F,W){Ct.get(R.texture).__webglTexture=F,Ct.get(R.depthTexture).__webglTexture=W;const j=Ct.get(R);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=W===void 0,j.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,F){const W=Ct.get(R);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(R,F=0,W=0){P=R,T=F,w=W;let j=!0,O=null,ct=!1,bt=!1;if(R){const Tt=Ct.get(R);if(Tt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(B.FRAMEBUFFER,null),j=!1;else if(Tt.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(Tt.__hasExternalTextures)D.rebindTextures(R,Ct.get(R.texture).__webglTexture,Ct.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const At=R.depthTexture;if(Tt.__boundDepthTexture!==At){if(At!==null&&Ct.has(At)&&(R.width!==At.image.width||R.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const Ut=R.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(bt=!0);const Ot=Ct.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ot[F])?O=Ot[F][W]:O=Ot[F],ct=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?O=Ct.get(R).__webglMultisampledFramebuffer:Array.isArray(Ot)?O=Ot[W]:O=Ot,S.copy(R.viewport),C.copy(R.scissor),I=R.scissorTest}else S.copy(ht).multiplyScalar(G).floor(),C.copy(Et).multiplyScalar(G).floor(),I=Nt;if(Lt.bindFramebuffer(B.FRAMEBUFFER,O)&&j&&Lt.drawBuffers(R,O),Lt.viewport(S),Lt.scissor(C),Lt.setScissorTest(I),ct){const Tt=Ct.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,Tt.__webglTexture,W)}else if(bt){const Tt=Ct.get(R.texture),Ut=F||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Tt.__webglTexture,W||0,Ut)}M=-1},this.readRenderTargetPixels=function(R,F,W,j,O,ct,bt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ct.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&bt!==void 0&&(wt=wt[bt]),wt){Lt.bindFramebuffer(B.FRAMEBUFFER,wt);try{const Tt=R.texture,Ut=Tt.format,Ot=Tt.type;if(!Xt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=R.width-j&&W>=0&&W<=R.height-O&&B.readPixels(F,W,j,O,dt.convert(Ut),dt.convert(Ot),ct)}finally{const Tt=P!==null?Ct.get(P).__webglFramebuffer:null;Lt.bindFramebuffer(B.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(R,F,W,j,O,ct,bt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ct.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&bt!==void 0&&(wt=wt[bt]),wt){const Tt=R.texture,Ut=Tt.format,Ot=Tt.type;if(!Xt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=R.width-j&&W>=0&&W<=R.height-O){Lt.bindFramebuffer(B.FRAMEBUFFER,wt);const At=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,At),B.bufferData(B.PIXEL_PACK_BUFFER,ct.byteLength,B.STREAM_READ),B.readPixels(F,W,j,O,dt.convert(Ut),dt.convert(Ot),0);const Jt=P!==null?Ct.get(P).__webglFramebuffer:null;Lt.bindFramebuffer(B.FRAMEBUFFER,Jt);const he=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await up(B,he,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,At),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ct),B.deleteBuffer(At),B.deleteSync(he),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,F=null,W=0){R.isTexture!==!0&&(Gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,R=arguments[1]);const j=Math.pow(2,-W),O=Math.floor(R.image.width*j),ct=Math.floor(R.image.height*j),bt=F!==null?F.x:0,wt=F!==null?F.y:0;D.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,W,0,0,bt,wt,O,ct),Lt.unbindTexture()},this.copyTextureToTexture=function(R,F,W=null,j=null,O=0){R.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,R=arguments[1],F=arguments[2],O=arguments[3]||0,W=null);let ct,bt,wt,Tt,Ut,Ot,At,Jt,he;const ue=R.isCompressedTexture?R.mipmaps[O]:R.image;W!==null?(ct=W.max.x-W.min.x,bt=W.max.y-W.min.y,wt=W.isBox3?W.max.z-W.min.z:1,Tt=W.min.x,Ut=W.min.y,Ot=W.isBox3?W.min.z:0):(ct=ue.width,bt=ue.height,wt=ue.depth||1,Tt=0,Ut=0,Ot=0),j!==null?(At=j.x,Jt=j.y,he=j.z):(At=0,Jt=0,he=0);const He=dt.convert(F.format),te=dt.convert(F.type);let Rt;F.isData3DTexture?(D.setTexture3D(F,0),Rt=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(D.setTexture2DArray(F,0),Rt=B.TEXTURE_2D_ARRAY):(D.setTexture2D(F,0),Rt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);const Dn=B.getParameter(B.UNPACK_ROW_LENGTH),ee=B.getParameter(B.UNPACK_IMAGE_HEIGHT),sn=B.getParameter(B.UNPACK_SKIP_PIXELS),Ui=B.getParameter(B.UNPACK_SKIP_ROWS),Ve=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,ue.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ue.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Tt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ut),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ot);const ws=R.isDataArrayTexture||R.isData3DTexture,de=F.isDataArrayTexture||F.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const _n=Ct.get(R),Ts=Ct.get(F),$e=Ct.get(_n.__renderTarget),ti=Ct.get(Ts.__renderTarget);Lt.bindFramebuffer(B.READ_FRAMEBUFFER,$e.__webglFramebuffer),Lt.bindFramebuffer(B.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let ei=0;ei<wt;ei++)ws&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.get(R).__webglTexture,O,Ot+ei),R.isDepthTexture?(de&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.get(F).__webglTexture,O,he+ei),B.blitFramebuffer(Tt,Ut,ct,bt,At,Jt,ct,bt,B.DEPTH_BUFFER_BIT,B.NEAREST)):de?B.copyTexSubImage3D(Rt,O,At,Jt,he+ei,Tt,Ut,ct,bt):B.copyTexSubImage2D(Rt,O,At,Jt,he+ei,Tt,Ut,ct,bt);Lt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else de?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Rt,O,At,Jt,he,ct,bt,wt,He,te,ue.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(Rt,O,At,Jt,he,ct,bt,wt,He,ue.data):B.texSubImage3D(Rt,O,At,Jt,he,ct,bt,wt,He,te,ue):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,O,At,Jt,ct,bt,He,te,ue.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,O,At,Jt,ue.width,ue.height,He,ue.data):B.texSubImage2D(B.TEXTURE_2D,O,At,Jt,ct,bt,He,te,ue);B.pixelStorei(B.UNPACK_ROW_LENGTH,Dn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ee),B.pixelStorei(B.UNPACK_SKIP_PIXELS,sn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ui),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ve),O===0&&F.generateMipmaps&&B.generateMipmap(Rt),Lt.unbindTexture()},this.copyTextureToTexture3D=function(R,F,W=null,j=null,O=0){return R.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,j=arguments[1]||null,R=arguments[2],F=arguments[3],O=arguments[4]||0),Gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,F,W,j,O)},this.initRenderTarget=function(R){Ct.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Lt.unbindTexture()},this.resetState=function(){T=0,w=0,P=null,Lt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class ba{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new mt(t),this.near=e,this.far=n}clone(){return new ba(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Hc extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class y_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=cc,this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ke=new L;class Vc{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Vc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const _h=new L,xh=new Qt,vh=new Qt,S_=new L,Mh=new kt,Ir=new L,Za=new Rn,yh=new kt,to=new ma;class w_ extends ne{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=vl,this.bindMatrix=new kt,this.bindMatrixInverse=new kt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new En),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ir),this.boundingBox.expandByPoint(Ir)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ir),this.boundingSphere.expandByPoint(Ir)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Za.copy(this.boundingSphere),Za.applyMatrix4(i),t.ray.intersectsSphere(Za)!==!1&&(yh.copy(i).invert(),to.copy(t.ray).applyMatrix4(yh),!(this.boundingBox!==null&&to.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,to)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Qt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===vl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Nf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;xh.fromBufferAttribute(i.attributes.skinIndex,t),vh.fromBufferAttribute(i.attributes.skinWeight,t),_h.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=vh.getComponent(r);if(a!==0){const o=xh.getComponent(r);Mh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(S_.copy(_h).applyMatrix4(Mh),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class ad extends fe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class od extends ye{constructor(t=null,e=1,n=1,i,r,a,o,c,l=ze,h=ze,d,f){super(null,a,o,c,l,h,i,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sh=new kt,T_=new kt;class Wc{constructor(t=[],e=[]){this.uuid=mn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new kt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new kt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:T_;Sh.multiplyMatrices(o,e[r]),Sh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Wc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new od(e,t,t,en,fn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ad),this.bones.push(a),this.boneInverses.push(new kt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class hc extends le{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ji=new kt,wh=new kt,Dr=[],Th=new En,A_=new kt,Ps=new ne,Ls=new Rn;class hn extends ne{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new hc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,A_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new En),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ji),Th.copy(t.boundingBox).applyMatrix4(Ji),this.boundingBox.union(Th)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ji),Ls.copy(t.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(Ls)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ps.geometry=this.geometry,Ps.material=this.material,Ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ls.copy(this.boundingSphere),Ls.applyMatrix4(n),t.ray.intersectsSphere(Ls)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ji),wh.multiplyMatrices(n,Ji),Ps.matrixWorld=wh,Ps.raycast(t,Dr);for(let a=0,o=Dr.length;a<o;a++){const c=Dr[a];c.instanceId=r,c.object=this,e.push(c)}Dr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new hc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new od(new Float32Array(i*this.count),i,this.count,Ic,fn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class cd extends gn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ca=new L,la=new L,Ah=new kt,Is=new ma,kr=new Rn,eo=new L,Eh=new L;class jc extends fe{constructor(t=new me,e=new cd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ca.fromBufferAttribute(e,i-1),la.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ca.distanceTo(la);t.setAttribute("lineDistance",new ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(i),kr.radius+=r,t.ray.intersectsSphere(kr)===!1)return;Ah.copy(i).invert(),Is.copy(t.ray).applyMatrix4(Ah);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let b=u,g=m-1;b<g;b+=l){const p=h.getX(b),v=h.getX(b+1),x=Nr(this,t,Is,c,p,v);x&&e.push(x)}if(this.isLineLoop){const b=h.getX(m-1),g=h.getX(u),p=Nr(this,t,Is,c,b,g);p&&e.push(p)}}else{const u=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let b=u,g=m-1;b<g;b+=l){const p=Nr(this,t,Is,c,b,b+1);p&&e.push(p)}if(this.isLineLoop){const b=Nr(this,t,Is,c,m-1,u);b&&e.push(b)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Nr(s,t,e,n,i,r){const a=s.geometry.attributes.position;if(ca.fromBufferAttribute(a,i),la.fromBufferAttribute(a,r),e.distanceSqToSegment(ca,la,eo,Eh)>n)return;eo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(eo);if(!(c<t.near||c>t.far))return{distance:c,point:Eh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Rh=new L,Ch=new L;class E_ extends jc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Rh.fromBufferAttribute(e,i),Ch.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Rh.distanceTo(Ch);t.setAttribute("lineDistance",new ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class R_ extends jc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Xc extends gn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ph=new kt,uc=new ma,Ur=new Rn,Fr=new L;class qc extends fe{constructor(t=new me,e=new Xc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(i),Ur.radius+=r,t.ray.intersectsSphere(Ur)===!1)return;Ph.copy(i).invert(),uc.copy(t.ray).applyMatrix4(Ph);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let m=f,b=u;m<b;m++){const g=l.getX(m);Fr.fromBufferAttribute(d,g),Lh(Fr,g,c,i,t,e,this)}}else{const f=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let m=f,b=u;m<b;m++)Fr.fromBufferAttribute(d,m),Lh(Fr,m,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Lh(s,t,e,n,i,r,a){const o=uc.distanceSqToPoint(s);if(o<e){const c=new L;uc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class _a extends ye{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,u=(a-h)/f;return(i+u)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new vt:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,i=[],r=[],a=[],o=new L,c=new kt;for(let u=0;u<=t;u++){const m=u/t;i[u]=this.getTangentAt(m,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(i[u-1],i[u]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Me(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,m))}a[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(Me(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],u*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Yc extends Cn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new vt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,u=l-this.aY;c=f*h-u*d+this.aX,l=f*d+u*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class C_ extends Yc{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Kc(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+d)+(c-o)/d;f*=h,u*=h,i(a,o,f,u)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Or=new L,no=new Kc,io=new Kc,so=new Kc;class P_ extends Cn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Or.subVectors(i[0],i[1]).add(i[0]),l=Or);const d=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Or.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Or),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(d),u),b=Math.pow(d.distanceToSquared(f),u),g=Math.pow(f.distanceToSquared(h),u);b<1e-4&&(b=1),m<1e-4&&(m=b),g<1e-4&&(g=b),no.initNonuniformCatmullRom(l.x,d.x,f.x,h.x,m,b,g),io.initNonuniformCatmullRom(l.y,d.y,f.y,h.y,m,b,g),so.initNonuniformCatmullRom(l.z,d.z,f.z,h.z,m,b,g)}else this.curveType==="catmullrom"&&(no.initCatmullRom(l.x,d.x,f.x,h.x,this.tension),io.initCatmullRom(l.y,d.y,f.y,h.y,this.tension),so.initCatmullRom(l.z,d.z,f.z,h.z,this.tension));return n.set(no.calc(c),io.calc(c),so.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ih(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function L_(s,t){const e=1-s;return e*e*t}function I_(s,t){return 2*(1-s)*s*t}function D_(s,t){return s*s*t}function qs(s,t,e,n){return L_(s,t)+I_(s,e)+D_(s,n)}function k_(s,t){const e=1-s;return e*e*e*t}function N_(s,t){const e=1-s;return 3*e*e*s*t}function U_(s,t){return 3*(1-s)*s*s*t}function F_(s,t){return s*s*s*t}function Ys(s,t,e,n,i){return k_(s,t)+N_(s,e)+U_(s,n)+F_(s,i)}class ld extends Cn{constructor(t=new vt,e=new vt,n=new vt,i=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new vt){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ys(t,i.x,r.x,a.x,o.x),Ys(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class O_ extends Cn{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ys(t,i.x,r.x,a.x,o.x),Ys(t,i.y,r.y,a.y,o.y),Ys(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hd extends Cn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class B_ extends Cn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ud extends Cn{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(qs(t,i.x,r.x,a.x),qs(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class z_ extends Cn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(qs(t,i.x,r.x,a.x),qs(t,i.y,r.y,a.y),qs(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dd extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Ih(o,c.x,l.x,h.x,d.x),Ih(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new vt().fromArray(i))}return this}}var Dh=Object.freeze({__proto__:null,ArcCurve:C_,CatmullRomCurve3:P_,CubicBezierCurve:ld,CubicBezierCurve3:O_,EllipseCurve:Yc,LineCurve:hd,LineCurve3:B_,QuadraticBezierCurve:ud,QuadraticBezierCurve3:z_,SplineCurve:dd});class G_ extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Dh[i.type]().fromJSON(i))}return this}}class H_ extends G_{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new hd(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new ud(this.currentPoint.clone(),new vt(t,e),new vt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new ld(this.currentPoint.clone(),new vt(t,e),new vt(n,i),new vt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new dd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,a,o,c),this}absellipse(t,e,n,i,r,a,o,c){const l=new Yc(t,e,n,i,r,a,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class xa extends me{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Me(i,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,d=new L,f=new vt,u=new L,m=new L,b=new L;let g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,u.x=p*1,u.y=-g,u.z=p*0,b.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case t.length-1:c.push(b.x,b.y,b.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,u.x=p*1,u.y=-g,u.z=p*0,m.copy(u),u.x+=b.x,u.y+=b.y,u.z+=b.z,u.normalize(),c.push(u.x,u.y,u.z),b.copy(m)}for(let v=0;v<=e;v++){const x=n+v*h*i,_=Math.sin(x),E=Math.cos(x);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*_,d.y=t[T].y,d.z=t[T].x*E,a.push(d.x,d.y,d.z),f.x=v/e,f.y=T/(t.length-1),o.push(f.x,f.y);const w=c[3*T+0]*_,P=c[3*T+1],M=c[3*T+0]*E;l.push(w,P,M)}}for(let v=0;v<e;v++)for(let x=0;x<t.length-1;x++){const _=x+v*t.length,E=_,T=_+t.length,w=_+t.length+1,P=_+1;r.push(E,T,P),r.push(w,P,T)}this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("uv",new ce(o,2)),this.setAttribute("normal",new ce(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xa(t.points,t.segments,t.phiStart,t.phiLength)}}class $c extends xa{constructor(t=1,e=1,n=4,i=8){const r=new H_;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new $c(t.radius,t.length,t.capSegments,t.radialSegments)}}class va extends me{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new L,h=new vt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const u=n+d/e*i;l.x=t*Math.cos(u),l.y=t*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(o,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new va(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ms extends me{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],u=[];let m=0;const b=[],g=n/2;let p=0;v(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(f,3)),this.setAttribute("uv",new ce(u,2));function v(){const _=new L,E=new L;let T=0;const w=(e-t)/n;for(let P=0;P<=r;P++){const M=[],y=P/r,S=y*(e-t)+t;for(let C=0;C<=i;C++){const I=C/i,k=I*c+o,U=Math.sin(k),z=Math.cos(k);E.x=S*U,E.y=-y*n+g,E.z=S*z,d.push(E.x,E.y,E.z),_.set(U,w,z).normalize(),f.push(_.x,_.y,_.z),u.push(I,1-y),M.push(m++)}b.push(M)}for(let P=0;P<i;P++)for(let M=0;M<r;M++){const y=b[M][P],S=b[M+1][P],C=b[M+1][P+1],I=b[M][P+1];(t>0||M!==0)&&(h.push(y,S,I),T+=3),(e>0||M!==r-1)&&(h.push(S,C,I),T+=3)}l.addGroup(p,T,0),p+=T}function x(_){const E=m,T=new vt,w=new L;let P=0;const M=_===!0?t:e,y=_===!0?1:-1;for(let C=1;C<=i;C++)d.push(0,g*y,0),f.push(0,y,0),u.push(.5,.5),m++;const S=m;for(let C=0;C<=i;C++){const k=C/i*c+o,U=Math.cos(k),z=Math.sin(k);w.x=M*z,w.y=g*y,w.z=M*U,d.push(w.x,w.y,w.z),f.push(0,y,0),T.x=U*.5+.5,T.y=z*.5*y+.5,u.push(T.x,T.y),m++}for(let C=0;C<i;C++){const I=E+C,k=S+C;_===!0?h.push(k,k+1,I):h.push(k+1,k,I),P+=3}l.addGroup(p,P,_===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class nr extends ms{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new nr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jc extends me{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const x=new L,_=new L,E=new L;for(let T=0;T<e.length;T+=3)u(e[T+0],x),u(e[T+1],_),u(e[T+2],E),c(x,_,E,v)}function c(v,x,_,E){const T=E+1,w=[];for(let P=0;P<=T;P++){w[P]=[];const M=v.clone().lerp(_,P/T),y=x.clone().lerp(_,P/T),S=T-P;for(let C=0;C<=S;C++)C===0&&P===T?w[P][C]=M:w[P][C]=M.clone().lerp(y,C/S)}for(let P=0;P<T;P++)for(let M=0;M<2*(T-P)-1;M++){const y=Math.floor(M/2);M%2===0?(f(w[P][y+1]),f(w[P+1][y]),f(w[P][y])):(f(w[P][y+1]),f(w[P+1][y+1]),f(w[P+1][y]))}}function l(v){const x=new L;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(v),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function h(){const v=new L;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const _=g(v)/2/Math.PI+.5,E=p(v)/Math.PI+.5;a.push(_,1-E)}m(),d()}function d(){for(let v=0;v<a.length;v+=6){const x=a[v+0],_=a[v+2],E=a[v+4],T=Math.max(x,_,E),w=Math.min(x,_,E);T>.9&&w<.1&&(x<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),E<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function u(v,x){const _=v*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function m(){const v=new L,x=new L,_=new L,E=new L,T=new vt,w=new vt,P=new vt;for(let M=0,y=0;M<r.length;M+=9,y+=6){v.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),T.set(a[y+0],a[y+1]),w.set(a[y+2],a[y+3]),P.set(a[y+4],a[y+5]),E.copy(v).add(x).add(_).divideScalar(3);const S=g(E);b(T,y+0,v,S),b(w,y+2,x,S),b(P,y+4,_,S)}}function b(v,x,_,E){E<0&&v.x===1&&(a[x]=v.x-1),_.x===0&&_.z===0&&(a[x]=E/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jc(t.vertices,t.indices,t.radius,t.details)}}class Ma extends Jc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ma(t.radius,t.detail)}}class ar extends me{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new L,f=new L,u=[],m=[],b=[],g=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let _=0;p===0&&a===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let E=0;E<=e;E++){const T=E/e;d.x=-t*Math.cos(i+T*r)*Math.sin(a+x*o),d.y=t*Math.cos(a+x*o),d.z=t*Math.sin(i+T*r)*Math.sin(a+x*o),m.push(d.x,d.y,d.z),f.copy(d).normalize(),b.push(f.x,f.y,f.z),g.push(T+_,1-x),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const x=h[p][v+1],_=h[p][v],E=h[p+1][v],T=h[p+1][v+1];(p!==0||a>0)&&u.push(x,_,T),(p!==n-1||c<Math.PI)&&u.push(_,E,T)}this.setIndex(u),this.setAttribute("position",new ce(m,3)),this.setAttribute("normal",new ce(b,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Qc extends me{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new L,d=new L,f=new L;for(let u=0;u<=n;u++)for(let m=0;m<=i;m++){const b=m/i*r,g=u/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(b),d.y=(t+e*Math.cos(g))*Math.sin(b),d.z=e*Math.sin(g),o.push(d.x,d.y,d.z),h.x=t*Math.cos(b),h.y=t*Math.sin(b),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),l.push(m/i),l.push(u/n)}for(let u=1;u<=n;u++)for(let m=1;m<=i;m++){const b=(i+1)*u+m-1,g=(i+1)*(u-1)+m-1,p=(i+1)*(u-1)+m,v=(i+1)*u+m;a.push(b,g,v),a.push(g,p,v)}this.setIndex(a),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Zc extends gn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uc,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pn extends Zc{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class _e extends gn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uc,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Br(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function V_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function W_(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function kh(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let c=0;c!==t;++c)i[a++]=s[o+c]}return i}function fd(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}class or{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class j_ extends or{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ml,endingEnd:Ml}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,a=t+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case yl:r=t,o=2*e-n;break;case Sl:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case yl:a=t,c=2*n-e;break;case Sl:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,m=(n-e)/(i-e),b=m*m,g=b*m,p=-f*g+2*f*b-f*m,v=(1+f)*g+(-1.5-2*f)*b+(-.5+f)*m+1,x=(-1-u)*g+(1.5+u)*b+.5*m,_=u*g-u*b;for(let E=0;E!==o;++E)r[E]=p*a[h+E]+v*a[l+E]+x*a[c+E]+_*a[d+E];return r}}class X_ extends or{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),d=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*d+a[c+f]*h;return r}}class q_ extends or{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Ln{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Br(e,this.TimeBufferType),this.values=Br(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Br(t.times,Array),values:Br(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new q_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new X_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new j_(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Zs:e=this.InterpolantFactoryMethodDiscrete;break;case tr:e=this.InterpolantFactoryMethodLinear;break;case Ta:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return tr;case this.InterpolantFactoryMethodSmooth:return Ta}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&V_(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ta,r=t.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{const d=o*n,f=d-n,u=d+n;for(let m=0;m!==n;++m){const b=e[d+m];if(b!==e[f+m]||b!==e[u+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];const d=o*n,f=a*n;for(let u=0;u!==n;++u)e[f+u]=e[d+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=tr;class Ms extends Ln{constructor(t,e,n){super(t,e,n)}}Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Zs;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class pd extends Ln{}pd.prototype.ValueTypeName="color";class gs extends Ln{}gs.prototype.ValueTypeName="number";class Y_ extends or{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e);let l=t*o;for(let h=l+o;l!==h;l+=4)Yt.slerpFlat(r,0,a,l-o,a,l,c);return r}}class bs extends Ln{InterpolantFactoryMethodLinear(t){return new Y_(this.times,this.values,this.getValueSize(),t)}}bs.prototype.ValueTypeName="quaternion";bs.prototype.InterpolantFactoryMethodSmooth=void 0;class ys extends Ln{constructor(t,e,n){super(t,e,n)}}ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=Zs;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;class _s extends Ln{}_s.prototype.ValueTypeName="vector";class K_{constructor(t="",e=-1,n=[],i=Uf){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=mn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(J_(n[a]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(Ln.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=W_(c);c=kh(c,1,h),l=kh(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new gs(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){const l=t[o],h=l.name.match(r);if(h&&h.length>1){const d=h[1];let f=i[d];f||(i[d]=f=[]),f.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,f,u,m,b){if(u.length!==0){const g=[],p=[];fd(u,g,p,m),g.length!==0&&b.push(new d(f,g,p))}},i=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let d=0;d<l.length;d++){const f=l[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const u={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let b=0;b<f[m].morphTargets.length;b++)u[f[m].morphTargets[b]]=-1;for(const b in u){const g=[],p=[];for(let v=0;v!==f[m].morphTargets.length;++v){const x=f[m];g.push(x.time),p.push(x.morphTarget===b?1:0)}i.push(new gs(".morphTargetInfluence["+b+"]",g,p))}c=u.length*a}else{const u=".bones["+e[d].name+"]";n(_s,u+".position",f,"pos",i),n(bs,u+".quaternion",f,"rot",i),n(_s,u+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function $_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return gs;case"vector":case"vector2":case"vector3":case"vector4":return _s;case"color":return pd;case"quaternion":return bs;case"bool":case"boolean":return Ms;case"string":return ys}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function J_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=$_(s.type);if(s.times===void 0){const e=[],n=[];fd(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const fi={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Q_{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){const u=l[d],m=l[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null}}}const Z_=new Q_;class Ss{constructor(t){this.manager=t!==void 0?t:Z_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ss.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bn={};class tx extends Error{constructor(t,e){super(t),this.response=e}}class md extends Ss{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=fi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Bn[t]!==void 0){Bn[t].push({onLoad:e,onProgress:n,onError:i});return}Bn[t]=[],Bn[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Bn[t],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=f?parseInt(f):0,m=u!==0;let b=0;const g=new ReadableStream({start(p){v();function v(){d.read().then(({done:x,value:_})=>{if(x)p.close();else{b+=_.byteLength;const E=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:u});for(let T=0,w=h.length;T<w;T++){const P=h[T];P.onProgress&&P.onProgress(E)}p.enqueue(_),v()}},x=>{p.error(x)})}}});return new Response(g)}else throw new tx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,u=new TextDecoder(f);return l.arrayBuffer().then(m=>u.decode(m))}}}).then(l=>{fi.add(t,l);const h=Bn[t];delete Bn[t];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onLoad&&u.onLoad(l)}}).catch(l=>{const h=Bn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Bn[t];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onError&&u.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class ex extends Ss{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=fi.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=er("img");function c(){h(),fi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(d){h(),i&&i(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class nx extends Ss{constructor(t){super(t)}load(t,e,n,i){const r=new ye,a=new ex(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class ya extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class gd extends ya{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ro=new kt,Nh=new L,Uh=new L;class tl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bc,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nh),Uh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uh),e.updateMatrixWorld(),ro.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ro),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ro)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ix extends tl{constructor(){super(new Ce(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=fs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class sx extends ya{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ix}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Fh=new kt,Ds=new L,ao=new L;class rx extends tl{constructor(){super(new Ce(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ds.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ds),ao.copy(n.position),ao.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ao),n.updateMatrixWorld(),i.makeTranslation(-Ds.x,-Ds.y,-Ds.z),Fh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fh)}}class ax extends ya{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ox extends tl{constructor(){super(new zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ha extends ya{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new ox}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ks{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class cx extends Ss{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=fi.get(t);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return fi.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),fi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});fi.add(t,c),r.manager.itemStart(t)}}class lx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Oh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Oh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Oh(){return performance.now()}const el="\\[\\]\\.:\\/",hx=new RegExp("["+el+"]","g"),nl="[^"+el+"]",ux="[^"+el.replace("\\.","")+"]",dx=/((?:WC+[\/:])*)/.source.replace("WC",nl),fx=/(WCOD+)?/.source.replace("WCOD",ux),px=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nl),mx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nl),gx=new RegExp("^"+dx+fx+px+mx+"$"),bx=["material","materials","bones","map"];class _x{constructor(t,e,n){const i=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ae{constructor(t,e,n){this.path=e,this.parsedPath=n||ae.parseTrackName(e),this.node=ae.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ae.Composite(t,e,n):new ae(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(hx,"")}static parseTrackName(t){const e=gx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);bx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=ae.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[i];if(a===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ae.Composite=_x;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ec);const xx=46,Bh=52,vx=75;class Mx{constructor(t){gl(this,"_kbSteer",0);this.steer=0,this.brake=!1,this.tuck=!1,this.lastTuckRelease=-1e9,this.onSwipe=null,this._keys=new Set,this._touch=null,this._onKeyDown=e=>this._keyDown(e),this._onKeyUp=e=>this._keyUp(e),this._onPointerDown=e=>this._pointerDown(e),this._onPointerMove=e=>this._pointerMove(e),this._onPointerUp=e=>this._pointerUp(e),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),t.addEventListener("pointerdown",this._onPointerDown),window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp),window.addEventListener("pointercancel",this._onPointerUp),this._onBlur=()=>{this._keys.clear(),this._applyKeys()},window.addEventListener("blur",this._onBlur)}dispose(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),window.removeEventListener("pointercancel",this._onPointerUp)}_keyDown(t){const e=t.key.toLowerCase();if(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(e)){if(t.preventDefault(),!this._keys.has(e)){const n={w:"up",arrowup:"up",s:"down",arrowdown:"down",a:"left",arrowleft:"left",d:"right",arrowright:"right"}[e];n&&this.onSwipe&&this.onSwipe(n)}this._keys.add(e),this._applyKeys()}}_keyUp(t){const e=t.key.toLowerCase();this._keys.delete(e)&&this._applyKeys()}_applyKeys(){const t=(...r)=>r.some(a=>this._keys.has(a)),e=t("a","arrowleft"),n=t("d","arrowright");this._kbSteer=(n?1:0)-(e?1:0);const i=this.tuck;this.tuck=t("w","arrowup"),this.brake=t("s","arrowdown"),i&&!this.tuck&&(this.lastTuckRelease=performance.now()),this._touch===null&&(this.steer=this._kbSteer)}_pointerDown(t){t.pointerType==="mouse"&&t.button!==0||this._touch||(this._touch={id:t.pointerId,ax:t.clientX,ay:t.clientY,sx:t.clientX,sy:t.clientY,st:performance.now()})}_pointerMove(t){const e=this._touch;if(!e||t.pointerId!==e.id)return;const n=t.clientX-e.ax,i=t.clientY-e.ay;this.steer=Math.max(-1,Math.min(1,n/vx));const r=this.tuck;this.tuck=i<-Bh,this.brake=i>Bh,r&&!this.tuck&&(this.lastTuckRelease=performance.now());const a=t.clientX-e.sx,o=t.clientY-e.sy,c=performance.now();if(c-e.st<260&&Math.hypot(a,o)>xx){const l=a>0?"right":"left",h=o>0?"down":"up";this.onSwipe&&(Math.min(Math.abs(a),Math.abs(o))>.55*Math.max(Math.abs(a),Math.abs(o))?(this.onSwipe(l),this.onSwipe(h)):this.onSwipe(Math.abs(a)>Math.abs(o)?l:h)),e.sx=t.clientX,e.sy=t.clientY,e.st=c}else c-e.st>=260&&(e.sx=t.clientX,e.sy=t.clientY,e.st=c)}_pointerUp(t){const e=this._touch;!e||t.pointerId!==e.id||(this._touch=null,this.tuck&&(this.lastTuckRelease=performance.now()),this.steer=this._kbSteer||0,this.tuck=!1,this.brake=!1,this._applyKeys())}}function zh(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new me;let l=0;for(let h=0;h<s.length;++h){const d=s[h];let f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in d.morphAttributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(d.morphAttributes[u])}if(t){let u;if(e)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,u,h),l+=u}}if(e){let h=0;const d=[];for(let f=0;f<s.length;++f){const u=s[f].index;for(let m=0;m<u.count;++m)d.push(u.getX(m)+h);h+=s[f].attributes.position.count}c.setIndex(d)}for(const h in r){const d=Gh(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let b=0;b<a[h].length;++b)u.push(a[h][b][f]);const m=Gh(u);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Gh(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new le(a,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const d=c/e;for(let f=0,u=h.count;f<u;f++)for(let m=0;m<e;m++){const b=h.getComponent(f,m);o.setComponent(f+d,m,b)}}else a.set(h.array,c);c+=h.count*e}return i!==void 0&&(o.gpuType=i),o}function Hh(s,t){if(t===Ff)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===oc||t===Gu){let e=s.getIndex();if(e===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===oc)for(let a=1;a<=n;a++)i.push(e.getX(0)),i.push(e.getX(a)),i.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(e.getX(a)),i.push(e.getX(a+1)),i.push(e.getX(a+2))):(i.push(e.getX(a+2)),i.push(e.getX(a+1)),i.push(e.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}function Jn(s){let t=s>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function bd(){return Math.random()*4294967295>>>0}function zr(s,t,e){let n=Math.imul(s|0,668265261)^Math.imul(t|0,374761393)^Math.imul(e|0,2654435769);return n=Math.imul(n^n>>>15,2246822507),n^=n>>>13,(n>>>0)/4294967296}const Vh=s=>s*s*(3-2*s);function _d(s,t,e){const n=Math.floor(s),i=Math.floor(t),r=s-n,a=t-i,o=zr(n,i,e),c=zr(n+1,i,e),l=zr(n,i+1,e),h=zr(n+1,i+1,e),d=Vh(r),f=Vh(a);return(o+(c-o)*d+(l-o)*f+(o-c-l+h)*d*f)*2-1}function Xe(s,t){return _d(s,.5,t)}function ks(s,t,e,n=3){let i=0,r=.5,a=1,o=0;for(let c=0;c<n;c++)i+=_d(s*a,t*a,e+c*101)*r,o+=r,r*=.5,a*=2.1;return i/o}const gt=(s,t,e)=>Math.min(e,Math.max(t,s)),ge=(s,t,e)=>s+(t-s)*e;function Kt(s,t,e){const n=gt((e-s)/(t-s),0,1);return n*n*(3-2*n)}const cr={vermont:{eventA:12725045,eventB:16111470,skyTop:5214158,skyBottom:15332090,fog:15003386,fogNear:220,fogFar:1e3,snow:15988732,ice:11981544,rock:7239267,trunk:7031342,foliage:5206086,treeMul:1.35,rockMul:.6,roughMul:.75,mogulMul:.9,cliffMul:.55,hemiSky:14478591,hemiGround:10135707,hemiI:.9,sunCol:16773320,sunI:1.8},quebec:{eventA:2381480,eventB:7330280,skyTop:4029632,skyBottom:14478070,fog:14346484,fogNear:200,fogFar:900,snow:15791611,ice:10273504,rock:8877682,trunk:4273189,foliage:2180404,treeMul:1.5,rockMul:.7,roughMul:.85,mogulMul:1.1,cliffMul:.7,hemiSky:13624056,hemiGround:9279912,hemiI:.85,sunCol:16772800,sunI:1.7},colorado:{eventA:14248735,eventB:3522720,skyTop:4162505,skyBottom:15134968,fog:14871798,fogNear:240,fogFar:1100,snow:16054525,ice:11324390,rock:8688806,trunk:5916208,foliage:4944752,treeMul:1,rockMul:1.1,roughMul:1,mogulMul:1,cliffMul:1,hemiSky:13625087,hemiGround:10261636,hemiI:.85,sunCol:16773328,sunI:1.9},utah:{eventA:11019822,eventB:15771712,skyTop:3111624,skyBottom:15003898,fog:15134970,fogNear:230,fogFar:1050,snow:16186110,ice:12113646,rock:10639932,trunk:14077888,foliage:7831626,treeMul:.85,rockMul:1.2,roughMul:1.15,mogulMul:.8,cliffMul:1.1,hemiSky:13953535,hemiGround:9345451,hemiI:.85,sunCol:16774360,sunI:2},bc:{eventA:2064248,eventB:10479824,skyTop:5603496,skyBottom:13951208,fog:13688294,fogNear:150,fogFar:720,snow:15660024,ice:10798298,rock:5398118,trunk:4337951,foliage:1785904,treeMul:1.6,rockMul:.9,roughMul:1.05,mogulMul:1,cliffMul:1.3,hemiSky:12768482,hemiGround:8556182,hemiI:.95,sunCol:15919832,sunI:1.35},chile:{eventA:12595240,eventB:16098851,skyTop:2780866,skyBottom:15397624,fog:15266038,fogNear:280,fogFar:1300,snow:16120060,ice:12243686,rock:10121030,trunk:6509114,foliage:5333308,treeMul:.06,rockMul:2.2,roughMul:1.35,mogulMul:.7,cliffMul:1.5,hemiSky:14215418,hemiGround:11049600,hemiI:.9,sunCol:16774880,sunI:2.1},nz:{eventA:1019807,eventB:12905550,skyTop:3504568,skyBottom:14871794,fog:14740208,fogNear:260,fogFar:1200,snow:15922938,ice:11586784,rock:9341820,trunk:8679756,foliage:9997396,treeMul:.1,rockMul:1.9,roughMul:1.25,mogulMul:1.15,cliffMul:1.35,hemiSky:13821170,hemiGround:10524798,hemiI:.9,sunCol:16773844,sunI:1.95},swiss:{eventA:13639722,eventB:16054783,skyTop:2449576,skyBottom:14674678,fog:14543348,fogNear:240,fogFar:1150,snow:16185853,ice:12376304,rock:9673382,trunk:5193776,foliage:3038280,treeMul:.7,rockMul:1.3,roughMul:1.2,mogulMul:.95,cliffMul:1.7,hemiSky:13690106,hemiGround:9147813,hemiI:.85,sunCol:16773840,sunI:2},japan:{eventA:13976480,eventB:6809849,skyTop:1315384,skyBottom:5918350,fog:4866674,fogNear:140,fogFar:620,snow:14672626,ice:10134732,rock:4672355,trunk:14209216,foliage:3824725,treeMul:1.45,rockMul:.6,roughMul:.9,mogulMul:.75,cliffMul:.8,hemiSky:8025264,hemiGround:3947094,hemiI:.75,sunCol:12372223,sunI:1}};for(const[s,t]of Object.entries(cr))t.key=s;class il extends Ss{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Ax(e)}),this.register(function(e){return new Ex(e)}),this.register(function(e){return new Ux(e)}),this.register(function(e){return new Fx(e)}),this.register(function(e){return new Ox(e)}),this.register(function(e){return new Cx(e)}),this.register(function(e){return new Px(e)}),this.register(function(e){return new Lx(e)}),this.register(function(e){return new Ix(e)}),this.register(function(e){return new Tx(e)}),this.register(function(e){return new Dx(e)}),this.register(function(e){return new Rx(e)}),this.register(function(e){return new Nx(e)}),this.register(function(e){return new kx(e)}),this.register(function(e){return new Sx(e)}),this.register(function(e){return new Bx(e)}),this.register(function(e){return new zx(e)})}load(t,e,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Ks.extractUrlBase(t);a=Ks.resolveURL(l,this.path)}else a=Ks.extractUrlBase(t);this.manager.itemStart(t);const o=function(l){i?i(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new md(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,a,function(h){e(h),r.manager.itemEnd(t)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===xd){try{a[jt.KHR_BINARY_GLTF]=new Gx(t)}catch(d){i&&i(d);return}r=JSON.parse(a[jt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new tv(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case jt.KHR_MATERIALS_UNLIT:a[d]=new wx;break;case jt.KHR_DRACO_MESH_COMPRESSION:a[d]=new Hx(r,this.dracoLoader);break;case jt.KHR_TEXTURE_TRANSFORM:a[d]=new Vx;break;case jt.KHR_MESH_QUANTIZATION:a[d]=new Wx;break;default:f.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function yx(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const jt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Sx{constructor(t){this.parser=t,this.name=jt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const h=new mt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ge);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ha(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ax(h),l.distance=d;break;case"spot":l=new sx(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Wn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(e.cache,o,c)})}}class wx{constructor(){this.name=jt.KHR_MATERIALS_UNLIT}getMaterialType(){return Re}extendParams(t,e,n){const i=[];t.color=new mt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],Ge),t.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,xe))}return Promise.all(i)}}class Tx{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class Ax{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new vt(o,o)}return Promise.all(r)}}class Ex{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Rx{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Cx{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new mt(0,0,0),e.sheenRoughness=0,e.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],Ge)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,xe)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Px{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Lx{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return e.attenuationColor=new mt().setRGB(o[0],o[1],o[2],Ge),Promise.all(r)}}class Ix{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Dx{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return e.specularColor=new mt().setRGB(o[0],o[1],o[2],Ge),a.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,xe)),Promise.all(r)}}class kx{constructor(t){this.parser=t,this.name=jt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Nx{constructor(t){this.parser=t,this.name=jt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Ux{constructor(t){this.parser=t,this.name=jt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,a)}}class Fx{constructor(t){this.parser=t,this.name=jt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Ox{constructor(t){this.parser=t,this.name=jt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Bx{constructor(t){this.name=jt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(u){return u.buffer}):a.ready.then(function(){const u=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(u),h,d,f,i.mode,i.filter),u})})}else return null}}class zx{constructor(t){this.name=jt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Ze.TRIANGLES&&l.mode!==Ze.TRIANGLE_STRIP&&l.mode!==Ze.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(l=>{const h=l.pop(),d=h.isGroup?h.children:[h],f=l[0].count,u=[];for(const m of d){const b=new kt,g=new L,p=new Yt,v=new L(1,1,1),x=new hn(m.geometry,m.material,f);for(let _=0;_<f;_++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&v.fromBufferAttribute(c.SCALE,_),x.setMatrixAt(_,b.compose(g,p,v));for(const _ in c)if(_==="_COLOR_0"){const E=c[_];x.instanceColor=new hc(E.array,E.itemSize,E.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,c[_]);fe.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),u.push(x)}return h.isGroup?(h.clear(),h.add(...u),h):u[0]}))}}const xd="glTF",Ns=12,Wh={JSON:1313821514,BIN:5130562};class Gx{constructor(t){this.name=jt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Ns),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==xd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ns,r=new DataView(t,Ns);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Wh.JSON){const l=new Uint8Array(t,Ns+a,o);this.content=n.decode(l)}else if(c===Wh.BIN){const l=Ns+a;this.body=t.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Hx{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=jt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const d=dc[h]||h.toLowerCase();o[d]=a[h]}for(const h in t.attributes){const d=dc[h]||h.toLowerCase();if(a[h]!==void 0){const f=n.accessors[t.attributes[h]],u=as[f.componentType];l[d]=u.name,c[d]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){i.decodeDracoFile(h,function(u){for(const m in u.attributes){const b=u.attributes[m],g=c[m];g!==void 0&&(b.normalized=g)}d(u)},o,l,Ge,f)})})}}class Vx{constructor(){this.name=jt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Wx{constructor(){this.name=jt.KHR_MESH_QUANTIZATION}}class vd extends or{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let a=0;a!==i;a++)e[a]=n[r+a];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-e,d=(n-e)/h,f=d*d,u=f*d,m=t*l,b=m-l,g=-2*u+3*f,p=u-f,v=1-g,x=p-f+d;for(let _=0;_!==o;_++){const E=a[b+_+o],T=a[b+_+c]*h,w=a[m+_+o],P=a[m+_]*h;r[_]=v*E+x*T+g*w+p*P}return r}}const jx=new Yt;class Xx extends vd{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return jx.fromArray(r).normalize().toArray(r),r}}const Ze={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},as={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jh={9728:ze,9729:Ye,9984:Lu,9985:Qr,9986:zs,9987:Xn},Xh={33071:di,33648:aa,10497:Di},oo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qx={CUBICSPLINE:void 0,LINEAR:tr,STEP:Zs},co={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Yx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Zc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qn})),s.DefaultMaterial}function Ti(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Wn(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Kx(s,t,e){let n=!1,i=!1,r=!1;for(let l=0,h=t.length;l<h;l++){const d=t[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,h=t.length;l<h;l++){const d=t[l];if(n){const f=d.POSITION!==void 0?e.getDependency("accessor",d.POSITION):s.attributes.position;a.push(f)}if(i){const f=d.NORMAL!==void 0?e.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=d.COLOR_0!==void 0?e.getDependency("accessor",d.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],d=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function $x(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Jx(s){let t;const e=s.extensions&&s.extensions[jt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+lo(e.attributes):t=s.indices+":"+lo(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+lo(s.targets[n]);return t}function lo(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function fc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Qx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Zx=new kt;class tv{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new yx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new nx(this.options.manager):this.textureLoader=new cx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new md(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ti(r,o,i),Wn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const a=e[i].joints;for(let o=0,c=a.length;o<c;o++)t[a[o]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const a=t[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[jt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Ks.resolveURL(e.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const a=oo[i.type],o=as[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new le(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=oo[i.type],l=as[i.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,f=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let b,g;if(u&&u!==d){const p=Math.floor(f/u),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=e.cache.get(v);x||(b=new l(o,p*u,i.count*u/h),x=new y_(b,u/h),e.cache.add(v,x)),g=new Vc(x,c,f%u/h,m)}else o===null?b=new l(i.count*c):b=new l(o,f,i.count*c),g=new le(b,c,m);if(i.sparse!==void 0){const p=oo.SCALAR,v=as[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,E=new v(a[1],x,i.sparse.count*p),T=new l(a[2],_,i.sparse.count*c);o!==null&&(g=new le(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let w=0,P=E.length;w<P;w++){const M=E[w];if(g.setX(M,T[w*c]),c>=2&&g.setY(M,T[w*c+1]),c>=3&&g.setZ(M,T[w*c+2]),c>=4&&g.setW(M,T[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,a=e.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(t,r,o)}loadTextureImage(t,e,n){const i=this,r=this.json,a=r.textures[t],o=r.images[e],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return h.magFilter=jh[f.magFilter]||Ye,h.minFilter=jh[f.minFilter]||Xn,h.wrapS=Xh[f.wrapS]||Di,h.wrapT=Xh[f.wrapT]||Di,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==ze&&h.minFilter!==Ye,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(d=>d.clone());const a=i.images[t],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;const f=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(d){return new Promise(function(f,u){let m=f;e.isImageBitmapLoader===!0&&(m=function(b){const g=new ye(b);g.needsUpdate=!0,f(g)}),e.load(Ks.resolveURL(d,r.path),m,void 0,u)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),Wn(d,a),d.userData.mimeType=a.mimeType||Qx(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[jt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[jt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[jt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),t[e]=a,a})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Xc,gn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(t.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new cd,gn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return Zc}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let a;const o={},c=r.extensions||{},l=[];if(c[jt.KHR_MATERIALS_UNLIT]){const d=i[jt.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,r,e))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new mt(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Ge),o.opacity=f[3]}d.baseColorTexture!==void 0&&l.push(e.assignTexture(o,"map",d.baseColorTexture,xe)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(e.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,o)})))}r.doubleSided===!0&&(o.side=Oe);const h=r.alphaMode||co.OPAQUE;if(h===co.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===co.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Re&&(l.push(e.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new vt(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Re&&(l.push(e.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Re){const d=r.emissiveFactor;o.emissive=new mt().setRGB(d[0],d[1],d[2],Ge)}return r.emissiveTexture!==void 0&&a!==Re&&l.push(e.assignTexture(o,"emissiveMap",r.emissiveTexture,xe)),Promise.all(l).then(function(){const d=new a(o);return r.name&&(d.name=r.name),Wn(d,r),e.associations.set(d,{materials:t}),r.extensions&&Ti(i,d,r),d})}createUniqueName(t){const e=ae.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[jt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(c){return qh(c,o,e)})}const a=[];for(let o=0,c=t.length;o<c;o++){const l=t[o],h=Jx(l),d=i[h];if(d)a.push(d.promise);else{let f;l.extensions&&l.extensions[jt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=qh(new me,l,e),i[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?Yx(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let u=0,m=h.length;u<m;u++){const b=h[u],g=a[u];let p;const v=l[u];if(g.mode===Ze.TRIANGLES||g.mode===Ze.TRIANGLE_STRIP||g.mode===Ze.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new w_(b,v):new ne(b,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Ze.TRIANGLE_STRIP?p.geometry=Hh(p.geometry,Gu):g.mode===Ze.TRIANGLE_FAN&&(p.geometry=Hh(p.geometry,oc));else if(g.mode===Ze.LINES)p=new E_(b,v);else if(g.mode===Ze.LINE_STRIP)p=new jc(b,v);else if(g.mode===Ze.LINE_LOOP)p=new R_(b,v);else if(g.mode===Ze.POINTS)p=new qc(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&$x(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),Wn(p,r),g.extensions&&Ti(i,p,g),e.assignFinalMaterial(p),d.push(p)}for(let u=0,m=d.length;u<m;u++)e.associations.set(d[u],{meshes:t,primitives:u});if(d.length===1)return r.extensions&&Ti(i,d[0],r),d[0];const f=new ve;r.extensions&&Ti(i,f,r),e.associations.set(f,{meshes:t});for(let u=0,m=d.length;u<m;u++)f.add(d[u]);return f})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Ce(Oc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new zc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Wn(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const d=a[l];if(d){o.push(d);const f=new kt;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Wc(o,c)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,a=[],o=[],c=[],l=[],h=[];for(let d=0,f=i.channels.length;d<f;d++){const u=i.channels[d],m=i.samplers[u.sampler],b=u.target,g=b.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,v=i.parameters!==void 0?i.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(m),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){const f=d[0],u=d[1],m=d[2],b=d[3],g=d[4],p=[];for(let v=0,x=f.length;v<x;v++){const _=f[v],E=u[v],T=m[v],w=b[v],P=g[v];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const M=n._createAnimationTracks(_,E,T,w,P);if(M)for(let y=0;y<M.length;y++)p.push(M[y])}return new K_(r,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],d=l[1],f=l[2];f!==null&&h.traverse(function(u){u.isSkinnedMesh&&u.bind(f,Zx)});for(let u=0,m=d.length;u<m;u++)h.add(d[u]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){o.push(l)}),this.nodeCache[t]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new ad:l.length>1?h=new ve:l.length===1?h=l[0]:h=new fe,h!==l[0])for(let d=0,f=l.length;d<f;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=a),Wn(h,r),r.extensions&&Ti(n,h,r),r.matrix!==void 0){const d=new kt;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new ve;n.name&&(r.name=i.createUniqueName(n.name)),Wn(r,n),n.extensions&&Ti(e,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,d=c.length;h<d;h++)r.add(c[h]);const l=h=>{const d=new Map;for(const[f,u]of i.associations)(f instanceof gn||f instanceof ye)&&d.set(f,u);return h.traverse(f=>{const u=i.associations.get(f);u!=null&&d.set(f,u)}),d};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){const a=[],o=t.name?t.name:t.uuid,c=[];ci[r.path]===ci.weights?t.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(ci[r.path]){case ci.weights:l=gs;break;case ci.rotation:l=bs;break;case ci.position:case ci.scale:l=_s;break;default:switch(n.itemSize){case 1:l=gs;break;case 2:case 3:default:l=_s;break}break}const h=i.interpolation!==void 0?qx[i.interpolation]:tr,d=this._getArrayFromAccessor(n);for(let f=0,u=c.length;f<u;f++){const m=new l(c[f]+"."+ci[r.path],e.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=fc(e.constructor),i=new Float32Array(e.length);for(let r=0,a=e.length;r<a;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof bs?Xx:vd;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ev(s,t,e){const n=t.attributes,i=new En;if(n.POSITION!==void 0){const o=e.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){const h=fc(as[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const o=new L,c=new L;for(let l=0,h=r.length;l<h;l++){const d=r[l];if(d.POSITION!==void 0){const f=e.json.accessors[d.POSITION],u=f.min,m=f.max;if(u!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(u[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(u[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(u[2]),Math.abs(m[2]))),f.normalized){const b=fc(as[f.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Rn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function qh(s,t,e){const n=t.attributes,i=[];function r(a,o){return e.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=dc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(t.indices!==void 0&&!s.index){const a=e.getDependency("accessor",t.indices).then(function(o){s.setIndex(o)});i.push(a)}return qt.workingColorSpace!==Ge&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qt.workingColorSpace}" not supported.`),Wn(s,t),ev(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?Kx(s,t.targets,e):s})}var sl=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(e)?t:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),x=0;x<p.length;++x){var _=p.charCodeAt(x);v[x]=_>96?_-97:_>64?_-39:_+4}for(var E=0,x=0;x<p.length;++x)v[E++]=v[x]<60?n[v[x]]:(v[x]-60)*64+v[++x];return v.buffer.slice(0,E)}function c(p,v,x,_,E,T){var w=r.exports.sbrk,P=x+3&-4,M=w(P*_),y=w(E.length),S=new Uint8Array(r.exports.memory.buffer);S.set(E,y);var C=p(M,x,_,y,E.length);if(C==0&&T&&T(M,P,_),v.set(S.subarray(M,M+x*_)),w(M-w(0)),C!=0)throw new Error("Malformed buffer data: "+C)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],f=0;function u(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(x){var _=x.data;v.pending-=_.count,v.requests[_.id][_.action](_.value),delete v.requests[_.id]},v}function m(p){for(var v="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+g.toString(),x=new Blob([v],{type:"text/javascript"}),_=URL.createObjectURL(x),E=0;E<p;++E)d[E]=u(_);URL.revokeObjectURL(_)}function b(p,v,x,_,E){for(var T=d[0],w=1;w<d.length;++w)d[w].pending<T.pending&&(T=d[w]);return new Promise(function(P,M){var y=new Uint8Array(x),S=f++;T.pending+=p,T.requests[S]={resolve:P,reject:M},T.object.postMessage({id:S,count:p,size:v,source:y,mode:_,filter:E},[y.buffer])})}function g(p){a.then(function(){var v=p.data;try{var x=new Uint8Array(v.count*v.size);c(r.exports[v.mode],x,v.count,v.size,v.source,r.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:x},[x.buffer])}catch(_){self.postMessage({id:v.id,count:v.count,action:"reject",value:_})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,v,x,_,E){c(r.exports.meshopt_decodeVertexBuffer,p,v,x,_,r.exports[l[E]])},decodeIndexBuffer:function(p,v,x,_){c(r.exports.meshopt_decodeIndexBuffer,p,v,x,_)},decodeIndexSequence:function(p,v,x,_){c(r.exports.meshopt_decodeIndexSequence,p,v,x,_)},decodeGltfBuffer:function(p,v,x,_,E,T){c(r.exports[h[E]],p,v,x,_,r.exports[l[T]])},decodeGltfBufferAsync:function(p,v,x,_,E){return d.length>0?b(p,v,x,h[_],l[E]):a.then(function(){var T=new Uint8Array(p*v);return c(r.exports[h[_]],T,p,v,x,r.exports[l[E]]),T})}}})();const nv={},iv=(nv?.VITE_MODEL_EXT||"glb").replace(/^\./,""),rl=s=>`models/${s}.${iv}`;let pc=null;async function sv(){if(pc)return;const s=new il;s.setMeshoptDecoder(sl),pc=(await s.loadAsync(rl("props"))).scene}const Md=new Set(["log_small","log_hollow"]);function yd(s,t){if(t&&Md.has(t)){const n=new mt(s.trunk??5916208);return{structure:n.clone().multiplyScalar(.9),secondary:n.clone().lerp(new mt(13219733),.4),panel:new mt(13217923),trim:new mt(16054525)}}const e=new mt(11187391).lerp(new mt(s.snow),.25);return{structure:new mt(3028290).lerp(new mt(s.fog),.12),secondary:e,panel:new mt(s.eventA??14042415),trim:new mt(s.eventB??16111470)}}const Yh=new Map;function Kh(s,t,e){const n=`${e}:${s}`;let i=Yh.get(n);if(!i){const r=t[s]??new mt(8947848);i=s==="trim"?new _e({color:r,emissive:r.clone().multiplyScalar(.35)}):new _e({color:r}),Yh.set(n,i)}return i}function jn(s,t,e=1){const n=pc.getObjectByName(s),i=yd(t,s),r=`${Md.has(s)?"wood":"evt"}:${t.snow}:${t.eventA}`,a=n.clone();a.traverse(c=>{c.isMesh&&(Array.isArray(c.material)?c.material=c.material.map(l=>Kh(l.name,i,r)):c.material=Kh(c.material.name,i,r),c.castShadow=!0)});const o=new ve;return o.add(a),o.scale.setScalar(e),o}const Vs=6.5/17,xn=.15,vn=.185,mc=28.7,ra=s=>8.58-.36*(Oc.clamp(s,8,28)-8),gc=1.45,Us={lipDz:gc,lipDrop:(ra(mc-gc/vn)-1.4)*xn,halfW:50*Vs,blend:2.4},Fs=.052,Gr=.036,Hr=.032,ho=(s,t,e)=>{const n=document.createElement("canvas");n.width=s,n.height=t;const i=n.getContext("2d");e(i,s,t);const r=new _a(n);return r.colorSpace=xe,r};class Sd{constructor(t){this.terrain=t,this.group=new ve,this.openT=-1,this.phase="idle";const e=new _e({color:2304051}),n=t.gateLanes,i=(n[0].x+n[n.length-1].x)/2,r=n[0].z,a=t.theme,o=yd(a);this.cx=i,this.z=r;const c=100*Vs,l=r-gc,h=l+mc*vn,d=t.heightAt(i,r)-ra((h-r)/vn)*xn,f=jn("pavilion",a);f.scale.set(Vs,xn,vn),f.position.set(i,d,h),f.rotation.y=Math.PI,this.group.add(f),this.pav=f,this.hideZ=l-1.5;const u=c/2;t.surface=(E,T)=>{if(Math.abs(E-i)>u)return-1/0;const w=(h-T)/vn;return w<8||w>mc?-1/0:d+ra(w)*xn},this.screens=new ve,this.accA="#"+new mt(a.eventA??14042415).getHexString(),this.accB="#"+new mt(a.eventB??16111470).getHexString(),this.tickerTex=null,this.tickerMat=new Re({color:16777215});const m=new ne(new wn(15,1.84),this.tickerMat),b=Math.atan(5.8*vn/(10.4*xn));m.rotation.order="YXZ",m.rotation.set(b,Math.PI,0),m.position.set(i-.3*Vs,d+33.6*xn-Math.sin(b)*.09,h-20.3*vn-Math.cos(b)*.09),this.screens.add(m),this.sideSignMats=[];const g=Math.atan(4.8*vn/(11.1*xn));for(const E of[-1,1]){const T=new Re({map:ho(512,172,(P,M,y)=>{P.fillStyle="#0a0e16",P.fillRect(0,0,M,y),P.strokeStyle=this.accA,P.lineWidth=10,P.strokeRect(8,8,M-16,y-16),P.font="bold 108px sans-serif",P.textAlign="center",P.textBaseline="middle",P.fillStyle=this.accB,P.fillText("START",M/2,y/2+6)})}),w=new ne(new wn(4.6,1.55),T);w.rotation.order="YXZ",w.rotation.set(g,Math.PI,0),w.position.set(i+E*36.5*Vs,d+33.45*xn-Math.sin(g)*.09,h-20.8*vn-Math.cos(g)*.09),this.screens.add(w),this.sideSignMats.push(T)}this.group.add(this.screens),this.smokers=[],this.pyroPorts=[];const p=d+60.6*xn-.8;this.trussY=p+1.6;for(const E of[-.36,-.12,.12,.36])this.pyroPorts.push(new L(i+E*c,p,l+.4));for(const E of[-1,1]){const T=i+E*(c/2+.9),w=new ne(new Ke(.9,.65,.9),e);w.position.set(T,t.heightAt(T,r-1)+.35,r-1),this.smokers.push(w.position.clone()),this.group.add(w)}this.wands=[],this.laneLightMats=[];const v=r-.45-3.1*Hr,x=d+ra((h-v)/vn)*xn,_=new _e({color:o.trim,emissive:o.trim.clone().multiplyScalar(.35)});this.laneScreens=[];for(const E of n){const T=E.x+3.1*Fs,w=jn("start_gate",a);w.scale.set(Fs,Gr,Hr),w.position.set(T,x-.12,v);const P=this.laneScreens.length+1,M=new Re({color:16777215});for(const I of[-35.95,29.65]){const k=new ne(new wn(11*Fs,25*Gr),M);k.position.set(T+I*Fs,x-.12+38.7*Gr,v+4.2*Hr+.035),this.group.add(k)}this.laneScreens.push({mat:M,no:P,name:null});const y=new ve;y.position.set(11.2,43.4,3.6);const S=new ne(new Ke(28,2,2),_);S.position.x=-14,y.add(S),w.add(y),this.wands.push(y),this.group.add(w);const C=new Re({color:14042415});this.laneLightMats.push(C);for(const I of[-33.4,29.1]){const k=new ne(new ar(.085,8,6),C);k.position.set(T+I*Fs,x-.12+69*Gr,v+9*Hr),this.group.add(k)}}this.ledMat=new Re({color:3718648});for(const E of[-2,-3.2]){const T=new ne(new Ke(c-3,.16,.14),this.ledMat);T.position.set(i,t.heightAt(i,r+E)+.15,r+E),this.group.add(T)}this.screenMat=new Re({color:860723}),this.setRoster([]),this.group.traverse(E=>{E.isMesh&&(E.castShadow=!0)})}setRoster(t){const e=t.filter(Boolean),n="RACE STARTING  •  "+(e.length?e.join("  •  ")+"  •  ":"");this.tickerTex?.dispose(),this.tickerTex=ho(2048,256,(i,r,a)=>{i.fillStyle="#0a0e16",i.fillRect(0,0,r,a);for(let d=0;d<r;d+=32)for(const f of[0,a-26])i.fillStyle=d/32%2?"#e8edf4":"#12161e",i.fillRect(d,f,32,26);i.textBaseline="middle",i.fillStyle=this.accB;let o=130,c=0,l=1,h=1;for(;o>=56&&(i.font=`bold ${o}px sans-serif`,c=i.measureText(n).width,l=Math.max(1,Math.round(r/c)),h=r/(l*c),!(h>=.85&&h<=1.25));o-=8);i.setTransform(h,0,0,1,0,0);for(let d=0;d<l;d++)i.fillText(n,d*c,a/2+8)}),this.tickerTex.wrapS=Di,this.tickerMat.map=this.tickerTex,this.tickerMat.needsUpdate=!0;for(const[i,r]of this.laneScreens.entries()){const a=t[i]??null;r.mat.map&&r.name===a||(r.name=a,r.mat.map?.dispose(),r.mat.map=ho(128,256,(o,c,l)=>{if(o.fillStyle="#0a0e16",o.fillRect(0,0,c,l),o.strokeStyle=this.accA,o.lineWidth=6,o.strokeRect(5,5,c-10,l-10),o.textAlign="center",o.fillStyle=this.accB,o.font="bold 110px sans-serif",o.fillText(String(r.no),c/2,a?128:150),a){o.fillStyle="#e8edf4";let h=30;for(o.font=`bold ${h}px sans-serif`;h>14&&o.measureText(a).width>c-18;)h-=2,o.font=`bold ${h}px sans-serif`;o.fillText(a,c/2,200)}}),r.mat.needsUpdate=!0)}}setPhase(t){this.phase=t;const e=t==="go"?4120683:t==="set"?16098851:14042415;for(const n of this.laneLightMats)n.color.setHex(e);t==="go"&&this.openT<0&&(this.openT=0)}update(t,e,n,i,r){if(r!==void 0){const c=r<this.hideZ;this.pav.visible=c,this.screens.visible=c}this.tickerTex&&(this.tickerTex.offset.x+=t*.045);const a=.66+.34*Math.sin(e*(this.phase==="go"?11:2.6));for(const c of this.sideSignMats)c.color.setScalar(a);const o=.5+.5*Math.sin(e*(this.phase==="go"?9:2.1));if(this.ledMat.color.setHSL(.55,.9,.3+o*.35),this.screenMat.color.setHSL(.58,.75,.1+.09*(.5+.5*Math.sin(e*1.3))),n&&this.openT<0&&Math.random()<t*1.2){const c=this.smokers[Math.floor(Math.random()*this.smokers.length)];n.spawn(c.x,c.y+.3,c.z,(Math.random()-.5)*.8,.7+Math.random()*.5,.7,2.6,2.4)}if(this.openT>=0){const c=this.openT;this.openT+=t;const l=Math.min(1,this.openT/.55),h=1-Math.pow(1-l,3);for(const d of this.wands)d.rotation.z=h*1.45;if(i&&this.openT<1.7){for(const d of this.pyroPorts)i.burst(d,{x:0,z:0},{count:5,speed:1.5,up:12+Math.random()*6,spread:Math.PI,size:1.5,life:1.1});if(Math.floor(c*5)!==Math.floor(this.openT*5)){const d=this.cx+(Math.random()-.5)*16;i.burst({x:d,y:this.trussY+2.5,z:this.z},{x:0,z:0},{count:22,speed:7,up:9,spread:Math.PI,size:1.2,life:.9})}}if(n&&this.openT<2.6){for(const[d,f]of this.smokers.entries())if(Math.random()<t*14){const u=d===0?1:-1;n.spawn(f.x,f.y+.3,f.z,u*(2.2+Math.random()*1.6),.8,1.4,2.6+Math.random()*1.4,2)}}}}}const ir=[{id:"race",name:"Downhill Race",short:"RACE",p:.2,scored:"time",length:1800,tag:"First to the line. The full mountain."},{id:"combined",name:"Combined",short:"COMBINED",p:.2,scored:"both",length:1800,tag:"Race time plus style points — both count."},{id:"glade",name:"Glade Sprint",short:"GLADE",p:.2,scored:"time",length:950,solo:!0,tag:"Short and fast through the trees. Solo runs, times posted at the end."},{id:"bigair",name:"Big Air",short:"BIG AIR",p:.2,scored:"style",length:420,solo:!0,tag:"One kicker. Judged on style alone, scores posted at the end."},{id:"halfpipe",name:"Halfpipe",short:"PIPE",p:.2,scored:"style",length:575,solo:!0,tag:"Five or six hits, all style. Scores posted at the end."}];function wd(s){return ir.find(t=>t.id===s)??null}function rv(s=Math.random()){let t=0;for(const e of ir)if(t+=e.p,s<t)return e;return ir[0]}function av(s){const t=s.map((n,i)=>({t:n,i})).sort((n,i)=>n.t-i.t),e=new Array(s.length).fill(0);return t.forEach((n,i)=>{const r=Math.max(1,6-(i+1))*1e3,a=t[i+1],o=a&&i<4?Math.max(0,a.t-n.t):0;e[n.i]=r+Math.min(999,Math.round(o*500))}),e}const ov={bigair:260,halfpipe:420};function bc(s){const t=Math.floor(s/60),e=s-t*60;return`${t}:${e.toFixed(2).padStart(5,"0")}`}function cv(s,t,e){if(s<=0)return 0;const n=.35+.65*Math.min(1,Math.max(0,e));return Math.max(0,Math.round(s*n*(1+.12*t)-(t<0?10:0)))}function lv(s,{playerPos:t,playerStyle:e,playerTime:n,bots:i,rng:r}){const a=s.scored,o=i.map(m=>{const b=t-m.rank;if(m.time!=null)return m.time;const g=1.4+r()*1.2;return Math.max(5,n-b*g+(r()-.5)*.6*g)});if(a!=="both"){const m=i.map((p,v)=>({rank:p.rank,i:v})).sort((p,v)=>p.rank-v.rank);let b=n;for(const p of m.filter(v=>v.rank>t))o[p.i]=Math.max(o[p.i],b+.12),b=o[p.i];let g=n;for(const p of m.filter(v=>v.rank<t).reverse())o[p.i]=Math.max(5,Math.min(o[p.i],g-.12)),g=o[p.i]}const c=a==="both"?av([n,...o]):[n,...o].map(()=>0),l=c[0],h=a==="style"?e:a==="both"?l+e:l,d=Math.max(35,.1*h),f=ov[s.id]??0,u=i.map((m,b)=>{const g=t-m.rank,p=o[b],v=c[b+1];let x=0;if(e>0&&a==="both")x=Math.max(0,Math.round(e*(1+.1*g)+(r()-.5)*.16*e));else if(e>0&&a==="style"){const E=(r()-.5)*.5*d;x=Math.max(0,Math.round(h+g*d+E))}else a==="style"&&g>0&&f&&(x=Math.round(g*f+(r()-.5)*.5*f));const _=a==="style"?x:a==="both"?v+x:v;return{rank:m.rank,time:p,timePts:v,style:x,total:_}});if(a==="both"){const m=Math.max(20,Math.round(.03*h)),b=[...u].sort((x,_)=>x.rank-_.rank),g=b.filter(x=>x.rank>t);for(let x=g.length-2;x>=0;x--){const _=g[x+1].total+m;g[x].total<_&&(g[x].style=_-g[x].timePts,g[x].total=_)}let p=h;for(const x of g)x.total>p-m&&(x.style=Math.max(0,p-m-x.timePts),x.total=x.timePts+x.style),p=x.total;let v=h;for(const x of b.filter(_=>_.rank<t).reverse())x.total<v+m&&(x.style=v+m-x.timePts,x.total=x.timePts+x.style),v=x.total}return{player:{time:n,timePts:l,style:e,total:h},bots:u}}const Ee={halfWidth:55,meshHalfWidth:110},Mn={axisY:19.8,rIn0:9.8,rInK:.05,rOut0:12.9,rOutK:.035,flare:1.8,flareA:26,lift:1};function Td(s,t){const e=gt(t,-s.halfL,s.halfL)/s.sc,n=Math.max(0,(Math.abs(e)-Mn.flareA)/(50-Mn.flareA));return{rIn:(Mn.rIn0+Mn.rInK*e)*s.sc,rOut:(Mn.rOut0+Mn.rOutK*e+Mn.flare*n*n)*s.sc}}function uo(s,t,e){const n=Math.sin(s*127.1+t*311.7+e*74.7)*43758.5453;return n-Math.floor(n)-.5}let fo=null;function Ad(){if(fo)return fo;const s=new Ma(1.1,1),t=s.attributes.position;for(let e=0;e<t.count;e++){const n=uo(t.getX(e),t.getY(e),t.getZ(e));t.setXYZ(e,t.getX(e)*(1+n*.22),t.getY(e)*(1+uo(t.getY(e),t.getZ(e),t.getX(e))*.18),t.getZ(e)*(1+uo(t.getZ(e),t.getX(e),t.getY(e))*.22))}return s.computeVertexNormals(),s.translate(0,.55,0),fo=s,s}const os=64,hv=.42;let po=null;function uv(){if(po)return po;const s=Ad().attributes.position,t=new Float32Array(os).fill(0);for(let e=0;e<s.count;e++){const n=s.getY(e);if(n<-.05||n>1.45)continue;const i=s.getX(e),r=s.getZ(e),a=Math.hypot(i,r),o=Math.atan2(r,i);for(let c=0;c<os;c++){let l=c/os*Math.PI*2-o;l=Math.atan2(Math.sin(l),Math.cos(l)),!(Math.abs(l)>hv)&&(t[c]=Math.max(t[c],a*Math.cos(l)))}}return po=t,t}function Ed(s,t,e){const n=uv(),i=Math.cos(s.rot),r=Math.sin(s.rot),a=t*i-e*r,o=t*r+e*i,c=Math.hypot(a,o);let l=Math.atan2(o,a)/(Math.PI*2);l=(l-Math.floor(l))*os;const h=Math.floor(l)%os,d=l-Math.floor(l),f=(n[h]*(1-d)+n[(h+1)%os]*d)*s.sc,u=c>1e-6?1/c:0;return{depth:f-c,nx:t*u,nz:e*u}}class Rd{constructor(t,e=cr.utah,n="race"){this.seed=t>>>0,this.theme=e,this.format=n,this.length=wd(n).length;const i=n==="bigair"||n==="halfpipe",r=Jn(this.seed);this.ph=Array.from({length:8},()=>r()*Math.PI*2),this.jumps=[];let a=170+r()*80;if(n==="bigair")this.jumps.push({s:230,x:this.centerAt(230),w:30,big:!0});else if(!i)for(;a<this.length-220;)this.jumps.push({s:a,x:this.centerAt(a)+(r()-.5)*36,w:15+r()*6}),a+=190+r()*150;for(this.drops=[],a=320+r()*160;!i&&a<this.length-300;)this.jumps.some(S=>Math.abs(S.s-a)<60)||this.drops.push({s:a,h:(4+r()*6)*e.cliffMul}),a+=380+r()*260;const o=700+r()*600;!i&&o<this.length-300&&!this.jumps.some(S=>Math.abs(S.s-o)<80)&&this.drops.push({s:o,h:(12+r()*5)*Math.max(.7,e.cliffMul)}),this.crevices=[];for(let S=0;S<(i?0:4);S++){const C=250+r()*(this.length-500);this.jumps.some(I=>Math.abs(I.s-C)<50)||this.crevices.push({s:C,x:this.centerAt(C)+(r()-.5)*70,w:14+r()*12,d:2.5+r()*2})}this.bridges=[];let c=340+r()*160;for(;!i&&c<this.length-320;)!this.jumps.some(C=>Math.abs(C.s-c)<80)&&!this.drops.some(C=>Math.abs(C.s-c)<90)?(this.bridges.push({s:c,h:6+r()*2.5,gapX:this.centerAt(c)+(r()-.5)*42,gapW:12+r()*4,len:21,lipH:2.2}),c+=420+r()*260):c+=70+r()*40;this.spines=[];for(let S=0;S<(i?0:2);S++){const C=420+r()*700;C>this.length-340||this.spines.push({s0:C,s1:C+220+r()*200,xOff:(r()<.5?-1:1)*(10+r()*18),h:3.2+r()*2.4,w:7+r()*4})}this.pipes=[],n==="halfpipe"&&this.pipes.push({s0:140,s1:this.length-200,off:0,w:14,d:7.4});for(let S=0;S<24&&this.pipes.length===0&&!i;S++){const C=380+r()*(this.length-800),I=C+80+r()*35;!this.jumps.some(U=>U.s>C-35&&U.s<I+45)&&!this.drops.some(U=>U.s>C-35&&U.s<I+45)&&!this.bridges.some(U=>U.s>C-55&&U.s<I+60)&&!this.spines.some(U=>C<U.s1+30&&I>U.s0-30)&&this.pipes.push({s0:C,s1:I,off:(r()-.5)*12,w:13+r()*2,d:6.8+r()*1.2})}this.ledges=[];for(let S=0;S<14&&this.ledges.length<2&&!i;S++){const C=300+r()*(this.length-700),I=C+100+r()*60;!this.jumps.some(U=>U.s>C-30&&U.s<I+30)&&!this.bridges.some(U=>U.s>C-55&&U.s<I+55)&&!this.pipes.some(U=>C<U.s1+50&&I>U.s0-50)&&!this.ledges.some(U=>C<U.s1+80&&I>U.s0-80)&&this.ledges.push({s0:C,s1:I,side:r()<.5?-1:1,h:(3.5+r()*2.5)*Math.max(.6,e.cliffMul),uFace:.34+r()*.2})}this.obstacles=[];const l=[],h=[],d=(S,C,I)=>{const k=.8+r()*.9,U=-C;l.push({x:S,z:U,sc:k,rot:r()*Math.PI*2}),I&&this.obstacles.push({x:S,z:U,r:1.1*k,kind:"tree"})},f=(S,C,I)=>{const k=1.1+r()*1.6,U=-C,z=r()*Math.PI*2;h.push({x:S,z:U,sc:k,rot:z}),I&&this.obstacles.push({x:S,z:U,r:1.35*k,kind:"rock",sc:k,rot:z})},u=S=>this.bridges.some(C=>Math.abs(C.s-S)<C.len+12),m=S=>this.jumps.some(C=>Math.abs(C.s-S)<(C.big?150:50)),b=e.treeMul,g=gt(11/Math.max(.05,b),6,200);for(const S of[-1,1]){let C=70+r()*8;for(;C<this.length+60;){const k=.94+Xe(C*.01+S*3.3,this.seed+5)*.08+r()*.08;d(this.centerAt(C)+S*Ee.halfWidth*k,C,k<1),r()<.65&&d(this.centerAt(C)+S*Ee.halfWidth*(k+.1+r()*.1),C+3+r()*4,!1),C+=g*(.7+r()*.6)}}const p=S=>this.pipes.some(C=>S>C.s0-30&&S<C.s1+30),v=(S,C)=>this.pipes.some(I=>C>I.s0-30&&C<I.s1+30&&Math.abs(S-(this.centerAt(C)+I.off))<I.w*2.1),x=(S,C)=>this.ledges.some(I=>{if(C<I.s0-20||C>I.s1+20)return!1;const k=(S-this.centerAt(C))/Ee.halfWidth*I.side;return Math.abs(k-I.uFace)<.09});if(this.glades=[],n==="glade")for(const S of[-1,1])this.glades.push({s0:150,s1:this.length-170,side:S,depth:.9,pathPh:r()*Math.PI*2,pathFreq:.018+r()*.01});let _=b<.3||i||n==="glade"?this.length:220+r()*200;for(;_<this.length-260;)!u(_)&&!m(_)&&!p(_)?(this.glades.push({s0:_,s1:_+120+r()*140,side:r()<.5?-1:1,depth:.46+r()*.22,pathPh:r()*Math.PI*2,pathFreq:.03+r()*.02}),_+=340+r()*300):_+=80;for(const S of this.glades){const C=I=>{const k=(I-S.s0)*S.pathFreq+S.pathPh;return 1-S.depth*(.5+.3*Math.sin(k)+.17*Math.sin(k*2.7+1.3))};for(let I=S.s0;I<S.s1;I+=4.2){const k=C(I),U=.065+.02*Math.sin(I*.05+S.pathPh);for(let z=0;z<5;z++){const X=1.02-S.depth*r()*1.04;if(Math.abs(X-k)<U)continue;const G=this.centerAt(I)+S.side*Ee.halfWidth*X+(r()-.5)*3,rt=I+(r()-.5)*4.2;x(G,rt)||d(G,rt,X<1)}}}const E=i?0:Math.round(34*gt(b,.1,1.2));for(let S=0;S<E;S++){const C=150+r()*(this.length-280),I=this.centerAt(C)+(r()-.5)*Ee.halfWidth*1.1;m(C)||u(C)||v(I,C)||x(I,C)||d(I,C,!0)}const T=gt(Math.round(4*e.rockMul),2,8);for(let S=0;S<T;S++){const C=200+r()*(this.length-420);if(u(C)||m(C))continue;const I=r()<.5?-1:1,k=this.centerAt(C)+I*Ee.halfWidth*(.7+r()*.22),U=4+Math.floor(r()*5);for(let z=0;z<U;z++){const X=k+(r()-.5)*11,G=C+(r()-.5)*15;v(X,G)||x(X,G)||f(X,G,!0)}}const w=i?0:gt(Math.round(26*e.rockMul),8,55);for(let S=0;S<w;S++){const C=160+r()*(this.length-320),I=this.centerAt(C)+(r()-.5)*Ee.halfWidth*1.4;m(C)||u(C)||v(I,C)||x(I,C)||f(I,C,Math.abs(I-this.centerAt(C))<Ee.halfWidth)}this.logs=[];const P=i?0:7+Math.floor(r()*5);for(let S=0;S<P;S++){const C=180+r()*(this.length-360),I=this.centerAt(C)+(r()-.5)*Ee.halfWidth*1.15;if(m(C)||u(C)||v(I,C)||x(I,C))continue;const k=r()*Math.PI*2,U=.038+r()*.018;this.logs.push({x:I,z:-C,rot:k,sc:U,kind:"log_small"});for(const z of[-30,30])this.obstacles.push({x:I+Math.cos(k)*z*U,z:-C-Math.sin(k)*z*U,r:22*U,kind:"log"})}this.grindLogs=[];for(const S of this.drops){if(this.grindLogs.length>=2)break;if(S.h<3.5||S.h>10||S.s<320||S.s>this.length-320||u(S.s)||p(S.s))continue;const C=this.centerAt(S.s)+(r()<.5?-1:1)*(7+r()*13);if(x(C,S.s))continue;const I=(r()-.5)*.14,k=.05+r()*.012,U=100*k,z=S.s-2.5,X=this.heightAt(C,-z)+1.15;this.grindLogs.push({x:C,s0:z,ax:Math.sin(I),az:Math.cos(I),sc:k,len:U,topY:X,bumpH:.9})}if(this.boostGates=[],n==="bigair"){const S=this.jumps[0];for(const C of[150,110,70])this.boostGates.push({s:S.s-C,x:this.centerAt(S.s-C),w:2.2})}else if(n==="halfpipe"){const S=this.pipes[0];for(const C of[190,260,330])this.boostGates.push({s:C,x:this.centerAt(C)+S.off,w:2.2})}else if(n!=="glade"){let S=260+r()*120;for(;S<this.length-200;){const C=!m(S)&&!u(S)&&!p(S)&&!this.drops.some(k=>Math.abs(k.s-S)<50),I=this.centerAt(S)+(r()-.5)*16;C&&!x(I,S)?(this.boostGates.push({s:S,x:I,w:2.2}),S+=200+r()*140):S+=45}}const M=(S,C)=>this.boostGates.some(I=>Math.abs(C-I.s)<5&&Math.abs(S-I.x)<I.w+2);this.obstacles=this.obstacles.filter(S=>!M(S.x,-S.z));for(const S of[l,h])for(let C=S.length-1;C>=0;C--)M(S[C].x,-S[C].z)&&S.splice(C,1);for(let S=0,C=i?0:1+(r()<.55?1:0),I=0;S<C&&I<40;I++){const k=280+r()*(this.length-620),U=this.centerAt(k)+(r()-.5)*Ee.halfWidth*.8;if(m(k)||u(k)||v(U,k)||x(U,k))continue;const z=(r()-.5)*.4,X=.48+r()*.07,G=Math.sin(z),rt=Math.cos(z),it=50*X,ht=st=>this.heightAt(U+G*st,-k+rt*st),Et=ht(it),Nt=ht(-it);let Y=!0;for(let st=-4;st<=4&&Y;st++){const Z=st/5*it,St=(Et+Nt)/2+(Et-Nt)/2*(Z/it),yt=ht(Z)-St;(yt<-2.4||yt>1.6)&&(Y=!1)}if(!Y)continue;S++,this.logs.push({x:U,z:-k,rot:z,sc:X,kind:"log_hollow"});const tt=(st,Z)=>{const St=Z-k,yt=st-U,Dt=yt*G-St*rt,Zt=yt*rt+St*G;return Math.abs(Dt)<it+3&&Math.abs(Zt)<16*X+2};this.obstacles=this.obstacles.filter(st=>st.kind==="log"||!tt(st.x,-st.z));for(const st of[l,h])for(let Z=st.length-1;Z>=0;Z--)tt(st[Z].x,-st[Z].z)&&st.splice(Z,1)}this.hollowTubes=this.logs.filter(S=>S.kind==="log_hollow").map(S=>{const C=Math.sin(S.rot),I=Math.cos(S.rot),k=50*S.sc,U=this.heightAt(S.x+C*k,S.z+I*k),z=this.heightAt(S.x-C*k,S.z-I*k);return S.pitch=Math.atan2(U-z,2*k),S.axY0=(U+z)/2+Mn.lift,S.posY=S.axY0-Mn.axisY*S.sc*Math.cos(S.pitch),{x:S.x,s0:-S.z,ax:C,az:I,sc:S.sc,halfL:k,axY0:S.axY0,axSlope:(U-z)/(2*k)}});const y=this.centerAt(4);this.apron={cx:y,lipS:4+Us.lipDz,lipY:this.heightAt(y,-4)-Us.lipDrop},this.obstacles.sort((S,C)=>-S.z- -C.z),this._treeXf=l,this._rockXf=h}centerAt(t){const e=gt(t,0,this.length);return 24*Math.sin(e*.0081+this.ph[0])+16*Math.sin(e*.0031+this.ph[1])}heightAt(t,e){const n=-e,i=gt(n,0,this.length);let r;n<0||n<=this.length?r=n:r=this.length+(n-this.length)*.12;let a=-.5*r+16*Math.sin(i*.011+this.ph[2])+9*Math.sin(i*.0047+this.ph[3]);const o=this.centerAt(n),c=(t-o)/Ee.halfWidth;a+=5*c*c;const l=Math.abs(c);if(l>.85){const u=l-.85;a+=130*(1-Math.exp(-u*u*.5)),a+=ks(t*.006,i*.006,this.seed+91,3)*42*Kt(.95,1.9,l)}const h=Kt(25,90,n);a+=5.5*this.theme.roughMul*ks(t*.017,n*.017,this.seed,3)*h;const d=Kt(.25,.75,Xe(n*.004+7.7,this.seed)*.5+.5);a+=1.3*this.theme.mogulMul*ks(t*.085,n*.085,this.seed+31,2)*d*h;for(const u of this.jumps){const m=1-((t-u.x)/u.w)**2;if(m<=0)continue;if(u.big){const g=(n-(u.s-80))/60;g>0&&g<=1&&(a-=9*g*m);const p=(n-(u.s-20))/20;if(p>0&&p<=1)a+=(-9+16*p*p)*m;else if(n>u.s&&n<u.s+120){const v=(n-u.s)/120;a+=m*(2*(1-v)-7*Math.sin(Math.PI*v))}continue}const b=(n-(u.s-16))/16;b>0&&b<=1?a+=5.2*b*b*m:n>u.s&&n<u.s+34&&(a-=2.8*(1-(n-u.s)/34)*m)}const f=Kt(.3,.7,Xe(i*.0031+3.3,this.seed+12)*.5+.5);a+=.85*Math.sin(t*.34+i*.004+this.ph[5])*f*h;for(const u of this.drops)a-=u.h*Kt(0,2.5,n-u.s);for(const u of this.bridges){const m=(n-u.s)/u.len;if(Math.abs(m)<1){const b=.5+.5*Math.cos(m*Math.PI),g=(t-u.gapX)/(u.gapW/2),p=Math.abs(g),v=p<1?Math.cos(g*Math.PI/2)**2:0,x=p>.92?u.lipH*Kt(.92,1.12,p)*(p>1.12?Math.exp(-(((p-1.12)/1.3)**2)):1):0;a+=(u.h*(1-v)+x)*b}}for(const u of this.spines)if(n>u.s0-50&&n<u.s1+50){const m=Kt(u.s0-40,u.s0,n)*(1-Kt(u.s1,u.s1+40,n)),b=(t-(o+u.xOff))/u.w;a+=u.h*m*Math.exp(-b*b)}for(const u of this.pipes)if(n>u.s0-40&&n<u.s1+40){const m=Kt(u.s0-35,u.s0+14,n)*(1-Kt(u.s1-14,u.s1+35,n)),b=Math.abs((t-(o+u.off))/u.w);let g;if(b<=.4)g=-.6;else if(b<1){const p=(b-.4)/.6;g=-.6+p*p}else b<=1.35?g=.4:g=.4*(1-Kt(1.35,2,b));a+=u.d*m*g}for(const u of this.ledges)if(n>u.s0-40&&n<u.s1+40){const m=Kt(u.s0-30,u.s0+15,n)*(1-Kt(u.s1-15,u.s1+30,n)),b=u.uFace+Xe(n*.02,this.seed+7)*.05;a+=u.h*m*Kt(b,b+.045,c*u.side)}for(const u of this.grindLogs){const m=n-(u.s0+1),b=t-u.x,g=(b*b+m*m)/10.6;g<4&&(a+=u.bumpH*Math.exp(-g))}for(const u of this.glades)if(n>u.s0-10&&n<u.s1+10){const m=c*u.side,b=Kt(1-u.depth-.06,1-u.depth+.04,m)*(1-Kt(1,1.1,m));if(b>0){const g=Kt(u.s0-8,u.s0+14,n)*(1-Kt(u.s1-14,u.s1+8,n));a+=1.15*b*g*ks(t*.1,i*.1,this.seed+53,2)}}for(const u of this.crevices){const m=(n-u.s)/3.2,b=(t-u.x)/u.w;Math.abs(m)<3&&Math.abs(b)<1&&(a-=u.d*Math.exp(-m*m)*(1-b*b))}if(this.hollowTubes)for(const u of this.hollowTubes){const m=n-u.s0,b=t-u.x,g=b*u.ax-m*u.az,p=Math.abs(g);if(p>u.halfL+5)continue;const v=Math.abs(b*u.az+m*u.ax),{rOut:x}=Td(u,g);if(v>x+1)continue;const _=u.axY0-Mn.lift+gt(g,-u.halfL,u.halfL)*u.axSlope;if(_<=a)continue;const E=(1-Kt(u.halfL,u.halfL+5,p))*(1-Kt(x-1.5,x+1,v));a+=(_-a)*E}if(this.apron){const u=this.apron,m=n-u.lipS;m>0&&m<Us.blend&&Math.abs(t-u.cx)<Us.halfW&&(a=Math.max(a,ge(u.lipY,a,Kt(0,1,m/Us.blend))))}return a}pipeAt(t,e){for(const n of this.pipes){if(e<n.s0-35||e>n.s1+35)continue;const i=Kt(n.s0-35,n.s0+14,e)*(1-Kt(n.s1-14,n.s1+35,e));if(!(i<.55))return{q:(t-(this.centerAt(e)+n.off))/n.w,env:i,p:n,lipQ:.97}}for(const n of this.bridges){const i=(e-n.s)/n.len;if(Math.abs(i)>=1)continue;const r=.5+.5*Math.cos(i*Math.PI);if(!(r<.3))return{q:(t-n.gapX)/(n.gapW/2),env:r,p:n,lipQ:.8}}return null}groundAt(t,e){const n=this.heightAt(t,e);return this.surface?Math.max(n,this.surface(t,e)):n}boostGateAt(t,e,n){for(const i of this.boostGates)if(i.s>e&&i.s<=n&&Math.abs(t-i.x)<i.w)return i;return null}launchCapAt(t){for(const e of this.jumps)if(e.big&&Math.abs(t-e.s)<25)return 15;return 9}groundNormalAt(t,e,n=new L){const r=this.groundAt(t+.6,e)-this.groundAt(t-.6,e),a=this.groundAt(t,e+.6)-this.groundAt(t,e-.6);return n.set(-r,2*.6,-a).normalize()}grindAt(t,e){for(const n of this.grindLogs){const i=e-n.s0,r=t-n.x,a=i*n.az+r*n.ax,o=r*n.az-i*n.ax;if(!(a<0||a>n.len||Math.abs(o)>.8))return{along:a,lat:o,len:n.len,topY:n.topY,gx:n.x,gs0:n.s0,ax:n.ax,az:n.az,px:n.x+n.ax*a,pz:-(n.s0+n.az*a),yaw:Math.atan2(n.ax,n.az)}}return null}nearGrindEntry(t,e){for(const n of this.grindLogs){const i=e-n.s0,r=t-n.x,a=i*n.az+r*n.ax;if(!(a<-9||a>1.5)&&Math.abs(r*n.az-i*n.ax)<2.5)return!0}return!1}ledgeWallsAt(t){const e=[];for(const n of this.ledges){if(t<n.s0-30||t>n.s1+30||Kt(n.s0-30,n.s0+15,t)*(1-Kt(n.s1-15,n.s1+30,t))*n.h<1.2)continue;const r=n.uFace+Xe(t*.02,this.seed+7)*.05;e.push({x:this.centerAt(t)+n.side*r*Ee.halfWidth,side:n.side})}return e}normalAt(t,e,n=new L){const r=this.heightAt(t+.8,e)-this.heightAt(t-.8,e),a=this.heightAt(t,e+.8)-this.heightAt(t,e-.8);return n.set(-r/(2*.8),1,-a/(2*.8)).normalize()}obstaclesNear(t,e){return this.obstacles.filter(n=>-n.z>=t&&-n.z<=e)}build(t){this._buildGround(t),this._buildInstances(t),this._buildGatesAndFinish(t)}_buildGround(t){const e=new _e({vertexColors:!0});e.onBeforeCompile=b=>{b.vertexShader=b.vertexShader.replace("#include <common>",`varying vec3 vWPos;
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
          #include <dithering_fragment>`)};const n=1.7,i=6,r=74,a=235,o=13,c=[];for(let b=-a;b<-110;b+=o)c.push(b);for(let b=-110;b<-r;b+=i)c.push(b);for(let b=-r;b<=r;b+=n)c.push(b);for(let b=r+i;b<=Ee.meshHalfWidth;b+=i)c.push(b);for(let b=Ee.meshHalfWidth+o;b<=a;b+=o)c.push(b);const l=102,h=Math.round(l/n),d=new mt(this.theme.snow),f=new mt(this.theme.ice),u=new mt(this.theme.rock),m=new mt;for(let b=-60;b<this.length+180;b+=l){const g=this.centerAt(b+l/2),p=c.length,v=h+1,x=new Float32Array((p+2)*(v+2)),_=[c[0]-n,...c,c[p-1]+n],E=[];for(let I=-1;I<=v;I++)E.push(-(b+I*n*(l/(h*n))));for(let I=0;I<v+2;I++)for(let k=0;k<p+2;k++)x[I*(p+2)+k]=this.heightAt(_[k]+g,E[I]);const T=new Float32Array(p*v*3),w=new Float32Array(p*v*3),P=new Float32Array(p*v*3);let M=0;for(let I=0;I<v;I++)for(let k=0;k<p;k++){const U=c[k]+g,z=E[I+1],X=x[(I+1)*(p+2)+(k+1)];T[M*3]=U,T[M*3+1]=X,T[M*3+2]=z;const G=x[(I+1)*(p+2)+k],rt=x[(I+1)*(p+2)+(k+2)],it=x[I*(p+2)+(k+1)],ht=x[(I+2)*(p+2)+(k+1)],Et=(rt-G)/(_[k+2]-_[k]),Nt=(ht-it)/(E[I+2]-E[I]),Y=1/Math.hypot(Et,1,Nt);w[M*3]=-Et*Y,w[M*3+1]=Y,w[M*3+2]=-Nt*Y;const tt=Math.hypot(Et,Nt);m.copy(d),tt>.85?m.lerp(u,gt((tt-.85)/.9,0,1)):m.lerp(f,gt((tt-.45)/1.2,0,.35));const st=ks(U*.21,-z*.21,this.seed+77,2)*.03;P[M*3]=gt(m.r+st,0,1),P[M*3+1]=gt(m.g+st,0,1),P[M*3+2]=gt(m.b+st*1.5,0,1),M++}const y=[];for(let I=0;I<v-1;I++)for(let k=0;k<p-1;k++){const U=I*p+k;y.push(U,U+1,U+p,U+1,U+p+1,U+p)}const S=new me;S.setAttribute("position",new le(T,3)),S.setAttribute("normal",new le(w,3)),S.setAttribute("color",new le(P,3)),S.setIndex(y),S.computeBoundingSphere();const C=new ne(S,e);C.frustumCulled=!0,C.receiveShadow=!0,t.add(C)}}_buildInstances(t){this._treeXf.length;const e=new kt;new kt;const n=new Yt,i=new L(0,1,0),r=new L,a=new ms(.16,.26,1.5,7);a.translate(0,.75,0);const c=zh([[1.75,2.6,1.9],[1.3,2.3,3.3],[.85,2.1,4.6]].map(([p,v,x])=>{const _=new nr(p,v,9);return _.translate(0,x,0),_})),l=zh([[1.15,.55,3],[.78,.5,4.35],[.42,.9,5.35]].map(([p,v,x])=>{const _=new nr(p,v,9);return _.translate(0,x,0),_})),h=new _e({color:this.theme.trunk}),d=new _e({color:this.theme.foliage}),f=new _e({color:16054525}),u=this._treeXf.length,m=new hn(a,h,u),b=new hn(c,d,u),g=new hn(l,f,u);this._treeXf.forEach((p,v)=>{const x=this.heightAt(p.x,p.z)-.15;n.setFromAxisAngle(i,p.rot),r.set(p.sc,p.sc,p.sc),e.compose(new L(p.x,x,p.z),n,r),m.setMatrixAt(v,e),b.setMatrixAt(v,e),g.setMatrixAt(v,e)}),m.castShadow=b.castShadow=!0,t.add(m,b,g),this._buildRocksAndFlags(t,e,n,i,r)}_buildRocksAndFlags(t,e,n,i,r){const a=new _e({color:16054525}),o=Ad(),c=new Ma(.92,1);c.scale(1,.32,1),c.translate(0,1.18,0);const l=new _e({color:this.theme.rock,flatShading:!0}),h=new hn(o,l,this._rockXf.length),d=new hn(c,a,this._rockXf.length);this._rockXf.forEach((w,P)=>{const M=this.heightAt(w.x,w.z)-.35;n.setFromAxisAngle(i,w.rot),r.set(w.sc,w.sc*(.7+P%3*.2),w.sc),e.compose(new L(w.x,M,w.z),n,r),h.setMatrixAt(P,e),d.setMatrixAt(P,e)}),h.castShadow=!0,t.add(h,d);const f=new Yt,u=new Yt;for(const w of this.logs){const P=jn(w.kind,this.theme,w.sc);if(w.kind==="log_hollow")P.rotation.order="YXZ",P.rotation.set(-w.pitch,w.rot,0),P.position.set(w.x,w.posY,w.z),P.name="hollow_log";else{P.position.set(w.x,this.heightAt(w.x,w.z)-.28,w.z);const M=this.normalAt(w.x,w.z);f.setFromUnitVectors(i,M),u.setFromAxisAngle(i,w.rot),P.quaternion.copy(f).multiply(u)}P.traverse(M=>{M.isMesh&&(M.castShadow=!0)}),t.add(P)}for(const w of this.grindLogs){const P=jn("log_small",this.theme,w.sc),M=w.x+w.ax*(w.len/2-.5),y=-(w.s0+w.az*(w.len/2-.5));P.position.set(M,w.topY-20.6*w.sc,y),P.rotation.y=Math.atan2(w.az,w.ax),P.traverse(S=>{S.isMesh&&(S.castShadow=!0)}),t.add(P)}const m=new ms(.05,.05,2.2,4);m.translate(0,1.1,0);const b=new wn(.7,.45);b.translate(.4,1.8,0);const g=[];for(let w=90;w<this.length;w+=90)g.push(w);const p=new _e({color:2896960}),v=new _e({color:14042415,side:Oe}),x=new _e({color:3108822,side:Oe}),_=new hn(m,p,g.length*2),E=new hn(b,v,g.length),T=new hn(b,x,g.length);if(g.forEach((w,P)=>{const M=this.centerAt(w);for(const[y,S]of[[0,-1],[1,1]]){const C=M+S*17,I=-w;e.compose(new L(C,this.heightAt(C,I),I),n.identity(),r.set(1,1,1)),_.setMatrixAt(P*2+y,e),(S<0?E:T).setMatrixAt(P,e)}}),t.add(_,E,T),this.gateFx=[],this._gateT=0,this.boostGates.length){const w=this.boostGates,P=new L(0,1,0),M=new mt(this.theme.eventB??16111470),y=new _e({color:16777215,emissive:M.clone().multiplyScalar(.35),side:Oe}),S=new hn(m,p,w.length*2),C=new hn(b,y,w.length*2);this._gateFlags=C,this._gateAccent=M;const I=1.4,k=.42,U=6,z=(X,G,rt,it)=>{const ht=[],Et=[];for(const Y of[-1,1]){const tt=ht.length/3;for(let st=0;st<=U;st++){const Z=st/U,St=X+Y*rt*(1-Z),yt=G+it+I*Z;for(const Dt of[0,k]){const Zt=yt-Dt;ht.push(St,this.heightAt(St,-Zt)+.07,-Zt)}}for(let st=0;st<U;st++){const Z=tt+st*2;Y<0?Et.push(Z,Z+2,Z+1,Z+1,Z+2,Z+3):Et.push(Z,Z+1,Z+2,Z+1,Z+3,Z+2)}}const Nt=new me;return Nt.setAttribute("position",new ce(ht,3)),Nt.setIndex(Et),Nt};w.forEach((X,G)=>{const rt=[];for(const it of[0,-1]){const ht=new Re({color:3718648,transparent:!0,opacity:.95,depthWrite:!1,side:Oe,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});rt.push(ht),t.add(new ne(z(X.x,X.s-.3,X.w-.35,it),ht))}this.gateFx.push({mats:rt,flash:-1});for(const[it,ht]of[[0,-1],[1,1]]){const Et=X.x+ht*X.w,Nt=-X.s,Y=new L(Et,this.heightAt(Et,Nt),Nt);e.compose(Y,n.identity(),r.set(1,1,1)),S.setMatrixAt(G*2+it,e),e.compose(Y,n.setFromAxisAngle(P,ht<0?Math.PI:0),r.set(1,1,1)),C.setMatrixAt(G*2+it,e),C.setColorAt(G*2+it,M)}}),t.add(S,C)}}pulseGates(t){if(!this.gateFx)return;this._gateT=t;let e=!1,n=0;const i=new mt(16777215);for(const[r,a]of this.gateFx.entries()){const o=a.flash>=0?Math.max(0,1-(t-a.flash)/.9):0;n=Math.max(n,o);for(const[c,l]of a.mats.entries()){const h=.5+.5*Math.sin(t*7+c*Math.PI);l.color.setHSL(.55,.95,.45+h*.45).lerp(i,o)}if(o>0||a.wasFlaring){for(const c of[r*2,r*2+1])this._gateFlags.setColorAt(c,this._gateAccent.clone().lerp(i,o));e=!0,a.wasFlaring=o>0}}e&&this._gateFlags.instanceColor&&(this._gateFlags.instanceColor.needsUpdate=!0),e&&this._gateFlags.material.emissive.copy(this._gateAccent).multiplyScalar(.35).lerp(i,n)}flashGate(t){const e=this.boostGates.indexOf(t);e>=0&&this.gateFx[e]&&(this.gateFx[e].flash=this._gateT)}_buildGatesAndFinish(t){this.gateLanes=[];const e=this.centerAt(4);for(let g=0;g<5;g++)this.gateLanes.push({x:e+(g-2)*6.5,z:-4});const n=this.length,i=this.centerAt(n),r=jn("finish_line",this.theme);r.scale.set(.34,.22,.22);const a=Math.min(this.heightAt(i-17,-n),this.heightAt(i+17,-n));r.position.set(i,a-.25,-n),t.add(r),this.finishSigns=[];const o=(g,p,v)=>{const x=document.createElement("canvas");x.width=g,x.height=p;const _=x.getContext("2d");v(_,g,p);const E=new _a(x);return E.colorSpace=xe,E},c="#"+new mt(this.theme.eventA??14042415).getHexString(),l="#"+new mt(this.theme.eventB??16111470).getHexString(),h=new Re({map:o(1024,160,(g,p,v)=>{g.fillStyle="#0a0e16",g.fillRect(0,0,p,v);for(let x=0;x<p;x+=32)for(const _ of[0,v-20])g.fillStyle=x/32%2?"#e8edf4":"#12161e",g.fillRect(x,_,32,20);g.font="bold 96px sans-serif",g.textAlign="center",g.textBaseline="middle",g.fillStyle=l,g.fillText("FINISH",p/2,v/2+4)})}),d=new ne(new wn(17.5,2.9),h);d.position.set(i,a+7.35,-n+2),t.add(d),this.finishSigns.push(h);for(const g of[-1,1]){const p=new Re({map:o(128,640,(x,_,E)=>{x.fillStyle="#0a0e16",x.fillRect(0,0,_,E),x.strokeStyle=c,x.lineWidth=10,x.strokeRect(8,8,_-16,E-16),x.font="bold 78px sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillStyle=l;const T="FINISH";for(let w=0;w<T.length;w++)x.fillText(T[w],_/2,70+w*((E-130)/(T.length-1)))})}),v=new ne(new wn(1.7,8.2),p);v.position.set(i+g*13.9,a+5.4,-n+1.6),t.add(v),this.finishSigns.push(p)}const f=new _e({color:2304051}),u=(g,p,v,x,_)=>{let E=-1/0,T=1/0;for(const[w,P]of[[-x,-_],[x,-_],[-x,_],[x,_]]){const M=this.heightAt(p+w,v+P);M>E&&(E=M),M<T&&(T=M)}if(g.position.set(p,E-.15,v),E-T>.8){const w=E-T+1.2,P=new ne(new Ke(x*1.9,w,_*1.9),f);P.position.set(p,E-.15-w/2+.1,v),t.add(P)}t.add(g)},m=jn("podium",this.theme);m.scale.setScalar(.06),m.rotation.y=.6,u(m,i-20,-n-14,3.2,2.2);for(const g of[-1,1]){const p=jn("bleachers",this.theme);p.scale.set(.24,.2,.13),p.rotation.y=-g*(Math.PI/2),u(p,i+g*27,-n+20,6.4,12.2)}for(const[g,p,v]of[[i-32,-n-4,.13],[i+30,-n-10,.15]]){const x=jn("barrier",this.theme);x.scale.setScalar(v),u(x,g,p,50*v*.9,50*v*.9)}const b=jn("ski_lift",this.theme);b.scale.setScalar(.16),b.rotation.y=.35,u(b,i+16,-n-40,8,8)}}function dv(s){const t=new Map,e=new Map,n=s.clone();return Cd(s,n,function(i,r){t.set(r,i),e.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=t.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Cd(s,t,e){e(s,t);for(let n=0;n<s.children.length;n++)Cd(s.children[n],t.children[n],e)}const $s=.0105,Vr={boarder:{clusters:[["#121214","pants",!0],["#403f2f","jacket",!0],["#6e5036","hair",!0],["#2f2a29","hair",!1],["#593e26","hair",!1],["#8d684e","hair",!1],["#d49274","skin",!0],["#421c95","accessory",!0],["#dacfc5","jacket2",!0],["#2a66db","accessory",!1]]},skier:{clusters:[["#1b191b","accessory",!0],["#222023","pants",!0],["#b42f2b","jacket",!0],["#151214","pants",!1],["#8b211f","jacket",!1],["#342e2f","hat",!0],["#391b1c","hair",!0],["#602423","jacket",!1],["#85685c","skin",!1],["#c6a495","skin",!0]]},tuber:{clusters:[["#1f2736","jacket2",!0],["#1a1a1f","pants",!1],["#131317","pants",!1],["#232125","pants",!0],["#29303e","jacket2",!1],["#ed6025","jacket",!0],["#efae94","skin",!0],["#983a11","jacket",!1],["#583b31","hair",!0],["#a0786a","skin",!1]]}},fv={ski:"skier",board:"boarder",sled:"tuber"},Qi={jacket2:[16053492,1777188,16767306,8052952,15764526,8959976,2830138,14696574],pants:[1447964,2830136,2372679,3945512,4858928,3357230,1976868],hat:[14042415,16098851,4114027,3718648,14696574,16053492,1777188],accessory:[16098851,3718648,14696574,4114027,12595240,16053492,8015824],skin:[15911339,15382672,14394747,13209443,11104325,9065779,7029286,5518109],hair:[2760728,4534296,7031332,10516014,13214812,14272928,9079440,1842210]},_c=s=>[s>>16&255,s>>8&255,s&255],$h=s=>parseInt(s.slice(1),16),al={},Jh=new Map;async function pv(){const s=new il;s.setMeshoptDecoder(sl),await Promise.all(Object.keys(Vr).map(async t=>{const[e,n]=await Promise.all([s.loadAsync(rl(t)),new Promise((m,b)=>{const g=new Image;g.onload=()=>m(g),g.onerror=b,g.src=`models/${t}-base.jpg`})]),i=1024,r=document.createElement("canvas");r.width=r.height=i;const a=r.getContext("2d",{willReadFrequently:!0});a.drawImage(n,0,0,i,i);const o=a.getImageData(0,0,i,i).data,c=Vr[t].clusters.map(([m])=>_c($h(m))),l=i*i,h=new Uint8Array(l),d=new Uint8Array(l);for(let m=0;m<l;m++){const b=o[m*4],g=o[m*4+1],p=o[m*4+2];let v=0,x=1e9;for(let _=0;_<c.length;_++){const E=c[_],T=(b-E[0])**2+(g-E[1])**2+(p-E[2])**2;T<x&&(x=T,v=_)}h[m]=v,d[m]=(b+g+p)/3}const f={};for(const[m,b,g]of Vr[t].clusters)if(g){const[p,v,x]=_c($h(m));f[b]=(p+v+x)/3}const u=Vr[t].clusters.map(([,m])=>({role:m,mainLum:f[m]??128}));al[t]={gltf:e,classIdx:h,pixLum:d,size:i,roles:u}}))}function mv(s,t,e=null){const n=Jn(t>>>0),i=r=>r[Math.floor(n()*r.length)];return{jacket:e?.jacket??s,jacket2:e?.jacket2??i(Qi.jacket2),pants:e?.pants??i(Qi.pants),hat:e?.hat??i(Qi.hat),accessory:e?.accessory??i(Qi.accessory),skin:i(Qi.skin),hair:i(Qi.hair)}}function gv(s,t){const e=s+"|"+Object.values(t).join(",");let n=Jh.get(e);if(n)return n;const{classIdx:i,pixLum:r,size:a,roles:o}=al[s],c=o.map(({role:m,mainLum:b})=>({rgb:m==="keep"?null:_c(t[m]??8947848),inv:1/Math.max(8,b)})),l=document.createElement("canvas");l.width=l.height=a;const h=l.getContext("2d"),d=h.createImageData(a,a),f=d.data,u=a*a;for(let m=0;m<u;m++){const b=c[i[m]],g=Math.min(1.85,(r[m]+3)*b.inv);f[m*4]=Math.min(255,b.rgb[0]*g),f[m*4+1]=Math.min(255,b.rgb[1]*g),f[m*4+2]=Math.min(255,b.rgb[2]*g),f[m*4+3]=255}return h.putImageData(d,0,0),n=new _a(l),n.flipY=!0,n.colorSpace=xe,Jh.set(e,n),n}function bv(s,t,e,n=null){const i=fv[s]??"boarder",r=al[i],a=dv(r.gltf.scene),o=mv(t,e,n);let c=null;a.traverse(T=>{T.isSkinnedMesh&&(c=T)}),c.material=new _e({map:gv(i,o)}),c.castShadow=!0,c.frustumCulled=!1,a.updateMatrixWorld(!0);const l={};a.traverse(T=>{T.isBone&&(l[T.name]=T)});const h=new Yt;a.getWorldQuaternion(h);const d=h.clone().invert(),f={x:new L(-1,0,0),y:new L(0,1,0),z:new L(0,0,-1)},u={},m=new Yt;for(const[T,w]of Object.entries(l)){w.getWorldQuaternion(m);const M=d.clone().multiply(m).clone().invert();u[T]={localQ:w.quaternion.clone(),localPos:w.position.clone(),axes:{x:f.x.clone().applyQuaternion(M).normalize(),y:f.y.clone().applyQuaternion(M).normalize(),z:f.z.clone().applyQuaternion(M).normalize()},worldRelInv:M}}const b=T=>{const w=l[`Left${T}`],P=l[`Right${T}`],M=new L;return w.getWorldPosition(M),-M.x>=0?{1:w,[-1]:P}:{1:P,[-1]:w}},g=b("Arm"),p=b("ForeArm"),v=b("Hand"),x=b("UpLeg"),_=b("Leg"),E=b("Foot");return{root:a,bones:l,rest:u,mesh:c,palette:o,sided:{arms:g,forearms:p,hands:v,feet:E,legs:_,upLegs:x}}}const _v=.41,xv=.39,Qh=new Map,Zh=new Map;function es(s){let t=Zh.get(s);return t||(t=new _e({color:s}),Zh.set(s,t)),t}function Sn(s,t){let e=Qh.get(s);return e||(e=t(),Qh.set(s,e)),e}function Vn(s,t,e,n=4,i=12){return Sn(`cap:${s}`,()=>new $c(t,e,n,i))}function vv(s,t,e=16){return Sn(`lathe:${s}`,()=>{const n=new xa(t.map(([i,r])=>new vt(i,r)),e);return n.computeVertexNormals(),n})}function Mv(s,t,e=12,n=10){return Sn(`sph:${s}`,()=>new ar(t,e,n))}const Ae=(s,t)=>new ne(s,t);function Pd(s){const t=new ve,e=es(s.deck),n=es(s.accent),i=es(2895928),r=es(1316637);if(s.type==="ski")for(const a of[-.175,.175]){const o=Ae(Vn("skibase",.075,1.74),r);o.rotation.x=Math.PI/2,o.scale.set(1,1,.16),o.position.set(a,.008,.05);const c=Ae(Vn("ski",.068,1.72),e);c.rotation.x=Math.PI/2,c.scale.set(1,1,.22),c.position.set(a,.024,.05);const l=Ae(Vn("skiband",.05,.22),n);l.rotation.x=Math.PI/2,l.scale.set(1,1,.2),l.position.set(a,.036,-.6);const h=Ae(Sn("bind",()=>new Ke(.13,.08,.36)),i);h.position.set(a,.05,.05),t.add(o,c,l,h)}else if(s.type==="board"){const a=Ae(Vn("boardbase",.205,1.32),r);a.rotation.x=Math.PI/2,a.scale.set(1,1,.085),a.position.y=.02;const o=Ae(Vn("board",.19,1.3),e);o.rotation.x=Math.PI/2,o.scale.set(1,1,.115),o.position.y=.035;const c=Ae(Vn("bstripe",.125,1.14),n);c.rotation.x=Math.PI/2,c.scale.set(1,1,.12),c.position.y=.048,t.add(a,o,c);for(const[l,h]of[[-.35,-Math.PI/2+.32],[.35,-Math.PI/2-.12]]){const d=Ae(Sn("bbind",()=>new Ke(.17,.05,.33)),i);d.position.set(0,.065,l),d.rotation.y=h,t.add(d)}}else if(s.id==="sled-saucer"){const a=Ae(vv("saucer",[[0,.04],[.3,.05],[.55,.09],[.7,.17],[.74,.24]],18),new _e({color:s.deck,side:Oe})),o=Ae(Sn("srim",()=>new Qc(.72,.045,8,18)),n);o.rotation.x=Math.PI/2,o.position.y=.24;const c=Ae(Mv("shandle",.05),n);c.position.set(-.5,.16,0);const l=c.clone();l.position.x=.5,t.add(a,o,c,l)}else{const a=Ae(Sn("hull",()=>new Ke(.5,.1,1.3)),e);a.position.set(0,.17,.1);const o=Ae(Vn("snose",.24,.42),e);o.rotation.x=Math.PI/2,o.scale.set(1,1,.28),o.position.set(0,.2,-.62);const c=Ae(Vn("slip",.06,.4),n);c.rotation.z=Math.PI/2,c.scale.set(1,.8,.8),c.position.set(0,.33,-.8),t.add(a,o,c);for(const l of[-.21,.21]){const h=Ae(Sn("runner",()=>new Ke(.05,.1,1.5)),n);h.position.set(l,.06,0),t.add(h)}}return t}function yv(s){return Pd(s)}function sr(s,t,e=null){const n=new ve,i=new ve;n.add(i);const r=s.type==="sled",a=s.type==="board",o=Pd(s);a&&(o.position.y=.07),o.rotation.order="YXZ",i.add(o);let c=t>>>0;for(const M of s.id)c=c*31+M.charCodeAt(0)>>>0;const l=bv(s.type,t,c,e),h=new ve;h.rotation.y=Math.PI,h.scale.setScalar($s),h.add(l.root),i.add(h);const d={x:new L(-1,0,0),y:new L(0,1,0),z:new L(0,0,-1)},f=M=>{const y=M.clone().invert();return{x:d.x.clone().applyQuaternion(y).normalize(),y:d.y.clone().applyQuaternion(y).normalize(),z:d.z.clone().applyQuaternion(y).normalize()}},u={joints:{},char:l},m=(M,y,S,C=null)=>{y&&(u.joints[M]={bone:y,restLocal:y.quaternion.clone(),axes:f(S),offsetQ:C})},b=M=>l.rest[M.name].worldRelInv.clone().invert(),g=l.bones;m("hips",g.Hips,b(g.Hips)),g.Spine&&m("spine",g.Spine,b(g.Spine)),g.Spine01&&m("spine1",g.Spine01,b(g.Spine01)),g.Spine02&&m("chest",g.Spine02,b(g.Spine02)),g.neck&&m("neck",g.neck,b(g.neck)),g.Head&&m("head",g.Head,b(g.Head));for(const M of[-1,1]){const y=l.sided.arms[M],S=l.sided.forearms[M],C=l.sided.hands[M],I=new Yt().setFromAxisAngle(l.rest[y.name].axes.z,-M*(Math.PI/2-.18)),k=b(y).multiply(I);m("arm"+M,y,k,I);const U=k.clone().multiply(S.quaternion);m("fore"+M,S,U);const z=U.clone().multiply(C.quaternion);m("hand"+M,C,z),m("upleg"+M,l.sided.upLegs[M],b(l.sided.upLegs[M])),m("leg"+M,l.sided.legs[M],b(l.sided.legs[M])),m("foot"+M,l.sided.feet[M],b(l.sided.feet[M]))}l.root.updateWorldMatrix(!0,!0),u.ik={};for(const M of[-1,1]){const y=l.sided.upLegs[M],S=l.sided.legs[M],C=l.sided.feet[M],I=y.getWorldPosition(new L),k=S.getWorldPosition(new L),U=C.getWorldPosition(new L);u.ik[M]={upleg:y,leg:S,foot:C,L1:I.distanceTo(k),L2:k.distanceTo(U),uplegRestQ:y.getWorldQuaternion(new Yt),legRestQ:S.getWorldQuaternion(new Yt),footRestQ:C.getWorldQuaternion(new Yt),dirThighRest:k.clone().sub(I).normalize(),dirCalfRest:U.clone().sub(k).normalize()}}const p=g.Hips.parent,v=new Yt;p.getWorldQuaternion(v);const x=new Yt;l.root.getWorldQuaternion(x),u.hipsParentInv=x.invert().multiply(v).invert(),u.hipsRestPos=g.Hips.position.clone();const _=()=>({rotation:{x:0,y:0,z:0},position:{x:0,y:0,z:0},userData:{}}),E={pelvis:_(),spine:_(),chest:_(),neck:_(),head:_(),legs:[{hip:_(),knee:_(),ankle:_(),index:0,side:-1},{hip:_(),knee:_(),ankle:_(),index:1,side:1}],arms:[{shoulder:_(),elbow:_(),wrist:_(),side:-1},{shoulder:_(),elbow:_(),wrist:_(),side:1}],poles:[]};if(s.type==="ski"){const M=es(3817548);u.poleStab=[];for(const y of[-1,1]){const S=l.sided.hands[y],C=new ve,I=b(S);C.quaternion.copy(I.invert()).multiply(new Yt().setFromAxisAngle(new L(0,1,0),-Math.PI)),C.scale.setScalar(1/$s),S.add(C),u.poleStab.push({hand:S,holder:C});const k=new ve,U=Ae(Sn("pole",()=>new ms(.011,.011,1.05,5)),M);U.position.y=-.38;const z=Ae(Sn("basket",()=>new nr(.045,.03,8)),M);z.position.y=-.85;const X=Ae(Vn("grip",.02,.06),es(s.accent));X.position.y=.05,k.add(U,z,X),C.add(k),E.poles.push(k)}}const T=new ne(new va(.8,16),new Re({color:728108,transparent:!0,opacity:.13,depthWrite:!1}));T.rotation.x=-Math.PI/2,n.add(T);const w=r?null:a?{[-1]:{pos:new L(0,.175,-.35),yaw:-Math.PI/2+.32},1:{pos:new L(0,.175,.35),yaw:-Math.PI/2-.12}}:{1:{pos:new L(.175,.2,.03),yaw:0},[-1]:{pos:new L(-.175,.2,.03),yaw:0}},P={root:n,rig:i,gearGroup:o,parts:E,shadow:T,char:l,ctl:u,footAnchors:w,isSled:r,isBoard:a,type:s.type,isSaucer:s.id==="sled-saucer",baseBodyYaw:a?-Math.PI/2:0,gearYawBase:0,_brakeSmooth:0,_brakeSide:1,_wasBraking:!1,_s:{tuck:0,brakeIn:0,steer:0,stumble:0,knocked:0,crouch:0,air:0,shift:0,twist:0,curl:0,sp:0,drift:0}};return Tn(P,{idle:!0,t:0,dt:1}),P}const Sv=1,mo=new Yt,tu=new L,Wr=new L,go=new L,Os=new L,jr=new L,Ai=new L,ns=new L,Xr=new L,bo=new L,eu=new kt;new kt;const Ne=new Yt,zn=new Yt,nu=new Yt,cn=new Yt,iu=new L,su=new L,wv=new Yt,ru=new L(-1,0,0),Tv=new L(0,1,0),Av=new Yt().setFromAxisAngle(new L(0,1,0),-Math.PI);function qr(s,t,e){return bo.crossVectors(t,e).normalize(),ns.crossVectors(e,bo).normalize(),eu.makeBasis(ns,e,bo),s.setFromRotationMatrix(eu)}function Qe(s,t,e,n,i){const r=s.joints[t];if(!r)return;const a=r.bone.quaternion.copy(r.restLocal);r.offsetQ&&a.multiply(r.offsetQ),n&&a.multiply(mo.setFromAxisAngle(r.axes.y,n)),e&&a.multiply(mo.setFromAxisAngle(r.axes.x,e)),i&&a.multiply(mo.setFromAxisAngle(r.axes.z,i))}function _o(s){const{ctl:t,parts:e}=s;if(!t)return;const n=e.pelvis;Qe(t,"hips",n.rotation.x,n.rotation.y,n.rotation.z);const i=-n.position.x/$s,r=(n.position.y-Sv)/$s,a=-n.position.z/$s;tu.set(i,r,a).applyQuaternion(t.hipsParentInv),t.joints.hips.bone.position.copy(t.hipsRestPos).add(tu);const o=e.spine.rotation,c=e.chest.rotation;Qe(t,"spine",o.x*.6,o.y*.6,o.z*.6),Qe(t,"spine1",o.x*.4+c.x*.3,o.y*.4+c.y*.3,o.z*.4+c.z*.3),Qe(t,"chest",c.x*.7,c.y*.7,c.z*.7);const l=e.neck.rotation;Qe(t,"neck",l.x*.55,l.y*.55,l.z*.55),Qe(t,"head",l.x*.45,l.y*.45,l.z*.45);for(const h of e.arms){const d=h.side;Qe(t,"arm"+d,h.shoulder.rotation.x,h.shoulder.rotation.y,h.shoulder.rotation.z),Qe(t,"fore"+d,h.elbow.rotation.x,0,0),Qe(t,"hand"+d,h.wrist.rotation.x,0,0)}if(s.footAnchors){const h=s.gearGroup;s.rig.updateWorldMatrix(!0,!1),s.rig.getWorldQuaternion(cn);const d=s.rigFold??0;if(d>.002){jr.set(-1,0,0).applyQuaternion(cn);const u=s.char.bones;for(const[m,b]of[[t.joints.hips.bone,.42],[u.Spine,.16],[u.Spine01,.16],[u.Spine02,.16],[u.neck,-.42],[u.Head,-.3]])m&&(m.parent.getWorldQuaternion(Ne),zn.setFromAxisAngle(jr,d*b),m.quaternion.premultiply(nu.copy(Ne).invert().multiply(zn).multiply(Ne)))}const f=(e.pelvis.rotation.y||0)*.55+h.rotation.y*.45;for(const u of[-1,1]){const m=t.ik[u],b=s.footAnchors[u],g=f+(s.kneeKick?s.kneeKick[u]:0);Wr.copy(b.pos).applyQuaternion(h.quaternion).add(h.position),s.rig.localToWorld(Wr),m.upleg.getWorldPosition(go),Os.subVectors(Wr,go);const p=m.L1+m.L2,v=Math.min(Math.max(Os.length(),p*.3),p*.995);Os.normalize(),jr.set(-Math.sin(g),0,-Math.cos(g)).applyQuaternion(cn),Ai.crossVectors(jr,Os),Ai.lengthSq()<1e-6&&Ai.set(-1,0,0).applyQuaternion(cn),Ai.normalize();const x=Math.acos(Math.min(1,Math.max(-1,(m.L1*m.L1+v*v-m.L2*m.L2)/(2*m.L1*v)))),_=Os.applyAxisAngle(Ai,-x);qr(Ne,Ai,_),Xr.copy(m.dirThighRest).applyQuaternion(cn),ns.copy(ru).applyQuaternion(cn),qr(zn,ns,Xr);const E=nu.copy(Ne).multiply(zn.invert()).multiply(cn).multiply(m.uplegRestQ);m.upleg.parent.getWorldQuaternion(Ne),m.upleg.quaternion.copy(Ne.invert()).multiply(E),iu.copy(go).addScaledVector(_,m.L1),su.subVectors(Wr,iu).normalize(),qr(Ne,Ai,su),Xr.copy(m.dirCalfRest).applyQuaternion(cn),ns.copy(ru).applyQuaternion(cn),qr(zn,ns,Xr);const T=wv.copy(Ne).multiply(zn.invert()).multiply(cn).multiply(m.legRestQ);m.leg.quaternion.copy(Ne.copy(E).invert()).multiply(T),Ne.setFromAxisAngle(Tv,b.yaw);const w=zn.copy(cn).multiply(h.quaternion).multiply(Ne).multiply(m.footRestQ);m.foot.quaternion.copy(Ne.copy(T).invert()).multiply(w)}}else for(const h of e.legs){const d=h.side;Qe(t,"upleg"+d,h.hip.rotation.x,h.hip.rotation.y,h.hip.rotation.z),Qe(t,"leg"+d,h.knee.rotation.x,0,0),Qe(t,"foot"+d,h.ankle.rotation.x,h.ankle.rotation.y,h.ankle.rotation.z)}if(t.poleStab){s.rig.getWorldQuaternion(zn).multiply(Av);for(const h of t.poleStab)h.hand.getWorldQuaternion(Ne),h.holder.quaternion.copy(Ne.invert()).multiply(zn)}if((s.mittDrag??0)>.05){const h=t.joints["hand-1"]?.bone;h&&(s.mittWorld||(s.mittWorld=new L),h.getWorldPosition(s.mittWorld))}}function Ld(s,t){if(s<0||s>1.1)return 0;const e=(1-Math.exp(-s/.045))*Math.exp(-s/.3),n=s>.38&&s<.72?Math.sin(Math.PI*(s-.38)/.34)*.18:0;return t*(e-n)}function Tn(s,t={}){const{parts:e,isSled:n,isBoard:i}=s,r=t.t??0,a=t.dt??1/60,o=s._s,c=(V,Q,nt)=>V+(Q-V)*(1-Math.exp(-a*nt));o.tuck=c(o.tuck,t.tuck??0,5),o.brakeIn=c(o.brakeIn,t.brake??0,7),o.steer=c(o.steer,t.steer??0,6),o.stumble=c(o.stumble,t.stumble??0,6),o.knocked=c(o.knocked,t.knocked??0,9),o.crouch=c(o.crouch,t.crouch??0,10),o.air=c(o.air,t.airborne?1:0,6),o.shift=c(o.shift,t.shift??0,4.5),o.twist=c(o.twist,t.twist??0,8),o.curl=c(o.curl,t.curl??0,8),o.sp=c(o.sp,t.special?t.special.amt:0,12),o.drift=c(o.drift,t.drift??0,6),t.special&&(s._spKind=t.special.kind);const l=o.tuck,h=o.steer,d=o.stumble,f=o.knocked,u=o.crouch,m=o.air,b=o.shift,g=o.twist,p=o.curl,v=o.brakeIn,x=!!t.airborne,_=!!t.idle,E=t.speedNorm??0,T=!!t.switchRide,w=t.lookSide??1,P=T&&!i?1:0,M=i&&T?-1:1,y=o.sp,S=s._spKind,C=o.drift,I=(V,Q,nt,dt,Ft)=>{let N=V.userData._sv;N||(N=V.userData._sv={x:0,y:0,z:0,px:0,py:0,pz:0});const ot=Q[0]==="p",K=Q[1],$=ot?V.position[K]:V.rotation[Q];if(a>.2){N[Q]=0,ot?V.position[K]=nt:V.rotation[Q]=nt;return}const ft=dt*dt*(nt-$)-2*Ft*dt*N[Q];N[Q]+=ft*a;const lt=$+N[Q]*a;ot?V.position[K]=lt:V.rotation[Q]=lt},k=(V,Q,nt=13,dt=.85)=>I(V,"x",Q,nt,dt),U=(V,Q,nt=13,dt=.85)=>I(V,"y",Q,nt,dt),z=(V,Q,nt=13,dt=.85)=>I(V,"z",Q,nt,dt),X=(V,Q,nt=14,dt=.9)=>I(V,"px",Q,nt,dt),G=(V,Q,nt=14,dt=.9)=>I(V,"py",Q,nt,dt),rt=(V,Q,nt=9,dt=.7)=>I(V,"pz",Q,nt,dt),it=Math.max(-1,Math.min(1,t.longG??0)),ht=t.jolt??0;s._nph===void 0&&(s._nph=Math.random()*20);const Et=s._nph,Nt=_?.25:.5+E*.8+m*1.2,Y=(Math.sin(r*1.13+Et)+.6*Math.sin(r*2.71+Et*2))*.035*Nt,tt=(Math.sin(r*.97+Et*3)+.5*Math.sin(r*2.23+Et))*.03*Nt,st=d*Math.sin(r*11)*.32,Z=d*Math.sin(r*9+1.3)*.45,St=_?Math.sin(r*1.7)*.5+.5:0;if((t.brake??0)>0&&!s._wasBraking){const V=Math.random()<.5?-1:1;s._brakeSide=Math.abs(h)>.05?h<0?1:-1:V,s._edgeLean=Math.abs(h)>.05?h<0?1:-1:V}s._wasBraking=(t.brake??0)>0;const yt=s._brakeSmooth+=((_||x?0:v)-s._brakeSmooth)*Math.min(1,a*6),Dt=s._brakeSide*yt,Zt=n?0:yt*(s._edgeLean??1)*.42;if(z(s.rig,-h*(n?.28:i?.58:.24)*(1-l*.25)*(1-yt*.6)+Zt+st*.4+tt*.4+f*s._brakeSide*1.35,6.5,.6),n)U(s.gearGroup,Dt*.25);else{const V=i?-h*.3*(1-yt):0;U(s.gearGroup,s.gearYawBase+Dt*(i?1.57:1.45)+(i?V:h*-.12),12,.8),i&&(X(s.gearGroup,-Math.sin(V)*.42,12,.8),rt(s.gearGroup,.42*(1-Math.cos(V)),12,.8));const Q=s.gearGroup.rotation.y,nt=s.rig.rotation.z,dt=(1-f)*(i?1:yt),Ft=-yt*(s._edgeLean??1)*(i?.22:.15),N=i?-h*.14*(1-l*.25)*(1-yt*.6):0;z(s.gearGroup,(N+Ft-nt*Math.cos(Q))*dt,7,.6),k(s.gearGroup,nt*Math.sin(Q)*dt,9,.7)}if(n&&s.isSaucer){G(e.pelvis,.58-f*.18),U(e.pelvis,Dt*.25);const V=.28+v*-.22+l*.18+st*.6+it*-.2+tt*.3+f*.4;k(e.spine,V,8,.6),z(e.spine,-h*.2+Y*.6,8,.6),k(e.chest,.1+l*.12+it*-.14+E*.08,8,.6),k(e.neck,-(V+.1)*.7+it*.2+E*.14,7,.5),z(e.neck,h*.16+Y*.5,7,.5);for(const nt of e.legs)k(nt.hip,.3+St*.02+ht*.14+tt*.06,9,.6),z(nt.hip,nt.side*.14),k(nt.knee,-2.25),k(nt.ankle,.85),U(nt.ankle,0),z(nt.ankle,0);const Q=Math.abs(h)*.3+v*.3;for(const nt of e.arms)k(nt.shoulder,-.6+v*.25+m*-.35+Z*.6+it*-.3+Y*nt.side*.6+f*.8,8,.5),z(nt.shoulder,nt.side*(-.22+ht*.35+f*.9),8,.5),k(nt.elbow,.4+Q,9,.55),k(nt.wrist,-.3,7,.45);_o(s);return}if(n){G(e.pelvis,.5-f*.1),U(e.pelvis,Dt*.25);const V=.14+v*-.25+l*.2+st*.6+it*-.2+tt*.3+f*.4;k(e.spine,V,8,.6),z(e.spine,-h*.2+Y*.6,8,.6),k(e.chest,.1+l*.15+it*-.14+E*.07,8,.6),k(e.neck,-(V+.1)*.7+it*.2+E*.12,7,.5),z(e.neck,h*.16+Y*.5,7,.5);for(const nt of e.legs)k(nt.hip,1.5+St*.02+ht*.12+tt*.05,9,.6),k(nt.knee,-.95),k(nt.ankle,-.6),U(nt.ankle,0);const Q=Math.abs(h)*.3+v*.25;for(const nt of e.arms)k(nt.shoulder,-.85+v*.3+m*-.3+Z*.6+it*-.3+Y*nt.side*.6+f*.8,8,.5),z(nt.shoulder,nt.side*(-.18+ht*.35+f*.9),8,.5),k(nt.elbow,.5+Q,9,.55),k(nt.wrist,-.3,7,.45);_o(s);return}const zt=i&&!_&&!T?Math.max(0,(h-.45)/.55)*(1-m)*(1-l)*(1-f):0;s.mittDrag=zt;const pe=_?(i?.2:.14)+St*.03:(i?.26:.32)+Math.abs(h)*.28+zt*.4+l*(i?.42:.5)+u*(i?.45:.6)+v*.25+f*.9,B=y*(S==="jackknife"?.9:S==="grab"?.45:S==="superman"?-.5:0),De=pe*(1-m)+((i?.55:.75)+u*.2+p*.5+Math.abs(g)*.25+B+C*.35)*m,Vt=De*.8,Xt=De*1.65,Lt=2*(_v*Math.cos(Vt)+xv*Math.cos(Xt-Vt));G(e.pelvis,Lt/2+.16+.05+(i?.03:0)-m*.12-f*.35),rt(e.pelvis,-b*.11);const ie=s.type==="ski"&&!_?h*(1-l)*(1-m)*(1-yt):0;X(e.pelvis,ie*.09,11,.8);const Ct=s.baseBodyYaw+Dt*(i?.5:.8)+(i?Math.min(0,h)*.5:h*.42)*(1-l)+(i?-.45*l:0);U(e.pelvis,Ct,7,.7),s.rigFold=l*(i?1.25:1.1)*(1-f);const D=Math.max(0,u)*(1-m)*(1-f),A=_?.05+St*.015:(i?.14:.06)+l*(i?-.14:.1)-v*.22+f*.5+b*.22+(i?Math.min(0,h)*.25*(1-l):0),H=y*(S==="jackknife"?1:S==="grab"?.3:S==="superman"?-.4:0),J=A*(1-m)+(-.08+l*.2+p*.6+H+C*.3)*m,et=1-l*.8;k(e.spine,J*.45+D*.26+st*.5+it*-.28*et+tt*.4,9,.65),z(e.spine,h*(i?-.12:.08)+st*.3+Y*.6,9,.65),U(e.spine,-Ct*M*(i?.08:.25)+h*(i?.26:.18)+g*.35*m+P*w*.2,9,.65),k(e.chest,J*.55+l*(i?0:.35)+D*.12+st*.5+it*-.22*et,8.5,.6),z(e.chest,h*(i?-.12:.04)+Y*.5,8.5,.6),U(e.chest,-Ct*M*(i?.14:.3)+h*(i?.22:.14)+(i?l*.35*M:0)+g*.5*m+P*w*.4,8.5,.6),k(e.neck,-(J+l*.35)*.75-D*.22+it*.3,6.5,.48),z(e.neck,h*.38+Y*.9,6.5,.48),U(e.neck,-Ct*M*(i?.72:.45)-h*.2+g*.7*m+P*w*1.2*(1-m),6.5,.48),s.kneeKick||(s.kneeKick={[-1]:0,1:0});for(const V of[-1,1]){const Q=V*ie>0,nt=-ie*(Q?.5:.22);s.kneeKick[V]+=(nt-s.kneeKick[V])*Math.min(1,a*9)}const q=(V,Q,nt)=>V+(Q-V)*nt;s._plant||(s._plant={t:[0,0],prevSteer:0});const _t=s._plant,ut=.85;if(_t.t[0]=Math.max(0,_t.t[0]-a),_t.t[1]=Math.max(0,_t.t[1]-a),s.type==="ski"&&!_&&!x&&l<.4&&v<.3&&f<.2){const V=Math.abs(h)>.2&&Math.abs(_t.prevSteer)<=.2,Q=Math.sign(h)!==Math.sign(_t.prevSteer)&&Math.abs(h)>.14;if(V||Q){const nt=h>0?1:0;_t.t[nt]<=0&&(_t.t[nt]=ut)}}_t.prevSteer=h;const xt=(V,Q,nt)=>{const dt=Math.min(1,Math.max(0,(nt-V)/(Q-V)));return dt*dt*(3-2*dt)},Wt=_t.t.map(V=>V>0?1-V/ut:-1),at=Wt.map(V=>V<0||V>=.5?0:Math.sin(Math.PI*V*2)),Mt=Wt.map(V=>V<0?0:xt(.28,.52,V)*(1-xt(.82,1,V))),It=Wt.map(V=>V<0?0:xt(0,.16,V)*(1-xt(.82,1,V)));s.rigFold=(s.rigFold??0)+Math.max(Mt[0],Mt[1])*.14;for(const V of e.arms){const Q=V.side>0?1:0,nt=V.side*h>0?Math.abs(h):0;let dt,Ft,N,ot;if(f>.3)dt=-1.2+Z,Ft=V.side*1.2,N=.4,ot=0;else if(_)dt=.12,Ft=V.side*.16,N=.35+tt*.3,ot=-.15;else if(i)dt=q(.2+Z+yt*-.3+h*V.side*.25,-1.05+Z*.5,l),Ft=q(V.side*(.55+h*V.side*.3)+yt*V.side*.45,V.side*.32,l),N=q(.5+nt*.55+tt*.35,.1,l),ot=V.side*h*.2*(1-l),Ft+=V.side*D*.35,N=q(N,.3,D*.5),V.side<0&&zt>0&&(dt=q(dt,.5,zt),Ft=q(Ft,-1.45,zt),N=q(N,.08,zt));else{const K=at[Q],$=Mt[Q],ft=It[Q];dt=q(.42+yt*-.35+Z+h*V.side*.18,-.82,l)+K*.95-$*.85,Ft=q(V.side*(.3+yt*.5),V.side*.1,l)+ft*V.side*.6,N=q(.72+nt*.5+tt*.3,.15,l)-K*.55+$*.15,ot=q(.35-yt*.5,.05,l)-K*.85+$*.3,dt+=D*.35,Ft+=V.side*D*.2}if(!_&&f<=.3){const K=1.15-Math.abs(g)*.85+d*.4,$=V.side<0?p*.9:p*.25,ft=g*.55;let lt=-.5+Z+$+Math.abs(g)*.3+g*V.side*.4,Pt=V.side*K+ft,$t=.55+$*.5+Math.abs(g)*.5;y>.01&&(S==="jackknife"?(lt=q(lt,1.35,y),Pt=q(Pt,V.side*.35,y),$t=q($t,.15,y)):S==="grab"?V.side<0?(lt=q(lt,1,y),Pt=q(Pt,-.55,y),$t=q($t,.1,y)):Pt=q(Pt,1.35,y):S==="superman"&&(lt=q(lt,2.3,y),Pt=q(Pt,V.side*.2,y),$t=q($t,.05,y))),lt=q(lt,-1,C*.8),Pt=q(Pt,V.side*.3,C*.8),$t=q($t,.1,C*.8),dt=dt*(1-m)+lt*m,Ft=Ft*(1-m)+Pt*m,N=N*(1-m)+$t*m,ot=ot*(1-m)+-.2*m}k(V.shoulder,dt+it*-.5+Y*V.side*.7,8,.5),z(V.shoulder,Ft+ht*V.side*.4+tt*V.side*.5,8,.5),k(V.elbow,N,9,.55),k(V.wrist,ot+tt*.4,7,.45)}for(const[V,Q]of e.poles.entries()){let nt=0;if(_t.t[V]>0){const N=1-_t.t[V]/ut;N<.26?nt=-1.5*(N/.26):N<.72?nt=-1.5+2.6*((N-.26)/.46):nt=1.1*(1-(N-.72)/.28)}k(Q,q(_?.55:1.15,2.1,l)-it*.3+nt,4.5,.38),z(Q,-(V===0?-1:1)*It[V]*.42,4.5,.38)}_o(s)}const Yn=[{id:"ski-powder",type:"ski",name:"Powder Rockets",deck:14826299,accent:1777190,suit:14042415},{id:"ski-glacier",type:"ski",name:"Glacier GS",deck:2385104,accent:16098851,suit:2381480},{id:"ski-birch",type:"ski",name:"Birch Classics",deck:7030055,accent:14042415,suit:4153416},{id:"ski-neon",type:"ski",name:"Neon Slalom",deck:3130460,accent:1316637,suit:2237482},{id:"board-midnight",type:"board",name:"Midnight Deck",deck:1842988,accent:3718648,suit:3159624},{id:"board-sunset",type:"board",name:"Sunset Camber",deck:15236898,accent:12595240,suit:9057368},{id:"board-split",type:"board",name:"Splitboard 9000",deck:9062600,accent:2873800,suit:5257856},{id:"board-mallow",type:"board",name:"Marshmallow",deck:14696574,accent:1777190,suit:3689108},{id:"sled-steel",type:"sled",name:"Steel Toboggan",deck:4608607,accent:15236898,suit:5267578},{id:"sled-luge",type:"sled",name:"Rocket Luge",deck:12595240,accent:16098851,suit:9183272},{id:"sled-wood",type:"sled",name:"Classic Wood Sled",deck:9067568,accent:3942420,suit:8004664},{id:"sled-saucer",type:"sled",name:"Ice Saucer",deck:2064288,accent:16098851,suit:2647418}];function xc(s){return Yn.find(t=>t.id===s)||Yn[0]}const au={ski:"Skis",board:"Snowboard",sled:"Sled"},Id="freshpow_save_v1",Ev=1e3,Zi=[10,25,50,100,250];function Rv(){try{const s=localStorage.getItem(Id);if(s){const t=JSON.parse(s);if(typeof t.balance=="number"&&t.balance>=0)return t}}catch{}return{balance:Ev,gearId:"board-midnight",outfitId:"fit-classic",owned:[],bet:25,name:"You"}}const Ht=Rv();function Kn(){try{localStorage.setItem(Id,JSON.stringify(Ht))}catch{}}function Dd(){return Ht.balance<Zi[0]}function kd(){Ht.balance+=500,Kn()}const Cv=.96,Gn=s=>s.map(([t,e,n])=>({pos:t,p:e,mult:n})),is=[{id:"vermont",theme:"vermont",nation:"🇺🇸",flag:"🍁",name:"Maple Ridge Classic",place:"Stowe Valley, Vermont",tag:"Hometown corduroy under the hardwoods",table:Gn([[1,.2,2],[2,.2,1.4],[3,.2,.8],[4,.2,.5],[5,.2,.1]])},{id:"quebec",theme:"quebec",nation:"🇨🇦",flag:"⚜️",name:"Coupe Cap Boréal",place:"Laurentides, Québec",tag:"Boreal spruce and boilerplate ice",table:Gn([[1,.2,2.5],[2,.2,1.3],[3,.2,.6],[4,.2,.35],[5,.2,.05]])},{id:"colorado",theme:"colorado",nation:"🇺🇸",flag:"🏔️",name:"Ironpeak Open",place:"Roaring Fork, Colorado",tag:"High-altitude bluebird racing",table:Gn([[1,.15,3.2],[2,.2,1.4],[3,.2,.7],[4,.2,.3],[5,.25,0]])},{id:"utah",theme:"utah",nation:"🇺🇸",flag:"🎿",name:"Powder Crown Invitational",place:"Little Cloud Canyon, Utah",tag:"The greatest snow on earth, allegedly",table:Gn([[1,.12,4],[2,.18,1.5],[3,.2,.75],[4,.2,.3],[5,.3,0]])},{id:"bc",theme:"bc",nation:"🇨🇦",flag:"🌲",name:"Ravenspire Backcountry Cup",place:"Coast Range, British Columbia",tag:"Cedar giants and coastal mist",table:Gn([[1,.1,5],[2,.15,1.6],[3,.2,.85],[4,.25,.2],[5,.3,0]])},{id:"chile",theme:"chile",nation:"🇨🇱",flag:"🌋",name:"Volcán Blanco Grand Prix",place:"Andes Centrales, Chile",tag:"Treeless, ruthless, above the clouds",table:Gn([[1,.08,6.5],[2,.15,1.6],[3,.2,.65],[4,.25,.28],[5,.32,0]])},{id:"nz",theme:"nz",nation:"🇳🇿",flag:"🥝",name:"Black Range Masters",place:"Southern Alps, New Zealand",tag:"Tussock, schist and southern speed",table:Gn([[1,.06,8.4],[2,.14,1.8],[3,.2,.75],[4,.27,.2],[5,.33,0]])},{id:"swiss",theme:"swiss",nation:"🇨🇭",flag:"🇨🇭",name:"Silberhorn Super‑G",place:"Wallis, Switzerland",tag:"Glacier ice and world-tour prestige",table:Gn([[1,.05,10],[2,.12,2],[3,.2,.82],[4,.28,.2],[5,.35,0]])},{id:"japan",theme:"japan",nation:"🇯🇵",flag:"🏮",name:"Yukiakari Night Session",place:"Hokkaidō, Japan",tag:"Midnight powder under the lanterns — the big one",table:Gn([[1,.04,12],[2,.1,2.4],[3,.18,1],[4,.3,.2],[5,.38,0]])}];for(const s of is){const t=s.table.reduce((n,i)=>n+i.p*i.mult,0),e=s.table.reduce((n,i)=>n+i.p,0);if(Math.abs(t-Cv)>1e-9||Math.abs(e-1)>1e-9)throw new Error(`Fresh Pow event ${s.id}: RTP ${t} / psum ${e} out of spec`)}function ua(s){return s.table[0].mult}function Nd(s,t){return t.find(e=>e.pos===s).mult}function Pv(s,t,e){let n=s(),i=e[e.length-1].pos;for(const a of e){if(n<a.p){i=a.pos;break}n-=a.p}const r=e.map(a=>a.pos).filter(a=>a!==i);for(let a=r.length-1;a>0;a--){const o=Math.floor(s()*(a+1));[r[a],r[o]]=[r[o],r[a]]}return{playerPos:i,botPositions:r,bet:t,payout:Math.round(t*Nd(i,e)*100)/100}}const pi=[{id:"fit-classic",name:"Lodge Classic",jacket:16498468,jacket2:1777188,pants:1447964,hat:1777188,accessory:16098851,price:0,tag:"The house colours"},{id:"fit-glacier",name:"Glacier Shell",jacket:3718648,jacket2:16053492,pants:2372679,hat:16053492,accessory:3718648,price:220,tag:"Ice-blue technical shell"},{id:"fit-ember",name:"Ember Kit",jacket:14042415,jacket2:16767306,pants:2830136,hat:14042415,accessory:16098851,price:260,tag:"Warm as a lodge fire"},{id:"fit-midnight",name:"Midnight Stealth",jacket:1777188,jacket2:2830138,pants:1447964,hat:1777188,accessory:8015824,price:340,tag:"All black, purple hits"},{id:"fit-retro",name:"Retro Neon",jacket:14696574,jacket2:8052952,pants:4858928,hat:4114027,accessory:16767306,price:420,tag:"Straight out of 1989"},{id:"fit-forest",name:"Backcountry Forest",jacket:4153416,jacket2:15764526,pants:3945512,hat:15764526,accessory:16053492,price:300,tag:"Earth tones, orange trim"},{id:"fit-arctic",name:"Arctic Whiteout",jacket:16053492,jacket2:8959976,pants:15265524,hat:16053492,accessory:3718648,price:520,tag:"Vanishes into the powder"},{id:"fit-gold",name:"Champion Gold",jacket:16098851,jacket2:1777188,pants:1777188,hat:16767306,accessory:16767306,price:900,tag:"For the podium regular"}],Lv={"ski-powder":0,"ski-glacier":180,"ski-birch":240,"ski-neon":360,"board-midnight":0,"board-sunset":200,"board-split":380,"board-mallow":300,"sled-steel":0,"sled-luge":220,"sled-wood":160,"sled-saucer":280},Iv=new Set(["ski-powder","board-midnight","sled-steel","fit-classic"]);function ol(s){return Lv[s]??pi.find(t=>t.id===s)?.price??0}function vc(s){return pi.find(t=>t.id===s)??pi[0]}function Li(s){return Iv.has(s)||(Ht.owned??[]).includes(s)}function Ud(s){if(Li(s))return!1;const t=ol(s);return Ht.balance<t?!1:(Ht.balance=Math.round((Ht.balance-t)*100)/100,Ht.owned=[...Ht.owned??[],s],Kn(),!0)}const Dv=[{id:"featured",label:"Featured"},{id:"ski",label:"Skis"},{id:"board",label:"Snowboards"},{id:"sled",label:"Sleds"},{id:"outfit",label:"Outfits"}];function kv(s){const t=Yn.map(n=>({kind:"ride",id:n.id,type:n.type,name:n.name,price:ol(n.id),colors:[n.deck,n.accent],tag:n.type==="ski"?"Skis":n.type==="board"?"Snowboard":"Sled"})),e=pi.map(n=>({kind:"outfit",id:n.id,type:"outfit",name:n.name,price:n.price,colors:[n.jacket,n.jacket2,n.pants],tag:n.tag,outfit:n}));if(s==="outfit")return e;if(s==="featured"){const n=i=>[...i].sort((r,a)=>a.price-r.price).slice(0,2);return[...n(e),...n(t.filter(i=>i.type==="board")),...n(t.filter(i=>i.type==="ski")),...n(t.filter(i=>i.type==="sled"))]}return t.filter(n=>n.type===s)}const qe=(s,t="0 0 24 24")=>`<svg viewBox="${t}" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${s}</svg>`,Fd={ski:qe('<path d="M3.5 10.5 H16.5 q2.2 0 3.8 -2.6"/><path d="M8.5 10.5 v-1.8 h2.4 v1.8"/><path d="M3.5 16.5 H16.5 q2.2 0 3.8 -2.6"/><path d="M8.5 16.5 v-1.8 h2.4 v1.8"/>'),board:qe('<g transform="rotate(22 12 12)"><rect x="8.2" y="2.5" width="7.6" height="19" rx="3.8"/><path d="M10.2 8.5 h3.6"/><path d="M10.2 15.5 h3.6"/></g>'),sled:qe('<path d="M4 15 h13 a3 3 0 0 0 0 -6"/><path d="M6 15 v-5 h9"/><path d="M4 19 h15"/>')},Od={race:qe('<path d="M3 18 L10 8 L14 13 L17 10 L21 15"/><path d="M3 21 h18"/>'),combined:qe('<path d="M3 18 L9 9 L13 13 L19 7"/><path d="M15 3 l1.5 3 3 .5 -2.2 2.1 .5 3 -2.8 -1.5 -2.8 1.5 .5 -3 -2.2 -2.1 3 -.5z" fill="currentColor" stroke="none" transform="translate(4 -1) scale(0.5)"/><path d="M3 21 h18"/>'),glade:qe('<path d="M6 21 v-4"/><path d="M3 17 L6 9 L9 17z"/><path d="M18 21 v-5"/><path d="M14 16 L18 6 L22 16z"/><path d="M9 21 C11 17 13 17 15 21"/>'),bigair:qe('<path d="M3 20 C7 20 9 12 12 12"/><path d="M12 12 C15 12 17 4 21 4"/><path d="M12 12 l3 -8"/><circle cx="17" cy="7" r="1.6"/>'),halfpipe:qe('<path d="M3 5 v6 a9 9 0 0 0 18 0 V5"/><path d="M3 5 h3"/><path d="M18 5 h3"/>')},Bd=qe('<path d="M12 2 L21 6 V12 C21 17 17 20.5 12 22 C7 20.5 3 17 3 12 V6 Z"/><path d="M6.5 15 L10 9.5 L12.5 12.5 L14.5 10 L17.5 15 Z" fill="currentColor" stroke="none"/><path d="M9 11 l1 -1.5 1 1.5" stroke-width="1.2"/>'),Mc=qe('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/>'),Nv=qe('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11 V7 a4 4 0 0 1 8 0 v4"/>'),Uv=qe('<path d="M5 12 l5 5 L20 7"/>'),zd=qe('<path d="M4 8 h16 l-1.5 12 h-13z"/><path d="M9 8 V6 a3 3 0 0 1 6 0 v2"/>'),ou=256;let mi=null;const xo=new Map;function Gd(){if(mi)return mi;const s=new rd({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});s.setPixelRatio(1),s.setSize(ou,ou),s.setClearColor(0,0);const t=new Hc;t.add(new gd(14479359,5596538,1.15));const e=new ha(16773852,1.7);e.position.set(2.5,4,-3),t.add(e);const n=new ha(12575743,.5);n.position.set(-3,1.5,2),t.add(n);const i=new Ce(30,1,.05,60);return mi={renderer:s,scene:t,camera:i},mi}function cu(s,t,e,n,i){const{renderer:r,scene:a,camera:o}=Gd();a.add(s),o.position.set(t.x+Math.sin(n)*Math.cos(i)*e,t.y+Math.sin(i)*e,t.z-Math.cos(n)*Math.cos(i)*e),o.lookAt(t),r.render(a,o);const c=r.domElement.toDataURL("image/png");return a.remove(s),c}function Fv(s){const t=s.kind==="ride"?s.id:`${s.id}:${Ht.gearId}`;if(xo.has(t))return xo.get(t);let e;if(s.kind==="ride"){const n=xc(s.id),i=yv(n),r=new En().setFromObject(i),a=r.getSize(new L),o=r.getCenter(new L),c=(Math.hypot(a.x,a.z)*.5+.12)/Math.sin(Ov())*.96;e=cu(i,o,c,-.72,.62)}else{const n=xc(Ht.gearId),i=sr(n,16498468,s.outfit);for(let r=0;r<4;r++)Tn(i,{idle:!0,t:.8,dt:1});e=cu(i.root,new L(0,.92,0),3.95,-.55,.14)}return xo.set(t,e),e}function Ov(){return Oc.degToRad(Gd().camera.fov/2)}function Bv(){mi&&(mi.renderer.dispose(),mi.renderer.forceContextLoss(),mi=null)}const lr=()=>document.getElementById("ui"),Fe=s=>(Math.round(s*100)/100).toLocaleString(),Sa=s=>`#${s.toString(16).padStart(6,"0")}`,da=["st","nd","rd","th","th"],yc=s=>s===1?"p1":s===2?"p2":s===3?"p3":"pn",zv=["POWDR","ALPINEX","FROSTBITE","YETI OIL","GLACIÈRE"];class Gv{constructor(t){this.cb=t,this.gear=Yn.find(i=>i.id===Ht.gearId)??Yn[0],this.outfit=vc(Ht.outfitId),this.type=this.gear.type,this.bet=Zi.includes(Ht.bet)?Ht.bet:Zi[1],this.riders=[];const e=document.createElement("div");e.id="menu-ui",e.innerHTML=`
      <div class="menu-top">
        <div class="title-block">
          <h1><span class="crest">${Bd}</span>FRESH <span>POW</span></h1>
          <p>place your chips &middot; drop in</p>
        </div>
        <div class="top-right">
          <div class="panel balance-pill">${Mc}<span class="amt" id="balance-amt"></span><small>chips</small></div>
          <button id="shop-btn" class="pill-btn">${zd} Pro Shop</button>
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
              ${["ski","board","sled"].map(i=>`<button class="ttab" data-type="${i}" title="${au[i]}">${Fd[i]}</button>`).join("")}
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
      </div>`,lr().appendChild(e),this.el=e,e.querySelector("#gear-prev").addEventListener("click",()=>this._cycleGear(-1)),e.querySelector("#gear-next").addEventListener("click",()=>this._cycleGear(1)),e.querySelector("#fit-prev").addEventListener("click",()=>this._cycleFit(-1)),e.querySelector("#fit-next").addEventListener("click",()=>this._cycleFit(1));for(const i of e.querySelectorAll(".ttab"))i.addEventListener("click",()=>this._pickType(i.dataset.type));e.querySelector("#shop-btn").addEventListener("click",()=>{Hv({onEquip:()=>{this.gear=Yn.find(i=>i.id===Ht.gearId)??this.gear,this.outfit=vc(Ht.outfitId),this.type=this.gear.type,this._refreshGear(!0),this._refreshFit(!0),this.refreshBalance()},onClose:()=>this.refreshBalance()})});const n=e.querySelector("#bet-row");for(const i of Zi){const r=document.createElement("button");r.className="chip",r.innerHTML=`<i>${i}</i>`,r.dataset.v=i,r.addEventListener("click",()=>{this.bet=i,Ht.bet=i,this._refreshBets(),this.cb.onBetChange?.(i)}),n.appendChild(r)}this.startBtn=e.querySelector("#start-btn"),this.startBtn.addEventListener("click",()=>this.cb.onStart?.()),this._lobbyFull=!1,this._refreshGear(!1),this._refreshFit(!1),this._refreshBets(),this.refreshBalance(),this.addRider({name:"You",color:16498468,me:!0})}_ridesOfType(){return Yn.filter(t=>t.type===this.type)}_pickType(t){if(t===this.type)return;this.type=t;const e=this._ridesOfType();this.gear=e.find(n=>Li(n.id))??e[0],this._refreshGear(!0)}_cycleGear(t){const e=this._ridesOfType(),n=Math.max(0,e.indexOf(this.gear));this.gear=e[(n+t+e.length)%e.length],this._refreshGear(!0)}_cycleFit(t){const e=Math.max(0,pi.indexOf(this.outfit));this.outfit=pi[(e+t+pi.length)%pi.length],this._refreshFit(!0)}_lockLine(t){const e=ol(t);return`<span class="lock">${Nv} ${Fe(e)} chips</span><button class="buy-inline" data-buy="${t}">Buy</button>`}_refreshGear(t){const e=this.gear;for(const r of this.el.querySelectorAll(".ttab"))r.classList.toggle("sel",r.dataset.type===this.type);this.el.querySelector("#gear-name").textContent=e.name;const n=this.el.querySelector("#gear-sub");n.innerHTML=Li(e.id)?`${au[e.type]}`:this._lockLine(e.id),n.querySelector("[data-buy]")?.addEventListener("click",()=>this._buy(e.id));const i=this.riders.find(r=>r.me);i&&(i.el.querySelector(".ride").textContent=e.name),t&&this.cb.onGearChange?.(e),this._refreshStart()}_refreshFit(t){const e=this.outfit;this.el.querySelector("#fit-name").textContent=e.name;const n=this.el.querySelector("#fit-sub");n.innerHTML=Li(e.id)?e.tag:this._lockLine(e.id),n.querySelector("[data-buy]")?.addEventListener("click",()=>this._buy(e.id)),t&&this.cb.onOutfitChange?.(e),this._refreshStart()}_buy(t){if(!Ud(t)){this.el.querySelector("#balance-amt").classList.add("shake"),setTimeout(()=>this.el.querySelector("#balance-amt")?.classList.remove("shake"),500);return}this.refreshBalance(),this._refreshGear(!0),this._refreshFit(!0)}_refreshBets(){for(const t of this.el.querySelectorAll(".chip")){const e=Number(t.dataset.v);t.classList.toggle("sel",e===this.bet),t.disabled=e>Ht.balance}if(this.bet>Ht.balance){const t=Zi.filter(e=>e<=Ht.balance);if(t.length){this.bet=t[t.length-1],Ht.bet=this.bet,this._refreshBets();return}}this._refreshStart()}refreshBalance(){this.el.querySelector("#balance-amt").textContent=Fe(Ht.balance),this._refreshBets()}addRider({name:t,color:e,me:n=!1,gearName:i=null}){const r=document.createElement("li");r.innerHTML=`<span class="dot" style="background:${Sa(e)}"></span>
      <span class="who">${t}${n?" (you)":""}</span>
      <span class="ride">${i??""}</span>`,this.el.querySelector("#lobby-list").appendChild(r),this.riders.push({name:t,me:n,el:r}),n&&this._refreshGear(!1);const a=this.riders.length;this.el.querySelector("#lobby-status").textContent=a<5?`Riders ${a}/5 — waiting…`:"Field set — race ready",a>=5&&(this._lobbyFull=!0,this._refreshStart())}_refreshStart(){const t=Ht.balance>=Zi[0],e=!Li(this.gear.id)||!Li(this.outfit.id),n=this._lobbyFull&&t&&this.bet<=Ht.balance&&!e;this.startBtn.disabled=!n,this.startBtn.textContent=this._lobbyFull?t?e?"Buy to ride":"Drop In":"No chips!":"Waiting…"}destroy(){this.el.remove(),document.getElementById("shop")?.remove()}}function Hv({onEquip:s,onClose:t}){document.getElementById("shop")?.remove();const e=document.createElement("div");e.id="shop",e.innerHTML=`
    <div class="panel shop-card">
      <div class="shop-head">
        <div class="shop-title">${zd} <b>Pro Shop</b></div>
        <div class="shop-bal">${Mc}<span id="shop-bal"></span></div>
        <button class="shop-close" id="shop-close" aria-label="close">&times;</button>
      </div>
      <div class="shop-tabs" id="shop-tabs">
        ${Dv.map(a=>`<button class="stab" data-tab="${a.id}">${Fd[a.id]??""}${a.label}</button>`).join("")}
      </div>
      <div class="shop-grid" id="shop-grid"></div>
    </div>`,lr().appendChild(e);let n="featured";const i=()=>e.querySelector("#shop-bal").textContent=Fe(Ht.balance),r=()=>{for(const o of e.querySelectorAll(".stab"))o.classList.toggle("sel",o.dataset.tab===n);const a=e.querySelector("#shop-grid");a.innerHTML=kv(n).map(o=>{const c=Li(o.id),l=o.kind==="ride"?Ht.gearId===o.id:Ht.outfitId===o.id,h=o.colors.map(f=>`<i style="background:${Sa(f)}"></i>`).join(""),d=l?`<button class="item-btn equipped" disabled>${Uv} Equipped</button>`:c?`<button class="item-btn" data-equip="${o.id}">Equip</button>`:`<button class="item-btn buy" data-buy="${o.id}"${Ht.balance<o.price?" disabled":""}>${Mc} ${Fe(o.price)}</button>`;return`<div class="item-card${l?" on":""}">
          <div class="item-art ${o.kind}"><img src="${Fv(o)}" alt=""><span class="swatch">${h}</span></div>
          <div class="item-name">${o.name}</div>
          <div class="item-tag">${o.tag}</div>
          ${d}
        </div>`}).join("");for(const o of a.querySelectorAll("[data-buy]"))o.addEventListener("click",()=>{Ud(o.dataset.buy)&&(i(),r())});for(const o of a.querySelectorAll("[data-equip]"))o.addEventListener("click",()=>{const c=o.dataset.equip;c.startsWith("fit-")?Ht.outfitId=c:Ht.gearId=c,Kn(),s?.(),r()})};for(const a of e.querySelectorAll(".stab"))a.addEventListener("click",()=>{n=a.dataset.tab,r()});return e.querySelector("#shop-close").addEventListener("click",()=>{e.remove(),Bv(),t?.()}),i(),r(),e}class Vv{constructor(t){this.format=t;const e=t&&t.scored!=="time",n=!!(t&&t.solo),i=document.createElement("div");i.id="race-ui",i.innerHTML=`
      <div id="countdown" class="hidden"></div>
      <div class="race-top">
        <div class="hud-l">
          <div class="panel" id="rank-box">${n?'<div class="pos solo">SOLO</div><div class="of">run</div>':'<div class="pos">–</div><div class="of">of 5</div>'}</div>
          <div class="panel" id="format-box">${t?Od[t.id]??"":""}${t?t.short:"RACE"}</div>
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
      <div class="controls-hint" id="controls-hint"></div>`,lr().appendChild(i),this.el=i;const r=matchMedia("(pointer: coarse)").matches;i.querySelector("#controls-hint").textContent=r?"pull ⬅➡ carve · pull ⬆ + hold tuck · pull ⬇ + hold brake · swipe in air for tricks · diagonal swipe for specials · brake into a lip to knuckle":"A/D carve · hold W tuck · hold S brake · tap WASD in air for tricks · two keys together for specials · brake into a lip to knuckle",setTimeout(()=>{const a=i.querySelector("#controls-hint");a&&(a.style.opacity="0")},9e3),this._toastTimer=null}countdown(t){const e=this.el.querySelector("#countdown");e.classList.remove("hidden"),e.textContent=t,e.style.animation="none",e.offsetWidth,e.style.animation="",t===""&&e.classList.add("hidden")}update({rank:t,speed:e,progress:n,board:i,style:r=0,solo:a=!1,clock:o=0}){this.el.querySelector("#clock-box .clk").textContent=bc(Math.max(0,o));const c=da[t-1]||"th";if(a||(this.el.querySelector("#rank-box .pos").innerHTML=`${t}<small>${c}</small>`),this.el.querySelector("#speed-box .spd").textContent=Math.round(e*3.6),this.el.querySelector("#style-box .sty").textContent=Math.round(r),this.el.querySelector("#progress-fill").style.width=`${Math.min(100,n*100).toFixed(1)}%`,i){const l=this.format&&this.format.scored!=="time";this.el.querySelector("#mini-board").innerHTML=i.map(h=>`<div class="row${h.me?" me":""}">
            <span class="dot" style="background:${Sa(h.color)}"></span>
            <span class="nm">${h.name}</span>${l&&h.pts!=null?`<span class="pts">${Math.round(h.pts)}</span>`:""}${h.done?"🏁":""}</div>`).join("")}}trickToast(t,e=""){const n=this.el.querySelector("#trick-toast");n.innerHTML=`${t}${e?`<small>${e}</small>`:""}`,n.classList.add("show"),clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>n.classList.remove("show"),1400)}stumbleFlash(t){const e=this.el.querySelector("#stumble-flash");e.classList.add("show"),this.trickToast("OOF!",t),setTimeout(()=>e.classList.remove("show"),500)}destroy(){clearTimeout(this._toastTimer),this.el.remove()}}const Hd=s=>`
  <div class="cup-head">
    <span class="cup-crest">${Bd}</span>
    <span class="cup-name">Fresh Pow <b>Cup</b></span>
    <span class="cup-kicker">${s}</span>
  </div>`,Vd=()=>`<div class="sponsors">${zv.map(s=>`<span>${s}</span>`).join("")}</div>`,Sc=s=>`
  <div class="ev-shot" style="background-image:url('events/${s.id}.jpg')">
    <div class="ev-shot-fade"></div>
    <div class="ev-flag">${s.nation??s.flag} <span>${s.place}</span></div>
    ${ua(s)>=6?'<div class="ev-ribbon">Major</div>':""}
    <div class="ev-shot-foot">
      <div class="ev-name">${s.name}</div>
      <div class="ev-top">Top prize <b>&times;${ua(s)}</b></div>
    </div>
  </div>`,Wv=s=>`
  <div class="ev-table">
    ${s.table.map(t=>`<span class="ev-cell ${yc(t.pos)}"><i>${t.pos}${da[t.pos-1]}</i><b>&times;${t.mult}</b></span>`).join("")}
  </div>`,jv=s=>`
  <div class="stat-chips">
    <span><i>Course</i><b>${s.length.toLocaleString()} m</b></span>
    <span><i>Vert</i><b>${Math.round(s.length*.5).toLocaleString()} m</b></span>
    <span><i>Field</i><b>5</b></span>
    <span><i>Scored on</i><b>${s.scored==="time"?"Time":s.scored==="both"?"Time + Style":"Style"}</b></span>
  </div>`,wc=(s,t="")=>`
  <div class="ev-format ${t}">
    <span class="fmt-ico">${Od[s.id]??""}</span>
    <span class="fmt-name">${s.name}</span>
    <span class="fmt-tag">${s.tag}</span>
  </div>`;function Xv(s,t,e,n,i){const r=document.createElement("div");r.id="event-roller",r.innerHTML=`
    <div class="ev-card${ua(t)>=6?" ev-hype":""}">
      ${Hd("Tonight's event")}
      <div class="ev-window" id="ev-window"></div>
      <div class="ev-detail" id="ev-detail"></div>
      ${Vd()}
    </div>`,lr().appendChild(r);const a=r.querySelector("#ev-window"),o=r.querySelector("#ev-detail"),c=r.querySelector(".ev-card");for(const u of s){const m=new Image;m.src=`events/${u.id}.jpg`}const l=[...s].sort(()=>Math.random()-.5);let h=0,d=70;const f=()=>{if(a.innerHTML=Sc(l[h%l.length]),h++,d*=1.16,d<330)setTimeout(f,d);else{a.innerHTML=Sc(t),c.classList.add("ev-locked"),o.innerHTML=`<div class="ev-tag">${t.tag}</div>${Wv(t)}`;const u=document.createElement("div");u.className="ev-format-slot",o.appendChild(u);const m=[...e].sort(()=>Math.random()-.5);let b=0,g=60;const p=()=>{u.innerHTML=wc(m[b%m.length]),b++,g*=1.22,g<300?setTimeout(p,g):(u.innerHTML=wc(n,"fmt-locked")+jv(n),setTimeout(()=>{r.classList.add("ev-out"),setTimeout(()=>{r.remove(),i()},450)},2600))};p()}};return f(),r}function qv({event:s,format:t,standings:e,playerPos:n,bet:i,payout:r,style:a,reveal:o=!1,onAgain:c,onLodge:l}){const h=document.createElement("div");h.id="results";const d=da[n-1],f=r-i,u=t?.scored??"time",m=!!t?.solo,b=e.find(x=>x.me)?.score;let g=`<div class="score-line">Style points <b>${Fe(a)}</b></div>`;b&&u==="both"?g=`<div class="score-line">Time ${Fe(b.timePts)} + Style ${Fe(b.style)} = <b>${Fe(b.total)}</b></div>`:b&&u==="style"?g=`<div class="score-line">Judges' score <b>${Fe(b.total)}</b>${b.total<=0?" — no tricks landed":""}</div>`:b&&m&&(g=`<div class="score-line">Your time <b>${bc(b.time)}</b></div>`);const p=x=>x.score?u==="both"?`<span class="sc"><small>${Fe(x.score.timePts)} + ${Fe(x.score.style)}</small>${Fe(x.score.total)}</span>`:u==="style"?`<span class="sc">${Fe(x.score.total)}</span>`:m||x.score.time!=null?`<span class="sc">${bc(x.score.time)}</span>`:"":"",v=o?" rv":"";if(h.innerHTML=`
    <div class="panel results-card${s&&ua(s)>=6?" ev-hype":""}">
      ${Hd("Official results")}
      ${s?Sc(s):""}
      ${t?wc(t):""}
      <div class="big-pos ${yc(n)}${v?" rv-late":""}">${n}<small>${d}</small></div>
      <div class="payout-line${f<0?" loss":""}${v?" rv-late":""}">
        Bet ${Fe(i)} &rarr; paid <b>${Fe(r)}</b> chips
      </div>
      ${g}
      <ul class="standings">
        ${e.map(x=>`<li class="${x.me?"me ":""}${yc(x.pos)}${v}" data-pos="${x.pos}">
              <span class="p">${x.pos}<small>${da[x.pos-1]}</small></span>
              <span class="dot" style="background:${Sa(x.color)}"></span>
              <span class="nm">${x.name}</span>
              ${p(x)}
              ${x.me?`<span class="mult">&times;${x.mult}</span>`:""}
            </li>`).join("")}
      </ul>
      <div class="results-btns">
        <button id="res-lodge">Back to Lodge</button>
        <button id="res-again" class="primary">Race Again</button>
      </div>
      ${Vd()}
    </div>`,lr().appendChild(h),o){const x=[...h.querySelectorAll(".standings li")].sort((_,E)=>Number(E.dataset.pos)-Number(_.dataset.pos));x.forEach((_,E)=>setTimeout(()=>_.classList.add("in"),500+E*750)),setTimeout(()=>h.querySelectorAll(".rv-late").forEach(_=>_.classList.add("in")),500+x.length*750+200)}return h.querySelector("#res-again").addEventListener("click",()=>{h.remove(),c()}),h.querySelector("#res-lodge").addEventListener("click",()=>{h.remove(),l()}),h}let Yr=null;function Wd(){if(Yr)return Yr;const s=document.createElement("canvas");s.width=s.height=96;const t=s.getContext("2d"),e=[[48,48,34,.85],[36,40,20,.6],[60,42,18,.62],[44,60,22,.58],[58,58,15,.55],[38,55,12,.5]];for(const[n,i,r,a]of e){const o=t.createRadialGradient(n,i,1,n,i,r);o.addColorStop(0,`rgba(255,255,255,${a})`),o.addColorStop(.55,`rgba(255,255,255,${a*.45})`),o.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=o,t.fillRect(0,0,96,96)}return Yr=new _a(s),Yr}class Tc{constructor(t,e=900,n={}){this.max=e,this.cursor=0,this.gravity=n.gravity??7.5,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.age=new Float32Array(e).fill(1e9),this.life=new Float32Array(e).fill(1),this.size0=new Float32Array(e),this.aSize=new le(new Float32Array(e),1),this.aAlpha=new le(new Float32Array(e),1),this.aShade=new le(new Float32Array(e).fill(1),1);const i=new me;this.aPos=new le(this.pos,3),i.setAttribute("position",this.aPos),i.setAttribute("aSize",this.aSize),i.setAttribute("aAlpha",this.aAlpha),i.setAttribute("aShade",this.aShade);const r=new An({transparent:!0,depthWrite:!1,blending:n.blending??Ii,uniforms:{uTex:{value:Wd()},uColor:{value:new L(...n.color??[.97,.99,1])}},vertexShader:`
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
        }`});this.points=new qc(i,r),this.points.frustumCulled=!1,t.add(this.points)}spawn(t,e,n,i,r,a,o,c){const l=this.cursor;this.cursor=(this.cursor+1)%this.max,this.pos[l*3]=t,this.pos[l*3+1]=e,this.pos[l*3+2]=n,this.vel[l*3]=i,this.vel[l*3+1]=r,this.vel[l*3+2]=a,this.age[l]=0,this.life[l]=c,this.size0[l]=o,this.aShade.array[l]=.85+Math.random()*.22}burst(t,e,{count:n=60,speed:i=6,up:r=3.5,spread:a=.8,size:o=.32,life:c=.8}={}){for(let l=0;l<n;l++){const h=(Math.random()-.5)*a*2,d=Math.cos(h),f=Math.sin(h),u=e.x*d-e.z*f,m=e.x*f+e.z*d,b=i*(.4+Math.random()*.9);this.spawn(t.x+(Math.random()-.5)*.5,t.y+.1+Math.random()*.25,t.z+(Math.random()-.5)*.5,u*b,r*(.5+Math.random()),m*b,o*(.6+Math.random()*.8),c*(.6+Math.random()*.8))}}update(t){const{pos:e,vel:n,age:i,life:r,size0:a,max:o}=this,c=this.aSize.array,l=this.aAlpha.array;for(let h=0;h<o;h++){if(i[h]>=r[h]){l[h]=0,c[h]=0;continue}i[h]+=t;const d=i[h]/r[h];n[h*3+1]-=this.gravity*t;const f=1-1.6*t;n[h*3]*=f,n[h*3+1]*=1-.4*t,n[h*3+2]*=f,e[h*3]+=n[h*3]*t,e[h*3+1]+=n[h*3+1]*t,e[h*3+2]+=n[h*3+2]*t;const u=Math.min(1,i[h]/.07);l[h]=Math.pow(1-d,1.2)*u,c[h]=a[h]*(.5+d*1.9)}this.aPos.needsUpdate=!0,this.aSize.needsUpdate=!0,this.aAlpha.needsUpdate=!0,this.aShade.needsUpdate=!0}}class lu{constructor(t,e,n){const i=n.type==="ski"?[{off:-.175,w:.065,wMax:.5,tail:.45},{off:.175,w:.065,wMax:.5,tail:.45}]:n.type==="board"?[{off:0,w:.16,wMax:.62,tail:.32}]:n.id==="sled-saucer"?[{off:0,w:.36,wMax:.4,tail:.25}]:[{off:-.21,w:.045,wMax:.1,tail:.42},{off:.21,w:.045,wMax:.1,tail:.42}];this.tracks=i.map(r=>({...r,trail:new jd(t,e,r.w)}))}push(t,e,n,i,r=0){const a=Math.cos(n),o=Math.sin(n),c=-Math.sin(n),l=Math.cos(n);for(const h of this.tracks){const d=h.w+(h.wMax-h.w)*r,f=h.tail*(1-r*.8);h.trail.push(t+a*h.off+c*f,e+o*h.off+l*f,i,d)}}update(t){for(const e of this.tracks)e.trail.update(t)}}class jd{constructor(t,e,n=.34,i=230){this.terrain=e,this.width=n,this.max=i,this.points=[],this.minDist=1.1;const r=new me;this.aPos=new le(new Float32Array(i*2*3),3),this.aCol=new le(new Float32Array(i*2*3),3),this.aNorm=new le(new Float32Array(i*2*3),3),r.setAttribute("position",this.aPos),r.setAttribute("color",this.aCol),r.setAttribute("normal",this.aNorm);const a=[];for(let c=0;c<i-1;c++){const l=c*2;a.push(l,l+2,l+1,l+1,l+2,l+3)}r.setIndex(a),r.setDrawRange(0,0),this.geo=r,this.mesh=new ne(r,new _e({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4})),this.mesh.frustumCulled=!1,t.add(this.mesh);const o=new mt(e.theme?.snow??15923197);this.trackCol=o.clone().multiplyScalar(.75),this.snowCol=o,this.fadeTime=15,this.minDist=.55,this.head=null}push(t,e,n,i=this.width){if(!n){this.points.length&&this.points[this.points.length-1]!==null&&this.points.push(null),this.head=null;return}this.head={x:t,z:e,age:0,w:i};const r=[...this.points].reverse().find(a=>a);if(!(r&&Math.hypot(t-r.x,e-r.z)<this.minDist))for(this.points.push({x:t,z:e,age:0,w:i});this.points.length>this.max-1;)this.points.shift()}update(t){const e=this.points;for(const m of e)m&&(m.age+=t);for(;e.length&&e[0]&&e[0].age>this.fadeTime;)e.shift();for(;e.length&&e[0]===null;)e.shift();const n=e.slice(),i=[...e].reverse().find(m=>m);this.head&&i&&Math.hypot(this.head.x-i.x,this.head.z-i.z)>.03&&n.push(this.head);const r=this.aPos.array,a=this.aCol.array,o=this.aNorm.array,c=new L;let l=0;const h=new mt,d=.05,f=(m,b,g)=>{for(const p of[0,1])r[l*6+p*3]=m,r[l*6+p*3+1]=b,r[l*6+p*3+2]=g,a[l*6+p*3]=h.r,a[l*6+p*3+1]=h.g,a[l*6+p*3+2]=h.b,o[l*6+p*3]=0,o[l*6+p*3+1]=1,o[l*6+p*3+2]=0;l++};let u=!1;for(let m=0;m<n.length&&l<this.max;m++){const b=n[m];if(!b){u=l>0;continue}u&&l<this.max-2&&(f(r[(l-1)*6],r[(l-1)*6+1],r[(l-1)*6+2]),f(b.x,this.terrain.heightAt(b.x,b.z)+d,b.z),u=!1);const g=n[m+1]||null,p=n[m-1]||null;let v=0,x=-1;g?(v=g.x-b.x,x=g.z-b.z):p&&(v=b.x-p.x,x=b.z-p.z);const _=Math.hypot(v,x)||1,E=-x/_,T=v/_,w=this.terrain.heightAt(b.x,b.z)+d,P=b.w??this.width;r[l*6]=b.x+E*P,r[l*6+1]=w,r[l*6+2]=b.z+T*P,r[l*6+3]=b.x-E*P,r[l*6+4]=this.terrain.heightAt(b.x-E*P,b.z-T*P)+d,r[l*6+5]=b.z-T*P,this.terrain.normalAt(b.x,b.z,c),h.copy(this.trackCol).lerp(this.snowCol,Math.min(1,b.age/this.fadeTime));for(const M of[0,1])a[l*6+M*3]=h.r,a[l*6+M*3+1]=h.g,a[l*6+M*3+2]=h.b,o[l*6+M*3]=c.x,o[l*6+M*3+1]=c.y,o[l*6+M*3+2]=c.z;l++}this.geo.setDrawRange(0,Math.max(0,(l-1)*6)),this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aNorm.needsUpdate=!0}}function Xd(s=cr.utah){const t=new ar(2600,16,10),e=new An({side:Be,depthWrite:!1,fog:!1,uniforms:{top:{value:new mt(s.skyTop)},bottom:{value:new mt(s.skyBottom)}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec3 top; uniform vec3 bottom; varying vec3 vDir;
      void main() {
        float t = clamp(vDir.y * 1.3 + 0.28, 0.0, 1.0);
        gl_FragColor = vec4(mix(bottom, top, t), 1.0);
      }`}),n=new ne(t,e);return n.frustumCulled=!1,n}const Ac={shadows:!0};function qd(s,t=cr.utah){const e=new gd(t.hemiSky,t.hemiGround,t.hemiI);s.add(e);const n=new ha(t.sunCol,t.sunI);if(n.position.set(75,85,35),s.add(n),s.add(n.target),Ac.shadows){n.castShadow=!0,n.shadow.mapSize.set(1024,1024);const i=n.shadow.camera;i.left=-26,i.right=26,i.top=26,i.bottom=-26,i.near=1,i.far=320,n.shadow.bias=-4e-4,n.shadow.normalBias=.5}return{hemi:e,sun:n}}function Yd(s,t){s.position.set(t.x+75,t.y+85,t.z+35),s.target.position.copy(t)}class Kd{constructor(t,e=450,n=70){this.range=n;const i=new Float32Array(e*3);this.vel=new Float32Array(e);for(let o=0;o<e;o++)i[o*3]=(Math.random()-.5)*n*2,i[o*3+1]=(Math.random()-.5)*n,i[o*3+2]=(Math.random()-.5)*n*2,this.vel[o]=1.5+Math.random()*2.5;const r=new me;r.setAttribute("position",new le(i,3));const a=new Xc({color:16777215,map:Wd(),size:.3,transparent:!0,opacity:.85,alphaTest:.02,sizeAttenuation:!0,depthWrite:!1});this.points=new qc(r,a),this.points.frustumCulled=!1,t.add(this.points),this.center=new L}update(t,e){this.center.copy(e),this.points.position.copy(e);const n=this.points.geometry.attributes.position,i=this.range;for(let r=0;r<n.count;r++){let a=n.getY(r)-this.vel[r]*t;a<-i/2&&(a+=i),n.setY(r,a),n.setX(r,n.getX(r)+Math.sin((a+r)*.5)*t*.6)}n.needsUpdate=!0}}const Yv=["PowderPete","alpine_ana","YetiLars","carve_queen","BigAirBen","SluffDog","glacier_gal","MogulMax","heli_hank","IceViper","SnowcatSam","backcountry_bea","AvyDodger","CorduroyKid","FirstChair","wax_wizard"],Kv=[15231548,5488880,12154856,8248162,15777866,15760048,9347327,6478784];function $v(s){const t=[...Yv],e=[...Kv],n=[];for(let i=0;i<4;i++){const r=Math.floor(s()*t.length),a=Math.floor(s()*e.length);n.push({name:t.splice(r,1)[0],color:e.splice(a,1)[0]})}return n}function $d(s){const t=Jn(s^24301),e=$v(t),n=e.map(()=>Yn[Math.floor(t()*Yn.length)]),i=[0,1,3,4].sort(()=>t()-.5);return e.map((r,a)=>({identity:r,gear:n[a],lane:i[a]}))}const Jv=.2;class Qv{constructor(t,e){this.seed=t,this.onStart=e,this.scene=new Hc,this.scene.fog=new ba(14479359,220,1100),this.camera=new Ce(64,innerWidth/innerHeight,.1,4e3),this.terrain=new Rd(t);const n=new ve;this.terrain.build(n),this.scene.add(n),this.scene.add(Xd()),this.sun=qd(this.scene).sun;const i=this.terrain.gateLanes[2];Yd(this.sun,new L(i.x,this.terrain.heightAt(i.x,i.z),i.z)),this.snow=new Kd(this.scene,350),this.gate=new Sd(this.terrain),this.scene.add(this.gate.group),this._laneNames=[null,null,"You",null,null],this.gate.setRoster(this._laneNames),this.fx=new Tc(this.scene,220);const r=$d(t);this.botIdentities=r.map(o=>o.identity),this.botGear=r.map(o=>o.gear),this.botLanes=r.map(o=>o.lane);const a=Jn(t^68529);this.hero=new L(i.x,0,i.z-12),this.hero.y=this.terrain.groundAt(this.hero.x,this.hero.z),this.playerRider=null,this._dress(),this.joinQueue=this.botIdentities.map((o,c)=>({at:.25+a()*1.65,identity:o,gear:this.botGear[c],lane:this.botLanes[c],joined:!1})),this.botRiders=[],this.hud=new Gv({onGearChange:o=>{Ht.gearId=o.id,Kn(),this._dress()},onOutfitChange:o=>{Ht.outfitId=o.id,Kn(),this._dress()},onBetChange:()=>Kn(),onStart:()=>this._start()}),this.t=0,window.__fp={menu:this,setPose:Tn}}_dress(){this.playerRider&&this.scene.remove(this.playerRider.root);const t=xc(Ht.gearId),e=vc(Ht.outfitId);this.playerRider=sr(t,16498468,e),this.playerRider.root.position.copy(this.hero),this._standOnSnow(this.playerRider),this.scene.add(this.playerRider.root)}_standOnSnow(t){const e=t.root.position,n=this.terrain.groundNormalAt(e.x,e.z);t.root.quaternion.setFromUnitVectors(new L(0,1,0),n),e.y+=.09}_start(){Kn(),this.onStart({seed:this.seed,bet:this.hud.bet,gear:this.hud.gear,outfit:this.hud.outfit,bots:this.botIdentities.map((t,e)=>({identity:t,gear:this.botGear[e],lane:this.botLanes[e]}))})}update(t){this.t+=t;for(const c of this.joinQueue)if(!c.joined&&this.t>=c.at){c.joined=!0;const l=sr(c.gear,c.identity.color),h=this.terrain.gateLanes[c.lane];l.root.position.set(h.x,this.terrain.groundAt(h.x,h.z),h.z),this._standOnSnow(l),this.scene.add(l.root),this.botRiders.push(l),this.hud.addRider({name:c.identity.name,color:c.identity.color,gearName:c.gear.name}),this._laneNames[c.lane]=c.identity.name,this.gate.setRoster(this._laneNames)}for(const[c,l]of this.botRiders.entries())Tn(l,{idle:!0,t:this.t+c*1.7,dt:t}),l.rig.rotation.z=Math.sin(this.t*1.3+c*2.1)*.03;this.playerRider&&Tn(this.playerRider,{idle:!0,t:this.t,dt:t});const e=this.hero,n=Math.sin(this.t*.22)*.75,i=4,r=e.x+Math.sin(n)*i,a=e.z-Math.cos(n)*i,o=Math.max(e.y+.9+Math.sin(this.t*.31)*.12,this.terrain.groundAt(r,a)+.7);this.camera.position.set(r,o,a),this.camera.lookAt(e.x,e.y+1.4,e.z),this.gate.update(t,this.t,this.fx,null,this.camera.position.z),this.fx.update(t),this.snow.update(t,this.camera.position)}resize(t,e){this.camera.aspect=t/e,this.camera.setViewOffset(t,e,0,Math.round(e*Jv),t,e),this.camera.updateProjectionMatrix()}destroy(){this.hud.destroy()}}const hu=8,Zv=15,uu=.0095,tM=.55,eM=14,Bs=1.15,du=320,fu=.35,nM={left:"Backside 360",right:"Frontside 360",up:"Front Flip",down:"Backflip"},iM={left:"Backside 180",right:"Frontside 180"},sM={"left+up":{name:"Backside Rodeo",spin:-1,flip:-1,roll:.6,pose:"grab"},"right+up":{name:"Misty Flip",spin:1,flip:-1,roll:-.6,pose:"grab"},"left+down":{name:"Backside Jackknife",spin:-1,flip:0,roll:.45,pose:"jackknife"},"right+down":{name:"Frontside Superman",spin:1,flip:0,roll:-.45,pose:"superman"}},pu=250,mu=120,rM=150,aM=150,oM=15*Math.PI/180,gu=new L(0,1,0),cM=new L(0,0,-1),bu=new Yt,ln=Math.PI*2,vo=s=>s==="up"||s==="down";class lM{constructor(t,e,n,i,r=null){this.terrain=t,this.input=n,this.hud=i,this.rider=sr(e,16498468,r),this.obj=this.rider.root,this._mats=[],this.obj.traverse(a=>{a.isMesh&&a!==this.rider.shadow&&(a.material=a.material.clone(),this._mats.push(a.material))}),this._ghost=1,this.immuneT=0,this._tilt=new Yt,this._yawQ=new Yt,this._n=new L,this.isSled=e.type==="sled",this.isBoard=e.type==="board",this.pos=new L,this.yaw=0,this.travelYaw=0,this.edge=0,this.latA=0,this.slip=0,this.speed=0,this.vy=0,this.airborne=!1,this.stumbleT=0,this.frozen=!0,this.finished=!1,this.groundVy=0,this.landComp=0,this._landT=-1,this._landAmp=0,this.fx=null,this.t=0,this.knockT=0,this._wasBraking=!1,this.bump=0,this.trickSpin=0,this.trickFlip=0,this.spinDone=0,this.flipDone=0,this.combo=[],this.style=0,this.pending=0,this._pipeReturn=0,this._boostT=0,this._pendDir=null,this._special=null,this._roll=new Yt,this._knuckle=!1,this.switchRide=!1,this._halfDone=!1,this._lookSide=1,this._onSwipe=a=>this._trick(a),n.onSwipe=this._onSwipe}placeAt(t,e){this.pos.set(t,this.terrain.groundAt(t,e),e),this._sync(0)}get progress(){return-this.pos.z}_trick(t){if(!this.airborne||this.finished)return;const e=performance.now(),n=this._pendDir;if(n&&e-n.at<mu&&vo(t)!==vo(n.dir)){this._pendDir=null,this._specialTrick(n.dir,t);return}n&&(this._pendDir=null,this._basicTrick(n.dir)),this._pendDir={dir:t,at:e}}_flushTrick(t=!1){const e=this._pendDir;e&&(t||performance.now()-e.at>=mu)&&(this._pendDir=null,this.airborne&&!this.finished&&this._basicTrick(e.dir))}_basicTrick(t){let e=nM[t];if(t==="left"||t==="right"){const n=this.switchRide&&!this._halfDone,i=n?Math.PI:ln;this.trickSpin+=t==="left"?-i:i,n&&(this._halfDone=!0,e=iM[t])}else t==="up"?this.trickFlip-=ln:this.trickFlip+=ln;this._score(e,this._knuckle?rM:100)}_specialTrick(t,e){const n=vo(t)?`${e}+${t}`:`${t}+${e}`,i=sM[n];i&&(i.spin&&(this.trickSpin+=i.spin*(this.switchRide&&!this._halfDone?Math.PI:ln)),this.switchRide&&!this._halfDone&&i.spin&&(this._halfDone=!0),i.flip&&(this.trickFlip+=i.flip*ln),this._special={kind:i.pose,roll:i.roll,t:0},this._score(i.name,this._knuckle?pu*1.5:pu))}_score(t,e){this.combo.push(t),this.pending+=Math.round(e*this.combo.length),this.hud&&this.hud.trickToast(this.combo.join(" + "),`${this.pending} riding on the landing${this._knuckle?" · knuckle":""}`)}update(t){const e=this.terrain,n=this.input;if(this.t+=t,this.frozen){this._sync(t),Tn(this.rider,{tuck:n.tuck?1:0,idle:!n.tuck,t:this.t});return}this.knockT>0&&(this.knockT-=t);const i=Math.max(0,Math.min(1,Math.min(this.knockT*3,(1.7-this.knockT)*4)));if(this.finished){this.speed=Math.max(0,this.speed-11*t);const u=new L(Math.sin(this.yaw),0,-Math.cos(this.yaw)),m=this.pos.x+u.x*this.speed*t,b=this.pos.z+u.z*this.speed*t;this.pos.set(m,this.terrain.groundAt(m,b),b),this.airborne=!1,this._sync(t),Tn(this.rider,{brake:this.speed>1.5?1:0,idle:this.speed<=1.5,t:this.t,dt:t});return}const r=this.stumbleT>0||this.knockT>0;this.stumbleT>0&&(this.stumbleT-=t),this.immuneT>0&&(this.immuneT-=t),this._boostT>0&&(this._boostT-=t);const a=this.progress;this._landT>=0&&(this._landT+=t,this.landComp=Ld(this._landT,this._landAmp),this._landT>1.1&&(this._landT=-1));const o=r?n.steer*.25:n.steer;if(this.isSled){const u=gt(o,-1,1)*Bs;this.yaw=ge(this.yaw,u,gt(t*(this.airborne?1:2.8),0,1))}else if(this.airborne){const u=gt(o,-1,1)*Bs;this.yaw=ge(this.yaw,u,gt(t*1,0,1)),this.edge=ge(this.edge,gt(o,-1,1),gt(t*2,0,1))}else{this.edge=ge(this.edge,gt(o,-1,1),gt(t*2.4,0,1));const u=this.edge*(.55+.75*gt(this.speed/24,0,1.2));this.yaw+=u*t;const m=Math.abs(o)<.12?.9:.2;this.yaw=ge(this.yaw,0,gt(t*m,0,1)),this.yaw=gt(this.yaw,-Bs,Bs)}if(!this.airborne){const u=this.input.brake&&!r;let m;this.isSled?m=(4.2-2.6*gt(this.speed/40,0,1))*.7*(u?.55:1):u?m=2:m=8.5-2.2*gt(this.speed/40,0,1),r&&(m*=.7);const b=this.travelYaw;this.travelYaw=ge(this.travelYaw,this.yaw,gt(t*m,0,1));const g=t>0?(this.travelYaw-b)/t:0;this.latA=ge(this.latA,this.speed*g,gt(t*5,0,1))}this.slip=this.yaw-this.travelYaw;const c=new L(Math.sin(this.travelYaw),0,-Math.cos(this.travelYaw));if(this.airborne){this._prevPipeQ=null,this._flushTrick(),this.vy-=Zv*(this._knuckle?.55:1)*t,this.speed=Math.max(0,this.speed-uu*(this._knuckle?.2:.4)*this.speed*this.speed*t),this._special&&(this._special.t+=t);let u=this.pos.x+c.x*this.speed*t,m=this.pos.z+c.z*this.speed*t;({nx:u,nz:m}=this._tubeClamp(u,m,c));const b=this.pos.y+this.vy*t;if(!(this._grindT>0)){const E=e.grindAt(u,-m);if(E&&b<E.topY+.15&&b>E.topY-1.05){const T=Math.sign(E.lat||1)*1.15;u=E.gx+E.ax*E.along+E.az*T,m=-(E.gs0+E.az*E.along-E.ax*T),this.speed*=.4}}const g=e.groundAt(u,m),p=6.2,v=5.4,x=this.spinDone,_=this.flipDone;if(this.spinDone=_u(this.spinDone,this.trickSpin,p*t),this.flipDone=_u(this.flipDone,this.trickFlip,v*t),t>0&&(this.twist=ge(this.twist??0,gt((this.spinDone-x)/t/7,-1,1),gt(t*9,0,1)),this.curl=ge(this.curl??0,gt(Math.abs(this.flipDone-_)/t/6,0,1),gt(t*9,0,1))),b<=g){this._flushTrick(!0),this.pos.set(u,g,m),this.airborne=!1;const E=Math.abs(this.trickSpin-this.spinDone),T=Math.abs(this.trickFlip-this.flipDone),w=this.switchRide?Math.PI:0,P=((w+this.spinDone)%ln+ln)%ln,M=T<=.9&&E>.9&&Math.abs(P-Math.PI)<=oM,y=!M&&(E>.9||T>.9),S=Math.min(1,-this.vy/14);if(this._landT=0,this._landAmp=.45+S*.55,this.fx&&this.fx.burst(this.pos,c,{count:32+Math.round(S*80),speed:3+S*6,up:2.5+S*3,spread:1.4,size:.28}),y)this.stumble(this.pending>0?`crashed the landing — lost ${this.pending}`:"crashed the landing"),this.pending=0;else if(this.combo.length){this.speed+=1.5;const C=this.switchRide;if(M){const I=this.combo.length-1;this.combo[I]=this.combo[I].replace("360","180"),this.switchRide=!C,this._lookSide=this.spinDone<0?-1:1}else this.switchRide=Math.abs(((w+this.trickSpin)%ln+ln)%ln-Math.PI)<.01;this.switchRide&&!C&&(this.pending+=aM,this.combo.push("Switch landing")),this.style+=this.pending,this.hud&&this.hud.trickToast(`STOMPED IT  +${this.pending}`,this.combo.join(" + ")),this.pending=0}this.pending=0,this.trickSpin=this.spinDone=0,this.trickFlip=this.flipDone=0,this.combo=[],this._special=null,this._knuckle=!1,this._halfDone=!1,this.vy=0,this._pipeReturn&&(this.yaw=this.travelYaw=this._pipeReturn*1.1,this._pipeReturn=0)}else this.pos.set(u,b,m)}else{const m=e.groundAt(this.pos.x,this.pos.z),b=e.groundAt(this.pos.x+c.x*1.6,this.pos.z+c.z*1.6),g=(m-b)/1.6;let p=hu*g;const v=n.tuck&&!r,x=n.brake&&!r,_=x&&e.nearGrindEntry(this.pos.x,-this.pos.z),E=uu*(v?tM:1)*(x?_?1.4:4:1)*(this._boostT>0?.35:1);if(p-=E*this.speed*this.speed,x&&(p-=eM*(_?.18:1)),r&&(p-=6),this.knockT>0&&(p-=10),v&&this.speed<5&&!x&&(p+=3.4+Math.max(0,-g)*hu*.95),x&&!this._wasBraking&&this.fx&&this.speed>8){const M=Math.sign(n.steer)||1;this.fx.burst(this.pos,{x:M*-c.z,z:M*c.x},{count:130,speed:5,up:3,spread:1.1,size:.24})}this._wasBraking=x,p-=Math.abs(this.slip)*this.speed*.055,this.isSled||(p-=Math.abs(this.edge)*this.speed*(this.isBoard?.058:.046)),this._grindT>0&&(p=-.5),this.speed=Math.max(0,this.speed+p*t);let T=this.pos.x+c.x*this.speed*t,w=this.pos.z+c.z*this.speed*t;for(const M of e.ledgeWallsAt(-w)){const y=(this.pos.x-M.x)*M.side,S=(T-M.x)*M.side;y<.05&&S>-.35&&(T=M.x-M.side*.4,this.speed*=Math.abs(c.z)*.85)}let P=!1;if(n.brake&&!r&&this.speed>5){const M=e.grindAt(T,-w);M&&(this._grindT>0||this.pos.y>M.topY-1.4)&&(P=!0,this._grindT=(this._grindT||0)+t,this.travelYaw=M.yaw,this.pos.set(M.px,M.topY,M.pz),this.vy=0,this.groundVy=0,this.style+=45*t)}if(!P&&this._grindT>0){const M=this._grindT;this._grindT=0,this.airborne=!0,this.vy=2.4,this.pos.set(T,this.pos.y+this.vy*t,w),this.hud&&M>.35&&(this.hud.trickToast("LOG GRIND",`${M.toFixed(1)}s on the rail`),this.style+=60+Math.round(M*45)),P=!0}if(!P){({nx:T,nz:w}=this._tubeClamp(T,w,c));const M=e.groundAt(T,w),y=this.groundVy,S=t>0?(M-this.pos.y)/t:0;this.groundVy=ge(this.groundVy,gt(S,-30,30),gt(t*10,0,1));const C=e.pipeAt(T,-w);let I=!1;if(C&&Math.abs(C.q)>=C.lipQ&&this._prevPipeQ!=null&&Math.abs(this._prevPipeQ)<C.lipQ&&this.groundVy>3&&this.speed>7){I=!0,this.airborne=!0,this.vy=gt(this.groundVy*.9,5,13),performance.now()-n.lastTuckRelease<du&&(this.vy+=4.2,this.hud&&this.hud.trickToast("POP!","off the lip"));const k=0,U=c.z*this.speed;this._pipeReturn=-Math.sign(C.q),this.speed=Math.hypot(k,U),this.travelYaw=Math.atan2(k,-U),this.pos.set(T,this.pos.y+this.vy*t,w)}if(this._prevPipeQ=C?C.q:null,I||(M<this.pos.y-Math.max(.55,.9*this.speed*t)&&this.speed>6?(this.airborne=!0,this.vy=gt(y,0,e.launchCapAt(-w)),x&&this.speed>8?(this._knuckle=!0,this.vy=Math.max(.8,this.vy*.35),this.speed*=1.12,this.hud&&this.hud.trickToast("KNUCKLE HUCK","drifted the lip")):performance.now()-n.lastTuckRelease<du&&(this.vy+=4.2,this.hud&&this.hud.trickToast("POP!","perfect release")),this.pos.set(T,this.pos.y+this.vy*t,w)):(this.pos.set(T,M,w),this.vy=0)),this.airborne||this._collide(),!this.airborne&&!r){const k=e.boostGateAt(this.pos.x,a,this.progress);k&&(this.speed=Math.min(this.speed+7,46),this._boostT=1.6,e.flashGate(k),this.hud&&this.hud.trickToast("BOOST!","gate threaded"),this.fx&&this.fx.burst(this.pos,c,{count:60,speed:5,up:2,spread:1.2,size:.24}))}}}if(this.fx&&!this.airborne&&!(this._grindT>0)&&this.speed>7){const u=Math.abs(this.slip)*2.2+Math.abs(this.latA)/11+Math.abs(this.yaw)/Bs*.25,m=n.brake&&!r?1:0,g=(.15+u*1.6+m*3+(r?2:0))*this.speed*.9;this._sprayAcc=(this._sprayAcc||0)+g*t*60;const p=Math.sign(this.yaw)||(Math.random()<.5?-1:1);for(;this._sprayAcc>=1;){this._sprayAcc-=1;const v=.6+Math.random()*.5;this.fx.spawn(this.pos.x-c.x*v+p*-c.z*.35,this.pos.y+.16,this.pos.z-c.z*v+p*c.x*.35,-c.x*2+p*-c.z*(1.5+u*4+m*5)+(Math.random()-.5)*2,1.2+u*2+m*2.5+Math.random()*1.5,-c.z*2+p*c.x*(1.5+u*4+m*5)+(Math.random()-.5)*2,.15+u*.1+m*.15,.5+Math.random()*.4)}}const l=this.rider.mittDrag??0;if(this.fx&&!this.airborne&&l>.4&&this.rider.mittWorld&&this.speed>8){this._mittAcc=(this._mittAcc||0)+l*this.speed*.26*t*60;const u=this.rider.mittWorld;for(;this._mittAcc>=1;)this._mittAcc-=1,this.fx.spawn(u.x+(Math.random()-.5)*.12,u.y-.05,u.z+(Math.random()-.5)*.12,-c.x*1.5+(Math.random()-.5)*.8,.6+Math.random()*.7,-c.z*1.5+(Math.random()-.5)*.8,.1+Math.random()*.05,.3+Math.random()*.25)}this._sync(t);const h=this.airborne?0:gt(Math.abs(this.groundVy)*.045,0,.4);this.bump=ge(this.bump,h,gt(t*5,0,1)),this.airborne||(this.twist=ge(this.twist??0,0,gt(t*10,0,1)),this.curl=ge(this.curl??0,0,gt(t*10,0,1)));const d=t>0?(this.speed-(this._prevSpeed??this.speed))/t:0;this._prevSpeed=this.speed,this.longA=ge(this.longA??0,gt(d,-18,12),gt(t*7,0,1));const f=this._special?Math.sin(Math.PI*gt(this._special.t/.9,0,1)):0;Tn(this.rider,{tuck:n.tuck&&!r?1:0,brake:n.brake&&!r?1:0,steer:gt(this.latA/11,-1,1)*(this.switchRide?-1:1),switchRide:this.switchRide,lookSide:this._lookSide,special:this._special?{kind:this._special.kind,amt:f}:null,drift:this._knuckle&&this.airborne?1:0,shift:gt((n.tuck?.45:0)-Math.abs(this.slip)*1.3-(n.brake?.5:0),-1,.5),stumble:this.stumbleT>0?1:0,knocked:i,airborne:this.airborne,crouch:gt(this.landComp+this.bump,-.2,1),speedNorm:gt(this.speed/26,0,1),longG:gt(this.longA/11,-1,1),jolt:this.bump*1.3,twist:this.twist??0,curl:this.curl??0,t:this.t,dt:t})}_tubeClamp(t,e,n){for(const r of this.terrain.hollowTubes){const a=-e-r.s0,o=t-r.x,c=o*r.ax-a*r.az;if(Math.abs(c)>r.halfL)continue;const l=o*r.az+a*r.ax,h=-this.pos.z-r.s0,d=this.pos.x-r.x,f=d*r.ax-h*r.az,u=d*r.az+h*r.ax,{rIn:m,rOut:b}=Td(r,c),g=r.axY0+c*r.axSlope;let p=1/0,v=0;for(const P of[.12,1.5]){const M=this.pos.y+P-g;Math.abs(M)>=b||(v=Math.max(v,Math.sqrt(b*b-M*M)),p=Math.min(p,Math.abs(M)<m?Math.sqrt(m*m-M*M):0))}if(v===0)continue;p===1/0&&(p=0);const x=Math.abs(l);if(x+.55<=p||x-.55>=v)continue;if(Math.abs(f)>r.halfL){const P=Math.sign(f)*(r.halfL+.35);t=r.x+r.ax*P+r.az*l,e=-(r.s0-r.az*P+r.ax*l),this.speed*=.25,!this.airborne&&this.stumbleT<=0&&this.immuneT<=0&&this.stumble("slammed a log");continue}const _=Math.max(0,p-.55),E=v+.55,T=Math.sign(l||u||1)*(x-_<=E-x?_:E);t=r.x+r.ax*c+r.az*T,e=-(r.s0-r.az*c+r.ax*T);const w=n.x*r.ax+n.z*r.az;this.travelYaw=w>=0?Math.atan2(r.ax,-r.az):Math.atan2(-r.ax,r.az),this.speed*=Math.min(1,Math.abs(w))*.9}return{nx:t,nz:e}}knockDown(t){if(!(this.knockT>0)&&(this.knockT=1.7,this.speed*=.25,this.switchRide=!1,this.hud&&this.hud.stumbleFlash(`taken out by ${t}!`),this.fx)){const e=new L(Math.sin(this.yaw),0,-Math.cos(this.yaw));this.fx.burst(this.pos,e,{count:130,speed:6,up:4.5,spread:2.6,size:.28})}}_collide(){if(this.stumbleT>0||this.immuneT>0)return;const t=this.progress;for(const e of this.terrain.obstaclesNear(t-6,t+6)){const n=this.pos.x-e.x,i=this.pos.z-e.z;if(e.kind==="rock"){const a=e.r+fu;if(n*n+i*i>a*a)continue;const o=Ed(e,n,i);if(o.depth>-fu){this.stumble("hit a boulder"),this.pos.x+=o.nx*1.2,this.pos.z+=o.nz*1.2;break}continue}const r=e.r+.7;if(n*n+i*i<r*r){this.stumble(e.kind==="tree"?"clipped a tree":"slammed a log");const a=Math.max(.1,Math.hypot(n,i));this.pos.x+=n/a*1.2,this.pos.z+=i/a*1.2;break}}}stumble(t){if(this.stumbleT=1.3,this.immuneT=2.5,this.speed*=.35,this.switchRide=!1,this.hud&&this.hud.stumbleFlash(t),this.fx){const e=new L(Math.sin(this.yaw),0,-Math.cos(this.yaw));this.fx.burst(this.pos,e,{count:100,speed:5,up:4,spread:2.2,size:.28})}}_sync(t){const e=this.terrain;this.obj.position.copy(this.pos),this.airborne||(this.obj.position.y+=.09);const n=gt(t*8,0,1),i=this.switchRide?Math.PI:0;if(this.airborne){this._tilt.slerp(bu,gt(t*2,0,1)),this.rider.rig.rotation.y=i+this.spinDone,this.rider.rig.rotation.x=this.flipDone;const c=this._special?this._special.roll*Math.sin(Math.PI*gt(this._special.t/.9,0,1)):0;this._roll.setFromAxisAngle(cM,c)}else{const c=e.groundNormalAt(this.pos.x,this.pos.z,this._n);this._tilt.slerp(new Yt().setFromUnitVectors(gu,c),n),this.rider.rig.rotation.x=ge(this.rider.rig.rotation.x%(Math.PI*2),0,n),this.rider.rig.rotation.y=i,this._roll.slerp(bu,n)}this._yawQ.setFromAxisAngle(gu,-this.yaw),this.obj.quaternion.copy(this._tilt).multiply(this._yawQ).multiply(this._roll);const r=this.immuneT>0?.45+.2*Math.sin(this.t*22):1;if(r!==this._ghost){this._ghost=r;for(const c of this._mats)c.transparent=r<1,c.opacity=r,c.depthWrite=r>=1}const a=e.groundAt(this.pos.x,this.pos.z);this.rider.shadow.position.y=a-this.pos.y+.06;const o=gt(this.pos.y-a,0,10);this.rider.shadow.scale.setScalar(gt(1-o*.07,.3,1))}}function _u(s,t,e){return s<t?Math.min(t,s+e):Math.max(t,s-e)}const xu=27,vu=46,Mu=new L(0,1,0),hM=new Yt,uM=new L,yu=new Yt,dM=22,fM=2.6,Su=[55,175],pM=16;function wu(s,t){return 60*(1-Kt(s-320,s-150,t))}class mM{constructor(t){Object.assign(this,t),this.rider=sr(this.gear,this.identity.color),this.obj=this.rider.root,this._tilt=new Yt,this.d=4,this.speed=0,this.y=0,this.vFall=0,this._landT=-1,this._landAmp=0,this.frozen=!0,this.finished=!1,this.finishTime=null,this.style=0,this.stumbleT=0,this.autopilot=!1,this.personality=Xe(this.seed*.13,991)*18,this.weavePhase=this.seed*2.39,this.overall=t.overall??t.rank,this.vNat=xu+this.personality*.3,this.seedU=(Xe(this.seed*.71,443)+1)/2;const e=this.terrain.length,n=this.script==="lateCharge"?-28:this.script==="earlyLead"?28:0;this.waypoints=[.3,.55,.78].map((i,r)=>{let a=48*Xe(this.seed*.37+r*3.1,523)+n*(r<2?1:.4);return a=this.rank<this.playerRank?gt(a,-70,75):gt(a,-75,wu(e,i*e)*.75),{s:i*e,off:a}}),this.plan=null,this._planCd=0,this._washCd=0,this._surplusT=0,this._holdT=0,this._t=0,this.knockT=0,this.aggro=0,this.aggroCooldown=8,this._aggroBlend=0,this._pushX=0,this.placeAt(this.lane.x,this.lane.z)}placeAt(t,e){this.d=-e,this.y=this.terrain.groundAt(t,e),this.obj.position.set(t,this.y,e)}get ahead(){return this.rank<this.playerRank}lineAt(t){const e=Math.sin(t*.03+this.weavePhase)*7+Math.sin(t*.009+this.weavePhase*2)*6,n=this.personality*.35;return this.terrain.centerAt(t)+gt(e+n,-55*.8,Ee.halfWidth*.8)}pathAt(t){const e=this.plan;if(!e)return this.lineAt(t);const n=e.x-this.lineAt(e.s),i=t<=e.s?Kt(e.s0,e.s-6,t):1-Kt(e.s,e.s+70,t);return this.lineAt(t)+n*i}_planFall(t){const e=this.terrain.length;if(this.plan||this._planCd>0||this.d<250||this.d>e-260)return!1;if(t.time-t._lastPlanT<2.5)return"wait";const n=this.d;let i=null,r=1/0;for(const a of this.terrain.obstaclesNear(n+Su[0],n+Su[1])){const o=-a.z;if(Math.abs(a.x-this.terrain.centerAt(o))>Ee.halfWidth*.85||t._plans.some(h=>Math.abs(h-o)<30))continue;const c=Math.abs(a.x-this.lineAt(o));if(c>pM)continue;const l=c+.06*(o-n);l<r&&(r=l,i=a)}return i?(this.plan={s0:n,s:-i.z,x:i.x,hit:!1,kind:i.kind},this._planCd=16+this.seedU*10,t._plans.push(this.plan.s),t._lastPlanT=t.time,!0):!1}_fall(t,e){this.stumbleT=e?1.5:1.2,this.speed*=e?.35:.5,t.fx&&t.fx.burst(this.obj.position,{x:0,z:-1},{count:e?80:40,speed:5,up:4,spread:2.2,size:.3})}allowance(t,e){const n=wu(t,e);return n*(.55+.45*this.seedU)+8*Xe(this._t*.07+this.seed*2.3,811)*(n/60)}knockDown(){this.knockT>0||(this.knockT=1.6,this.aggro=0)}update(t,e){if(this.frozen)return;this._t+=t,this.stumbleT>0&&(this.stumbleT-=t),this.knockT>0&&(this.knockT-=t);const n=Math.max(0,Math.min(1,Math.min(this.knockT*3,(1.6-this.knockT)*4))),i=this.terrain.length,r=e.player.progress,a=e.player.finished;!this.finished&&this.d>=i&&(this.finished=!0,this.finishTime=e.time,e.onBotFinish(this));let o;if(this._planCd-=t,this._washCd-=t,this.finished)o=Math.max(0,this.speed-13*t);else if(this.autopilot||a||!this.ahead&&this.d>i-45)o=Math.min(this.speed+6*t,this.vNat);else{const E=Math.max(1,e.time-(e.goTime??e.time)),T=gt(r/E,4,44);let w=gt(.55*T+.45*e.player.speed,4,44);r<150&&(w=Math.max(w,xu*.8));const P=this.waypoints.find(X=>X.s>r+60);let M;if(P){const X=(P.s-r)/w;M=(P.s+P.off-this.d)/Math.max(.4,X)}else{const X=(i-r)/w,G=2.2*Xe(this._t*.05+this.seed*1.7,619)*(1-Kt(i-420,i-160,r)),rt=(this.ahead?-1:1)*this.finalGap/dM;M=(i-this.d)/Math.max(.4,X+rt+G)}M=Math.max(0,M);let y=1;this.script==="lateCharge"?y=.86+.14*Kt(.45*i,.75*i,r):this.script==="earlyLead"&&(y=1.12-.12*Kt(.4*i,.7*i,r)),y*=1+.05*Xe(this._t*.2+this.seed*3.1,313);const S=this.vNat*y;let C=this.ahead?Math.max(vu,e.player.speed+8):vu;if(this.d<220&&(C=Math.min(C,e.player.speed+9)),M>S*1.06?o=Math.min(M*1.04+1.5,C):M<S*.94?o=Math.max(M*.97,S*.5):o=S,this.ahead){const X=this.d-r,G=Kt(i-450,i-80,r),it=ge(-70,2.5+(this.playerRank-this.rank-1)*3+6,G)-X;G>0&&it>0&&(C=Math.max(C,e.player.speed+16),o=Math.max(o,e.player.speed+gt(it*.8,2,16)))}else{const X=r-this.finalGap+this.allowance(i,r)-this.d;X<12&&(o=Math.min(o,Math.max(0,e.player.speed+X*1.2-3)))}o=Math.min(o,C);const I=P?P.s+P.off:i,k=Math.max(0,I-this.d)/Math.max(1,M)-Math.max(0,I-this.d)/S,U=fM+this.seedU*1.8;this._surplusT=k>U?this._surplusT+t:0,this._surplusT>2.5+this.seedU*2&&!this.plan&&this.stumbleT<=0&&E>8&&this._planFall(e)===!1&&k>U+2.5&&this._washCd<=0&&this.d>250&&this.d<i-200&&e.time-e._lastPlanT>=2.5&&(this._fall(e,!1),this._washCd=12+this.seedU*8,this._surplusT=0,e._lastPlanT=e.time),this.plan&&!this.plan.hit&&(o=Math.max(o,S*.95)),this.stumbleT<=0&&Xe(this._t*.11+this.seed*3.7,577)>.9&&(this.stumbleT=.9,this.speed*=.85),this.stumbleT>0&&(o=Math.min(o,this.speed)),this.ahead&&e.playerStallTime>5&&(this.autopilot=!0),this.aggroCooldown-=t;const z=r-this.d;this.aggro<=0&&this.aggroCooldown<=0&&this.ahead&&z>3&&z<24&&e.playerKnocks<2&&e.player.knockT<=0&&Xe(this._t*.23+this.seed*5.3,727)>.45&&(this.aggro=6)}this.aggro>0&&(this.aggro-=t),this.knockT>0&&(o=Math.min(o,3));const c=this.speed;if(this.speed=ge(this.speed,o,gt(t*2.5,0,1)),this._longA=ge(this._longA??0,t>0?gt((this.speed-c)/t,-18,12):0,gt(t*7,0,1)),this.d+=this.speed*t,this.plan&&(!this.plan.hit&&this.d>=this.plan.s-1.2&&(this.plan.hit=!0,this.finished||this._fall(e,!0)),this.d>this.plan.s+80&&(this.plan=null)),!this.ahead&&!a&&!this.finished){const E=this.d;this.d=Math.min(this.d,Math.max(r-this.finalGap+this.allowance(i,r),2),i-55);const T=E-this.d>.15&&this.d<i-70;this._holdT=T?this._holdT+t:0;const w=e.player.speed<3?1.2:3.5+this.seedU*3;this._holdT>w&&this._washCd<=0&&this.stumbleT<=0&&(this._fall(e,!1),this._washCd=10+this.seedU*6,this._holdT=0)}this.ahead&&!a&&!this.finished&&r>i-60&&(this.d=Math.max(this.d,r+2.5+(this.playerRank-this.rank-1)*3)),!this.finished&&this.d>=i&&(this.finished=!0,this.finishTime=e.time,e.onBotFinish(this));const l=this.aggro>0&&!this.finished?1:0;this._aggroBlend+=(l-this._aggroBlend)*gt(t*1.6,0,1),this._pushX*=Math.max(0,1-t*2.2);let h=this.pathAt(this.d)+this._pushX;this._aggroBlend>.01&&(h=ge(h,e.player.pos.x,this._aggroBlend*.9)),h=ge(this.lane.x,h,Kt(6,85,this.d));const d=-this.d,f=this.terrain.groundAt(h,d),u=this.vFall;f<=this.y?(this.vFall+=16*t,this.y=Math.max(f,this.y-this.vFall*t)):(this.y=f,this.vFall=0);const m=this.y>f+.2;this._wasAirborne&&!m&&(e.fx&&e.fx.burst(this.obj.position,{x:0,z:-1},{count:14,speed:4,up:3,spread:1.6,size:1.2}),this._landT=0,this._landAmp=.4+Math.min(1,u/12)*.5),this._wasAirborne=m;let b=0;this._landT>=0&&(this._landT+=t,b=Ld(this._landT,this._landAmp),this._landT>1.1&&(this._landT=-1)),this.obj.position.set(h,this.y,d),m||(this.obj.position.y+=.09);const g=Math.atan2(this.pathAt(this.d+7)-this.pathAt(this.d),7);this.visYaw=g;const p=(this.pathAt(this.d+5)-2*this.pathAt(this.d)+this.pathAt(this.d-5))/25,v=gt(this.speed*this.speed*p*.09,-1,1);if(m)this._tilt.slerp(hM,gt(t*2,0,1));else{const E=this.terrain.groundNormalAt(h,d,uM);this._tilt.slerp(yu.setFromUnitVectors(Mu,E),gt(t*8,0,1))}if(this.obj.quaternion.copy(this._tilt).multiply(yu.setFromAxisAngle(Mu,-g)),this.rider.rig.rotation.x=0,this.finished?Tn(this.rider,{brake:this.speed>2?1:0,idle:this.speed<=2,t:this._t+this.weavePhase,dt:t}):Tn(this.rider,{steer:v,tuck:this.speed>21&&this.knockT<=0?1:0,stumble:this.stumbleT>0?1:0,knocked:n,airborne:m,crouch:b,speedNorm:gt(this.speed/26,0,1),longG:gt((this._longA??0)/11,-1,1),t:this._t+this.weavePhase,dt:t}),e.fx&&!m&&this.speed>10){const E=Math.abs(v);this._sprayAcc=(this._sprayAcc||0)+(.25+E*1.1+(this.stumbleT>0?2:0))*this.speed*.32*t*60;const T=Math.sign(v)||1;for(;this._sprayAcc>=1;)this._sprayAcc-=1,e.fx.spawn(h+T*.4,this.y+.05,d+.7,T*(1+E*3.5)+(Math.random()-.5)*2,1+E*2+Math.random()*1.2,2+(Math.random()-.5)*2,.12+E*.09,.45+Math.random()*.35)}const x=this.rider.mittDrag??0;if(e.fx&&!m&&x>.4&&this.rider.mittWorld&&this.speed>8){this._mittAcc=(this._mittAcc||0)+x*this.speed*.15*t*60;const E=this.rider.mittWorld;for(;this._mittAcc>=1;)this._mittAcc-=1,e.fx.spawn(E.x+(Math.random()-.5)*.12,E.y-.05,E.z+(Math.random()-.5)*.12,(Math.random()-.5)*.8,.6+Math.random()*.7,1.2+(Math.random()-.5)*.8,.1+Math.random()*.05,.3+Math.random()*.25)}this.rider.shadow.position.y=f-this.y+.06;const _=gt(this.y-f,0,10);this.rider.shadow.scale.setScalar(gt(1-_*.07,.3,1))}}const li=new L,Kr=new L;let Ws=null;async function gM(){if(!Ws)try{const s=new il;s.setMeshoptDecoder(sl),Ws=(await s.loadAsync(rl("animals"))).scene,Ws.traverse(e=>{e.isMesh&&(e.material=new _e({map:e.material.map}),e.castShadow=!0)})}catch{Ws=null}}const bM={vermont:{label:"a deer",herd:[3,5],speed:10.5,across:5.5,r:.85,gallop:7.5,bob:.3},quebec:{label:"a moose",herd:[1,1],speed:8.5,across:3.5,r:1.4,gallop:5.5,bob:.34},colorado:{label:"an elk",herd:[4,6],speed:10,across:4.5,r:1.1,gallop:6.5,bob:.32},utah:{label:"a bighorn",herd:[2,4],speed:9.5,across:4.5,r:.9,gallop:7,bob:.28},bc:{label:"a mountain goat",herd:[1,2],speed:8.5,across:4,r:.9,gallop:6.5,bob:.28},chile:{label:"a guanaco",herd:[3,6],speed:11,across:5,r:.95,gallop:7,bob:.3},nz:{label:"a sheep",herd:[5,8],speed:7.5,across:3.5,r:.8,gallop:6,bob:.22},swiss:{label:"an ibex",herd:[1,2],speed:9,across:4.5,r:.9,gallop:6.8,bob:.28},japan:{label:"a fox",herd:[2,3],speed:11,across:5,r:.55,gallop:8.5,bob:.2,evGap:.55}};class Js{constructor(t,e,n,i){if(this.scene=t,this.terrain=e,this.spec=bM[n]??null,this.src=this.spec&&Ws?.getObjectByName(`animal_${n}`)||null,this.events=[],this.active=[],this.trails=[],!this.src)return;const r=Jn((i^41233)>>>0);let a=360+r()*300;for(;a<this.terrain.length-380;)this.events.push({s:a,side:r()<.5?-1:1,n:Math.round(this.spec.herd[0]+r()*(this.spec.herd[1]-this.spec.herd[0])),seed:(i^Math.floor(a))>>>0,fired:!1}),a+=(430+r()*380)*(this.spec.evGap??1)}_spawn(t){const e=Jn(t.seed);for(let n=0;n<t.n;n++){const i=t.s+e()*14,r=this.terrain.centerAt(i)+t.side*Ee.halfWidth*(.72+e()*.16)+(e()-.5)*5,a=new ve,o=this.src.clone(),c=[];o.traverse(u=>{u.isMesh&&(u.material=u.material.clone(),c.push(u.material))}),a.add(o),Js._shadowGeo||(Js._shadowGeo=new va(1,14));const l=new Re({color:660512,transparent:!0,opacity:.26,depthWrite:!1}),h=new ne(Js._shadowGeo,l);h.rotation.x=-Math.PI/2,h.position.y=.07,h.scale.setScalar(this.spec.r*1.5),a.add(h),this.scene.add(a);const d=this.spec.r*.18+.05,f=[-1,1].map(u=>{const m=new jd(this.scene,this.terrain,d);return m.minDist=.5,m.trackCol.multiplyScalar(.8),{off:u*this.spec.r*.35,w:d,trail:m}});this.trails.push(...f.map(u=>u.trail)),this.active.push({obj:a,body:o,shadow:h,shMat:l,mats:c,tracks:f,x:r,s:i,y:this.terrain.heightAt(r,-i)+.06,vy:0,air:!1,fade:1,fading:!1,vs:this.spec.speed*(.85+e()*.3),vx:-t.side*this.spec.across*(.75+e()*.5),t:e()*6.3,gallop:this.spec.gallop*(.9+e()*.2)})}}update(t,e,n){if(this.src){for(const i of this.events)!i.fired&&e>i.s-95&&(i.fired=!0,this._spawn(i));for(const i of this.active){i.t+=t,i.s+=i.vs*t,i.x+=i.vx*t;const r=-i.s,a=Math.hypot(i.vx,i.vs)||1,o=i.vx/a,c=-i.vs/a,l=this.spec.r*1.1,h=this.terrain.heightAt(i.x,r),d=this.terrain.heightAt(i.x+o*l,r+c*l),f=this.terrain.heightAt(i.x-o*l,r-c*l),u=Math.max(h,(d+f)/2)+.06;i.air||(u<i.y-.75?(i.air=!0,i.vy=2):i.y=u),i.air&&(i.vy-=13*t,i.y+=i.vy*t,i.y<=u&&(i.y=u,i.air=!1,i.vy=0));const m=Math.abs(Math.sin(i.t*i.gallop));i.obj.position.set(i.x,i.y,r),i.air?li.set(0,1,0):this.terrain.normalAt(i.x,r,li),i.obj.up.copy(li);const b=o*li.x+c*li.z;Kr.set(o-li.x*b,-li.y*b,c-li.z*b),i.obj.lookAt(i.x+Kr.x,i.y+Kr.y,r+Kr.z),i.body.position.y=i.air?0:m*this.spec.bob,i.body.rotation.x=i.air?.12:Math.sin(i.t*i.gallop*2)*.1;const g=i.y-(h+.06);i.shadow.position.y=-g+.07,i.shadow.scale.setScalar(this.spec.r*1.5*Math.max(.35,1-g*.12));const p=!i.air&&m<.45,v=Math.min(1,m/.45),x=p?Math.max(.04,i.tracks[0].w*Math.sqrt(1-v*v)):void 0;for(const _ of i.tracks)_.trail.push(i.x-c*_.off-o*l*.7,r+o*_.off-c*l*.7,p,x);if(n&&!i.fading&&!n.finished&&n.knockT<=0&&n.stumbleT<=0&&!n.airborne){const _=n.pos.x-i.x,E=n.pos.z-r,T=this.spec.r+.8;_*_+E*E<T*T&&n.knockDown(this.spec.label)}if(!i.fading&&(i.s<e-80||i.s>this.terrain.length-40||Math.abs(i.x-this.terrain.centerAt(i.s))>Ee.halfWidth*1.5)){i.fading=!0;for(const _ of i.mats)_.transparent=!0,_.depthWrite=!1}if(i.fading){i.fade-=t/1.1;for(const _ of i.mats)_.opacity=Math.max(0,i.fade);if(i.shMat.opacity=.26*Math.max(0,i.fade),i.fade<=0){i.dead=!0,this.scene.remove(i.obj);for(const _ of i.mats)_.dispose();i.shMat.dispose()}}}this.active=this.active.filter(i=>!i.dead);for(const i of this.trails)i.update(t)}}}const Tu=150;function _M(s,t,e){const n=[...s.botPositions];if(e.scored!=="both")return{player:s.playerPos,bots:n};const i=d=>d.sort(()=>t()-.5),r=[],a=[];n.forEach((d,f)=>(d<s.playerPos?r:a).push(f));const o=r.filter(()=>t()>.35),c=[...r.filter(d=>!o.includes(d)),...a];i(o),i(c);const l=new Array(n.length);o.forEach((d,f)=>l[d]=f+1);const h=o.length+1;return c.forEach((d,f)=>l[d]=h+1+f),{player:h,bots:l}}class xM{constructor(t,e,n){this.cb=n,this.input=e,this.event=t.event??is[2],this.format=t.format??ir[0],this.solo=!!this.format.solo;const i=cr[this.event.theme];this.scene=new Hc,this.scene.fog=new ba(i.fog,i.fogNear*.8,i.fogFar*.85),this.camera=new Ce(68,innerWidth/innerHeight,.1,4e3),this.terrain=new Rd(t.seed,i,this.format.id);const r=new ve;this.terrain.build(r),this.scene.add(r),this.scene.add(Xd(i)),this.sun=qd(this.scene,i).sun,this.snow=new Kd(this.scene);const a=Jn(t.seed^12482535);this.outcome=Pv(a,t.bet,this.event.table),Ht.balance=Math.round((Ht.balance-t.bet)*100)/100,Kn(),this.hud=new Vv(this.format);const o=new mt(this.terrain.theme.snow).lerp(new mt(1,1,1),.75);this.fx=new Tc(this.scene,5e3,{color:[o.r,o.g,o.b]}),this.pyro=new Tc(this.scene,320,{color:[1,.7,.3],blending:So,gravity:5}),this.gate=new Sd(this.terrain),this.scene.add(this.gate.group),this.animals=this.format.scored==="style"?{events:[],active:[],update(){}}:new Js(this.scene,this.terrain,this.event.theme,t.seed);const c=[null,null,"You",null,null];for(const f of t.bots)c[f.lane]=f.identity.name;this.gate.setRoster(c),this.player=new lM(this.terrain,t.gear,e,this.hud,t.outfit??null),this.player.fx=this.fx;const l=this.terrain.gateLanes[2];this.player.placeAt(l.x,l.z),this.scene.add(this.player.obj),this.playerTrail=new lu(this.scene,this.terrain,t.gear);const h=_M(this.outcome,a,this.format);this.playerCross=h.player,this._reviewRng=Jn(t.seed^32282),this._reviewed=!1,this._plans=[],this._lastPlanT=-10,this.bots=t.bots.map((f,u)=>{const m=this.outcome.botPositions[u],b=h.bots[u],g=a(),p=g<.32?"lateCharge":g<.64?"earlyLead":"steady",v=new mM({terrain:this.terrain,gear:f.gear,identity:f.identity,seed:t.seed%1e3+u*97+a()*50,rank:b,overall:m,playerRank:this.playerCross,finalGap:Math.abs(b-this.playerCross)*4.5+2+a()*2.5,script:p,lane:this.terrain.gateLanes[f.lane]});return this.solo||this.scene.add(v.obj),v.trail=new lu(this.scene,this.terrain,f.gear),v}),this.time=0,this.goTime=null,this.playerClock=null,this.playerStallTime=0,this.playerKnocks=0,this.stateName="countdown",this.countdownT=3.9,this._lastCount=null,this.finishOrder=[],this._camPos=new L().copy(this.camera.position),this._resultsShown=!1;const d=this.terrain.centerAt(this.terrain.length);this._finishPorts=[-15,15].map(f=>new L(d+f,this.terrain.heightAt(d+f,-this.terrain.length)+9.8,-this.terrain.length)),this._finishPyroT=-1,this._updateCamera(1,!0),window.__fp={race:this,rockPenetration:Ed}}onBotFinish(t){this.finishOrder.push({name:t.identity.name,color:t.identity.color,me:!1}),this._firstCross()}_firstCross(){this._finishPyroT<0&&(this._finishPyroT=0)}update(t){if(this.time+=t,this.stateName==="countdown"){this.countdownT-=t;const o=Math.ceil(this.countdownT);if(this.countdownT<=0){if(this.hud.countdown("GO!"),setTimeout(()=>this.hud.countdown(""),800),this.stateName="racing",this.goTime=this.time,this.player.frozen=!1,!this.solo)for(const c of this.bots)c.frozen=!1;this.gate.setPhase("go")}else o!==this._lastCount&&o<=3&&(this._lastCount=o,this.hud.countdown(String(o)),o===1&&this.gate.setPhase("set"))}if(this.stateName==="racing"||this.stateName==="done"){this.player.speed<2&&!this.player.finished?this.playerStallTime+=t:this.playerStallTime=0,this.player.update(t),this.playerTrail.push(this.player.pos.x,this.player.pos.z,this.player.yaw,!this.player.airborne&&!(this.player._grindT>0),Math.abs(Math.sin(this.player.rider.gearGroup.rotation.y)));for(const o of this.solo?[]:this.bots)o.update(t,this),o.trail.push(o.obj.position.x,o.obj.position.z,o.visYaw||0,o.y<=this.terrain.heightAt(o.obj.position.x,o.obj.position.z)+.25,Math.abs(Math.sin(o.rider.gearGroup.rotation.y)));this.solo||(this._resolveRiderCollisions(t),!this._reviewed&&this.format.scored==="both"&&this.player.progress>this.terrain.length-340&&this._reviewCrossing(),this._enforceDrawnOrder(t)),!this.player.finished&&this.player.progress>=this.terrain.length&&(this.player.finished=!0,this.playerClock=this.time-this.goTime,this.finishOrder.push({name:"You",color:16498468,me:!0}),this._firstCross(),this.stateName="done",this._finish())}const n=this.terrain.length;for(const o of this.bots)o.style=cv(this.player.style,this.outcome.playerPos-o.overall,o.d/n);const i=this.format.scored==="style",r=[{name:"You",color:16498468,me:!0,d:this.player.progress,done:this.player.finished,pts:this.player.style,pos:this.outcome.playerPos},...(this.solo?[]:this.bots).map(o=>({name:o.identity.name,color:o.identity.color,me:!1,d:o.d,done:o.finished,pts:o.style,pos:o.rank}))].sort((o,c)=>i?c.pts-o.pts||o.pos-c.pos:c.d-o.d),a=r.findIndex(o=>o.me)+1;if(this.hud.update({rank:a,speed:this.player.speed,progress:Math.min(1,this.player.progress/n),board:r,style:this.player.style,solo:this.solo,clock:this.goTime==null?0:this.playerClock??this.time-this.goTime}),this.terrain.finishSigns){const o=this._finishPyroT>=0?11:3.2;for(const[c,l]of this.terrain.finishSigns.entries())l.color.setScalar(.62+.38*Math.sin(this.time*o+c*2.1))}if(this.terrain.pulseGates(this.time),this.animals.update(t,this.player.progress,this.player),this.fx.update(t),this.pyro.update(t),this.gate.update(t,this.time,this.fx,null,this.camera.position.z),this._finishPyroT>=0&&this._finishPyroT<2){if(this._finishPyroT===0)for(const o of this._finishPorts)this.pyro.burst(o,{x:0,z:0},{count:30,speed:6,up:13,spread:Math.PI,size:1.5,life:1.2});for(const o of this._finishPorts)Math.random()<t*11&&this.pyro.burst(o,{x:0,z:0},{count:9,speed:4,up:10+Math.random()*7,spread:Math.PI,size:1.3,life:1});this._finishPyroT+=t}this.playerTrail.update(t);for(const o of this.bots)o.trail.update(t);this._updateCamera(t,!1),Yd(this.sun,this.player.pos),this.snow.update(t,this.camera.position)}_resolveRiderCollisions(t){const e=this.player;if(!e.finished)for(const n of this.bots){if(n._collideCd=Math.max(0,(n._collideCd||0)-t),n.finished||n.frozen||n._collideCd>0)continue;const i=n.obj.position.x-e.pos.x,r=n.obj.position.z-e.pos.z,a=Math.abs(n.obj.position.y-e.pos.y);if(i*i+r*r>1.6*1.6||a>1.6)continue;n._collideCd=3,n.aggroCooldown=16+Math.random()*12;const o=Math.sign(i)||1;n._pushX+=o*1.5,n.speed>e.speed+1.5?(this.playerKnocks++,e.knockDown(n.identity.name)):e.speed>n.speed+1.5?(n.knockDown(),this.format.scored==="both"?(e.style+=Tu,this.hud.trickToast(`BOOM! +${Tu}`,`you took out ${n.identity.name}`)):this.hud.trickToast("BOOM!",`you took out ${n.identity.name}`),this.fx.burst(n.obj.position,{x:0,z:-1},{count:100,speed:5,up:4,spread:2.4,size:.28}),e.speed*=.9):(e.stumbleT=Math.max(e.stumbleT,.7),n.stumbleT=Math.max(n.stumbleT,.7),e.pos.x-=o*.8)}}_enforceDrawnOrder(t){const e=this.player.progress,n=this.bots.filter(a=>!a.finished);if(!n.length||!(Math.max(e,...n.map(a=>a.d))>.86*this.terrain.length))return;n.sort((a,o)=>a.rank-o.rank);const r=this.terrain.length;for(let a=n.length-2;a>=0;a--){const o=n[a],c=n[a+1],l=o.d-c.d;l<8&&(c.speed=Math.min(c.speed,Math.max(0,o.speed-(l<2.2?1.5:.5))));const h=c.d+2.2-o.d;h>0&&(o.d+=Math.min(h,12*t),c.d>r-20&&(c.d=Math.min(c.d,o.d-2.2)))}if(!this.player.finished){const a=this.terrain.length;for(const o of n)o.ahead||(o.d=Math.min(o.d,Math.max(e-o.finalGap+o.allowance(a,e),2),a-55))}}_reviewCrossing(){this._reviewed=!0;const t=this._reviewRng,e=this.player.style,n=this.player.progress;let i=this.bots.filter(o=>o.ahead);if(e<=0)i=this.bots.filter(o=>o.overall<this.outcome.playerPos&&(o.ahead||o.d>n-45));else{const o=this.bots.filter(l=>!l.ahead&&l.overall>this.outcome.playerPos&&l.d>n-45).sort(()=>t()-.5);let c=0;for(const l of o){if(c>=2||e<1500*(c+1)+800)break;t()<.45&&(i.push(l),c++)}}i.sort((o,c)=>o.rank-c.rank);const r=this.bots.filter(o=>!i.includes(o)).sort((o,c)=>o.rank-c.rank),a=i.length+1;i.forEach((o,c)=>o.rank=c+1),r.forEach((o,c)=>o.rank=a+1+c);for(const o of this.bots)o.playerRank=a,o.finalGap=Math.abs(o.rank-a)*4.5+2+t()*2.5;this.playerCross=a}_finish(){const{playerPos:t,bet:e,payout:n}=this.outcome;Ht.balance=Math.round((Ht.balance+n)*100)/100,Kn();const i=this.terrain.length,r=lv(this.format,{playerPos:t,playerStyle:this.player.style,playerTime:this.playerClock??this.time-this.goTime,bots:this.bots.map(o=>({rank:o.overall,time:this.solo?null:(o.finishTime??this.time+(i-o.d)/Math.max(8,o.speed))-this.goTime})),rng:Jn(this.terrain.seed^23566)});for(const o of this.bots)o.style=r.bots.find(c=>c.rank===o.overall).style;const a=[{pos:t,name:"You",color:16498468,me:!0,mult:Nd(t,this.event.table),score:r.player},...this.bots.map(o=>({pos:o.overall,name:o.identity.name,color:o.identity.color,me:!1,score:r.bots.find(c=>c.rank===o.overall)}))].sort((o,c)=>o.pos-c.pos);this._resultsShown||(this._resultsShown=!0,qv({event:this.event,format:this.format,reveal:this.solo,standings:a,playerPos:t,bet:e,payout:n,style:this.player.style,onAgain:()=>this.cb.onExit("again"),onLodge:()=>this.cb.onExit("lodge")}))}_updateCamera(t,e){const n=this.player.pos,i=this.player.travelYaw*.4,r=7,a=new L(n.x-Math.sin(i)*r,0,n.z+Math.cos(i)*r),o=this.terrain.heightAt(a.x,a.z);if(a.y=Math.max(n.y+3,o+2),e)this._camPos.copy(a),this._lookAt=new L(n.x,n.y+1.3,n.z-4);else{const h=1-Math.exp(-t*3.6);this._camPos.lerp(a,h),this._lookAt.lerp(new L(n.x,n.y+1.3,n.z-4),1-Math.exp(-t*6))}this.camera.position.copy(this._camPos),this.camera.lookAt(this._lookAt);const c=58+this.player.speed*.22+(this.player.airborne?2:0),l=this.camera.fov+(c-this.camera.fov)*Math.min(1,t*2.2);Math.abs(l-this.camera.fov)>.02&&(this.camera.fov=l,this.camera.updateProjectionMatrix())}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}destroy(){this.hud.destroy(),this.input.onSwipe===this.player._onSwipe&&(this.input.onSwipe=null)}}const vM=document.getElementById("app"),pn=new rd({antialias:!0,powerPreference:"high-performance"});pn.setPixelRatio(Math.min(devicePixelRatio,2));pn.setSize(innerWidth,innerHeight);pn.shadowMap.enabled=!0;pn.shadowMap.type=Cu;vM.appendChild(pn.domElement);const MM=new Mx(pn.domElement);let tn=null;function Jd(s){tn&&tn.destroy(),tn=s,tn.resize(innerWidth,innerHeight)}function Qd(){Dd()&&kd();const s=bd();Jd(new Qv(s,t=>Zd(t)))}const Au=new URLSearchParams(location.search);function Zd(s){const t=is.find(r=>r.id===Au.get("event")),e=t??is[Math.floor(Math.random()*is.length)],n=wd(Au.get("format")),i=n??rv();t||n?Eu({...s,event:e,format:i}):Xv(is,e,ir,i,()=>Eu({...s,event:e,format:i}))}function Eu(s){Jd(new xM(s,MM,{onExit:t=>{if(t==="again"&&Ht.balance>=s.bet){Dd()&&kd();const e=bd();Zd({seed:e,bet:s.bet,gear:s.gear,outfit:s.outfit,bots:$d(e)})}else Qd()}}))}addEventListener("resize",()=>{pn.setSize(innerWidth,innerHeight),tn&&tn.resize(innerWidth,innerHeight)});const yM=Math.min(devicePixelRatio,2);let hi=1,Mo=0,$r=0,yo=0;const SM=new lx;let Jr=1e9;pn.setAnimationLoop(()=>{const s=SM.getDelta(),t=Math.min(s,.05);if(Mo+=s,$r++,yo+=s,Jr+=s,yo>3&&$r>10){const e=$r/Mo;let n=hi;e<42&&Ac.shadows?(Ac.shadows=!1,tn?.sun&&(tn.sun.castShadow=!1)):e<40&&hi>.55&&Jr>6?n=Math.max(.55,hi-.15):e>58&&hi<1&&Jr>20&&(n=Math.min(1,hi+.1)),n!==hi&&(hi=n,Jr=0,pn.setPixelRatio(yM*hi),pn.setSize(innerWidth,innerHeight)),Mo=0,$r=0,yo=0}tn&&(tn.update(t),pn.render(tn.scene,tn.camera))});(async()=>{const s=document.createElement("div");s.id="boot-loading",s.textContent="WAXING THE GEAR…",document.getElementById("ui").appendChild(s);try{await Promise.all([pv(),sv(),gM()])}finally{s.remove()}Qd()})();"serviceWorker"in navigator&&!location.hostname.includes("localhost")&&addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});
