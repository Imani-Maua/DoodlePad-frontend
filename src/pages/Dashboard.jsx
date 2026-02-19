import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { notesAPI } from '../services/api';
import NoteCard from '../components/NoteCard';
import NoteModal from '../components/NoteModal';
import { NotificationContext } from '../context/NotificationContext';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [notes, setNotes] = useState([]);
    const [filteredNotes, setFilteredNotes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingNote, setEditingNote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { showNotification } = useContext(NotificationContext);

    useEffect(() => {
        fetchNotes();
    }, []);

    useEffect(() => {
        // Filter notes based on search query
        if (searchQuery.trim()) {
            const filtered = notes.filter(note =>
                note.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredNotes(filtered);
        } else {
            setFilteredNotes(notes);
        }
    }, [searchQuery, notes]);

    const fetchNotes = async () => {
        try {
            setLoading(true);
            const response = await notesAPI.getNotes();
            setNotes(response.data);
            setFilteredNotes(response.data);
        } catch (err) {
            setError('Failed to load notes');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateNote = async (formData) => {
        try {
            const response = await notesAPI.createNote(formData);
            setNotes([response.data, ...notes]);
            setIsModalOpen(false);
            showNotification("Note created successfully!", "success");
        } catch (err) {
            setError('Failed to create note');
            console.error(err);
        }
    };

    const handleUpdateNote = async (formData) => {
        try {
            const response = await notesAPI.updateNote(editingNote.id, formData);
            setNotes(notes.map(note => note.id === editingNote.id ? response.data : note));
            setIsModalOpen(false);
            setEditingNote(null);
            showNotification("Note updated successfully!", "success");
        } catch (err) {
            setError('Failed to update note');
            console.error(err);
        }
    };

    const handleDeleteNote = async (id) => {
        if (window.confirm('Are you sure you want to delete this note?')) {
            try {
                await notesAPI.deleteNote(id);
                setNotes(notes.filter(note => note.id !== id));
                showNotification("Note deleted successfully!", "success");
            } catch (err) {
                setError('Failed to delete note');
                console.error(err);
            }
        }
    };

    const handleEditClick = (note) => {
        setEditingNote(note);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setEditingNote(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50">
            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2">
                <h1 className="text-2xl font-bold text-gray-800">My Notes</h1>
                <p className="text-sm text-gray-500">Welcome back, {user?.name}</p>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Search and Create Section */}
                <div className="mb-8 flex flex-col sm:flex-row gap-4">
                    {/* Search Bar */}
                    <div className="flex-1 relative">
                        <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search notes by title..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all outline-none bg-white"
                        />
                    </div>

                    {/* Create Button */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Create Note
                    </button>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                        <p className="text-red-700 text-sm font-medium">{error}</p>
                    </div>
                )}

                {/* Loading State */}
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-indigo-600"></div>
                    </div>
                ) : (
                    <>
                        {/* Notes Grid */}
                        {filteredNotes.length === 0 ? (
                            <div className="text-center py-20">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                                    {searchQuery ? 'No notes found' : 'No notes yet'}
                                </h3>
                                <p className="text-gray-500 mb-6">
                                    {searchQuery ? 'Try a different search term' : 'Create your first note to get started!'}
                                </p>
                                {!searchQuery && (
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                        Create Your First Note
                                    </button>
                                )}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredNotes.map(note => (
                                    <NoteCard
                                        key={note.id}
                                        note={note}
                                        onEdit={handleEditClick}
                                        onDelete={handleDeleteNote}
                                    />
                                ))}
                            </div>
                        )}
                    </>
                )}
            </main>

            {/* Note Modal */}
            <NoteModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onSubmit={editingNote ? handleUpdateNote : handleCreateNote}
                note={editingNote}
            />
        </div>
    );
};

export default Dashboard;
