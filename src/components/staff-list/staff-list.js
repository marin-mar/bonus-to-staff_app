import './staff-list.css';
import StaffListItem from '../staff-list-item/staff-list-item';

const StaffList = ({ data, onDelete, onToggleProp }) => {
  const staffList = data.map((staff) => {
    const { id, ...staffProps } = staff;

    return (
      <StaffListItem
        key={id}
        {...staffProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
      />
    );
  });

  return <ul className="staff__list list-group">{staffList}</ul>;
};

export default StaffList;
