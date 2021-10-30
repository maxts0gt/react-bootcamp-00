import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className='ui container comments'>
			<ApprovalCard>
				<CommentDetail
					author={faker.name.firstName()}
					timeAgo='Today at 6PM'
					image={faker.image.avatar()}
					comment='This is awesome. I am learning React!'
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author={faker.name.firstName()}
					timeAgo='Today at 6PM'
					image={faker.image.avatar()}
					comment='This is awesome. I am learning React!'
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author={faker.name.firstName()}
					timeAgo='Today at 6PM'
					image={faker.image.avatar()}
					comment='This is awesome. I am learning React!'
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
