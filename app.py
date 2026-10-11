import os
from flask import Flask, render_template, jsonify
from medisync_engine import MediSyncEngine

app = Flask(__name__)

# Force Flask to find the exact folder where app.py lives on your computer
BASE_DIR = os.path.abspath(os.path.dirname(__file__))

@app.route('/')
def home():
    return render_template('MediSync.html')

@app.route('/api/data')
def get_data():
    # Lock the engine to the absolute path of your input_data folder
    target_dir = os.path.join(BASE_DIR, "input_data")
    
    engine = MediSyncEngine(watch_dir=target_dir)
    engine.scan_and_load()
    payload = engine.export_medi_sync_payload()
    
    return jsonify(payload)

if __name__ == '__main__':
    print("Starting MediSync Live Server...")
    app.run(debug=True, port=5000)