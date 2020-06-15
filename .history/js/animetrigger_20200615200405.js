// The checker
const gambitGalleryIsInView = el => {
	const scroll = window.scrollY || window.pageYOffset
	const boundsTop = el.getBoundingClientRect().top + scroll
	
	const viewport = {
		top: scroll,
		bottom: scroll + window.innerHeight,
	}
	
    const bounds = {
		top: boundsTop,
		bottom: boundsTop + el.clientHeight,
	}
	
	return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom ) 
		|| ( bounds.top <= viewport.bottom && bounds.top >= viewport.top );
}


// Usage.
document.addEventListener( 'DOMContentLoaded', () => {
	const tester = document.querySelector( '.tester' )
	const answer = document.querySelector( '.answer' )
	
	const handler = () => raf( () => {
		answer.innerHTML = 'Is the div visible? ' + ( gambitGalleryIsInView( tester ) ? 'Yes' : 'No' )
	} )
	
	handler()
	window.addEventListener( 'scroll', handler )
} )

// requestAnimationFrame
const raf = 
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function( callback ) {
        window.setTimeout( callback, 1000 / 60 )
    }