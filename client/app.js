import { createClient } from '@supabase/supabase-js'

const URL = "http://localhost:8000"
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAxNzM1Njc3MDAwLAogICJleHAiOiA0MTMzODA3OTk5Cn0.wI1pVlafZ4fUEC_0DmbiDqAR5ukY3kiLPoB-SC-2Kx8";


const supabase = createClient(URL, KEY)

const channelA = supabase
    .channel('drivers')
    .on(
        'postgres_changes',
        {
            event: '*',
            schema: 'public',
        },
        (payload) => console.log(payload)
    )
    .subscribe()
