import numpy as np
import pandas as pd
import random

def generate_realistic_data(num_samples=2000):
    data = []
    
    # 60% Normal Data, 40% Surge Data
    normal_count = int(num_samples * 0.6)
    surge_count = num_samples - normal_count

    # Generate Normal Data (Label = 0)
    for _ in range(normal_count):
        base_usage = random.randint(10, 500) # Simulating tiny clinics to large hospitals
        
        # Create 14 days of stable noise (±15% variance)
        history = [max(0, int(np.random.normal(base_usage, base_usage * 0.15))) for _ in range(14)]
        
        # Introduce real-world anomalies: 10% chance a clinic forgets to log data (0)
        if random.random() < 0.10:
            history[random.randint(0, 13)] = 0
            
        history.append(0) # Label: 0 (Safe)
        data.append(history)

    # Generate Surge/Outbreak Data (Label = 1)
    for _ in range(surge_count):
        base_usage = random.randint(10, 500)
        
        # Days 1-9: Stable usage
        history = [max(0, int(np.random.normal(base_usage, base_usage * 0.15))) for _ in range(9)]
        
        # Days 10-14: Exponential demand spike (1.5x to 2.5x baseline)
        spike_multiplier = random.uniform(1.5, 2.5)
        for i in range(5):
            spike_val = int(np.random.normal(base_usage * spike_multiplier, base_usage * 0.2))
            history.append(max(0, spike_val))
            spike_multiplier += 0.2 # Slope keeps increasing
            
        history.append(1) # Label: 1 (Risk)
        data.append(history)

    # Shuffle the dataset so 0s and 1s are mixed
    random.shuffle(data)

    # Convert to DataFrame and export
    columns = [f"day_{i+1}" for i in range(14)] + ["surge_risk"]
    df = pd.DataFrame(data, columns=columns)
    
    df.to_csv("medisync_historical_data.csv", index=False)
    print(f"Successfully generated 'medisync_historical_data.csv' with {num_samples} rows.")

if __name__ == "__main__":
    generate_realistic_data(2000)