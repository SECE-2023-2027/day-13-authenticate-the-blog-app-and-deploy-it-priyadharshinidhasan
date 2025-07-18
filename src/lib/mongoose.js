import { connectDB } from '@/lib/mongoose';
import { Todo } from '@/models/Todo';

// GET /api/todo/[id]
export async function GET(req, { params }) {
  await connectDB();
  const { id } = params;

  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return new Response(JSON.stringify({ message: 'Todo not found' }), { status: 404 });
    }
    return new Response(JSON.stringify(todo), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error retrieving todo', error }), { status: 500 });
  }
}

// PUT /api/todo/[id] (Replace entire todo)
export async function PUT(request, { params }) {
  await connectDB();
  const { id } = params;
  const data = await request.json();

  try {
    const updated = await Todo.findByIdAndUpdate(id, data, { new: true });
    return new Response(JSON.stringify(updated), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error updating todo', error }), { status: 500 });
  }
}

// PATCH /api/todo/[id] (Partial update)
export async function PATCH(request, { params }) {
  await connectDB();
  const { id } = params;
  const updateData = await request.json();

  try {
    const updated = await Todo.findByIdAndUpdate(id, updateData, { new: true });
    return new Response(JSON.stringify(updated), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error updating todo', error }), { status: 500 });
  }
}

// DELETE /api/todo/[id]
export async function DELETE(request, { params }) {
  await connectDB();
  const { id } = params;

  try {
    await Todo.findByIdAndDelete(id);
    return new Response(JSON.stringify({ message: 'Todo deleted successfully' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error deleting todo', error }), { status: 500 });
  }
}
