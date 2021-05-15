import Button from '@material-ui/core/Button';

// Styles
import mainStyles from 'styles/main.module.css';

export default function BoxActivity({icon, title, description, hasButton, buttonText, buttonHandler, attrButtonHandler}){

    return (
        <div 
            className={`${mainStyles.card} ${mainStyles.container}`} 
            style={{
                position: 'relative',
                padding: hasButton ? '3% 3% 50px 3%' : '3%', 
                marginTop: '30vh',
                width: '95%', 
                maxWidth: '500px', 
                boxShadow: '0 0 74px black',
                overflow: 'hidden'
            }}
        >
            {title && <h1 style={{marginTop: 0}}>{title}</h1>}
            {description && <p style={{textAlign: 'center'}}>{description}</p>}

            {hasButton && <Button
                variant="contained"
                style={{
                    position: 'absolute',
                    width: '100%',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'var(--secondary-soft)',
                    color: 'var(--secondary-dark)',
                    borderRadius: 0
                }}
                onClick={()=> buttonHandler(attrButtonHandler)}
            >
                {buttonText}
            </Button>}
        </div>
    )
}