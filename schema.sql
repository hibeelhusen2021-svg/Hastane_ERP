-- 1. SEANS NOTLARI VE TIBBİ KAYITLAR TABLOSU (1:1 İLİŞKİ)
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ClinicalRecords]') AND type in (N'U'))
BEGIN
    CREATE TABLE [dbo].[ClinicalRecords] (
        [Id] INT IDENTITY(1,1) PRIMARY KEY,
        [AppointmentId] INT NOT NULL UNIQUE,
        [Diagnosis] NVARCHAR(500) NOT NULL,
        [SessionNotes] NVARCHAR(MAX) NULL,
        [Prescription] NVARCHAR(250) NULL,
        [CreatedAt] DATETIME DEFAULT GETDATE(),
        CONSTRAINT [FK_ClinicalRecords_Appointments] FOREIGN KEY ([AppointmentId]) 
            REFERENCES [dbo].[Appointments] ([Id]) ON DELETE CASCADE
    );
END;

-- 2. TERAPİST MAAŞ VE HAK EDİŞ TABLOSU (1:N İLİŞKİ)
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[TherapistPayroll]') AND type in (N'U'))
BEGIN
    CREATE TABLE [dbo].[TherapistPayroll] (
        [Id] INT IDENTITY(1,1) PRIMARY KEY,
        [TherapistId] INT NOT NULL,
        [Period] NVARCHAR(7) NOT NULL,
        [TotalSessions] INT DEFAULT 0,
        [GrossEarnings] DECIMAL(18,2) DEFAULT 0.00,
        [CommissionRate] DECIMAL(5,2) DEFAULT 40.00,
        [NetPayout] DECIMAL(18,2) DEFAULT 0.00,
        [IsPaid] BIT DEFAULT 0,
        [PaymentDate] DATETIME NULL,
        CONSTRAINT [FK_TherapistPayroll_Therapists] FOREIGN KEY ([TherapistId]) 
            REFERENCES [dbo].[Therapists] ([Id]) ON DELETE CASCADE
    );
END;

-- 3. ODA MÜSAİTLİK VE ZAMAN KISITLARI TABLOSU (1:N İLİŞKİ)
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[RoomAvailabilities]') AND type in (N'U'))
BEGIN
    CREATE TABLE [dbo].[RoomAvailabilities] (
        [Id] INT IDENTITY(1,1) PRIMARY KEY,
        [RoomId] INT NOT NULL,
        [DayOfWeek] INT NOT NULL,
        [StartTime] TIME NOT NULL,
        [EndTime] TIME NOT NULL,
        [IsActive] BIT DEFAULT 1,
        CONSTRAINT [FK_RoomAvailabilities_Rooms] FOREIGN KEY ([RoomId]) 
            REFERENCES [dbo].[Rooms] ([Id]) ON DELETE CASCADE
    );
END;
