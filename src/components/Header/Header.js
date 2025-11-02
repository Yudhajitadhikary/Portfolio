import React,{Component} from 'react'
import dynamic from 'next/dynamic'
const DesktopNavigation = dynamic(() => import('./DesktopNavigation'))
import style from './header-tw.styles'
import Image from 'next/image'
const MobileNavigation=dynamic(()=>import('./MobileNavigation'))
class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            screenWidth:375,
            open:false
        }
    }
    componentDidMount=()=>{
        this.handleWindowSizeChange()
        window.addEventListener('resize',this.handleWindowSizeChange)
        window.onload=()=>{
            this.setState({screenWidth:window.innerWidth})
        }
    }
    handleWindowSizeChange=()=>{
        this.setState({screenWidth:window.innerWidth})
    }
    handleHamburgerClick=()=>{
        this.setState({open:true})
        
    }
    handleHamburgerClose=()=>{
        this.setState({open:false})
        
    }
    render(){
        const {screenWidth,open}=this.state
        const isMobile=screenWidth&&screenWidth <= 767
        return(
            <React.Fragment>
                <div className={style.content}>
                    {isMobile && isMobile !==null?!open?<button className={style.humburger} onClick={this.handleHamburgerClick}>
                    <Image src="https://img.icons8.com/ios/50/ffffff/menu--v1.png"
                    width={100}
                    height={100}
                    // quality={50}
                    alt="Picture of the author"
                    priority={true}
                    />
                        </button>:'':''}
                    {
                        !isMobile && isMobile !==null && (<DesktopNavigation/>)
                    }
                    {
                        screenWidth && isMobile && isMobile !==null &&(
                            
                            <div>
                            <MobileNavigation open={open} handleHamburgerClose={this.handleHamburgerClose}/></div>
                        )
                    }
                </div>
            </React.Fragment>
        )
    }

} 
export default Header