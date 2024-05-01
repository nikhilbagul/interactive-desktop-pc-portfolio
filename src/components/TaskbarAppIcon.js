import './TaskbarAppIcon.css';

function TaskbarAppIcon ({ appName, imageUrl, isAppMaximized })
{
    return (
        <div id="taskbar-app-icon">
            <div id="active-app-indicator"></div>
            <img src={imageUrl} />
        </div>
    );
};

export default TaskbarAppIcon;