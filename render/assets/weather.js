export function celsiusToFahrenheit(c){return c*9/5+32;}
export function windUnits(kmh){return{kmh,ms:kmh/3.6,knots:kmh/1.852,mph:kmh/1.609344};}
export function rainVolume(mm,area){return mm*area;}
export function dewPoint(t,rh){if(!(rh>0&&rh<=100)||!Number.isFinite(t)||t< -40||t>60)throw Error('range');const log=Math.log10(rh/100)+7.5*t/(237.3+t);return 237.3*log/(7.5-log);}
export function humidity(t,td){if(!Number.isFinite(t)||!Number.isFinite(td)||td>t||t< -40||t>60||td< -60)throw Error('range');return 100*10**(7.5*td/(237.3+td)-7.5*t/(237.3+t));}
export function daylightHours(latitude,isoDate){const d=new Date(isoDate+'T12:00:00Z');if(!Number.isFinite(d.getTime())||!Number.isFinite(latitude))throw Error('range');const n=(Date.UTC(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate())-Date.UTC(d.getUTCFullYear(),0,0))/86400000;const dec=23.44*Math.PI/180*Math.sin(2*Math.PI*(284+n)/365.2422);const lat=latitude*Math.PI/180;const cos=(Math.sin(-0.833*Math.PI/180)-Math.sin(lat)*Math.sin(dec))/(Math.cos(lat)*Math.cos(dec));return cos>=1?0:cos<= -1?24:24*Math.acos(cos)/Math.PI;}
