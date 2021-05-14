export default function Footer(){
    return(
        <div className="bg-blue-200 p-5 mt-2 flex justify-between">
                <span className='mt-auto mb-auto'>This is footer</span>
                <span className='flex flex-row'>
                    <div className='bg-sprite-background bg-no-repeat' style={{width:60,height:60}}></div>
                    <div className='bg-sprite-background bg-no-repeat' style={{width:56,height:55, backgroundPositionX:-60}}></div>
                    <div className='bg-sprite-background bg-no-repeat' style={{width:56,height:55, backgroundPositionX:-118}}></div>
                    <div className='bg-sprite-background bg-no-repeat' style={{width:56,height:55, backgroundPositionX:-176}}></div>
                    <div className='bg-sprite-background bg-no-repeat' style={{width:56,height:55, backgroundPositionX:-234}}></div>
                    <div className='bg-sprite-background bg-no-repeat' style={{width:56,height:55, backgroundPositionX:-292}}></div>
                </span>
        </div>
    )
}
