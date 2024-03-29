module.exports = (Schema) =>
({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    attachmentUrls: [
        {
            type: String,
        }
    ],
    estimatedTime: {
        //In hours
        type: Number,
    },
    estimatedBudget: {
        type: Number,
    },
    estimatedHourlyBudget: {
        type: Number,
    },
    acceptedProposal: {
        type: Schema.Types.ObjectId, ref: 'JobProposal',
    },
    proposals: [{
        type: Schema.Types.ObjectId, ref: 'JobProposal',
    }],
    status: {
        type: String,
        enum: ["Posted","Accepted","In Progress","Delayed","Completed","Closed Complete","Closed Incomplete"]
    },
    address: {
        type: Schema.Types.ObjectId, ref: 'Address',
    },
    user: {
        type: Schema.Types.ObjectId, ref: 'User',
    },
    serviceProvider: {
        type: Schema.Types.ObjectId, ref: 'ServiceProvider',
    },
    service: {
        type: Schema.Types.ObjectId, ref: 'Service',
    },
    images: [{
        type: String
    }],
    review: {
        type: Schema.Types.ObjectId, ref: 'Review',
    },
});