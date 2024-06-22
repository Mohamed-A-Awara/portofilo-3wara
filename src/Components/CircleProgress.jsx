import {} from 'react'

const CricleProgress = ({percentage , skill}) => {
    const radius = 110 ;
    const CircleWidth = 250;
    const dashArray = radius * Math.PI * 2
    const dashOffset = dashArray - (dashArray * percentage) / 100
    return (
        <>
            <svg 
                width={CircleWidth}
                height={CircleWidth}
                viewBox={`0 0 ${CircleWidth} ${CircleWidth}`}
                
            >
                <defs>
                    <linearGradient id='gradient'>
                        <stop offset='10%' stopColor="#12c2e9" />
                        <stop offset='50%' stopColor="#c471ed" />
                        <stop offset='100%' stopColor="#0d37dc" />
                    </linearGradient>
                </defs>
                <circle 
                    cx={CircleWidth / 2 } 
                    cy={CircleWidth / 2 }
                    strokeWidth="15px"
                    r={radius}
                    className='circle-Progress'
                />
                <circle 
                    cx={CircleWidth / 2 } 
                    cy={CircleWidth / 2 }
                    strokeWidth="15px"
                    r={radius}
                    className='circle-ProgressAfter'
                    style={{
                        strokeDasharray : dashArray,
                        strokeDashoffset : dashOffset
                    }}
                    transform={`rotate(-90 ${CircleWidth / 2} ${CircleWidth / 2})`}
                    stroke='url(#gradient)'
                />
                <text 
                    x="50%"
                    y="45%"
                    dy="0.3em"
                    textAnchor='middle'
                    className='circleText'
                    fill='url(#gradient)'
                >
                    {percentage}% 
                    
                </text>
                <text 
                    x="50%"
                    y="65%"
                    dy="0.3em"
                    textAnchor='middle'
                    className='circleTextSkill'
                    
                >
                    {skill}
                    
                </text>

            </svg>
        </>
    )
}

export default CricleProgress