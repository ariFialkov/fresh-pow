var hd=Object.defineProperty;var ud=(r,e,t)=>e in r?hd(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Xc=(r,e,t)=>ud(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oc="170",dd=0,qc=1,fd=2,Xh=1,qh=2,Fn=3,Xn=0,Ft=1,Wt=2,li=0,wi=1,co=2,Yc=3,Kc=4,pd=5,Ti=100,md=101,gd=102,bd=103,_d=104,xd=200,vd=201,Md=202,yd=203,lo=204,ho=205,Sd=206,Td=207,Ad=208,wd=209,Ed=210,Rd=211,Cd=212,Pd=213,Ld=214,uo=0,fo=1,po=2,ns=3,mo=4,go=5,bo=6,_o=7,cc=0,Id=1,Dd=2,hi=0,Nd=1,Ud=2,kd=3,Fd=4,Od=5,Bd=6,zd=7,Jc="attached",Gd="detached",Yh=300,is=301,ss=302,xo=303,vo=304,sa=306,Ei=1e3,oi=1001,$r=1002,Ot=1003,Kh=1004,Ns=1005,jt=1006,Wr=1007,Vn=1008,qn=1009,Jh=1010,Qh=1011,Xs=1012,lc=1013,Ri=1014,ln=1015,$s=1016,hc=1017,uc=1018,rs=1020,$h=35902,Zh=1021,eu=1022,Zt=1023,tu=1024,nu=1025,$i=1026,as=1027,dc=1028,fc=1029,iu=1030,pc=1031,mc=1033,jr=33776,Xr=33777,qr=33778,Yr=33779,Mo=35840,yo=35841,So=35842,To=35843,Ao=36196,wo=37492,Eo=37496,Ro=37808,Co=37809,Po=37810,Lo=37811,Io=37812,Do=37813,No=37814,Uo=37815,ko=37816,Fo=37817,Oo=37818,Bo=37819,zo=37820,Go=37821,Kr=36492,Ho=36494,Vo=36495,su=36283,Wo=36284,jo=36285,Xo=36286,qs=2300,Ys=2301,ma=2302,Qc=2400,$c=2401,Zc=2402,Hd=2500,Vd=0,ru=1,qo=2,Wd=3200,jd=3201,gc=0,Xd=1,ai="",xt="srgb",Bt="srgb-linear",ra="linear",tt="srgb",Li=7680,el=519,qd=512,Yd=513,Kd=514,au=515,Jd=516,Qd=517,$d=518,Zd=519,Yo=35044,tl="300 es",Wn=2e3,Zr=2001;class fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nl=1234567;const Bs=Math.PI/180,os=180/Math.PI;function dn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[r&255]+Lt[r>>8&255]+Lt[r>>16&255]+Lt[r>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function yt(r,e,t){return Math.max(e,Math.min(t,r))}function bc(r,e){return(r%e+e)%e}function ef(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function tf(r,e,t){return r!==e?(t-r)/(e-r):0}function zs(r,e,t){return(1-t)*r+t*e}function nf(r,e,t,n){return zs(r,e,1-Math.exp(-t*n))}function sf(r,e=1){return e-Math.abs(bc(r,e*2)-e)}function rf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function af(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function of(r,e){return r+Math.floor(Math.random()*(e-r+1))}function cf(r,e){return r+Math.random()*(e-r)}function lf(r){return r*(.5-Math.random())}function hf(r){r!==void 0&&(nl=r);let e=nl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uf(r){return r*Bs}function df(r){return r*os}function ff(r){return(r&r-1)===0&&r!==0}function pf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function mf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function gf(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),f=a((e-n)/2),u=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*d,c*f,o*l);break;case"YZY":r.set(c*f,o*h,c*d,o*l);break;case"ZXZ":r.set(c*d,c*f,o*h,o*l);break;case"XZX":r.set(o*h,c*m,c*u,o*l);break;case"YXY":r.set(c*u,o*h,c*m,o*l);break;case"ZYZ":r.set(c*m,c*u,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function on(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function $e(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ou={DEG2RAD:Bs,RAD2DEG:os,generateUUID:dn,clamp:yt,euclideanModulo:bc,mapLinear:ef,inverseLerp:tf,lerp:zs,damp:nf,pingpong:sf,smoothstep:rf,smootherstep:af,randInt:of,randFloat:cf,randFloatSpread:lf,seededRandom:hf,degToRad:uf,radToDeg:df,isPowerOfTwo:ff,ceilPowerOfTwo:pf,floorPowerOfTwo:mf,setQuaternionFromProperEuler:gf,normalize:$e,denormalize:on};class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,i,s,a,o,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],u=n[5],m=n[8],b=i[0],g=i[3],p=i[6],x=i[1],v=i[4],_=i[7],C=i[2],E=i[5],S=i[8];return s[0]=a*b+o*x+c*C,s[3]=a*g+o*v+c*E,s[6]=a*p+o*_+c*S,s[1]=l*b+h*x+d*C,s[4]=l*g+h*v+d*E,s[7]=l*p+h*_+d*S,s[2]=f*b+u*x+m*C,s[5]=f*g+u*v+m*E,s[8]=f*p+u*_+m*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,f=o*c-h*s,u=l*s-a*c,m=t*d+n*f+i*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/m;return e[0]=d*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=f*b,e[4]=(h*t-i*c)*b,e[5]=(i*s-o*t)*b,e[6]=u*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ga.makeScale(e,t)),this}rotate(e){return this.premultiply(ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new ke;function cu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ks(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bf(){const r=Ks("canvas");return r.style.display="block",r}const il={};function Us(r){r in il||(il[r]=!0,console.warn(r))}function _f(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function xf(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vf(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const We={enabled:!0,workingColorSpace:Bt,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===tt&&(r.r=jn(r.r),r.g=jn(r.g),r.b=jn(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===tt&&(r.r=Zi(r.r),r.g=Zi(r.g),r.b=Zi(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ai?ra:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function jn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const sl=[.64,.33,.3,.6,.15,.06],rl=[.2126,.7152,.0722],al=[.3127,.329],ol=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cl=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);We.define({[Bt]:{primaries:sl,whitePoint:al,transfer:ra,toXYZ:ol,fromXYZ:cl,luminanceCoefficients:rl,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:sl,whitePoint:al,transfer:tt,toXYZ:ol,fromXYZ:cl,luminanceCoefficients:rl,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}});let Ii;class Mf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ii===void 0&&(Ii=Ks("canvas")),Ii.width=e.width,Ii.height=e.height;const n=Ii.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ks("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=jn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yf=0;class lu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=dn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(ba(i[a].image)):s.push(ba(i[a]))}else s=ba(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ba(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Mf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sf=0;class St extends fs{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=oi,i=oi,s=jt,a=Vn,o=Zt,c=qn,l=St.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=dn(),this.name="",this.source=new lu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ei:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case $r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ei:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case $r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=Yh;St.DEFAULT_ANISOTROPY=1;class Ye{constructor(e=0,t=0,n=0,i=1){Ye.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],u=c[5],m=c[9],b=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+b)<.1&&Math.abs(m+g)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,_=(u+1)/2,C=(p+1)/2,E=(h+f)/4,S=(d+b)/4,w=(m+g)/4;return v>_&&v>C?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=E/n,s=S/n):_>C?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=E/i,s=w/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=S/s,i=w/s),this.set(n,i,s,t),this}let x=Math.sqrt((g-m)*(g-m)+(d-b)*(d-b)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(d-b)/x,this.z=(f-h)/x,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tf extends fs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new St(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends Tf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class hu extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Af extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class it{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const f=s[a+0],u=s[a+1],m=s[a+2],b=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=u,e[t+2]=m,e[t+3]=b;return}if(d!==b||c!==f||l!==u||h!==m){let g=1-o;const p=c*f+l*u+h*m+d*b,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const C=Math.sqrt(v),E=Math.atan2(C,p*x);g=Math.sin(g*E)/C,o=Math.sin(o*E)/C}const _=o*x;if(c=c*g+f*_,l=l*g+u*_,h=h*g+m*_,d=d*g+b*_,g===1-o){const C=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=C,l*=C,h*=C,d*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[a],f=s[a+1],u=s[a+2],m=s[a+3];return e[t]=o*m+h*d+c*u-l*f,e[t+1]=c*m+h*f+l*d-o*u,e[t+2]=l*m+h*u+o*f-c*d,e[t+3]=h*m-o*d-c*f-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(s/2),f=c(n/2),u=c(i/2),m=c(s/2);switch(a){case"XYZ":this._x=f*h*d+l*u*m,this._y=l*u*d-f*h*m,this._z=l*h*m+f*u*d,this._w=l*h*d-f*u*m;break;case"YXZ":this._x=f*h*d+l*u*m,this._y=l*u*d-f*h*m,this._z=l*h*m-f*u*d,this._w=l*h*d+f*u*m;break;case"ZXY":this._x=f*h*d-l*u*m,this._y=l*u*d+f*h*m,this._z=l*h*m+f*u*d,this._w=l*h*d-f*u*m;break;case"ZYX":this._x=f*h*d-l*u*m,this._y=l*u*d+f*h*m,this._z=l*h*m-f*u*d,this._w=l*h*d+f*u*m;break;case"YZX":this._x=f*h*d+l*u*m,this._y=l*u*d+f*h*m,this._z=l*h*m-f*u*d,this._w=l*h*d-f*u*m;break;case"XZY":this._x=f*h*d-l*u*m,this._y=l*u*d-f*h*m,this._z=l*h*m+f*u*d,this._w=l*h*d+f*u*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-c)*u,this._y=(s-l)*u,this._z=(a-i)*u}else if(n>o&&n>d){const u=2*Math.sqrt(1+n-o-d);this._w=(h-c)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(s+l)/u}else if(o>d){const u=2*Math.sqrt(1+o-n-d);this._w=(s-l)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(c+h)/u}else{const u=2*Math.sqrt(1+d-n-o);this._w=(a-i)/u,this._x=(s+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const u=1-t;return this._w=u*a+t*this._w,this._x=u*n+t*this._x,this._y=u*i+t*this._y,this._z=u*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ll.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ll.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-s*d,this.z=i+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _a.copy(this).projectOnVector(e),this.sub(_a)}reflect(e){return this.sub(_a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new L,ll=new it;class Yn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,nn):nn.fromBufferAttribute(s,a),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(e.matrixWorld),this.union(sr)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vs),rr.subVectors(this.max,vs),Di.subVectors(e.a,vs),Ni.subVectors(e.b,vs),Ui.subVectors(e.c,vs),Qn.subVectors(Ni,Di),$n.subVectors(Ui,Ni),pi.subVectors(Di,Ui);let t=[0,-Qn.z,Qn.y,0,-$n.z,$n.y,0,-pi.z,pi.y,Qn.z,0,-Qn.x,$n.z,0,-$n.x,pi.z,0,-pi.x,-Qn.y,Qn.x,0,-$n.y,$n.x,0,-pi.y,pi.x,0];return!xa(t,Di,Ni,Ui,rr)||(t=[1,0,0,0,1,0,0,0,1],!xa(t,Di,Ni,Ui,rr))?!1:(ar.crossVectors(Qn,$n),t=[ar.x,ar.y,ar.z],xa(t,Di,Ni,Ui,rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cn=[new L,new L,new L,new L,new L,new L,new L,new L],nn=new L,sr=new Yn,Di=new L,Ni=new L,Ui=new L,Qn=new L,$n=new L,pi=new L,vs=new L,rr=new L,ar=new L,mi=new L;function xa(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){mi.fromArray(r,s);const o=i.x*Math.abs(mi.x)+i.y*Math.abs(mi.y)+i.z*Math.abs(mi.z),c=e.dot(mi),l=t.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const wf=new Yn,Ms=new L,va=new L;class Sn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ms,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(va)),this.expandByPoint(Ms.copy(e.center).sub(va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new L,Ma=new L,or=new L,Zn=new L,ya=new L,cr=new L,Sa=new L;class aa{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ma.copy(e).add(t).multiplyScalar(.5),or.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(Ma);const s=e.distanceTo(t)*.5,a=-this.direction.dot(or),o=Zn.dot(this.direction),c=-Zn.dot(or),l=Zn.lengthSq(),h=Math.abs(1-a*a);let d,f,u,m;if(h>0)if(d=a*c-o,f=a*o-c,m=s*h,d>=0)if(f>=-m)if(f<=m){const b=1/h;d*=b,f*=b,u=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;else f<=-m?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-c),s),u=-d*d+f*(f+2*c)+l):f<=m?(d=0,f=Math.min(Math.max(-s,-c),s),u=f*(f+2*c)+l):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-c),s),u=-d*d+f*(f+2*c)+l);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ma).addScaledVector(or,f),u}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const n=Pn.dot(this.direction),i=Pn.dot(Pn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,n,i,s){ya.subVectors(t,e),cr.subVectors(n,e),Sa.crossVectors(ya,cr);let a=this.direction.dot(Sa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zn.subVectors(this.origin,e);const c=o*this.direction.dot(cr.crossVectors(Zn,cr));if(c<0)return null;const l=o*this.direction.dot(ya.cross(Zn));if(l<0||c+l>a)return null;const h=-o*Zn.dot(Sa);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(e,t,n,i,s,a,o,c,l,h,d,f,u,m,b,g){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,d,f,u,m,b,g)}set(e,t,n,i,s,a,o,c,l,h,d,f,u,m,b,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ki.setFromMatrixColumn(e,0).length(),s=1/ki.setFromMatrixColumn(e,1).length(),a=1/ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*h,u=a*d,m=o*h,b=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=u+m*l,t[5]=f-b*l,t[9]=-o*c,t[2]=b-f*l,t[6]=m+u*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,u=c*d,m=l*h,b=l*d;t[0]=f+b*o,t[4]=m*o-u,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=u*o-m,t[6]=b+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,u=c*d,m=l*h,b=l*d;t[0]=f-b*o,t[4]=-a*d,t[8]=m+u*o,t[1]=u+m*o,t[5]=a*h,t[9]=b-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,u=a*d,m=o*h,b=o*d;t[0]=c*h,t[4]=m*l-u,t[8]=f*l+b,t[1]=c*d,t[5]=b*l+f,t[9]=u*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,u=a*l,m=o*c,b=o*l;t[0]=c*h,t[4]=b-f*d,t[8]=m*d+u,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*d+m,t[10]=f-b*d}else if(e.order==="XZY"){const f=a*c,u=a*l,m=o*c,b=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+b,t[5]=a*h,t[9]=u*d-m,t[2]=m*d-u,t[6]=o*h,t[10]=b*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ef,e,Rf)}lookAt(e,t,n){const i=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),ei.crossVectors(n,Ht),ei.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),ei.crossVectors(n,Ht)),ei.normalize(),lr.crossVectors(Ht,ei),i[0]=ei.x,i[4]=lr.x,i[8]=Ht.x,i[1]=ei.y,i[5]=lr.y,i[9]=Ht.y,i[2]=ei.z,i[6]=lr.z,i[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],u=n[13],m=n[2],b=n[6],g=n[10],p=n[14],x=n[3],v=n[7],_=n[11],C=n[15],E=i[0],S=i[4],w=i[8],y=i[12],T=i[1],A=i[5],P=i[9],I=i[13],N=i[2],O=i[6],H=i[10],q=i[14],V=i[3],Z=i[7],re=i[11],ce=i[15];return s[0]=a*E+o*T+c*N+l*V,s[4]=a*S+o*A+c*O+l*Z,s[8]=a*w+o*P+c*H+l*re,s[12]=a*y+o*I+c*q+l*ce,s[1]=h*E+d*T+f*N+u*V,s[5]=h*S+d*A+f*O+u*Z,s[9]=h*w+d*P+f*H+u*re,s[13]=h*y+d*I+f*q+u*ce,s[2]=m*E+b*T+g*N+p*V,s[6]=m*S+b*A+g*O+p*Z,s[10]=m*w+b*P+g*H+p*re,s[14]=m*y+b*I+g*q+p*ce,s[3]=x*E+v*T+_*N+C*V,s[7]=x*S+v*A+_*O+C*Z,s[11]=x*w+v*P+_*H+C*re,s[15]=x*y+v*I+_*q+C*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],u=e[14],m=e[3],b=e[7],g=e[11],p=e[15];return m*(+s*c*d-i*l*d-s*o*f+n*l*f+i*o*u-n*c*u)+b*(+t*c*u-t*l*f+s*a*f-i*a*u+i*l*h-s*c*h)+g*(+t*l*d-t*o*u-s*a*d+n*a*u+s*o*h-n*l*h)+p*(-i*o*h-t*c*d+t*o*f+i*a*d-n*a*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],u=e[11],m=e[12],b=e[13],g=e[14],p=e[15],x=d*g*l-b*f*l+b*c*u-o*g*u-d*c*p+o*f*p,v=m*f*l-h*g*l-m*c*u+a*g*u+h*c*p-a*f*p,_=h*b*l-m*d*l+m*o*u-a*b*u-h*o*p+a*d*p,C=m*d*c-h*b*c-m*o*f+a*b*f+h*o*g-a*d*g,E=t*x+n*v+i*_+s*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/E;return e[0]=x*S,e[1]=(b*f*s-d*g*s-b*i*u+n*g*u+d*i*p-n*f*p)*S,e[2]=(o*g*s-b*c*s+b*i*l-n*g*l-o*i*p+n*c*p)*S,e[3]=(d*c*s-o*f*s-d*i*l+n*f*l+o*i*u-n*c*u)*S,e[4]=v*S,e[5]=(h*g*s-m*f*s+m*i*u-t*g*u-h*i*p+t*f*p)*S,e[6]=(m*c*s-a*g*s-m*i*l+t*g*l+a*i*p-t*c*p)*S,e[7]=(a*f*s-h*c*s+h*i*l-t*f*l-a*i*u+t*c*u)*S,e[8]=_*S,e[9]=(m*d*s-h*b*s-m*n*u+t*b*u+h*n*p-t*d*p)*S,e[10]=(a*b*s-m*o*s+m*n*l-t*b*l-a*n*p+t*o*p)*S,e[11]=(h*o*s-a*d*s-h*n*l+t*d*l+a*n*u-t*o*u)*S,e[12]=C*S,e[13]=(h*b*i-m*d*i+m*n*f-t*b*f-h*n*g+t*d*g)*S,e[14]=(m*o*i-a*b*i-m*n*c+t*b*c+a*n*g-t*o*g)*S,e[15]=(a*d*i-h*o*i+h*n*c-t*d*c-a*n*f+t*o*f)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,f=s*l,u=s*h,m=s*d,b=a*h,g=a*d,p=o*d,x=c*l,v=c*h,_=c*d,C=n.x,E=n.y,S=n.z;return i[0]=(1-(b+p))*C,i[1]=(u+_)*C,i[2]=(m-v)*C,i[3]=0,i[4]=(u-_)*E,i[5]=(1-(f+p))*E,i[6]=(g+x)*E,i[7]=0,i[8]=(m+v)*S,i[9]=(g-x)*S,i[10]=(1-(f+b))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ki.set(i[0],i[1],i[2]).length();const a=ki.set(i[4],i[5],i[6]).length(),o=ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],sn.copy(this);const l=1/s,h=1/a,d=1/o;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=d,sn.elements[9]*=d,sn.elements[10]*=d,t.setFromRotationMatrix(sn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Wn){const c=this.elements,l=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let u,m;if(o===Wn)u=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===Zr)u=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=u,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Wn){const c=this.elements,l=1/(t-e),h=1/(n-i),d=1/(a-s),f=(t+e)*l,u=(n+i)*h;let m,b;if(o===Wn)m=(a+s)*d,b=-2*d;else if(o===Zr)m=s*d,b=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-u,c[2]=0,c[6]=0,c[10]=b,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ki=new L,sn=new Ce,Ef=new L(0,0,0),Rf=new L(1,1,1),ei=new L,lr=new L,Ht=new L,hl=new Ce,ul=new it;class pn{constructor(e=0,t=0,n=0,i=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ul.setFromEuler(this),this.setFromQuaternion(ul,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class uu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cf=0;const dl=new L,Fi=new it,Ln=new Ce,hr=new L,ys=new L,Pf=new L,Lf=new it,fl=new L(1,0,0),pl=new L(0,1,0),ml=new L(0,0,1),gl={type:"added"},If={type:"removed"},Oi={type:"childadded",child:null},Ta={type:"childremoved",child:null};class ft extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new L,t=new pn,n=new it,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new ke}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(fl,e)}rotateY(e){return this.rotateOnAxis(pl,e)}rotateZ(e){return this.rotateOnAxis(ml,e)}translateOnAxis(e,t){return dl.copy(e).applyQuaternion(this.quaternion),this.position.add(dl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fl,e)}translateY(e){return this.translateOnAxis(pl,e)}translateZ(e){return this.translateOnAxis(ml,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hr.copy(e):hr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(ys,hr,this.up):Ln.lookAt(hr,ys,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),Fi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gl),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(If),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gl),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,e,Pf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,Lf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),u=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new L(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new L,In=new L,Aa=new L,Dn=new L,Bi=new L,zi=new L,bl=new L,wa=new L,Ea=new L,Ra=new L,Ca=new Ye,Pa=new Ye,La=new Ye;class cn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),rn.subVectors(e,t),i.cross(rn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){rn.subVectors(i,t),In.subVectors(n,t),Aa.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(In),c=rn.dot(Aa),l=In.dot(In),h=In.dot(Aa),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,u=(l*c-o*h)*f,m=(a*h-o*c)*f;return s.set(1-u-m,m,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Dn.x),c.addScaledVector(a,Dn.y),c.addScaledVector(o,Dn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return Ca.setScalar(0),Pa.setScalar(0),La.setScalar(0),Ca.fromBufferAttribute(e,t),Pa.fromBufferAttribute(e,n),La.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ca,s.x),a.addScaledVector(Pa,s.y),a.addScaledVector(La,s.z),a}static isFrontFacing(e,t,n,i){return rn.subVectors(n,t),In.subVectors(e,t),rn.cross(In).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),rn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return cn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Bi.subVectors(i,n),zi.subVectors(s,n),wa.subVectors(e,n);const c=Bi.dot(wa),l=zi.dot(wa);if(c<=0&&l<=0)return t.copy(n);Ea.subVectors(e,i);const h=Bi.dot(Ea),d=zi.dot(Ea);if(h>=0&&d<=h)return t.copy(i);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Bi,a);Ra.subVectors(e,s);const u=Bi.dot(Ra),m=zi.dot(Ra);if(m>=0&&u<=m)return t.copy(s);const b=u*l-c*m;if(b<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(zi,o);const g=h*m-u*d;if(g<=0&&d-h>=0&&u-m>=0)return bl.subVectors(s,i),o=(d-h)/(d-h+(u-m)),t.copy(i).addScaledVector(bl,o);const p=1/(g+b+f);return a=b*p,o=f*p,t.copy(n).addScaledVector(Bi,a).addScaledVector(zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},ur={h:0,s:0,l:0};function Ia(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class he{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=We.workingColorSpace){if(e=bc(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ia(a,s,e+1/3),this.g=Ia(a,s,e),this.b=Ia(a,s,e-1/3)}return We.toWorkingColorSpace(this,i),this}setStyle(e,t=xt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){const n=du[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return We.fromWorkingColorSpace(It.copy(this),e),Math.round(yt(It.r*255,0,255))*65536+Math.round(yt(It.g*255,0,255))*256+Math.round(yt(It.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(It.copy(this),t);const n=It.r,i=It.g,s=It.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=xt){We.fromWorkingColorSpace(It.copy(this),e);const t=It.r,n=It.g,i=It.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(ur);const n=zs(ti.h,ur.h,t),i=zs(ti.s,ur.s,t),s=zs(ti.l,ur.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new he;he.NAMES=du;let Df=0;class fn extends fs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=dn(),this.name="",this.blending=wi,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lo,this.blendDst=ho,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=el,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lo&&(n.blendSrc=this.blendSrc),this.blendDst!==ho&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==el&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rt extends fn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new L,dr=new me;class st{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yo,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=on(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=on(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=on(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=on(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=on(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array),s=$e(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yo&&(e.usage=this.usage),e}}class fu extends st{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pu extends st{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rt extends st{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Nf=0;const Yt=new Ce,Da=new ft,Gi=new L,Vt=new Yn,Ss=new Yn,wt=new L;class bt extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cu(e)?pu:fu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return Da.lookAt(e),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ss.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Vt.min,Ss.min),Vt.expandByPoint(wt),wt.addVectors(Vt.max,Ss.max),Vt.expandByPoint(wt)):(Vt.expandByPoint(Ss.min),Vt.expandByPoint(Ss.max))}Vt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)wt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)wt.fromBufferAttribute(o,l),c&&(Gi.fromBufferAttribute(e,l),wt.add(Gi)),i=Math.max(i,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new st(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let w=0;w<n.count;w++)o[w]=new L,c[w]=new L;const l=new L,h=new L,d=new L,f=new me,u=new me,m=new me,b=new L,g=new L;function p(w,y,T){l.fromBufferAttribute(n,w),h.fromBufferAttribute(n,y),d.fromBufferAttribute(n,T),f.fromBufferAttribute(s,w),u.fromBufferAttribute(s,y),m.fromBufferAttribute(s,T),h.sub(l),d.sub(l),u.sub(f),m.sub(f);const A=1/(u.x*m.y-m.x*u.y);isFinite(A)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(d,-u.y).multiplyScalar(A),g.copy(d).multiplyScalar(u.x).addScaledVector(h,-m.x).multiplyScalar(A),o[w].add(b),o[y].add(b),o[T].add(b),c[w].add(g),c[y].add(g),c[T].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let w=0,y=x.length;w<y;++w){const T=x[w],A=T.start,P=T.count;for(let I=A,N=A+P;I<N;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const v=new L,_=new L,C=new L,E=new L;function S(w){C.fromBufferAttribute(i,w),E.copy(C);const y=o[w];v.copy(y),v.sub(C.multiplyScalar(C.dot(y))).normalize(),_.crossVectors(E,y);const A=_.dot(c[w])<0?-1:1;a.setXYZW(w,v.x,v.y,v.z,A)}for(let w=0,y=x.length;w<y;++w){const T=x[w],A=T.start,P=T.count;for(let I=A,N=A+P;I<N;I+=3)S(e.getX(I+0)),S(e.getX(I+1)),S(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new st(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const i=new L,s=new L,a=new L,o=new L,c=new L,l=new L,h=new L,d=new L;if(e)for(let f=0,u=e.count;f<u;f+=3){const m=e.getX(f+0),b=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,u=t.count;f<u;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h);let u=0,m=0;for(let b=0,g=c.length;b<g;b++){o.isInterleavedBufferAttribute?u=c[b]*o.data.stride+o.offset:u=c[b]*h;for(let p=0;p<h;p++)f[m++]=l[u++]}return new st(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const f=l[h],u=e(f,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const u=l[d];h.push(u.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _l=new Ce,gi=new aa,fr=new Sn,xl=new L,pr=new L,mr=new L,gr=new L,Na=new L,br=new L,vl=new L,_r=new L;class et extends ft{constructor(e=new bt,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){br.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],d=s[c];h!==0&&(Na.fromBufferAttribute(d,e),a?br.addScaledVector(Na,h):br.addScaledVector(Na.sub(t),h))}t.add(br)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(s),gi.copy(e.ray).recast(e.near),!(fr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(fr,xl)===null||gi.origin.distanceToSquared(xl)>(e.far-e.near)**2))&&(_l.copy(s).invert(),gi.copy(e.ray).applyMatrix4(_l),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,u=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=f.length;m<b;m++){const g=f[m],p=a[g.materialIndex],x=Math.max(g.start,u.start),v=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let _=x,C=v;_<C;_+=3){const E=o.getX(_),S=o.getX(_+1),w=o.getX(_+2);i=xr(this,p,e,n,l,h,d,E,S,w),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,u.start),b=Math.min(o.count,u.start+u.count);for(let g=m,p=b;g<p;g+=3){const x=o.getX(g),v=o.getX(g+1),_=o.getX(g+2);i=xr(this,a,e,n,l,h,d,x,v,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,b=f.length;m<b;m++){const g=f[m],p=a[g.materialIndex],x=Math.max(g.start,u.start),v=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let _=x,C=v;_<C;_+=3){const E=_,S=_+1,w=_+2;i=xr(this,p,e,n,l,h,d,E,S,w),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,u.start),b=Math.min(c.count,u.start+u.count);for(let g=m,p=b;g<p;g+=3){const x=g,v=g+1,_=g+2;i=xr(this,a,e,n,l,h,d,x,v,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Uf(r,e,t,n,i,s,a,o){let c;if(e.side===Ft?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===Xn,o),c===null)return null;_r.copy(o),_r.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(_r);return l<t.near||l>t.far?null:{distance:l,point:_r.clone(),object:r}}function xr(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,pr),r.getVertexPosition(c,mr),r.getVertexPosition(l,gr);const h=Uf(r,e,t,n,pr,mr,gr,vl);if(h){const d=new L;cn.getBarycoord(vl,pr,mr,gr,d),i&&(h.uv=cn.getInterpolatedAttribute(i,o,c,l,d,new me)),s&&(h.uv1=cn.getInterpolatedAttribute(s,o,c,l,d,new me)),a&&(h.normal=cn.getInterpolatedAttribute(a,o,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new L,materialIndex:0};cn.getNormal(pr,mr,gr,f.normal),h.face=f,h.barycoord=d}return h}class Xt extends bt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],d=[];let f=0,u=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(d,2));function m(b,g,p,x,v,_,C,E,S,w,y){const T=_/S,A=C/w,P=_/2,I=C/2,N=E/2,O=S+1,H=w+1;let q=0,V=0;const Z=new L;for(let re=0;re<H;re++){const ce=re*A-I;for(let Ae=0;Ae<O;Ae++){const Ve=Ae*T-P;Z[b]=Ve*x,Z[g]=ce*v,Z[p]=N,l.push(Z.x,Z.y,Z.z),Z[b]=0,Z[g]=0,Z[p]=E>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(Ae/S),d.push(1-re/w),q+=1}}for(let re=0;re<w;re++)for(let ce=0;ce<S;ce++){const Ae=f+ce+O*re,Ve=f+ce+O*(re+1),K=f+(ce+1)+O*(re+1),ee=f+(ce+1)+O*re;c.push(Ae,Ve,ee),c.push(Ve,K,ee),V+=6}o.addGroup(u,V,y),u+=V,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kt(r){const e={};for(let t=0;t<r.length;t++){const n=cs(r[t]);for(const i in n)e[i]=n[i]}return e}function kf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function mu(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const Ff={clone:cs,merge:kt};var Of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends fn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Of,this.fragmentShader=Bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=kf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gu extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new L,Ml=new me,yl=new me;class Dt extends gu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return os*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,Ml,yl),t.subVectors(yl,Ml)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hi=-90,Vi=1;class zf extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Dt(Hi,Vi,e,t);i.layers=this.layers,this.add(i);const s=new Dt(Hi,Vi,e,t);s.layers=this.layers,this.add(s);const a=new Dt(Hi,Vi,e,t);a.layers=this.layers,this.add(a);const o=new Dt(Hi,Vi,e,t);o.layers=this.layers,this.add(o);const c=new Dt(Hi,Vi,e,t);c.layers=this.layers,this.add(c);const l=new Dt(Hi,Vi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class bu extends St{constructor(e,t,n,i,s,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:is,super(e,t,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gf extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new bu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Xt(5,5,5),s=new yn({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:li});s.uniforms.tEquirect.value=t;const a=new et(i,s),o=t.minFilter;return t.minFilter===Vn&&(t.minFilter=jt),new zf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Ua=new L,Hf=new L,Vf=new ke;class yi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ua.subVectors(n,t).cross(Hf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ua),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vf.getNormalMatrix(e),i=this.coplanarPoint(Ua).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new Sn,vr=new L;class _c{constructor(e=new yi,t=new yi,n=new yi,i=new yi,s=new yi,a=new yi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],d=i[6],f=i[7],u=i[8],m=i[9],b=i[10],g=i[11],p=i[12],x=i[13],v=i[14],_=i[15];if(n[0].setComponents(c-s,f-l,g-u,_-p).normalize(),n[1].setComponents(c+s,f+l,g+u,_+p).normalize(),n[2].setComponents(c+a,f+h,g+m,_+x).normalize(),n[3].setComponents(c-a,f-h,g-m,_-x).normalize(),n[4].setComponents(c-o,f-d,g-b,_-v).normalize(),t===Wn)n[5].setComponents(c+o,f+d,g+b,_+v).normalize();else if(t===Zr)n[5].setComponents(o,d,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(vr.x=i.normal.x>0?e.max.x:e.min.x,vr.y=i.normal.y>0?e.max.y:e.min.y,vr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _u(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Wf(r){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,f=r.createBuffer();r.bindBuffer(c,f),r.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=r.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=r.HALF_FLOAT:u=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=r.SHORT;else if(l instanceof Uint32Array)u=r.UNSIGNED_INT;else if(l instanceof Int32Array)u=r.INT;else if(l instanceof Int8Array)u=r.BYTE;else if(l instanceof Uint8Array)u=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(r.bindBuffer(l,o),d.length===0)r.bufferSubData(l,0,h);else{d.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<d.length;u++){const m=d[f],b=d[u];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++f,d[f]=b)}d.length=f+1;for(let u=0,m=d.length;u<m;u++){const b=d[u];r.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}class hn extends bt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=e/o,f=t/c,u=[],m=[],b=[],g=[];for(let p=0;p<h;p++){const x=p*f-a;for(let v=0;v<l;v++){const _=v*d-s;m.push(_,-x,0),b.push(0,0,1),g.push(v/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const v=x+l*p,_=x+l*(p+1),C=x+1+l*(p+1),E=x+1+l*p;u.push(v,_,E),u.push(_,C,E)}this.setIndex(u),this.setAttribute("position",new rt(m,3)),this.setAttribute("normal",new rt(b,3)),this.setAttribute("uv",new rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.width,e.height,e.widthSegments,e.heightSegments)}}var jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xf=`#ifdef USE_ALPHAHASH
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
#endif`,qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qf=`#ifdef USE_AOMAP
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
#endif`,$f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zf=`#ifdef USE_BATCHING
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
#endif`,ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ip=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sp=`#ifdef USE_IRIDESCENCE
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
#endif`,rp=`#ifdef USE_BUMPMAP
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
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pp=`#define PI 3.141592653589793
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
} // validated`,mp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gp=`vec3 transformedNormal = objectNormal;
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
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sp=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ap=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ip=`#ifdef USE_GRADIENTMAP
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
}`,Dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kp=`uniform bool receiveShadow;
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
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hp=`PhysicalMaterial material;
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
#endif`,Vp=`struct PhysicalMaterial {
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
}`,Wp=`
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
#endif`,jp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,em=`#if defined( USE_POINTS_UV )
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
#endif`,tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,im=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`#ifdef USE_MORPHTARGETS
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
#endif`,om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fm=`#ifdef USE_NORMALMAP
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
#endif`,pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cm=`float getShadowMask() {
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
}`,Pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lm=`#ifdef USE_SKINNING
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
#endif`,Im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,Nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Om=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#ifdef USE_TRANSMISSION
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jm=`uniform sampler2D t2D;
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`#include <common>
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
}`,Qm=`#if DEPTH_PACKING == 3200
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
}`,$m=`#define DISTANCE
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
}`,Zm=`#define DISTANCE
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`uniform float scale;
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,rg=`uniform vec3 diffuse;
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
}`,ag=`#define LAMBERT
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
}`,og=`#define LAMBERT
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
}`,cg=`#define MATCAP
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
}`,lg=`#define MATCAP
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
}`,hg=`#define NORMAL
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
}`,ug=`#define NORMAL
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
}`,dg=`#define PHONG
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
}`,fg=`#define PHONG
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
}`,pg=`#define STANDARD
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
}`,mg=`#define STANDARD
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
}`,gg=`#define TOON
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
}`,bg=`#define TOON
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
}`,_g=`uniform float size;
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
}`,xg=`uniform vec3 diffuse;
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
}`,vg=`#include <common>
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
}`,Mg=`uniform vec3 color;
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
}`,yg=`uniform float rotation;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:jf,alphahash_pars_fragment:Xf,alphamap_fragment:qf,alphamap_pars_fragment:Yf,alphatest_fragment:Kf,alphatest_pars_fragment:Jf,aomap_fragment:Qf,aomap_pars_fragment:$f,batching_pars_vertex:Zf,batching_vertex:ep,begin_vertex:tp,beginnormal_vertex:np,bsdfs:ip,iridescence_fragment:sp,bumpmap_pars_fragment:rp,clipping_planes_fragment:ap,clipping_planes_pars_fragment:op,clipping_planes_pars_vertex:cp,clipping_planes_vertex:lp,color_fragment:hp,color_pars_fragment:up,color_pars_vertex:dp,color_vertex:fp,common:pp,cube_uv_reflection_fragment:mp,defaultnormal_vertex:gp,displacementmap_pars_vertex:bp,displacementmap_vertex:_p,emissivemap_fragment:xp,emissivemap_pars_fragment:vp,colorspace_fragment:Mp,colorspace_pars_fragment:yp,envmap_fragment:Sp,envmap_common_pars_fragment:Tp,envmap_pars_fragment:Ap,envmap_pars_vertex:wp,envmap_physical_pars_fragment:Fp,envmap_vertex:Ep,fog_vertex:Rp,fog_pars_vertex:Cp,fog_fragment:Pp,fog_pars_fragment:Lp,gradientmap_pars_fragment:Ip,lightmap_pars_fragment:Dp,lights_lambert_fragment:Np,lights_lambert_pars_fragment:Up,lights_pars_begin:kp,lights_toon_fragment:Op,lights_toon_pars_fragment:Bp,lights_phong_fragment:zp,lights_phong_pars_fragment:Gp,lights_physical_fragment:Hp,lights_physical_pars_fragment:Vp,lights_fragment_begin:Wp,lights_fragment_maps:jp,lights_fragment_end:Xp,logdepthbuf_fragment:qp,logdepthbuf_pars_fragment:Yp,logdepthbuf_pars_vertex:Kp,logdepthbuf_vertex:Jp,map_fragment:Qp,map_pars_fragment:$p,map_particle_fragment:Zp,map_particle_pars_fragment:em,metalnessmap_fragment:tm,metalnessmap_pars_fragment:nm,morphinstance_vertex:im,morphcolor_vertex:sm,morphnormal_vertex:rm,morphtarget_pars_vertex:am,morphtarget_vertex:om,normal_fragment_begin:cm,normal_fragment_maps:lm,normal_pars_fragment:hm,normal_pars_vertex:um,normal_vertex:dm,normalmap_pars_fragment:fm,clearcoat_normal_fragment_begin:pm,clearcoat_normal_fragment_maps:mm,clearcoat_pars_fragment:gm,iridescence_pars_fragment:bm,opaque_fragment:_m,packing:xm,premultiplied_alpha_fragment:vm,project_vertex:Mm,dithering_fragment:ym,dithering_pars_fragment:Sm,roughnessmap_fragment:Tm,roughnessmap_pars_fragment:Am,shadowmap_pars_fragment:wm,shadowmap_pars_vertex:Em,shadowmap_vertex:Rm,shadowmask_pars_fragment:Cm,skinbase_vertex:Pm,skinning_pars_vertex:Lm,skinning_vertex:Im,skinnormal_vertex:Dm,specularmap_fragment:Nm,specularmap_pars_fragment:Um,tonemapping_fragment:km,tonemapping_pars_fragment:Fm,transmission_fragment:Om,transmission_pars_fragment:Bm,uv_pars_fragment:zm,uv_pars_vertex:Gm,uv_vertex:Hm,worldpos_vertex:Vm,background_vert:Wm,background_frag:jm,backgroundCube_vert:Xm,backgroundCube_frag:qm,cube_vert:Ym,cube_frag:Km,depth_vert:Jm,depth_frag:Qm,distanceRGBA_vert:$m,distanceRGBA_frag:Zm,equirect_vert:eg,equirect_frag:tg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:sg,meshbasic_frag:rg,meshlambert_vert:ag,meshlambert_frag:og,meshmatcap_vert:cg,meshmatcap_frag:lg,meshnormal_vert:hg,meshnormal_frag:ug,meshphong_vert:dg,meshphong_frag:fg,meshphysical_vert:pg,meshphysical_frag:mg,meshtoon_vert:gg,meshtoon_frag:bg,points_vert:_g,points_frag:xg,shadow_vert:vg,shadow_frag:Mg,sprite_vert:yg,sprite_frag:Sg},oe={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},xn={basic:{uniforms:kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new he(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:kt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:kt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new he(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:kt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:kt([oe.points,oe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:kt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:kt([oe.common,oe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:kt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:kt([oe.sprite,oe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:kt([oe.common,oe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:kt([oe.lights,oe.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};xn.physical={uniforms:kt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Mr={r:0,b:0,g:0},_i=new pn,Tg=new Ce;function Ag(r,e,t,n,i,s,a){const o=new he(0);let c=s===!0?0:1,l,h,d=null,f=0,u=null;function m(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function b(x){let v=!1;const _=m(x);_===null?p(o,c):_&&_.isColor&&(p(_,1),v=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(x,v){const _=m(v);_&&(_.isCubeTexture||_.mapping===sa)?(h===void 0&&(h=new et(new Xt(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:cs(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),_i.copy(v.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(_i)),h.material.toneMapped=We.getTransfer(_.colorSpace)!==tt,(d!==_||f!==_.version||u!==r.toneMapping)&&(h.material.needsUpdate=!0,d=_,f=_.version,u=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new et(new hn(2,2),new yn({name:"BackgroundMaterial",uniforms:cs(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=We.getTransfer(_.colorSpace)!==tt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,d=_,f=_.version,u=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,v){x.getRGB(Mr,mu(r)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:b,addToRenderList:g}}function wg(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(T,A,P,I,N){let O=!1;const H=d(I,P,A);s!==H&&(s=H,l(s.object)),O=u(T,I,P,N),O&&m(T,I,P,N),N!==null&&e.update(N,r.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,_(T,A,P,I),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return r.createVertexArray()}function l(T){return r.bindVertexArray(T)}function h(T){return r.deleteVertexArray(T)}function d(T,A,P){const I=P.wireframe===!0;let N=n[T.id];N===void 0&&(N={},n[T.id]=N);let O=N[A.id];O===void 0&&(O={},N[A.id]=O);let H=O[I];return H===void 0&&(H=f(c()),O[I]=H),H}function f(T){const A=[],P=[],I=[];for(let N=0;N<t;N++)A[N]=0,P[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:P,attributeDivisors:I,object:T,attributes:{},index:null}}function u(T,A,P,I){const N=s.attributes,O=A.attributes;let H=0;const q=P.getAttributes();for(const V in q)if(q[V].location>=0){const re=N[V];let ce=O[V];if(ce===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(ce=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(ce=T.instanceColor)),re===void 0||re.attribute!==ce||ce&&re.data!==ce.data)return!0;H++}return s.attributesNum!==H||s.index!==I}function m(T,A,P,I){const N={},O=A.attributes;let H=0;const q=P.getAttributes();for(const V in q)if(q[V].location>=0){let re=O[V];re===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(re=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(re=T.instanceColor));const ce={};ce.attribute=re,re&&re.data&&(ce.data=re.data),N[V]=ce,H++}s.attributes=N,s.attributesNum=H,s.index=I}function b(){const T=s.newAttributes;for(let A=0,P=T.length;A<P;A++)T[A]=0}function g(T){p(T,0)}function p(T,A){const P=s.newAttributes,I=s.enabledAttributes,N=s.attributeDivisors;P[T]=1,I[T]===0&&(r.enableVertexAttribArray(T),I[T]=1),N[T]!==A&&(r.vertexAttribDivisor(T,A),N[T]=A)}function x(){const T=s.newAttributes,A=s.enabledAttributes;for(let P=0,I=A.length;P<I;P++)A[P]!==T[P]&&(r.disableVertexAttribArray(P),A[P]=0)}function v(T,A,P,I,N,O,H){H===!0?r.vertexAttribIPointer(T,A,P,N,O):r.vertexAttribPointer(T,A,P,I,N,O)}function _(T,A,P,I){b();const N=I.attributes,O=P.getAttributes(),H=A.defaultAttributeValues;for(const q in O){const V=O[q];if(V.location>=0){let Z=N[q];if(Z===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(Z=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(Z=T.instanceColor)),Z!==void 0){const re=Z.normalized,ce=Z.itemSize,Ae=e.get(Z);if(Ae===void 0)continue;const Ve=Ae.buffer,K=Ae.type,ee=Ae.bytesPerElement,se=K===r.INT||K===r.UNSIGNED_INT||Z.gpuType===lc;if(Z.isInterleavedBufferAttribute){const te=Z.data,Se=te.stride,Ee=Z.offset;if(te.isInstancedInterleavedBuffer){for(let Le=0;Le<V.locationSize;Le++)p(V.location+Le,te.meshPerAttribute);T.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Le=0;Le<V.locationSize;Le++)g(V.location+Le);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let Le=0;Le<V.locationSize;Le++)v(V.location+Le,ce/V.locationSize,K,re,Se*ee,(Ee+ce/V.locationSize*Le)*ee,se)}else{if(Z.isInstancedBufferAttribute){for(let te=0;te<V.locationSize;te++)p(V.location+te,Z.meshPerAttribute);T.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let te=0;te<V.locationSize;te++)g(V.location+te);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let te=0;te<V.locationSize;te++)v(V.location+te,ce/V.locationSize,K,re,ce*ee,ce/V.locationSize*te*ee,se)}}else if(H!==void 0){const re=H[q];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(V.location,re);break;case 3:r.vertexAttrib3fv(V.location,re);break;case 4:r.vertexAttrib4fv(V.location,re);break;default:r.vertexAttrib1fv(V.location,re)}}}}x()}function C(){w();for(const T in n){const A=n[T];for(const P in A){const I=A[P];for(const N in I)h(I[N].object),delete I[N];delete A[P]}delete n[T]}}function E(T){if(n[T.id]===void 0)return;const A=n[T.id];for(const P in A){const I=A[P];for(const N in I)h(I[N].object),delete I[N];delete A[P]}delete n[T.id]}function S(T){for(const A in n){const P=n[A];if(P[T.id]===void 0)continue;const I=P[T.id];for(const N in I)h(I[N].object),delete I[N];delete P[T.id]}}function w(){y(),a=!0,s!==i&&(s=i,l(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:S,initAttributes:b,enableAttribute:g,disableUnusedAttributes:x}}function Eg(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,d){d!==0&&(r.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let u=0;for(let m=0;m<d;m++)u+=h[m];t.update(u,n,1)}function c(l,h,d,f){if(d===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<l.length;m++)a(l[m],h[m],f[m]);else{u.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let m=0;for(let b=0;b<d;b++)m+=h[b]*f[b];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Rg(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(S){return!(S!==Zt&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){const w=S===$s&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==qn&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==ln&&!w)}function c(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:u,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:C,maxSamples:E}}function Cg(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new yi,o=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){const m=d.clippingPlanes,b=d.clipIntersection,g=d.clipShadows,p=r.get(d);if(!i||m===null||m.length===0||s&&!g)s?h(null):l();else{const x=s?0:n,v=x*4;let _=p.clippingState||null;c.value=_,_=h(m,f,v,u);for(let C=0;C!==v;++C)_[C]=t[C];p.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,m){const b=d!==null?d.length:0;let g=null;if(b!==0){if(g=c.value,m!==!0||g===null){const p=u+b*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,_=u;v!==b;++v,_+=4)a.copy(d[v]).applyMatrix4(x,o),a.normal.toArray(g,_),g[_+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}function Pg(r){let e=new WeakMap;function t(a,o){return o===xo?a.mapping=is:o===vo&&(a.mapping=ss),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===xo||o===vo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Gf(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class xc extends gu{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yi=4,Sl=[.125,.215,.35,.446,.526,.582],Ai=20,ka=new xc,Tl=new he;let Fa=null,Oa=0,Ba=0,za=!1;const Si=(1+Math.sqrt(5))/2,Wi=1/Si,Al=[new L(-Si,Wi,0),new L(Si,Wi,0),new L(-Wi,0,Si),new L(Wi,0,Si),new L(0,Si,-Wi),new L(0,Si,Wi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class wl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Fa=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fa,Oa,Ba),this._renderer.xr.enabled=za,e.scissorTest=!1,yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fa=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:$s,format:Zt,colorSpace:Bt,depthBuffer:!1},i=El(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=El(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lg(s)),this._blurMaterial=Ig(s,e,t)}return i}_compileMaterial(e){const t=new et(this._lodPlanes[0],e);this._renderer.compile(t,ka)}_sceneToCubeUV(e,t,n,i){const o=new Dt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Tl),h.toneMapping=hi,h.autoClear=!1;const u=new Rt({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),m=new et(new Xt,u);let b=!1;const g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,b=!0):(u.color.copy(Tl),b=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const v=this._cubeSize;yr(i,x*v,p>2?v:0,v,v),h.setRenderTarget(i),b&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===is||e.mapping===ss;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rl());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new et(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;yr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ka)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Al[(i-s-1)%Al.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new et(this._lodPlanes[i],l),f=l.uniforms,u=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*Ai-1),b=s/m,g=isFinite(s)?1+Math.floor(h*b):Ai;g>Ai&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ai}`);const p=[];let x=0;for(let S=0;S<Ai;++S){const w=S/b,y=Math.exp(-w*w/2);p.push(y),S===0?x+=y:S<g&&(x+=2*y)}for(let S=0;S<p.length;S++)p[S]=p[S]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=m,f.mipInt.value=v-n;const _=this._sizeLods[i],C=3*_*(i>v-Yi?i-v+Yi:0),E=4*(this._cubeSize-_);yr(t,C,E,3*_,2*_),c.setRenderTarget(t),c.render(d,ka)}}function Lg(r){const e=[],t=[],n=[];let i=r;const s=r-Yi+1+Sl.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-Yi?c=Sl[a-r+Yi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,m=6,b=3,g=2,p=1,x=new Float32Array(b*m*u),v=new Float32Array(g*m*u),_=new Float32Array(p*m*u);for(let E=0;E<u;E++){const S=E%3*2/3-1,w=E>2?0:-1,y=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];x.set(y,b*m*E),v.set(f,g*m*E);const T=[E,E,E,E,E,E];_.set(T,p*m*E)}const C=new bt;C.setAttribute("position",new st(x,b)),C.setAttribute("uv",new st(v,g)),C.setAttribute("faceIndex",new st(_,p)),e.push(C),i>Yi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function El(r,e,t){const n=new Ci(r,e,t);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ig(r,e,t){const n=new Float32Array(Ai),i=new L(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:vc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Rl(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Cl(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function vc(){return`

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
	`}function Dg(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===xo||c===vo,h=c===is||c===ss;if(l||h){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new wl(r)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const u=o.image;return l&&u&&u.height>0||h&&u&&i(u)?(t===null&&(t=new wl(r)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ng(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Us("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ug(r,e,t,n){const i={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const b=f.morphAttributes[m];for(let g=0,p=b.length;g<p;g++)e.remove(b[g])}f.removeEventListener("dispose",a),delete i[f.id];const u=s.get(f);u&&(e.remove(u),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const m in f)e.update(f[m],r.ARRAY_BUFFER);const u=d.morphAttributes;for(const m in u){const b=u[m];for(let g=0,p=b.length;g<p;g++)e.update(b[g],r.ARRAY_BUFFER)}}function l(d){const f=[],u=d.index,m=d.attributes.position;let b=0;if(u!==null){const x=u.array;b=u.version;for(let v=0,_=x.length;v<_;v+=3){const C=x[v+0],E=x[v+1],S=x[v+2];f.push(C,E,E,S,S,C)}}else if(m!==void 0){const x=m.array;b=m.version;for(let v=0,_=x.length/3-1;v<_;v+=3){const C=v+0,E=v+1,S=v+2;f.push(C,E,E,S,S,C)}}else return;const g=new(cu(f)?pu:fu)(f,1);g.version=b;const p=s.get(d);p&&e.remove(p),s.set(d,g)}function h(d){const f=s.get(d);if(f){const u=d.index;u!==null&&f.version<u.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function kg(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,u){r.drawElements(n,u,s,f*a),t.update(u,n,1)}function l(f,u,m){m!==0&&(r.drawElementsInstanced(n,u,s,f*a,m),t.update(u,n,m))}function h(f,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,f,0,m);let g=0;for(let p=0;p<m;p++)g+=u[p];t.update(g,n,1)}function d(f,u,m,b){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/a,u[p],b[p]);else{g.multiDrawElementsInstancedWEBGL(n,u,0,s,f,0,b,0,m);let p=0;for(let x=0;x<m;x++)p+=u[x]*b[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Fg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Og(r,e,t){const n=new WeakMap,i=new Ye;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let T=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",T)};var u=T;f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let _=0;m===!0&&(_=1),b===!0&&(_=2),g===!0&&(_=3);let C=o.attributes.position.count*_,E=1;C>e.maxTextureSize&&(E=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const S=new Float32Array(C*E*4*d),w=new hu(S,C,E,d);w.type=ln,w.needsUpdate=!0;const y=_*4;for(let A=0;A<d;A++){const P=p[A],I=x[A],N=v[A],O=C*E*4*A;for(let H=0;H<P.count;H++){const q=H*y;m===!0&&(i.fromBufferAttribute(P,H),S[O+q+0]=i.x,S[O+q+1]=i.y,S[O+q+2]=i.z,S[O+q+3]=0),b===!0&&(i.fromBufferAttribute(I,H),S[O+q+4]=i.x,S[O+q+5]=i.y,S[O+q+6]=i.z,S[O+q+7]=0),g===!0&&(i.fromBufferAttribute(N,H),S[O+q+8]=i.x,S[O+q+9]=i.y,S[O+q+10]=i.z,S[O+q+11]=N.itemSize===4?i.w:1)}}f={count:d,texture:w,size:new me(C,E)},n.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const b=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(r,"morphTargetBaseInfluence",b),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Bg(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return d}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class xu extends St{constructor(e,t,n,i,s,a,o,c,l,h=$i){if(h!==$i&&h!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===$i&&(n=Ri),n===void 0&&h===as&&(n=rs),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ot,this.minFilter=c!==void 0?c:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const vu=new St,Pl=new xu(1,1),Mu=new hu,yu=new Af,Su=new bu,Ll=[],Il=[],Dl=new Float32Array(16),Nl=new Float32Array(9),Ul=new Float32Array(4);function ps(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ll[i];if(s===void 0&&(s=new Float32Array(i),Ll[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Tt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function At(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function oa(r,e){let t=Il[e];t===void 0&&(t=new Int32Array(e),Il[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function zg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Gg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2fv(this.addr,e),At(t,e)}}function Hg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;r.uniform3fv(this.addr,e),At(t,e)}}function Vg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4fv(this.addr,e),At(t,e)}}function Wg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;Ul.set(n),r.uniformMatrix2fv(this.addr,!1,Ul),At(t,n)}}function jg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;Nl.set(n),r.uniformMatrix3fv(this.addr,!1,Nl),At(t,n)}}function Xg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;Dl.set(n),r.uniformMatrix4fv(this.addr,!1,Dl),At(t,n)}}function qg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Yg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2iv(this.addr,e),At(t,e)}}function Kg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;r.uniform3iv(this.addr,e),At(t,e)}}function Jg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4iv(this.addr,e),At(t,e)}}function Qg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function $g(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2uiv(this.addr,e),At(t,e)}}function Zg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;r.uniform3uiv(this.addr,e),At(t,e)}}function e0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4uiv(this.addr,e),At(t,e)}}function t0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Pl.compareFunction=au,s=Pl):s=vu,t.setTexture2D(e||s,i)}function n0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||yu,i)}function i0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Su,i)}function s0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Mu,i)}function r0(r){switch(r){case 5126:return zg;case 35664:return Gg;case 35665:return Hg;case 35666:return Vg;case 35674:return Wg;case 35675:return jg;case 35676:return Xg;case 5124:case 35670:return qg;case 35667:case 35671:return Yg;case 35668:case 35672:return Kg;case 35669:case 35673:return Jg;case 5125:return Qg;case 36294:return $g;case 36295:return Zg;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}function a0(r,e){r.uniform1fv(this.addr,e)}function o0(r,e){const t=ps(e,this.size,2);r.uniform2fv(this.addr,t)}function c0(r,e){const t=ps(e,this.size,3);r.uniform3fv(this.addr,t)}function l0(r,e){const t=ps(e,this.size,4);r.uniform4fv(this.addr,t)}function h0(r,e){const t=ps(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function u0(r,e){const t=ps(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function d0(r,e){const t=ps(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function f0(r,e){r.uniform1iv(this.addr,e)}function p0(r,e){r.uniform2iv(this.addr,e)}function m0(r,e){r.uniform3iv(this.addr,e)}function g0(r,e){r.uniform4iv(this.addr,e)}function b0(r,e){r.uniform1uiv(this.addr,e)}function _0(r,e){r.uniform2uiv(this.addr,e)}function x0(r,e){r.uniform3uiv(this.addr,e)}function v0(r,e){r.uniform4uiv(this.addr,e)}function M0(r,e,t){const n=this.cache,i=e.length,s=oa(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||vu,s[a])}function y0(r,e,t){const n=this.cache,i=e.length,s=oa(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||yu,s[a])}function S0(r,e,t){const n=this.cache,i=e.length,s=oa(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Su,s[a])}function T0(r,e,t){const n=this.cache,i=e.length,s=oa(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Mu,s[a])}function A0(r){switch(r){case 5126:return a0;case 35664:return o0;case 35665:return c0;case 35666:return l0;case 35674:return h0;case 35675:return u0;case 35676:return d0;case 5124:case 35670:return f0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return b0;case 36294:return _0;case 36295:return x0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return T0}}class w0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=r0(t.type)}}class E0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A0(t.type)}}class R0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function kl(r,e){r.seq.push(e),r.map[e.id]=e}function C0(r,e,t){const n=r.name,i=n.length;for(Ga.lastIndex=0;;){const s=Ga.exec(n),a=Ga.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){kl(t,l===void 0?new w0(o,r,e):new E0(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new R0(o),kl(t,d)),t=d}}}class Jr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);C0(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Fl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const P0=37297;let L0=0;function I0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ol=new ke;function D0(r){We._getMatrix(Ol,We.workingColorSpace,r);const e=`mat3( ${Ol.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(r)){case ra:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Bl(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+I0(r.getShaderSource(e),a)}else return i}function N0(r,e){const t=D0(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function U0(r,e){let t;switch(e){case Nd:t="Linear";break;case Ud:t="Reinhard";break;case kd:t="Cineon";break;case Fd:t="ACESFilmic";break;case Bd:t="AgX";break;case zd:t="Neutral";break;case Od:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sr=new L;function k0(){We.getLuminanceCoefficients(Sr);const r=Sr.x.toFixed(4),e=Sr.y.toFixed(4),t=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function O0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function B0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ks(r){return r!==""}function zl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ko(r){return r.replace(z0,H0)}const G0=new Map;function H0(r,e){let t=Oe[e];if(t===void 0){const n=G0.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ko(t)}const V0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hl(r){return r.replace(V0,W0)}function W0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Vl(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function j0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===qh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function X0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case is:case ss:e="ENVMAP_TYPE_CUBE";break;case sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ss:e="ENVMAP_MODE_REFRACTION";break}return e}function Y0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case cc:e="ENVMAP_BLENDING_MULTIPLY";break;case Id:e="ENVMAP_BLENDING_MIX";break;case Dd:e="ENVMAP_BLENDING_ADD";break}return e}function K0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function J0(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=j0(t),l=X0(t),h=q0(t),d=Y0(t),f=K0(t),u=F0(t),m=O0(s),b=i.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ks).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ks).join(`
`),p.length>0&&(p+=`
`)):(g=[Vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),p=[Vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?Oe.tonemapping_pars_fragment:"",t.toneMapping!==hi?U0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,N0("linearToOutputTexel",t.outputColorSpace),k0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ks).join(`
`)),a=Ko(a),a=zl(a,t),a=Gl(a,t),o=Ko(o),o=zl(o,t),o=Gl(o,t),a=Hl(a),o=Hl(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+g+a,_=x+p+o,C=Fl(i,i.VERTEX_SHADER,v),E=Fl(i,i.FRAGMENT_SHADER,_);i.attachShader(b,C),i.attachShader(b,E),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function S(A){if(r.debug.checkShaderErrors){const P=i.getProgramInfoLog(b).trim(),I=i.getShaderInfoLog(C).trim(),N=i.getShaderInfoLog(E).trim();let O=!0,H=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,b,C,E);else{const q=Bl(i,C,"vertex"),V=Bl(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+P+`
`+q+`
`+V)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(I===""||N==="")&&(H=!1);H&&(A.diagnostics={runnable:O,programLog:P,vertexShader:{log:I,prefix:g},fragmentShader:{log:N,prefix:p}})}i.deleteShader(C),i.deleteShader(E),w=new Jr(i,b),y=B0(i,b)}let w;this.getUniforms=function(){return w===void 0&&S(this),w};let y;this.getAttributes=function(){return y===void 0&&S(this),y};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(b,P0)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=L0++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=C,this.fragmentShader=E,this}let Q0=0;class $0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Z0(e),t.set(e,n)),n}}class Z0{constructor(e){this.id=Q0++,this.code=e,this.usedTimes=0}}function eb(r,e,t,n,i,s,a){const o=new uu,c=new $0,l=new Set,h=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let u=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,T,A,P,I){const N=P.fog,O=I.geometry,H=y.isMeshStandardMaterial?P.environment:null,q=(y.isMeshStandardMaterial?t:e).get(y.envMap||H),V=q&&q.mapping===sa?q.image.height:null,Z=m[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const re=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ce=re!==void 0?re.length:0;let Ae=0;O.morphAttributes.position!==void 0&&(Ae=1),O.morphAttributes.normal!==void 0&&(Ae=2),O.morphAttributes.color!==void 0&&(Ae=3);let Ve,K,ee,se;if(Z){const Qe=xn[Z];Ve=Qe.vertexShader,K=Qe.fragmentShader}else Ve=y.vertexShader,K=y.fragmentShader,c.update(y),ee=c.getVertexShaderID(y),se=c.getFragmentShaderID(y);const te=r.getRenderTarget(),Se=r.state.buffers.depth.getReversed(),Ee=I.isInstancedMesh===!0,Le=I.isBatchedMesh===!0,at=!!y.map,Ge=!!y.matcap,dt=!!q,k=!!y.aoMap,lt=!!y.lightMap,ze=!!y.bumpMap,Be=!!y.normalMap,we=!!y.displacementMap,nt=!!y.emissiveMap,Te=!!y.metalnessMap,D=!!y.roughnessMap,M=y.anisotropy>0,U=y.clearcoat>0,G=y.dispersion>0,X=y.iridescence>0,Y=y.sheen>0,ae=y.transmission>0,ie=M&&!!y.anisotropyMap,le=U&&!!y.clearcoatMap,De=U&&!!y.clearcoatNormalMap,$=U&&!!y.clearcoatRoughnessMap,ge=X&&!!y.iridescenceMap,Re=X&&!!y.iridescenceThicknessMap,Pe=Y&&!!y.sheenColorMap,be=Y&&!!y.sheenRoughnessMap,je=!!y.specularMap,Fe=!!y.specularColorMap,ot=!!y.specularIntensityMap,F=ae&&!!y.transmissionMap,ue=ae&&!!y.thicknessMap,J=!!y.gradientMap,Q=!!y.alphaMap,pe=y.alphaTest>0,de=!!y.alphaHash,Ne=!!y.extensions;let pt=hi;y.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(pt=r.toneMapping);const Pt={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:Ve,fragmentShader:K,defines:y.defines,customVertexShaderID:ee,customFragmentShaderID:se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Le,batchingColor:Le&&I._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&I.instanceColor!==null,instancingMorph:Ee&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Bt,alphaToCoverage:!!y.alphaToCoverage,map:at,matcap:Ge,envMap:dt,envMapMode:dt&&q.mapping,envMapCubeUVHeight:V,aoMap:k,lightMap:lt,bumpMap:ze,normalMap:Be,displacementMap:f&&we,emissiveMap:nt,normalMapObjectSpace:Be&&y.normalMapType===Xd,normalMapTangentSpace:Be&&y.normalMapType===gc,metalnessMap:Te,roughnessMap:D,anisotropy:M,anisotropyMap:ie,clearcoat:U,clearcoatMap:le,clearcoatNormalMap:De,clearcoatRoughnessMap:$,dispersion:G,iridescence:X,iridescenceMap:ge,iridescenceThicknessMap:Re,sheen:Y,sheenColorMap:Pe,sheenRoughnessMap:be,specularMap:je,specularColorMap:Fe,specularIntensityMap:ot,transmission:ae,transmissionMap:F,thicknessMap:ue,gradientMap:J,opaque:y.transparent===!1&&y.blending===wi&&y.alphaToCoverage===!1,alphaMap:Q,alphaTest:pe,alphaHash:de,combine:y.combine,mapUv:at&&b(y.map.channel),aoMapUv:k&&b(y.aoMap.channel),lightMapUv:lt&&b(y.lightMap.channel),bumpMapUv:ze&&b(y.bumpMap.channel),normalMapUv:Be&&b(y.normalMap.channel),displacementMapUv:we&&b(y.displacementMap.channel),emissiveMapUv:nt&&b(y.emissiveMap.channel),metalnessMapUv:Te&&b(y.metalnessMap.channel),roughnessMapUv:D&&b(y.roughnessMap.channel),anisotropyMapUv:ie&&b(y.anisotropyMap.channel),clearcoatMapUv:le&&b(y.clearcoatMap.channel),clearcoatNormalMapUv:De&&b(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&b(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&b(y.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&b(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&b(y.sheenColorMap.channel),sheenRoughnessMapUv:be&&b(y.sheenRoughnessMap.channel),specularMapUv:je&&b(y.specularMap.channel),specularColorMapUv:Fe&&b(y.specularColorMap.channel),specularIntensityMapUv:ot&&b(y.specularIntensityMap.channel),transmissionMapUv:F&&b(y.transmissionMap.channel),thicknessMapUv:ue&&b(y.thicknessMap.channel),alphaMapUv:Q&&b(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Be||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!O.attributes.uv&&(at||Q),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Se,skinning:I.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ae,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&A.length>0,shadowMapType:r.shadowMap.type,toneMapping:pt,decodeVideoTexture:at&&y.map.isVideoTexture===!0&&We.getTransfer(y.map.colorSpace)===tt,decodeVideoTextureEmissive:nt&&y.emissiveMap.isVideoTexture===!0&&We.getTransfer(y.emissiveMap.colorSpace)===tt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Wt,flipSided:y.side===Ft,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ne&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&y.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Pt.vertexUv1s=l.has(1),Pt.vertexUv2s=l.has(2),Pt.vertexUv3s=l.has(3),l.clear(),Pt}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)T.push(A),T.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(x(T,y),v(T,y),T.push(r.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function x(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reverseDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),y.push(o.mask)}function _(y){const T=m[y.type];let A;if(T){const P=xn[T];A=Ff.clone(P.uniforms)}else A=y.uniforms;return A}function C(y,T){let A;for(let P=0,I=h.length;P<I;P++){const N=h[P];if(N.cacheKey===T){A=N,++A.usedTimes;break}}return A===void 0&&(A=new J0(r,T,y,s),h.push(A)),A}function E(y){if(--y.usedTimes===0){const T=h.indexOf(y);h[T]=h[h.length-1],h.pop(),y.destroy()}}function S(y){c.remove(y)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:C,releaseProgram:E,releaseShaderCache:S,programs:h,dispose:w}}function tb(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function nb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Wl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function jl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d,f,u,m,b,g){let p=r[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:u,groupOrder:m,renderOrder:d.renderOrder,z:b,group:g},r[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=u,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=b,p.group=g),e++,p}function o(d,f,u,m,b,g){const p=a(d,f,u,m,b,g);u.transmission>0?n.push(p):u.transparent===!0?i.push(p):t.push(p)}function c(d,f,u,m,b,g){const p=a(d,f,u,m,b,g);u.transmission>0?n.unshift(p):u.transparent===!0?i.unshift(p):t.unshift(p)}function l(d,f){t.length>1&&t.sort(d||nb),n.length>1&&n.sort(f||Wl),i.length>1&&i.sort(f||Wl)}function h(){for(let d=e,f=r.length;d<f;d++){const u=r[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function ib(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new jl,r.set(n,[a])):i>=s.length?(a=new jl,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function sb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new he};break;case"SpotLight":t={position:new L,direction:new L,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new he,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new he,groundColor:new he};break;case"RectAreaLight":t={color:new he,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function rb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ab=0;function ob(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function cb(r){const e=new sb,t=rb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const i=new L,s=new Ce,a=new Ce;function o(l){let h=0,d=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let u=0,m=0,b=0,g=0,p=0,x=0,v=0,_=0,C=0,E=0,S=0;l.sort(ob);for(let y=0,T=l.length;y<T;y++){const A=l[y],P=A.color,I=A.intensity,N=A.distance,O=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=P.r*I,d+=P.g*I,f+=P.b*I;else if(A.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(A.sh.coefficients[H],I);S++}else if(A.isDirectionalLight){const H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const q=A.shadow,V=t.get(A);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.directionalShadow[u]=V,n.directionalShadowMap[u]=O,n.directionalShadowMatrix[u]=A.shadow.matrix,x++}n.directional[u]=H,u++}else if(A.isSpotLight){const H=e.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(P).multiplyScalar(I),H.distance=N,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,n.spot[b]=H;const q=A.shadow;if(A.map&&(n.spotLightMap[C]=A.map,C++,q.updateMatrices(A),A.castShadow&&E++),n.spotLightMatrix[b]=q.matrix,A.castShadow){const V=t.get(A);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.spotShadow[b]=V,n.spotShadowMap[b]=O,_++}b++}else if(A.isRectAreaLight){const H=e.get(A);H.color.copy(P).multiplyScalar(I),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),n.rectArea[g]=H,g++}else if(A.isPointLight){const H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){const q=A.shadow,V=t.get(A);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=O,n.pointShadowMatrix[m]=A.shadow.matrix,v++}n.point[m]=H,m++}else if(A.isHemisphereLight){const H=e.get(A);H.skyColor.copy(A.color).multiplyScalar(I),H.groundColor.copy(A.groundColor).multiplyScalar(I),n.hemi[p]=H,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const w=n.hash;(w.directionalLength!==u||w.pointLength!==m||w.spotLength!==b||w.rectAreaLength!==g||w.hemiLength!==p||w.numDirectionalShadows!==x||w.numPointShadows!==v||w.numSpotShadows!==_||w.numSpotMaps!==C||w.numLightProbes!==S)&&(n.directional.length=u,n.spot.length=b,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=S,w.directionalLength=u,w.pointLength=m,w.spotLength=b,w.rectAreaLength=g,w.hemiLength=p,w.numDirectionalShadows=x,w.numPointShadows=v,w.numSpotShadows=_,w.numSpotMaps=C,w.numLightProbes=S,n.version=ab++)}function c(l,h){let d=0,f=0,u=0,m=0,b=0;const g=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const v=l[p];if(v.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),d++}else if(v.isSpotLight){const _=n.spot[u];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),u++}else if(v.isRectAreaLight){const _=n.rectArea[m];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),a.identity(),s.copy(v.matrixWorld),s.premultiply(g),a.extractRotation(s),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const _=n.hemi[b];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),b++}}}return{setup:o,setupView:c,state:n}}function Xl(r){const e=new cb(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function lb(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Xl(r),e.set(i,[o])):s>=a.length?(o=new Xl(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class hb extends fn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ub extends fn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const db=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fb=`uniform sampler2D shadow_pass;
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
}`;function pb(r,e,t){let n=new _c;const i=new me,s=new me,a=new Ye,o=new hb({depthPacking:jd}),c=new ub,l={},h=t.maxTextureSize,d={[Xn]:Ft,[Ft]:Xn,[Wt]:Wt},f=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:db,fragmentShader:fb}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const m=new bt;m.setAttribute("position",new st(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new et(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xh;let p=this.type;this.render=function(E,S,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const y=r.getRenderTarget(),T=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),P=r.state;P.setBlending(li),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const I=p!==Fn&&this.type===Fn,N=p===Fn&&this.type!==Fn;for(let O=0,H=E.length;O<H;O++){const q=E[O],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const Z=V.getFrameExtents();if(i.multiply(Z),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,V.mapSize.y=s.y)),V.map===null||I===!0||N===!0){const ce=this.type!==Fn?{minFilter:Ot,magFilter:Ot}:{};V.map!==null&&V.map.dispose(),V.map=new Ci(i.x,i.y,ce),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const re=V.getViewportCount();for(let ce=0;ce<re;ce++){const Ae=V.getViewport(ce);a.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),P.viewport(a),V.updateMatrices(q,ce),n=V.getFrustum(),_(S,w,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===Fn&&x(V,w),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(y,T,A)};function x(E,S){const w=e.update(b);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ci(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(S,null,w,f,b,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(S,null,w,u,b,null)}function v(E,S,w,y){let T=null;const A=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)T=A;else if(T=w.isPointLight===!0?c:o,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const P=T.uuid,I=S.uuid;let N=l[P];N===void 0&&(N={},l[P]=N);let O=N[I];O===void 0&&(O=T.clone(),N[I]=O,S.addEventListener("dispose",C)),T=O}if(T.visible=S.visible,T.wireframe=S.wireframe,y===Fn?T.side=S.shadowSide!==null?S.shadowSide:S.side:T.side=S.shadowSide!==null?S.shadowSide:d[S.side],T.alphaMap=S.alphaMap,T.alphaTest=S.alphaTest,T.map=S.map,T.clipShadows=S.clipShadows,T.clippingPlanes=S.clippingPlanes,T.clipIntersection=S.clipIntersection,T.displacementMap=S.displacementMap,T.displacementScale=S.displacementScale,T.displacementBias=S.displacementBias,T.wireframeLinewidth=S.wireframeLinewidth,T.linewidth=S.linewidth,w.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const P=r.properties.get(T);P.light=w}return T}function _(E,S,w,y,T){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===Fn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);const I=e.update(E),N=E.material;if(Array.isArray(N)){const O=I.groups;for(let H=0,q=O.length;H<q;H++){const V=O[H],Z=N[V.materialIndex];if(Z&&Z.visible){const re=v(E,Z,y,T);E.onBeforeShadow(r,E,S,w,I,re,V),r.renderBufferDirect(w,null,I,re,E,V),E.onAfterShadow(r,E,S,w,I,re,V)}}}else if(N.visible){const O=v(E,N,y,T);E.onBeforeShadow(r,E,S,w,I,O,null),r.renderBufferDirect(w,null,I,O,E,null),E.onAfterShadow(r,E,S,w,I,O,null)}}const P=E.children;for(let I=0,N=P.length;I<N;I++)_(P[I],S,w,y,T)}function C(E){E.target.removeEventListener("dispose",C);for(const w in l){const y=l[w],T=E.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}const mb={[uo]:fo,[po]:bo,[mo]:_o,[ns]:go,[fo]:uo,[bo]:po,[_o]:mo,[go]:ns};function gb(r,e){function t(){let F=!1;const ue=new Ye;let J=null;const Q=new Ye(0,0,0,0);return{setMask:function(pe){J!==pe&&!F&&(r.colorMask(pe,pe,pe,pe),J=pe)},setLocked:function(pe){F=pe},setClear:function(pe,de,Ne,pt,Pt){Pt===!0&&(pe*=pt,de*=pt,Ne*=pt),ue.set(pe,de,Ne,pt),Q.equals(ue)===!1&&(r.clearColor(pe,de,Ne,pt),Q.copy(ue))},reset:function(){F=!1,J=null,Q.set(-1,0,0,0)}}}function n(){let F=!1,ue=!1,J=null,Q=null,pe=null;return{setReversed:function(de){if(ue!==de){const Ne=e.get("EXT_clip_control");ue?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT);const pt=pe;pe=null,this.setClear(pt)}ue=de},getReversed:function(){return ue},setTest:function(de){de?te(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function(de){J!==de&&!F&&(r.depthMask(de),J=de)},setFunc:function(de){if(ue&&(de=mb[de]),Q!==de){switch(de){case uo:r.depthFunc(r.NEVER);break;case fo:r.depthFunc(r.ALWAYS);break;case po:r.depthFunc(r.LESS);break;case ns:r.depthFunc(r.LEQUAL);break;case mo:r.depthFunc(r.EQUAL);break;case go:r.depthFunc(r.GEQUAL);break;case bo:r.depthFunc(r.GREATER);break;case _o:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Q=de}},setLocked:function(de){F=de},setClear:function(de){pe!==de&&(ue&&(de=1-de),r.clearDepth(de),pe=de)},reset:function(){F=!1,J=null,Q=null,pe=null,ue=!1}}}function i(){let F=!1,ue=null,J=null,Q=null,pe=null,de=null,Ne=null,pt=null,Pt=null;return{setTest:function(Qe){F||(Qe?te(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(Qe){ue!==Qe&&!F&&(r.stencilMask(Qe),ue=Qe)},setFunc:function(Qe,en,En){(J!==Qe||Q!==en||pe!==En)&&(r.stencilFunc(Qe,en,En),J=Qe,Q=en,pe=En)},setOp:function(Qe,en,En){(de!==Qe||Ne!==en||pt!==En)&&(r.stencilOp(Qe,en,En),de=Qe,Ne=en,pt=En)},setLocked:function(Qe){F=Qe},setClear:function(Qe){Pt!==Qe&&(r.clearStencil(Qe),Pt=Qe)},reset:function(){F=!1,ue=null,J=null,Q=null,pe=null,de=null,Ne=null,pt=null,Pt=null}}}const s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,u=[],m=null,b=!1,g=null,p=null,x=null,v=null,_=null,C=null,E=null,S=new he(0,0,0),w=0,y=!1,T=null,A=null,P=null,I=null,N=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,q=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=q>=2);let Z=null,re={};const ce=r.getParameter(r.SCISSOR_BOX),Ae=r.getParameter(r.VIEWPORT),Ve=new Ye().fromArray(ce),K=new Ye().fromArray(Ae);function ee(F,ue,J,Q){const pe=new Uint8Array(4),de=r.createTexture();r.bindTexture(F,de),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ne=0;Ne<J;Ne++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,Q,0,r.RGBA,r.UNSIGNED_BYTE,pe):r.texImage2D(ue+Ne,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,pe);return de}const se={};se[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),se[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),se[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(r.DEPTH_TEST),a.setFunc(ns),ze(!1),Be(qc),te(r.CULL_FACE),k(li);function te(F){h[F]!==!0&&(r.enable(F),h[F]=!0)}function Se(F){h[F]!==!1&&(r.disable(F),h[F]=!1)}function Ee(F,ue){return d[F]!==ue?(r.bindFramebuffer(F,ue),d[F]=ue,F===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ue),F===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function Le(F,ue){let J=u,Q=!1;if(F){J=f.get(ue),J===void 0&&(J=[],f.set(ue,J));const pe=F.textures;if(J.length!==pe.length||J[0]!==r.COLOR_ATTACHMENT0){for(let de=0,Ne=pe.length;de<Ne;de++)J[de]=r.COLOR_ATTACHMENT0+de;J.length=pe.length,Q=!0}}else J[0]!==r.BACK&&(J[0]=r.BACK,Q=!0);Q&&r.drawBuffers(J)}function at(F){return m!==F?(r.useProgram(F),m=F,!0):!1}const Ge={[Ti]:r.FUNC_ADD,[md]:r.FUNC_SUBTRACT,[gd]:r.FUNC_REVERSE_SUBTRACT};Ge[bd]=r.MIN,Ge[_d]=r.MAX;const dt={[xd]:r.ZERO,[vd]:r.ONE,[Md]:r.SRC_COLOR,[lo]:r.SRC_ALPHA,[Ed]:r.SRC_ALPHA_SATURATE,[Ad]:r.DST_COLOR,[Sd]:r.DST_ALPHA,[yd]:r.ONE_MINUS_SRC_COLOR,[ho]:r.ONE_MINUS_SRC_ALPHA,[wd]:r.ONE_MINUS_DST_COLOR,[Td]:r.ONE_MINUS_DST_ALPHA,[Rd]:r.CONSTANT_COLOR,[Cd]:r.ONE_MINUS_CONSTANT_COLOR,[Pd]:r.CONSTANT_ALPHA,[Ld]:r.ONE_MINUS_CONSTANT_ALPHA};function k(F,ue,J,Q,pe,de,Ne,pt,Pt,Qe){if(F===li){b===!0&&(Se(r.BLEND),b=!1);return}if(b===!1&&(te(r.BLEND),b=!0),F!==pd){if(F!==g||Qe!==y){if((p!==Ti||_!==Ti)&&(r.blendEquation(r.FUNC_ADD),p=Ti,_=Ti),Qe)switch(F){case wi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case co:r.blendFunc(r.ONE,r.ONE);break;case Yc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case wi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case co:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Yc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}x=null,v=null,C=null,E=null,S.set(0,0,0),w=0,g=F,y=Qe}return}pe=pe||ue,de=de||J,Ne=Ne||Q,(ue!==p||pe!==_)&&(r.blendEquationSeparate(Ge[ue],Ge[pe]),p=ue,_=pe),(J!==x||Q!==v||de!==C||Ne!==E)&&(r.blendFuncSeparate(dt[J],dt[Q],dt[de],dt[Ne]),x=J,v=Q,C=de,E=Ne),(pt.equals(S)===!1||Pt!==w)&&(r.blendColor(pt.r,pt.g,pt.b,Pt),S.copy(pt),w=Pt),g=F,y=!1}function lt(F,ue){F.side===Wt?Se(r.CULL_FACE):te(r.CULL_FACE);let J=F.side===Ft;ue&&(J=!J),ze(J),F.blending===wi&&F.transparent===!1?k(li):k(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const Q=F.stencilWrite;o.setTest(Q),Q&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),nt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function ze(F){T!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),T=F)}function Be(F){F!==dd?(te(r.CULL_FACE),F!==A&&(F===qc?r.cullFace(r.BACK):F===fd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),A=F}function we(F){F!==P&&(H&&r.lineWidth(F),P=F)}function nt(F,ue,J){F?(te(r.POLYGON_OFFSET_FILL),(I!==ue||N!==J)&&(r.polygonOffset(ue,J),I=ue,N=J)):Se(r.POLYGON_OFFSET_FILL)}function Te(F){F?te(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function D(F){F===void 0&&(F=r.TEXTURE0+O-1),Z!==F&&(r.activeTexture(F),Z=F)}function M(F,ue,J){J===void 0&&(Z===null?J=r.TEXTURE0+O-1:J=Z);let Q=re[J];Q===void 0&&(Q={type:void 0,texture:void 0},re[J]=Q),(Q.type!==F||Q.texture!==ue)&&(Z!==J&&(r.activeTexture(J),Z=J),r.bindTexture(F,ue||se[F]),Q.type=F,Q.texture=ue)}function U(){const F=re[Z];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function G(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(F){Ve.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Ve.copy(F))}function be(F){K.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),K.copy(F))}function je(F,ue){let J=l.get(ue);J===void 0&&(J=new WeakMap,l.set(ue,J));let Q=J.get(F);Q===void 0&&(Q=r.getUniformBlockIndex(ue,F.name),J.set(F,Q))}function Fe(F,ue){const Q=l.get(ue).get(F);c.get(ue)!==Q&&(r.uniformBlockBinding(ue,Q,F.__bindingPointIndex),c.set(ue,Q))}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},Z=null,re={},d={},f=new WeakMap,u=[],m=null,b=!1,g=null,p=null,x=null,v=null,_=null,C=null,E=null,S=new he(0,0,0),w=0,y=!1,T=null,A=null,P=null,I=null,N=null,Ve.set(0,0,r.canvas.width,r.canvas.height),K.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:Se,bindFramebuffer:Ee,drawBuffers:Le,useProgram:at,setBlending:k,setMaterial:lt,setFlipSided:ze,setCullFace:Be,setLineWidth:we,setPolygonOffset:nt,setScissorTest:Te,activeTexture:D,bindTexture:M,unbindTexture:U,compressedTexImage2D:G,compressedTexImage3D:X,texImage2D:ge,texImage3D:Re,updateUBOMapping:je,uniformBlockBinding:Fe,texStorage2D:De,texStorage3D:$,texSubImage2D:Y,texSubImage3D:ae,compressedTexSubImage2D:ie,compressedTexSubImage3D:le,scissor:Pe,viewport:be,reset:ot}}function ql(r,e,t,n){const i=bb(n);switch(t){case Zh:return r*e;case tu:return r*e;case nu:return r*e*2;case dc:return r*e/i.components*i.byteLength;case fc:return r*e/i.components*i.byteLength;case iu:return r*e*2/i.components*i.byteLength;case pc:return r*e*2/i.components*i.byteLength;case eu:return r*e*3/i.components*i.byteLength;case Zt:return r*e*4/i.components*i.byteLength;case mc:return r*e*4/i.components*i.byteLength;case jr:case Xr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case qr:case Yr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yo:case To:return Math.max(r,16)*Math.max(e,8)/4;case Mo:case So:return Math.max(r,8)*Math.max(e,8)/2;case Ao:case wo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Eo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Po:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Io:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Do:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case No:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ko:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Bo:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case zo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Go:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Kr:case Ho:case Vo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case su:case Wo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case jo:case Xo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bb(r){switch(r){case qn:case Jh:return{byteLength:1,components:1};case Xs:case Qh:case $s:return{byteLength:2,components:1};case hc:case uc:return{byteLength:2,components:4};case Ri:case lc:case ln:return{byteLength:4,components:1};case $h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function _b(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new me,h=new WeakMap;let d;const f=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(D,M){return u?new OffscreenCanvas(D,M):Ks("canvas")}function b(D,M,U){let G=1;const X=Te(D);if((X.width>U||X.height>U)&&(G=U/Math.max(X.width,X.height)),G<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Y=Math.floor(G*X.width),ae=Math.floor(G*X.height);d===void 0&&(d=m(Y,ae));const ie=M?m(Y,ae):d;return ie.width=Y,ie.height=ae,ie.getContext("2d").drawImage(D,0,0,Y,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+Y+"x"+ae+")."),ie}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),D;return D}function g(D){return D.generateMipmaps}function p(D){r.generateMipmap(D)}function x(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(D,M,U,G,X=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Y=M;if(M===r.RED&&(U===r.FLOAT&&(Y=r.R32F),U===r.HALF_FLOAT&&(Y=r.R16F),U===r.UNSIGNED_BYTE&&(Y=r.R8)),M===r.RED_INTEGER&&(U===r.UNSIGNED_BYTE&&(Y=r.R8UI),U===r.UNSIGNED_SHORT&&(Y=r.R16UI),U===r.UNSIGNED_INT&&(Y=r.R32UI),U===r.BYTE&&(Y=r.R8I),U===r.SHORT&&(Y=r.R16I),U===r.INT&&(Y=r.R32I)),M===r.RG&&(U===r.FLOAT&&(Y=r.RG32F),U===r.HALF_FLOAT&&(Y=r.RG16F),U===r.UNSIGNED_BYTE&&(Y=r.RG8)),M===r.RG_INTEGER&&(U===r.UNSIGNED_BYTE&&(Y=r.RG8UI),U===r.UNSIGNED_SHORT&&(Y=r.RG16UI),U===r.UNSIGNED_INT&&(Y=r.RG32UI),U===r.BYTE&&(Y=r.RG8I),U===r.SHORT&&(Y=r.RG16I),U===r.INT&&(Y=r.RG32I)),M===r.RGB_INTEGER&&(U===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),U===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),U===r.UNSIGNED_INT&&(Y=r.RGB32UI),U===r.BYTE&&(Y=r.RGB8I),U===r.SHORT&&(Y=r.RGB16I),U===r.INT&&(Y=r.RGB32I)),M===r.RGBA_INTEGER&&(U===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),U===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),U===r.UNSIGNED_INT&&(Y=r.RGBA32UI),U===r.BYTE&&(Y=r.RGBA8I),U===r.SHORT&&(Y=r.RGBA16I),U===r.INT&&(Y=r.RGBA32I)),M===r.RGB&&U===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),M===r.RGBA){const ae=X?ra:We.getTransfer(G);U===r.FLOAT&&(Y=r.RGBA32F),U===r.HALF_FLOAT&&(Y=r.RGBA16F),U===r.UNSIGNED_BYTE&&(Y=ae===tt?r.SRGB8_ALPHA8:r.RGBA8),U===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),U===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(D,M){let U;return D?M===null||M===Ri||M===rs?U=r.DEPTH24_STENCIL8:M===ln?U=r.DEPTH32F_STENCIL8:M===Xs&&(U=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ri||M===rs?U=r.DEPTH_COMPONENT24:M===ln?U=r.DEPTH_COMPONENT32F:M===Xs&&(U=r.DEPTH_COMPONENT16),U}function C(D,M){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ot&&D.minFilter!==jt?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function E(D){const M=D.target;M.removeEventListener("dispose",E),w(M),M.isVideoTexture&&h.delete(M)}function S(D){const M=D.target;M.removeEventListener("dispose",S),T(M)}function w(D){const M=n.get(D);if(M.__webglInit===void 0)return;const U=D.source,G=f.get(U);if(G){const X=G[M.__cacheKey];X.usedTimes--,X.usedTimes===0&&y(D),Object.keys(G).length===0&&f.delete(U)}n.remove(D)}function y(D){const M=n.get(D);r.deleteTexture(M.__webglTexture);const U=D.source,G=f.get(U);delete G[M.__cacheKey],a.memory.textures--}function T(D){const M=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(M.__webglFramebuffer[G]))for(let X=0;X<M.__webglFramebuffer[G].length;X++)r.deleteFramebuffer(M.__webglFramebuffer[G][X]);else r.deleteFramebuffer(M.__webglFramebuffer[G]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[G])}else{if(Array.isArray(M.__webglFramebuffer))for(let G=0;G<M.__webglFramebuffer.length;G++)r.deleteFramebuffer(M.__webglFramebuffer[G]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let G=0;G<M.__webglColorRenderbuffer.length;G++)M.__webglColorRenderbuffer[G]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[G]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const U=D.textures;for(let G=0,X=U.length;G<X;G++){const Y=n.get(U[G]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(U[G])}n.remove(D)}let A=0;function P(){A=0}function I(){const D=A;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),A+=1,D}function N(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function O(D,M){const U=n.get(D);if(D.isVideoTexture&&we(D),D.isRenderTargetTexture===!1&&D.version>0&&U.__version!==D.version){const G=D.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(U,D,M);return}}t.bindTexture(r.TEXTURE_2D,U.__webglTexture,r.TEXTURE0+M)}function H(D,M){const U=n.get(D);if(D.version>0&&U.__version!==D.version){K(U,D,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,U.__webglTexture,r.TEXTURE0+M)}function q(D,M){const U=n.get(D);if(D.version>0&&U.__version!==D.version){K(U,D,M);return}t.bindTexture(r.TEXTURE_3D,U.__webglTexture,r.TEXTURE0+M)}function V(D,M){const U=n.get(D);if(D.version>0&&U.__version!==D.version){ee(U,D,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+M)}const Z={[Ei]:r.REPEAT,[oi]:r.CLAMP_TO_EDGE,[$r]:r.MIRRORED_REPEAT},re={[Ot]:r.NEAREST,[Kh]:r.NEAREST_MIPMAP_NEAREST,[Ns]:r.NEAREST_MIPMAP_LINEAR,[jt]:r.LINEAR,[Wr]:r.LINEAR_MIPMAP_NEAREST,[Vn]:r.LINEAR_MIPMAP_LINEAR},ce={[qd]:r.NEVER,[Zd]:r.ALWAYS,[Yd]:r.LESS,[au]:r.LEQUAL,[Kd]:r.EQUAL,[$d]:r.GEQUAL,[Jd]:r.GREATER,[Qd]:r.NOTEQUAL};function Ae(D,M){if(M.type===ln&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===jt||M.magFilter===Wr||M.magFilter===Ns||M.magFilter===Vn||M.minFilter===jt||M.minFilter===Wr||M.minFilter===Ns||M.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,Z[M.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,Z[M.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,Z[M.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,re[M.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,re[M.minFilter]),M.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,ce[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ot||M.minFilter!==Ns&&M.minFilter!==Vn||M.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ve(D,M){let U=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",E));const G=M.source;let X=f.get(G);X===void 0&&(X={},f.set(G,X));const Y=N(M);if(Y!==D.__cacheKey){X[Y]===void 0&&(X[Y]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,U=!0),X[Y].usedTimes++;const ae=X[D.__cacheKey];ae!==void 0&&(X[D.__cacheKey].usedTimes--,ae.usedTimes===0&&y(M)),D.__cacheKey=Y,D.__webglTexture=X[Y].texture}return U}function K(D,M,U){let G=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(G=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(G=r.TEXTURE_3D);const X=Ve(D,M),Y=M.source;t.bindTexture(G,D.__webglTexture,r.TEXTURE0+U);const ae=n.get(Y);if(Y.version!==ae.__version||X===!0){t.activeTexture(r.TEXTURE0+U);const ie=We.getPrimaries(We.workingColorSpace),le=M.colorSpace===ai?null:We.getPrimaries(M.colorSpace),De=M.colorSpace===ai||ie===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let $=b(M.image,!1,i.maxTextureSize);$=nt(M,$);const ge=s.convert(M.format,M.colorSpace),Re=s.convert(M.type);let Pe=v(M.internalFormat,ge,Re,M.colorSpace,M.isVideoTexture);Ae(G,M);let be;const je=M.mipmaps,Fe=M.isVideoTexture!==!0,ot=ae.__version===void 0||X===!0,F=Y.dataReady,ue=C(M,$);if(M.isDepthTexture)Pe=_(M.format===as,M.type),ot&&(Fe?t.texStorage2D(r.TEXTURE_2D,1,Pe,$.width,$.height):t.texImage2D(r.TEXTURE_2D,0,Pe,$.width,$.height,0,ge,Re,null));else if(M.isDataTexture)if(je.length>0){Fe&&ot&&t.texStorage2D(r.TEXTURE_2D,ue,Pe,je[0].width,je[0].height);for(let J=0,Q=je.length;J<Q;J++)be=je[J],Fe?F&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,be.width,be.height,ge,Re,be.data):t.texImage2D(r.TEXTURE_2D,J,Pe,be.width,be.height,0,ge,Re,be.data);M.generateMipmaps=!1}else Fe?(ot&&t.texStorage2D(r.TEXTURE_2D,ue,Pe,$.width,$.height),F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,$.width,$.height,ge,Re,$.data)):t.texImage2D(r.TEXTURE_2D,0,Pe,$.width,$.height,0,ge,Re,$.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Fe&&ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,Pe,je[0].width,je[0].height,$.depth);for(let J=0,Q=je.length;J<Q;J++)if(be=je[J],M.format!==Zt)if(ge!==null)if(Fe){if(F)if(M.layerUpdates.size>0){const pe=ql(be.width,be.height,M.format,M.type);for(const de of M.layerUpdates){const Ne=be.data.subarray(de*pe/be.data.BYTES_PER_ELEMENT,(de+1)*pe/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,de,be.width,be.height,1,ge,Ne)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,be.width,be.height,$.depth,ge,be.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,J,Pe,be.width,be.height,$.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,be.width,be.height,$.depth,ge,Re,be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,J,Pe,be.width,be.height,$.depth,0,ge,Re,be.data)}else{Fe&&ot&&t.texStorage2D(r.TEXTURE_2D,ue,Pe,je[0].width,je[0].height);for(let J=0,Q=je.length;J<Q;J++)be=je[J],M.format!==Zt?ge!==null?Fe?F&&t.compressedTexSubImage2D(r.TEXTURE_2D,J,0,0,be.width,be.height,ge,be.data):t.compressedTexImage2D(r.TEXTURE_2D,J,Pe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?F&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,be.width,be.height,ge,Re,be.data):t.texImage2D(r.TEXTURE_2D,J,Pe,be.width,be.height,0,ge,Re,be.data)}else if(M.isDataArrayTexture)if(Fe){if(ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,Pe,$.width,$.height,$.depth),F)if(M.layerUpdates.size>0){const J=ql($.width,$.height,M.format,M.type);for(const Q of M.layerUpdates){const pe=$.data.subarray(Q*J/$.data.BYTES_PER_ELEMENT,(Q+1)*J/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,$.width,$.height,1,ge,Re,pe)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ge,Re,$.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,$.width,$.height,$.depth,0,ge,Re,$.data);else if(M.isData3DTexture)Fe?(ot&&t.texStorage3D(r.TEXTURE_3D,ue,Pe,$.width,$.height,$.depth),F&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ge,Re,$.data)):t.texImage3D(r.TEXTURE_3D,0,Pe,$.width,$.height,$.depth,0,ge,Re,$.data);else if(M.isFramebufferTexture){if(ot)if(Fe)t.texStorage2D(r.TEXTURE_2D,ue,Pe,$.width,$.height);else{let J=$.width,Q=$.height;for(let pe=0;pe<ue;pe++)t.texImage2D(r.TEXTURE_2D,pe,Pe,J,Q,0,ge,Re,null),J>>=1,Q>>=1}}else if(je.length>0){if(Fe&&ot){const J=Te(je[0]);t.texStorage2D(r.TEXTURE_2D,ue,Pe,J.width,J.height)}for(let J=0,Q=je.length;J<Q;J++)be=je[J],Fe?F&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,ge,Re,be):t.texImage2D(r.TEXTURE_2D,J,Pe,ge,Re,be);M.generateMipmaps=!1}else if(Fe){if(ot){const J=Te($);t.texStorage2D(r.TEXTURE_2D,ue,Pe,J.width,J.height)}F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ge,Re,$)}else t.texImage2D(r.TEXTURE_2D,0,Pe,ge,Re,$);g(M)&&p(G),ae.__version=Y.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function ee(D,M,U){if(M.image.length!==6)return;const G=Ve(D,M),X=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+U);const Y=n.get(X);if(X.version!==Y.__version||G===!0){t.activeTexture(r.TEXTURE0+U);const ae=We.getPrimaries(We.workingColorSpace),ie=M.colorSpace===ai?null:We.getPrimaries(M.colorSpace),le=M.colorSpace===ai||ae===ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,$=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let Q=0;Q<6;Q++)!De&&!$?ge[Q]=b(M.image[Q],!0,i.maxCubemapSize):ge[Q]=$?M.image[Q].image:M.image[Q],ge[Q]=nt(M,ge[Q]);const Re=ge[0],Pe=s.convert(M.format,M.colorSpace),be=s.convert(M.type),je=v(M.internalFormat,Pe,be,M.colorSpace),Fe=M.isVideoTexture!==!0,ot=Y.__version===void 0||G===!0,F=X.dataReady;let ue=C(M,Re);Ae(r.TEXTURE_CUBE_MAP,M);let J;if(De){Fe&&ot&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,je,Re.width,Re.height);for(let Q=0;Q<6;Q++){J=ge[Q].mipmaps;for(let pe=0;pe<J.length;pe++){const de=J[pe];M.format!==Zt?Pe!==null?Fe?F&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,0,0,de.width,de.height,Pe,de.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,je,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,0,0,de.width,de.height,Pe,be,de.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,je,de.width,de.height,0,Pe,be,de.data)}}}else{if(J=M.mipmaps,Fe&&ot){J.length>0&&ue++;const Q=Te(ge[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,je,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if($){Fe?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ge[Q].width,ge[Q].height,Pe,be,ge[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,je,ge[Q].width,ge[Q].height,0,Pe,be,ge[Q].data);for(let pe=0;pe<J.length;pe++){const Ne=J[pe].image[Q].image;Fe?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,0,0,Ne.width,Ne.height,Pe,be,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,je,Ne.width,Ne.height,0,Pe,be,Ne.data)}}else{Fe?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pe,be,ge[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,je,Pe,be,ge[Q]);for(let pe=0;pe<J.length;pe++){const de=J[pe];Fe?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,0,0,Pe,be,de.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,je,Pe,be,de.image[Q])}}}g(M)&&p(r.TEXTURE_CUBE_MAP),Y.__version=X.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function se(D,M,U,G,X,Y){const ae=s.convert(U.format,U.colorSpace),ie=s.convert(U.type),le=v(U.internalFormat,ae,ie,U.colorSpace),De=n.get(M),$=n.get(U);if($.__renderTarget=M,!De.__hasExternalTextures){const ge=Math.max(1,M.width>>Y),Re=Math.max(1,M.height>>Y);X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?t.texImage3D(X,Y,le,ge,Re,M.depth,0,ae,ie,null):t.texImage2D(X,Y,le,ge,Re,0,ae,ie,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),Be(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,G,X,$.__webglTexture,0,ze(M)):(X===r.TEXTURE_2D||X>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,G,X,$.__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function te(D,M,U){if(r.bindRenderbuffer(r.RENDERBUFFER,D),M.depthBuffer){const G=M.depthTexture,X=G&&G.isDepthTexture?G.type:null,Y=_(M.stencilBuffer,X),ae=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=ze(M);Be(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,Y,M.width,M.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,Y,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Y,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,D)}else{const G=M.textures;for(let X=0;X<G.length;X++){const Y=G[X],ae=s.convert(Y.format,Y.colorSpace),ie=s.convert(Y.type),le=v(Y.internalFormat,ae,ie,Y.colorSpace),De=ze(M);U&&Be(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,De,le,M.width,M.height):Be(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,De,le,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,le,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Se(D,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(M.depthTexture);G.__renderTarget=M,(!G.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),O(M.depthTexture,0);const X=G.__webglTexture,Y=ze(M);if(M.depthTexture.format===$i)Be(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,X,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,X,0);else if(M.depthTexture.format===as)Be(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,X,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function Ee(D){const M=n.get(D),U=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const G=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),G){const X=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,G.removeEventListener("dispose",X)};G.addEventListener("dispose",X),M.__depthDisposeCallback=X}M.__boundDepthTexture=G}if(D.depthTexture&&!M.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Se(M.__webglFramebuffer,D)}else if(U){M.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[G]),M.__webglDepthbuffer[G]===void 0)M.__webglDepthbuffer[G]=r.createRenderbuffer(),te(M.__webglDepthbuffer[G],D,!1);else{const X=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[G];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,X,r.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),te(M.__webglDepthbuffer,D,!1);else{const G=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,G,r.RENDERBUFFER,X)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(D,M,U){const G=n.get(D);M!==void 0&&se(G.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),U!==void 0&&Ee(D)}function at(D){const M=D.texture,U=n.get(D),G=n.get(M);D.addEventListener("dispose",S);const X=D.textures,Y=D.isWebGLCubeRenderTarget===!0,ae=X.length>1;if(ae||(G.__webglTexture===void 0&&(G.__webglTexture=r.createTexture()),G.__version=M.version,a.memory.textures++),Y){U.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer[ie]=[];for(let le=0;le<M.mipmaps.length;le++)U.__webglFramebuffer[ie][le]=r.createFramebuffer()}else U.__webglFramebuffer[ie]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer=[];for(let ie=0;ie<M.mipmaps.length;ie++)U.__webglFramebuffer[ie]=r.createFramebuffer()}else U.__webglFramebuffer=r.createFramebuffer();if(ae)for(let ie=0,le=X.length;ie<le;ie++){const De=n.get(X[ie]);De.__webglTexture===void 0&&(De.__webglTexture=r.createTexture(),a.memory.textures++)}if(D.samples>0&&Be(D)===!1){U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ie=0;ie<X.length;ie++){const le=X[ie];U.__webglColorRenderbuffer[ie]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,U.__webglColorRenderbuffer[ie]);const De=s.convert(le.format,le.colorSpace),$=s.convert(le.type),ge=v(le.internalFormat,De,$,le.colorSpace,D.isXRRenderTarget===!0),Re=ze(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,ge,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,U.__webglColorRenderbuffer[ie])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),te(U.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture),Ae(r.TEXTURE_CUBE_MAP,M);for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0)for(let le=0;le<M.mipmaps.length;le++)se(U.__webglFramebuffer[ie][le],D,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,le);else se(U.__webglFramebuffer[ie],D,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);g(M)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let ie=0,le=X.length;ie<le;ie++){const De=X[ie],$=n.get(De);t.bindTexture(r.TEXTURE_2D,$.__webglTexture),Ae(r.TEXTURE_2D,De),se(U.__webglFramebuffer,D,De,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,0),g(De)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let ie=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ie=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ie,G.__webglTexture),Ae(ie,M),M.mipmaps&&M.mipmaps.length>0)for(let le=0;le<M.mipmaps.length;le++)se(U.__webglFramebuffer[le],D,M,r.COLOR_ATTACHMENT0,ie,le);else se(U.__webglFramebuffer,D,M,r.COLOR_ATTACHMENT0,ie,0);g(M)&&p(ie),t.unbindTexture()}D.depthBuffer&&Ee(D)}function Ge(D){const M=D.textures;for(let U=0,G=M.length;U<G;U++){const X=M[U];if(g(X)){const Y=x(D),ae=n.get(X).__webglTexture;t.bindTexture(Y,ae),p(Y),t.unbindTexture()}}}const dt=[],k=[];function lt(D){if(D.samples>0){if(Be(D)===!1){const M=D.textures,U=D.width,G=D.height;let X=r.COLOR_BUFFER_BIT;const Y=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=n.get(D),ie=M.length>1;if(ie)for(let le=0;le<M.length;le++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let le=0;le<M.length;le++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(X|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(X|=r.STENCIL_BUFFER_BIT)),ie){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[le]);const De=n.get(M[le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,De,0)}r.blitFramebuffer(0,0,U,G,0,0,U,G,X,r.NEAREST),c===!0&&(dt.length=0,k.length=0,dt.push(r.COLOR_ATTACHMENT0+le),D.depthBuffer&&D.resolveDepthBuffer===!1&&(dt.push(Y),k.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,k)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ie)for(let le=0;le<M.length;le++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,ae.__webglColorRenderbuffer[le]);const De=n.get(M[le]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,De,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const M=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function ze(D){return Math.min(i.maxSamples,D.samples)}function Be(D){const M=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function we(D){const M=a.render.frame;h.get(D)!==M&&(h.set(D,M),D.update())}function nt(D,M){const U=D.colorSpace,G=D.format,X=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||U!==Bt&&U!==ai&&(We.getTransfer(U)===tt?(G!==Zt||X!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),M}function Te(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=P,this.setTexture2D=O,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=V,this.rebindTextures=Le,this.setupRenderTarget=at,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Be}function xb(r,e){function t(n,i=ai){let s;const a=We.getTransfer(i);if(n===qn)return r.UNSIGNED_BYTE;if(n===hc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===uc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===$h)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Jh)return r.BYTE;if(n===Qh)return r.SHORT;if(n===Xs)return r.UNSIGNED_SHORT;if(n===lc)return r.INT;if(n===Ri)return r.UNSIGNED_INT;if(n===ln)return r.FLOAT;if(n===$s)return r.HALF_FLOAT;if(n===Zh)return r.ALPHA;if(n===eu)return r.RGB;if(n===Zt)return r.RGBA;if(n===tu)return r.LUMINANCE;if(n===nu)return r.LUMINANCE_ALPHA;if(n===$i)return r.DEPTH_COMPONENT;if(n===as)return r.DEPTH_STENCIL;if(n===dc)return r.RED;if(n===fc)return r.RED_INTEGER;if(n===iu)return r.RG;if(n===pc)return r.RG_INTEGER;if(n===mc)return r.RGBA_INTEGER;if(n===jr||n===Xr||n===qr||n===Yr)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===jr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===jr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mo||n===yo||n===So||n===To)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Mo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===So)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===To)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ao||n===wo||n===Eo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ao||n===wo)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Eo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ro||n===Co||n===Po||n===Lo||n===Io||n===Do||n===No||n===Uo||n===ko||n===Fo||n===Oo||n===Bo||n===zo||n===Go)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ro)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Co)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Po)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Do)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===No)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ko)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zo)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Go)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kr||n===Ho||n===Vo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Kr)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ho)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===su||n===Wo||n===jo||n===Xo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Kr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Wo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class vb extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vt extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mb={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const b of e.hand.values()){const g=t.getJointPose(b,n),p=this._getHandJoint(l,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,m=.005;l.inputState.pinching&&f>u+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=u-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mb)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const yb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sb=`
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

}`;class Tb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new St,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new yn({vertexShader:yb,fragmentShader:Sb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new et(new hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ab extends fs{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,u=null,m=null;const b=new Tb,g=t.getContextAttributes();let p=null,x=null;const v=[],_=[],C=new me;let E=null;const S=new Dt;S.viewport=new Ye;const w=new Dt;w.viewport=new Ye;const y=[S,w],T=new vb;let A=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=v[K];return ee===void 0&&(ee=new Ha,v[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=v[K];return ee===void 0&&(ee=new Ha,v[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=v[K];return ee===void 0&&(ee=new Ha,v[K]=ee),ee.getHandSpace()};function I(K){const ee=_.indexOf(K.inputSource);if(ee===-1)return;const se=v[ee];se!==void 0&&(se.update(K.inputSource,K.frame,l||a),se.dispatchEvent({type:K.type,data:K.inputSource}))}function N(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",O);for(let K=0;K<v.length;K++){const ee=_[K];ee!==null&&(_[K]=null,v[K].disconnect(ee))}A=null,P=null,b.reset(),e.setRenderTarget(p),u=null,f=null,d=null,i=null,x=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",N),i.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const ee={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new Ci(u.framebufferWidth,u.framebufferHeight,{format:Zt,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ee=null,se=null,te=null;g.depth&&(te=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=g.stencil?as:$i,se=g.stencil?rs:Ri);const Se={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:s};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(Se),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Ci(f.textureWidth,f.textureHeight,{format:Zt,type:qn,depthTexture:new xu(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ve.setContext(i),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function O(K){for(let ee=0;ee<K.removed.length;ee++){const se=K.removed[ee],te=_.indexOf(se);te>=0&&(_[te]=null,v[te].disconnect(se))}for(let ee=0;ee<K.added.length;ee++){const se=K.added[ee];let te=_.indexOf(se);if(te===-1){for(let Ee=0;Ee<v.length;Ee++)if(Ee>=_.length){_.push(se),te=Ee;break}else if(_[Ee]===null){_[Ee]=se,te=Ee;break}if(te===-1)break}const Se=v[te];Se&&Se.connect(se)}}const H=new L,q=new L;function V(K,ee,se){H.setFromMatrixPosition(ee.matrixWorld),q.setFromMatrixPosition(se.matrixWorld);const te=H.distanceTo(q),Se=ee.projectionMatrix.elements,Ee=se.projectionMatrix.elements,Le=Se[14]/(Se[10]-1),at=Se[14]/(Se[10]+1),Ge=(Se[9]+1)/Se[5],dt=(Se[9]-1)/Se[5],k=(Se[8]-1)/Se[0],lt=(Ee[8]+1)/Ee[0],ze=Le*k,Be=Le*lt,we=te/(-k+lt),nt=we*-k;if(ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(nt),K.translateZ(we),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Se[10]===-1)K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Te=Le+we,D=at+we,M=ze-nt,U=Be+(te-nt),G=Ge*at/D*Te,X=dt*at/D*Te;K.projectionMatrix.makePerspective(M,U,G,X,Te,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Z(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ee=K.near,se=K.far;b.texture!==null&&(b.depthNear>0&&(ee=b.depthNear),b.depthFar>0&&(se=b.depthFar)),T.near=w.near=S.near=ee,T.far=w.far=S.far=se,(A!==T.near||P!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),A=T.near,P=T.far),S.layers.mask=K.layers.mask|2,w.layers.mask=K.layers.mask|4,T.layers.mask=S.layers.mask|w.layers.mask;const te=K.parent,Se=T.cameras;Z(T,te);for(let Ee=0;Ee<Se.length;Ee++)Z(Se[Ee],te);Se.length===2?V(T,S,w):T.projectionMatrix.copy(S.projectionMatrix),re(K,T,te)};function re(K,ee,se){se===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(se.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=os*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&u===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=K)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(T)};let ce=null;function Ae(K,ee){if(h=ee.getViewerPose(l||a),m=ee,h!==null){const se=h.views;u!==null&&(e.setRenderTargetFramebuffer(x,u.framebuffer),e.setRenderTarget(x));let te=!1;se.length!==T.cameras.length&&(T.cameras.length=0,te=!0);for(let Ee=0;Ee<se.length;Ee++){const Le=se[Ee];let at=null;if(u!==null)at=u.getViewport(Le);else{const dt=d.getViewSubImage(f,Le);at=dt.viewport,Ee===0&&(e.setRenderTargetTextures(x,dt.colorTexture,f.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(x))}let Ge=y[Ee];Ge===void 0&&(Ge=new Dt,Ge.layers.enable(Ee),Ge.viewport=new Ye,y[Ee]=Ge),Ge.matrix.fromArray(Le.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Le.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(at.x,at.y,at.width,at.height),Ee===0&&(T.matrix.copy(Ge.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),te===!0&&T.cameras.push(Ge)}const Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")){const Ee=d.getDepthInformation(se[0]);Ee&&Ee.isValid&&Ee.texture&&b.init(e,Ee,i.renderState)}}for(let se=0;se<v.length;se++){const te=_[se],Se=v[se];te!==null&&Se!==void 0&&Se.update(te,ee,l||a)}ce&&ce(K,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),m=null}const Ve=new _u;Ve.setAnimationLoop(Ae),this.setAnimationLoop=function(K){ce=K},this.dispose=function(){}}}const xi=new pn,wb=new Ce;function Eb(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,mu(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&u(g,p,_)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),b(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,x,v):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ft&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ft&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p),v=x.envMap,_=x.envMapRotation;v&&(g.envMap.value=v,xi.copy(_),xi.x*=-1,xi.y*=-1,xi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),g.envMapRotation.value.setFromMatrix4(wb.makeRotationFromEuler(xi)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ft&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Rb(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,v){const _=v.program;n.uniformBlockBinding(x,_)}function l(x,v){let _=i[x.id];_===void 0&&(m(x),_=h(x),i[x.id]=_,x.addEventListener("dispose",g));const C=v.program;n.updateUBOMapping(x,C);const E=e.render.frame;s[x.id]!==E&&(f(x),s[x.id]=E)}function h(x){const v=d();x.__bindingPointIndex=v;const _=r.createBuffer(),C=x.__size,E=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,C,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,_),_}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=i[x.id],_=x.uniforms,C=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let E=0,S=_.length;E<S;E++){const w=Array.isArray(_[E])?_[E]:[_[E]];for(let y=0,T=w.length;y<T;y++){const A=w[y];if(u(A,E,y,C)===!0){const P=A.__offset,I=Array.isArray(A.value)?A.value:[A.value];let N=0;for(let O=0;O<I.length;O++){const H=I[O],q=b(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,P+N,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):(H.toArray(A.__data,N),N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,P,A.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(x,v,_,C){const E=x.value,S=v+"_"+_;if(C[S]===void 0)return typeof E=="number"||typeof E=="boolean"?C[S]=E:C[S]=E.clone(),!0;{const w=C[S];if(typeof E=="number"||typeof E=="boolean"){if(w!==E)return C[S]=E,!0}else if(w.equals(E)===!1)return w.copy(E),!0}return!1}function m(x){const v=x.uniforms;let _=0;const C=16;for(let S=0,w=v.length;S<w;S++){const y=Array.isArray(v[S])?v[S]:[v[S]];for(let T=0,A=y.length;T<A;T++){const P=y[T],I=Array.isArray(P.value)?P.value:[P.value];for(let N=0,O=I.length;N<O;N++){const H=I[N],q=b(H),V=_%C,Z=V%q.boundary,re=V+Z;_+=Z,re!==0&&C-re<q.storage&&(_+=C-re),P.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=_,_+=q.storage}}}const E=_%C;return E>0&&(_+=C-E),x.__size=_,x.__cache={},this}function b(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}class Cb{constructor(e={}){const{canvas:t=bf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const m=new Uint32Array(4),b=new Int32Array(4);let g=null,p=null;const x=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xt,this.toneMapping=hi,this.toneMappingExposure=1;const _=this;let C=!1,E=0,S=0,w=null,y=-1,T=null;const A=new Ye,P=new Ye;let I=null;const N=new he(0);let O=0,H=t.width,q=t.height,V=1,Z=null,re=null;const ce=new Ye(0,0,H,q),Ae=new Ye(0,0,H,q);let Ve=!1;const K=new _c;let ee=!1,se=!1;const te=new Ce,Se=new Ce,Ee=new L,Le=new Ye,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function dt(){return w===null?V:1}let k=n;function lt(R,B){return t.getContext(R,B)}try{const R={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oc}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",de,!1),k===null){const B="webgl2";if(k=lt(B,R),k===null)throw lt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ze,Be,we,nt,Te,D,M,U,G,X,Y,ae,ie,le,De,$,ge,Re,Pe,be,je,Fe,ot,F;function ue(){ze=new Ng(k),ze.init(),Fe=new xb(k,ze),Be=new Rg(k,ze,e,Fe),we=new gb(k,ze),Be.reverseDepthBuffer&&f&&we.buffers.depth.setReversed(!0),nt=new Fg(k),Te=new tb,D=new _b(k,ze,we,Te,Be,Fe,nt),M=new Pg(_),U=new Dg(_),G=new Wf(k),ot=new wg(k,G),X=new Ug(k,G,nt,ot),Y=new Bg(k,X,G,nt),Pe=new Og(k,Be,D),$=new Cg(Te),ae=new eb(_,M,U,ze,Be,ot,$),ie=new Eb(_,Te),le=new ib,De=new lb(ze),Re=new Ag(_,M,U,we,Y,u,c),ge=new pb(_,Y,Be),F=new Rb(k,nt,Be,we),be=new Eg(k,ze,nt),je=new kg(k,ze,nt),nt.programs=ae.programs,_.capabilities=Be,_.extensions=ze,_.properties=Te,_.renderLists=le,_.shadowMap=ge,_.state=we,_.info=nt}ue();const J=new Ab(_,k);this.xr=J,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=ze.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ze.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(H,q,!1))},this.getSize=function(R){return R.set(H,q)},this.setSize=function(R,B,W=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,q=B,t.width=Math.floor(R*V),t.height=Math.floor(B*V),W===!0&&(t.style.width=R+"px",t.style.height=B+"px"),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(H*V,q*V).floor()},this.setDrawingBufferSize=function(R,B,W){H=R,q=B,V=W,t.width=Math.floor(R*W),t.height=Math.floor(B*W),this.setViewport(0,0,R,B)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(ce)},this.setViewport=function(R,B,W,j){R.isVector4?ce.set(R.x,R.y,R.z,R.w):ce.set(R,B,W,j),we.viewport(A.copy(ce).multiplyScalar(V).round())},this.getScissor=function(R){return R.copy(Ae)},this.setScissor=function(R,B,W,j){R.isVector4?Ae.set(R.x,R.y,R.z,R.w):Ae.set(R,B,W,j),we.scissor(P.copy(Ae).multiplyScalar(V).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(R){we.setScissorTest(Ve=R)},this.setOpaqueSort=function(R){Z=R},this.setTransparentSort=function(R){re=R},this.getClearColor=function(R){return R.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(R=!0,B=!0,W=!0){let j=0;if(R){let z=!1;if(w!==null){const ne=w.texture.format;z=ne===mc||ne===pc||ne===fc}if(z){const ne=w.texture.type,fe=ne===qn||ne===Ri||ne===Xs||ne===rs||ne===hc||ne===uc,xe=Re.getClearColor(),ve=Re.getClearAlpha(),Ie=xe.r,Ue=xe.g,Me=xe.b;fe?(m[0]=Ie,m[1]=Ue,m[2]=Me,m[3]=ve,k.clearBufferuiv(k.COLOR,0,m)):(b[0]=Ie,b[1]=Ue,b[2]=Me,b[3]=ve,k.clearBufferiv(k.COLOR,0,b))}else j|=k.COLOR_BUFFER_BIT}B&&(j|=k.DEPTH_BUFFER_BIT),W&&(j|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),le.dispose(),De.dispose(),Te.dispose(),M.dispose(),U.dispose(),Y.dispose(),ot.dispose(),F.dispose(),ae.dispose(),J.dispose(),J.removeEventListener("sessionstart",Oc),J.removeEventListener("sessionend",Bc),fi.stop()};function Q(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const R=nt.autoReset,B=ge.enabled,W=ge.autoUpdate,j=ge.needsUpdate,z=ge.type;ue(),nt.autoReset=R,ge.enabled=B,ge.autoUpdate=W,ge.needsUpdate=j,ge.type=z}function de(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ne(R){const B=R.target;B.removeEventListener("dispose",Ne),pt(B)}function pt(R){Pt(R),Te.remove(R)}function Pt(R){const B=Te.get(R).programs;B!==void 0&&(B.forEach(function(W){ae.releaseProgram(W)}),R.isShaderMaterial&&ae.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,W,j,z,ne){B===null&&(B=at);const fe=z.isMesh&&z.matrixWorld.determinant()<0,xe=od(R,B,W,j,z);we.setMaterial(j,fe);let ve=W.index,Ie=1;if(j.wireframe===!0){if(ve=X.getWireframeAttribute(W),ve===void 0)return;Ie=2}const Ue=W.drawRange,Me=W.attributes.position;let Xe=Ue.start*Ie,ct=(Ue.start+Ue.count)*Ie;ne!==null&&(Xe=Math.max(Xe,ne.start*Ie),ct=Math.min(ct,(ne.start+ne.count)*Ie)),ve!==null?(Xe=Math.max(Xe,0),ct=Math.min(ct,ve.count)):Me!=null&&(Xe=Math.max(Xe,0),ct=Math.min(ct,Me.count));const ht=ct-Xe;if(ht<0||ht===1/0)return;ot.setup(z,j,xe,W,ve);let zt,Ke=be;if(ve!==null&&(zt=G.get(ve),Ke=je,Ke.setIndex(zt)),z.isMesh)j.wireframe===!0?(we.setLineWidth(j.wireframeLinewidth*dt()),Ke.setMode(k.LINES)):Ke.setMode(k.TRIANGLES);else if(z.isLine){let ye=j.linewidth;ye===void 0&&(ye=1),we.setLineWidth(ye*dt()),z.isLineSegments?Ke.setMode(k.LINES):z.isLineLoop?Ke.setMode(k.LINE_LOOP):Ke.setMode(k.LINE_STRIP)}else z.isPoints?Ke.setMode(k.POINTS):z.isSprite&&Ke.setMode(k.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Ke.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))Ke.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const ye=z._multiDrawStarts,Rn=z._multiDrawCounts,Je=z._multiDrawCount,tn=ve?G.get(ve).bytesPerElement:1,Pi=Te.get(j).currentProgram.getUniforms();for(let Gt=0;Gt<Je;Gt++)Pi.setValue(k,"_gl_DrawID",Gt),Ke.render(ye[Gt]/tn,Rn[Gt])}else if(z.isInstancedMesh)Ke.renderInstances(Xe,ht,z.count);else if(W.isInstancedBufferGeometry){const ye=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Rn=Math.min(W.instanceCount,ye);Ke.renderInstances(Xe,ht,Rn)}else Ke.render(Xe,ht)};function Qe(R,B,W){R.transparent===!0&&R.side===Wt&&R.forceSinglePass===!1?(R.side=Ft,R.needsUpdate=!0,ir(R,B,W),R.side=Xn,R.needsUpdate=!0,ir(R,B,W),R.side=Wt):ir(R,B,W)}this.compile=function(R,B,W=null){W===null&&(W=R),p=De.get(W),p.init(B),v.push(p),W.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),R!==W&&R.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const j=new Set;return R.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ne=z.material;if(ne)if(Array.isArray(ne))for(let fe=0;fe<ne.length;fe++){const xe=ne[fe];Qe(xe,W,z),j.add(xe)}else Qe(ne,W,z),j.add(ne)}),v.pop(),p=null,j},this.compileAsync=function(R,B,W=null){const j=this.compile(R,B,W);return new Promise(z=>{function ne(){if(j.forEach(function(fe){Te.get(fe).currentProgram.isReady()&&j.delete(fe)}),j.size===0){z(R);return}setTimeout(ne,10)}ze.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let en=null;function En(R){en&&en(R)}function Oc(){fi.stop()}function Bc(){fi.start()}const fi=new _u;fi.setAnimationLoop(En),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(R){en=R,J.setAnimationLoop(R),R===null?fi.stop():fi.start()},J.addEventListener("sessionstart",Oc),J.addEventListener("sessionend",Bc),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(B),B=J.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,B,w),p=De.get(R,v.length),p.init(B),v.push(p),Se.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),K.setFromProjectionMatrix(Se),se=this.localClippingEnabled,ee=$.init(this.clippingPlanes,se),g=le.get(R,x.length),g.init(),x.push(g),J.enabled===!0&&J.isPresenting===!0){const ne=_.xr.getDepthSensingMesh();ne!==null&&pa(ne,B,-1/0,_.sortObjects)}pa(R,B,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(Z,re),Ge=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Ge&&Re.addToRenderList(g,R),this.info.render.frame++,ee===!0&&$.beginShadows();const W=p.state.shadowsArray;ge.render(W,R,B),ee===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=g.opaque,z=g.transmissive;if(p.setupLights(),B.isArrayCamera){const ne=B.cameras;if(z.length>0)for(let fe=0,xe=ne.length;fe<xe;fe++){const ve=ne[fe];Gc(j,z,R,ve)}Ge&&Re.render(R);for(let fe=0,xe=ne.length;fe<xe;fe++){const ve=ne[fe];zc(g,R,ve,ve.viewport)}}else z.length>0&&Gc(j,z,R,B),Ge&&Re.render(R),zc(g,R,B);w!==null&&(D.updateMultisampleRenderTarget(w),D.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(_,R,B),ot.resetDefaultState(),y=-1,T=null,v.pop(),v.length>0?(p=v[v.length-1],ee===!0&&$.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function pa(R,B,W,j){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)W=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){j&&Le.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Se);const fe=Y.update(R),xe=R.material;xe.visible&&g.push(R,fe,xe,W,Le.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||K.intersectsObject(R))){const fe=Y.update(R),xe=R.material;if(j&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Le.copy(R.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Le.copy(fe.boundingSphere.center)),Le.applyMatrix4(R.matrixWorld).applyMatrix4(Se)),Array.isArray(xe)){const ve=fe.groups;for(let Ie=0,Ue=ve.length;Ie<Ue;Ie++){const Me=ve[Ie],Xe=xe[Me.materialIndex];Xe&&Xe.visible&&g.push(R,fe,Xe,W,Le.z,Me)}}else xe.visible&&g.push(R,fe,xe,W,Le.z,null)}}const ne=R.children;for(let fe=0,xe=ne.length;fe<xe;fe++)pa(ne[fe],B,W,j)}function zc(R,B,W,j){const z=R.opaque,ne=R.transmissive,fe=R.transparent;p.setupLightsView(W),ee===!0&&$.setGlobalState(_.clippingPlanes,W),j&&we.viewport(A.copy(j)),z.length>0&&nr(z,B,W),ne.length>0&&nr(ne,B,W),fe.length>0&&nr(fe,B,W),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Gc(R,B,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Ci(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?$s:qn,minFilter:Vn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const ne=p.state.transmissionRenderTarget[j.id],fe=j.viewport||A;ne.setSize(fe.z,fe.w);const xe=_.getRenderTarget();_.setRenderTarget(ne),_.getClearColor(N),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),_.clear(),Ge&&Re.render(W);const ve=_.toneMapping;_.toneMapping=hi;const Ie=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),ee===!0&&$.setGlobalState(_.clippingPlanes,j),nr(R,W,j),D.updateMultisampleRenderTarget(ne),D.updateRenderTargetMipmap(ne),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Me=0,Xe=B.length;Me<Xe;Me++){const ct=B[Me],ht=ct.object,zt=ct.geometry,Ke=ct.material,ye=ct.group;if(Ke.side===Wt&&ht.layers.test(j.layers)){const Rn=Ke.side;Ke.side=Ft,Ke.needsUpdate=!0,Hc(ht,W,j,zt,Ke,ye),Ke.side=Rn,Ke.needsUpdate=!0,Ue=!0}}Ue===!0&&(D.updateMultisampleRenderTarget(ne),D.updateRenderTargetMipmap(ne))}_.setRenderTarget(xe),_.setClearColor(N,O),Ie!==void 0&&(j.viewport=Ie),_.toneMapping=ve}function nr(R,B,W){const j=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ne=R.length;z<ne;z++){const fe=R[z],xe=fe.object,ve=fe.geometry,Ie=j===null?fe.material:j,Ue=fe.group;xe.layers.test(W.layers)&&Hc(xe,B,W,ve,Ie,Ue)}}function Hc(R,B,W,j,z,ne){R.onBeforeRender(_,B,W,j,z,ne),R.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),z.onBeforeRender(_,B,W,j,R,ne),z.transparent===!0&&z.side===Wt&&z.forceSinglePass===!1?(z.side=Ft,z.needsUpdate=!0,_.renderBufferDirect(W,B,j,z,R,ne),z.side=Xn,z.needsUpdate=!0,_.renderBufferDirect(W,B,j,z,R,ne),z.side=Wt):_.renderBufferDirect(W,B,j,z,R,ne),R.onAfterRender(_,B,W,j,z,ne)}function ir(R,B,W){B.isScene!==!0&&(B=at);const j=Te.get(R),z=p.state.lights,ne=p.state.shadowsArray,fe=z.state.version,xe=ae.getParameters(R,z.state,ne,B,W),ve=ae.getProgramCacheKey(xe);let Ie=j.programs;j.environment=R.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(R.isMeshStandardMaterial?U:M).get(R.envMap||j.environment),j.envMapRotation=j.environment!==null&&R.envMap===null?B.environmentRotation:R.envMapRotation,Ie===void 0&&(R.addEventListener("dispose",Ne),Ie=new Map,j.programs=Ie);let Ue=Ie.get(ve);if(Ue!==void 0){if(j.currentProgram===Ue&&j.lightsStateVersion===fe)return Wc(R,xe),Ue}else xe.uniforms=ae.getUniforms(R),R.onBeforeCompile(xe,_),Ue=ae.acquireProgram(xe,ve),Ie.set(ve,Ue),j.uniforms=xe.uniforms;const Me=j.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Me.clippingPlanes=$.uniform),Wc(R,xe),j.needsLights=ld(R),j.lightsStateVersion=fe,j.needsLights&&(Me.ambientLightColor.value=z.state.ambient,Me.lightProbe.value=z.state.probe,Me.directionalLights.value=z.state.directional,Me.directionalLightShadows.value=z.state.directionalShadow,Me.spotLights.value=z.state.spot,Me.spotLightShadows.value=z.state.spotShadow,Me.rectAreaLights.value=z.state.rectArea,Me.ltc_1.value=z.state.rectAreaLTC1,Me.ltc_2.value=z.state.rectAreaLTC2,Me.pointLights.value=z.state.point,Me.pointLightShadows.value=z.state.pointShadow,Me.hemisphereLights.value=z.state.hemi,Me.directionalShadowMap.value=z.state.directionalShadowMap,Me.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Me.spotShadowMap.value=z.state.spotShadowMap,Me.spotLightMatrix.value=z.state.spotLightMatrix,Me.spotLightMap.value=z.state.spotLightMap,Me.pointShadowMap.value=z.state.pointShadowMap,Me.pointShadowMatrix.value=z.state.pointShadowMatrix),j.currentProgram=Ue,j.uniformsList=null,Ue}function Vc(R){if(R.uniformsList===null){const B=R.currentProgram.getUniforms();R.uniformsList=Jr.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function Wc(R,B){const W=Te.get(R);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function od(R,B,W,j,z){B.isScene!==!0&&(B=at),D.resetTextureUnits();const ne=B.fog,fe=j.isMeshStandardMaterial?B.environment:null,xe=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Bt,ve=(j.isMeshStandardMaterial?U:M).get(j.envMap||fe),Ie=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ue=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Me=!!W.morphAttributes.position,Xe=!!W.morphAttributes.normal,ct=!!W.morphAttributes.color;let ht=hi;j.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ht=_.toneMapping);const zt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ke=zt!==void 0?zt.length:0,ye=Te.get(j),Rn=p.state.lights;if(ee===!0&&(se===!0||R!==T)){const qt=R===T&&j.id===y;$.setState(j,R,qt)}let Je=!1;j.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Rn.state.version||ye.outputColorSpace!==xe||z.isBatchedMesh&&ye.batching===!1||!z.isBatchedMesh&&ye.batching===!0||z.isBatchedMesh&&ye.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&ye.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&ye.instancing===!1||!z.isInstancedMesh&&ye.instancing===!0||z.isSkinnedMesh&&ye.skinning===!1||!z.isSkinnedMesh&&ye.skinning===!0||z.isInstancedMesh&&ye.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ye.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ye.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ye.instancingMorph===!1&&z.morphTexture!==null||ye.envMap!==ve||j.fog===!0&&ye.fog!==ne||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==$.numPlanes||ye.numIntersection!==$.numIntersection)||ye.vertexAlphas!==Ie||ye.vertexTangents!==Ue||ye.morphTargets!==Me||ye.morphNormals!==Xe||ye.morphColors!==ct||ye.toneMapping!==ht||ye.morphTargetsCount!==Ke)&&(Je=!0):(Je=!0,ye.__version=j.version);let tn=ye.currentProgram;Je===!0&&(tn=ir(j,B,z));let Pi=!1,Gt=!1,_s=!1;const ut=tn.getUniforms(),mn=ye.uniforms;if(we.useProgram(tn.program)&&(Pi=!0,Gt=!0,_s=!0),j.id!==y&&(y=j.id,Gt=!0),Pi||T!==R){we.buffers.depth.getReversed()?(te.copy(R.projectionMatrix),xf(te),vf(te),ut.setValue(k,"projectionMatrix",te)):ut.setValue(k,"projectionMatrix",R.projectionMatrix),ut.setValue(k,"viewMatrix",R.matrixWorldInverse);const Kn=ut.map.cameraPosition;Kn!==void 0&&Kn.setValue(k,Ee.setFromMatrixPosition(R.matrixWorld)),Be.logarithmicDepthBuffer&&ut.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ut.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),T!==R&&(T=R,Gt=!0,_s=!0)}if(z.isSkinnedMesh){ut.setOptional(k,z,"bindMatrix"),ut.setOptional(k,z,"bindMatrixInverse");const qt=z.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),ut.setValue(k,"boneTexture",qt.boneTexture,D))}z.isBatchedMesh&&(ut.setOptional(k,z,"batchingTexture"),ut.setValue(k,"batchingTexture",z._matricesTexture,D),ut.setOptional(k,z,"batchingIdTexture"),ut.setValue(k,"batchingIdTexture",z._indirectTexture,D),ut.setOptional(k,z,"batchingColorTexture"),z._colorsTexture!==null&&ut.setValue(k,"batchingColorTexture",z._colorsTexture,D));const xs=W.morphAttributes;if((xs.position!==void 0||xs.normal!==void 0||xs.color!==void 0)&&Pe.update(z,W,tn),(Gt||ye.receiveShadow!==z.receiveShadow)&&(ye.receiveShadow=z.receiveShadow,ut.setValue(k,"receiveShadow",z.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(mn.envMap.value=ve,mn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&B.environment!==null&&(mn.envMapIntensity.value=B.environmentIntensity),Gt&&(ut.setValue(k,"toneMappingExposure",_.toneMappingExposure),ye.needsLights&&cd(mn,_s),ne&&j.fog===!0&&ie.refreshFogUniforms(mn,ne),ie.refreshMaterialUniforms(mn,j,V,q,p.state.transmissionRenderTarget[R.id]),Jr.upload(k,Vc(ye),mn,D)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Jr.upload(k,Vc(ye),mn,D),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ut.setValue(k,"center",z.center),ut.setValue(k,"modelViewMatrix",z.modelViewMatrix),ut.setValue(k,"normalMatrix",z.normalMatrix),ut.setValue(k,"modelMatrix",z.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const qt=j.uniformsGroups;for(let Kn=0,Jn=qt.length;Kn<Jn;Kn++){const jc=qt[Kn];F.update(jc,tn),F.bind(jc,tn)}}return tn}function cd(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function ld(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,B,W){Te.get(R.texture).__webglTexture=B,Te.get(R.depthTexture).__webglTexture=W;const j=Te.get(R);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=W===void 0,j.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,B){const W=Te.get(R);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(R,B=0,W=0){w=R,E=B,S=W;let j=!0,z=null,ne=!1,fe=!1;if(R){const ve=Te.get(R);if(ve.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(k.FRAMEBUFFER,null),j=!1;else if(ve.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(ve.__hasExternalTextures)D.rebindTextures(R,Te.get(R.texture).__webglTexture,Te.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Me=R.depthTexture;if(ve.__boundDepthTexture!==Me){if(Me!==null&&Te.has(Me)&&(R.width!==Me.image.width||R.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const Ie=R.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(fe=!0);const Ue=Te.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ue[B])?z=Ue[B][W]:z=Ue[B],ne=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?z=Te.get(R).__webglMultisampledFramebuffer:Array.isArray(Ue)?z=Ue[W]:z=Ue,A.copy(R.viewport),P.copy(R.scissor),I=R.scissorTest}else A.copy(ce).multiplyScalar(V).floor(),P.copy(Ae).multiplyScalar(V).floor(),I=Ve;if(we.bindFramebuffer(k.FRAMEBUFFER,z)&&j&&we.drawBuffers(R,z),we.viewport(A),we.scissor(P),we.setScissorTest(I),ne){const ve=Te.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,ve.__webglTexture,W)}else if(fe){const ve=Te.get(R.texture),Ie=B||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,ve.__webglTexture,W||0,Ie)}y=-1},this.readRenderTargetPixels=function(R,B,W,j,z,ne,fe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Te.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){we.bindFramebuffer(k.FRAMEBUFFER,xe);try{const ve=R.texture,Ie=ve.format,Ue=ve.type;if(!Be.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-j&&W>=0&&W<=R.height-z&&k.readPixels(B,W,j,z,Fe.convert(Ie),Fe.convert(Ue),ne)}finally{const ve=w!==null?Te.get(w).__webglFramebuffer:null;we.bindFramebuffer(k.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(R,B,W,j,z,ne,fe){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Te.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){const ve=R.texture,Ie=ve.format,Ue=ve.type;if(!Be.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=R.width-j&&W>=0&&W<=R.height-z){we.bindFramebuffer(k.FRAMEBUFFER,xe);const Me=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Me),k.bufferData(k.PIXEL_PACK_BUFFER,ne.byteLength,k.STREAM_READ),k.readPixels(B,W,j,z,Fe.convert(Ie),Fe.convert(Ue),0);const Xe=w!==null?Te.get(w).__webglFramebuffer:null;we.bindFramebuffer(k.FRAMEBUFFER,Xe);const ct=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await _f(k,ct,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Me),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ne),k.deleteBuffer(Me),k.deleteSync(ct),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,B=null,W=0){R.isTexture!==!0&&(Us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,R=arguments[1]);const j=Math.pow(2,-W),z=Math.floor(R.image.width*j),ne=Math.floor(R.image.height*j),fe=B!==null?B.x:0,xe=B!==null?B.y:0;D.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,W,0,0,fe,xe,z,ne),we.unbindTexture()},this.copyTextureToTexture=function(R,B,W=null,j=null,z=0){R.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,R=arguments[1],B=arguments[2],z=arguments[3]||0,W=null);let ne,fe,xe,ve,Ie,Ue,Me,Xe,ct;const ht=R.isCompressedTexture?R.mipmaps[z]:R.image;W!==null?(ne=W.max.x-W.min.x,fe=W.max.y-W.min.y,xe=W.isBox3?W.max.z-W.min.z:1,ve=W.min.x,Ie=W.min.y,Ue=W.isBox3?W.min.z:0):(ne=ht.width,fe=ht.height,xe=ht.depth||1,ve=0,Ie=0,Ue=0),j!==null?(Me=j.x,Xe=j.y,ct=j.z):(Me=0,Xe=0,ct=0);const zt=Fe.convert(B.format),Ke=Fe.convert(B.type);let ye;B.isData3DTexture?(D.setTexture3D(B,0),ye=k.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(D.setTexture2DArray(B,0),ye=k.TEXTURE_2D_ARRAY):(D.setTexture2D(B,0),ye=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);const Rn=k.getParameter(k.UNPACK_ROW_LENGTH),Je=k.getParameter(k.UNPACK_IMAGE_HEIGHT),tn=k.getParameter(k.UNPACK_SKIP_PIXELS),Pi=k.getParameter(k.UNPACK_SKIP_ROWS),Gt=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,ht.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ht.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ve),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ie),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ue);const _s=R.isDataArrayTexture||R.isData3DTexture,ut=B.isDataArrayTexture||B.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const mn=Te.get(R),xs=Te.get(B),qt=Te.get(mn.__renderTarget),Kn=Te.get(xs.__renderTarget);we.bindFramebuffer(k.READ_FRAMEBUFFER,qt.__webglFramebuffer),we.bindFramebuffer(k.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Jn=0;Jn<xe;Jn++)_s&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Te.get(R).__webglTexture,z,Ue+Jn),R.isDepthTexture?(ut&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Te.get(B).__webglTexture,z,ct+Jn),k.blitFramebuffer(ve,Ie,ne,fe,Me,Xe,ne,fe,k.DEPTH_BUFFER_BIT,k.NEAREST)):ut?k.copyTexSubImage3D(ye,z,Me,Xe,ct+Jn,ve,Ie,ne,fe):k.copyTexSubImage2D(ye,z,Me,Xe,ct+Jn,ve,Ie,ne,fe);we.bindFramebuffer(k.READ_FRAMEBUFFER,null),we.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ut?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(ye,z,Me,Xe,ct,ne,fe,xe,zt,Ke,ht.data):B.isCompressedArrayTexture?k.compressedTexSubImage3D(ye,z,Me,Xe,ct,ne,fe,xe,zt,ht.data):k.texSubImage3D(ye,z,Me,Xe,ct,ne,fe,xe,zt,Ke,ht):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,z,Me,Xe,ne,fe,zt,Ke,ht.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,z,Me,Xe,ht.width,ht.height,zt,ht.data):k.texSubImage2D(k.TEXTURE_2D,z,Me,Xe,ne,fe,zt,Ke,ht);k.pixelStorei(k.UNPACK_ROW_LENGTH,Rn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Je),k.pixelStorei(k.UNPACK_SKIP_PIXELS,tn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Pi),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Gt),z===0&&B.generateMipmaps&&k.generateMipmap(ye),we.unbindTexture()},this.copyTextureToTexture3D=function(R,B,W=null,j=null,z=0){return R.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,j=arguments[1]||null,R=arguments[2],B=arguments[3],z=arguments[4]||0),Us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,B,W,j,z)},this.initRenderTarget=function(R){Te.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),we.unbindTexture()},this.resetState=function(){E=0,S=0,w=null,we.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}class ca{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new he(e),this.near=t,this.far=n}clone(){return new ca(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Tu extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Pb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yo,this.updateRanges=[],this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nt=new L;class Mc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=on(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=on(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=on(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=on(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=on(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array),s=$e(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new st(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Yl=new L,Kl=new Ye,Jl=new Ye,Lb=new L,Ql=new Ce,Tr=new L,Va=new Sn,$l=new Ce,Wa=new aa;class Ib extends et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jc,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Tr),this.boundingBox.expandByPoint(Tr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Sn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Tr),this.boundingSphere.expandByPoint(Tr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Va.copy(this.boundingSphere),Va.applyMatrix4(i),e.ray.intersectsSphere(Va)!==!1&&($l.copy(i).invert(),Wa.copy(e.ray).applyMatrix4($l),!(this.boundingBox!==null&&Wa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ye,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Jc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Gd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Kl.fromBufferAttribute(i.attributes.skinIndex,e),Jl.fromBufferAttribute(i.attributes.skinWeight,e),Yl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Jl.getComponent(s);if(a!==0){const o=Kl.getComponent(s);Ql.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Lb.copy(Yl).applyMatrix4(Ql),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Au extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wu extends St{constructor(e=null,t=1,n=1,i,s,a,o,c,l=Ot,h=Ot,d,f){super(null,a,o,c,l,h,i,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zl=new Ce,Db=new Ce;class yc{constructor(e=[],t=[]){this.uuid=dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Db;Zl.multiplyMatrices(o,t[s]),Zl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new yc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new wu(t,e,e,Zt,ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Au),this.bones.push(a),this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Jo extends st{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ji=new Ce,eh=new Ce,Ar=[],th=new Yn,Nb=new Ce,Ts=new et,As=new Sn;class Jt extends et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Nb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),th.copy(e.boundingBox).applyMatrix4(ji),this.boundingBox.union(th)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),As.copy(e.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(As)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ts.geometry=this.geometry,Ts.material=this.material,Ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(n),e.ray.intersectsSphere(As)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ji),eh.multiplyMatrices(n,ji),Ts.matrixWorld=eh,Ts.raycast(e,Ar);for(let a=0,o=Ar.length;a<o;a++){const c=Ar[a];c.instanceId=s,c.object=this,t.push(c)}Ar.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new wu(new Float32Array(i*this.count),i,this.count,dc,ln));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Eu extends fn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ea=new L,ta=new L,nh=new Ce,ws=new aa,wr=new Sn,ja=new L,ih=new L;class Sc extends ft{constructor(e=new bt,t=new Eu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ea.fromBufferAttribute(t,i-1),ta.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ea.distanceTo(ta);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(i),wr.radius+=s,e.ray.intersectsSphere(wr)===!1)return;nh.copy(i).invert(),ws.copy(e.ray).applyMatrix4(nh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let b=u,g=m-1;b<g;b+=l){const p=h.getX(b),x=h.getX(b+1),v=Er(this,e,ws,c,p,x);v&&t.push(v)}if(this.isLineLoop){const b=h.getX(m-1),g=h.getX(u),p=Er(this,e,ws,c,b,g);p&&t.push(p)}}else{const u=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let b=u,g=m-1;b<g;b+=l){const p=Er(this,e,ws,c,b,b+1);p&&t.push(p)}if(this.isLineLoop){const b=Er(this,e,ws,c,m-1,u);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Er(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(ea.fromBufferAttribute(a,i),ta.fromBufferAttribute(a,s),t.distanceSqToSegment(ea,ta,ja,ih)>n)return;ja.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(ja);if(!(c<e.near||c>e.far))return{distance:c,point:ih.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const sh=new L,rh=new L;class Ub extends Sc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)sh.fromBufferAttribute(t,i),rh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+sh.distanceTo(rh);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kb extends Sc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Tc extends fn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ah=new Ce,Qo=new aa,Rr=new Sn,Cr=new L;class Ac extends ft{constructor(e=new bt,t=new Tc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(i),Rr.radius+=s,e.ray.intersectsSphere(Rr)===!1)return;ah.copy(i).invert(),Qo.copy(e.ray).applyMatrix4(ah);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let m=f,b=u;m<b;m++){const g=l.getX(m);Cr.fromBufferAttribute(d,g),oh(Cr,g,c,i,e,t,this)}}else{const f=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let m=f,b=u;m<b;m++)Cr.fromBufferAttribute(d,m),oh(Cr,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function oh(r,e,t,n,i,s,a){const o=Qo.distanceSqToPoint(r);if(o<t){const c=new L;Qo.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class la extends St{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);const h=n[i],f=n[i+1]-h,u=(a-h)/f;return(i+u)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new me:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,i=[],s=[],a=[],o=new L,c=new Ce;for(let u=0;u<=e;u++){const m=u/e;i[u]=this.getTangentAt(m,new L)}s[0]=new L,a[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let u=1;u<=e;u++){if(s[u]=s[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(i[u-1],i[u]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(yt(i[u-1].dot(i[u]),-1,1));s[u].applyMatrix4(c.makeRotationAxis(o,m))}a[u].crossVectors(i[u],s[u])}if(t===!0){let u=Math.acos(yt(s[0].dot(s[e]),-1,1));u/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(u=-u);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(i[m],u*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class wc extends Tn{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new me){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,u=l-this.aY;c=f*h-u*d+this.aX,l=f*d+u*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Fb extends wc{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ec(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,d){let f=(a-s)/l-(o-s)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+d)+(c-o)/d;f*=h,u*=h,i(a,o,f,u)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Pr=new L,Xa=new Ec,qa=new Ec,Ya=new Ec;class Ob extends Tn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(Pr.subVectors(i[0],i[1]).add(i[0]),l=Pr);const d=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Pr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Pr),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(d),u),b=Math.pow(d.distanceToSquared(f),u),g=Math.pow(f.distanceToSquared(h),u);b<1e-4&&(b=1),m<1e-4&&(m=b),g<1e-4&&(g=b),Xa.initNonuniformCatmullRom(l.x,d.x,f.x,h.x,m,b,g),qa.initNonuniformCatmullRom(l.y,d.y,f.y,h.y,m,b,g),Ya.initNonuniformCatmullRom(l.z,d.z,f.z,h.z,m,b,g)}else this.curveType==="catmullrom"&&(Xa.initCatmullRom(l.x,d.x,f.x,h.x,this.tension),qa.initCatmullRom(l.y,d.y,f.y,h.y,this.tension),Ya.initCatmullRom(l.z,d.z,f.z,h.z,this.tension));return n.set(Xa.calc(c),qa.calc(c),Ya.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ch(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,c=r*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*r+t}function Bb(r,e){const t=1-r;return t*t*e}function zb(r,e){return 2*(1-r)*r*e}function Gb(r,e){return r*r*e}function Gs(r,e,t,n){return Bb(r,e)+zb(r,t)+Gb(r,n)}function Hb(r,e){const t=1-r;return t*t*t*e}function Vb(r,e){const t=1-r;return 3*t*t*r*e}function Wb(r,e){return 3*(1-r)*r*r*e}function jb(r,e){return r*r*r*e}function Hs(r,e,t,n,i){return Hb(r,e)+Vb(r,t)+Wb(r,n)+jb(r,i)}class Ru extends Tn{constructor(e=new me,t=new me,n=new me,i=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new me){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Hs(e,i.x,s.x,a.x,o.x),Hs(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xb extends Tn{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Hs(e,i.x,s.x,a.x,o.x),Hs(e,i.y,s.y,a.y,o.y),Hs(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cu extends Tn{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qb extends Tn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pu extends Tn{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Gs(e,i.x,s.x,a.x),Gs(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yb extends Tn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Gs(e,i.x,s.x,a.x),Gs(e,i.y,s.y,a.y),Gs(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lu extends Tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(ch(o,c.x,l.x,h.x,d.x),ch(o,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new me().fromArray(i))}return this}}var lh=Object.freeze({__proto__:null,ArcCurve:Fb,CatmullRomCurve3:Ob,CubicBezierCurve:Ru,CubicBezierCurve3:Xb,EllipseCurve:wc,LineCurve:Cu,LineCurve3:qb,QuadraticBezierCurve:Pu,QuadraticBezierCurve3:Yb,SplineCurve:Lu});class Kb extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new lh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new lh[i.type]().fromJSON(i))}return this}}class Jb extends Kb{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Cu(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Pu(this.currentPoint.clone(),new me(e,t),new me(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new Ru(this.currentPoint.clone(),new me(e,t),new me(n,i),new me(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Lu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){const l=new wc(e,t,n,i,s,a,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ha extends bt{constructor(e=[new me(0,-.5),new me(.5,0),new me(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=yt(i,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],h=1/t,d=new L,f=new me,u=new L,m=new L,b=new L;let g=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,u.x=p*1,u.y=-g,u.z=p*0,b.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case e.length-1:c.push(b.x,b.y,b.z);break;default:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,u.x=p*1,u.y=-g,u.z=p*0,m.copy(u),u.x+=b.x,u.y+=b.y,u.z+=b.z,u.normalize(),c.push(u.x,u.y,u.z),b.copy(m)}for(let x=0;x<=t;x++){const v=n+x*h*i,_=Math.sin(v),C=Math.cos(v);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*_,d.y=e[E].y,d.z=e[E].x*C,a.push(d.x,d.y,d.z),f.x=x/t,f.y=E/(e.length-1),o.push(f.x,f.y);const S=c[3*E+0]*_,w=c[3*E+1],y=c[3*E+0]*C;l.push(S,w,y)}}for(let x=0;x<t;x++)for(let v=0;v<e.length-1;v++){const _=v+x*e.length,C=_,E=_+e.length,S=_+e.length+1,w=_+1;s.push(C,E,w),s.push(S,w,E)}this.setIndex(s),this.setAttribute("position",new rt(a,3)),this.setAttribute("uv",new rt(o,2)),this.setAttribute("normal",new rt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.points,e.segments,e.phiStart,e.phiLength)}}class Rc extends ha{constructor(e=1,t=1,n=4,i=8){const s=new Jb;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Rc(e.radius,e.length,e.capSegments,e.radialSegments)}}class ua extends bt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new L,h=new me;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const u=n+d/t*i;l.x=e*Math.cos(u),l.y=e*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(o,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ls extends bt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],f=[],u=[];let m=0;const b=[],g=n/2;let p=0;x(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new rt(d,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(u,2));function x(){const _=new L,C=new L;let E=0;const S=(t-e)/n;for(let w=0;w<=s;w++){const y=[],T=w/s,A=T*(t-e)+e;for(let P=0;P<=i;P++){const I=P/i,N=I*c+o,O=Math.sin(N),H=Math.cos(N);C.x=A*O,C.y=-T*n+g,C.z=A*H,d.push(C.x,C.y,C.z),_.set(O,S,H).normalize(),f.push(_.x,_.y,_.z),u.push(I,1-T),y.push(m++)}b.push(y)}for(let w=0;w<i;w++)for(let y=0;y<s;y++){const T=b[y][w],A=b[y+1][w],P=b[y+1][w+1],I=b[y][w+1];(e>0||y!==0)&&(h.push(T,A,I),E+=3),(t>0||y!==s-1)&&(h.push(A,P,I),E+=3)}l.addGroup(p,E,0),p+=E}function v(_){const C=m,E=new me,S=new L;let w=0;const y=_===!0?e:t,T=_===!0?1:-1;for(let P=1;P<=i;P++)d.push(0,g*T,0),f.push(0,T,0),u.push(.5,.5),m++;const A=m;for(let P=0;P<=i;P++){const N=P/i*c+o,O=Math.cos(N),H=Math.sin(N);S.x=y*H,S.y=g*T,S.z=y*O,d.push(S.x,S.y,S.z),f.push(0,T,0),E.x=O*.5+.5,E.y=H*.5*T+.5,u.push(E.x,E.y),m++}for(let P=0;P<i;P++){const I=C+P,N=A+P;_===!0?h.push(N,N+1,I):h.push(N+1,N,I),w+=3}l.addGroup(p,w,_===!0?1:2),p+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Js extends ls{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Js(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cc extends bt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),l(n),h(),this.setAttribute("position",new rt(s,3)),this.setAttribute("normal",new rt(s.slice(),3)),this.setAttribute("uv",new rt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const v=new L,_=new L,C=new L;for(let E=0;E<t.length;E+=3)u(t[E+0],v),u(t[E+1],_),u(t[E+2],C),c(v,_,C,x)}function c(x,v,_,C){const E=C+1,S=[];for(let w=0;w<=E;w++){S[w]=[];const y=x.clone().lerp(_,w/E),T=v.clone().lerp(_,w/E),A=E-w;for(let P=0;P<=A;P++)P===0&&w===E?S[w][P]=y:S[w][P]=y.clone().lerp(T,P/A)}for(let w=0;w<E;w++)for(let y=0;y<2*(E-w)-1;y++){const T=Math.floor(y/2);y%2===0?(f(S[w][T+1]),f(S[w+1][T]),f(S[w][T])):(f(S[w][T+1]),f(S[w+1][T+1]),f(S[w+1][T]))}}function l(x){const v=new L;for(let _=0;_<s.length;_+=3)v.x=s[_+0],v.y=s[_+1],v.z=s[_+2],v.normalize().multiplyScalar(x),s[_+0]=v.x,s[_+1]=v.y,s[_+2]=v.z}function h(){const x=new L;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const _=g(x)/2/Math.PI+.5,C=p(x)/Math.PI+.5;a.push(_,1-C)}m(),d()}function d(){for(let x=0;x<a.length;x+=6){const v=a[x+0],_=a[x+2],C=a[x+4],E=Math.max(v,_,C),S=Math.min(v,_,C);E>.9&&S<.1&&(v<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),C<.2&&(a[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function u(x,v){const _=x*3;v.x=e[_+0],v.y=e[_+1],v.z=e[_+2]}function m(){const x=new L,v=new L,_=new L,C=new L,E=new me,S=new me,w=new me;for(let y=0,T=0;y<s.length;y+=9,T+=6){x.set(s[y+0],s[y+1],s[y+2]),v.set(s[y+3],s[y+4],s[y+5]),_.set(s[y+6],s[y+7],s[y+8]),E.set(a[T+0],a[T+1]),S.set(a[T+2],a[T+3]),w.set(a[T+4],a[T+5]),C.copy(x).add(v).add(_).divideScalar(3);const A=g(C);b(E,T+0,x,A),b(S,T+2,v,A),b(w,T+4,_,A)}}function b(x,v,_,C){C<0&&x.x===1&&(a[v]=x.x-1),_.x===0&&_.z===0&&(a[v]=C/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.vertices,e.indices,e.radius,e.details)}}class na extends Cc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new na(e.radius,e.detail)}}class Zs extends bt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new L,f=new L,u=[],m=[],b=[],g=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let _=0;p===0&&a===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let C=0;C<=t;C++){const E=C/t;d.x=-e*Math.cos(i+E*s)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(i+E*s)*Math.sin(a+v*o),m.push(d.x,d.y,d.z),f.copy(d).normalize(),b.push(f.x,f.y,f.z),g.push(E+_,1-v),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const v=h[p][x+1],_=h[p][x],C=h[p+1][x],E=h[p+1][x+1];(p!==0||a>0)&&u.push(v,_,E),(p!==n-1||c<Math.PI)&&u.push(_,C,E)}this.setIndex(u),this.setAttribute("position",new rt(m,3)),this.setAttribute("normal",new rt(b,3)),this.setAttribute("uv",new rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pc extends bt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new L,d=new L,f=new L;for(let u=0;u<=n;u++)for(let m=0;m<=i;m++){const b=m/i*s,g=u/n*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(b),d.y=(e+t*Math.cos(g))*Math.sin(b),d.z=t*Math.sin(g),o.push(d.x,d.y,d.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),l.push(m/i),l.push(u/n)}for(let u=1;u<=n;u++)for(let m=1;m<=i;m++){const b=(i+1)*u+m-1,g=(i+1)*(u-1)+m-1,p=(i+1)*(u-1)+m,x=(i+1)*u+m;a.push(b,g,x),a.push(g,p,x)}this.setIndex(a),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Lc extends fn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gc,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class An extends Lc{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Mt extends fn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gc,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Lr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Qb(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function $b(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function hh(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function Iu(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class er{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Zb extends er{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qc,endingEnd:Qc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case $c:s=e,o=2*t-n;break;case Zc:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case $c:a=e,c=2*n-t;break;case Zc:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,m=(n-t)/(i-t),b=m*m,g=b*m,p=-f*g+2*f*b-f*m,x=(1+f)*g+(-1.5-2*f)*b+(-.5+f)*m+1,v=(-1-u)*g+(1.5+u)*b+.5*m,_=u*g-u*b;for(let C=0;C!==o;++C)s[C]=p*a[h+C]+x*a[l+C]+v*a[c+C]+_*a[d+C];return s}}class e_ extends er{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==o;++f)s[f]=a[l+f]*d+a[c+f]*h;return s}}class t_ extends er{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class wn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lr(t,this.TimeBufferType),this.values=Lr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Lr(e.times,Array),values:Lr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new t_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new e_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qs:t=this.InterpolantFactoryMethodDiscrete;break;case Ys:t=this.InterpolantFactoryMethodLinear;break;case ma:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return Ys;case this.InterpolantFactoryMethodSmooth:return ma}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Qb(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ma,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const d=o*n,f=d-n,u=d+n;for(let m=0;m!==n;++m){const b=t[d+m];if(b!==t[f+m]||b!==t[u+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const d=o*n,f=a*n;for(let u=0;u!==n;++u)t[f+u]=t[d+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Ys;class ms extends wn{constructor(e,t,n){super(e,t,n)}}ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=qs;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;class Du extends wn{}Du.prototype.ValueTypeName="color";class hs extends wn{}hs.prototype.ValueTypeName="number";class n_ extends er{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)it.slerpFlat(s,0,a,l-o,a,l,c);return s}}class us extends wn{InterpolantFactoryMethodLinear(e){return new n_(this.times,this.values,this.getValueSize(),e)}}us.prototype.ValueTypeName="quaternion";us.prototype.InterpolantFactoryMethodSmooth=void 0;class gs extends wn{constructor(e,t,n){super(e,t,n)}}gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=qs;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;class ds extends wn{}ds.prototype.ValueTypeName="vector";class i_{constructor(e="",t=-1,n=[],i=Hd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=dn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(r_(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(wn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const h=$b(c);c=hh(c,1,h),l=hh(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new hs(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(s);if(h&&h.length>1){const d=h[1];let f=i[d];f||(i[d]=f=[]),f.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,f,u,m,b){if(u.length!==0){const g=[],p=[];Iu(u,g,p,m),g.length!==0&&b.push(new d(f,g,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const f=l[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const u={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let b=0;b<f[m].morphTargets.length;b++)u[f[m].morphTargets[b]]=-1;for(const b in u){const g=[],p=[];for(let x=0;x!==f[m].morphTargets.length;++x){const v=f[m];g.push(v.time),p.push(v.morphTarget===b?1:0)}i.push(new hs(".morphTargetInfluence["+b+"]",g,p))}c=u.length*a}else{const u=".bones["+t[d].name+"]";n(ds,u+".position",f,"pos",i),n(us,u+".quaternion",f,"rot",i),n(ds,u+".scale",f,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function s_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hs;case"vector":case"vector2":case"vector3":case"vector4":return ds;case"color":return Du;case"quaternion":return us;case"bool":case"boolean":return ms;case"string":return gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function r_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=s_(r.type);if(r.times===void 0){const t=[],n=[];Iu(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ci={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class a_{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){const u=l[d],m=l[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null}}}const o_=new a_;class bs{constructor(e){this.manager=e!==void 0?e:o_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}bs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Nn={};class c_ extends Error{constructor(e,t){super(e),this.response=t}}class Nu extends bs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ci.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Nn[e]!==void 0){Nn[e].push({onLoad:t,onProgress:n,onError:i});return}Nn[e]=[],Nn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Nn[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=f?parseInt(f):0,m=u!==0;let b=0;const g=new ReadableStream({start(p){x();function x(){d.read().then(({done:v,value:_})=>{if(v)p.close();else{b+=_.byteLength;const C=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:u});for(let E=0,S=h.length;E<S;E++){const w=h[E];w.onProgress&&w.onProgress(C)}p.enqueue(_),x()}},v=>{p.error(v)})}}});return new Response(g)}else throw new c_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,u=new TextDecoder(f);return l.arrayBuffer().then(m=>u.decode(m))}}}).then(l=>{ci.add(e,l);const h=Nn[e];delete Nn[e];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onLoad&&u.onLoad(l)}}).catch(l=>{const h=Nn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Nn[e];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onError&&u.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class l_ extends bs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ci.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Ks("img");function c(){h(),ci.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){h(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class h_ extends bs{constructor(e){super(e)}load(e,t,n,i){const s=new St,a=new l_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class da extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new he(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class u_ extends da{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ka=new Ce,uh=new L,dh=new L;class Ic{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _c,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;uh.setFromMatrixPosition(e.matrixWorld),t.position.copy(uh),dh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dh),t.updateMatrixWorld(),Ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class d_ extends Ic{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=os*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class f_ extends da{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new d_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const fh=new Ce,Es=new L,Ja=new L;class p_ extends Ic{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Es.setFromMatrixPosition(e.matrixWorld),n.position.copy(Es),Ja.copy(n.position),Ja.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ja),n.updateMatrixWorld(),i.makeTranslation(-Es.x,-Es.y,-Es.z),fh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh)}}class m_ extends da{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new p_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class g_ extends Ic{constructor(){super(new xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uu extends da{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new g_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class b_ extends bs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ci.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return ci.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ci.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ci.add(e,c),s.manager.itemStart(e)}}class __{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ph(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ph();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ph(){return performance.now()}const Dc="\\[\\]\\.:\\/",x_=new RegExp("["+Dc+"]","g"),Nc="[^"+Dc+"]",v_="[^"+Dc.replace("\\.","")+"]",M_=/((?:WC+[\/:])*)/.source.replace("WC",Nc),y_=/(WCOD+)?/.source.replace("WCOD",v_),S_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nc),T_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nc),A_=new RegExp("^"+M_+y_+S_+T_+"$"),w_=["material","materials","bones","map"];class E_{constructor(e,t,n){const i=n||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ze{constructor(e,t,n){this.path=t,this.parsedPath=n||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,n):new Ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(x_,"")}static parseTrackName(e){const t=A_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);w_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=E_;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oc);const R_=46,mh=52,C_=75;class P_{constructor(e){Xc(this,"_kbSteer",0);this.steer=0,this.brake=!1,this.tuck=!1,this.lastTuckRelease=-1e9,this.onSwipe=null,this._keys=new Set,this._touch=null,this._onKeyDown=t=>this._keyDown(t),this._onKeyUp=t=>this._keyUp(t),this._onPointerDown=t=>this._pointerDown(t),this._onPointerMove=t=>this._pointerMove(t),this._onPointerUp=t=>this._pointerUp(t),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),e.addEventListener("pointerdown",this._onPointerDown),window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp),window.addEventListener("pointercancel",this._onPointerUp),this._onBlur=()=>{this._keys.clear(),this._applyKeys()},window.addEventListener("blur",this._onBlur)}dispose(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),window.removeEventListener("pointercancel",this._onPointerUp)}_keyDown(e){const t=e.key.toLowerCase();if(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(t)){if(e.preventDefault(),!this._keys.has(t)){const n={w:"up",arrowup:"up",s:"down",arrowdown:"down",a:"left",arrowleft:"left",d:"right",arrowright:"right"}[t];n&&this.onSwipe&&this.onSwipe(n)}this._keys.add(t),this._applyKeys()}}_keyUp(e){const t=e.key.toLowerCase();this._keys.delete(t)&&this._applyKeys()}_applyKeys(){const e=(...s)=>s.some(a=>this._keys.has(a)),t=e("a","arrowleft"),n=e("d","arrowright");this._kbSteer=(n?1:0)-(t?1:0);const i=this.tuck;this.tuck=e("w","arrowup"),this.brake=e("s","arrowdown"),i&&!this.tuck&&(this.lastTuckRelease=performance.now()),this._touch===null&&(this.steer=this._kbSteer)}_pointerDown(e){e.pointerType==="mouse"&&e.button!==0||this._touch||(this._touch={id:e.pointerId,ax:e.clientX,ay:e.clientY,sx:e.clientX,sy:e.clientY,st:performance.now()})}_pointerMove(e){const t=this._touch;if(!t||e.pointerId!==t.id)return;const n=e.clientX-t.ax,i=e.clientY-t.ay;this.steer=Math.max(-1,Math.min(1,n/C_));const s=this.tuck;this.tuck=i<-mh,this.brake=i>mh,s&&!this.tuck&&(this.lastTuckRelease=performance.now());const a=e.clientX-t.sx,o=e.clientY-t.sy,c=performance.now();if(c-t.st<260&&Math.hypot(a,o)>R_){const l=Math.abs(a)>Math.abs(o)?a>0?"right":"left":o>0?"down":"up";this.onSwipe&&this.onSwipe(l),t.sx=e.clientX,t.sy=e.clientY,t.st=c}else c-t.st>=260&&(t.sx=e.clientX,t.sy=e.clientY,t.st=c)}_pointerUp(e){const t=this._touch;!t||e.pointerId!==t.id||(this._touch=null,this.tuck&&(this.lastTuckRelease=performance.now()),this.steer=this._kbSteer||0,this.tuck=!1,this.brake=!1,this._applyKeys())}}function gh(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,c=new bt;let l=0;for(let h=0;h<r.length;++h){const d=r[h];let f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;s[u]===void 0&&(s[u]=[]),s[u].push(d.attributes[u]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in d.morphAttributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(d.morphAttributes[u])}if(e){let u;if(t)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,u,h),l+=u}}if(t){let h=0;const d=[];for(let f=0;f<r.length;++f){const u=r[f].index;for(let m=0;m<u.count;++m)d.push(u.getX(m)+h);h+=r[f].attributes.position.count}c.setIndex(d)}for(const h in s){const d=bh(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let b=0;b<a[h].length;++b)u.push(a[h][b][f]);const m=bh(u);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function bh(r){let e,t,n,i=-1,s=0;for(let l=0;l<r.length;++l){const h=r[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const a=new e(s),o=new st(a,t,n);let c=0;for(let l=0;l<r.length;++l){const h=r[l];if(h.isInterleavedBufferAttribute){const d=c/t;for(let f=0,u=h.count;f<u;f++)for(let m=0;m<t;m++){const b=h.getComponent(f,m);o.setComponent(f+d,m,b)}}else a.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function _h(r,e){if(e===Vd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===qo||e===ru){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===qo)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function di(r){let e=r>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ku(){return Math.random()*4294967295>>>0}function Ir(r,e,t){let n=Math.imul(r|0,668265261)^Math.imul(e|0,374761393)^Math.imul(t|0,2654435769);return n=Math.imul(n^n>>>15,2246822507),n^=n>>>13,(n>>>0)/4294967296}const xh=r=>r*r*(3-2*r);function Fu(r,e,t){const n=Math.floor(r),i=Math.floor(e),s=r-n,a=e-i,o=Ir(n,i,t),c=Ir(n+1,i,t),l=Ir(n,i+1,t),h=Ir(n+1,i+1,t),d=xh(s),f=xh(a);return(o+(c-o)*d+(l-o)*f+(o-c-l+h)*d*f)*2-1}function vn(r,e){return Fu(r,.5,e)}function Rs(r,e,t,n=3){let i=0,s=.5,a=1,o=0;for(let c=0;c<n;c++)i+=Fu(r*a,e*a,t+c*101)*s,o+=s,s*=.5,a*=2.1;return i/o}const _e=(r,e,t)=>Math.min(t,Math.max(e,r)),mt=(r,e,t)=>r+(e-r)*t;function qe(r,e,t){const n=_e((t-r)/(e-r),0,1);return n*n*(3-2*n)}const tr={vermont:{eventA:12725045,eventB:16111470,skyTop:5214158,skyBottom:15332090,fog:15003386,fogNear:220,fogFar:1e3,snow:15988732,ice:11981544,rock:7239267,trunk:7031342,foliage:5206086,treeMul:1.35,rockMul:.6,roughMul:.75,mogulMul:.9,cliffMul:.55,hemiSky:14478591,hemiGround:10135707,hemiI:.9,sunCol:16773320,sunI:1.8},quebec:{eventA:2381480,eventB:7330280,skyTop:4029632,skyBottom:14478070,fog:14346484,fogNear:200,fogFar:900,snow:15791611,ice:10273504,rock:8877682,trunk:4273189,foliage:2180404,treeMul:1.5,rockMul:.7,roughMul:.85,mogulMul:1.1,cliffMul:.7,hemiSky:13624056,hemiGround:9279912,hemiI:.85,sunCol:16772800,sunI:1.7},colorado:{eventA:14248735,eventB:3522720,skyTop:4162505,skyBottom:15134968,fog:14871798,fogNear:240,fogFar:1100,snow:16054525,ice:11324390,rock:8688806,trunk:5916208,foliage:4944752,treeMul:1,rockMul:1.1,roughMul:1,mogulMul:1,cliffMul:1,hemiSky:13625087,hemiGround:10261636,hemiI:.85,sunCol:16773328,sunI:1.9},utah:{eventA:11019822,eventB:15771712,skyTop:3111624,skyBottom:15003898,fog:15134970,fogNear:230,fogFar:1050,snow:16186110,ice:12113646,rock:10639932,trunk:14077888,foliage:7831626,treeMul:.85,rockMul:1.2,roughMul:1.15,mogulMul:.8,cliffMul:1.1,hemiSky:13953535,hemiGround:9345451,hemiI:.85,sunCol:16774360,sunI:2},bc:{eventA:2064248,eventB:10479824,skyTop:5603496,skyBottom:13951208,fog:13688294,fogNear:150,fogFar:720,snow:15660024,ice:10798298,rock:5398118,trunk:4337951,foliage:1785904,treeMul:1.6,rockMul:.9,roughMul:1.05,mogulMul:1,cliffMul:1.3,hemiSky:12768482,hemiGround:8556182,hemiI:.95,sunCol:15919832,sunI:1.35},chile:{eventA:12595240,eventB:16098851,skyTop:2780866,skyBottom:15397624,fog:15266038,fogNear:280,fogFar:1300,snow:16120060,ice:12243686,rock:10121030,trunk:6509114,foliage:5333308,treeMul:.06,rockMul:2.2,roughMul:1.35,mogulMul:.7,cliffMul:1.5,hemiSky:14215418,hemiGround:11049600,hemiI:.9,sunCol:16774880,sunI:2.1},nz:{eventA:1019807,eventB:12905550,skyTop:3504568,skyBottom:14871794,fog:14740208,fogNear:260,fogFar:1200,snow:15922938,ice:11586784,rock:9341820,trunk:8679756,foliage:9997396,treeMul:.1,rockMul:1.9,roughMul:1.25,mogulMul:1.15,cliffMul:1.35,hemiSky:13821170,hemiGround:10524798,hemiI:.9,sunCol:16773844,sunI:1.95},swiss:{eventA:13639722,eventB:16054783,skyTop:2449576,skyBottom:14674678,fog:14543348,fogNear:240,fogFar:1150,snow:16185853,ice:12376304,rock:9673382,trunk:5193776,foliage:3038280,treeMul:.7,rockMul:1.3,roughMul:1.2,mogulMul:.95,cliffMul:1.7,hemiSky:13690106,hemiGround:9147813,hemiI:.85,sunCol:16773840,sunI:2},japan:{eventA:13976480,eventB:6809849,skyTop:1315384,skyBottom:5918350,fog:4866674,fogNear:140,fogFar:620,snow:14672626,ice:10134732,rock:4672355,trunk:14209216,foliage:3824725,treeMul:1.45,rockMul:.6,roughMul:.9,mogulMul:.75,cliffMul:.8,hemiSky:8025264,hemiGround:3947094,hemiI:.75,sunCol:12372223,sunI:1}};for(const[r,e]of Object.entries(tr))e.key=r;class Uc extends bs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new U_(t)}),this.register(function(t){return new k_(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new X_(t)}),this.register(function(t){return new q_(t)}),this.register(function(t){return new O_(t)}),this.register(function(t){return new B_(t)}),this.register(function(t){return new z_(t)}),this.register(function(t){return new G_(t)}),this.register(function(t){return new N_(t)}),this.register(function(t){return new H_(t)}),this.register(function(t){return new F_(t)}),this.register(function(t){return new W_(t)}),this.register(function(t){return new V_(t)}),this.register(function(t){return new I_(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new K_(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Vs.extractUrlBase(e);a=Vs.resolveURL(l,this.path)}else a=Vs.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Nu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ou){try{a[He.KHR_BINARY_GLTF]=new J_(e)}catch(d){i&&i(d);return}s=JSON.parse(a[He.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new lx(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const d=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(d){case He.KHR_MATERIALS_UNLIT:a[d]=new D_;break;case He.KHR_DRACO_MESH_COMPRESSION:a[d]=new Q_(s,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:a[d]=new $_;break;case He.KHR_MESH_QUANTIZATION:a[d]=new Z_;break;default:f.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function L_(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class I_{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new he(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Bt);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Uu(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new m_(h),l.distance=d;break;case"spot":l=new f_(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,zn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class D_{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return Rt}extendParams(e,t,n){const i=[];e.color=new he(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Bt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,xt))}return Promise.all(i)}}class N_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class U_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new me(o,o)}return Promise.all(s)}}class k_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class F_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class O_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new he(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Bt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,xt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class B_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class z_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new he().setRGB(o[0],o[1],o[2],Bt),Promise.all(s)}}class G_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class H_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new he().setRGB(o[0],o[1],o[2],Bt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,xt)),Promise.all(s)}}class V_{constructor(e){this.parser=e,this.name=He.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class W_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class j_{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class X_{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class q_{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Y_{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(u){return u.buffer}):a.ready.then(function(){const u=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(u),h,d,f,i.mode,i.filter),u})})}else return null}}class K_{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Qt.TRIANGLES&&l.mode!==Qt.TRIANGLE_STRIP&&l.mode!==Qt.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),d=h.isGroup?h.children:[h],f=l[0].count,u=[];for(const m of d){const b=new Ce,g=new L,p=new it,x=new L(1,1,1),v=new Jt(m.geometry,m.material,f);for(let _=0;_<f;_++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&x.fromBufferAttribute(c.SCALE,_),v.setMatrixAt(_,b.compose(g,p,x));for(const _ in c)if(_==="_COLOR_0"){const C=c[_];v.instanceColor=new Jo(C.array,C.itemSize,C.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,c[_]);ft.prototype.copy.call(v,m),this.parser.assignFinalMaterial(v),u.push(v)}return h.isGroup?(h.clear(),h.add(...u),h):u[0]}))}}const Ou="glTF",Cs=12,vh={JSON:1313821514,BIN:5130562};class J_{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Cs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ou)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Cs,s=new DataView(e,Cs);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===vh.JSON){const l=new Uint8Array(e,Cs+a,o);this.content=n.decode(l)}else if(c===vh.BIN){const l=Cs+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Q_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const d=$o[h]||h.toLowerCase();o[d]=a[h]}for(const h in e.attributes){const d=$o[h]||h.toLowerCase();if(a[h]!==void 0){const f=n.accessors[e.attributes[h]],u=es[f.componentType];l[d]=u.name,c[d]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(d,f){i.decodeDracoFile(h,function(u){for(const m in u.attributes){const b=u.attributes[m],g=c[m];g!==void 0&&(b.normalized=g)}d(u)},o,l,Bt,f)})})}}class $_{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Z_{constructor(){this.name=He.KHR_MESH_QUANTIZATION}}class Bu extends er{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,d=(n-t)/h,f=d*d,u=f*d,m=e*l,b=m-l,g=-2*u+3*f,p=u-f,x=1-g,v=p-f+d;for(let _=0;_!==o;_++){const C=a[b+_+o],E=a[b+_+c]*h,S=a[m+_+o],w=a[m+_]*h;s[_]=x*C+v*E+g*S+p*w}return s}}const ex=new it;class tx extends Bu{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return ex.fromArray(s).normalize().toArray(s),s}}const Qt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},es={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Mh={9728:Ot,9729:jt,9984:Kh,9985:Wr,9986:Ns,9987:Vn},yh={33071:oi,33648:$r,10497:Ei},Qa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$o={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},nx={CUBICSPLINE:void 0,LINEAR:Ys,STEP:qs},$a={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ix(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Lc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xn})),r.DefaultMaterial}function vi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function sx(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const d=e[l];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):r.attributes.position;a.push(f)}if(i){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):r.attributes.normal;o.push(f)}if(s){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):r.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],d=l[1],f=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=d),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function rx(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ax(r){let e;const t=r.extensions&&r.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Za(t.attributes):e=r.indices+":"+Za(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Za(r.targets[n]);return e}function Za(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Zo(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ox(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const cx=new Ce;class lx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new L_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new h_(this.options.manager):this.textureLoader=new b_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Nu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return vi(s,o,i),zn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Vs.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Qa[i.type],o=es[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new st(l,a,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=Qa[i.type],l=es[i.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,f=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let b,g;if(u&&u!==d){const p=Math.floor(f/u),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(x);v||(b=new l(o,p*u,i.count*u/h),v=new Pb(b,u/h),t.cache.add(x,v)),g=new Mc(v,c,f%u/h,m)}else o===null?b=new l(i.count*c):b=new l(o,f,i.count*c),g=new st(b,c,m);if(i.sparse!==void 0){const p=Qa.SCALAR,x=es[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,C=new x(a[1],v,i.sparse.count*p),E=new l(a[2],_,i.sparse.count*c);o!==null&&(g=new st(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let S=0,w=C.length;S<w;S++){const y=C[S];if(g.setX(y,E[S*c]),c>=2&&g.setY(y,E[S*c+1]),c>=3&&g.setZ(y,E[S*c+2]),c>=4&&g.setW(y,E[S*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(s.samplers||{})[a.sampler]||{};return h.magFilter=Mh[f.magFilter]||jt,h.minFilter=Mh[f.minFilter]||Vn,h.wrapS=yh[f.wrapS]||Ei,h.wrapT=yh[f.wrapT]||Ei,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ot&&h.minFilter!==jt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;const f=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(d){return new Promise(function(f,u){let m=f;t.isImageBitmapLoader===!0&&(m=function(b){const g=new St(b);g.needsUpdate=!0,f(g)}),t.load(Vs.resolveURL(d,s.path),m,void 0,u)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),zn(d,a),d.userData.mimeType=a.mimeType||ox(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[He.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Tc,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Eu,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Lc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[He.KHR_MATERIALS_UNLIT]){const d=i[He.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,s,t))}else{const d=s.pbrMetallicRoughness||{};if(o.color=new he(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Bt),o.opacity=f[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,xt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Wt);const h=s.alphaMode||$a.OPAQUE;if(h===$a.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===$a.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Rt&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new me(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&a!==Rt&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Rt){const d=s.emissiveFactor;o.emissive=new he().setRGB(d[0],d[1],d[2],Bt)}return s.emissiveTexture!==void 0&&a!==Rt&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,xt)),Promise.all(l).then(function(){const d=new a(o);return s.name&&(d.name=s.name),zn(d,s),t.associations.set(d,{materials:e}),s.extensions&&vi(i,d,s),d})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Sh(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=ax(l),d=i[h];if(d)a.push(d.promise);else{let f;l.extensions&&l.extensions[He.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=Sh(new bt,l,t),i[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?ix(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let u=0,m=h.length;u<m;u++){const b=h[u],g=a[u];let p;const x=l[u];if(g.mode===Qt.TRIANGLES||g.mode===Qt.TRIANGLE_STRIP||g.mode===Qt.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new Ib(b,x):new et(b,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Qt.TRIANGLE_STRIP?p.geometry=_h(p.geometry,ru):g.mode===Qt.TRIANGLE_FAN&&(p.geometry=_h(p.geometry,qo));else if(g.mode===Qt.LINES)p=new Ub(b,x);else if(g.mode===Qt.LINE_STRIP)p=new Sc(b,x);else if(g.mode===Qt.LINE_LOOP)p=new kb(b,x);else if(g.mode===Qt.POINTS)p=new Ac(b,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&rx(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),zn(p,s),g.extensions&&vi(i,p,g),t.assignFinalMaterial(p),d.push(p)}for(let u=0,m=d.length;u<m;u++)t.associations.set(d[u],{meshes:e,primitives:u});if(d.length===1)return s.extensions&&vi(i,d[0],s),d[0];const f=new vt;s.extensions&&vi(i,f,s),t.associations.set(f,{meshes:e});for(let u=0,m=d.length;u<m;u++)f.add(d[u]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dt(ou.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new xc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const d=a[l];if(d){o.push(d);const f=new Ce;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new yc(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let d=0,f=i.channels.length;d<f;d++){const u=i.channels[d],m=i.samplers[u.sampler],b=u.target,g=b.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(m),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){const f=d[0],u=d[1],m=d[2],b=d[3],g=d[4],p=[];for(let x=0,v=f.length;x<v;x++){const _=f[x],C=u[x],E=m[x],S=b[x],w=g[x];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const y=n._createAnimationTracks(_,C,E,S,w);if(y)for(let T=0;T<y.length;T++)p.push(y[T])}return new i_(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const h=l[0],d=l[1],f=l[2];f!==null&&h.traverse(function(u){u.isSkinnedMesh&&u.bind(f,cx)});for(let u=0,m=d.length;u<m;u++)h.add(d[u]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new Au:l.length>1?h=new vt:l.length===1?h=l[0]:h=new ft,h!==l[0])for(let d=0,f=l.length;d<f;d++)h.add(l[d]);if(s.name&&(h.userData.name=s.name,h.name=a),zn(h,s),s.extensions&&vi(n,h,s),s.matrix!==void 0){const d=new Ce;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new vt;n.name&&(s.name=i.createUniqueName(n.name)),zn(s,n),n.extensions&&vi(t,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,d=c.length;h<d;h++)s.add(c[h]);const l=h=>{const d=new Map;for(const[f,u]of i.associations)(f instanceof fn||f instanceof St)&&d.set(f,u);return h.traverse(f=>{const u=i.associations.get(f);u!=null&&d.set(f,u)}),d};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,c=[];ii[s.path]===ii.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(ii[s.path]){case ii.weights:l=hs;break;case ii.rotation:l=us;break;case ii.position:case ii.scale:l=ds;break;default:switch(n.itemSize){case 1:l=hs;break;case 2:case 3:default:l=ds;break}break}const h=i.interpolation!==void 0?nx[i.interpolation]:Ys,d=this._getArrayFromAccessor(n);for(let f=0,u=c.length;f<u;f++){const m=new l(c[f]+"."+ii[s.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Zo(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof us?tx:Bu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function hx(r,e,t){const n=e.attributes,i=new Yn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){const h=Zo(es[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new L,c=new L;for(let l=0,h=s.length;l<h;l++){const d=s[l];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],u=f.min,m=f.max;if(u!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(u[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(u[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(u[2]),Math.abs(m[2]))),f.normalized){const b=Zo(es[f.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new Sn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Sh(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(const a in n){const o=$o[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return We.workingColorSpace!==Bt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`),zn(r,e),hx(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?sx(r,e.targets,t):r})}var kc=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:r,s,a=WebAssembly.instantiate(o(i),{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),v=0;v<p.length;++v){var _=p.charCodeAt(v);x[v]=_>96?_-97:_>64?_-39:_+4}for(var C=0,v=0;v<p.length;++v)x[C++]=x[v]<60?n[x[v]]:(x[v]-60)*64+x[++v];return x.buffer.slice(0,C)}function c(p,x,v,_,C,E){var S=s.exports.sbrk,w=v+3&-4,y=S(w*_),T=S(C.length),A=new Uint8Array(s.exports.memory.buffer);A.set(C,T);var P=p(y,v,_,T,C.length);if(P==0&&E&&E(y,w,_),x.set(A.subarray(y,y+v*_)),S(y-S(0)),P!=0)throw new Error("Malformed buffer data: "+P)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],f=0;function u(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(v){var _=v.data;x.pending-=_.count,x.requests[_.id][_.action](_.value),delete x.requests[_.id]},x}function m(p){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+g.toString(),v=new Blob([x],{type:"text/javascript"}),_=URL.createObjectURL(v),C=0;C<p;++C)d[C]=u(_);URL.revokeObjectURL(_)}function b(p,x,v,_,C){for(var E=d[0],S=1;S<d.length;++S)d[S].pending<E.pending&&(E=d[S]);return new Promise(function(w,y){var T=new Uint8Array(v),A=f++;E.pending+=p,E.requests[A]={resolve:w,reject:y},E.object.postMessage({id:A,count:p,size:x,source:T,mode:_,filter:C},[T.buffer])})}function g(p){a.then(function(){var x=p.data;try{var v=new Uint8Array(x.count*x.size);c(s.exports[x.mode],v,x.count,x.size,x.source,s.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:v},[v.buffer])}catch(_){self.postMessage({id:x.id,count:x.count,action:"reject",value:_})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,x,v,_,C){c(s.exports.meshopt_decodeVertexBuffer,p,x,v,_,s.exports[l[C]])},decodeIndexBuffer:function(p,x,v,_){c(s.exports.meshopt_decodeIndexBuffer,p,x,v,_)},decodeIndexSequence:function(p,x,v,_){c(s.exports.meshopt_decodeIndexSequence,p,x,v,_)},decodeGltfBuffer:function(p,x,v,_,C,E){c(s.exports[h[C]],p,x,v,_,s.exports[l[E]])},decodeGltfBufferAsync:function(p,x,v,_,C){return d.length>0?b(p,x,v,h[_],l[C]):a.then(function(){var E=new Uint8Array(p*x);return c(s.exports[h[_]],E,p,x,v,s.exports[l[C]]),E})}}})();let ec=null;async function ux(){if(ec)return;const r=new Uc;r.setMeshoptDecoder(kc),ec=(await r.loadAsync("models/props.glb")).scene}const zu=new Set(["log_small","log_hollow"]);function Gu(r,e){if(e&&zu.has(e)){const n=new he(r.trunk??5916208);return{structure:n.clone().multiplyScalar(.9),secondary:n.clone().lerp(new he(13219733),.4),panel:new he(13217923),trim:new he(16054525)}}const t=new he(11187391).lerp(new he(r.snow),.25);return{structure:new he(3028290).lerp(new he(r.fog),.12),secondary:t,panel:new he(r.eventA??14042415),trim:new he(r.eventB??16111470)}}const Th=new Map;function Ah(r,e,t){const n=`${t}:${r}`;let i=Th.get(n);if(!i){const s=e[r]??new he(8947848);i=r==="trim"?new Mt({color:s,emissive:s.clone().multiplyScalar(.35)}):new Mt({color:s}),Th.set(n,i)}return i}function Gn(r,e,t=1){const n=ec.getObjectByName(r),i=Gu(e,r),s=`${zu.has(r)?"wood":"evt"}:${e.snow}:${e.eventA}`,a=n.clone();a.traverse(c=>{c.isMesh&&(Array.isArray(c.material)?c.material=c.material.map(l=>Ah(l.name,i,s)):c.material=Ah(c.material.name,i,s),c.castShadow=!0)});const o=new vt;return o.add(a),o.scale.setScalar(t),o}const Fs=6.5/17,gn=.15,bn=.185,tc=28.7,Qr=r=>8.58-.36*(ou.clamp(r,8,28)-8),nc=1.45,Ps={lipDz:nc,lipDrop:(Qr(tc-nc/bn)-1.4)*gn,halfW:50*Fs,blend:2.4},Ls=.052,Dr=.036,Nr=.032,eo=(r,e,t)=>{const n=document.createElement("canvas");n.width=r,n.height=e;const i=n.getContext("2d");t(i,r,e);const s=new la(n);return s.colorSpace=xt,s};class Hu{constructor(e){this.terrain=e,this.group=new vt,this.openT=-1,this.phase="idle";const t=new Mt({color:2304051}),n=e.gateLanes,i=(n[0].x+n[n.length-1].x)/2,s=n[0].z,a=e.theme,o=Gu(a);this.cx=i,this.z=s;const c=100*Fs,l=s-nc,h=l+tc*bn,d=e.heightAt(i,s)-Qr((h-s)/bn)*gn,f=Gn("pavilion",a);f.scale.set(Fs,gn,bn),f.position.set(i,d,h),f.rotation.y=Math.PI,this.group.add(f),this.pav=f,this.hideZ=l-1.5;const u=c/2;e.surface=(C,E)=>{if(Math.abs(C-i)>u)return-1/0;const S=(h-E)/bn;return S<8||S>tc?-1/0:d+Qr(S)*gn},this.screens=new vt,this.accA="#"+new he(a.eventA??14042415).getHexString(),this.accB="#"+new he(a.eventB??16111470).getHexString(),this.tickerTex=null,this.tickerMat=new Rt({color:16777215});const m=new et(new hn(15,1.84),this.tickerMat),b=Math.atan(5.8*bn/(10.4*gn));m.rotation.order="YXZ",m.rotation.set(b,Math.PI,0),m.position.set(i-.3*Fs,d+33.6*gn-Math.sin(b)*.09,h-20.3*bn-Math.cos(b)*.09),this.screens.add(m),this.sideSignMats=[];const g=Math.atan(4.8*bn/(11.1*gn));for(const C of[-1,1]){const E=new Rt({map:eo(512,172,(w,y,T)=>{w.fillStyle="#0a0e16",w.fillRect(0,0,y,T),w.strokeStyle=this.accA,w.lineWidth=10,w.strokeRect(8,8,y-16,T-16),w.font="bold 108px sans-serif",w.textAlign="center",w.textBaseline="middle",w.fillStyle=this.accB,w.fillText("START",y/2,T/2+6)})}),S=new et(new hn(4.6,1.55),E);S.rotation.order="YXZ",S.rotation.set(g,Math.PI,0),S.position.set(i+C*36.5*Fs,d+33.45*gn-Math.sin(g)*.09,h-20.8*bn-Math.cos(g)*.09),this.screens.add(S),this.sideSignMats.push(E)}this.group.add(this.screens),this.smokers=[],this.pyroPorts=[];const p=d+60.6*gn-.8;this.trussY=p+1.6;for(const C of[-.36,-.12,.12,.36])this.pyroPorts.push(new L(i+C*c,p,l+.4));for(const C of[-1,1]){const E=i+C*(c/2+.9),S=new et(new Xt(.9,.65,.9),t);S.position.set(E,e.heightAt(E,s-1)+.35,s-1),this.smokers.push(S.position.clone()),this.group.add(S)}this.wands=[],this.laneLightMats=[];const x=s-.45-3.1*Nr,v=d+Qr((h-x)/bn)*gn,_=new Mt({color:o.trim,emissive:o.trim.clone().multiplyScalar(.35)});this.laneScreens=[];for(const C of n){const E=C.x+3.1*Ls,S=Gn("start_gate",a);S.scale.set(Ls,Dr,Nr),S.position.set(E,v-.12,x);const w=this.laneScreens.length+1,y=new Rt({color:16777215});for(const I of[-35.95,29.65]){const N=new et(new hn(11*Ls,25*Dr),y);N.position.set(E+I*Ls,v-.12+38.7*Dr,x+4.2*Nr+.035),this.group.add(N)}this.laneScreens.push({mat:y,no:w,name:null});const T=new vt;T.position.set(11.2,43.4,3.6);const A=new et(new Xt(28,2,2),_);A.position.x=-14,T.add(A),S.add(T),this.wands.push(T),this.group.add(S);const P=new Rt({color:14042415});this.laneLightMats.push(P);for(const I of[-33.4,29.1]){const N=new et(new Zs(.085,8,6),P);N.position.set(E+I*Ls,v-.12+69*Dr,x+9*Nr),this.group.add(N)}}this.ledMat=new Rt({color:3718648});for(const C of[-2,-3.2]){const E=new et(new Xt(c-3,.16,.14),this.ledMat);E.position.set(i,e.heightAt(i,s+C)+.15,s+C),this.group.add(E)}this.screenMat=new Rt({color:860723}),this.setRoster([]),this.group.traverse(C=>{C.isMesh&&(C.castShadow=!0)})}setRoster(e){const t=e.filter(Boolean),n="RACE STARTING  •  "+(t.length?t.join("  •  ")+"  •  ":"");this.tickerTex?.dispose(),this.tickerTex=eo(2048,256,(i,s,a)=>{i.fillStyle="#0a0e16",i.fillRect(0,0,s,a);for(let d=0;d<s;d+=32)for(const f of[0,a-26])i.fillStyle=d/32%2?"#e8edf4":"#12161e",i.fillRect(d,f,32,26);i.textBaseline="middle",i.fillStyle=this.accB;let o=130,c=0,l=1,h=1;for(;o>=56&&(i.font=`bold ${o}px sans-serif`,c=i.measureText(n).width,l=Math.max(1,Math.round(s/c)),h=s/(l*c),!(h>=.85&&h<=1.25));o-=8);i.setTransform(h,0,0,1,0,0);for(let d=0;d<l;d++)i.fillText(n,d*c,a/2+8)}),this.tickerTex.wrapS=Ei,this.tickerMat.map=this.tickerTex,this.tickerMat.needsUpdate=!0;for(const[i,s]of this.laneScreens.entries()){const a=e[i]??null;s.mat.map&&s.name===a||(s.name=a,s.mat.map?.dispose(),s.mat.map=eo(128,256,(o,c,l)=>{if(o.fillStyle="#0a0e16",o.fillRect(0,0,c,l),o.strokeStyle=this.accA,o.lineWidth=6,o.strokeRect(5,5,c-10,l-10),o.textAlign="center",o.fillStyle=this.accB,o.font="bold 110px sans-serif",o.fillText(String(s.no),c/2,a?128:150),a){o.fillStyle="#e8edf4";let h=30;for(o.font=`bold ${h}px sans-serif`;h>14&&o.measureText(a).width>c-18;)h-=2,o.font=`bold ${h}px sans-serif`;o.fillText(a,c/2,200)}}),s.mat.needsUpdate=!0)}}setPhase(e){this.phase=e;const t=e==="go"?4120683:e==="set"?16098851:14042415;for(const n of this.laneLightMats)n.color.setHex(t);e==="go"&&this.openT<0&&(this.openT=0)}update(e,t,n,i,s){if(s!==void 0){const c=s<this.hideZ;this.pav.visible=c,this.screens.visible=c}this.tickerTex&&(this.tickerTex.offset.x+=e*.045);const a=.66+.34*Math.sin(t*(this.phase==="go"?11:2.6));for(const c of this.sideSignMats)c.color.setScalar(a);const o=.5+.5*Math.sin(t*(this.phase==="go"?9:2.1));if(this.ledMat.color.setHSL(.55,.9,.3+o*.35),this.screenMat.color.setHSL(.58,.75,.1+.09*(.5+.5*Math.sin(t*1.3))),n&&this.openT<0&&Math.random()<e*1.2){const c=this.smokers[Math.floor(Math.random()*this.smokers.length)];n.spawn(c.x,c.y+.3,c.z,(Math.random()-.5)*.8,.7+Math.random()*.5,.7,2.6,2.4)}if(this.openT>=0){const c=this.openT;this.openT+=e;const l=Math.min(1,this.openT/.55),h=1-Math.pow(1-l,3);for(const d of this.wands)d.rotation.z=h*1.45;if(i&&this.openT<1.7){for(const d of this.pyroPorts)i.burst(d,{x:0,z:0},{count:5,speed:1.5,up:12+Math.random()*6,spread:Math.PI,size:1.5,life:1.1});if(Math.floor(c*5)!==Math.floor(this.openT*5)){const d=this.cx+(Math.random()-.5)*16;i.burst({x:d,y:this.trussY+2.5,z:this.z},{x:0,z:0},{count:22,speed:7,up:9,spread:Math.PI,size:1.2,life:.9})}}if(n&&this.openT<2.6){for(const[d,f]of this.smokers.entries())if(Math.random()<e*14){const u=d===0?1:-1;n.spawn(f.x,f.y+.3,f.z,u*(2.2+Math.random()*1.6),.8,1.4,2.6+Math.random()*1.4,2)}}}}}const Qs=[{id:"race",name:"Downhill Race",short:"RACE",p:.2,scored:"time",length:1800,tag:"First to the line. The full mountain."},{id:"combined",name:"Combined",short:"COMBINED",p:.2,scored:"both",length:1800,tag:"Race time plus style points — both count."},{id:"glade",name:"Glade Sprint",short:"GLADE",p:.2,scored:"time",length:950,solo:!0,tag:"Short and fast through the trees. Solo runs, times posted at the end."},{id:"bigair",name:"Big Air",short:"BIG AIR",p:.2,scored:"style",length:420,solo:!0,tag:"One kicker. Judged on style alone, scores posted at the end."},{id:"halfpipe",name:"Halfpipe",short:"PIPE",p:.2,scored:"style",length:575,solo:!0,tag:"Five or six hits, all style. Scores posted at the end."}];function Vu(r){return Qs.find(e=>e.id===r)??null}function dx(r=Math.random()){let e=0;for(const t of Qs)if(e+=t.p,r<e)return t;return Qs[0]}function wh(r){return Math.max(0,Math.round(3e3-15*r))}function ic(r){const e=Math.floor(r/60),t=r-e*60;return`${e}:${t.toFixed(2).padStart(5,"0")}`}function fx(r,e,t){if(r<=0)return 0;const n=.35+.65*Math.min(1,Math.max(0,t));return Math.max(0,Math.round(r*n*(1+.12*e)-(e<0?10:0)))}function px(r,{playerPos:e,playerStyle:t,playerTime:n,bots:i,rng:s}){const a=r.scored,o=wh(n),c=a==="style"?t:a==="both"?o+t:o,l=Math.max(35,.1*c),h=i.map(d=>{const f=e-d.rank;let u=d.time;if(u==null){const p=1.4+s()*1.2;u=Math.max(5,n-f*p+(s()-.5)*.6*p)}const m=wh(u);let b=0;if(t>0&&a!=="time"){const p=(s()-.5)*.5*l,x=c+f*l+p;b=Math.max(0,Math.round(a==="both"?x-m:x))}const g=a==="style"?b:a==="both"?m+b:m;return{rank:d.rank,time:u,timePts:m,style:b,total:g}});return{player:{time:n,timePts:o,style:t,total:c},bots:h}}const Ct={halfWidth:55,meshHalfWidth:110},_n={axisY:19.8,rIn0:9.8,rInK:.05,rOut0:12.9,rOutK:.035,flare:1.8,flareA:26,lift:1};function Wu(r,e){const t=_e(e,-r.halfL,r.halfL)/r.sc,n=Math.max(0,(Math.abs(t)-_n.flareA)/(50-_n.flareA));return{rIn:(_n.rIn0+_n.rInK*t)*r.sc,rOut:(_n.rOut0+_n.rOutK*t+_n.flare*n*n)*r.sc}}function to(r,e,t){const n=Math.sin(r*127.1+e*311.7+t*74.7)*43758.5453;return n-Math.floor(n)-.5}class ju{constructor(e,t=tr.utah,n="race"){this.seed=e>>>0,this.theme=t,this.format=n,this.length=Vu(n).length;const i=n==="bigair"||n==="halfpipe",s=di(this.seed);this.ph=Array.from({length:8},()=>s()*Math.PI*2),this.jumps=[];let a=170+s()*80;if(n==="bigair")this.jumps.push({s:230,x:this.centerAt(230),w:30,big:!0});else if(!i)for(;a<this.length-220;)this.jumps.push({s:a,x:this.centerAt(a)+(s()-.5)*36,w:15+s()*6}),a+=190+s()*150;for(this.drops=[],a=320+s()*160;!i&&a<this.length-300;)this.jumps.some(A=>Math.abs(A.s-a)<60)||this.drops.push({s:a,h:(4+s()*6)*t.cliffMul}),a+=380+s()*260;const o=700+s()*600;!i&&o<this.length-300&&!this.jumps.some(A=>Math.abs(A.s-o)<80)&&this.drops.push({s:o,h:(12+s()*5)*Math.max(.7,t.cliffMul)}),this.crevices=[];for(let A=0;A<(i?0:4);A++){const P=250+s()*(this.length-500);this.jumps.some(I=>Math.abs(I.s-P)<50)||this.crevices.push({s:P,x:this.centerAt(P)+(s()-.5)*70,w:14+s()*12,d:2.5+s()*2})}this.bridges=[];let c=340+s()*160;for(;!i&&c<this.length-320;)!this.jumps.some(P=>Math.abs(P.s-c)<80)&&!this.drops.some(P=>Math.abs(P.s-c)<90)?(this.bridges.push({s:c,h:6+s()*2.5,gapX:this.centerAt(c)+(s()-.5)*42,gapW:12+s()*4,len:21,lipH:2.2}),c+=420+s()*260):c+=70+s()*40;this.spines=[];for(let A=0;A<(i?0:2);A++){const P=420+s()*700;P>this.length-340||this.spines.push({s0:P,s1:P+220+s()*200,xOff:(s()<.5?-1:1)*(10+s()*18),h:3.2+s()*2.4,w:7+s()*4})}this.pipes=[],n==="halfpipe"&&this.pipes.push({s0:140,s1:this.length-200,off:0,w:14,d:7.4});for(let A=0;A<24&&this.pipes.length===0&&!i;A++){const P=380+s()*(this.length-800),I=P+80+s()*35;!this.jumps.some(O=>O.s>P-35&&O.s<I+45)&&!this.drops.some(O=>O.s>P-35&&O.s<I+45)&&!this.bridges.some(O=>O.s>P-55&&O.s<I+60)&&!this.spines.some(O=>P<O.s1+30&&I>O.s0-30)&&this.pipes.push({s0:P,s1:I,off:(s()-.5)*12,w:13+s()*2,d:6.8+s()*1.2})}this.ledges=[];for(let A=0;A<14&&this.ledges.length<2&&!i;A++){const P=300+s()*(this.length-700),I=P+100+s()*60;!this.jumps.some(O=>O.s>P-30&&O.s<I+30)&&!this.bridges.some(O=>O.s>P-55&&O.s<I+55)&&!this.pipes.some(O=>P<O.s1+50&&I>O.s0-50)&&!this.ledges.some(O=>P<O.s1+80&&I>O.s0-80)&&this.ledges.push({s0:P,s1:I,side:s()<.5?-1:1,h:(3.5+s()*2.5)*Math.max(.6,t.cliffMul),uFace:.34+s()*.2})}this.obstacles=[];const l=[],h=[],d=(A,P,I)=>{const N=.8+s()*.9,O=-P;l.push({x:A,z:O,sc:N,rot:s()*Math.PI*2}),I&&this.obstacles.push({x:A,z:O,r:1.1*N,kind:"tree"})},f=(A,P,I)=>{const N=1.1+s()*1.6,O=-P;h.push({x:A,z:O,sc:N,rot:s()*Math.PI*2}),I&&this.obstacles.push({x:A,z:O,r:1.3*N,kind:"rock"})},u=A=>this.bridges.some(P=>Math.abs(P.s-A)<P.len+12),m=A=>this.jumps.some(P=>Math.abs(P.s-A)<(P.big?150:50)),b=t.treeMul,g=_e(11/Math.max(.05,b),6,200);for(const A of[-1,1]){let P=70+s()*8;for(;P<this.length+60;){const N=.94+vn(P*.01+A*3.3,this.seed+5)*.08+s()*.08;d(this.centerAt(P)+A*Ct.halfWidth*N,P,N<1),s()<.65&&d(this.centerAt(P)+A*Ct.halfWidth*(N+.1+s()*.1),P+3+s()*4,!1),P+=g*(.7+s()*.6)}}const p=A=>this.pipes.some(P=>A>P.s0-30&&A<P.s1+30),x=(A,P)=>this.pipes.some(I=>P>I.s0-30&&P<I.s1+30&&Math.abs(A-(this.centerAt(P)+I.off))<I.w*2.1),v=(A,P)=>this.ledges.some(I=>{if(P<I.s0-20||P>I.s1+20)return!1;const N=(A-this.centerAt(P))/Ct.halfWidth*I.side;return Math.abs(N-I.uFace)<.09});if(this.glades=[],n==="glade")for(const A of[-1,1])this.glades.push({s0:150,s1:this.length-170,side:A,depth:.9,pathPh:s()*Math.PI*2,pathFreq:.018+s()*.01});let _=b<.3||i||n==="glade"?this.length:220+s()*200;for(;_<this.length-260;)!u(_)&&!m(_)&&!p(_)?(this.glades.push({s0:_,s1:_+120+s()*140,side:s()<.5?-1:1,depth:.46+s()*.22,pathPh:s()*Math.PI*2,pathFreq:.03+s()*.02}),_+=340+s()*300):_+=80;for(const A of this.glades){const P=I=>{const N=(I-A.s0)*A.pathFreq+A.pathPh;return 1-A.depth*(.5+.3*Math.sin(N)+.17*Math.sin(N*2.7+1.3))};for(let I=A.s0;I<A.s1;I+=4.2){const N=P(I),O=.065+.02*Math.sin(I*.05+A.pathPh);for(let H=0;H<5;H++){const q=1.02-A.depth*s()*1.04;if(Math.abs(q-N)<O)continue;const V=this.centerAt(I)+A.side*Ct.halfWidth*q+(s()-.5)*3,Z=I+(s()-.5)*4.2;v(V,Z)||d(V,Z,q<1)}}}const C=i?0:Math.round(34*_e(b,.1,1.2));for(let A=0;A<C;A++){const P=150+s()*(this.length-280),I=this.centerAt(P)+(s()-.5)*Ct.halfWidth*1.1;m(P)||u(P)||x(I,P)||v(I,P)||d(I,P,!0)}const E=_e(Math.round(4*t.rockMul),2,8);for(let A=0;A<E;A++){const P=200+s()*(this.length-420);if(u(P)||m(P))continue;const I=s()<.5?-1:1,N=this.centerAt(P)+I*Ct.halfWidth*(.7+s()*.22),O=4+Math.floor(s()*5);for(let H=0;H<O;H++){const q=N+(s()-.5)*11,V=P+(s()-.5)*15;x(q,V)||v(q,V)||f(q,V,!0)}}const S=i?0:_e(Math.round(26*t.rockMul),8,55);for(let A=0;A<S;A++){const P=160+s()*(this.length-320),I=this.centerAt(P)+(s()-.5)*Ct.halfWidth*1.4;m(P)||u(P)||x(I,P)||v(I,P)||f(I,P,Math.abs(I-this.centerAt(P))<Ct.halfWidth)}this.logs=[];const w=i?0:7+Math.floor(s()*5);for(let A=0;A<w;A++){const P=180+s()*(this.length-360),I=this.centerAt(P)+(s()-.5)*Ct.halfWidth*1.15;if(m(P)||u(P)||x(I,P)||v(I,P))continue;const N=s()*Math.PI*2,O=.038+s()*.018;this.logs.push({x:I,z:-P,rot:N,sc:O,kind:"log_small"});for(const H of[-30,30])this.obstacles.push({x:I+Math.cos(N)*H*O,z:-P-Math.sin(N)*H*O,r:22*O,kind:"log"})}this.grindLogs=[];for(const A of this.drops){if(this.grindLogs.length>=2)break;if(A.h<3.5||A.h>10||A.s<320||A.s>this.length-320||u(A.s)||p(A.s))continue;const P=this.centerAt(A.s)+(s()<.5?-1:1)*(7+s()*13);if(v(P,A.s))continue;const I=(s()-.5)*.14,N=.05+s()*.012,O=100*N,H=A.s-2.5,q=this.heightAt(P,-H)+1.15;this.grindLogs.push({x:P,s0:H,ax:Math.sin(I),az:Math.cos(I),sc:N,len:O,topY:q,bumpH:.9})}if(this.boostGates=[],n==="bigair"){const A=this.jumps[0];for(const P of[150,110,70])this.boostGates.push({s:A.s-P,x:this.centerAt(A.s-P),w:2.2})}else if(n==="halfpipe"){const A=this.pipes[0];for(const P of[190,260,330])this.boostGates.push({s:P,x:this.centerAt(P)+A.off,w:2.2})}else if(n!=="glade"){let A=260+s()*120;for(;A<this.length-200;){const P=!m(A)&&!u(A)&&!p(A)&&!this.drops.some(N=>Math.abs(N.s-A)<50),I=this.centerAt(A)+(s()-.5)*16;P&&!v(I,A)?(this.boostGates.push({s:A,x:I,w:2.2}),A+=200+s()*140):A+=45}}const y=(A,P)=>this.boostGates.some(I=>Math.abs(P-I.s)<5&&Math.abs(A-I.x)<I.w+2);this.obstacles=this.obstacles.filter(A=>!y(A.x,-A.z));for(const A of[l,h])for(let P=A.length-1;P>=0;P--)y(A[P].x,-A[P].z)&&A.splice(P,1);for(let A=0,P=i?0:1+(s()<.55?1:0),I=0;A<P&&I<40;I++){const N=280+s()*(this.length-620),O=this.centerAt(N)+(s()-.5)*Ct.halfWidth*.8;if(m(N)||u(N)||x(O,N)||v(O,N))continue;const H=(s()-.5)*.4,q=.48+s()*.07,V=Math.sin(H),Z=Math.cos(H),re=50*q,ce=se=>this.heightAt(O+V*se,-N+Z*se),Ae=ce(re),Ve=ce(-re);let K=!0;for(let se=-4;se<=4&&K;se++){const te=se/5*re,Se=(Ae+Ve)/2+(Ae-Ve)/2*(te/re),Ee=ce(te)-Se;(Ee<-2.4||Ee>1.6)&&(K=!1)}if(!K)continue;A++,this.logs.push({x:O,z:-N,rot:H,sc:q,kind:"log_hollow"});const ee=(se,te)=>{const Se=te-N,Ee=se-O,Le=Ee*V-Se*Z,at=Ee*Z+Se*V;return Math.abs(Le)<re+3&&Math.abs(at)<16*q+2};this.obstacles=this.obstacles.filter(se=>se.kind==="log"||!ee(se.x,-se.z));for(const se of[l,h])for(let te=se.length-1;te>=0;te--)ee(se[te].x,-se[te].z)&&se.splice(te,1)}this.hollowTubes=this.logs.filter(A=>A.kind==="log_hollow").map(A=>{const P=Math.sin(A.rot),I=Math.cos(A.rot),N=50*A.sc,O=this.heightAt(A.x+P*N,A.z+I*N),H=this.heightAt(A.x-P*N,A.z-I*N);return A.pitch=Math.atan2(O-H,2*N),A.axY0=(O+H)/2+_n.lift,A.posY=A.axY0-_n.axisY*A.sc*Math.cos(A.pitch),{x:A.x,s0:-A.z,ax:P,az:I,sc:A.sc,halfL:N,axY0:A.axY0,axSlope:(O-H)/(2*N)}});const T=this.centerAt(4);this.apron={cx:T,lipS:4+Ps.lipDz,lipY:this.heightAt(T,-4)-Ps.lipDrop},this.obstacles.sort((A,P)=>-A.z- -P.z),this._treeXf=l,this._rockXf=h}centerAt(e){const t=_e(e,0,this.length);return 24*Math.sin(t*.0081+this.ph[0])+16*Math.sin(t*.0031+this.ph[1])}heightAt(e,t){const n=-t,i=_e(n,0,this.length);let s;n<0||n<=this.length?s=n:s=this.length+(n-this.length)*.12;let a=-.5*s+16*Math.sin(i*.011+this.ph[2])+9*Math.sin(i*.0047+this.ph[3]);const o=this.centerAt(n),c=(e-o)/Ct.halfWidth;a+=5*c*c;const l=Math.abs(c);if(l>.85){const u=l-.85;a+=130*(1-Math.exp(-u*u*.5)),a+=Rs(e*.006,i*.006,this.seed+91,3)*42*qe(.95,1.9,l)}const h=qe(25,90,n);a+=5.5*this.theme.roughMul*Rs(e*.017,n*.017,this.seed,3)*h;const d=qe(.25,.75,vn(n*.004+7.7,this.seed)*.5+.5);a+=1.3*this.theme.mogulMul*Rs(e*.085,n*.085,this.seed+31,2)*d*h;for(const u of this.jumps){const m=1-((e-u.x)/u.w)**2;if(m<=0)continue;if(u.big){const g=(n-(u.s-80))/60;g>0&&g<=1&&(a-=9*g*m);const p=(n-(u.s-20))/20;if(p>0&&p<=1)a+=(-9+16*p*p)*m;else if(n>u.s&&n<u.s+120){const x=(n-u.s)/120;a+=m*(2*(1-x)-7*Math.sin(Math.PI*x))}continue}const b=(n-(u.s-16))/16;b>0&&b<=1?a+=5.2*b*b*m:n>u.s&&n<u.s+34&&(a-=2.8*(1-(n-u.s)/34)*m)}const f=qe(.3,.7,vn(i*.0031+3.3,this.seed+12)*.5+.5);a+=.85*Math.sin(e*.34+i*.004+this.ph[5])*f*h;for(const u of this.drops)a-=u.h*qe(0,2.5,n-u.s);for(const u of this.bridges){const m=(n-u.s)/u.len;if(Math.abs(m)<1){const b=.5+.5*Math.cos(m*Math.PI),g=(e-u.gapX)/(u.gapW/2),p=Math.abs(g),x=p<1?Math.cos(g*Math.PI/2)**2:0,v=p>.92?u.lipH*qe(.92,1.12,p)*(p>1.12?Math.exp(-(((p-1.12)/1.3)**2)):1):0;a+=(u.h*(1-x)+v)*b}}for(const u of this.spines)if(n>u.s0-50&&n<u.s1+50){const m=qe(u.s0-40,u.s0,n)*(1-qe(u.s1,u.s1+40,n)),b=(e-(o+u.xOff))/u.w;a+=u.h*m*Math.exp(-b*b)}for(const u of this.pipes)if(n>u.s0-40&&n<u.s1+40){const m=qe(u.s0-35,u.s0+14,n)*(1-qe(u.s1-14,u.s1+35,n)),b=Math.abs((e-(o+u.off))/u.w);let g;if(b<=.4)g=-.6;else if(b<1){const p=(b-.4)/.6;g=-.6+p*p}else b<=1.35?g=.4:g=.4*(1-qe(1.35,2,b));a+=u.d*m*g}for(const u of this.ledges)if(n>u.s0-40&&n<u.s1+40){const m=qe(u.s0-30,u.s0+15,n)*(1-qe(u.s1-15,u.s1+30,n)),b=u.uFace+vn(n*.02,this.seed+7)*.05;a+=u.h*m*qe(b,b+.045,c*u.side)}for(const u of this.grindLogs){const m=n-(u.s0+1),b=e-u.x,g=(b*b+m*m)/10.6;g<4&&(a+=u.bumpH*Math.exp(-g))}for(const u of this.glades)if(n>u.s0-10&&n<u.s1+10){const m=c*u.side,b=qe(1-u.depth-.06,1-u.depth+.04,m)*(1-qe(1,1.1,m));if(b>0){const g=qe(u.s0-8,u.s0+14,n)*(1-qe(u.s1-14,u.s1+8,n));a+=1.15*b*g*Rs(e*.1,i*.1,this.seed+53,2)}}for(const u of this.crevices){const m=(n-u.s)/3.2,b=(e-u.x)/u.w;Math.abs(m)<3&&Math.abs(b)<1&&(a-=u.d*Math.exp(-m*m)*(1-b*b))}if(this.hollowTubes)for(const u of this.hollowTubes){const m=n-u.s0,b=e-u.x,g=b*u.ax-m*u.az,p=Math.abs(g);if(p>u.halfL+5)continue;const x=Math.abs(b*u.az+m*u.ax),{rOut:v}=Wu(u,g);if(x>v+1)continue;const _=u.axY0-_n.lift+_e(g,-u.halfL,u.halfL)*u.axSlope;if(_<=a)continue;const C=(1-qe(u.halfL,u.halfL+5,p))*(1-qe(v-1.5,v+1,x));a+=(_-a)*C}if(this.apron){const u=this.apron,m=n-u.lipS;m>0&&m<Ps.blend&&Math.abs(e-u.cx)<Ps.halfW&&(a=Math.max(a,mt(u.lipY,a,qe(0,1,m/Ps.blend))))}return a}pipeAt(e,t){for(const n of this.pipes){if(t<n.s0-35||t>n.s1+35)continue;const i=qe(n.s0-35,n.s0+14,t)*(1-qe(n.s1-14,n.s1+35,t));if(!(i<.55))return{q:(e-(this.centerAt(t)+n.off))/n.w,env:i,p:n,lipQ:.97}}for(const n of this.bridges){const i=(t-n.s)/n.len;if(Math.abs(i)>=1)continue;const s=.5+.5*Math.cos(i*Math.PI);if(!(s<.3))return{q:(e-n.gapX)/(n.gapW/2),env:s,p:n,lipQ:.8}}return null}groundAt(e,t){const n=this.heightAt(e,t);return this.surface?Math.max(n,this.surface(e,t)):n}boostGateAt(e,t,n){for(const i of this.boostGates)if(i.s>t&&i.s<=n&&Math.abs(e-i.x)<i.w)return i;return null}launchCapAt(e){for(const t of this.jumps)if(t.big&&Math.abs(e-t.s)<25)return 15;return 9}groundNormalAt(e,t,n=new L){const s=this.groundAt(e+.6,t)-this.groundAt(e-.6,t),a=this.groundAt(e,t+.6)-this.groundAt(e,t-.6);return n.set(-s,2*.6,-a).normalize()}grindAt(e,t){for(const n of this.grindLogs){const i=t-n.s0,s=e-n.x,a=i*n.az+s*n.ax,o=s*n.az-i*n.ax;if(!(a<0||a>n.len||Math.abs(o)>.8))return{along:a,lat:o,len:n.len,topY:n.topY,gx:n.x,gs0:n.s0,ax:n.ax,az:n.az,px:n.x+n.ax*a,pz:-(n.s0+n.az*a),yaw:Math.atan2(n.ax,n.az)}}return null}nearGrindEntry(e,t){for(const n of this.grindLogs){const i=t-n.s0,s=e-n.x,a=i*n.az+s*n.ax;if(!(a<-9||a>1.5)&&Math.abs(s*n.az-i*n.ax)<2.5)return!0}return!1}ledgeWallsAt(e){const t=[];for(const n of this.ledges){if(e<n.s0-30||e>n.s1+30||qe(n.s0-30,n.s0+15,e)*(1-qe(n.s1-15,n.s1+30,e))*n.h<1.2)continue;const s=n.uFace+vn(e*.02,this.seed+7)*.05;t.push({x:this.centerAt(e)+n.side*s*Ct.halfWidth,side:n.side})}return t}normalAt(e,t,n=new L){const s=this.heightAt(e+.8,t)-this.heightAt(e-.8,t),a=this.heightAt(e,t+.8)-this.heightAt(e,t-.8);return n.set(-s/(2*.8),1,-a/(2*.8)).normalize()}obstaclesNear(e,t){return this.obstacles.filter(n=>-n.z>=e&&-n.z<=t)}build(e){this._buildGround(e),this._buildInstances(e),this._buildGatesAndFinish(e)}_buildGround(e){const t=new Mt({vertexColors:!0});t.onBeforeCompile=b=>{b.vertexShader=b.vertexShader.replace("#include <common>",`varying vec3 vWPos;
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
          #include <dithering_fragment>`)};const n=1.7,i=6,s=74,a=235,o=13,c=[];for(let b=-a;b<-110;b+=o)c.push(b);for(let b=-110;b<-s;b+=i)c.push(b);for(let b=-s;b<=s;b+=n)c.push(b);for(let b=s+i;b<=Ct.meshHalfWidth;b+=i)c.push(b);for(let b=Ct.meshHalfWidth+o;b<=a;b+=o)c.push(b);const l=102,h=Math.round(l/n),d=new he(this.theme.snow),f=new he(this.theme.ice),u=new he(this.theme.rock),m=new he;for(let b=-60;b<this.length+180;b+=l){const g=this.centerAt(b+l/2),p=c.length,x=h+1,v=new Float32Array((p+2)*(x+2)),_=[c[0]-n,...c,c[p-1]+n],C=[];for(let I=-1;I<=x;I++)C.push(-(b+I*n*(l/(h*n))));for(let I=0;I<x+2;I++)for(let N=0;N<p+2;N++)v[I*(p+2)+N]=this.heightAt(_[N]+g,C[I]);const E=new Float32Array(p*x*3),S=new Float32Array(p*x*3),w=new Float32Array(p*x*3);let y=0;for(let I=0;I<x;I++)for(let N=0;N<p;N++){const O=c[N]+g,H=C[I+1],q=v[(I+1)*(p+2)+(N+1)];E[y*3]=O,E[y*3+1]=q,E[y*3+2]=H;const V=v[(I+1)*(p+2)+N],Z=v[(I+1)*(p+2)+(N+2)],re=v[I*(p+2)+(N+1)],ce=v[(I+2)*(p+2)+(N+1)],Ae=(Z-V)/(_[N+2]-_[N]),Ve=(ce-re)/(C[I+2]-C[I]),K=1/Math.hypot(Ae,1,Ve);S[y*3]=-Ae*K,S[y*3+1]=K,S[y*3+2]=-Ve*K;const ee=Math.hypot(Ae,Ve);m.copy(d),ee>.85?m.lerp(u,_e((ee-.85)/.9,0,1)):m.lerp(f,_e((ee-.45)/1.2,0,.35));const se=Rs(O*.21,-H*.21,this.seed+77,2)*.03;w[y*3]=_e(m.r+se,0,1),w[y*3+1]=_e(m.g+se,0,1),w[y*3+2]=_e(m.b+se*1.5,0,1),y++}const T=[];for(let I=0;I<x-1;I++)for(let N=0;N<p-1;N++){const O=I*p+N;T.push(O,O+1,O+p,O+1,O+p+1,O+p)}const A=new bt;A.setAttribute("position",new st(E,3)),A.setAttribute("normal",new st(S,3)),A.setAttribute("color",new st(w,3)),A.setIndex(T),A.computeBoundingSphere();const P=new et(A,t);P.frustumCulled=!0,P.receiveShadow=!0,e.add(P)}}_buildInstances(e){this._treeXf.length;const t=new Ce;new Ce;const n=new it,i=new L(0,1,0),s=new L,a=new ls(.16,.26,1.5,7);a.translate(0,.75,0);const c=gh([[1.75,2.6,1.9],[1.3,2.3,3.3],[.85,2.1,4.6]].map(([p,x,v])=>{const _=new Js(p,x,9);return _.translate(0,v,0),_})),l=gh([[1.15,.55,3],[.78,.5,4.35],[.42,.9,5.35]].map(([p,x,v])=>{const _=new Js(p,x,9);return _.translate(0,v,0),_})),h=new Mt({color:this.theme.trunk}),d=new Mt({color:this.theme.foliage}),f=new Mt({color:16054525}),u=this._treeXf.length,m=new Jt(a,h,u),b=new Jt(c,d,u),g=new Jt(l,f,u);this._treeXf.forEach((p,x)=>{const v=this.heightAt(p.x,p.z)-.15;n.setFromAxisAngle(i,p.rot),s.set(p.sc,p.sc,p.sc),t.compose(new L(p.x,v,p.z),n,s),m.setMatrixAt(x,t),b.setMatrixAt(x,t),g.setMatrixAt(x,t)}),m.castShadow=b.castShadow=!0,e.add(m,b,g),this._buildRocksAndFlags(e,t,n,i,s)}_buildRocksAndFlags(e,t,n,i,s){const a=new Mt({color:16054525}),o=new na(1.1,1);{const S=o.attributes.position;for(let w=0;w<S.count;w++){const y=to(S.getX(w),S.getY(w),S.getZ(w));S.setXYZ(w,S.getX(w)*(1+y*.22),S.getY(w)*(1+to(S.getY(w),S.getZ(w),S.getX(w))*.18),S.getZ(w)*(1+to(S.getZ(w),S.getX(w),S.getY(w))*.22))}o.computeVertexNormals()}o.translate(0,.55,0);const c=new na(.92,1);c.scale(1,.32,1),c.translate(0,1.18,0);const l=new Mt({color:this.theme.rock,flatShading:!0}),h=new Jt(o,l,this._rockXf.length),d=new Jt(c,a,this._rockXf.length);this._rockXf.forEach((S,w)=>{const y=this.heightAt(S.x,S.z)-.35;n.setFromAxisAngle(i,S.rot),s.set(S.sc,S.sc*(.7+w%3*.2),S.sc),t.compose(new L(S.x,y,S.z),n,s),h.setMatrixAt(w,t),d.setMatrixAt(w,t)}),h.castShadow=!0,e.add(h,d);const f=new it,u=new it;for(const S of this.logs){const w=Gn(S.kind,this.theme,S.sc);if(S.kind==="log_hollow")w.rotation.order="YXZ",w.rotation.set(-S.pitch,S.rot,0),w.position.set(S.x,S.posY,S.z),w.name="hollow_log";else{w.position.set(S.x,this.heightAt(S.x,S.z)-.28,S.z);const y=this.normalAt(S.x,S.z);f.setFromUnitVectors(i,y),u.setFromAxisAngle(i,S.rot),w.quaternion.copy(f).multiply(u)}w.traverse(y=>{y.isMesh&&(y.castShadow=!0)}),e.add(w)}for(const S of this.grindLogs){const w=Gn("log_small",this.theme,S.sc),y=S.x+S.ax*(S.len/2-.5),T=-(S.s0+S.az*(S.len/2-.5));w.position.set(y,S.topY-20.6*S.sc,T),w.rotation.y=Math.atan2(S.az,S.ax),w.traverse(A=>{A.isMesh&&(A.castShadow=!0)}),e.add(w)}const m=new ls(.05,.05,2.2,4);m.translate(0,1.1,0);const b=new hn(.7,.45);b.translate(.4,1.8,0);const g=[];for(let S=90;S<this.length;S+=90)g.push(S);const p=new Mt({color:2896960}),x=new Mt({color:14042415,side:Wt}),v=new Mt({color:3108822,side:Wt}),_=new Jt(m,p,g.length*2),C=new Jt(b,x,g.length),E=new Jt(b,v,g.length);if(g.forEach((S,w)=>{const y=this.centerAt(S);for(const[T,A]of[[0,-1],[1,1]]){const P=y+A*17,I=-S;t.compose(new L(P,this.heightAt(P,I),I),n.identity(),s.set(1,1,1)),_.setMatrixAt(w*2+T,t),(A<0?C:E).setMatrixAt(w,t)}}),e.add(_,C,E),this.boostGates.length){const S=this.boostGates,w=new L(0,1,0),y=new he(this.theme.eventB??16111470),T=new Mt({color:y,emissive:y.clone().multiplyScalar(.4),side:Wt}),A=new Jt(m,p,S.length*2),P=new Jt(b,T,S.length*2),I=new hn(1,1);I.rotateX(-Math.PI/2);const N=new Rt({color:y,transparent:!0,opacity:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),O=new Jt(I,N,S.length);S.forEach((H,q)=>{for(const[V,Z]of[[0,-1],[1,1]]){const re=H.x+Z*H.w,ce=-H.s,Ae=new L(re,this.heightAt(re,ce),ce);t.compose(Ae,n.identity(),s.set(1,1,1)),A.setMatrixAt(q*2+V,t),t.compose(Ae,n.setFromAxisAngle(w,Z<0?Math.PI:0),s.set(1,1,1)),P.setMatrixAt(q*2+V,t)}n.setFromUnitVectors(w,this.normalAt(H.x,-H.s)),t.compose(new L(H.x,this.heightAt(H.x,-H.s)+.05,-H.s),n,s.set(H.w*2-.4,1,1.2)),O.setMatrixAt(q,t)}),e.add(A,P,O)}}_buildGatesAndFinish(e){this.gateLanes=[];const t=this.centerAt(4);for(let g=0;g<5;g++)this.gateLanes.push({x:t+(g-2)*6.5,z:-4});const n=this.length,i=this.centerAt(n),s=Gn("finish_line",this.theme);s.scale.set(.34,.22,.22);const a=Math.min(this.heightAt(i-17,-n),this.heightAt(i+17,-n));s.position.set(i,a-.25,-n),e.add(s),this.finishSigns=[];const o=(g,p,x)=>{const v=document.createElement("canvas");v.width=g,v.height=p;const _=v.getContext("2d");x(_,g,p);const C=new la(v);return C.colorSpace=xt,C},c="#"+new he(this.theme.eventA??14042415).getHexString(),l="#"+new he(this.theme.eventB??16111470).getHexString(),h=new Rt({map:o(1024,160,(g,p,x)=>{g.fillStyle="#0a0e16",g.fillRect(0,0,p,x);for(let v=0;v<p;v+=32)for(const _ of[0,x-20])g.fillStyle=v/32%2?"#e8edf4":"#12161e",g.fillRect(v,_,32,20);g.font="bold 96px sans-serif",g.textAlign="center",g.textBaseline="middle",g.fillStyle=l,g.fillText("FINISH",p/2,x/2+4)})}),d=new et(new hn(17.5,2.9),h);d.position.set(i,a+7.35,-n+2),e.add(d),this.finishSigns.push(h);for(const g of[-1,1]){const p=new Rt({map:o(128,640,(v,_,C)=>{v.fillStyle="#0a0e16",v.fillRect(0,0,_,C),v.strokeStyle=c,v.lineWidth=10,v.strokeRect(8,8,_-16,C-16),v.font="bold 78px sans-serif",v.textAlign="center",v.textBaseline="middle",v.fillStyle=l;const E="FINISH";for(let S=0;S<E.length;S++)v.fillText(E[S],_/2,70+S*((C-130)/(E.length-1)))})}),x=new et(new hn(1.7,8.2),p);x.position.set(i+g*13.9,a+5.4,-n+1.6),e.add(x),this.finishSigns.push(p)}const f=new Mt({color:2304051}),u=(g,p,x,v,_)=>{let C=-1/0,E=1/0;for(const[S,w]of[[-v,-_],[v,-_],[-v,_],[v,_]]){const y=this.heightAt(p+S,x+w);y>C&&(C=y),y<E&&(E=y)}if(g.position.set(p,C-.15,x),C-E>.8){const S=C-E+1.2,w=new et(new Xt(v*1.9,S,_*1.9),f);w.position.set(p,C-.15-S/2+.1,x),e.add(w)}e.add(g)},m=Gn("podium",this.theme);m.scale.setScalar(.06),m.rotation.y=.6,u(m,i-20,-n-14,3.2,2.2);for(const g of[-1,1]){const p=Gn("bleachers",this.theme);p.scale.set(.24,.2,.13),p.rotation.y=-g*(Math.PI/2),u(p,i+g*27,-n+20,6.4,12.2)}for(const[g,p,x]of[[i-32,-n-4,.13],[i+30,-n-10,.15]]){const v=Gn("barrier",this.theme);v.scale.setScalar(x),u(v,g,p,50*x*.9,50*x*.9)}const b=Gn("ski_lift",this.theme);b.scale.setScalar(.16),b.rotation.y=.35,u(b,i+16,-n-40,8,8)}}function mx(r){const e=new Map,t=new Map,n=r.clone();return Xu(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Xu(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Xu(r.children[n],e.children[n],t)}const Ws=.0105,Ur={boarder:{clusters:[["#121214","pants",!0],["#403f2f","jacket",!0],["#6e5036","hair",!0],["#2f2a29","hair",!1],["#593e26","hair",!1],["#8d684e","hair",!1],["#d49274","skin",!0],["#421c95","accessory",!0],["#dacfc5","jacket2",!0],["#2a66db","accessory",!1]]},skier:{clusters:[["#1b191b","accessory",!0],["#222023","pants",!0],["#b42f2b","jacket",!0],["#151214","pants",!1],["#8b211f","jacket",!1],["#342e2f","hat",!0],["#391b1c","hair",!0],["#602423","jacket",!1],["#85685c","skin",!1],["#c6a495","skin",!0]]},tuber:{clusters:[["#1f2736","jacket2",!0],["#1a1a1f","pants",!1],["#131317","pants",!1],["#232125","pants",!0],["#29303e","jacket2",!1],["#ed6025","jacket",!0],["#efae94","skin",!0],["#983a11","jacket",!1],["#583b31","hair",!0],["#a0786a","skin",!1]]}},gx={ski:"skier",board:"boarder",sled:"tuber"},Xi={jacket2:[16053492,1777188,16767306,8052952,15764526,8959976,2830138,14696574],pants:[1447964,2830136,2372679,3945512,4858928,3357230,1976868],hat:[14042415,16098851,4114027,3718648,14696574,16053492,1777188],accessory:[16098851,3718648,14696574,4114027,12595240,16053492,8015824],skin:[15911339,15382672,14394747,13209443,11104325,9065779,7029286,5518109],hair:[2760728,4534296,7031332,10516014,13214812,14272928,9079440,1842210]},sc=r=>[r>>16&255,r>>8&255,r&255],Eh=r=>parseInt(r.slice(1),16),Fc={},Rh=new Map;async function bx(){const r=new Uc;r.setMeshoptDecoder(kc),await Promise.all(Object.keys(Ur).map(async e=>{const[t,n]=await Promise.all([r.loadAsync(`models/${e}.glb`),new Promise((m,b)=>{const g=new Image;g.onload=()=>m(g),g.onerror=b,g.src=`models/${e}-base.jpg`})]),i=1024,s=document.createElement("canvas");s.width=s.height=i;const a=s.getContext("2d",{willReadFrequently:!0});a.drawImage(n,0,0,i,i);const o=a.getImageData(0,0,i,i).data,c=Ur[e].clusters.map(([m])=>sc(Eh(m))),l=i*i,h=new Uint8Array(l),d=new Uint8Array(l);for(let m=0;m<l;m++){const b=o[m*4],g=o[m*4+1],p=o[m*4+2];let x=0,v=1e9;for(let _=0;_<c.length;_++){const C=c[_],E=(b-C[0])**2+(g-C[1])**2+(p-C[2])**2;E<v&&(v=E,x=_)}h[m]=x,d[m]=(b+g+p)/3}const f={};for(const[m,b,g]of Ur[e].clusters)if(g){const[p,x,v]=sc(Eh(m));f[b]=(p+x+v)/3}const u=Ur[e].clusters.map(([,m])=>({role:m,mainLum:f[m]??128}));Fc[e]={gltf:t,classIdx:h,pixLum:d,size:i,roles:u}}))}function _x(r,e){const t=di(e>>>0),n=i=>i[Math.floor(t()*i.length)];return{jacket:r,jacket2:n(Xi.jacket2),pants:n(Xi.pants),hat:n(Xi.hat),accessory:n(Xi.accessory),skin:n(Xi.skin),hair:n(Xi.hair)}}function xx(r,e){const t=r+"|"+Object.values(e).join(",");let n=Rh.get(t);if(n)return n;const{classIdx:i,pixLum:s,size:a,roles:o}=Fc[r],c=o.map(({role:m,mainLum:b})=>({rgb:m==="keep"?null:sc(e[m]??8947848),inv:1/Math.max(8,b)})),l=document.createElement("canvas");l.width=l.height=a;const h=l.getContext("2d"),d=h.createImageData(a,a),f=d.data,u=a*a;for(let m=0;m<u;m++){const b=c[i[m]],g=Math.min(1.85,(s[m]+3)*b.inv);f[m*4]=Math.min(255,b.rgb[0]*g),f[m*4+1]=Math.min(255,b.rgb[1]*g),f[m*4+2]=Math.min(255,b.rgb[2]*g),f[m*4+3]=255}return h.putImageData(d,0,0),n=new la(l),n.flipY=!0,n.colorSpace=xt,Rh.set(t,n),n}function vx(r,e,t){const n=gx[r]??"boarder",i=Fc[n],s=mx(i.gltf.scene),a=_x(e,t);let o=null;s.traverse(C=>{C.isSkinnedMesh&&(o=C)}),o.material=new Mt({map:xx(n,a)}),o.castShadow=!0,o.frustumCulled=!1,s.updateMatrixWorld(!0);const c={};s.traverse(C=>{C.isBone&&(c[C.name]=C)});const l=new it;s.getWorldQuaternion(l);const h=l.clone().invert(),d={x:new L(-1,0,0),y:new L(0,1,0),z:new L(0,0,-1)},f={},u=new it;for(const[C,E]of Object.entries(c)){E.getWorldQuaternion(u);const w=h.clone().multiply(u).clone().invert();f[C]={localQ:E.quaternion.clone(),localPos:E.position.clone(),axes:{x:d.x.clone().applyQuaternion(w).normalize(),y:d.y.clone().applyQuaternion(w).normalize(),z:d.z.clone().applyQuaternion(w).normalize()},worldRelInv:w}}const m=C=>{const E=c[`Left${C}`],S=c[`Right${C}`],w=new L;return E.getWorldPosition(w),-w.x>=0?{1:E,[-1]:S}:{1:S,[-1]:E}},b=m("Arm"),g=m("ForeArm"),p=m("Hand"),x=m("UpLeg"),v=m("Leg"),_=m("Foot");return{root:s,bones:c,rest:f,mesh:o,palette:a,sided:{arms:b,forearms:g,hands:p,feet:_,legs:v,upLegs:x}}}const Mx=.41,yx=.39,Ch=new Map,Ph=new Map;function Ki(r){let e=Ph.get(r);return e||(e=new Mt({color:r}),Ph.set(r,e)),e}function Mn(r,e){let t=Ch.get(r);return t||(t=e(),Ch.set(r,t)),t}function On(r,e,t,n=4,i=12){return Mn(`cap:${r}`,()=>new Rc(e,t,n,i))}function Sx(r,e,t=16){return Mn(`lathe:${r}`,()=>{const n=new ha(e.map(([i,s])=>new me(i,s)),t);return n.computeVertexNormals(),n})}function Tx(r,e,t=12,n=10){return Mn(`sph:${r}`,()=>new Zs(e,t,n))}const Et=(r,e)=>new et(r,e);function Ax(r){const e=new vt,t=Ki(r.deck),n=Ki(r.accent),i=Ki(2895928),s=Ki(1316637);if(r.type==="ski")for(const a of[-.175,.175]){const o=Et(On("skibase",.075,1.74),s);o.rotation.x=Math.PI/2,o.scale.set(1,1,.16),o.position.set(a,.008,.05);const c=Et(On("ski",.068,1.72),t);c.rotation.x=Math.PI/2,c.scale.set(1,1,.22),c.position.set(a,.024,.05);const l=Et(On("skitip",.062,.18),n);l.rotation.x=Math.PI/2-.55,l.scale.set(.95,1,.3),l.position.set(a,.078,-.94);const h=Et(Mn("bind",()=>new Xt(.13,.08,.36)),i);h.position.set(a,.05,.05),e.add(o,c,l,h)}else if(r.type==="board"){const a=Et(On("boardbase",.205,1.32),s);a.rotation.x=Math.PI/2,a.scale.set(1,1,.085),a.position.y=.02;const o=Et(On("board",.19,1.3),t);o.rotation.x=Math.PI/2,o.scale.set(1,1,.115),o.position.y=.035;const c=Et(On("bstripe",.125,1.14),n);c.rotation.x=Math.PI/2,c.scale.set(1,1,.12),c.position.y=.048,e.add(a,o,c);for(const[l,h]of[[-.35,.28],[.35,-.08]]){const d=Et(Mn("bbind",()=>new Xt(.17,.05,.33)),i);d.position.set(0,.065,l),d.rotation.y=h,e.add(d)}}else if(r.id==="sled-saucer"){const a=Et(Sx("saucer",[[0,.04],[.3,.05],[.55,.09],[.7,.17],[.74,.24]],18),t),o=Et(Mn("srim",()=>new Pc(.72,.045,8,18)),n);o.rotation.x=Math.PI/2,o.position.y=.24;const c=Et(Tx("shandle",.05),n);c.position.set(-.5,.16,0);const l=c.clone();l.position.x=.5,e.add(a,o,c,l)}else{const a=Et(Mn("hull",()=>new Xt(.5,.1,1.3)),t);a.position.set(0,.17,.1);const o=Et(On("snose",.24,.42),t);o.rotation.x=Math.PI/2,o.scale.set(1,1,.28),o.position.set(0,.2,-.62);const c=Et(On("slip",.06,.4),n);c.rotation.z=Math.PI/2,c.scale.set(1,.8,.8),c.position.set(0,.33,-.8),e.add(a,o,c);for(const l of[-.21,.21]){const h=Et(Mn("runner",()=>new Xt(.05,.1,1.5)),n);h.position.set(l,.06,0),e.add(h)}}return e}function ia(r,e){const t=new vt,n=new vt;t.add(n);const i=r.type==="sled",s=r.type==="board",a=Ax(r);s&&(a.position.y=.07),a.rotation.order="YXZ",n.add(a);let o=e>>>0;for(const w of r.id)o=o*31+w.charCodeAt(0)>>>0;const c=vx(r.type,e,o),l=new vt;l.rotation.y=Math.PI,l.scale.setScalar(Ws),l.add(c.root),n.add(l);const h={x:new L(-1,0,0),y:new L(0,1,0),z:new L(0,0,-1)},d=w=>{const y=w.clone().invert();return{x:h.x.clone().applyQuaternion(y).normalize(),y:h.y.clone().applyQuaternion(y).normalize(),z:h.z.clone().applyQuaternion(y).normalize()}},f={joints:{},char:c},u=(w,y,T,A=null)=>{y&&(f.joints[w]={bone:y,restLocal:y.quaternion.clone(),axes:d(T),offsetQ:A})},m=w=>c.rest[w.name].worldRelInv.clone().invert(),b=c.bones;u("hips",b.Hips,m(b.Hips)),b.Spine&&u("spine",b.Spine,m(b.Spine)),b.Spine01&&u("spine1",b.Spine01,m(b.Spine01)),b.Spine02&&u("chest",b.Spine02,m(b.Spine02)),b.neck&&u("neck",b.neck,m(b.neck)),b.Head&&u("head",b.Head,m(b.Head));for(const w of[-1,1]){const y=c.sided.arms[w],T=c.sided.forearms[w],A=c.sided.hands[w],P=new it().setFromAxisAngle(c.rest[y.name].axes.z,-w*(Math.PI/2-.18)),I=m(y).multiply(P);u("arm"+w,y,I,P);const N=I.clone().multiply(T.quaternion);u("fore"+w,T,N);const O=N.clone().multiply(A.quaternion);u("hand"+w,A,O),u("upleg"+w,c.sided.upLegs[w],m(c.sided.upLegs[w])),u("leg"+w,c.sided.legs[w],m(c.sided.legs[w])),u("foot"+w,c.sided.feet[w],m(c.sided.feet[w]))}c.root.updateWorldMatrix(!0,!0),f.ik={};for(const w of[-1,1]){const y=c.sided.upLegs[w],T=c.sided.legs[w],A=c.sided.feet[w],P=y.getWorldPosition(new L),I=T.getWorldPosition(new L),N=A.getWorldPosition(new L);f.ik[w]={upleg:y,leg:T,foot:A,L1:P.distanceTo(I),L2:I.distanceTo(N),uplegRestQ:y.getWorldQuaternion(new it),legRestQ:T.getWorldQuaternion(new it),footRestQ:A.getWorldQuaternion(new it),dirThighRest:I.clone().sub(P).normalize(),dirCalfRest:N.clone().sub(I).normalize()}}const g=b.Hips.parent,p=new it;g.getWorldQuaternion(p);const x=new it;c.root.getWorldQuaternion(x),f.hipsParentInv=x.invert().multiply(p).invert(),f.hipsRestPos=b.Hips.position.clone();const v=()=>({rotation:{x:0,y:0,z:0},position:{x:0,y:0,z:0},userData:{}}),_={pelvis:v(),spine:v(),chest:v(),neck:v(),head:v(),legs:[{hip:v(),knee:v(),ankle:v(),index:0,side:-1},{hip:v(),knee:v(),ankle:v(),index:1,side:1}],arms:[{shoulder:v(),elbow:v(),wrist:v(),side:-1},{shoulder:v(),elbow:v(),wrist:v(),side:1}],poles:[]};if(r.type==="ski"){const w=Ki(3817548);f.poleStab=[];for(const y of[-1,1]){const T=c.sided.hands[y],A=new vt,P=m(T);A.quaternion.copy(P.invert()).multiply(new it().setFromAxisAngle(new L(0,1,0),-Math.PI)),A.scale.setScalar(1/Ws),T.add(A),f.poleStab.push({hand:T,holder:A});const I=new vt,N=Et(Mn("pole",()=>new ls(.011,.011,1.05,5)),w);N.position.y=-.38;const O=Et(Mn("basket",()=>new Js(.045,.03,8)),w);O.position.y=-.85;const H=Et(On("grip",.02,.06),Ki(r.accent));H.position.y=.05,I.add(N,O,H),A.add(I),_.poles.push(I)}}const C=new et(new ua(.8,16),new Rt({color:728108,transparent:!0,opacity:.13,depthWrite:!1}));C.rotation.x=-Math.PI/2,t.add(C);const E=i?null:s?{1:{pos:new L(0,.175,-.35),yaw:.28},[-1]:{pos:new L(0,.175,.35),yaw:-.08}}:{1:{pos:new L(.175,.2,.03),yaw:0},[-1]:{pos:new L(-.175,.2,.03),yaw:0}},S={root:t,rig:n,gearGroup:a,parts:_,shadow:C,char:c,ctl:f,footAnchors:E,isSled:i,isBoard:s,type:r.type,isSaucer:r.id==="sled-saucer",baseBodyYaw:s?-Math.PI/2:0,gearYawBase:0,_brakeSmooth:0,_brakeSide:1,_wasBraking:!1,_s:{tuck:0,brakeIn:0,steer:0,stumble:0,knocked:0,crouch:0,air:0,shift:0,twist:0,curl:0}};return ui(S,{idle:!0,t:0,dt:1}),S}const wx=1,no=new it,Lh=new L,kr=new L,io=new L,Is=new L,Fr=new L,Mi=new L,Ji=new L,Or=new L,so=new L,Ih=new Ce;new Ce;const Ut=new it,Un=new it,Dh=new it,an=new it,Nh=new L,Uh=new L,Ex=new it,kh=new L(-1,0,0),Rx=new L(0,1,0),Cx=new it().setFromAxisAngle(new L(0,1,0),-Math.PI);function Br(r,e,t){return so.crossVectors(e,t).normalize(),Ji.crossVectors(t,so).normalize(),Ih.makeBasis(Ji,t,so),r.setFromRotationMatrix(Ih)}function Kt(r,e,t,n,i){const s=r.joints[e];if(!s)return;const a=s.bone.quaternion.copy(s.restLocal);s.offsetQ&&a.multiply(s.offsetQ),n&&a.multiply(no.setFromAxisAngle(s.axes.y,n)),t&&a.multiply(no.setFromAxisAngle(s.axes.x,t)),i&&a.multiply(no.setFromAxisAngle(s.axes.z,i))}function ro(r){const{ctl:e,parts:t}=r;if(!e)return;const n=t.pelvis;Kt(e,"hips",n.rotation.x,n.rotation.y,n.rotation.z);const i=-n.position.x/Ws,s=(n.position.y-wx)/Ws,a=-n.position.z/Ws;Lh.set(i,s,a).applyQuaternion(e.hipsParentInv),e.joints.hips.bone.position.copy(e.hipsRestPos).add(Lh);const o=t.spine.rotation,c=t.chest.rotation;Kt(e,"spine",o.x*.6,o.y*.6,o.z*.6),Kt(e,"spine1",o.x*.4+c.x*.3,o.y*.4+c.y*.3,o.z*.4+c.z*.3),Kt(e,"chest",c.x*.7,c.y*.7,c.z*.7);const l=t.neck.rotation;Kt(e,"neck",l.x*.55,l.y*.55,l.z*.55),Kt(e,"head",l.x*.45,l.y*.45,l.z*.45);for(const h of t.arms){const d=h.side;Kt(e,"arm"+d,h.shoulder.rotation.x,h.shoulder.rotation.y,h.shoulder.rotation.z),Kt(e,"fore"+d,h.elbow.rotation.x,0,0),Kt(e,"hand"+d,h.wrist.rotation.x,0,0)}if(r.footAnchors){const h=r.gearGroup;r.rig.updateWorldMatrix(!0,!1),r.rig.getWorldQuaternion(an);const d=r.rigFold??0;if(d>.002){Fr.set(-1,0,0).applyQuaternion(an);const u=r.char.bones;for(const[m,b]of[[e.joints.hips.bone,.42],[u.Spine,.16],[u.Spine01,.16],[u.Spine02,.16],[u.neck,-.42],[u.Head,-.3]])m&&(m.parent.getWorldQuaternion(Ut),Un.setFromAxisAngle(Fr,d*b),m.quaternion.premultiply(Dh.copy(Ut).invert().multiply(Un).multiply(Ut)))}const f=(t.pelvis.rotation.y||0)*.55+h.rotation.y*.45;for(const u of[-1,1]){const m=e.ik[u],b=r.footAnchors[u];kr.copy(b.pos).applyQuaternion(h.quaternion).add(h.position),r.rig.localToWorld(kr),m.upleg.getWorldPosition(io),Is.subVectors(kr,io);const g=m.L1+m.L2,p=Math.min(Math.max(Is.length(),g*.3),g*.995);Is.normalize(),Fr.set(-Math.sin(f),0,-Math.cos(f)).applyQuaternion(an),Mi.crossVectors(Fr,Is),Mi.lengthSq()<1e-6&&Mi.set(-1,0,0).applyQuaternion(an),Mi.normalize();const x=Math.acos(Math.min(1,Math.max(-1,(m.L1*m.L1+p*p-m.L2*m.L2)/(2*m.L1*p)))),v=Is.applyAxisAngle(Mi,-x);Br(Ut,Mi,v),Or.copy(m.dirThighRest).applyQuaternion(an),Ji.copy(kh).applyQuaternion(an),Br(Un,Ji,Or);const _=Dh.copy(Ut).multiply(Un.invert()).multiply(an).multiply(m.uplegRestQ);m.upleg.parent.getWorldQuaternion(Ut),m.upleg.quaternion.copy(Ut.invert()).multiply(_),Nh.copy(io).addScaledVector(v,m.L1),Uh.subVectors(kr,Nh).normalize(),Br(Ut,Mi,Uh),Or.copy(m.dirCalfRest).applyQuaternion(an),Ji.copy(kh).applyQuaternion(an),Br(Un,Ji,Or);const C=Ex.copy(Ut).multiply(Un.invert()).multiply(an).multiply(m.legRestQ);m.leg.quaternion.copy(Ut.copy(_).invert()).multiply(C),Ut.setFromAxisAngle(Rx,b.yaw);const E=Un.copy(an).multiply(h.quaternion).multiply(Ut).multiply(m.footRestQ);m.foot.quaternion.copy(Ut.copy(C).invert()).multiply(E)}}else for(const h of t.legs){const d=h.side;Kt(e,"upleg"+d,h.hip.rotation.x,h.hip.rotation.y,h.hip.rotation.z),Kt(e,"leg"+d,h.knee.rotation.x,0,0),Kt(e,"foot"+d,h.ankle.rotation.x,h.ankle.rotation.y,h.ankle.rotation.z)}if(e.poleStab){r.rig.getWorldQuaternion(Un).multiply(Cx);for(const h of e.poleStab)h.hand.getWorldQuaternion(Ut),h.holder.quaternion.copy(Ut.invert()).multiply(Un)}if((r.mittDrag??0)>.05){const h=e.joints["hand-1"]?.bone;h&&(r.mittWorld||(r.mittWorld=new L),h.getWorldPosition(r.mittWorld))}}function ui(r,e={}){const{parts:t,isSled:n,isBoard:i}=r,s=e.t??0,a=e.dt??1/60,o=r._s,c=(M,U,G)=>M+(U-M)*(1-Math.exp(-a*G));o.tuck=c(o.tuck,e.tuck??0,5),o.brakeIn=c(o.brakeIn,e.brake??0,7),o.steer=c(o.steer,e.steer??0,6),o.stumble=c(o.stumble,e.stumble??0,6),o.knocked=c(o.knocked,e.knocked??0,9),o.crouch=c(o.crouch,e.crouch??0,10),o.air=c(o.air,e.airborne?1:0,6),o.shift=c(o.shift,e.shift??0,4.5),o.twist=c(o.twist,e.twist??0,8),o.curl=c(o.curl,e.curl??0,8);const l=o.tuck,h=o.steer,d=o.stumble,f=o.knocked,u=o.crouch,m=o.air,b=o.shift,g=o.twist,p=o.curl,x=o.brakeIn,v=!!e.airborne,_=!!e.idle,C=e.speedNorm??0,E=(M,U,G,X,Y)=>{let ae=M.userData._sv;ae||(ae=M.userData._sv={x:0,y:0,z:0,px:0,py:0,pz:0});const ie=U[0]==="p",le=U[1],De=ie?M.position[le]:M.rotation[U];if(a>.2){ae[U]=0,ie?M.position[le]=G:M.rotation[U]=G;return}const $=X*X*(G-De)-2*Y*X*ae[U];ae[U]+=$*a;const ge=De+ae[U]*a;ie?M.position[le]=ge:M.rotation[U]=ge},S=(M,U,G=13,X=.85)=>E(M,"x",U,G,X),w=(M,U,G=13,X=.85)=>E(M,"y",U,G,X),y=(M,U,G=13,X=.85)=>E(M,"z",U,G,X),T=(M,U,G=14,X=.9)=>E(M,"py",U,G,X),A=(M,U,G=9,X=.7)=>E(M,"pz",U,G,X),P=Math.max(-1,Math.min(1,e.longG??0)),I=e.jolt??0;r._nph===void 0&&(r._nph=Math.random()*20);const N=r._nph,O=_?.25:.5+C*.8+m*1.2,H=(Math.sin(s*1.13+N)+.6*Math.sin(s*2.71+N*2))*.035*O,q=(Math.sin(s*.97+N*3)+.5*Math.sin(s*2.23+N))*.03*O,V=d*Math.sin(s*11)*.32,Z=d*Math.sin(s*9+1.3)*.45,re=_?Math.sin(s*1.7)*.5+.5:0;if((e.brake??0)>0&&!r._wasBraking){const M=Math.random()<.5?-1:1;r._brakeSide=Math.abs(h)>.05?h<0?1:-1:M,r._edgeLean=Math.abs(h)>.05?h<0?1:-1:M}r._wasBraking=(e.brake??0)>0;const ce=r._brakeSmooth+=((_||v?0:x)-r._brakeSmooth)*Math.min(1,a*6),Ae=r._brakeSide*ce,Ve=n?0:ce*(r._edgeLean??1)*.42;if(y(r.rig,-h*(n?.28:i?.58:.42)*(1-l*.25)*(1-ce*.6)+Ve+V*.4+q*.4+f*r._brakeSide*1.35,6.5,.6),n)w(r.gearGroup,Ae*.25);else{w(r.gearGroup,r.gearYawBase+Ae*(i?1.57:1.45)+h*(i?.16:-.12),12,.8);const M=r.gearGroup.rotation.y,U=r.rig.rotation.z,G=(1-f)*(i?1:ce),X=-ce*(r._edgeLean??1)*(i?.22:.15),Y=i?-h*.14*(1-l*.25)*(1-ce*.6):0;y(r.gearGroup,(Y+X-U*Math.cos(M))*G,7,.6),S(r.gearGroup,U*Math.sin(M)*G,9,.7)}if(n&&r.isSaucer){T(t.pelvis,.58-f*.18),w(t.pelvis,Ae*.25);const M=.28+x*-.22+l*.18+V*.6+P*-.2+q*.3+f*.4;S(t.spine,M,8,.6),y(t.spine,-h*.2+H*.6,8,.6),S(t.chest,.1+l*.12+P*-.14+C*.08,8,.6),S(t.neck,-(M+.1)*.7+P*.2+C*.14,7,.5),y(t.neck,h*.16+H*.5,7,.5);for(const G of t.legs)S(G.hip,.3+re*.02+I*.14+q*.06,9,.6),y(G.hip,G.side*.14),S(G.knee,-2.25),S(G.ankle,.85),w(G.ankle,0),y(G.ankle,0);const U=Math.abs(h)*.3+x*.3;for(const G of t.arms)S(G.shoulder,-.6+x*.25+m*-.35+Z*.6+P*-.3+H*G.side*.6+f*.8,8,.5),y(G.shoulder,G.side*(-.22+I*.35+f*.9),8,.5),S(G.elbow,.4+U,9,.55),S(G.wrist,-.3,7,.45);ro(r);return}if(n){T(t.pelvis,.5-f*.1),w(t.pelvis,Ae*.25);const M=.14+x*-.25+l*.2+V*.6+P*-.2+q*.3+f*.4;S(t.spine,M,8,.6),y(t.spine,-h*.2+H*.6,8,.6),S(t.chest,.1+l*.15+P*-.14+C*.07,8,.6),S(t.neck,-(M+.1)*.7+P*.2+C*.12,7,.5),y(t.neck,h*.16+H*.5,7,.5);for(const G of t.legs)S(G.hip,1.5+re*.02+I*.12+q*.05,9,.6),S(G.knee,-.95),S(G.ankle,-.6),w(G.ankle,0);const U=Math.abs(h)*.3+x*.25;for(const G of t.arms)S(G.shoulder,-.85+x*.3+m*-.3+Z*.6+P*-.3+H*G.side*.6+f*.8,8,.5),y(G.shoulder,G.side*(-.18+I*.35+f*.9),8,.5),S(G.elbow,.5+U,9,.55),S(G.wrist,-.3,7,.45);ro(r);return}const K=i&&!_?Math.max(0,(h-.45)/.55)*(1-m)*(1-l)*(1-f):0;r.mittDrag=K;const se=(_?(i?.2:.14)+re*.03:(i?.26:.32)+Math.abs(h)*.28+K*.4+l*(i?.2:.5)+u*(i?.45:.6)+x*.25+f*.9)*(1-m)+((i?.55:.75)+u*.2+p*.5+Math.abs(g)*.25)*m,te=se*.8,Se=se*1.65,Ee=2*(Mx*Math.cos(te)+yx*Math.cos(Se-te));T(t.pelvis,Ee/2+.16+.05+(i?.03:0)-m*.12-f*.35),A(t.pelvis,-b*.11);const Le=r.baseBodyYaw+Ae*(i?.5:.8)+(i?Math.min(0,h)*.5:h*.42)*(1-l)+(i?-.5*l:0);w(t.pelvis,Le,7,.7),r.rigFold=l*(i?1.5:1.1)*(1-f);const Ge=(_?.05+re*.015:(i?.14:.06)+l*(i?.15:.1)-x*.22+f*.5+b*.22+(i?Math.min(0,h)*.25*(1-l):0))*(1-m)+(-.08+l*.2+p*.6)*m,dt=1-l*.8;S(t.spine,Ge*.45+V*.5+P*-.28*dt+q*.4,9,.65),y(t.spine,-h*.12+V*.3+H*.6,9,.65),w(t.spine,-Le*(i?.08:.25)+h*(i?.26:.18)+g*.35*m,9,.65),S(t.chest,Ge*.55+l*(i?.1:.35)+V*.5+P*-.22*dt,8.5,.6),y(t.chest,-h*.12+H*.5,8.5,.6),w(t.chest,-Le*(i?.14:.3)+h*(i?.22:.14)+g*.5*m,8.5,.6),S(t.neck,-(Ge+l*.35)*.75+P*.3,6.5,.48),y(t.neck,h*.38+H*.9,6.5,.48),w(t.neck,-Le*(i?.72:.45)-h*.2+g*.7*m,6.5,.48);const k=(M,U,G)=>M+(U-M)*G;r._plant||(r._plant={t:[0,0],prevSteer:0});const lt=r._plant,ze=.85;if(lt.t[0]=Math.max(0,lt.t[0]-a),lt.t[1]=Math.max(0,lt.t[1]-a),r.type==="ski"&&!_&&!v&&l<.4&&x<.3&&f<.2){const M=Math.abs(h)>.2&&Math.abs(lt.prevSteer)<=.2,U=Math.sign(h)!==Math.sign(lt.prevSteer)&&Math.abs(h)>.14;if(M||U){const G=h>0?1:0;lt.t[G]<=0&&(lt.t[G]=ze)}}lt.prevSteer=h;const Be=(M,U,G)=>{const X=Math.min(1,Math.max(0,(G-M)/(U-M)));return X*X*(3-2*X)},we=lt.t.map(M=>M>0?1-M/ze:-1),nt=we.map(M=>M<0||M>=.5?0:Math.sin(Math.PI*M*2)),Te=we.map(M=>M<0?0:Be(.28,.52,M)*(1-Be(.82,1,M))),D=we.map(M=>M<0?0:Be(0,.16,M)*(1-Be(.82,1,M)));r.rigFold=(r.rigFold??0)+Math.max(Te[0],Te[1])*.14;for(const M of t.arms){const U=M.side>0?1:0,G=M.side*h>0?Math.abs(h):0;let X,Y,ae,ie;if(f>.3)X=-1.2+Z,Y=M.side*1.2,ae=.4,ie=0;else if(_)X=.12,Y=M.side*.16,ae=.35+q*.3,ie=-.15;else if(i)X=k(.2+Z+ce*-.3+h*M.side*.25,-.72+Z*.5,l),Y=k(M.side*(.55+h*M.side*.3)+ce*M.side*.45,M.side*.15,l),ae=k(.5+G*.55+q*.35,.18,l),ie=M.side*h*.2,M.side<0&&K>0&&(X=k(X,.5,K),Y=k(Y,-1.45,K),ae=k(ae,.08,K));else{const le=nt[U],De=Te[U],$=D[U];X=k(.42+ce*-.35+Z+h*M.side*.18,-.82,l)+le*.95-De*.85,Y=k(M.side*(.3+ce*.5),M.side*.1,l)+$*M.side*.6,ae=k(.72+G*.5+q*.3,.15,l)-le*.55+De*.15,ie=k(.35-ce*.5,.05,l)-le*.85+De*.3}if(!_&&f<=.3){const le=1.15-Math.abs(g)*.85+d*.4,De=M.side<0?p*.9:p*.25,$=g*.55;X=X*(1-m)+(-.5+Z+De+Math.abs(g)*.3+g*M.side*.4)*m,Y=Y*(1-m)+(M.side*le+$)*m,ae=ae*(1-m)+(.55+De*.5+Math.abs(g)*.5)*m,ie=ie*(1-m)+-.2*m}S(M.shoulder,X+P*-.5+H*M.side*.7,8,.5),y(M.shoulder,Y+I*M.side*.4+q*M.side*.5,8,.5),S(M.elbow,ae,9,.55),S(M.wrist,ie+q*.4,7,.45)}for(const[M,U]of t.poles.entries()){let G=0;if(lt.t[M]>0){const ae=1-lt.t[M]/ze;ae<.26?G=-1.5*(ae/.26):ae<.72?G=-1.5+2.6*((ae-.26)/.46):G=1.1*(1-(ae-.72)/.28)}S(U,k(_?.55:1.15,2.1,l)-P*.3+G,4.5,.38),y(U,-(M===0?-1:1)*D[M]*.42,4.5,.38)}ro(r)}const Hn=[{id:"ski-powder",type:"ski",name:"Powder Rockets",deck:14826299,accent:1777190,suit:14042415},{id:"ski-glacier",type:"ski",name:"Glacier GS",deck:2385104,accent:16098851,suit:2381480},{id:"ski-birch",type:"ski",name:"Birch Classics",deck:7030055,accent:14042415,suit:4153416},{id:"ski-neon",type:"ski",name:"Neon Slalom",deck:3130460,accent:1316637,suit:2237482},{id:"board-midnight",type:"board",name:"Midnight Deck",deck:1842988,accent:3718648,suit:3159624},{id:"board-sunset",type:"board",name:"Sunset Camber",deck:15236898,accent:12595240,suit:9057368},{id:"board-split",type:"board",name:"Splitboard 9000",deck:9062600,accent:2873800,suit:5257856},{id:"board-mallow",type:"board",name:"Marshmallow",deck:14696574,accent:1777190,suit:3689108},{id:"sled-steel",type:"sled",name:"Steel Toboggan",deck:4608607,accent:15236898,suit:5267578},{id:"sled-luge",type:"sled",name:"Rocket Luge",deck:12595240,accent:16098851,suit:9183272},{id:"sled-wood",type:"sled",name:"Classic Wood Sled",deck:9067568,accent:3942420,suit:8004664},{id:"sled-saucer",type:"sled",name:"Ice Saucer",deck:2064288,accent:16098851,suit:2647418}],Px={ski:"Skis",board:"Snowboard",sled:"Sled"},qu="freshpow_save_v1",Lx=1e3,qi=[10,25,50,100,250];function Ix(){try{const r=localStorage.getItem(qu);if(r){const e=JSON.parse(r);if(typeof e.balance=="number"&&e.balance>=0)return e}}catch{}return{balance:Lx,gearId:"board-midnight",bet:25,name:"You"}}const gt=Ix();function ts(){try{localStorage.setItem(qu,JSON.stringify(gt))}catch{}}function Yu(){return gt.balance<qi[0]}function Ku(){gt.balance+=500,ts()}const Dx=.96,kn=r=>r.map(([e,t,n])=>({pos:e,p:t,mult:n})),Qi=[{id:"vermont",theme:"vermont",flag:"🍁",name:"Maple Ridge Classic",place:"Stowe Valley, Vermont",tag:"Hometown corduroy under the hardwoods",table:kn([[1,.2,2],[2,.2,1.4],[3,.2,.8],[4,.2,.5],[5,.2,.1]])},{id:"quebec",theme:"quebec",flag:"⚜️",name:"Coupe Cap Boréal",place:"Laurentides, Québec",tag:"Boreal spruce and boilerplate ice",table:kn([[1,.2,2.5],[2,.2,1.3],[3,.2,.6],[4,.2,.35],[5,.2,.05]])},{id:"colorado",theme:"colorado",flag:"🏔️",name:"Ironpeak Open",place:"Roaring Fork, Colorado",tag:"High-altitude bluebird racing",table:kn([[1,.15,3.2],[2,.2,1.4],[3,.2,.7],[4,.2,.3],[5,.25,0]])},{id:"utah",theme:"utah",flag:"🎿",name:"Powder Crown Invitational",place:"Little Cloud Canyon, Utah",tag:"The greatest snow on earth, allegedly",table:kn([[1,.12,4],[2,.18,1.5],[3,.2,.75],[4,.2,.3],[5,.3,0]])},{id:"bc",theme:"bc",flag:"🌲",name:"Ravenspire Backcountry Cup",place:"Coast Range, British Columbia",tag:"Cedar giants and coastal mist",table:kn([[1,.1,5],[2,.15,1.6],[3,.2,.85],[4,.25,.2],[5,.3,0]])},{id:"chile",theme:"chile",flag:"🌋",name:"Volcán Blanco Grand Prix",place:"Andes Centrales, Chile",tag:"Treeless, ruthless, above the clouds",table:kn([[1,.08,6.5],[2,.15,1.6],[3,.2,.65],[4,.25,.28],[5,.32,0]])},{id:"nz",theme:"nz",flag:"🥝",name:"Black Range Masters",place:"Southern Alps, New Zealand",tag:"Tussock, schist and southern speed",table:kn([[1,.06,8.4],[2,.14,1.8],[3,.2,.75],[4,.27,.2],[5,.33,0]])},{id:"swiss",theme:"swiss",flag:"🇨🇭",name:"Silberhorn Super-G",place:"Wallis, Switzerland",tag:"Glacier ice and world-tour prestige",table:kn([[1,.05,10],[2,.12,2],[3,.2,.82],[4,.28,.2],[5,.35,0]])},{id:"japan",theme:"japan",flag:"🏮",name:"Yukiakari Night Session",place:"Hokkaidō, Japan",tag:"Midnight powder under the lanterns — the big one",table:kn([[1,.04,12],[2,.1,2.4],[3,.18,1],[4,.3,.2],[5,.38,0]])}];for(const r of Qi){const e=r.table.reduce((n,i)=>n+i.p*i.mult,0),t=r.table.reduce((n,i)=>n+i.p,0);if(Math.abs(e-Dx)>1e-9||Math.abs(t-1)>1e-9)throw new Error(`Fresh Pow event ${r.id}: RTP ${e} / psum ${t} out of spec`)}function Fh(r){return r.table[0].mult}function Ju(r,e){return e.find(t=>t.pos===r).mult}function Nx(r,e,t){let n=r(),i=t[t.length-1].pos;for(const a of t){if(n<a.p){i=a.pos;break}n-=a.p}const s=t.map(a=>a.pos).filter(a=>a!==i);for(let a=s.length-1;a>0;a--){const o=Math.floor(r()*(a+1));[s[a],s[o]]=[s[o],s[a]]}return{playerPos:i,botPositions:s,bet:e,payout:Math.round(e*Ju(i,t)*100)/100}}const fa=()=>document.getElementById("ui"),Bn=r=>(Math.round(r*100)/100).toLocaleString();class Ux{constructor(e){this.cb=e,this.gearIndex=Math.max(0,Hn.findIndex(i=>i.id===gt.gearId)),this.bet=qi.includes(gt.bet)?gt.bet:qi[1],this.riders=[];const t=document.createElement("div");t.id="menu-ui",t.innerHTML=`
      <div class="menu-top">
        <div class="title-block">
          <h1>FRESH <span>POW</span></h1>
          <p>place your chips &middot; drop in</p>
        </div>
        <div class="panel balance-pill"><small>CHIPS</small><span class="amt" id="balance-amt"></span></div>
      </div>
      <div class="panel lobby">
        <h3 id="lobby-status">Finding riders&hellip;</h3>
        <ul id="lobby-list"></ul>
      </div>
      <div class="menu-bottom">
        <div class="panel gear-select">
          <button class="arrow" id="gear-prev" aria-label="previous ride">&#8249;</button>
          <div class="gear-info">
            <div class="gname" id="gear-name"></div>
            <div class="gtype" id="gear-type"></div>
          </div>
          <button class="arrow" id="gear-next" aria-label="next ride">&#8250;</button>
        </div>
        <div class="panel bet-row" id="bet-row"><span class="lbl">Bet</span></div>
        <button id="start-btn" disabled>Waiting&hellip;</button>
        <div class="panel paytable-hint">
          The event draw sets the prize table &mdash; top prizes up to <b>&times;12</b> &nbsp;&middot;&nbsp; 96% RTP
        </div>
      </div>`,fa().appendChild(t),this.el=t,t.querySelector("#gear-prev").addEventListener("click",()=>this._cycleGear(-1)),t.querySelector("#gear-next").addEventListener("click",()=>this._cycleGear(1));const n=t.querySelector("#bet-row");for(const i of qi){const s=document.createElement("button");s.className="chip",s.textContent=i,s.dataset.v=i,s.addEventListener("click",()=>{this.bet=i,gt.bet=i,this._refreshBets(),this.cb.onBetChange?.(i)}),n.appendChild(s)}this.startBtn=t.querySelector("#start-btn"),this.startBtn.addEventListener("click",()=>this.cb.onStart?.()),this._lobbyFull=!1,this._refreshGear(!1),this._refreshBets(),this.refreshBalance(),this.addRider({name:"You",color:16498468,me:!0})}_cycleGear(e){this.gearIndex=(this.gearIndex+e+Hn.length)%Hn.length,this._refreshGear(!0)}_refreshGear(e){const t=Hn[this.gearIndex];this.el.querySelector("#gear-name").textContent=t.name,this.el.querySelector("#gear-type").textContent=Px[t.type];const n=this.riders.find(i=>i.me);n&&(n.el.querySelector(".ride").textContent=t.name),e&&this.cb.onGearChange?.(t)}_refreshBets(){for(const e of this.el.querySelectorAll(".chip")){const t=Number(e.dataset.v);e.classList.toggle("sel",t===this.bet),e.disabled=t>gt.balance}if(this.bet>gt.balance){const e=qi.filter(t=>t<=gt.balance);if(e.length){this.bet=e[e.length-1],gt.bet=this.bet,this._refreshBets();return}}this._refreshStart()}refreshBalance(){this.el.querySelector("#balance-amt").textContent=Bn(gt.balance),this._refreshBets()}addRider({name:e,color:t,me:n=!1,gearName:i=null}){const s=document.createElement("li"),a=`#${t.toString(16).padStart(6,"0")}`;s.innerHTML=`<span class="dot" style="background:${a}"></span>
      <span class="who">${e}${n?" (you)":""}</span>
      <span class="ride">${i??""}</span>`,this.el.querySelector("#lobby-list").appendChild(s),this.riders.push({name:e,me:n,el:s}),n&&this._refreshGear(!1);const o=this.riders.length;this.el.querySelector("#lobby-status").textContent=o<5?`Riders ${o}/5 — waiting…`:"Race ready!",o>=5&&(this._lobbyFull=!0,this._refreshStart())}_refreshStart(){const e=gt.balance>=qi[0],t=this._lobbyFull&&e&&this.bet<=gt.balance;this.startBtn.disabled=!t,this.startBtn.textContent=this._lobbyFull?e?"Drop In":"No chips!":"Waiting…"}get gear(){return Hn[this.gearIndex]}destroy(){this.el.remove()}}class kx{constructor(e){this.format=e;const t=e&&e.scored!=="time",n=!!(e&&e.solo),i=document.createElement("div");i.id="race-ui",i.innerHTML=`
      <div id="countdown" class="hidden"></div>
      <div class="race-top">
        <div class="hud-l">
          <div class="panel" id="rank-box">${n?'<div class="pos solo">SOLO</div><div class="of">run</div>':'<div class="pos">–</div><div class="of">of 5</div>'}</div>
          <div class="panel" id="format-box">${e?e.short:"RACE"}</div>
          <div class="panel" id="clock-box"${e&&e.scored==="style"?' style="display:none"':""}><div class="clk">0:00.00</div><div class="unit">time</div></div>
          <div class="panel" id="mini-board"${n?' style="display:none"':""}></div>
        </div>
        <div class="hud-r">
          <div class="panel" id="speed-box"><div class="spd">0</div><div class="unit">km/h</div></div>
          <div class="panel" id="style-box"${t?"":' style="display:none"'}><div class="sty">0</div><div class="unit">style</div></div>
        </div>
      </div>
      <div class="panel" id="progress-wrap">
        <div id="progress-bar"><div id="progress-fill"></div></div>
        <div class="plabel">to finish</div>
      </div>
      <div id="trick-toast"></div>
      <div id="stumble-flash"></div>
      <div class="controls-hint" id="controls-hint"></div>`,fa().appendChild(i),this.el=i;const s=matchMedia("(pointer: coarse)").matches;i.querySelector("#controls-hint").textContent=s?"pull ⬅➡ carve · pull ⬆ + hold tuck · pull ⬇ + hold brake · swipe in air for tricks":"A/D carve · hold W tuck · hold S brake · tap WASD in air for tricks",setTimeout(()=>{const a=i.querySelector("#controls-hint");a&&(a.style.opacity="0")},9e3),this._toastTimer=null}countdown(e){const t=this.el.querySelector("#countdown");t.classList.remove("hidden"),t.textContent=e,t.style.animation="none",t.offsetWidth,t.style.animation="",e===""&&t.classList.add("hidden")}update({rank:e,speed:t,progress:n,board:i,style:s=0,solo:a=!1,clock:o=0}){this.el.querySelector("#clock-box .clk").textContent=ic(Math.max(0,o));const c=["st","nd","rd","th","th"][e-1]||"th";if(a||(this.el.querySelector("#rank-box .pos").innerHTML=`${e}<small>${c}</small>`),this.el.querySelector("#speed-box .spd").textContent=Math.round(t*3.6),this.el.querySelector("#style-box .sty").textContent=Math.round(s),this.el.querySelector("#progress-fill").style.width=`${Math.min(100,n*100).toFixed(1)}%`,i){const l=this.format&&this.format.scored!=="time";this.el.querySelector("#mini-board").innerHTML=i.map(h=>`<div class="row${h.me?" me":""}">
            <span class="dot" style="background:#${h.color.toString(16).padStart(6,"0")}"></span>
            <span class="nm">${h.name}</span>${l&&h.pts!=null?`<span class="pts">${Math.round(h.pts)}</span>`:""}${h.done?"🏁":""}</div>`).join("")}}trickToast(e,t=""){const n=this.el.querySelector("#trick-toast");n.innerHTML=`${e}${t?`<small>${t}</small>`:""}`,n.classList.add("show"),clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>n.classList.remove("show"),1400)}stumbleFlash(e){const t=this.el.querySelector("#stumble-flash");t.classList.add("show"),this.trickToast("OOF!",e),setTimeout(()=>t.classList.remove("show"),500)}destroy(){clearTimeout(this._toastTimer),this.el.remove()}}function Fx(r,e,t,n,i){const s=document.createElement("div");s.id="event-roller",s.innerHTML=`
    <div class="ev-card${Fh(e)>=6?" ev-hype":""}">
      <div class="ev-kicker">Tonight's Event</div>
      <div class="ev-window" id="ev-window"></div>
      <div class="ev-detail" id="ev-detail"></div>
    </div>`,fa().appendChild(s);const a=s.querySelector("#ev-window"),o=s.querySelector("#ev-detail"),c=s.querySelector(".ev-card");for(const m of r){const b=new Image;b.src=`events/${m.id}.jpg`}const l=m=>`
    <div class="ev-shot" style="background-image:url('events/${m.id}.jpg')">
      <div class="ev-shot-fade"></div>
      <div class="ev-name">${m.name}</div>
    </div>
    <div class="ev-place">${m.place}</div>
    <div class="ev-top">TOP PRIZE <b>&times;${Fh(m)}</b></div>`,h=[...r].sort(()=>Math.random()-.5);let d=0,f=70;const u=()=>{if(a.innerHTML=l(h[d%h.length]),d++,f*=1.16,f<330)setTimeout(u,f);else{a.innerHTML=l(e),c.classList.add("ev-locked"),o.innerHTML=`
        <div class="ev-tag">${e.tag}</div>
        <div class="ev-table">
          ${e.table.map(v=>`<span class="ev-cell"><i>${v.pos}${["st","nd","rd","th","th"][v.pos-1]}</i><b>&times;${v.mult}</b></span>`).join("")}
        </div>`;const m=document.createElement("div");m.className="ev-format",o.appendChild(m);const b=[...t].sort(()=>Math.random()-.5);let g=0,p=60;const x=()=>{m.innerHTML=`Format <b>${b[g%b.length].short}</b>`,g++,p*=1.22,p<300?setTimeout(x,p):(m.innerHTML=`Format <b>${n.short}</b><span class="fmt-tag">${n.tag}</span>`,m.classList.add("fmt-locked"))};x(),setTimeout(()=>{s.classList.add("ev-out"),setTimeout(()=>{s.remove(),i()},450)},3e3)}};return u(),s}function Ox({event:r,format:e,standings:t,playerPos:n,bet:i,payout:s,style:a,reveal:o=!1,onAgain:c,onLodge:l}){const h=document.createElement("div");h.id="results";const d=["st","nd","rd","th","th"][n-1],f=s-i,u=t.find(x=>x.me)?.score;let m=`<div class="style-line">Style points: ${Bn(a)}</div>`;e&&u&&e.scored==="both"?m=`<div class="score-line">Time ${Bn(u.timePts)} + Style ${Bn(u.style)} = <b>${Bn(u.total)}</b></div>`:e&&u&&e.scored==="style"?m=`<div class="score-line">Judges' score <b>${Bn(u.total)}</b>${u.total<=0?" — no tricks landed":""}</div>`:e&&u&&e.solo&&(m=`<div class="score-line">Your time <b>${ic(u.time)}</b></div>`);const b=e&&(e.scored!=="time"||e.solo),g=x=>e.scored==="time"?ic(x.score.time):Bn(x.score.total),p=o?" rv":"";if(h.innerHTML=`
    <div class="panel results-card">
      <h2>${r?`${r.flag} ${r.name}`:"Race Complete"}</h2>
      ${r?`<div class="ev-place-line">${r.place}</div>`:""}
      ${e?`<div class="fmt-line">${e.name} &middot; ${e.tag}</div>`:""}
      <div class="big-pos${n<=2?" win":""}${p?" rv-late":""}">${n}${d}</div>
      <div class="payout-line${f<0?" loss":""}${p?" rv-late":""}">
        Bet ${Bn(i)} &rarr; paid <b>${Bn(s)}</b> chips
      </div>
      ${m}
      <ul class="standings">
        ${t.map(x=>`<li class="${x.me?"me":""}${p}" data-pos="${x.pos}">
              <span class="p">${x.pos}${["st","nd","rd","th","th"][x.pos-1]}</span>
              <span class="dot" style="background:#${x.color.toString(16).padStart(6,"0")}"></span>
              <span class="nm">${x.name}</span>
              ${b&&x.score?`<span class="sc">${g(x)}</span>`:""}
              ${x.me?`<span class="mult">&times;${x.mult}</span>`:""}
            </li>`).join("")}
      </ul>
      <div class="results-btns">
        <button id="res-lodge">Back to Lodge</button>
        <button id="res-again" class="primary">Race Again</button>
      </div>
    </div>`,fa().appendChild(h),o){const x=[...h.querySelectorAll(".standings li")].sort((v,_)=>Number(_.dataset.pos)-Number(v.dataset.pos));x.forEach((v,_)=>setTimeout(()=>v.classList.add("in"),500+_*750)),setTimeout(()=>h.querySelectorAll(".rv-late").forEach(v=>v.classList.add("in")),500+x.length*750+200)}return h.querySelector("#res-again").addEventListener("click",()=>{h.remove(),c()}),h.querySelector("#res-lodge").addEventListener("click",()=>{h.remove(),l()}),h}let zr=null;function Qu(){if(zr)return zr;const r=document.createElement("canvas");r.width=r.height=96;const e=r.getContext("2d"),t=[[48,48,34,.85],[36,40,20,.6],[60,42,18,.62],[44,60,22,.58],[58,58,15,.55],[38,55,12,.5]];for(const[n,i,s,a]of t){const o=e.createRadialGradient(n,i,1,n,i,s);o.addColorStop(0,`rgba(255,255,255,${a})`),o.addColorStop(.55,`rgba(255,255,255,${a*.45})`),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,96,96)}return zr=new la(r),zr}class rc{constructor(e,t=900,n={}){this.max=t,this.cursor=0,this.gravity=n.gravity??7.5,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.age=new Float32Array(t).fill(1e9),this.life=new Float32Array(t).fill(1),this.size0=new Float32Array(t),this.aSize=new st(new Float32Array(t),1),this.aAlpha=new st(new Float32Array(t),1),this.aShade=new st(new Float32Array(t).fill(1),1);const i=new bt;this.aPos=new st(this.pos,3),i.setAttribute("position",this.aPos),i.setAttribute("aSize",this.aSize),i.setAttribute("aAlpha",this.aAlpha),i.setAttribute("aShade",this.aShade);const s=new yn({transparent:!0,depthWrite:!1,blending:n.blending??wi,uniforms:{uTex:{value:Qu()},uColor:{value:new L(...n.color??[.97,.99,1])}},vertexShader:`
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
        }`});this.points=new Ac(i,s),this.points.frustumCulled=!1,e.add(this.points)}spawn(e,t,n,i,s,a,o,c){const l=this.cursor;this.cursor=(this.cursor+1)%this.max,this.pos[l*3]=e,this.pos[l*3+1]=t,this.pos[l*3+2]=n,this.vel[l*3]=i,this.vel[l*3+1]=s,this.vel[l*3+2]=a,this.age[l]=0,this.life[l]=c,this.size0[l]=o,this.aShade.array[l]=.85+Math.random()*.22}burst(e,t,{count:n=60,speed:i=6,up:s=3.5,spread:a=.8,size:o=.32,life:c=.8}={}){for(let l=0;l<n;l++){const h=(Math.random()-.5)*a*2,d=Math.cos(h),f=Math.sin(h),u=t.x*d-t.z*f,m=t.x*f+t.z*d,b=i*(.4+Math.random()*.9);this.spawn(e.x+(Math.random()-.5)*.5,e.y+.1+Math.random()*.25,e.z+(Math.random()-.5)*.5,u*b,s*(.5+Math.random()),m*b,o*(.6+Math.random()*.8),c*(.6+Math.random()*.8))}}update(e){const{pos:t,vel:n,age:i,life:s,size0:a,max:o}=this,c=this.aSize.array,l=this.aAlpha.array;for(let h=0;h<o;h++){if(i[h]>=s[h]){l[h]=0,c[h]=0;continue}i[h]+=e;const d=i[h]/s[h];n[h*3+1]-=this.gravity*e;const f=1-1.6*e;n[h*3]*=f,n[h*3+1]*=1-.4*e,n[h*3+2]*=f,t[h*3]+=n[h*3]*e,t[h*3+1]+=n[h*3+1]*e,t[h*3+2]+=n[h*3+2]*e;const u=Math.min(1,i[h]/.07);l[h]=Math.pow(1-d,1.2)*u,c[h]=a[h]*(.5+d*1.9)}this.aPos.needsUpdate=!0,this.aSize.needsUpdate=!0,this.aAlpha.needsUpdate=!0,this.aShade.needsUpdate=!0}}class Oh{constructor(e,t,n){const i=n.type==="ski"?[{off:-.175,w:.065,wMax:.5,tail:.45},{off:.175,w:.065,wMax:.5,tail:.45}]:n.type==="board"?[{off:0,w:.16,wMax:.62,tail:.32}]:n.id==="sled-saucer"?[{off:0,w:.36,wMax:.4,tail:.25}]:[{off:-.21,w:.045,wMax:.1,tail:.42},{off:.21,w:.045,wMax:.1,tail:.42}];this.tracks=i.map(s=>({...s,trail:new $u(e,t,s.w)}))}push(e,t,n,i,s=0){const a=Math.cos(n),o=Math.sin(n),c=-Math.sin(n),l=Math.cos(n);for(const h of this.tracks){const d=h.w+(h.wMax-h.w)*s,f=h.tail*(1-s*.8);h.trail.push(e+a*h.off+c*f,t+o*h.off+l*f,i,d)}}update(e){for(const t of this.tracks)t.trail.update(e)}}class $u{constructor(e,t,n=.34,i=230){this.terrain=t,this.width=n,this.max=i,this.points=[],this.minDist=1.1;const s=new bt;this.aPos=new st(new Float32Array(i*2*3),3),this.aCol=new st(new Float32Array(i*2*3),3),this.aNorm=new st(new Float32Array(i*2*3),3),s.setAttribute("position",this.aPos),s.setAttribute("color",this.aCol),s.setAttribute("normal",this.aNorm);const a=[];for(let c=0;c<i-1;c++){const l=c*2;a.push(l,l+2,l+1,l+1,l+2,l+3)}s.setIndex(a),s.setDrawRange(0,0),this.geo=s,this.mesh=new et(s,new Mt({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4})),this.mesh.frustumCulled=!1,e.add(this.mesh);const o=new he(t.theme?.snow??15923197);this.trackCol=o.clone().multiplyScalar(.75),this.snowCol=o,this.fadeTime=15,this.minDist=.55,this.head=null}push(e,t,n,i=this.width){if(!n){this.points.length&&this.points[this.points.length-1]!==null&&this.points.push(null),this.head=null;return}this.head={x:e,z:t,age:0,w:i};const s=[...this.points].reverse().find(a=>a);if(!(s&&Math.hypot(e-s.x,t-s.z)<this.minDist))for(this.points.push({x:e,z:t,age:0,w:i});this.points.length>this.max-1;)this.points.shift()}update(e){const t=this.points;for(const m of t)m&&(m.age+=e);for(;t.length&&t[0]&&t[0].age>this.fadeTime;)t.shift();for(;t.length&&t[0]===null;)t.shift();const n=t.slice(),i=[...t].reverse().find(m=>m);this.head&&i&&Math.hypot(this.head.x-i.x,this.head.z-i.z)>.03&&n.push(this.head);const s=this.aPos.array,a=this.aCol.array,o=this.aNorm.array,c=new L;let l=0;const h=new he,d=.05,f=(m,b,g)=>{for(const p of[0,1])s[l*6+p*3]=m,s[l*6+p*3+1]=b,s[l*6+p*3+2]=g,a[l*6+p*3]=h.r,a[l*6+p*3+1]=h.g,a[l*6+p*3+2]=h.b,o[l*6+p*3]=0,o[l*6+p*3+1]=1,o[l*6+p*3+2]=0;l++};let u=!1;for(let m=0;m<n.length&&l<this.max;m++){const b=n[m];if(!b){u=l>0;continue}u&&l<this.max-2&&(f(s[(l-1)*6],s[(l-1)*6+1],s[(l-1)*6+2]),f(b.x,this.terrain.heightAt(b.x,b.z)+d,b.z),u=!1);const g=n[m+1]||null,p=n[m-1]||null;let x=0,v=-1;g?(x=g.x-b.x,v=g.z-b.z):p&&(x=b.x-p.x,v=b.z-p.z);const _=Math.hypot(x,v)||1,C=-v/_,E=x/_,S=this.terrain.heightAt(b.x,b.z)+d,w=b.w??this.width;s[l*6]=b.x+C*w,s[l*6+1]=S,s[l*6+2]=b.z+E*w,s[l*6+3]=b.x-C*w,s[l*6+4]=this.terrain.heightAt(b.x-C*w,b.z-E*w)+d,s[l*6+5]=b.z-E*w,this.terrain.normalAt(b.x,b.z,c),h.copy(this.trackCol).lerp(this.snowCol,Math.min(1,b.age/this.fadeTime));for(const y of[0,1])a[l*6+y*3]=h.r,a[l*6+y*3+1]=h.g,a[l*6+y*3+2]=h.b,o[l*6+y*3]=c.x,o[l*6+y*3+1]=c.y,o[l*6+y*3+2]=c.z;l++}this.geo.setDrawRange(0,Math.max(0,(l-1)*6)),this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aNorm.needsUpdate=!0}}function Zu(r=tr.utah){const e=new Zs(2600,16,10),t=new yn({side:Ft,depthWrite:!1,fog:!1,uniforms:{top:{value:new he(r.skyTop)},bottom:{value:new he(r.skyBottom)}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec3 top; uniform vec3 bottom; varying vec3 vDir;
      void main() {
        float t = clamp(vDir.y * 1.3 + 0.28, 0.0, 1.0);
        gl_FragColor = vec4(mix(bottom, top, t), 1.0);
      }`}),n=new et(e,t);return n.frustumCulled=!1,n}const ac={shadows:!0};function ed(r,e=tr.utah){const t=new u_(e.hemiSky,e.hemiGround,e.hemiI);r.add(t);const n=new Uu(e.sunCol,e.sunI);if(n.position.set(75,85,35),r.add(n),r.add(n.target),ac.shadows){n.castShadow=!0,n.shadow.mapSize.set(1024,1024);const i=n.shadow.camera;i.left=-26,i.right=26,i.top=26,i.bottom=-26,i.near=1,i.far=320,n.shadow.bias=-4e-4,n.shadow.normalBias=.5}return{hemi:t,sun:n}}function td(r,e){r.position.set(e.x+75,e.y+85,e.z+35),r.target.position.copy(e)}class nd{constructor(e,t=450,n=70){this.range=n;const i=new Float32Array(t*3);this.vel=new Float32Array(t);for(let o=0;o<t;o++)i[o*3]=(Math.random()-.5)*n*2,i[o*3+1]=(Math.random()-.5)*n,i[o*3+2]=(Math.random()-.5)*n*2,this.vel[o]=1.5+Math.random()*2.5;const s=new bt;s.setAttribute("position",new st(i,3));const a=new Tc({color:16777215,map:Qu(),size:.3,transparent:!0,opacity:.85,alphaTest:.02,sizeAttenuation:!0,depthWrite:!1});this.points=new Ac(s,a),this.points.frustumCulled=!1,e.add(this.points),this.center=new L}update(e,t){this.center.copy(t),this.points.position.copy(t);const n=this.points.geometry.attributes.position,i=this.range;for(let s=0;s<n.count;s++){let a=n.getY(s)-this.vel[s]*e;a<-i/2&&(a+=i),n.setY(s,a),n.setX(s,n.getX(s)+Math.sin((a+s)*.5)*e*.6)}n.needsUpdate=!0}}const Bx=["PowderPete","alpine_ana","YetiLars","carve_queen","BigAirBen","SluffDog","glacier_gal","MogulMax","heli_hank","IceViper","SnowcatSam","backcountry_bea","AvyDodger","CorduroyKid","FirstChair","wax_wizard"],zx=[15231548,5488880,12154856,8248162,15777866,15760048,9347327,6478784];function Gx(r){const e=[...Bx],t=[...zx],n=[];for(let i=0;i<4;i++){const s=Math.floor(r()*e.length),a=Math.floor(r()*t.length);n.push({name:e.splice(s,1)[0],color:t.splice(a,1)[0]})}return n}function id(r){const e=di(r^24301),t=Gx(e),n=t.map(()=>Hn[Math.floor(e()*Hn.length)]),i=[0,1,3,4].sort(()=>e()-.5);return t.map((s,a)=>({identity:s,gear:n[a],lane:i[a]}))}class Hx{constructor(e,t){this.seed=e,this.onStart=t,this.scene=new Tu,this.scene.fog=new ca(14479359,220,1100),this.camera=new Dt(60,innerWidth/innerHeight,.1,4e3),this.terrain=new ju(e);const n=new vt;this.terrain.build(n),this.scene.add(n),this.scene.add(Zu()),this.sun=ed(this.scene).sun;const i=this.terrain.gateLanes[2];td(this.sun,new L(i.x,this.terrain.heightAt(i.x,i.z),i.z)),this.snow=new nd(this.scene,350),this.gate=new Hu(this.terrain),this.scene.add(this.gate.group),this._laneNames=[null,null,"You",null,null],this.gate.setRoster(this._laneNames),this.fx=new rc(this.scene,220);const s=id(e);this.botIdentities=s.map(o=>o.identity),this.botGear=s.map(o=>o.gear),this.botLanes=s.map(o=>o.lane);const a=di(e^68529);this.playerRider=null,this._placePlayer(Hn.find(o=>o.id===gt.gearId)||Hn[0]),this.joinQueue=this.botIdentities.map((o,c)=>({at:.25+a()*1.65,identity:o,gear:this.botGear[c],lane:this.botLanes[c],joined:!1})),this.botRiders=[],this.hud=new Ux({onGearChange:o=>{gt.gearId=o.id,ts(),this._placePlayer(o)},onBetChange:()=>ts(),onStart:()=>this._start()}),this.t=0,window.__fp={menu:this,setPose:ui}}_placePlayer(e){this.playerRider&&this.scene.remove(this.playerRider.root),this.playerRider=ia(e,16498468);const t=this.terrain.gateLanes[2];this.playerRider.root.position.set(t.x,this.terrain.heightAt(t.x,t.z),t.z),this.scene.add(this.playerRider.root)}_start(){ts(),this.onStart({seed:this.seed,bet:this.hud.bet,gear:this.hud.gear,bots:this.botIdentities.map((e,t)=>({identity:e,gear:this.botGear[t],lane:this.botLanes[t]}))})}update(e){this.t+=e;for(const l of this.joinQueue)if(!l.joined&&this.t>=l.at){l.joined=!0;const h=ia(l.gear,l.identity.color),d=this.terrain.gateLanes[l.lane];h.root.position.set(d.x,this.terrain.heightAt(d.x,d.z),d.z),this.scene.add(h.root),this.botRiders.push(h),this.hud.addRider({name:l.identity.name,color:l.identity.color,gearName:l.gear.name}),this._laneNames[l.lane]=l.identity.name,this.gate.setRoster(this._laneNames)}for(const[l,h]of[this.playerRider,...this.botRiders].entries())h&&(ui(h,{idle:!0,t:this.t+l*1.7}),h.rig.rotation.z=Math.sin(this.t*1.3+l*2.1)*.03);const t=this.terrain.gateLanes[2],n=this.terrain.heightAt(t.x,t.z),i=this.t*.07,s=t.x+Math.sin(i)*13,a=t.z-26-Math.cos(i*.6)*3,o=this.terrain.heightAt(s,a),c=Math.max(n+2.6+Math.sin(this.t*.18)*.5,o+2);this.camera.position.set(s,c,a),this.camera.lookAt(t.x,n+3.6,t.z),this.gate.update(e,this.t,this.fx,null),this.fx.update(e),this.snow.update(e,this.camera.position)}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}destroy(){this.hud.destroy()}}const Bh=8,Vx=15,zh=.0095,Wx=.55,jx=14,Ds=1.15,Gh=320,Xx={left:"Backside 360",right:"Frontside 360",up:"Front Flip",down:"Backflip"};class qx{constructor(e,t,n,i){this.terrain=e,this.input=n,this.hud=i,this.rider=ia(t,16498468),this.obj=this.rider.root,this.isSled=t.type==="sled",this.isBoard=t.type==="board",this.pos=new L,this.yaw=0,this.travelYaw=0,this.edge=0,this.latA=0,this.slip=0,this.speed=0,this.vy=0,this.airborne=!1,this.stumbleT=0,this.frozen=!0,this.finished=!1,this.groundVy=0,this.landComp=0,this.fx=null,this.t=0,this.knockT=0,this._wasBraking=!1,this.bump=0,this.trickSpin=0,this.trickFlip=0,this.spinDone=0,this.flipDone=0,this.combo=[],this.style=0,this.pending=0,this._pipeReturn=0,this._boostT=0,this._onSwipe=s=>this._trick(s),n.onSwipe=this._onSwipe}placeAt(e,t){this.pos.set(e,this.terrain.groundAt(e,t),t),this._sync(0)}get progress(){return-this.pos.z}_trick(e){!this.airborne||this.finished||(e==="left"?this.trickSpin-=Math.PI*2:e==="right"?this.trickSpin+=Math.PI*2:e==="up"?this.trickFlip-=Math.PI*2:this.trickFlip+=Math.PI*2,this.combo.push(Xx[e]),this.pending+=100*this.combo.length,this.hud&&this.hud.trickToast(this.combo.join(" + "),`${this.pending} riding on the landing`))}update(e){const t=this.terrain,n=this.input;if(this.t+=e,this.frozen){this._sync(e),ui(this.rider,{tuck:n.tuck?1:0,idle:!n.tuck,t:this.t});return}this.knockT>0&&(this.knockT-=e);const i=Math.max(0,Math.min(1,Math.min(this.knockT*3,(1.7-this.knockT)*4)));if(this.finished){this.speed=Math.max(0,this.speed-11*e);const f=new L(Math.sin(this.yaw),0,-Math.cos(this.yaw)),u=this.pos.x+f.x*this.speed*e,m=this.pos.z+f.z*this.speed*e;this.pos.set(u,this.terrain.groundAt(u,m),m),this.airborne=!1,this._sync(e),ui(this.rider,{brake:this.speed>1.5?1:0,idle:this.speed<=1.5,t:this.t,dt:e});return}const s=this.stumbleT>0||this.knockT>0;this.stumbleT>0&&(this.stumbleT-=e),this._boostT>0&&(this._boostT-=e);const a=this.progress;this.landComp=Math.max(0,this.landComp-e*2.6);const o=s?n.steer*.25:n.steer;if(this.isSled){const f=_e(o,-1,1)*Ds;this.yaw=mt(this.yaw,f,_e(e*(this.airborne?1:2.8),0,1))}else if(this.airborne){const f=_e(o,-1,1)*Ds;this.yaw=mt(this.yaw,f,_e(e*1,0,1)),this.edge=mt(this.edge,_e(o,-1,1),_e(e*2,0,1))}else{this.edge=mt(this.edge,_e(o,-1,1),_e(e*2.4,0,1));const f=this.edge*(.55+.75*_e(this.speed/24,0,1.2));this.yaw+=f*e;const u=Math.abs(o)<.12?.9:.2;this.yaw=mt(this.yaw,0,_e(e*u,0,1)),this.yaw=_e(this.yaw,-Ds,Ds)}if(!this.airborne){const f=this.input.brake&&!s;let u;this.isSled?u=(4.2-2.6*_e(this.speed/40,0,1))*.7*(f?.55:1):f?u=2:u=8.5-2.2*_e(this.speed/40,0,1),s&&(u*=.7);const m=this.travelYaw;this.travelYaw=mt(this.travelYaw,this.yaw,_e(e*u,0,1));const b=e>0?(this.travelYaw-m)/e:0;this.latA=mt(this.latA,this.speed*b,_e(e*5,0,1))}this.slip=this.yaw-this.travelYaw;const c=new L(Math.sin(this.travelYaw),0,-Math.cos(this.travelYaw));if(this.airborne){this._prevPipeQ=null,this.vy-=Vx*e,this.speed=Math.max(0,this.speed-zh*.4*this.speed*this.speed*e);let f=this.pos.x+c.x*this.speed*e,u=this.pos.z+c.z*this.speed*e;({nx:f,nz:u}=this._tubeClamp(f,u,c));const m=this.pos.y+this.vy*e;if(!(this._grindT>0)){const _=t.grindAt(f,-u);if(_&&m<_.topY+.15&&m>_.topY-1.05){const C=Math.sign(_.lat||1)*1.15;f=_.gx+_.ax*_.along+_.az*C,u=-(_.gs0+_.az*_.along-_.ax*C),this.speed*=.4}}const b=t.groundAt(f,u),g=6.2,p=5.4,x=this.spinDone,v=this.flipDone;if(this.spinDone=Hh(this.spinDone,this.trickSpin,g*e),this.flipDone=Hh(this.flipDone,this.trickFlip,p*e),e>0&&(this.twist=mt(this.twist??0,_e((this.spinDone-x)/e/7,-1,1),_e(e*9,0,1)),this.curl=mt(this.curl??0,_e(Math.abs(this.flipDone-v)/e/6,0,1),_e(e*9,0,1))),m<=b){this.pos.set(f,b,u),this.airborne=!1;const _=Math.abs(this.trickSpin-this.spinDone),C=Math.abs(this.trickFlip-this.flipDone),E=_>.9||C>.9,S=Math.min(1,-this.vy/14);this.landComp=.4+S*.6,this.fx&&this.fx.burst(this.pos,c,{count:32+Math.round(S*80),speed:3+S*6,up:2.5+S*3,spread:1.4,size:.28}),E?(this.stumble(this.pending>0?`crashed the landing — lost ${this.pending}`:"crashed the landing"),this.pending=0):this.combo.length&&(this.speed+=1.5,this.style+=this.pending,this.hud&&this.hud.trickToast(`STOMPED IT  +${this.pending}`,this.combo.join(" + ")),this.pending=0),this.pending=0,this.trickSpin=this.spinDone=0,this.trickFlip=this.flipDone=0,this.combo=[],this.vy=0,this._pipeReturn&&(this.yaw=this.travelYaw=this._pipeReturn*1.1,this._pipeReturn=0)}else this.pos.set(f,m,u)}else{const u=t.groundAt(this.pos.x,this.pos.z),m=t.groundAt(this.pos.x+c.x*1.6,this.pos.z+c.z*1.6),b=(u-m)/1.6;let g=Bh*b;const p=n.tuck&&!s,x=n.brake&&!s,v=x&&t.nearGrindEntry(this.pos.x,-this.pos.z),_=zh*(p?Wx:1)*(x?v?1.4:4:1)*(this._boostT>0?.35:1);if(g-=_*this.speed*this.speed,x&&(g-=jx*(v?.18:1)),s&&(g-=6),this.knockT>0&&(g-=10),p&&this.speed<5&&!x&&(g+=3.4+Math.max(0,-b)*Bh*.95),x&&!this._wasBraking&&this.fx&&this.speed>8){const w=Math.sign(n.steer)||1;this.fx.burst(this.pos,{x:w*-c.z,z:w*c.x},{count:130,speed:5,up:3,spread:1.1,size:.24})}this._wasBraking=x,g-=Math.abs(this.slip)*this.speed*.055,this.isSled||(g-=Math.abs(this.edge)*this.speed*(this.isBoard?.058:.046)),this._grindT>0&&(g=-.5),this.speed=Math.max(0,this.speed+g*e);let C=this.pos.x+c.x*this.speed*e,E=this.pos.z+c.z*this.speed*e;for(const w of t.ledgeWallsAt(-E)){const y=(this.pos.x-w.x)*w.side,T=(C-w.x)*w.side;y<.05&&T>-.35&&(C=w.x-w.side*.4,this.speed*=Math.abs(c.z)*.85)}let S=!1;if(n.brake&&!s&&this.speed>5){const w=t.grindAt(C,-E);w&&(this._grindT>0||this.pos.y>w.topY-1.4)&&(S=!0,this._grindT=(this._grindT||0)+e,this.travelYaw=w.yaw,this.pos.set(w.px,w.topY,w.pz),this.vy=0,this.groundVy=0,this.style+=45*e)}if(!S&&this._grindT>0){const w=this._grindT;this._grindT=0,this.airborne=!0,this.vy=2.4,this.pos.set(C,this.pos.y+this.vy*e,E),this.hud&&w>.35&&(this.hud.trickToast("LOG GRIND",`${w.toFixed(1)}s on the rail`),this.style+=60+Math.round(w*45)),S=!0}if(!S){({nx:C,nz:E}=this._tubeClamp(C,E,c));const w=t.groundAt(C,E),y=this.groundVy,T=e>0?(w-this.pos.y)/e:0;this.groundVy=mt(this.groundVy,_e(T,-30,30),_e(e*10,0,1));const A=t.pipeAt(C,-E);let P=!1;if(A&&Math.abs(A.q)>=A.lipQ&&this._prevPipeQ!=null&&Math.abs(this._prevPipeQ)<A.lipQ&&this.groundVy>3&&this.speed>7){P=!0,this.airborne=!0,this.vy=_e(this.groundVy*.9,5,13),performance.now()-n.lastTuckRelease<Gh&&(this.vy+=4.2,this.hud&&this.hud.trickToast("POP!","off the lip"));const I=0,N=c.z*this.speed;this._pipeReturn=-Math.sign(A.q),this.speed=Math.hypot(I,N),this.travelYaw=Math.atan2(I,-N),this.pos.set(C,this.pos.y+this.vy*e,E)}this._prevPipeQ=A?A.q:null,P||(w<this.pos.y-Math.max(.55,.9*this.speed*e)&&this.speed>6?(this.airborne=!0,this.vy=_e(y,0,t.launchCapAt(-E)),performance.now()-n.lastTuckRelease<Gh&&(this.vy+=4.2,this.hud&&this.hud.trickToast("POP!","perfect release")),this.pos.set(C,this.pos.y+this.vy*e,E)):(this.pos.set(C,w,E),this.vy=0)),this.airborne||this._collide(),!this.airborne&&!s&&t.boostGateAt(this.pos.x,a,this.progress)&&(this.speed=Math.min(this.speed+7,46),this._boostT=1.6,this.hud&&this.hud.trickToast("BOOST!","gate threaded"),this.fx&&this.fx.burst(this.pos,c,{count:60,speed:5,up:2,spread:1.2,size:.24}))}}if(this.fx&&!this.airborne&&!(this._grindT>0)&&this.speed>7){const f=Math.abs(this.slip)*2.2+Math.abs(this.latA)/11+Math.abs(this.yaw)/Ds*.25,u=n.brake&&!s?1:0,b=(.15+f*1.6+u*3+(s?2:0))*this.speed*.9;this._sprayAcc=(this._sprayAcc||0)+b*e*60;const g=Math.sign(this.yaw)||(Math.random()<.5?-1:1);for(;this._sprayAcc>=1;){this._sprayAcc-=1;const p=.6+Math.random()*.5;this.fx.spawn(this.pos.x-c.x*p+g*-c.z*.35,this.pos.y+.16,this.pos.z-c.z*p+g*c.x*.35,-c.x*2+g*-c.z*(1.5+f*4+u*5)+(Math.random()-.5)*2,1.2+f*2+u*2.5+Math.random()*1.5,-c.z*2+g*c.x*(1.5+f*4+u*5)+(Math.random()-.5)*2,.15+f*.1+u*.15,.5+Math.random()*.4)}}const l=this.rider.mittDrag??0;if(this.fx&&!this.airborne&&l>.4&&this.rider.mittWorld&&this.speed>8){this._mittAcc=(this._mittAcc||0)+l*this.speed*.26*e*60;const f=this.rider.mittWorld;for(;this._mittAcc>=1;)this._mittAcc-=1,this.fx.spawn(f.x+(Math.random()-.5)*.12,f.y-.05,f.z+(Math.random()-.5)*.12,-c.x*1.5+(Math.random()-.5)*.8,.6+Math.random()*.7,-c.z*1.5+(Math.random()-.5)*.8,.1+Math.random()*.05,.3+Math.random()*.25)}this._sync(e);const h=this.airborne?0:_e(Math.abs(this.groundVy)*.045,0,.4);this.bump=mt(this.bump,h,_e(e*5,0,1)),this.airborne||(this.twist=mt(this.twist??0,0,_e(e*10,0,1)),this.curl=mt(this.curl??0,0,_e(e*10,0,1)));const d=e>0?(this.speed-(this._prevSpeed??this.speed))/e:0;this._prevSpeed=this.speed,this.longA=mt(this.longA??0,_e(d,-18,12),_e(e*7,0,1)),ui(this.rider,{tuck:n.tuck&&!s?1:0,brake:n.brake&&!s?1:0,steer:_e(this.latA/11,-1,1),shift:_e((n.tuck?.45:0)-Math.abs(this.slip)*1.3-(n.brake?.5:0),-1,.5),stumble:this.stumbleT>0?1:0,knocked:i,airborne:this.airborne,crouch:_e(this.landComp+this.bump,0,1),speedNorm:_e(this.speed/26,0,1),longG:_e(this.longA/11,-1,1),jolt:this.bump*1.3,twist:this.twist??0,curl:this.curl??0,t:this.t,dt:e})}_tubeClamp(e,t,n){for(const s of this.terrain.hollowTubes){const a=-t-s.s0,o=e-s.x,c=o*s.ax-a*s.az;if(Math.abs(c)>s.halfL)continue;const l=o*s.az+a*s.ax,h=-this.pos.z-s.s0,d=this.pos.x-s.x,f=d*s.ax-h*s.az,u=d*s.az+h*s.ax,{rIn:m,rOut:b}=Wu(s,c),g=s.axY0+c*s.axSlope;let p=1/0,x=0;for(const w of[.12,1.5]){const y=this.pos.y+w-g;Math.abs(y)>=b||(x=Math.max(x,Math.sqrt(b*b-y*y)),p=Math.min(p,Math.abs(y)<m?Math.sqrt(m*m-y*y):0))}if(x===0)continue;p===1/0&&(p=0);const v=Math.abs(l);if(v+.55<=p||v-.55>=x)continue;if(Math.abs(f)>s.halfL){const w=Math.sign(f)*(s.halfL+.35);e=s.x+s.ax*w+s.az*l,t=-(s.s0-s.az*w+s.ax*l),this.speed*=.25,!this.airborne&&this.stumbleT<=0&&this.stumble("slammed a log");continue}const _=Math.max(0,p-.55),C=x+.55,E=Math.sign(l||u||1)*(v-_<=C-v?_:C);e=s.x+s.ax*c+s.az*E,t=-(s.s0-s.az*c+s.ax*E);const S=n.x*s.ax+n.z*s.az;this.travelYaw=S>=0?Math.atan2(s.ax,-s.az):Math.atan2(-s.ax,s.az),this.speed*=Math.min(1,Math.abs(S))*.9}return{nx:e,nz:t}}knockDown(e){if(!(this.knockT>0)&&(this.knockT=1.7,this.speed*=.25,this.hud&&this.hud.stumbleFlash(`taken out by ${e}!`),this.fx)){const t=new L(Math.sin(this.yaw),0,-Math.cos(this.yaw));this.fx.burst(this.pos,t,{count:130,speed:6,up:4.5,spread:2.6,size:.28})}}_collide(){if(this.stumbleT>0)return;const e=this.progress;for(const t of this.terrain.obstaclesNear(e-6,e+6)){const n=this.pos.x-t.x,i=this.pos.z-t.z,s=t.r+.7;if(n*n+i*i<s*s){this.stumble(t.kind==="tree"?"clipped a tree":t.kind==="log"?"slammed a log":"hit a boulder");const a=Math.max(.1,Math.hypot(n,i));this.pos.x+=n/a*1.2,this.pos.z+=i/a*1.2;break}}}stumble(e){if(this.stumbleT=1.3,this.speed*=.35,this.hud&&this.hud.stumbleFlash(e),this.fx){const t=new L(Math.sin(this.yaw),0,-Math.cos(this.yaw));this.fx.burst(this.pos,t,{count:100,speed:5,up:4,spread:2.2,size:.28})}}_sync(e){const t=this.terrain;if(this.obj.position.copy(this.pos),this.airborne||(this.obj.position.y+=.09),this.obj.rotation.y=-this.yaw,this.airborne)this.rider.rig.rotation.y=this.spinDone,this.rider.rig.rotation.x=this.flipDone;else{const s=t.groundNormalAt(this.pos.x,this.pos.z),a=Math.atan2(-s.z,s.y)*.85;this.rider.rig.rotation.x=mt(this.rider.rig.rotation.x%(Math.PI*2),-a,_e(e*8,0,1)),this.rider.rig.rotation.y=0}const n=t.groundAt(this.pos.x,this.pos.z);this.rider.shadow.position.y=n-this.pos.y+.06;const i=_e(this.pos.y-n,0,10);this.rider.shadow.scale.setScalar(_e(1-i*.07,.3,1))}}function Hh(r,e,t){return r<e?Math.min(e,r+t):Math.max(e,r-t)}const Yx=27,Vh=46,Kx=.32;class Jx{constructor(e){Object.assign(this,e),this.rider=ia(this.gear,this.identity.color),this.obj=this.rider.root,this.d=4,this.speed=0,this.y=0,this.vFall=0,this.frozen=!0,this.finished=!1,this.finishTime=null,this.style=0,this.stumbleT=0,this.autopilot=!1,this.personality=vn(this.seed*.13,991)*18,this.weavePhase=this.seed*2.39,this._t=0,this.knockT=0,this.aggro=0,this.aggroCooldown=8,this._aggroBlend=0,this._pushX=0,this.placeAt(this.lane.x,this.lane.z)}placeAt(e,t){this.d=-t,this.y=this.terrain.groundAt(e,t),this.obj.position.set(e,this.y,t)}get ahead(){return this.rank<this.playerRank}lineAt(e){const t=Math.sin(e*.03+this.weavePhase)*7+Math.sin(e*.009+this.weavePhase*2)*6,n=this.personality*.35;return this.terrain.centerAt(e)+_e(t+n,-55*.8,Ct.halfWidth*.8)}knockDown(){this.knockT>0||(this.knockT=1.6,this.aggro=0)}update(e,t){if(this.frozen)return;this._t+=e,this.stumbleT>0&&(this.stumbleT-=e),this.knockT>0&&(this.knockT-=e);const n=Math.max(0,Math.min(1,Math.min(this.knockT*3,(1.6-this.knockT)*4))),i=this.terrain.length,s=t.player.progress,a=t.player.finished;!this.finished&&this.d>=i&&(this.finished=!0,this.finishTime=t.time,t.onBotFinish(this));let o;if(this.finished)o=Math.max(0,this.speed-13*e);else if(this.autopilot||a||!this.ahead&&this.d>i-45)o=Math.min(this.speed+6*e,Yx+this.personality*.2);else{let v=0;this.script==="lateCharge"?v=-24*(1-qe(.55*i,.8*i,s)):this.script==="earlyLead"&&(v=20*(1-qe(.5*i,.82*i,s)));let _=30*vn(this._t*.16+this.seed*7.1,313)+this.personality+v;_>0&&(_=30*Math.tanh(_/30));const C=qe(.66*i,.9*i,Math.max(s,this.d)),E=this.ahead?Math.abs(this.finalGap):-Math.abs(this.finalGap),S=6*vn(this._t*.45+this.seed*2.9,401)*(1-C*.7),w=mt(_,E,C)+S,y=s+w;let T=this.ahead?Math.max(Vh,t.player.speed+8):Vh;this.d<220&&(T=Math.min(T,t.player.speed+7));const A=Kx*(1+C*1.2),P=_e(t.player.speed,6,44);o=_e(P+A*(y-this.d),this.ahead?5:0,T),this.stumbleT<=0&&vn(this._t*.11+this.seed*3.7,577)>.86&&(this.stumbleT=1.1),this.stumbleT>0&&(o*=.45),this.ahead&&t.playerStallTime>5&&(this.autopilot=!0),this.aggroCooldown-=e;const I=s-this.d;this.aggro<=0&&this.aggroCooldown<=0&&this.ahead&&I>3&&I<24&&t.playerKnocks<2&&t.player.knockT<=0&&vn(this._t*.23+this.seed*5.3,727)>.45&&(this.aggro=6)}this.aggro>0&&(this.aggro-=e),this.knockT>0&&(o=Math.min(o,3));const c=this.speed;if(this.speed=mt(this.speed,o,_e(e*2.5,0,1)),this._longA=mt(this._longA??0,e>0?_e((this.speed-c)/e,-18,12):0,_e(e*7,0,1)),this.d+=this.speed*e,!this.ahead&&!a&&!this.finished){const v=38*(1-qe(i-260,i-130,s));this.d=Math.min(this.d,Math.max(s-4+v,2),i-55)}this.ahead&&!a&&!this.finished&&s>i-60&&(this.d=Math.max(this.d,s+2.5+(this.playerRank-this.rank-1)*3));const l=this.aggro>0&&!this.finished?1:0;this._aggroBlend+=(l-this._aggroBlend)*_e(e*1.6,0,1),this._pushX*=Math.max(0,1-e*2.2);let h=this.lineAt(this.d)+this._pushX;this._aggroBlend>.01&&(h=mt(h,t.player.pos.x,this._aggroBlend*.9)),h=mt(this.lane.x,h,qe(6,85,this.d));const d=-this.d,f=this.terrain.groundAt(h,d);f<=this.y?(this.vFall+=16*e,this.y=Math.max(f,this.y-this.vFall*e)):(this.y=f,this.vFall=0);const u=this.y>f+.2;this._wasAirborne&&!u&&t.fx&&t.fx.burst(this.obj.position,{x:0,z:-1},{count:14,speed:4,up:3,spread:1.6,size:1.2}),this._wasAirborne=u,this.obj.position.set(h,this.y,d),u||(this.obj.position.y+=.09);const m=Math.atan2(this.lineAt(this.d+7)-this.lineAt(this.d),7);this.obj.rotation.y=-m,this.visYaw=m;const b=(this.lineAt(this.d+5)-2*this.lineAt(this.d)+this.lineAt(this.d-5))/25,g=_e(this.speed*this.speed*b*.09,-1,1);if(!u){const v=this.terrain.groundNormalAt(h,d);this.rider.rig.rotation.x=Math.atan2(-v.z,v.y)*-.85}if(this.finished?ui(this.rider,{brake:this.speed>2?1:0,idle:this.speed<=2,t:this._t+this.weavePhase,dt:e}):ui(this.rider,{steer:g,tuck:this.speed>21&&this.knockT<=0?1:0,stumble:this.stumbleT>0?1:0,knocked:n,airborne:u,speedNorm:_e(this.speed/26,0,1),longG:_e((this._longA??0)/11,-1,1),t:this._t+this.weavePhase,dt:e}),t.fx&&!u&&this.speed>10){const v=Math.abs(g);this._sprayAcc=(this._sprayAcc||0)+(.25+v*1.1+(this.stumbleT>0?2:0))*this.speed*.32*e*60;const _=Math.sign(g)||1;for(;this._sprayAcc>=1;)this._sprayAcc-=1,t.fx.spawn(h+_*.4,this.y+.05,d+.7,_*(1+v*3.5)+(Math.random()-.5)*2,1+v*2+Math.random()*1.2,2+(Math.random()-.5)*2,.12+v*.09,.45+Math.random()*.35)}const p=this.rider.mittDrag??0;if(t.fx&&!u&&p>.4&&this.rider.mittWorld&&this.speed>8){this._mittAcc=(this._mittAcc||0)+p*this.speed*.15*e*60;const v=this.rider.mittWorld;for(;this._mittAcc>=1;)this._mittAcc-=1,t.fx.spawn(v.x+(Math.random()-.5)*.12,v.y-.05,v.z+(Math.random()-.5)*.12,(Math.random()-.5)*.8,.6+Math.random()*.7,1.2+(Math.random()-.5)*.8,.1+Math.random()*.05,.3+Math.random()*.25)}this.rider.shadow.position.y=f-this.y+.06;const x=_e(this.y-f,0,10);this.rider.shadow.scale.setScalar(_e(1-x*.07,.3,1))}}const si=new L,Gr=new L;let Os=null;async function Qx(){if(!Os)try{const r=new Uc;r.setMeshoptDecoder(kc),Os=(await r.loadAsync("models/animals.glb")).scene,Os.traverse(t=>{t.isMesh&&(t.material=new Mt({map:t.material.map}),t.castShadow=!0)})}catch{Os=null}}const $x={vermont:{label:"a deer",herd:[3,5],speed:10.5,across:5.5,r:.85,gallop:7.5,bob:.3},quebec:{label:"a moose",herd:[1,1],speed:8.5,across:3.5,r:1.4,gallop:5.5,bob:.34},colorado:{label:"an elk",herd:[4,6],speed:10,across:4.5,r:1.1,gallop:6.5,bob:.32},utah:{label:"a bighorn",herd:[2,4],speed:9.5,across:4.5,r:.9,gallop:7,bob:.28},bc:{label:"a mountain goat",herd:[1,2],speed:8.5,across:4,r:.9,gallop:6.5,bob:.28},chile:{label:"a guanaco",herd:[3,6],speed:11,across:5,r:.95,gallop:7,bob:.3},nz:{label:"a sheep",herd:[5,8],speed:7.5,across:3.5,r:.8,gallop:6,bob:.22},swiss:{label:"an ibex",herd:[1,2],speed:9,across:4.5,r:.9,gallop:6.8,bob:.28},japan:{label:"a fox",herd:[2,3],speed:11,across:5,r:.55,gallop:8.5,bob:.2,evGap:.55}};class js{constructor(e,t,n,i){if(this.scene=e,this.terrain=t,this.spec=$x[n]??null,this.src=this.spec&&Os?.getObjectByName(`animal_${n}`)||null,this.events=[],this.active=[],this.trails=[],!this.src)return;const s=di((i^41233)>>>0);let a=360+s()*300;for(;a<this.terrain.length-380;)this.events.push({s:a,side:s()<.5?-1:1,n:Math.round(this.spec.herd[0]+s()*(this.spec.herd[1]-this.spec.herd[0])),seed:(i^Math.floor(a))>>>0,fired:!1}),a+=(430+s()*380)*(this.spec.evGap??1)}_spawn(e){const t=di(e.seed);for(let n=0;n<e.n;n++){const i=e.s+t()*14,s=this.terrain.centerAt(i)+e.side*Ct.halfWidth*(.72+t()*.16)+(t()-.5)*5,a=new vt,o=this.src.clone(),c=[];o.traverse(u=>{u.isMesh&&(u.material=u.material.clone(),c.push(u.material))}),a.add(o),js._shadowGeo||(js._shadowGeo=new ua(1,14));const l=new Rt({color:660512,transparent:!0,opacity:.26,depthWrite:!1}),h=new et(js._shadowGeo,l);h.rotation.x=-Math.PI/2,h.position.y=.07,h.scale.setScalar(this.spec.r*1.5),a.add(h),this.scene.add(a);const d=this.spec.r*.18+.05,f=[-1,1].map(u=>{const m=new $u(this.scene,this.terrain,d);return m.minDist=.5,m.trackCol.multiplyScalar(.8),{off:u*this.spec.r*.35,w:d,trail:m}});this.trails.push(...f.map(u=>u.trail)),this.active.push({obj:a,body:o,shadow:h,shMat:l,mats:c,tracks:f,x:s,s:i,y:this.terrain.heightAt(s,-i)+.06,vy:0,air:!1,fade:1,fading:!1,vs:this.spec.speed*(.85+t()*.3),vx:-e.side*this.spec.across*(.75+t()*.5),t:t()*6.3,gallop:this.spec.gallop*(.9+t()*.2)})}}update(e,t,n){if(this.src){for(const i of this.events)!i.fired&&t>i.s-95&&(i.fired=!0,this._spawn(i));for(const i of this.active){i.t+=e,i.s+=i.vs*e,i.x+=i.vx*e;const s=-i.s,a=Math.hypot(i.vx,i.vs)||1,o=i.vx/a,c=-i.vs/a,l=this.spec.r*1.1,h=this.terrain.heightAt(i.x,s),d=this.terrain.heightAt(i.x+o*l,s+c*l),f=this.terrain.heightAt(i.x-o*l,s-c*l),u=Math.max(h,(d+f)/2)+.06;i.air||(u<i.y-.75?(i.air=!0,i.vy=2):i.y=u),i.air&&(i.vy-=13*e,i.y+=i.vy*e,i.y<=u&&(i.y=u,i.air=!1,i.vy=0));const m=Math.abs(Math.sin(i.t*i.gallop));i.obj.position.set(i.x,i.y,s),i.air?si.set(0,1,0):this.terrain.normalAt(i.x,s,si),i.obj.up.copy(si);const b=o*si.x+c*si.z;Gr.set(o-si.x*b,-si.y*b,c-si.z*b),i.obj.lookAt(i.x+Gr.x,i.y+Gr.y,s+Gr.z),i.body.position.y=i.air?0:m*this.spec.bob,i.body.rotation.x=i.air?.12:Math.sin(i.t*i.gallop*2)*.1;const g=i.y-(h+.06);i.shadow.position.y=-g+.07,i.shadow.scale.setScalar(this.spec.r*1.5*Math.max(.35,1-g*.12));const p=!i.air&&m<.45,x=Math.min(1,m/.45),v=p?Math.max(.04,i.tracks[0].w*Math.sqrt(1-x*x)):void 0;for(const _ of i.tracks)_.trail.push(i.x-c*_.off-o*l*.7,s+o*_.off-c*l*.7,p,v);if(n&&!i.fading&&!n.finished&&n.knockT<=0&&n.stumbleT<=0&&!n.airborne){const _=n.pos.x-i.x,C=n.pos.z-s,E=this.spec.r+.8;_*_+C*C<E*E&&n.knockDown(this.spec.label)}if(!i.fading&&(i.s<t-80||i.s>this.terrain.length-40||Math.abs(i.x-this.terrain.centerAt(i.s))>Ct.halfWidth*1.5)){i.fading=!0;for(const _ of i.mats)_.transparent=!0,_.depthWrite=!1}if(i.fading){i.fade-=e/1.1;for(const _ of i.mats)_.opacity=Math.max(0,i.fade);if(i.shMat.opacity=.26*Math.max(0,i.fade),i.fade<=0){i.dead=!0,this.scene.remove(i.obj);for(const _ of i.mats)_.dispose();i.shMat.dispose()}}}this.active=this.active.filter(i=>!i.dead);for(const i of this.trails)i.update(e)}}}class Zx{constructor(e,t,n){this.cb=n,this.input=t,this.event=e.event??Qi[2],this.format=e.format??Qs[0],this.solo=!!this.format.solo;const i=tr[this.event.theme];this.scene=new Tu,this.scene.fog=new ca(i.fog,i.fogNear*.8,i.fogFar*.85),this.camera=new Dt(68,innerWidth/innerHeight,.1,4e3),this.terrain=new ju(e.seed,i,this.format.id);const s=new vt;this.terrain.build(s),this.scene.add(s),this.scene.add(Zu(i)),this.sun=ed(this.scene,i).sun,this.snow=new nd(this.scene);const a=di(e.seed^12482535);this.outcome=Nx(a,e.bet,this.event.table),gt.balance=Math.round((gt.balance-e.bet)*100)/100,ts(),this.hud=new kx(this.format);const o=new he(this.terrain.theme.snow).lerp(new he(1,1,1),.75);this.fx=new rc(this.scene,5e3,{color:[o.r,o.g,o.b]}),this.pyro=new rc(this.scene,320,{color:[1,.7,.3],blending:co,gravity:5}),this.gate=new Hu(this.terrain),this.scene.add(this.gate.group),this.animals=this.format.scored==="style"?{events:[],active:[],update(){}}:new js(this.scene,this.terrain,this.event.theme,e.seed);const c=[null,null,"You",null,null];for(const d of e.bots)c[d.lane]=d.identity.name;this.gate.setRoster(c),this.player=new qx(this.terrain,e.gear,t,this.hud),this.player.fx=this.fx;const l=this.terrain.gateLanes[2];this.player.placeAt(l.x,l.z),this.scene.add(this.player.obj),this.playerTrail=new Oh(this.scene,this.terrain,e.gear),this.bots=e.bots.map((d,f)=>{const u=this.outcome.botPositions[f],m=u<this.outcome.playerPos,b=a(),g=m?b<.4?"lateCharge":"steady":b<.45?"earlyLead":"steady",p=new Jx({terrain:this.terrain,gear:d.gear,identity:d.identity,seed:e.seed%1e3+f*97+a()*50,rank:u,playerRank:this.outcome.playerPos,finalGap:Math.abs(u-this.outcome.playerPos)*4.5+2+a()*2.5,script:g,lane:this.terrain.gateLanes[d.lane]});return this.solo||this.scene.add(p.obj),p.trail=new Oh(this.scene,this.terrain,d.gear),p}),this.time=0,this.goTime=null,this.playerClock=null,this.playerStallTime=0,this.playerKnocks=0,this.stateName="countdown",this.countdownT=3.9,this._lastCount=null,this.finishOrder=[],this._camPos=new L().copy(this.camera.position),this._resultsShown=!1;const h=this.terrain.centerAt(this.terrain.length);this._finishPorts=[-15,15].map(d=>new L(h+d,this.terrain.heightAt(h+d,-this.terrain.length)+9.8,-this.terrain.length)),this._finishPyroT=-1,this._updateCamera(1,!0),window.__fp={race:this}}onBotFinish(e){this.finishOrder.push({name:e.identity.name,color:e.identity.color,me:!1}),this._firstCross()}_firstCross(){this._finishPyroT<0&&(this._finishPyroT=0)}update(e){if(this.time+=e,this.stateName==="countdown"){this.countdownT-=e;const o=Math.ceil(this.countdownT);if(this.countdownT<=0){if(this.hud.countdown("GO!"),setTimeout(()=>this.hud.countdown(""),800),this.stateName="racing",this.goTime=this.time,this.player.frozen=!1,!this.solo)for(const c of this.bots)c.frozen=!1;this.gate.setPhase("go")}else o!==this._lastCount&&o<=3&&(this._lastCount=o,this.hud.countdown(String(o)),o===1&&this.gate.setPhase("set"))}if(this.stateName==="racing"||this.stateName==="done"){this.player.speed<2&&!this.player.finished?this.playerStallTime+=e:this.playerStallTime=0,this.player.update(e),this.playerTrail.push(this.player.pos.x,this.player.pos.z,this.player.yaw,!this.player.airborne&&!(this.player._grindT>0),Math.abs(Math.sin(this.player.rider.gearGroup.rotation.y)));for(const o of this.solo?[]:this.bots)o.update(e,this),o.trail.push(o.obj.position.x,o.obj.position.z,o.visYaw||0,o.y<=this.terrain.heightAt(o.obj.position.x,o.obj.position.z)+.25,Math.abs(Math.sin(o.rider.gearGroup.rotation.y)));this.solo||(this._resolveRiderCollisions(e),this._enforceDrawnOrder(e)),!this.player.finished&&this.player.progress>=this.terrain.length&&(this.player.finished=!0,this.playerClock=this.time-this.goTime,this.finishOrder.push({name:"You",color:16498468,me:!0}),this._firstCross(),this.stateName="done",this._finish())}const n=this.terrain.length;for(const o of this.bots)o.style=fx(this.player.style,this.outcome.playerPos-o.rank,o.d/n);const i=this.format.scored==="style",s=[{name:"You",color:16498468,me:!0,d:this.player.progress,done:this.player.finished,pts:this.player.style,pos:this.outcome.playerPos},...(this.solo?[]:this.bots).map(o=>({name:o.identity.name,color:o.identity.color,me:!1,d:o.d,done:o.finished,pts:o.style,pos:o.rank}))].sort((o,c)=>i?c.pts-o.pts||o.pos-c.pos:c.d-o.d),a=s.findIndex(o=>o.me)+1;if(this.hud.update({rank:a,speed:this.player.speed,progress:Math.min(1,this.player.progress/n),board:s,style:this.player.style,solo:this.solo,clock:this.goTime==null?0:this.playerClock??this.time-this.goTime}),this.terrain.finishSigns){const o=this._finishPyroT>=0?11:3.2;for(const[c,l]of this.terrain.finishSigns.entries())l.color.setScalar(.62+.38*Math.sin(this.time*o+c*2.1))}if(this.animals.update(e,this.player.progress,this.player),this.fx.update(e),this.pyro.update(e),this.gate.update(e,this.time,this.fx,null,this.camera.position.z),this._finishPyroT>=0&&this._finishPyroT<2){if(this._finishPyroT===0)for(const o of this._finishPorts)this.pyro.burst(o,{x:0,z:0},{count:30,speed:6,up:13,spread:Math.PI,size:1.5,life:1.2});for(const o of this._finishPorts)Math.random()<e*11&&this.pyro.burst(o,{x:0,z:0},{count:9,speed:4,up:10+Math.random()*7,spread:Math.PI,size:1.3,life:1});this._finishPyroT+=e}this.playerTrail.update(e);for(const o of this.bots)o.trail.update(e);this._updateCamera(e,!1),td(this.sun,this.player.pos),this.snow.update(e,this.camera.position)}_resolveRiderCollisions(e){const t=this.player;if(!t.finished)for(const n of this.bots){if(n._collideCd=Math.max(0,(n._collideCd||0)-e),n.finished||n.frozen||n._collideCd>0)continue;const i=n.obj.position.x-t.pos.x,s=n.obj.position.z-t.pos.z,a=Math.abs(n.obj.position.y-t.pos.y);if(i*i+s*s>1.6*1.6||a>1.6)continue;n._collideCd=3,n.aggroCooldown=16+Math.random()*12;const o=Math.sign(i)||1;n._pushX+=o*1.5,n.speed>t.speed+1.5?(this.playerKnocks++,t.knockDown(n.identity.name)):t.speed>n.speed+1.5?(n.knockDown(),this.hud.trickToast("BOOM!",`you took out ${n.identity.name}`),this.fx.burst(n.obj.position,{x:0,z:-1},{count:100,speed:5,up:4,spread:2.4,size:.28}),t.speed*=.9):(t.stumbleT=Math.max(t.stumbleT,.7),n.stumbleT=Math.max(n.stumbleT,.7),t.pos.x-=o*.8)}}_enforceDrawnOrder(e){const t=this.player.progress,n=this.bots.filter(s=>!s.finished);if(!(!n.length||!(Math.max(t,...n.map(s=>s.d))>.86*this.terrain.length))){n.sort((s,a)=>s.rank-a.rank);for(let s=n.length-2;s>=0;s--){const a=n[s],o=n[s+1],c=o.d+2.2-a.d;if(c>0){const l=o.d>this.terrain.length-25?80:18;a.d+=Math.min(c,l*e)}}if(!this.player.finished){const s=this.terrain.length,a=38*(1-qe(s-260,s-130,t));for(const o of n)o.ahead||(o.d=Math.min(o.d,Math.max(t-4+a,2),s-55))}}}_finish(){const{playerPos:e,bet:t,payout:n}=this.outcome;gt.balance=Math.round((gt.balance+n)*100)/100,ts();const i=this.terrain.length,s=px(this.format,{playerPos:e,playerStyle:this.player.style,playerTime:this.playerClock??this.time-this.goTime,bots:this.bots.map(o=>({rank:o.rank,time:this.solo?null:(o.finishTime??this.time+(i-o.d)/Math.max(8,o.speed))-this.goTime})),rng:di(this.terrain.seed^23566)});for(const o of this.bots)o.style=s.bots.find(c=>c.rank===o.rank).style;const a=[{pos:e,name:"You",color:16498468,me:!0,mult:Ju(e,this.event.table),score:s.player},...this.bots.map(o=>({pos:o.rank,name:o.identity.name,color:o.identity.color,me:!1,score:s.bots.find(c=>c.rank===o.rank)}))].sort((o,c)=>o.pos-c.pos);this._resultsShown||(this._resultsShown=!0,Ox({event:this.event,format:this.format,reveal:this.solo,standings:a,playerPos:e,bet:t,payout:n,style:this.player.style,onAgain:()=>this.cb.onExit("again"),onLodge:()=>this.cb.onExit("lodge")}))}_updateCamera(e,t){const n=this.player.pos,i=this.player.travelYaw*.4,s=7,a=new L(n.x-Math.sin(i)*s,0,n.z+Math.cos(i)*s),o=this.terrain.heightAt(a.x,a.z);if(a.y=Math.max(n.y+3,o+2),t)this._camPos.copy(a),this._lookAt=new L(n.x,n.y+1.3,n.z-4);else{const h=1-Math.exp(-e*3.6);this._camPos.lerp(a,h),this._lookAt.lerp(new L(n.x,n.y+1.3,n.z-4),1-Math.exp(-e*6))}this.camera.position.copy(this._camPos),this.camera.lookAt(this._lookAt);const c=58+this.player.speed*.22+(this.player.airborne?2:0),l=this.camera.fov+(c-this.camera.fov)*Math.min(1,e*2.2);Math.abs(l-this.camera.fov)>.02&&(this.camera.fov=l,this.camera.updateProjectionMatrix())}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}destroy(){this.hud.destroy(),this.input.onSwipe===this.player._onSwipe&&(this.input.onSwipe=null)}}const ev=document.getElementById("app"),un=new Cb({antialias:!0,powerPreference:"high-performance"});un.setPixelRatio(Math.min(devicePixelRatio,2));un.setSize(innerWidth,innerHeight);un.shadowMap.enabled=!0;un.shadowMap.type=qh;ev.appendChild(un.domElement);const tv=new P_(un.domElement);let $t=null;function sd(r){$t&&$t.destroy(),$t=r,$t.resize(innerWidth,innerHeight)}function rd(){Yu()&&Ku();const r=ku();sd(new Hx(r,e=>ad(e)))}const Wh=new URLSearchParams(location.search);function ad(r){const e=Qi.find(s=>s.id===Wh.get("event")),t=e??Qi[Math.floor(Math.random()*Qi.length)],n=Vu(Wh.get("format")),i=n??dx();e||n?jh({...r,event:t,format:i}):Fx(Qi,t,Qs,i,()=>jh({...r,event:t,format:i}))}function jh(r){sd(new Zx(r,tv,{onExit:e=>{if(e==="again"&&gt.balance>=r.bet){Yu()&&Ku();const t=ku();ad({seed:t,bet:r.bet,gear:r.gear,bots:id(t)})}else rd()}}))}addEventListener("resize",()=>{un.setSize(innerWidth,innerHeight),$t&&$t.resize(innerWidth,innerHeight)});const nv=Math.min(devicePixelRatio,2);let ri=1,ao=0,Hr=0,oo=0;const iv=new __;let Vr=1e9;un.setAnimationLoop(()=>{const r=iv.getDelta(),e=Math.min(r,.05);if(ao+=r,Hr++,oo+=r,Vr+=r,oo>3&&Hr>10){const t=Hr/ao;let n=ri;t<42&&ac.shadows?(ac.shadows=!1,$t?.sun&&($t.sun.castShadow=!1)):t<40&&ri>.55&&Vr>6?n=Math.max(.55,ri-.15):t>58&&ri<1&&Vr>20&&(n=Math.min(1,ri+.1)),n!==ri&&(ri=n,Vr=0,un.setPixelRatio(nv*ri),un.setSize(innerWidth,innerHeight)),ao=0,Hr=0,oo=0}$t&&($t.update(e),un.render($t.scene,$t.camera))});(async()=>{const r=document.createElement("div");r.id="boot-loading",r.textContent="WAXING THE GEAR…",document.getElementById("ui").appendChild(r);try{await Promise.all([bx(),ux(),Qx()])}finally{r.remove()}rd()})();"serviceWorker"in navigator&&!location.hostname.includes("localhost")&&addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});
