'use client';
import {useState} from 'react';
export default function Demo(){
 const [draft,setDraft]=useState('');const [confirmed,setConfirmed]=useState('');const [error,setError]=useState('');const [state,setState]=useState('idle');const [accuracy,setAccuracy]=useState('');
 function confirm(){if(!draft.trim()){setError('Plotëso vendtakimin');return;}setConfirmed(draft.trim());setError('');}
 function locate(){if(!navigator.geolocation){setState('unavailable');return;}setState('loading');navigator.geolocation.getCurrentPosition(p=>{setAccuracy(String(p.coords.accuracy));setState('success');},e=>setState(e.code===1?'denied':e.code===3?'timeout':'unavailable'),{timeout:10000});}
 return <main><h1>STAFF TEST FIXTURE — no student data</h1><label>Vendtakimi<input data-testid="meeting-input" value={draft} onChange={e=>setDraft(e.target.value)}/></label><button data-testid="confirm-meeting" onClick={confirm}>Konfirmo</button><p data-testid="confirmed-meeting">{confirmed}</p><p data-testid="meeting-error">{error}</p><button data-testid="locate-me" disabled={state==='loading'} onClick={locate}>Vendndodhja</button><p data-testid="location-status" data-state={state}>{state}</p><p data-testid="location-accuracy">{accuracy}</p></main>
}
