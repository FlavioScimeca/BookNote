# ObjectId

In MongoDB, an ObjectId is a 12-byte identifier that is automatically generated for every document when it is inserted into a collection. It serves as a unique identifier for the document within its collection.

The ObjectId is a BSON data type specifically designed for MongoDB and consists of the following components:

1. Timestamp: The first four bytes of the ObjectId represent a timestamp, indicating the creation time of the ObjectId in seconds since the Unix epoch (January 1, 1970).

2. Machine identifier: The next three bytes of the ObjectId represent a unique identifier of the machine or process that generated the ObjectId. This identifier helps ensure the uniqueness of the ObjectId across multiple machines or processes.

3. Process identifier: The following two bytes of the ObjectId represent the process identifier (PID) of the process generating the ObjectId. This field helps guarantee the uniqueness of the ObjectId within a single machine or process.

4. Counter: The final three bytes of the ObjectId are an incrementing counter value. This value starts with a random number and increments with each ObjectId generated by the same process within the same second.

The combination of these components ensures that each ObjectId is globally unique across different machines and processes, as well as monotonically increasing within a process for a given second.

ObjectIds are commonly used as the primary key for documents in MongoDB collections. They are automatically indexed by MongoDB, making them efficient for querying and sorting documents by their creation order. Additionally, ObjectIds can be relied upon to provide a unique identifier even in distributed systems where multiple MongoDB instances are being used.
