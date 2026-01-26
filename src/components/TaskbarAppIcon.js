import './TaskbarAppIcon.css';

function TaskbarAppIcon ({ appName, imageUrl, isAppMaximized })
{
    return (
        <div id="taskbar-app-icon">            
            <img id="app-icon-image" src={imageUrl} alt='appIconPlaceholder' />
            <div id="active-app-indicator"></div>
        </div>
    );
};

export default TaskbarAppIcon;