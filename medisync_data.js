window.MEDISYNC_EXTERNAL_DATA = {
  "meta": {
    "generated_at": "2026-10-11T09:52:42.851867",
    "reserve_days": 5,
    "target_days": 10,
    "keep_days": 12
  },
  "DRUGS": [
    {
      "id": "amox",
      "name": "Amoxicillin 500 mg",
      "unit": "caps",
      "cls": "Essential",
      "cold": false,
      "base": 120.0
    },
    {
      "id": "insu",
      "name": "Insulin glargine",
      "unit": "vials",
      "cls": "Life-saving",
      "cold": true,
      "base": 6.0
    },
    {
      "id": "para",
      "name": "Paracetamol 500 mg",
      "unit": "tabs",
      "cls": "Essential",
      "cold": false,
      "base": 200.0
    },
    {
      "id": "sal",
      "name": "Normal saline 500 ml",
      "unit": "bags",
      "cls": "Essential",
      "cold": false,
      "base": 40.0
    },
    {
      "id": "oxy",
      "name": "Oxytocin 10 IU",
      "unit": "amps",
      "cls": "Life-saving",
      "cold": true,
      "base": 8.0
    },
    {
      "id": "met",
      "name": "Metformin 500 mg",
      "unit": "tabs",
      "cls": "Chronic",
      "cold": false,
      "base": 150.0
    }
  ],
  "FACS": [
    {
      "id": "F1",
      "name": "Vellore Central Referral",
      "short": "Vellore Central",
      "type": "Referral hospital",
      "beds": 450,
      "x": 0.5,
      "y": 0.5
    },
    {
      "id": "F2",
      "name": "Katpadi Community Clinic",
      "short": "Katpadi Clinic",
      "type": "Community clinic",
      "beds": 45,
      "x": 0.46,
      "y": 0.38
    },
    {
      "id": "F3",
      "name": "Arcot Maternity Centre",
      "short": "Arcot Maternity",
      "type": "Maternity centre",
      "beds": 80,
      "x": 0.65,
      "y": 0.55
    },
    {
      "id": "F4",
      "name": "Ranipet District Hospital",
      "short": "Ranipet District",
      "type": "District hospital",
      "beds": 220,
      "x": 0.72,
      "y": 0.4
    }
  ],
  "pairs": [
    {
      "fac": "F1",
      "drug": "amox",
      "base": 120.0,
      "use": 120.0,
      "g": 0.0,
      "hist": [
        120.0,
        120.0,
        120.0,
        120.0,
        120.0,
        120.0,
        120.0,
        120.0,
        120.0,
        120.0,
        120.0,
        120.0,
        120.0,
        120.0
      ],
      "ai_surge_risk": false,
      "ai_confidence": "1.2%",
      "batches": [
        {
          "id": "B_VC_AMX_1",
          "qty": 4500.0,
          "exp": 386
        },
        {
          "id": "B_VC_AMX_2",
          "qty": 2000.0,
          "exp": 492
        }
      ],
      "phase": 0
    },
    {
      "fac": "F1",
      "drug": "insu",
      "base": 25.0,
      "use": 25.0,
      "g": 0.0,
      "hist": [
        25.0,
        25.0,
        25.0,
        25.0,
        25.0,
        25.0,
        25.0,
        25.0,
        25.0,
        25.0,
        25.0,
        25.0,
        25.0,
        25.0
      ],
      "ai_surge_risk": false,
      "ai_confidence": "1.1%",
      "batches": [
        {
          "id": "B_VC_INS_EXP",
          "qty": 600.0,
          "exp": 14
        },
        {
          "id": "B_VC_INS_NEW",
          "qty": 1200.0,
          "exp": 242
        }
      ],
      "phase": 0
    },
    {
      "fac": "F1",
      "drug": "para",
      "base": 300.0,
      "use": 300.0,
      "g": 0.0,
      "hist": [
        300.0,
        300.0,
        300.0,
        300.0,
        300.0,
        300.0,
        300.0,
        300.0,
        300.0,
        300.0,
        300.0,
        300.0,
        300.0,
        300.0
      ],
      "ai_surge_risk": false,
      "ai_confidence": "1.3%",
      "batches": [
        {
          "id": "B_VC_PAR_1",
          "qty": 1500.0,
          "exp": 466
        }
      ],
      "phase": 0
    },
    {
      "fac": "F2",
      "drug": "amox",
      "base": 40.0,
      "use": 40.0,
      "g": 0.05,
      "hist": [
        14.0,
        16.0,
        18.0,
        20.0,
        22.0,
        24.0,
        26.0,
        28.0,
        30.0,
        32.0,
        34.0,
        36.0,
        38.0,
        40.0
      ],
      "ai_surge_risk": true,
      "ai_confidence": "64.6%",
      "batches": [
        {
          "id": "B_KC_AMX_1",
          "qty": 35.0,
          "exp": 213
        }
      ],
      "phase": 0
    },
    {
      "fac": "F2",
      "drug": "sal",
      "base": 15.0,
      "use": 15.0,
      "g": 0.0,
      "hist": [
        15.0,
        15.0,
        15.0,
        15.0,
        15.0,
        15.0,
        15.0,
        15.0,
        15.0,
        15.0,
        15.0,
        15.0,
        15.0,
        15.0
      ],
      "ai_surge_risk": false,
      "ai_confidence": "1.1%",
      "batches": [
        {
          "id": "B_KC_SAL_1",
          "qty": 10.0,
          "exp": 323
        }
      ],
      "phase": 0
    },
    {
      "fac": "F3",
      "drug": "oxy",
      "base": 12.0,
      "use": 12.0,
      "g": 0.0,
      "hist": [
        12.0,
        12.0,
        12.0,
        12.0,
        12.0,
        12.0,
        12.0,
        12.0,
        12.0,
        12.0,
        12.0,
        12.0,
        12.0,
        12.0
      ],
      "ai_surge_risk": false,
      "ai_confidence": "1.2%",
      "batches": [
        {
          "id": "B_AM_OXY_1",
          "qty": 5.0,
          "exp": 96
        }
      ],
      "phase": 0
    },
    {
      "fac": "F3",
      "drug": "para",
      "base": 50.0,
      "use": 50.0,
      "g": 0.0,
      "hist": [
        50.0,
        50.0,
        50.0,
        50.0,
        50.0,
        50.0,
        50.0,
        50.0,
        50.0,
        50.0,
        50.0,
        50.0,
        50.0,
        50.0
      ],
      "ai_surge_risk": false,
      "ai_confidence": "1.1%",
      "batches": [
        {
          "id": "B_AM_PAR_1",
          "qty": 120.0,
          "exp": 25
        }
      ],
      "phase": 0
    },
    {
      "fac": "F3",
      "drug": "sal",
      "base": 35.0,
      "use": 35.0,
      "g": 0.0,
      "hist": [
        35.0,
        35.0,
        35.0,
        35.0,
        35.0,
        35.0,
        35.0,
        35.0,
        35.0,
        35.0,
        35.0,
        35.0,
        35.0,
        35.0
      ],
      "ai_surge_risk": false,
      "ai_confidence": "1.2%",
      "batches": [
        {
          "id": "B_AM_SAL_1",
          "qty": 2000.0,
          "exp": 548
        }
      ],
      "phase": 0
    },
    {
      "fac": "F4",
      "drug": "met",
      "base": 180.0,
      "use": 180.0,
      "g": 0.0,
      "hist": [
        180.0,
        180.0,
        180.0,
        180.0,
        180.0,
        180.0,
        180.0,
        180.0,
        180.0,
        180.0,
        180.0,
        180.0,
        180.0,
        180.0
      ],
      "ai_surge_risk": false,
      "ai_confidence": "1.2%",
      "batches": [
        {
          "id": "B_RD_MET_1",
          "qty": 2500.0,
          "exp": 333
        }
      ],
      "phase": 0
    },
    {
      "fac": "F4",
      "drug": "insu",
      "base": 45.0,
      "use": 45.0,
      "g": 0.0,
      "hist": [
        45.0,
        45.0,
        45.0,
        45.0,
        45.0,
        45.0,
        45.0,
        45.0,
        45.0,
        45.0,
        45.0,
        45.0,
        45.0,
        45.0
      ],
      "ai_surge_risk": false,
      "ai_confidence": "1.2%",
      "batches": [
        {
          "id": "B_RD_INS_1",
          "qty": 80.0,
          "exp": 140
        }
      ],
      "phase": 0
    },
    {
      "fac": "F4",
      "drug": "oxy",
      "base": 18.0,
      "use": 18.0,
      "g": 0.0,
      "hist": [
        18.0,
        18.0,
        18.0,
        18.0,
        18.0,
        18.0,
        18.0,
        18.0,
        18.0,
        18.0,
        18.0,
        18.0,
        18.0,
        18.0
      ],
      "ai_surge_risk": false,
      "ai_confidence": "1.2%",
      "batches": [
        {
          "id": "B_RD_OXY_1",
          "qty": 850.0,
          "exp": 405
        }
      ],
      "phase": 0
    }
  ],
  "distances": {}
};
