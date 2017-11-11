Main();

function Main()
{
	const canvas = document.querySelector( "#gl" );
	const gl = canvas.getContext( "webgl" );
	
	if( !gl )
	{
		alert( "FAIL" );
		return;
	}
	
	gl.clearColor( 0.0,0.0,0.0,1.0 );
	gl.clear( gl.COLOR_BUFFER_BIT );
}